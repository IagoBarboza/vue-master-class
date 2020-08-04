<template>
  <div class="thread-list">
    <h2 class="list-title">Threads</h2>
    <ThreadListItem
      v-for="(thread, key) in threads"
      :key="key"
      :thread="{ id: key, ...thread }"
    />
  </div>
</template>

<script>
import sourceData from '@/data';
import ThreadListItem from './components/ThreadListItem';

export default {
  name: 'ThreadsList',
  props: {
    threads: {
      required: true,
      type: Array,
    },
  },
  components: {
    ThreadListItem,
  },
}
</script>

<style scoped>
  .thread-list {
    padding: 0;
    background-color: white;
  }
</style>