import "./styles.css";
import Project from "./models/project.js";

const project1 = new Project("Kitchen");

project1.addTodo("Dishes", "wash the dishes in the sink", "09-06-2026");
project1.addTodo("Make the todo app", "atleast console ready", "09-06-2026");
project1.addTodo("Finish the todo app", "fully functional", "10-06-2026");
console.log(project1.todoList);

project1.deleteTodo(project1.todoList[1].id);

console.log(project1.todoList);

// console.log("works");
// console.log(task1);