<template>
  <article
    id="post-656"
    class="et_pb_post post-656 post type-post status-publish format-standard hentry category-data-analysis category-data_science_topics category-date_viz category-r-post tag-r-post"
  >
    <div class="et_post_meta_wrapper">
      <h1 class="entry-title">
        Analyzing R package trends and adoption of new technologies by the R
        community
      </h1>
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
                      <h3>Introduction</h3>
                      <p>
                        Ever wondered how a certain technology is adopted by the
                        R users&#8217; community?
                      </p>
                      <p>
                        Ever wanted to know how a specific package is downloaded
                        in different countries, or during different periods?
                      </p>
                      <p>
                        In order to answer those questions and similar ones,
                        I&#8217;ve created the<span style="color: #3366ff;"
                          ><strong>
                            <a
                              style="color: #3366ff;"
                              href="https://cran.r-project.org/web/packages/rtrends/index.html"
                              target="_blank"
                              >rtrends</a
                            >
                          </strong></span
                        >package.
                      </p>
                      <p>
                        This package is inspired by&nbsp;<span
                          style="color: #3366ff;"
                          ><strong
                            ><a
                              style="color: #3366ff;"
                              href="https://www.google.com/trends/"
                              target="_blank"
                              >Google Trends tool,</a
                            >&nbsp;</strong
                          ></span
                        >which allows you to search and compare
                        various&nbsp;terms and displays results throughout
                        periods of&nbsp;time and at varying geographic
                        locations.
                      </p>
                      <p>
                        The
                        <span style="color: #3366ff;">rtrends</span
                        >&nbsp;package has several functions, of which the most
                        important one (in my opinion) is
                        <strong><em>cran_stats_by_packages,</em></strong> which
                        allows you to get CRAN information downloads (<strong
                          >based on RStudio mirror site logs</strong
                        >) for a range of dates and for a list of packages.
                      </p>
                      <p>
                        This functionality is quite similar to the one offered
                        by Google Trends for comparing search trends and
                        patterns concerning different terms.
                      </p>
                      <p>
                        One of the advantages of<em> rtrends</em> is that it
                        enables you to understand how certain technologies are
                        implemented among R users (in contrast to Google trends,
                        where you are not always sure if a specific search term
                        relates to a specific technology or to some other
                        unrelated issue).
                      </p>
                      <h3>Use Case</h3>
                      <p>
                        In order to test the package, and compare it with Google
                        Trends, I downloaded information about
                        three&nbsp;relatively new technologies, in an attempt to
                        understand their rate&nbsp;of acceptance and usage among
                        R users community.
                      </p>
                      <p>
                        The technologies I was interested in are:
                        <span style="color: #3366ff;"
                          ><strong
                            ><a
                              style="color: #3366ff;"
                              href="https://neo4j.com/"
                              >NEO4J</a
                            >
                          </strong></span
                        >(a native graph database),<span
                          style="color: #3366ff;"
                        >
                          <strong
                            ><a
                              style="color: #3366ff;"
                              href="https://www.mongodb.com/"
                              >MongoDB</a
                            ></strong
                          > </span
                        >(a NoSQL,document-oriented, database) and
                        <span style="color: #3366ff;"
                          ><strong
                            ><a
                              style="color: #3366ff;"
                              href="http://spark.apache.org"
                              >Spark</a
                            ></strong
                          ></span
                        >
                        (an open source cluster computing framework).
                      </p>
                      <p>
                        Each of those technologies has an R API (in the form of
                        packages) which enables communicating with them thru R
                        platform.
                      </p>
                      <p>
                        Now, in order to make things more interesting, sometimes
                        there is more than one R package for each DB/technology
                        or at certain points in time, &nbsp;a package is
                        deprecated and replaced by new ones.
                      </p>
                      <p>
                        Below is a list of packages connected to each of the
                        analyzed databases/technologies:
                      </p>
                      <ol>
                        <li>
                          <strong>MongoDB</strong>: &nbsp;Since this is the most
                          &#8216;veteran&#8217; technology, it has (or had)
                          three different R packages:
                          <ul>
                            <li>
                              rmongodb: This package was quite popular (see plot
                              below), but got deprecated and removed from CRAN
                              repository by Aug 25, 2016.
                            </li>
                            <li>
                              <strong
                                ><span style="color: #3366ff;"
                                  ><a
                                    style="color: #3366ff;"
                                    href="https://cran.r-project.org/web/packages/RMongo/index.html"
                                    target="_blank"
                                    >RMongo</a
                                  ></span
                                >: </strong
                              >A MongoDB interface for R.
                            </li>
                            <li>
                              <strong
                                ><span style="color: #3366ff;"
                                  ><a
                                    style="color: #3366ff;"
                                    href="https://cran.r-project.org/web/packages/mongolite/index.html"
                                    target="_blank"
                                    >mongolite</a
                                  ></span
                                >:</strong
                              >
                              A&nbsp;MongoDB client based on
                              &#8216;libmongoc&#8217; and &#8216;jsonlite&#8217;
                              packages.
                            </li>
                          </ul>
                        </li>
                        <li>
                          <strong>NEO4J</strong>:
                          <ul>
                            <li>
                              <strong
                                ><span style="color: #3366ff;"
                                  ><a
                                    style="color: #3366ff;"
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
                        <li>
                          <strong>Spark</strong>:
                          <ul>
                            <li>
                              <strong
                                ><span style="color: #3366ff;"
                                  ><a
                                    style="color: #3366ff;"
                                    href="https://cran.r-project.org/web/packages/sparklyr/index.html"
                                    target="_blank"
                                    >sparklyr</a
                                  ></span
                                >:</strong
                              >
                              An R interface for Apache Spark, based on dplyr
                              syntax.
                            </li>
                          </ul>
                        </li>
                      </ol>
                      <p>
                        (Note: there is also an older package &ndash;<span
                          style="color: #000000;"
                        >
                          <a
                            href="https://spark.apache.org/docs/1.6.2/sparkr.html"
                            style="color: #000000;"
                            >sparkR</a
                          ></span
                        >
                        &ndash; but since it is not on CRAN, it cannot be
                        measured.)
                      </p>
                      <p>
                        The analysis of trends is based on a period of five
                        months, ranging from&nbsp;<strong
                          >July 18, 2016 thru November 18, 2016.</strong
                        >
                      </p>
                      <p>
                        I also used Google Trends in order to analyze and
                        compare the trends as they are reflected by both
                        methodologies.
                      </p>
                    </div>
                  </div>
                  <!-- .et_pb_text -->
                  <div class="et_pb_module et_pb_code et_pb_code_0">
                    <div class="et_pb_code_inner">
                      <!-- <script
                        type="text/javascript"
                        src="https://ssl.gstatic.com/trends_nrtr/815_RC05/embed_loader.js"
                      ></script>
                      <script type="text/javascript">
                        trends.embed.renderExploreWidget(
                          'TIMESERIES',
                          {
                            comparisonItem: [
                              {
                                keyword: '/m/0ndhxqz',
                                geo: '',
                                time: '2016-06-18 2016-11-18',
                              },
                              {
                                keyword: 'neo4j',
                                geo: '',
                                time: '2016-06-18 2016-11-18',
                              },
                              {
                                keyword: '/m/05z_r2n',
                                geo: '',
                                time: '2016-06-18 2016-11-18',
                              },
                            ],
                            category: 0,
                            property: '',
                          },
                          {
                            exploreQuery:
                              'date=2016-06-18%202016-11-18&q=%2Fm%2F0ndhxqz,neo4j,%2Fm%2F05z_r2n',
                          }
                        );
                      </script> -->
                    </div>
                  </div>
                  <!-- .et_pb_code -->
                  <div
                    class="et_pb_module et_pb_text et_pb_text_1  et_pb_text_align_left et_pb_bg_layout_light"
                  >
                    <div class="et_pb_text_inner">
                      <p>
                        According to Google trends plot, MongoDB is by far the
                        most frequently searched (and thus popular?) technology
                        of the three compared.
                      </p>
                      <p>
                        It looks like the trends are quite stable, meaning that
                        each technology/database keeps its &#8220;status
                        quo&#8221; in relation to the others.
                      </p>
                      <p>
                        Also, an interesting pattern is the weekly drops in
                        searches, meaning that those terms are searched mainly
                        during workdays and are less searched on weekends.
                      </p>
                    </div>
                  </div>
                  <!-- .et_pb_text -->
                  <div
                    class="et_pb_module et_pb_image et_pb_image_0 et_pb_image_sticky"
                  >
                    <span class="et_pb_image_wrap "
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
                  <div
                    class="et_pb_module et_pb_text et_pb_text_2  et_pb_text_align_left et_pb_bg_layout_light"
                  >
                    <div class="et_pb_text_inner">
                      <p>
                        In order to make a similar comparison based on
                        <em
                          ><strong
                            >downloads from RStudio CRAN mirror</strong
                          ></em
                        >, first I united the three MongoDB R packages into one
                        term.
                      </p>
                      <p>
                        Evidently, since its upload to CRAN on September 24
                        2016, <strong>sparklyr</strong> seems to be &#8220;on
                        steroids&#8221;: compared to Google Trends, it is
                        downloaded more than three times more often than all the
                        other packages combinded.
                      </p>
                      <p>&nbsp;</p>
                    </div>
                  </div>
                  <!-- .et_pb_text -->
                  <div class="et_pb_module et_pb_image et_pb_image_1">
                    <span class="et_pb_image_wrap "
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
                  <div
                    class="et_pb_module et_pb_text et_pb_text_3  et_pb_text_align_left et_pb_bg_layout_light"
                  >
                    <div class="et_pb_text_inner">
                      <p>
                        A comparison of the distribution of downloads by
                        continent, which does not take into account population
                        size, shows that it is North America and Europe that set
                        the general trends (since most of the downlaods occur in
                        those locations). However, when isolating the
                        information by different continents, the following
                        becomes evident:
                      </p>
                      <ol>
                        <li>
                          In <strong>Asia</strong> there is an almost similar
                          interest in MongoDB and Spark related packages
                        </li>
                        <li>
                          In <strong>South America, </strong>there is equal
                          interest in all three technologies (of course, since
                          the numbers are relatively low, they may reflect usage
                          of those packages by educational institutions, for
                          example).
                        </li>
                      </ol>
                    </div>
                  </div>
                  <!-- .et_pb_text -->
                  <div class="et_pb_module et_pb_image et_pb_image_2">
                    <span class="et_pb_image_wrap "
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
                  <div
                    class="et_pb_module et_pb_text et_pb_text_4  et_pb_text_align_left et_pb_bg_layout_light"
                  >
                    <div class="et_pb_text_inner">
                      <h3>Conclusion</h3>
                      <p>
                        Each of those tools may create a different picture of
                        reality.
                      </p>
                      <p>
                        Google Trends creates a picture where the popularity of
                        those three technologies remains quite stable throughout
                        time.
                      </p>
                      <p>
                        On the other hand, we get quite a different picture of
                        the same technologies, based on the rate at which they
                        are adopted by the R users&#8217; community, as
                        reflected in RStudio CRAN download logs.
                      </p>
                    </div>
                  </div>
                  <!-- .et_pb_text -->

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

    <!-- .et_post_meta_wrapper -->
  </article>
  <!-- .et_pb_post -->
</template>

<script>
  export default {};
</script>

<style scoped></style>
