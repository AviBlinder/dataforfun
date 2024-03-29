<template>
  <div>
    <section class="section">
      <div class="container">
        <div class="mt-5 columns is-4">
        <div class="column is-3 is-hidden-mobile is-vcentered">
              <projects-side-bar :currentProject="project_id"> </projects-side-bar>
        </div>
        <div class="column is-7">
	<article>
			<div class="section">	
				<div class="container">
          
          <h1 class="title has-text-centered">Social Network Analysis</h1>

        <h2 class=" my-4 subtitle has-text-centered">
          Finding the most socially-important users on Yelp dataset
        </h2>
        <h3 class="my-3"><span style="color: #3366ff;">Introduction</span></h3>

<div class="block">
<p>The cliché says that the world is an increasingly interconnected place, 
  and the connections between different entities are often best represented
   with a graph.</p>
</div>   

<div class="block">

<p> <mark> The purpose of this project is implementing several SNA (Social Network Analysis) 
  techniques and algorithms on Yelp datasets , in order to gain some insights related 
  to 'importance' of users in Yelp's network.</mark></p>

</div>

<h3 class="my-3"><span style="color: #3366ff;">Question</span></h3>

<div class="block">

<p> <mark> Ever wondered who is the most influential user in a specific network? Who is
   that person, <strong>assuming that you have to pick just one</strong>, is the 
   most valuable in that social network?
   </mark>
   </p>
</div>

<div class="block">

<p>As stated in the introduction, the purpose of this analysis is trying to answer
   to that question by applying tools used in the world of graph databases.</p>

</div>
<div class="block">

<p>There is more than one answer to the question, and different methodologies 
  can be implemented in that inquiry, so the following analysis is just one
   out of many, rendering a specific output out of several 
   possible ones.</p>
</div>

<h3 class="subtitle has-text-justified my-3"><span style="color: #3366ff;">Analysis</span></h3>

<h4 class="my-4"><span style="color: #3366ff;">The Datasets</span></h4>

<p>The sources of data I've used are based on 3 Yelp datasets: 'users', 
  'business' and 'reviews'.</p>

<div class="block">
<p>In order to create a network of users and friendships, I 
  'normalized' the users' datasets, creating a 'long-formatted' list of 
  friends for each user (since the original format was wide-formatted, e.g. each user 
  has an array of related friends).</p>
</div>

<h4 class="my-4"><span style="color: #3366ff;">Filtering businesses and related users</span></h4>

<div class="block">

<p>The whose dataset of users has more than 680,000 users, and the 'long' dataset 
  of users-friends (e.g. a dataset with two rows: a user and all his 'friends'), 
  has more than 4 million rows…</p>
</div>

<div class="block">
<p>Making analysis on the whole datasets is quite resource-demanding
   (CPU, memory, etc.), so the first part of the analysis concentrates in the 
   reduction of those datasets:</p>
</div>

<div class="block">
<p><strong>Step 1: </strong>Since the central 'entity' around which the whole Yelp's 
platform works is the <em>business</em>, I started the analysis by summarizing the number 
of reviews each business has, and then picking the ones with higher numbers, since I assume 
they are the most popular ones.</p>
</div>

<div class="block">
<p>For sake of simplicity, I set a threshold of 100 first most reviewed restaurants for
   the next step of the analysis.</p>
</div>
<div class="block">
<p>Below is a list of the 10 most reviewed restaurants and a histogram showing the 
  distribution of reviews among the top 100 most reviewed restaurants</p>
</div>
<p>
  <div style="width: 332px" class="ml-6">
  <img aria-describedby="caption-attachment-565" 
  src="../assets/Top-Reviewed-Restaurants-e1481657780925.png" 
  alt="top-reviewed-restaurants" 
  width="322" height="262" 
  srcset="../assets/Top-Reviewed-Restaurants-e1481657780925.png 322w, 
  ../assets/Top-Reviewed-Restaurants-e1481657780925-300x244.png 300w" 
  sizes="(max-width: 322px) 100vw, 322px" />
  <p id="caption-attachment-565" 
  class="has-text-info-dark  ">Table of Top Reviewed Restaurants</p>
  </div>
</p>

<p>
  <img  
  src="../assets/Number-of-Reviews-of-Top-100-Restaurants.jpg" 
  alt="Review's Histogram of top 100 Yelp Restaurants" 
  width="479" height="480" 
  srcset="../assets/Number-of-Reviews-of-Top-100-Restaurants.jpg 479w, 
  ../assets/Number-of-Reviews-of-Top-100-Restaurants-150x150.jpg 150w, 
  ../assets/Number-of-Reviews-of-Top-100-Restaurants-300x300.jpg 300w" 
  sizes="(max-width: 479px) 100vw, 479px" />
  </p>

