
// Creates the desired variables, calculates the interest and year, and validates the principal entered.
function compute() {
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate / 100;
    var year = new Date().getFullYear() + parseInt(years);
    // Validates the principal entered: must be greater than 0 and something must be entered.
    if(principal==""||principal<=0) {
    alert("Enter a positive number");
    document.getElementById("principal").focus();
    return false;
    }
    else {
        // If a valide principal is entered, the result is displayed:
    document.getElementById("result").innerHTML = "If you deposit \<mark\>$" + principal + "\</mark\>,\<br\>at an interest rate of \<mark\>" + rate + "%\</mark\>\<br\>You will receive an amount of \<mark\>$" + interest + "\</mark\>,\<br\>in the year \<mark\>" + year + "\</mark\>\<br\>"
    }
  
  
  }
  // This function displays the interest rate when you move the slider.
  function updateRate() {
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval + '%';
  }
    