$(document).ready(function() {
    const videoElement = document.getElementById('video-element');

    $('#start-button').click(function() {
        navigator.mediaDevices.getUserMedia({ video: true, audio: true })
            .then(stream => {
                videoElement.srcObject = stream;
                videoElement.play();
                $('#start-button').addClass('hidden');
                $('#video-container').removeClass('hidden');
            })
            .catch(error => {
                console.error('Error accessing media devices:', error);
                alert('Error accessing camera and microphone. Please check your permissions.');
            });
    });
});
