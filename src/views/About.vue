<template>
  <div>
    <section class="section">
      <div class="container">
        <div class="columns is-vcentered">
          <div class="column is-3"></div>

          <div class="column is-6">
            <h1 class="is-size-3 has-text-centered has-text-weight-medium my-3">
              A brief introduction
            </h1>
            <div class="block">
            </div>

            <div class="block">
            <h2 class="presentation-style"> Hi, my name is 
            <span class="presentation-name"> Avi Blinder </span> </h2>
            </div>
            <div class="block">
              <p class="paragraph-style">
                There is a line among the fragments of the Greek poet
                Archilochus which says:
                <em>
                  ‘The fox knows many things, but the hedgehog knows one big
                  thing’</em
                >.
              </p>
            </div>
            <div class="block">
              <p class="paragraph-style">
                Although both ways have pros and cons, I find myself more and
                more on the fox side.<br />
                So, this site is all about sharing my experience and knowledge
                in a myriad of fields, which range from Digital Marketing, Data
                Science, Big Data, and many other fields of my interest.
              </p>
            </div>
            <div class="block">
              <p class="paragraph-style">
                I hope we enjoy the journey .
              </p>
            </div>
            <div class="block">
              <p class="paragraph-style">
                Feel free to send me a note at
                <a href="mailto:aviblinder@gmail.com">aviblinder@gmail.com</a>
                or visit me on
                <a
                  href="https://www.linkedin.com/in/aviblinder/"
                  target="_blank"
                  >Linkedin</a
                >
              </p>

              <div class="block my-6">
                <div
                  class="is-size-4 has-text-centered has-text-weight-small my-3"
                >
                  Some additional projects:
                </div>
                <div class="paragraph-style">
                  <ul>
                    <li>
                      <a href="https://www.task22.co" target="_blank"
                        >Task22:</a
                      >
                      A tasks management application.
                      <br />
                      <strong>Tech. details</strong>: VueJs/Quasar frontend
                      frameworks + Firebase/Firestore backend.
                    </li>

                    <li class="my-3">
                      <a href="https://www.fastsimplesocial.com" target="_blank"
                        >Fastsimplesocial:</a
                      >
                      a cloud-based app. for fast group decision-making
                      (prototype only).
                      <br />
                      <strong>Tech. details</strong>: Python/Django framework
                      (frontend and backend), Nginx proxy and hosted on AWS
                      (PostgreSQL, EC2, Route53)
                    </li>

                    <li class="my-3">
                      <h4>Open Source R packages published on CRAN:</h4>
                      <ol class="ml-6">
                        <li class="my-2">
                          <a
                            target="_blank"
                            href="https://cran.r-project.org/web/packages/tsSelect/index.html"
                            >tsSelect:
                          </a>
                          Execution of various time-series models and choosing
                          the best one either by a specific error metric or by
                          picking the best one by majority vote.
                        </li>
                        <li>
                          <a
                            target="_blank"
                            href="https://cran.r-project.org/web/packages/rtrends/index.html"
                            >Rtrends:
                          </a>
                          Analysis of log downloads from the CRAN RStudio
                          mirror.
                        </li>
                      </ol>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div class="column is-3"></div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  export default {};
</script>

<style scoped> 
.presentation-name {
  text-decoration: underline; 
  /* cursor: pointer;   */
  text-decoration-color: #3273dc!important;
  text-underline-offset: 0.3rem;
  

}
.presentation-style {
    font-size: 1.8rem;
    font-weight: 500;
    opacity: 1; 
    transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); 
    transform-style: preserve-3d;    

}
  .paragraph-style {
    font-family: 'Truculenta', sans-serif;
    font-size: 1.3rem;  
  }
</style>
