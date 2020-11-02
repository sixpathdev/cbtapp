import React from 'react'
import {View, TouchableOpacity, Text, StyleSheet} from "react-native"

import { primaryColor } from "../utilities/Colors";

const SkipButton = () => {
    return (
        <View style={styles.skipBtnView}>
          <TouchableOpacity style={styles.skipBtnContainer}>
            <Text style={styles.skipBtn}>Skip</Text>
          </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    skipBtnView: {
      flex: 1, 
      position: "absolute", 
      bottom: "15%", 
      right: "15%"
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

export default SkipButton
