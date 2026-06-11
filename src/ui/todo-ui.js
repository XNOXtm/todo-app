import { projectList, addProject, deleteProject } from "../models/project_list.js";

function closeForm() {
    document.querySelector("#todo-form-container").style.display = "none";
}

function openForm() {
    document.querySelector("#todo-form-container").style.display = "flex";
}


const closeTodoFrom = document.querySelector('#cancelTask');
closeTodoFrom.addEventListener('click', closeForm);


export default function openProject(project) {
    const contentHeader = document.getElementById("content-header");
    contentHeader.innerHTML = '';
    
    const projectHeading = document.createElement('div');
    projectHeading.classList.add('project-heading');
    projectHeading.textContent = project.projectTitle;
    contentHeader.append(projectHeading);
    
    const addTodoBtn = document.createElement('button');
    addTodoBtn.id = "add-todo";
    addTodoBtn.textContent = "+ Add Todo";
    contentHeader.append(addTodoBtn);
    addTodoBtn.addEventListener("click", openForm);
    
    const todoForm = document.getElementById('todo-form');
    todoForm.addEventListener("submit", (event)=> {
        event.preventDefault();
        
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData.entries());
        
        // console.log(project.todoList)
        // console.log(data)
    })
    
    renderTodo(project.todoList);
    
}

function renderTodo(todoList) {
    const todoSection = document.getElementById("todo-list");
    todoSection.innerHTML = '';

    // console.log(todoList[0].title)
    for (let todo of todoList) {
        const todoElement = document.createElement('li');
        todoElement.classList.add('todo');

        const todoDiv1 = document.createElement('div');
        todoDiv1.classList.add('todo-contents');

        const todoButton = document.createElement('button');
        todoButton.classList.add('checkbox');
        todoButton.textContent = "O";
        todoDiv1.append(todoButton);
        const todoTitle = document.createElement('div');
        todoTitle.classList.add('title');
        todoTitle.textContent = todo.title;
        todoDiv1.append(todoTitle);
        todoElement.append(todoDiv1);
        
        const todoDescription = document.createElement('div');
        todoDescription.classList.add('description');
        todoDescription.textContent = todo.description;
        todoElement.append(todoDescription);
        
        const todoDiv2 = document.createElement('div');
        todoDiv2.classList.add('todo-contents');

        const todoDueDate = document.createElement('div');
        todoDueDate.classList.add('due-date');
        todoDueDate.textContent = todo.dueDate;
        todoDiv2.append(todoDueDate);
        const deleteTodo = document.createElement('button');
        deleteTodo.classList.add('delete-todo');
        deleteTodo.textContent = "Delete";
        todoDiv2.append(deleteTodo);
        todoElement.append(todoDiv2);

        todoSection.append(todoElement)
    }

}