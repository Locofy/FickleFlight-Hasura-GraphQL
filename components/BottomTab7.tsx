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

type BottomTab7Type = {
  style?: StyleProp<ViewStyle>;
};

const BottomTab7 = ({ style }: BottomTab7Type) => {
  return (
    <View style={[styles.bottomTab, style]}>
      <Image
        style={styles.iconItinerary}
        resizeMode="cover"
        source={require("../assets/icon--itinerary2.png")}
      />
      <Text style={[styles.search, styles.mt14]}>Bookings</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mt14: {
    marginTop: Margin.m_md,
  },
  iconItinerary: {
    width: 20,
    height: 20,
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

export default BottomTab7;
