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

const settingsBillInstance = BillWithSettings()

 function updateSetting(){

    settingsBillInstance.setCallCost(Number(callCostSetting.value))
    settingsBillInstance.setSmsCost(Number(smsCostSetting.value)) 
    settingsBillInstance.setWarningLevel(warningLevelSetting.value)
    settingsBillInstance.setCriticalLevel(criticalLevelSetting.value) 

    addClassName()
 }


function settingBillTotal(){
    // get the value checked in the radio button
    var checkedSettRadioBtn = document.querySelector("input[name='billItemTypeWithSettings']:checked");
    var settingBillItemType = checkedSettRadioBtn.value


    //update the correct total
    if (settingBillItemType === "call"){
         settingsBillInstance.makeCall()
        
    }
    else if (settingBillItemType === "sms"){
        settingsBillInstance.sendSms()
        
    }
    
    //update the totals that is displayed on the screen.
    callTotalSettings.innerHTML = (settingsBillInstance.getTotalCallCost()).toFixed(2);
    smsTotalSettings.innerHTML = (settingsBillInstance.getTotalSmsCost()).toFixed(2);
    totalSetting.innerHTML = (settingsBillInstance.getTotalCost()).toFixed(2);

    addClassName()
    
}

function addClassName(){

    totalSetting.classList.remove("danger");
    totalSetting.classList.remove("warning");
    

    totalSetting.classList.add(settingsBillInstance.totalClassName())
   
}


//An event listener for when the add button is pressed
settingBillAddBtn.addEventListener('click', settingBillTotal);
updateSettings.addEventListener('click', updateSetting);
