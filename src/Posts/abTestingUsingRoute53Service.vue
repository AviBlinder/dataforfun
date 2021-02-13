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
                <h1 class="is-size-4 has-text-centered has-text-weight-medium">
                  A\B testing with Route53 (An AWS Service)
                </h1>
              </div>

                    <h3 class="subtitle has-text-centered my-4 mx-4">
                      Introduction
                    </h3>

                    <div class="block">
                      <p>
                        <mark>
                        AWS <em>Route 53 </em>service has a relatively new
                        feature (announced by December 2015) called
                        <strong>traffic management. </strong>
                        This service lets you manage how your end-users are
                        routed to your application’s endpoints—whether in a
                        single AWS region or distributed around the globe<a
                          href="#ref1"
                          name="main_ref1"
                          >[i]</a
                        >.
                        </mark>
                      </p>
                    </div>
                    <div class="block">
                      <p>
                        You can design easily both simple and sophisticated
                        routing policies, using a flowchart GUI. In addition,
                        under each "traffic policy" that you create, there is a
                        built-in versioning mechanism, which helps keeping track
                        of changes done to each traffic policy.
                      </p>
                    </div>

                    <div class="block">
                      <p>
                        Although this service is meant to be implemented in a
                        wide range of scenarios, in this post I'll explain
                        how<em> traffic management service</em> can be used for
                        A/B or A/B/N testing of a website.
                      </p>
                    </div>
                    <div class="block">
                      <p>
                        Although many tools let you test A/B changes to a
                        website within the same hosting instance, for sake of
                        simplicity I'd suggest using a different instance for
                        each change you want to test (e.g. replicating the
                        website to more than one instance, so each instance has
                        one version of the website). This way, we can just
                        associate each policy to a specific endpoint (e.g. IP
                        address of each instance).
                      </p>
                    </div>

                    <div class="block">
                      <p>
                        In addition, a good practice that can be implemented
                        under traffic management service, is predefining
                        different routing policies, with a dummy IP address as
                        endpoint and saving those policies as templates, and
                        then just updating the templates' endpoints once you
                        launch new instances containing specific changes.
                      </p>
                    </div>
                    <div class="block">
                      <p>
                        Following those guidelines, I'll setup several templates
                        for different A/B or A/B/N scenarios.
                      </p>
                    </div>
                    <h3 class="subtitle has-text-centered">Getting started</h3>

                    <div class="block">
                      <p>
                        First of all, in order to add a "traffic policy", you
                        must first define a
                        <strong>hosted zone</strong> under Route53. The traffic
                        policies that you will create will be added to the
                        routing table as <strong>Record Sets</strong>. Usually
                        you'll add "A" records (e.g. "alias" records).
                      </p>
                    </div>
                    <p>
                      In order to access the traffic management service, open
                      Route53 service from AWS management console, and choose
                      "traffic policies". Then click on "Create traffic policy"
                      to open the editor.
                    </p>
                    <p>
                      If this is the first time you access the service, you'll
                      meet the following screen
                    </p>
                </div>

              <div class='card equal-height'>
                <div class='card-content is-flex is-horizontal-center'>
                  <figure class="image ">
                    <img 
                      class="is-centered" 
                      src="../assets/traffic_policy-dashboard.png" 
                      alt="Traffic Policy Dashboard" 
                      />
                  <figcaption class="is-centered ml-4">Traffic Policy Dashboard</figcaption>
                </figure>
               </div>
              </div>      


                <div>
                  <div>
                    <p>Otherwise, you should see the next screen:</p>
              <div class='card equal-height'>
                <div class='card-content is-flex is-horizontal-center'>
                  <figure class="image is970x370">
                    <img 
                      class="is-centered" 
                      src="../assets/traffic_policy-dashboard2.png" 
                      alt="Traffic Policy Dashboard - New " 
                      />
                  <figcaption class="is-centered ml-4">Traffic Policy - New Dashboard</figcaption>
                </figure>
               </div>
              </div>      

                    <h3 class="subtitle has-text-centered my-4">
                      Scenario 1 - Single location test (weights policy only)
                    </h3>

                    <div class="block mt-3">
                      <p>
                        The first scenario that can be defined is a simple one:
                        testing a single change between two versions of a
                        website, routing traffic according to weights, for
                        example 50/50, 20/80, etc. In this scenario, we don't
                        care about the geographic segmentation, just want to
                        measure if there is a significant difference between
                        versions.
                      </p>
                    </div>
                    <div class="block">
                      <p>The routing rule we'll chose is "Weighted rule":</p>
                    </div>
                  </div>
                </div>

              <div class='card equal-height'>
                <div class='card-content is-flex is-horizontal-center'>
                  <figure class="image ">
                    <img 
                      class="is-centered" 
                      src="../assets/creating_first_rule.png" 
                      alt="Creating first rule " 
                      />
                  <figcaption class="is-centered ml-4">Creating the first rule</figcaption>
                </figure>
               </div>
              </div>      

                  <div class="block">
                    <p>
                      And the split will look as follow: We chose the specific
                      weights (for example 50/50) and the endpoint to which each
                      route will be connected:
                    </p>

              <div class='card equal-height'>
                <div class='card-content is-flex is-horizontal-center'>
                  <figure class="image is1090x670">
                    <img 
                      class="is-centered" 
                      src="../assets/scenario1.png" 
                      alt="Scenario 1 " 
                      />
                  <figcaption class="is-centered ml-4">Scenario 1</figcaption>
                </figure>
               </div>
              </div>      

                    <div class="block">
                      <p>
                        As mentioned earlier, we can just create a template,
                        with both IP values pointing to the same host instance
                        or a dummy IP, and once we launch the test and have a
                        new IP address, we can just modify the template.
                      </p>
                    </div>
                    <h3 class="subtitle has-text-centered">
                      Scenario 2 – Two locations tested at once – same type of
                      A/B test
                    </h3>
                    <div class="block">
                      <p>
                        In this scenario, we want to test if there is a
                        significant different between different geographic
                        locations. For example, we might want to test if users
                        from Sweden behave the same way as the rest of the world
                        (Note that "Location – Default" will route users from
                        the rest of the world).
                      </p>
                    </div>

              <div class='card equal-height'>
                <div class='card-content is-flex is-horizontal-center'>
                  <figure class="image is1090x670">
                    <img 
                      class="is-centered" 
                      src="../assets/scenario2.png" 
                      alt="Scenario 2 " 
                      />
                  <figcaption class="is-centered ml-4">Scenario 2</figcaption>
                </figure>
               </div>
              </div>      

