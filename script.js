const addBookBtn = document.querySelector(".addbook");
const myModal = document.querySelector(".my-modal");
const bookModal = document.querySelector(".book-card-modal");
const closeButton = document.querySelector(".top-banner");
const submitButton = document.querySelector(".submit-button");
const bookShelf = document.querySelector(".card-container");

addBookBtn.addEventListener("click", () => {
  newBook();
});

function newBook() {
  myModal.style.visibilty = "visible";
}

closeButton.onclick = function () {
  myModal.style.display = "none";
  clearModal();
};

addBookBtn.onclick = function () {
  myModal.style.display = "block";
};
function addReadButtonEventListeners() {
  const readButtons = document.querySelectorAll(".read-button");
  readButtons.forEach((button) => {
    button.addEventListener("click", changeColor);
  });
}

//Adding two books to test render the library
let myLibrary = [
  {
    title: "Harry Potter",
    author: "J.K Rowling",
    pages: 1403,
    isRead: true,
  },
  {
    title: "Breath of the Wild",
    author: "Hajime Miyomoto",
    pages: 827,
    isRead: false,
  },
];

//Book object constructor
function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
}

submitButton.onclick = addBookToLibrary;

function addBookToLibrary() {
  let bookName = document.querySelector("#book-title").value;
  let bookAuthor = document.querySelector("#book-author").value;
  let bookPages = document.querySelector("#book-pages").value;
  let readStatus = document.querySelector("#isred").checked;

  myLibrary.push(new Book(bookName, bookAuthor, bookPages, readStatus));
  myModal.style.display = "none";
  clearModal();
  displayBooks();
}

//Closes Modal
function clearModal() {
  document.querySelector("#book-title").value = "";
  document.querySelector("#book-author").value = "";
  document.querySelector("#book-pages").value = "";
  document.querySelector("#isred").checked = false;
}

//Renders the library
function displayBooks() {
  bookShelf.innerHTML = "";

  myLibrary.forEach((book) => {
    const newBook = createBookElement(book);
    bookShelf.appendChild(newBook);
  });

  addReadButtonEventListeners();
  colorMe();
}

function createBookElement(book) {
  const newBook = document.createElement("div");
  newBook.classList.add("card");
  newBook.innerHTML = `
        <h3 class="book-title">${book.title}</h3>
        <p>by</p>
        <p class="book-author">${book.author}</p>
        <p class="book-page">${book.pages} pages</p>
        <div class="read-button">${book.isRead ? "read" : "unread"}</div>
        <button class="close-button" onclick="removeBook('${book.title}')">&#10006;</button>
      `;
  return newBook;
}

colorMe();

//Toggles color;
function changeColor(event) {
  const targetButton = event.target;
  targetButton.textContent = toggleReadStatus(targetButton.textContent.trim().toLowerCase());
  colorMe();
}

function toggleReadStatus(status) {
  return status === "read" ? "unread" : "read";
}

// Remove Book

function removeBook(title) {
  myLibrary = myLibrary.filter((book) => book.title !== title);
  displayBooks();
}
function colorMe() {
  const readButtons = document.querySelectorAll(".read-button");
  readButtons.forEach((button) => {
    if (button.textContent === "read") {
      button.classList.add("has-read");
      button.classList.remove("has-not-read");
    } else {
      button.classList.add("has-not-read");
      button.classList.remove("has-read");
    }
  });
}

// Checks status of book and adds button color.

//

displayBooks();
