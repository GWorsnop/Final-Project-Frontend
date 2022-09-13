import React, { useEffect, useState } from 'react';
import { getSingleEvent } from '../api';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { format } from 'date-fns';
import EventMessages from './EventMessages';

const SingleEvent = ({ route }) => {
  const [ isLoading, setIsLoading ] = useState(true);
  const [ event, setEvent ] = useState({});
  const [ startTime, setStartTime ] = useState('');
  const [ endTime, setEndTime ] = useState('');
  const [ date, setDate ] = useState('');

  const { _id } = route.params;

  useEffect(
    () => {
      getSingleEvent(_id)
        .then((event) => {
          setIsLoading(false);
          setEvent(event);
          setDate(format(new Date(event.startTime), 'd MMM yyyy'));
          setStartTime(format(new Date(event.startTime), 'h:mm bbb'));
          setEndTime(format(new Date(event.endTime), 'h:mm bbb'));
        })
        .catch((err) => console.log('singleeventerr >>>>', err));
    },
    [ event ]
  );

  if (isLoading) {
    return <Text style={styles.title}>Loading...</Text>;
  } else {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.host}>HOSTED BY: {event.host}</Text>
          <Text style={styles.title}>{event.title}</Text>
          <Text style={styles.description}>{event.description}</Text>
          <Text style={styles.date}>
            {date} - {event.location}
          </Text>
          <Text style={styles.startTime}>Start time: {startTime}</Text>
          <Text style={styles.endTime}>End time: {endTime}</Text>
        </View>
        <Text style={styles.title}> Comments </Text>
        <EventMessages _id={_id} event={event} />
      </ScrollView>
    );
  }
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
    paddingLeft: 10,
    fontSize: 10,
    textTransform: 'uppercase'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 10
  },
  description: {
    fontSize: 16,
    paddingLeft: 10,
    paddingBottom: 30,
    paddingTop: 20
  },
  date: {
    fontSize: 14,
    paddingLeft: 10,
    paddingBottom: 15,
    fontWeight: 'bold'
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
