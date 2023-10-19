<template>
  <div>
    <section class="section">
      <div class="container">
        <div class="mt-5 columns is-4">
          <div class="column is-3 is-hidden-mobile is-vcentered">
            <posts-side-bar :currentPost="post_id"> </posts-side-bar>
          </div>
          <div class="column is-7">
            <div class="section">
              <div class="container">
                <h1 class="is-size-4 has-text-centered has-text-weight-medium	">
                  Kickstarter &#8211; Before you launch a new project, check
                  success rates
                </h1>
                <article>
                  <div class="block my-3">
                    <p>
                      <mark>
                      Ever wonder what are the odds of success or failure of
                      Kickstarter projects?
                      </mark>
                    </p>
                  </div>
                  <div class="block">
                    <p>
                      Well, it depends on the field...For example if you have a
                      <em>Crafts</em> project, you have almost 17% of failure
                      chance...On the other hand, if you have a
                      <em>dancing </em>project, your success rate are around
                      93%!
                    </p>
                    </div>
                  <div class="block">                    
                    <p>
                      Click the following link in order to get the dashboard
                      showing all the
                      <strong
                        ><a
                          href="https://public.tableau.com/views/KickstarterProjectsStats/KickstarterProjecsStats?:embed=y&amp;:display_count=yes"
                          target="_blank"
                          >Kickstarter Stats</a
                        ></strong
                      >
                    </p>
                    <div class="block my-4">
                    <p>Enjoy!</p>
                    </div>
                  </div>
                  <!-- . -->
                </article>
              </div>
            </div>
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
      post_id: 1,
    };
  },
};
</script>

<style scoped>
mark {
  background-color: rgb(104, 242, 247);
}
</style>