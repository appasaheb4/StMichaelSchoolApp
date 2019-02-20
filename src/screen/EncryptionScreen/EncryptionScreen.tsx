import React, { Component } from "react";
import { View, AsyncStorage, Image, StyleSheet, Text } from "react-native";
import { colors } from "../../app/constant/constant";
import Singleton from "../../app/constant/Singleton";

interface Props {
  onComplited: Function;
}

export default class EncryptionScreen extends Component<Props, any> {
  constructor(props: any) {
    super(props);
  }

  async componentDidMount() {
    let commonData = Singleton.getInstance();
    var status = await AsyncStorage.getItem("LoginStatus");
    var id = await AsyncStorage.getItem("@UserId:key");
    commonData.setUserId(id);
    setTimeout(() => {
      if (status) {
        this.props.onComplited(true, "LoginRouter");
      } else {   
        this.props.onComplited(false, "OnBoardingRouter");
      }
    }, 1000);
  }  

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.appLogo}
          source={require("../../assets/images/icons/mainLogo.jpg")}
        />
        <Text style={styles.txtAppName}>St Michael's School</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  appLogo: {
    width: 300,
    height: 300,
    borderRadius: 150
  },
  txtAppName: {
    fontSize: 40,
    fontWeight: "bold",
    marginTop: 20,
    color: colors.appColor
  }
});
