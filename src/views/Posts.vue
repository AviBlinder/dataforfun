<template>
  <div>
    <!-- cards -->
    <section class="section">
      <div class="container">
        <div class="mt-5 columns is-8 is-multiline is-variable">
          <!-- Kickstarter  -->
          <div class="column">
            <div class="card equal-height">
              <div class="card-body">
              <div class='card-content is-flex is-horizontal-center'>
               <div class="card-image has-text-centered px-3 py-3">
                <img
                  src="../assets-posts/dounats_image-500_x_500.jpg"
            srcset="
              ../assets-posts/dounats_image-500_x_500.jpg   500w,
              ../assets-posts/dounats_image-250_x_250.jpg   250w
            "
            sizes="(max-width: 768px) 100vw, 250px"
                  alt="Kickstarter Deshboar"
                  style=""
                />
                 </div>
              </div>
              <div class="card-content">
                <p class="title is-size-5 has-text-centered">
                  Kickstarter Success Rates
                </p>
                
              </div>
              </div>
              
              <footer class="card-footer">
                <p class="card-footer-item">
                  <router-link
                    style="margin-left: 1rem"
                    :to="{ name: 'kickstarter-dashboard' }"
                    tag="a"
                    >Show me</router-link
                  >
                </p>
              </footer>
            </div>
          </div>
          <!-- Distributed Compuring  -->
          <div class="column is-4-tablet is-3-desktop">
            <div class="card equal-height">
              <div class="card-body">
              <div class='card-content is-flex is-horizontal-center'>
              <div class="card-image has-text-centered px-3 py-3">
                <img
                  src="../assets-posts/Distributing-System-500_x_500.png"
            srcset="
              ../assets-posts/Distributing-System-500_x_500.png   500w,
              ../assets-posts/Distributing-System-250_x_250.png   250w
            "
            sizes="(max-width: 768px) 100vw, 250px"
                  alt="Distributed Computing on AWS"
                />
              </div>                
              </div>
              <div class="card-content">
                <p class="title is-size-5 has-text-centered">
                  Distributed Computing Comparison
                </p>

              </div>
              </div>
              <footer class="card-footer">
                <p class="card-footer-item">
                  <router-link
                    style="margin-left: 1rem"
                    :to="{ name: 'aws-comparing-distributed-computing' }"
                    tag="a"
                    >Show me
                  </router-link>
                </p>
              </footer>

            </div>
          </div>
          <!-- AB Testing With Route53 Service  -->
          <div class="column is-4-tablet is-3-desktop">
            <div class="card equal-height">
              <div class="card-body">
              <div class='card-content is-flex is-horizontal-center'>
              <div class="card-image has-text-centered px-3 py-3">
                <img
                  src="../assets-posts/traffic_policy-dashboard-500_x_500.png"
            srcset="
              ../assets-posts/traffic_policy-dashboard-500_x_500.png   500w,
              ../assets-posts/traffic_policy-dashboard-250_x_250.png   250w
            "
            sizes="(max-width: 768px) 100vw, 250px"

                  alt="AB Testing on Route53"
                />
              </div>
              </div>
              <div class="card-content">
                <p class="title is-size-5 has-text-centered">
                  AB Testing With Route53 Service
                </p>
              </div>
              </div>
              <footer class="card-footer">
                <p class="card-footer-item">
                  <router-link
                    style="margin-left: 1rem"
                    :to="{ name: 'ab-testing-with-route53' }"
                    tag="a"
                    >Show me</router-link
                  >
                </p>
              </footer>
            </div>
          </div>
          <!-- Setting Up A Fully Managed Side on AWS  -->
          <div class="column is-4-tablet is-3-desktop">
            <div class="card equal-height">
              <div class="card-body">
              <div class='card-content is-flex is-horizontal-center'>              
              <div class="card-image has-text-centered px-3 py-3">
                <img
                  src="../assets-posts/DFF-Architecture-Final-500_x_500.png"
            srcset="
              ../assets-posts/DFF-Architecture-Final-500_x_500.png   500w,
              ../assets-posts/DFF-Architecture-Final-250_x_250.png   250w
            "
            sizes="(max-width: 768px) 100vw, 250px"

                  alt="Website architecture on AWS"
                />
              </div>
              </div>
              <div class="card-content">
                <p class="title is-size-5 has-text-centered">
                  Setting Up A Fully Managed Side on AWS
                </p>
              </div>
              </div>
              <footer class="card-footer">
                <p class="card-footer-item">
                  <router-link
                    style="margin-left: 1rem"
                    :to="{ name: 'setting-up-a-fully-managed-site' }"
                    tag="a"
                    >Show me</router-link
                  >
                </p>
              </footer>
            </div>
          </div>
          <!-- Analysing R Packages Trends  -->
          <div class="column is-4-tablet is-3-desktop">
            <div class="card equal-height">
              <div class="card-body">              
              <div class='card-content is-flex is-horizontal-center'>
              <div class="card-image has-text-centered px-3 py-3">
                <img
                  src="../assets-posts/Distribution-of-Packages-by-Continent-500_x_500.png"
            srcset="
              ../assets-posts/Distribution-of-Packages-by-Continent-500_x_500.png   500w,
              ../assets-posts/Distribution-of-Packages-by-Continent-250_x_250.png   250w
            "
            sizes="(max-width: 768px) 100vw, 250px"

                  alt="R Packages usage"
                  style=""
                />
              </div>
              </div>
              <div class="card-content">
                <p class="title is-size-5 has-text-centered">
                  Analysing R Packages Trends
                </p>
              </div>
              </div>
              <footer class="card-footer">
                <p class="card-footer-item">
                  <router-link
                    style="margin-left: 1rem"
                    :to="{ name: 'analyzing-R-packages-trends' }"
                    tag="a"
                    >Show me</router-link
                  >
                </p>
              </footer>
            </div>
          </div>
          <!--  -->
          <!-- Neo4J Practical Tips  -->
          <div class="column is-4-tablet is-3-desktop">
            <div class="card equal-height">
              <div class="card-body">
              <div class='card-content is-flex is-horizontal-center'>
              <div class="card-image has-text-centered px-3 py-3">
                <img 
                  src="../assets-posts/neo-tips-500_x_500.png" 
            srcset="
              ../assets-posts/neo-tips-500_x_500.png   500w,
              ../assets-posts/neo-tips-250_x_250.png   250w
            "
            sizes="(max-width: 768px) 100vw, 250px"

                  alt="NEO4J Tips"
                  style=""
                 />
              </div>
              </div>

              <div class="card-content">
                <p class="title is-size-5 has-text-centered">
                  Neo4J Practical Tips
                </p>
              </div>
              </div>
              <footer class="card-footer">
                <p class="card-footer-item">
                  <router-link
                    style="margin-left: 1rem"
                    :to="{ name: 'Neo4j-pratical-tips' }"
                    tag="a"
                    >Show me</router-link
                  >
                </p>
              </footer>
            </div>
          </div>
