<template>
              <section class="hero is-info is-medium is-bold">
            <div class="hero-head">
                <nav class="navbar">
                    <div class="container">
                        <div class="navbar-brand">
                           <!-- <img src="./assets/DataForFun_Logo.png" alt="Logo"> -->
                           <router-link to="/" tag="a">
                           </router-link> 

                                
                            <span class="navbar-burger burger" data-target="navbarMenu">
                                <span></span>
                                <span></span>
                                <span></span>
                            </span>
                        </div>
                        <div id="navbarMenu" class="navbar-menu">
                            <div class="navbar-end">
                                <div class="tabs is-right">
                                    <ul>
                                      <router-link style="margin-left:1rem" to="/" tag="li">Home </router-link> 

                                      <router-link style="margin-left:1rem" to="/projects" tag="li">Projects</router-link> 
                                      <router-link style="margin-left:1rem" to="/tools" tag="li">Tools</router-link> 
                                      <router-link style="margin-left:1rem" to="/posts" tag="li">Blog</router-link> 
                                      <router-link style="margin-left:1rem" to="/About" tag="li">About</router-link> 
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
  
}
</script>

<style scoped>

</style>