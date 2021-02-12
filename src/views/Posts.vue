<template>
  <div>
    <!-- cards -->
    <section class="section">
      <div class="container">
        <div class="mt-5 columns is-8 is-multiline is-variable">
          <!-- class="column is-4-tablet is-3-desktop" -->
          <!-- Kickstarter  -->
          <div class="column">
            <div class="card">
              <div class="card-image has-text-centered px-3 py-3">
                <img
                  src="../assets/dounats_image.jpg"
                  alt="Sentiment Analysis"
                  style="height:250;width:auto;"
                />
              </div>
              <div class="card-content">
                <p class="title is-size-5 has-text-centered">
                  Kickstarter Success
                </p>
                <span></span>
              </div>
              <footer class="card-footer">
                <p class="card-footer-item">
                  <router-link
                    style="margin-left: 1rem"
                    :to="{ name: 'kickstarter-dashboard' }"
                    tag="a"
                    >Kickstarter Dashboard</router-link
                  >
                </p>
              </footer>
            </div>
          </div>
          <!-- Distributed Compuring  -->
          <div class="column is-4-tablet is-3-desktop">
            <div class="card">
              <div class="card-image has-text-centered px-3 py-3">
                <img
                  src="../assets/Distributing-System.png"
                  alt="Sentiment Analysis"
                  style="height:250;width:auto;"
                />
              </div>
              <div class="card-content">
                <p class="title is-size-5 has-text-centered">
                  Distributed Computing Comparison
                </p>
                <span></span>
              </div>
              <footer class="card-footer">
                <p class="card-footer-item">
                  <router-link
                    style="margin-left: 1rem"
                    :to="{ name: 'aws-comparing-distributed-computing' }"
                    tag="a"
                    >Comparing Distributed Computing
                  </router-link>
                </p>
              </footer>
            </div>
          </div>
          <!-- AB Testing With Route53 Service  -->
          <div class="column is-4-tablet is-3-desktop">
            <div class="card">
              <div class="card-image has-text-centered px-3 py-3">
                <img
                  src="../assets/traffic_policy-dashboard.png"
                  alt="Sentiment Analysis"
                  style="height:250;width:auto;"
                />
              </div>
              <div class="card-content">
                <p class="title is-size-5 has-text-centered">
                  AB Testing With Route53 Service
                </p>
                <span></span>
              </div>
              <footer class="card-footer">
                <p class="card-footer-item">
                  <router-link
                    style="margin-left: 1rem"
                    :to="{ name: 'ab-testing-with-route53' }"
                    tag="a"
                    >AB Testing With Route53 Service</router-link
                  >
                </p>
              </footer>
            </div>
          </div>
          <!-- Setting Up A Fully Managed Side on AWS  -->
          <div class="column is-4-tablet is-3-desktop">
            <div class="card">
              <div class="card-image has-text-centered px-3 py-3">
                <img
                  src="../assets/DFF-Architecture-VPC-setup.png"
                  alt="Sentiment Analysis"
                  style="height:250;width:auto;"
                />
              </div>
              <div class="card-content">
                <p class="title is-size-5 has-text-centered">
                  Setting Up A Fully Managed Side on AWS
                </p>
                <span></span>
              </div>
              <footer class="card-footer">
                <p class="card-footer-item">
                  <router-link
                    style="margin-left: 1rem"
                    :to="{ name: 'setting-up-a-fully-managed-site' }"
                    tag="a"
                    >Setting Up A Fully Managed Side on AWS</router-link
                  >
                </p>
              </footer>
            </div>
          </div>
          <!-- Analysing R Packages Trends  -->
          <div class="column is-4-tablet is-3-desktop">
            <div class="card">
              <div class="card-image has-text-centered px-3 py-3">
                <img
                  src="../assets/Distribution-of-Packages-by-Continent.png"
                  alt="Sentiment Analysis"
                  style="height:250;width:auto;"
                />
              </div>
              <div class="card-content">
                <p class="title is-size-5 has-text-centered">
                  Analysing R Packages Trends
                </p>
                <span></span>
              </div>
              <footer class="card-footer">
                <p class="card-footer-item">
                  <router-link
                    style="margin-left: 1rem"
                    :to="{ name: 'analyzing-R-packages-trends' }"
                    tag="a"
                    >Analysing R Packages Trends</router-link
                  >
                </p>
              </footer>
            </div>
          </div>
          <!--  -->
          <!-- Neo4J Practical Tips  -->
          <div class="column is-4-tablet is-3-desktop">
            <div class="card">
              <div class="card-image has-text-centered px-3 py-3">
                <img src="../assets/neo-tips.png" 
                alt="Sentiment Analysis"
                  style="height:250;width:auto;"
                 />
              </div>
              <div class="card-content">
                <p class="title is-size-5 has-text-centered">
                  Neo4J Practical Tips
                </p>
                <span></span>
              </div>
              <footer class="card-footer">
                <p class="card-footer-item">
                  <router-link
                    style="margin-left: 1rem"
                    :to="{ name: 'Neo4j-pratical-tips' }"
                    tag="a"
                    >Neo4J Practical Tips</router-link
                  >
                </p>
              </footer>
            </div>
          </div>
          <!--  -->
          <!-- 'unwind' R function -->
          <div class="column is-4-tablet is-3-desktop">
            <div class="card">
              <div class="card-image has-text-centered px-3 py-3">
                <img
                  src="../assets/20160819_111401-e1476995529285-300x169.jpg"
                  alt="Sentiment Analysis"
                  style="height:250;width:auto;"
                />
              </div>
              <div class="card-content">
                <p class="title is-size-5 has-text-centered">
                  'unwind' R function
                </p>
                <span></span>
              </div>
              <footer class="card-footer">
                <p class="card-footer-item">
                  <router-link
                    style="margin-left: 1rem"
                    :to="{ name: 'unwind-r-function' }"
                    tag="a"
                  >
                    'unwind' R function</router-link
                  >
                </p>
              </footer>
            </div>
          </div>
          <!--  -->
        </div>
      </div>
    </section>
    <!--  -->
  </div>
</template>


<script>
export default {};
</script>

<style scoped>
.img {
    float: left;
    /* width:  100px; */
    /* height: 100px; */
    background-size: cover;
}
</style>