
let myLibrary = [];

function Book(title,author,noOfPages,readingStatus){
    this.title = title,
    this.author = author,
    this.noOfPages = noOfPages,
    this.readingStatus = readingStatus;
}

Book.prototype.info = function(){
    return `${this.title} by ${this.author}, ${this.noOfPages},  ${this.readingStatus}`
}