<div class="block my-3" >

<p><strong>Step 2: </strong>Having a list of 100 businesses (restaurants) with highest
 number of reviews by different users is not enough, so the second step is summarizing,
  out of that list, the ones with the highest number of
   <strong>users with friends. </strong>
   This is very important on Yelp's datasets, since only 43% of the users on the
    dataset have at least one friend.</p>
</div>

<div class="block">
<p><strong>Out of the 100 restaurants, only 36 of them have at least 30% of 
  'friendly reviewers' </strong>(e.g. users that gave review to that restaurant 
  and that have at least one friend on Yelp's dataset).</p>
</div>

<div class="block my-3">
<p><strong>Step 3:</strong> Now that I managed to isolate the top 36 restaurant
 with friendly reviewers, the next step will end the preparations stage: 
 I'll isolate all those users involved on those reviews, in order to start
  the SNA stage.</p>

</div>
<div class="block">
<p>Let's see who are the 'friendly users' that gave the highest number of 
  reviews to those 36 restaurants:
  
  <img class="aligncenter my-3 size-full" 
  src="../assets/Top-Users-by-Number-of-Reviewes-510x382.png" 
  alt="top-users-by-number-of-reviewes" 
  width="712" height="577" 
  srcset="../assets/Top-Users-by-Number-of-Reviewes-510x382.png 712w, 
  ../assets/Top-Users-by-Number-of-Reviewes-300x243.png 300w" 
  sizes="(max-width: 712px) 100vw, 712px" /></p>
</div>

<h4 class="my-3 subtitle"><span style="color: #3366ff;">Analysis of the Social Network</span></h4>

<div class="block">
<p>Now that I isolated a list of users from the most reviewed restaurants, I'll start this Social Network Analysis 
  with some descriptive statistics.</p>
</div>
<div class="block">
<p>Side by side with the analysis, I'll explain key concepts related to the analysis 
  of social networks.</p>
</div>
<div class="block">
    <p>
      <mark> The analysis is performed using 'igraph' R 
        package, which is <strong>the </strong>package for SNA.
  </mark>
  </p>
</div>


<p class="mb-3">For a detailed documentation, please refer to <a href="http://igraph.org/r/">igraph oficial site</a>'</p>

<div class="block">
<h4 class="subtitle my-3"><span style="color: #3366ff;">The basic logic</span></h4>
</div>

<div class="block">

<p>One possible approach for this analysis would be creating a unified dataset of users and friends involved in the
   review of the top restaurants, and then finding the most central one.</p>
</div>
<div class="block">
<p>An alternative approach, which I'm in fact implementing, is handling each restaurant as an isolated 
  network of users: with this approach, I'm measuring the importance of each user for each restaurant, 
  and then combining the data in order to see if there is a potential user that outstands as important 
  for most of those networks.</p>
</div>
<div class="block">
<p>So, prior to the creation of a graph dataset, I need to create a list of users (that reviewed each 
  of the selected 36 restaurants), and their friends.</p>

<p>Each such list is the input to the graph analysis…</p>
</div>
<div class="block">
<p>For simplicity of explanation, I'll take just one business ('Delmonico Steakhouse') and detail
   it's network-related features. A summary list is appended at the end of this section.</p>
</div>

<div class="block">
<p>Creating the graph data frame:</p>

    <div class="wp_codebox"><table><tr id="p3911"><td class="line_numbers"><pre>1
</pre></td><td class="code" id="p391code1"><pre class="rsplus" style="font-family:monospace;">Y_graph <span style="color: #080;">&lt;-</span> graph.<span style="">data</span>.<span style="">frame</span><span style="color: #080;">&#40;</span>friends_b1,directed <span style="color: #080;">=</span> FALSE,vertices <span style="color: #080;">=</span> users_vertices<span style="color: #080;">&#41;</span></pre></td></tr></table></div>
</div>

<div class="block">
<p>Since the relation between user and friend is bidirectional (e.g. if A is friend of B, then B is always friend of A), the
   graph is not directed (thus the parameter directed=FALSE)</p>
</div>

<h4 class="subtitle my-3 "><span style="color: #3366ff;">Descriptive statistics</span></h4>

<div class="block is-rounded has-text-weight-bold">
  <blockquote><em>
  Graphs are comprised of vertices (also often called 'nodes') and edges connecting 
    those nodes, thus nodes and edges represent the basic entities on a graph database.
    </em>
  </blockquote >
</div>

<div class="block">

<p>Now that we finally have a list of users and friends, we are ready to go…So we will start with some graph statistics
   in order to get acquainted with our network.</p>
</div>


<div class="block"><table><tr id="p3912"><td class="line_numbers">
  <pre>
1
2
3
4
5
</pre>
</td>
<td class="code" id="p391code2">
  <pre  style="font-family:monospace;">vcounts <span style="color: #080;">&lt;-</span> vcount<span style="color: #080;">&#40;</span>Y_graph<span style="color: #080;">&#41;</span><span style="color: #080;">;</span>
ecounts <span style="color: #080;">&lt;-</span> ecount<span style="color: #080;">&#40;</span>Y_graph<span style="color: #080;">&#41;</span>
vcounts<span style="color: #080;">;</span>ecounts
<span style="color: #ff0000;">10197</span>
<span style="color: #ff0000;">14503</span></pre></td></tr></table></div>

<div class="block">
<p>The number of users in this network that we just created is 10197 and the number of 
  relationships between those users is 14503.</p>
<p class="mt-2">Thus, we can say that the average number of friends per user in this 
  network is about 1.4</p>
  </div>

<div class="block is-rounded has-text-weight-bold">
<blockquote>
<em>
  <p>In graph theory, the degree of a vertex of a graph is the number of edges incident to the vertex.</p>
</em>
  </blockquote>  
</div>

<div class="block">
<p>We can now get a list of degrees (edges connected directly to each node) of all the nodes:</p>
</div>

<div>
  <table>
    <tr >
      <td >
  <pre>1
</pre>
</td>
<td class="code" id="p391code3">
  <pre  style="font-family:monospace;">degree<span style="color: #080;">&#40;</span>Y_graph<span style="color: #080;">&#41;</span></pre>
  </td></tr></table></div>

<div class="block my-3">
  <p>and plot it to get an idea of the degree's distribution:</p>
</div>

  <div id="attachment_564" 
  style="width: 490px">
  
  <figure>

  <img aria-describedby="caption-attachment-564" 
  src="../assets/Degrees-Distributions.png" 
  alt="degrees distribution on normal scale and log 10 scale" 
  width="480" height="480" 
  srcset="../assets/Degrees-Distributions.png 480w, 
  ../assets/Degrees-Distributions-150x150.png 150w, 
  ../assets/Degrees-Distributions-300x300.png 300w" 
  sizes="(max-width: 480px) 100vw, 480px" >

  <figcaption  class="is-size-6	 has-text-centered	 has-text-weight-light">degrees distribution on normal scale and log 10 scale</figcaption>
    </figure>

  </div>

<div class="block">

<p>As we can see (and as we assumed from the relation between number of nodes and edges),
   the vast majority of nodes have only 1 or 2 friends).</p>
