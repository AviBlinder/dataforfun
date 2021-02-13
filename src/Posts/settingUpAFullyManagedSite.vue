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
                    class="is-size-4 has-text-centered has-text-weight-medium">
                    Setting up a fully managed website in AWS
                  </h1>
                  <div class="block my-4">
                    <p>
                      Finally, I finished migrating my website from a web
                      hosting platform to AWS.
                    </p>
                    <div class="block">
                    <p>
                      Although the process is not always straight forward, it
                      opens a whole world of opportunities: adding or removing
                      servers elastically, as demand grows up or down, handling
                      failure policies, in case of a whole set of servers going
                      down, and more.
                    </p>
                    </div>
                    <div class="block">
                    <p>
                      <mark>
                      The purpose of this post is to describe, step by step, the
                      architecture that I implemented in AWS in order to host my
                      site, also sharing some tips and lessons I've learned in
                      this journey in hope that it will save others some
                      hurdles.
                      </mark>
                    </p>
                    </div>
                    <div class="block">                    
                    <p>
                      The architecture that I've implemented for hosting a web
                      site can easily suit also other use cases, such as web
                      applications, e-commerce sites and more.
                    </p>
                    </div>
                    <div class="block">                    
                    <p>So, let's start from the beginning:</p>
                    </div>

                    <h3 class="subtitle has-text-centered">
                      Creating the basic 'virtual space':</h3>
                    <ol>
                    <div class="block">                                          
                      <li>
                        <mark>
                        The first step includes
                        <strong>setting a VPC</strong> (Virtual Private Cloud).
                        As its name suggests, it is a 'private network' within
                        AWS cloud. It has a specific range of IP addresses,
                        which can be allocated to the resources that are being
                        created.
                        </mark>
                      </li>
                    </div>
                    <div class="block">                    
                      <li>
                        The VPC in my case (and as mentioned early, this setup
                        can suit many other scenarios), is divided in
                        <strong>4 subnets: 2 private and 2 public ones</strong>.
                        Each pair of private-public subnets is placed in
                        <strong>a specific Availability Zone (A.Z.)</strong>
                        This setup improves the durability of the site, in case
                        of a total failure of a whole datacenter (aka. A.Z.).
                      </li>
                    </div>
                    <div class="block">                    
                      <li>
                        Instances placed on the private subnet can not be
                        accessed from the Internet, and by default have no
                        access back to the open world. In order to allow
                        communication from the private subnet to the Internet
                        (mainly in order to get software updates), a NAT gateway
                        is created and placed on one of the public subnets. The
                        the sole purpose of the NAT instance is enabling safe
                        traffic from the private subnet to the Internet.
                      </li>
                    </div>
                    <div class="block">                    
                      <li>
                        Once the subnets are created, I placed one instance (the
                        one hosting my WordPress site) on one public subnet and
                        a MySQL instance, serving as database of the WordPress
                        platform, on the private network.
                      </li>
                    </div>
                    </ol>
                  </div>

              <div class='card equal-height'>
                <div class='card-content is-flex is-horizontal-center'>
                  <figure class="image is-400x400">
                    <img 
                      class="is-centered" 
                      src="../assets/DFF-Architecture-VPC-setup.png" 
                      alt="VPC Setup" 
                      />
                  <figcaption class="is-centered ml-6">VPC Setup</figcaption>
                </figure>
               </div>
              </div>      
          
                      <h3 class="subtitle has-text-centered">Adding 'elasticity' and 'durability'</h3>
                     <div class="block">
                      <p>
                        5. Two of the greatest features of a cloud service (and
                        of course AWS) are their built-in mechanisms of
                        <strong>auto-scaling</strong> as traffic (or other
                        needs) grows up and down and the enhanced
                        <strong>durability</strong>, ranging from the handling
                        failure of a single instance and up to the failure of a
                        whole availability zone or even region.
                      </p>
                     </div>
                     <div class="block">
                      <p>
                        <mark>
                        AWS offers several services for enhanced elasticity and
                        durability. I chose to implement three of them: an
                        Elastic Load Balancer, an Auto-Scaling service and a
                        failure policy thru Route53:
                        </mark>
                      </p>
                     </div>
                     <div class="block">
                      <p>
                        The
                        <strong>Elastic Load Balancer (ELB) </strong>service is
                        a tool that in fact has two purposes: constantly
                        checking the health state of associated instances (and
                        hence routing traffic only to healthy ones) and
                        balancing traffic evenly across associated instances. In
                        order to manage my costs in an effective way, I
                        associated one 'fixed'
                        <strong>Reserved Instance</strong> to the ELB (since it
                        serves a 24/7 site, I decided pre-paying for it for a
                        whole year and thus 'reserving' the resource)
                      </p>
                     </div>
                     <div class="block">
                      <p>
                        <strong>AutoScaling: </strong> a second, optional
                        <strong>Spot Instance</strong>, which will be launched
                        in case of increased traffic and associated to the
                        <strong>ELB</strong>, is triggered thru the Auto-scaling
                        mechanism. Also in this case, in order to manage costs,
                        I decided to 'bid' for a maximum price for this
                        additional resource, under the assumption that higher
                        traffics on a specific site are not related to spikes of
                        demands in the whole availability zone. The auto-scaling
                        service will shut down the additional instance once
                        traffic goes down and can be served by a single
                        instance. In the future, if traffic is higher for longer
                        periods of time, the auto-scaling policy can be modified
                        seamlessly so that more instances are optionally
                        triggered.
                      </p>
                     </div>
                      <h3 class="subtitle has-text-centered">Routing traffic</h3>
                     <div class="block">                      
                      <p>
                        Since I'm hosting my domain also under AWS, the next
                        taken step is configuring creating a
                        <strong>hosted zone</strong> under
                        <strong>Route53</strong> service so different variations
                        of the site name and subdomains are routed to the
                        correct instances.
                      </p>
                     </div>
                     <div class="block">
                      <p>
                        Since I'm using an ELB, which serves as umbrella for
                        routing traffic to any number of associated instances,
                        an 'A' record is created mapping between the domain name
                        and the ELB resource name.
                      </p>
                     </div>
                     <div class="block">
                      <p>
                        As I will describe in a later step, one great feature of
                        Route53 is its '<strong>failure policy</strong>', which
                        lets you route traffic to a completely different region
                        or to a static site (hosted under S3), in case of total
                        failure of the current region.
                      </p>
                     </div>

              <div class='card equal-height'>
                <div class='card-content is-flex is-horizontal-center'>
                  <figure class="image is400x400">
                    <img 
                      class="is-centered" 
                      src="../assets/DFF-Architecture-Step-1.png" 
                      alt="Architecture setup - Step 1" 
                      />
                  <figcaption class="is-centered ml-4">Architecture setup - Step 1</figcaption>
                </figure>
               </div>
              </div>      

              <div class='card equal-height'>
                <div class='card-content is-flex is-horizontal-center'>
                  <figure class="image is400x400">
                    <img 
                      class="is-centered" 
                      src="../assets/DFF-Architecture-Step-2.png" 
                      alt="Architecture setup - Step 2" 
                      />
                  <figcaption class="is-centered ml-4">Architecture setup - Step 2</figcaption>
                </figure>
               </div>
              </div>      

                    <div>
                      <h3 class="subtitle has-text-centered">Reducing Internet latency</h3>
