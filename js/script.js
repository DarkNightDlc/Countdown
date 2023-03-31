const daysEl = document.querySelector('#days');
const hoursEl = document.querySelector('#hours');
const minutesEl = document.querySelector('#minutes');
const secondsEl = document.querySelector('#seconds');

const launchDate = new Date("May 09, 2023 12:00:00");

function countdown(){
    const now = new Date();
    const diff = launchDate.getTime() - now.getTime();

    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor(diff / (1000 * 60 * 60) % 24);
    const m = Math.floor(diff / 1000 / 60 % 60);
    const s = Math.floor(diff / 1000 % 60);

    if(diff <= 0){
        clearInterval(timerCountdown);
        document.querySelector(".countdwo_box_button").style.display = "none";
        document.querySelector(".countdwo_box_exit").style.display = "block";
    }
        daysEl.innerHTML = d;
        hoursEl.innerHTML = h < 10 ? '0' + h : h;
        minutesEl.innerHTML = m < 10 ? '0' + m : m;
        secondsEl.innerHTML = s < 10 ? '0' + s : s; 
    
}

const timerCountdown = setInterval(() => countdown(), 1000);

const modal = document.querySelector('.model_box');

document.querySelector(".countdwo_box_button").addEventListener('click', () => {
    modal.style.display = "flex";
    modal.style.opacity = 0;
    setTimeout(() => modal.style.opacity = 1, 150);
})

function closeModal() {
    modal.style.opacity = 0;
    modal.style.display = 'none';
}

document.querySelector(".model_box_exit").addEventListener("click", closeModal);
document.querySelector(".model_box_button").addEventListener("click", closeModal);