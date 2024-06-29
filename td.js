const ip = document.getElementById("ip");
const list = document.getElementById("list");
function addItem() {
  if (ip.value === "") {
    alert("You must write something!");
  } else {
    let item = document.createElement("li");
    item.innerHTML = ip.value;
    list.appendChild(item);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    item.appendChild(span);
  }
  ip.value = "";
  saveData();
}

list.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  true
);
ip.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    addItem();
  }
});
let currentitem = null;
list.addEventListener("mouseover", (e) => {
  if (e.target.tagName === "LI") currentitem = e.target;
});
list.addEventListener("mouseout", (e) => {
  if (e.target.tagName === "LI") currentitem = null;
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Delete" && currentitem) {
    currentitem.remove();
    currentitem = null;
  }
});
function saveData() {
  localStorage.setItem("data", list.innerHTML);
}

function showItem() {
  list.innerHTML = localStorage.getItem("data");
}
showItem();
