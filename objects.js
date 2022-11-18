const bookForm = document.getElementById("bookForm");
const bookCardContainer = document.querySelector(".book-card-container");
const addBtn = document.querySelector(".add-btn");
const myForm = document.getElementById("myForm");
const formCancelBtn = document.querySelector(".cancel");
const header = document.querySelector(".header");
const formTog = document.querySelector(".form-tog");
const togBtns = document.querySelectorAll(".tog-btn");

let myLibrary = [];

bookForm.addEventListener("submit", addBookToLibrary);
addBtn.addEventListener("click", addBookBtn);

function getToggleValue(e) {
  console.log(e.target.checked);
  e.target.checked
    ? (myLibrary[e.target.dataset.index]["read"] = "true")
    : (myLibrary[e.target.dataset.index]["read"] = "false");
  console.log(myLibrary);
}

function addBookBtn() {
  myForm.style.display = "block";
  header.style.opacity = "0.6";
  header.style.pointerEvents = "none";
  bookCardContainer.style.opacity = "0.6";
  bookCardContainer.style.pointerEvents = "none";
}

function removeBook(e) {
  myLibrary.splice(e.target.dataset.index, e.target.dataset.index + 1);
  let element = document.querySelector(`[data-index = '${e.target.dataset.index}']`);
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
  element.remove();
  console.log(myLibrary);
}

function closeForm() {
  myForm.style.display = "none";
  header.style.opacity = "1.0";
  header.style.pointerEvents = "auto";
  bookCardContainer.style.opacity = "1.0";
  bookCardContainer.style.pointerEvents = "auto";
  bookForm.reset();
}

// function Book(title, author, pages, read) {
//   this.title = title;
//   this.author = author;
//   this.pages = pages;
//   this.read = read;
// }

function addBookToLibrary(e) {
  e.preventDefault();
  const myNewBook = new FormData(e.target);
  const newBookObj = Object.fromEntries(myNewBook.entries());

  myLibrary.push(newBookObj);
  newBookCard(newBookObj);
  header.style.opacity = "1.0";
  header.style.pointerEvents = "auto";
  bookCardContainer.style.opacity = "1.0";
  bookCardContainer.style.pointerEvents = "auto";
  // console.log(myLibrary);
  // console.log(myLibrary["0"]);

  //console.log(Object.values(myLibrary[e.target.data-index]));
}

function newBookCard(book) {
  const cardDiv = document.createElement("div");
  cardDiv.classList.add("book-card");
  cardDiv.setAttribute("data-index", myLibrary.indexOf(book));
  bookCardContainer.appendChild(cardDiv);

  const newTitle = document.createElement("div");
  newTitle.textContent = "Book Title: " + book.title;
  cardDiv.appendChild(newTitle);

  const newAuthor = document.createElement("div");
  newAuthor.textContent = "Author: " + book.author;
  cardDiv.appendChild(newAuthor);

  const newPages = document.createElement("div");
  newPages.textContent = "Total Pages: " + book.pages;
  cardDiv.appendChild(newPages);

  const newSwitchLabel = document.createElement("label");
  newSwitchLabel.classList.add("tog", "round");
  const newSwitchInput = document.createElement("input");
  newSwitchInput.classList.add("tog-btn");
  newSwitchInput.setAttribute("type", "checkbox");
  newSwitchInput.setAttribute("name", "read");
  newSwitchInput.setAttribute("value", "true");
  newSwitchInput.setAttribute("data-index", myLibrary.indexOf(book));
  newItalicEl = document.createElement("i");
  formTog.checked
    ? (newSwitchInput.checked = true)
    : (newSwitchInput.checked = false);
  cardDiv.appendChild(newSwitchLabel);
  newSwitchLabel.appendChild(newSwitchInput);
  newSwitchLabel.appendChild(newItalicEl);

  const removeBookBtn = document.createElement("button");
  removeBookBtn.setAttribute("type", "button");
  removeBookBtn.setAttribute("data-index", myLibrary.indexOf(book));
  removeBookBtn.setAttribute("value", "true");
  removeBookBtn.classList.add("btn", "remove");
  removeBookBtn.textContent = "Remove";
  cardDiv.appendChild(removeBookBtn);
  removeBookBtn.addEventListener('click', removeBook);

  console.log(myLibrary);
  newSwitchInput.addEventListener("change", getToggleValue);
  closeForm();
}
