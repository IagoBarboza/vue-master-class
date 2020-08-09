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
          <router-link :to="{ name: 'AuthUserView' }">
            <img class="avatar-small" :src="user.avatar">
            <span>
              {{ user.name }}
              <img src="@/assets/img/arrow-profile.svg" class="icon-profile">
            </span>
          </router-link>
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

.navbar {
  width: 100%;
  display:flex;
  flex-direction: row-reverse;
  justify-content: space-between;
}

.navbar ul {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 100%;
}

.navbar-item, .navbar-mobile-item {
  display: inline-block;
  border-right: 1px solid #3c4d6a;
  vertical-align: middle;
}

ul .navbar-item:last-child, ul .navbar-mobile-item:last-child {
  border-right: none;
}

.navbar-item a, .navbar-mobile-item a {
  color: white;
  padding: 10px 20px;
  text-decoration: none;
  transition: all .6s ease;
  font-size: 18px;
}

@media (min-width: 240px) and (max-width: 720px) {
  .navbar-item a, .navbar-mobile-item a {
      padding: 10px 0px;
  }
}

.navbar-item a:hover, .navbar-mobile-item a:hover {
  color: #57AD8D;
}

.navbar-item a:active, .navbar-mobile-item a:active {
  color: #57AD8D;
}

@media (min-width: 240px) and (max-width: 720px) {
  .navbar-item, .navbar-mobile-item {
    display: block;
    border: none;
    margin: 20px 0;
  }
}

@media (min-width: 240px) and (max-width: 720px) {
  .navbar {
    display: none;
    position: absolute;
    z-index: 10;
    padding: 10px 10px 10px;
    background: #263959;
    width: 100%;
    left: 0;
    top: 60px;
  }
}

@media (min-width: 240px) and (max-width: 720px) {
  .navbar-open {
    display: flex;
    transition: all 0.6s ease;
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;
  }

  .navbar-open .navbar-item, .navbar-open .navbar-mobile-item {
    margin: 6px 0;
  }

  .navbar-open ul {
    flex: 1;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    padding-left: 20px;
  }
}

.signs .navbar-item, .signs .navbar-mobile-item {
  border-right: none;
}

.navbar-user {
  margin-left: auto;
}

.navbar-user a {
  display: flex;
  align-items: center;
  color: white;
}

.navbar-user a:hover .icon-profile {
  transition: all .4s ease;
  transform: rotate(-180deg);
}

.navbar-user img {
  margin-right: 10px;
}

.btn-hamburger {
  cursor: pointer;
  height: 30px;
  width: 30px;
  float: right;
  position: relative;
  margin-left: 20px;
  display: none;
}

.btn-hamburger .top {
  top: 7px;
}

.btn-hamburger .middle {
  top: 16px;
}

.btn-hamburger .bottom {
  top: 26px;
}

@media (min-width: 240px) and (max-width: 720px) {
  .btn-hamburger {
    display: block;
  }
}

.bar {
  width: 30px;
  height: 4px;
  background: white;
  position: absolute;
  border-radius: 10px;
  transition: all 0.5s;
}

.btn-hamburger-active .top {
  top: 16px;
}

.btn-hamburger-active .middle {
  opacity: 0;
  overflow: hidden;
}

.btn-hamburger-active .bottom {
  top: 16px;
}
</style>