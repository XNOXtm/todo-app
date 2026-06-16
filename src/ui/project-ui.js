import {
  projectList,
  addProject,
  deleteProject,
} from "../models/project_list.js";
import openProject, { clearCurrentProject } from "./todo-ui.js";

function closeForm() {
  document.querySelector("#project-form-container").style.display = "none";
}

function openForm() {
  document.querySelector("#project-form-container").style.display = "flex";
}

function removeProject(projectId) {
  deleteProject(projectId);

  if (activeProjectId === projectId) {
    activeProjectId = null;
  }

  clearCurrentProject();
  renderProject();
}

let activeProjectId = null;

export default function renderProject() {
  const projectSection = document.getElementById("project-list");
  projectSection.innerHTML = "";

  for (let project of projectList) {
    const projectElement = document.createElement("li");
    projectElement.classList.add("project", "project-default");

    const projectName = document.createElement("div");
    projectName.classList.add("project-name");
    projectName.textContent = project.projectTitle;
    projectElement.append(projectName);
    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-project");
    deleteBtn.textContent = "X";
    projectElement.append(deleteBtn);

    if (project.id === activeProjectId) {
      projectElement.classList.remove("project-default");
      projectElement.classList.add("active-project");
    }

    projectSection.append(projectElement);

    deleteBtn.addEventListener("click", (event) => {
      removeProject(project.id);
    });

    projectElement.addEventListener("click", (event) => {
      if (!projectList.includes(project)) return;

      activeProjectId = project.id;
      renderProject();
      openProject(project);
    });
  }
}

const cancelBtn = document.querySelector("#cancelProject");
cancelBtn.addEventListener("click", closeForm);

const createProjectBtn = document.querySelector("#add-project");
createProjectBtn.addEventListener("click", openForm);

const projectForm = document.getElementById("project-form");
projectForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData.entries());

  addProject(data.projectName);
  renderProject();
  closeForm();

  event.target.reset();
});
