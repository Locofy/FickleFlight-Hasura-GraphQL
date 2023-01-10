import * as React from "react";
import { StyleProp, ViewStyle, Text, StyleSheet, View } from "react-native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

type RoundTripType = {
  style?: StyleProp<ViewStyle>;
};

const RoundTrip = ({ style }: RoundTripType) => {
  return (
    <View style={[styles.roundTrip, style]}>
      <Text style={styles.roundTrip1}>Round trip</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  roundTrip1: {
    fontSize: FontSize.size_base,
    lineHeight: 24,
    fontFamily: FontFamily.roboto,
    color: Color.gray_500,
    textAlign: "center",
  },
  roundTrip: {
    borderRadius: Border.br_3xl,
    width: 153,
    flexDirection: "row",
    paddingHorizontal: Padding.p_3xl,
    paddingVertical: Padding.p_4xs,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default RoundTrip;
