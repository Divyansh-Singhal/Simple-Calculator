function clear1(){
    var exp =  document.getElementById("textview").value;  
document.getElementById("textview").value = exp.substring(0, 0); 
}
function insert(num)   
{  
 document.getElementById("textview").value =  document.getElementById("textview").value + num;  
}  
  
function equal()  
{  
var exp =  document.getElementById("textview").value;  
if(exp)  
{  
 document.getElementById("textview").value = eval(exp)  
}  
}  
  
function backspace()  
{  
var exp =  document.getElementById("textview").value;  
document.getElementById("textview").value = exp.substring(0, exp.length - 1); 
}
