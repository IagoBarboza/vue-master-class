<template>
  <div class="col-large push-top">
    <h1>{{ thread.title }}</h1>
    <PostsList :posts="posts" />
    <PostEditor @submit="addPost" />
  </div>
</template>

<script>
import sourceData from '@/data';
import PostsList from './components/PostsList';
import PostEditor from '@/components/PostEditor';

export default {
  name: 'ThreadView',
  props: {
    threadId: {
      type: String,
      required: true,
    },
  },
  data: function () {
    return {
      thread: {},
    };
  },
  computed: {
    posts() {
      return sourceData.posts.filter(p => p.threadId === this.threadId);
    },
  },
  methods: {
    addPost(post) {
      sourceData.posts[post.id] = { 
        ...post,
        threadId: this.threadId,
        userId: 'ALXhxjwgY9PinwNGHpfai6OWyDu2',
      };
      this.$set(this.thread.posts, post.id, post.id);
    },
  },
  components: {
    PostsList,
    PostEditor,
  },
  created() {
    this.thread = sourceData.threads[this.threadId];
  },
}
</script>