<template>
  <div>
        <section class="section">
      <div class="container">
        <div class="mt-5 columns is-4">
        <div class="column is-3 is-hidden-mobile is-vcentered">
              <posts-side-bar :currentPost="post_id"> </posts-side-bar>
        </div>
        <div class="column is-7">
              <div class="section">
                <div class="container">
                  <h1 class="is-size-4 has-text-centered has-text-weight-medium">
							Comparing Distributed Computing on AWS Big Data Services</h1>

  	<article>
			<div>			

<div class="block">
    <div class='card equal-height'>
    <div class='card-content is-flex is-horizontal-center'>

  <figure class="image is-264x264">
  <img class="is-centered" 
  src="../assets/Distributing-System.png" 
  alt="" width="200" height="149" />
  <figcaption class="mt-3"> <strong><em>Distributed computing</em> </strong>
  is a key concept in the “Big Data” paradigm.
  </figcaption>
  </figure>
      </div>
    </div>

</div>

<div class="block">
  <p>
  The distributed computing model was born as a way of dealing with the 
  ingestion and analysis of large amounts of data as data started growing
   exponentially.
  </p>
   </div>

<div class="block">
  <p> <mark>
  The <strong>'Big Data Problem'</strong> started when one machine was not able to 
  process or even store all the data required for a specific analysis. 
  The solution was to distribute data over clusters of machines, thus instead of 
  scaling vertically (getting single machines with more power), systems would 
  eventually scale horizontally (adding more nodes to the cluster 
  as data increase).
  </mark>
  </p>
  </div>

<div class="block"> 
  <p>
  A key concept regarding distributed computing is 
  the<strong> partition of data:</strong> How data are split across 
  different (physical and logical) partitions in a distributed system may have
   huge impact on many aspects of a cluster, such as performance, fault tolerance
    and more.
  </p>
    </div>

<div class="block">
  <mark>The purpose of this post is to compare the different mechanisms of
     data distribution and partitioning existing in four Big Data services in the 
     AWS ecosystem: Redshift,  DynamoDB, Kinesis Streams and EMR</mark>.</div>

<div class="block">
  <p>
  Along the comparison, I'll describe shortly some key concepts regarding the 
  architecture of each service, as they will help clarify how and why partitioning 
  is implemented.
  </p>
  </div>

<div class="block">
  <p>
  This comparison will hopefully clarify the similarities and differences among 
  those four services.
  </p>
  </div>
              <div class='card equal-height'>
                <div class='card-content is-flex is-horizontal-center'>
                  <figure class="image is-200x200">
                    <img aria-describedby="caption-attachment-1012" 
                      class="is-centered" 
                      src="../assets/Redshift-Logo.png" 
                      alt="AWS Redshift " 
                      />
                  <figcaption class="is-centered ml-4">AWS Redshift</figcaption>
                </figure>
               </div>
              </div>

<div class="block">

<p>Redshift is Amazon’s fast and fully managed petabyte-scale data
   warehouse service in the cloud.</p>
<p>It is a columnar, relational database that serves mainly for OLAP 
  (Online Analytics Processing) and B.I. (Business Intelligence) purposes.</p>
</div>

<div class="block">
  <p>
  In Redshift architecture, a typical cluster consists of one
   “<strong>Leader Node</strong>” and many “<strong>Compute Nodes</strong>” 
   (although a single-node cluster is also possible).
  </p>
</div>

<div class="block">
  <p>
  The 'compute nodes' are the ones storing the data. Data in those 
  instances is split among 'Node slices', where each block of data has a 
  fixed size of one MB.
  </p>
  </div>

<div class="block">
  <p>
  Below are some of the benefits that a multiple-nodes cluster might have:
  </p>
  </div>
<div>

<ol start="1">

<div class="my-2">
<li><strong>MPP (Massively Parallel Processing):</strong> Multiple nodes execute
 queries in parallel</li>
</div>
<div class="my-2">
<li>Each node has dedicated CPU, memory and local storage</li>
</div>
<div class="my-2">
<li>Easy scaling (out/in and up/down)</li>
</div>
<div class="my-2">
<li>Backups are done in parallel</li>
</div>
</ol>


              <div class='card equal-height'>
                <div class='card-content is-flex is-horizontal-center'>
                  <figure class="image is-650x480">
                    <img aria-describedby="caption-attachment-1012" 
                      class="is-centered" 
                      src="../assets/Redshift-Model.png" 
                      alt="AWS Redshift " 
                      />
                  <figcaption class="is-centered ml-4">Redshift Model</figcaption>
                </figure>
               </div>
              </div>      

