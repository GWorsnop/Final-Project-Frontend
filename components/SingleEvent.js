import React, { useEffect, useState } from 'react';
import { getSingleEvent } from '../api';
import { View, Text, StyleSheet } from 'react-native';
import { format } from 'date-fns';

const SingleEvent = ({ route }) => {
  const [ event, setEvent ] = useState({});
  const { _id } = route.params;

  useEffect(() => {
    getSingleEvent(_id)
      .then((event) => {
        setEvent(event);
      })
      .catch((err) => console.log('singleeventerr >>>>', err));
  }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.host}>hosted by: {event.host}</Text>
      <Text style={styles.title}>{event.title}</Text>
      <Text style={styles.description}>{event.description}</Text>
      <Text style={styles.startTime}>{event.startTime}</Text>
      <Text style={styles.endTime}>{event.endTime}</Text>
      <Text style={styles.location}>{event.location}</Text>
    </View>
  );
};

export default SingleEvent;

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
  host: {
    paddingLeft: 10
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
