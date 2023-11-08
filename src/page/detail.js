import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableWithoutFeedback,
  Animated,
  ScrollView,
} from "react-native";
import React, { useState, useRef, useEffect } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function Detail({ navigation }) {
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

  const gallery = [
    {
      id: 1,
      image: require("../asset/shoe1/2.png"),
    },
    {
      id: 2,
      image: require("../asset/shoe1/3.png"),
    },
    {
      id: 3,
      image: require("../asset/shoe1/4.png"),
    },
    {
      id: 4,
      image: require("../asset/shoe1/5.png"),
    },
    {
      id: 6,
      image: require("../asset/shoe1/7.png"),
    },
  ];

  const [open, setOpen] = useState({ size: false, color: false });
  const [selected, setSelected] = useState({ size: 0, color: 0 });
  const [quantity, setQuantity] = useState(1);
  const [like, setLike] = useState(false);

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
        <TouchableWithoutFeedback onPress={() => setLike(!like)}>
          <Ionicons
            name={like ? "heart" : "heart-outline"}
            color={like ? "red" : "black"}
            size={30}
          />
        </TouchableWithoutFeedback>
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

      {/* GALERY */}
      <Text style={styles.galleryText}>Gallery</Text>

      <View>
        <ScrollView
          horizontal
          contentContainerStyle={{
            left: 20,
            paddingRight: 40,
            columnGap: 15,
            height: 100,
          }}
        >
          {gallery.map((item) => (
            <TouchableWithoutFeedback
              key={item.id}
              onPress={() => {
                navigation.navigate("image", {
                  image: item.image,
                  idChoosen: item.id,
                });
              }}
            >
              <View style={styles.gallery}>
                <Image source={item.image} style={styles.galleryImage} />
              </View>
            </TouchableWithoutFeedback>
          ))}
        </ScrollView>
      </View>

      {/* QUANTITY */}
      <Text style={[styles.galleryText, { marginTop: 40 }]}>Quantity</Text>
      <View style={styles.containerQuantity}>
        <View style={styles.containerCount}>
          <TouchableWithoutFeedback onPress={() => setQuantity(quantity - 1)}>
            <View style={styles.containerButton}>
              <Ionicons name="remove" color={"black"} size={25} />
            </View>
          </TouchableWithoutFeedback>
          <Text style={styles.quantity}>{quantity}</Text>
          <TouchableWithoutFeedback onPress={() => setQuantity(quantity + 1)}>
            <View style={styles.containerButton}>
              <Ionicons name="add" color={"black"} size={25} />
            </View>
          </TouchableWithoutFeedback>
        </View>

        <View style={styles.containerSubmit}>
          <Text style={styles.price}>${132 * quantity}</Text>
          <View style={styles.addition} />
          <Text style={{ color: "white", fontWeight: "500" }}>Add to Cart</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
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

  galleryText: {
    marginBottom: 10,
    marginLeft: 20,
    fontSize: 15,
    fontWeight: "700",
  },

  gallery: {
    width: 100,
    height: 100,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#00000009",
  },

  galleryImage: {
    width: "90%",
    height: "90%",
    resizeMode: "contain",
  },

  containerQuantity: {
    marginTop: 10,
    marginHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  containerCount: {
    flexDirection: "row",
    width: "35%",
    justifyContent: "space-between",
    alignItems: "center",
  },

  containerButton: {
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    borderWidth: 1.5,
    borderColor: "#00000020",
  },

  quantity: {
    fontSize: 18,
    fontWeight: "800",
  },

  containerSubmit: {
    width: "55%",
    flexDirection: "row",
    backgroundColor: "#ffb036",
    height: 50,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "space-evenly",
  },

  price: {
    fontSize: 18,
    fontWeight: "800",
    color: "white",
  },

  addition: {
    width: "10%",
    height: 1,
    backgroundColor: "white",
  },
});
