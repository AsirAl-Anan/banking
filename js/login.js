document.getElementById('submit-button').addEventListener('click', ()=>{
    //get user email
    
   const userEmail = document.getElementById('user-email');
   const emailvalue = userEmail.value;

   //get user password
   const userPass = document.getElementById('user-password');
   const passvalue = userPass.value;


   //check data
   
   if(emailvalue === "admin@gmail.com" && passvalue === '123456'){
    alert('login successfull');
    window.location.href = '../banking/banking.html'
   } else {
    alert('invalid email or password');
   }
})
