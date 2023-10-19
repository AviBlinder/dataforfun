<template>
  <div>
    <section class="section">
      <div class="container">
        <div class="mt-5 columns is-4">
          <div class="column is-3 is-hidden-mobile is-vcentered">
            <posts-side-bar :currentPost="post_id"> </posts-side-bar>
          </div>

          <div class="column is-7">
            <article>
              <div class="section">
                <div class="container">
                  <h1
                    class="is-size-4 has-text-centered has-text-weight-medium"
                  >
                    'unwind' R function
                  </h1>
                  <div class="card equal-height">
                    <div class="card-content is-flex is-horizontal-center">
                      <figure class="image is300x170">
                        <img
                          class="is-centered"
                          src="../assets/20160819_111401-e1476995529285-300x169.jpg"
                          alt="Unwind R function"
                        />
                        <figcaption class="is-centered ml-4">
                          Unwind R function
                        </figcaption>
                      </figure>
                    </div>
                  </div>

                  <div class="block">
                    <p>
                      While working on Yelp's 'users' dataset, I needed to
                      'unwind' the list of friends that each user has, append it
                      to the user itself (thus creating two rows, one with
                      user_id and one with the list of friends) and then
                      <em>rbind</em> for each user.
                    </p>
                  </div>
                  <div class="block">
                    <p>
                      The idea of the
                      <a
                        href="https://gist.github.com/AviBlinder/235373d621562c63bd57ed07cc517c94"
                        target="_blank"
                      >
                        'unwind' function</a
                      >
                      is taken from MongoDB, where it is a build-it one.<br />
                      The need to unwind is quite common when working with JSON
                      objects, since having arrays embedded in documents is
                      common usage.
                    </p>
                  </div>
                  <div class="block">
                    <p>
                      The function worked quite fast and efficiently for me.
                    </p>
                  </div>
                  <p>
                    <mark> Below is the function's code </mark>
                  </p>

                  <code> unwind <- function(df,col1,col2,idx){ </code>
                  <br />
                  <code> unwinded_column <- unlist(df[idx,col2]) </code>
                  <br />
                  <code> unwinded_list <- data.frame() </code>
                  <br />
                  <code>
                    unwinded_list <-
                    data.frame(cbind(df[idx,col1],unwinded_column))
                  </code>
                  <br />
                  <code> if ( (dim(unwinded_list)[2]) == 2){ </code>
                  <br />
                  <code> names(unwinded_list) <- c(col1,col2) </code>
                  <br />
                  <code> } else{ </code>
                  <br />
                  <code> unwinded_list <- data.frame() </code>
                  <br />
                  <code> } </code>
                  <br />
                  <code> return (unwinded_list) } </code>

                  <p class="has-text-left ml-4 my-4">
                    <mark>
                      Input explanation:
                      <br />
                      df = the whole dataframe<br />
                      col1 = key column<br />
                      col2 = list column<br />
                      row number in the dataframe (since this function is
                      performed in a loop)
                    </mark>
                  </p>

                  <div class="block my-3">
                    <p>
                      <strong>Example</strong>:<br />
                      unwind(users'user_id''friends',i)
                    </p>
                  </div>
                  <div class="block">
                    <p>Enjoy it...</p>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import postsSideBar from "@/components/postsSideBar";
export default {
  components: {
    postsSideBar,
  },
  data() {
    return {
      post_id: 7,
    };
  },
};
</script>

<style scoped>
mark {
  background-color: rgb(104, 242, 247);
}
.is-horizontal-center {
  justify-content: center;
}

.card {
  box-shadow: none;
}
</style>