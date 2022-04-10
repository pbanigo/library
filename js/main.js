let myLibrary = [];

class Book {
    constructor(title, pages){
        this.title = title;
        this.pages = pages;
        //this.read = read
    }
}
function addBookToLibrary() {
    for (let i = 0; i < 5; i++) {
    const orwell = new Book('1984',265);
    myLibrary.push(orwell);
    }
    alert(myLibrary);
}

//add a function to the script  that can take user’s input and store the new book objects into an array. 
//Write a function that loops through the array and displays each book on the page. #You can display them in some sort of table, or each on their own “card”. 
//Add a “NEW BOOK” button that brings up a form allowing users to input the details for the new book: //author, title, number of pages, whether it’s been read and anything else you might want.
//Add a button on each book’s display to remove the book from the library.
//You will need to associate your DOM elements with the actual book objects in some way. 
//One easy solution is giving them a data-attribute that corresponds to the index of the library array.
//Add a button on each book’s display to change its read status.
//create the function that toggles a book’s read status on your Book prototype instance.