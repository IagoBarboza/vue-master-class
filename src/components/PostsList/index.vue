<template>
  <div class="post-list">
    <PostListItem v-for="(post, index) in posts" :post="post" :key="index" />
  </div>
</template>

<script>
import PostListItem from './components/PostListItem';

export default {
  props: {
    posts: {
      required: true,
      type: Array,
    },
  },
  components: {
    PostListItem
  },
}
</script>

<style lang="scss">
  .post-list {
    margin-top: 20px;
  }
</style>