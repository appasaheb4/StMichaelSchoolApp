//Message
var errorMessage = {
  cancel: "CANCEL",
  ok: "OK",
  thanks: "Thanks!!",
  logout_Title: "Logout",
  logout_message: "Are you sure you want to logout?",
  aLERT_Title: "Message",
  aPI_FAILED: "Server not responding, please try after some time.",
  internet_ErrorTitle: "No Internet",
  fAILED_INTERNET: "No internet connection available."
};

//Colors
var colors = {
  appColor: "#3F51B5",
  black: "#000000",
  white: "#ffffff",
  placeholder: "#5F5F5F"
};

//Rest Full Api
const domain = "https://stmichaelschool.herokuapp.com/";
var apiary = {
  getUserTypes: domain + "api/getUserTypes"
};

export { errorMessage, apiary, colors };
