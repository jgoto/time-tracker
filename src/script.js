const date = new Date();
const currentTime=date;
const timeSpan=document.getElementById("time-span");
timeSpan.innerText=currentTime;
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