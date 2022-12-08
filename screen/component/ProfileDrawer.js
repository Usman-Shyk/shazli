import { Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { Asset } from "expo-asset";

const ProfileDrawer = (props, { navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: "rgb(97,91,197,0.2)" }}>
      <View>
        {/* <Text
          style={{
            position: "absolute",
            right: -55,
            backgroundColor: "rgba(97,91,197,0.85)",
            padding: 15,
            borderBottomRightRadius: 20,
            borderTopRightRadius: 20,
            top: 75,
          }}
          // onPress={() => navigation.toggleDrawer()}
        >
          Usman
        </Text> */}
        <Image
          source={{
            uri: Asset.fromModule(require("../../assets/img11.png")).uri,
          }}
          resizeMode="contain"
          style={{
            width: 80,
            height: 80,
            marginTop: 20,
            marginBottom: 15,
            alignItems: "center",
            justifyContent: "center",
            alignSelf: "center",
            borderRadius: 50,
          }}
        />
        <Text
          style={{
            fontSize: 11,
            color: "#fff",
            textAlign: "center",
            marginTop: -8,
            marginBottom: 15,
          }}
        >
          Change Profile
        </Text>
      </View>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <View>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
            alignSelf: "center",
            paddingTop: 8,
            paddingBottom: 8,
            marginBottom: 50,
            borderRadius: 15,
            width: 100,
            backgroundColor: "rgba(255,255,255,0.25)",
          }}
        >
          <Image
            source={{
              uri: Asset.fromModule(require("../../assets/icons/Logout.png"))
                .uri,
            }}
            style={{ width: 14, height: 14, marginRight: 6 }}
            resizeMode="contain"
          />
          <Text
            style={{
              fontSize: 15,
              color: "#fff",
              textAlign: "center",
              fontWeight: "900",
              width: 50,
            }}
          >
            Logout
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default ProfileDrawer;
