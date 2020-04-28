function validate(){
  var fname = document.getElementById("first-name").value;
  var lname = document.getElementById("last-name").value;
  var phone = document.getElementById("phone").value;
  var email = document.getElementById("email").value;
  var address = document.getElementById("address").value;
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  
  var text;
  if((fname.length < 4) || (/\d/.test(fname))){
    text = "Please Enter valid Name";
    //error_message.innerHTML = text;
    alert(text);
    return false;
  }
  
  if((lname.length == 0) || (/\d/.test(lname))){
    text = "Please Enter valid  Last Name";
    //error_message.innerHTML = text;
    alert(text);
    return false;
  }
  
  if(isNaN(phone) || phone.length != 10){
    text = "Please Enter valid Phone Number";
    //error_message.innerHTML = text;
    alert(text);
    return false;
  }
  if (!(re.test(email)) || (email.length < 7)){
    text = "Please Enter valid Email";
    alert(text);
    //error_message.innerHTML = text;
    return false;
  }

  if(address.length < 10){
    text = "Please Enter Address(Atleast 10 characters)";
    //error_message.innerHTML = text;
    alert(text);
    return false;
  }
  alert("Form Submitted Successfully!");
  return true;
}
