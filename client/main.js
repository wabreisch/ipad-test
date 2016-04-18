import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
// import { Session } from 'meteor/session';

import './main.html';

var ipAddress = "http://10.131.52.34";

Template.onOff.helpers({
  // performPinRead: function (pin) {
  //   var url = "10.133.54.4/arduino/digital/" + pin + "/";

  //   console.log("http://" + url);

  //   HTTP.call("GET", url, function (error, result) {
  //     if (!error) {
  //       returnResult = result.content;
  //       $("#" + pin).text(returnResult);
  //       return returnResult;
  //     } else {
  //       console.log(error);
  //     }
  //   });
  // }
});

Template.onOff.events({
  "click #on": function () {
      var headers = {};
      // headers['Access-Control-Allow-Origin'] = '"';
      
      HTTP.call("GET", ipAddress + "/arduino/digital/13/1", headers, function (error, result) {
        if (error) {
          console.log(error);
        } else {
          return result;
        }
      });
    },
    "click #off": function () {
      var headers = {};

      HTTP.call("GET", ipAddress + "/arduino/digital/13/0", headers, function (error, result) {
        if (error) {
          console.log(error);
        } else {
          return result;
        }
      });
    },

    "click #servoon": function () {
      var headers = {};

      HTTP.call("GET", ipAddress + "/arduino/servo/9/1", headers, function (error, result) {
        if (error) {
          console.log(error);
        } else {
          return result;
        }
      });
    },

    "click #servooff": function () {
      var headers = {};

      HTTP.call("GET", ipAddress + "/arduino/servo/9/0", headers, function (error, result) {
        if (error) {
          console.log(error);
        } else {
          return result;
        }
      });
    },

    "click #pumpon": function () {
      var headers = {};

      HTTP.call("GET", ipAddress + "/arduino/digital/4/1", headers, function (error, result) {
        if (error) {
          console.log(error);
        } else {
          return result;
        }
      });
    },

    "click #pumpoff": function () {
      var headers = {};

      HTTP.call("GET", ipAddress + "/arduino/digital/4/0", headers, function (error, result) {
        if (error) {
          console.log(error);
        } else {
          return result;
        }
      });
    },

    "change #slider": function () {
      var sliderValue = $("#slider").val();
      HTTP.call("GET", ipAddress + "/arduino/servo/9/" + sliderValue, {}, function (error, result) {
        if (error) {
          console.log(error);
        } else {
          return result;
        }
      });
      $("#sliderValue").text($("#slider").val());
    }
});
