// MENU

let navbar = document.querySelector(".header .navbar");

document.querySelector("#menu-btn").onclick = () => {
  navbar.classList.toggle("active");
};

window.onscroll = () => {
  navbar.classList.remove("active");
};

document
  .querySelectorAll(".about .video-container .controls .control-btn")
  .forEach((btn) => {
    btn.onclick = () => {
      let src = btn.getAttribute("data-src");
      document.querySelector(".about .video-container .video").src = src;
    };
  });

// INPUT VALID DATE AND NUMBER

const form = document.getElementById("form");
form.addEventListener("submit", submitHandler);
function submitHandler(ev) {
  let name = document.getElementById("name").value;

  let date = document.getElementById("date").value;

  let number = document.getElementById("number").value;

  ev.preventDefault();

  console.log(`User name: ${name}`);
  console.log(`Appointment date: ${date} `);
  console.log(`Number of potential projects: ${number}`);

  if (name !== "" && date !== "" && number !== "") {
    alert(
      "Your apointment added successful at our database. We will contact you soon! Kind regards!"
    );
    console.log("Successful added in database.");
  } else {
    console.log("Data is required!!!");
    alert("Data is required. Please insert valid data!");
  }
}

// SUBSCRIBE TO EMAIL NEWSLETTER

const formNews = document.getElementById("form-news");
formNews.addEventListener("submit", formNewsHandler);
function formNewsHandler(ev) {
  ev.preventDefault();
  let email = document.getElementById("email").value;
  localStorage.setItem("value", email);
  console.log(localStorage.getItem("value"));
  console.log(`User email who subscribe for newsletter is: ${email}`);
  console.log("Email was successful added.");
}

// SEARCH BUTTON

function searchData() {
  var searchData = document.getElementById("search-data").value;
  console.log(searchData);
}

// ADDING SERVICES list items

const addButton = document.querySelector(".addButton");
var input = document.querySelector(".input");
const container = document.querySelector(".container");

class item {
  constructor(itemName) {
    this.createDiv(itemName);
  }

  createDiv(itemName) {
    let input = document.createElement("input");
    input.value = itemName;
    input.disabled = true;
    input.classList.add("item_input");
    input.type = "text";

    let itemBox = document.createElement("div");
    itemBox.classList.add("item");

    let editButton = document.createElement("button");
    editButton.innerHTML = "Edit";
    editButton.classList.add("editButton");

    let saveButton = document.createElement("button");
    saveButton.innerHTML = "Save";
    saveButton.classList.add("saveButton");

    let removeButton = document.createElement("button");
    removeButton.innerHTML = "Remove";
    removeButton.classList.add("removeButton");

    container.appendChild(itemBox);

    itemBox.appendChild(input);
    itemBox.appendChild(editButton);
    itemBox.appendChild(removeButton);
    itemBox.appendChild(saveButton);

    editButton.addEventListener("click", () => this.edit(input));
    removeButton.addEventListener("click", () => this.remove(itemBox));
    saveButton.addEventListener("click", () => this.save(input));
  }
  edit(input) {
    input.disabled = !input.disabled;
  }
  remove(item) {
    container.removeChild(item);
  }
  save(input) {
    input = "";
    console.log("Data is added!!!");
  }
}
function check() {
  if (input.value != "") {
    new item(input.value);
    input.value = "";
  }
}

addButton.addEventListener("click", check);
window.addEventListener("keydown", (e) => {
  if ((e = "")) {
    check();
  }
});
