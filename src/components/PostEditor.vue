<template>
  <form @submit.prevent="onSubmit">
    <div class="form-group">
      <textarea
        name="" 
        id="" 
        cols="30" 
        rows="10"
        class="form-input"
        v-model="text"
      >
      </textarea>
    </div>
    <div class="form-actions">
      <button class="btn-blue">Submit post</button>
    </div>
  </form>
</template>

<script>
export default {
  name: 'PostEditor',
  data: function () {
    return {
      text: null,
    };
  },
  methods: {
    onSubmit() {
      const post = {
        id: 'greatPost' + Math.random(),
        text: this.newPostText,
        publishedAt: Math.floor(Date.now() / 1000),
      };
      this.$emit('submit', post);
      this.newPostText = '';
    },
  },
};
</script>