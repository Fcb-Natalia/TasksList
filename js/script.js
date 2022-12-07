{
    const tasks = []

    const addNewTask = (newTaskContent) => {
        tasks.push({
            content: newTaskContent
        });

        render();
    }

    const removeTask = (TaskIndex) => {
        tasks.splice(TaskIndex, 1);
        render();
    }

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

        const removeButtons = document.querySelectorAll(".js-textRemove");

        removeButtons.forEach((removeButton, index) => {
            removeButton.addEventListener("click", () => {
                removeTask(index);

            });

        });

    };

    const onFormSubmit = (event) => {
        event.preventDefault();

        const newTaskContent = document.querySelector(".js-newTask").value.trim();

        if (newTaskContent === "") {
            return;
        }

        addNewTask(newTaskContent);
    }

    const init = () => {
        render();

        const form = document.querySelector(".js-form");
        form.addEventListener("submit", onFormSubmit);
    };

    init();
}
