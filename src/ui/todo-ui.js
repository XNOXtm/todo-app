import { projectList, addProject, deleteProject } from "../models/project_list.js";

function closeForm() {
    document.querySelector("#todo-form-container").style.display = "none";
}

function openForm() {
    document.querySelector("#todo-form-container").style.display = "flex";
}

function toggleIsDone() {

}

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
        
        project.addTodo(data.todoTitle, data.todoDescription, data.dueDate, data.priority);
        renderTodo(project);
        closeForm();
        
        event.target.reset();
    })
    
    renderTodo(project);
}

function renderTodo(project) {
    const todoList = project.todoList;
    const todoSection = document.getElementById("todo-list");
    todoSection.innerHTML = '';

    for (let todo of todoList) {
        const todoElement = document.createElement('li');
        todoElement.classList.add('todo');
        
        const todoDiv1 = document.createElement('div');
        todoDiv1.classList.add('todo-contents');
        
        const todoButton = document.createElement('button');
        todoButton.classList.add('checkbox');
        todoButton.textContent = "○";
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
        const deleteTodoBtn = document.createElement('button');
        deleteTodoBtn.classList.add('delete-todo');
        deleteTodoBtn.textContent = "Delete";
        todoDiv2.append(deleteTodoBtn);
        todoElement.append(todoDiv2);
        
        todoSection.append(todoElement);
        
        todoButton.addEventListener("click", ()=> {
            if (todo.isDone !== true) {
                todo.isDone = true;
                todoButton.textContent = "●";
                todoTitle.style.textDecoration = "line-through";
                todoElement.classList.remove('todo')
                todoElement.classList.add('todoDone')
            }else {
                todo.isDone = false;
                todoButton.textContent = "○";
                todoTitle.style.textDecoration = "none";
                todoElement.classList.remove('todoDone')
                todoElement.classList.add('todo')
            }
        })

        deleteTodoBtn.addEventListener('click', () => {
            project.deleteTodo(todo.id);
            renderTodo(project);
        })
    }
}

const closeTodoFrom = document.querySelector('#cancelTask');closeTodoFrom.addEventListener('click', closeForm);
