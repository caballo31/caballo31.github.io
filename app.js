
const progressBar = document.querySelector('.progress-bar');
const title = document.querySelector('.title');
const pulse = document.querySelector('.pulse');

let codeStopped = true;

function start(){
    if (codeStopped == true){
        progressBar.setAttribute('id','play-animation');
        pulse.setAttribute('id','play-pulse')
        let counter = 0;
        function vibration () {
            counter++;
            if (counter == 5) {
                window.navigator.vibrate(180);
                counter = 0;
                if (title.innerText == 'Inhalar'){
                    title.innerText = 'Exhalar';
                } else if (title.innerText == 'Exhalar'){
                    title.innerHTML = 'Inhalar';
                }
               
            } else {
                window.navigator.vibrate(70);
            }
        }
        intervalId = setInterval(vibration, 1000)
        codeStopped = false;
    } else if (codeStopped == false) {
        codeStopped = true;
        clearInterval(intervalId);
        progressBar.setAttribute('id', '');
        pulse.setAttribute('id','')

        title.innerHTML = 'Inhalar';
    }
}