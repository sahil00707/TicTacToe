var count_number=1;

function show_circle_square(button_number){
    var square=document.getElementById(`small_square_${button_number}`);
    var circle=document.getElementById(`small_circle_${button_number}`);
if(count_number%2){

square.style.display="none";
circle.style.display="block";
}
else{

   
    square.style.display="block";
    circle.style.display="none";
}
count_number++;
var btn=document.getElementById(`btn_${button_number}`);
btn.disabled="true";
btn.value=count_number%2;

show_winner(count_number);

if(count_number>=10){
   var draw=document.getElementById("Draw");
   draw.style.display="block";
   var btnn=document.getElementsByClassName("box");
btnn.disabled="true";
}
}

function show_winner(count_number){
var v1=document.getElementById(`btn_1`).value;
var v2=document.getElementById(`btn_2`).value;
var v3=document.getElementById(`btn_3`).value;
var v4=document.getElementById(`btn_4`).value;
var v5=document.getElementById(`btn_5`).value;
var v6=document.getElementById(`btn_6`).value;
var v7=document.getElementById(`btn_7`).value;
var v8=document.getElementById(`btn_8`).value;
var v9=document.getElementById(`btn_9`).value;
if((v1==v2&&v2==v3)||(v4==v5&&v5==v6)||(v7==v8&&v8==v9)||(v1==v4&&v4==v7)||(v2==v5&&v5==v8)||(v3==v6&&v6==v9)||(v1==v5&&v5==v9)||(v3==v5&&v5==v7)){
 if(count_number%2==0){
 var player_1_wins=document.getElementById("player_1_wins");
 player_1_wins.style.display="block";
//alert("1")
 document.getElementById("btn_1").disabled="true";
 document.getElementById("btn_2").disabled="true";
 document.getElementById("btn_3").disabled="true";
 document.getElementById("btn_4").disabled="true";
 document.getElementById("btn_5").disabled="true";
 document.getElementById("btn_6").disabled="true";
 document.getElementById("btn_7").disabled="true";
 document.getElementById("btn_8").disabled="true";
 document.getElementById("btn_9").disabled="true";

}
else{
     var player_2_wins=document.getElementById("player_2_wins");
     player_2_wins.style.display="block";
    //alert("2")
   
 document.getElementById("btn_1").disabled="true";
 document.getElementById("btn_2").disabled="true";
 document.getElementById("btn_3").disabled="true";
 document.getElementById("btn_4").disabled="true";
 document.getElementById("btn_5").disabled="true";
 document.getElementById("btn_6").disabled="true";
 document.getElementById("btn_7").disabled="true";
 document.getElementById("btn_8").disabled="true";
 document.getElementById("btn_9").disabled="true"; 
}
}
}