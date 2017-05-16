npm i

If you change anything in the main.js file then you need to run browserify main.js -o js/browsey.js -d .

This compiles the file so you can use require on the front-end with browserify.

This will take a look at the image with an ID of imagez from the index.html and
change the h1 tag with an ID of pleaseWork2 to the text from the image.  It uses
tesseract to identify letters in an image and can return the text from the image.
You can add an image to the photos folder and change the image in the index.html

After all that start tesseract.js and go to localhost:1444
