import Project from "./project.js";
import Todo from "./todo.js";
import { projectList } from "./project_list.js";

export function saveProjects() {
    localStorage.setItem('projects', JSON.stringify(projectList));
}

export function loadProjects() {
    const savedProjects = JSON.parse(localStorage.getItem('projects'));

    if (!savedProjects) return;

    projectList.length === 0;

    for (let project of savedProjects) {
        const newProject = new Project(project.projectTitle);
        newProject.id = project.id;

        for (let todo of project.todoList){
            const newTodo = new Todo(todo.title, todo.description, todo.dueDate, todo.priority, todo.isDone);
            newTodo.id = todo.id;
            newProject.todoList.push(newTodo);
        }

        projectList.push(newProject);
    }
}