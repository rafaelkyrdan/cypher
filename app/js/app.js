
app = {

    currentDirection : "encrypt",
    q : "",
    b : "",
    gx : "",
    gy : "",
    n : "",
    rng : "",
    privateKey : '',
    publicKey : '',
    partnerKey : '',
    encryptionKey : '',

    checkKey : function () {

        if ( appUI.currentPage == "cypher" && app.encryptionKey == "" ) {

            appUI.showAlert( "First, you need to create a secret key." );

            setTimeout( function () {
                appUI.clearMessage();
            }, 3000);


        } else if ( appUI.currentPage == "settings" && app.encryptionKey != "" ) {

            appUI.showAlert( "You have secret key. Do you want change it?" );

            setTimeout( function () {
                appUI.clearMessage();
            }, 3000);


        }
    },

    changeDirection : function () {

        app.currentDirection = ( app.currentDirection == "encrypt" ) ?  "decrypt" : "encrypt";

    },

    getText : function () {

        appUI.context.querySelector( "#left" ).value = app.trim( app.getFromClipBoard() );

    },

    copyToClipBoard : function ( msg ) {

        clipboard.set( msg, 'text' );

    },

    getFromClipBoard : function () {

        return clipboard.get( 'text' );

    },

    trim  : function( str ){
        return str.replace(/^\s*|\s*$/g,"");
    },


    transform : function () {

        var val = appUI.context.querySelector( "#left" ).value;

        if (!val) {
             return false;
        }

        if ( app.currentDirection == "ecrypt" ) {

            app.cipher( val )

        } else {

            app.decipher( val );

        }

    },

    cipher : function ( txt ) {

        var cipher = require( "crypto" ).createCipher( 'des-ede3-cbc', app.encryptionKey );
        var ciph = cipher.update( txt, 'utf8', 'hex' );
        ciph += cipher.final( 'hex' );
        appUI.context.querySelector( "#right" ).value = ciph;

    },

    decipher : function ( ciph ) {

        var decipher = require( "crypto" ).createDecipher( 'des-ede3-cbc', app.encryptionKey );
        var txt = decipher.update( ciph, 'hex', 'utf8' );
        txt += decipher.final( 'utf8' );
        appUI.context.querySelector( "#right" ).value = txt;

    },

    formControl : function ( obj ) {

        switch ( obj.dataset.action ) {
            case "doRand":
                app.doRand();
                break;
            case "doPublicKey":
                app.doPublicKey();
                break;
            case "copyKey":
                app.copyKey();
                break;
            case "getKey":
                app.getKey();
                break;
            case "doSecretKey":
                app.doSecretKey();
                break;
        }
    },

    doInit : function () {

        app.set_ec_params( "secp160r1" );
        app.rng = new SecureRandom();

    },

    doRand : function() {

        app.doInit();

        var r = app.pickRand();
        app.privateKey = r.toString();
        appUI.context.querySelector( "input[name='privateKey']" ).value = r.toString();

    },


    doPublicKey : function () {

        if ( app.privateKey == "" ) {

            appUI.showAlert( "Please generate private value first" );
            return;

        }

        var curve = app.getCurve();
        var G = app.getG( curve );
        var a = new BigInteger( app.privateKey );
        var P = G.multiply( a );

        var value = P.getX().toBigInteger().toString() + ":" + P.getY().toBigInteger().toString();
        app.publicKey = value;
        appUI.context.querySelector( "input[name='publicKey']" ).value =  value;

    },

    copyKey : function () {

        app.copyToClipBoard( app.publicKey );

    },

    getKey : function () {

        app.partnerKey = app.trim( app.getFromClipBoard() );
        appUI.context.querySelector( "input[name='partnerKey']" ).value = app.partnerKey;

    },

    doSecretKey : function() {

        if( app.privateKey == "" ) {

            appUI.showAlert( "Please generate private value first" );
            return;

        }

        if( app.partnerKey == "" ) {

            appUI.showAlert( "Please get partner's public value first" );
            return;

        }

        var curve = app.getCurve();
        var partnerKey = app.partnerKey.split(":");
        var P = new ECPointFp(curve,
                        curve.fromBigInteger(new BigInteger( partnerKey[0] )),
                        curve.fromBigInteger(new BigInteger( partnerKey[1] )));
        var a = new BigInteger( app.privateKey );
        var S = P.multiply(a);

        var value = S.getX().toBigInteger().toString() + ':' + S.getY().toBigInteger().toString();
        app.encryptionKey = value;
        appUI.context.querySelector( "input[name='secretKey']" ).value = value;

        appUI.showSuccessMessage( "Уou are created secure key, now you can encrypt your message." );

        setTimeout( function () {
            appUI.clearMessage();
        }, 3000);

    },

    set_ec_params : function ( name ) {

        var c = getSECCurveByName( name );

        app.q = c.getCurve().getQ().toString();
        app.a = c.getCurve().getA().toBigInteger().toString();
        app.b = c.getCurve().getB().toBigInteger().toString();
        app.gx = c.getG().getX().toBigInteger().toString();
        app.gy = c.getG().getY().toBigInteger().toString();
        app.n = c.getN().toString();

    },



    pickRand : function () {

        var n0 = new BigInteger( app.n );
        var n1 = n0.subtract( BigInteger.ONE );
        var r = new BigInteger( n0.bitLength(), app.rng );

        return r.mod(n1).add( BigInteger.ONE );

    },

    getCurve : function () {

        return new ECCurveFp(new BigInteger( app.q ),
                             new BigInteger( app.a ),
                             new BigInteger( app.b ));

    },

    getG : function (curve) {
        return new ECPointFp(curve,
                             curve.fromBigInteger(new BigInteger( app.gx )),
                             curve.fromBigInteger(new BigInteger( app.gy )));
    }

};