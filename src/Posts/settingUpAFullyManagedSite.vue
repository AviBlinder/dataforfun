<template>
  <div>
    <article
      id="post-921"
      class="et_pb_post post-921 post type-post status-publish format-standard hentry category-aws category-data_science_topics"
    >
      <div class="et_post_meta_wrapper">
        <h1 class="entry-title">Setting up a fully managed website in AWS</h1>


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
                          Finally, I finished migrating my website from a web
                          hosting platform to AWS.
                        </p>
                        <p>
                          Although the process is not always straight forward,
                          it opens a whole world of opportunities: adding or
                          removing servers elastically, as demand grows up or
                          down, handling failure policies, in case of a whole
                          set of servers going down, and more.
                        </p>
                        <p>
                          The purpose of this post is to describe, step by step,
                          the architecture that I implemented in AWS in order to
                          host my site, also sharing some tips and lessons
                          I&#8217;ve learned in this journey in hope that it
                          will save others some hurdles.
                        </p>
                        <p>
                          The architecture that I&#8217;ve implemented for
                          hosting a web site can easily suit also other use
                          cases, such as web applications, e-commerce sites and
                          more.
                        </p>
                        <p>So, let&#8217;s start from the beginning:</p>
                        <p>&nbsp;</p>
                        <h3>Creating the basic &#8220;virtual space&#8221;:</h3>
                        <ol>
                          <li>
                            The first step includes
                            <strong>setting a VPC</strong> (Virtual Private
                            Cloud). As its name suggests, it is a &#8220;private
                            network&#8221; within AWS cloud. It has a specific
                            range of IP addresses, which can be allocated to the
                            resources that are being allocated.
                          </li>
                          <li>
                            The VPC in my case (and as mentioned early, this
                            setup can suit many other scenarios), is divided in
                            <strong
                              >4 subnets: 2 private and 2 public ones</strong
                            >. Each pair of private-public subnets is placed in
                            <strong>a specific Availability Zone (A.Z.)</strong>
                            This setup improves the durability of the site, in
                            case of a total failure of a whole datacenter (aka.
                            A.Z.).
                          </li>
                          <li>
                            Instances placed on the private subnet can not be
                            accessed from the Internet, and by default have no
                            access back to the open world. In order to allow
                            communication from the private subnet to the
                            Internet (mainly in order to get software updates),
                            a NAT gateway is created and placed on one of the
                            public subnets. The the sole purpose of the NAT
                            instance is enabling safe traffic from the private
                            subnet to the Internet.
                          </li>
                          <li>
                            Once the subnets are created, I placed one instance
                            (the one hosting my WordPress site) on one public
                            subnet and a MySQL instance, serving as database of
                            the WordPress platform, on the private network.
                          </li>
                        </ol>
                      </div>
                    </div>
                    <!-- .et_pb_text -->
                    <div
                      class="et_pb_module et_pb_image et_pb_image_0 et_pb_image_sticky"
                    >
                      <span class="et_pb_image_wrap "
                        ><img
                          src="../assets/DFF-Architecture-VPC-setup.png"
                          alt=""
                          title=""
                      /></span>
                    </div>
                    <div
                      class="et_pb_module et_pb_text et_pb_text_1  et_pb_text_align_left et_pb_bg_layout_light"
                    >
                      <div class="et_pb_text_inner">
                        <h3></h3>
                        <h3>
                          Adding &#8220;elasticity&#8221; and
                          &#8220;durability&#8221;
                        </h3>
                        <p>
                          5. Two of the greatest features of a cloud service
                          (and of course AWS) are their built-in mechanisms of
                          <strong>auto-scaling</strong> as traffic (or other
                          needs) grows up and down and the enhanced
                          <strong>durability</strong>, ranging from the handling
                          failure of a single instance and up to the failure of
                          a whole availability zone or even region.
                        </p>
                        <p>
                          AWS offers several services for enhanced elasticity
                          and durability. I chose to implement three of them: an
                          Elastic Load Balancer, an Auto-Scaling service and a
                          failure policy thru Route53:
                        </p>
                        <p>
                          The
                          <strong>Elastic Load Balancer (ELB) </strong>service
                          is a tool that in fact has two purposes: constantly
                          checking the health state of associated instances (and
                          hence routing traffic only to healthy ones) and
                          balancing traffic evenly across associated instances.
                          In order to manage my costs in an effective way, I
                          associated one &#8220;fixed&#8221;
                          <strong>Reserved Instance</strong> to the ELB (since
                          it serves a 24/7 site, I decided pre-paying for it for
                          a whole year and thus &#8220;reserving&#8221; the
                          resource)
                        </p>
                        <p>
                          <strong>AutoScaling: </strong> a second, optional
                          <strong>Spot Instance</strong>, which will be launched
                          in case of increased traffic and associated to the
                          <strong>ELB</strong>, is triggered thru the
                          Auto-scaling mechanism. Also in this case, in order to
                          manage costs, I decided to &#8220;bid&#8221; for a
                          maximum price for this additional resource, under the
                          assumption that higher traffics on a specific site are
                          not related to spikes of demands in the whole
                          availability zone. The auto-scaling service will shut
                          down the additional instance once traffic goes down
                          and can be served by a single instance. In the future,
                          if traffic is higher for longer periods of time, the
                          auto-scaling policy can be modified seamlessly so that
                          more instances are optionally triggered.
                        </p>
                        <h3>Routing traffic</h3>
                        <p>
                          Since I&#8217;m hosting my domain also under AWS, the
                          next taken step is configuring creating a
                          <strong>hosted zone</strong> under
                          <strong>Route53</strong> service so different
                          variations of the site name and subdomains are routed
                          to the correct instances.
                        </p>
                        <p>
                          Since I&#8217;m using an ELB, which serves as umbrella
                          for routing traffic to any number of associated
                          instances, an &#8220;A&#8221; record is created
                          mapping between the domain name and the ELB resource
                          name.
                        </p>
                        <p>
                          As I will describe in a later step, one great feature
                          of Route53 is its &#8220;<strong
                            >failure policy</strong
                          >&#8220;, which lets you route traffic to a completely
                          different region or to a static site (hosted under
                          S3), in case of total failure of the current region.
                        </p>
                      </div>
                    </div>
                    <!-- .et_pb_text -->
                    <div class="et_pb_module et_pb_image et_pb_image_1">
                      <span class="et_pb_image_wrap "
                        ><img
                          src="../assets/DFF-Architecture-Step-1.png"
                          alt=""
                          title=""
                      /></span>
                    </div>
                    <div class="et_pb_module et_pb_image et_pb_image_2">
                      <span class="et_pb_image_wrap "
                        ><img
                          src="../assets/DFF-Architecture-Step-2.png"
                          alt=""
                          title=""
                      /></span>
                    </div>
                    <div
                      class="et_pb_module et_pb_text et_pb_text_2  et_pb_text_align_left et_pb_bg_layout_light"
                    >
                      <div class="et_pb_text_inner">
                        <p>&nbsp;</p>
                        <h3>Reducing Internet latency</h3>
                        <p>
                          One of the worst things a site can experience is low
                          latency: it is well known that even few seconds of
                          waiting time till the contents of a site show up,
                          might translate in high bounce rates (e.g. high number
                          of people leaving your site even before a single bite
                          of information shows up on the screen).
                        </p>
                        <p>
                          AWS offers a fully managed Content Delivery Network
                          (CDN) or &#8220;content replication&#8221; service
                          called <strong>CloudFront</strong>: this service is
                          meant to cache and replicate web contents (such as
                          media files) across many &#8220;<strong
                            >edge points</strong
                          >&#8221; spread worldwide, thus reducing latency
                          issues to a minimum.
                        </p>
                        <p>
                          In order to have updated contents propagated across
                          the edge points, the following mechanism is
                          implemented:
                        </p>
                        <ul>
                          <li>
                            Using a built-in Linux synchronization service, I
                            replicate every few minutes the updated contents of
                            the site to an
                            <strong>S3 bucket containing the media files</strong
                            >. (In fact two buckets: one holding media files and
                            one holding the whole site&#8217;s code. This second
                            bucket is the base of any new launched instance).
                          </li>
                          <li>
                            The S3 media-bucket is used as source by CloudFront
                            service.
                          </li>
                        </ul>
                        <p>
                          Since transfer of data between AWS services within the
                          same region is free of charge, and since there is a
                          constant transfer of data between the instances media
                          files and the S3 bucket, I defined the bucket
                          <strong>in the same region </strong
                          ><strong>as the VPC.</strong>
                        </p>
                      </div>
                    </div>
                    <!-- .et_pb_text -->
                    <div class="et_pb_module et_pb_image et_pb_image_3">
                      <span class="et_pb_image_wrap "
                        ><img
                          src="../assets/DFF-Architecture-Step-3.png"
                          alt=""
                          title=""
                      /></span>
                    </div>
                    <div
                      class="et_pb_module et_pb_text et_pb_text_3  et_pb_text_align_left et_pb_bg_layout_light"
                    >
                      <div class="et_pb_text_inner">
                        <p>&nbsp;</p>
                        <h3>Adding some extra fault tolerance</h3>
                        <p>
                          As explained earlier, Route53 service offers several
                          routing policies, which can even be combined and
                          intertwined.
                        </p>
                        <p>
                          In my case, I decided to add an extra layer of fault
                          tolerance, thru the <strong>failover</strong> policy:
                          all the resources within the VPC are associated to the
                          &#8220;<strong>primary&#8221; record type</strong>
                          (e.g. I created several &#8220;A&#8221; records mapped
                          to the ELB and defined them as primary record types).
                          In case of a major failure (two availability zones
                          going down, or a major bug in my site), Route53
                          seamlessly will route all the traffic to the
                          <strong>&#8220;secondary&#8221; </strong>resource: in
                          my case a static website hosted in an S3 bucket.
                        </p>
                        <h3>Seeing the whole pictures</h3>
                        <p>
                          AWS <strong>tags </strong>are a great way of mapping
                          all the resources allocated to a specific project,
                          thus letting you see the &#8220;whole&#8221; picture
                          of all involved resources across all regions, and of
                          course letting you track costs in a consistent way.
                        </p>
                        <p>
                          So, in my case, for all the resources that I created,
                          I added at least one tag: &#8220;project&#8221; with
                          my project name as its value.
                        </p>
                        <p>
                          Now, I can open the &#8220;<strong
                            >resource group&#8221; tool</strong
                          >, create a new group and review all the resources
                          associated with my project.
                        </p>
                      </div>
                    </div>
                    <!-- .et_pb_text -->
                    <div class="et_pb_module et_pb_image et_pb_image_4">
                      <span class="et_pb_image_wrap "
                        ><img
                          src="../assets/DFF-Architecture-Final.png"
                          alt=""
                          title=""
                      /></span>
                    </div>
                    <div
                      class="et_pb_module et_pb_text et_pb_text_4  et_pb_text_align_left et_pb_bg_layout_light"
                    >
                      <div class="et_pb_text_inner">
                        <p>&nbsp;</p>
                        <p>
                          That&#8217;s it, more or less, the whole picture of
                          this project.
                        </p>
                        <p>I hope you find it useful.</p>
                      </div>
                    </div>
                    <!-- .et_pb_text -->
                    <div
                      class="et_pb_module et_pb_text et_pb_text_5  et_pb_text_align_left et_pb_bg_layout_light"
                    ></div>
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
      <div class="et_post_meta_wrapper">
      
      </div>
      <!-- .et_post_meta_wrapper -->
    </article>
  </div>
</template>

<script>
  export default {};
</script>

<style scoped></style>
