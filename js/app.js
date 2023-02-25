function getPin(){
    const pin = generatePin();
    const pinString = pin + '';
    if(pinString.length === 4){
        return pin;
    }else{
        // console.log("pin not 3 digit found", pin);
        return getPin();
    }
}

function generatePin(){
    const random = Math.round(Math.random()*10000);
    return random;
}


document.getElementById('generate-pin').addEventListener('click', function(){
    const pin = getPin();
    //console.log(pin);

    // display pin 
    const displayPinField = document.getElementById('display-pin');
    displayPinField.value = pin;
});

document.getElementById('calculator').addEventListener('click', function(e){
    const number = e.target.innerText;
    const typedNumberField = document.getElementById('typed-numbers');
    const previousTypedNumber = typedNumberField.value;
    if(isNaN(number)){
        if(number === 'C'){
            typedNumberField.value = '';
        }else if(number === '<'){
            const digits = previousTypedNumber.split('');
            digits.pop();
            const remainingDigits = digits.join('');
            typedNumberField.value = remainingDigits;
        }
    }else{
        const newTypedNumber = previousTypedNumber + number;
        typedNumberField.value = newTypedNumber;
    }
    // const calculatorPin = document.getElementById('calculator-pin');
    // calculatorPin.value = e.target.innerText;
});


document.getElementById('verify-pin').addEventListener('click', function(){
    const displayPinField = document.getElementById('display-pin');
    const currentPin = displayPinField.value;

    const typedNumberField = document.getElementById('typed-numbers');
    const typedNumber = typedNumberField.value;

    const pinSuccessMessage = document.getElementById('pin-success');
    const pinFailureMessage = document.getElementById('pin-failure');

    if(typedNumber === currentPin && typedNumber !== ""){
        pinSuccessMessage.style.display = 'block';
        pinFailureMessage.style.display = 'none';
        displayPinField.value = '';
        typedNumberField.value = '';
    }else{
        pinFailureMessage.style.display = 'block';
        pinSuccessMessage.style.display = 'none';
        displayPinField.value = pin;
        typedNumberField.value = newTypedNumber;
    }

});