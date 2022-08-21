// document.getElementById('btn-iphone-plus').addEventListener('click', function(){
//     const phoneInputPlusField = document.getElementById('phone-number-field');
//     const phoneInputPlusFieldString = phoneInputPlusField.value;
//     const phoneInputPlus = parseInt(phoneInputPlusFieldString);
//     phoneInputPlusField.value = phoneInputPlus + 1;
// })

// document.getElementById('btn-iphone-minus').addEventListener('click', function(){
//     const phoneInputMinusField = document.getElementById('phone-number-field');
//     const phoneInputMinusFieldString = phoneInputMinusField.value;
//     const phoneInputMinus = parseInt(phoneInputMinusFieldString);
//     if(phoneInputMinusField.value > 0){
//         phoneInputMinusField.value = phoneInputMinus - 1;
//     }
// })





function updatePhoneNumber(isIncrease){
    const phoneNumberField = document.getElementById('phone-number-field');
    const phoneNumberString = phoneNumberField.value;
    const previousPhoneNumber = parseInt(phoneNumberString);

    let newPhoneNumber;

    if(isIncrease === true){
        newPhoneNumber = previousPhoneNumber + 1;
    }
    else{
        // if(PhoneNumberField.value > 0){
        //     PhoneNumberField.value = previousPhoneNumber - 1;
        // }
        newPhoneNumber = previousPhoneNumber - 1;
    }
    phoneNumberField.value = newPhoneNumber;
    return newPhoneNumber;
}

// function updateTotalPhonePrice(newPhoneNumber){
//     const caseTotalPrice = document.getElementById('case-price-total');
//     caseTotalPrice.innerText = newCaseNumber * 59;
    
// }

function updateTotalPhonePrice(newPhoneNumber){
    const phoneTotalPrice = newPhoneNumber * 1219;
    const phoneTotalElement = document.getElementById('phone-price-total');
    phoneTotalElement.innerText = phoneTotalPrice;
}

document.getElementById('btn-iphone-plus').addEventListener('click', function(){
    const newPhoneNumber = updatePhoneNumber(true);
    updateTotalPhonePrice(newPhoneNumber);
    calculateSubTotal()
});

document.getElementById('btn-iphone-minus').addEventListener('click', function(){
    const newPhoneNumber = updatePhoneNumber(false);
    updateTotalPhonePrice(newPhoneNumber);
    calculateSubTotal()
});