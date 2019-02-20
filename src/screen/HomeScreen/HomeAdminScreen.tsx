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
import ImageSlider from "react-native-image-slider";
import Grid from "react-native-grid-component";

  
//Custome Object
import { colors, apiary } from "../../app/constant/constant";

export default class HomeAdminScreen extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      data:[]
    };
  }

 

  //TODO: Grid System
  _renderItem = (data, i) => (
    <View style={[{ backgroundColor: data.color }, styles.item]} key={i}>
      <Icon name={data.icon} style={{ marginTop: 15 }} color="#fff" size={30} />
      <Text
        style={{
          fontSize: 18,
          fontWeight: "bold",
          color: "#fff",
          marginTop: 10
        }}
      >
        {data.name}
      </Text>
    </View>
  );

  _renderPlaceholder = i => <View style={styles.item} key={i} />;

  render() {
    const items = [
      { name: "TURQUOISE", icon: "home", color: "#1abc9c" },
      { name: "EMERALD", icon: "bars", color: "#2ecc71" },
      { name: "PETER RIVER", icon: "home", color: "#3498db" },
      { name: "AMETHYST", icon: "bars", color: "#9b59b6" },
      { name: "GREEN SEA", icon: "bars", color: "#16a085" }
    ];
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
          <View style={{ flex: 0.6 }}>
            <ImageSlider
              images={[
                "https://scontent.fnag1-2.fna.fbcdn.net/v/t1.0-9/48991520_1112438488933016_2228356018167873536_n.jpg?_nc_cat=109&_nc_ht=scontent.fnag1-2.fna&oh=d6f8600dd438d18f6a65135928405486&oe=5CB6EB9E",
                "https://scontent.fnag1-1.fna.fbcdn.net/v/t1.0-9/48059697_1098436970333168_6566413243579891712_o.jpg?_nc_cat=102&_nc_ht=scontent.fnag1-1.fna&oh=e00c83be6d66644cff472a87f29d71d3&oe=5D014AFA",
                "https://scontent.fnag1-2.fna.fbcdn.net/v/t1.0-9/36177459_967117096798490_8948893798092505088_o.jpg?_nc_cat=109&_nc_ht=scontent.fnag1-2.fna&oh=b1c38205d2fe1501d9e01984a805253e&oe=5CCB6B78"
              ]}
            />
          </View>
          <View style={{ flex: 1, padding: 5 }}>
            <Grid
              style={styles.list}
              renderItem={this._renderItem}
              renderPlaceholder={this._renderPlaceholder}
              data={items}
              itemsPerRow={3}
            />
          </View>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  //Grid System
  item: {
    flex: 1,
    height: 80,
    margin: 1,
    borderRadius: 5,
    alignItems: "center"
  },
  list: {
    flex: 1
  }
});