</div>

<div class="block">
<p> <mark> Since Redshift is used for OLAP/BI (involving aggregations 
  and joins of data from different tables), the correct and efficient 
  partitioning of data on each node and node slice has paramount importance 
  and has a direct impact on the performance of the queries: ideally, each 
  query should involve only data stored in one specific node slice in order 
  to get maximum performance. </mark></p>
</div>

<div class="block">

<p>Redshift has three different options for data partitioning (called 
  <strong>distribution styles</strong>)</p>
</div>

<div>
<ol start="1">
<li class="mt-2">Even (Round-robin distribution)</li>
<li class="mt-2">Key (similar to column-partitioning/sharding)</li>
<li class="mt-2">All (similar to 'read replicas')</li>
</ol>
</div>
              <div class='card equal-height'>
                <div class='card-content is-flex is-horizontal-center'>
                  <figure class="image is-650x480">
                    <img aria-describedby="caption-attachment-1012" 
                      class="is-centered" 
                      src="../assets/Redshift-Distribution-Styles.png" 
                      alt="AWS Redshift " 
                      />
                  <figcaption class="is-centered ml-4">Redshift Distribution styles</figcaption>
                </figure>
               </div>
              </div>      
<div class="block">
<p><strong>Distribution Keys common considerations (rule of thumbs):</strong></p>
</div>


<p>
  <strong class="mt-2">KEY</strong><br />
&#8211; Large fact tables<br />
&#8211; Large dimension tables<br />
&#8211; Joins between tables based on specific keys<br />
&#8211; Group by based on specific keys<br />
<strong class="mt-2">ALL</strong><br />
&#8211; Medium dimension keys<br />
<strong class="mt-2">EVEN:</strong><br />
&#8211; Tables with no joins or group by clauses<br />
&#8211; Small dimension tables<br />
&#8211; Neither “KEY” or “ALL” are implemented.</p>


<div class="block mt-3">

<p>Furthermore, within each partition, data can 
  be <strong>sorted</strong> in three different ways to enhance even 
  more parallel processing:<br />
</p>

<p class="mt-2 ml-2">1. Single Column</p>
<p class="mt-2 ml-2">2. Compound  (many columns, the order of the columns 
  affect the sort order)</p>
<p class="mt-2 ml-2">3. Interleaved (many columns, there order of the columns 
  does not affect the sort order, e.g. equal weight is given to each column)</p>
</div>


<p>You can visit the following link containing detailed documentation for
   <a href="http://docs.aws.amazon.com/redshift/latest/dg/t_designating_distribution_styles.html" target="_blank">
   designing distribution keys</a>.
</p>      
              <div class='card equal-height'>
                <div class='card-content is-flex is-horizontal-center'>
                  <figure class="image is-200x200">
                    <img 
                      class="is-centered" 
                      src="../assets/DynamoDB-Logo.png" 
                      alt="AWS DynamoDB " 
                      />
                  <figcaption class="is-centered ml-4">AWS DynamoDB</figcaption>
                </figure>
               </div>
              </div>      

<div class="block">
  <p>
  <strong>Amazon DynamoDB</strong> is a fully managed <strong>NoSQL</strong> 
  database service that provides fast and predictable performance with seamless
   scalability.
  </p>
   </div>

<div class="block">
  <p>
  As per AWS documentation, in DynamoDB <strong>tables, items, and 
  attributes</strong> are the core components that you work with. 
  A <span class="italic">table</span> is a collection of 
  <span class="italic">items</span>, and each item is a collection 
  of <span class="italic">attributes</span>. DynamoDB uses 
  <strong>primary keys</strong> to uniquely identify each item in a 
  table and<strong> secondary indexes</strong> to provide more querying 
  flexibility.
  </p>
  </div>

<div class="block">
  <p>
  DynamoDB supports two different kinds of primary keys:
  </p>
  </div>

