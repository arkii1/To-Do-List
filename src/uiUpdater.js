export function initUI() {
    const { timeDiv, sideBar } = initFramework();

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

    const projectDiv = createDiv('projectDiv');
    sideBar.appendChild(projectDiv);

    for (let i = 0; i < 8; i++) {
        const d = createDiv('sideBarRow');
        d.appendChild(createButton(undefined, 'Project X'));
        projectDiv.appendChild(d);
    }

    function initFramework() {
        const content = createDiv(undefined, 'content');
        document.body.appendChild(content);

        const board = createDiv('board');
        content.appendChild(board);

        const sideBar = createDiv('sideBar');
        board.appendChild(sideBar);

        const timeDiv = createDiv('timeDiv');
        sideBar.appendChild(timeDiv);

        const taskList = createDiv('taskList');
        board.appendChild(taskList);

        const footer = createDiv(undefined, 'footer', 'Copyright &copy Tommy Mapp');
        document.body.appendChild(footer);
        return { timeDiv, sideBar };
    }
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