// import React from 'react';
// import {createDrawerNavigator} from '@react-navigation/drawer';

// import Home from '../pages/Home';
// import Detail from '../pages/Detail';
// // import Profile from '../pages/Profile';
// import CustomDrawer from '../components/CustomContentDrawer';

// const AppDrawer = createDrawerNavigator();

// function AppRoutes() {
//   let config = {
//     activeTintColor: '#FFF',
//     activeBackgroundColor: '#c62c36',
//     inactiveBackgroundColor: '#000',
//     inactiveTintColor: '#DDD',
//   };

//   return (
//     <AppDrawer.Navigator
//       drawerContent={props => <CustomDrawer {...{...props, ...config}} />}
//       screenOptions={{
//         headerShown: false,
//         drawerStyle: {
//           backgroundColor: 'rgb(31, 31, 31)',
//         },
//         headerStyle: {
//           backgroundColor: 'rgb(255, 255, 255)',
//         },
//       }}>
//       <AppDrawer.Screen name="Home" component={Home} />
//       <AppDrawer.Screen name="Favorites" component={Home} />
//       <AppDrawer.Screen name="Details" component={Detail} />
//     </AppDrawer.Navigator>
//   );
// }

// export default AppRoutes;
