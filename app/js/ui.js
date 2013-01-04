ui = {

    context : "",
    footer : "",
    currentPage : "start",

    control : function ( obj ) {

        var action = obj.dataset.href;

        if ( action != ui.currentPage ) {

            ui.addClass( ui.context.querySelector( "#" + ui.currentPage ), "none");

            if( action == "start" ){

                ui.addClass( ui.footer, "none" );

            } else {

                ui.removeClass( ui.footer, "none" );

            }

            ui.removeClass( ui.context.querySelector( "#" + action ), "none" );
            ui.currentPage = action;
        }
    },

    changeDirection : function () {
        var titles = ui.context.querySelectorAll( ".wrapTransformControl > span.label" );

        for ( var i = 0; i < titles.length; i++ ) {
            var currentValue = titles[i].innerText;
            titles[i].innerText = titles[i].dataset.value;
            titles[i].dataset.value = currentValue;
        }
    },

    manageText : function (obj) {
        var textArea = ui.context.querySelector( "#" + obj.dataset.id );
        var action = obj.dataset.action;

        switch ( action ) {
            case "get" :
                util.getFromClipBoard();
                break;
            case "copy" :
                util.copyToClipBoard( textArea.value );
                break;
            case "remove" :
                textArea.value = "";
                break;
            default:
                errorHandler.toLog( { msg: "Incorrect action" + action, obj: "ui", method: "manageText" } );
                break;
        }

    },

    formControl : function ( obj ) {

        var inputFields = ui.context.querySelectorAll( "form input" );

        if ( obj.type == "submit" ) {

            var arr = [];

            for ( var i = 0; i < inputFields.length; i++ ) {

                arr.push(inputFields[i].value);
                inputFields[i].disabled = true;

            }

            util.saveToStorage(arr);

        } else {

            for ( var i = 0; i < inputFields.length; i++ ) {

                inputFields[i].disabled = false;

            }
        }
    },

    addClass : function( elem, clazz ) {

        var c = elem.className.split(' ');

        for( var i = 0; i < c.length; i++ ) {
            if ( c[i] == clazz ) return;
        }

        if ( elem.className == '') {

            elem.className = clazz;

        } else {

            elem.className += ' ' + clazz;

        }

    },

    removeClass : function (elem, clazz) {

        var c = elem.className.split(' ');

        for ( var i = 0; i < c.length; i++ ) {

            if ( c[i] == clazz ) {
                c.splice(i--, 1);
            }
        }

        elem.className = c.join(' ');
    },

    hasClass : function(el, cls) {

        for ( var c = el.className.split(' '), i = c.length-1; i >= 0; i-- ) {
            if ( c[i] == cls ) {
                return true;
            }
        }

        return false;
    }
};