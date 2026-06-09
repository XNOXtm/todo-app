import Todo from "./todo.js";

export default class Project {
    constructor(projectTile) {
        this.projectTile = projectTile;
        this.id = crypto.randomUUID();
    }

    todoList = []

    addTodo(title, description, dueDate) {
        const todo = new Todo(title, description, dueDate);
        this.todoList.push(todo);
    }

    deleteTodo(id) {
        let updated_todoList = this.todoList.filter(task => id !== task.id);
        this.todoList = updated_todoList;
        return this.todoList;
    }

}