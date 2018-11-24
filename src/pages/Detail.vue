<template>
  <main class="main">
    <Article :data="getArticle" />
  </main>
</template>

<script>
import Article from "../components/Article";

export default {
  name: "List",
  components: {
    Article
  },
  computed: {
    getArticle () {
      return  this.$store.getters.article(this.$route.params.id)
    }
  }
};
</script>

<style scoped>
.main {
  grid-column: 1 / span 4;
  display: grid;
  grid-template-columns: repeat(auto-fit, 1fr);
  grid-auto-rows: auto;
  grid-gap: 2rem;
  padding: 2rem;
  background-color: #cccccc;
}
</style>
