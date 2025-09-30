import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { useNavigation } from '@react-navigation/native';

export default function BookingScreen() {
  const navigation = useNavigation();
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  const timeSlots = ['09:00 AM', '10:30 AM', '12:00 PM', '02:00 PM', '03:30 PM'];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Book Appointment</Text>

      <Text style={styles.label}>Select Date</Text>
      <Calendar
        onDayPress={(day) => setSelectedDate(day.dateString)}
        markedDates={{
          [selectedDate]: { selected: true, selectedColor: '#f57c00' },
        }}
        style={styles.calendar}
      />

      <Text style={styles.label}>Select Time</Text>
      <View style={styles.timeContainer}>
        {timeSlots.map((slot) => (
          <TouchableOpacity
            key={slot}
            style={[
              styles.timeSlot,
              selectedTime === slot && styles.selectedTimeSlot,
            ]}
            onPress={() => setSelectedTime(slot)}
          >
            <Text
              style={[
                styles.timeText,
                selectedTime === slot && styles.selectedTimeText,
              ]}
            >
              {slot}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Confirmation')}
        disabled={!selectedDate || !selectedTime}
      >
        <Text style={styles.buttonText}>Confirm Appointment</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.goBack()}>
  <Text style={styles.link}>← Back</Text>
</TouchableOpacity>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333',
  },
  label: {
    fontSize: 18,
    fontWeight: '600',
    marginVertical: 12,
    color: '#444',
  },
  calendar: {
    marginBottom: 16,
  },
  timeContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  timeSlot: {
    padding: 12,
    borderRadius: 8,
    backgroundColor: '#eee',
    marginBottom: 12,
    width: '30%',
    alignItems: 'center',
  },
  selectedTimeSlot: {
    backgroundColor: '#f57c00',
  },
  timeText: {
    fontSize: 14,
    color: '#333',
  },
  selectedTimeText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#f57c00',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 24,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
