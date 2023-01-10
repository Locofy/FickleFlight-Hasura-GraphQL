import * as React from "react";
import { useState } from "react";
import {
  StatusBar,
  StyleSheet,
  Image,
  Text,
  View,
  Pressable,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { TextInput as RNPTextInput } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import {
  Margin,
  Color,
  Padding,
  Border,
  FontFamily,
  FontSize,
} from "../GlobalStyles";

const SearchTwoWay = () => {
  const [outlinedTextOnlyNoIcon4, setOutlinedTextOnlyNoIcon4] =
    useState("1 Adult");
  const [outlinedTextOnlyNoIcon5, setOutlinedTextOnlyNoIcon5] =
    useState("Economy");
  const navigation = useNavigation();

  return (
    <View style={styles.searchTwoWay}>
      <StatusBar barStyle="default" />
      <View style={styles.group4}>
        <Image
          style={styles.iconBack}
          resizeMode="cover"
          source={require("../assets/icon--back1.png")}
        />
        <View style={styles.buttonPrimaryFlexBox}>
          <Text style={styles.searchFlight}>Search Flight</Text>
        </View>
        <View style={styles.iconBack}>
          <View style={styles.ellipseParent}>
            <Image
              style={styles.frameChild}
              resizeMode="cover"
              source={require("../assets/ellipse-1.png")}
            />
            <Image
              style={[styles.frameChild, styles.mt4]}
              resizeMode="cover"
              source={require("../assets/ellipse-2.png")}
            />
            <Image
              style={[styles.frameChild, styles.mt4]}
              resizeMode="cover"
              source={require("../assets/ellipse-3.png")}
            />
          </View>
        </View>
      </View>
      <View style={styles.flightSelectionParent}>
        <View style={[styles.flightSelection, styles.offerCardShadowBox]}>
          <View style={styles.waySelection} />
        </View>
        <View style={[styles.offersSectionWrapper, styles.mt20]}>
          <View style={styles.offersSection}>
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
                    <Text style={styles.textTypo}>{` `}</Text>
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
                style={[
                  styles.offerCard,
                  styles.ml16,
                  styles.offerCardShadowBox,
                ]}
              >
                <View style={styles.offerDetails}>
                  <Text
                    style={[
                      styles.discountForMastercardContainer,
                      styles.limitedTimeOfferLayout,
                    ]}
                  >
                    <Text style={styles.discount}>25% discount</Text>
                    <Text style={styles.textTypo}>{` `}</Text>
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
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mt4: {
    marginTop: Margin.m_5xs,
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
  wrapperFlexBox: {
    paddingVertical: Padding.p_4xs,
    width: 153,
    borderRadius: Border.br_3xl,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: Padding.p_3xl,
    flexDirection: "row",
  },
  textTypo: {
    fontWeight: "500",
    fontFamily: FontFamily.roboto,
  },
  outlinedtextIconFlexBox: {
    alignSelf: "flex-start",
    height: 56,
  },
  buttonPrimaryFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  roundTripTypo: {
    color: Color.white,
    textAlign: "center",
    lineHeight: 24,
    fontSize: FontSize.size_base,
  },
  limitedTimeOfferLayout: {
    width: 136,
    textAlign: "left",
  },
  iconBack: {
    width: 32,
    height: 32,
    overflow: "hidden",
  },
  searchFlight: {
    textAlign: "left",
    color: Color.black2,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.inter,
    fontWeight: "600",
  },
  frameChild: {
    width: 5,
    height: 5,
  },
  ellipseParent: {
    top: 5,
    left: 14,
    position: "absolute",
  },
  group4: {
    paddingVertical: Padding.p_xl,
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: Padding.p_3xl,
    flexDirection: "row",
    width: 375,
    backgroundColor: Color.white,
  },
  waySelection: {
    backgroundColor: Color.gray_300,
    padding: Padding.p_5xs,
    borderRadius: Border.br_3xl,
    alignSelf: "stretch",
    flexDirection: "row",
  },
  flightSelection: {
    borderRadius: Border.br_lg,
    width: 341,
    padding: Padding.p_xl,
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
    fontWeight: "700",
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
  offersSection: {
    alignSelf: "stretch",
  },
  offersSectionWrapper: {
    width: 343,
  },
  flightSelectionParent: {
    paddingVertical: Padding.p_4xl,
    paddingHorizontal: Padding.p_3xl,
    backgroundColor: Color.studioLightmodeLightBGF8F9FB,
  },
  searchTwoWay: {
    flex: 1,
    width: "100%",
    backgroundColor: Color.studioLightmodeLightBGF8F9FB,
  },
});

export default SearchTwoWay;
