<template>
  <div class='title-bar' data-responsive-toggle='menu-principal' data-hide-for='medium'>
    <button class='menu-icon' type='button' data-toggle=''></button>
    <div class='title-bar-title'>Menu</div>
  </div>
  <div id='menu-principal' class='top-bar'>
    <div class="top-bar-left">
    </div>
    <div class="top-bar-right">
      <ul class="menu">
        <li>
          <a href="#competences">Compétences</a>
        </li>
        <li>
          <a href="#talks">Talks</a>
        </li>
        <li>
          <a href="#depots">Dépôts de code</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="sass" scoped>
  $menu-background: $bleu-tres-leger

  .top-bar
    background: $menu-background
    ul
      background: $menu-background
      li
        a
          color: $bleu-fonce
          &:hover, &:active
            background-color: $bleu-tres-leger-hover
            border: 1px solid $bleu
            border-radius: 4px

  .title-bar
    background: $menu-background
    color: $bleu-fonce
    padding: 0.9rem

  .menu-icon
    @include hamburger($color: $bleu-fonce, $color-hover: $bleu)

</style>

<script>
    export default {
    };
</script>
