<template>
  <div class="flex-grid">
    
    <div class="col-3 push-top">

      <UserProfileCardEditor
        v-if="edit"
        :user="user"
        :userPostsCount="userPostsCount"
        :userThreadsCount="userThreadsCount"
      />

      <UserProfileCard
        v-else
        :user="user"
        :userPostsCount="userPostsCount"
        :userThreadsCount="userThreadsCount"
      />

    </div>

    <div class="col-7 push-top">

      <div class="profile-header">
        <span class="text-lead">
          {{ user.name }}'s recent activity
        </span>

        <a href="#">See only started threads?</a>
      </div>

      <hr>

      <PostsList :posts="userPosts" />

    </div>

  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { countObjectProperties } from '@/utils';
import PostsList from '@/components/PostsList';
import UserProfileCard from './components/UserProfileCard';
import UserProfileCardEditor from './components/UserProfileCardEditor';

export default {
  name: 'AuthUserView',
  props: {
    edit: {
      type: Boolean,
      required: true,
    },
  },
  computed: {
    ...mapGetters({
      'user': 'authUser',
    }),
    userPostsCount() {
      return countObjectProperties(this.user.posts);
    },
    userThreadsCount() {
      return countObjectProperties(this.user.threads);
    },
    userPosts() {
      if (this.user.posts) {
        return Object.values(this.$store.state.posts)
          .filter(p => p.userId === this.user.id);
      }
      return [];
    }
  },
  components: {
    PostsList,
    UserProfileCard,
    UserProfileCardEditor,
  },
}
</script>

<style scoped>

.profile-header {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  padding: 0 0px;
}

@media (max-width: 720px) {
  .profile-header {
    flex-wrap: wrap;
  }
}

@media (min-width: 1024px) {
  .activity-list {
    padding: 0px 10px;
  }
}

.activity-list .activity {
  background-color: white;
  padding: 15px 10px;
  margin-bottom: 20px;
  box-shadow: 2px 2px 1px rgba(136, 136, 136, 0.09);
}

@media (max-width: 720px) {
  .activity-list .activity {
    padding: 10px 15px;
  }

  .activity-list .activity .post-content {
    padding-left: 0;
  }
}

.activity-list .activity .activity-header {
  margin: 0;
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-end;
}

.activity-list .activity .activity-header img {
  margin-top: 5px;
  margin-right: 10px;
}

.activity-list .activity .activity-header .title {
  flex-basis: 93%;
  margin: 0;
  padding: 0;
}

@media (max-width: 720px) {
  .activity-list .activity .activity-header .title {
    flex-basis: 100%;
  }
}

.activity-list .activity .activity-header .title span {
  display: block;
  font-weight: 100;
}

.activity-list .activity div.post-content {
  display: block;
  padding-right: 10px;
  margin: 12px 0px;
  word-break: break-word;
}

.activity-list .activity div.post-content p {
  margin-bottom: 12px;
}

.activity-list .activity .thread-details {
  text-align: right;
}

.activity-list .activity .thread-details span:not(:last-of-type) {
  margin-right: 20px;
}

textarea#user_bio {
  resize: vertical;
}

span.offline::before {
  font-family: FontAwesome;
  content: "\f1db";
  font-size: 14px;
  margin-right: 5px;
}

span.online {
  color: #57AD8D;
}

span.online::before {
  font-family: FontAwesome;
  content: "\f2be";
  font-size: 14px;
  margin-right: 5px;
}
</style>