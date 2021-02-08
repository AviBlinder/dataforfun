<template>
              <section class="hero is-info is-medium is-bold">
            <div class="hero-head">
                <nav class="navbar">
                    <div class="container">
                        <div class="navbar-brand">
                          <img src="../assets/DataForFun_Logo.png" 
                          alt="DFF Logo" 
                          width="50" 
                          style="border-radius: 50%;"
                          class="mx-2 my-2"
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
                        <div id="navbarMenu" class="navbar-menu" :class="{ 'is-active': showNav }">
                            <div class="navbar-end">
                                <div class="tabs is-right">
                                    <ul>
                                      <router-link style=" margin-right:1rem" :to="{name: 'Home'}" tag="li">Home </router-link> 

                                      <router-link style="margin-right:1rem" :to="{name: 'Projects'}" tag="li">Projects</router-link> 
                                      
                                      <router-link style="margin-right:1rem" :to="{name: 'Tools'}" tag="li">Tools</router-link> 
                                      
                                      <router-link style="margin-right:1rem" :to="{name: 'Posts'}" tag="li">Blog</router-link> 
                                      
                                      <router-link style="margin-right:2rem" :to="{name: 'About'}" tag="li">About</router-link> 
                               
                                    </ul>

                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </section>

</template>

<script>
export default {
  data(){
    return{
        	showNav: false
    }
  }
}
</script>

<style scoped>
/* .router-link-active{
  background:red;
} */

</style>