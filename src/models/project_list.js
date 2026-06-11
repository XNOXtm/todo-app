import Project from "./project.js";

export let projectList = [];
const project = addProject("Kitchen");
const project1 = addProject("College");
project.addTodo("Dishes", "wash in dishes in the sink", "09-06-2026", "high");
project.addTodo("Wash veggies", "wash the vegetables", "09-06-2026", "low");
project1.addTodo("ESE Study", "Study for the exams", "09-06-2026", "high");
project1.addTodo("Record Completion", "Finish up the record writing", "09-06-2026", "mid");

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

