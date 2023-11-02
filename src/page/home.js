import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TextInput,
  Image,
  TouchableWithoutFeedback,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function Home() {
  const brand = [
    {
      logo: require("../asset/brand/nike.png"),
      brand: "Nike",
    },
    {
      logo: require("../asset/brand/converse.png"),
      brand: "Converse",
    },
    {
      logo: require("../asset/brand/newBelance.png"),
      brand: "New Balance",
    },
    {
      logo: require("../asset/brand/puma.png"),
      brand: "Puma",
    },
    {
      logo: require("../asset/brand/reebok.png"),
      brand: "Reebok",
    },
    {
      logo: require("../asset/brand/vans.png"),
      brand: "Vans",
    },
  ];

  const popularProduct = [
    {
      rating: 4.5,
      name: "Nike Structure 25",
      price: 132,
      color: ["#000000"],
      image: require("../asset/shoe1/1.png"),
      background: "#ffd28c",
    },
    {
      rating: 4.6,
      name: "LeBron XX Premium EP",
      price: 206,
      color: ["#d0142b"],
      image: require("../asset/shoes/1.png"),
      background: "#9c4c9c",
    },
  ];

  const [brandSelected, setBrandSelected] = useState(0);

  const BrandList = ({ index, brand, name }) => {
    return (
      <TouchableWithoutFeedback onPress={() => setBrandSelected(index)}>
        <View
          style={[
            styles.brand,
            {
              backgroundColor:
                index === brandSelected ? "#00000010" : "#ffffff",
            },
          ]}
        >
          <Image
            source={brand}
            style={[
              styles.brandLogo,
              { opacity: index === brandSelected ? 1 : 0.3 },
            ]}
          />
          <View style={styles.containerBrandName}>
            <Text
              style={[
                styles.brandName,
                index === brandSelected
                  ? { fontWeight: "600", color: "#000" }
                  : { fontWeight: "400", color: "#00000050" },
              ]}
            >
              {name}
            </Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  };

  const PopularProduct = ({
    rating,
    name,
    price,
    color,
    image,
    background,
  }) => (
    <View style={styles.popularProduct}>
      <View style={styles.containerRating}>
        <Text style={styles.rating}>
          {rating} <Ionicons name="star" color={"#ffb036"} size={10} />
        </Text>
        <View style={styles.add}>
          <Ionicons name="add" color={"#000"} size={15} />
        </View>
      </View>
      <View style={styles.containerProduct}>
        <View style={styles.containerInfoPopular}>
          <Text style={styles.namePopular}>{name}</Text>
          <Text style={styles.pricePopular}>${price}</Text>
          <View style={styles.containerColor}>
            <Text style={styles.colorTitle}>Color</Text>
            {color.map((item, index) => (
              <View
                style={[styles.colors, { backgroundColor: item }]}
                key={index}
              />
            ))}
          </View>
        </View>
        <View style={styles.containerShoe}>
          <View
            style={[styles.backgroundShoe, { backgroundColor: background }]}
          />
          <Image source={image} style={styles.shoes} />
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* HEADER */}
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

      {/* SEARCH BAR */}
      <View style={styles.containerSearch}>
        <TextInput style={styles.search} placeholder="Search" />
        <Ionicons
          name="search-outline"
          color={"black"}
          size={20}
          style={styles.iconSearch}
        />
      </View>

      {/* BRAND NAME */}
      <View style={styles.containerBrand}>
        <ScrollView horizontal contentContainerStyle={{ columnGap: 13 }}>
          {brand.map((item, index) => (
            <BrandList
              key={index}
              index={index}
              brand={item.logo}
              name={item.brand}
            />
          ))}
        </ScrollView>
      </View>

      {/* POPULAR */}
      <View style={styles.containerPopular}>
        <View style={styles.popularHeader}>
          <Text style={styles.popularText}>Popular</Text>
          <Text style={styles.seeAll}>See all</Text>
        </View>

        <View style={styles.containerListPopular}>
          <ScrollView
            horizontal
            contentContainerStyle={{ columnGap: 13, width: "100%" }}
          >
            {popularProduct.map((item, index) => (
              <PopularProduct
                key={index}
                rating={item.rating}
                name={item.name}
                price={item.price}
                color={item.color}
                image={item.image}
                background={item.background}
              />
            ))}
          </ScrollView>
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

  containerSearch: {
    width: "100%",
    height: "5%",
    marginTop: 40,
  },

  search: {
    width: "100%",
    borderBottomColor: "#00000030",
    borderBottomWidth: 1,
    height: "100%",
    paddingBottom: 10,
    fontWeight: "600",
  },

  iconSearch: {
    position: "absolute",
    right: 0,
  },

  containerBrand: {
    width: "100%",
    height: 85,
    marginVertical: 25,
  },

  brand: {
    borderWidth: 1.5,
    borderColor: "#00000010",
    height: "100%",
    width: 70,
    borderRadius: 20,
    alignItems: "center",
  },

  brandLogo: {
    marginTop: 5,
    width: "70%",
    resizeMode: "contain",
    height: 40,
  },

  brandName: {
    textAlign: "center",
    fontWeight: "600",
    fontSize: 12,
  },

  containerBrandName: {
    height: "40%",
    justifyContent: "center",
  },

  popularHeader: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
  },

  popularText: {
    fontSize: 19,
    fontWeight: "700",
  },

  seeAll: {
    fontSize: 14,
  },

  containerPopular: {
    width: "100%",
  },

  containerListPopular: {
    width: "100%",
    height: 160,
    marginTop: 10,
  },

  popularProduct: {
    height: "100%",
    width: "85%",
    backgroundColor: "#00000009",
    borderRadius: 15,
    padding: 10,
  },

  containerRating: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: "20%",
  },

  rating: {
    fontSize: 16,
    fontWeight: "700",
  },

  add: {
    borderWidth: 1.5,
    borderColor: "#00000030",
    borderRadius: 40,
    width: 23,
    height: 23,
    alignItems: "center",
    justifyContent: "center",
  },

  containerProduct: {
    flexDirection: "row",
    height: "65%",
    marginTop: 10,
  },

  containerInfoPopular: {
    width: "50%",
    height: "100%",
    justifyContent: "space-evenly",
  },

  namePopular: {
    fontSize: 14,
    fontWeight: "700",
  },

  pricePopular: {
    fontSize: 25,
    fontWeight: "800",
  },

  containerColor: {
    flexDirection: "row",
    alignItems: "center",
  },

  colorTitle: {
    fontSize: 13,
    fontWeight: "700",
    marginRight: 15,
  },

  colors: {
    width: 20,
    height: 20,
    borderRadius: 40,
    marginRight: 5,
  },

  containerShoe: {
    height: "100%",
    width: "50%",
  },

  shoes: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
    transform: [{ rotate: "-20deg" }],
  },

  backgroundShoe: {
    position: "absolute",
    height: "100%",
    aspectRatio: 1,
    right: 0,
    borderRadius: 100,
  },
});
