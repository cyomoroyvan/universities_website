
    let a = document.getElementById("board");

    let b = `
    
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>new article</title>
    
      <style>
        //   @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap');
        //   @import url('https://fonts.googleapis.com/css2?family=Francois+One&family=Lato:wght@300&family=Montserrat&family=Mukta&family=Roboto:wght@100&family=Rubik:wght@400;500&display=swap');
          *{
             font-family: 'Roboto', sans-serif;
             
             
           }
          .articlebox{
              
              width: 100%;
              height: 100%;
              text-align: justify;
          }

          .messages{
              margin-left:10px;
              margin-top: 20px;
              padding-top: 30px;
              width: 100%;
              height: auto;
              color: white;
              font-family: rubik;
              /* border: 1px solid black; */
              background-color: #4c1864;
              box-shadow: 1px 1px 5px #1D53AE;
              font-size: 14px;
          }

          .senderAddress{
              width: 90%;
              margin: auto;
              height: 60px;
              font-size:10px;
          }

          .senderName, .senderEmail, .sendingTime, .senderTitles{
              position: relative;
              line-height: 0;
              font-size:20px;
              
          }

          .messageBody{
            width: 90%;
            margin: auto;
            height: auto;
          }

          .messageBody2{
            font-size:20px;
          }

          .cen{
              margin-left: 30%;
              width: 50%;
              margin-bottom: 5px;
          }

          .btn1{
              width: 51%;
              margin-left: 30%;
          }
      </style>
    
    
    </head>
    <body>
        <div class="articlebox">
            <div id ="result1"></div>
          </div>

        </div>

        </div>
        
    </body>
    </html>
  
    `    
a.innerHTML= `${b}`;
    
        async function art(){

            const MessageOptions = {
                method: 'GET',
                headers: { 'auth-token': JSON.parse(sessionStorage.getItem('token'))},
             };
             
            let response = await fetch("https://universities-website-api.herokuapp.com/contact/getAllMessages",MessageOptions)
            const allMessage = await response.json(); 
            const finalMessage = allMessage.messages;
            console.log(finalMessage);


                for(let i=0; i<finalMessage.length; i++){
                     
                    console.log(finalMessage[i])
                
                     displayer = document.getElementById("result1");
                     arr = finalMessage[i]
                     senderName = arr.names;
                     senderEmail= arr.email;
                     message = arr.message;
                     
              if(1 > 0) {


        displayer.innerHTML += `
        <div class="messages"><br/>
        <div class="senderAddress">
            <p class="senderName"><span class="senderTitles">Name:   </span>${senderName}</p><br/><br/>
            <p class="senderEmail"><span class="senderTitles">Email: </span>${senderEmail}</p><br/><br/>

        </div>
        <div class="messageBody">
        <br/><br/><p class="messageBody2">Message: ${message}</p>
          <br>
      </div>

        `
        
       }
       
    }

} art();
  