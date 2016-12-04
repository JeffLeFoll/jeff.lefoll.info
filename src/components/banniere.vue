<template>
  <section class="hero">
    <div class="row intro">
      <div class="small-centered medium-uncentered medium-6 large-5 columns">
        <div class="portrait"></div>
      </div>
      <div class="small-centered medium-uncentered medium-6 large-7 columns">
        <h1>Hello world;</h1>
        <p>Je m'appelle Jean-François et je suis un développeur passionné.</p>
        <p>
          <br> Convaincu par les méthodes agiles et les pratiques de développement actuelles issues d'XP (TDD, pair
          programming) ;
          <br> J'essaye de mettre ces idées en application dans mon travail de tous les jours ainsi que de diffuser ces
          bonnes pratiques.
        </p>
      </div>
    </div>
  </section>
</template>
<style lang="sass">
  @import "../assets/sass/common"

.hero
  height: 90vh
  background-size: cover
  background: linear-gradient(to left, $bleu-leger, $bleu-fonce)

  .intro
    padding: 3rem
    position: relative
    top: 50%
    transform: translateY(-50%)


  h1
    color: $blanc
    text-align: center
    font-size: 1.5rem
    line-height: 1.5rem
    font-weight: 300


  p
    color: $blanc
    line-height: 1.75em
    font-weight: 200
    text-align: center
    margin-bottom: 2rem


  .portrait
    background: url('../../static/img/jeff_lefoll.jpg') no-repeat center center
    background-size: cover
    height: 9rem
    width: 9rem
    border-radius: 50%
    display: block
    border: 1px solid $blanc
    margin: 0 auto 2rem

  @media only screen and (min-width: 40.063em)
    .portrait
      height: 18rem
      width: 18rem

    h1
      text-align: left
      font-size: 2.0rem

    p
      text-align: left
</style>
<script>

    export default{
    }

</script>
