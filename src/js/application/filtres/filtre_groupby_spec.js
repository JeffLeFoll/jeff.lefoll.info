var expect = require('chai').use(require('sinon-chai')).expect;
import FiltreGroupBy from './filtre_groupby';

describe('Une première spec', function () {
  const input = [1, 2, 3, 4, 5, 6, 7, 8];
  var groupBy;

  beforeEach(function () {
    groupBy = FiltreGroupBy();
  });

  it("doit regrouper l'input par lot de 3", function () {

    var résultat = groupBy(input, 3);

    expect(résultat).to.have.length(3);
    expect(résultat[0]).to.have.length(3);
    expect(résultat[1]).to.have.length(3);
    expect(résultat[2]).to.have.length(2);
  });

  it("doit regrouper l'input par lot de 5", function () {

    var résultat = groupBy(input, 5);

    expect(résultat).to.have.length(2);
    expect(résultat[0]).to.have.length(5);
    expect(résultat[1]).to.have.length(3);
  });

});