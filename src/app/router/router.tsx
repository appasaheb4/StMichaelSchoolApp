import React, { Component } from "react";
import {
  createStackNavigator,
  createDrawerNavigator,
  createBottomTabNavigator
} from "react-navigation";
import Icon from "react-native-vector-icons/FontAwesome5";

//Pages
import OnBoardingScreen from "../../screen/OnBoardingScreen/OnBoardingScreen";
import LoginScreen from "../../screen/LoginScreen/LoginScreen";

//Tabbar
import HomeAdminScreen from "../../screen/HomeScreen/HomeAdminScreen";
import DrawerScreen from "../../screen/DrawerScreen/DrawerScreen";
import MyProfileScreen from "../../screen/MyProfileScreen/MyProfileScree";
import SettingsScreen from "../../screen/SettingsScreen/SettingsScreen";
import AboutUsScreen from "../../screen/AboutUsScreen/AboutUsScreen";

//TODO: StackNavigator:ONBoarding
const OnBoardingRouter = createStackNavigator(
  {
    OnBoarding: {
      screen: OnBoardingScreen,
      navigationOptions: { header: null }
    },
    LoginScreen: {
      screen: LoginScreen,
      navigationOptions: { header: null }
    }
  },
  {
    initialRouteName: "OnBoarding"
  }
);

//TODO: StackNavigator:LoginRouter
const LoginRouter = createStackNavigator(
  {
    OnBoarding: {
      screen: OnBoardingScreen,
      navigationOptions: { header: null }
    },
    LoginScreen: {
      screen: LoginScreen,
      navigationOptions: { header: null }
    }
  },
  {
    initialRouteName: "LoginScreen"
  }
);

//TODO: TabNavigator

//TODO: TabNavigator:TabNavigator
const TabNavigator = createBottomTabNavigator(
  {
    HomeAdminScreen: {
      screen: HomeAdminScreen,
      navigationOptions: {
        tabBarLabel: "Home",
        drawerLockMode: "locked-open",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="home" size={20} color={tintColor} />
        )
      }
    },
    MyProfileScreen: {
      screen: MyProfileScreen,
      navigationOptions: {
        tabBarLabel: "My Profile",
        drawerLockMode: "locked-open",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="user" size={20} color={tintColor} />
        )
      }
    },
    SettingsScreen: {
      screen: SettingsScreen,
      navigationOptions: {
        tabBarLabel: "Settings",
        drawerLockMode: "locked-open",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="cog" size={20} color={tintColor} />
        )
      }
    },
    AboutUsScreen: {
      screen: AboutUsScreen,
      navigationOptions: {
        tabBarLabel: "About",
        drawerLockMode: "locked-open",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="question-circle" size={20} color={tintColor} />
        )
      }
    }
  },
  {
    initialRouteName: "HomeAdminScreen",
    tabBarOptions: {
      activeTintColor: "#3F51B5",
      labelStyle: {
        fontSize: 12
      },
      style: {
        backgroundColor: "#ffffff"
      }
    }
  }
);

//TODO: DrawerNavigator
//TODO: DrawerNavigator:LeftDrawerNavigator
const LeftDrawerNavigator = createDrawerNavigator(
  {
    Home: {
      screen: TabNavigator,
      navigationOptions: {
        drawerLabel: "Home",
        drawerIcon: ({ tintColor }) => <Icon name="home" size={17} />
      }
    }
  },
  {
    initialRouteName: "Home",
    contentComponent: DrawerScreen,
    drawerPosition: "left",
    drawerOpenRoute: "DrawerOpen",
    drawerCloseRoute: "DrawerClose",
    drawerToggleRoute: "DrawerToggle",
    contentOptions: {
      activeTintColor: "#3F51B5",
      style: {
        flex: 1,
        paddingTop: 15
      }
    }
  }
);

//TODO: RootNavigator
//TODO: RootNavigator:createRootNavigator
export const createRootNavigator = (
  signedIn = false,
  screenName = "OnBoarding"
) => {
  return createStackNavigator(
    {
      OnBoardingRouter: {
        screen: OnBoardingRouter,
        navigationOptions: { header: null }
      },
      LoginRouter: {
        screen: LoginRouter,
        navigationOptions: { header: null }
      },
      TabbarBottom: {
        screen: LeftDrawerNavigator,
        navigationOptions: { header: null }
      }
    },
    {
      initialRouteName: signedIn ? "OnBoardingRouter" : screenName
      // initialRouteName: signedIn ? "OnBoardingNavigator" : "OnBoardingNavigator"
      // initialRouteName: signedIn ? "TabbarBottom" : "TabbarBottom"
    }
  );
};
