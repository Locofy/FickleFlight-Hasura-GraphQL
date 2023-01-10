import * as React from "react";
import {
  Pressable,
  StyleProp,
  ViewStyle,
  Image,
  StyleSheet,
  Text,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Margin, FontSize, FontFamily, Color } from "../GlobalStyles";

type MenuItem1Type = {
  style?: StyleProp<ViewStyle>;
};

const MenuItem1 = ({ style }: MenuItem1Type) => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={[styles.menuItem, style]}
      onPress={() =>
        navigation.navigate("BottomTabsRoot", { screen: "Bookings" })
      }
    >
      <Image
        style={styles.iconlylightfilter}
        resizeMode="cover"
        source={require("../assets/iconlylightfilter.png")}
      />
      <Text style={[styles.allBookings, styles.ml16]}>All Bookings</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  ml16: {
    marginLeft: Margin.m_lg,
  },
  iconlylightfilter: {
    width: 24,
    height: 24,
  },
  allBookings: {
    fontSize: FontSize.size_xl,
    lineHeight: 24,
    fontWeight: "500",
    fontFamily: FontFamily.roboto,
    color: Color.black2,
    textAlign: "left",
  },
  menuItem: {
    alignSelf: "stretch",
    flexDirection: "row",
  },
});

export default MenuItem1;
