console.log("script is linked")
function nextEvens(){
    var start = document.forms["number"]["start"].value;
    var step =  document.forms["number"]["step"].value;
     if (start =="" || isNaN(start)){
         alert("Please enter a number for start");
         return false;
     } 
      if (start <=0 || isNaN(start)){
      alert("please enter a number greater then zero!");
      return false;
     }
      if (step =="" || isNaN(step)){
      alert("Please enter a number for step");
      return false;
     }
     if (step <=0){
     alert("Please Enter number greater then zero for next evens");
     return false;

    }
    var start = document.getElementById("start").value;
    var step = document.getElementById("step").value;
   /* var odds = [];
    var  oddsVal= start;
    while(odds.length < step){
    oddsVal % 2 !== 1 || odds.push(oddsVal);
    oddsVal++;
}
console.log(odds)*/
    var evens = [];
    var evensVal = (step*2)+start;
    for(i = start+1; i <=evensVal; i++){
        i % 2 || evens.push(i);
    }
console.log(evens)

}



