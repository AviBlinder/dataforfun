<template>
  <div>

    <section class="hero my-6" >
      <div class="hero-body has-background-light">
        <div class="container  has-text-centered">
          <h2 class="subtitle is-3 is-capitalized	has-text-link">
            <em> In a Sea of Data you can just relax and enjoy the journey </em>
          </h2>
          <h3 class="subtitle is-4">
            A blog about Data Science and more...  
          </h3>
        </div>
      </div>
    </section>


    <section class="section">
        <div class="container">
          <div class="columns">
            <div class="column is-4"></div>

                  <div class="buttons">

  <button class="button is-medium is-rounded">
              <router-link class="mr-4 " :to="{name: 'Projects'}" tag="a">
                 <i class="fas fa-atom mr-2"></i>Projects</router-link> 

  </button>
    <button class="button is-medium is-rounded">
               <router-link class="mr-4" :to="{name: 'Posts'}" tag="a">
                 <i class="fas fa-boxes mr-2"></i>Blog</router-link> 

  </button>

    <button class="button is-medium is-rounded ">
                  <router-link class="mr-4" :to="{name: 'Tools'}" tag="a">
                    <i class="fas fa-cubes mr-2"></i>Tools</router-link> 

  </button>

                  </div>
        </div>
          </div>
      
    </section>

  </div>
</template>

<script>
export default {
  
}
</script>

<style >
</style>