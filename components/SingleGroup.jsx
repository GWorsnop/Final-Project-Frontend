import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView, Button } from "react-native";
import { format } from "date-fns";
import { getGroupByID, getEvents } from "../api";
import { useNavigation } from "@react-navigation/native";

const SingleGroup = ({ route }) => {
  const navigation = useNavigation();
  const [group, setGroup] = useState({});
  const { _id } = route.params;
  const [groupEvents, setGroupEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    setErr(null);
    getGroupByID(_id).then((fetchedGroup) => {
      setGroup(fetchedGroup);
      setIsLoading(false);
    });
    setIsLoading(true);
    getEvents()
      .then((events) => {
        const filteredGroupEvents = events.filter(
          (event) => event.group === _id
        );
        setGroupEvents(filteredGroupEvents);
        setIsLoading(false);
      })
      .catch((error) =>
        setErr(`${error.response.status} ${error.response.statusText}`)
      );
  }, []);

  if (isLoading) {
    return <Text style={styles.description}>Loading...</Text>;
  }

  if (err) {
    return <Text style={styles.description}>{err}</Text>;
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>{group.title}</Text>
        <Text style={styles.details}>Admin: {group.admin}</Text>
        <Text style={styles.details}>Category: {group.category}</Text>
        <Text style={styles.details}>
          Members:
          {group.members}
        </Text>
        <Text style={styles.description}>About: {group.description}</Text>
      </View>
      <View>
        <Text style={styles.details}>Upcoming events:</Text>
        {groupEvents.map((event) => {
          const start_time = format(
            new Date(event.startTime),
            "d MMM yyyy - h:mm bbb"
          );
          const end_time = format(
            new Date(event.endTime),
            "d MMM yyyy - h:mm bbb"
          );
          return (
            <View style={styles.container} key={event._id}>
              <Text style={styles.title}>{event.title}</Text>
              <Text style={styles.startTime}>Start time: {start_time}</Text>
              <Text style={styles.endTime}>End time: {end_time}</Text>
              <Text style={styles.details}>{event.location}</Text>
              <Text style={""}>{event.attendees}</Text>
              <Button
                title="View Event"
                onPress={() =>
                  navigation.navigate("Event Details", { _id: event._id })
                }
              />
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
};

export default SingleGroup;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "white",
    borderRadius: 5,
    padding: 10,
    margin: 10,
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  admin: {
    paddingLeft: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    padding: 10,
  },
  description: {
    fontSize: 16,
    paddingLeft: 10,
    paddingBottom: 10,
  },
  date: {
    fontSize: 14,
    paddingLeft: 10,
    paddingBottom: 15,
    fontWeight: "bold",
  },
  startTime: {
    fontSize: 13,
    paddingLeft: 10,
    paddingBottom: 5,
  },
  endTime: {
    fontSize: 13,
    paddingLeft: 10,
    paddingBottom: 5,
  },
  details: {
    fontSize: 15,
    paddingLeft: 10,
    paddingTop: 10,
    paddingBottom: 5,
    fontWeight: "bold",
  },
});
