







document.getElementById('calculateButton').addEventListener('click', function() {
    event.preventDefault();

let height = parseFloat(document.getElementById('height').value); // marks height is 1.69m tall,
let weight = parseFloat(document.getElementById('weight').value);  //marks weight is 78Kg,


let BMI = (weight / (height**2));
console.log(BMI)
let a = "Your BMI is : ";
let displaytext = a + BMI + " "; 
UW = displaytext + "UNDWER WEIGHT :(" ;
HW = displaytext + "HEALTHY :) " ;
OW = displaytext + "OVER WEIGHT :| " ;
OB = displaytext + "OBESE :o !!! " ; 
IV = 'INVALID DATA INPUT'
//document.getElementById('bmiValue').innerHTML = displaytext ;


if(BMI > 5 && BMI <=18.5)
document.getElementById("bmiValue").innerHTML = UW;
else if (BMI > 18.5 && BMI <=24.9)
document.getElementById("bmiValue").innerHTML = HW;
else if (BMI > 25.0 && BMI <= 29.9)
document.getElementById("bmiValue").innerHTML = OW;
else if (BMI > 30.0 )
document.getElementById("bmiValue").innerHTML = OB;
else
document.getElementById("bmiValue").innerHTML = IV;


})

