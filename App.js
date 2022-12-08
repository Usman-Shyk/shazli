import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Image } from "react-native";

//==== IMPORT SCREENS
import Login from "./screen/Login";
import Signup from "./screen/Signup";
import Home from "./screen/Home";
import "react-native-gesture-handler";
import "react-native-reanimated";
import ProfileDrawer from "./screen/component/ProfileDrawer";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Drawer.Navigator
          contentOptions={{
            activeTintColor: "black",
            activeBackgroundColor: "transparent",
            inactiveTintColor: "black",
          }}
          screenOptions={{
            drawerHideStatusBarOnOpen: false,
            drawerActiveBackgroundColor: "transparent",
            overlayColor: "rgba(255,255,255,0.7)",
            swipeEnabled: false,
            unmountOnBlur: true,
            drawerInactiveTintColor: "#fff",
            drawerActiveTintColor: "#fff",
            gestureEnabled: false,
            drawerStyle: {
              backgroundColor: "rgba(97,91,197,0.85)",
              width: "60%",
              borderBottomRightRadius: 22,
              borderTopRightRadius: 22,
            },
            drawerLabelStyle: {
              fontSize: 16,
              fontWeight: "700",
              margin: -10,
            },
          }}
          drawerContent={(props) => <ProfileDrawer {...props} />}
          initialRouteName="Home"
        >
          <Drawer.Screen
            options={{
              headerShown: false,
              // drawerIcon: () => {},
              // drawerIcon: () => (
              //   <Image
              //     source={require("./assets/bag.png")}
              //     style={[{ tintColor: "red" }]}
              //   />
              // ),
            }}
            key="home"
            name="Home"
            component={Home}
          />
          <Drawer.Screen
            options={{ headerShown: false }}
            key="login"
            name="Login"
            component={Login}
          />
          <Drawer.Screen
            options={{ headerShown: false }}
            key="Signup"
            name="Signup"
            component={Signup}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
