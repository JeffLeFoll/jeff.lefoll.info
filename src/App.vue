<template>
  <div id="app">
    <menu></menu>

    <router-view></router-view>

    <custom-footer></custom-footer>
  </div>
</template>

<script>
import Menu from './components/Menu';
import CustomFooter from './components/CustomFooter';

export default {
  name: 'app',
  components: {
    Menu,
    CustomFooter,
  },
};
</script>

<style lang="sass">
@import "assets/sass/foundation/conf-foundation"
@import "assets/sass/font-awesome/conf-font-awesome"

@import "assets/sass/couleurs"

$font-stack: Tahoma, Geneva, sans-serif

body
  font: 100% $font-stack

  h1
      font-family: $font-stack
</style>
