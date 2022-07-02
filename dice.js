var outcome1 = Math.floor(Math.random() *6) +1;
var outcomeImagesrc1 = "images/" + "dice" + outcome1 + ".png"; 
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", outcomeImagesrc1);



var outcome2 =Math.floor(Math.random() *6)  +1;
var outcomeImagesrc2 = "images/" + "dice" + outcome2 + ".png";
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", outcomeImagesrc2);

if(outcome1 > outcome2){
    document.querySelector("h1").innerHTML=" 🚩 Player 1 wins!";
}
else if(outcome1 < outcome2){
    document.querySelector("h1").innerHTML="Player 2 wins! 🚩";
}

else{
    document.querySelector("h1").innerHTML="Draw!";
}