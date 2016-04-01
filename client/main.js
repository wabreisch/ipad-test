import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.onOff.helpers({
  performPinRead: function (pin) {
    var method = "GET";
    var headers = {};
    var url = "http://ser492arduino.local/arduino/digital/" + pin + "/";

    var returnResult = HTTP.call(method, url, headers, function (error, result) {
      if (!error) {
        returnResult = result.content;

        console.log(returnResult);

        return returnResult;
      }
    });

    console.log(returnResult);
    return returnResult;
  }
});

Template.onOff.events({
  "click #on": function () {
      var start = new Date().getTime();
      var headers = {};
      // headers['Access-Control-Allow-Origin'] = '"';
      
      HTTP.get("http://ser492arduino.local/arduino/digital/13/1", headers, function (error, result) {
      // HTTP.get("http://ser492arduino.local/arduino/digital/13/1", {headers: {AccessControlAllowOrigin: '*'}}, function (error, result) {
      // Meteor.call("makeRESTCall", "http://ser492arduino.local/arduino/digital/13/1", function (error, result) {
        if (error) {
          // handle error
          console.log("Handling some error...");
          var elapsed = new Date().getTime() - start;
          alert(result.content + " it took " + elapsed + " ms.");
        } else {
          return result;
        }
      });
      // HTTP.get("http://ser492arduino.local/arduino/digital/13/1");
    },
    "click #off": function () {
      var start = new Date().getTime();
      HTTP.get("http://ser492arduino.local/arduino/digital/13/0", function (error, result) {
      // Meteor.call("makeRESTCall", "http://ser492arduino.local/arduino/digital/13/1", function (error, result) {
        if (error) {
          // handle error
          console.log("Handling some error...");
          var elapsed = new Date().getTime() - start;
          alert(result.content + " it took " + elapsed + " ms.");
        } else {
          return result;
        }
      });
    }
});
