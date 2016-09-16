import angular from 'angular';
import ServiceCompetences from './service_competences';

angular.module('services', [])
    .service('ServiceCompetences', ServiceCompetences);
    
export default 'services';