import angular from 'angular';
import FiltreGroupBy from './filtre_groupby';

angular.module('filtres', [])
    .filter('groupBy', FiltreGroupBy);
    
export default 'filtres';