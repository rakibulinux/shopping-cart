// function getBtnInputNumber(inputId){
//     const numberInputField = document.getElementById(inputId);
//     const numberInputFieldString = numberInputField.value;
//     const numberInput = parseInt(numberInputFieldString);

//     numberInputField.value = numberInput + 1;


//         // numberInputField.value = newInputField;
//     }

function getTextEleemntValueById(elementId){
    const phoneTotalElement = document.getElementById(elementId);
    const currentTotalString = phoneTotalElement.innerText;
    const currentPhoneTotal = parseInt(currentTotalString);
    console.log(currentPhoneTotal);
    return currentPhoneTotal;
}

function setTextEleemntValueById(elementId, value){
    const subTotalPrice = document.getElementById(elementId);
    const totalPrice = document.getElementById(elementId);
    const taxAmountElement = document.getElementById(elementId);
    subTotalPrice.innerText = value;
    totalPrice.innerText = value;
    taxAmountElement.innerText = value
}

function calculateSubTotal(){
    const currentPhoneTotal = getTextEleemntValueById('phone-price-total');
    const currentCaseTotal = getTextEleemntValueById('case-price-total');
    const currentSubTotal = currentPhoneTotal + currentCaseTotal;
    setTextEleemntValueById('sub-total-price', currentSubTotal);
    
    
    // subTotalPrice.innerText = currentSubTotal;
    // totalPrice.innerText = currentSubTotal;
    const taxAmountString = (currentSubTotal * 0.1).toFixed(2);
    const taxAmount = parseFloat(taxAmountString);
    setTextEleemntValueById('tax-amount', taxAmount);
    const finalAmount = currentSubTotal + taxAmount;
    setTextEleemntValueById('total-price', finalAmount)
}