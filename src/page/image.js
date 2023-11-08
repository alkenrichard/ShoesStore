import {
  StyleSheet,
  View,
  Image,
  TouchableWithoutFeedback,
  ScrollView,
} from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function ImagePage({ route, navigation }) {
  const { image, idChoosen } = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.containerImage}>
        <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
          <View style={styles.containerBack}>
            <Ionicons name="close" color={"white"} size={30} />
          </View>
        </TouchableWithoutFeedback>
        <Image source={image} style={styles.image} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },

  containerImage: {
    width: 300,
    height: 300,
    aspectRatio: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    borderRadius: 40,
    shadowColor: "#00000090",
    elevation: 10,
  },

  image: {
    width: "80%",
    height: "50%",
    resizeMode: "contain",
  },

  containerBack: {
    backgroundColor: "red",
    position: "absolute",
    top: -20,
    borderRadius: 100,
    padding: 5,
  },

  containerImages: {
    columnGap: 50,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});
