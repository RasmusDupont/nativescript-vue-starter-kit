import * as dialogsModule from "ui/dialogs"

export default function alert(message) {
    return dialogsModule.alert({
        title: "Yome",
        okButtonText: "OK",
        message: message
    })
}