import axios from "axios";

//Custome Object
import { colors, apiary } from "../../../app/constant/constant";

const getUserTypes = (url: string) => {
  return new Promise((resolve, reject) => {
    axios
      .get(url, {
        headers: {
          "Access-Control-Allow-Origin": "*"
        }
      })
      .then(response => {
        let data = response.data.data;
        var temp = [];
        for (let i = 0; i < data.length; i++) {
          let newdata = {};
          newdata.value = data[i].type;
          temp.push(newdata);
        }
        console.log({ temp });
        resolve({ temp });
      })
      .catch(function(error) {
        console.log(error);
      });
  });
};

module.exports = {
  getUserTypes
};
