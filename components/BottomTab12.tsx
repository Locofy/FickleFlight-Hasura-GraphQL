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

type BottomTab12Type = {
  style?: StyleProp<ViewStyle>;
};

const BottomTab12 = ({ style }: BottomTab12Type) => {
  return (
    <View style={[styles.bottomTab, style]}>
      <Image
        style={styles.iconOffers}
        resizeMode="cover"
        source={require("../assets/icon--offers.png")}
      />
      <Text style={[styles.search, styles.mt14]}>Offers</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mt14: {
    marginTop: Margin.m_md,
  },
  iconOffers: {
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

export default BottomTab12;
