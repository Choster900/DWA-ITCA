document.getElementById('add-book').addEventListener('click', addBook);
document.getElementById('search-books').addEventListener('click', searchBooks);

let books = [];

function addBook() {
    const title = document.getElementById('book-title').value;
    const author = document.getElementById('book-author').value;
    const genre = document.getElementById('book-genre').value;

    if (title && author && genre) {
        const book = { title, author, genre };
        books.push(book);
        renderBooks();
        clearInputs();
    }
}

function editBook(index) {
    const newTitle = prompt('Nuevo título:', books[index].title);
    const newAuthor = prompt('Nuevo autor:', books[index].author);
    const newGenre = prompt('Nuevo género:', books[index].genre);

    if (newTitle && newAuthor && newGenre) {
        books[index] = { title: newTitle, author: newAuthor, genre: newGenre };
        renderBooks();
    }
}

function removeBook(index) {
    books.splice(index, 1);
    renderBooks();
}

function searchBooks() {
    const query = document.getElementById('search-query').value.toLowerCase();
    const filteredBooks = books.filter(book => 
        book.title.toLowerCase().includes(query) ||
        book.author.toLowerCase().includes(query) ||
        book.genre.toLowerCase().includes(query)
    );
    renderBooks(filteredBooks);
}

function renderBooks(filteredBooks = books) {
    const booksList = document.getElementById('books-list');
    booksList.innerHTML = '';
    filteredBooks.forEach((book, index) => {
        const li = document.createElement('li');
        li.innerHTML = `${book.title} - ${book.author} - ${book.genre} 
            <button onclick="editBook(${index})">Editar</button>
            <button onclick="removeBook(${index})">Eliminar</button>`;
        booksList.appendChild(li);
    });
}

function clearInputs() {
    document.getElementById('book-title').value = '';
    document.getElementById('book-author').value = '';
    document.getElementById('book-genre').value = '';
}
