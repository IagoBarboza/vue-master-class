<template>
  <div>
    <div class="forum-list">
      <ForumsListItem 
        v-for="(forum, index) in forums"
        :forum="forum"
        :key="index"
      />
    </div>
  </div>
</template>

<script>
import ForumsListItem from './components/ForumsListItem';

export default {
  name: 'ForumsList',
  props: {
    forums: {
      type: Array,
      required: true,
    },
  },
  components: {
    ForumsListItem,
  },
}
</script>

<style scoped>
  .forum-list {
    padding: 0;
    background: white;
    margin: 20px 0;
  }
</style>