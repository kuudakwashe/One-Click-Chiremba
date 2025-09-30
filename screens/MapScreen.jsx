import React from 'react';
import { View, Text, TextInput, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';
import { useNavigation } from '@react-navigation/native';

export default function MapScreen() {
  const navigation = useNavigation();

  const doctors = [
    {
      id: 1,
      name: 'Dr. Nyasha Dube',
      specialty: 'General Practitioner',
      latitude: -17.8292,
      longitude: 31.0522,
    },
    {
      id: 2,
      name: 'Dr. Tafadzwa Chirwa',
      specialty: 'Dentist',
      latitude: -17.8310,
      longitude: 31.0450,
    },
  ];

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="Search Medical Facilities..."
        placeholderTextColor="#999"
      />

      <MapView
        style={styles.map}
        initialRegion={{
          latitude: -17.8292,
          longitude: 31.0522,
          latitudeDelta: 0.02,
          longitudeDelta: 0.02,
        }}
      >
        {doctors.map((doc) => (
          <Marker
            key={doc.id}
            coordinate={{ latitude: doc.latitude, longitude: doc.longitude }}
            title={doc.name}
            description={doc.specialty}
          >
            <Callout onPress={() => navigation.navigate('DoctorProfile', { doctorId: doc })}>
              <View style={styles.callout}>
                <Text style={styles.name}>{doc.name}</Text>
                <Text style={styles.specialty}>{doc.specialty}</Text>
                <TouchableOpacity style={styles.button}>
                  <Text style={styles.buttonText}>View Profile</Text>
                </TouchableOpacity>
              </View>
            </Callout>
          </Marker>
        ))}
      </MapView>

      <View style={styles.bottomButtons}>
        <TouchableOpacity style={styles.filterButton}>
          <Text style={styles.filterText}>Filters</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.languageButton}>
          <Text style={styles.filterText}>Language</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  searchBar: {
    position: 'absolute',
    top: 20,
    left: 16,
    right: 16,
    zIndex: 1,
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    padding: 12,
    fontSize: 16,
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  callout: {
    width: 160,
    padding: 8,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  specialty: {
    fontSize: 14,
    color: '#666',
    marginBottom: 6,
  },
  button: {
    backgroundColor: '#f57c00',
    padding: 6,
    borderRadius: 6,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 13,
    fontWeight: '600',
  },
  bottomButtons: {
    position: 'absolute',
    bottom: 20,
    left: 16,
    right: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  filterButton: {
    backgroundColor: '#f57c00',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  languageButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  filterText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
