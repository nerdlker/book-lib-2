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

function clearModal() {
  document.querySelector("#book-title").value = "";
  document.querySelector("#book-author").value = "";
  document.querySelector("#book-pages").value = "";
  document.querySelector("#isred").checked = false;
}

function displayBooks() {
  bookShelf.innerHTML = "";
  for (let i = 0; i < myLibrary.length; i++) {
    let newBook = document.createElement("div");

    newBook.classList.add("card");
    newBook.innerHTML = `    
    <h3 class="book-title">${myLibrary[i].title}</h3>
    <p>by</p>
    <p class="book-author">${myLibrary[i].author}</p>
    <p class="book-page"> ${myLibrary[i].pages} pages</p>
    <div class="read-button"> ${checkStatus()} </div>`;

    bookShelf.appendChild(newBook);

    function checkStatus() {
      if (myLibrary[i].isRead == true) {
        ``;
        return "read";
      } else {
        return "unread";
      }
    }
  }
}

displayBooks();
//Refactor code to clear Feilds on Addbook, Clear fields on Submit
//Render Has to be writtern
