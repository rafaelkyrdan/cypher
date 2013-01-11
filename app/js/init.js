
function init () {

    ui.context = document.querySelector( '#content' );
    ui.footer = document.querySelector( 'footer' );

    var tiles = ui.context.querySelectorAll( "a.tile" );
    for ( var i = 0; i < tiles.length; i++ ) {
        tiles[i].onclick = function ( e ) {
            ui.control( this );
            return false;
        };
    }

    var commandButton = ui.footer.querySelectorAll( "button" );
    for ( var i = 0; i < commandButton.length; i++ ) {
        commandButton[i].onclick = function ( e ) {
            ui.control( this );
            return false;
        };
    }

    var buttons = ui.context.querySelectorAll( "table button" );
    for ( var i = 0; i < buttons.length; i++ ) {
        buttons[i].onclick = function ( e ) {
            util.formControl( this );
            return false;
        };
    }

    ui.context.querySelector( "span.changeDirection" ).onclick = function ( e ) {
        ui.changeDirection();
        util.changeDirection();
        return false;
    };

    var spans = ui.context.querySelectorAll( ".tools > span" );
    for ( var i = 0; i < spans.length; i++ ) {
        spans[i].onclick = function ( e ) {
            ui.manageText( this );
            return false;
        };
    }

    ui.context.querySelector( "#transform" ).onclick = function ( e ) {

        util.transform();
        return false;

    };

    ui.context.querySelector( ".closeWindow" ).onclick = function ( e ) {

        w("click", e);

        win.close();
        //e.preventDefault();
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

