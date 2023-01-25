
const progressBar = document.querySelector('.progress-bar');



function start(){
    window.navigator.vibrate(70);
    progressBar.setAttribute('id','play-animation');
    let counter = 0;
    function vibration () {
        counter++;
        if (counter == 5) {
            window.navigator.vibrate(180);
            counter = 0;
        } else {
            window.navigator.vibrate(70);
        }
    }
    setInterval(vibration, 1000)
}