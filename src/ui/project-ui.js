import { projectList, addProject, deleteProject } from "../models/project_list.js";

function closeForm() {
    document.querySelector("#project-form-container").style.display = "none";
}

function openForm() {
    document.querySelector("#project-form-container").style.display = "flex";
}

function removeProject(projectId) {
    deleteProject(projectId);
    renderProject();
}

function renderProject() {
    const projectSection = document.getElementById("project-list");
    projectSection.innerHTML = '';

    for (let project of projectList) {
        const projectElement =document.createElement('li');
        projectElement.classList.add('project');
        
        const projectName = document.createElement('div');
        projectName.classList.add('project-name');
        projectName.textContent = project.projectTitle;
        projectElement.append(projectName);
        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('delete-project');
        deleteBtn.textContent = "X";
        projectElement.append(deleteBtn);

        projectSection.append(projectElement);

        deleteBtn.addEventListener("click", (event) => {
            removeProject(project.id);
        });

    };
    console.log(projectList)
}


const cancelBtn = document.querySelector("#cancelbtn");
cancelBtn.addEventListener("click", closeForm);

const createProjectBtn = document.querySelector("#add-project");
createProjectBtn.addEventListener("click", openForm);


const projectForm = document.getElementById("project-form");
projectForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    const data = Object.fromEntries(formData.entries());
    const project = addProject(data.projectName);
    renderProject();
})

