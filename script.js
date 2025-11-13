const addButton = document.getElementById("addButton");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
addButton.addEventListener("click", function() {
  const taskText = taskInput.value.trim();
  if (taskText === "") return;
  const li = document.createElement("li");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  const span = document.createElement("span");
  span.textContent = " " + taskText;
  checkbox.addEventListener("change", function() {
    if (checkbox.checked) {
      span.style.textDecoration = "line-through";
    } else {
      span.style.textDecoration = "none";
    }
  });
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.addEventListener("click", function() {
    taskList.removeChild(li);
  });
  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(deleteButton);
  taskList.appendChild(li);
  taskInput.value = "";
});
taskInput.addEventListener("keypress", function(e) {
  if (e.key === "Enter") {
    addButton.click();
  }
});

