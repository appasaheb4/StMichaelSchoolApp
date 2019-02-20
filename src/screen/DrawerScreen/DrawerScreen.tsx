import React, { Component } from "react";
import { NavigationActions, DrawerActions,StackActions } from "react-navigation";
import PropTypes, { any } from "prop-types";
import {
  ScrollView,
  Text,
  View,
  StyleSheet,
  ImageBackground,
  Image,
  FlatList,
  TouchableOpacity,
  Dimensions,
  Alert
} from "react-native";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Left,
  Right,
  Thumbnail
} from "native-base";
import Icon from "react-native-vector-icons/FontAwesome5";
import renderIf from "../../app/constant/validation/renderIf";  

export default class DrawerScreen extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state =({
      menuBarList: [],
      userDetails: [],
      fullName: "",
      imagePath: "",
      flagImage: false
    });
  }

  //TODO: func
  //TODO:  function NavigateToScreen
  navigateToScreen = route => () => {
    console.log(route);
    if (route == "Home") {
      const navigateAction = NavigationActions.navigate({
        routeName: route
      });    
      this.props.navigation.dispatch(navigateAction);
      this.props.navigation.dispatch(DrawerActions.closeDrawer());
    } else if (route == "Logout") {
      const resetAction = StackActions.reset({
        index: 0, // <-- currect active route from actions array
        key: null,
        actions: [NavigationActions.navigate({ routeName: "LoginRouter" })]
      });
      this.props.navigation.dispatch(resetAction);
    } else {  
      this.props.navigation.push(route);
      this.props.navigation.dispatch(DrawerActions.closeDrawer());
    }    
  };

  render() {
    const data = [
      { title: "Home", icon: "home" },
      { title: "Admission", icon: "bars" },
      { title: "Logout", icon: "sign-out-alt" }
    ];
    return (
      <Container>
        <Content contentContainerStyle={styles.container}>
        <View style={styles.viewHeading}>
        <View style={styles.viewUserIcon}>
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.closeDrawer();
                  this.props.navigation.push("MyProfileRouter");
                }}
              >
                {renderIf(this.state.imagePath === "")(
                  <Image
                    style={[styles.userProfileIcon, { marginBottom: -140 }]}
                    source={require("../../assets/images/icons/default_user_icon.png")}
                  />
                )}
                {renderIf(this.state.imagePath != "")}
                {
                  <Image
                    style={styles.userProfileIcon}
                    source={this.state.imagePath}
                  />
                }
                <Icon
                  name="edit"
                  style={styles.iconEdit}
                  size={20}
                  color="#ffffff"
                />  
              </TouchableOpacity>
            </View>
            <Text style={styles.txtUserName}>St Michael's School</Text>
          </View>
          <ScrollView style={styles.viewScrollingList}>
            <View>
              <FlatList
                data={data}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => (
                  <TouchableOpacity onPress={this.navigateToScreen(item.title)}>
                    <View style={styles.menuItem}>
                      <Icon name={item.icon} size={17} color="#ffffff" />
                      <Text style={styles.txtMenuItem}>{item.title}</Text>
                    </View>
                  </TouchableOpacity>
                )}
                keyExtractor={item => item.id}
              />
            </View>
          </ScrollView>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3F51B5"
  },
  viewHeading: {
    flex: 0.5,
    marginTop: 10,
    alignItems: "center"
  },
  userProfileIcon: {
    width: 140,
    height: 140,
    borderRadius: 70
  },
  viewUserIcon: {
    flexDirection: "row",
    alignItems: "flex-end"
  },
  iconEdit: {
    alignSelf: "flex-end",
    marginTop: -30
  },
  txtUserName: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 24,
    marginTop: 10,
    marginBottom: 10
  },
  //menu item
  menuItem: {
    padding: 10,
    flexDirection: "row",
    borderWidth: 0.5,
    borderColor: "#d6d7da",
    alignItems: "center"
  },
  txtMenuItem: {
    paddingLeft: 10,
    color: "#ffffff",
    fontSize: 16
  },
  //Scrolling:viewScrollingList
  viewScrollingList: {
    flex: 1
  }
});

DrawerScreen.propTypes = {
  navigation: PropTypes.object
};
