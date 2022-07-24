const token = JSON.parse(sessionStorage.getItem('token'))

if (!token) {
    document.querySelector("body").innerHTML = `
<img src="./assets/images/loading.gif" alt="loading..." class="loaderIMG">
`
setTimeout(()=>{ location = "error-404.html"},1000)
 }