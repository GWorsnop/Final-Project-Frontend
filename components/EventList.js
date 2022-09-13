import React from 'react';
import { useContext } from 'react';
import { StyleSheet, ScrollView, View, Text, Button } from 'react-native';
import { EventContext } from '../contexts/EventsContext';
import { useNavigation } from '@react-navigation/native';
import { format } from 'date-fns';

const EventList = () => {
  const { events } = useContext(EventContext);

  // const start_time = format(new Date(events.startTime), 'MM/dd/yyyy');

  const navigation = useNavigation();

  return (
    <ScrollView>
      {events.map((event) => {
        return (
          <View style={styles.container} key={event._id}>
            <Text style={styles.title}>{event.title}</Text>
            <Text style={styles.description}>{event.description}</Text>
            <Text style={styles.startTime}>Start time: {event.startTime}</Text>
            <Text style={styles.endTime}>End time: {event.endTime}</Text>
            <Text style={styles.location}>{event.location}</Text>
            <Text style={''}>{event.attendees}</Text>
            <Button
              title="View Event"
              onPress={() =>
                navigation.navigate('Event Details', { _id: event._id })}
            />
          </View>
        );
      })}
    </ScrollView>
  );
};

export default EventList;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 10,
    margin: 10,
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 10
  },
  description: {
    fontSize: 16,
    paddingLeft: 10,
    paddingBottom: 10
  },
  startTime: {
    fontSize: 13,
    paddingLeft: 10,
    paddingBottom: 5
  },
  endTime: {
    fontSize: 13,
    paddingLeft: 10,
    paddingBottom: 5
  },
  location: {
    fontSize: 15,
    paddingLeft: 10,
    paddingTop: 10,
    paddingBottom: 5,
    fontWeight: 'bold'
  }
});
