<template>
  <div class="home">
    <div class="wrapper">
      <h2>首页引导页-如何学习前端？</h2>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    data() {
      return this.$page.frontmatter;
    }
  }
};
</script>

<style lang="stylus">
@import './styles/config.styl'



</style>
