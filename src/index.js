import './style.css'
import { initUIFramework, renderTable, renderProjects }  from './uiUpdater'
import task from './task'
import project from './project'

// probably wanna use something different to an array
let t = task('New Task', false, '25/11/1997', 'HIGH', 'This is a task description');
let t2 = task('New Task 2', true, '25/11/1997', 'HIGH', 'This is a task description');
let t3 = task('New Task 3', false, '25/11/1997', 'HIGH', 'This is a task description');

let taskArray = [t, t2, t3,];

let p1 = project('Project 1', 'project-1');
let p2 = project('Project 2', 'project-2');
let p3 = project('Project 3', 'project-3');

let pArray = [p1, p2, p3];

initUIFramework(); 
renderTable(taskArray);
renderProjects(pArray);
