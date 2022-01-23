// The global array bookList is not changed inside either function. The add function should add the given bookName to the end of the array passed to it and return a new array (list). The remove function should remove the given bookName from the array passed to it.

var bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

function add (list, bookName) {
 let newList = [...list];// this will not alter the original List array
 newList.push(bookName);
  console.log(newList);
  return newList;
}

function remove (list, bookName) {
    let newList = [...list]; // this will not alter the original List array
  var book_index = newList.indexOf(bookName);
  console.log(newList);
  if (book_index >= 0) {
   newList.splice(book_index, 1);
    return newList;
    }
}

var newBookList = add(bookList, 'A Brief History of Time');
var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
var newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');

console.log(bookList);