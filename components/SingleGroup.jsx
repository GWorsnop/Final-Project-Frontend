import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { format } from "date-fns";
import { getGroupByID } from "../api";

const SingleGroup = ({ route }) => {
  const [group, setGroup] = useState({});
  const { _id } = route.params;
  console.log("this is the id", _id);

  useEffect(() => {
    getGroupByID(_id)
      .then((fetchedGroup) => {
        setGroup(fetchedGroup);
      })
      .catch((err) => console.log("Group err>>>>>>>>", err));
  }, []);
  console.log(group, "<<<<<<<<<<<group");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{group.title}</Text>
      <Text style={styles.admin}>Admin: {group.admin}</Text>
    </View>
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
  location: {
    fontSize: 15,
    paddingLeft: 10,
    paddingTop: 10,
    paddingBottom: 5,
    fontWeight: "bold",
  },
});
