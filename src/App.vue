<template>
  <div id="app">
    <Header />
    <Menu />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header";
import Menu from "./components/Menu";
import List from "./pages/List";
import Footer from "./components/Footer";

export default {
  name: "App",
  components: {
    Header,
    Menu,
    List,
    Footer
  }
};
</script>

<style>
#app {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 150px 75px 1fr 150px;
  font-family: "Open Sans", "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
input {
  font-family: "Open Sans", "Avenir", Helvetica, Arial, sans-serif;
}
a {
  text-decoration: none;
}
</style>
