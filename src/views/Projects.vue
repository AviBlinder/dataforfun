<template>
  <div>
    <!-- cards -->
    <section class="section">
      <div class="container">
        <div class="mt-5 columns is-centered is-8 is-variable">
          <!-- Sentiment Analysis  -->
          <div class="column is-4-tablet is-3-desktop">
            <div class="card">
              <div class="card-image has-text-centered px-3 py-3">
                <img src="../assets/easter-1238465__340-400x284.jpg" 
                alt="Sentiment Analysis" />
              </div>
              <div class="card-content">
                <p class="title is-size-5 has-text-centered">Sentiment Analysis</p>
                <span></span>
              </div>
              <footer class="card-footer">
                <p class="card-footer-item">
              <router-link 
                style="margin-left:1rem" 
                :to="{name: 'sentiment-analysis'}" 
                tag="a">Show me
                </router-link>      
               </p>
              </footer>
            </div>
          </div>
          <!-- Healthy life dashboard -->
          <div class="column is-4-tablet is-3-desktop">
            <div class="card">
              <div class="card-image has-text-centered px-3 py-3">
                <img src="../assets/elder-woman-with-hat-400x284.jpg" 
                alt="Sentiment Analysis" />
              </div>
              <div class="card-content">
                <p class="title is-size-5 has-text-centered">Healthy Life Expectancy</p>
              </div>
              <footer class="card-footer">
                <p class="card-footer-item">

     <router-link 
     style="margin-left:1rem" 
     :to="{name: 'comparing-healthy-life'}" 
     tag="a">
     Show me
     </router-link>      
               </p>
              </footer>
            </div>
          </div>
          <!--  -->
          <div class="column is-4-tablet is-3-desktop">
            <div class="card">
              <div class="card-image has-text-centered px-3 py-3">
                <img src="../assets/fishing-net-1526496__180.jpg" 
                alt="Sentiment Analysis" />
              </div>
              <div class="card-content">
                <p class="title is-size-5 has-text-centered">Social Network Analysis</p>
              </div>
              <footer class="card-footer">
                <p class="card-footer-item">
            <router-link 
              style="margin-left:1rem" 
              :to="{name: 'social-network-analysis'}" 
              tag="a">
              Show me
              </router-link>    
               </p>
              </footer>
            </div>
          </div>
          <!--  -->
        </div>
      </div>
    </section>
    


    <router-view> </router-view>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>

</style>