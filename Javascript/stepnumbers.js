
function clearErrors(){
    for (var loopCounter= 0; loopCounter < document.forms["number"].elements.length; loopCounter++){
        if (document.forms["number"].elements[loopCounter].parentElement.className.indexOf("has-") !=-1){

            document.forms["number"].elements[loopCounter].parentElement.className= "form-group";
        }
    }

}

function resetForm(){
    clearErrors();
    document.forms["number"]["starting"].value = "";
    document.forms["number"]["ending"].value = "";
    document.forms["number"]["starting"].focus();
}
function validateItems() {
    clearErrors();
    var starting = document.forms["number"]["starting"].value;
    var ending = document.forms["number"]["ending"].value;
    var step = document.forms["number"]["step"].value;

    if (starting =="" || isNaN(starting)) {
        alert("Num1 must be filled in with a number.");
        return false;
    }
      if (starting <0 || isNaN(starting)) {
        alert("Num1 can not be less then 0!.");
        return false;
    }
   if (ending =="" || isNaN(ending)) {
       alert("Num2 must be filled in with a number.");
       return false;
   }
   if (step =="" || isNaN(step)) {
       alert("Num3 must be filled in with a number.");
       return false;
   }

}
function evenDisplay() {
    validateItems();
    var starting = document.getElementById("starting").value,
      ending = +document.getElementById("ending").value,
        step = document.getElementById("step").value,
        results = document.getElementById("results"),
        evens = [];
    for (i = starting;  i <=10; i++) {
        i % 2 || evens.push(i);
    }
   console.log(evens)
   
}
