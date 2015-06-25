//import './noteList.styl';
import template from './noteList.html';
import {NoteListController as controller} from './noteList.controller';

let noteListComponent = ()=> {
    return {
        controllerAs: 'vm',
        restrict: 'E',
        controller,
        replace: true,
        template
    };
};

export {noteListComponent};
