console.log('Loaded!');

//change text of main element div
var element = document.getElementById('main_text');
element.innerHTML = "New value from IMAD console";
//move image
var img = document.getElementById("madi");
var marginLeft = 0;
function moveRight () {
    marginLeft = marginLeft  + 10;
    img.style.marginLeft = marginLeft + 'px';
}
img.onclick =  function() {
    var interval = setInterval(moveRight, 100);
};
