<template>
  <div>
    <section class="section">
      <div class="container">
        <div class="mt-5 columns is-4">
          <div class="column is-3 is-hidden-mobile is-vcentered">
            <projects-side-bar :currentProject="project_id">
            </projects-side-bar>
          </div>

          <div class="column is-7">
            <article>
              <div class="section">
                <div class="container">
                  <h1 class="title has-text-centered tite">
                    Comparing Healthy Life Expectancy and Retirement Ages
                  </h1>

                  <div class="block mt-6">
                    <p class="has-text-justified">
                      This post is about a Tableau dashboard I created comparing
                      healthy life expectancy versus retirement ages around the
                      world and between genders
                    </p>
                  </div>
                  <div>
                    <h4 class="subtitle has-text-left">
                      <strong>How to read the graph</strong>
                    </h4>

                    <div class="block">
                      <p>
                        Each dot on the graph represents the gap between the
                        expected healthy life expectancy (HALE) and the
                        retirement age (R.A.).
                      </p>
                      <p>
                        <strong
                          ><span style="color: #ff6600">Red </span> </strong
                        >dots represent&nbsp;females and
                        <strong
                          ><span style="color: #808000">brown </span></strong
                        >
                        ones represent men.
                      </p>
                    </div>
                    <div class="block">
                      If a dot is <strong>positive </strong> (<strong
                        >on the right side of the zero</strong
                      >), it means a positive number of years to enjoy healthy
                      life after retirement, otherwise it means that
                      people&nbsp;first reach&nbsp;the 'healthy life' age, but
                      keep working till official retirement age.
                    </div>

                    <div class="block">
                      <p>
                        In order to create the dashboard, I compiled data from
                        different sources, mainly:
                      </p>
                      <ol class="my-2 mx-4 content">
                        <li>
                          Healthy Life Expectancy data (HALE) was compiled from
                          the
                          <a
                            href="http://www.who.int/gho/mortality_burden_disease/life_tables/hale/en/"
                            target="_blank"
                            rel="noopener noreferrer"
                            >World Health Organization (WHO)
                          </a>
                        </li>

                        <li class="my-2">
                          Retirement Ages:
                          <a
                            href="https://en.wikipedia.org/wiki/Retirement_age"
                            target="_blank"
                            rel="noopener noreferrer"
                            >Wikipedia
                          </a>
                          and
                          <a
                            href="http://chartsbin.com/view/2468"
                            target="_blank"
                            rel="noopener noreferrer"
                            >ChartsBin</a
                          >
                        </li>
                      </ol>

                      <p class="block my-3">
                        As you can see, the dashboard can be filtered by
                        <em>year</em> (for convenience, I kept only two
                        periods), <em>Region</em> (e.g. Continent),
                        <em>Country</em> and <em>Gender</em>.
                      </p>

                      <div class="block">
                        <p>
                          You can also click on the map on a specific country
                          and get the 'Comparison of Gap (HALE &#8211; R.A.)
                          Between Genders by Country' graph filtered by country
                          as well.
                        </p>
                      </div>
                    </div>

                    <h3 class="subtitle has-text-centered">
                      Some interesting findings
                    </h3>

                    <ol class="content">
                      <li>
                        Almost everywhere, the situation of women is better than
                        those of men, in terms of the gap between those two
                        indices.
                      </li>
                      <li>
                        The three leading countries in term of positive gap are
                        in Asia (<strong>Vietnam, Malaysia and Sri Lanka</strong
                        >)
                      </li>
                      <li>
                        There are minor changes in the leading countries
                        comparing data between year 2000 and 2013
                      </li>
                      <li>
                        Although every country in
                        <strong>Africa</strong> has negative gaps between those
                        two indices, the gender-gap is the lowest, when
                        comparing among continents.
                      </li>
                      <li>
                        <strong>Algeria</strong>, the only African country with
                        positive gaps for both genders, has also one of the
                        bigger gaps between genders among African countries.
                      </li>
                    </ol>

                    <p>
                      <strong
                        ><a
                          href="https://public.tableau.com/views/HALEProject_0/GapbyCountriesandGender?:embed=y&display_count=yes"
                          target="_blank"
                          >You can click this link in order to see the
                          dashboard</a
                        ></strong
                      >
                    </p>

                    <div class="block">
                      <p class="mt-5">
                        I hope you enjoy using the dashboard and finding other
                        interesting insights as well!
                      </p>
                    </div>
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
import projectsSideBar from "@/components/projectsSideBar";

export default {
  components: {
    projectsSideBar,
  },
  data() {
    return {
      project_id: 3,
    };
  },
};
</script>

