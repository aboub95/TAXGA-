import React from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet, Image } from 'react-native';

import { Ionicons, FontAwesome5, MaterialIcons } from '@expo/vector-icons'; // Assurez-vous d'avoir installé react-native-vector-icons ou expo

const NoOrdersScreen = () => {
  return (
    <View style={styles.container}>
      {/* Central Icon and Text */}
      <View style={styles.content}>
       
        <Image 
          source={{ uri: 'https://via.placeholder.com/100' }}
          style={styles.icon}
        />
        <Text style={styles.title}>Aucune commande passée</Text>
        <Text style={styles.description}>
          Sélectionnez votre adresse de départ et destination, et déplacez 
          vous en toute sécurité quelque soit votre budget
        </Text>
      </View>

      {/* Bottom Tab Navigation Placeholder */}
      {/* <View style={styles.bottomTab}>
        <TouchableOpacity style={styles.tabButton}>
          <Text style={styles.tabText}>Accueil</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabButton}>
          <Text style={styles.tabText}>Aide</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabButton}>
          <Text style={[styles.tabText, styles.activeTabText]}>Récent</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabButton}>
          <Text style={styles.tabText}>Paramètres</Text>
        </TouchableOpacity>
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#A5D6A7', // Light green background
    padding: 20,
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  icon: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    color: '#555',
    paddingHorizontal: 30,
  },
  bottomTab: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  tabButton: {
    flex: 1,
    alignItems: 'center',
  },
  tabText: {
    fontSize: 12,
    color: '#999',
  },
  activeTabText: {
    color: '#000',
  },
});

export default NoOrdersScreen;
