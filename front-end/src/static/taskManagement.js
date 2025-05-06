class TaskManegement{
    constructor(id, name, description, status){
        this.id = id;
        this.name = name;
        this.description = description;
        this.status = status;
    }


}


const addTask = document.getElementById("addTask");
const taskSlot  = document.getElementById("TaskInLine");

const taskBefore = document.getElementById("tasks_before");
const taskMeddle = document.getElementById("tasks_middle");
const taskEnded = document.getElementById("tasks_ended");
const tasks = document.getElementsByClassName("task-obj");


    for(tasked of tasks){
        tasked.addEventListener("dragstart", (e)=>{
            let selected = e.target

            taskBefore.addEventListener("dragover", (e)=>{
                e.preventDefault();
            })
            taskBefore.addEventListener("drop", (e)=>{
                taskBefore.appendChild(selected);
                selected = null;
            })

            ////////////////////////////////////////
            taskMeddle.addEventListener("dragover", (e)=>{
                e.preventDefault();
            })
            taskMeddle.addEventListener("drop", (e)=>{
                taskMeddle.appendChild(selected);
                selected = null;
            })

            /////////////////////////////////////////
            taskEnded.addEventListener("dragover", (e)=>{
                e.preventDefault();
            })
            taskEnded.addEventListener("drop", (e)=>{
                taskEnded.appendChild(selected);
                selected = null;
            })

        })
    }


