function updateCaseNumber(isIncrease){
    const caseNumberField = document.getElementById('case-number-field');
    const caseNumberString = caseNumberField.value;
    const previousCaseNumber = parseInt(caseNumberString);

    let newCaseNumber;

    if(isIncrease === true){
        newCaseNumber = previousCaseNumber + 1;
    }
    else{
        // if(caseNumberField.value > 0){
        //     caseNumberField.value = previousCaseNumber - 1;
        // }
        newCaseNumber = previousCaseNumber - 1;
    }
    caseNumberField.value = newCaseNumber;
    return newCaseNumber;
}

function updateTotalCasePrice(newCaseNumber){
    const caseTotalPrice = document.getElementById('case-price-total');
    caseTotalPrice.innerText = newCaseNumber * 59;
}

document.getElementById('img-remove').addEventListener('click', function(){
    this.style.display = 'none'
})

document.getElementById('btn-case-plus').addEventListener('click', function(){
    const newCaseNumber = updateCaseNumber(true);
    updateTotalCasePrice(newCaseNumber);
    calculateSubTotal()
});

document.getElementById('btn-case-minus').addEventListener('click', function(){
    const newCaseNumber = updateCaseNumber(false);
    updateTotalCasePrice(newCaseNumber);
    calculateSubTotal()
});