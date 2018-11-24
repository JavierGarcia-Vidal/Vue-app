<template>
  <main class="main">
    <Article v-for="(data, index) in listArticles" :data="data" :key="index" />
  </main>
</template>

<script>
import Article from "../components/Article";

export default {
  name: "List",
  components: {
    Article
  },
  data: function() {
    return {
      listArticles: this.$store.getters.articles
    };
  }
};
</script>

<style scoped>
.main {
  grid-column: 1 / span 4;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-auto-rows: auto;
  grid-gap: 2rem;
  padding: 2rem;
  background-color: #cccccc;
}
</style>
