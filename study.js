const button = document.querySelector(".button-add-task")
const input =document.querySelector(".input-task")
const fullList = document.querySelector(".list-task")

let itemsList = []
// function getInputValue()
function addNewTask() {
    // console.log(input.value)
    // itemsList.push(input.value)
    // console.log(itemsList)

    itemsList.push({
        task: input.value,
        checked: false
    })

    input.value = ''

    showTask()
}

function showTask() {

    let newLi = ''
    itemsList.forEach( (item, index) => {
        newLi = itemsList + `
            <li class="task ${item.checked && "done"}">
                <img src="img/checked.png" alt="mark it has done" onclick="taskChecked(${index})">
                <p>${item.task}</p>
                <img src="img/trash.png" alt="trash" onclick="removeItem(${index})">
            </li>
            `
    })

    fullList.innerHTML = newLi

    localStorage.setItem('list', JSON.stringify(itemsList))
}

function taskChecked(index) {
    // console.log(index)
    itemsList[index].checked = !itemsList[index].checked

    showTask()

}

function removeItem(index) {
    // console.log("item Removed")
    itemsList.splice(index, 1)
    // console.log(index)

    showTask()
}

function reloadTasks() {
    const tasksFromLocalStorage = localStorage.getItem('list')

    if (tasksFromLocalStorage) {
        itemsList = JSON.parse(tasksFromLocalStorage)
    }
    
    // console.log(tasksFromLocalStorage)

    showTask()
}

reloadTasks()
button.addEventListener('click', addNewTask)