<template>
  <header class="header" id="header">

    <router-link
      :to="{ name: 'CategoriesList' }"
      class="logo"
    >
      <img src="@/assets/img/vueschool-logo.svg">
    </router-link>

    <div class="btn-hamburger">
      <div class="top bar"></div>
      <div class="middle bar"></div>
      <div class="bottom bar"></div>
    </div>

    <nav class="navbar">
      <ul>
        <li class="navbar-user">
          <a href="#">
            <img class="avatar-small" :src="user.avatar">
            <span>
              {{ user.name }}
              <img src="@/assets/img/arrow-profile.svg" class="icon-profile">
            </span>
          </a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'AppNavbar',
  computed: {
    ...mapGetters({
      'user': 'authUser',
    }),
  },
}
</script>

<style scoped>

</style>