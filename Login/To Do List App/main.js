let content = document.getElementById("content");
let list_content = document.getElementById("list_content");
let addButton = document.querySelector(".add");

addButton.addEventListener("click", function () {
  listContent();
});

document.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    listContent();
  }
});

function listContent() {
  if (content.value === "") {
    alert("Must Write a Message");
  } else {
    let li = document.createElement("li");

    // add a task inside li
    li.innerHTML = content.value;

    // append li inside list_content
    list_content.appendChild(li);

    // add icon to li
    let i = document.createElement("i");

    // add classList to i
    i.classList = "fa-regular fa-circle";

    //append i inside li
    li.appendChild(i);

    // add x button for delete
    let span = document.createElement("span");

    //add value inner span
    span.innerHTML = "\u00d7";

    //append span inside li
    li.appendChild(span);
    saveData();
  }
  content.value = "";
}

list_content.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveData();
  } else {
    e.target.parentElement.remove();
    saveData();
  }
});

function saveData() {
  localStorage.setItem("saved_data", list_content.innerHTML);
}

function getData() {
  list_content.innerHTML = localStorage.getItem("saved_data");
}

document.onreadystatechange = function () {
  getData();
};
