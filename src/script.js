document.addEventListener("DOMContentLoaded", () => {
  const todayDisplay = document.getElementById("today");
  const dateDisplay = document.getElementById("today-date");
  const popup = document.getElementById("popup");
  const addTaskButton = document.getElementById("addTaskButton");
  const closePopupButton = document.getElementById("closePopup");
  const savePopupButton = document.getElementById("savePopup");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");

  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  renderTasks();

  // Display the current day of the week and formatted date
  const date = new Date();
  todayDisplay.textContent = date.toLocaleString("en-US", { weekday: "long" });
  dateDisplay.textContent = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  // Show popup to add a new task
  addTaskButton.addEventListener("click", () => {
    popup.classList.remove("hidden");
    taskInput.value = ""; // Clear the input field when the popup opens
  });

  // Close the popup
  closePopupButton.addEventListener("click", () => {
    popup.classList.add("hidden");
  });

  // Save the task and render it in the list
  savePopupButton.addEventListener("click", () => {
    const taskText = taskInput.value.trim();
    if (taskText) {
      const taskTime = date.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      });
      tasks.push({ text: taskText, time: taskTime, completed: false });
      renderTasks();
      saveToLocalStorage();
      popup.classList.add("hidden");
    }
  });

  // Render the list of tasks
  function renderTasks() {
    // Clear the task list before re-rendering
    taskList.innerHTML = "";

    if (tasks.length === 0) {
      // Render the default "Sample Task" if no tasks exist
      const sampleTask = `
        <li class = "flex items-center justify-between bg-licolor mb-3 px-4 py-3 rounded-lg">
          <div class="checkbox-wrapper-15 flex items-center gap-3">
            <input
              class="inp-cbx"
              id="cbx-1"
              type="checkbox"
              style="display: none;"
            />
            <label class="cbx" for="cbx-1">
              <span>
                <svg width="12px" height="9px" viewBox="0 0 12 9">
                  <polyline points="1 5 4 8 11 1"></polyline>
                </svg>
              </span>
              <span>Sample Task</span>
            </label>
          </div>
          
        </li>
      `;
      taskList.innerHTML = sampleTask;
      return; // Exit the function as no further rendering is needed
    }

    // Loop through each task and add it to the task list
    tasks.forEach((task, index) => {
      const taskItem = document.createElement("li");
      taskItem.className =
        "flex  items-center justify-between bg-licolor mb-3 px-4 py-3 rounded-lg";

      // Create the checkbox and task text
      const checkboxWrapper = document.createElement("div");
      checkboxWrapper.className = "checkbox-wrapper-15 flex items-center gap-3";

      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.id = `cbx-${index}`;
      checkbox.style.display = "none";
      checkbox.checked = task.completed;
      checkbox.className = "inp-cbx";
      checkbox.addEventListener("click", () => toggleTask(index));

      const label = document.createElement("label");
      label.className = "cbx";
      label.htmlFor = `cbx-${index}`;
      label.innerHTML = `
  <span>
    <svg width="12px" height="9px" viewbox="0 0 12 9">
      <polyline points="1 5 4 8 11 1"></polyline>
    </svg>
  </span>
  <span class="${task.completed ? "line-through text-gray-400" : ""}">
    ${task.text}
  </span>
`;

      checkboxWrapper.appendChild(checkbox);
      checkboxWrapper.appendChild(label);

      // Create the task time and delete button
      const actionWrapper = document.createElement("div");
      actionWrapper.className = "flex items-center gap-3";

      const time = document.createElement("span");
      time.className = "text-gray-400 text-sm";
      time.textContent = task.time;

      const deleteButton = document.createElement("button");
      deleteButton.className = "text-red-500";
      deleteButton.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      `;
      deleteButton.addEventListener("click", () => deleteTask(index));

      actionWrapper.appendChild(time);
      actionWrapper.appendChild(deleteButton);

      // Combine the checkbox wrapper and action wrapper into the task item
      taskItem.appendChild(checkboxWrapper);
      taskItem.appendChild(actionWrapper);

      // Add the task item to the task list
      taskList.appendChild(taskItem);
    });
  }

  function saveToLocalStorage() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  // Toggle task completion
  window.toggleTask = (index) => {
    tasks[index].completed = !tasks[index].completed;
    saveToLocalStorage();
    renderTasks();
  };

  // Delete a task
  window.deleteTask = (index) => {
    tasks.splice(index, 1);
    saveToLocalStorage();
    renderTasks();
  };
});
