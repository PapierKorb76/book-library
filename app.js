let myLibrary = [];

const addButton = document.querySelector("#add-btn");
const bookLibrary = document.querySelector('.book-library');
const removeAllButton = document.querySelector("#remove-all-btn");

function Book(title, author, pages) {
  this.title = title;
  this.pages = pages;
  this.author = author;
}

function addBookToLibrary() {
  let element = document.createElement('div');
  let title = document.createElement('h1');
  let author = document.createElement('h5');
  let pages = document.createElement('p');
  let deleteButton = document.createElement("button");
  title.textContent = window.prompt("Title: ");
  author.textContent = window.prompt("Author: ");
  pages.textContent = window.prompt("Pages: ");
  myLibrary.push(new Book(title.textContent, author.textContent, pages.textContent));
  buildLibrary(myLibrary);
}

function buildLibrary(data) {
  bookLibrary.innerHTML = "";
  for (var i = 0; i < data.length; i++) {
    let htmlBook = `
      <div>
        <h1>${data[i].title}</h1>
        <h5>${data[i].author}</h5>
        <p>${data[i].pages} pages</p>
        <button onclick="deleteBook(${i})">✖</button>
      </div>
      `
    bookLibrary.insertAdjacentHTML('beforeend', htmlBook);
  }
}

function deleteBook(indexOfBook) {
  myLibrary.splice(indexOfBook, 1);
  buildLibrary(myLibrary);
}

function deleteAllBooks(indexOfBook) {
  myLibrary.splice(indexOfBook, myLibrary.length);
  buildLibrary(myLibrary);
}

addButton.addEventListener("click", addBookToLibrary);
removeAllButton.addEventListener("click", deleteAllBooks);
