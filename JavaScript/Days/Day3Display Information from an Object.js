function displayInformation() {
    // var library is defined, use it to print the information
    for (var i = 0; i < library.length; i++) {
        var book = library[i];
        var readingStatus = book.readingStatus ? "Already read '" : "You still need to read '";
        console.log(readingStatus + book.title + "' by " + book.author + ".");
        //console.log(library);
    }
}

// tail starts here
var library = [
    {
        title: 'Bill Gates',
        author: 'The Road Ahead',
        readingStatus: true
    },
    {
        title: 'Steve Jobs',
        author: 'Walter Isaacson',
        readingStatus: true
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        readingStatus: false
    }
];

displayInformation();