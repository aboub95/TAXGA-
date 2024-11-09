import React, { useState } from 'react';
import {ScrollView, View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';

const ProfileScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');

  return (
    <ScrollView contentContainerStyle={styles.container}>
    <View style={styles.container}>
      {/* Profile Picture Section */}
      <View style={styles.profileContainer}>
        <Image
          source={{ uri: 'https://via.placeholder.com/100' }} // Placeholder for profile picture
          style={styles.profileImage}
        />
        <TouchableOpacity style={styles.editIcon}>
          {/* Icon for editing the profile picture (you can replace it with an actual icon) */}
          <Text style={styles.editIconText}>📷</Text>
        </TouchableOpacity>
      </View>

      {/* Form Section */}
      <View style={styles.form}>
        {/* Name Input */}
        <Text style={styles.label}>Nom</Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={setName}
        />

        {/* Email Input */}
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />

        {/* Password Input */}
        <Text style={styles.label}>Mot de passe</Text>
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        {/* Phone Number Input */}
        <Text style={styles.label}>Téléphone</Text>
        <TextInput
          style={styles.input}
          value={phone}
          onChangeText={setPhone}
          keyboardType="phone-pad"
        />
      </View>

      {/* Save Button */}
      <TouchableOpacity style={styles.saveButton}>
        <Text style={styles.saveButtonText}>Enregistrer</Text>
      </TouchableOpacity>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 20,
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#ddd',
    marginBottom: 10,
  },
  editIcon: {
    position: 'absolute',
    bottom: 0,
    right: 10,
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 5,
  },
  editIconText: {
    fontSize: 14,
  },
  form: {
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    color: '#333',
    marginBottom: 5,
  },
  input: {
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
    backgroundColor: '#fff',
    fontSize: 16,
  },
  saveButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 15,
    alignItems: 'center',
    borderRadius: 10,
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ProfileScreen;
