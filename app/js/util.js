util = {

    copyToClipBoard : function (msg) {
        clipboard.set(msg, 'text');
    },

    getFromClipBoard : function () {
        var text = clipboard.get('text');
        ui.context.querySelector("#left").value = text;
    }

};