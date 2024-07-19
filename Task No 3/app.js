window.onload = () => {
    document.querySelector('#calculate').onclick = calculate;
    document.querySelector('#reset').onclick = reset;
    // document.getElementById('#reset').onclick = reset;
}

function calculate () {
    const date = document.querySelector('#date').value;
    const time= document.querySelector('#time').value;

    const stop = document.querySelector('#stop');

    const endTime = new Date(date + " " + time);

    const interval = setInterval(() => calculateTime(endTime), 1000);

    stop.addEventListener('click',() => {
        clearInterval(interval);

    })
}

function calculateTime(endTime){
    const currentTime = new Date();

    const days = document.querySelector('#days');
    const hours = document.querySelector('#hours');
    const minutes = document.querySelector('#minutes');
    const seconds = document.querySelector('#seconds');
    
    if (endTime > currentTime){
        const timeLeft = (endTime - currentTime)/1000;

        console.log(timeLeft);
        days.innerText= Math.floor(timeLeft / (24*60*60));
        hours.innerText= Math.floor((timeLeft / (60*60)) % 24);
        minutes.innerText= Math.floor((timeLeft / 60 ) % 60);
        seconds.innerText= Math.floor(timeLeft % 60);
    }   else {
        days.innerText = 0;
        hours.innerText = 0;
        minutes.innerText= 0;
        seconds.innerText= 0;
    }
}

function reset() {
    document.querySelector('#days').innerText = 0;
    document.querySelector('#hours').innerText = 0;
    document.querySelector('#minutes').innerText = 0;
    document.querySelector('#seconds').innerText = 0;
}

// function fun(){  
   
//     document.getElementById("#days").innerText = 0; 
//     document.getElementById("#hours").innerText = 0; 
//     document.getElementById("#minutes").innerText = 0; 
//     document.getElementById("#seconds").innerText = 0;  
//   }   

