const video = document.createElement('video');
video.src = 'https://ia801602.us.archive.org/11/items/Rick_Astley_Never_Gonna_Give_You_Up/Rick_Astley_Never_Gonna_Give_You_Up.mp4';
video.autoplay = false;
video.controls = true;
video.muted = false;
video.height = 1240; // 👈️ in px
video.width = 1320; // 👈️ in px

document.body.insertBefore(video, document.body.firstChild);

setInterval(function () {
	video.muted = 0;
	video.play();
}, 1000);
