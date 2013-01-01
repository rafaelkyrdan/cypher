
function init () {

    ui.context = document.querySelector( '#content' );

    var tiles = ui.context.querySelectorAll( "a.tile" );
    for ( var i = 0; i < tiles.length; i++ ) {
        tiles[i].onclick = function ( e ) {
            ui.control( this );
            return false;
        }
    }

//    ui.context.querySelector("div.changeDirection").onclick = function (e) {
//        ui.changeDirection();
//        return false;
//    };

    var spans = ui.context.querySelectorAll( ".tools > span" );
    for ( var i = 0; i < spans.length; i++ ) {
        spans[i].onclick = function ( e ) {
            ui.manageText( this );
            return false;
        }
    }

    var buttons = ui.context.querySelectorAll( "form button" );
    for ( var i = 0; i < buttons.length; i++ ) {
         buttons[i].onclick = function ( e ) {
             ui.formControl( this );
             return false;
         }
    }

}

window.onload = init;

//// Load native UI library
//var gui = require( 'nw.gui' );
//// We can not create a clipboard, we have to receive the system clipboard
//var clipboard = gui.Clipboard.get();
//var win = gui.Window.get();
//
//// Listen to the minimize event
//win.on( 'loaded', function() {
//    gui.Window.get().show();
//});

function w ( a,b,c,d ) {
     console.log( a,b,c,d );
}