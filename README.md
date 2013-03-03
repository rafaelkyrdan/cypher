#Cypher - desktop application for protect your online messaging.

##English

*About Application*

Cypher - an easy to use application for protection of private
online messaging (skype, google talk, etc) using Diffie–Hellman
key exchange algorithm. The problem of protecting private data is now more than ever.
The application based on [node-webkit](https://github.com/rogerwang/node-webkit) platform.
There are many ways to encrypt a message, but the problem is
that the key to encrypt the need to tell your partner.
You can not send key on internet, for example,
your Internet service provider has access to everything that you send and receive.
Cypher uses modern mechanism for encrypt data and does not send secret key.
Simple and clear description of how the algorithm allows the two sides
to get secret key using a unsafe channel.
[http://www.youtube.com/watch?v=3QnD2c4Xovk](http://www.youtube.com/watch?v=3QnD2c4Xovk)

*Why cypher?*

It is free. Cypher does not transmit the secret key. Cypher not use Internet connection.
Cypher does not store the keys, when you turn off application, keys are removed. For each session
uses new keys.

*How to install?*

**Windows**

You can [download](https://www.dropbox.com/s/2ockj4tkcro8emg/cypher-win-0.2.zip) application.

1. Unzip the archive.
2. The directory consist of application and required files.
3. Run the file cypher.

**or** create application from source (for advanced users). You should download
project node-webkit https://github.com/rogerwang/node-webkit .
There are some commands for console.

1. Go to your project directory  cd ~/Projects/my_app
2. Create a zip file (this is built into XP, Vista and 7)
3. Copy all of your files into the zip file, retaining directory
structure and making sure that the package.json file is in the root directory
(if you make a zip file containing a folder with your stuff in it, then it's not going to work)
4. Rename the file extension from .zip to .nw. By default, file extensions may be hidden.
You need to (press alt), go to folder options and uncheck "Hide extensions for known file types" to be able to rename the zip.
5. On Windows, the easiest way to run the app is to drag the folder onto nw.exe.

Making an executable file out of a .nw file

1. copy /b nw.exe+app.nw app.exe

Then, all you have to do is zip app.exe and required DLLs, and distribute them.
And please also note that the nw.pak must also be distributed along with the app.exe.

**Linux**

You can [download](https://www.dropbox.com/s/xgktm8g6rmg4hkg/cypher-linux-0.2.zip) application.

1. Unzip the application.
2. Run the file cypher. Do not delete file nw.pak , it is part of application.

**or** create application from source (for advanced users). You should download
project node-webkit https://github.com/rogerwang/node-webkit .
There are some commands for console.

1. Go to your project directory a la cd ~/Projects/my_app
2. Run zip -r ../${PWD##*/}.nw *
3. Your fully-prepared .nw file shall be located right outside of your project directory
4. Move it to directory of node-webkit project.
5. Run ./nw app.nw

Making an executable file out of a .nw file

1. cat /usr/bin/nw app.nw > app && chmod +x app

*How to create secret key?*

Go to the tab "secret key". You should follow the instructions step by step. Important:
after the generation public key you should  send it to your partner. The third step:
you should get the public key your partner. After creating a secret key you can
begin to encrypt. Simple and clear description of how
the algorithm allows the two sides to get secret key using a unsafe channel.
[http://www.youtube.com/watch?v=3QnD2c4Xovk](http://www.youtube.com/watch?v=3QnD2c4Xovk)


*How to create crypto-text?*

Make sure you and your partner have a shared secret key. Go to the tab "cypher".
Insert a text to the left text box and click "encrypt".
For copy to clipboard click to the button "copy to clipboard". And send it to your partner.

*How to decrypt text?*

Go to the tab "cypher". If it is necessary to change the direction
of the encryption/decryption. Insert the encrypted text
to the left text box and click "decrypt". In the right box should appear text.
If  it is not readable, then you and your partner used a different secret keys.

*Licence*

Read the text of licence.

*Credits*

This application includes the following libs:

- [RSA and ECC](http://www-cs-students.stanford.edu/~tjw/jsbn/) in JavaScript toolset, (c) 2005 by Tom Wu, released under a [BSD license](http://www-cs-students.stanford.edu/~tjw/jsbn/LICENSE)
- [BootMetro](http://aozora.github.com/bootmetro/) Metro style web framework.

*Donate*

[Donate this project](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=MSGTAVUXX9A8Y)






