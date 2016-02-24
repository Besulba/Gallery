//get instance of gallery
var gallery = new Gallery();
//init gallery class
gallery.init("gallery", "source/gallery.json");
//put numbers of images to load in view it is optional
gallery.putNumberImagesLoad({mobile:3,tablet:6,desktop:6});
//load galery in view
gallery.loadGallery();