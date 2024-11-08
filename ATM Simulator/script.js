// Initalise the balance
let balance = 1000

//Get references to HTML elements
const balanceDisplay = document.getElementById('balance')
const amountinput = document.getElementById('amount')
const messageDisplay = document.getElementById('message')


//Event listeners for buttons
document.getElementById('check-balance').addEventListener('click', ()=>{
    showMessage(`Your current balance is $${balance}`)
});

document.getElementById('deposit').addEventListener('click',()=>{
    const depositAmount = parseFloat(amountinput.value);
    if (depositAmount > 0 ){
        balance += depositAmount;
        updateBalance();
        showMessage(`You have deposited $${depositAmount}. New balance is $${balance}`);
    } else{
        showMessage('PLease entter a valid  amount to deposi.')
    }
});


document.getElementById('withdraw').addEventListener('click',() => {
    const withdrawAmount = parseFloat(amountinput.value);
    if (withdrawAmount > 0 && withdrawAmount <= balance){
        balance -= withdrawAmount;
        updateBalance();
        showMessage(`You have withdrawn $${withdrawAmount}. New balance is $${balance}`);
} else if (withdrawAmount > balance) {
    showMessage('Insufficient funds');
} else {
    showMessage('Please enter a valid amount to withdraw');
}
})

//Function to update the displayed balance
function updateBalance(){
    balanceDisplay.textContent = balance;
}

//Function to show messages to the user
function showMessage(message){
    messageDisplay.textContent = message;
    setTimeout(() =>{
        messageDisplay.textContent = "";
    }, 3000); //CLear the message after 3 seconds
}

