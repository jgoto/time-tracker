const lightModeBtn = document.getElementById("light-mode-btn");
const darkModeBtn = document.getElementById("dark-mode-btn");
const trackBtn = document.getElementById("track-btn");

class TimeTracker{
    constructor(){
        this.runTracker=false;
        this.tasks = [];
        this.taskCounter = document.getElementById("task-counter");
        this.timer=0;
        this.currentTime = new Date();
        this.startTracker();
    }

    startTracker(){
        setInterval(()=>{
            this.currentTime = new Date();
            this.displayTime(this.currentTime);
        }, 1000);
    }

    displayTime(date){
        const hours = Number.parseInt(date.getHours() % 12 || 12);
        const minutes = Number.parseInt(date.getMinutes());
        const seconds = Number.parseInt(date.getSeconds());
        const ampm = date.getHours()>12?"PM":"AM";
        const timeSpan=document.getElementById("time-span");
        timeSpan.innerText=`${hours}:${minutes}:${seconds} ${ampm}`
    }

    /*trackItem(task){
        this.runTracker=true;
        const startTime = new Date();
        setInterval(()=>{
            if(this.runTracker){
                const currentTime= new Date();
                this.timer=Math.floor((currentTime - startTime)/1000);
                console.log(this.timer);
                this.taskCounter.innerText=`${this.timer}-`;
            }
        },1000)
    }
    
    stopTracker(){
        this.runTracker=false;
    }*/
}

const timeTracker = new TimeTracker();

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

trackBtn.addEventListener("click", ()=>{
    if(!timeTracker.runTracker)
    {
        trackBtn.classList.remove("btn-success");
        trackBtn.classList.add("btn-danger");
        trackBtn.innerText="Stop";
        timeTracker.startTracker("Foo");
    }
    else
    {
        trackBtn.classList.remove("btn-danger");
        trackBtn.classList.add("btn-success");
        trackBtn.innerText="Track";
        timeTracker.stopTracker();
    }
})

