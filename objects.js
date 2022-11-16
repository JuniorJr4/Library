const title = document.querySelector(".title");
const author = document.querySelector(".author");
const pages = document.querySelector(".pages");
const read = document.querySelector("read");
const bookForm = document.getElementById("bookForm");
const bookCardContainer = document.querySelector('.book-card-container');

let myLibrary = [];
let newBook;

bookForm.addEventListener("submit", addBookToLibrary);

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(e) {
  e.preventDefault();
  const myNewBook = new FormData(e.target);
  const newBookObj = Object.fromEntries(myNewBook.entries());
  myLibrary.push(newBookObj);
  title.textContent = JSON.stringify(newBookObj, null, 2);
  console.log(myLibrary);
  console.log(typeof(myLibrary));
  console.log(myNewBook);
  newBookCard(newBookObj);
}

function newBookCard(book) {
    const cardDiv = document.createElement('div');
    cardDiv.classList.add("book-card");
    cardDiv.setAttribute('data-index', myLibrary.indexOf(book));
    bookCardContainer.appendChild(cardDiv);

    const newTitle = document.createElement('div');
    newTitle.textContent = 'Book Title: ' + book.title;
    cardDiv.appendChild(newTitle);

    const newAuthor = document.createElement('div');
    newAuthor.textContent = 'Author: ' + book.author;
    cardDiv.appendChild(newAuthor);

    const newPages = document.createElement('div');
    newPages.textContent = 'Total Pages: ' + book.pages;
    cardDiv.appendChild(newPages);

    const newSwitchLabel = document.createElement('label');
    newSwitchLabel.classList.add('tog', 'round');
    const newSwitchInput = document.createElement('input');
    newSwitchInput.setAttribute('type', 'checkbox');
    newItalicEl = document.createElement('i')
    cardDiv.appendChild(newSwitchLabel);
    newSwitchLabel.appendChild(newSwitchInput);
    newSwitchLabel.appendChild(newItalicEl);
}
