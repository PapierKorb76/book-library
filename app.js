let myLibrary = [];

const addButton = document.querySelector("#add-btn");
const bookLibrary = document.querySelector('.book-library');

function Book(title, author, pages) {
  this.title = title;
  this.pages = pages;
  this.author = author;
}

Book.prototype.info = function() {
  return `This book is called ${this.name} and was written by ${this.author}, it has ${this.pages} pages`;
}

function addBookToLibrary() {
  let element = document.createElement('div');
  let title = document.createElement('h1');
  let author = document.createElement('h5');
  let pages = document.createElement('p');
  title.textContent = window.prompt("Title: ");
  author.textContent = window.prompt("Author: ");
  pages.textContent = window.prompt("Pages: ");
  pages.textContent += " pages";
  if(title.textContent === null){
  	return;
  }
  myLibrary.push(new Book(title.textContent.toString(), author.textContent.toString(), pages.textContent.toString()));
  bookLibrary.appendChild(element);
  element.appendChild(title);
  element.appendChild(author);
  element.appendChild(pages);
  console.log(myLibrary);
}

addButton.addEventListener("click", addBookToLibrary);