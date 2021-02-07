<template>
  <div>

    <h1>AB Testing</h1>

	<article id="post-959" class="et_pb_post post-959 post type-post status-publish format-standard hentry category-ab-testing category-aws category-data-analysis category-route53">
											<div class="et_post_meta_wrapper">
							<h1 class="entry-title">A\B testing with Route53 (An AWS Service)</h1>

												</div> <!-- .et_post_meta_wrapper -->
				
					<div class="entry-content">
					<div id="et-boc" class="et-boc">
			
		<div class="et-l et-l--post">
			<div class="et_builder_inner_content et_pb_gutters3"><div class="et_pb_section et_pb_section_0 et_section_regular" >
				
				
				
				
					<div class="et_pb_row et_pb_row_0">
				<div class="et_pb_column et_pb_column_4_4 et_pb_column_0  et_pb_css_mix_blend_mode_passthrough et-last-child">
				
				
				<div class="et_pb_module et_pb_text et_pb_text_0  et_pb_text_align_left et_pb_bg_layout_light">
				
				
				<div class="et_pb_text_inner"><h3>Introduction</h3>
<p>AWS <em>Route 53 </em>service has a relatively new feature (announced by December 2015) called &#8220;<strong>traffic management&#8221;. </strong>This service lets you manage how your end-users are routed to your application’s endpoints—whether in a single AWS region or distributed around the globe<a href="#_edn1" name="_ednref1">[i]</a>.</p>
<p>You can design easily both simple and sophisticated routing policies, using a flowchart GUI. In addition, under each &#8220;traffic policy&#8221; that you create, there is a built-in versioning mechanism, which helps keeping track of changes done to each traffic policy.</p>
<p>Although this service is meant to be implemented in a wide range of scenarios, in this post I&#8217;ll explain how<em> traffic management service</em> can be used for A/B or A/B/N testing of a website.</p>
<p>Although many tools let you test A/B changes to a website within the same hosting instance, for sake of simplicity I&#8217;d suggest using a different instance for each change you want to test (e.g. replicating the website to more than one instance, so each instance has one version of the website). This way, we can just associate each policy to a specific endpoint (e.g. IP address of each instance).</p>
<p>In addition, a good practice that can be implemented under traffic management service, is predefining different routing policies, with a dummy IP address as endpoint and saving those policies as templates, and then just updating the templates&#8217; endpoints once you launch new instances containing specific changes.</p>
<p>Following those guidelines, I&#8217;ll setup several templates for different A/B or A/B/N scenarios.</p>
<h3>Getting started</h3>
<p>First of all, in order to add a &#8220;traffic policy&#8221;, you must first define a <strong>&#8220;hosted zone&#8221;</strong> under Route53. The traffic policies that you will create will be added to the routing table as <strong>&#8220;Record Sets&#8221;</strong>. Usually you&#8217;ll add &#8220;A&#8221; records (e.g. &#8220;alias&#8221; records).</p>
<p>In order to access the traffic management service, open Route53 service from AWS management console, and choose &#8220;traffic policies&#8221;. Then click on &#8220;Create traffic policy&#8221; to open the editor.</p>
<p>If this is the first time you access the service, you&#8217;ll meet the following screen</p></div>
			</div> <!-- .et_pb_text --><div class="et_pb_module et_pb_image et_pb_image_0">
				
				
				<span class="et_pb_image_wrap "><img src="../assets/traffic_policy-dashboard.png" alt="" title="" /></span>
			</div><div class="et_pb_module et_pb_text et_pb_text_1  et_pb_text_align_left et_pb_bg_layout_light">
				
				
				<div class="et_pb_text_inner"><p>Otherwise, you should see the next screen:</p>
<p><img class="alignleft size-full wp-image-968" src="../assets/traffic_policy-dashboard2.png" alt="" width="972" height="369" /></p>
<h3></h3>
<h3> Scenario 1 &#8211; Single location test (weights policy only)</h3>
<p>The first scenario that can be defined is a simple one: testing a single change between two versions of a website, routing traffic according to weights, for example 50/50, 20/80, etc. In this scenario, we don&#8217;t care about the geographic segmentation, just want to measure if there is a significant difference between versions.</p>
<p>The routing rule we&#8217;ll chose is &#8220;Weighted rule&#8221;:</p></div>
			</div> <!-- .et_pb_text --><div class="et_pb_module et_pb_image et_pb_image_1">
				
				
				<span class="et_pb_image_wrap "><img src="../assets/creating_first_rule.png" alt="" title="" /></span>
			</div><div class="et_pb_module et_pb_text et_pb_text_2  et_pb_text_align_left et_pb_bg_layout_light">
				
				
				<div class="et_pb_text_inner"><p>And the split will look as follow: We chose the specific weights (for example 50/50) and the endpoint to which each route will be connected:</p>
