import * as React from "react";
import {
  View,
  SafeAreaView,
  StyleProp,
  ViewStyle,
  Pressable,
  Image,
  StyleSheet,
  Text,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Margin, Color, FontSize, FontFamily, Padding } from "../GlobalStyles";

type Group41Type = {
  style?: StyleProp<ViewStyle>;
};

const Group41 = ({ style }: Group41Type) => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={[styles.group4, style]}>
      <View style={styles.view}>
        <Pressable
          style={styles.iconLayout}
          onPress={() => navigation.goBack()}
        >
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../assets/icon--back1.png")}
          />
        </Pressable>
        <View style={styles.searchFlightWrapper}>
          <Text style={styles.searchFlight}>Search Flight</Text>
        </View>
        <View style={[styles.iconKebab, styles.iconLayout]}>
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
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mt4: {
    marginTop: Margin.m_5xs,
  },
  group4: {
    backgroundColor: Color.white,
  },
  iconLayout: {
    height: 32,
    width: 32,
  },
  icon: {
    width: "100%",
    height: "100%",
    overflow: "hidden",
  },
  searchFlight: {
    fontSize: FontSize.size_xl,
    fontWeight: "600",
    fontFamily: FontFamily.inter,
    color: Color.black2,
    textAlign: "left",
  },
  searchFlightWrapper: {
    justifyContent: "center",
    alignItems: "center",
  },
  frameChild: {
    width: 5,
    height: 5,
  },
  ellipseParent: {
    position: "absolute",
    top: 5,
    left: 14,
  },
  iconKebab: {
    overflow: "hidden",
  },
  view: {
    alignSelf: "stretch",
    flexDirection: "row",
    paddingHorizontal: Padding.p_3xl,
    paddingVertical: Padding.p_xl,
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default Group41;
