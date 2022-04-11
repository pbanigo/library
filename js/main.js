let myLibrary = [];
let idNum = 1;

class Book {
    constructor(title, pages){
        this.title = title;
        this.pages = pages;
        //this.read = read
    }
}

const container = document.querySelector('#app');
function createCard (title, pages){
    const card = document.createElement('div');
    card.classList.add("card");
    const p1 = document.createElement("p");
    p1.textContent = `Title is ${title}`

    const p2 = document.createElement("p");
    p2.textContent = `Pages are ${pages}`
    card.appendChild(p1);
    card.appendChild(p2);
    container.appendChild(card);

}

function addBookToLibrary() {
let bookTitle = document.getElementById('title').value;
let bookPages = document.getElementById('pages').value;
//document.querySelector('p').textContent = `Title is ${bookTitle} with ${bookPages} pages`;

    //const grid = document.createElement('div');
    //grid.classList.add("single");
    //grid.addEventListener('mouseenter', function changeColor(){ grid.style.backgroundColor = 'black';})
    //grid.textContent = `grid`;
    //container.appendChild(grid);
    //idNum += 1;

    const newBook = new Book(bookTitle,bookPages);
    myLibrary.push(newBook);
    createCard(bookTitle,bookPages);
    //idNum++;
    //return myLibrary;
    //console.log(myLibrary.length);
    //for (let i = 0; i < 5; i++) {
   // const orwell = new Book('1984',265);
    //myLibrary.push(orwell);
    //}
    //alert(myLibrary.length);
}

//add a function to the script  that can take user’s input and store the new book objects into an array. 
//Write a function that loops through the array and displays each book on the page. #You can display them in some sort of table, or each on their own “card”. 
//Add a “NEW BOOK” button that brings up a form allowing users to input the details for the new book: //author, title, number of pages, whether it’s been read and anything else you might want.
//Add a button on each book’s display to remove the book from the library.
//You will need to associate your DOM elements with the actual book objects in some way. 
//One easy solution is giving them a data-attribute that corresponds to the index of the library array.
//Add a button on each book’s display to change its read status.
//create the function that toggles a book’s read status on your Book prototype instance.