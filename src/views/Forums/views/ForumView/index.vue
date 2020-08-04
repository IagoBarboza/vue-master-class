<template>
  <div>
    <div class="col-full push-top">
      <div class="forum-header">
        <div class="forum-details">
          <h1>{{ forum.name }}</h1>
          <p class="text-lead">{{ forum.description }}</p>
        </div>

        <router-link  
          :to="{ name: 'ThreadCreate', params: { forumId: this.forumId } }"
          class="btn-green btn-small"
        >
          Start a thread
        </router-link>
      </div>
    </div>

    <div class="col-full push-top">
      <ThreadsList :threads="threads" />
    </div>
  </div>
</template>

<script>
import sourceData from '@/data.json';
import ThreadsList from './components/ThreadsList';

export default {
  name: 'ForumView',
  props: {
    forumId: {
      required: true,
      type: String,
    },
  },
  data: function() {
    return {
      forum: null,
    };
  },
  computed: {
    threads() {
      return Object.entries(sourceData.threads)
        .filter(([threadKey, thread]) => thread.forumId === this.forumId)
        .map(([threadKey, thread]) => ({ id: threadKey, ...thread }))
    },
  },
  components: {
    ThreadsList,
  },
  created() {
    this.forum = sourceData.forums[this.forumId];
  },
}
</script>

<style scoped>
  .forum-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }
</style>