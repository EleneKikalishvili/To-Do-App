let body = document.querySelector("body");

let createform = document.createElement("form");
body.appendChild(createform);

let container = document.createElement("div");
createform.appendChild(container);
container.classList.add(
  "d-flex",
  "justify-content-center",
  "container",
  "flex-column"
);

//creating input field
let input = document.createElement("input");
input.setAttribute("type", "text");
input.setAttribute("placeholder", "enter items");
container.appendChild(input);

//creating submit button
let submitElement = document.createElement("input");
submitElement.setAttribute("type", "submit");
submitElement.classList.add("btn", "btn-primary");
container.appendChild(submitElement);

//creating ul element
let ul = document.createElement("ul");
ul.classList.add("mt-auto", "list");
container.appendChild(ul);

function createListElement() {
  let newDiv = document.createElement("div");
  ul.appendChild(newDiv);
  newDiv.classList.add("form-inline", "mt-auto", "p-2");
  let newLi = document.createElement("li");
  newLi.appendChild(document.createTextNode(input.value));
  //append list element in newDiv
  newDiv.appendChild(newLi);
  //clean input field
  input.value = "";

  //create rename button
  let renBtn = document.createElement("button");
  renBtn.classList.add("btn", "btn-outline-primary");
  renBtn.appendChild(document.createTextNode("rename"));
  newDiv.appendChild(renBtn);
  renBtn.addEventListener(
    "click",
    () => (newLi.innerHTML = window.prompt("make changes: "))
  );

  //create corresponding delete button
  let delBtn = document.createElement("button");
  delBtn.classList.add("btn", "btn-primary");
  delBtn.appendChild(document.createTextNode("delete"));
  newDiv.appendChild(delBtn);
  delBtn.addEventListener("click", () => ul.removeChild(newDiv));
}

createform.onsubmit = e => {
  if (input.value.length > 0 && input.value.replace(/\s/g, ""))
    createListElement();
  e.preventDefault();
};
