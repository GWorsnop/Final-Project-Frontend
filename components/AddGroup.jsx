import React, { useEffect, useState, useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Button,
  TextInput,
  Alert,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { format } from "date-fns";
import { useNavigation } from "@react-navigation/native";
import { UserContext } from "../contexts/UserContext";
import { postGroup } from "../api.js";

const AddGroup = () => {
  const { user } = useContext(UserContext);
  const navigation = useNavigation();

  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState(null);
  const [groupCategory, setGroupCategory] = useState("");
  const [newGroupName, setNewGroupName] = useState("");
  const [newGroupDescription, setNewGroupDescription] = useState("");

  const validGroupCategories = [
    "outdoors",
    "sport",
    "nightlife",
    "leisure",
    "hobbies",
    "daytrips",
    "film",
    "all", //This will be value of undefined
  ];

  const { username } = user;

  const handleSubmit = () => {
    postGroup(newGroupName, groupCategory, newGroupDescription, username)
      .then(() => {
        setGroupCategory("");
        setNewGroupDescription("");
        setNewGroupName("");

        Alert.alert("Group added!", "You can safely leave this page.", [
          {
            text: "ok",
            onPress: () => {
              navigation.navigate("Home");
            },
          },
        ]);
      })
      .catch((error) => console.log(error));
  };

  if (err) {
    return <Text style={styles.description}>{err}</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}> Create Group </Text>
      <TextInput
        style={styles.inputStyle}
        placeholder="New Group Name"
        value={newGroupName}
        onChangeText={setNewGroupName}
      />
      <Text style={styles.formLabel}>Category:</Text>
      <Picker
        style={styles.formPicker}
        selectedValue={groupCategory}
        onValueChange={(currentGroupCategory) =>
          setGroupCategory(currentGroupCategory)
        }
      >
        {validGroupCategories.map((category, index) => {
          return (
            <Picker.Item
              key={index}
              label={category}
              value={category !== "all" ? category : ""}
            />
          );
        })}
      </Picker>
      <TextInput
        style={styles.inputStyle}
        placeholder="Please provide a short description"
        value={newGroupDescription}
        onChangeText={setNewGroupDescription}
      />
      <Button
        title="Create+"
        color="#FF6347"
        onPress={handleSubmit}
        disabled={newGroupName === "" ? true : false}
      />
    </View>
  );
};

export default AddGroup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E6E6FA",
    alignItems: "center",
    // justifyContent: "center",
  },

  formPicker: {
    color: "black",
    fontSize: 20,
    paddingTop: 0,
    paddingHorizontal: 90,
    borderRadius: 50,
    backgroundColor: "white",
    margin: 10,
  },

  formLabel: {
    fontSize: 20,
    color: "#fff",
    marginTop: 20,
  },
  inputStyle: {
    marginTop: 20,
    marginBottom: 10,
    width: 300,
    height: 40,
    paddingHorizontal: 10,
    borderRadius: 50,
    backgroundColor: "white",
  },
  formText: {
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    fontSize: 20,
  },
  text: {
    color: "#fff",
    fontSize: 20,
  },
});
