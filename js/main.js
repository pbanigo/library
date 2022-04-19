document.getElementById('form').style.display = 'none';//Hide form on start
document.getElementById('hideform').style.display = 'none';
//Add a “NEW BOOK” button that brings up a form allowing users to input the details for the new book: //author, title, number of pages, whether it’s been read and anything else you might want.
function bookForm(){
    document.getElementById('form').style.display = 'block';
    document.getElementById('hideform').style.display = 'block';
    document.getElementById('bookform').style.display = 'none';
    
}
function hideForm(){
    document.getElementById('form').style.display = 'none';
    document.getElementById('bookform').style.display = 'block';
    document.getElementById('hideform').style.display = 'none';    
}

function clearCards() {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.remove();
  });
}
function updateCardIds(){
    let count = 0;
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.id = `data-${count}`;
        count += 1;
  });
    // for (let i = 0; i < myLibrary.length; i++) {
    //     card.id = `data-${i}`;
    // }
}
//Add a button on each book’s display to change its read status.
//create the function that toggles a book’s read status on your Book prototype instance.



let myLibrary = JSON.parse(localStorage.getItem("allEntries"));//Pick all items from localStorage
const container = document.querySelector('#books');//Assign our book container to it's div
if(myLibrary == null) {//if item parsed from local storage is empty
    myLibrary = []; //assign library to an empty array
    let idNum = 0;// Initialize IdNum
} else {
    //display all items in library on cards
    let idNum = Number(localStorage.getItem("idNum"));
    displayBooks();
}
//Write a function that loops through the array and displays each book on the page. #You can display them in some sort of table, or each on their own “card”. 
function displayBooks(){
    for (let i = 0; i < myLibrary.length; i++) {
        let item = myLibrary[i]; //.idNo should give number to use?
        createCard(item.idNo,item.title,item.author,item.pages)// run the create card function for each object in my Library
    }
}
function countBooks(){
    document.getElementById('count').textContent = `Your Library has ${myLibrary.length} books`;
}
countBooks()//Show number of books in library on load

class Book {
    constructor(idNo, title, author, pages){
        this.idNo = idNo
        this.title = title
        this.author = author
        this.pages = pages
        //this.read = read
    }
}
function createCard (idNo,title,author, pages){//function to create a card div
    const card = document.createElement('div');
    card.classList.add("card");
    //One easy solution is giving them a data-attribute that corresponds to the index of the library array.
    card.id = `data-${idNo}`;
    //You will need to associate your DOM elements with the actual book objects in some way. 
    const cardId = idNo;
    const p1 = document.createElement("p");
    p1.textContent = `Title is ${title}`;
    const p2 = document.createElement("p");
    p2.textContent = `Pages are ${pages}`
    const p3 = document.createElement("p");
    p3.textContent = `Author is ${author}`   
    const button = document.createElement('button');
    const checkBox = document.createElement("input");
    checkBox.setAttribute("type", "checkbox");

    //Add a button on each book’s display to remove the book from the library.
    button.textContent = `Remove Book`;
    button.className = 'form-control'; 
    button.onclick = function(){
        console.clear();
       // updateCardIds(); //
        document.getElementById(`data-${cardId}`).remove(); 
        console.log(`${myLibrary.length} after card ${cardId} removed`);
        myLibrary = myLibrary.filter(function(el) { return el.idNo != cardId; }); 
       // myLibrary.splice(cardId, 1); //removes the wrong thing
        console.log(`${myLibrary.length} after card ${cardId} splice`);
    if(myLibrary.length > 0) {//if anything in library, save in localStorage
        localStorage.setItem("allEntries", JSON.stringify(myLibrary)); 
} else {//else delete the library from localStorage
    localStorage.removeItem("allEntries");
    localStorage.removeItem("idNum");
}
countBooks();
return false;
};
card.appendChild(p1);
card.appendChild(p3);
card.appendChild(p2);
card.appendChild(checkBox);
card.appendChild(button);
container.appendChild(card);
//idNum += 1;

}


//add a function to the script  that can take user’s input and store the new book objects into an array. 
function addBookToLibrary() {

    let idNum = Number(localStorage.getItem("idNum"));  
    idNum+=1;
    let bookTitle = document.getElementById('title').value;
    let bookAuthor = document.getElementById('author').value;
    let bookPages = document.getElementById('pages').value;
    if (bookTitle=="" ||bookAuthor==""||bookPages=="") {
        alert("You need to fill in all fields!")
    } else {

        const newBook = new Book(idNum,bookTitle,bookAuthor,bookPages);
        myLibrary.push(newBook);
        localStorage.setItem("allEntries", JSON.stringify(myLibrary));
        localStorage.setItem("idNum", idNum);
        let card = createCard(idNum,bookTitle,bookAuthor,bookPages);
    }
    countBooks();//update number after adding new book

}
