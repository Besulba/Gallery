# Gallery
Getting Started

1. Install NodeJs https://nodejs.org/en/download/
2. Install dependencies: npm install --global gulp-cli bower

In the path, where do you have the project, execute the next code:

3. Run npm install --save <package> to install frontend dependencies
3. Run bower install --save <package> to install frontend dependencies
4. Run gulp serve to load Gallery view
5. Run gulp serve:test to run the tests in the browser
6. Run gulp to build your webapp for production
7. Run gulp serve:dist to preview the production buil
8. Now do you need to use the plugin gallery
9. the example the find in the index.html and index.js ,
this file are the example of how you can start to use the plugin gallery

Steps for use the gallery plugin

1. add path css <link rel="stylesheet" href="source/gallery.css"> to your html file
2. add path js <script src="source/gallery.js"></script>
3. add in your thml file the next lines code:

<!-- begin -->
<pre><code>
&lt;div class="container"&gt;
    &lt;div id="gallery" class="row"&gt;
    &lt;div&gt;
    &lt;div id="overlay"&gt;
    &lt;/div&gt;
&lt;/div&gt;
</code></pre>
<!-- end  -->

4. Run gulp serve to load Gallery view
