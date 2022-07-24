let contactForm = document.getElementById("form")
let messageSuccess = document.getElementById("message");
 messageSuccess.style.display = "none";

contactForm.addEventListener('submit', e => {
    e.preventDefault();
    const messageSuccess = document.getElementById('message');
    messageSuccess.style.display = "block";
    messageSuccess.innerHTML =`
<img src="./assets/images/Spinner.gif" alt="loading..." width="40px" height="40px">` ;
 
storeMessage();
})

async function storeMessage() {
 
 let name = document.getElementById("name");
 let email = document.getElementById("email");
 let phoneNumber = document.getElementById("phoneNumber");
 let subject = document.getElementById("subject");
 let message = document.getElementById("userMessage");


setTimeout(function(){
   messageSuccess.innerHTML = 'Message sent successfully!' ;
  }, 4000);

  
 
 if(name == '' || email == "" || phoneNumber == "" || subject == ""|| message == ""){
    return;
 }
 
 else{
 
    const UserRequestOptions = {
       method: 'POST',
       headers: { 'Content-Type': 'application/json' },
       body: JSON.stringify({
    
          names: name.value,
          email: email.value,
          phoneNumber: phoneNumber.value,
          subject: subject.value,
          message: message.value
       })
    };
    
    fetch('https://universities-website-api.herokuapp.com/contact/sendMessage', UserRequestOptions)
     
       .then(response => response.json())
       .then(data => {console.log(data)})
       console.log("deal done")
    
 }
  

 }