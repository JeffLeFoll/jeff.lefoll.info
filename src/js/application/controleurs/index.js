import angular from 'angular';
import ControleurIndex from './controleur_index';
import ControleurCompetences from './controleur_competences';

angular.module('controleurs', [])
    .controller('ControleurIndex', ControleurIndex)
    .controller('ControleurCompetences', ControleurCompetences);
    
export default 'controleurs';