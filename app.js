let myLibrary = [];

const addButton = document.querySelector("#add-btn");
const bookLibrary = document.getElementById('book-library');

function Book(name, pages, author) {
  this.name = name;
  this.pages = pages;
  this.author = author;
}

Book.prototype.info = function (){
  	return `This book is called ${this.name} and was written by ${this.author}, it has ${this.pages} pages`
  }
Book.prototype.input = function (){
  	this.name = window.prompt("Input the name of your book");
    this.author = window.prompt("Input the autor of your book");
    this.pages = window.prompt("Input the number of pages of your book");
}
  
let book1 = new Book();
book1.input();

console.log(book1.info());
function addBookToLibrary() {
  
}

addButton.addEventListener("click", () => {
	let element = document.createElement('div');
  let title = document.createElement('h1');
  title.textContent = window.prompt("Header: ");
  bookLibrary.appendChild(element);
  element.appendChild(title);
});