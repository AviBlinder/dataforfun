<template>
<div>
   <section>
<div class="et_pb_text_inner">
  <h2>Classification of Yelp User&#8217;s reviews</h2>
<p>&nbsp;</p>
<h3><span style="color: #3366ff;">Introduction</span></h3>
<p>The purpose of this project was to compare between a &#8220;basic&#8221; sentiment analysis algorithm and a more elaborate one.</p>
<p>The algorithms were tested thru the &#8220;reviews&#8221; done by users (mainly for restaurants) as they were supplied by Yelp for 2016&#8217;s challenge (&#8220;Round 8&#8221;) in the &#8220;business&#8221; JSON dataset.</p>
<p>In this dataset, there are two main fields of interest for this project: &#8220;<strong>text</strong>&#8221; which contains a (qualitative) review by a user for a specific business, and &#8220;<strong>stars</strong>&#8220;, which is a numeric ranking (ranging from 1 to 5), usually meaning a quantitative feedback.</p>
<p><u>&#8220;The Sentiment&#8221;</u>: The output of both algorithms (the benchmark and the advanced one) was a classification of each review by one of three possible sentiments: &#8220;Positive&#8221;, &#8220;Neutral&#8221; or &#8220;Negative&#8221;.</p>
<p><u>Validating the results</u>: The validation of each classification was done by using the &#8220;stars&#8221; that the user gives the business being ranked, along with the review.</p>
<p>The underlying interpretation of the connection between qualitative and quantitative feedbacks states that a <em>negative review </em>equals one or two stars, a <em>neutral one</em> equals three and a <em>positive review</em> equals four or five stars. Of course, this interpretation is subjective and may differ from user to user, thus creating some discrepancies in the validation of the results.</p>
<h3><span style="color: #3366ff;">The Analysis</span></h3>
<h4><span style="color: #3366ff;">Part 1 &#8211; The &#8220;basic&#8221; algorithm.</span></h4>
<p>The basic and relatively fast performing algorithm that I implemented as benchmark works as follow:The basic and relatively fast performing algorithm that I implemented as the benchmark works as follow:</p>
<ol>
<li>Read a lexicon containing positive and negative words &#8211; the list of words is based on <a href="https://www.cs.uic.edu/~liub/FBS/sentiment-analysis.html">Hu and Liu&#8217;s lexicon</a></li>
<li>For each review, create a corpus using the following transformations:
<ul>
<li>convert all words to lowercase</li>
<li>remove punctuation</li>
<li>remove &#8220;english&#8221; stop words</li>
</ul>
</li>
<li>Count the negative and positive words in each corpus.</li>
<li>Subtract the negative from the positive sums: If a sum &lt; 0 then the review is <em>negative.</em> If a sum &gt; 0 then the review is <em>positive</em>. Otherwise classify as a neutral review.</li>
</ol>
<p>The classification done by the algorithm is compared against the ranking that each user gave, together with the review.</p>
<p>After running a sample of 800,000 reviews, the basic algorithm&#8217;s results are as follows (the colored heatmap should be read column-wise: the green thru yellow coloring is per column, going from the highest to the lowest values):</p>
<p><img class="aligncenter wp-image-465 size-full" title="Basic Algorithm - Raw Numbers" src="../assets/Baisc_raw_numbers.png" alt="baisc_raw_numbers" width="490" height="199" srcset="../assets/Baisc_raw_numbers.png 490w, ../assets/Baisc_raw_numbers-300x122.png 300w" sizes="(max-width: 490px) 100vw, 490px" /><img class="aligncenter wp-image-464 size-full" title="Basic Algorithm - Percentages" src="../assets/Baisc_perc_numbers.png" alt="baisc_perc_numbers" width="492" height="210" srcset="../assets/Baisc_perc_numbers.png 492w, ../assets/Baisc_perc_numbers-300x128.png 300w" sizes="(max-width: 492px) 100vw, 492px" /></p>
<p>According to the above tables, around<strong> 40.6%</strong> of Negative reviews are recognized correctly (1 and 2 stars), and <strong>93.4%</strong> of positive reviews are also recognized properly (4 and 5 stars).</p>
<p>The execution of the analysis was performed on an <strong>m4.4xlarge</strong> EC2 instance, and took about one <strong>hour and 40 minutes</strong>.</p>
<p><span style="font-size: 14pt; line-height: 107%; color: #3366ff;">Part 2 &#8211; The &#8220;advanced&#8221; algorithm.</span></p>
<p>Several aspects of natural language analysis are handled by this algorithm, including expressions, negation words, words written in uppercase, ambiguous words, etc.</p>
<p>In addition, certain tweaks can be applied to the algorithm by assigning different &#8220;weights&#8221; to different parts of the analysis. For example, if someone writes that a place was AWFUL, the &#8220;calculated&#8221; meaning can be &#8220;negative word&#8221; * 2 (e.g. twice as negative as just &#8220;awful&#8221;).</p>
<p>The following weights were set for the current analysis:</p>
<ul>
<li>&#8220;negations weight&#8221; = 1</li>
<li>&#8220;uppercase weight&#8221; = 5</li>
<li>&#8220;confirmation weight&#8221; = 3</li>
</ul>
<p>Without going into too much detail, the advanced algorithm implements the following flow:</p>
<ol>
<li>Creating a corpus for each review.
<ul>
<li>Since some <em>stop words</em> change the meaning of the review, prior to their removal, some expressions are checked and replaced by their meaning (e.g. &#8220;good&#8221; or &#8220;bad&#8221;).</li>
<li>Ambiguous words, such as &#8220;like&#8221;, can be part of the subject and/or predicate of a sentence.</li>
</ul>
</li>
<li>Handling expressions and replacing them with the words &#8220;good&#8221; or &#8220;bad&#8221;, to simplify the upcoming analysis.</li>
<li>Counting positive and negative words and calculating the current sentiment</li>
<li>&#8220;Negation check&#8221;: For each positive or negative word found, a negation word (such as &#8220;no&#8221;, &#8220;not&#8221;), placed one or two positions prior to the positive/negative word itself, is looked up. If such a word is found, a recalculation of sentiment is performed, changing the value from positive to negative and vice versa.</li>
</ol>
<p>A common practice in natural language analysis is the creation of N-grams: 2-grams meaning all possible combinations of two consecutive words, 3-grams meaning all possible combinations of three consecutive words, etc.</p>
<p>I preferred the current method (of search by index), for performance reasons.</p>
<ol start="5">
<li>&#8220;Confirmation check&#8221;: Words such as &#8220;so&#8221;, &#8220;too&#8221;, etc., prior to a positive or negative word, tend to express a stronger feeling, so if such words are found (and according to the pre-set weight), a new calculation of the sentiment is performed.</li>
<li>&#8220;Uppercase check&#8221;: Similar to the &#8220;confirmation&#8221; logic, if a word is written in uppercase, its meaning is emphasized, so according to the pre-set weight, another re-calculation is done in such cases.</li>
</ol>
<p>After running a similar sample of 800000 reviews, the advanced algorithm&#8217;s results are as follows:</p>
<p><img class="aligncenter wp-image-463 size-full" title="Advanced Algorithm - Raw Numbers" src="../assets/Adv_raw_numbers.png" alt="adv_raw_numbers" width="487" height="207" srcset="../assets/Adv_raw_numbers.png 487w, ../assets/Adv_raw_numbers-300x128.png 300w" sizes="(max-width: 487px) 100vw, 487px" /></p>
<p><img class="aligncenter wp-image-462 size-full" title="Advanced Algorithm - Percentages" src="../assets/Adv_perc_numbers.png" alt="adv_perc_numbers" width="487" height="210" srcset="../assets/Adv_perc_numbers.png 487w, ../assets/Adv_perc_numbers-300x129.png 300w" sizes="(max-width: 487px) 100vw, 487px" /></p>
<p>According to the above tables, around <strong>46%</strong> of Negative reviews are recognized correctly (1 and 2 stars), and <strong>92.3%</strong> of Positive reviews are also recognized properly (4 and 5 stars).</p>
<p>The execution of the analysis was performed on a <strong>m4.4xlarge</strong> <strong>EC2</strong> <strong>instance</strong>, and it took about <strong>three hours and 50 minutes</strong>.</p>
<h3><span style="color: #3366ff;">Conclusion</span></h3>
<p>The &#8220;basic&#8221; model, as it sometimes happens with &#8220;naïve&#8221; models, performs relatively well when applied to Yelp&#8217;s corpus of reviews, at least when classifying Positive and Neutral ones.</p>
<p>The &#8220;advanced&#8221; model offers certain improvements classifying mainly negative reviews, but generally it appears that upset or disappointed customers tend to be more &#8220;poetic&#8221; (e.g. tend to use more irony, sarcasm and cynicism) when writing a negative review, which makes classification more complicated.</p>
<p>Further analysis, mainly of negative reviews, is required in order to enhance the recognition rates. Also, some performance tuning should be done so the advanced algorithm can be executed faster than its current execution time.</p>
<h3><span style="color: #3366ff;">Final Note</span></h3>
<p>A common methodology implemented in text analysis involves creating a Document/Terms matrix, having each document as a row and each column being a word in the document (hence the values in the cells representing the frequency of each word on each document).</p>
<p>Based on such matrices, different machine learning models are implemented, thus trying to learn and predict from the whole set of documents the possible outcome (in our case, classifing each review as positive, neutral or negative).</p>
<p>This methodology is sometimes more time and memory-consuming.</p>
<p>The methodology implemented in this current analysis handles each document as an isolated case, being more time and processing effective, but missing possible insights from the analysis of a huge set of documents as a whole.</p>
<p>Each methodology has pros and cons, and should be implemented according to the requirements and limitations of the project.</p>
<h3><span style="color: #3366ff;">Technical Information</span></h3>
<ol>
<li>The whole project can be fully reproduced. The source code can be found under <a href="https://github.com/AviBlinder/SentimentAnalysis">https://github.com/AviBlinder/SentimentAnalysis</a></li>
</ol>
<ol start="2">
<li>Some rounds of the project were performed on AWS instances (M4 family) and based on a private RStudio AMI, equipped with &#8220;git&#8221; integration, thus allowing an ongoing development and testing process.</li>
</ol>
<p>Running on an m4.4xlarge EC2 instance, the analysis of 800000 reviews took around 3 hours and 50 minutes. Since the execution was with &#8220;spot instances&#8221;, and the cost per hour was less than 20 cents, the total cost being less than 80 cents….</p>
</div>
    </section> 
</div>

</template>