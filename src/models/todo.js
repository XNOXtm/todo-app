export default class Todo {
  constructor(title, description, dueDate, priority, isDone = false) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.isDone = isDone;
    this.id = crypto.randomUUID();
  }

  toggleDone() {
    this.isDone = !this.isDone;
  }
}
