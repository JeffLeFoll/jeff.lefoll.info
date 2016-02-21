var expect = require('chai').use(require('sinon-chai')).expect;
var sinon = require('sinon');
import ControleurIndex from './controleur_index';

describe('Une première spec', function () {

  var controleur, $scope;

  beforeEach(function () {
    $scope = {};

    controleur = new ControleurIndex($scope);
  });

  it('doit parler au scope', function () {
    expect($scope.nom).to.equal('defaut');
  });

  it('doit pouvoir spy le scope', function () {
    $scope.$emit = sinon.spy();

    controleur.emitQuelqueChose();

    expect($scope.$emit).to.have.been.called;
  });
});