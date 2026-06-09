import "./styles.css";
import { projectList, addProject, deleteProject } from "./models/project_list.js";

const project1 = addProject("Kitchen");
const project2 = addProject("Coding");

console.log(projectList);

project1.addTodo("Dishes", "wash the dishes in the sink", "09-06-2026");
project2.addTodo("Make the todo app", "atleast console ready", "09-06-2026");
project2.addTodo("Finish the todo app", "fully functional", "10-06-2026");

deleteProject(projectList[0].id);



