import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Image,
  ImageBackground,
  ScrollView,
  StatusBar,
} from "react-native";
import React, { useState } from "react";
import tw from "tailwind-react-native-classnames";

const Login = ({ route, navigation }) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const Login = () => {
    if (email == "usman" && pass == "123") {
      alert("Login");
    }
  };

  return (
    <View>
      <StatusBar backgroundColor={"rgba(0,0,0,0.9)"} />
      <ImageBackground
        source={require("../assets/bg.jpg")}
        resizeMode="cover"
        style={styles.image}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.main}>
            <Image
              style={styles.tinyLogo}
              source={require("../assets/logo.png")}
              resizeMode="contain"
            />
            <TextInput
              style={styles.input}
              placeholder="User Name/Email"
              keyboardType="text"
              value={email}
              onChangeText={setEmail}
              autoCapitalize={"none"}
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              keyboardType="text"
              secureTextEntry={true}
              value={pass}
              onChangeText={setPass}
              autoCapitalize={"none"}
              onSubmitEditing={() => Login()}
            />

            <TouchableOpacity
              onPress={() => {
                Login();
              }}
              style={styles.btn}
            >
              <Text style={{ textAlign: "center" }}>Login</Text>
            </TouchableOpacity>

            <Text
              onPress={() => navigation.navigate("Signup")}
              style={tw`mt-5 text-blue-800 underline`}
            >
              Create Account
            </Text>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "100%",
  },
  main: {
    width: "100%",
    height: "100%",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 30,
  },

  tinyLogo: {
    width: "80%",
    height: 250,
  },
  input: {
    borderWidth: 0,
    borderRadius: 25,
    padding: 15,
    width: "80%",
    marginTop: 25,
    backgroundColor: "#fff",
  },
  btn: {
    borderWidth: 0,
    borderRadius: 25,
    padding: 15,
    width: "40%",
    marginTop: 25,
    backgroundColor: "#fff",
  },
});
