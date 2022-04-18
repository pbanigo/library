document.getElementById('form').style.display = 'none';//Hide form on start
//Add a “NEW BOOK” button that brings up a form allowing users to input the details for the new book: //author, title, number of pages, whether it’s been read and anything else you might want.
function bookForm(){
    document.getElementById('form').style.display = 'block';
    
}



//Add a button on each book’s display to remove the book from the library.
//You will need to associate your DOM elements with the actual book objects in some way. 
//One easy solution is giving them a data-attribute that corresponds to the index of the library array.
//Add a button on each book’s display to change its read status.
//create the function that toggles a book’s read status on your Book prototype instance.


let myLibrary = JSON.parse(localStorage.getItem("allEntries"));//Pick all items from localStorage
const container = document.querySelector('#books');//Assign our book container to it's div
if(myLibrary == null) {//if item parsed from local storage is empty
    myLibrary = []; //assign library to an empty array
} else {
    //display all items in library on cards
    displayBooks();
}
//Write a function that loops through the array and displays each book on the page. #You can display them in some sort of table, or each on their own “card”. 
function displayBooks(){
    for (let i = 0; i < myLibrary.length; i++) {
        let item = myLibrary[i];
        createCard(item.title,item.author,item.pages)// run the create card function for each object in my Library
    }

}

document.querySelector('p').textContent = `Your Library has ${myLibrary.length} books`;//Show books in library
let idNum = 1;

class Book {
    constructor(title, author, pages){
        this.title = title
        this.author = author
        this.pages = pages
        //this.read = read
    }
}



// function removeBook(){

// }
function createCard (title,author, pages){//function to create a card div
    
    const card = document.createElement('div');
    card.classList.add("card");
    const p1 = document.createElement("p");
    p1.textContent = `Title is ${title}`;
    const p2 = document.createElement("p");
    p2.textContent = `Pages are ${pages}`
    const p3 = document.createElement("p");
    p3.textContent = `Author is ${author}`   
    const button = document.createElement('button');
    button.textContent = `Remove Book`;
    button.className = 'form-control'; 
    button.onclick = function removeBook(){}; 
    card.appendChild(p1);
    card.appendChild(p3);
    card.appendChild(p2);
    card.appendChild(button);
    container.appendChild(card);
    }


//add a function to the script  that can take user’s input and store the new book objects into an array. 
function addBookToLibrary() {
    let bookTitle = document.getElementById('title').value;
    let bookAuthor = document.getElementById('author').value;
    let bookPages = document.getElementById('pages').value;
    if (bookTitle=="" ||bookAuthor==""||bookPages=="") {
        alert("You need to fill in all fields!")
    } else {

    const newBook = new Book(bookTitle,bookAuthor,bookPages);
    myLibrary.push(newBook);
    //localStorage.setItem('book', JSON.stringify(newBook));
    localStorage.setItem("allEntries", JSON.stringify(myLibrary));
    let card = createCard(bookTitle,bookAuthor,bookPages);
    }
    document.querySelector('p').textContent = `Your Library has ${myLibrary.length} books`//update number after adding new book

    //idNum += 1;
    //idNum++;
}