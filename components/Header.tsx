import * as React from "react";
import {
  View,
  SafeAreaView,
  StyleProp,
  ViewStyle,
  Pressable,
  Image,
  StyleSheet,
} from "react-native";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, Padding } from "../GlobalStyles";

type HeaderType = {
  style?: StyleProp<ViewStyle>;
};

const Header = ({ style }: HeaderType) => {
  const navigation = useNavigation<DrawerNavigationProp<ParamListBase>>();

  return (
    <SafeAreaView style={[styles.header, style]}>
      <View style={styles.view}>
        <Pressable
          style={styles.hamburgerIcon}
          onPress={() => navigation.toggleDrawer()}
        >
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../assets/hamburger-icon.png")}
          />
        </Pressable>
        <Image
          style={styles.logoIcon}
          resizeMode="cover"
          source={require("../assets/logo.png")}
        />
        <View style={styles.profile}>
          <Image
            style={styles.group3Icon}
            resizeMode="cover"
            source={require("../assets/group3.png")}
          />
          <Image
            style={styles.ovalIcon}
            resizeMode="cover"
            source={require("../assets/oval.png")}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: Color.white,
  },
  icon: {
    width: "100%",
    height: "100%",
    overflow: "hidden",
  },
  hamburgerIcon: {
    width: 32,
    height: 32,
  },
  logoIcon: {
    width: 152,
    height: 28,
  },
  group3Icon: {
    width: 36,
    height: 36,
    zIndex: 0,
  },
  ovalIcon: {
    position: "absolute",
    top: 0,
    left: 26,
    width: 10,
    height: 10,
    zIndex: 1,
  },
  profile: {
    flexDirection: "row",
  },
  view: {
    alignSelf: "stretch",
    padding: Padding.p_3xl,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
});

export default Header;
