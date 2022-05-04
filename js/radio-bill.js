// get a reference to the sms or call radio buttons

//get a reference to the add button

//create a variable that will keep track of the total bill

//add an event listener for when the add button is pressed

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen

const billItemTypeRadio = document.querySelector('.billItemTypeRadio')
const callTotalTwoElem = document.querySelector('.callTotalTwo')
const smsTotalTwoElem = document.querySelector('.smsTotalTwo')
const totalTwo = document.querySelector('.totalTwo')
const radioBillAddBtn = document.querySelector('.radioBillAddBtn')


 var callsTotal2 = 0;
 var smsTotal2 = 0;


function radioBillTotal(){
    //get the value checked in the radio button
    var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
    var billItemType = checkedRadioBtn.value
    //update the correct total
    if (billItemType === "call"){
        callsTotal2 += 2.75
    }
    else if (billItemType === "sms"){
        smsTotal2 += 0.75;
    }
    
    //update the totals that is displayed on the screen.
    callTotalTwoElem.innerHTML = callsTotal2.toFixed(2);
    smsTotalTwoElem.innerHTML = smsTotal2.toFixed(2);
    var totalCost2 = callsTotal2 + smsTotal2;
    totalTwo.innerHTML = totalCost2.toFixed(2);

    if (totalCost2 >= 50){
        //adding the danger class will make the text red
        totalTwo.classList.add("danger");
    }
    //adding the warning class will make the text orange
    else if (totalCost2 >= 30){
        totalTwo.classList.add("warning");
    }

    
}

radioBillAddBtn.addEventListener('click', radioBillTotal);

