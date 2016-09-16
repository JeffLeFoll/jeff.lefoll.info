export default class ControleurCompetences { 
  /* @ngInject */
  constructor(ServiceCompetences) {
    this.ServiceCompetences = ServiceCompetences;
    this.competencesTechniques;

    this.chargerDonnees();
  }

  chargerDonnees() {
    this.ServiceCompetences.getCompetencesTechniques()
      .then((data) => {
        this.competencesTechniques = data;
      });
  }

  getCompetencesTechniques() {
    return this.competencesTechniques;
  }

}
