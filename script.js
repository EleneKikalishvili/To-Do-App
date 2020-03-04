var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var button = document.getElementById("enter");

function createListElement() {
  var newDiv = document.createElement("div");
  ul.appendChild(newDiv);
  var newLi = document.createElement("li");
  newLi.appendChild(document.createTextNode(input.value));
  //append list element in newDiv
  newDiv.appendChild(newLi);
  //create coresponding delbutton
  var delBtn = document.createElement("button");
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
