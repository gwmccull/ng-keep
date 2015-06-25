// be sure to expose this module
// by exporting it
const Notes = () => {
    const notes = [
        {content: "test"}
    ];

    // define crud on the notes here

    return {
        getNotes: getNotes,
        createNote: createNote
    };

    function getNotes() {
        return notes;
    }

    function createNote(note) {
        console.log("createNote", note);
        notes.push(note);
    }
};

export {Notes};