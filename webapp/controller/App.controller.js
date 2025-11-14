sap.ui.define(
    [
        "sap/ui/core/mvc/Controller",
        "sap/ui/model/json/JSONModel",
        "sap/ui/model/resource/ResourceModel"
    ],
    (Controller, JSONModel, ResourceModel) => {
        "use strict";
        return Controller.extend("ui5.walkthrough.controller.App", {

            // JSONModel set handler
            onInit() {
                const oModel = new JSONModel({
                    recipent: {
                        name: "Mahendra Pandrameesu"
                    }
                });

                this.getView().setModel(oModel);

                // i18n properties ResourceModel
                const oResourceModel = new ResourceModel({
                    bundleName: "ui5.walkthrough.i18n.i18n"
                });

                this.getView().setModel(oResourceModel, "translableTexts");
            },

            onAfterRendering() {
            },

            // press event handler
            onPress() {
                console.log("ButtonPressed");
                alert("Say Hi");

                setTimeout(async () => {
                    console.log("onPress async call function excuted after 3 secs");
                }, 3000);
            }

        });
    }
);
