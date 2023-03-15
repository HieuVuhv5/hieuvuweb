/* send to email using simple smtp - using tempory gmail to send */


function sendEmail(content) {
    Email.send({
      Host: "smtp.elasticemail.com",
      Username: "helenajscriptmail@gmail.com",
      Password: "A66E6D04C20EEE75BAED3612748C51BDE41E",
      To: 'thayandaytoan@gmail.com',
      From: "helenajscriptmail@gmail.com",
      Subject: "Sending Email using javascript",
      Body: "Message send from final project with content: " + content,
    })
      .then(function (message) {
        alert("Thankss!! Your Feedback was sent successfully");
      });
  }


let form = document.querySelector("form");
form.addEventListener("submit", event => {
    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;   
    let feedback = document.getElementById("feedback").value;

   
        let username_text = "From Name: " + username;
        let email_text =" From Email: " + email;
        let feedback_text =" Content is : " + feedback;

        let content_sent = "Feedback : " + username_text + email_text + feedback_text;
        /* send to email */

        sendEmail(content_sent);
        console.log("======= Form Submition=======");
        console.log(username_text);
        console.log(email_text);
        console.log(content_sent);
     
        
    
  event.preventDefault();
});
