let x = document.getElementById("userBoard");

    let y = `  <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>new article</title>
    
      <style>
          @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap');
          *{
             font-family: 'Roboto', sans-serif;
             
           }

           body{
            padding: 0;
            margin: 0;
           }
          .trafficsource{
              width: 100%;
              height: 100%;
              text-align: center;
              transition: 2s;
          }

          th{  
          color: white;
          padding: 10px; 
         background: #4c1864;
          }

          .cen{
              margin-left: 30%;
              width: 100%;
              margin-bottom: 5px;
          }
          .btn1{
              width: 51%;
              margin-left: 30%;
          }
          .long, .lat{
              border-radius:1px;
              width:25%;
              color:black;
              text-align: center;
          }

          .table1{
            background-color: rgb(235, 231, 231); 
            color: black;
            padding-bottom: 50px;
          }
      </style>
      
    
    
    
    </head>
    <body>
    
    
        <div class="trafficsource">

            <!--end of title-->
            
            <table class="table1">
                <tr>
                  <th> First Name</th> 
                  <th> Last Name</th> 
                  <th> Email</th>
                  <th> Role</th>
                </tr>
            
                    
                


                <tbody id="mytable">
            
                </tbody>
            
            </table>
        
           
        </div>
        
        
    </body>
    </html>  
   
    `
    

    x.innerHTML= `${y}`;
    

    
    

    async function buildTable(){
    
        const UsersOptions = {
            method: 'GET',
            headers: { 'auth-token': JSON.parse(sessionStorage.getItem('token'))},
         };
         
        let response = await fetch("https://universities-website-api.herokuapp.com/register/getAllUsers",UsersOptions)
        const allUsers = await response.json(); 
        const allRegisteredUsers = allUsers.Users
        console.log(allRegisteredUsers);


            
                for(let i=0;i<allRegisteredUsers.length;i++){
            
                
                    let arr1 = allRegisteredUsers[i]
                    let long1 = arr1.firstName;
                    let long2 = arr1.lastName;
                    let lat   = arr1.email;
                    let role   = arr1.role;
                
                    console.log(arr1)
                
                    
            
              if(1> 0) {
                
              
            
              
        

        let arr = [
        {longitude:`${long1}`,longitude2:`${long2}`, latitude:`${lat}`,role:`${role}`},
        
       
       ];
    
       let mytable = document.getElementById("mytable");
       for(let i of arr) {
        mytable.innerHTML += `
        <tr class="fetched">
         <td class="long">${i.longitude}</td>    
         <td class="long">${i.longitude2}</td>    
         <td class="lat">${i.latitude}</td>
         <td class="lat">${i.role}</td>
        </tr>
        
        `
       }
    
       }
    }
    
    
    } buildTable()
    

