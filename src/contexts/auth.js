import React, {useState, createContext, useEffect} from 'react';
import firebase from '../services/firebaseConnection';
// import AsyncStorage from '@react-native-community/async-storage';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext({});

function AuthProvider({children}) {
  const [user, setUser] = useState(null);
  const [favorities, setFavorities] = useState(null);
  const [loading, setLoading] = useState(true);
  const [loadingAuth, setLoadingAuth] = useState(false);

  useEffect(() => {
    async function loadStorage() {
      const storageUser = await AsyncStorage.getItem('Auth_user');
      if (storageUser) {
        setUser(JSON.parse(storageUser));
        setLoading(false);
      }
      setLoading(false);
    }

    loadStorage();
  }, []);

  //Funcao para logar o usario
  async function signIn(email, password) {
    setLoadingAuth(true);
    await firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(async value => {
        let uid = value.user.uid;
        await firebase
          .database()
          .ref('users')
          .child(uid)
          .once('value')
          .then(snapshot => {
            let data = {
              uid: uid,
              nome: snapshot.val().nome,
              email: value.user.email,
            };

            setUser(data);
            storageUser(data);

            setLoadingAuth(false);
          });
      })
      .catch(error => {
        alert(error.code);
        setLoadingAuth(false);
      });
  }

  //Cadastrar usuario
  async function signUp(email, password, nome) {
    setLoadingAuth(true);
    await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async value => {
        let uid = value.user.uid;
        await firebase
          .database()
          .ref('users')
          .child(uid)
          .set({
            nome: nome,
          })
          .then(() => {
            let data = {
              uid: uid,
              nome: nome,
              email: value.user.email,
            };
            setUser(data);
            storageUser(data);
            setLoadingAuth(false);
          });
      })
      .catch(error => {
        alert(error.code);
        setLoadingAuth(false);
      });
  }

  async function storageUser(data) {
    await AsyncStorage.setItem('Auth_user', JSON.stringify(data));
  }

  async function signOut() {
    await firebase.auth().signOut();
    await AsyncStorage.clear().then(() => {
      setUser(null);
    });
  }

  async function getAllFavorities() {
    let uid = user.uid;

    await firebase
      .database()
      .ref('favorites')
      .child(uid)
      .once('value', async snapshot => {
        if (!snapshot.exists()) {
          return;
        }

        setFavorities([]);
        let data = [];
        snapshot.forEach(childItem => {
          let list = {
            id: childItem.key,
            name: childItem.val().name,
            image: childItem.val().image,
            favorite: true,
          };
          data = oldArray => [...oldArray, list];
          setFavorities(data);
        });
      });
  }

  async function addFavorite(pokemon) {

    if (favorities.length >= 5) {
        alert("Nao eh possivel adicionar mais que 5 favoritos.");
        return;
    }
    let uid = user.uid;
    let key = pokemon.id;
    await firebase
      .database()
      .ref('favorites')
      .child(uid)
      .child(key)
      .once('value', async snapshot => {
        if (snapshot.exists()) {
          return;
        }

        await firebase.database().ref('favorites').child(uid).child(key).set({
          name: pokemon.name,
          image: pokemon.image,
        });

        await getAllFavorities();
      });
  }

  async function removeFavorite(pokemon) {
    let uid = user.uid;
    let key = pokemon.id;
    await firebase
      .database()
      .ref('favorites')
      .child(uid)
      .child(key)
      .once('value', async snapshot => {
        if (!snapshot.exists()) {
          return;
        }
        await firebase
          .database()
          .ref('favorites')
          .child(uid)
          .child(key)
          .remove();

        await getAllFavorities();
      });
  }

  return (
    <AuthContext.Provider
      value={{
        signed: !!user,
        user,
        loading,
        signUp,
        signIn,
        signOut,
        loadingAuth,
        favorities,
        addFavorite,
        removeFavorite,
        getAllFavorities,
      }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
