// be sure to expose this module
// by exporting it
const noteFactory = () => {
    const notes = [];

    // define crud on the notes here

    return {
        getNotes: getNotes,
        createNote: createNote
    };

    function getNotes() {
        return notes;
    }

    function createNote(note) {
        notes.push(note);
    }
};

export {noteFactory};