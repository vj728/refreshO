var a = Math.floor(Math.random() * 6);
a = a + 1;



var photo =  "./images/dice"+a+".png";                                  /*./images/dice6.png*/
var first = document.querySelector('.img1');
first.setAttribute('src',photo);


/*this is the second part */

var b = Math.floor(Math.random()*6)+1;

var go = "./images/dice"+b+".png";
var photo2 = document.querySelector('.img2');

photo2.setAttribute('src',go);


/*part 3*/
var awin="player first winner";
var bwin="player Second winner";
if (a > b){
    document.querySelector('h2').innerHTML=awin;
}


else if (a < b){
    document.querySelector('h2').innerHTML=bwin;
}
else{
    document.querySelector('h2').innerHTML="Draw match";
}