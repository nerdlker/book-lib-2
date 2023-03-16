const BUTTON = document.querySelector(".addbook");
const bookModal = document.querySelector(".book-card-modal");

BUTTON.addEventListener("click", () => {
  newBook();
});

function newBook() {
  bookModal.style.display = "block";
}
