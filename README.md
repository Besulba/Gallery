# Gallery
Getting Started

1. Install NodeJs https://nodejs.org/en/download/
2. Install dependencies: npm install --global gulp-cli bower
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

<!-- begin wwww.htmlcommentbox.com -->
 <div id="HCB_comment_box"><a href="http://www.htmlcommentbox.com">Comment Form</a> 
 <div class="container">
    <div id="gallery" class="row">
    </div>
    <div id="overlay">
    </div>
</div></div>
 <link rel="stylesheet" type="text/css" href="//www.htmlcommentbox.com/static/skins/bootstrap/twitter-bootstrap.css?v=0" />
 <script type="text/javascript" id="hcb"> /*<!--*/ if(!window.hcb_user){hcb_user={};} (function(){var s=document.createElement("script"), l=hcb_user.PAGE || (""+window.location).replace(/'/g,"%27"), h="//www.htmlcommentbox.com";s.setAttribute("type","text/javascript");s.setAttribute("src", h+"/jread?page="+encodeURIComponent(l).replace("+","%2B")+"&opts=16862&num=10&ts=1456361442519");if (typeof s!="undefined") document.getElementsByTagName("head")[0].appendChild(s);})(); /*-->*/ </script>
<!-- end www.htmlcommentbox.com -->

4. Run gulp serve to load Gallery view