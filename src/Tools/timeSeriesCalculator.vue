<template>
  <div>
    <section class="section">
      <div class="container">
        <div class="mt-5 columns is-4">
          <div class="column is-1"></div>

          <div class="column is-10">
            <article>
              <div class="section">
                <div class="container">
                  <h1
                    class="is-size-2 has-text-centered has-text-weight-medium"
                  >
                    Forecasting Time Series by Selecting the Most Suitable Model
                  </h1>

                  <div class="block">
                    <p>
                      <mark>
                        If you need to forecast sales, budget or any other
                        related figures, feel free using this widget, which will
                        execute more than 15 statistical models and forecast
                        results based on the best possible model.
                      </mark>
                    </p>
                  </div>
                  <div class="block">
                    <p>
                      The selected model is the one having lower error metrics
                      among most of the executed models.
                    </p>
                  </div>

                  <h2 class="subtitle has-text-centered">Why Time Series</h2>

                  <ul class="time-series-list">
                    <li>
                      Anything that is observed sequentially over time is a time
                      series.
                    </li>
                    <li>
                      Time series <strong> forecasting models</strong>
                      use only information based on one variable: the one to be
                      forecasted, and makes no attempt to discover the factors
                      which affect its behavior. It will extrapolate trend and
                      seasonal patterns, but will ignore all other information
                      such as marketing initiatives, competitor activity,
                      changes in economic conditions, and so on.
                    </li>
                    <li>
                      Regular Time Series: The models executed by the widget
                      have as input regular time series, e.g. time series that
                      are
                      <strong>observed at regular intervals of time</strong>
                      (quarterly or monthly).
                    </li>
                  </ul>
                  <h2 class="subtitle has-text-centered my-3 my-3">
                    Forecasting Time Series
                  </h2>

                  <div class="block">
                    <p>
                      <mark>
                        Time series models implemented by this utility execute a
                        wide range of models, from 'naive' ones thru exponential
                        smoothing and ARIMA models.
                      </mark>
                    </p>
                  </div>

                  <h5 class="subtitle has-text-centered">
                    How to use this widget
                  </h5>

                  <ol>
                    <li>Choose the starting date of the time series.</li>

                    <li>
                      Choose how many periods to forecast (bear in mind that the
                      longer the horizon, the wider the uncertainity of the
                      forecast)<br />
                    </li>

                    <li>
                      Enter the time series input, separated by commas.<br />
                      For example:<br />
                      2787, 3891, 3179, 2011, 1636, 1580 ,1489, 1300 ,1356,
                      1653<br />
                    </li>

                    <li>
                      Specify if this is a Monthy or Quarterly time series.
                      <br />
                      In the previous example, the time series data is
                      <strong>Quarterly</strong>
                    </li>
                  </ol>

                  <p class="mt-5 has-text-justified">
                    <mark style="background-color: chartreuse">
                      Be patient since it may take a few seconds till you get
                      the results...
                    </mark>
                  </p>

                  <div class="container container-iframe">
                    <!-- style="border: none; width: 1200px; height: 700px" -->
                    <!-- width="300"
                height="150" -->
                    <iframe
                      class="responsive-iframe"
                      src="https://aviblinder.shinyapps.io/tsselect_app-nondynamicoutput/"
                    >
                    </iframe>
                  </div>
                </div>
              </div>
            </article>
          </div>
          <div class="column is-1"></div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.time-series-list {
  list-style-type: square;

  margin-top: 1rem;
}

ul > li {
  margin-top: 1rem;
}
ol > li {
  margin-top: 1rem;
}

mark {
  background-color: rgb(104, 242, 247);
}
.is-horizontal-center {
  justify-content: center;
}

.card {
  box-shadow: none;
}

.container-iframe {
  margin-top: 3rem;
  position: relative;
  overflow: hidden;
  width: 100%;
  padding-top: 56.25%;
}

.responsive-iframe {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
}
</style>