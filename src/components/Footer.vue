<template>
  <footer class="footer">
    <span class="copyright">{{ copyright }}</span>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      copyright: "Copyright © 2018 Javier García-Vidal Simón."
    };
  }
};
</script>

<style scoped>
.footer {
  display: grid;
  grid-column: 1 / span 4;
  background-color: #393e46;
  letter-spacing: 0.1rem;
  padding: 1rem;
}
.copyright {
  place-self: center stretch;
  font-size: 0.9rem;
  color: #f8b500;
}
</style>