import angular from 'angular';
// make this work
import {noteFactory} from './notes';
export let common = angular.module('common', [])
    .factory('noteFactory', function(noteFactory) {
        return {
            getNotes: noteFactory.getNotes,
            createNote: noteFactory.createNote
        };
    });
