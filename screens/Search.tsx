import * as React from "react";
import { useState } from "react";
import {
  StatusBar,
  StyleSheet,
  SafeAreaView,
  Pressable,
  Image,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import OneWaySection from "../components/OneWaySection";
import RoundTripSection from "../components/RoundTripSection";
import OneWay from "../components/OneWay";
import FrameComponent from "../components/FrameComponent";
import FrameComponent1 from "../components/FrameComponent1";
import RoundTrip from "../components/RoundTrip";
import { TextInput as RNPTextInput } from "react-native-paper";
import {
  Margin,
  Color,
  FontSize,
  FontFamily,
  Border,
  Padding,
} from "../GlobalStyles";

const TopTab = createMaterialTopTabNavigator();

const Search = () => {
  const [outlinedTextOnlyNoIcon3, setOutlinedTextOnlyNoIcon3] =
    useState("1 Adult");
  const [outlinedTextOnlyNoIcon4, setOutlinedTextOnlyNoIcon4] =
    useState("Economy");
  const navigation = useNavigation();

  return (
    <View style={styles.search}>
      <StatusBar barStyle="default" />
      <ScrollView
        style={styles.searchPageBody}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.searchPageBodyContent}
      >
        <View style={[styles.flightSelection, styles.offerCardShadowBox]}>
          <TopTab.Navigator
            style={styles.waySelectionToptabs}
            tabBar={({ state, descriptors, navigation, position }) => {
              const [activeItems] = React.useState([
                <OneWay />,
                <FrameComponent1 />,
              ]);
              const [normalItems] = React.useState([
                <FrameComponent />,
                <RoundTrip />,
              ]);
              const activeIndex = state.index;
              return (
                <ScrollView
                  contentContainerStyle={styles.topTabBarStyle}
                  horizontal
                  style={styles.scrollViewtopTabBarStyle}
                >
                  {normalItems.map((item, index) => {
                    const isFocused = state.index === index;
                    return (
                      <TouchableOpacity
                        key={index}
                        onPress={() => {
                          navigation.navigate({
                            name: state.routes[index].name,
                            merge: true,
                          });
                        }}
                      >
                        {activeIndex === index ? activeItems[index] : item}
                      </TouchableOpacity>
                    );
                  })}
                </ScrollView>
              );
            }}
          >
            <TopTab.Screen name="One Way section" component={OneWaySection} />
            <TopTab.Screen
              name="Round trip section"
              component={RoundTripSection}
            />
          </TopTab.Navigator>
        </View>
        <View style={[styles.form, styles.mt30]}>
          <Text style={styles.offers}>Offers</Text>
          <ScrollView
            style={[styles.offersRow, styles.mt14]}
            horizontal
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.offersRowScrollViewContent}
          >
            <View style={[styles.offerCard, styles.offerCardShadowBox]}>
              <View style={styles.offerDetails}>
                <Text
                  style={[
                    styles.discountForMastercardContainer,
                    styles.limitedTimeOfferLayout,
                  ]}
                >
                  <Text style={styles.discount}>20% discount</Text>
                  <Text style={styles.text}>{` `}</Text>
                  <Text style={styles.forMastercardUsers}>
                    for mastercard users
                  </Text>
                </Text>
                <Text
                  style={[
                    styles.limitedTimeOffer,
                    styles.mt4,
                    styles.limitedTimeOfferLayout,
                  ]}
                >
                  Limited time offer!
                </Text>
              </View>
              <Image
                style={styles.offerImageIcon}
                resizeMode="cover"
                source={require("../assets/offer-image2.png")}
              />
            </View>
            <View
              style={[styles.offerCard, styles.ml16, styles.offerCardShadowBox]}
            >
              <View style={styles.offerDetails}>
                <Text
                  style={[
                    styles.discountForMastercardContainer,
                    styles.limitedTimeOfferLayout,
                  ]}
                >
                  <Text style={styles.discount}>25% discount</Text>
                  <Text style={styles.text}>{` `}</Text>
                  <Text style={styles.forMastercardUsers}>
                    with your Visa credit cards
                  </Text>
                </Text>
                <Text
                  style={[
                    styles.limitedTimeOffer,
                    styles.mt4,
                    styles.limitedTimeOfferLayout,
                  ]}
                >
                  Limited time offer!
                </Text>
              </View>
              <Image
                style={styles.offerImageIcon}
                resizeMode="cover"
                source={require("../assets/offer-image3.png")}
              />
            </View>
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  mt4: {
    marginTop: Margin.m_5xs,
  },
  group4: {
    backgroundColor: "#fff",
  },
  waySelectionToptabs: {
    width: "100%",
    height: 447,
  },
  topTabBarStyle: {
    borderRadius: 32,
    backgroundColor: "#f3f5f9",
    width: 313,
    flexDirection: "row",
    padding: 4,
    alignItems: "flex-start",
    justifyContent: "space-between",
    minHeight: 44,
    zIndex: 1,
  },
  scrollViewtopTabBarStyle: {
    maxHeight: 44,
  },
  ml13: {
    marginLeft: Margin.m_sm,
  },
  mt18: {
    marginTop: Margin.m_2xl,
  },
  mt13: {
    marginTop: Margin.m_sm,
  },
  mt20: {
    marginTop: Margin.m_3xl,
  },
  ml16: {
    marginLeft: Margin.m_lg,
  },
  offersRowScrollViewContent: {
    flexDirection: "row",
  },
  mt14: {
    marginTop: Margin.m_md,
  },
  mt30: {
    marginTop: Margin.m_7xl,
  },
  searchPageBodyContent: {
    flexDirection: "column",
    paddingHorizontal: 15,
    paddingVertical: 16,
  },
  viewFlexBox: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  iconLayout1: {
    height: 32,
    width: 32,
  },
  offerCardShadowBox: {
    shadowOpacity: 1,
    elevation: 15,
    shadowRadius: 15,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowColor: "rgba(0, 0, 0, 0.03)",
    backgroundColor: Color.white,
  },
  outlinedtextIconFlexBox: {
    alignSelf: "flex-start",
    height: 56,
  },
  buttonPrimaryFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  limitedTimeOfferLayout: {
    width: 136,
    textAlign: "left",
  },
  searchTypo: {
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.roboto,
    textAlign: "center",
  },
  iconLayout: {
    height: 20,
    width: 20,
  },
  flightSelection: {
    borderRadius: Border.br_lg,
    width: 341,
    padding: Padding.p_xl,
    alignItems: "center",
    flex: 1,
  },
  offers: {
    fontWeight: "700",
    lineHeight: 24,
    textAlign: "left",
    color: Color.black2,
    fontFamily: FontFamily.inter,
    fontSize: FontSize.size_xl,
  },
  discount: {
    fontFamily: FontFamily.roboto,
    fontWeight: "700",
  },
  text: {
    fontWeight: "500",
    fontFamily: FontFamily.roboto,
  },
  forMastercardUsers: {
    fontFamily: FontFamily.roboto,
  },
  discountForMastercardContainer: {
    lineHeight: 19,
    fontSize: FontSize.size_base,
    width: 136,
    color: Color.black2,
  },
  limitedTimeOffer: {
    fontSize: FontSize.size_xs,
    lineHeight: 18,
    color: Color.gray999,
    fontFamily: FontFamily.roboto,
  },
  offerDetails: {
    top: 13,
    left: 112,
    position: "absolute",
  },
  offerImageIcon: {
    top: 17,
    left: 15,
    width: 74,
    height: 51,
    position: "absolute",
  },
  offerCard: {
    borderRadius: Border.br_sm,
    width: 264,
    height: 86,
  },
  offersRow: {
    alignSelf: "stretch",
    width: "100%",
  },
  form: {
    alignSelf: "stretch",
  },
  searchPageBody: {
    alignSelf: "stretch",
    flex: 1,
  },
  search: {
    backgroundColor: Color.studioLightmodeLightBGF8F9FB,
    height: 821,
    width: "100%",
    flex: 1,
  },
});

export default Search;
