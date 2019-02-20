import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  Alert,
  AsyncStorage
} from "react-native";
import Onboarding from "react-native-onboarding-swiper";

import { StackActions, NavigationActions } from "react-navigation";

export default class OnBoardingScreen extends Component<any, any> {
  //TODO: func click_Done

  click_Done() {
    try {  
      AsyncStorage.setItem("@loginStatus:key", "Login");
    } catch (error) {
      // Error saving data
    }
    const resetAction = StackActions.reset({
      index: 0, // <-- currect active route from actions array
      key: null,
      actions: [NavigationActions.navigate({ routeName: "LoginRouter" })]
    });
    this.props.navigation.dispatch(resetAction);
  }

  render() {
    return (
      <View style={styles.container}>
        <Onboarding
          onDone={() => this.click_Done()}
          onSkip={() => this.click_Done()}
          pages={[
            {
              backgroundColor: "#7AE58F",
              image: (
                <Image
                  style={{ width: 200, height: 200, borderRadius: 100 }}
                  resizeMode="cover"
                  source={require("../../assets/images/icons/mainLogo.jpg")}
                />
              ),
              title: "St.Michael School",
              subtitle: "Narayan Doho, Maharashtra 414002"
            },
            {
              backgroundColor: "#006505",
              image: (
                <Image
                  style={{ width: 200, height: 200, borderRadius: 100 }}
                  resizeMode="cover"
                  source={require("../../assets/images/icons/mainEnter.png")}
                />
              ),
              title: "About",
              subtitle: "The best learning environment in all of Ahmednagar."
            }
          ]}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