<div class="block">
                      <p>
                        A variation of this test can be achieved by combining
                        routing policies in such a way that we route 50% of
                        Swedish traffic to site A and 50% to site B.
                      </p>
</div>
                    <div class="block">
                      <p>
                        Note that the first 50% of Swedish traffic is routed to
                        an "existing endpoint" (e.g. to the baseline site) and
                        just the second one is routed to a new endpoint.
                      </p>
                                          </div>

              <div class='card equal-height'>
                <div class='card-content is-flex is-horizontal-center'>
                  <figure class="image is1090x670">
                    <img 
                      class="is-centered" 
                      src="../assets/scenario2_b.png" 
                      alt="Scenario 2 (b) " 
                      />
                  <figcaption class="is-centered ml-4">Scenario 2 (b)</figcaption>
                </figure>
               </div>
              </div>      

                    <h3 class="subtitle has-text-centered my-3">
                      Scenario 3 – Several locations tested at once – different
                      A/B test for each location.
                    </h3>
                    <div class="block">
                      <p>
                        In case you want to test many geographical locations all
                        at once, and compare within each location if there is a
                        significant difference, you can use the following
                        scenario: First choose the
                        <strong>"Geolocation rule"</strong> and add as many
                        locations as desired. Then, chose the first location and
                        add a <strong>"Weighted rule"</strong> with the desired
                        weights and endpoints associated to each tested weight.
                        Finally, for the rest of the geographical locations,
                        just chose "connect to existing rule"
                      </p>
                    </div>
              <div class='card equal-height my-3'>
                <div class='card-content is-flex is-horizontal-center'>
                  <figure class="image is960x700">
                    <img 
                      class="is-centered" 
                      src="../assets/scenario3.png" 
                      alt="Scenario 3 " 
                      />
                  <figcaption class="is-centered ml-4">Scenario 3</figcaption>
                </figure>
               </div>
              </div>      
          
                    <h3 class="subtitle has-text-centered my-3">
                      Scenario 4 – AB<span><em>N</em></span> Testing
                    </h3>

                    <p class="block">
                      Goes without saying that A/B tests can be converted into
                      A/B/N tests implementing similar guidelines.
                    </p>
                    <p class="block">
                      Once the traffic policies are created, you can either keep
                      them idle or connect them to a "policy record".
                    </p>
                    <p class="block">
                      Please note that managing policy records is not for free
                      and
                      <strong
                        >currently costs $50 per policy record per month</strong
                      >
                      (this monthly price is prorated for partial usage during
                      each month).
                    </p>
                    <p class="block">
                      Also, you can associate different versions of a traffic
                      policy with different hosted zones. You just need to make
                      sure that the specific record set is not already defined
                      in your hosted zone routing table!
                    </p>
              <div class='card equal-height'>
                <div class='card-content is-flex is-horizontal-center'>
                  <figure class="image is1310x400">
                    <img 
                      class="is-centered" 
                      src="../assets/policy_record1.png" 
                      alt="Policy Record " 
                      />
                  <figcaption class="is-centered ml-4">Policy Record</figcaption>
                </figure>
               </div>
              </div>      

                    <p class="block">
                      Once the status of the policy record is "Applied", you can
                      just switch to the "hosted zone" and make sure a new
                      record set was added:
                    </p>
                  </div>
              <div class='card equal-height'>
                <div class='card-content is-flex is-horizontal-center'>
                  <figure class="image is1310x400">
                    <img 
                      class="is-centered" 
                      src="../assets/policy_record1.png" 
                      alt="Policy Record 1 " 
                      />
                  <figcaption class="is-centered ml-4">Policy Record 1</figcaption>
                </figure>
               </div>
              </div>      

              <div class='card equal-height'>
                <div class='card-content is-flex is-horizontal-center'>
                  <figure class="image is1310x400">
                    <img 
                      class="is-centered" 
                      src="../assets/policy_record2.png" 
                      alt="Policy Record 2 " 
                      />
                  <figcaption class="is-centered ml-4">Policy Record 2</figcaption>
                </figure>
               </div>
              </div>      


              <div class='card equal-height my-3'>
                <div class='card-content is-flex is-horizontal-center'>
                  <figure class="image is1310x400">
                    <img 
                      class="is-centered" 
                      src="../assets/policy_record3.png" 
                      alt="Policy Record 3 " 
                      />
                  <figcaption class="is-centered ml-4">Policy Record 3</figcaption>
                </figure>
               </div>
              </div>      


                <div>
                  <div>
                    <h3 class="subtitle has-text-centered my-3">
                      A final note
                    </h3>

                    <div class="block">
                      <p>
                        Since this tool is used for routing traffic, you might
                        want to get a deeper understanding of the traffic routed
                        to each instance (how many users visited each instance)
                        and even analyze user behaviors on each instance. For
                        this purpose, you can combine analysis tools setup on
                        each instance, such as
                        <strong>Google Analytics (G.A.)</strong>. Once
                        statistics are gathered by G.A., you can proceed and
                        execute statistic tests in order to understand if your
                        changes are meaningful or not.
                      </p>
                    </div>
                    <p class="block">Happy A/B testing!</p>
                  </div>
                </div>

                <div class="block my-3">
                  <div id="ref1">
                    <p>
                      [1] Refer to<a
                        href="https://aws.amazon.com/about-aws/whats-new/2015/12/announcing-amazon-route-53-traffic-flow-global-traffic-management-in-the-cloud/"
                        target="_blank"
                      >
                        https://aws.amazon.com/about-aws/whats-new/2015/12/announcing-amazon-route-53-traffic-flow-global-traffic-management-in-the-cloud/</a
                      >
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
      post_id: 3,
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