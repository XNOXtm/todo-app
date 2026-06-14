import "./styles.css";
import "./ui/project-ui.js";
import "./ui/todo-ui.js";
import renderProject from "./ui/project-ui.js";
import { loadProjects } from "./models/storage.js";

loadProjects();
renderProject();

