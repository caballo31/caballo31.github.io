
const progressBar = document.querySelector('.progress-bar');



function start(){
    progressBar.setAttribute('id','play-animation');
    let counter = 0;
    function vibration () {
        counter++;
        if (counter == 5) {
            navigator.vibrate(180);
            counter = 0;
        } else {
            navigator.vibrate(70);
        }
    }
    setInterval(vibration, 1000)
}