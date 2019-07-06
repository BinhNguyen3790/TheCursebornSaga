$(function () {
  $(document).scroll(function () {
    var $nav = $(".navbar-fixed-top");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});

filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("column");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}


// Get the modal
var modal = document.getElementById('myModal');
// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('myImg');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}

// Get the modal
var modal2 = document.getElementById('myModal2');
// Get the image and insert it inside the modal - use its "alt" text as a caption
var img2 = document.getElementById('myImg2');
var modalImg2 = document.getElementById("img02");
var captionText2 = document.getElementById("caption2");
img2.onclick = function(){
  modal2.style.display = "block";
  modalImg2.src = this.src;
  captionText2.innerHTML = this.alt;
}
// Get the <span> element that closes the modal
var span2 = document.getElementsByClassName("close2")[0];
// When the user clicks on <span> (x), close the modal
span2.onclick = function() { 
  modal2.style.display = "none";
}

// Get the modal
var modal3 = document.getElementById('myModal3');
// Get the image and insert it inside the modal - use its "alt" text as a caption
var img3 = document.getElementById('myImg3');
var modalImg3 = document.getElementById("img03");
var captionText3 = document.getElementById("caption3");
img3.onclick = function(){
  modal3.style.display = "block";
  modalImg3.src = this.src;
  captionText3.innerHTML = this.alt;
}
// Get the <span> element that closes the modal
var span3 = document.getElementsByClassName("close3")[0];
// When the user clicks on <span> (x), close the modal
span3.onclick = function() { 
  modal3.style.display = "none";
}


// Get the modal
var modal4 = document.getElementById('myModal4');
// Get the image and insert it inside the modal - use its "alt" text as a caption
var img4 = document.getElementById('myImg4');
var modalImg4 = document.getElementById("img04");
var captionText4 = document.getElementById("caption4");
img4.onclick = function(){
  modal4.style.display = "block";
  modalImg4.src = this.src;
  captionText4.innerHTML = this.alt;
}
// Get the <span> element that closes the modal
var span4 = document.getElementsByClassName("close4")[0];
// When the user clicks on <span> (x), close the modal
span4.onclick = function() { 
  modal4.style.display = "none";
}

// Get the modal
var modal5 = document.getElementById('myModal5');
// Get the image and insert it inside the modal - use its "alt" text as a caption
var img5 = document.getElementById('myImg5');
var modalImg5 = document.getElementById("img05");
var captionText5 = document.getElementById("caption5");
img5.onclick = function(){
  modal5.style.display = "block";
  modalImg5.src = this.src;
  captionText5.innerHTML = this.alt;
}
// Get the <span> element that closes the modal
var span5 = document.getElementsByClassName("close5")[0];
// When the user clicks on <span> (x), close the modal
span5.onclick = function() { 
  modal5.style.display = "none";
}



// Get the modal
var modal6 = document.getElementById('myModal6');
// Get the image and insert it inside the modal - use its "alt" text as a caption
var img6 = document.getElementById('myImg6');
var modalImg6 = document.getElementById("img06");
var captionText6 = document.getElementById("caption6");
img6.onclick = function(){
  modal6.style.display = "block";
  modalImg6.src = this.src;
  captionText6.innerHTML = this.alt;
}
// Get the <span> element that closes the modal
var span6 = document.getElementsByClassName("close6")[0];
// When the user clicks on <span> (x), close the modal
span6.onclick = function() { 
  modal6.style.display = "none";
}

// Get the modal
var modal7 = document.getElementById('myModal7');
// Get the image and insert it inside the modal - use its "alt" text as a caption
var img7 = document.getElementById('myImg7');
var modalImg7 = document.getElementById("img07");
var captionText7 = document.getElementById("caption7");
img7.onclick = function(){
  modal7.style.display = "block";
  modalImg7.src = this.src;
  captionText7.innerHTML = this.alt;
}
// Get the <span> element that closes the modal
var span7 = document.getElementsByClassName("close7")[0];
// When the user clicks on <span> (x), close the modal
span7.onclick = function() { 
  modal7.style.display = "none";
}

// Get the modal
var modal8 = document.getElementById('myModal8');
// Get the image and insert it inside the modal - use its "alt" text as a caption
var img8 = document.getElementById('myImg8');
var modalImg8 = document.getElementById("img08");
var captionText8 = document.getElementById("caption8");
img8.onclick = function(){
  modal8.style.display = "block";
  modalImg8.src = this.src;
  captionText8.innerHTML = this.alt;
}
// Get the <span> element that closes the modal
var span8 = document.getElementsByClassName("close8")[0];
// When the user clicks on <span> (x), close the modal
span8.onclick = function() { 
  modal8.style.display = "none";
}

// Get the modal
var modal9 = document.getElementById('myModal9');
// Get the image and insert it inside the modal - use its "alt" text as a caption
var img9 = document.getElementById('myImg9');
var modalImg9 = document.getElementById("img09");
var captionText9 = document.getElementById("caption9");
img9.onclick = function(){
  modal9.style.display = "block";
  modalImg9.src = this.src;
  captionText9.innerHTML = this.alt;
}
// Get the <span> element that closes the modal
var span9 = document.getElementsByClassName("close9")[0];
// When the user clicks on <span> (x), close the modal
span9.onclick = function() { 
  modal9.style.display = "none";
}

// Get the modal
var modal10 = document.getElementById('myModal10');
// Get the image and insert it inside the modal - use its "alt" text as a caption
var img10 = document.getElementById('myImg10');
var modalImg10 = document.getElementById("img010");
var captionText10 = document.getElementById("caption10");
img10.onclick = function(){
  modal10.style.display = "block";
  modalImg10.src = this.src;
  captionText10.innerHTML = this.alt;
}
// Get the <span> element that closes the modal
var span10 = document.getElementsByClassName("close10")[0];
// When the user clicks on <span> (x), close the modal
span10.onclick = function() { 
  modal10.style.display = "none";
}

// Get the modal
var modal11 = document.getElementById('myModal11');
// Get the image and insert it inside the modal - use its "alt" text as a caption
var img11 = document.getElementById('myImg11');
var modalImg11 = document.getElementById("img11");
var captionText11 = document.getElementById("caption11");
img11.onclick = function(){
  modal11.style.display = "block";
  modalImg11.src = this.src;
  captionText11.innerHTML = this.alt;
}
// Get the <span> element that closes the modal
var span11 = document.getElementsByClassName("close11")[0];
// When the user clicks on <span> (x), close the modal
span11.onclick = function() { 
  modal11.style.display = "none";
}

// Get the modal
var modal12 = document.getElementById('myModal12');
// Get the image and insert it inside the modal - use its "alt" text as a caption
var img12 = document.getElementById('myImg12');
var modalImg12 = document.getElementById("img012");
var captionText12 = document.getElementById("caption12");
img12.onclick = function(){
  modal12.style.display = "block";
  modalImg12.src = this.src;
  captionText12.innerHTML = this.alt;
}
// Get the <span> element that closes the modal
var span12 = document.getElementsByClassName("close12")[0];
// When the user clicks on <span> (x), close the modal
span12.onclick = function() { 
  modal12.style.display = "none";
}

// Add active class to the current button (highlight it)
var header = document.getElementById("myDIV");
var btns = header.getElementsByClassName("nav-link");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
