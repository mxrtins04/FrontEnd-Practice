
let searchTask = document.getElementById("search-task")
console.log(searchTask);
let title = document.getElementsByClassName("title")
console.log(title);
let list = document.getElementsByTagName("li")
console.log(list);
let searchTask2 = document.querySelector("#search-task")
console.log(searchTask2)

let alltasks = []

const taskList = document.querySelector(".Task-list")
console.log(taskList)

taskList.addEventListener("click",(e)=>{
    console.log(e);
    if(e.target.textContent==="delete"){
        const li = e.target.parentElement
        const taskText = li.querySelector(".name").textContent
        alltasks = alltasks.filter(task => task !== taskText)
        saveTasks()
        console.log(li);
        li.remove()
    }
})

const addTaskForm = document.getElementById("add-task")
console.log(addTaskForm);
addTaskForm.addEventListener("submit",(e)=>{
    console.log(e);
    e.preventDefault();
    const value = addTaskForm.querySelector("input").value.trim()
    console.log(value);
    if(value){
        alltasks.push(value);   
       let {newli,checkbox,firstSpanTag,secondSpanTag}= createNewElement()
       addCreatedElements(newli,checkbox,firstSpanTag,secondSpanTag)
       inputvalues(firstSpanTag,secondSpanTag,value)
       styleNewElement(checkbox,firstSpanTag,secondSpanTag)
       taskList.querySelector("ul").appendChild(newli)
       addTaskForm.querySelector("input").value = ""
       saveTasks()
    }
    else{
        alert("Please enter a task!")
    }
})

const search = document.getElementById("search-task")
console.log(search)
search.addEventListener("keyup",(e)=>{
    e.preventDefault()
    const taskItems = Array.from(taskList.querySelectorAll("li"))
    const inputValue = search.querySelector("input").value.trim().toLowerCase()
    taskItems.forEach((li) => {
        let queriedLi = li.querySelector(".name").textContent.toLowerCase()
        if(queriedLi.includes(inputValue)){
            li.style.display = "";
        } else {
            li.style.display = "none";
        }
    });
})

function loadTasks(){
    const savedTasks = localStorage.getItem('tasks')
    if(savedTasks){
        alltasks = JSON.parse(savedTasks)
        alltasks.forEach(task => {
            let {newli,checkbox,firstSpanTag,secondSpanTag}= createNewElement()
            addCreatedElements(newli,checkbox,firstSpanTag,secondSpanTag)
            inputvalues(firstSpanTag,secondSpanTag,task)
            styleNewElement(checkbox,firstSpanTag,secondSpanTag)
            taskList.querySelector("ul").appendChild(newli)
        })
    }
}

function saveTasks(){
    localStorage.setItem('tasks', JSON.stringify(alltasks))
}


function createNewElement(){
    const newli = document.createElement("li")
    const checkbox = document.createElement("input")
    checkbox.type = "checkbox"
    const firstSpanTag = document.createElement("span")
    const secondSpanTag = document.createElement("span")
    return {newli,checkbox,firstSpanTag,secondSpanTag}
}

function addCreatedElements(newli,checkbox,firstSpanTag,secondSpanTag){
   newli.appendChild(checkbox)
   newli.appendChild(firstSpanTag)
   newli.appendChild(secondSpanTag)
}

function inputvalues(firstSpanTag,secondSpanTag ,value){
    firstSpanTag.textContent=value
    secondSpanTag.textContent = "delete"
}

function styleNewElement(checkbox,firstSpanTag,secondSpanTag){
checkbox.classList.add("task-checkbox")
firstSpanTag.classList.add("name")
secondSpanTag.classList.add("delete")
}

taskList.addEventListener("click",(e)=>{
    console.log(e);
    if(e.target.classList.contains("task-checkbox")){
        const nameSpan = e.target.nextElementSibling
        nameSpan.classList.toggle("completed")
    }
})

loadTasks()
