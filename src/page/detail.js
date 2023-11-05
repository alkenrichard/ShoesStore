import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableWithoutFeedback,
  Animated,
} from "react-native";
import React, { useState, useRef, useEffect } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function Detail() {
  const size = [
    {
      id: 1,
      size: 40,
    },
    {
      id: 2,
      size: 41,
    },
    {
      id: 3,
      size: 42,
    },
    {
      id: 4,
      size: 43,
    },
    {
      id: 5,
      size: 44,
    },
    {
      id: 6,
      size: 45,
    },
    {
      id: 7,
      size: 46,
    },
  ];

  const color = [
    {
      id: 1,
      color: "#000",
    },
  ];

  const [open, setOpen] = useState({ size: false, color: false });
  const [selected, setSelected] = useState({ size: 0, color: 0 });

  const openSizePick = useRef(new Animated.Value(0)).current;
  const openColorPick = useRef(new Animated.Value(0)).current;
  const scaleImage = useRef(new Animated.Value(1)).current;
  const scrollSize = useRef(null);
  const scrollColor = useRef(null);

  useEffect(() => {
    Animated.timing(scaleImage, {
      toValue: 1 + selected.size / 50,
      duration: 100,
      useNativeDriver: false,
    }).start();
  }, [selected.size]);

  useEffect(() => {
    Animated.timing(openSizePick, {
      toValue: open.size ? 1 : 0,
      duration: 300,
      useNativeDriver: false,
    }).start();
  }, [open.size]);

  useEffect(() => {
    Animated.timing(openColorPick, {
      toValue: open.color ? 1 : 0,
      duration: 300,
      useNativeDriver: false,
    }).start();
  }, [open.color]);

  const heightColor = openColorPick.interpolate({
    inputRange: [0, 1],
    outputRange: ["12%", "40%"],
  });

  const heightSize = openSizePick.interpolate({
    inputRange: [0, 1],
    outputRange: ["12%", "80%"],
  });

  const handleOpen = (object, index) => {
    if (object === "size") {
      setOpen({ ...open, [object]: !open.size });
      if (scrollSize.current) {
        if (open.size) {
          scrollSize.current.scrollToIndex({ index, animated: true });
        }
      }
    } else {
      setOpen({ ...open, [object]: !open.color });
      if (scrollColor.current) {
        if (open.color) {
          scrollColor.current.scrollToIndex({ index, animated: true });
        }
      }
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={"white"} barStyle={"dark-content"} />

      {/* HEADER */}
      <View style={styles.containerHeader}>
        <Ionicons name="chevron-back" color={"black"} size={25} />
        <Ionicons name="heart-outline" color={"black"} size={30} />
      </View>

      {/* TITLE */}
      <View style={styles.containerTitle}>
        <View style={styles.title}>
          <Text style={{ fontSize: 20, fontWeight: "800" }}>
            Nike Structure 25
          </Text>
          <Text style={{ fontSize: 14, fontWeight: "400" }}>
            Road Running Shoes
          </Text>
        </View>
        <View style={styles.containerRating}>
          <Text style={styles.rating}>
            4.5 <Ionicons name="star" color={"#ffb036"} size={10} />
          </Text>
        </View>
      </View>

      {/* PRODUCT */}
      <View style={styles.containerProduct}>
        <View style={styles.containerSize}>
          <TouchableWithoutFeedback
            onPress={() => handleOpen("size", selected.size)}
          >
            <Text style={{ fontSize: 15, fontWeight: "700", marginBottom: 5 }}>
              Size
            </Text>
          </TouchableWithoutFeedback>

          <Animated.View style={{ height: heightSize }}>
            <FlatList
              ref={scrollSize}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{
                height: Object.keys(size).length * 50,
                justifyContent: "space-between",
              }}
              scrollEnabled={open.size ? true : false}
              data={size}
              renderItem={({ item, index }) => (
                <TouchableWithoutFeedback
                  onPress={() => setSelected({ ...selected, ["size"]: index })}
                >
                  <View
                    style={[
                      styles.containerSizePicker,
                      { borderWidth: selected.size === index ? 1.5 : 0 },
                    ]}
                  >
                    <Text style={styles.size}>{item.size}</Text>
                  </View>
                </TouchableWithoutFeedback>
              )}
              keyExtractor={(item) => item.id}
            />
          </Animated.View>
          <View>
            <Ionicons
              name={open.size ? "chevron-up-outline" : "chevron-down-outline"}
              color={"black"}
              size={20}
            />
          </View>
        </View>

        <View style={styles.containerImage}>
          <Animated.Image
            source={require("../asset/shoe1/1.png")}
            style={[
              styles.image,
              { transform: [{ scale: scaleImage }, { rotate: "-45deg" }] },
            ]}
          />
        </View>

        <View style={styles.containerColor}>
          <TouchableWithoutFeedback
            onPress={() => handleOpen("color", selected.color)}
          >
            <Text style={{ fontSize: 15, fontWeight: "700", marginBottom: 5 }}>
              Color
            </Text>
          </TouchableWithoutFeedback>
          <Animated.View style={{ height: heightColor }}>
            <FlatList
              ref={scrollColor}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{
                height: Object.keys(color).length * 40,
                justifyContent: "space-between",
              }}
              scrollEnabled={open.size ? true : false}
              data={color}
              renderItem={({ item, index }) => (
                <TouchableWithoutFeedback
                  onPress={() => setSelected({ ...selected, ["color"]: index })}
                >
                  <View
                    style={[
                      styles.containerColorPick,
                      { borderWidth: index === selected.color ? 1.5 : 0 },
                    ]}
                  >
                    <View
                      style={[
                        styles.colorPick,
                        { backgroundColor: item.color },
                      ]}
                    />
                  </View>
                </TouchableWithoutFeedback>
              )}
              keyExtractor={(item) => item.id}
            />
          </Animated.View>
          {Object.keys(color).length > 1 && (
            <View>
              <Ionicons
                name={
                  open.color ? "chevron-up-outline" : "chevron-down-outline"
                }
                color={"black"}
                size={20}
              />
            </View>
          )}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  containerHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginTop: 10,
  },

  containerTitle: {
    marginHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    alignItems: "center",
  },

  rating: {
    fontSize: 16,
    fontWeight: "700",
  },

  containerProduct: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginTop: 20,
    height: "44%",
  },

  containerSize: {
    width: "12.5%",
    alignItems: "center",
  },

  containerImage: {
    width: "70%",
    alignItems: "center",
    justifyContent: "center",
  },

  containerColor: {
    width: "12.5%",
    alignItems: "center",
  },

  image: {
    width: "100%",
    resizeMode: "contain",
    height: "50%",
    zIndex: -1,
    position: "relative",
  },

  containerSizePicker: {
    backgroundColor: "#00000009",
    height: 35,
    width: 35,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 40,
  },

  size: {
    fontSize: 15,
    fontWeight: "400",
  },

  containerColorPick: {
    width: 35,
    height: 35,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
  },

  colorPick: {
    height: 25,
    width: 25,
    borderRadius: 40,
  },
});
