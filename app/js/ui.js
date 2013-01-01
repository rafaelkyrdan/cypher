ui = {

    context : "",

    control : function (obj) {
        var action = obj.dataset.href;
    },

    changeDirection : function () {
        var titles = ui.context.querySelectorAll(".span5 > h2");
        for (var i = 0; i < titles.length; i++) {
            var currentValue = titles[i].innerText;
            titles[i].innerText = titles[i].dataset.value;
            titles[i].dataset.value = currentValue;
        }
    },

    manageText : function (obj) {
        var textArea = ui.context.querySelector("#"+obj.dataset.id);
        var action = obj.dataset.action;

        switch (action) {
            case "get" :
                util.getFromClipBoard();
                break;
            case "copy" :
                util.copyToClipBoard(textArea.value);
                break;
            case "remove" :
                textArea.value = "";
                break;
            default:
                errorHandler.toLog( { msg: "Incorrect action" + action, obj: "ui", method: "manageText" } );
                break;
        }

    }
};