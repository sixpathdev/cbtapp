import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image,TouchableOpacity } from "react-native";
import Swiper from "react-native-swiper";

import { textColor,primaryColor } from "../utilities/Colors";

// import SkipButton from "../component/SkipButton";

const OnboardingScreen = () => {
  const [indexnumber, setIndexnumber] = useState(0);

  const checkIndex = (index) => {
    setIndexnumber(index)
      // console.log(index)
  };

  // const changelinks = () => {
    
  // }

  // {indexnumber == 2 ? (
  //   changelinks()
  //  ) : (
  //   <Text>Hello</Text>
  // )}
  return (
    <View style={styles.container}>
      <View style={styles.onboardingview}>
        <Swiper>
          <View style={styles.content}>
            <Text style={styles.title}>Prepare for your future</Text>
            <Text style={styles.subtitle}>
              Opportunities don't happen, you create them
            </Text>
            <Image
              style={{ marginTop: 30 }}
              source={require("../assets/onboardingImages/onboarding_1.png")}
            />
          </View>
          <View style={styles.content}>
            <Text style={styles.title}>Take the risk</Text>
            <Text style={{ ...styles.subtitle, width: "50%" }}>
              If you're not willing to risk the usual, you will settle for the
              ordinary
            </Text>
            <Image
              style={{ marginTop: 20 }}
              source={require("../assets/onboardingImages/onboarding_2.png")}
            />
          </View>
          <View style={styles.content}>
            <Text style={styles.title}>Do the work</Text>
            <Text style={{ ...styles.subtitle, width: "50%" }}>
              The way to get started is to quit talking and, begin doing.
            </Text>
            <Image
              style={{ marginTop: 20 }}
              source={require("../assets/onboardingImages/onboarding_3.png")}
            />
            <View style={styles.skipBtnView}>
            <TouchableOpacity style={styles.skipBtnContainer} onPress={() => console.log('pressed')}>
              <Text style={styles.skipBtn}>Skip</Text>
            </TouchableOpacity>
          </View>
          </View>
        </Swiper>
        
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  onboardingview: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  content: {
    marginTop: "26%",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: textColor,
    fontSize: 36,
    lineHeight: 45,
    fontWeight: "600",
  },
  subtitle: {
    fontSize: 20,
    width: "55%",
    textAlign: "center",
    marginVertical: 15,
  },
  skipBtnView: {
    flex: 1, 
    position: "absolute", 
    bottom: "-68%", 
    right: "8%"
  },
  skipBtn: {
    color: "#ffffff",
    fontSize: 22,
    lineHeight: 29,
  },
  skipBtnContainer: {
    padding: 8, 
    backgroundColor: primaryColor, 
    width: 120, 
    height: 50, 
    justifyContent: "center", 
    alignItems: "center", 
    borderColor: primaryColor, 
    borderRadius: 30
  }
});

export default OnboardingScreen;
