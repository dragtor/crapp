import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require("./app/assets/logo-mh-gov.png")}
      ></Image>
      <Text style={styles.loginScreenTitle}>Welcome to CR</Text>
      <TextInput style={styles.input} placeholder="Username" />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
      ></TextInput>
      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.btnlogin}>
          <Text style={styles.btntext} onPress={() => alert("Login works")}>
            Login
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  btnlogin: {
    backgroundColor: "#FFD700",
    padding: 15,
  },
  btntext: {
    fontSize: 15,
  },
  container: {
    flex: 1,
    backgroundColor: "#1e90ff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    width: "90%",
    backgroundColor: "#fff",
    margin: 5,
    padding: 15,
  },
  loginScreenTitle: {
    fontSize: 30,
    marginBottom: 10,
  },
  logo: {
    width: 100,
    height: 100,
    position: "absolute",
    top: "10%",
  },
});
