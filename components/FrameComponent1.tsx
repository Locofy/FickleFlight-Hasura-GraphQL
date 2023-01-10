import * as React from "react";
import { StyleProp, ViewStyle, Text, StyleSheet, View } from "react-native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

type FrameComponent1Type = {
  style?: StyleProp<ViewStyle>;
};

const FrameComponent1 = ({ style }: FrameComponent1Type) => {
  return (
    <View style={[styles.roundTripParent, style]}>
      <Text style={styles.roundTrip}>Round trip</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  roundTrip: {
    fontSize: FontSize.size_base,
    lineHeight: 24,
    fontWeight: "500",
    fontFamily: FontFamily.roboto,
    color: Color.white,
    textAlign: "center",
  },
  roundTripParent: {
    borderRadius: Border.br_3xl,
    backgroundColor: Color.gray_1000,
    width: 153,
    flexDirection: "row",
    paddingHorizontal: Padding.p_3xl,
    paddingVertical: Padding.p_4xs,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default FrameComponent1;
