addBtn = document.getElementById('add-todo');
clearBtn = document.getElementById('clear');

addBtn.addEventListener('click', function() {
    let todo_input = document.getElementById("Todo").value;
    let output = document.getElementById("todo-output");

    if (todo_input == "") {
        alert("Please don't submit empty values.")
    }

    else {
        localStorage.setItem("todo", todo_input);
    
        let todo_output = localStorage.getItem("todo");

        let list_item = document.createElement('p');
        list_item.innerText = todo_output;

        output.appendChild(list_item);
        
        document.getElementById("Todo").value = "";

        
        list_item.addEventListener('click', function() {
            list_item.style.background = "greenyellow"
        })
        list_item.addEventListener('dblclick', function() {
            list_item.remove();
        })
    }
})
