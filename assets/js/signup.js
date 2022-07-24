const signupForm = document.getElementById("signupForm");
const Successmessage = document.getElementById('messageSuccess');
Successmessage.style.display = "none";

signupForm.addEventListener('submit', e => {
    e.preventDefault();
    Successmessage.style.display = "block";
    Successmessage.innerHTML =`
<img src="./assets/images/Spinner.gif" alt="loading..." width="40px" height="40px">` ;
 
    signup();
})

async function signup(){
    let firstName = document.getElementById("firstName")
    let lastName = document.getElementById("lastName")
    let email = document.getElementById("email")
    let password = document.getElementById("password")
    let repeatPassword = document.getElementById("repeatPassword")

    let data = {
        firstName: firstName.value,
        lastName: lastName.value,
        email: email.value,
        password: password.value,
        repeatPassword: repeatPassword.value

    }

    let fetchData = {
      method: 'POST',
        body: JSON.stringify(data),
        headers: new Headers({
            'Content-Type': 'application/json; charset=UTF-8',
            // 'Authorization': `Bearer ${user.token}`
        })
    }
    fetch(`https://universities-website-api.herokuapp.com/register/createUser`, fetchData)
    .then((response)=>{
      return response.json()
    }).then((datas)=>{
        console.log(datas);
        if (datas.message == 'User already exists') {
        const exists = document.getElementById('messageSuccess')
        exists.innerText = datas.message;
          }
          else {
        const success = document.getElementById('messageSuccess')
        success.innerText = datas.success;

        setTimeout(function(){
        signupForm.reset();
        location.href = `login.html`
       }, 4000);
        
        }
    
    })
    .catch(()=>{

    })
}