import React from 'react'
import {View, StyleSheet, SafeAreaView, Text, Image} from 'react-native'

const LoginScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
        <View style={styles.logoContainer}>
        <Image
          source={require("../assets/school_logo.png")}
          style={styles.logo}
        />
        <Text>Welcome Back</Text>
        </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    },
    logoContainer: {
        flex: 1,
        width: "100%"
    },
    logo: {
        height: 175,
        width: 175,
      },
})


export default LoginScreen