<div class="block">                      
                      <p>
                        One of the worst things a site can experience is low
                        latency: it is well known that even few seconds of
                        waiting time till the contents of a site show up, might
                        translate in high bounce rates (e.g. high number of
                        people leaving your site even before a single bite of
                        information shows up on the screen).
                      </p>
</div>                      
<div class="block">                      
                      <p>
                        AWS offers a fully managed Content Delivery Network
                        (CDN) or 'content replication' service called
                        <strong>CloudFront</strong>: this service is meant to
                        cache and replicate web contents (such as media files)
                        across many '<strong>edge points</strong>' spread
                        worldwide, thus reducing latency issues to a minimum.
                      </p>
</div>
<div class="block">                      
                      <p>
                        In order to have updated contents propagated across the
                        edge points, the following mechanism is implemented:
                      </p>
</div>
                      <ol>
                        <li class="block ml-3">
                          Using a built-in Linux synchronization service, I
                          replicate every few minutes the updated contents of
                          the site to an
                          <strong>S3 bucket containing the media files</strong>.
                          (In fact two buckets: one holding media files and one
                          holding the whole site's code. This second bucket is
                          the base of any new launched instance).
                        </li>
                        <li class="block ml-3">
                          The S3 media-bucket is used as source by CloudFront
                          service.
                        </li>
                      </ol>
                      <div class="block my-3">
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

              <div class='card equal-height'>
                <div class='card-content is-flex is-horizontal-center'>
                  <figure class="image is400x400">
                    <img 
                      class="is-centered" 
                      src="../assets/DFF-Architecture-Step-3.png" 
                      alt="Architecture setup - Step 3" 
                      />
                  <figcaption class="is-centered ml-4">Architecture setup - Step 3</figcaption>
                </figure>
               </div>
              </div>      
                  
                    <div>
                      <h3 class="subtitle has-text-centered">Adding some extra fault tolerance</h3>
<div class="block">
                      <p>
                        As explained earlier, Route53 service offers several
                        routing policies, which can even be combined and
                        intertwined.
                      </p>
</div>
<div class="block">
                      <p>
                        In my case, I decided to add an extra layer of fault
                        tolerance, thru the <strong>failover</strong> policy:
                        all the resources within the VPC are associated to the
                        '<strong>primary' record type</strong>
                        (e.g. I created several 'A' records mapped to the ELB
                        and defined them as primary record types). In case of a
                        major failure (two availability zones going down, or a
                        major bug in my site), Route53 seamlessly will route all
                        the traffic to the
                        <strong>'secondary' </strong>resource: in my case a
                        static website hosted in an S3 bucket.
                      </p>
</div>
                      <h3 class="subtitle has-text-centered">Seeing the whole pictures</h3>
<div class="block">
                      <p>
                        AWS <strong>tags </strong>are a great way of mapping all
                        the resources allocated to a specific project, thus
                        letting you see the 'whole' picture of all involved
                        resources across all regions, and of course letting you
                        track costs in a consistent way.
                      </p>
</div>
<div class="block">
                      <p>
                        So, in my case, for all the resources that I created, I
                        added at least one tag: 'project' with my project name
                        as its value.
                      </p>
</div>
<div class="block">
                      <p>
                        Now, I can open the '<strong
                          >resource group' tool</strong
                        >, create a new group and review all the resources
                        associated with my project.
                      </p>
</div>
                    </div>

              <div class='card equal-height'>
                <div class='card-content is-flex is-horizontal-center'>
                  <figure class="image is400x400">
                    <img 
                      class="is-centered" 
                      src="../assets/DFF-Architecture-Final.png" 
                      alt="Architecture setup - Final" 
                      />
                  <figcaption class="is-centered ml-4">Architecture setup -Final</figcaption>
                </figure>
               </div>
              </div>      


                    <div class="block">
                      <p>
                        That's it, more or less, the whole picture of this
                        project.
                      </p>
                    </div>
                    <div class="block">
                      <p>I hope you find it useful!</p>
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
import postsSideBar from "@/components/postsSideBar";
export default {
  components: {
    postsSideBar,
  },
  data() {
    return {
      post_id: 4,
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