import './noteMaker.styl';
import template from './noteMaker.html';
import {NoteMakerController as controller} from './noteMaker.controller';

let noteMakerComponent = ()=> {
    return {
        controllerAs: 'vm',
        restrict: 'E',
        controller,
        replace: true,
        scope: {},
        template
    };
};

export {noteMakerComponent};
