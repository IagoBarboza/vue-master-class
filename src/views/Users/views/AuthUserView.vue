<template>
  <div class="flex-grid">
    
    <div class="col-3 push-top">
      
      <div class="profile-card">
        
        <p class="text-center">
          <img :src="user.avatar" class="avatar-xlarge">
        </p>
        
        <h1 class="title">{{ user.username }}</h1>
        
        <p class="text-lead">{{ user.name }}</p>
        
        <p class="text-justify">
          <span v-if="user.bio">{{ user.bio }}</span>
          <span v-else>No bio specified.</span>
        </p>
        
        <span class="online">{{ user.username }} is online</span>
        
        <div class="stats">
          <span>{{ userPostsCount }} posts</span>
          <span>{{ userThreadsCount }} threads</span>
        </div>

        <hr>

        <p v-if="user.website" class="text-large text-center">
          <i class="fa fa-globe">
            <a :href="user.website">{{ user.website }}</a>
          </i>
        </p>

      </div>
      
      <p class="text-xsmall text-faded text-center">Member since june 2003, last visited 4 hours ago</p>

      <div class="text-center">
        <hr>
        <a href="edit-profile.html" class="btn-green btn-small">Edit Profile</a>
      </div>

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
import PostsList from '@/components/PostsList';
import { countObjectProperties } from '@/utils';

export default {
  name: 'AuthUserView',
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
  },
   
}
</script>

<style scoped>
.profile-card {
  padding: 10px 20px 20px 20px;
  margin-bottom: 10px;
  background: white;
  box-shadow: 2px 2px 1px rgba(136, 136, 136, 0.09);
  align-self: self-end;
}

@media (min-width: 820px) {
  .profile-card {
    margin-right: 20px;
  }
}

.profile-card .title {
  word-break: break-all;
}

.profile-card .stats {
  display: flex;
  margin: 20px 0px;
}

.profile-card .stats span {
  flex-basis: 50%;
}

.profile-card .user-website {
  display: flex;
  justify-content: center;
  align-items: baseline;
}

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