import { addProject, projectList } from "./project_list.js";

export function saveProjects() {
    localStorage.setItem('projects', JSON.stringify(projectList));
}

export function loadProjects() {
    // localStorage.clear();
    const savedProjects = JSON.parse(localStorage.getItem('projects'));

    if (savedProjects) {
        for (let project of savedProjects) {
            const newProject = addProject(project.projectTitle);
            for (let todo of project.todoList){
                newProject.addTodo(todo.title, todo.description, todo.dueDate, todo.priority, todo.isDone);
                console.log(todo.isDone)
            }
    
        }
    }

}