import Todo from "./todo.js";
import { saveProjects } from "./storage.js";

export default class Project {
    constructor(projectTitle) {
        this.projectTitle = projectTitle;
        this.id = crypto.randomUUID();
    }

    todoList = []

    addTodo(title, description, dueDate, priority, isDone = false) {
        const todo = new Todo(title, description, dueDate, priority, isDone);
        this.todoList.push(todo);
        saveProjects();
    }
    
    deleteTodo(id) {
        let updated_todoList = this.todoList.filter(task => id !== task.id);
        this.todoList = updated_todoList;
        saveProjects();
        return this.todoList;
    }

}