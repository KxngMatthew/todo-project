const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');
const deleteTodos = document.querySelector('.todos');
const search = document.querySelector('.search input');

//function that will prepare a general html template to add task to the todo list
const generateTodoTemplate = (todo)=>{
const html = '<li class="list-group-item d-flex justify-content-between align-items-center text-light"><span>'+todo+'</span><i class="far fa-trash-alt delete"></i></li>';
list.innerHTML += html;// appends task to list by using innerHTML '+='
}

addForm.addEventListener('submit',(e)=>{
e.preventDefault();
const todo = addForm.add.value.trim();
if(todo.length){// if todo has a value then proceed, this allows the user to not enter a blank value
generateTodoTemplate(todo);
addForm.reset(); // reset all input fields inside form
}
//console.log(todo);
});

deleteTodos.addEventListener('click',(e)=>{
if(e.target.classList.contains('delete')){// contains look to see if the class list of the target element thats clicked, contains a specific class.
e.target.parentElement.remove();// removes the parent element which contains the target element.
}
});

//filter function for search, created a separate function for reusability of code.
//This function is getting all the todos in an an array that don't include the term searched for and add a filtered class to it.
//The opposite is done to filter terms that matched and remove the filtered class.
const filterTodos = (term) =>{

    Array.from(list.children)
    .filter((todo)=>{
        return !todo.textContent.toLowerCase().includes(term); // if this is true it will return false because of the denoted "!", items will be kept in the array if they don't include the term.
    })
    .forEach((todo)=>{
        todo.classList.add('filtered');
    });

    Array.from(list.children)
    .filter((todo)=>{
        return todo.textContent.toLowerCase().includes(term); // if this is true it will return false because of the denoted "!", items will be kept in the array if they don't include the term.
    })
    .forEach((todo)=>{
        todo.classList.remove('filtered');
    })
}

//Key up event- search
search.addEventListener('keyup',()=>{

    const term = search.value.trim().toLowerCase();
    filterTodos(term);

});