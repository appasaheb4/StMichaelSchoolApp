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
  Text
} from "native-base";
import { RkCard } from "react-native-ui-kitten";
import Icon from "react-native-vector-icons/FontAwesome5";

export default class SettingsScreen extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.toggleDrawer()}
            >
              <Icon name="bars" size={25} color="#ffffff" />
            </Button>
          </Left>
          <Body style={{ flex: 0, alignItems: "center" }}>
            <Title
              adjustsFontSizeToFit={true}
              numberOfLines={1}
              style={styles.titleUserName}
            >
              St Michael's School
            </Title>
          </Body>
          <Right>
            <Button
              transparent
              onPress={() => this.props.navigation.push("NotificationScreen")}
            >
              <Icon name="bell" size={15} color="#ffffff" />
            </Button>
            <Button transparent onPress={this.click_openPopupAccountType}>
              <Icon name="plus" size={25} color="#ffffff" />
            </Button>
          </Right>
        </Header>
        <Content contentContainerStyle={styles.container}>
          <View>
            <Text>hi</Text>
          </View>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
