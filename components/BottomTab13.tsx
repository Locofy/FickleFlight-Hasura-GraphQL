import * as React from "react";
import {
  StyleProp,
  ViewStyle,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Margin, FontSize, FontFamily, Color } from "../GlobalStyles";

type BottomTab13Type = {
  style?: StyleProp<ViewStyle>;
};

const BottomTab13 = ({ style }: BottomTab13Type) => {
  return (
    <View style={[styles.bottomTab, style]}>
      <Image
        style={styles.iconUserprofile}
        resizeMode="cover"
        source={require("../assets/icon--userprofile4.png")}
      />
      <Text style={[styles.search, styles.mt14]}>Profile</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mt14: {
    marginTop: Margin.m_md,
  },
  iconUserprofile: {
    width: 20,
    height: 20,
    opacity: 0.8,
  },
  search: {
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.roboto,
    color: Color.gray_1100,
    textAlign: "center",
  },
  bottomTab: {
    width: 61,
    height: 52,
    alignItems: "center",
  },
});

export default BottomTab13;
