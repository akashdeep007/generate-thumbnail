const ffmpeg = require("ffmpeg")

try{
	var process = new ffmpeg("./sample.mp4")
	process.then((video) => {
		console.log(video)
		video.fnExtractFrameToJPG("./", {
			number: 1
		}, (err, files) => {
			console.log(files)
			console.log(err)
		})
	})
}catch(err){
	console.log(err)
}
