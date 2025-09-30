import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { useNavigation } from '@react-navigation/native';

export default function SearchScreen() {
  const navigation = useNavigation();

  const [specialty, setSpecialty] = useState('');
  const [location, setLocation] = useState('');
  const [medicalAid, setMedicalAid] = useState('');

  const mockResults = [
    { id: 1, name: 'Dr. Rudo Nyathi', specialty: 'Cardiologist', location: 'Harare', rating: 4.8 },
    { id: 2, name: 'Dr. Tapiwa Moyo', specialty: 'Dentist', location: 'Bulawayo', rating: 4.6 },
  ];

  const medicalAidOptions = [
    { label: 'PSMAS', value: 'PSMAS' },
    { label: 'First Mutual', value: 'First Mutual' },
    { label: 'Cimas', value: 'Cimas' },
    { label: 'Premier Service', value: 'Premier Service' },
    { label: 'None', value: 'None' },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Find a Doctor</Text>

      <TextInput
        style={styles.input}
        placeholder="Specialty (e.g. Dentist)"
        value={specialty}
        onChangeText={setSpecialty}
      />

      <TextInput
        style={styles.input}
        placeholder="Location (e.g. Harare)"
        value={location}
        onChangeText={setLocation}
      />

      <RNPickerSelect
        onValueChange={setMedicalAid}
        items={medicalAidOptions}
        placeholder={{ label: 'Select Medical Aid', value: null }}
        style={pickerStyles}
        value={medicalAid}
      />

      <Text style={styles.subtitle}>Search Results</Text>
      {mockResults.map((doc) => (
        <TouchableOpacity
          key={doc.id}
          style={styles.resultCard}
          onPress={() => navigation.navigate('DoctorProfile')}
        >
          <Text style={styles.resultName}>{doc.name}</Text>
          <Text style={styles.resultDetails}>{doc.specialty} • {doc.location}</Text>
          <Text style={styles.resultRating}>⭐ {doc.rating}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 24,
    marginBottom: 12,
    color: '#444',
  },
  resultCard: {
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    padding: 16,
    marginBottom: 12,
  },
  resultName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  resultDetails: {
    fontSize: 14,
    color: '#666',
    marginVertical: 4,
  },
  resultRating: {
    fontSize: 14,
    color: '#333',
  },
});

const pickerStyles = {
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30,
    marginBottom: 16,
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30,
    marginBottom: 16,
  },
};
