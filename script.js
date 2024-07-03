const submit = document.getElementById("submit").addEventListener("click", addBookToLibrary)
const bookshelf = document.getElementById("bookshelf")

const myLibrary = []

//constructor function to compile new object and push to library
function Books(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

//retrieve input and use the 'Books' object constructor to create a new book on the shelf.
function addBookToLibrary() {
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    const read = document.getElementById("read").value == "read";
    if (title && author && pages) {
        const newBook = new Books(title, author, pages, read)
        myLibrary.push(newBook)
    }
    update()
}

function update() {
    bookshelf.innerHTML = myLibrary.map((_, index) => `<div class="book" id="${index}">${myLibrary[index].title} by ${myLibrary[index].author}, ${myLibrary[index].pages} pages, ${myLibrary[index].read ? "has been read." : "has not been read."}</div><button id="toggle" class="${myLibrary[index].read}" onclick="toggleRead(${index})"> + </button><button id="remove" onclick="removeBook(${index})"> X </button>`).join('')
}

function removeBook(index) {
    myLibrary.splice(index, 1)
    update()
}

function toggleRead(index) {
    myLibrary[index].read ? myLibrary[index].read = false : myLibrary[index].read = true;
    update()
}


