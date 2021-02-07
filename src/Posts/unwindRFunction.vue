<template>
  <div>
    <article
      id="post-308"
      class="et_pb_post post-308 post type-post status-publish format-standard hentry category-data_science_topics category-neo4j"
    >
      <div class="et_post_meta_wrapper">
        <h1 class="entry-title">&#8216;unwind&#8217; R function</h1>

        <p class="post-meta">
          <span class="published">Oct 15, 2016</span> |
          <a
            href="http://www.dataforfun.com/category/data_science_topics/"
            rel="category tag"
            >Data Science</a
          >,
          <a href="http://www.dataforfun.com/category/neo4j/" rel="category tag"
            >NEO4J</a
          >
          |
          <span class="comments-number"
            ><a href="http://www.dataforfun.com/unwind-r-function/#respond"
              >0 comments</a
            ></span
          >
        </p>
      </div>
      <!-- .et_post_meta_wrapper -->

      <div class="entry-content">
        <div id="et-boc" class="et-boc">
          <div class="et-l et-l--post">
            <div class="et_builder_inner_content et_pb_gutters3">
              <div class="et_pb_section et_pb_section_0 et_section_regular">
                <div class="et_pb_row et_pb_row_0">
                  <div
                    class="et_pb_column et_pb_column_4_4 et_pb_column_0  et_pb_css_mix_blend_mode_passthrough et-last-child"
                  >
                    <div
                      class="et_pb_module et_pb_text et_pb_text_0  et_pb_text_align_left et_pb_bg_layout_light"
                    >
                      <div class="et_pb_text_inner">
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
                          While working on Yelp&#8217;s &#8216;users&#8217;
                          dataset, I needed to &#8220;unwind&#8217; the list of
                          friends that each user has, append it to the user
                          itself (thus creating two rows, one with user_id and
                          one with the list of friends) and then rbind for each
                          user.
                        </p>
                        <p>
                          The idea of the &#8216;unwind&#8217; function is taken
                          from MongoDB, where it is a build-it one.<br />
                          The need to unwind is quite common when working with
                          JSON objects, since having arrays embedded in
                          documents is common usage.
                        </p>
                        <p>
                          The function worked quite fast and efficiently for me.
                        </p>
                        <p>
                          <strong>Below is the function&#8217;s code.</strong>
                        </p>
                        <p>
                          <strong>Input explanation:</strong><br />
                          df = the whole dataframe<br />
                          col1 = key column<br />
                          col2 = list column<br />
                          row number in the dataframe (since this function is
                          performed in a loop)
                        </p>
                        <p>
                          <strong>Example</strong>:<br />
                          unwind(users,&#8221;user_id&#8221;,&#8221;friends&#8221;,i)
                        </p>
                        <p>Enjoy it&#8230;</p>
                      </div>
                    </div>
                    <!-- .et_pb_text -->
                  </div>
                  <!-- .et_pb_column -->
                </div>
                <!-- .et_pb_row -->
              </div>
              <!-- .et_pb_section -->
            </div>
            <!-- .et_builder_inner_content -->
          </div>
          <!-- .et-l -->
        </div>
        <!-- #et-boc -->
      </div>
      <!-- .entry-content -->
    </article>
  </div>
</template>

<script>
  export default {};
</script>

<style scoped></style>
