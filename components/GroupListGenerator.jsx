import { ScrollView, View, Text, StyleSheet, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

const GroupListGenerator = ({ allGroups }) => {
  const navigation = useNavigation();
  return (
    <ScrollView>
      {allGroups.map((group) => {
        return (
          <View key={group._id} style={styles.container}>
            <Text style={styles.title}>{group.title}</Text>
            <Text style={styles.description}>{group.description}</Text>
            <Text style={styles.location}>Category: {group.category}</Text>
            <Button
              title="View Group"
              onPress={() =>
                navigation.navigate("Group Details", { _id: group._id })
              }
            />
          </View>
        );
      })}
    </ScrollView>
  );
};

export default GroupListGenerator;

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
