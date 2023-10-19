<template>
  <aside class="menu">
    <ul class="menu-list">
      <router-link
        :class="{ 'is-active': currentProject == 1 }"
        style="margin-left: 1rem"
        :to="{ name: 'social-network-analysis' }"
        tag="a"
        >Social Network Analysis</router-link>

      <router-link
        :class="{ 'is-active': currentProject == 2 }"
        style="margin-left: 1rem"
        :to="{ name: 'sentiment-analysis' }"
        tag="a"
        >Sentiment Analysis</router-link
      >

      <router-link
        :class="{ 'is-active': currentProject == 3 }"
        style="margin-left: 1rem"
        :to="{ name: 'comparing-healthy-life' }"
        tag="a"
        >Healthy Life Expectancy
      </router-link>

    </ul>
  </aside>
</template>

<script>
export default {
  props: [
    "currentProject"
  ],
  
}
</script>

<style scoped>

.menu-list a.is-active {
  background-color: rgb(96, 174, 247);
}
</style>