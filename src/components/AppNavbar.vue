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
            <img src="https://instagram.fmcz4-1.fna.fbcdn.net/v/t51.2885-15/e35/21984894_597277883995028_341322631561084928_n.jpg?_nc_ht=instagram.fmcz4-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=OCAQE09Bs3MAX_jLWqD&oh=f19198c8e01c8a11230f6e5423015c39&oe=5F528E75" class="avatar-small">
            <span>
              Iago barboza
              <img src="@/assets/img/arrow-profile.svg" class="icon-profile">
            </span>
          </a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'AppNavbar'
}
</script>

<style scoped>

</style>