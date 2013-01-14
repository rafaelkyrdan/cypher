#Cypher - desktop application for privacy of your correspondence.

##English

*About Application*

The problem of protecting private data is now more than ever.
There are many ways to encrypt a message, but the problem is, 
that the key to encrypt the need to tell your partner.
You can not send key on internet, for example,
your Internet service provider has access to everything that you send and receive.
Cypher uses modern mechanism for encrypt data and does not send secret key.
Simple and clear description of how the algorithm allows the two sides
to get secret key using a unsafe channel.
http://www.youtube.com/watch?v=3QnD2c4Xovk

*How to install?*

**Windows**

You can download application.

1. Unzip the archive.
2. Directory consist of application and required files.
3. Run the file cypher.

Versions:

[0.2](https://www.dropbox.com/s/2nwle4a9ap72vjt/cypher-0.2.zip)
[0.1](https://www.dropbox.com/s/vq7asd7nksf9h3j/cypher-0.1.zip)

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


**Mac**

coming soon

**Linux**

You can download application.

1. Unzip the application.
2. Run the file cypher. Do not delete file nw.pak , it is part of application.

Versions:

[0.2](https://www.dropbox.com/s/2nwle4a9ap72vjt/cypher-0.2.zip)
[0.1](https://www.dropbox.com/s/tjw2fh8l0jc03td/cypher-0.1.zip)

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


*Why cypher?*

Cypher does not transmit the secret key. Cypher not use Internet connection.
Cypher does not store the keys, when you turn off application, keys are removed. For each session
uses new keys.

*How to create secret key?*

Go to the tab "secret key". You should follow the instructions step by step. Important:
after the generation public key you should  send it to your partner. The third step:
you should get the public key your partner. After creating a secret key you can
begin to encrypt. Simple and clear description of how
the algorithm allows the two sides to get secret key using a unsafe channel.
http://www.youtube.com/watch?v=3QnD2c4Xovk


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

##Russian

*Про приложение*

Проблема защиты приватных данных стоит сейчас как никогда остро.
Существует множество способов зашифровать сообщение, но проблема в том,
что ключ для шифрования нужно сообщить вашему собеседнику. Допустим ваш канал прослушивают,
скажем, ваш интернет-провайдер имеет доступ ко всему, что вы отправляете и получаете.
Cypher использует современные механизмы для шифрования и не передает секретный ключ по открытым каналам.
Простое и наглядное описание того, как работает алгоритм позволяющий двум сторонам получить
секретный ключ используя прослушиваемый канал связи.
http://www.youtube.com/watch?feature=player_embedded&v=VBDJ0ERjnD4

*Как установить?*

**Windows**

Вы можете скачать готовое приложение.

1.Разархивируйте приложение.
2.Директория содержит приложение и все библиотеки от которых зависит работа приложения.
2.Запустите файл cypher.

Версии:

[0.1](https://www.dropbox.com/s/vq7asd7nksf9h3j/cypher-0.1.zip)


**или** собрать приложение из исходников (для продвинутых пользователей). Вам необходимо скачать
проэкт node-webkit https://github.com/rogerwang/node-webkit
и вот такие команды:

1. Перейдите в папку проэкта  ~/Projects/my_app
2. Создайте .zip архив
3. Поменяйте расширение с .zip на расширение .nw
4. Переместите его в папку где находится проэкт node-webkit
5. Самый простой способ запустить приложение, это перетащить app.nw на nw.exe.

Для создания исполняемого файла с .nw файла выполните

1. copy /b nw.exe+app.nw app.exe

Помните что приложение зависит от файла nw.pak и необходимых .dll файлов.


**Mac**

coming soon

**Linux**

Вы можете скачать готовое приложение.

1.Разархивируйте приложение.
2.Запустите файл cypher. Не удаляйте файл nw.pak он является частью приложения.

Версии:

[0.1](https://www.dropbox.com/s/tjw2fh8l0jc03td/cypher-0.1.zip)


**или** собрать приложение из исходников (для продвинутых пользователей). Вам необходимо скачать
проэкт node-webkit https://github.com/rogerwang/node-webkit
и вот такие команды:

1. Перейдите в папку проэкта a la cd ~/Projects/my_app
2. Выполните zip -r ../${PWD##*/}.nw *
3. Теперь во внешней директории у вас появился в файл с расширением.nw
4. Переместите его в папку где находится node-webkit
5. Выполните ./nw app.nw

Для создания исполняемого файла с .nw файла выполните

1. cat /usr/bin/nw app.nw > app && chmod +x app


*Почему Cypher?*

Cypher не передает секретный ключ, по этому усложняется возможность третей стороне получить
доступ к приватным данным. Cypher не использует интернет соединения для своей работы.
Cypher не хранит ключи, при выключении приложения ключи удаляются. Для каждого сеанса связи
используются новые ключи, да это не удобно но это безопасно.

*Как создать секретный ключ?*

Пройдите во вкладку "secret key". Вам необходимо проити все шаги инструкции по очереди. Для создания
ключа используйте кнопку "generate", для копирования данных используйте кнопку "copy to clipboard",
для вставки скопированных данных используйте кнопку "get from clipboard". На втором шаге после генерации
публичного ключа необходимо отправить его вашему партнеру. Третий шаг это получение публичного ключа вашего партнера.
После создания секретного ключа общего для вас и вашего партнера вы можете приступить к защите
своих данных. Простое и наглядное описание того, как работает алгоритм позволяющий двум сторонам получить
секретный ключ используя прослушиваемый канал связи.
http://www.youtube.com/watch?feature=player_embedded&v=VBDJ0ERjnD4

*Как зашифровать текст?*

Убедитесь что у вас и вашего партнера создан общий секретный ключ. Пройдите во вкладку "cypher".
Если необходимо измените направление шифрования/дешифрования. Вставьте в левое поле текст и
нажмите кнопку "encrypt". Спомощью кнопки "copy to clipboard" скопируйте зашифрованный текст.
И отправьте его вашему партнеру.

*Как разшифровать текст?*

Пройдите во вкладку "cypher".
Если не обходимо измените направление шифрования/дешифрования. Вставьте в левое поле зашифрованный
текст и нажмите кнопку "decrypt". В правом поле должен появиться тест. Если текст не
читабельный значит вы и ваш партнер используете разные секретные ключи.

*Лицензия.*

Читай текст лицензии.

