sap.ui.define(
    ["sap/ui/core/mvc/Controller"],(Controller) =>{
        "use strict"

        return Controller.extend("ui5.walkthrough.controller.App",{
           onPress: () =>{
            debugger;
            console.log("ButtonPressed");
            alert("Say Hi") 

            setTimeout(async()=>{
             console.log("onPress async call function excuted after 3 secs");
            },3000)

           }
        })
    
})