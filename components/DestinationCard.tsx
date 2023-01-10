import * as React from "react";
import { useMemo } from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  ImageSourcePropType,
} from "react-native";
import {
  Margin,
  FontSize,
  FontFamily,
  Color,
  Border,
  Padding,
} from "../GlobalStyles";

type DestinationCardType = {
  destinationImage?: ImageSourcePropType;
  boracay?: string;
  philippines?: string;
  d4N?: string;

  /** Style props */
  destinationCardMarginLeft?: number | string;
  destinationImageBorderRadius?: number;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};

const DestinationCard = ({
  destinationCardMarginLeft,
  destinationImage,
  destinationImageBorderRadius,
  boracay,
  philippines,
  d4N,
}: DestinationCardType) => {
  const destinationCardStyle = useMemo(() => {
    return {
      ...getStyleValue("marginLeft", destinationCardMarginLeft),
    };
  }, [destinationCardMarginLeft]);

  const destinationImageIconStyle = useMemo(() => {
    return {
      ...getStyleValue("borderRadius", destinationImageBorderRadius),
    };
  }, [destinationImageBorderRadius]);

  return (
    <View
      style={[
        styles.destinationCard,
        styles.destinationCardShadowBox,
        destinationCardStyle,
      ]}
    >
      <Image
        style={[styles.destinationIconLayout, destinationImageIconStyle]}
        resizeMode="cover"
        source={destinationImage}
      />
      <View style={[styles.details, styles.mt10]}>
        <View>
          <Text style={styles.boracay}>{boracay}</Text>
          <Text style={[styles.philippines, styles.mt1, styles.d4nTypo]}>
            {philippines}
          </Text>
        </View>
        <View style={styles.duration}>
          <Text style={[styles.d4n, styles.d4nTypo]}>{d4N}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mt1: {
    marginTop: Margin.m_8xs,
  },
  mt10: {
    marginTop: Margin.m_xs,
  },
  d4nTypo: {
    fontSize: FontSize.size_xs,
    textAlign: "left",
    fontFamily: FontFamily.inter,
  },
  destinationIconLayout: {
    height: 90,
    width: 131,
  },
  boracay: {
    fontWeight: "600",
    color: Color.black2,
    fontSize: FontSize.size_base,
    textAlign: "left",
    fontFamily: FontFamily.inter,
  },
  philippines: {
    color: Color.gray_700,
  },
  d4n: {
    color: Color.gray_800,
  },
  duration: {
    borderRadius: Border.br_2xs,
    paddingHorizontal: Padding.p_4xs,
    paddingVertical: Padding.p_5xs,
    overflow: "hidden",
    backgroundColor: Color.studioLightmodeLightBGF8F9FB,
    flexDirection: "row",
  },
  details: {
    justifyContent: "space-between",
    alignItems: "center",
    alignSelf: "stretch",
    flexDirection: "row",
  },
  destinationCard: {
    width: 151,
  },
});

export default DestinationCard;
