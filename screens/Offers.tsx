import * as React from "react";
import {
  StatusBar,
  StyleSheet,
  SafeAreaView,
  Pressable,
  Image,
  Text,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  Margin,
  Padding,
  Color,
  FontSize,
  FontFamily,
  Border,
} from "../GlobalStyles";

const Offers = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.offers}>
      <StatusBar barStyle="default" />
      <View style={[styles.offersBody, styles.viewSpaceBlock]}>
        <View style={styles.offersList}>
          <View style={[styles.offerCard, styles.offerCardShadowBox]}>
            <View style={[styles.frameParent, styles.viewFlexBox]}>
              <View style={styles.limitedOfferWrapper}>
                <Text
                  style={[
                    styles.limitedOffer,
                    styles.searchTypo,
                    styles.textTypo,
                  ]}
                >
                  Limited offer!
                </Text>
              </View>
              <Image
                style={styles.iconHeart}
                resizeMode="cover"
                source={require("../assets/icon--heart1.png")}
              />
            </View>
            <Text
              style={[
                styles.get20DiscountContainer,
                styles.mt7,
                styles.offers1Clr,
              ]}
            >
              <Text style={styles.get20Discount}>Get 20% discount</Text>
              <Text style={[styles.text, styles.textTypo]}>{` `}</Text>
              <Text style={styles.withYourMaster}>
                with your Master credit cards
              </Text>
            </Text>
            <View style={[styles.frameGroup, styles.mt7]}>
              <View style={styles.image7Wrapper}>
                <Image
                  style={[styles.image7Icon, styles.iconPosition]}
                  resizeMode="cover"
                  source={require("../assets/image-7.png")}
                />
              </View>
              <View style={[styles.offersList, styles.ml16]}>
                <Text
                  style={[styles.useYourMastercard, styles.searchClr]}
                >{`Use your mastercard with any transaction and get 20% discount instantly! `}</Text>
              </View>
              <Image
                style={[styles.vectorIcon, styles.ml16]}
                resizeMode="cover"
                source={require("../assets/vector-1.png")}
              />
            </View>
          </View>
          <View
            style={[styles.offerCard, styles.mt14, styles.offerCardShadowBox]}
          >
            <View style={[styles.frameParent, styles.viewFlexBox]}>
              <View style={styles.limitedOfferWrapper}>
                <Text
                  style={[
                    styles.limitedOffer,
                    styles.searchTypo,
                    styles.textTypo,
                  ]}
                >
                  Limited offer!
                </Text>
              </View>
              <Image
                style={styles.iconHeart}
                resizeMode="cover"
                source={require("../assets/icon--heart2.png")}
              />
            </View>
            <Text
              style={[
                styles.get20DiscountContainer,
                styles.mt7,
                styles.offers1Clr,
              ]}
            >
              <Text style={styles.get20Discount}>25% discount</Text>
              <Text style={[styles.text, styles.textTypo]}>{` `}</Text>
              <Text style={styles.withYourMaster}>
                with your VISA credit or debit cards
              </Text>
            </Text>
            <View style={[styles.frameGroup, styles.mt7]}>
              <View style={styles.image7Wrapper}>
                <Image
                  style={[styles.image8Icon, styles.iconPosition]}
                  resizeMode="cover"
                  source={require("../assets/image-8.png")}
                />
              </View>
              <View style={[styles.offersList, styles.ml16]}>
                <Text
                  style={[styles.useYourMastercard, styles.searchClr]}
                >{`Use your VISA credit or debit card with any transaction and get 25% discount instantly! `}</Text>
              </View>
              <Image
                style={[styles.vectorIcon, styles.ml16]}
                resizeMode="cover"
                source={require("../assets/vector-11.png")}
              />
            </View>
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
  header: {
    backgroundColor: "#fff",
  },
  ml16: {
    marginLeft: Margin.m_lg,
  },
  mt7: {
    marginTop: Margin.m_3xs,
  },
  mt14: {
    marginTop: Margin.m_md,
  },
  viewFlexBox: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  viewSpaceBlock: {
    paddingHorizontal: Padding.p_3xl,
    alignSelf: "stretch",
  },
  offers1Clr: {
    color: Color.black2,
    textAlign: "left",
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
    alignSelf: "stretch",
    backgroundColor: Color.white,
  },
  searchTypo: {
    textAlign: "center",
    fontSize: FontSize.size_sm,
  },
  textTypo: {
    fontWeight: "500",
    fontFamily: FontFamily.roboto,
  },
  iconPosition: {
    left: 0,
    width: 104,
    position: "absolute",
  },
  searchClr: {
    color: Color.gray_700,
    fontFamily: FontFamily.roboto,
  },
  iconLayout: {
    height: 20,
    width: 20,
  },
  limitedOffer: {
    textTransform: "uppercase",
    color: Color.white,
    fontFamily: FontFamily.roboto,
    lineHeight: 18,
  },
  limitedOfferWrapper: {
    borderRadius: Border.br_xs,
    backgroundColor: Color.turquoise,
    paddingHorizontal: Padding.p_3xs,
    paddingVertical: Padding.p_6xs,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  iconHeart: {
    width: 16,
    height: 16,
    overflow: "hidden",
  },
  frameParent: {
    alignSelf: "stretch",
  },
  get20Discount: {
    fontWeight: "700",
    fontFamily: FontFamily.roboto,
  },
  text: {
    fontFamily: FontFamily.roboto,
  },
  withYourMaster: {
    fontFamily: FontFamily.roboto,
  },
  get20DiscountContainer: {
    fontSize: FontSize.size_2xl,
    lineHeight: 24,
    textAlign: "left",
    alignSelf: "stretch",
  },
  image7Icon: {
    top: 1,
    height: 71,
  },
  image7Wrapper: {
    height: 72,
    width: 104,
  },
  useYourMastercard: {
    fontSize: FontSize.size_xs,
    lineHeight: 18,
    textAlign: "left",
    alignSelf: "stretch",
  },
  offersList: {
    flex: 1,
  },
  vectorIcon: {
    width: 7,
    height: 11,
  },
  frameGroup: {
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  offerCard: {
    borderRadius: Border.br_sm,
    paddingHorizontal: Padding.p_2xl,
    paddingVertical: Padding.p_lg,
    justifyContent: "center",
  },
  image8Icon: {
    top: 0,
    height: 72,
  },
  offersBody: {
    paddingVertical: 19,
    flexDirection: "row",
  },
  offers: {
    backgroundColor: Color.studioLightmodeLightBGF8F9FB,
    width: "100%",
    flex: 1,
  },
});

export default Offers;
