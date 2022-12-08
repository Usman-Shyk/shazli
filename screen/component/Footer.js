import { StyleSheet, Text, View } from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";
import { Asset } from "expo-asset";
import { SvgUri } from "react-native-svg";

const Footer = () => {
  const Logo = Asset.fromModule(
    require("../../assets/Outline/Communication/Comment-plus.svg")
  ).uri;

  return (
    <View style={styles.tab_wrapper}>
      <View style={[tw`flex flex-row items-center justify-between`]}>
        <View
          style={[
            tw`w-4/12 flex flex-row items-center justify-center`,
            { borderRightWidth: 1, borderRightColor: "#fff" },
          ]}
        >
          <SvgUri fill="#fff" width="20" height="20" uri={Logo} />
          <Text style={[tw`text-white pl-1`, { fontSize: 10 }]}>
            Namaz Timings
          </Text>
        </View>
        <View
          style={[
            tw`w-4/12 flex flex-row items-center justify-center`,
            { borderRightWidth: 1, borderRightColor: "#fff" },
          ]}
        >
          <SvgUri fill="#fff" width="20" height="20" uri={Logo} />
          <Text style={[tw`text-white pl-1`, { fontSize: 10 }]}>
            Ilm ul Adad
          </Text>
        </View>
        <View style={[tw`w-4/12 flex flex-row items-center justify-center`]}>
          <SvgUri fill="#fff" width="20" height="20" uri={Logo} />
          <Text style={[tw`text-white pl-1`, { fontSize: 10 }]}>Store</Text>
        </View>
      </View>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  tab_wrapper: {
    position: "absolute",
    bottom: 0,
    left: 0,
    zIndex: 30,
    elevation: 30,
    backgroundColor: "rgb(121,118,205)",
    paddingTop: 15,
    paddingBottom: 15,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
});
