
// EX1
const firstButton = document.getElementById("submitButton");
firstButton.addEventListener("click", function() {
  const inputField = document.getElementById("inputField");
  const greeting = document.getElementById("greeting");
  greeting.innerHTML = inputField.value;
  greeting.classList.add("spin");
  event.preventDefault();
});
greeting.addEventListener("transitionend", function() {
    greeting.classList.remove("spin");
    event.preventDefault();
  });

// EX2
let counter = 0;
  const countButton = document.getElementById("add-counter");
countButton.addEventListener("click", function() {
    counter++
    const paragraphContent = document.getElementById("counter");
    paragraphContent.innerHTML = counter;
    paragraphContent.style.fontSize = counter.toString() + 'px';
    event.preventDefault();
})    

// EX4
function changeHeader() {
  document.getElementById('header').innerHTML = 'i am changed';
  event.preventDefault();
}
addEventListener(onload ,changeHeader());

// EX5
const submitButton = document.getElementById('button');
submitButton.addEventListener('click', function() {
  if(document.getElementById('textInput').value == ''){
    alert('please fill the text box before you submit');
  }
  event.preventDefault();
})

// EX6
const helloButton = document.getElementById('hello');
helloButton.addEventListener('click', function() {
  console.log('hello');
  event.preventDefault();
})
const goodbyeButton = document.getElementById('goodbye');
goodbyeButton.addEventListener('click', function() {
  console.log('goodbye');
  event.preventDefault();
})

// EX7
const form = document.getElementById("todoForm");
form.addEventListener("submit", function(event) {
  event.preventDefault();
  const input = document.getElementById("todoInput");
  const todo = input.value;
  input.value = "";
  const list = document.getElementById("todoList");
  const item = document.createElement("li");
  item.innerHTML = `<input type="checkbox">` + todo;
  list.appendChild(item);
});
const listRemove = document.getElementById("todoList");
listRemove.addEventListener("click", function(event) {
  if (event.target.tagName === "LI") {
    event.target.remove();
  }
});

