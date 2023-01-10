import * as React from "react";
import {
  StatusBar,
  StyleSheet,
  SafeAreaView,
  Pressable,
  Image,
  View,
  ScrollView,
  Text,
  ImageBackground,
} from "react-native";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import DestinationCard from "../components/DestinationCard";
import {
  Margin,
  Padding,
  Color,
  FontFamily,
  FontSize,
  Border,
} from "../GlobalStyles";

const Explore = () => {
  const navigation = useNavigation<DrawerNavigationProp<ParamListBase>>();

  return (
    <View style={styles.explore}>
      <StatusBar barStyle="default" />
      <ScrollView
        style={styles.exploreMainView}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.exploreMainViewContent}
      >
        <ImageBackground
          style={styles.parisCardIcon}
          resizeMode="cover"
          source={require("../assets/frame14.png")}
        >
          <View style={styles.heartParent}>
            <Image
              style={[styles.heartIcon, styles.iconLayout1]}
              resizeMode="cover"
              source={require("../assets/heart.png")}
            />
            <View style={styles.description}>
              <Text style={[styles.paris, styles.fromClr, styles.textTypo]}>
                Paris
              </Text>
              <View style={styles.fromParent}>
                <Text style={[styles.from, styles.fromClr]}>FROM</Text>
                <Text style={[styles.text, styles.fromClr, styles.textTypo]}>
                  $1299
                </Text>
              </View>
            </View>
          </View>
        </ImageBackground>
        <View style={[styles.exploreContent, styles.mt20]}>
          <View style={styles.exploreContent}>
            <Text style={styles.upcomingFlight}>Upcoming Flight</Text>
            <View
              style={[
                styles.frameParent,
                styles.mt14,
                styles.offerCardShadowBox,
              ]}
            >
              <View style={[styles.group13Parent, styles.parentFlexBox]}>
                <View>
                  <Text style={[styles.sin, styles.sinTypo]}>SIN</Text>
                  <Text style={[styles.singapore, styles.mt4]}>Singapore</Text>
                </View>
                <View style={[styles.line2Parent, styles.ml18]}>
                  <Image
                    style={[styles.line2Icon, styles.iconLayout]}
                    resizeMode="cover"
                    source={require("../assets/line2.png")}
                  />
                  <Image
                    style={styles.ovalIconLayout}
                    resizeMode="cover"
                    source={require("../assets/oval1.png")}
                  />
                  <Image
                    style={styles.iconFlight}
                    resizeMode="cover"
                    source={require("../assets/icon--flight.png")}
                  />
                  <Image
                    style={styles.ovalIcon2}
                    resizeMode="cover"
                    source={require("../assets/oval1.png")}
                  />
                </View>
                <View style={[styles.group131, styles.ml18]}>
                  <Text style={[styles.sin, styles.sinTypo]}>LAX</Text>
                  <Text style={[styles.singapore, styles.mt4]}>
                    Los Angeles
                  </Text>
                </View>
              </View>
              <Image
                style={[styles.line3Icon, styles.mt16, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/line3.png")}
              />
              <View
                style={[
                  styles.departsOn1May0800AmParent,
                  styles.mt16,
                  styles.parentFlexBox,
                ]}
              >
                <Text style={[styles.departsOn1, styles.departsOn1Typo]}>
                  Departs on: 1 May, 08:00 AM
                </Text>
                <Text style={[styles.daysToGoContainer, styles.departsOn1Typo]}>
                  <Text style={styles.days}>4 days</Text>
                  <Text style={styles.toGo}> to go</Text>
                </Text>
              </View>
            </View>
          </View>
          <ScrollView
            style={[styles.categories, styles.mt30]}
            horizontal
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.categoriesScrollViewContent}
          >
            <View style={styles.categoryBlock}>
              <Image
                style={styles.tagFlight}
                resizeMode="cover"
                source={require("../assets/tag--flight.png")}
              />
              <Text style={[styles.singapore, styles.mt22]}>Flight</Text>
            </View>
            <View style={[styles.categoryBlock, styles.ml6]}>
              <Image
                style={styles.tagFlight}
                resizeMode="cover"
                source={require("../assets/tag--hotel.png")}
              />
              <Text style={[styles.singapore, styles.mt22]}>Hotels</Text>
            </View>
            <View style={[styles.categoryBlock, styles.ml6]}>
              <Image
                style={styles.tagFlight}
                resizeMode="cover"
                source={require("../assets/tag--atractions.png")}
              />
              <Text style={[styles.singapore, styles.mt22]}>Attractions</Text>
            </View>
            <View style={[styles.categoryBlock, styles.ml6]}>
              <Image
                style={styles.tagFlight}
                resizeMode="cover"
                source={require("../assets/tag--eats.png")}
              />
              <Text style={[styles.singapore, styles.mt22]}>Eats</Text>
            </View>
            <View style={[styles.categoryBlock, styles.ml6]}>
              <Image
                style={styles.tagFlight}
                resizeMode="cover"
                source={require("../assets/tag--train.png")}
              />
              <Text style={[styles.singapore, styles.mt22]}>Commute</Text>
            </View>
          </ScrollView>
          <View style={[styles.exploreContent, styles.mt30]}>
            <View style={styles.trendingHeader}>
              <Text style={styles.upcomingFlight}>Trending Destinations</Text>
              <Text style={[styles.seeAll, styles.sinTypo]}>See all</Text>
            </View>
            <ScrollView
              style={[styles.trendingCardsView, styles.mt14]}
              horizontal
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={styles.trendingCardsViewContent}
            >
              <View style={styles.trandingCardsRow}>
                <DestinationCard
                  destinationImage={require("../assets/destination-image.png")}
                  boracay="Boracay"
                  philippines="Philippines"
                  d4N="5D4N"
                />
                <DestinationCard
                  destinationCardMarginLeft={10}
                  destinationImage={require("../assets/destination-image1.png")}
                  destinationImageBorderRadius={2}
                  boracay="Baros"
                  philippines="Maldives"
                  d4N="7D6N"
                />
                <View style={[styles.destinationCardShadowBox, styles.ml10]}>
                  <Image
                    style={[
                      styles.destinationImageIcon1,
                      styles.destinationIconLayout,
                    ]}
                    resizeMode="cover"
                    source={require("../assets/destination-image2.png")}
                  />
                  <View style={[styles.details, styles.mt10]}>
                    <View>
                      <Text style={styles.boracay}>Bali</Text>
                      <Text style={[styles.philippines, styles.mt1]}>
                        Indonesia
                      </Text>
                    </View>
                    <View style={styles.duration}>
                      <Text style={styles.d4n}>3D2N</Text>
                    </View>
                  </View>
                </View>
                <View
                  style={[
                    styles.destinationCard,
                    styles.ml10,
                    styles.destinationCardShadowBox,
                  ]}
                >
                  <Image
                    style={[
                      styles.destinationImageIcon1,
                      styles.destinationIconLayout,
                    ]}
                    resizeMode="cover"
                    source={require("../assets/destination-image3.png")}
                  />
                  <View style={[styles.details, styles.mt10]}>
                    <View>
                      <Text style={styles.boracay}>Palawan</Text>
                      <Text style={[styles.philippines, styles.mt1]}>
                        Philippines
                      </Text>
                    </View>
                    <View style={styles.duration}>
                      <Text style={styles.d4n}>3D2N</Text>
                    </View>
                  </View>
                </View>
              </View>
            </ScrollView>
          </View>
          <View style={[styles.exploreContent, styles.mt30]}>
            <Text style={styles.upcomingFlight}>Offers</Text>
            <ScrollView
              style={[styles.trendingCardsView, styles.mt14]}
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
                    <Text style={styles.text1}>{` `}</Text>
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
                  source={require("../assets/offer-image.png")}
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
                    <Text style={styles.text1}>{` `}</Text>
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
                  source={require("../assets/offer-image1.png")}
                />
              </View>
            </ScrollView>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#fff",
  },
  mt4: {
    marginTop: Margin.m_5xs,
  },
  ml18: {
    marginLeft: Margin.m_2xl,
  },
  mt16: {
    marginTop: Margin.m_lg,
  },
  mt14: {
    marginTop: Margin.m_md,
  },
  mt22: {
    marginTop: Margin.m_4xl,
  },
  ml6: {
    marginLeft: Margin.m_4xs,
  },
  categoriesScrollViewContent: {
    flexDirection: "row",
  },
  mt1: {
    marginTop: Margin.m_8xs,
  },
  mt10: {
    marginTop: Margin.m_xs,
  },
  ml10: {
    marginLeft: Margin.m_xs,
  },
  trendingCardsViewContent: {
    flexDirection: "column",
  },
  ml16: {
    marginLeft: Margin.m_lg,
  },
  offersRowScrollViewContent: {
    flexDirection: "row",
  },
  mt30: {
    marginTop: Margin.m_7xl,
  },
  mt20: {
    marginTop: Margin.m_3xl,
  },
  exploreMainViewContent: {
    flexDirection: "column",
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
  viewFlexBox: {
    padding: Padding.p_3xl,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  ovalIconLayout: {
    zIndex: 1,
    height: 10,
    width: 10,
  },
  iconLayout1: {
    height: 20,
    width: 20,
  },
  fromClr: {
    color: Color.white,
    textAlign: "left",
  },
  textTypo: {
    fontFamily: FontFamily.balooBhai2,
    color: Color.white,
    fontWeight: "700",
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
  parentFlexBox: {
    paddingHorizontal: Padding.p_md,
    flexDirection: "row",
    alignSelf: "stretch",
  },
  sinTypo: {
    color: Color.gray_1000,
    fontFamily: FontFamily.inter,
    textAlign: "left",
  },
  iconLayout: {
    maxWidth: "100%",
    overflow: "hidden",
  },
  departsOn1Typo: {
    fontSize: FontSize.size_lg,
    color: Color.gray_700,
    textAlign: "left",
  },
  destinationCardShadowBox: {
    padding: Padding.p_sm,
    shadowOpacity: 1,
    elevation: 15,
    shadowRadius: 15,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowColor: "rgba(0, 0, 0, 0.03)",
    borderRadius: Border.br_sm,
    backgroundColor: Color.white,
  },
  destinationIconLayout: {
    height: 90,
    width: 131,
  },
  limitedTimeOfferLayout: {
    width: 136,
    textAlign: "left",
  },
  searchTypo: {
    textAlign: "center",
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.roboto,
  },
  heartIcon: {
    overflow: "hidden",
  },
  paris: {
    fontSize: FontSize.size_5xl,
    textAlign: "left",
  },
  from: {
    fontFamily: FontFamily.inter,
    fontSize: FontSize.size_base,
    textAlign: "left",
  },
  text: {
    fontSize: 32,
    textAlign: "left",
  },
  fromParent: {
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
  description: {
    alignItems: "flex-end",
    justifyContent: "space-between",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  heartParent: {
    height: 152,
    alignItems: "flex-end",
    justifyContent: "space-between",
    alignSelf: "stretch",
  },
  parisCardIcon: {
    height: 180,
    paddingHorizontal: Padding.p_4xl,
    paddingVertical: Padding.p_xl,
    justifyContent: "flex-end",
    borderRadius: Border.br_sm,
    alignItems: "center",
    alignSelf: "stretch",
  },
  upcomingFlight: {
    fontSize: FontSize.size_xl,
    lineHeight: 24,
    color: Color.black2,
    fontFamily: FontFamily.inter,
    textAlign: "left",
    fontWeight: "700",
  },
  sin: {
    fontSize: FontSize.size_3xl,
    fontWeight: "700",
  },
  singapore: {
    color: Color.black2,
    fontFamily: FontFamily.inter,
    fontSize: FontSize.size_base,
    textAlign: "left",
  },
  line2Icon: {
    marginTop: -0.79,
    top: "50%",
    right: 8,
    left: 8,
    height: 2,
    position: "absolute",
    zIndex: 0,
  },
  iconFlight: {
    width: 41,
    height: 41,
    zIndex: 2,
  },
  ovalIcon2: {
    zIndex: 3,
    height: 10,
    width: 10,
  },
  line2Parent: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    flex: 1,
  },
  group131: {
    alignItems: "flex-end",
  },
  group13Parent: {
    paddingTop: Padding.p_md,
    alignItems: "center",
  },
  line3Icon: {
    height: 1,
    alignSelf: "stretch",
    width: "100%",
  },
  departsOn1: {
    color: Color.gray_700,
    fontFamily: FontFamily.roboto,
  },
  days: {
    fontFamily: FontFamily.inter,
    fontWeight: "700",
  },
  toGo: {
    fontFamily: FontFamily.inter,
  },
  daysToGoContainer: {
    color: Color.gray_700,
  },
  departsOn1May0800AmParent: {
    paddingBottom: Padding.p_md,
    justifyContent: "space-between",
  },
  frameParent: {
    borderRadius: Border.br_sm,
    overflow: "hidden",
    alignSelf: "stretch",
  },
  exploreContent: {
    alignSelf: "stretch",
  },
  tagFlight: {
    width: 48,
    height: 48,
  },
  categoryBlock: {
    width: 77,
    alignItems: "center",
  },
  categories: {
    alignSelf: "flex-start",
    width: "100%",
  },
  seeAll: {
    fontSize: FontSize.size_base,
  },
  trendingHeader: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  destinationImageIcon1: {
    borderRadius: Border.br_4xs,
  },
  boracay: {
    fontWeight: "600",
    color: Color.black2,
    fontFamily: FontFamily.inter,
    fontSize: FontSize.size_base,
    textAlign: "left",
  },
  philippines: {
    fontSize: FontSize.size_xs,
    color: Color.gray_700,
    fontFamily: FontFamily.inter,
    textAlign: "left",
  },
  d4n: {
    color: Color.gray_800,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.inter,
    textAlign: "left",
  },
  duration: {
    borderRadius: Border.br_2xs,
    paddingHorizontal: Padding.p_4xs,
    paddingVertical: Padding.p_5xs,
    overflow: "hidden",
    flexDirection: "row",
    backgroundColor: Color.studioLightmodeLightBGF8F9FB,
  },
  details: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  destinationCard: {
    width: 151,
  },
  trandingCardsRow: {
    flexDirection: "row",
  },
  trendingCardsView: {
    alignSelf: "stretch",
    width: "100%",
  },
  discount: {
    fontFamily: FontFamily.roboto,
    fontWeight: "700",
  },
  text1: {
    fontWeight: "500",
    fontFamily: FontFamily.roboto,
  },
  forMastercardUsers: {
    fontFamily: FontFamily.roboto,
  },
  discountForMastercardContainer: {
    lineHeight: 19,
    color: Color.black2,
    fontSize: FontSize.size_base,
  },
  limitedTimeOffer: {
    lineHeight: 18,
    color: Color.gray999,
    fontSize: FontSize.size_xs,
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
    width: 264,
    height: 86,
    borderRadius: Border.br_sm,
  },
  exploreMainView: {
    alignSelf: "stretch",
    flex: 1,
  },
  explore: {
    width: "100%",
    flex: 1,
    backgroundColor: Color.studioLightmodeLightBGF8F9FB,
  },
});

export default Explore;
