 var x1 = 2; var x2 = 2;  var x3 = 2;
 var y1 = 2; var y2 = 2;  var y3 = 2;
 var z1 = 2; var z2 = 2;  var z3 = 2;
var x = 0;
 
     
 
function start(){
    
var number =  Math.floor((Math.random() * 4));
        if(number == 1) {
             
            var elem = document.getElementById("myButton1");
    if(elem.value=="empty"){ elem.value = "O";
          document.getElementById('myButton1').className = 'formatForButtonO';
                    }
                       
                         
                         
 }else if(number == 3){
      
     var elem = document.getElementById("myButton3");
    if(elem.value=="empty"){ elem.value = "O";
         document.getElementById('myButton3').className = 'formatForButtonO';
                           }
 }else if(number != 1 || 3 ){
 var number =  6 +  Math.floor((Math.random() * 4));}
     if(number == 6 ) { --number}
     if(number == 8 ) { ++number} 
    if(number == 7){
         
        var elem = document.getElementById("myButton7");
    if (elem.value=="empty"){ elem.value = "O";
         document.getElementById('myButton7').className = 'formatForButtonO';
                           }
    
 }else if(number == 9){
     
     var elem = document.getElementById("myButton9");
    if (elem.value=="empty"){ elem.value = "O";
         document.getElementById('myButton9').className = 'formatForButtonO';}
 }else if(number == 5  ){
        
    
         
         var elem = document.getElementById("myButton5");
    if (elem.value=="empty"){ elem.value = "O";
         document.getElementById('myButton5').className = 'formatForButtonO';
                            }} 
   
    console.log(number);
    
  }

function make(){
         if( document.getElementById('myButton2').className == "" && document.getElementById('myButton2').className != "X"  ){
        document.getElementById('myButton2').className = 'formatForButtonO';
    var elem = document.getElementById("myButton2");
  elem.value = "O";              
    
       
   }else if( document.getElementById('myButton4').className == "" && document.getElementById('myButton4').className != "X"  ){
        document.getElementById('myButton4').className = 'formatForButtonO';
    var elem = document.getElementById("myButton4");
  elem.value = "O";
   }else if( document.getElementById('myButton6').className == "" && document.getElementById('myButton6').className != "X"  ){
        document.getElementById('myButton6').className = 'formatForButtonO';
    var elem = document.getElementById("myButton6");
  elem.value = "O";
   }else if( document.getElementById('myButton8').className == "" && document.getElementById('myButton8').className != "X"  ){
        document.getElementById('myButton8').className = 'formatForButtonO';
    var elem = document.getElementById("myButton8");
  elem.value = "O";
   }
    
}
 
 
 
 





function change1()  
{
    var elem = document.getElementById("myButton1");
    if (elem.value=="empty") elem.value = "X";
    else elem.value = "O";
     document.getElementById('myButton1').className = 'formatForButtonX';
     var x1 = 1;
     this.x1 = x1;
      
}
 
 
 
function change11(){
    document.getElementById('myButton1').className = 'formatForButtonO';
  document.getElementById("myButton1").innerHTML = "O";
}
 
// for button 1 


// for button 2
function change2()  
{
    var elem = document.getElementById("myButton2");
    if (elem.value=="empty") elem.value = "X";
    else elem.value = "O";
     document.getElementById('myButton2').className = 'formatForButtonX';
}
function change22(){
    document.getElementById('myButton2').className = 'formatForButtonO';
  document.getElementById("myButton2").innerHTML = "O";
}
// for button 2 end


// for button 3 start
function change3() 
{
    var elem = document.getElementById("myButton3");
    if (elem.value=="empty") elem.value = "X";
    else elem.value = "O";
     document.getElementById('myButton3').className = 'formatForButtonX';
     
}
function change33(){
    document.getElementById('myButton3').className = 'formatForButtonO';
  document.getElementById("myButton3").innerHTML = "O";
}

// for button 3 end


// for button 4 start
function change4() 
{
    var elem = document.getElementById("myButton4");
    if (elem.value=="empty") elem.value = "X";
    else elem.value = "O";
     document.getElementById('myButton4').className = 'formatForButtonX';
}
function change44(){
    document.getElementById('myButton4').className = 'formatForButtonO';
  document.getElementById("myButton4").innerHTML = "O";
}

// for button 4 end
// for button 5 start
function change5() 
{
    var elem = document.getElementById("myButton5");
    if (elem.value=="empty") elem.value = "X";
    else elem.value = "O";
     document.getElementById('myButton5').className = 'formatForButtonX';
}
function change55(){
    document.getElementById('myButton5').className = 'formatForButtonO';
  document.getElementById("myButton5").innerHTML = "O";
}

// for button 5 end
// for button 6 start
function change6() 
{
    var elem = document.getElementById("myButton6");
    if (elem.value=="empty") elem.value = "X";
    else elem.value = "O";
     document.getElementById('myButton6').className = 'formatForButtonX';
}
function change66(){
    document.getElementById('myButton6').className = 'formatForButtonO';
  document.getElementById("myButton6").innerHTML = "O";
}

// for button 6 end
// for button 7 start
function change7() 
{
    var elem = document.getElementById("myButton7");
    if (elem.value=="empty") elem.value = "X";
    else elem.value = "O";
     document.getElementById('myButton7').className = 'formatForButtonX';
}
function change77(){
    document.getElementById('myButton7').className = 'formatForButtonO';
  document.getElementById("myButton7").innerHTML = "O";
}

// for button 7 end
// for button 8 start
function change8() 
{
    var elem = document.getElementById("myButton8");
    if (elem.value=="empty") elem.value = "X";
    else elem.value = "O";
     document.getElementById('myButton8').className = 'formatForButtonX';
}
function change88(){
    document.getElementById('myButton8').className = 'formatForButtonO';
  document.getElementById("myButton8").innerHTML = "O";
}

// for button 8 end
// for button 9 start
function change9() 
{
    var elem = document.getElementById("myButton9");
    if (elem.value=="empty") elem.value = "X";
    else elem.value = "O";
     document.getElementById('myButton9').className = 'formatForButtonX';
}
function change99(){
    document.getElementById('myButton9').className = 'formatForButtonO';
  document.getElementById("myButton9").innerHTML = "O";
}

// for button 9 end
 
// Part where ifs begin!

 console.log(x1);