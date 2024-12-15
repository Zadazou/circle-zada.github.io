// document.getElementById("one").addEventListener("mouseover", mouseOver);
// document.getElementById("one").addEventListener("mouseout", mouseOut);

// function mouseOver() {
//   document.getElementById("f-1").style.color = "white";
// }

// function mouseOut() {
//   document.getElementById("f-1").style.color = "rgb(165, 56, 2)";
// }

document.getElementById("one").addEventListener("mouseenter", function(){
    document.getElementById("f-1").style.color = "white";

});

document.getElementById("one").addEventListener("mouseleave", function(){
    document.getElementById("f-1").style.color = "rgb(165, 56, 2)";
});

document.getElementById("two").addEventListener("mouseenter", function(){
    document.getElementById("f-2").style.color = "white";

});

document.getElementById("two").addEventListener("mouseleave", function(){
    document.getElementById("f-2").style.color = "rgb(165, 56, 2)";
});

document.getElementById("three").addEventListener("mouseenter", function(){
    document.getElementById("f-3").style.color = "white";

});

document.getElementById("three").addEventListener("mouseleave", function(){
    document.getElementById("f-3").style.color = "rgb(165, 56, 2)";
});

document.getElementById("four").addEventListener("mouseenter", function(){
    document.getElementById("f-4").style.color = "white";

});

document.getElementById("four").addEventListener("mouseleave", function(){
    document.getElementById("f-4").style.color = "rgb(165, 56, 2)";
});