<template>
  <article class="article" :key="data.id">
    <div class="navigation">
      <span class="id">{{data.id}}</span>
      <router-link to="/update" class="update">
        <edit-icon class="icons"></edit-icon>
      </router-link>
      <router-link to="/delete" class="delete"> 
        <x-icon class="icons"></x-icon> 
      </router-link>
    </div>
    <router-link :to="'/article/'+data.id"> <div class="title">{{data.title}}</div></router-link>
    <div class="info">
      <div class="author">{{data.author}}</div>
      <div class="content">{{data.content}}</div>
      <Tag v-bind:datatags="data.tags" />
    </div>
  </article>
</template>

<script>
import { EditIcon, XIcon } from "vue-feather-icons";
import Tag from "./Tag";

export default {
  name: "Article",
  props: {
    data: Object
  },
  components: {
    Tag,
    EditIcon,
    XIcon
  }
};
</script>

<style scoped>
.article {
  background-color: #393e46;
  border-radius: 1rem;
  border: 0.5rem solid #393e46;
}
.title {
  background-color: #393e46;
  color: #f8b500;
  letter-spacing: 0.15rem;
  padding: 0.5rem 1rem 1.5rem 1rem;
}
.author {
  background-color: #50565f;
  color: #f8b500;
  font-size: 0.8rem;
  letter-spacing: 0.1rem;
  padding: 0.5rem 1rem;
  border-bottom: 1px solid #393e46;
  border-top-right-radius: 1rem;
  border-top-left-radius: 1rem;
}
.content {
  background-color: #f7f7f7;
  color: #50565f;
  font-size: 0.9rem;
  letter-spacing: 0.025rem;
  text-align: left;
  padding: 1.25rem;
}
.navigation {
  display: grid;
  grid-template-columns: 1fr 40px 40px;
  grid-template-rows: 15px;
  font-size: 0.7rem;
}
.id {
  visibility: hidden;
  margin-left: 100px;
}
.update {
  background-color: #f8b500;
  color: #a77415;
  border-bottom-left-radius: 1rem;
  padding-left: 5px;
}
.update:hover {
  background-color: #f89500;
  color: #c0a13b;
}
.delete {
  background-color: #be3737;
  color: #6a0000;
  border-top-right-radius: 1rem;
  padding-right: 5px;
  padding-left: 5px;
}
.delete:hover {
  background-color: #d42a2a;
  color: #460606;
}
.icons {
  height: 15px;
  width: 10px;
  color: #393e46;
}
</style>
