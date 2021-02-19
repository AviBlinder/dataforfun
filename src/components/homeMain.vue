<template>
  <div>
    <section class="hero my-6">
      <div class="hero-body has-background-light">
        <div class="container has-text-centered">
          <h2 class="subtitle is-3 is-capitalized has-text-link">
            <em> In a Sea of Data you can just relax and enjoy the journey </em>
          </h2>
          <h3 class="subtitle is-4">A blog about Data Science and more...</h3>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column is-narrow-mobile is-offset-2-desktop is-offset-1-tablet"></div>

          <div class="column is-full is-full-mobile 
          is-multiline ">
            <div class="buttons">
              <button class="button is-medium is-rounded ">
                <router-link class="" :to="{ name: 'Projects' }" tag="a">
                  <i class="fas fa-atom mr-2"></i>Projects</router-link
                >
              </button>
              <button class="button is-medium is-rounded ml-3">
                <router-link class="" :to="{ name: 'Posts' }" tag="a">
                  <i class="fas fa-boxes mr-2"></i>Blog</router-link
                >
              </button>

              <button class="button is-medium is-rounded ml-3">
                <router-link class="" :to="{ name: 'Tools' }" tag="a">
                  <i class="fas fa-cubes mr-2"></i>Tools</router-link
                >
              </button>

              <button class="button is-medium is-rounded ml-3">
                <router-link
                  :to="{ name: 'About' }"
                  tag="a"
                >
                  <i class="fas fa-address-card mr-2"></i>About</router-link
                >
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style >
</style>