<template>
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
                <h1 class="is-size-4 has-text-centered has-text-weight-medium">
                  Analyzing R package trends and adoption of new technologies by
                  the R community
                </h1>

                <h3 class="subtitle has-text-centered">Introduction</h3>
                <div class="block">
                  <p>
                    Ever wondered how a certain technology is adopted by the R
                    users' community?
                  </p>
                </div>
                <div class="block">
                  <p>
                    <mark>
                      Ever wanted to know how a specific package is downloaded
                      in different countries, or during different periods?
                    </mark>
                  </p>
                </div>
                <div class="block">
                  <p>
                    <mark>
                      In order to answer those questions and similar ones, I've
                      created the<span style="color: #3366ff"
                        ><strong>
                          <a
                            style="color: #3366ff"
                            href="https://cran.r-project.org/web/packages/rtrends/index.html"
                            target="_blank"
                          >
                            rtrends
                          </a>
                        </strong></span
                      >package.
                    </mark>
                  </p>
                </div>
                <div class="block">
                  <p>
                    This package is inspired by
                    <span style="color: #3366ff"
                      ><strong
                        ><a
                          style="color: #3366ff"
                          href="https://www.google.com/trends/"
                          target="_blank"
                          >Google Trends tool</a
                        >&nbsp;</strong
                      ></span
                    >, which allows you to search and compare various&nbsp;terms
                    and displays results throughout periods of&nbsp;time and at
                    varying geographic locations.
                  </p>
                </div>
                <div class="block">
                  <p>
                    The
                    <span style="color: #3366ff">rtrends</span>&nbsp;package has
                    several functions, of which the most important one (in my
                    opinion) is
                    <strong><em>cran_stats_by_packages,</em></strong>
                    which allows you to get CRAN information downloads (<strong
                      >based on RStudio mirror site logs</strong
                    >) for a range of dates and for a list of packages.
                  </p>
                </div>
                <div class="block">
                  <p>
                    This functionality is quite similar to the one offered by
                    Google Trends for comparing search trends and patterns
                    concerning different terms.
                  </p>
                </div>
                <div class="block">
                  <p>
                    <mark>
                      One of the advantages of<em> rtrends</em> package is that
                      it enables you to understand how certain technologies are
                      implemented among R users (in contrast to Google trends,
                      where you are not always sure if a specific search term
                      relates to a specific technology or to some other
                      unrelated issue).
                    </mark>
                  </p>
                </div>
                <h3 class="subtitle has-text-centered">Use Case</h3>
                <div class="block">
                  <p>
                    In order to test the package, and compare it with Google
                    Trends, I downloaded information about three&nbsp;relatively
                    new technologies, in an attempt to understand their
                    rate&nbsp;of acceptance and usage among R users community.
                  </p>
                </div>
                <div class="block">
                  <p>
                    The technologies I was interested in are:
                    <span style="color: #3366ff"
                      ><strong
                        ><a style="color: #3366ff" href="https://neo4j.com/"
                          >NEO4J</a
                        >
                      </strong></span
                    >
                    (a native graph database),<span style="color: #3366ff">
                      <strong
                        ><a
                          style="color: #3366ff"
                          href="https://www.mongodb.com/"
                        >
                          MongoDB</a
                        ></strong
                      >
                    </span>
                    (a NoSQL,document-oriented, database) and
                    <span style="color: #3366ff"
                      ><strong
                        ><a
                          style="color: #3366ff"
                          href="http://spark.apache.org"
                          >Spark</a
                        ></strong
                      ></span
                    >
                    (an open source cluster computing framework).
                  </p>
                </div>
                <div class="block">
                  <p>
                    Each of those technologies has R APIs (in the form of
                    packages) which enables communicating with them thru R
                    platform.
                  </p>
                </div>
                <div class="block">
                  <p>
                    Now, in order to make things more interesting, sometimes
                    there is more than one R package for each DB/technology or
                    at certain points in time, a package is deprecated and
                    replaced by new ones.
                  </p>
                </div>
                <div class="block">
                  <p>
                    Below is a list of packages connected to each of the
                    analyzed databases/technologies:
                  </p>
                </div>
                <ol>
                  <li class="my-3">
                    <strong>MongoDB</strong>: Since this is the most
                    &#8216;veteran' technology, it has (or had) three different
                    R packages:
                    <ul>
                      <li class="my-3">
                        rmongodb: This package was quite popular (see plot
                        below), but got deprecated and removed from CRAN
                        repository by Aug 25, 2016.
                      </li>
                      <li class="my-3">
                        <strong
                          ><span style="color: #3366ff"
                            ><a
                              style="color: #3366ff"
                              href="https://cran.r-project.org/web/packages/RMongo/index.html"
                              target="_blank"
                              >RMongo</a
                            ></span
                          >: </strong
                        >A MongoDB interface for R.
                      </li>
                      <li>
                        <strong
                          ><span style="color: #3366ff"
                            ><a
                              style="color: #3366ff"
                              href="https://cran.r-project.org/web/packages/mongolite/index.html"
                              target="_blank"
                              >mongolite</a
                            ></span
                          >:</strong
                        >
                        A MongoDB client based on libmongoc' and 'jsonlite'
                        packages.
                      </li>
                    </ul>
                  </li>
                  <li class="my-3">
                    <strong>NEO4J</strong>:
                    <ul>
                      <li class="my-3">
                        <strong
                          ><span style="color: #3366ff"
                            ><a
                              style="color: #3366ff"
                              href="https://cran.r-project.org/web/packages/RNeo4j/index.html"
                              target="_blank"
                              >RNeo4j</a
                            ></span
                          >:</strong
                        >
                        The R driver for interacting with a NEO4J DB.
                      </li>
                    </ul>
                  </li>
                  <li class="my-3">
                    <strong>Spark</strong>:
                    <ul>
                      <li>
                        <strong
                          ><span style="color: #3366ff"
                            ><a
                              style="color: #3366ff"
                              href="https://cran.r-project.org/web/packages/sparklyr/index.html"
                              target="_blank"
                              >sparklyr</a
                            ></span
                          >:</strong
                        >
                        An R interface for Apache Spark, based on dplyr syntax.
                      </li>
                    </ul>
                  </li>
                </ol>
                <div class="block">
                  <p>
                    (Note: there is also an older package &ndash;<span
                      style="color: #000000"
                    >
                      <a
                        href="https://spark.apache.org/docs/1.6.2/sparkr.html"
                        style="color: #000000"
                        >sparkR</a
                      ></span
                    >
                    &ndash; but since it is not on CRAN, it cannot be measured.)
                  </p>
                </div>
                <div class="block">
                  <p>
                    The analysis of trends is based on a period of five months,
                    ranging from&nbsp;<strong
                      >July 18, 2016 thru November 18, 2016.</strong
                    >
                  </p>
                </div>
                <div class="block">
                  <p>
                    I also used Google Trends in order to analyze and compare
                    the trends as they are reflected by both methodologies.
                  </p>
                </div>

                <div class="block">
                  <p>
                    According to Google trends plot, MongoDB is by far the most
                    frequently searched (and thus popular?) technology of the
                    three compared.
                  </p>
                </div>
                <div class="block">
                  <p>
                    It looks like the trends are quite stable, meaning that each
                    technology/database keeps its 'status quo' in relation to
                    the others.
                  </p>
                </div>
                <div class="block">
                  <p>
                    Also, an interesting pattern is the weekly drops in
                    searches, meaning that those terms are searched mainly
                    during workdays and are less searched on weekends.
                  </p>
                </div>

                <div class="block">
                  <span
                    ><img
                      src="../assets/Daily-Downloads-of-Selected-Packages-1.png"
                      alt="Daily Downloads of MongoDB vs RNeo4j vs Spark related packages"
                      title="Daily Downloads of MongoDB, RNeo4j and Spark related packages"
                      srcset="
                        ../assets/Daily-Downloads-of-Selected-Packages-1.png          1862w,
                        ../assets/Daily-Downloads-of-Selected-Packages-1-300x257.png   300w,
                        ../assets/Daily-Downloads-of-Selected-Packages-1-768x658.png   768w,
                        ../assets/Daily-Downloads-of-Selected-Packages-1-1024x878.png 1024w,
                        ../assets/Daily-Downloads-of-Selected-Packages-1-1080x926.png 1080w
                      "
                      sizes="(max-width: 1862px) 100vw, 1862px"
                  /></span>
                </div>

                <div class="block">
                  <p>
                    In order to make a similar comparison based on
                    <em><strong>downloads from RStudio CRAN mirror</strong></em
                    >, first I united the three MongoDB R packages into one
                    term.
                  </p>
                </div>
                <div class="block">
                  <p>
                    Evidently, since its upload to CRAN on September 24 2016,
                    <strong>sparklyr</strong> seems to be 'on steroids':
                    compared to Google Trends, it is downloaded more than three
                    times more often than all the other packages combinded.
                  </p>
                </div>
                <div class="block">
                  <span
                    ><img
                      src="../assets/Distribution-of-Packages-by-Continent.png"
                      alt="Distribution of package downloads by Continents"
                      title=""
                      srcset="
                        ../assets/Distribution-of-Packages-by-Continent.png          1862w,
                        ../assets/Distribution-of-Packages-by-Continent-300x257.png   300w,
                        ../assets/Distribution-of-Packages-by-Continent-768x658.png   768w,
                        ../assets/Distribution-of-Packages-by-Continent-1024x878.png 1024w,
                        ../assets/Distribution-of-Packages-by-Continent-1080x926.png 1080w
                      "
                      sizes="(max-width: 1862px) 100vw, 1862px"
                  /></span>
                </div>

                <div class="block">
                  <p>
                    <mark>
                      A comparison of the distribution of downloads by
                      continent, which does not take into account population
                      size, shows that it is North America and Europe that set
                      the general trends (since most of the downlaods occur in
                      those locations). However, when isolating the information
                      by different continents, the following becomes evident:
                    </mark>
                  </p>
                </div>
                <ol>
                  <li class="my-3 ml-3">
                    <mark>
                      In <strong>Asia</strong> there is an almost similar
                      interest in MongoDB and Spark related packages
                    </mark>
                  </li>
                  <li class="my-3 ml-3">
                    <mark>
                      In <strong>South America, </strong>there is equal interest
                      in all three technologies (of course, since the numbers
                      are relatively low, they may reflect usage of those
                      packages by educational institutions, for example).
                    </mark>
                  </li>
                </ol>

                <div class="block">
                  <span
                    ><img
                      src="../assets/Daily-Downloads-of-MongoDB-Related-Packages.png"
                      alt="Daily Downloads of MongoDB-related packages"
                      title=""
                      srcset="
                        ../assets/Daily-Downloads-of-MongoDB-Related-Packages.png          1862w,
                        ../assets/Daily-Downloads-of-MongoDB-Related-Packages-300x257.png   300w,
                        ../assets/Daily-Downloads-of-MongoDB-Related-Packages-768x658.png   768w,
                        ../assets/Daily-Downloads-of-MongoDB-Related-Packages-1024x878.png 1024w,
                        ../assets/Daily-Downloads-of-MongoDB-Related-Packages-1080x926.png 1080w
                      "
                      sizes="(max-width: 1862px) 100vw, 1862px"
                  /></span>
                </div>

                <div>
                  <div>
                    <h3 class="subtitle has-text-centered">Conclusion</h3>
                    <div class="block">
                      <p>
                        Each of those tools may create a different picture of
                        reality.
                      </p>
                    </div>
                    <div class="block">
                      <p>
                        Google Trends creates a picture where the popularity of
                        those three technologies remains quite stable throughout
                        time.
                      </p>
                    </div>
                    <div class="block">
                      <p>
                        On the other hand, we get quite a different picture of
                        the same technologies, based on the rate at which they
                        are adopted by the R users' community, as reflected in
                        RStudio CRAN download logs.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import postsSideBar from "@/components/postsSideBar";
export default {
  components: {
    postsSideBar,
  },
  data() {
    return {
      post_id: 5,
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