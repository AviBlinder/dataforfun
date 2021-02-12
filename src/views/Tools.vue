<template>
  <div class="about">
   
     <section class="section">
      <div class="container">
        <div class="mt-5 columns is-centered is-8 is-variable">
          <!-- Sentiment Analysis  -->
          <div class="column is-4-tablet is-3-desktop">
            <div class="card">
              <div class="card-image has-text-centered px-3 py-3">
                <img src="../assets/time_is_money-1637393__180.jpg" 
                alt="Sentiment Analysis" />
              </div>
              <div class="card-content">
                <p class="title is-size-5 has-text-centered">Time Series Forecasts Calculator</p>
                <span></span>
              </div>
              <footer class="card-footer">
                <p class="card-footer-item">
           <router-link 
            style="margin-left:1rem" 
            :to="{name: 'time-series-forecasts-calculator'}" 
              tag="a">
              Show me
              </router-link>      
               </p>
              </footer>
            </div>
          </div>

        </div>
      </div>
     </section>



  </div>
</template>
