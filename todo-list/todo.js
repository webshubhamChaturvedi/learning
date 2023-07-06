"use strict";

let userInput = document.getElementById("UserInput");
let addTodo = document.querySelector(".addbtn");
let AppendList;
let Inputvalue;
let TodoList = document.querySelector(".TodoList");
addTodo.addEventListener("click", function () {
  if (userInput.value != "") {
    Inputvalue = userInput.value;
    AppendList = `<li><span>${Inputvalue} </span> <div><span id="edit" class="edittodo" onclick="EditTodo(this)">Edit</span> <span class="delete" id="deletetodo" onclick="deleteTodo(this)">Delete</span></div></li>`;
    TodoList.innerHTML += AppendList;
    userInput.value = "";
  } else {
    alert("Please Enter the Value");
  }
});

function deleteTodo(el) {
  el.parentElement.parentElement.remove();
}
function EditTodo(el) {
  document.getElementById("UserInput").value =
    el.previousElementSibling.innerHTML;
  console.log(
    el.parentElement.previousElementSibling,
    el.parentElement.previousElementSibling
  );
}
// function EditTodo(el) {
//   el.parentElement.parentElement.remove();
//   userInput.value = el.parentElement;
// }