</div>

<div class="block">

<p>Another interesting measure is the diameter of the network:</p>
</div>

<div class="block has-text-weight-bold"><em>The diameter of a graph is the length of the longest shortest-path</em>
</div>


<div class="block">
  <table> 
    <tr id="p3914">
      <td class="code" id="p391code4">
        <pre class="rsplus" style="font-family:monospace;">diameter<span style="color: #080;">&#40;</span>Y_graph<span style="color: #080;">&#41;</span>
<span style="color: #ff0000;">9</span>
</pre>
</td>
</tr>
</table>
</div>

<div class="block">

<p><mark>In our case, the largest shortest-path between two users is 9, meaning that at the maximum, 
  we need 7 additional connected friends in order to connect between two users. </mark></p>
</div>

<p>Also, we can get the 'names' of those users:</p>

<div class="">
  <table>
    <tr id="p3915"><td class="line_numbers"><pre>1
2
3
4
</pre></td><td class="code" id="p391code5"><pre class="rsplus" style="font-family:monospace;">farthest_users <span style="color: #080;">&lt;-</span>  farthest.<span style="">nodes</span><span style="color: #080;">&#40;</span>Y_graph,directed <span style="color: #080;">=</span> <a href="http://astrostatistics.psu.edu/su07/R/html/graphics/html/F.html"><span style="color: #0000FF; font-weight: bold;">F</span></a><span style="color: #080;">&#41;</span>$vertices
farthest_users<span style="color: #080;">&#91;</span><span style="color: #080;">&#91;</span><span style="color: #ff0000;">1</span><span style="color: #080;">&#93;</span><span style="color: #080;">&#93;</span>$user_name<span style="color: #080;">;</span>  farthest_users<span style="color: #080;">&#91;</span><span style="color: #080;">&#91;</span><span style="color: #ff0000;">2</span><span style="color: #080;">&#93;</span><span style="color: #080;">&#93;</span>$user_name
<span style="color: #080;">&#91;</span><span style="color: #ff0000;">1</span><span style="color: #080;">&#93;</span> <span style="color: #ff0000;">&quot;Dorothy&quot;</span>
<span style="color: #080;">&#91;</span><span style="color: #ff0000;">1</span><span style="color: #080;">&#93;</span> <span style="color: #ff0000;">&quot;Jess&quot;</span></pre></td></tr></table></div>

