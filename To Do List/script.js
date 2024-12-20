const ourForm = document.getElementById("ourForm");
const ourField = document.getElementById("ourField");
const ourList = document.getElementById("ourList");


ourForm.addEventListener("submit", (e) => {
    e.preventDefault();
    createItem(ourField.value);
});

function createItem(x) {

  if (!x.trim()) {
    alert("Please enter a task."); 
    return; 
}
     const uniqueId = `task-${Date.now()}`;
     const ourHTML = `
        <li>
            <input type="checkbox" id="${uniqueId}" onclick="toggleComplete(this)">
            <label for="${uniqueId}">${x}</label>
            <button onclick="deleteItem(this)">Delete</button>
        </li>`;
    
    ourList.insertAdjacentHTML("beforeend", ourHTML);
    ourField.value = "";
    ourField.focus();
}

function deleteItem(elementToDelete) {
    elementToDelete.parentElement.remove();
}

function toggleComplete(checkbox) {
     const label = checkbox.nextElementSibling;

     if (checkbox.checked) {
        label.classList.add("completed");
    } else {
        label.classList.remove("completed");
    }
}