<template>
  <div class="about">
    <h1>This is the Projects page</h1>

   <router-link style="margin-left:1rem" :to="{name: 'sentiment-analysis'}" tag="a">Sentiment Analysis</router-link>      
   <router-link style="margin-left:1rem" :to="{name: 'comparing-healthy-life'}" tag="a">Healthy Life Dashboard</router-link>      
   <router-link style="margin-left:1rem" :to="{name: 'social-network-analysis'}" tag="a">Social Network Analysis</router-link>      
    <router-view> </router-view>
  </div>
</template>
