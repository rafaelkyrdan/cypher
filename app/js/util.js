util = {

    copyToClipBoard : function (msg) {
        clipboard.set(msg, 'text');
    },

    getFromClipBoard : function () {
        var text = clipboard.get('text');
        ui.context.querySelector("#left").value = text;
    },

    saveToStorage : function (obj) {
        window.sessionStorage.setItem("keys", JSON.stringify(obj, null));
    }

};