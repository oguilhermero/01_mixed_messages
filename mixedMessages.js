// Import "contents" object from dabase.js
const contents = require("./database.js");

// Store book name into an array
const books = ["Colossians", "Philippians"]

// Store chapter # into an array
const chapters = [1, 2, 3, 4]

// Store verse # into an array
const verses = [ 1,  2,  3,  4,  5,  6,  7,  8,  9,
    10, 11, 12, 13, 14, 15, 16, 17, 18,
    19, 20, 21, 22, 23, 24, 25, 26, 27,
    28, 29, 30 ]
    
//Pickup random book
const randomBook = () => {
    let bookNum = books.length;
    let num = Math.floor(Math.random() * bookNum);
    return books[num];
};

// Pickup random chapter
const randomChapter = () => {
    let chapterNum = chapters.length;
    let num = Math.floor(Math.random() * chapterNum);
    return chapters[num];
};

let reference = "";
let finalText = "";
let bookChapterArray = [];
let selectBook = randomBook();
let selectChapter = randomChapter();
for(let i = 0; i < contents.length; i++){
    if (contents[i].book === selectBook && contents[i].chapter === selectChapter){
        bookChapterArray.push(contents[i]);
    }
}
const randomVerse = () => {
    let verseNum = bookChapterArray.length;
    let num = Math.floor(Math.random() * verseNum);
    return bookChapterArray[num].verse;
}
let selectVerse = randomVerse();
let selectText = bookChapterArray[selectVerse - 1].text;
let selectReference = `${selectBook} ${selectChapter}:${selectVerse}`;

console.log(selectReference);
console.log(selectText);