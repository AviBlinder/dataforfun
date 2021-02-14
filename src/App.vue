<template>
  <div id="app">
      
      <main-navbar> </main-navbar>
        <!-- mode="out-in" -->
  <!-- <transition
        name="fade"
      >
      <keep-alive> -->
    <router-view> </router-view>
      <!-- </keep-alive>
  </transition> -->
  </div>
</template>

<script>
import mainNavbar from '@/components/Navbar.vue'

export default {
    components: {
    mainNavbar
  }

}
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.15s;
  transition-property: opacity;
  transition-timing-function: ease-out;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}



article {
  line-height: 1.8;
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
}

/* #app { 
   font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50; 
} */

/* #nav {
  padding: 30px;
} */

/* #nav a {
  font-weight: bold;
  color: #2c3e50;
} */

/* #nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
