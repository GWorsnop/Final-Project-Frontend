import { getCoordsFromLocation } from "../api";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  Animated,
  Image,
  TouchableOpacity,
  Dimensions,
  Platform,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Fontisto from "react-native-vector-icons/Fontisto";
import React, { useState } from "react";
const NewEvent = () => {
  const [location, onChangeText] = useState("");
  const [searchCoords, setSearchCoords] = useState({
    lat: 53.4808,
    lng: -2.2426,
  });
  const handleSubmit = () => {
    getCoordsFromLocation(location)
      .then((coordsFromApi) => {
        setSearchCoords(coordsFromApi);
        console.log(searchCoords);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const _map = React.useRef(null);

  return (
    <View style={styles.container}>
      <MapView
        ref={_map}
        style={styles.map}
        initialRegion={{
          latitude: 53.4808,
          longitude: -2.2426,
          latitudeDelta: 0.3,
          longitudeDelta: 0.3,
        }}
        provider={PROVIDER_GOOGLE}
      >
        <Marker
          coordinate={{
            latitude: searchCoords.lat,
            longitude: searchCoords.lng,
          }}
        ></Marker>
      </MapView>
      <View style={styles.searchBox}>
        <TextInput
          placeholder="Search here"
          placeholderTextColor="#000"
          autoCapitalize="none"
          value={location}
          style={{ flex: 1, padding: 0 }}
          onChangeText={onChangeText}
        />
        <Ionicons
          name="ios-search"
          size={20}
          onPress={() => {
            handleSubmit();
          }}
        />
      </View>
    </View>
  );
};

export default NewEvent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  searchBox: {
    position: "absolute",
    marginTop: Platform.OS === "ios" ? 40 : 20,
    flexDirection: "row",
    backgroundColor: "#fff",
    width: "90%",
    alignSelf: "center",
    borderRadius: 5,
    padding: 10,
    shadowColor: "#ccc",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 10,
  },
});
