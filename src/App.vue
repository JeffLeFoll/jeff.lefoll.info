<template>
  <div id="app">
    <custom-menu></custom-menu>

    <router-view></router-view>

    <custom-footer></custom-footer>
  </div>
</template>

<script>
import CustomMenu from './components/CustomMenu';
import CustomFooter from './components/CustomFooter';

export default {
  name: 'app',
  components: {
    CustomMenu,
    CustomFooter,
  },
};

</script>

<style lang="sass">
  @import "./assets/sass/common"

  $font-stack: Tahoma, Geneva, sans-serif

  body
    font: 100% $font-stack

    h1
      font-family: $font-stack
</style>
