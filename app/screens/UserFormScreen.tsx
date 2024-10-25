import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';

type User = {
  id: string;
  name: string;
  age: number;
  email: string;
  position: string;
  isFinished: boolean;
};

const UserFormScreen = ({ route, navigation }: { route: any, navigation: any }) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState<number>(0);
  const [email, setEmail] = useState('');
  const [position, setPosition] = useState('');
  const [isFinished, setIsFinished] = useState(false);

  const isEditing = !!route.params?.user;

  useEffect(() => {
    if (isEditing) {
      // Pre-fill the form with the user's data if editing
      const { user } = route.params;
      setName(user.name);
      setAge(user.age);
      setEmail(user.email);
      setPosition(user.position);
      setIsFinished(user.isFinished);
    } else {
      // Reset the form if adding a new user
      resetForm();
    }
  }, [route.params]);

  const resetForm = () => {
    setName('');
    setAge(0);
    setEmail('');
    setPosition('');
    setIsFinished(false);
  };

  const handleSubmit = () => {
    if (!name || !email || !position) {
      Alert.alert("Error", "Please fill all fields.");
      return;
    }

    const newUser: User = {
      id: isEditing ? route.params.user.id : Date.now().toString(),
      name,
      age,
      email,
      position,
      isFinished
    };

    if (isEditing) {
      // Update existing user and navigate back to user list
      navigation.navigate('UserList', { editedUser: newUser });
    } else {
      // Add new user and navigate back to user list
      navigation.navigate('UserList', { newUser });
    }

    resetForm(); // Clear the form after submission
  };

  return (
    <View style={styles.formContainer}>
      <TextInput placeholder="Name" value={name} onChangeText={setName} style={styles.input} />
      <TextInput placeholder="Age" value={String(age)} onChangeText={(val) => setAge(Number(val))} style={styles.input} keyboardType="numeric" />
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} style={styles.input} />
      <TextInput placeholder="Position" value={position} onChangeText={setPosition} style={styles.input} />
      <Button title="Toggle Task Finished" onPress={() => setIsFinished(!isFinished)} />
      <Button title={isEditing ? "Update User" : "Add User"} onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    padding: 16,
  },
  input: {
    borderBottomWidth: 1,
    marginBottom: 12,
    padding: 8,
  },
});

export default UserFormScreen;
