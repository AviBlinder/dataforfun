<template>
          <!-- <div class="hero is-info is-medium is-bold">
            <div class="hero-head"> -->
              <div>
                <div>              
                <nav class="navbar is-fixed-top  is-spaced">
                    <div class="container">
                        <div class="navbar-brand">
                          <img src="../assets/DataForFun_Logo.png" 
                          alt="DFF Logo" 
                          width="50" 
                          style="border-radius: 50%; max-height: 2.5rem"
                          class="mx-2 my-1"
                          >    
                            <span class="navbar-burger" 
                            @click="showNav = !showNav" :class="{ 'is-active': showNav }"
                            data-target="navbarMenu"
                            >
                                <span></span>
                                <span></span>
                                <span></span>
                            </span>
                        </div>
                        <div id="navbarMenu" class="navbar-menu active-class" :class="{ 'is-active': showNav }">
                            <div class="navbar-end">
                                <div class="tabs is-right">
                                    <ul>

                                      <router-link class="mr-4" 
                                      :to="{name: 'Home'}" tag="li"> 
                                        <i class="fas fa-home mr-2"></i> Home </router-link> 

                                      <router-link class="mr-4 " :to="{name: 'Projects'}" tag="li">
                                          <i class="fas fa-atom mr-2"></i>Projects</router-link> 

                                      <router-link class="mr-4" :to="{name: 'Tools'}" tag="li">
                                          <i class="fas fa-cubes mr-2"></i>Tools</router-link> 

                                      <router-link class="mr-4" :to="{name: 'Posts'}" tag="li">
                                          <i class="fas fa-boxes mr-2"></i>Blog</router-link> 

                                      <router-link style="margin-right:2rem" :to="{name: 'About'}" tag="li">
                                          <i class="fas fa-address-card mr-2"></i>About</router-link> 
                               
                                    </ul>

                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
          </div>

</template>

<script>

export default {
  name: 'navbar',
  data(){
    return{
        	showNav: false
    }
  }
}
</script>
<style scoped>
nav li:hover  {
    background-color: rgb(231, 231, 231);
}
nav li:active  {
    background-color: rgb(231, 231, 231,0.5);
}

/* .router-link-active{
  background:red;
} */

</style>