<template>
  <div>
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
      <router-link :to="{ name: 'AuthUserEdit' }" class="btn-green btn-small">Edit Profile</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserProfileCard',
  props: {
    user: {
      type: Object,
      required: true,
    },
    userPostsCount: {
      type: Number,
      required: true,
    },
    userThreadsCount: {
      type: Number,
      required: true,
    },
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

</style>