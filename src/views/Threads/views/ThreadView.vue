<template>
  <div class="col-large push-top">
    <h1>{{ thread.title }}</h1>
    <PostsList :posts="posts" />
    <PostEditor :threadId="threadId" @submit="addPost" />
  </div>
</template>

<script>
import sourceData from '@/data';
import PostsList from '@/components/PostsList';
import PostEditor from '@/components/PostEditor';

export default {
  name: 'ThreadView',
  props: {
    threadId: {
      type: String,
      required: true,
    },
  },
  computed: {
    thread() {
      return this.$store.state.threads[this.threadId];
    },
    posts() {
      return Object.values(this.$store.state.posts).filter(p => p.threadId === this.threadId);
    },
  },
  methods: {
    addPost(post) {
      this.$store.dispatch('createPost', post);
    },
  },
  components: {
    PostsList,
    PostEditor,
  },
}
</script>