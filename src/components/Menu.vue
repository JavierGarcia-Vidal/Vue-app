<template>
  <nav class="menu">
    <div class="link">
      <router-link to="/about" class="inactiveLeft">
        <arrow-left-circle-icon class="icons"></arrow-left-circle-icon>
      </router-link>
    </div>
    <router-link to="/" class="active">
      <home-icon class="home"></home-icon> 
    </router-link>
    <div class="link">
      <router-link to="/add" class="inactiveRight">
        <arrow-right-circle-icon class="icons"></arrow-right-circle-icon>
      </router-link>
    </div>
  </nav>
</template>

<script>
import {
  HomeIcon,
  ArrowLeftCircleIcon,
  ArrowRightCircleIcon
} from "vue-feather-icons";

export default {
  name: "Menu",
  components: {
    HomeIcon,
    ArrowLeftCircleIcon,
    ArrowRightCircleIcon
  },
  data() {
    return {
      copyright: "Copyright © 2018 Javier García-Vidal Simón."
    };
  }
};
</script>

<style scoped>
.menu {
  display: grid;
  grid-column: 1 / span 4;
  grid-template-columns: repeat(3, 1fr);
  background-color: #cccccc;
  border-top: 15px solid #f8b500;
}
.link {
  display: grid;
  place-self: start stretch;
  background-color: #f8b500;
  border-bottom: 10px solid #393e46;
}
.active {
  background-color: #f8b500;
  place-self: start stretch;
  border-bottom-right-radius: 1rem;
  border-bottom-left-radius: 1rem;
}
.inactiveLeft {
  border-top-right-radius: 1rem;
  padding-top: 0.5rem;
  background-color: #50565f;
}
.inactiveLeft:hover {
  background-color: #393e46;
}
.inactiveRight {
  border-top-left-radius: 1rem;
  padding-top: 0.5rem;
  background-color: #50565f;
  place-self: start stretch;
}
.inactiveRight:hover {
  background-color: #393e46;
}
.home {
  height: 55px;
  width: 40px;
  color: #393e46;
}
.icons {
  color: #cccccc;
}
.icons:hover {
  color: #f8b500;
}
</style>
