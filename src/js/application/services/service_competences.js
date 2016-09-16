export default class ServiceCompetences { 
  /* @ngInject */
  constructor($http) {
      this.urlDonneesCompetences = '/api/competences/';
      this.$http = $http;
  }

  getCompetencesTechniques() {
      return this.$http.get(this.urlDonneesCompetences + 'techniques').then(function(response) {
          return response.data;
      });
  }

}
