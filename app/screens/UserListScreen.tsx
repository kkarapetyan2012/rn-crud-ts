// import React, { useState, useEffect } from 'react';
// import { View, Text, Button, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

// type User = {
//   id: string;
//   name: string;
//   age: number;
//   email: string;
//   position: string;
//   isFinished: boolean;
// };

// const UserListScreen = ({ navigation, route }: { navigation: any, route: any }) => {
//   const [users, setUsers] = useState<User[]>([
//     { id: '1', name: 'John Doe', age: 30, email: 'john@example.com', position: 'Developer', isFinished: true },
//     { id: '2', name: 'Jane Doe', age: 25, email: 'jane@example.com', position: 'Designer', isFinished: false },
//   ]);

//   // Check if a new user or an edited user is coming from the form screen
//   useEffect(() => {
//     if (route.params?.newUser) {
//       setUsers([...users, route.params.newUser]);  // Add new user
//     }

//     if (route.params?.editedUser) {
//       const updatedUsers = users.map((user) =>
//         user.id === route.params.editedUser.id ? route.params.editedUser : user
//       );
//       setUsers(updatedUsers);  // Update existing user
//     }
//   }, [route.params]);

//   const handleDeleteUser = (id: string) => {
//     setUsers(users.filter(user => user.id !== id)); // Delete user
//   };

//   const handleEditUser = (user: User) => {
//     navigation.navigate('AddUser', { user }); // Pass user to edit
//   };

//   const renderItem = ({ item }: { item: User }) => (
//     <View style={styles.userItem}>
//       <TouchableOpacity onPress={() => navigation.navigate('UserDetail', { userId: item.id })}>
//         <Text style={styles.userName}>{item.name}</Text>
//       </TouchableOpacity>
//       <Text>Age: {item.age}</Text>
//       <Text>Email: {item.email}</Text>
//       <Text>Position: {item.position}</Text>
//       <Text>Task Finished: {item.isFinished ? 'Yes' : 'No'}</Text>
//       <View style={styles.actions}>
//         <Button title="Edit" onPress={() => handleEditUser(item)} />
//         <Button title="Delete" onPress={() => handleDeleteUser(item.id)} />
//       </View>
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={users}
//         keyExtractor={(item) => item.id}
//         renderItem={renderItem}
//       />
//       <Button title="Add User" onPress={() => navigation.navigate('AddUser')} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
//   },
//   userItem: {
//     padding: 10,
//     marginVertical: 5,
//     backgroundColor: '#e0e0e0',
//   },
//   userName: {
//     fontWeight: 'bold',
//   },
//   actions: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginTop: 10,
//   },
// });

// export default UserListScreen;





import React, { useState, useEffect } from 'react';
import { View, Text, Button, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

type User = {
  id: string;
  name: string;
  age: number;
  email: string;
  position: string;
  isFinished: boolean;
};

const UserListScreen = ({ navigation, route }: { navigation: any, route: any }) => {
  const [users, setUsers] = useState<User[]>([
    { id: '1', name: 'John Doe', age: 30, email: 'john@example.com', position: 'Developer', isFinished: true },
    { id: '2', name: 'Jane Doe', age: 25, email: 'jane@example.com', position: 'Designer', isFinished: false },
  ]);

  // Check if a new user or an edited user is coming from the form screen
  useEffect(() => {
    if (route.params?.newUser) {
      setUsers([...users, route.params.newUser]);  // Add new user
    }

    if (route.params?.editedUser) {
      const updatedUsers = users.map((user) =>
        user.id === route.params.editedUser.id ? route.params.editedUser : user
      );
      setUsers(updatedUsers);  // Update existing user
    }
  }, [route.params]);

  const handleDeleteUser = (id: string) => {
    setUsers(users.filter(user => user.id !== id)); // Delete user
  };

  const handleEditUser = (user: User) => {
    navigation.navigate('AddUser', { user }); // Pass user to edit
  };

  const renderItem = ({ item }: { item: User }) => (
    <View style={styles.userItem}>
      <TouchableOpacity onPress={() => navigation.navigate('UserDetail', { user: item })}>
        <Text style={styles.userName}>{item.name}</Text>
      </TouchableOpacity>
      <Text>Age: {item.age}</Text>
      <Text>Email: {item.email}</Text>
      <Text>Position: {item.position}</Text>
      <Text>Task Finished: {item.isFinished ? 'Yes' : 'No'}</Text>
      <View style={styles.actions}>
        <Button title="Edit" onPress={() => handleEditUser(item)} />
        <Button title="Delete" onPress={() => handleDeleteUser(item.id)} />
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={users}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
      <Button title="Add User" onPress={() => navigation.navigate('AddUser')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  userItem: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#e0e0e0',
  },
  userName: {
    fontWeight: 'bold',
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
});

export default UserListScreen;
