/** @format */

import React from "react";
import { AppRegistry, AsyncStorage } from "react-native";
import App from "./App";
import { name as appName } from "./app.json";
import { createRootNavigator } from "./src/app/router/router";
import { createAppContainer } from "react-navigation";
import EncryptionScreen from "./src/screen/EncryptionScreen/EncryptionScreen";

console.disableYellowBox = true;

class STMICHAELSCHOOL extends React.Component {
  constructor(props) {
    super(props);
    this.state = { status: true, isStartPage: "OnBoardingRouter" };
  }

  onComplited(status, pageName) {
    this.setState({
      status: status,
      isStartPage: pageName
    });
    console.log({status,pageName})
  }

  render() {
    const Layout = createRootNavigator(
      this.state.status,
      this.state.isStartPage
    );
    const AppContainer = createAppContainer(Layout);
    return this.state.status ? (
      <EncryptionScreen
        onComplited={(status: boolean, pageName: string) =>
          this.onComplited(status, pageName)
        }
      />
    ) : (
      <AppContainer />
    );
  }
}

AppRegistry.registerComponent(appName, () => STMICHAELSCHOOL);
