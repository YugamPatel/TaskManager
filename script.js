function addTask() {
    var input = document.getElementById("taskInput");
    var task = input.value;
    input.value = "";
  
    if (task === "") {
        alert("Please enter a task!");
        return;
    }
  
    var taskList = document.getElementById("taskList");
    var li = document.createElement("li");

    // Create a checkbox
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    // Create a label for text
    var label = document.createElement("label");
    label.appendChild(document.createTextNode(task));
  
    // Add an event listener to strike through the text when checked
    checkbox.addEventListener("change", function() {
        if (checkbox.checked) {
            label.style.textDecoration = "line-through";
        } else {
            label.style.textDecoration = "none";
        }
    });

    // Add the checkbox and label to the list item
    li.appendChild(label);
    li.appendChild(checkbox);
  
    taskList.appendChild(li);
}
