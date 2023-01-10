import * as React from "react";
import { Image, StyleSheet, View, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const SplashScreen = () => {
  return (
    <LinearGradient
      style={styles.splashScreen}
      locations={[0, 1]}
      colors={["#10579b", "#3aa4c8"]}
    >
      <ImageBackground
        style={styles.icon}
        resizeMode="cover"
        source={require("../assets/splashscreen.png")}
      >
        <View style={styles.logoSection}>
          <Image
            style={[styles.logoIcon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/logo2.png")}
          />
        </View>
        <Image
          style={[styles.cloudsGraphicsIcon, styles.mt154, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/frame-2446.png")}
        />
      </ImageBackground>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  mt154: {
    marginTop: 154,
  },
  iconLayout: {
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  logoIcon: {
    height: "100.71%",
    width: "100.3%",
    top: "-0.35%",
    right: "0.03%",
    bottom: "-0.35%",
    left: "-0.32%",
    maxHeight: "100%",
  },
  logoSection: {
    width: 285,
    height: 89,
    zIndex: 0,
  },
  cloudsGraphicsIcon: {
    right: 0,
    bottom: 0,
    left: 0,
    height: 252,
    zIndex: 1,
  },
  icon: {
    flex: 1,
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
    width: "100%",
  },
  splashScreen: {
    height: 1082,
    width: "100%",
  },
});

export default SplashScreen;
