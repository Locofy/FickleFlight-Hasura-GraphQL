import * as React from "react";
import { StyleProp, ViewStyle, Text, StyleSheet, View } from "react-native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

type OneWayType = {
  style?: StyleProp<ViewStyle>;
};

const OneWay = ({ style }: OneWayType) => {
  return (
    <View style={[styles.oneWay, style]}>
      <Text style={styles.oneWay1}>One way</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  oneWay1: {
    fontSize: FontSize.size_base,
    lineHeight: 24,
    fontWeight: "500",
    fontFamily: FontFamily.roboto,
    color: Color.white,
    textAlign: "center",
    width: 64,
  },
  oneWay: {
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

export default OneWay;
