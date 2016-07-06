import angular from 'angular';
import controleurs from './controleurs';
import filtres from './filtres';

angular.module('application', [controleurs, filtres]);
    
export default 'application';