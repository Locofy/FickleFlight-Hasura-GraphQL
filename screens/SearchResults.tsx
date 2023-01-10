import * as React from "react";
import {
  StatusBar,
  StyleSheet,
  SafeAreaView,
  Pressable,
  Image,
  Text,
  View,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  Margin,
  FontFamily,
  FontSize,
  Padding,
  Color,
  Border,
} from "../GlobalStyles";

const SearchResults = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.searchResults}>
      <StatusBar barStyle="default" />
      <ScrollView
        style={styles.searchResultsBody}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.searchResultsBodyContent}
      >
        <View style={[styles.listHeader, styles.viewFrameFlexBox]}>
          <Text style={[styles.resultsFound, styles.singaporeTypo]}>
            35 results found
          </Text>
          <Image
            style={styles.vectorIcon}
            resizeMode="cover"
            source={require("../assets/vector.png")}
          />
        </View>
        <View style={styles.listItems}>
          <View style={styles.flightCardHolder}>
            <View style={styles.flightCard}>
              <View style={[styles.frameGroup, styles.viewFrameFlexBox]}>
                <View style={styles.parentFlexBox1}>
                  <View style={styles.rectangleParent}>
                    <View style={styles.groupChild} />
                    <Image
                      style={[styles.image2Icon, styles.iconLayout1]}
                      resizeMode="cover"
                      source={require("../assets/image-2.png")}
                    />
                  </View>
                  <Text style={[styles.unitedAirlines, styles.ml8]}>
                    United Airlines
                  </Text>
                </View>
                <View style={styles.parentFlexBox1}>
                  <Image
                    style={styles.fluenttimer24RegularIcon}
                    resizeMode="cover"
                    source={require("../assets/fluenttimer24regular.png")}
                  />
                  <Text style={[styles.hr40min, styles.ml4, styles.fromTypo]}>
                    01 hr 40min
                  </Text>
                </View>
              </View>
              <View
                style={[
                  styles.group13Parent,
                  styles.mt14,
                  styles.frameSpaceBlock,
                  styles.parentFlexBox1,
                ]}
              >
                <View>
                  <Text style={[styles.sin1, styles.sinTypo]}>SIN</Text>
                  <Text
                    style={[styles.singapore, styles.mt4, styles.singaporeTypo]}
                  >
                    Singapore
                  </Text>
                </View>
                <View
                  style={[
                    styles.line2Parent,
                    styles.ml18,
                    styles.viewFrameFlexBox,
                  ]}
                >
                  <Image
                    style={[styles.line2Icon, styles.iconLayout]}
                    resizeMode="cover"
                    source={require("../assets/line2.png")}
                  />
                  <Image
                    style={[styles.ovalIcon, styles.ovalIconLayout]}
                    resizeMode="cover"
                    source={require("../assets/oval1.png")}
                  />
                  <Image
                    style={styles.iconFlight}
                    resizeMode="cover"
                    source={require("../assets/icon--flight.png")}
                  />
                  <Image
                    style={[styles.ovalIcon1, styles.ovalIconLayout]}
                    resizeMode="cover"
                    source={require("../assets/oval1.png")}
                  />
                </View>
                <View style={[styles.group131, styles.ml18]}>
                  <Text style={[styles.sin1, styles.sinTypo]}>LAX</Text>
                  <Text
                    style={[styles.singapore, styles.mt4, styles.singaporeTypo]}
                  >
                    Los Angeles
                  </Text>
                </View>
              </View>
              <Image
                style={[styles.line3Icon, styles.mt14, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/line3.png")}
              />
              <View
                style={[
                  styles.frameContainer,
                  styles.mt14,
                  styles.frameSpaceBlock,
                ]}
              >
                <View
                  style={[
                    styles.frameView,
                    styles.frameSpaceBlock,
                    styles.viewFrameFlexBox,
                  ]}
                >
                  <View style={styles.chairParent}>
                    <Image
                      style={styles.chairIcon}
                      resizeMode="cover"
                      source={require("../assets/chair.png")}
                    />
                    <Text
                      style={[
                        styles.businessClass,
                        styles.ml8,
                        styles.businessTypo,
                      ]}
                    >
                      Business Class
                    </Text>
                  </View>
                  <View style={styles.parentFlexBox1}>
                    <Text style={[styles.from, styles.fromTypo]}>From</Text>
                    <Text style={[styles.textTypo, styles.ml4]}>$1128</Text>
                  </View>
                </View>
                <View
                  style={[
                    styles.buttonPrimary,
                    styles.mt10,
                    styles.buttonFlexBox,
                  ]}
                >
                  <Text style={[styles.viewDetails, styles.viewTypo]}>
                    View Details
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.flightCardHolder}>
            <View style={styles.flightCard}>
              <View style={[styles.frameGroup, styles.viewFrameFlexBox]}>
                <View style={styles.parentFlexBox1}>
                  <View style={styles.rectangleParent}>
                    <View style={styles.groupChild} />
                    <Image
                      style={[styles.image2Icon, styles.iconLayout1]}
                      resizeMode="cover"
                      source={require("../assets/image-2.png")}
                    />
                  </View>
                  <Text style={[styles.unitedAirlines, styles.ml8]}>
                    United Airlines
                  </Text>
                </View>
                <View style={styles.parentFlexBox1}>
                  <Image
                    style={styles.fluenttimer24RegularIcon}
                    resizeMode="cover"
                    source={require("../assets/fluenttimer24regular.png")}
                  />
                  <Text style={[styles.hr40min, styles.ml4, styles.fromTypo]}>
                    02 hr 10min
                  </Text>
                </View>
              </View>
              <View
                style={[
                  styles.group13Parent,
                  styles.mt14,
                  styles.frameSpaceBlock,
                  styles.parentFlexBox1,
                ]}
              >
                <View>
                  <Text style={[styles.sin1, styles.sinTypo]}>SIN</Text>
                  <Text
                    style={[styles.singapore, styles.mt4, styles.singaporeTypo]}
                  >
                    Singapore
                  </Text>
                </View>
                <View
                  style={[
                    styles.line2Parent,
                    styles.ml18,
                    styles.viewFrameFlexBox,
                  ]}
                >
                  <Image
                    style={[styles.line2Icon, styles.iconLayout]}
                    resizeMode="cover"
                    source={require("../assets/line2.png")}
                  />
                  <Image
                    style={[styles.ovalIcon, styles.ovalIconLayout]}
                    resizeMode="cover"
                    source={require("../assets/oval1.png")}
                  />
                  <Image
                    style={styles.iconFlight}
                    resizeMode="cover"
                    source={require("../assets/icon--flight.png")}
                  />
                  <Image
                    style={[styles.ovalIcon1, styles.ovalIconLayout]}
                    resizeMode="cover"
                    source={require("../assets/oval1.png")}
                  />
                </View>
                <View style={[styles.group131, styles.ml18]}>
                  <Text style={[styles.sin1, styles.sinTypo]}>LAX</Text>
                  <Text
                    style={[styles.singapore, styles.mt4, styles.singaporeTypo]}
                  >
                    Los Angeles
                  </Text>
                </View>
              </View>
              <Image
                style={[styles.line3Icon, styles.mt14, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/line3.png")}
              />
              <View
                style={[
                  styles.frameContainer,
                  styles.mt14,
                  styles.frameSpaceBlock,
                ]}
              >
                <View
                  style={[
                    styles.frameView,
                    styles.frameSpaceBlock,
                    styles.viewFrameFlexBox,
                  ]}
                >
                  <View style={styles.chairParent}>
                    <Image
                      style={styles.chairIcon}
                      resizeMode="cover"
                      source={require("../assets/chair.png")}
                    />
                    <Text
                      style={[
                        styles.businessClass,
                        styles.ml8,
                        styles.businessTypo,
                      ]}
                    >
                      Business Class
                    </Text>
                  </View>
                  <View style={styles.parentFlexBox1}>
                    <Text style={[styles.from, styles.fromTypo]}>From</Text>
                    <Text style={[styles.textTypo, styles.ml4]}>$1420</Text>
                  </View>
                </View>
                <View
                  style={[
                    styles.buttonPrimary,
                    styles.mt10,
                    styles.buttonFlexBox,
                  ]}
                >
                  <Text style={[styles.viewDetails, styles.viewTypo]}>
                    View Details
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.flightCardHolder}>
            <View style={styles.flightCard}>
              <View style={[styles.frameGroup, styles.viewFrameFlexBox]}>
                <View style={styles.parentFlexBox1}>
                  <View style={styles.rectangleParent}>
                    <View style={styles.groupChild} />
                    <Image
                      style={[styles.image3Icon, styles.iconLayout1]}
                      resizeMode="cover"
                      source={require("../assets/image-3.png")}
                    />
                  </View>
                  <Text style={[styles.unitedAirlines, styles.ml8]}>
                    Asiana Airlines
                  </Text>
                </View>
                <View style={styles.parentFlexBox1}>
                  <Image
                    style={styles.fluenttimer24RegularIcon}
                    resizeMode="cover"
                    source={require("../assets/fluenttimer24regular.png")}
                  />
                  <Text style={[styles.hr40min, styles.ml4, styles.fromTypo]}>
                    02 hr 38min
                  </Text>
                </View>
              </View>
              <View
                style={[
                  styles.group13Parent,
                  styles.mt14,
                  styles.frameSpaceBlock,
                  styles.parentFlexBox1,
                ]}
              >
                <View>
                  <Text style={[styles.sin1, styles.sinTypo]}>SIN</Text>
                  <Text
                    style={[styles.singapore, styles.mt4, styles.singaporeTypo]}
                  >
                    Singapore
                  </Text>
                </View>
                <View
                  style={[
                    styles.line2Parent,
                    styles.ml18,
                    styles.viewFrameFlexBox,
                  ]}
                >
                  <Image
                    style={[styles.line2Icon, styles.iconLayout]}
                    resizeMode="cover"
                    source={require("../assets/line2.png")}
                  />
                  <Image
                    style={[styles.ovalIcon, styles.ovalIconLayout]}
                    resizeMode="cover"
                    source={require("../assets/oval1.png")}
                  />
                  <Image
                    style={styles.iconFlight}
                    resizeMode="cover"
                    source={require("../assets/icon--flight.png")}
                  />
                  <Image
                    style={[styles.ovalIcon1, styles.ovalIconLayout]}
                    resizeMode="cover"
                    source={require("../assets/oval1.png")}
                  />
                </View>
                <View style={[styles.group131, styles.ml18]}>
                  <Text style={[styles.sin1, styles.sinTypo]}>LAX</Text>
                  <Text
                    style={[styles.singapore, styles.mt4, styles.singaporeTypo]}
                  >
                    Los Angeles
                  </Text>
                </View>
              </View>
              <Image
                style={[styles.line3Icon, styles.mt14, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/line3.png")}
              />
              <View
                style={[
                  styles.frameContainer,
                  styles.mt14,
                  styles.frameSpaceBlock,
                ]}
              >
                <View
                  style={[
                    styles.frameView,
                    styles.frameSpaceBlock,
                    styles.viewFrameFlexBox,
                  ]}
                >
                  <View style={styles.chairParent}>
                    <Image
                      style={styles.chairIcon}
                      resizeMode="cover"
                      source={require("../assets/chair.png")}
                    />
                    <Text
                      style={[
                        styles.businessClass,
                        styles.ml8,
                        styles.businessTypo,
                      ]}
                    >
                      Business Class
                    </Text>
                  </View>
                  <View style={styles.parentFlexBox1}>
                    <Text style={[styles.from, styles.fromTypo]}>From</Text>
                    <Text style={[styles.textTypo, styles.ml4]}>$1550</Text>
                  </View>
                </View>
                <View
                  style={[
                    styles.buttonPrimary,
                    styles.mt10,
                    styles.buttonFlexBox,
                  ]}
                >
                  <Text style={[styles.viewDetails, styles.viewTypo]}>
                    View Details
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.flightCardHolder}>
            <View style={styles.flightCard}>
              <View style={[styles.frameGroup, styles.viewFrameFlexBox]}>
                <View style={styles.parentFlexBox1}>
                  <View style={styles.rectangleParent}>
                    <View style={styles.groupChild} />
                    <Image
                      style={styles.image4Icon}
                      resizeMode="cover"
                      source={require("../assets/image-4.png")}
                    />
                  </View>
                  <Text style={[styles.unitedAirlines, styles.ml8]}>
                    Lufthansa Airlines
                  </Text>
                </View>
                <View style={styles.parentFlexBox1}>
                  <Image
                    style={styles.fluenttimer24RegularIcon}
                    resizeMode="cover"
                    source={require("../assets/fluenttimer24regular.png")}
                  />
                  <Text style={[styles.hr40min, styles.ml4, styles.fromTypo]}>
                    03 hr 15min
                  </Text>
                </View>
              </View>
              <View
                style={[
                  styles.group13Parent,
                  styles.mt14,
                  styles.frameSpaceBlock,
                  styles.parentFlexBox1,
                ]}
              >
                <View>
                  <Text style={[styles.sin1, styles.sinTypo]}>SIN</Text>
                  <Text
                    style={[styles.singapore, styles.mt4, styles.singaporeTypo]}
                  >
                    Singapore
                  </Text>
                </View>
                <View
                  style={[
                    styles.line2Parent,
                    styles.ml18,
                    styles.viewFrameFlexBox,
                  ]}
                >
                  <Image
                    style={[styles.line2Icon, styles.iconLayout]}
                    resizeMode="cover"
                    source={require("../assets/line2.png")}
                  />
                  <Image
                    style={[styles.ovalIcon, styles.ovalIconLayout]}
                    resizeMode="cover"
                    source={require("../assets/oval1.png")}
                  />
                  <Image
                    style={styles.iconFlight}
                    resizeMode="cover"
                    source={require("../assets/icon--flight.png")}
                  />
                  <Image
                    style={[styles.ovalIcon1, styles.ovalIconLayout]}
                    resizeMode="cover"
                    source={require("../assets/oval1.png")}
                  />
                </View>
                <View style={[styles.group131, styles.ml18]}>
                  <Text style={[styles.sin1, styles.sinTypo]}>LAX</Text>
                  <Text
                    style={[styles.singapore, styles.mt4, styles.singaporeTypo]}
                  >
                    Los Angeles
                  </Text>
                </View>
              </View>
              <Image
                style={[styles.line3Icon, styles.mt14, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/line3.png")}
              />
              <View
                style={[
                  styles.frameContainer,
                  styles.mt14,
                  styles.frameSpaceBlock,
                ]}
              >
                <View
                  style={[
                    styles.frameView,
                    styles.frameSpaceBlock,
                    styles.viewFrameFlexBox,
                  ]}
                >
                  <View style={styles.chairParent}>
                    <Image
                      style={styles.chairIcon}
                      resizeMode="cover"
                      source={require("../assets/chair.png")}
                    />
                    <Text style={[styles.economyClass, styles.ml8]}>
                      Economy Class
                    </Text>
                  </View>
                  <View style={styles.parentFlexBox1}>
                    <Text style={[styles.from, styles.fromTypo]}>From</Text>
                    <Text style={[styles.textTypo, styles.ml4]}>$1650</Text>
                  </View>
                </View>
                <View
                  style={[
                    styles.buttonPrimary,
                    styles.mt10,
                    styles.buttonFlexBox,
                  ]}
                >
                  <Text style={[styles.viewDetails, styles.viewTypo]}>
                    View Details
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.flightCardHolder}>
            <View style={styles.flightCard}>
              <View style={[styles.frameGroup, styles.viewFrameFlexBox]}>
                <View style={styles.parentFlexBox1}>
                  <View style={styles.rectangleParent}>
                    <View style={styles.groupChild} />
                    <Image
                      style={[styles.image3Icon, styles.iconLayout1]}
                      resizeMode="cover"
                      source={require("../assets/image-3.png")}
                    />
                  </View>
                  <Text style={[styles.unitedAirlines, styles.ml8]}>
                    Asiana Airlines
                  </Text>
                </View>
                <View style={styles.parentFlexBox1}>
                  <Image
                    style={styles.fluenttimer24RegularIcon}
                    resizeMode="cover"
                    source={require("../assets/fluenttimer24regular.png")}
                  />
                  <Text style={[styles.hr40min, styles.ml4, styles.fromTypo]}>
                    03 hr 38min
                  </Text>
                </View>
              </View>
              <View
                style={[
                  styles.group13Parent,
                  styles.mt14,
                  styles.frameSpaceBlock,
                  styles.parentFlexBox1,
                ]}
              >
                <View>
                  <Text style={[styles.sin1, styles.sinTypo]}>SIN</Text>
                  <Text
                    style={[styles.singapore, styles.mt4, styles.singaporeTypo]}
                  >
                    Singapore
                  </Text>
                </View>
                <View
                  style={[
                    styles.line2Parent,
                    styles.ml18,
                    styles.viewFrameFlexBox,
                  ]}
                >
                  <Image
                    style={[styles.line2Icon, styles.iconLayout]}
                    resizeMode="cover"
                    source={require("../assets/line2.png")}
                  />
                  <Image
                    style={[styles.ovalIcon, styles.ovalIconLayout]}
                    resizeMode="cover"
                    source={require("../assets/oval1.png")}
                  />
                  <Image
                    style={styles.iconFlight}
                    resizeMode="cover"
                    source={require("../assets/icon--flight.png")}
                  />
                  <Image
                    style={[styles.ovalIcon1, styles.ovalIconLayout]}
                    resizeMode="cover"
                    source={require("../assets/oval1.png")}
                  />
                </View>
                <View style={[styles.group131, styles.ml18]}>
                  <Text style={[styles.sin1, styles.sinTypo]}>LAX</Text>
                  <Text
                    style={[styles.singapore, styles.mt4, styles.singaporeTypo]}
                  >
                    Los Angeles
                  </Text>
                </View>
              </View>
              <Image
                style={[styles.line3Icon, styles.mt14, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/line3.png")}
              />
              <View
                style={[
                  styles.frameContainer,
                  styles.mt14,
                  styles.frameSpaceBlock,
                ]}
              >
                <View
                  style={[
                    styles.frameView,
                    styles.frameSpaceBlock,
                    styles.viewFrameFlexBox,
                  ]}
                >
                  <View style={styles.chairParent}>
                    <Image
                      style={styles.chairIcon}
                      resizeMode="cover"
                      source={require("../assets/chair.png")}
                    />
                    <Text
                      style={[
                        styles.businessClass3,
                        styles.ml8,
                        styles.businessTypo,
                      ]}
                    >
                      Business Class
                    </Text>
                  </View>
                  <View style={styles.parentFlexBox1}>
                    <Text style={[styles.from4, styles.fromTypo]}>From</Text>
                    <Text style={[styles.text4, styles.ml4, styles.textTypo]}>
                      $450
                    </Text>
                  </View>
                </View>
                <View
                  style={[
                    styles.buttonPrimary4,
                    styles.mt10,
                    styles.buttonFlexBox,
                  ]}
                >
                  <Text style={[styles.viewDetails4, styles.viewTypo]}>
                    View Details
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  ml6: {
    marginLeft: Margin.m_4xs,
  },
  mt3: {
    marginTop: Margin.m_6xs,
  },
  mt4: {
    marginTop: Margin.m_5xs,
  },
  group4: {
    backgroundColor: "#fff",
  },
  ml8: {
    marginLeft: Margin.m_2xs,
  },
  ml4: {
    marginLeft: Margin.m_5xs,
  },
  ml18: {
    marginLeft: Margin.m_2xl,
  },
  mt10: {
    marginTop: Margin.m_xs,
  },
  mt14: {
    marginTop: Margin.m_md,
  },
  searchResultsBodyContent: {
    flexDirection: "column",
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
  viewFrameFlexBox: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  parentFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  sinTypo: {
    textAlign: "left",
    fontFamily: FontFamily.inter,
  },
  singaporeTypo: {
    fontSize: FontSize.size_base,
    textAlign: "left",
    fontFamily: FontFamily.inter,
  },
  iconLayout1: {
    width: 36,
    position: "absolute",
  },
  fromTypo: {
    textAlign: "right",
    fontSize: FontSize.size_xs,
    lineHeight: 16,
    fontFamily: FontFamily.inter,
  },
  frameSpaceBlock: {
    paddingHorizontal: Padding.p_md,
    alignSelf: "stretch",
  },
  parentFlexBox1: {
    alignItems: "center",
    flexDirection: "row",
  },
  iconLayout: {
    maxWidth: "100%",
    overflow: "hidden",
  },
  ovalIconLayout: {
    height: 10,
    width: 10,
  },
  businessTypo: {
    width: 85,
    fontSize: FontSize.size_xs,
    lineHeight: 16,
    textAlign: "left",
    fontFamily: FontFamily.inter,
  },
  buttonFlexBox: {
    paddingHorizontal: Padding.p_6xl,
    backgroundColor: Color.orange,
    borderRadius: Border.br_xs,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  viewTypo: {
    width: 120,
    color: Color.white,
    lineHeight: 24,
    textAlign: "center",
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.inter,
  },
  textTypo: {
    lineHeight: 24,
    textAlign: "right",
    color: Color.black2,
    fontFamily: FontFamily.inter,
    fontWeight: "600",
    fontSize: FontSize.size_xl,
  },
  resultsFound: {
    color: Color.gray_700,
  },
  vectorIcon: {
    width: 17,
    height: 15,
  },
  listHeader: {
    paddingBottom: 11,
    alignSelf: "stretch",
  },
  groupChild: {
    top: 0,
    left: 0,
    borderStyle: "solid",
    borderColor: "#f6f6f6",
    borderWidth: 1,
    borderRadius: Border.br_2xs,
    width: 48,
    position: "absolute",
    height: 32,
  },
  image2Icon: {
    top: 12,
    left: 5,
    height: 8,
  },
  rectangleParent: {
    width: 48,
    height: 32,
  },
  unitedAirlines: {
    color: Color.gray_700,
    lineHeight: 16,
    fontSize: FontSize.size_base,
    textAlign: "left",
    fontFamily: FontFamily.inter,
  },
  fluenttimer24RegularIcon: {
    width: 19,
    height: 19,
    overflow: "hidden",
  },
  hr40min: {
    color: Color.gray_700,
  },
  frameGroup: {
    paddingHorizontal: Padding.p_xl,
    paddingTop: Padding.p_md,
    alignSelf: "stretch",
  },
  sin1: {
    fontSize: FontSize.size_3xl,
    fontWeight: "700",
    color: Color.gray_1000,
  },
  singapore: {
    color: Color.black2,
  },
  line2Icon: {
    marginTop: -0.79,
    top: "50%",
    right: 8,
    left: 8,
    height: 2,
    zIndex: 0,
    position: "absolute",
  },
  ovalIcon: {
    zIndex: 1,
  },
  iconFlight: {
    width: 41,
    height: 41,
    zIndex: 2,
  },
  ovalIcon1: {
    zIndex: 3,
  },
  line2Parent: {
    flex: 1,
  },
  group131: {
    alignItems: "flex-end",
  },
  group13Parent: {
    paddingVertical: 0,
  },
  line3Icon: {
    height: 1,
    alignSelf: "stretch",
    width: "100%",
  },
  chairIcon: {
    width: 16,
    height: 16,
    overflow: "hidden",
  },
  businessClass: {
    color: Color.black2,
  },
  chairParent: {
    flexDirection: "row",
  },
  from: {
    color: Color.gray_400,
    width: 32,
  },
  frameView: {
    paddingVertical: Padding.p_4xs,
    borderRadius: Border.br_2xs,
    backgroundColor: Color.studioLightmodeLightBGF8F9FB,
  },
  viewDetails: {
    fontWeight: "600",
  },
  buttonPrimary: {
    paddingVertical: Padding.p_sm,
  },
  frameContainer: {
    paddingBottom: Padding.p_md,
  },
  flightCard: {
    borderRadius: Border.br_sm,
    shadowColor: "rgba(0, 0, 0, 0.03)",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 15,
    elevation: 15,
    shadowOpacity: 1,
    overflow: "hidden",
    alignSelf: "stretch",
    backgroundColor: Color.white,
  },
  flightCardHolder: {
    paddingBottom: Padding.p_xs,
    alignSelf: "stretch",
  },
  image3Icon: {
    top: 9,
    left: 6,
    height: 15,
  },
  image4Icon: {
    top: 11,
    left: 4,
    width: 40,
    height: 9,
    position: "absolute",
  },
  economyClass: {
    fontSize: FontSize.size_xs,
    lineHeight: 16,
    textAlign: "left",
    color: Color.black2,
    fontFamily: FontFamily.inter,
  },
  businessClass3: {
    color: Color.gray555,
  },
  from4: {
    fontWeight: "300",
    color: Color.gray_700,
    width: 32,
  },
  text4: {
    width: 48,
  },
  viewDetails4: {
    fontWeight: "500",
  },
  buttonPrimary4: {
    paddingVertical: Padding.p_2xs,
  },
  listItems: {
    alignSelf: "stretch",
  },
  searchResultsBody: {
    alignSelf: "stretch",
    flex: 1,
  },
  searchResults: {
    width: "100%",
    flex: 1,
    backgroundColor: Color.studioLightmodeLightBGF8F9FB,
  },
});

export default SearchResults;
