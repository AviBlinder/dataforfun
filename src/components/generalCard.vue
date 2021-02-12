<template>
  <div>
    <div class="card px-3 py-3">
      <div class="card-image is-flex is-horizontal-center ">
       
        <figure class='image '>
           <img :src="cardcontent.image" 
           :alt="cardcontent.title"
           style="width:100%"
            />
        </figure>

      </div>
      <div class="card-content ">
        <p class="title is-size-5 has-text-centered">{{ cardcontent.title }}</p>
        <span></span>
      </div>
      <footer class="card-footer">
        <p class="card-footer-item">
          <router-link
            style="margin-left: 1rem"
            :to="{ name: cardcontent.target }"
            tag="a"
            >Show me
          </router-link>
        </p>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  props: ["cardcontent"],
  data() {
    return {
      cardData: {
        title: "card-title",
        content: "card-contents",
        target: "sentiment-analysis",
        image: require("../assets/easter-1238465__340-400x284.jpg"),
      },

      //   v-bind:class="{ active: isActive, 'text-danger': hasError }"
    };
  },
};
</script>

<style lang="scss">
$card-background-color: #232323;
$card-color: #232323;
</style>

<style scoped>
.is-horizontal-center {
  justify-content: center;
}
.card {
  /* background-color: green; */
}
</style>