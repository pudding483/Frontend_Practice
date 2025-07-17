const input = document.getElementById("toDoInput");
const addBtn = document.getElementById("addButton");
const toDoList = document.querySelector(".bulletin .toDoList");

// If there's more than 1 checkBox, it will get a HTMLCollection
// To handle it, we can change HTMLCollection to array
// Such as : Array.from(checkBoxes).forEach((checkBox) ...
// const checkBoxes = document.getElementsByClassName("checkBox");

/* No need to store info, abandon this function
addBtn.addEventListener("click", () => {
  const toDo = input.value.trim();
  // store unfinish and input todo things
  const display = [];
  // use toDoList to clean old toDoItem
  const toDoList = document.querySelector(".bulletin .toDoList");
  const toDoItems = document.querySelectorAll(".toDoItem");

  // store old toDoItem in display array
  toDoItems.forEach((el) => {
    // bad one, will add button.innerText
    display.push(el.innerText);
  });
  // console.log(toDoItems);
  if (toDo) display.push(toDo);
  // reset input
  input.value = "";

  // remove old toDoItem (retain topic and innerButton)
  toDoItems.forEach((el) => toDoList.removeChild(el));

  display.forEach((backlog) => {
    addNode(backlog, toDoList);
  });
});
*/

/**
 * 新增 toDoItem
 * @param {string} backlog - 代辦事項(文字)
 */
function addNode(backlog) {
  // position : checkBox <-> toDoThing <-> deleteBtn
  const toDoItem = document.createElement("div");
  // leftBox use for checkBox + toDoThing layout
  const leftBox = document.createElement("div");

  const checkBox = document.createElement("input");
  const toDoThing = document.createElement("p");
  const deleteBtn = document.createElement("button");

  toDoItem.className = "toDoItem";
  leftBox.className = "leftBox";

  checkBox.type = "checkBox";
  checkBox.name = "toDoDone";
  checkBox.className = "checkBox";

  toDoThing.className = "toDo";
  toDoThing.innerText = backlog;

  deleteBtn.className = "deleteButton";
  deleteBtn.innerText = "X";

  leftBox.appendChild(checkBox);
  leftBox.appendChild(toDoThing);

  toDoItem.appendChild(leftBox);
  toDoItem.appendChild(deleteBtn);

  toDoList.appendChild(toDoItem);
}

/**
 * 增加文字樣式 (完成打勾後文字劃掉)
 * @param {HTMLInputElement} checkBox - 是否完成打勾
 */
function checkDone(checkBox) {
  // const checkBox = /** @type {HTMLInputElement} */ (event.target);
  const leftBox = checkBox.parentElement;
  const toDo = leftBox.querySelector(".toDo");
  toDo.style.textDecorationLine = checkBox.checked ? "line-through" : "none";
}

/**
 * 刪除 toDoItem
 * @param {HTMLButtonElement} deleteBtn - 點擊後刪除該事項
 */
function deleteNode(deleteBtn) {
  const toDoItem = deleteBtn.parentElement;
  toDoItem.remove();
}

addBtn.addEventListener("click", () => {
  // type of toDo is string
  const toDo = input.value.trim();
  addNode(toDo);
  // reset input column
  input.value = "";
});

/**
 * 對 toDoList 做 change 事件委派
 */
toDoList.addEventListener("change", (event) => {
  if (event.target.matches(".checkBox")) {
    checkDone(event.target);
  }
});

/**
 * 對 toDoList 做 click 事件委派
 */
toDoList.addEventListener("click", (event) => {
  if (event.target.matches(".deleteButton")) {
    deleteNode(event.target);
  }
});
