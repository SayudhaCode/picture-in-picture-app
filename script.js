const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// select media element, pass video element, play it!
async function selectMediaStream() {
	try {
		videoElement.srcObject = await navigator.mediaDevices.getUserMedia();
		videoElement.onloadedmetadata = () => {
			videoElement.play();
		};
	} catch (error) {
		console.log('ouch! this is an error:', error);
	}
}

button.addEventListener('click', async () => {
	// disabling button
	button.disabled = true;
	// start picture in picture
	await videoElement.requestPictureinPicture();
	//reset button
	button.disabled = false;
});

selectMediaStream();