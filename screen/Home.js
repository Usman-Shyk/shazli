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
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "tailwind-react-native-classnames";

import HomeCourses from "./component/HomeCourses";
import { Svg, Circle, Rect, SvgUri } from "react-native-svg";
import { Asset } from "expo-asset";
import Footer from "./component/Footer";

// IMPORT ICONS
const Logo = Asset.fromModule(
  require("../assets/Outline/Communication/Comment-plus.svg")
).uri;

const CoffeeIcon = Asset.fromModule(
  require("../assets/Outline/Communication/Comment-plus.svg")
).uri;

const Home = ({ route, navigation }) => {
  return (
    <View>
      <StatusBar backgroundColor={"rgb(97,91,197)"} />
      <ImageBackground
        source={require("../assets/home_bg.jpg")}
        resizeMode="cover"
        style={[tw`relative`]}
      >
        {/* <SafeAreaView style={styles.container}> */}
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.main}>
            <View style={styles.header}>
              <View>
                <Text style={styles.logo}>Shazli Islamic Center</Text>
              </View>
              <View style={styles.search_area}>
                <View>
                  <Text
                    onPress={() => navigation.toggleDrawer()}
                    style={styles.btn_p}
                  >
                    <SvgUri
                      fill="#ffffff"
                      width="30"
                      height="30"
                      uri={CoffeeIcon}
                    />
                  </Text>
                </View>
                <TextInput
                  style={styles.input}
                  placeholder="Search..."
                  keyboardType="text"
                  autoCapitalize={"none"}
                />

                <View
                  style={{
                    width: 45,
                    height: 45,
                    borderRadius: 50,
                    padding: 12,
                    marginRight: 10,
                    backgroundColor: "rgb(97,91,197)",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Image
                    style={styles.tinyLogo}
                    source={require("../assets/chat.png")}
                    resizeMode="center"
                  />
                </View>
              </View>
            </View>
          </View>

          <View style={styles.main_course}>
            <View style={styles.course}>
              <Text style={styles.c_txt}>Our Courses</Text>
              <HomeCourses />
            </View>
          </View>

          <View style={styles.main_appointment}>
            <Image
              style={{
                width: 75,
                height: 75,
                position: "absolute",
                top: -30,
                right: 50,
                zIndex: 200,
              }}
              source={require("../assets/bag.png")}
              resizeMode="center"
            />
            <View style={styles.appointment}>
              <View style={tw`pl-5`}>
                <Text style={styles.appo_txt}>Appointment</Text>
                <Text style={styles.appo_para}>
                  With this Features you can talk on Call With
                </Text>
                <Text style={styles.dr_name}>Dr Abdul Wajid Shazli</Text>
              </View>

              <View style={tw`items-center flex justify-center`}>
                <TouchableOpacity style={styles.btn}>
                  <Text
                    style={{
                      textAlign: "center",
                      color: "#fff",
                      fontSize: 12,
                    }}
                  >
                    Make an Appointment
                  </Text>
                  {/* <SvgUri fill="#fff" width="40" height="40" uri={Logo} /> */}
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View style={styles.main_advertise}>
            <View style={styles.advertise}>
              <Text style={styles.advertise_txt}>Advertisement</Text>
            </View>
          </View>
        </ScrollView>
        {/* </SafeAreaView> */}
        <Footer />
      </ImageBackground>
    </View>
  );
};

export default Home;

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
    zIndex: 1,
    elevation: 1,
    position: "relative",
  },

  header: {
    width: "100%",
    height: 100,
    backgroundColor: "rgb(121,118,205)",
    flex: 1,
    alignItems: "center",
    position: "relative",
  },

  logo: {
    textAlign: "center",
    backgroundColor: "rgb(97,91,197)",
    color: "#fff",
    fontSize: 12,
    fontWeight: "600",
    padding: 5,
    paddingHorizontal: 15,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },

  search_area: {
    width: "100%",
    paddingTop: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  btn_p: {
    backgroundColor: "rgb(97,91,197)",
    color: "#fff",
    fontSize: 22,
    fontWeight: "900",
    padding: 6,
    paddingHorizontal: 12,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
  },

  input: {
    width: "65%",
    padding: 8,
    borderWidth: 0,
    borderRadius: 40,
    backgroundColor: "#fff",
    paddingLeft: 20,
    // marginLeft:22,
  },

  tinyLogo: {
    width: "100%",
    height: "100%",
    // backgroundColor: "rgb(97,91,197)",
  },

  main_course: {
    width: "100%",
    // height: "100%",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 20,
  },

  course: {
    width: "90%",
    // height: 150,
    paddingTop: 10,
    paddingBottom: 20,
    backgroundColor: "#fff",
    // flex: 1,
    borderRadius: 25,
  },

  c_txt: {
    color: "rgb(97,91,197)",
    fontWeight: "bold",
    fontSize: 20,
    paddingLeft: 20,
    marginBottom: 10,
  },

  main_appointment: {
    width: "100%",
    height: "100%",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    position: "relative",
  },

  appointment: {
    width: "90%",
    // height: 200,
    backgroundColor: "rgb(225,236,240)",
    flex: 1,
    borderRadius: 40,
    paddingTop: 15,
    paddingBottom: 25,
  },

  tinyimg: {
    width: "100%",
    height: 55,
    // backgroundColor: "rgb(97,91,197)",
    position: "absolute",
    marginLeft: 100,
  },

  appo_txt: {
    color: "rgb(61,205,144)",
    fontWeight: "900",
    fontSize: 28,
    // paddingTop: 10,
  },

  appo_para: {
    color: "rgb(232,96,56)",
    width: "70%",
    fontSize: 13,
  },

  dr_name: {
    textAlign: "center",
    backgroundColor: "#fff",
    color: "rgb(97,91,197)",
    fontSize: 12,
    fontWeight: "600",
    padding: 4,
    width: "60%",
    borderRadius: 25,
    marginTop: 6,
  },
  btn: {
    borderRadius: 25,
    paddingHorizontal: 5,
    paddingVertical: 10,
    width: "60%",
    marginTop: 25,
    backgroundColor: "rgb(61,205,144)",
    color: "#fff",
  },

  main_advertise: {
    width: "100%",
    height: "100%",
    flex: 1,
    paddingTop: 20,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 70,
  },

  advertise: {
    width: "90%",
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: "#fff",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 25,
  },

  advertise_txt: {
    color: "rgb(97,91,197)",
    fontWeight: "bold",
    fontSize: 20,
  },

  main_footer: {
    width: "100%",
    height: "100%",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 20,
  },

  footer: {
    width: "100%",
    height: 100,
    backgroundColor: "rgb(121,118,205)",
    flex: 1,
    alignItems: "center",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },

  footer_area: {
    alignItems: "center",
    width: "100%",
    paddingTop: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
