function fetchBooks() {
   fetch("https://anapioficeandfire.com/api/books")
  .then((resp) => resp.json())
  .then((books) => {
    books.forEach(renderBooks)
  }
)}
console.log(renderBooks)
// const fetch = document.getElementsByName("The Sworn Sword")

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}
window.renderBooks();

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
