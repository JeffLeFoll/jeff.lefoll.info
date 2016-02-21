import angular from 'angular';
import ControleurIndex from './controleurs/controleur_index';

angular.module('application', [])
    .controller('ControleurIndex', ControleurIndex);
    
export default 'application';