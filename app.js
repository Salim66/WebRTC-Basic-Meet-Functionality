const webCam = document.getElementById('main-video');
const cam = document.getElementById('cam');
const share = document.getElementById('desk-share');


const shareCam = ( video = false, audio = false ) => {

    navigator.mediaDevices.getUserMedia({ video: true, audio: false })
    .then( stream => {
        webCam.srcObject = stream;
        webCam.play();
    } )
    .catch( error => {

    } );

}

const screenShare = ( video = false, audio = false ) => {

    navigator.mediaDevices.getDisplayMedia({ video: true, audio: false })
    .then( stream => {
        webCam.srcObject = stream;
        webCam.play();
    } )
    .catch( error => {

    } );

}

let status = localStorage.getItem('status');
cam.onclick = (e) => {
    e.preventDefault();
    if(status){
        cam.classList.add('active');
        shareCam(true);
        localStorage.setItem('status', false);
    }else {
        cam.classList.remove('active');
        shareCam(false);
        localStorage.setItem('status', true);
    }
}
 
share.onclick = () => {
    share.classList.add('active');
    screenShare(true);
}