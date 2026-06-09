export default class Todo {
    constructor(title, description, dueDate) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.id = crypto.randomUUID();
        this.isDone = false;
    }
}