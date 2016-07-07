export default class ServiceCompetences { 
  /* @ngInject */
  constructor($http) {
      //const urlDonneesCompetences = '/api/competences/';
      this.$http = $http;
  }

  competencesTechniques() {
      // return $http.get(urlDonneesCompetences + 'techniques');
      return ['Java', 'Junit', 'C#', 'NUnit', 'JavaScript', 
        'AngularJS', 'Node.js', 'Tapestry', 'GWT', 'Hadoop', 
        'Pig', 'Git', 'Maven', 'Sonar', 'Jenkins'];
  }

}
