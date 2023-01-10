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

type BottomTab10Type = {
  style?: StyleProp<ViewStyle>;
};

const BottomTab10 = ({ style }: BottomTab10Type) => {
  return (
    <View style={[styles.bottomTab, style]}>
      <Image
        style={styles.iconSearchFlights}
        resizeMode="cover"
        source={require("../assets/icon--searchflights.png")}
      />
      <Text style={[styles.search, styles.mt14]}>Search</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mt14: {
    marginTop: Margin.m_md,
  },
  iconSearchFlights: {
    width: 20,
    height: 20,
    opacity: 0.8,
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

export default BottomTab10;
