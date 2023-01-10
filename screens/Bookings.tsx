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
  Color,
  Padding,
  FontFamily,
  FontSize,
  Border,
} from "../GlobalStyles";

const Bookings = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.bookings}>
      <StatusBar barStyle="default" />
      <ScrollView
        style={styles.bookingsBody}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.bookingsBodyScrollViewContent}
      >
        <Text style={[styles.upcomingBookings, styles.sinTypo]}>
          Upcoming Bookings
        </Text>
        <View
          style={[styles.bookingCard, styles.mt14, styles.bottomTabShadowBox]}
        >
          <Image
            style={[styles.bookingImageIcon, styles.iconLayout1]}
            resizeMode="cover"
            source={require("../assets/booking-image.png")}
          />
          <View
            style={[
              styles.bookingDetails,
              styles.mt17,
              styles.editButtonSpaceBlock,
            ]}
          >
            <View style={styles.group13Parent}>
              <View>
                <Text style={[styles.sin, styles.sinClr, styles.sinTypo]}>
                  SIN
                </Text>
                <Text
                  style={[styles.singapore, styles.mt6, styles.singaporeTypo]}
                >
                  Singapore
                </Text>
                <Text
                  style={[styles.terminal1, styles.mt6, styles.singaporeTypo]}
                >
                  Terminal 1
                </Text>
              </View>
              <View
                style={[styles.line2Parent, styles.ml18, styles.viewFlexBox]}
              >
                <Image
                  style={[styles.line2Icon, styles.iconLayout1]}
                  resizeMode="cover"
                  source={require("../assets/line26.png")}
                />
                <Image
                  style={[styles.ovalIcon, styles.ovalIconLayout]}
                  resizeMode="cover"
                  source={require("../assets/oval13.png")}
                />
                <Image
                  style={styles.iconFlight}
                  resizeMode="cover"
                  source={require("../assets/icon--flight6.png")}
                />
                <Image
                  style={[styles.ovalIcon1, styles.ovalIconLayout]}
                  resizeMode="cover"
                  source={require("../assets/oval13.png")}
                />
              </View>
              <View style={[styles.group131, styles.ml18]}>
                <Text style={[styles.sin, styles.sinClr, styles.sinTypo]}>
                  LAX
                </Text>
                <Text
                  style={[styles.singapore, styles.mt6, styles.singaporeTypo]}
                >
                  Los Angeles
                </Text>
                <Text
                  style={[styles.terminal1, styles.mt6, styles.singaporeTypo]}
                >
                  Terminal 4
                </Text>
              </View>
            </View>
            <View
              style={[
                styles.frameParent,
                styles.mt14,
                styles.frameParentFlexBox,
                styles.editButtonSpaceBlock,
              ]}
            >
              <View style={styles.groupParent}>
                <View style={styles.groupChildLayout}>
                  <View style={[styles.groupChild, styles.groupChildLayout]} />
                  <Image
                    style={styles.image2Icon}
                    resizeMode="cover"
                    source={require("../assets/image-22.png")}
                  />
                </View>
                <Text
                  style={[
                    styles.hr40minLayout,
                    styles.ml8,
                    styles.singaporeTypo,
                  ]}
                >
                  United Airlines
                </Text>
              </View>
              <View style={styles.fluenttimer24RegularParent}>
                <Image
                  style={styles.fluenttimer24RegularIcon}
                  resizeMode="cover"
                  source={require("../assets/fluenttimer24regular5.png")}
                />
                <Text
                  style={[styles.hr40min, styles.ml4, styles.hr40minLayout]}
                >
                  01 hr 40min
                </Text>
              </View>
            </View>
            <Text style={[styles.singaporeTypo, styles.mt14, styles.sinClr]}>
              Show more details...
            </Text>
            <View
              style={[
                styles.bookingDetailsChild,
                styles.mt14,
                styles.frameParentFlexBox,
              ]}
            />
          </View>
          <View
            style={[
              styles.editButton,
              styles.mt17,
              styles.editButtonSpaceBlock,
            ]}
          >
            <View style={styles.buttonPrimary}>
              <Text style={styles.viewDetails}>Edit Booking</Text>
            </View>
          </View>
        </View>
      </ScrollView>
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
  mt6: {
    marginTop: Margin.m_4xs,
  },
  ml18: {
    marginLeft: Margin.m_2xl,
  },
  ml8: {
    marginLeft: Margin.m_2xs,
  },
  ml4: {
    marginLeft: Margin.m_5xs,
  },
  mt14: {
    marginTop: Margin.m_md,
  },
  mt17: {
    marginTop: Margin.m_xl,
  },
  bookingsBodyScrollViewContent: {
    flexDirection: "column",
    paddingHorizontal: 16,
    paddingVertical: 31,
  },
  viewFlexBox: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  iconLayout2: {
    height: 32,
    width: 32,
  },
  sinTypo: {
    fontWeight: "700",
    textAlign: "left",
  },
  bottomTabShadowBox: {
    shadowOpacity: 1,
    elevation: 15,
    shadowRadius: 15,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowColor: "rgba(0, 0, 0, 0.03)",
    backgroundColor: Color.white,
    alignSelf: "stretch",
  },
  iconLayout1: {
    maxWidth: "100%",
    overflow: "hidden",
  },
  editButtonSpaceBlock: {
    paddingHorizontal: Padding.p_md,
    alignSelf: "stretch",
  },
  sinClr: {
    color: Color.gray_1000,
    fontFamily: FontFamily.inter,
  },
  singaporeTypo: {
    fontSize: FontSize.size_base,
    textAlign: "left",
  },
  ovalIconLayout: {
    height: 10,
    width: 10,
  },
  frameParentFlexBox: {
    borderRadius: Border.br_3xs,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: Color.studioLightmodeLightBGF8F9FB,
  },
  groupChildLayout: {
    width: 48,
    height: 32,
  },
  hr40minLayout: {
    lineHeight: 16,
    color: Color.gray_700,
    fontFamily: FontFamily.inter,
  },
  searchTypo: {
    fontFamily: FontFamily.roboto,
    fontSize: FontSize.size_sm,
    textAlign: "center",
  },
  iconLayout: {
    height: 20,
    width: 20,
  },
  upcomingBookings: {
    lineHeight: 24,
    fontWeight: "700",
    color: Color.black2,
    fontFamily: FontFamily.inter,
    fontSize: FontSize.size_xl,
  },
  bookingImageIcon: {
    height: 121,
    borderRadius: Border.br_sm,
    alignSelf: "stretch",
    width: "100%",
  },
  sin: {
    fontSize: FontSize.size_3xl,
  },
  singapore: {
    color: Color.black2,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.inter,
  },
  terminal1: {
    color: Color.gray_700,
    fontFamily: FontFamily.inter,
    fontSize: FontSize.size_base,
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
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  groupChild: {
    top: 0,
    left: 0,
    borderRadius: Border.br_2xs,
    borderStyle: "solid",
    borderColor: "#f6f6f6",
    borderWidth: 1,
    position: "absolute",
  },
  image2Icon: {
    top: 12,
    left: 5,
    width: 36,
    height: 8,
    position: "absolute",
  },
  groupParent: {
    alignItems: "center",
    flexDirection: "row",
  },
  fluenttimer24RegularIcon: {
    width: 19,
    height: 19,
    overflow: "hidden",
  },
  hr40min: {
    fontSize: FontSize.size_xs,
    textAlign: "right",
  },
  fluenttimer24RegularParent: {
    justifyContent: "flex-end",
    alignItems: "center",
    flexDirection: "row",
  },
  frameParent: {
    paddingVertical: Padding.p_2xs,
    flexDirection: "row",
  },
  bookingDetailsChild: {
    width: 323,
    height: 1,
  },
  bookingDetails: {
    paddingVertical: 0,
    justifyContent: "center",
  },
  viewDetails: {
    color: Color.white,
    width: 120,
    textAlign: "center",
    fontSize: FontSize.size_base,
    lineHeight: 24,
    fontFamily: FontFamily.inter,
    fontWeight: "600",
  },
  buttonPrimary: {
    borderRadius: Border.br_xs,
    backgroundColor: Color.orange,
    paddingHorizontal: Padding.p_6xl,
    paddingVertical: Padding.p_sm,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  editButton: {
    paddingBottom: Padding.p_md,
  },
  bookingCard: {
    borderRadius: Border.br_sm,
  },
  bookingsBody: {
    alignSelf: "stretch",
    flex: 1,
  },
  bookings: {
    width: "100%",
    flex: 1,
    backgroundColor: Color.studioLightmodeLightBGF8F9FB,
  },
});

export default Bookings;
