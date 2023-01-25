
const progressBar = document.querySelector('.progress-bar');

let codeStopped = true;

function start(){
    if (codeStopped == true){
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
        codeStopped = false;
    } else if (codeStopped == false) {
        progressBar.setAttribute('id', '');
        clearInterval();
        codeStopped = true;
    }
}