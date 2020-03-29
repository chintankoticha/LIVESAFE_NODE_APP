console.log('Starting app!');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');
const argv = yargs.argv;
var command = process.argv[2];
console.log('Command:', command);

if(command === 'add'){
    var note = notes.addNote(argv.title,argv.body);
    if(note){
        console.log('Note created successfully');
        console.log(`Title: ${note.title}`);
        console.log(`Title: ${note.body}`);
    }else{
        console.log('Note title already exists');
    }
}else if(command === 'list'){
    notes.getAll();
}else if(command === 'read'){
    var note = notes.getNote(argv.title);
    if(note){
        console.log('Note found');
        console.log(`Body:${note.body}`);
    }else{
        console.log('No such note with given title exists');
    }
}else if(command === 'remove'){
    var noteRemoved = notes.removeNote(argv.title);
    var message = noteRemoved?console.log('Note removed successfully'):console.log('No such note found!');
}else{
    console.log('Command not recognized');
}