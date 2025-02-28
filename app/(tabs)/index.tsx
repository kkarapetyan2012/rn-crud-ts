// import React from 'react';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import UserListScreen from '../screens/UserListScreen';
// import UserFormScreen from '../screens/UserFormScreen';

// const Tab = createBottomTabNavigator();

// const HomeScreen = () => {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen name="UserList" component={UserListScreen} />
//       <Tab.Screen name="AddUser" component={UserFormScreen} />
//     </Tab.Navigator>
//   );
// };

// export default HomeScreen;


import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import UserListScreen from '../screens/UserListScreen';
import UserFormScreen from '../screens/UserFormScreen';
import UserDetailScreen from '../screens/UserDetailScreen'; // Import the detail screen

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// Stack Navigator for User List and Details
const UserStack = () => {
  return (
    <Stack.Navigator initialRouteName="UserList">
      <Stack.Screen 
        name="UserList" 
        component={UserListScreen} />
      <Stack.Screen name="UserDetail" component={UserDetailScreen} />
    </Stack.Navigator>
  );
};

// Main Tab Navigator
const HomeScreen = () => {
  return (
    <Tab.Navigator>
      {/* First tab - User List and Detail managed by stack */}
      <Tab.Screen 
        name="Users" 
        component={UserStack} 
        options={{ headerShown: false }}  // Hide header for UserList 
      />
      
      {/* Second tab - Add User form */}
      <Tab.Screen name="AddUser" component={UserFormScreen} />
    </Tab.Navigator>
  );
};

export default HomeScreen;
