<script setup>
import PostItem from "@/components/Post/PostItem.vue";
import {onMounted, ref} from "vue";
import api from "@/api";

const posts = ref([]);
const categories = ref([]);
const users = ref([]);

async function getAPIData() {
  posts.value = await api.getAllPosts();
  categories.value = await api.getAllCategories();
  users.value = await api.getAllUsers();
}

const getAuthorName = (authorId) => {
  // show author id if id is not present on users list
  return users.value.find((user) => user.id === authorId)?.name || authorId;
};

const getCategoryName = (categoryIds) => {
  const allCategoryNames = [];
  for (const categoryId in categoryIds) {
    // show category id if id is not present on category list
    const categoryName =
      categories.value.find((category) => category.id === categoryId)?.name ||
      categoryId;
    if (categoryName) allCategoryNames.push(categoryName);
  }
  return allCategoryNames;
};

onMounted(getAPIData);
</script>

<template>
  <div class="post-list">
    <div class="post-wrapper" v-for="(post, index) in posts" :key="index">
      <post-item
        :title="post.title"
        :created="post.created"
        :categories="getCategoryName(post.categories)"
        :content="post.content"
        :author="getAuthorName(post.author)"
      ></post-item>
    </div>
  </div>
</template>

<style scoped>
.post-list {
  display: flex;
  flex-direction: column;
  margin: auto;
  padding: 3px;
}
</style>
