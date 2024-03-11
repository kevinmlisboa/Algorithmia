import { TouchableOpacity } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LandingScreen from "./src/screens/LandingScreen";
import { NavigationContainer } from "@react-navigation/native";
import LogInScreen from "./src/screens/LogInScreen";
import MainMenuScreen from "./src/screens/MainMenuScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import WholeSaleScreen from "./src/screens/WholeSaleScreen";
import FinderScreen from "./src/screens/FinderScreen";
import DeliveryScreen from "./src/screens/DeliveryScreen";
import SortingScreen from "./src/screens/SortingScreen";
import RegisterScreen from "./src/screens/RegisterScreen";
import SettingsScreen from "./src/screens/SettingsScreen";
import {
  SVGFour,
  SVGLogo,
  SVGOne,
  SVGSettings,
  SVGThree,
  SVGTwo,
  SVGHome,
} from "./loadFontSVG";
import { SvgXml } from "react-native-svg";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const TabtoSettingsStack = createNativeStackNavigator();

// Function to define header options for bottom tab screens
const headerOptionsForBottomTab = (navigation, svgLeft, svgRight, icon) => ({
  headerStyle: {
    backgroundColor: "#EBF7F9",
    borderBottomColor: "#6FD1EB",
    borderBottomWidth: 5,
  },
  headerTitle: "",
  headerRight: () => (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => navigation.navigate("SettingsScreen")}
    >
      <SvgXml
        xml={svgRight("#09171B")}
        width={"25"}
        height={"25"}
        style={{ marginRight: wp("7%") }}
      />
    </TouchableOpacity>
  ),
  headerLeft: () => (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => navigation.navigate("MainMenuScreen")}
    >
      <SvgXml
        xml={svgLeft("#09171B")}
        width={"25"}
        height={"25"}
        style={{ marginLeft: wp("7%") }}
      />
    </TouchableOpacity>
  ),
  tabBarIcon: () => <SvgXml xml={icon("black")} width={"25"} height={"25"} />,
  tabBarShowLabel: false,
  tabBarActiveBackgroundColor: "#10ABD5",
});

// Main tab navigator component
const MainTab = ({ navigation }) => (
  <Tab.Navigator
    screenOptions={{
      tabBarStyle: {
        backgroundColor: "#EBF7F9",
      },
    }}
  >
    <Tab.Screen
      name="Products"
      component={WholeSaleScreen}
      options={headerOptionsForBottomTab(
        navigation,
        SVGHome,
        SVGSettings,
        SVGOne
      )}
    />
    <Tab.Screen
      name="List"
      component={SortingScreen}
      options={headerOptionsForBottomTab(
        navigation,
        SVGHome,
        SVGSettings,
        SVGTwo
      )}
    />
    <Tab.Screen
      name="Delivery"
      component={DeliveryScreen}
      options={headerOptionsForBottomTab(
        navigation,
        SVGHome,
        SVGSettings,
        SVGThree
      )}
    />
    <Tab.Screen
      name="Finder"
      component={FinderScreen}
      options={headerOptionsForBottomTab(
        navigation,
        SVGHome,
        SVGSettings,
        SVGFour
      )}
    />
  </Tab.Navigator>
);

// Stack navigator for screens related to tab navigation and settings
const TabtoSettingsStackNavigator = ({ navigation }) => (
  <TabtoSettingsStack.Navigator initialRouteName="MainMenuScreen">
    <TabtoSettingsStack.Screen
      name="MainTab"
      component={MainTab}
      options={{ headerShown: false, statusBarHidden: true }}
    />
    <TabtoSettingsStack.Screen
      name="SettingsScreen"
      component={SettingsScreen}
      options={{
        headerStyle: {
          backgroundColor: "#147691",
        },
        headerTitle: "",
        headerLeft: () => (
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.navigate("MainMenuScreen")}
          >
            <SvgXml xml={SVGHome("white")} width={"25"} height={"25"} />
          </TouchableOpacity>
        ),
        statusBarHidden: true,
      }}
    />
    <TabtoSettingsStack.Screen
      name="MainMenuScreen"
      component={MainMenuScreen}
      options={{
        headerStyle: {
          backgroundColor: "#147691",
        },
        headerTitle: "",
        headerRight: () => (
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.navigate("SettingsScreen")}
          >
            <SvgXml xml={SVGSettings("white")} width={"25"} height={"25"} />
          </TouchableOpacity>
        ),
        headerLeft: () => <SvgXml xml={SVGLogo} width={"25"} height={"25"} />,
        statusBarHidden: false,
      }}
    />
  </TabtoSettingsStack.Navigator>
);

const App = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="LandingScreen">
      <Stack.Screen
        name="LandingScreen"
        component={LandingScreen}
        options={{ headerShown: false, statusBarHidden: true }}
      />
      <Stack.Screen
        name="LogInScreen"
        component={LogInScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="RegisterScreen"
        component={RegisterScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="TabToStack"
        component={TabtoSettingsStackNavigator}
        options={{ headerShown: false, statusBarHidden: true }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;
