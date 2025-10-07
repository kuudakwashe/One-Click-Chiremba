import React from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
  const navigation = useNavigation();

  const featuredDoctors = [
    {
      id: 1,
      name: 'Dr. Ethan Walker',
      specialty: 'Dermatologist',
      location: 'Wilkins Hospital',
      price: '$85',
    },
    {
      id: 2,
      name: 'Dr. Sophia Turner',
      specialty: 'Gyn Oncologist',
      location: 'PMI Parirenyatwa',
      price: '$130',
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>One-click-Chiremba</Text>

      <TextInput
        style={styles.searchBar}
        placeholder="Search doctors, specialties..."
        placeholderTextColor="#999"
      />

      <Text style={styles.sectionTitle}>Featured Updates</Text>
      <View style={styles.featuredCard}>
        <Image
          source={require('../assets/conference.jpg')}
          style={styles.featuredImage}
        />
        <Text style={styles.featuredText}>
          Dr. Glory • Dr. Emma Conference — This Tuesday • ZB Central
        </Text>
      </View>

      <Text style={styles.sectionTitle}>Top Doctors</Text>
      {featuredDoctors.map((doc) => (
        <TouchableOpacity
          key={doc.id}
          style={styles.doctorCard}
          onPress={() => navigation.navigate('DoctorProfile', { doctor: doc })}
        >
          <Image
            source={require('../assets/avatar.png')}
            style={styles.avatar}
          />
          <View style={styles.info}>
            <Text style={styles.name}>{doc.name}</Text>
            <Text style={styles.specialty}>{doc.specialty}</Text>
            <Text style={styles.location}>{doc.location}</Text>
            <Text style={styles.price}>{doc.price}</Text>
            <View style={styles.bookButton}>
              <Text style={styles.bookText}>Book now</Text>
            </View>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#f57c00',
    marginBottom: 12,
    textAlign: 'center',
  },
  searchBar: {
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    padding: 12,
    fontSize: 16,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 12,
    color: '#333',
  },
  featuredCard: {
    backgroundColor: '#e0f7fa',
    borderRadius: 10,
    padding: 12,
    marginBottom: 20,
  },
  featuredImage: {
    width: '100%',
    height: 120,
    borderRadius: 8,
    marginBottom: 8,
  },
  featuredText: {
    fontSize: 14,
    color: '#444',
  },
  doctorCard: {
    flexDirection: 'row',
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    padding: 12,
    marginBottom: 16,
    alignItems: 'center',
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 12,
  },
  info: {
    flex: 1,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  specialty: {
    fontSize: 14,
    color: '#666',
  },
  location: {
    fontSize: 13,
    color: '#999',
  },
  price: {
    fontSize: 14,
    color: '#333',
    marginTop: 4,
  },
  bookButton: {
    backgroundColor: '#f57c00',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 6,
    marginTop: 8,
    alignSelf: 'flex-start',
  },
  bookText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 13,
  },
});
