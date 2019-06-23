var YTLib = require('./YouTubeLibrary')

var yt = new YTLib("AIzaSyA1Sr6O7aFDEtLzcURqIcGG3-3VRQqXNGg");
yt.getI18nLanguages('es_MX').then(data => {
    console.log(data)
}).catch(err =>{
	console.error(err)
});