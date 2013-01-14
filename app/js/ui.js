appUI = {

    context : "",
    footer : "",
    currentPage : "start",

    control : function ( obj ) {

        var action = obj.dataset.href;

        if ( action != appUI.currentPage ) {

            appUI.addClass( appUI.context.querySelector( "#" + appUI.currentPage ), "none");

            if( action == "start" ){

                appUI.addClass( appUI.footer, "none" );

            } else {

                appUI.removeClass( appUI.footer, "none" );

            }

            appUI.removeClass( appUI.context.querySelector( "#" + action ), "none" );
            appUI.currentPage = action;
            app.checkKey();
        }
    },

    changeDirection : function () {
        var titles = appUI.context.querySelectorAll( ".span6 > span.label" );

        for ( var i = 0; i < titles.length; i++ ) {
            var currentValue = titles[i].innerText;
            titles[i].innerText = titles[i].dataset.value;
            titles[i].dataset.value = currentValue;
        }

        var button = appUI.context.querySelector("#transform");
        button.innerText = ( app.currentDirection == "encrypt" ) ? "Decrypt" : "Encrypt" ;

    },

    manageText : function ( obj ) {

        var textArea = appUI.context.querySelector( "#" + obj.dataset.id );
        var action = obj.dataset.action;

        switch ( action ) {
            case "get" :
                app.getText();
                break;
            case "copy" :
                app.copyToClipBoard( textArea.value );
                break;
            case "remove" :
                textArea.value = "";
                break;
            default:
                errorHandler.toLog( { msg: "Incorrect action" + action, obj: "appUI", method: "manageText" } );
                break;
        }

    },

    showAlert : function ( str ) {

        var tmp = '<div class="alert">' +
                        '<i class="close"  onclick="appUI.clearMessage()"></i>' +
                        '<strong>Warning! </strong>' + str +
                  '</div>';

        appUI.context.querySelector( ".errorMessage" ).innerHTML = tmp;
    },

    showSuccessMessage : function ( str ) {

        var tmp = '<div class="alert alert-success">' +
            '<i class="close"  onclick="appUI.clearMessage()"></i>' +
            '<strong>' + str + '</strong>' +
            '</div>';

        appUI.context.querySelector( ".errorMessage" ).innerHTML = tmp;
    },

    clearMessage : function () {
        appUI.context.querySelector( ".errorMessage" ).innerHTML = "";
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