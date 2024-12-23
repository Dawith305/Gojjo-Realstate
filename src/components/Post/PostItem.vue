<script setup>
import { format } from "date-fns";
import { defineProps } from "vue";

defineProps({
  title: String,
  content: String,
  author: String,
  categories: {
    type: Array,
  },
  created: String,
});

const formatDate = (timestamp) => {
  return format(new Date(timestamp), "EE, MMM do yyyy");
};
</script>

<template>
  <article class="post">
    <a class="post-title">{{ title }}</a>
    <p class="post-content">{{ content }}</p>
    <div class="row-wrapper">
      <p class="post-author">{{ author }}</p>
      <div class="post-categories">
        <p
          class="post-category"
          v-for="(category, index) in categories"
          :key="index"
        >
          {{ category }}
        </p>
      </div>
    </div>
    <div class="row-wrapper">
      <a class="button">Read more</a>
      <p class="post-date">{{ formatDate(created) }}</p>
    </div>
  </article>
</template>

<style scoped>
.post {
  display: flex;
  flex-direction: column;
  padding: 12px 20px;
  margin: 8px auto;
  align-items: start;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid #00000020;
  border-radius: 1rem;
  max-width: 800px;
  transition: all 200ms ease-in-out;
}

.post:hover {
  transform: scale(1.02);
}

.post-title {
  text-decoration: 2px underline;
  font-weight: bolder;
  cursor: pointer;
  font-size: 20px;
}

.post-title:hover {
  color: blue;
}

.row-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.post-author {
  font-size: 12px;
}

.post-categories {
  display: flex;
}

.post-category {
  font-size: 12px;
  margin: 2px;
  padding: 5px 10px;
  border-radius: 20px;
  border: 1px solid;
  background-color: #2c3e50;
  color: white;
}

.post-content {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 5;
  line-height: 1.3;
  max-height: calc(5 * 1.3em);
  margin-bottom: 5px;
  color: black;
}

.button {
  border-radius: 5px;
  border: none;
  padding: 6px 12px;
  box-shadow: 0 1px 3px #0000001a, 0 1px 2px #00000033,
    inset 1px 1px 1px #ffffff99, inset -1px -1px 1px #0c0d120f,
    -1px -1px 1px #ffffff99, -1px -1px 4px #ffffff99, -2px -2px 8px #ffffff99,
    1px 1px 1px #0c0d120f, 1px 1px 4px #0c0d120f, 2px 2px 8px #0c0d120f !important;
}

.button:hover {
  color: blue;
  cursor: pointer;
}
</style>
