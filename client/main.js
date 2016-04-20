import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
// import { Session } from 'meteor/session';

import './main.html';

var ipAddress = "http://10.131.52.34";

// A generalized form of a HTTP request to be sent to the Arduino Yun
// @param commandType: The type of the command being made: {servo, digital, or analog}
// @param pin: The pin to which the given value should be written
// @param value: The value that should be written to the given pin
var yunCommand = function (commandType, pin, value) {
  var requestString = ipAddress + "/arduino/" + commandType + "/" + pin + "/" + value;
  var headers = {};

  HTTP.call("GET", requestString, headers, function (error, result) {
    if (error) {
      console.log(error);
    } else {
      return result;
    }
  });

}

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
    yunCommand("digital", 13, 1);
  },
  "click #off": function () {
    yunCommand("digital", 13, 0);
  },

  "click #servoon": function () {
    yunCommand("servo", 9, 1);
  },

  "click #servooff": function () {
    yunCommand("servo", 9, 0);
  },

  "click #pumpon": function () {
    yunCommand("digital", 4, 1);
  },

  "click #pumpoff": function () {
    yunCommand("digital", 4, 0);
  },
});

    // "change #slider": function () {
    //   var sliderValue = $("#slider").val();
    //   HTTP.call("GET", ipAddress + "/arduino/servo/9/" + sliderValue, {}, function (error, result) {
    //     if (error) {
    //       console.log(error);
    //     } else {
    //       return result;
    //     }
    //   });
    //   $("#sliderValue").text($("#slider").val());
    // }