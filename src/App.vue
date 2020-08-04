<template>
  <div id="app">
    <AppNavbar />
    <div class="container">
      <router-view />  
    </div>
  </div>
</template>

<script>
import AppNavbar from '@/components/AppNavbar';

export default {
  components: {
    AppNavbar
  }
}
</script>
