import * as React from "react";
import { useState } from "react";
import {
  StyleProp,
  ViewStyle,
  StyleSheet,
  View,
  Pressable,
  Text,
} from "react-native";
import { TextInput as RNPTextInput } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import {
  Margin,
  FontSize,
  FontFamily,
  Color,
  Border,
  Padding,
} from "../GlobalStyles";

type OneWaySectionType = {
  style?: StyleProp<ViewStyle>;
};

const OneWaySection = ({ style }: OneWaySectionType) => {
  const [outlinedTextOnlyNoIcon3, setOutlinedTextOnlyNoIcon3] =
    useState("1 Adult");
  const [outlinedTextOnlyNoIcon4, setOutlinedTextOnlyNoIcon4] =
    useState("Economy");
  const navigation = useNavigation();

  return (
    <View style={[styles.oneWaySection, style]}>
      <View style={styles.form}>
        <RNPTextInput
          style={[
            styles.outlinedtextOnlyNoIcon,
            styles.outlinedtextIconFlexBox,
          ]}
          placeholder="Select Departure"
          label="From"
          mode="outlined"
          left={
            <RNPTextInput.Icon
              style={{ marginTop: "50%" }}
              name="airplane-takeoff"
            />
          }
          placeholderTextColor="#dcdedf"
          outlineColor="#dcdedf"
          activeOutlineColor="#7f7f7f"
          theme={{
            fonts: { regular: { fontFamily: "Roboto", fontWeight: "Regular" } },
            colors: { text: "#191919" },
          }}
        />
        <RNPTextInput
          style={[
            styles.outlinedtextOnlyNoIcon,
            styles.mt18,
            styles.outlinedtextIconFlexBox,
          ]}
          placeholder="Select Arrival"
          label="To"
          mode="outlined"
          left={
            <RNPTextInput.Icon
              style={{ marginTop: "50%" }}
              name="airplane-landing"
            />
          }
          placeholderTextColor="#dcdedf"
          outlineColor="#dcdedf"
          activeOutlineColor="#7f7f7f"
          theme={{
            fonts: { regular: { fontFamily: "Roboto", fontWeight: "Regular" } },
            colors: { text: "#191919" },
          }}
        />
        <RNPTextInput
          style={[
            styles.outlinedtextOnlyNoIcon,
            styles.mt18,
            styles.outlinedtextIconFlexBox,
          ]}
          placeholder="Select Date"
          label="Departure Date"
          mode="outlined"
          left={
            <RNPTextInput.Icon
              style={{ marginTop: "50%" }}
              name="calendar-blank"
            />
          }
          placeholderTextColor="#dcdedf"
          outlineColor="#dcdedf"
          activeOutlineColor="#7f7f7f"
          theme={{
            fonts: { regular: { fontFamily: "Roboto", fontWeight: "Regular" } },
            colors: { text: "#191919" },
          }}
        />
        <View style={[styles.inputsRow, styles.mt18]}>
          <RNPTextInput
            style={[
              styles.outlinedtextOnlyNoIcon3,
              styles.outlinedtextIconFlexBox,
            ]}
            placeholder="Select Pax"
            label="Passengers"
            mode="outlined"
            value={outlinedTextOnlyNoIcon3}
            onChangeText={setOutlinedTextOnlyNoIcon3}
            left={
              <RNPTextInput.Icon
                style={{ marginTop: "50%" }}
                name="account-multiple"
              />
            }
            placeholderTextColor="#dcdedf"
            outlineColor="#dcdedf"
            activeOutlineColor="#7f7f7f"
            theme={{
              fonts: {
                regular: { fontFamily: "Roboto", fontWeight: "Regular" },
              },
              colors: { text: "#191919" },
            }}
          />
          <RNPTextInput
            style={[
              styles.outlinedtextOnlyNoIcon3,
              styles.ml13,
              styles.outlinedtextIconFlexBox,
            ]}
            placeholder="Select Class"
            label="Class"
            mode="outlined"
            value={outlinedTextOnlyNoIcon4}
            onChangeText={setOutlinedTextOnlyNoIcon4}
            left={
              <RNPTextInput.Icon style={{ marginTop: "50%" }} name="thumb-up" />
            }
            placeholderTextColor="#dcdedf"
            outlineColor="#dcdedf"
            activeOutlineColor="#7f7f7f"
            theme={{
              fonts: {
                regular: { fontFamily: "Roboto", fontWeight: "Regular" },
              },
              colors: { text: "#191919" },
            }}
          />
        </View>
      </View>
      <Pressable
        style={[styles.buttonPrimary, styles.mt13]}
        onPress={() => navigation.navigate("SearchResults")}
      >
        <Text style={styles.viewDetails}>Search</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  ml13: {
    marginLeft: Margin.m_sm,
  },
  mt18: {
    marginTop: Margin.m_2xl,
  },
  mt13: {
    marginTop: Margin.m_sm,
  },
  outlinedtextIconFlexBox: {
    alignSelf: "flex-start",
    height: 56,
  },
  outlinedtextOnlyNoIcon: {
    width: 313,
  },
  outlinedtextOnlyNoIcon3: {
    width: 150,
  },
  inputsRow: {
    flexDirection: "row",
  },
  form: {
    alignSelf: "stretch",
  },
  viewDetails: {
    fontSize: FontSize.size_base,
    lineHeight: 24,
    fontWeight: "600",
    fontFamily: FontFamily.inter,
    color: Color.white,
    textAlign: "center",
    width: 120,
  },
  buttonPrimary: {
    borderRadius: Border.br_xs,
    backgroundColor: Color.orange,
    paddingHorizontal: Padding.p_4xl,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    width: 313,
    paddingVertical: Padding.p_sm,
  },
  oneWaySection: {
    flex: 1,
    backgroundColor: Color.white,
    paddingHorizontal: 0,
    paddingVertical: Padding.p_sm,
    alignSelf: "stretch",
  },
});

export default OneWaySection;
