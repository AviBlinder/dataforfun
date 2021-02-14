<template>
  <div>
        <section class="section">
      <div class="container">
        <div class="mt-5 columns is-4">
          <div class="column is-1">
            
          </div>

        <div class="column is-10">

    <article>
                          <h1>
                            Forecasting Time Series by Selecting the Most
                            Suitable Model
                          </h1>
                  
                          <h3>
                            If you need to forecast sales, budget or any other
                            related figures, feel free using this widget, which
                            will execute more than 15 statistical models and
                            forecast results based on the best possible model.
                          </h3>
                          <h3>
                            The selected model is the one having lower error
                            metrics among most of the executed models.
                          </h3>
                  
                  <div >
                    <a href="#" class="scroll-down-container">
                      <span class="scroll-down et-pb-icon">&#x33;</span>
                    </a>
                  </div>
              
                       <h5> Why Time Series</h5>
                          <p>
                            &#8211; Anything that is observed sequentially over
                            time is a time series.
                          </p>
                          <p>
                            &#8211; Time series<strong>
                              forecasting models</strong
                            >
                            use only information based on one variable: the one
                            to be forecasted, and makes no attempt to discover
                            the factors which affect its behavior. It will
                            extrapolate trend and seasonal patterns, but will
                            ignore all other information such as marketing
                            initiatives, competitor activity, changes in
                            economic conditions, and so on.
                          </p>
                          <p>
                            &#8211; Regular Time Series: The models executed by
                            the widget have as input regular time series, e.g.
                            time series that are
                            <strong
                              >observed at regular intervals of time</strong
                            >
                            (quarterly or monthly).
                          </p>
                        <h5>
                          Forecasting Time Series
                        </h5>
                        <div>
                          <p>
                            Time series models implemented by this utility
                            execute a wide range of models, from
                            'naive' ones thru exponential smoothing
                            and ARIMA models.
                          </p>
                        </div>
                        <h5>
                          How to use this widget
                        </h5>
                          <p>
                            1. Choose the starting date of the time series.<br />
                            2. Choose how many periods to forecast (bear in mind
                            that the longer the horizon, the wider the
                            uncertainity of the forecast)<br />
                            3. Enter the time series input, separated by
                            commas.<br />
                            For example:<br />
                            2787, 3891, 3179, 2011, 1636, 1580 ,1489, 1300
                            ,1356, 1653<br />
                            4. Specify if this is a monthy or quarterly time
                            series.
                          </p>
                          <p>
                            &#8211;&gt; Be patient since it may take a few
                            seconds till you get the results.
                          </p>
              
                    <iframe
                      style="border: none; width: 1200px; height: 700px;"
                      src="https://aviblinder.shinyapps.io/tsselect_app-nondynamicoutput/"
                      width="300"
                      height="150"
                    >
                    </iframe>
             
                        <p>
                          In case you want to use a dynamic output plot, use
                          <span style="color: #000000;"
                            ><a
                              style="color: #000000;"
                              href="http://www.dataforfun.com/time-series-forecast-dynamic-output/"
                              target="_blank"
                              ><strong>this version of the calculato</strong
                              >r</a
                            >.</span
                          >
                        </p>
                        <p>
                          Please bear in mind that the initial load of this
                          application takes a few seconds...
                        </p>    
    </article>
        </div>
        </div>
      </div>
        </section>

  </div>
</template>

<script>
  export default {};
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