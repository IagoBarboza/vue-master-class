<template>
  <div>
    <div class="profile-card">

      <p class="text-center">
        <img :src="user.avatar" class="avatar-xlarge img-update">
      </p>

      <div class="form-group">
        <input v-model="form.username" type="text" placeholder="Username" class="form-input text-lead text-bold">
      </div>

      <div class="form-group">
        <input v-model="form.name" type="text" placeholder="Full name" class="form-input text-lead">
      </div>

      <div class="form-group">
        <label for="user_bio">Bio</label>
        <textarea v-model="form.bio" class="form-input" id="user_bio" placeholder="Write a few words about yourself." />
      </div>

      <div class="stats">
        <span>{{ userPostsCount }} Posts</span>
        <span>{{ userThreadsCount }} Threads</span>
      </div>

      <hr>

      <div class="form-group">
        <label class="form-label" for="user_website">Website</label>
        <input v-model="form.website" autocomplete="off" class="form-input" id="user_website">
      </div>

      <div class="form-group">
        <label for="user_location" class="form-label">Location</label>
        <input v-model="form.location" autocomplete="off" class="form-input" id="user_location">
      </div>

      <div class="btn-group space-between">
        <button class="btn-ghost">Cancel</button>
        <button @click.prevent="save" type="submit" class="btn-blue">Save</button>
      </div>

    </div>

    <p class="text-small text-faded text-center">Member since june 2003, last visited 4 hours ago</p>

  </div>
</template>

<script>
export default {
  name: 'UserProfileCardEditor',
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
  data() {
    return {
      form: JSON.parse(JSON.stringify(this.user)),
    };
  },
  methods: {
    save() {
      this.$store.dispatch('updateUser', { ...this.form })
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