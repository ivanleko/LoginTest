import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, KeyboardAvoidingView } from 'react-native';
import LoginScreen from "./react-native-login-screen/lib/LoginScreen";
import SocialButton from "./react-native-login-screen/lib/components/social-button/SocialButton";
import TextInput from "react-native-text-input-interactive";

export default function App() {
  return (
    < KeyboardAvoidingView style={styles.container}>
      <Image resizeMode="contain" style={[styles.logoImageStyle]}
        source={require("./luckauprava.png")}/>
      <LoginScreen style={styles.container}  loginButtonStyle={styles.novi} disableSocialButtons disableSignup disableDivider />
      <StatusBar style="auto" />
    </ KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#8BAEDC",
    flex: 1,
  }, 
  logoImageStyle: {
    flex: 2,
    width: "100%",
    resizeMode: "contain",
    backgroundColor: "red"
  },
  LuckaUpravaLogo: {
    flex: 2,
    width: "100%",
    resizeMode: "contain",
    flexDirection: "column",
   
    backgroundColor: "#8BAEDC"
}, novi: {
  backgroundColor: "#705BA7",
  height: 60
}
});
