<template>
  <div>
    <article id="post-475">
      <div>
        <h1 class="entry-title">Working with NEO4J – Some practical tips</h1>

        <p class="post-meta">
          <span class="published">Oct 28, 2016</span> |
          <a
            href="http://www.dataforfun.com/category/data-analysis/"
            rel="category tag"
            >Data Analysis</a
          >,
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
            ><a href="http://www.dataforfun.com/475-2/#respond"
              >0 comments</a
            ></span
          >
        </p>
      </div>
      <!-- .et_post_meta_wrapper -->

      <div class="entry-content">
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
                            class="size-medium wp-image-486 aligncenter"
                            src="../assets/neo-tips-300x121.png"
                            alt="neo-tips"
                            width="300"
                            height="121"
                            srcset="
                              ../assets/neo-tips-300x121.png 300w,
                              ../assets/neo-tips.png         362w
                            "
                            sizes="(max-width: 300px) 100vw, 300px"
                          />
                        </p>
                        <p>&nbsp;</p>
                        <p>
                          As part of a data science project&nbsp;that involved
                          working on NEO4J database&nbsp;(using the
                          <em>community</em> edition) I came across some issues
                          which I'm summarizing as tips in the hope that they
                          will save time and prevent headaches for others.
                        </p>
                        <p>&nbsp;</p>
                        <h4><strong>Tip #1: Manage your databases:</strong></h4>
                        <p>
                          Since (as far as I know) one cannot switch between
                          databases when working with Neo4J, I recommend simply
                          creating them beforehand so one can easily go to the
                          necessary database when needed.
                        </p>
                        <p>
                          <img
                            class="alignleft size-medium wp-image-476"
                            src="../assets/Neo-Tips-Pic1-300x197.png"
                            alt="neo-tips-pic1"
                            width="300"
                            height="197"
                            srcset="
                              ../assets/Neo-Tips-Pic1-300x197.png 300w,
                              ../assets/Neo-Tips-Pic1.png         415w
                            "
                            sizes="(max-width: 300px) 100vw, 300px"
                          />
                        </p>
                        <p>
                          This is also a great way to share work: instead of
                          reloading nodes and relationships, you can just share
                          the whole DB (e.g. DB folder and subfolders) with
                          another person, who can connect to it seamlessly.
                        </p>
                        <h4></h4>
                        <p>&nbsp;</p>
                        <p>&nbsp;</p>
                        <h4>
                          <strong
                            >Tip #2: Loading files from any location on your
                            machine</strong
                          >
                        </h4>
                        <p>
                          The default option in NE4OJ configuration file forces
                          you to UPLOAD files from a predefined 'import' folder.
                        </p>
                        <p>
                          To be able to upload files from any location, just
                          comment down the
                        </p>
                        <p>'dbms.directories.import=import' line:</p>
                        <p><strong>#dbms.directories.import=import</strong></p>
                        <p>
                          Below are the&nbsp;(three) steps you need to follow:
                        </p>
                        <p>
                          <img
                            class="alignleft size-medium wp-image-477"
                            src="../assets/Neo-Tips-Pic2-300x197.png"
                            alt="neo-tips-pic2"
                            width="300"
                            height="197"
                            srcset="
                              ../assets/Neo-Tips-Pic2-300x197.png 300w,
                              ../assets/Neo-Tips-Pic2.png         415w
                            "
                            sizes="(max-width: 300px) 100vw, 300px"
                          />
                        </p>
                        <p>&nbsp;</p>
                        <p>&nbsp;</p>
                        <p>&nbsp;</p>
                        <p>&nbsp;</p>
                        <p>&nbsp;</p>
                        <p>Step 1 &#8211; Click <strong>Options</strong></p>
                        <p>
                          <img
                            class="size-medium wp-image-478 alignleft"
                            src="../assets/Neo-Tips-Pic3-300x185.png"
                            alt="neo-tips-pic3"
                            width="300"
                            height="185"
                            srcset="
                              ../assets/Neo-Tips-Pic3-300x185.png 300w,
                              ../assets/Neo-Tips-Pic3.png         518w
                            "
                            sizes="(max-width: 300px) 100vw, 300px"
                          />
                        </p>
                        <p>&nbsp;</p>
                        <p>&nbsp;</p>
                        <p>&nbsp;</p>
                        <p>&nbsp;</p>
                        <p>&nbsp;</p>
                        <p>
                          Step 2 &#8211; Click
                          first&nbsp;<strong>Edit&nbsp;</strong>button
                        </p>
                        <p>
                          <img
                            class="alignleft size-medium wp-image-479"
                            src="../assets/Neo-Tips-Pic4-300x89.png"
                            alt="neo-tips-pic4"
                            width="300"
                            height="89"
                            srcset="
                              ../assets/Neo-Tips-Pic4-300x89.png 300w,
                              ../assets/Neo-Tips-Pic4.png        720w
                            "
                            sizes="(max-width: 300px) 100vw, 300px"
                          />
                        </p>
                        <p>&nbsp;</p>
                        <p>&nbsp;</p>
                        <p>&nbsp;</p>
                        <p>Step 3&nbsp;&#8211;&nbsp;Comment line</p>
                        <p>
                          <strong
                            >BTW, in case you performed the change while the DB
                            is running, you will need to stop and start the DB
                            for the changes to take effect.</strong
                          >
                        </p>
                        <h4>
                          <strong
                            >Tip #3: As soon as you define/upload data to a new
                            node, create an Index</strong
                          >
                        </h4>
                        <p>
                          Several times I've rushed to create a node and then
                          uploaded relationships between the node and other
                          ones, but it took me a while to figure out that the
                          process was sluggish since I forgot to create a
                          corresponding index.
                        </p>
                        <p>
                          You can make sure you have indexes created for the
                          relevant nodes by typing <strong>:schema</strong> on
                          the command line:
                        </p>
                        <p>
                          <img
                            class="alignleft size-medium wp-image-480"
                            src="../assets/Neo-Tips-Pic5-300x208.png"
                            alt="neo-tips-pic5"
                            width="300"
                            height="208"
                            srcset="
                              ../assets/Neo-Tips-Pic5-300x208.png 300w,
                              ../assets/Neo-Tips-Pic5.png         404w
                            "
                            sizes="(max-width: 300px) 100vw, 300px"
                          />
                        </p>
                        <p>&nbsp;</p>
                        <p>&nbsp;</p>
                        <p>&nbsp;</p>
                        <p>&nbsp;</p>
                        <p>&nbsp;</p>
                        <p>&nbsp;</p>
                        <h4>
                          <strong
                            >Tip #4: Use 'apoc' plugins (current version:
                            'apoc-3.0.4.1-all')</strong
                          >
                        </h4>
                        <p>
                          This collection of utilities can help you with several
                          tasks. You can refer to
                        </p>
                        <p>
                          <a
                            href="https://neo4j-contrib.github.io/neo4j-apoc-procedures"
                            >https://neo4j-contrib.github.io/neo4j-apoc-procedures</a
                          >
                          for an in-depth documentation.
                        </p>
                        <p>
                          You will need to copy this file to the 'plugins'
                          folder of
                          <strong>each DB </strong>you work with.
                        </p>
                        <p>
                          My favorite utility is <strong>$</strong
                          ><strong>call apoc.meta.graph,</strong> which depicts
                          the loaded schema (e.g. nodes and their
                          relationships).
                        </p>
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
      <!-- .entry-content -->
      <div>
        <section>
          <div>
            <!-- If comments are open, but there are no comments. -->
          </div>
        </section>
      </div>
      <!-- .et_post_meta_wrapper -->
    </article>
  </div>
</template>

<script>
export default {};
</script>

<style scoped></style>
