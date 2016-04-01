import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
// import { Session } from 'meteor/session';

import './main.html';

Template.onOff.helpers({
  performPinRead: function (pin) {
    var url = "http://ser492arduino.local/arduino/digital/" + pin + "/";

    HTTP.call("GET", url, function (error, result) {
      if (!error) {
        returnResult = result.content;
        $("#" + pin).text(returnResult);
        return returnResult;
      }
    });
  }
});

Template.onOff.events({
  "click #on": function () {
      var headers = {};
      // headers['Access-Control-Allow-Origin'] = '"';
      
      HTTP.get("http://ser492arduino.local/arduino/digital/13/1", headers, function (error, result) {
      // HTTP.get("http://ser492arduino.local/arduino/digital/13/1", {headers: {AccessControlAllowOrigin: '*'}}, function (error, result) {
      // Meteor.call("makeRESTCall", "http://ser492arduino.local/arduino/digital/13/1", function (error, result) {
        if (error) {
          console.log("Handling some error...");
        } else {
          return result;
        }
      });
      // HTTP.get("http://ser492arduino.local/arduino/digital/13/1");
    },
    "click #off": function () {
      HTTP.get("http://ser492arduino.local/arduino/digital/13/0", function (error, result) {
      // Meteor.call("makeRESTCall", "http://ser492arduino.local/arduino/digital/13/1", function (error, result) {
        if (error) {
          console.log("Handling some error...");
        } else {
          return result;
        }
      });
    }
});
