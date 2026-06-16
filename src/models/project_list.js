import Project from "./project.js";
import { saveProjects } from "./storage.js";

export let projectList = [];

export function addProject(projectTitle) {
  const project = new Project(projectTitle);
  projectList.push(project);

  saveProjects();

  return project;
}

export function deleteProject(id) {
  let updated_projectList = projectList.filter((task) => id !== task.id);
  projectList = updated_projectList;

  saveProjects();

  return projectList;
}

export function defaultProjects() {
  if (projectList.length > 0) return;

  const p1 = addProject("Personal");
  p1.addTodo(
    "Morning Workout",
    "1h 30m Strenght + Cardio",
    "2026-06-15",
    "high",
    false,
  );
  p1.addTodo(
    "Read Book",
    "Read 20 pages of any Book",
    "2026-06-16",
    "low",
    false,
  );

  const p2 = addProject("Coding");
  p2.addTodo(
    "Fix todo app bugs",
    "Clean up render + storage logic",
    "2026-06-14",
    "high",
    false,
  );
  p2.addTodo(
    "Learn async JS",
    "Promises, fetch, async/await",
    "2026-06-18",
    "medium",
    false,
  );

  const p3 = addProject("College");
  p3.addTodo(
    "Complete assignment",
    "AI/ML assignment submission",
    "2026-06-20",
    "high",
    false,
  );
  p3.addTodo(
    "Revise quantum mechanics",
    "Key formulas + concepts",
    "2026=06-17",
    "medium",
    false,
  );
}
