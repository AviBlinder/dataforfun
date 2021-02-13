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
                    Working with NEO4J – Some practical tips
                  </h1>

                  <div class="card equal-height">
                    <div class="card-content is-flex is-horizontal-center">
                      <figure class="image is300x120">
                        <img
                          class="is-centered"
                          src="../assets/neo-tips-300x121.png"
                          alt="Neo4J Tips "
                          srcset="
                            ../assets/neo-tips-300x121.png 300w,
                            ../assets/neo-tips.png         362w
                          "
                          sizes="(max-width: 300px) 100vw, 300px"
                        />
                        <figcaption class="is-centered ml-4">
                          Neo4J Tips
                        </figcaption>
                      </figure>
                    </div>
                  </div>

                  <div class="block">
                    <p>
                      As part of a data science project&nbsp;that involved
                      working on NEO4J database&nbsp;(using the
                      <em>community</em> edition) I came across some issues
                      which I'm summarizing as tips in the hope that they will
                      save time and prevent headaches for others.
                    </p>
                  </div>

                  <h4 class="block">
                    <strong>Tip #1: Manage your databases:</strong>
                  </h4>
                  <div class="block">
                    <p>
                      Since (as far as I know) one cannot switch between
                      databases when working with Neo4J, I recommend simply
                      creating them beforehand so one can easily go to the
                      necessary database when needed.
                    </p>
                  </div>

                  <div class="card equal-height">
                    <div class="card-content is-flex is-horizontal-center">
                      <figure class="image is300x200">
                        <img
                          class="is-centered"
                          src="../assets/Neo-Tips-Pic1-300x197.png"
                          alt="Tip 1 "
                          srcset="
                            ../assets/Neo-Tips-Pic1-300x197.png 300w,
                            ../assets/Neo-Tips-Pic1.png         415w
                          "
                          sizes="(max-width: 300px) 100vw, 300px"
                        />
                        <figcaption class="is-centered ml-4">Tip 1</figcaption>
                      </figure>
                    </div>
                  </div>

                  <div class="block">
                    <p>
                      This is also a great way to share work: instead of
                      reloading nodes and relationships, you can just share the
                      whole DB (e.g. DB folder and subfolders) with another
                      person, who can connect to it seamlessly.
                    </p>
                  </div>

                  <h4 class="block">
                    <strong
                      >Tip #2: Loading files from any location on your
                      machine</strong
                    >
                  </h4>
                  <div class="block">
                    <p>
                      The default option in NE4OJ configuration file forces you
                      to UPLOAD files from a predefined 'import' folder.
                    </p>
                  </div>
                  <div class="block">
                    <p>
                      To be able to upload files from any location, just comment
                      down the
                    </p>
                  </div>
                  <div class="block">
                    <p>'dbms.directories.import=import' line:</p>
                    <p><strong>#dbms.directories.import=import</strong></p>
                  </div>

                  <div class="block">
                    <p>Below are the (three) steps you need to follow:</p>
                  </div>
                  <div class="block">
                    <p>Step 1 &#8211; Click <strong>Options</strong></p>
                  </div>

                  <div class="card equal-height">
                    <div class="card-content is-flex is-horizontal-center">
                      <figure class="image is300x200">
                        <img
                          class="is-centered"
                          src="../assets/Neo-Tips-Pic2-300x197.png"
                          alt="Step 1"
                          srcset="
                            ../assets/Neo-Tips-Pic2-300x197.png 300w,
                            ../assets/Neo-Tips-Pic2.png         415w
                          "
                          sizes="(max-width: 300px) 100vw, 300px"
                        />
                        <figcaption class="is-centered ml-4">Step 1</figcaption>
                      </figure>
                    </div>
                  </div>

                  <div class="block">
                    <p>
                      Step 2 &#8211; Click
                      first&nbsp;<strong>Edit&nbsp;</strong>button
                    </p>
                  </div>
                  <div class="card equal-height">
                    <div class="card-content is-flex is-horizontal-center">
                      <figure class="image is300x200">
                        <img
                          class="is-centered"
                          src="../assets/Neo-Tips-Pic3-300x185.png"
                          alt="Step 2"
                          srcset="
                            ../assets/Neo-Tips-Pic3-300x185.png 300w,
                            ../assets/Neo-Tips-Pic3.png         518w
                          "
                          sizes="(max-width: 300px) 100vw, 300px"
                        />
                        <figcaption class="is-centered ml-4">Step 2</figcaption>
                      </figure>
                    </div>
                  </div>

                  <div class="block">
                    <p>Step 3&nbsp;&#8211;&nbsp;Comment line</p>
                  </div>

                  <div class="card equal-height">
                    <div class="card-content is-flex is-horizontal-center">
                      <figure class="image is300x200">
                        <img
                          class="is-centered"
                          src="../assets/Neo-Tips-Pic4-300x89.png"
                          alt="Step 3"
                          srcset="
                            ../assets/Neo-Tips-Pic4-300x89.png 300w,
                            ../assets/Neo-Tips-Pic4.png        720w
                          "
                          sizes="(max-width: 300px) 100vw, 300px"
                        />
                        <figcaption class="is-centered ml-4">Step 3</figcaption>
                      </figure>
                    </div>
                  </div>

                  <div class="block">
                    <p>
                      <strong
                        >BTW, in case you performed the change while the DB is
                        running, you will need to stop and start the DB for the
                        changes to take effect.</strong
                      >
                    </p>
                  </div>
                  <h4>
                    <strong
                      >Tip #3: As soon as you define/upload data to a new node,
                      create an Index</strong
                    >
                  </h4>
                  <div class="block">
                    <p>
                      Several times I've rushed to create a node and then
                      uploaded relationships between the node and other ones,
                      but it took me a while to figure out that the process was
                      sluggish since I forgot to create a corresponding index.
                    </p>
                  </div>
                  <div class="block">
                    <p>
                      You can make sure you have indexes created for the
                      relevant nodes by typing <strong>:schema</strong> on the
                      command line:
                    </p>
                  </div>
                  <div class="card equal-height">
                    <div class="card-content is-flex is-horizontal-center">
                      <figure class="image is300x200">
                        <img
                          class="is-centered"
                          src="../assets/Neo-Tips-Pic5-300x208.png"
                          alt="Tip 3"
                          srcset="
                            ../assets/Neo-Tips-Pic5-300x208.png 300w,
                            ../assets/Neo-Tips-Pic5.png         404w
                          "
                          sizes="(max-width: 300px) 100vw, 300px"
                        />
                        <figcaption class="is-centered ml-4">Tip 3</figcaption>
                      </figure>
                    </div>
                  </div>

                  <h4 class="block my-3">
                    <strong
                      >Tip #4: Use 'apoc' plugins (current version:
                      'apoc-3.0.4.1-all')</strong
                    >
                  </h4>
                  <div class="block">
                    <p>
                      This collection of utilities can help you with several
                      tasks. You can refer to
                    </p>
                  </div>

                  <p>
                    <a
                      href="https://neo4j-contrib.github.io/neo4j-apoc-procedures"
                      >https://neo4j-contrib.github.io/neo4j-apoc-procedures</a
                    >
                    for an in-depth documentation.
                  </p>
                  <p>
                    You will need to copy this file to the 'plugins' folder of
                    <strong>each DB </strong>you work with.
                  </p>
                  <p>
                    My favorite utility is <strong>$</strong
                    ><strong>call apoc.meta.graph,</strong> which depicts the
                    loaded schema (e.g. nodes and their relationships).
                  </p>
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
      post_id: 6,
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