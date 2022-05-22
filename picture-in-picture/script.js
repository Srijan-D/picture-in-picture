const videoElement = document.getElementById("video");
const button = document.getElementById("button");

// select media stream pass it to    video element then play it
async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia(); //captures live display of the user
    videoElement.srcObject = mediaStream; // passing the selected media stream to be played in our video object
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    }; //something which si true when loaded only
  } catch (error) {
    console.log(error);
  }
}
button.addEventListener("click", async () => {
  //disabling the button
  button.disabled = true;
  await videoElement.requestPictureInPicture();
  //reset the button
  button.disabled = false;
});

selectMediaStream();
