sap.ui.define([
    "sap/m/Text",
    "sap/m/Button",
    "sap/m/MenuButton"
], (Text,Button,menuButton) => {
    "use strict";
  var oText =  new Text({
        text: "Hello UI5"
    })
oText.placeAt("content")

 var obtn = new Button({
    text: "clickme",
    press: function (){
    debugger;
        console.log("Button Pressed")
        this.setVisible(false)
        console.log("Button disappeared")

        var local = this
       //settimer 
       setTimeout(()=>{
        local.setVisible(true);
        console.log("Button Reversed after 3 secs")
       },3000);
    }
 })
 obtn.placeAt("content")
 var omenuButton = new menuButton({
    text: "State",

 })
 omenuButton.placeAt("content");
});
