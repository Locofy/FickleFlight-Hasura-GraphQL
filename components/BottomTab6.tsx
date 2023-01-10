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

type BottomTab6Type = {
  style?: StyleProp<ViewStyle>;
};

const BottomTab6 = ({ style }: BottomTab6Type) => {
  return (
    <View style={[styles.bottomTab, style]}>
      <Image
        style={styles.iconExploreSelected}
        resizeMode="cover"
        source={require("../assets/icon--exploreselected1.png")}
      />
      <Text style={[styles.search, styles.mt14]}>Explore</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mt14: {
    marginTop: Margin.m_md,
  },
  iconExploreSelected: {
    width: 20,
    height: 20,
  },
  search: {
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.roboto,
    color: Color.gray_700,
    textAlign: "center",
  },
  bottomTab: {
    width: 61,
    height: 52,
    alignItems: "center",
  },
});

export default BottomTab6;
