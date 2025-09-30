import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function ConfirmationScreen() {
  const navigation = useNavigation();

  // Mocked values for now
  const selectedDate = '2025-10-02';
  const selectedTime = '10:30 AM';

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Appointment Confirmed</Text>
      <Text style={styles.details}>Your appointment has been booked successfully.</Text>

      <View style={styles.infoBox}>
        <Text style={styles.infoLabel}>Date:</Text>
        <Text style={styles.infoValue}>{selectedDate}</Text>
        <Text style={styles.infoLabel}>Time:</Text>
        <Text style={styles.infoValue}>{selectedTime}</Text>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={styles.buttonText}>Done</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 12,
    textAlign: 'center',
    color: '#333',
  },
  details: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 24,
    color: '#666',
  },
  infoBox: {
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    padding: 16,
    marginBottom: 24,
    alignItems: 'center',
  },
  infoLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#444',
  },
  infoValue: {
    fontSize: 18,
    marginBottom: 8,
    color: '#222',
  },
  button: {
    backgroundColor: '#f57c00',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
    alignSelf: 'center',
    width: '60%',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
