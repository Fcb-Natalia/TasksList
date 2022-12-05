{
    const tasks = []

    const render = () => {

        let htmlString = "";

        for (const task of tasks) {
            htmlString += `
            <li class="list js-tasks">
            <button class="list__textButton list__textButton--done js-buttonDone">
            ${task.done ? "✅" : ""} 
            </button>
            <span class="list__content${task.done ? "list__content--done" : ""}">
            ${task.content}</span>
            <button class="list__textButton list__textButton--remove js-textRemove">
            🗑️</button>
            </li>
            `;
        }

        document.querySelector(".js-tasks").innerHTML = htmlString;

    };


    const init = () => {
        render();
    };

    init();
}
