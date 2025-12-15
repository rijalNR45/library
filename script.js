function Books 
  (title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }


const book1 = new Books(
    "inverting the pyramid",
    "gregory dunn",
    300,
    false
);
console.log(book1);
