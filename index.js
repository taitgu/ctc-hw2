$(document).ready(function(){ 
 //INSERT CODE HERE
 //QUESTION 1
function Dog(){};
Dog.prototype.bark = function () {return 'Woof';};
 
function ShibaInu(){
    Dog.call(this);
};
    
ShibaInu.prototype = new Dog();
ShibaInu.prototype.constructor = ShibaInu;
ShibaInu.prototype.bark = function(){return 'much wow very javascript';};

  
 //QUESTION 3
$('.secondbutton').click(function(){
    $( '.secondheading' ).text( "Siberian Huskies are the best!!!" );
    $( '.secondheading' ).css('color', '#40E0D0');
});
 //QUESTION 4
$(".button#task4").click(function(){
    $("#hipster").css("-webkit-filter", "grayscale(100%) blur(5px)");
});  
 //QUESTION 5
$(".button#task5").click(function(){
    $(".spincar").css('-webkit-animation-play-state', 'running');
    $(".wheel").css('-webkit-animation-name', 'spin');
    
});
 //QUESTION 6
moveNyan();
function moveNyan(){
    $(".nyancat").animate({"left": "+=30"});
    $(".rainbows").animate({"width": "+=30"},moveNyan);
}
});