<template>
  <div>
        <section class="section">
      <div class="container">
        <div class="mt-5 columns is-4">
        <div class="column is-3 is-hidden-mobile is-vcentered">
              <posts-side-bar> </posts-side-bar>
        </div>
        

        <div class="column is-7">

    <article>
      <div>
        <h1 class="is-size-3 has-text-centered mb-4">'unwind' R function</h1>

        <!-- <p class="post-meta">
          <a
            href="http://www.dataforfun.com/category/data_science_topics/"
            rel="category tag"
            >Data Science</a
          >,
          <a href="http://www.dataforfun.com/category/neo4j/" rel="category tag"
            >NEO4J</a
          >
        </p> -->
      </div>

      <div >
        <div id="">
          <div>
            <div>
              <div>
                <div>
                  <div>
                    <div>
                      <div>
                        <p>
                          <img
                            class="alignleft size-medium wp-image-143"
                            src="../assets/20160819_111401-e1476995529285-300x169.jpg"
                            alt="20160819_111401"
                            width="300"
                            height="169"
                          />
                        </p>
                        <p>
                          While working on Yelp's 'users' dataset, I needed to
                          'unwind' the list of friends that each user has,
                          append it to the user itself (thus creating two rows,
                          one with user_id and one with the list of friends) and
                          then rbind for each user.
                        </p>
                        <p>
                          The idea of the 'unwind' function is taken from
                          MongoDB, where it is a build-it one.<br />
                          The need to unwind is quite common when working with
                          JSON objects, since having arrays embedded in
                          documents is common usage.
                        </p>
                        <p>
                          The function worked quite fast and efficiently for me.
                        </p>
                        <p class="has-text-weight-bold">
                          Below is the function's code
                        </p>
                        <p class="has-text-weight-bold has-text-left ml-4">
                          Input explanation:
                          <br />
                          df = the whole dataframe<br />
                          col1 = key column<br />
                          col2 = list column<br />
                          row number in the dataframe (since this function is
                          performed in a loop)
                        </p>
                        <p>
                          <strong>Example</strong>:<br />
                          unwind(users'user_id''friends',i)
                        </p>
                        <p>Enjoy it...</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- .-->
        </div>
        <!-- # -->
      </div>
      <!-- . -->
    </article>
        </div>
        </div>
      </div>
        </section>

  </div>
</template>

<script>
import postsSideBar from '@/components/postsSideBar'
  export default {
    
    components: {
      postsSideBar
    }
  };
</script>

<style scoped></style>
