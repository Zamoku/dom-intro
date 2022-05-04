// get a reference to the sms or call radio buttons

// get refences to all the settings fields

//get a reference to the add button

//get a reference to the 'Update settings' button

// create a variables that will keep track of all the settings

// create a variables that will keep track of all three totals.

//add an event listener for when the 'Update settings' button is pressed

//add an event listener for when the add button is pressed

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the call / sms total
// * add the appropriate value to the overall total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.

const billItemTypeWithSettings = document.querySelector('.billItemTypeWithSettings')
const callTotalSettings = document.querySelector('.callTotalSettings')
const smsTotalSettings = document.querySelector('.smsTotalSettings')
const totalSetting = document.querySelector(".totalSettings")

//Reference to the add button
const settingBillAddBtn = document.querySelector('.settingBillAddBtn')

//References to setting fields
 const callCostSetting = document.querySelector(".callCostSetting")
 const smsCostSetting = document.querySelector(".smsCostSetting")
 const warningLevelSetting = document.querySelector(".warningLevelSetting")
 const criticalLevelSetting = document.querySelector(".criticalLevelSetting")

//Reference to button
const updateSettings = document.querySelector(".updateSettings")


 var settingCallsTotal = 0;
 var settingSmsTotal = 0;
 var callCost = 0;
 var smsCost = 0;

 function updateSetting(){

    var settingBillItemCall = callCostSetting.value
    var settingBillItemSms = smsCostSetting.value
    var warningLevel = warningLevelSetting.value
    var criticalLevel = criticalLevelSetting.value

     if(settingBillItemCall !== null){
        settingBillItemCall 
     }
     if(settingBillItemSms !== null){
        settingBillItemCall
     }
     if(warningLevel !== null){
        warningLevel
     }
     if(criticalLevel !== null){
        criticalLevel
     } 

 }
 updateSettings.addEventListener('click', updateSetting);


function settingBillTotal(){
    // get the value checked in the radio button
    var checkedSettRadioBtn = document.querySelector("input[name='billItemTypeWithSettings']:checked");
    var settingBillItemType = checkedSettRadioBtn.value

    var settingBillItemCall = callCostSetting.value
    var settingBillItemSms = smsCostSetting.value
    var warningLevel = warningLevelSetting.value
    var criticalLevel = criticalLevelSetting.value


    //update the correct total
    if (settingBillItemType === "call"){
        settingCallsTotal += Number(settingBillItemCall)
    }
    else if (settingBillItemType === "sms"){
        settingSmsTotal += Number(settingBillItemSms);
    }
    
    //update the totals that is displayed on the screen.
    callTotalSettings.innerHTML = Number(settingCallsTotal).toFixed(2);
    smsTotalSettings.innerHTML = Number(settingSmsTotal).toFixed(2);
    var settingTotalCost = Number(settingCallsTotal) + Number(settingSmsTotal);
    totalSetting.innerHTML = Number(settingTotalCost).toFixed(2);

    if (Number(settingTotalCost) >= criticalLevel){
        //adding the danger class will make the text red
        totalSetting.classList.add("danger");
        
    }
 
    else if (Number(settingTotalCost) >= warningLevel){
        totalSetting.classList.add("warning");
        
    }
    if(Number(settingTotalCost) >= criticalLevel){
      settingBillAddBtn.disabled = true
   }
    
}
//An event listener for when the add button is pressed
settingBillAddBtn.addEventListener('click', settingBillTotal);