<div class="block my-3 has-text-weight-bold has-text-justify">
  <em>
  <p>The density of a graph is the ratio between the number of edges and the number of possible edges.</p>
  </em>
</div>

<p>Another statistic, of which we can assume more or less its value, is the network density 
  (e.g. how connected is the network in relation to the maximum possible connectivity)</p>

  <div class="block">

<p>The density in the current network is calculated as follow:</p>
  </div>

<div class="wp_codebox"><table><tr id="p3916"><td class="line_numbers"><pre>1
2
</pre></td><td class="code" id="p391code6"><pre class="rsplus" style="font-family:monospace;">graphDensity <span style="color: #080;">&lt;-</span> graph.<span style="">density</span><span style="color: #080;">&#40;</span>Y_graph<span style="color: #080;">&#41;</span>
<span style="color: #ff0000;">0.000278988</span></pre></td></tr></table></div>


<div class="block my-3">

<p>This is a really low value, hence rectifying our prior knowledge about the ratio of edges per node.</p>
</div>
 

<p> A final descriptive statistic is the Average degree of the neighbors of a given vertex</p>

<div class="block has-text-weight-bold my-3">
  <p>
    <em>
    Beyond the degree distribution itself, it can be interesting to understand 
  the manner in which vertices of different degrees are linked with each other.
    </em>
  </p>
</div>


<div class="block">

<p>Useful in assessing this characteristic is the notion of the <strong>average degree of the</strong></p>
<p><strong>neighbors of a given vertex.</strong></p>
</div>

<div class="block">

<p>For example, a plot of average neighbor degree versus vertex degree, suggests that while there is a tendency 
  for vertices of higher degrees to link with similar vertices, vertices of lower degree tend to link with vertices 
  of both lower and higher degrees'.</p>
</div>

<div class="wp_codebox"><table><tr id="p3917"><td class="line_numbers"><pre>1
2
3
4
5
6
</pre></td><td class="code" id="p391code7"><pre class="rsplus" style="font-family:monospace;">knn.<span style="">deg</span>.<span style="">g</span> <span style="color: #080;">&lt;-</span> graph.<span style="">knn</span><span style="color: #080;">&#40;</span>Y_graph,V<span style="color: #080;">&#40;</span>Y_graph<span style="color: #080;">&#41;</span><span style="color: #080;">&#41;</span>$knn
degree.<span style="">g</span> <span style="color: #080;">&lt;-</span> degree<span style="color: #080;">&#40;</span>Y_graph<span style="color: #080;">&#41;</span>
degrees_table <span style="color: #080;">&lt;-</span> <a href="http://astrostatistics.psu.edu/su07/R/html/graphics/html/as.data.frame.html"><span style="color: #0000FF; font-weight: bold;">as.<span style="">data</span>.<span style="">frame</span></span></a><span style="color: #080;">&#40;</span><a href="http://astrostatistics.psu.edu/su07/R/html/graphics/html/table.html"><span style="color: #0000FF; font-weight: bold;">table</span></a><span style="color: #080;">&#40;</span>degree.<span style="">g</span><span style="color: #080;">&#41;</span><span style="color: #080;">&#41;</span>
<a href="http://astrostatistics.psu.edu/su07/R/html/graphics/html/names.html"><span style="color: #0000FF; font-weight: bold;">names</span></a><span style="color: #080;">&#40;</span>degrees_table<span style="color: #080;">&#41;</span> <span style="color: #080;">&lt;-</span> <a href="http://astrostatistics.psu.edu/su07/R/html/graphics/html/c.html"><span style="color: #0000FF; font-weight: bold;">c</span></a><span style="color: #080;">&#40;</span><span style="color: #ff0000;">&quot;Degree&quot;</span>,<span style="color: #ff0000;">&quot;Frequency&quot;</span><span style="color: #080;">&#41;</span>
<a href="http://astrostatistics.psu.edu/su07/R/html/graphics/html/row.names.html"><span style="color: #0000FF; font-weight: bold;">row.<span style="">names</span></span></a><span style="color: #080;">&#40;</span>degrees_table<span style="color: #080;">&#41;</span> <span style="color: #080;">&lt;-</span> NULL
degrees_table$Degree <span style="color: #080;">&lt;-</span> <a href="http://astrostatistics.psu.edu/su07/R/html/graphics/html/as.integer.html"><span style="color: #0000FF; font-weight: bold;">as.<span style="">integer</span></span></a><span style="color: #080;">&#40;</span>degrees_table$Degree<span style="color: #080;">&#41;</span></pre></td></tr></table></div>

