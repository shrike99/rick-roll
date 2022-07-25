const video = document.createElement('video');
Object.defineProperty(HTMLMediaElement.prototype, 'playing', {
	get: function () {
		return !!(this.currentTime > 0 && !this.paused && !this.ended && this.readyState > 2);
	},
});
var first = true;
video.src = 'https://ia801602.us.archive.org/11/items/Rick_Astley_Never_Gonna_Give_You_Up/Rick_Astley_Never_Gonna_Give_You_Up.mp4';
video.autoplay = false;
video.controls = true;
video.muted = false;
video.height = 1240; // 👈️ in px
video.width = 1320; // 👈️ in px

document.body.insertBefore(video, document.body.firstChild);

setInterval(function () {
	if (first && !document.querySelector('video').playing) {
		video.play();
		first = false;
	}
}, 1000);
