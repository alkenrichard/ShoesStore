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
      id: 1,
      logo: require("../asset/brand/nike.png"),
      brand: "Nike",
    },
    {
      id: 2,
      logo: require("../asset/brand/converse.png"),
      brand: "Converse",
    },
    {
      id: 3,
      logo: require("../asset/brand/newBelance.png"),
      brand: "New Balance",
    },
    {
      id: 4,
      logo: require("../asset/brand/puma.png"),
      brand: "Puma",
    },
    {
      id: 5,
      logo: require("../asset/brand/reebok.png"),
      brand: "Reebok",
    },
    {
      id: 6,
      logo: require("../asset/brand/vans.png"),
      brand: "Vans",
    },
  ];

  const popularProduct = [
    {
      id: 1,
      rating: 4.5,
      name: "Nike Structure 25",
      price: 132,
      color: ["#000000"],
      image: require("../asset/shoe1/1.png"),
      background: "#ffd28c",
    },
    {
      id: 2,
      rating: 4.6,
      name: "LeBron XX Premium EP",
      price: 206,
      color: ["#d0142b"],
      image: require("../asset/shoes/1.png"),
      background: "#9c4c9c",
    },
    {
      id: 3,
      rating: 4.4,
      name: "LeBron Witness 8 EP",
      price: 99,
      color: ["#3d485d", "#457c72", "#d8dade"],
      image: require("../asset/shoes/2.png"),
      background: "#d94719",
    },
    {
      id: 4,
      rating: 4.5,
      name: "Nike Metcon 9 PRM",
      price: 152,
      color: ["#000000"],
      image: require("../asset/shoes/3.png"),
      background: "#f1cf81",
    },
  ];

  const newArrivals = [
    {
      id: 1,
      image: require("../asset/shoes/4.png"),
      backgroundColor: "#83a843",
      rating: 4.5,
      name: "Nike In-Season TR 13",
      price: 73,
    },
    {
      id: 2,
      image: require("../asset/shoes/5.png"),
      backgroundColor: "#b48970",
      rating: 4.6,
      name: "Nike In-Season TR 13 PRM",
      price: 76,
    },
    {
      id: 3,
      image: require("../asset/shoes/6.png"),
      backgroundColor: "#b49587",
      rating: 4.5,
      name: "Nike Legend Essential 3 NN",
      price: 68,
    },
    {
      id: 4,
      image: require("../asset/shoes/7.png"),
      backgroundColor: "#3c4964",
      rating: 4.7,
      name: "Nike Alphafly 2",
      price: 261,
    },
  ];

  const [brandSelected, setBrandSelected] = useState(0);

  const handleOnScroll = (e) => {
    console.log(e.nativeEvent.contentOffset.x);
  };

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

  const NewArrivals = ({ image, backgroundColor, rating, name, price }) => (
    <View style={{ width: "45%" }}>
      <View style={styles.containerCard}>
        <View
          style={[styles.backgroundCard, { backgroundColor: backgroundColor }]}
        />
        <Image source={image} style={styles.imageArrival} />
        <View style={styles.containerStar}>
          <Text style={styles.rating}>
            {rating} <Ionicons name="star" color={"#ffb036"} size={10} />
          </Text>
          <View style={styles.add}>
            <Ionicons name="add" color={"#000"} size={15} />
          </View>
        </View>
      </View>
      <View style={styles.containerTitleArrival}>
        <Text style={styles.titleArrival}>{name}</Text>
        <Text style={{ fontSize: 18, fontWeight: "800" }}>${price}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <StatusBar barStyle={"dark-content"} backgroundColor={"white"} />
      <ScrollView
        contentContainerStyle={{ paddingBottom: 50 }}
        showsVerticalScrollIndicator={false}
      >
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
          <ScrollView
            horizontal
            contentContainerStyle={{
              columnGap: 13,
              left: 20,
              paddingRight: 40,
            }}
          >
            {brand.map((item, index) => (
              <BrandList
                key={item.id}
                index={index}
                brand={item.logo}
                name={item.brand}
              />
            ))}
          </ScrollView>
        </View>

        {/* POPULAR */}
        <View style={styles.popularHeader}>
          <Text style={styles.popularText}>Popular</Text>
          <Text style={styles.seeAll}>See all</Text>
        </View>

        <View style={styles.containerListPopular}>
          <ScrollView
            horizontal
            contentContainerStyle={{
              columnGap: 15,
              left: 20,
              paddingRight: 40,
            }}
          >
            {popularProduct.map((item) => (
              <PopularProduct
                key={item.id}
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

        {/* NEW ARRIVALS */}
        <View style={styles.popularHeader}>
          <Text style={styles.popularText}>New Arrivals</Text>
          <Text style={styles.seeAll}>See all</Text>
        </View>

        <View style={styles.containerArrival}>
          {newArrivals.map((item) => (
            <NewArrivals
              key={item.id}
              image={item.image}
              backgroundColor={item.backgroundColor}
              rating={item.rating}
              name={item.name}
              price={item.price}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },

  containerHeader: {
    paddingHorizontal: 20,
    width: "100%",
    height: "5%",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },

  hamburgerMenu: {
    justifyContent: "space-between",
    height: "35%",
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
    paddingHorizontal: 20,
    width: "100%",
    height: "4%",
    justifyContent: "center",
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
    right: 20,
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
    paddingHorizontal: 20,
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
    flex: 1,
  },

  containerListPopular: {
    width: "100%",
    marginVertical: 10,
    height: 160,
  },

  popularProduct: {
    height: "100%",
    width: 280,
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

  containerArrival: {
    paddingHorizontal: 20,
    marginTop: 10,
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    rowGap: 30,
  },

  containerCard: {
    backgroundColor: "#00000009",
    height: 160,
    borderRadius: 15,
    width: "100%",
    overflow: "hidden",
  },

  backgroundCard: {
    width: "100%",
    aspectRatio: 1,
    borderRadius: 100,
    position: "absolute",
    top: "-40%",
    right: "-40%",
  },

  imageArrival: {
    width: "90%",
    height: "50%",
    resizeMode: "contain",
    transform: [{ rotate: "-20deg" }],
    marginTop: 20,
  },

  containerStar: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 10,
    marginTop: 25,
  },

  containerTitleArrival: {
    alignItems: "center",
    width: "100%",
    marginTop: 10,
    height: 60,
    justifyContent: "space-between",
  },

  titleArrival: {
    width: "70%",
    fontWeight: "600",
    textAlign: "center",
  },
});
