var YTLib = require('./YouTubeLibrary')

var yt = new YTLib("...");
yt.getI18nLanguages('es_MX').then(data => {
    console.log(data)
}).catch(err =>{
	console.error(err)
});
