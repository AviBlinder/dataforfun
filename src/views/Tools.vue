<template>
  <div>
     <section class="section">
      <div class="container"> 
      <div class="mt-5 columns is-centered is-8 is-variable">
        <div class="column is-4-tablet is-3-desktop">
          <general-card :cardcontent="toolsContent"> </general-card>
        </div>
      </div>
        </div>
     </section>
      </div>
</template>

<script>
import generalCard from '@/components/generalCard.vue'

export default {
  name: 'tools',
  components: {
    generalCard
  },
  data(){
    return{
        toolsContent: {
        title: 'Time Series forecast',
        content: 'Time Series forecast',
        target: 'time-series-forecasts-calculator',
        image: require("../assets/time_is_money-1637393__180.jpg"),
        }
    }
  }
}
</script>

