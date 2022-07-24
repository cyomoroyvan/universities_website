let loginForm = document.getElementById('loginForm')
const spinner = document.getElementById('message');
spinner.style.display = "none";
loginForm.addEventListener('submit', e=> {
    e.preventDefault()
const spinner = document.getElementById('message');
spinner.style.display = "block";
    spinner.innerHTML =`
<img src="./assets/images/Spinner.gif" alt="loading..." width="40px" height="40px">` ;
    login()
})
const login = () => {

    let email = document.getElementById('email')
    let password = document.getElementById('password')

    let userData = {
        email: email.value,
        password: password.value
    }
    let fetchData = {
        method: 'POST',
        body: JSON.stringify(userData),
        headers: new Headers({
            'Content-Type': 'application/json; charset=UTF-8'
        })
    }
    
    fetch('https://universities-website-api.herokuapp.com/login', fetchData)

.then(response => response.json())
.then(data => {
    console.log(data)
if (data.error == 'Invalid email please try again') {
        const invalidEmail = document.getElementById('message')
        invalidEmail.innerText = data.error;
          }
else if (data.error == 'Invalid password please try again') {
    const invalidPassword = document.getElementById('message')
    invalidPassword.innerText = data.error;
      }

 sessionStorage.setItem("token",JSON.stringify(data.token))
//  let permission = sessionStorage.getItem("token")
 if(data.role == 'admin'){
 setTimeout(()=>{  location = "admin/index.html"},1000)
 }
 else if(data.role == 'user'){
    setTimeout(()=>{ location = "index.html"},1000)
//    location = "./blog.html"
 }
 
});
console.log("request sent")
}


