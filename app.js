let myLibrary = [];

const addButton = document.querySelector("#add-btn");
const bookLibrary = document.querySelector('.book-library');
const removeAllButton = document.querySelector("#remove-all-btn");
const showModalBtn = document.querySelector("#show-modal-btn");
const modalContainer = document.querySelector(".modal-container");
const closeModalBtn = document.querySelector("#close-modal-btn");
const addBookBtn = document.querySelector("#add-book-btn");
const bookTitle = document.querySelector("#title-book");
const bookAuthor = document.querySelector("#author-book");
const bookPages = document.querySelector("#pages-book");

if (myLibrary.length !== 0) {
  isReadedBtn.addEventListener("click", bookReaded);
}

modalContainer.style.display = "none";

function Book(title, author, pages) {
  this.title = title;
  this.pages = pages;
  this.author = author;

}

Book.prototype.isReaded = false;
Book.prototype.isReadedState = "Read";

function addBookToLibrary() {
  myLibrary.push(new Book(bookTitle.value, bookAuthor.value, bookPages.value));
  buildLibrary(myLibrary);
  modalContainer.style.display = "none";
  bookTitle.value = "";
  bookAuthor.value = "";
  bookPages.value = "";
}

function buildLibrary(data) {
  bookLibrary.innerHTML = "";
  for (var i = 0; i < data.length; i++) {
    let htmlBook = `
      <div>
        <h1>${data[i].title}</h1>
        <h5>${data[i].author}</h5>
        <p>${data[i].pages} pages</p>
        <button id = "read-btn"  onclick="bookReaded(${i})">${data[i].isReadedState}</button>
        <button id = "delete-btn" onclick="deleteBook(${i})">✖</button>
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

function showModal() {
  modalContainer.style.display === "none" ?
    modalContainer.style.display = "block" :
    modalContainer.style.display = "none";
}

function closeModal() {
  modalContainer.style.display = "none";
}

function bookReaded(indexOfBook) {
  myLibrary[indexOfBook].isReaded = !myLibrary[indexOfBook].isReaded;
  myLibrary[indexOfBook].isReaded === true ?
    myLibrary[indexOfBook].isReadedState = "Readed ✓" :
    myLibrary[indexOfBook].isReadedState = "Read";

  buildLibrary(myLibrary);
}

window.addEventListener('mouseup', function(event) {
  if (event.target != modalContainer && event.target.parentNode != modalContainer) {
    closeModal();
  }
});

addButton.addEventListener("click", showModal);
addBookBtn.addEventListener("click", addBookToLibrary);
removeAllButton.addEventListener("click", deleteAllBooks);
closeModalBtn.addEventListener("click", closeModal);
