<template>
  <div class="tags">
    <span class="tag" v-for="(data, index) in datatags" :key="index">
      {{data}}
    </span>
  </div>
</template>

<script>
export default {
  name: "Tag",
  props: {
    datatags: Array
  }
};
</script>

<style scoped>
.tags {
  display: grid;
  grid-template-rows: repeat(auto-fill, 1fr);
  background-color: #393e46;
  color: #393e46;
}
.tag {
  background-color: #f8b500;
  border-top: 1px solid #393e46;
  font-size: 0.5rem;
  letter-spacing: 0.1rem;
  padding: 0.25rem;
  justify-self: stretch;
}
.tag:last-child {
  border-bottom-right-radius: 1rem;
  border-bottom-left-radius: 1rem;
}
.tag:hover {
  background-color: #f89500;
}
</style>