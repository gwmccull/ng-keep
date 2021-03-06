import 'normalize.css';
import './app.styl';
import angular from 'angular';
import {noteMaker} from './components/noteMaker/noteMaker';
import {note} from './components/note/note';
import {noteList} from './components/noteList/noteList';
import {common} from './common/common';


angular.module('app', [
    noteMaker.name,
    note.name,
    noteList.name,
    common.name
])
    .directive('app', ()=> {
        return {
            restrict: 'E',
            replace: true,
            template: `
                <div>
                    <note-maker></note-maker>
                    <note-list>test...</note-list>
                </div>
            `
        }
    });