<div>
    <ol>
      <li class="block ml-2"><span class="bold"><strong>Partition key</strong></span> 
      – A simple primary key, composed of one attribute known as the 
      <em>partition key</em>. DynamoDB uses the partition 
      key's value as input to an internal hash function. The output from the hash function 
      determines the partition (physical storage internal to DynamoDB) in which the item
      will be stored.
      </li>
      <li class="block ml-2"><span class="bold"><strong>Partition key and sort key</strong></span>
      – Referred to as a <strong><em>composite primary key</em></strong>, \
      this type of key is composed of two attributes. The first attribute is the
      <em>partition key</em>, and the second attribute is the
      <em>sort key</em>. 
      DynamoDB uses the partition key value as input to an internal hash function. 
      The output from the hash function determines the partition (physical storage internal 
      to DynamoDB) in which the item will be stored. All items with the same partition key
        are stored together, in sorted order by sort key value. In a table that has a
        partition key and a sort key, it is possible for two items to have the same
          partition key value—however, those two items must have different
          sort key values.
          </li>
    </ol>
</div>
<div class="block my-3"> 
  <p>
    Another important DynamoDB feature that also affects partitioning is
   related to <strong>read and write provisioned throughputs</strong>:
    </p>
   </div>

<div class="block">
  <p>
  When you create a table, you specify how much provisioned throughput 
  capacity you want to reserve for reads and writes.
  </p>
  </div>

<div class="block">
  <p>
     DynamoDB will reserve the necessary resources to meet your throughput 
  needs while ensuring consistent, low-latency performance.
    </p>
  </div>
<div class="block">
  <p>
  In DynamoDB, you specify provisioned throughput requirements in terms 
  of <strong><span ><em>capacity units</em></span></strong>.
  </p>
  </div>
  
<div class="block">
  <p>
  You can set up required capacity as part of the table set up or
   dynamically modify RCU/WCU once the table is up.
  </p>
   </div>

<div class="block">
  <p>
  As part of the definition of a new table thru AWS Console, 
  you can use the <strong>'Capacity calculator'</strong> as an estimator of 
  required capacity:
  </p>
  </div>

              <div class='card equal-height'>
                <div class='card-content is-flex is-horizontal-center'>
                  <figure class="image is-480x370">
                    <img  
                      class="is-centered" 
                      src="../assets/dynamoDB-Capacity-Calculator.jpg" 
                      alt="DynamoDB Capacity Calculator " 
                      />
                  <figcaption class="is-centered ml-4">DynamoDB Capacity Calculator</figcaption>
                </figure>
               </div>
              </div>      


<div class="block">
  
   Below is a description of RCU and WCU meanings:
   </div>

<div><b>One read capacity unit (RCU) = </b></div>
<div><b>    &#8211; one item,<br />
</b></div>
<div><b>    &#8211; up to 4 KB in size,<br />
</b></div>
<div><b>    &#8211; with strong consistency (Eventually consisted reads cost half as much)<br />
</b></div>
<div><b>    &#8211; each second</b></div>

<div><b>One write capacity unit (WCU) = </b></div>
<div><b>    &#8211; one item,<br />
</b></div>
<div><b>    &#8211; up to 1 KB in size,<br />
</b></div>
<div><b>    &#8211; each second</b></div>
<div><b> </b></div>


<div class="block mt-4">
  <p>
  In addition, DynamoDB has two types of indexes: Local Secondary Indexes and
   Global Secondary Indexes.
  </p>
   </div>

<div class="block">
  <p>
  Creating A GLOBAL SECONDARY INDEX is quite similar to creating a new table. 
  The big advance is that DynamoDB keeps the indexes updated.
  </p>
  </div>

<div class="block">
  <p>
  Queries must specify the exact index against which they’ll run.
  </p>
  </div>

<div class="block">
  <p>
  Local secondary indexes live within each partition key, so they are useful 
  only if you have a compound primary key.
  </p>
  </div>

<div class="subtitle has-text-centered ">Partitioning</div>

<div class="block">
  Partitions are the underlying storage and processing nodes of DynamoDB.
  </div>

<div class="block"><mark>The partitioning process is transparent for the user and done automatically,
   when the partition size exceeds 10GB or when the total number of reads and writes 
   units exceed a certain level.</mark>
   </div>
<div class="block"><mark>This is why the primary key is called a partition key. 
  The P.K is used to determine on which partition a certain item will be stored.</mark>
  </div>

