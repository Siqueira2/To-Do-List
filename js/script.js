//Colect the elements
const todoForm = document.querySelector("#todo-form")
const todoInput = document.querySelector("#todo-input")
const editForm = document.querySelector("#edit-form")
const editInput = document.querySelector("#edit-input")
const cancelbtn = document.querySelector("#cancel-btn")
const searcInput = document.querySelector("#search")
const erase = document.querySelector("#erase-btn")
const filter = document.querySelector("#filter-select")
const todoList = document.querySelector("#todo-list")
let oldInputValue

//Functions
const saveTodo = (text) => {
    const todo = document.createElement("div")
    todo.classList.add("todo")

    const todoTitle = document.createElement("h4")
    todoTitle.innerText = text
    todo.appendChild(todoTitle)

    const finishBtn = document.createElement("button")
    finishBtn.classList.add("finish-todo")
    finishBtn.innerHTML = '<i class="fa-solid fa-check"></i>'
    todo.appendChild(finishBtn)

    const editBtn = document.createElement("button")
    editBtn.classList.add("edit-todo")
    editBtn.innerHTML = '<i class="fa-solid fa-pen"></i>'
    todo.appendChild(editBtn)

    const removeBtn = document.createElement("button")
    removeBtn.classList.add("remove-todo")
    removeBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>'
    todo.appendChild(removeBtn)

    todoList.appendChild(todo)
    todoInput.value = ""
    todoInput.focus()
}

const toggleForm = () => {
    todoForm.classList.toggle("hide")
    editForm.classList.toggle("hide")
    todoList.classList.toggle("hide")
}
const updateTodo = (text) => {
    const todo = document.querySelectorAll(".todo")

    todo.forEach((todo) => {
        let todoTitle = todo.querySelector("h4")
        console.log(todo, text)
        
        if(todoTitle.innerText === oldInputValue){
            todoTitle.innerText = text
        }
    })
}

//Events
todoForm.addEventListener("submit", (e) => {
    e.preventDefault()

    const inputValue = todoInput.value

    if(inputValue){
        saveTodo(inputValue)
    }
})

document.addEventListener("click", (e) => {
    const targetEl = e.target
    const parentEl = targetEl.closest("div")
    let todoTitle

    if (parentEl && parentEl.querySelector("h4")){
        todoTitle = parentEl.querySelector("h4").innerText 
    }

    if (targetEl.classList.contains("finish-todo")) {
        parentEl.classList.toggle("done")
    }
    
    if (targetEl.classList.contains("edit-todo")) {
        toggleForm()

        editInput.value = todoTitle
        oldInputValue = todoTitle
    }

    if (targetEl.classList.contains("remove-todo")) {
        parentEl.remove()
    }
})

cancelbtn.addEventListener("click", (e) => {
    e.preventDefault()
    toggleForm()
})

editForm.addEventListener("submit", (e) => {
    e.preventDefault()

    const editInputValue = editInput.value

    if(editInputValue) {
        updateTodo(editInputValue)
    }

    toggleForm()
})