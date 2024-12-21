const ourForm = document.getElementById("ourForm");
const ourField = document.getElementById("ourField");
const ourList = document.getElementById("ourList");
const errorSpan = document.getElementById("error");

ourForm.addEventListener("submit", (e) => {
  e.preventDefault();
  createItem(ourField.value);
});

ourField.addEventListener("input", (e) => {
  //Listen for when there is a valid input
  if (e.target.value.length) {
    errorSpan.style.display = "none";
  }
});

function createItem(x) {
  if (!x.trim()) {
    // Show error if an empty string is saved
    errorSpan.style.display = "inline";
    errorSpan.innerText = "Please enter a Task";
    return;
  }
  const uniqueId = `task-${Date.now()}`;
  const ourHTML = `
        <li>
            <input type="checkbox" id="${uniqueId}" onclick="toggleComplete(this)">
            <label class="todoItem" for="${uniqueId}">${x}</label>
            <button onclick="deleteItem(this)" class='delBtn'>Delete</button>
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