<div class="block">The number of partitions is not exposed to the end-users. However, 
  the formula is known:</div>

              <div class='card equal-height'>
                <div class='card-content is-flex is-horizontal-center'>
                  <figure class="image is-1000x150">
                    <img 
                      class="is-centered" 
                      src="../assets/DynamoDB-Partitions-Formula.png" 
                      alt="DynamoDB Partitions Formula  " 
                      />
                  <figcaption class="is-centered ml-4">DynamoDB Partition Formula</figcaption>
                </figure>
               </div>
              </div>      

<div class="block"> 
  <p>
  The result of the calculation is then rounded up.
  </p>
  </div>

<div class="block">
<p>
  For example, if a database is of 25GB size, the provisioned RCU = 15000 
  and the provisioned WCU = 12000, the number of partitions will be: 
  CEILING (MAX( 25/10, 15000/3000 + 12000/1000)) = 
  CEILING (MAX(2.5, 5+12)) = 17 Partitions.
</p>
  </div>

<div class="block">
  <p>
  Issues that we might face when designing provisioned capacity:
  </p>
  </div>

<div class="block">
  
  <b>1. </b>If you provision <strong>too much read/write capacity</strong>, the table 
will be split, although you may not have the whole data loaded.
</div>

<div class="block">Solution: Try to find a partition key that will balance the
   distribution of partitions.
   </div>
<div class="block"> The downsize is that it may add complexity to the 
  table/query design.
  </div>
<div class="block">
  <strong>2. Although DynamoDB splits partitions automatically</strong>, 
  the initial design of your table is very important, in order to guarantee an even
   distribution of data between partitions: This is important if you plan to have
    more than 10GB of data or high R/WCU’s
    </div>
<div class="block"><strong>3.</strong> Another consideration in designing tables is that
 partitions will automatically increase, but...
 </div>
<div class="block">&#8211; While there is an automatic split of data across 
  partitions, <b>there is no automatic decrease when 
    load/performance reduces. </b></div>
<div class="block">
  &#8211; Allocated WCU and RCU is split between partitions.
  </div>

<div class="block my-3">
  <p>
<mark>
   In summary, <strong>partitioning </strong>in DynamoDB is influenced by two key 
   factors: 
   <strong>primary keys (partition keys) and provisioned capacity.</strong> 
   A good understanding of those factors is fundamental for getting a well-performing
    table.
</mark>
  </p>
    </div>


              <div class='card equal-height'>
                <div class='card-content is-flex is-horizontal-center'>
                  <figure class="image is-630x300">
                    <img 
                      class="is-centered" 
                      src="../assets/DynamoDB-Partitions-Example.png" 
                      alt="DynamoDB Partitions Example" 
                      />
                  <figcaption class="is-centered ml-4">
                    DynamoDB Partitions Example
                    <br>
                    Image source: 
                    <a 
                    href="https://www.slideshare.net/InfoQ/amazon-dynamodb-design-patterns-best-practices" 
                    target="_blank">https://www.slideshare.net/InfoQ/amazon-dynamodb-design-patterns-best-practices
                    </a>                    
                    </figcaption>
                </figure>
               </div>
              </div>            		
				
              <div class='card equal-height'>
                <div class='card-content is-flex is-horizontal-center'>
                  <figure class="image is-200x200">
                    <img 
                      class="is-centered" 
                      src="../assets/Kinesis-Stream-Logo.png" 
                      alt="AWS Kinesis Stream" 
                      />
                  <figcaption class="is-centered ml-6">AWS Kinesis Stream</figcaption>
                </figure>
               </div>
              </div>      
          

<div class="block">
<p>In the third place, according to <em>partition importance</em>, I'd place 
<strong>AWS Kinesis Stream</strong>. It is a fully managed service that
 enables building custom applications that process or analyze 
 streaming data.</p>
</div>

<div class="block">

<p>It can be used for website clickstreams, financial transactions, 
  social media feeds, IT logs, location-tracking events and more.
  </p>
</div>

<div class="block">
<p>
  In Kinesis Streams service, we can deem a “table” entity as 
  a <strong>Kinesis Stream</strong>, and then each stream is divided
   into <strong>“Shards”</strong>.
  </p>  
   </div>

<div class="block">
  <p>
<mark>
  So, <strong>a shard is the parallel concept of a “table partition”
  </strong>, since records get distributed among the shards defined in 
  each stream.
