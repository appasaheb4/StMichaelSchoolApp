import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  View,
  ImageBackground,
  Dimensions,
  ScrollView
} from "react-native";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Left,
  Right,
  Body,
  Text,
  List,
  Input,
  ListItem,
  Thumbnail
} from "native-base";
import { RkCard } from "react-native-ui-kitten";
import Icon from "react-native-vector-icons/FontAwesome5";
import { SCLAlert, SCLAlertButton } from "react-native-scl-alert";
import { Dropdown } from "react-native-material-dropdown";
import { StackActions, NavigationActions } from "react-navigation";

//Custome Object
import { colors, apiary } from "../../app/constant/constant";
import ApiManager from "../../app/manager/ApiManager/ApiManager";

export default class LoginScreen extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      data: [],
      inputData: [],
      popUpMessage: [],
      isMessagePopup: false,
      email: null,
      password: null,
      menu: null
    };
  }

  async componentWillMount() {
    let resuleUserTyeps = await ApiManager.getUserTypes(apiary.getUserTypes);
    this.setState({ data: resuleUserTyeps.temp });
  }     

  //TODO: func chnageText
  handleChange(val: any, type: any) {
    let menu, email, password;
    if (type == "email") {
      this.setState({
        email: val
      });
    } else if (type == "password") {
      this.setState({
        password: val
      });
    } else {
      this.setState({
        menu: val
      });
    }
  }

  //TODO: func click_Login
  click_Login() {
    if (
      this.state.email != null &&
      this.state.password != null &&
      this.state.menu != null
    ) {
      if (
        this.state.email == "admin" &&
        this.state.password == "admin" &&
        this.state.menu == "Admin"
      ) {
        const resetAction = StackActions.reset({
          index: 0, // <-- currect active route from actions array
          key: null,
          actions: [NavigationActions.navigate({ routeName: "TabbarBottom" })]
        });
        this.props.navigation.dispatch(resetAction);
      } else {
        this.setState({
          isMessagePopup: true,
          popUpMessage: [
            {
              status: "danger",
              title: "Ooops!!",
              message: "Please enter correct email and password.",
              icon: "frown",
              flagGoBack: false
            }
          ]
        });
      }
    } else {
      this.setState({
        isMessagePopup: true,
        popUpMessage: [
          {
            status: "danger",
            title: "Ooops!!",
            message: "Please enter email and password",
            icon: "frown",
            flagGoBack: false
          }
        ]
      });
    }
  }

  render() {
    return (
      <ScrollView>
        <Container>
          <Content contentContainerStyle={styles.container}>
            <ImageBackground
              source={require("../../assets/images/icons/mainEnter.png")}
              style={styles.container}
              imageStyle={{
                resizeMode: "cover" // works only here!
              }}
            >
              <RkCard rkCardContent style={styles.cardLogin}>
                <ScrollView>
                  <Dropdown
                    label="Select Type"
                    onChangeText={(text: any) =>
                      this.handleChange(text, "menu")
                    }
                    baseColor="#fff"
                    style={{ color: "#fff" }}
                    data={this.state.data}
                  />
                  <Input
                    name="email"
                    value={this.state.email}
                    placeholder="Email"
                    keyboardType="email-address"
                    placeholderTextColor="#ffffff"
                    underlineColorAndroid="#006505"
                    style={styles.input}
                    onChange={text => this.handleChange(text, "email")}
                    onChangeText={text => this.handleChange(text, "email")}
                  />
                  <Input
                    name="password"
                    value={this.state.password}
                    secureTextEntry
                    keyboardType="default"
                    placeholder="Password"
                    underlineColorAndroid="#006505"
                    placeholderTextColor="#ffffff"
                    style={styles.input}
                    onChange={text => this.handleChange(text, "password")}
                    onChangeText={text => this.handleChange(text, "password")}
                  />
                  <Button
                    danger
                    full
                    style={{ marginTop: 10 }}
                    onPress={() => this.click_Login()}
                  >
                    <Text>Login</Text>
                  </Button>
                </ScrollView>
              </RkCard>
            </ImageBackground>
          </Content>
          <SCLAlert
            theme={
              this.state.popUpMessage.length != 0
                ? this.state.popUpMessage[0].status
                : null
            }
            show={this.state.isMessagePopup}
            cancellable={false}
            headerIconComponent={
              <Icon
                name={
                  this.state.popUpMessage.length != 0
                    ? this.state.popUpMessage[0].icon
                    : null
                }
                size={50}
                color="#fff"
              />
            }
            title={
              this.state.popUpMessage.length != 0
                ? this.state.popUpMessage[0].title
                : null
            }
            subtitle={
              this.state.popUpMessage.length != 0
                ? this.state.popUpMessage[0].message
                : null
            }
          >
            <SCLAlertButton
              theme={
                this.state.popUpMessage.length != 0
                  ? this.state.popUpMessage[0].status
                  : null
              }
              onPress={() => {
                this.setState({
                  isMessagePopup: false
                });
                if (this.state.popUpMessage[0].flagGoBack) {
                  window.EventBus.trigger(
                    notification.notifi_UserDetialsChange,
                    "success"
                  );
                  this.props.navigation.pop();
                }
              }}
            >
              Ok
            </SCLAlertButton>
          </SCLAlert>
        </Container>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  cardLogin: {
    flex: 1,
    position: "absolute",
    alignSelf: "center",
    justifyContent: "center",
    marginTop: Dimensions.get("screen").height / 3 + 30,
    height: 250,
    left: 10,
    right: 10,
    opacity: 0.8,
    backgroundColor: "black"
  },
  input: {
    color: "#fff"
  }
});
