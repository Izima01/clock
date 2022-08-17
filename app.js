const clock = document.querySelector(".clock");
const hourHand = document.querySelector(".hour");
const minuteHand = document.querySelector(".minutes");
const secondHand = document.querySelector(".seconds");

const second = document.querySelector(".ss");
const minute = document.querySelector(".mm");
const hour = document.querySelector(".hh");
const AMPM = document.querySelector(".AMPM");

setInterval(()=> {
    const now = new Date();

    const h = now.getHours();
    const m = now.getMinutes();
    const s = now.getSeconds();
    // console.log(h, m, s);

    secondHand.style.transform = `rotate(${s*6}deg)`
    minuteHand.style.transform = `rotate(${m*6 + s/10}deg)`
    hourHand.style.transform = `rotate(${h*30 + m/2}deg)`

    // h < 12 ? 


    second.innerHTML = (s < 10) ? "0" + s : s;
    minute.innerHTML = (m < 10) ? "0" + m : m;
    hour.innerHTML = (h < 10) ? "0" + h : (h>12) ? h-12 : h;
    AMPM.innerHTML = h > 12 ? "PM" : "AM"
}, 100);