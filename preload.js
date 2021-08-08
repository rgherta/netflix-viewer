// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.


window.addEventListener('blur', async () => {
    let element = document.querySelector('video')
    console.log('blur')
    if (element && document.pictureInPictureEnabled )  await element.requestPictureInPicture()
}, false);
        
        
window.addEventListener('focus', () => {
    console.log('focus')
    if (document.pictureInPictureElement )  document.exitPictureInPicture()
}, false);


