util = {

    currentAllow : "crypto",
    encryption_key : '0123456789abcd0123456789',
    iv : '12345678',

    changeDirection : function () {
        util.currentAllow = ( util.currentAllow == "crypto" ) ?  "text" : "crypto";
    },

    copyToClipBoard : function ( msg ) {
        clipboard.set( msg, 'text' );
    },

    getFromClipBoard : function () {
        var text = clipboard.get( 'text' );
        ui.context.querySelector( "#left" ).value = text;
    },

    saveToStorage : function ( obj ) {
        window.sessionStorage.setItem( "keys", JSON.stringify( obj, null ) );
    },

    chiper : function ( txt ) {

        var cipher = require( "crypto" ).createCipher( 'des-ede3-cbc', util.encryption_key );
        var ciph = cipher.update( txt, 'utf8', 'hex' );
        ciph += cipher.final( 'hex' );
        ui.context.querySelector( "#right" ).value = ciph;

    },

    dechiper : function ( ciph ) {

        var decipher = require( "crypto" ).createDecipher( 'des-ede3-cbc', util.encryption_key );
        var txt = decipher.update( ciph, 'hex', 'utf8' );
        txt += decipher.final( 'utf8' );
        ui.context.querySelector( "#right" ).value = txt;

    },

    transform : function () {

        var val = ui.context.querySelector( "#left" ).value;

        if ( util.currentAllow == "crypto" ) {

            util.chiper( val )

        } else {

            util.dechiper( val );

        }

    }

};