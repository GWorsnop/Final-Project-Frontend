import React from 'react';
import { useContext } from 'react';
import { StyleSheet, ScrollView, View, Text, Button } from 'react-native';
import { EventContext } from '../contexts/EventsContext';
import { useNavigation } from '@react-navigation/native';
import { format } from 'date-fns';

const EventList = () => {
  const { events } = useContext(EventContext);

  const navigation = useNavigation();

  return (
    <ScrollView>
      {events.map((event) => {
        const date = format(new Date(event.startTime), 'd MMM yyyy');
        const start_time = format(new Date(event.startTime), 'h:mm bbb');
        const end_time = format(new Date(event.endTime), 'h:mm bbb');
        return (
          <View style={styles.container} key={event._id}>
            <Text style={styles.title}>{event.title}</Text>
            <Text style={styles.location}>{event.location}</Text>
            <Text style={styles.startTime}>Date: {date}</Text>
            <Text style={styles.startTime}>
              Times: {start_time} - {end_time}
            </Text>
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
    fontSize: 13,
    paddingLeft: 10,
    paddingTop: 10,
    paddingBottom: 5,
    fontWeight: 'bold',
    textTransform: 'uppercase'
  },
  btn: {
    color: 'orange',
    fontSize: 40,
    padding: 30
  }
});
