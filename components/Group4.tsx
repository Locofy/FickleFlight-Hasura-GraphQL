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

type Group4Type = {
  style?: StyleProp<ViewStyle>;
};

const Group4 = ({ style }: Group4Type) => {
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
        <View style={styles.parentFlexBox}>
          <View style={[styles.sinParent, styles.parentFlexBox]}>
            <Text style={styles.sin}>SIN</Text>
            <Image
              style={[styles.iconBack1, styles.ml6]}
              resizeMode="cover"
              source={require("../assets/icon--back2.png")}
            />
            <Text style={[styles.sin, styles.ml6]}>LAX</Text>
          </View>
          <Text style={[styles.july2022, styles.mt3]}>29 July, 2022</Text>
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
    backgroundColor: Color.white,
  },
  parentFlexBox: {
    justifyContent: "center",
    alignItems: "center",
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
  sin: {
    fontSize: FontSize.size_xl,
    fontWeight: "600",
    color: Color.black2,
    textAlign: "left",
    fontFamily: FontFamily.inter,
  },
  iconBack1: {
    width: 18,
    height: 18,
    overflow: "hidden",
  },
  sinParent: {
    flexDirection: "row",
    justifyContent: "center",
  },
  july2022: {
    fontSize: FontSize.size_base,
    lineHeight: 16,
    color: Color.gray_700,
    textAlign: "center",
    fontFamily: FontFamily.inter,
    alignSelf: "stretch",
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
    paddingHorizontal: Padding.p_3xl,
    paddingVertical: Padding.p_xl,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "stretch",
  },
});

export default Group4;
