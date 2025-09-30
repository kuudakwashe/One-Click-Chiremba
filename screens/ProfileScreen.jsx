import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

export default function ProfileScreen() {
  const [fullName, setFullName] = useState('Kuda Mashaya');
  const [dob, setDob] = useState('2005-01-09');
  const [phone, setPhone] = useState('0774731813');
  const [email, setEmail] = useState('mashayahanyak@gmail.com');
  const [medicalAid, setMedicalAid] = useState('PSMAS');

  const medicalAidOptions = [
    { label: 'PSMAS', value: 'PSMAS' },
    { label: 'First Mutual', value: 'First Mutual' },
    { label: 'Cimas', value: 'Cimas' },
    { label: 'Premier Service', value: 'Premier Service' },
    { label: 'None', value: 'None' },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={require('../assets/avatar.png')} // Replace with actual avatar
        style={styles.avatar}
      />
      <Text style={styles.title}>Your Profile</Text>

      <TextInput
        style={styles.input}
        placeholder="Full Name"
        value={fullName}
        onChangeText={setFullName}
      />

      <TextInput
        style={styles.input}
        placeholder="Date of Birth (YYYY-MM-DD)"
        value={dob}
        onChangeText={setDob}
      />

      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        keyboardType="phone-pad"
        value={phone}
        onChangeText={setPhone}
      />

      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />

      <RNPickerSelect
        onValueChange={setMedicalAid}
        items={medicalAidOptions}
        placeholder={{ label: 'Select Medical Aid', value: null }}
        style={pickerStyles}
        value={medicalAid}
      />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Save Changes</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: '#fff',
    flexGrow: 1,
    alignItems: 'center',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 12,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 12,
    fontSize: 16,
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#f57c00',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
    width: '100%',
    marginTop: 12,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

const pickerStyles = {
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    color: 'black',
    paddingRight: 30,
    marginBottom: 16,
    width: '100%',
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    color: 'black',
    paddingRight: 30,
    marginBottom: 16,
    width: '100%',
  },
};
