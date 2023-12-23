function sendMail() {
    var params = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
    };
  
    const serviceID = "service_8q3mlh8";
    const templateID = "template_hrtjokd";
  
      emailjs.send(serviceID, templateID, params)
      .then(res=>{
          document.getElementById("name").value = "";
          document.getElementById("email").value = "";
          document.getElementById("message").value = "";
          console.log(res);
          alert("Thankyou for your cooperation cutie , see you soon ")
  
      })
      .catch(err=>console.log(err));
  
  }
  