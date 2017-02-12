# Nils little youtube library
### For nodejs and every happy browser

The only thing you need is a google api key :) (https://console.developers.google.com/) which is enabled for the YouTube Data API

# FAQ
### How can I install it ?
For the browser you should use bower (https://bower.io):  
`bower install little-ytlib --save`  
In NodeJS yarn (https://yarnpkg.com/lang/en/) or npm (... https://nodejs.org/en/):  
Yarn: `yarn add little-ytlib`  
NPM: `npm install little-ytlib --save`

### How can I use it now ?  
If you want to use it in your browser, you need to include the bundle.min.js  
```html
<script src="bower_components/little-ytlib/bundle.min.js"></script>
<script>
  var yt = new YTLib("MY_API_KEY");
  // Now you can use it
</script>
```
If you want to use it with NodeJS, simply require it:  
```javascript
const YTLib = require('little-ytlib');
const yt = new YTLib("MY_API_KEY");
// Now you can use it
```

### How do I known which methods I can use ?
I think I doucmented the library very good with JSDoc. You can simply look in the source file on this repository (https://raw.githubusercontent.com/TheNoim/YouTubeLibrary/master/YouTubeLibrary.js)
