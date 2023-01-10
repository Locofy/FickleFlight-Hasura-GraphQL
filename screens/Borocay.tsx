import * as React from "react";
import {
  Pressable,
  Image,
  StyleSheet,
  View,
  Text,
  ScrollView,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  Margin,
  Color,
  Border,
  FontFamily,
  Padding,
  FontSize,
} from "../GlobalStyles";

const Borocay = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.borocay}>
      <ImageBackground
        style={[styles.borocayScreenIcon, styles.titleFlexBox]}
        resizeMode="cover"
        source={require("../assets/borocayscreen.png")}
      >
        <View style={styles.header}>
          <Pressable
            style={[
              styles.backArrow,
              styles.heartFlexBox,
              styles.heartShadowBox,
              styles.heartShadowBox1,
            ]}
            onPress={() => navigation.goBack()}
          >
            <Image
              style={styles.iconBack}
              resizeMode="cover"
              source={require("../assets/icon--back.png")}
            />
          </Pressable>
          <View
            style={[
              styles.heart,
              styles.heartFlexBox,
              styles.heartShadowBox,
              styles.heartShadowBox1,
            ]}
          >
            <Image
              style={styles.iconHeart}
              resizeMode="cover"
              source={require("../assets/icon--heart.png")}
            />
          </View>
        </View>
        <View style={[styles.bottomDrawer, styles.heartShadowBox]}>
          <View style={styles.bottomDrawerContent}>
            <View style={[styles.title, styles.titleFlexBox]}>
              <View style={styles.frameParent}>
                <View>
                  <Text
                    style={[styles.boracay, styles.textClr, styles.textTypo]}
                  >
                    Boracay
                  </Text>
                  <Text style={[styles.philippines, styles.mt2]}>
                    Philippines
                  </Text>
                </View>
                <View style={[styles.d4nWrapper, styles.ml3]}>
                  <Text style={styles.d4n}>5D4N</Text>
                </View>
              </View>
              <Text style={[styles.text, styles.textClr, styles.textTypo]}>
                $349
              </Text>
            </View>
            <View style={[styles.overviewText, styles.mt24]}>
              <Text
                style={[
                  styles.overview,
                  styles.photosLayout,
                  styles.overviewPosition,
                ]}
              >
                Overview
              </Text>
              <Text
                style={[
                  styles.spend5Days,
                  styles.photosLayout,
                  styles.overviewPosition,
                ]}
              >
                Spend 5 days and 4 nights in one of the best islands in the
                world! Bask in the sun while walking in the white sand beach and
                enjoy the night partying at the popular seaside bars.
              </Text>
            </View>
            <View style={[styles.images, styles.mt24]}>
              <Text
                style={[styles.photos, styles.photosLayout, styles.textClr]}
              >
                Photos
              </Text>
              <ScrollView
                style={[styles.photosRow, styles.mt8]}
                horizontal
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.photosRowScrollViewContent}
              >
                <Image
                  style={styles.photoIcon}
                  resizeMode="cover"
                  source={require("../assets/photo.png")}
                />
                <Image
                  style={[styles.photoIcon, styles.ml10]}
                  resizeMode="cover"
                  source={require("../assets/photo1.png")}
                />
                <Image
                  style={[styles.photoIcon, styles.ml10]}
                  resizeMode="cover"
                  source={require("../assets/photo2.png")}
                />
                <Image
                  style={[styles.photoIcon, styles.ml10]}
                  resizeMode="cover"
                  source={require("../assets/photo3.png")}
                />
                <Image
                  style={[styles.photoIcon, styles.ml10]}
                  resizeMode="cover"
                  source={require("../assets/photo4.png")}
                />
                <Image
                  style={[styles.photoIcon, styles.ml10]}
                  resizeMode="cover"
                  source={require("../assets/photo5.png")}
                />
              </ScrollView>
            </View>
            <View
              style={[styles.buttonPrimary, styles.mt24, styles.heartFlexBox]}
            >
              <Text style={[styles.viewDetails, styles.photosLayout]}>
                Book Now
              </Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  mt2: {
    marginTop: Margin.m_7xs,
  },
  ml3: {
    marginLeft: Margin.m_6xs,
  },
  ml10: {
    marginLeft: Margin.m_xs,
  },
  photosRowScrollViewContent: {
    flexDirection: "row",
  },
  mt8: {
    marginTop: Margin.m_2xs,
  },
  mt24: {
    marginTop: Margin.m_5xl,
  },
  titleFlexBox: {
    justifyContent: "space-between",
    alignItems: "center",
    alignSelf: "stretch",
  },
  heartFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  heartShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    backgroundColor: Color.white,
  },
  heartShadowBox1: {
    elevation: 8,
    shadowRadius: 8,
    shadowColor: "rgba(0, 0, 0, 0.12)",
    borderRadius: Border.br_2xl,
    justifyContent: "center",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    backgroundColor: Color.white,
  },
  textClr: {
    color: Color.black2,
    textAlign: "left",
  },
  textTypo: {
    fontWeight: "700",
    color: Color.black2,
    fontFamily: FontFamily.inter,
  },
  photosLayout: {
    lineHeight: 24,
    fontFamily: FontFamily.inter,
  },
  overviewPosition: {
    position: "absolute",
    lineHeight: 24,
    textAlign: "left",
    color: Color.black2,
  },
  iconBack: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  backArrow: {
    padding: Padding.p_4xs,
  },
  iconHeart: {
    width: 20,
    height: 20,
    overflow: "hidden",
  },
  heart: {
    padding: Padding.p_2xs,
  },
  header: {
    paddingTop: Padding.p_5xl,
    paddingHorizontal: Padding.p_3xl,
    justifyContent: "space-between",
    alignSelf: "stretch",
    flexDirection: "row",
  },
  boracay: {
    fontSize: FontSize.size_4xl,
    textAlign: "left",
    fontFamily: FontFamily.inter,
  },
  philippines: {
    color: Color.gray_700,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    fontFamily: FontFamily.inter,
  },
  d4n: {
    color: Color.gray_800,
    fontWeight: "600",
    fontSize: FontSize.size_base,
    textAlign: "left",
    fontFamily: FontFamily.inter,
  },
  d4nWrapper: {
    borderRadius: 6,
    backgroundColor: "#f4f5f6",
    paddingHorizontal: Padding.p_2xs,
    paddingVertical: Padding.p_5xs,
    overflow: "hidden",
    flexDirection: "row",
  },
  frameParent: {
    flexDirection: "row",
  },
  text: {
    fontSize: FontSize.size_5xl,
    textAlign: "left",
    fontFamily: FontFamily.inter,
  },
  title: {
    flexDirection: "row",
  },
  overview: {
    top: 0,
    left: 0,
    fontWeight: "600",
    fontSize: FontSize.size_xl,
  },
  spend5Days: {
    top: "25%",
    left: "0%",
    fontSize: FontSize.size_base,
    width: "100%",
  },
  overviewText: {
    height: 128,
    alignSelf: "stretch",
  },
  photos: {
    fontWeight: "600",
    fontSize: FontSize.size_xl,
    textAlign: "left",
  },
  photoIcon: {
    borderRadius: Border.br_2xs,
    height: 90,
    width: 120,
  },
  photosRow: {
    alignSelf: "stretch",
    width: "100%",
  },
  images: {
    alignSelf: "stretch",
  },
  viewDetails: {
    color: Color.white,
    textAlign: "center",
    width: 120,
    fontWeight: "600",
    fontSize: FontSize.size_base,
  },
  buttonPrimary: {
    borderRadius: Border.br_xs,
    backgroundColor: Color.orange,
    paddingHorizontal: Padding.p_6xl,
    paddingVertical: Padding.p_sm,
    alignSelf: "stretch",
  },
  bottomDrawerContent: {
    flex: 1,
  },
  bottomDrawer: {
    borderTopLeftRadius: Border.br_xl,
    borderTopRightRadius: Border.br_xl,
    shadowColor: "rgba(0, 0, 0, 0.14)",
    shadowRadius: 20,
    elevation: 20,
    paddingVertical: 24,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    backgroundColor: Color.white,
    paddingHorizontal: Padding.p_3xl,
    alignSelf: "stretch",
    flexDirection: "row",
  },
  borocayScreenIcon: {
    paddingTop: Padding.p_3xl,
    flex: 1,
  },
  borocay: {
    flexDirection: "row",
    width: "100%",
    flex: 1,
  },
});

export default Borocay;
