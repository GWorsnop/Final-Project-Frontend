import { StatusBar } from "expo-status-bar";
import MapView from "react-native-maps";
import { StyleSheet, Text, View, Dimensions, Button } from "react-native";
import EventMarkerList from "./EventMarkerList";
import EventsButton from "./EventsButton";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Map = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: "#f3f3f3" }}>
      <MapView style={styles.map}>
        <EventMarkerList />
      </MapView>
      <EventsButton
      // style={{
      //   position: "absolute",
      //   // flex: 1,
      //   height: "100%",
      //   bottom: 100,
      //   // zIndex: 10
      // }}
      />
      <StatusBar style="auto" />
    </View>
  );
};

export default Map;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    flex: 1,
    // zIndex: -1,
  },
  actionButton: {
    position: "absolute",
    // flex: 1,
    height: "100%",
    bottom: 100,
    // zIndex: 10,
  },
});
