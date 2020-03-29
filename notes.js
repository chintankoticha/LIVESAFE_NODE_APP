console.log('Starting notes!');

//console.log(module);
//module.exports.age = 25;

const fs = require('fs');

var fetchNotes = () => {
    try{
        var noteString = fs.readFileSync('notes-data.json');
        return JSON.parse(noteString);
    }catch(e){
        return [];
    }
};

var saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json',JSON.stringify(notes));
};

var addNote = (title,body) => {
    console.log('Adding note',title,body);
    
    var notes = fetchNotes();

    var note = {
        title,
        body
    };

    var duplicateNotes = ((note) => notes.title===title);

    if(duplicateNotes.length===0){
        notes.push(note);
        saveNotes(notes);
        return note;
    }
};

var getAll = () => {
    console.log('Listing all notes');
};

var getNote = (title) => {
    console.log('Getting note:', title);
    var notes = fetchNotes();
    var findNote = notes.filter((note) => note.title===title);
    return findNote[0];
};

var removeNote = (title) => {
    console.log('Removing note:', title);
    var notes = fetchNotes();
    var removedNotes = notes.filter((note) => note.title!=title);
    saveNotes(removedNotes);

    return notes.length!=removedNotes.length;
};

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote
};