\          <!-- 'unwind' R function -->
          <div class="column is-4-tablet is-3-desktop">
            <div class="card equal-height">
              <div class="card-body">
              <div class='card-content is-flex is-horizontal-center'>
              <div class="card-image has-text-centered px-3 py-3">
                <img
                  src="../assets-posts/Candy-Jars-500_x_500.jpg"
            srcset="
              ../assets-posts/Candy-Jars-500_x_500.jpg   500w,
              ../assets-posts/Candy-Jars-250_x_250.jpg   250w
            "
            sizes="(max-width: 768px) 100vw, 250px"
                  alt="'unwind' R function"
                  style=""
                />
              </div>
              </div>

              <div class="card-content">
                <p class="title is-size-5 has-text-centered">
                  'unwind' R function
                </p>
              </div>
              </div>
              <footer class="card-footer">
                <p class="card-footer-item">
                  <router-link
                    style="margin-left: 1rem"
                    :to="{ name: 'unwind-r-function' }"
                    tag="a"
                  >
                    Show me</router-link
                  >
                </p>
              </footer>
            </div>
          </div>
        </div>
      </div>
    </section>


        <router-view> </router-view>

  </div>
</template>


<script>
export default {};
</script>


<style>

</style>
<style scoped>
.img {
    float: left;

  width: 100px;
  height: 100px;    
    background-size: cover;
}

.is-horizontal-center {
  justify-content: center;
}

.card {
  box-shadow: none;
}
.card-body:hover {
  border: 0.8px solid grey;

}

.card-body{
  background-color: rgb(206, 206, 204,0.2);
}

.card-footer {
  border: 0.8px solid grey;
  border-radius: 0%;
}

.card-footer:hover {
  border-radius: 5%;
  /* background-color: #58c2f3; */
}


</style>