import project from "./project";

export function initUIFramework() {
        const content = createDiv(undefined, 'content');
        document.body.appendChild(content);

        const board = createDiv('board');
        content.appendChild(board);

        const sideBar = createDiv('sideBar');
        board.appendChild(sideBar);

        const timeDiv = createDiv('timeDiv');
        sideBar.appendChild(timeDiv);

        const taskList = createDiv('taskList', 'taskList');
        board.appendChild(taskList);

        const footer = createDiv(undefined, 'footer', 'Copyright &copy Tommy Mapp');
        document.body.appendChild(footer);


        initTableUI(taskList);
        initCreateButtonsUI(content);
        initTimeButtonsUI(timeDiv);
        initProjectBarUI(sideBar);
        initModals();


    function initProjectBarUI(sideBar) {
        const projectDiv = createDiv('projectDiv', 'projectDiv');
        sideBar.appendChild(projectDiv);
    }

    function initTimeButtonsUI(timeDiv) {
        const allButton = createButton('allButton', 'All');
        const allDiv = createDiv('sideBarRow');
        allDiv.appendChild(allButton);
        timeDiv.appendChild(allDiv);

        const dayButton = createButton('dayButton', 'Day');
        const dayDiv = createDiv('sideBarRow');
        dayDiv.appendChild(dayButton);
        timeDiv.appendChild(dayDiv);

        const weekButton = createButton('weekButton', 'Week');
        const weekDiv = createDiv('sideBarRow');
        weekDiv.appendChild(weekButton);
        timeDiv.appendChild(weekDiv);

        const monthButton = createButton('monthButton', 'Month');
        const monthDiv = createDiv('sideBarRow');
        monthDiv.appendChild(monthButton);
        timeDiv.appendChild(monthDiv);
    }

    function initCreateButtonsUI(content) {
        const createButtonsDiv = createDiv('buttons');
        const projectButton = createButton('create-project', 'Create New Project');
        projectButton.addEventListener("click", openCreateProjectForm);
        const taskButton = createButton('create-task', 'Create New Task');
        createButtonsDiv.appendChild(projectButton);
        createButtonsDiv.appendChild(taskButton);
        content.appendChild(createButtonsDiv);
    }

    function initModals() {
        const projectModalDiv = createDiv('project-modal', 'project-modal-container');
        const topDiv = document.createElement('div');
        topDiv.classList.add('modal-row');
        projectModalDiv.appendChild(topDiv);
        const projectHeader = document.createElement('h1');
        projectHeader.innerHTML = 'Create A New Project!';
        topDiv.append(projectHeader);
        const projectCloseButton = createButton('project-close', '&times', 'modal-close-button');
        projectCloseButton.addEventListener('click', closeProjectForm);
        topDiv.append(projectCloseButton);


        const formDiv = document.createElement('div');
        formDiv.classList.add('modal-row');
        const form = document.createElement('form');
        const pTitleLabel = document.createElement('label');
        pTitleLabel.setAttribute("for", "project-title");
        pTitleLabel.innerHTML = 'Project Title';
        const pTitleInput = document.createElement('input');
        pTitleInput.setAttribute('id','project-title');
        pTitleInput.name = 'project-title';
        pTitleInput.type = "text";
        const pSubmitInput = document.createElement('input');
        pSubmitInput.type = "submit";
        pSubmitInput.value = "Submit";
        pSubmitInput.addEventListener('click', submitProjectForm());
        form.appendChild(pTitleLabel);
        form.appendChild(pTitleInput);
        form.appendChild(pSubmitInput);
        formDiv.appendChild(form);
        projectModalDiv.appendChild(formDiv);
        document.body.append(projectModalDiv);
    }

    function initTableUI(taskList) {
        let table = document.createElement('table');
        table.classList.add('table');
        let thead = document.createElement('thead');
        let tbody = document.createElement('tbody');
        tbody.setAttribute('id', 'tableBody');

        table.appendChild(thead);
        table.appendChild(tbody);

        let tableRow = document.createElement('tr');
        let heading_1 = document.createElement('th');
        heading_1.innerHTML = "Complete";
        let heading_2 = document.createElement('th');
        heading_2.innerHTML = "Task";
        let heading_3 = document.createElement('th');
        heading_3.innerHTML = "Due Date";
        let heading_4 = document.createElement('th');
        heading_4.innerHTML = "Proirity";

        tableRow.appendChild(heading_1);
        tableRow.appendChild(heading_2);
        tableRow.appendChild(heading_3);
        tableRow.appendChild(heading_4);
        thead.appendChild(tableRow);

        taskList.appendChild(table);
    }

}

function submitProjectForm(){
    if(document.getElementById('project-title')){
        const newTitle = document.getElementById('project-title').value;
        console.log(newTitle);
    }
    else console.error("nulllllll");
}

export function renderProjects(projects) {
    const projectDiv = document.getElementById('projectDiv');

    for (let i = 0; i < projects.length; i++) {
        const d = createDiv('sideBarRow');
        d.appendChild(createButton(projects[i].getId(), projects[i].getTitle()));
        projectDiv.appendChild(d);
    }
}

export function renderTable(tasks) {
    const tableBody = document.getElementById('tableBody');
    tableBody.innerHTML = "";
    for (let i = 0; i < tasks.length; i++) {
        const task = tasks[i];
        const htmlTask = `
        <tr>
            <td><input type="checkbox" name="complete" value=${task.getComplete()}></td>
            <td>${task.getTitle()}</td>
            <td>${task.getDueDate()}</td>
            <td>${task.getPriority()}</td>
            <td><button class="details" onclick="openDetails()">Details</button></td>
            <td><button class="edit" onclick="editTask()">Edit</button></td>
            <td><button class="delete" onclick="deleteTask()">Delete</button></td>
        </tr>
        `;
        tableBody.insertAdjacentHTML("afterbegin", htmlTask);
    }
}

function openDetails() {
    console.log('openDetails()');
}

function editTask() {
    console.log("editTask()");
}

function deleteTask() {
    console.log("deleteTask()");
}

function openCreateProjectForm() {
    const modalContainer = document.getElementById('project-modal-container');
    modalContainer.classList.add('show');
}

function closeProjectForm() {
    const modalContainer = document.getElementById('project-modal-container');
    modalContainer.classList.remove('show');
}

function openCreateTaskForm() {

}

//Class names passed as array if more than one, if want no id pass variable as ''. Maybe a way to make it so I don't need to pass first param to pass second?
function createDiv(classNames = undefined, idName = undefined, text = undefined) {
    const div = document.createElement('div');

    if(idName !== undefined){
        div.setAttribute('id', idName);
    }

    if(typeof classNames === 'string'){
        div.classList.add(classNames);
    }
    else if(classNames !== undefined && classNames.length > 0)
    {
        for (let i = 0; i < classNames.length; i++) {
            div.classList.add(classNames[i]);
        }
    }

    if(typeof text === 'string'){
        div.innerHTML = text;
    }

    return div;
}

function createButton(idName = undefined, text = undefined, classNames = undefined) {
    const button = document.createElement('button');

    if(idName !== undefined){
        button.setAttribute('id', idName);
    }

    if(typeof classNames === 'string'){
        button.classList.add(classNames);
    }
    else if(classNames !== undefined && classNames.length > 0)
    {
        for (let i = 0; i < classNames.length; i++) {
            button.classList.add(classNames[i]);
        }
    }

    if(typeof text === 'string'){
        button.innerHTML = text;
    }

    return button;
}