</mark>
  </p>
  </div>

<div class="block">
  <p>
<mark>
  As with DynamoDB, the main reason for provisioning a small or large number of
   shards is the expected number of I/O per second, and not a certain business logic of 
   data distribution across partitions.
</mark>
  </p>
   </div>
<div class="block">
<p>
  But in contrast with DynamoDB, a<em> producer application</em> 
(e.g. an application that sends records to a Kinesis stream) might specify 
for each written record, to which specific shard it 
should be routed.

</p>
</div>

<div class="block">
<p>
  <mark>
  In Kinesis Streams console, you can estimate the number of shards you’ll need to 
  provide for a specific stream (and thus estimating the number of partitions
   of the stream):
  </mark>
  </p>  
</div>
              <div class='card equal-height'>
                <div class='card-content is-flex is-horizontal-center'>
                  <figure class="image is-860x350">
                    <img 
                      class="is-centered" 
                      src="../assets/Kinesis-Stream-Shards-Console.png" 
                      alt="Kinesis Stream Shards Console" 
                      />
                  <figcaption class="is-centered ml-4">Kinesis Stream Shards Console</figcaption>
                </figure>
               </div>
              </div>      



<div class="block">
  <p>
    <mark>
  Similar to DynamoDB (where capacity is a function of provisioned RCU/WCU),
   a stream is composed of one or more shards, and <strong>each of which provides a 
     fixed unit of capacity</strong>
    </mark>
  </p>
     </div>

<div class="block">
  <p>

  Each shard can support <strong>up to 5 transactions per 
    second for reads</strong>,
 <strong>up to a maximum total data read rate of 2 MB per second</strong> and <strong>up 
   to 1,000 records per second for writes</strong>, <strong>up to a maximum total 
     data write rate of 1 MB per second</strong> (including partition keys). 
     This, the data capacity of a stream is a function of the number of shards that
      you provide.
  </p>
      </div>

<div>
  The image bellow shows a Kinesis Stream Model:
</div>
              <div class='card equal-height'>
                <div class='card-content is-flex is-horizontal-center'>
                  <figure class="image is-1000x490">
                    <img 
                      class="is-centered" 
                      src="../assets/Kinesis-Stream-Model.png" 
                      alt="Kinesis Stream Model" 
                      />
                  <figcaption class="is-centered ml-4">Kinesis Stream Model</figcaption>
                </figure>
               </div>
              </div>      

<div class="block">
  <p>
Although consumers applications can theoretically read data from specific shard
 (e.g. partitions), as far as I know it is not a common usage. On the opposite, 
 <strong>usually the whole stream is processed</strong> and only third party services
  might aggregate or filter data according to specific criterias. This way of working
   places Kinesis Stream service nearby EMR in the sense that <strong>the whole data in a 
     stream is processed and the partitioning is meant to enhance parallel processing and 
     support expected I/O capacities.</strong>

  </p>
</div>

<div class="block">
  <p>

  Following this analogy, <strong>DynamoDB</strong> should be placed between Kinesis Stream
   and Redshift since the partitioning of data is meant both for querying specific 
   chunks of data (as with Redshift) but also as a way of effectively provisioning
    read/write throughput.
  </p>
    </div>
      
              <div class='card equal-height'>
                <div class='card-content is-flex is-horizontal-center'>
                  <figure class="image is-200x200">
                    <img 
                      class="is-centered" 
                      src="../assets/EMR-Logo.png" 
                      alt="AWS EMR Logo" 
                      />
                  <figcaption class="is-centered ml-6">AWS EMR </figcaption>
                </figure>
               </div>
              </div>      

<div class="block">
<p>Finally, AWS<strong> EMR (Elastic MapReduce)</strong>, a fully managed Hadoop
 cluster, is in the 'last place' regarding importance of partition keys.</p>
  </div>          
<div class="block">
<p>EMR enables parallel analysis of large files, such as logs, web indexing, 
  financial analysis and more.</p>
</div>
<div class="block">
<p>Usually, data hosted in an Hadoop cluster will be used for a full analysis, 
  using methodologies such as MapReduce.</p>
</div>
<div class="block">
<p>Thus, <strong>usually the whole data stored in an Hadoop cluster  is 
  usually analyzed by a specific job or query</strong>.</p>
