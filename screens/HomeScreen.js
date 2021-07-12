import React from "react";
import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  StatusBar,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import categoriesData from "../assets/data/categoriesData";
import popularData from "../assets/data/popularData";
import colors from "../assets/colors/colors";

const HomeScreen = ({ navigation }) => {
  const renderCategoryItem = ({ item }) => {
    return (
      <View
        style={[
          styles.categoryItemWrapper,
          {
            backgroundColor: item.selected ? colors.primary : colors.white,
            marginLeft: item.id == 1 ? 20 : 0,
          },
        ]}
      >
        <Image source={item.image} style={styles.categoryItemImage} />
        <Text style={styles.categoryItemTitle}>{item.title}</Text>
        <View
          style={[
            styles.categorySelectWrapper,
            {
              backgroundColor: item.selected ? colors.white : colors.secondary,
            },
          ]}
        >
          <Feather
            name="chevron-right"
            size={8}
            style={styles.categorySelectIcon}
            color={item.selected ? colors.black : colors.white}
          />
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <SafeAreaView style={styles.AndroidSafeArea}>
          {/* Header */}
          <View style={styles.headerWrapper}>
            <Image
              source={require("../assets/images/profile.png")}
              style={styles.profileImage}
            />
            <Feather name="menu" size={24} color={colors.textDark} />
          </View>
        </SafeAreaView>

        {/* Titles */}
        <View style={styles.titlesWrapper}>
          <Text style={styles.titlesSubtitle}>Food</Text>
          <Text style={styles.titlesTitle}>Delivery</Text>
        </View>

        {/* Search */}

        <View style={styles.searchWrapper}>
          <Feather name="search" size={16} color={colors.textDark} />
          <View style={styles.search}>
            <Text style={styles.searchText}>Search</Text>
          </View>
        </View>

        {/* Categories */}

        <View style={styles.categoriesWrapper}>
          <Text style={styles.categoriesTitle}>Categories</Text>
          <View style={styles.categoriesListWrapper}>
            <FlatList
              data={categoriesData}
              renderItem={renderCategoryItem}
              keyExtractor={(item) => item.id}
              horizontal={true}
            />
          </View>

          {/* Popular */}

          <View style={styles.popularWrapper}>
            <Text style={styles.popularTitle}>Popular</Text>
            {popularData.map((item) => (
              <TouchableOpacity
                key={item.id}
                onPress={() => navigation.navigate("Details", { item: item })}
              >
                <View
                  style={[
                    styles.popularCardWrapper,
                    { marginTop: item.id == 1 ? 10 : 20 },
                  ]}
                >
                  <View>
                    <View style={styles.popularTopWrapper}>
                      <MaterialCommunityIcons
                        name="crown"
                        size={12}
                        color={colors.primary}
                      />
                      <Text style={styles.popularToptext}>Top of the week</Text>
                    </View>
                    <View style={styles.popularTitlesWrapper}>
                      <Text style={styles.popularTitleTitle}>{item.title}</Text>
                      <Text style={styles.popularTitlesWeight}>
                        Weight: {item.weight}
                      </Text>
                    </View>
                    <View style={styles.popularCardBottom}>
                      <View style={styles.addPizzaButton}>
                        <Feather
                          name="plus"
                          size={10}
                          color={colors.textDark}
                        />
                      </View>
                      <View style={styles.ratingWrapper}>
                        <MaterialCommunityIcons
                          name="star"
                          size={10}
                          color={colors.textDark}
                        />
                        <Text style={styles.rating}>{item.rating}</Text>
                      </View>
                    </View>
                  </View>
                  <View style={styles.popularCardRight}>
                    <Image
                      source={item.image}
                      style={styles.popularCardImage}
                    />
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  AndroidSafeArea: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  /* Header */
  headerWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingTop: 10,
    alignItems: "center",
  },
  profileImage: {
    height: 40,
    width: 40,
    borderRadius: 40,
  },

  /* Titles */
  titlesWrapper: {
    marginTop: 30,
    paddingHorizontal: 20,
  },
  titlesSubtitle: {
    fontFamily: "Montserrat-Regular",
    fontSize: 16,
    color: colors.textDark,
  },
  titlesTitle: {
    fontFamily: "Montserrat-Bold",
    fontSize: 32,
    color: colors.textDark,
    marginTop: 5,
  },

  /* Search */
  searchWrapper: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    marginTop: 30,
  },
  search: {
    flex: 1,
    marginLeft: 10,
    borderBottomColor: colors.textLight,
    borderBottomWidth: 2,
  },
  searchText: {
    fontFamily: "Montserrat-SemiBold",
    fontSize: 14,
    marginBottom: 5,
    color: colors.textLight,
  },

  /* Categories */
  categoriesWrapper: {
    marginTop: 30,
  },
  categoriesTitle: {
    fontFamily: "Montserrat-Bold",
    fontSize: 16,
    paddingHorizontal: 20,
  },
  categoriesListWrapper: {
    paddingTop: 15,
    paddingBottom: 20,
  },
  categoryItemWrapper: {
    marginRight: 20,
    borderRadius: 20,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
  categoryItemImage: {
    width: 60,
    height: 60,
    marginTop: 25,
    alignSelf: "center",
    marginHorizontal: 20,
  },
  categoryItemTitle: {
    fontFamily: "Montserrat-Medium",
    fontSize: 14,
    marginTop: 10,
    textAlign: "center",
  },
  categorySelectWrapper: {
    alignSelf: "center",
    justifyContent: "center",
    marginTop: 20,
    width: 26,
    height: 26,
    borderRadius: 26,
    marginBottom: 20,
  },
  categorySelectIcon: {
    alignSelf: "center",
  },

  /* Popular */
  popularWrapper: {
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  popularTitle: {
    fontFamily: "Montserrat-Bold",
    fontSize: 16,
  },
  popularCardWrapper: {
    backgroundColor: colors.backgorund,
    borderRadius: 25,
    paddingTop: 20,
    paddingLeft: 20,
    flexDirection: "row",
    overflow: "hidden",
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
  popularTopWrapper: {
    flexDirection: "row",
    alignSelf: "center",
    alignItems: "center",
  },
  popularToptext: {
    marginLeft: 10,
    fontFamily: "Montserrat-SemiBold",
    fontSize: 14,
  },
  popularTitlesWrapper: {
    marginTop: 20,
  },
  popularTitleTitle: {
    fontFamily: "Montserrat-SemiBold",
    fontSize: 14,
    color: colors.textDark,
  },
  popularTitlesWeight: {
    fontFamily: "Montserrat-Medium",
    fontSize: 12,
    color: colors.textLight,
    marginTop: 5,
  },
  popularCardBottom: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    marginLeft: -20,
  },
  addPizzaButton: {
    backgroundColor: colors.primary,
    paddingHorizontal: 40,
    paddingVertical: 20,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 25,
  },
  ratingWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 20,
  },
  rating: {
    fontFamily: "Montserrat-SemiBold",
    fontSize: 12,
    color: colors.textDark,
    marginLeft: 5,
  },
  popularCardRight: {
    marginLeft: 40,
  },
  popularCardImage: {
    width: 210,
    height: 125,
    resizeMode: "contain",
  },
});
