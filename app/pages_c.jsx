import React from 'react';
import {ScrollView, View, Text, Image, Button, StyleSheet, TouchableOpacity } from 'react-native';

const RideScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
    <View style={styles.container}>
      {/* Map View (placeholder for map component) */}
      <View style={styles.mapContainer}>
      <Image  resizeMode="cover" source={require('@/assets/images/map.gif')} style={styles.mapContainer} />
        {/* <Text style={styles.mapText}>Map Placeholder</Text> */}
      </View>

      {/* Payment Information */}
      <View style={styles.paymentContainer}>
        <Text style={styles.paymentText}>Payer</Text>
        <Text style={styles.amount}>2000 FCFA</Text>
        <Text style={styles.address}>Boulevard - Carrefour bamboche</Text>

        {/* Driver Info */}
        <View style={styles.driverInfo}>
          <Image
            source={{ uri: 'https://via.placeholder.com/50' }} // Replace with real image URI
            style={styles.driverImage}
          />
          <View style={styles.driverDetails}>
            <Text style={styles.driverName}>Moussavou Richard</Text>
            <Text style={styles.rating}>4.7 ★</Text>
          </View>
          {/* Call Button */}
          <TouchableOpacity style={styles.callButton}>
            <Text style={styles.callText}>Call</Text>
          </TouchableOpacity>
        </View>

        {/* Confirm Payment Button */}
        <TouchableOpacity style={styles.paymentButton}>
          <Text style={styles.paymentButtonText}>Confirmer le paiement</Text>
        </TouchableOpacity>
      </View>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  mapContainer: {
    flex: 2,
    backgroundColor: '#e0e0e0', // Placeholder color for the map
    justifyContent: 'center',
    alignItems: 'center',
  },
  mapText: {
    fontSize: 18,
    color: '#888',
  },
  paymentContainer: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  paymentText: {
    fontSize: 16,
    color: '#333',
  },
  amount: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#4CAF50',
  },
  address: {
    fontSize: 14,
    color: '#777',
    marginTop: 5,
  },
  driverInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
  },
  driverImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  driverDetails: {
    flex: 1,
  },
  driverName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  rating: {
    fontSize: 14,
    color: '#888',
  },
  callButton: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
  },
  callText: {
    color: '#fff',
    fontSize: 14,
  },
  paymentButton: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
    alignItems: 'center',
  },
  paymentButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default RideScreen;
