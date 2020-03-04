let input = document.getElementById("userinput");
let ul = document.querySelector("ul");
let button = document.getElementById("enter");

function createListElement() {
  let newDiv = document.createElement("div");
  ul.appendChild(newDiv);
  let newLi = document.createElement("li");
  newLi.appendChild(document.createTextNode(input.value));
  //append list element in newDiv
  newDiv.appendChild(newLi);
  //create coresponding delbutton
  let delBtn = document.createElement("button");
  delBtn.appendChild(document.createTextNode("delete"));
  delBtn.addEventListener("click", () => newDiv.removeChild(newLi));
  newLi.appendChild(delBtn);
  //clean input field
  input.value = "";
}

//add List after click
button.addEventListener("click", () => {
  if (input.value.length > 0 && input.value.replace(/\s/g, ""))
    createListElement();
});

//add list after keypress
input.addEventListener("keypress", event => {
  if (
    input.value.length > 0 &&
    event.keyCode === 13 &&
    input.value.replace(/\s/g, "")
  )
    createListElement();
});
