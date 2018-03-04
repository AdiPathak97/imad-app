console.log('Loaded!');

//change text of main element div
var element = document.getElementById('main_text');
element.innerHTML = "New value from IMAD console";
//move image
var img = document.getElementById("madi");
img.onclick =  function() {
   img.style.marginLeft = '100px' ; 
};
