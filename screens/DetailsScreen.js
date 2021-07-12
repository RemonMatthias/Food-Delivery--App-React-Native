import React from "react";
import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  StatusBar,
} from "react-native";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../assets/colors/colors";

const DetailsScreen = ({ route, navigation }) => {
  const { item } = route.params;

  const renderIngredientsItem = ({ item }) => {
    return (
      <View
        style={[
          styles.ingredientsItemWrapper,
          { marginLeft: item.id == 1 ? 20 : 0 },
        ]}
      >
        <Image source={item.image} style={styles.ingredientsImage} />
      </View>
    );
  };

  return (
    <View style={styles.copntainer}>
      <SafeAreaView style={styles.AndroidSafeArea}>
        {/* Header */}
        <View style={styles.headerWrapper}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <View style={styles.headerLeft}>
              <Feather name="chevron-left" size={12} color={colors.textDark} />
            </View>
          </TouchableOpacity>
          <View style={styles.headerRight}>
            <MaterialCommunityIcons
              name="star"
              size={12}
              color={colors.white}
            />
          </View>
        </View>
      </SafeAreaView>
      {/* Titles */}
      <View style={styles.titlesWrapper}>
        <Text style={styles.title}>{item.title}</Text>
      </View>
      {/* Price */}
      <View style={styles.priceWrapper}>
        <Text style={styles.priceText}>${item.price}</Text>
      </View>

      {/* Info */}
      <View style={styles.infoWrapper}>
        <View style={styles.infoLeft}>
          <View style={styles.infoItemWrapper}>
            <Text style={styles.infoItemTitle}>Size</Text>
            <Text style={styles.infoItemSubtitle}>
              {item.sizeName} {item.sizeNumber}
            </Text>
          </View>
          <View style={styles.infoItemWrapper}>
            <Text style={styles.infoItemTitle}>Crust</Text>
            <Text style={styles.infoItemSubtitle}>{item.crust}</Text>
          </View>
          <View style={styles.infoItemWrapper}>
            <Text style={styles.infoItemTitle}>Delivery In</Text>
            <Text style={styles.infoItemSubtitle}>
              {item.deliveryTime} mins
            </Text>
          </View>
        </View>
        <View>
          <Image source={item.image} style={styles.itemImage} />
        </View>
      </View>

      {/* Ingredients */}
      <View style={styles.ingredientsWrapper}>
        <Text style={styles.ingredientsTitle}>Ingredients</Text>
        <View style={styles.inggredientsListWrapper}>
          <FlatList
            data={item.ingredients}
            renderItem={renderIngredientsItem}
            keyExtractor={(item) => item.id}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>

      {/* Place an order */}

      <TouchableOpacity onPress={() => alert("Your order has been placed")}>
        <View style={styles.orderWrapper}>
          <Text style={styles.orderText}>Place an order</Text>
          <Feather name="chevron-right" size={18} color={colors.black} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  copntainer: {
    flex: 1,
  },
  AndroidSafeArea: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  /* Header */
  headerWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  headerLeft: {
    borderColor: colors.textLight,
    borderWidth: 2,
    padding: 12,
    borderRadius: 10,
  },
  headerRight: {
    backgroundColor: colors.primary,
    padding: 12,
    borderRadius: 10,
    borderColor: colors.primary,
    borderWidth: 2,
  },

  /* Titles */
  titlesWrapper: {
    paddingHorizontal: 20,
    marginTop: 30,
  },
  title: {
    fontFamily: "Montserrat-Bold",
    fontSize: 32,
    color: colors.textDark,
    width: "60%",
  },

  /* Price */
  priceWrapper: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  priceText: {
    color: colors.price,
    fontFamily: "Montserrat-Bold",
    fontSize: 32,
  },

  /* Info */
  infoWrapper: {
    marginTop: 60,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  infoLeft: {
    paddingLeft: 20,
  },
  infoItemWrapper: {
    marginBottom: 20,
  },
  infoItemTitle: {
    fontFamily: "Montserrat-Medium",
    fontSize: 14,
    color: colors.textLight,
  },
  infoItemSubtitle: {
    fontFamily: "Montserrat-SemiBold",
    fontSize: 18,
    color: colors.textDark,
  },
  itemImage: {
    marginLeft: 50,
  },

  /* Ingredients */
  ingredientsWrapper: {
    marginTop: 40,
  },
  ingredientsTitle: {
    paddingHorizontal: 20,
    fontFamily: "Montserrat-Bold",
    fontSize: 16,
    color: colors.textDark,
  },
  inggredientsListWrapper: {
    paddingVertical: 20,
  },
  ingredientsItemWrapper: {
    backgroundColor: colors.white,
    justifyContent: "center",
    paddingHorizontal: 10,
    marginRight: 15,
    borderRadius: 15,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
  ingredientsImage: {
    resizeMode: "contain",
  },

  /* Place an order */
  orderWrapper: {
    marginTop: 10,
    marginHorizontal: 20,
    backgroundColor: colors.primary,
    borderRadius: 50,
    paddingVertical: 15,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  orderText: {
    fontFamily: "Montserrat-Bold",
    fontSize: 14,
    color: colors.textDark,
    marginRight: 10,
  },
});
