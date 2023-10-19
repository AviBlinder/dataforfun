<template>
  <div>
    <section class="hero my-6">
      <div class="hero-body has-background-light">
        <div class="container has-text-centered">
          <h2 class="subtitle is-3 is-capitalized has-text-link">
            <em> In a Sea of Data you can just relax and enjoy the journey </em>
          </h2>
          <div class="container">
          <h3 class="subtitle is-4 typewriter ">A blog about Data Science, 
          Software Development and more</h3>
          </div>
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

<style scoped>
.typewriter {
  overflow: hidden; /* Ensures the content is not revealed until the animation */
  border-right: .15em solid transparent; /* The typwriter cursor */
  white-space: wrap; /* Keeps the content on a single line */
  margin: 0 ; /* Gives that scrolling effect as the typing happens */
  letter-spacing: .10em; /* Adjust as needed */
  color: green;
  animation: 
    typing 2.5s steps(35, end),
    blink-caret .5s ;
}

/* The typing effect */
@keyframes typing {
  from { width: 0 }
  to { width: 100% }
}

</style>