<template>
  <div class="about">
    <h1>This is the Posts page</h1>

       <router-link style="margin-left:1rem" :to="{name: 'kickstarter-dashboard'}" 
       tag="a">Kickstarter Dashboard</router-link>      
<br>
       <router-link style="margin-left:1rem" :to="{name: 'aws-comparing-distributed-computing'}" 
       tag="a">Comparing Distributed Computing </router-link>      
<br>
       <router-link style="margin-left:1rem" :to="{name: 'ab-testing-with-route53'}" 
       tag="a">AB Testing With Route53 Service</router-link>      
<br>
       <router-link style="margin-left:1rem" :to="{name: 'setting-up-a-fully-managed-site'}" 
       tag="a">Setting Up A Fully Managed Side on AWS</router-link>      

<br>
       <router-link style="margin-left:1rem" :to="{name: 'analyzing-R-packages-trends'}" 
       tag="a">Analysing R Packages Trends</router-link>      
<br>
       <router-link style="margin-left:1rem" :to="{name: 'Neo4j-pratical-tips'}" 
       tag="a">Neo4J Practical Tips</router-link>      
<br>
      <!-- 'unwind' R function -->
       <router-link style="margin-left:1rem" :to="{name: 'unwind-r-function'}" 
       tag="a">'unwind' R function</router-link>      
  </div>
</template>


<script>
export default {
  
}
</script>

<style scoped>

</style>