let currentDate = new Date();
let dateString = currentDate.toLocaleDateString();
// let timeHour = now.getHours()
// let timeMinutes = now.getMinutes()
// let timeSeconds = now.getSeconds();
// let actionTime = `${timeHour}:${timeMinutes}:${timeSeconds}`

displayDate.innerHTML = `${dateString}`
let amnpm = currentDate.getHours > 12 ? "PM" : "AM"

let todoArray = []
let todoHead = []

function addList(){
    if(userInput.value != ''){
        
        displayTodo()
        noItems.style.display = "none"
        
    }else{
        dangerText.style.display = "block"
    }
}
function displayTodo(){
    dangerText.style.display = "none"
        todoArray.push(userInput.value);
        todoHead.push(userInputTitle.value)
        userInputTitle.value = ""
        userInput.value = ""
        todoList.innerHTML = ""
        todoTitle.innerHTML = ""
        cartItem.innerHTML = ""

    for (i=0; i<todoArray.length; i++){
        
        todoList.innerHTML += `
            <div class="card mb-3 p-3" style="background: linear-gradient(to right, #fbc2eb, #a6c1ee); max-width: 24rem;">
                            <div class="d-flex justify-content-between card-header text-dark bg-transparent border-light"><h3>${todoHead[i]}</h3><div><i style="margin-right: 10px; cursor: pointer; color: red;" onclick="deleteTodo(${i})" class="fa-solid fa-trash"></i><i style="color: white;" onclick="editItem(i)" class="fa-solid fa-pen"></i></div></div>
                            <div class="card-body text-dark">
                              <p class="card-text">${todoArray[i]}</p>
                            </div>
                            <div class="card-footer bg-transparent border-success">${dateString}  ${currentDate.getHours()}:${currentDate.getMinutes()}:${amnpm}</div>
                        </div>
                        `
                        // cartbox.style.display = "block"
            todoTitle.innerHTML += `<p>${todoHead[i]}</p>`
            cartItem.innerHTML = `${i+1}`
    }
}

function deleteTodo(i){
    todoArray.splice(i, 1)
    todoHead.splice(i, 1)
    displayTodo();
}
// function editItem(i){
//     let newItem = prompt("Enter new item to add")
//     todoArray.splice(i, 1, newItem)
//     displayTodo()
// }

