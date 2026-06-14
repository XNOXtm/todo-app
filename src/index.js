import "./styles.css";
import "./ui/project-ui.js";
import "./ui/todo-ui.js";
import renderProject from "./ui/project-ui.js";
import { loadProjects } from "./models/storage.js";
import { defaultProjects, projectList } from "./models/project_list.js";

loadProjects();

if (!projectList || projectList.length === 0){
    defaultProjects();
}

renderProject();

