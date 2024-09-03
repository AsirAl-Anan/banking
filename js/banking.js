document.getElementById('deposit-button').addEventListener('click',()=>{
    //get deposit input
    let depositAmount = parseFloat(document.getElementById('deposit-input').value)

    //get previous deposits
    let previousDepositText  = document.getElementById('deposit-total').innerHTML
    let previousDepositAmount = parseFloat(previousDepositText)

    //calculate new deposite
    let newDepositTotal = previousDepositAmount + depositAmount
    document.getElementById('deposit-total').innerHTML = newDepositTotal
  
    //clear input
     document.getElementById('deposit-input').value = ""

    //withdraw
     

     //get balance
     let balanceText = document.getElementById('balance').innerText
     let balance = parseFloat(balanceText)
     
     
  
     let newBalance = balance + newDepositTotal
     document.getElementById('balance').innerText = newBalance
    


})
document.getElementById('withdraw-button').addEventListener('click', ()=>{
    //get withdraw input
    let withdrawAmount = parseFloat(document.getElementById('withdraw-input').value)
   //calculate balance
    let previousWithdrawText = document.getElementById('withdraw-total').innerHTML
    let previousWithdrawAmount = parseFloat(previousWithdrawText)
    let newWithdrawAmount = previousWithdrawAmount + withdrawAmount
    document.getElementById('withdraw-total').innerHTML = newWithdrawAmount

    //update balance
    let balanceText = document.getElementById('balance').innerText
    let balance = parseFloat(balanceText)
    
    
 
    let newBalance = balance - newWithdrawAmount
    document.getElementById('balance').innerText = newBalance
   
    document.getElementById('withdraw-input').value =''
})