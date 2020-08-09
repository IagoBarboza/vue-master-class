<template>
  <div class="thread">
    <div>
      <p>
        <router-link :to="{name: 'ThreadView', params: { threadId: thread.id } }">{{ thread.title }}</router-link>
      </p>
      <p class="text-faded text-xsmall"> By, <a href="#">{{ user.name }}</a>, <AppDate :timestamp="thread.publishedAt" /> </p>
    </div>
    <div class="activity">
      <p class="replies-count">
        {{ repliesCount }} replies
      </p>
    </div>
  </div>
</template>

<script>
import sourceData from '@/data';
import { countObjectProperties } from '@/utils';

export default {
  name: 'ThreadListItem',
  props: {
    thread: {
      type: Object,
      required: true,
    },
  },
  data: function () {
    return {
      user: null,
    };
  },
  computed: {
    repliesCount() {
      return countObjectProperties(this.thread.posts) - 1;
    },
  },
  created() {
    this.user = this.$store.state.users[this.thread.userId];
  }
}
</script>

<style scoped>
  .thread {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 0 5px 20px;
    min-height: 45px;
  }

  .thread:nth-child(odd) {
    background: rgba(73, 89, 96, 0.06);
    border-bottom-left-radius: 20px;
  }

  .thread:last-child {
    border-bottom-left-radius: 0;
  }

  .thread .replies-count {
    flex-basis: 35%;
  }

  .thread .activity {
    flex-basis: 35%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .thread .activity .avatar-medium {
    margin-right: 10px;
  }
</style>