import Project from "./project.js";

export let projectList = [];

export function addProject(projectTitle) {
        const project = new Project(projectTitle);
        projectList.push(project);
        return project;
};

export function deleteProject(id) {
        let updated_projectList = projectList.filter(task => id !== task.id);
        projectList = updated_projectList;
        return projectList;
};
