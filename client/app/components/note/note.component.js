//import './note.styl';
import template from './note.html';
import {NoteController as controller} from './note.controller';

let noteComponent = ()=> {
    return {
        controllerAs: 'vm',
        restrict: 'E',
        controller,
        replace: true,
        template,
        bindToController: true,
        scope: { noteData: '='}
    };
};

export {noteComponent};
