import * as React from "react";
import { useState } from "react";
import MenuItem from "../components/MenuItem";
import MenuItem1 from "../components/MenuItem1";
import MenuItem2 from "../components/MenuItem2";
import { Image, StyleSheet, View, Text, Pressable } from "react-native";
import { Margin, FontFamily, FontSize, Color, Padding } from "../GlobalStyles";

type DrawerMenuType = {
  state?: any;
  navigation?: any;
};

const DrawerMenu = ({ state, navigation }: DrawerMenuType) => {
  const [drawerItemsNormal] = useState([
    <MenuItem style={styles.mt28} />,
    <MenuItem1 style={styles.mt28} />,
    <MenuItem2 style={styles.mt28} />,
  ]);
  const [drawerItemsActive] = useState([
    <MenuItem style={styles.mt28} />,
    <MenuItem1 style={styles.mt28} />,
    <MenuItem2 style={styles.mt28} />,
  ]);
  const stateIndex = !state ? 0 : state.index - 1;
  return (
    <View style={styles.drawerMenu}>
      <View style={styles.menu}>
        <View style={styles.profile}>
          <View style={styles.group3Wrapper}>
            <Image
              style={styles.group3Icon}
              resizeMode="cover"
              source={require("../assets/group31.png")}
            />
          </View>
          <View style={styles.ml12}>
            <Text style={[styles.hello, styles.helloTypo]}>Hello</Text>
            <Text style={[styles.macyJohnson, styles.helloTypo]}>
              Macy Johnson
            </Text>
          </View>
        </View>
        <View style={[styles.menuChild, styles.mt20]} />
        <View style={styles.mt20}>
          {stateIndex === 0 ? drawerItemsActive[0] : drawerItemsNormal[0]}
          {stateIndex === 1 ? drawerItemsActive[1] : drawerItemsNormal[1]}
          {stateIndex === 2 ? drawerItemsActive[2] : drawerItemsNormal[2]}
          <View style={[styles.menuItem, styles.mt28]}>
            <Image
              style={[
                styles.ionmailOutlineIcon,
                styles.iconlylightprofileLayout,
              ]}
              resizeMode="cover"
              source={require("../assets/ionmailoutline.png")}
            />
            <Text style={[styles.profile1, styles.ml16, styles.profile1Typo]}>
              Get Help
            </Text>
          </View>
          <View style={[styles.profile, styles.mt28]}>
            <Image
              style={[
                styles.ionmailOutlineIcon,
                styles.iconlylightprofileLayout,
              ]}
              resizeMode="cover"
              source={require("../assets/calender.png")}
            />
            <Text style={[styles.profile1, styles.ml16, styles.profile1Typo]}>
              Covid Advisory
            </Text>
          </View>
          <View style={[styles.menuItem, styles.mt28]}>
            <Image
              style={[
                styles.ionmailOutlineIcon,
                styles.iconlylightprofileLayout,
              ]}
              resizeMode="cover"
              source={require("../assets/rate.png")}
            />
            <Text style={[styles.profile1, styles.ml16, styles.profile1Typo]}>
              Rate us
            </Text>
          </View>
        </View>
      </View>
      <Pressable
        style={styles.group3Wrapper}
        onPress={() => navigation.toggleDrawer()}
      >
        <Text style={[styles.appVersion101, styles.profile1Typo]}>
          App version 1.0.1
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  ml12: {
    marginLeft: 12,
  },
  ml16: {
    marginLeft: Margin.m_lg,
  },
  mt28: {
    marginTop: Margin.m_6xl,
  },
  mt20: {
    marginTop: Margin.m_3xl,
  },
  helloTypo: {
    textAlign: "left",
    fontFamily: FontFamily.roboto,
  },
  profile1Typo: {
    lineHeight: 24,
    textAlign: "left",
    fontFamily: FontFamily.roboto,
  },
  iconlylightprofileLayout: {
    height: 24,
    width: 24,
  },
  group3Icon: {
    width: 49,
    height: 49,
  },
  group3Wrapper: {
    flexDirection: "row",
  },
  hello: {
    fontSize: FontSize.size_xs,
    lineHeight: 18,
    color: Color.gray_700,
  },
  macyJohnson: {
    fontSize: FontSize.size_3xl,
    lineHeight: 30,
    fontWeight: "700",
    color: Color.black2,
  },
  profile: {
    alignItems: "center",
    flexDirection: "row",
  },
  menuChild: {
    borderStyle: "solid",
    borderColor: "#e6e9f0",
    borderTopWidth: 1,
    height: 1,
    alignSelf: "stretch",
  },
  ionmailOutlineIcon: {
    overflow: "hidden",
  },
  profile1: {
    fontSize: FontSize.size_xl,
    fontWeight: "500",
    color: Color.black2,
  },
  menuItem: {
    flexDirection: "row",
    alignSelf: "stretch",
  },
  menu: {
    alignSelf: "stretch",
  },
  appVersion101: {
    fontSize: FontSize.size_base,
    color: Color.gray_700,
  },
  drawerMenu: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    height: 812,
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: Padding.p_4xl,
    justifyContent: "space-between",
  },
});

export default DrawerMenu;
