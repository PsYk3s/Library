const submit = document.getElementById("submit")
const bookshelf = document.getElementById("bookshelf")
const title = document.getElementById("title");
const author = document.getElementById("author");
const pages = document.getElementById("pages");
const read = document.getElementById("read");

const myLibrary = []

//constructor function to compile new object and push to library
class Books {
    constructor(title, author, pages, read) {
        this.title = title
        this.author = author
        this.pages = pages
        this.read = read
    }
}

function update() {
    bookshelf.innerHTML = myLibrary.map((_, index) => `<div class="book" id="${index}">${myLibrary[index].title} by ${myLibrary[index].author}, ${myLibrary[index].pages} pages, ${myLibrary[index].read ? "has been read." : "has not been read."}</div><button id="toggle" class="${myLibrary[index].read}" onclick="toggleRead(${index})"> + </button><button id="remove" onclick="removeBook(${index})"> X </button>`).join('')
}

function removeBook(index) {
    myLibrary.splice(index, 1)
    update()
}

function toggleRead(index) {
    myLibrary[index].read.value == "read" ? myLibrary[index].read = false : myLibrary[index].read = true;
    update()
}

submit.addEventListener("click", () => {
    if (title.value && author.value && pages.value) {
        const newBook = new Books(title.value, author.value, pages.value, read.value == "read")
        myLibrary.push(newBook)
        update()
    }
})