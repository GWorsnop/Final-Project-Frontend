import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { getEventMessages } from '../api';
import { format, formatDistance } from 'date-fns';

const EventMessages = ({ _id, event }) => {
  const [ messages, setMessages ] = useState([]);

  useEffect(
    () => {
      getEventMessages(_id).then((messagesFromApi) => {
        const filtered = messagesFromApi.filter((msg) => msg.eventTag === _id);
        setMessages(filtered);
      });
    },
    [ event ]
  );
  return (
    <ScrollView>
      {messages.map((message) => {
        const createdAt = formatDistance(
          new Date(message.createdAt),
          Date.now(),
          { addSuffix: true, includeSeconds: true }
          //   'd MMM yyyy @ h:mm:ss bbb'
        );
        return (
          <View style={styles.container} key={message._id}>
            <Text style={styles.description}>{message.message}</Text>
            <Text style={styles.date}>{createdAt}</Text>
          </View>
        );
      })}
    </ScrollView>
  );
};

export default EventMessages;

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