<figure class="my-4">
  <img 
  src="../assets/Vertex-Degrees-vs.-Neighbors-Degrees.png" 
  alt="vertex-degrees-vs-neighbors-degrees" 
  width="480" height="480" 
  srcset="../assets/Vertex-Degrees-vs.-Neighbors-Degrees.png 480w, 
  ../assets/Vertex-Degrees-vs.-Neighbors-Degrees-150x150.png 150w, 
  ../assets/Vertex-Degrees-vs.-Neighbors-Degrees-300x300.png 300w" 
  sizes="(max-width: 480px) 100vw, 480px" />
  
</figure>

<div class="block">

<p> <mark> It looks like there are many nodes in this network with low degree's 
  numbers but connected to high-degree neighbors.</mark></p>
</div>


<h4 class="subtitle has-text-justified"><span style="color: #3366ff;">Vertex/Edge centrality</span></h4>

<div class="block">

<p>Now that we have a more precise idea about the general 'look and feel' of each network, 
  let's advance to the next stage: measuring centrality of nodes and edges</p>
</div>
<div class="block">

<p>In graph theory, there are three main ways of measuring the centrality of a vertex: 
  <strong>closeness</strong>, <strong>betweeness</strong> and <strong>eigenvector centrality</strong>.</p>
</div>
<div class="block">
<p>Since 'betweeness' is usually a good descriptor of centrality in relation to flow of data,
   I'll concentrate the analysis of centrality upon this measure.</p>
</div>
<div class="block">
<p>In addition, a well-known measure of <strong>edge centrality </strong>is the edge-betweeness.</p>
</div>
<div class="block">
  <div class="block is-rounded has-text-weight-bold">
  <blockquote><em>
  <p>The vertex and edge betweeness are (roughly) defined by the number of
   shortest paths going through a vertex or an edge.</p>

</em>
  </blockquote>
</div>

</div>

<div class="block my-3">

<p> <mark> So, the next step in this query is finding which 'selected' users are also rated high according to 'node betweeness'.</mark></p>
</div>

<div class="block"><table><tr id="p3918"><td class="line_numbers"><pre>1
</pre></td><td class="code" id="p391code8"><pre class="rsplus" style="font-family:monospace;">btw_grade <span style="color: #080;">&lt;-</span> betweenness<span style="color: #080;">&#40;</span>Y_graph<span style="color: #080;">&#41;</span></pre></td></tr></table></div>

<div class="block">
<p>For each business network, I then rank the top 10 users according to their betweeness score, 
  and then summarize the ranks of each user in all the networks.</p>
</div>
  
  <div class="block">

<p>The results are quite interesting...</p>
  </div>

  <div  style="width: 919px" class="block">
    <figure>

    <img aria-describedby="caption-attachment-583" 
    src="../assets/Top-Users-by-Centrality-Rank-768x479.png" 
    alt="Top Users By Betweenes Centrality" 
    width="700" height="567" 
    srcset="../assets/Top-Users-by-Centrality-Rank-768x479.png 909w, 
    ../assets/Top-Users-by-Centrality-Rank-300x187.png 300w, 
    ../assets/Top-Users-by-Centrality-Rank-768x479.png 768w, 
    ../assets/Top-Users-by-Centrality-Rank-400x250.png 400w" 
    sizes="(max-width: 909px) 100vw, 909px" />
    <figcaption  >Top Users By Betweeness Centrality</figcaption>
        </figure>

    </div>
    
<h4 class="subtitle has-text-centered"><span style="color: #3366ff;">Results</span></h4>

<p> <mark> As one might have expected, in low-density networks, users with high number 
  of friends tend to be the more central ones.<br />
However, although the top 2 users are both the most 'friendly' ones and the most central 
ones (however, in opposite order), for the other ones, this is not the case: users with lower number 
of friends are found to be more central, in average, one considering their centrality upon the 36
 different networks of the selected restaurants.</mark></p>
 
 </div>
			</div> 
      <div>	
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
      project_id: 1,
    };
  },
};
</script>

<style scoped>
mark {
  background-color: rgb(104, 242, 247);
}
</style>