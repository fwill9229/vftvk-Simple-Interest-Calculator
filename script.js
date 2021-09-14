function compute()
{
    var result = document.getElementById("result");

    var principal = document.getElementById("principal");
    var p1 = document.getElementById("p1");
    var p1Val = document.getElementById("p1Val");

    var myRange = document.getElementById("myRange");
    var p2 = document.getElementById("p2");
    var p2Val = document.getElementById("p2Val");

    var total = 0;
    var p3 = document.getElementById("p3");
    var p3Val = document.getElementById("p3Val");

    var finalYear = 0
    var years = document.getElementById("years");
    var p4 = document.getElementById("p4");
    var p4Val = document.getElementById("p4Val");

    result.hidden = false;
    /*Calculando ya con interes*/
    total = (myRange.value / 100)*principal.value*years.value;
    var today = new Date();
    var thisYear = today.getFullYear()
    finalYear = parseInt(thisYear)+parseInt(years.value);
    /*Vaciando de los controles los mark*/
    p1.innerHTML = "If you deposit ";
    p1Val.innerHTML = principal.value;
    p2.innerHTML = "at an Interest rate of ";
    p2Val.innerHTML = myRange.value;
    p3.innerHTML = "You will receive an amount of ";
    p3Val.innerHTML = total;
    p4.innerHTML = "in the year ";
    p4Val.innerHTML = finalYear;
}

function showIntRate(){
  var slider = document.getElementById("myRange");
  var output = document.getElementById("slider");
  output.innerHTML = slider.value;
}
