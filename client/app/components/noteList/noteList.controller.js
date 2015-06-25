class NoteListController {
    // inject things here
    constructor(Notes) {
        this.notes = Notes.getNotes();
        console.log("notes", this.notes)
    }

}

NoteListController.$inject = ['Notes'];

export {NoteListController};
