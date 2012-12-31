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
            case "select":
                ui.setSelection(textArea);
                break;
            case "copy" :
                util.copyToClipBoard(textArea.innerText);
                break;
            case "remove" :
                textArea.value = "";
                break;
            default:
                errorHandler.toLog( { msg: "Incorrect action" + action, obj: "ui", method: "manageText" } );
                break;
        }

    },

    setSelection : function (target) {
        var rng, sel;
        if ( document.createRange ) {
            rng = document.createRange();
            rng.selectNode( target);
            sel = window.getSelection();
            sel.removeAllRanges();
            sel.addRange( rng );

        } else {
            var rng = document.body.createTextRange();
            rng.moveToElementText( target );
            rng.select();
        }
    }
};