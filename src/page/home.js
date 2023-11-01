import { StyleSheet, Text, View, StatusBar } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <View style={styles.hamburgerMenu}>
          <View style={[styles.hamburger, { width: "50%" }]} />
          <View style={[styles.hamburger, { width: "100%" }]} />
          <View style={[styles.hamburger, { width: "70%" }]} />
        </View>
        <View style={styles.containercart}>
          <Ionicons name="basket-outline" color={"black"} size={25} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: 20,
  },

  containerHeader: {
    marginTop: StatusBar.currentHeight + 10,
    width: "100%",
    height: "5%",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },

  hamburgerMenu: {
    justifyContent: "space-between",
    height: "50%",
    width: "8%",
  },

  hamburger: {
    borderRadius: 10,
    height: 2.5,
    backgroundColor: "black",
  },

  containercart: {
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});
