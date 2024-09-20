
const lightModeBtn = document.getElementById("light-mode-btn");
const darkModeBtn = document.getElementById("dark-mode-btn");

lightModeBtn.addEventListener("click", ()=>{
    const body = document.querySelector("body")
    body.classList.remove("dark-mode");
    body.classList.add("light-mode");
    lightModeBtn.classList.remove("btn-secondary")
    lightModeBtn.classList.add("btn-primary")
    lightModeBtn.disabled=true;
    darkModeBtn.classList.remove("btn-primary")
    darkModeBtn.classList.add("btn-secondary")
    darkModeBtn.disabled=false;
})

darkModeBtn.addEventListener("click", ()=>{
    const body = document.querySelector("body");
    body.classList.remove("light-mode");
    body.classList.add("dark-mode");
    lightModeBtn.classList.remove("btn-primary");
    lightModeBtn.classList.add("btn-secondary");
    lightModeBtn.disabled=false;
    darkModeBtn.classList.remove("btn-secondary");
    darkModeBtn.classList.add("btn-primary");
    darkModeBtn.disabled=true;
})

function getTwelveHour(hour){
    const twentyFourHour = Number.parseInt(hour);
    if(twentyFourHour>12)
        return twentyFourHour-12;
    else
        return twentyFourHour;        
}

setInterval(()=>{
    const date = new Date();
    const currentTime=date;
    const timeSpan=document.getElementById("time-span");
    timeSpan.innerText=`${getTwelveHour(date.getHours())}:${date.getMinutes()}:${date.getSeconds()}${Number.parseInt(date.getHours())<12? " AM":" PM"}`;
}, 1000)