const defaultContent = 'nothing';

class NoteMakerController {
  // inject things here
  constructor(Notes) {
    this.newNote = '';
    this.Notes = Notes;
  }

  createNote(content = defaultContent) {
    // will use this later
    this.Notes.createNote({content: content});
    this.newNote = '';
  }
}

NoteMakerController.$inject = ['Notes'];

export {NoteMakerController};
