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


* * *

## Class: YouTubeLibrary
Nils little youtube library

### YouTubeLibrary.getVideoInformation(videoId, Callback) 

Nils little youtube library

**Parameters**

**videoId**: `string | array`, Nils little youtube library

**Callback**: `function`, Nils little youtube library

**Returns**: `Promise.&lt;(Array|Object)&gt;`

### YouTubeLibrary.searchOnYouTube(SearchText, type, Order, maxResults, pages, nextPageToken) 

Search on youtube

**Parameters**

**SearchText**: `string`, Search on youtube

**type**: `string`, Search on youtube

**Order**: `string`, Search on youtube

**maxResults**: `int`, Max result per page

**pages**: `int`, how many pages to query

**nextPageToken**: `string`, Search on youtube

**Returns**: `Promise.&lt;searchListResponse&gt;`

### YouTubeLibrary.getPlaylistInformation(playlistId, Callback) 

GET the playlist Information`s without the videos

**Parameters**

**playlistId**: `string`, GET the playlist Information`s without the videos

**Callback**: `function`, GET the playlist Information`s without the videos

**Returns**: `Promise.&lt;PlaylistInformation&gt;`

### YouTubeLibrary.getPlaylist(playlistId, Callback) 

Nils little youtube library

**Parameters**

**playlistId**: `string`, Nils little youtube library

**Callback**: `function`, Nils little youtube library

**Returns**: `Promise`

### YouTubeLibrary.getPlaylistVideos(playlistId, Callback) 

Nils little youtube library

**Parameters**

**playlistId**: `string`, Nils little youtube library

**Callback**: `function`, Nils little youtube library

**Returns**: `Promise.&lt;Array&gt;`

### YouTubeLibrary.getChannelID(forUsername, Callback) 

Nils little youtube library

**Parameters**

**forUsername**: `string`, Nils little youtube library

**Callback**: `function`, Nils little youtube library

**Returns**: `Promise.&lt;String&gt;`

### YouTubeLibrary.getChannelPlaylists(channelId, Callback) 

Nils little youtube library

**Parameters**

**channelId**: `string`, Nils little youtube library

**Callback**: `function`, Nils little youtube library

**Returns**: `Promise.&lt;Array.&lt;PlayListWithVideos&gt;&gt;`

### YouTubeLibrary.getChannelPlaylistsByUsername(Username, Callback) 

Nils little youtube library

**Parameters**

**Username**: `string`, Nils little youtube library

**Callback**: `function`, Nils little youtube library

**Returns**: `Promise.&lt;Array.&lt;PlayListWithVideos&gt;&gt;`

### YouTubeLibrary.getChannel(channelID, Callback) 

Nils little youtube library

**Parameters**

**channelID**: `string`, Nils little youtube library

**Callback**: `function`, Nils little youtube library

**Returns**: `Promise.&lt;Object&gt;`

### YouTubeLibrary.getChannelByUsername(Username, Callback) 

Nils little youtube library

**Parameters**

**Username**: , Nils little youtube library

**Callback**: `function`, Nils little youtube library

**Returns**: `Promise.&lt;Object&gt;`

### YouTubeLibrary.getAPIURL(kind, querys) 

Nils little youtube library

**Parameters**

**kind**: `string`, For which purpose

**querys**: `object | string`, Query strings to append




* * *