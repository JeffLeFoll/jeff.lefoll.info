export default class ControleurCompetences { 
  /* @ngInject */
  constructor($scope) {
    this.$scope = $scope;
    $scope.competences = ['Java', 'Junit', 'C#', 'NUnit', 'JavaScript', 'AngularJS', 'Node.js'];
  }

}
