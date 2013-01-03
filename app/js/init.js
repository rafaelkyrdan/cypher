
function init () {

    ui.context = document.querySelector( '#content' );
    ui.footer = document.querySelector( 'footer' );

    var tiles = ui.context.querySelectorAll( "a.tile" );
    for ( var i = 0; i < tiles.length; i++ ) {
        tiles[i].onclick = function ( e ) {
            ui.control( this );
            return false;
        }
    }

    var commandButton = ui.footer.querySelectorAll( "button" );
    for ( var i = 0; i < commandButton.length; i++ ) {
        commandButton[i].onclick = function ( e ) {
            ui.control( this );
            return false;
        }
    }

    ui.context.querySelector("div.changeDirection").onclick = function (e) {
        ui.changeDirection();
        return false;
    };

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

var a = '7f1cc7d7a5f1a66f3b6ee61eea3d8996';
var b = "Man oh man do I love node!";

w(require("crypto")
    .createHash("md5")
    .update("Man oh man do I love node!")
    .digest("hex"));

var hash = require("crypto").createHash("sha1");


w(require("crypto").createHmac("md5", "password")
    .update("If you love node so much why don't you marry it?")
    .digest("hex"));


var crypto = require("crypto");
var plaintext = "She sells sea shells by the sea shore.";

// Test encyrption and decryption with explicit key and iv
var encryption_key = '0123456789abcd0123456789';
var iv = '12345678';

//var cipher = crypto.createCipheriv('des-ede3-cbc', encryption_key, iv);
var cipher = require("crypto").createCipheriv('des-ede3-cbc', encryption_key, iv);
var ciph = cipher.update(plaintext, 'utf8', 'hex');
ciph += cipher.final('hex');

console.log("Your secret phrase is: " + ciph);

//var decipher = crypto.createDecipheriv('des-ede3-cbc', encryption_key, iv);
var decipher = require("crypto").createDecipheriv('des-ede3-cbc', encryption_key, iv);
var txt = decipher.update(ciph, 'hex', 'utf8');
txt += decipher.final('utf8');

console.log("Your original phrase is: " + txt);