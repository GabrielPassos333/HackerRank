

function sortLibrary() {
    // var library is defined, use it in your code
    // use console.log(library) to output the sorted library data
    library.sort((a, b) => a.title.localeCompare(b.title));

    // library.sort((a, b) => {
    //     if (a.title < b.title) {
    //         return -1;
    //     }
    //     if (a.title > b.title) {
    //         return 1;
    //     }
    //     return 0;
    // });
    console.log(library);

    //library.forEach(obj => console.log(obj.title, obj.author, obj.libraryID));


    // library.forEach(obj => {obj.sno = obj.title.charCodeAt(0); })
    // library.sort((a,b) => a.sno - b.sno)
    // library.forEach(obj => { delete obj.sno; })
    // console.log(library)
}

// tail starts here
var library = [
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        libraryID: 1254
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        libraryID: 4264
    },
    {
        author: 'Suzanne Collins',
        title: 'Mockingjay: The Final Book of The Hunger Games',
        libraryID: 3245
    }
];
sortLibrary();




