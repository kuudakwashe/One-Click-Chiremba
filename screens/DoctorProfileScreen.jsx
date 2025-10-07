import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

export default function DoctorProfileScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const doctor = route.params?.doctor;

  if (!doctor) {
    return (
      <View style={styles.container}>
        <Text style={styles.error}>No doctor data provided.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{doctor.name}</Text>
      <Text style={styles.specialty}>{doctor.specialty}</Text>
      <Text style={styles.location}>Location: {doctor.location}</Text>
      <Text style={styles.price}>Consultation: {doctor.price}</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Booking', { doctor })}
      >
        <Text style={styles.buttonText}>Book Appointment</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, styles.reviewButton]}
        onPress={() => navigation.navigate('Review', { doctor })}
      >
        <Text style={styles.buttonText}>Review Doctor</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: '#fff',
    flex: 1,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  specialty: {
    fontSize: 18,
    color: '#666',
    marginBottom: 4,
  },
  location: {
    fontSize: 16,
    color: '#444',
    marginBottom: 4,
  },
  price: {
    fontSize: 16,
    color: '#333',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#f57c00',
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
    alignItems: 'center',
  },
  reviewButton: {
    backgroundColor: '#007AFF',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  error: {
    fontSize: 16,
    color: 'red',
    textAlign: 'center',
    marginTop: 40,
  },
});
