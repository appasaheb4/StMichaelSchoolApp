import { AsyncStorage } from "react-native";

const getLoginStatus = () => {
  var loginStaus = await AsyncStorage.getItem("@loginStatus:key");
  console.log(loginStaus);
  if (loginStaus == null) {
    console.log(true);
    return true;
  } else {
    console.log(false);
    return false;  
  }
};
  
module.exports = {
  getLoginStatus
};
