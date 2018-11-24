<template>
  <header class="header">
    <div class="head">{{ title }}</div>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      title: "TEST VUE.JS COMPONENTS"
    };
  }
};
</script>

<style scoped>
.header {
  display: grid;
  grid-column: 1 / span 4;
  background-color: #393e46;
  border-bottom: #f8b500;
}
.head {
  padding: 2rem;
  font-size: 1.5rem;
  letter-spacing: 0.2rem;
  color: #f8b500;
  place-self: center stretch;
}
</style>
