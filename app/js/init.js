
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

    var buttons = ui.context.querySelectorAll( "form button" );
    for ( var i = 0; i < buttons.length; i++ ) {
         buttons[i].onclick = function ( e ) {
             ui.formControl( this );
             return false;
         };
    }

    ui.context.querySelector( "#transform" ).onclick = function ( e ) {

        util.transform();
        return false;

    };

}

window.onload = init;

// Load native UI library
var gui = require( 'nw.gui' );
// We can not create a clipboard, we have to receive the system clipboard
var clipboard = gui.Clipboard.get();
var win = gui.Window.get();

// Listen to the minimize event
win.on( 'loaded', function() {
    gui.Window.get().show();
});

function w ( a,b,c,d ) {
     console.log( a,b,c,d );
}


//var crypto = require("crypto");
//var assert = require("assert");

var hash1 = require("crypto").createHash('sha1').update('Test123').digest('hex');
var hash2 = require("crypto").createHash('md5').update('Test123').digest('binary');
var hash3 = require("crypto").createHash('md5').update(hash1, 'hex');

require("assert").equal(hash1, '8308651804facb7b9af8ffc53a33a22d6a1c8ac2', 'Test SHA1');
require("assert").equal(hash2, 'h\u00ea\u00cb\u0097\u00d8o\fF!\u00fa+\u000e\u0017\u00ca' +
    '\u00bd\u008c', 'Test MD5 as binary');

w("h1", hash1);
w("h2", hash2);
w('h3', hash3);
