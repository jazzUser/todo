const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTaskButton");
const taskList = document.getElementById("taskList");

function addTask() {
  const taskValue = taskInput.value;
  if (taskValue) {
    const listItem = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    checkbox.addEventListener("change", function () {
      if (checkbox.checked) {
        taskList.removeChild(listItem);
      }
    });

    // Font Awesome icon for edit
    const editIcon = document.createElement("i");
    editIcon.classList.add("fas", "fa-pen", "edit-icon");
    editIcon.addEventListener("click", function () {
      editTask(listItem);
    });

    // Make list item editable on click
    listItem.setAttribute("contentEditable", "false"); // Disable editing initially
    listItem.appendChild(checkbox);
    listItem.appendChild(editIcon);
    listItem.appendChild(document.createTextNode(taskValue));
    taskList.appendChild(listItem);
    taskInput.value = "";
  }
}

function editTask(listItem) {
  // Enable editing directly on the list item
  listItem.setAttribute("contentEditable", "true"); // Enable editing
  listItem.focus(); // Focus on the list item for immediate editing

  // Event listener to handle when editing is done
  listItem.addEventListener("blur", function () {
    listItem.setAttribute("contentEditable", "false"); // Disable editing after blur
  });

  // Handle the Enter key to save the changes
  listItem.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      event.preventDefault(); // Prevent default new line behavior
      listItem.blur(); // Trigger blur event to save changes
    }
  });
}

addTaskButton.addEventListener("click", addTask);

taskInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    addTask();
  }
});
