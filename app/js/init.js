
function init () {

    appUI.context = document.querySelector( '#content' );
    appUI.footer = document.querySelector( 'footer' );

    var tiles = appUI.context.querySelectorAll( "a.tile" );
    for ( var i = 0; i < tiles.length; i++ ) {
        tiles[i].onclick = function ( e ) {
            appUI.control( this );
            return false;
        };
    }

    var commandButton = appUI.footer.querySelectorAll( "button" );
    for ( var i = 0; i < commandButton.length; i++ ) {
        commandButton[i].onclick = function ( e ) {
            appUI.control( this );
            return false;
        };
    }

    var buttons = appUI.context.querySelectorAll( "table button" );
    for ( var i = 0; i < buttons.length; i++ ) {
        buttons[i].onclick = function ( e ) {
            app.formControl( this );
            return false;
        };
    }

    appUI.context.querySelector( "#changeDirection" ).onclick = function ( e ) {
        appUI.changeDirection();
        app.changeDirection();
        return false;
    };

    var spans = appUI.context.querySelectorAll( ".tools > span" );
    for ( var i = 0; i < spans.length; i++ ) {
        spans[i].onclick = function ( e ) {
            //appUI.manageText( this );
            app.manageText( this );
            return false;
        };
    }

    appUI.context.querySelector( "#transform" ).onclick = function ( e ) {

        app.transform();
        return false;

    };

    appUI.context.querySelector( ".closeWindow" ).onclick = function ( e ) {

        win.close();
        return false;

    };
}

window.onload = init;

var gui = require( 'nw.gui' );

var clipboard = gui.Clipboard.get();
var win = gui.Window.get();

win.on( 'loaded', function() {
    gui.Window.get().show();
});

function w ( a,b,c,d ) {
     console.log( a,b,c,d );
}

