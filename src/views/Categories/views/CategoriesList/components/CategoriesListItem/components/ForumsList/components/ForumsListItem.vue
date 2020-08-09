<template>
  <div class="forum-listing">
    <div class="forum-details">
      <router-link 
        class="text-xlarge"
        :to=" {name: 'ForumView', params: { forumId: forum.id } }"
      >
        {{ forum.name }}
      </router-link>

      <p>{{ forum.description }}</p>
    </div>

    <div class="threads-count">
      <p class="count">{{ threadsCount }}</p> threads
    </div>
  </div>
</template>

<script>
import { countObjectProperties } from '@/utils';

export default {
  name: 'ForumsListItem',
  props: {
    forum: {
      type: Object,
      required: true,
    },
  },
  computed: {
    threadsCount() {
      return countObjectProperties(this.forum.threads);
    },
  },
}
</script>

<style scoped>
  .forum-listing {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    padding: 20px 10px 20px 30px;
  }

  .forum-listing:nth-child(odd) {
    background: rgba(73, 89, 96, 0.06);
    border-bottom-left-radius: 20px;
  }

  .forum-listing:last-child {
    border-bottom-left-radius: 0;
  }

  .forum-listing .forum-details {
    flex-basis: 52%;
  }

  @media (min-width: 240px) and (max-width: 720px) {
    .forum-listing .forum-details {
        flex-basis: 100%;
    }
  }
  .forum-listing .forum-details ul.subforums {
    padding-left: 5px;
    display: block;
  }

  .forum-listing .forum-details ul.subforums::before {
    content: '⌙';
    margin-right: 5px;
  }

  .forum-listing .forum-details ul.subforums.subforums li {
    display: inline;
  }

  .forum-listing .forum-details ul.subforums.subforums li:not(:last-of-type)::after {
    content: '\f111';
    font-family: 'FontAwesome';
    font-size: 4px;
    position: relative;
    top: -3px;
    left: 2px;
    padding: 0 3px;
    color: #878787;
  }

  .forum-listing .threads-count {
    flex-basis: 12%;
    text-align: center;
  }

  .forum-listing .threads-count .count {
    font-weight: 100;
    display: block;
  }

  .forum-listing .last-thread {
    flex-basis: 32%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .forum-listing .last-thread .avatar {
    margin-right: 10px;
  }
</style>