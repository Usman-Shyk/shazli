import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Image,
  ImageBackground,
  ScrollView,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "tailwind-react-native-classnames";
import Checkbox from "expo-checkbox";

const Signup = ({ route, navigation }) => {
  return (
    <ImageBackground
      source={require("../assets/bg.jpg")}
      resizeMode="cover"
      style={styles.image}
    >
      <SafeAreaView style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.main}>
            <Image
              style={styles.tinyLogo}
              source={require("../assets/logo.png")}
              resizeMode="contain"
            />
            <Text style={styles.text}>Create Account</Text>

            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "center",
                width: "100%",
              }}
            >
              <View style={tw`w-5/12 mt-2`}>
                <TextInput
                  style={[tw`w-full bg-white`, styles.inp]}
                  maxLength={4}
                  placeholder="FirstName"
                  autoCapitalize={"none"}
                />
              </View>
              <View style={tw`w-5/12 mt-2 ml-3`}>
                <TextInput
                  style={[tw`w-full bg-white`, styles.inp]}
                  maxLength={4}
                  placeholder="LastName"
                  autoCapitalize={"none"}
                />
              </View>
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "center",
                width: "100%",
              }}
            >
              <View style={tw`w-5/12`}>
                <TextInput
                  style={[tw`w-full bg-white`, styles.inp]}
                  maxLength={4}
                  placeholder="Gender"
                  autoCapitalize={"none"}
                />
              </View>
              <View style={tw`w-5/12 ml-3`}>
                <TextInput
                  style={[tw`w-full bg-white`, styles.inp]}
                  maxLength={4}
                  placeholder="MotherName"
                  autoCapitalize={"none"}
                />
              </View>
            </View>

            <TextInput
              style={styles.input}
              placeholder="User Name/Email"
              keyboardType="text"
            />

            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "center",
                width: "100%",
              }}
            >
              <View style={tw`w-5/12`}>
                <TextInput
                  style={[tw`w-full bg-white`, styles.inp]}
                  maxLength={4}
                  placeholder="Country"
                  autoCapitalize={"none"}
                />
              </View>
              <View style={tw`w-5/12 ml-3`}>
                <TextInput
                  style={[tw`w-full bg-white`, styles.inp]}
                  maxLength={4}
                  placeholder="City"
                  autoCapitalize={"none"}
                />
              </View>
            </View>

            <TextInput
              style={styles.input}
              placeholder="Address"
              keyboardType="text"
            />
            <TextInput
              style={styles.input}
              placeholder="Contact Number"
              keyboardType="numeric"
            />

            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "center",
                width: "100%",
                marginTop: 10,
              }}
            >
              <Checkbox style={styles.checkbox} />
              <Text style={tw`ml-2`}>I agree to the terms & conditions</Text>
            </View>

            <TouchableOpacity
              onPress={() => navigation.navigate("Home")}
              style={styles.btn}
            >
              <Text
                style={{
                  textAlign: "center",
                  color: "#fff",
                  fontSize: 25,
                  fontWeight: "bold",
                }}
              >
                Create
              </Text>
            </TouchableOpacity>

            <View style={{ width: "100%", marginTop: 10, marginBottom: 20 }}>
              <Text style={{ textAlign: "center" }}>
                Have an account?
                <Text
                  onPress={() => navigation.navigate("Login")}
                  style={styles.endtext}
                >
                  Login
                </Text>
              </Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default Signup;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
  main: {
    width: "100%",
    height: "100%",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 10,
  },

  tinyLogo: {
    width: "50%",
    height: 150,
  },

  text: {
    fontSize: 25,
    marginTop: 15,
    width: "100%",
    textAlign: "center",
    fontWeight: "700",
    color: "rgb(90,86,196)",
  },

  inp: {
    borderWidth: 0,
    borderRadius: 25,
    padding: 10,
    width: "100%",
    marginTop: 15,
    backgroundColor: "#fff",
  },

  input: {
    borderWidth: 0,
    borderRadius: 25,
    padding: 15,
    width: "85%",
    marginTop: 15,
    backgroundColor: "#fff",
  },

  btn: {
    borderWidth: 0,
    borderRadius: 25,
    padding: 15,
    width: "80%",
    marginTop: 15,
    backgroundColor: "rgb(90,86,196)",
    color: "#fff",
  },

  endtext: {
    fontWeight: "700",
    marginLeft: 5,
  },
});
