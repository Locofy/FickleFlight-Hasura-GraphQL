import * as React from "react";
import { StyleProp, ViewStyle, Text, StyleSheet, View } from "react-native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

type FrameComponentType = {
  style?: StyleProp<ViewStyle>;
};

const FrameComponent = ({ style }: FrameComponentType) => {
  return (
    <View style={[styles.oneWayParent, style]}>
      <Text style={styles.oneWay}>One way</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  oneWay: {
    fontSize: FontSize.size_base,
    lineHeight: 24,
    fontFamily: FontFamily.roboto,
    color: Color.gray_500,
    textAlign: "center",
  },
  oneWayParent: {
    borderRadius: Border.br_3xl,
    width: 153,
    flexDirection: "row",
    paddingHorizontal: Padding.p_3xl,
    paddingVertical: Padding.p_4xs,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default FrameComponent;
