import Todo from "./todo.js";

export default class Project {
    constructor(projectTile) {
        this.projectTile = projectTile;
        this.id = crypto.randomUUID();
    }

    todo_list = []

    addTodo(title, description, dueDate) {
        const todo = new Todo(title, description, dueDate);
        this.todo_list.push(todo);
    }

}