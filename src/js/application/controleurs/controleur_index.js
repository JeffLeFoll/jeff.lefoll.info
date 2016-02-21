export default class ControleurIndex {
  /* @ngInject */
  constructor($scope) {
    this.$scope = $scope;
    $scope.nom = 'defaut';
  }

  emitQuelqueChose() {
    this.$scope.$emit('zip');
  }
}
