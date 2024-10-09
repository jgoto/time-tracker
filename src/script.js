const lightModeBtn = document.getElementById("light-mode-btn");
const darkModeBtn = document.getElementById("dark-mode-btn");
const trackBtn = document.getElementById("track-btn");
const taskInput = document.getElementById("task-input");
const exportBtn = document.getElementById("export-btn");

class TimeTracker{
    constructor(){
        this.trackingItem=false;
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
            this.updateTracker();
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

    trackItem(task){
        this.tasks.push(task);
        this.trackedIndex=task.id;
        console.log(this.tasks);
    }

    updateTracker(){
        this.tasks.forEach(task => {
            if(task.enabled){
                task.elapsedTime=Math.floor((this.currentTime-task.startTime)/1000);
                this.taskCounter.innerText=`${task.elapsedTime}`;
            }
        });
    }

    pauseTracking(){
        this.tasks.forEach(task =>{
            if(task.enabled){
                task.enabled = false;
                console.log(task)
            }
        })
        this.trackingItem=false;
    }

    exportTasks(){
        if(this.tasks.length>0){
            localStorage.setItem("tasks", JSON.stringify(this.tasks))
        }
        else{
            console.log("No tasks to save");
        }
    }
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
    if(!timeTracker.trackingItem && taskInput.value!=="")
    {
        trackBtn.classList.remove("btn-success");
        trackBtn.classList.add("btn-info");
        trackBtn.innerText="Stop";
        timeTracker.trackItem({
            id: "1",
            description: taskInput.value,
            startTime: timeTracker.currentTime,
            elapsedTime: 0,
            enabled: true
        });
        timeTracker.trackingItem=true;
    }
    else
    {
        trackBtn.classList.remove("btn-info");
        trackBtn.classList.add("btn-success");
        trackBtn.innerText="Track";
        trackingItem=false;
        taskInput.value="";
        timeTracker.pauseTracking();
    }
})

exportBtn.addEventListener("click", ()=>{
    timeTracker.exportTasks();
})