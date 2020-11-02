import React from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  Image,
  View,
  TouchableOpacity
} from "react-native";
import { primaryColor } from "../utilities/Colors";

const LandingScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.getStartedContent}>
        <Image
          source={require("../assets/school_logo.png")}
          style={styles.logo}
        />
        <Text style={styles.appTitle}>Examinrr</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Onbardingpage')} style={styles.getStartedBtn} activeOpacity={0.9}>
          <Text style={styles.getStartedText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  getStartedContent: {
    flexDirection: "column",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  logo: {
    height: 175,
    width: 175,
  },
  appTitle: {
    fontSize: 24,
    color: primaryColor,
    lineHeight: 29,
    marginTop: 30,
    marginBottom: 40,
    fontWeight: "700",
    fontStyle: "normal",
  },
  getStartedBtn: {
    backgroundColor: primaryColor,
    height: 53,
    width: "80%",
    paddingVertical: 16
  },
  getStartedText: {
    color: "#FFF",
    fontSize: 18,
    lineHeight: 22,
    textAlign: "center"
  },
});

export default LandingScreen;