<p><img class="alignleft size-full wp-image-964" src="../assets/scenario1.png" alt="" width="1084" height="659" /></p>
<p>As mentioned earlier, we can just create a template, with both IP values pointing to the same host instance or a dummy IP, and once we launch the test and have a new IP address, we can just modify the template.</p>
<h3>Scenario 2 – Two locations tested at once – same type of A/B test</h3>
<p>In this scenario, we want to test if there is a significant different between different geographic locations. For example, we might want to test if users from Sweden behave the same way as the rest of the world (Note that &#8220;Location – Default&#8221; will route users from the rest of the world).</p>
<p><img class="alignleft size-full wp-image-965" src="../assets/scenario2.png" alt="" width="1083" height="665" /></p>
<p>A variation of this test can be achieved by combining routing policies in such a way that we route 50% of Swedish traffic to site A and 50% to site B.</p>
<p>Note that the first 50% of Swedish traffic is routed to an &#8220;existing endpoint&#8221; (e.g. to the baseline site) and just the second one is routed to a new endpoint.</p>
<p><img class="alignleft size-full wp-image-966" src="../assets/scenario2_b.png" alt="" width="1245" height="734" /></p>
<h3></h3>
<h3></h3>
<h3>Scenario 3 – Several locations tested at once – different A/B test for each location.</h3>
<p>In case you want to test many geographical locations all at once, and compare within each location if there is a significant difference, you can use the following scenario: First choose the <strong>&#8220;Geolocation rule&#8221;</strong> and add as many locations as desired. Then, chose the first location and add a <strong>&#8220;Weighted rule&#8221;</strong> with the desired weights and endpoints associated to each tested weight. Finally, for the rest of the geographical locations, just chose &#8220;connect to existing rule&#8221;</p>
<p><img class="alignleft size-full wp-image-967" src="../assets/scenario3.png" alt="" width="958" height="715" /></p>
<h3></h3>
<h3>Scenario 4 – ABN Testing</h3>
<p>Goes without saying that A/B tests can be converted into A/B/N tests implementing similar guidelines.</p>
<p>Once the traffic policies are created, you can either keep them idle or connect them to a &#8220;policy record&#8221;.</p>
<p>Please note that managing policy records is not for free and <strong>currently costs $50 per policy record per month</strong> (this monthly price is prorated for partial usage during each month).</p>
<p>Also, you can associate different versions of a traffic policy with different hosted zones. You just need to make sure that the specific record set is not already defined in your hosted zone routing table!</p>
<p><img class="alignleft size-full wp-image-961" src="../assets/policy_record1.png" alt="" width="1310" height="455" /></p>
<p>Once the status of the policy record is &#8220;Applied&#8221;, you can just switch to the &#8220;hosted zone&#8221; and make sure a new record set was added:</p>
<p>&nbsp;</p></div>
			</div> <!-- .et_pb_text --><div class="et_pb_module et_pb_image et_pb_image_2">
				
				
				<span class="et_pb_image_wrap "><img src="../assets/policy_record1.png" alt="" title="" /></span>
			</div><div class="et_pb_module et_pb_image et_pb_image_3">
				
				
				<span class="et_pb_image_wrap "><img src="../assets/policy_record2.png" alt="" title="" /></span>
			</div><div class="et_pb_module et_pb_image et_pb_image_4">
				
				
				<span class="et_pb_image_wrap "><img src="../assets/policy_record3.png" alt="" title="" /></span>
			</div><div class="et_pb_module et_pb_text et_pb_text_3  et_pb_text_align_left et_pb_bg_layout_light">
				
				
				<div class="et_pb_text_inner"><h3>A final note</h3>
<p>Since this tool is used for routing traffic, you might want to get a deeper understanding of the traffic routed to each instance (how many users visited each instance) and even analyze user behaviors on each instance. For this purpose, you can combine analysis tools setup on each instance, such as <strong>Google Analytics (G.A.)</strong>. Once statistics are gathered by G.A., you can proceed and execute statistic tests in order to understand if your changes are meaningful or not.</p>
<p>Happy A/B testing!</p></div>
			</div> <!-- .et_pb_text --><div class="et_pb_module et_pb_divider_0 et_pb_space et_pb_divider_hidden"><div class="et_pb_divider_internal"></div></div><div class="et_pb_module et_pb_text et_pb_text_4  et_pb_text_align_left et_pb_bg_layout_light">
				
				
				<div class="et_pb_text_inner"><p>[1] Refer to<a href="https://aws.amazon.com/about-aws/whats-new/2015/12/announcing-amazon-route-53-traffic-flow-global-traffic-management-in-the-cloud/" target="_blank"> https://aws.amazon.com/about-aws/whats-new/2015/12/announcing-amazon-route-53-traffic-flow-global-traffic-management-in-the-cloud/</a></p></div>
			</div> <!-- .et_pb_text --><div class="et_pb_module et_pb_text et_pb_text_5  et_pb_text_align_left et_pb_bg_layout_light">
				
				
				<div class="et_pb_text_inner">
          </div>
			</div> <!-- .et_pb_text -->
			</div> <!-- .et_pb_column -->
				
				
			</div> <!-- .et_pb_row -->
				
				
			</div> <!-- .et_pb_section -->		</div><!-- .et_builder_inner_content -->
	</div><!-- .et-l -->
	
			
		</div><!-- #et-boc -->
							</div> <!-- .entry-content -->
					<div class="et_post_meta_wrapper">
					<div class="et-single-post-ad">
<!-- temp_ad -->
<ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-8779196571653674"
     data-ad-slot="3664399547"
     data-ad-format="auto"></ins>
</div> <!-- .et-single-post-ad --><!-- You can start editing here. -->

<section id="comment-wrap">
		   <div id="comment-section" class="nocomments">
		  			 <!-- If comments are open, but there are no comments. -->

		  	   </div>
					<div id="respond" class="comment-respond">

			</div><!-- #respond -->
		</section>					</div> <!-- .et_post_meta_wrapper -->
				</article> <!-- .et_pb_post -->
  </div>
</template>

<script>
export default {
  
}
</script>
<style scoped>

</style>