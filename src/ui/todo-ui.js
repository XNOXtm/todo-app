import { projectList, addProject, deleteProject } from "../models/project_list.js";

function closeForm() {
    document.querySelector("#todo-form-container").style.display = "none";
}

function openForm() {
    document.querySelector("#todo-form-container").style.display = "flex";
}

const createTodoBtn = document.querySelector("#add-todo");
createTodoBtn.addEventListener("click", openForm);

const closeTodoFrom = document.querySelector('#cancelTask');
closeTodoFrom.addEventListener('click', closeForm);