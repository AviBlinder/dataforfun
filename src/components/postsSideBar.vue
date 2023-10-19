<template>
          <aside class="menu">

            <ul class="menu-list">
       <router-link 
      :class="{ 'is-active': currentPost == 1 }"
       style="margin-left:1rem" :to="{name: 'kickstarter-dashboard'}" 
       tag="a">Kickstarter Dashboard</router-link>      

       <router-link 
      :class="{ 'is-active': currentPost == 2 }"      
       style="margin-left:1rem" :to="{name: 'aws-comparing-distributed-computing'}" 
       tag="a">Comparing Distributed Computing </router-link>      

       <router-link 
      :class="{ 'is-active': currentPost == 3 }"       
       style="margin-left:1rem" :to="{name: 'ab-testing-with-route53'}" 
       tag="a">AB Testing With Route53 Service</router-link>      

       <router-link 
      :class="{ 'is-active': currentPost == 4 }"       
       style="margin-left:1rem" :to="{name: 'setting-up-a-fully-managed-site'}" 
       tag="a">Setting Up A Fully Managed Side on AWS</router-link>      


       <router-link 
      :class="{ 'is-active': currentPost == 5 }"       
       style="margin-left:1rem" :to="{name: 'analyzing-R-packages-trends'}" 
       tag="a">Analysing R Packages Trends</router-link>      

       <router-link
      :class="{ 'is-active': currentPost == 6 }"       
        style="margin-left:1rem" :to="{name: 'Neo4j-pratical-tips'}" 
       tag="a">Neo4J Practical Tips</router-link>      

       <router-link 
      :class="{ 'is-active': currentPost == 7 }"
       style="margin-left:1rem" :to="{name: 'unwind-r-function'}" 
       tag="a">'unwind' R function</router-link> 

            </ul>
        </aside>   
</template>

<script>
export default {
  props: [
    "currentPost"
  ],
  
}
</script>


<style scoped>
.menu-list a.is-active {
  background-color: rgb(96, 174, 247);
}
</style>
</style>