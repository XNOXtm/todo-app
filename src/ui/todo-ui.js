import { projectList, addProject, deleteProject } from "../models/project_list.js";
import editIcon from "../assets/edit.svg";


function openForm() {
    document.querySelector("#todo-form-container").style.display = "flex";
}
function closeForm() {
    document.querySelector("#todo-form-container").style.display = "none";
}

function closeEditForm() {
    document.querySelector("#todo-edit-container").style.display = "none";
}
function openEditForm(todo,project) {
    document.querySelector("#todo-edit-container").style.display = "flex";
    document.getElementById('editTitle').value = todo.title;
    document.getElementById('editDescription').value = todo.description;
    document.getElementById('editDueDate').value = todo.dueDate;

    if (todo.priority === 'high') {
        document.getElementById('editHigh').checked = true;
    } else if (todo.priority === 'mid') {
        document.getElementById('editMid').checked = true;
    } else {
        document.getElementById('editLow').checked = true;
    };

    editTodoForm(todo,project)
}

function editTodoForm(todo,project) {
    const editForm = document.getElementById('edit-form');
    editForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData.entries());

        todo.title = data.editTitle;
        todo.description = data.editDescription;
        todo.dueDate = data.editDueDate;
        todo.priority = data.priority;
        renderTodo(project);
        closeEditForm();
    })
}

function submitTodoFrom(project) {
    const todoForm = document.getElementById('todo-form');
    todoForm.addEventListener("submit", (event)=> {
        event.preventDefault();
        
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData.entries());
        
        project.addTodo(data.todoTitle, data.todoDescription, data.dueDate, data.priority);
        renderTodo(project);
        closeForm();
        
        event.target.reset();
        renderTodo(project);
    })
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
    submitTodoFrom(project)
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
        

        const todoPriorityStatus = document.createElement('button');
        todoPriorityStatus.classList.add('todo-priority');
        if (todo.priority == "high") {
            todoPriorityStatus.classList.add('priority-high');
            todoPriorityStatus.textContent = "High";
        } else if (todo.priority == "mid") {
            todoPriorityStatus.classList.add('priority-mid');
            todoPriorityStatus.textContent = "Mid";
        } else {
            todoPriorityStatus.classList.add('priority-low');
            todoPriorityStatus.textContent = "Low";
        }
        todoDiv2.append(todoPriorityStatus);


        const todoDueDate = document.createElement('div');
        todoDueDate.classList.add('due-date');
        todoDueDate.textContent = todo.dueDate;
        todoDiv2.append(todoDueDate);
        const deleteTodoBtn = document.createElement('button');
        deleteTodoBtn.classList.add('delete-todo');
        deleteTodoBtn.textContent = "Delete";
        todoDiv2.append(deleteTodoBtn);

        const editBtn = document.createElement('button');
        const editBtnIcon = document.createElement('span')
        editBtnIcon.classList.add('material-symbols-outlined');
        editBtnIcon.textContent = "Edit"
        editBtn.append(editBtnIcon)
        editBtn.classList.add('editBtn');
        todoDiv2.append(editBtn);
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

        editBtn.addEventListener('click', ()=> {
            openEditForm(todo,project)
        });

        deleteTodoBtn.addEventListener('click', () => {
            project.deleteTodo(todo.id);
            renderTodo(project);
        })
    }
}

const closeTodoFrom = document.querySelector('#cancelTask');
closeTodoFrom.addEventListener('click', closeForm);
const closeEditFrom = document.querySelector('#cancelEdit');
closeEditFrom.addEventListener('click', closeEditForm);





