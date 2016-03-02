//constructor gallery
function Gallery(){
    this.loadGallery = loadGallery;
    this.init = init;
   	this.getImages = getImages;
    this.paint = paint;
    this.paintOverlay = paintOverlay;
    this.prev = prev;
    this.next = next;
    this.putNumberImagesLoad = putNumberImagesLoad;
    this.getNumberImagesLoad = getNumberImagesLoad;
    this.scroll = scroll;
    this.loadOverlay = loadOverlay;
    this.countTotalImages = countTotalImages;
}

//init gallery
function init(containerGallery, url){ 
    this.containerGallery = containerGallery;
   	this.url = url;
    this.images = "";
    this.mode = {card:"card", overlay:"overlay"};
    this.pathImage = "assets/images/";
    this.numberImagesLoad = { mobile : 2 , tablet : 3 , desktop : 3 };
    this.totalImagesload = 0;
    this.prevNumberImageLoad = 0;
    this.scroll();
    this.loadOverlay();
}

//Consult JSON file for get Image
function getImages(url){ 
   	var xmlhttp= new XMLHttpRequest();
    var galleryImage = null;

    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == XMLHttpRequest.DONE ) {
           if(xmlhttp.status == 200){
               gallery.images = JSON.parse(xmlhttp.responseText);
               //get number image to show
               gallery.countTotalImages();
               //paint gallery with images JSON data
               gallery.paint(gallery.mode.card);
           }
           else if(xmlhttp.status == 400) {
                alert('There was an error 400');
           }
           else {
                alert('something else other than 200 was returned');
           }
        }
    }

    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}

//paint gallery view 
//param mode if is in view overlay or gallery card
function paint(mode,prevNumberImageLoad){
    var grid = document.getElementById(gallery.containerGallery);
    var card = card = document.getElementById(mode);
    var cln = card.cloneNode(true);
    
    if(mode == "card"){
        grid.innerHTML  = "";    
    }
    
    for(var i=gallery.prevNumberImageLoad; i<gallery.totalImagesload; i++){
        cln.id = i;
        //params card item, mode(gallery,overlay), i  is position in the object
        addCard(cln,i);
        grid.innerHTML +=  cln.outerHTML;
    }
}

//add event scroll at document for the load images
function scroll(){
    document.onscroll = function rechargeImages(){
        gallery.prevNumberImageLoad = gallery.totalImagesload;
        gallery.countTotalImages();
        //paint gallery with images JSON data
        gallery.paint("0",gallery.prevNumberImageLoad);
    };
}

//count the number the image to show in view gallery
function countTotalImages(){
    var numberImagesLoad = gallery.getNumberImagesLoad();
    if(gallery.images.length < gallery.totalImagesload + numberImagesLoad){
        gallery.totalImagesload = gallery.images.length;
    }else{
        gallery.totalImagesload += numberImagesLoad;    
    }
}

//return the number of images to load in view
function getNumberImagesLoad(){
    var viewWidth  = document.activeElement.clientWidth;
    var device = 9;
    if(viewWidth > 992){
        device = gallery.numberImagesLoad.desktop;
    }else if(767 < viewWidth && viewWidth <= 991){
        device = gallery.numberImagesLoad.tablet;
    }else{
        device = gallery.numberImagesLoad.mobile;
    }
    
    return device;
}

//param target card
//param target posicion 
//update card info 
function addCard(card,posicion){
    card.children[0].src = gallery.images[posicion].imageurl;
    card.children[0].id = "image" + posicion;
    card.children[1].innerHTML = gallery.images[posicion].name;
    card.children[1].id = "title" + posicion;
    card.children[2].innerHTML = "By : " + gallery.images[posicion].artist;
    card.children[2].id = "text" + posicion;
}

//paint overlay view
//param image to paint overlay
//param state event if change card or show overlay card
function paintOverlay(image,changeCard){
    var modal = document.getElementById("modal");
    var moveCard = document.getElementById("moveCard");
    var posicion = parseInt(image.id);
    if(changeCard){
        modal.innerHTML = image.innerHTML;    
    }else{
        addCard(modal,posicion);
    }
    
    addCardOverlay(modal,posicion,moveCard);
}

//param target modal
//param target posicion 
//update card extra info 
function addCardOverlay(modal,posicion,moveCard){
    modal.children[0].dataset.toggle  = "";
    modal.children[3].innerHTML = gallery.images[posicion].about;
    modal.children[3].id = "descripcion" + posicion;
    modal.children[4].innerHTML = "Current value: " + gallery.images[posicion].price + " million";
    modal.children[4].id = "price" + posicion;
    
    moveCard.children[0].id = posicion;
    moveCard.children[0].src = gallery.pathImage + "icon-prev.png";
    moveCard.children[1].id = posicion;
    moveCard.children[1].src = gallery.pathImage + "icon-next.png";
}

//previews card overlay
//param prev is card overlay currently
function prev(prev){
    var posicion = parseInt(prev.id) - 1;
    if(posicion == -1){
        posicion = gallery.totalImagesload - 1;
    }
    var card = document.getElementById(posicion);
    paintOverlay(card,false);
}

//next card overlay
//param next is card overlay currently
function next(next){
    var posicion = parseInt(next.id) + 1;
    if(posicion == gallery.totalImagesload){
        posicion = 0;
    }
    var card = document.getElementById(posicion);
    paintOverlay(card,false);
}

//set JSON with the images number to load in each device
function putNumberImagesLoad(numberImagesLoad){
    gallery.numberImagesLoad = numberImagesLoad;
}

//load gallery.html and set in gallery div element
function loadGallery(){
    var xmlhttp = new XMLHttpRequest();
    var galleryhtml = document.getElementById('gallery');
    
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == XMLHttpRequest.DONE ) {
           if(xmlhttp.status == 200){
               galleryhtml.innerHTML = xmlhttp.responseText;
               //charge gallery view
               gallery.getImages(gallery.url);
           }
           else if(xmlhttp.status == 400) {
                alert('There was an error 400');
           }
           else {
                alert('something else other than 200 was returned');
           }
        }
    }

    xmlhttp.open("GET", "source/gallery.html", true);
    xmlhttp.setRequestHeader('Content-type', 'text/html');
    xmlhttp.send();
}

function loadOverlay(){
    var xmlhttp = new XMLHttpRequest();
    var overlayhtml = document.getElementById('overlay');
    
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == XMLHttpRequest.DONE ) {
           if(xmlhttp.status == 200){
               overlayhtml.innerHTML = xmlhttp.responseText;
           }
           else if(xmlhttp.status == 400) {
                alert('There was an error 400');
           }
           else {
                alert('something else other than 200 was returned');
           }
        }
    }

    xmlhttp.open("GET", "source/overlay.html", true);
    xmlhttp.setRequestHeader('Content-type', 'text/html');
    xmlhttp.send();
}