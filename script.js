const form = document.querySelector("form");
const inputUser = document.getElementById("inputUser");
const list = document.getElementById("list");
const todolist = [];

//Fungsi untuk menambah list yang ingin dilakukan 
form.addEventListener("submit", function(event) {
    const todo = inputUser.value;
   
    if(todo == "") {
        alert("Input wajib diisi");
    } else {
        todolist.push(todo)

        const newToDo = document.createElement('li');
        newToDo.innerHTML = `
            <div>
                <input type="checkbox">
                <span>${inputUser.value}</span>
            </div>
            <button id="delete">x</button>
        `
    
        list.append(newToDo);
            
        inputUser.value = "";
        
    }    
   
    event.preventDefault();
})

//Fungsi untuk menghapus list
list.addEventListener("click", function(event) {
    if(event.target.id == "delete") {
       event.target.parentElement.remove();
    }
})