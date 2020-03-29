const fs = require('fs')

const readNote = (title) => {
    const notes = loadNotes()
    const noteToRead = notes.find(note => note.title === title)
    debugger
    if (noteToRead) {
        console.log("Title " + noteToRead.title);
        console.log("Body " + noteToRead.body);
    } else {
        console.log('Notes does not exist')
    }
}

const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find(note => note.title === title)

    if (duplicateNote === undefined) {
        notes.push({
            title: title,
            body: body
        })
    } else {
        console.log('Note title taken!!')
    }
    saveNotes(notes)
}

const removeNote = (title) => {
    const notes = loadNotes()
    if (notes.length === 0) {
        console.log('No note to delete')
    } else {
        const notesToKeep = notes.filter(note => note.title !== title)
        saveNotes(notesToKeep);
    }
}

const listNotes = () => {
    const notes = loadNotes()
    if (notes.length === 0) {
        console.log('No note to delete')
    } else {
        notes.forEach(note => console.log(note.title))
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        return JSON.parse(dataBuffer.toString())
    } catch (e) {
        return []
    }
}

module.exports = {
    readNote:readNote,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes
}