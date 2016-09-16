import angular from 'angular';
import controleurs from './controleurs';
import filtres from './filtres';
import services from './services';

angular.module('application', [controleurs, filtres, services]);
    
export default 'application';