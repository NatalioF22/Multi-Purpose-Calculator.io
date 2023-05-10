count = 0;
const number = Math.floor(Math.random() * 10) + 1;
function Play(){
    
    let numberguessed = document.getElementById("number").value;
    let feedback = document.getElementById("feedback");
    
    if (numberguessed == number){
        alert("You guessed right, after " + count + " times");
        count = 0;

    } else{
       
        if (numberguessed<number){
            alert("Higher");
            
            count += 1;
    }
        else{
            alert("Lower");
            count += 1;
           }
        }
    console.log(count);
    console.log(number);

}

MaxNum = 20
MinNum = 1
Human_Count = 0
let num = Math.floor(Math.random() * (MaxNum-MinNum) + MinNum);
var value = ""
var numbergGessed =  document.getElementById("numberGuessed");

const higher = document.getElementById("Higher").addEventListener("click", function(){
    value = "Higher";
    Human_Count+=1
    MinNum = num+1;
    num = Math.floor(Math.random() * (MaxNum-MinNum) + MinNum);
    numbergGessed.innerHTML = num;
    });
const lower = document.getElementById("Lower").addEventListener("click", function(){
    value = "Lower";
    Human_Count+=1
    console.log(Human_Count);
    MaxNum = num-1;
    num = Math.floor(Math.random() * (MaxNum-MinNum) + MinNum);
   
    numbergGessed.innerHTML = num;
})
const correct = document.getElementById("Correct").addEventListener("click", function(){
    value = "Correct";
    alert("You guessed right, after " + Human_Count + " times");
})


function convertNumber() {
    const fromBase = document.getElementById("fromBase").value;
    const number = document.getElementById("inputNumber").value;
    const toBase = document.getElementById("toBase").value;
    
    if(toBase == 10){
    function toDecimal() {
      let decimalValue = 0;
      for (let i = number.length - 1; i >= 0; i--) {
        const digitValue = parseInt(number[i], fromBase);
        decimalValue += digitValue * Math.pow(fromBase, number.length - 1 - i);
      }
      return decimalValue;
    }
    let result = document.getElementById("outputNumber").value = toDecimal().toString(toBase);
    console.log(toDecimal());
  }
  if(toBase == 2 ){
    function toBinary() {
      let binaryValue = 0;
      for (let i = number.length - 1; i >= 0; i--) {
        const digitValue = parseInt(number[i], fromBase);
        binaryValue += digitValue * Math.pow(fromBase, number.length - 1 - i);
      }
      return binaryValue;
    }
    let result = document.getElementById("outputNumber").value = toBinary().toString(toBase);
    console.log(toBinary());
  }
  if (toBase == 8) {
    function toOctal() {
      let octalValue = 0;
      for (let i = number.length - 1; i >= 0; i--) {
        const digitValue = parseInt(number[i], fromBase);
        octalValue += digitValue * Math.pow(fromBase, number.length - 1 - i);
      }
    
      return octalValue;
    }
    let result = document.getElementById("outputNumber").value = toOctal().toString(toBase);
    console.log(toOctal());
  }
  if (toBase == 16) {
    function toHexadecimal() {
      let hexadecimalValue = 0;
      for (let i = number.length - 1; i >= 0; i--) {
        const digitValue = parseInt(number[i], fromBase);
        hexadecimalValue += digitValue * Math.pow(fromBase, number.length - 1 - i);
      }
      
      return hexadecimalValue;
    }
    let result = document.getElementById("outputNumber").value = toHexadecimal().toString(toBase);
    console.log(toHexadecimal());
  }
}


function toFahrenheit(){
  let temperatureInput = document.getElementById("temperature");
  const temperature = temperatureInput.value;
  result = (temperature * 9/5) + 32;
  temperatureInput.value = result;
}

function ToCelcius(){
  let temperatureInput = document.getElementById("temperature");
  const temperature = temperatureInput.value;
  result = ((temperature -32)*5)/9;
  temperatureInput.value = result;
}

function ConvertUnit() {
  const fromBase = parseFloat(document.getElementById("fromBase").value);
  const number = parseFloat(document.getElementById("inputNumber").value);
  const toBase = parseFloat(document.getElementById("toBase").value);

  // convert input value to meters
  let metersValue;
  switch (fromBase) {
    case 1: // millimeters
      metersValue = number / 1000;
      break;
    case 100: // centimeters
      metersValue = number / 100;
      break;
    case 1000: // kilometers
      metersValue = number * 1000;
      break;
    case 0.393701: // inches
      metersValue = number * 0.0254;
      break;
    case 0.0328084: // feet
      metersValue = number * 0.3048;
      break;
    case 0.000621371: // miles
      metersValue = number * 1609.344;
      break;
    case 0.000539957: // nautical miles
      metersValue = number * 1852;
      break;
    case 3.28084: // yards
      metersValue = number * 0.9144;
      break;
    default:
      // assume input is already in meters
      metersValue = number;
      break;
  }

  // convert meters value to output unit
  let outputValue;
  switch (toBase) {
    case 1: // millimeters
      outputValue = metersValue * 1000;
      break;
    case 100: // centimeters
      outputValue = metersValue * 100;
      break;
    case 1000: // kilometers
      outputValue = metersValue / 1000;
      break;
    case 0.393701: // inches
      outputValue = metersValue / 0.0254;
      break;
    case 0.0328084: // feet
      outputValue = metersValue / 0.3048;
      break;
    case 0.000621371: // miles
      outputValue = metersValue / 1609.344;
      break;
    case 0.000539957: // nautical miles
      outputValue = metersValue / 1852;
      break;
    case 3.28084: // yards
      outputValue = metersValue / 0.9144;
      break;
    default:
      // assume output is in meters
      outputValue = metersValue;
      break;
  }

  // update output field
  document.getElementById("outputNumber").value = outputValue.toFixed(6);
}