</div>
<div class="block">
<p>A well known example of MapReduce implementation is counting words in a 
  huge corpus of data: the 'huge' file is split into chunks of 64MB size 
  (or more) among several data nodes (and replicated at least three times since 
  the hardware is 'cheap' and prone to fail). Then each chunk is analyzed in
   parallel, where the basic function <strong>maps</strong> each word and creates 
   key-value entries (for each word), where the key is the specific word and 
   the value is 'one' for each found word. The final <strong>'reduce' </strong>step
    in the job will get results from all the mappers and summarize all the 
    key-words into one final key-value list.</p>
</div>
<div class="block">
<p>As a result of this unique architecture, there is no meaning for
   a 'partition key' since data are split evenly across data nodes in 
   chunks of 64MB (or higher).</p>
</div>
<div class="block">
<p>The image below describes, in a nutshell, the Hadoop architecture that 
  is behind an EMR cluster:</p>
</div>
  <a href="http://bradhedlund.com/2011/09/10/understanding-hadoop-clusters-and-the-network/" target="_blank">
              <div class='card equal-height'>
                <div class='card-content is-flex is-horizontal-center'>
                  <figure class="image is-870x420">
                    <img 
                      class="is-centered" 
                      src="../assets/Hadoop-Model.png" 
                      alt="Hadoop Model" 
                      />
                  <figcaption class="is-centered ml-4">Hadoop Model </figcaption>
                </figure>
               </div>
              </div>      


</a>

<div class="blocl">

<p>According to the Hadoop model, all the data is split (and replicated
   by default 3 times) across the data nodes.</p>
</div>
<div class="block">
<p>The Master nodes oversee the two key functional pieces that make
   up Hadoop: storing lots of data (HDFS), and running parallel 
   computations on all that data (Map Reduce). The Name Node oversees 
   and coordinates the data storage function (HDFS), while the Job 
   Tracker oversees and coordinates the parallel processing of data
    using Map Reduce.</p>
</div>

<div class="block">
  <p>
  The goal here is fast parallel processing of lots of data. 
  (for a detailed explanation about the Hadoop architecture, 
  please refer to the <a href="http://bradhedlund.com/2011/09/10/understanding-hadoop-clusters-and-the-network/" target="_blank">following post</a>)
  </p>
  </div>

<h3 class="subtitle has-text-centered my-3">Summary</h3>
<div class="block">
<p>
<mark>
  We can place the 4 services in a 2X2 matrix summarizing 
  the relation between distribution and partitioning:
</mark>
  </p>
</div>
<div class="block">
<p>
  <mark>
  As a 'good old' (well, not so old) relational database, 
  <strong>Redshift</strong> is both a <strong>distributed and partitioned</strong>
   service. It even offers several partitioning approaches (a.k.a. distribution styles).
  </mark>
   </p>
</div>
<div class="block">
<p>
  <mark>
  <strong>DynamoDB</strong>, a NoSQL database, is <strong>distributed and 
  partitioned</strong>, but the partitioning is much more restrict to a specific 
  attribute in each table.
  </mark>
  </p>
</div>
<div class="block">
<p>
  <mark>
  <strong>Kinesis Streams</strong> is mainly a <strong>distributed </strong>service, 
offering partitions (as shards) mainly as a way of managing the stream of 
incoming data.
  </mark>
</p>
</div>
<div class="block">
<p>
  <mark>
  Finally, <strong>EMR</strong> is a <strong>distributed</strong> service, with no
 'key' partitioning mechanisms.
  </mark>
 </p>
</div>
       <div>
				<div class="block my-4">
          <p>The material for this post is based on my knowledge and experience and
             also based on several sources, mainly:</p>
<ol>
<li class="mt-2">AWS documentation</li>
<li class="mt-2"><a href="https://acloud.guru/course/aws-certified-big-data-specialty/dashboard" target="_blank">acloud.guru big data specialization</a></li>
<li class="mt-2">Several other sources, cited across the post.</li>
</ol>
<p>&nbsp;</p>

</div>
			</div> 
			</div> 
				</article> 
                </div>
              </div>
        </div>
        </div>
      </div>
        </section>
  </div>
</template>

<script>
import postsSideBar from '@/components/postsSideBar'
  export default {
    components: {
      postsSideBar
    },
      data(){
    return{
      post_id: 2
    }
  }
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