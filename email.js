(function(){
    emailjs.init("pdCn9uVNLqdk6tfGj"); // Replace with your actual User ID
  })();
  
  function sendEmail(event) {
    event.preventDefault(); // Prevent the default form submission
  
    const params = {
        sendername: document.querySelector("#sendername").value,
        to: document.querySelector("#to").value,
        // subject: document.querySelector("#subject").value,
        message: document.querySelector("#message").value,
        // replyto: document.querySelector("#replyto").value,
    };
  
    const service_id = "service_mxjgwha"; // Replace with your actual Service ID
    const template_id = "template_ns0gjbm"; // Replace with your actual Template ID
  
    emailjs.send(service_id, template_id, params)
        .then((res) => {
            document.getElementById("sendername").value = "";
            document.getElementById("to").value = "";
            // document.getElementById("subject").value = "";
            document.getElementById("message").value = "";
            // document.getElementById("replyto").value = "";
            console.log(res);
            alert("Email sent successfully!");
        })
        .catch((error) => {
            console.error("Failed to send email:", error);
            alert("Failed to send email. Please try again later.");
        });
  }



  