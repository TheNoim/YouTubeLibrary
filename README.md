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


# Documentation

## Classes

<dl>
<dt><a href="#YouTubeLibrary">YouTubeLibrary</a></dt>
<dd></dd>
</dl>

## Typedefs

<dl>
<dt><a href="#YouTubeVideoResource">YouTubeVideoResource</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#VideoSnippet">VideoSnippet</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#VideoStatistics">VideoStatistics</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#YouTubePageInfo">YouTubePageInfo</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#searchListResponse">searchListResponse</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#PlaylistInformation">PlaylistInformation</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#PlaylistSnippet">PlaylistSnippet</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#PlaylistContentDetails">PlaylistContentDetails</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#Video">Video</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#PlayListWithVideos">PlayListWithVideos</a> : <code>Object</code></dt>
<dd></dd>
</dl>

<a name="YouTubeLibrary"></a>

## YouTubeLibrary
**Kind**: global class  
**Author:** Nils Bergmann <nilsbergmann@noim.io>  

* [YouTubeLibrary](#YouTubeLibrary)
    * [new YouTubeLibrary(APIKey)](#new_YouTubeLibrary_new)
    * [.getVideoInformation(videoId, [Callback])](#YouTubeLibrary+getVideoInformation) ⇒ <code>Promise.&lt;(VideoSnippet\|Array.&lt;VideoSnippet&gt;)&gt;</code>
    * [.searchOnYouTube(SearchText, [type], [Order], [maxResults], [pages], [nextPageToken])](#YouTubeLibrary+searchOnYouTube) ⇒ <code>[Promise.&lt;searchListResponse&gt;](#searchListResponse)</code>
    * [.getPlaylistInformation(playlistId, [Callback])](#YouTubeLibrary+getPlaylistInformation) ⇒ <code>[Promise.&lt;PlaylistInformation&gt;](#PlaylistInformation)</code>
    * [.getPlaylist(playlistId, [Callback])](#YouTubeLibrary+getPlaylist) ⇒ <code>Promise</code>
    * [.getPlaylistVideos(playlistId, [Callback])](#YouTubeLibrary+getPlaylistVideos) ⇒ <code>Promise.&lt;Array&gt;</code>
    * [.getChannelID(forUsername, [Callback])](#YouTubeLibrary+getChannelID) ⇒ <code>Promise.&lt;String&gt;</code>
    * [.getChannelPlaylists(channelId, [Callback])](#YouTubeLibrary+getChannelPlaylists) ⇒ <code>Promise.&lt;Array.&lt;PlayListWithVideos&gt;&gt;</code>
    * [.getChannelPlaylistsByUsername(Username, [Callback])](#YouTubeLibrary+getChannelPlaylistsByUsername) ⇒ <code>Promise.&lt;Array.&lt;PlayListWithVideos&gt;&gt;</code>
    * [.getChannel(channelID, [Callback])](#YouTubeLibrary+getChannel) ⇒ <code>Promise.&lt;Object&gt;</code>
    * [.getChannelByUsername(Username, [Callback])](#YouTubeLibrary+getChannelByUsername) ⇒ <code>Promise.&lt;Object&gt;</code>

<a name="new_YouTubeLibrary_new"></a>

### new YouTubeLibrary(APIKey)
Nils little youtube library


| Param | Description |
| --- | --- |
| APIKey | API Key to access the youtube data api |

<a name="YouTubeLibrary+getVideoInformation"></a>

### youTubeLibrary.getVideoInformation(videoId, [Callback]) ⇒ <code>Promise.&lt;(VideoSnippet\|Array.&lt;VideoSnippet&gt;)&gt;</code>
Get the video information's of the videoId

**Kind**: instance method of <code>[YouTubeLibrary](#YouTubeLibrary)</code>  

| Param | Type |
| --- | --- |
| videoId | <code>string</code> &#124; <code>array</code> | 
| [Callback] | <code>function</code> | 

<a name="YouTubeLibrary+searchOnYouTube"></a>

### youTubeLibrary.searchOnYouTube(SearchText, [type], [Order], [maxResults], [pages], [nextPageToken]) ⇒ <code>[Promise.&lt;searchListResponse&gt;](#searchListResponse)</code>
Search on youtube with the given parameters

**Kind**: instance method of <code>[YouTubeLibrary](#YouTubeLibrary)</code>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| SearchText | <code>string</code> |  |  |
| [type] | <code>string</code> | <code>&quot;video,channel,playlist&quot;</code> |  |
| [Order] | <code>string</code> | <code>&quot;relevance&quot;</code> |  |
| [maxResults] | <code>int</code> | <code>20</code> | Max result per page |
| [pages] | <code>int</code> | <code>10</code> | how many pages to query |
| [nextPageToken] | <code>string</code> |  |  |

<a name="YouTubeLibrary+getPlaylistInformation"></a>

### youTubeLibrary.getPlaylistInformation(playlistId, [Callback]) ⇒ <code>[Promise.&lt;PlaylistInformation&gt;](#PlaylistInformation)</code>
Get all important information's of a playlist

**Kind**: instance method of <code>[YouTubeLibrary](#YouTubeLibrary)</code>  

| Param | Type |
| --- | --- |
| playlistId | <code>string</code> | 
| [Callback] | <code>function</code> | 

<a name="YouTubeLibrary+getPlaylist"></a>

### youTubeLibrary.getPlaylist(playlistId, [Callback]) ⇒ <code>Promise</code>
Get all information's of a playlist including the videos. The videos are resolved to youtube#video

**Kind**: instance method of <code>[YouTubeLibrary](#YouTubeLibrary)</code>  

| Param | Type |
| --- | --- |
| playlistId | <code>string</code> | 
| [Callback] | <code>function</code> | 

<a name="YouTubeLibrary+getPlaylistVideos"></a>

### youTubeLibrary.getPlaylistVideos(playlistId, [Callback]) ⇒ <code>Promise.&lt;Array&gt;</code>
Get only the resolved videos of a playlist. Videos are in the format youtube#video

**Kind**: instance method of <code>[YouTubeLibrary](#YouTubeLibrary)</code>  

| Param | Type |
| --- | --- |
| playlistId | <code>string</code> | 
| [Callback] | <code>function</code> | 

<a name="YouTubeLibrary+getChannelID"></a>

### youTubeLibrary.getChannelID(forUsername, [Callback]) ⇒ <code>Promise.&lt;String&gt;</code>
Get the channelId of an username

**Kind**: instance method of <code>[YouTubeLibrary](#YouTubeLibrary)</code>  

| Param | Type |
| --- | --- |
| forUsername | <code>string</code> | 
| [Callback] | <code>function</code> | 

<a name="YouTubeLibrary+getChannelPlaylists"></a>

### youTubeLibrary.getChannelPlaylists(channelId, [Callback]) ⇒ <code>Promise.&lt;Array.&lt;PlayListWithVideos&gt;&gt;</code>
Get all playlist's of a channel. The videos are in the format youtube#video

**Kind**: instance method of <code>[YouTubeLibrary](#YouTubeLibrary)</code>  

| Param | Type |
| --- | --- |
| channelId | <code>string</code> | 
| [Callback] | <code>function</code> | 

<a name="YouTubeLibrary+getChannelPlaylistsByUsername"></a>

### youTubeLibrary.getChannelPlaylistsByUsername(Username, [Callback]) ⇒ <code>Promise.&lt;Array.&lt;PlayListWithVideos&gt;&gt;</code>
Same as getChannelPlaylists() but you can use the channel username instead of the channel id

**Kind**: instance method of <code>[YouTubeLibrary](#YouTubeLibrary)</code>  

| Param | Type |
| --- | --- |
| Username | <code>string</code> | 
| [Callback] | <code>function</code> | 

<a name="YouTubeLibrary+getChannel"></a>

### youTubeLibrary.getChannel(channelID, [Callback]) ⇒ <code>Promise.&lt;Object&gt;</code>
Get channel information's

**Kind**: instance method of <code>[YouTubeLibrary](#YouTubeLibrary)</code>  

| Param | Type |
| --- | --- |
| channelID | <code>string</code> | 
| [Callback] | <code>function</code> | 

<a name="YouTubeLibrary+getChannelByUsername"></a>

### youTubeLibrary.getChannelByUsername(Username, [Callback]) ⇒ <code>Promise.&lt;Object&gt;</code>
Same as getChannel() but you can use the channel username instead of the channel id

**Kind**: instance method of <code>[YouTubeLibrary](#YouTubeLibrary)</code>  

| Param | Type |
| --- | --- |
| Username |  | 
| [Callback] | <code>function</code> | 

<a name="YouTubeVideoResource"></a>

## YouTubeVideoResource : <code>Object</code>
**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| kind | <code>string</code> | Type (youtube#video) |
| etag | <code>string</code> |  |
| id | <code>string</code> | VideoId |
| snippet | <code>[VideoSnippet](#VideoSnippet)</code> |  |
| statistics | <code>[VideoStatistics](#VideoStatistics)</code> |  |

<a name="VideoSnippet"></a>

## VideoSnippet : <code>Object</code>
**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| publishedAt | <code>string</code> | Date in ISO 8601 format |
| channelId | <code>string</code> |  |
| title | <code>string</code> | Video title |
| description | <code>string</code> |  |
| thumbnails | <code>Object</code> |  |
| channelTitle | <code>string</code> | The displayname of the channel which published the video |
| tags | <code>Array.&lt;string&gt;</code> | List of tags for the video |
| categoryId | <code>string</code> | https://developers.google.com/youtube/v3/docs/videoCategories/list |
| liveBroadcastContent | <code>string</code> |  |
| defaultLanguage | <code>string</code> |  |
| localized | <code>Object</code> |  |
| defaultAudioLanguage | <code>string</code> |  |

<a name="VideoStatistics"></a>

## VideoStatistics : <code>Object</code>
**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| viewCount | <code>int</code> |  |
| likeCount | <code>int</code> |  |
| dislikeCount | <code>int</code> |  |
| favoriteCount | <code>int</code> | This property has been deprecated. The deprecation is effective as of August 28, 2015. The property's value is now always set to 0. |
| commentCount | <code>int</code> |  |

<a name="YouTubePageInfo"></a>

## YouTubePageInfo : <code>Object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| totalResults | <code>int</code> | 
| resultsPerPage | <code>int</code> | 

<a name="searchListResponse"></a>

## searchListResponse : <code>Object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| kind | <code>string</code> | 
| etag | <code>string</code> | 
| nextPageToken | <code>string</code> | 
| regionCode | <code>string</code> | 
| pageInfo | <code>[YouTubePageInfo](#YouTubePageInfo)</code> | 
| items | <code>Array</code> | 

<a name="PlaylistInformation"></a>

## PlaylistInformation : <code>Object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| kind | <code>string</code> | 
| etag | <code>string</code> | 
| id | <code>id</code> | 
| snippet | <code>[PlaylistSnippet](#PlaylistSnippet)</code> | 
| contentDetails | <code>[PlaylistContentDetails](#PlaylistContentDetails)</code> | 

<a name="PlaylistSnippet"></a>

## PlaylistSnippet : <code>Object</code>
**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| publishedAt | <code>string</code> | Date in ISO 8601 format |
| channelId | <code>string</code> |  |
| title | <code>string</code> |  |
| description | <code>string</code> |  |
| thumbnails | <code>Object</code> |  |
| channelTitle | <code>string</code> | The displayname of the channel which published the playlist |
| tags | <code>Array.&lt;string&gt;</code> | List of tags for the playlist |
| defaultLanguage | <code>string</code> |  |
| localized | <code>Object</code> |  |

<a name="PlaylistContentDetails"></a>

## PlaylistContentDetails : <code>Object</code>
**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| itemCount | <code>int</code> | The count how much items the playlist contains |

<a name="Video"></a>

## Video : <code>Object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| kind | <code>string</code> | 
| etag | <code>string</code> | 
| id | <code>string</code> | 
| snippet | <code>Object</code> | 
| contentDetails | <code>Object</code> | 
| statistics | <code>Object</code> | 

<a name="PlayListWithVideos"></a>

## PlayListWithVideos : <code>Object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| kind | <code>string</code> | 
| etag | <code>string</code> | 
| id | <code>string</code> | 
| snippet | <code>Object</code> | 
| contentDetails | <code>Object</code> | 
| videos | <code>[Array.&lt;Video&gt;](#Video)</code> | 

