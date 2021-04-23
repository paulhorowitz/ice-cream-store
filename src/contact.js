function renderContactPage() {
    const maindiv = document.getElementById("content");
    console.log(maindiv);
    while (maindiv.firstChild) {
        maindiv.removeChild(maindiv.firstChild);
    }

    const container = document.createElement("div");
    container.classList.add("container");

    const row = document.createElement("div");
    row.classList.add("row");

    const column = document.createElement("div")
    column.classList.add("col-xs-12", "col-sm-12", "col-md-12", "col-lg-12", "text-center");

    const fieldColumns = document.createElement("div");
    fieldColumns.classList.add("col-xs-12", "col-sm-12", "col-md-12", "col-lg-12")

    const heading = document.createElement("h2");
    heading.classList.add("form-title");
    heading.innerHTML="Get in Touch";

    const row2 = document.createElement("div");
    row2.classList.add("row");

    const contactForm = document.createElement("form");
    contactForm.id = "contact-form";
    contactForm.classList.add("form");
    contactForm.name="myForm";
    contactForm.action="#";
    contactForm.onsubmit="return validateForm()";
    contactForm.method = "POST";

    const formGroup = document.createElement("div");
    formGroup.classList.add("form-group");
    
    const nameLabel = document.createElement("label");
    nameLabel.classList.add("form-label");
    nameLabel.id = "nameLabel";

    const yourName = document.createElement("input");
    yourName.classList.add("form-control");
    yourName.id = "name";
    yourName.name = "name";
    yourName.placeholder = "Your Name";
    yourName.tabIndex = "1";

    const emailLabel = document.createElement("label");
    emailLabel.classList.add("form-label");
    emailLabel.id = "emailLabel";

    const yourEmail = document.createElement("input");
    yourEmail.classList.add("form-control");
    yourEmail.id = "email";
    yourEmail.name = "email";
    yourEmail.placeholder = "Your Email";
    yourEmail.tabIndex = "2";

    const subjectLabel = document.createElement("label");
    subjectLabel.classList.add("form-label");
    subjectLabel.id = "subjectLabel";

    const subject = document.createElement("input");
    subject.classList.add("form-control");
    subject.id = "subject";
    subject.name = "subject";
    subject.placeholder = "subject";
    subject.tabIndex = "3";

    const messageLabel = document.createElement("label");
    messageLabel.classList.add("form-label");
    messageLabel.id = "messageLabel";

    const message = document.createElement("textarea");
    message.classList.add("form-control");
    message.id = "message";
    message.name = "message";
    message.placeholder = "Your Message";
    message.rows = "6";
    message.cols = "60";
    message.tabIndex = "4";

    const submitDiv = document.createElement("div");
    submitDiv.classList.add("text-center", "margin-top-25")

    const submitButton = document.createElement("button");
    submitButton.type = "submit";
    submitButton.classList.add("btn", "btn-primary");
    submitButton.innerHTML = "Send Message";


    maindiv.appendChild(container);
    container.appendChild(row);
    row.appendChild(column);
    column.appendChild(heading);
    container.appendChild(row2);
    row2.appendChild(fieldColumns);
    fieldColumns.appendChild(contactForm);
    contactForm.appendChild(formGroup);
    formGroup.appendChild(nameLabel);
    contactForm.appendChild(formGroup);
    formGroup.appendChild(nameLabel);
    formGroup.appendChild(yourName);
    contactForm.appendChild(formGroup);
    formGroup.appendChild(emailLabel);
    formGroup.appendChild(yourEmail);
    contactForm.appendChild(formGroup);
    formGroup.appendChild(subjectLabel);
    formGroup.appendChild(subject);
    contactForm.appendChild(formGroup);
    formGroup.appendChild(messageLabel);
    formGroup.appendChild(message);
    contactForm.appendChild(submitDiv);
    submitDiv.appendChild(submitButton);
}

function validateForm() {
    var n = document.getElementById('name').value;
    var e = document.getElementById('email').value;
    var s = document.getElementById('subject').value;
    var m = document.getElementById('message').value;
    var onlyLetters =/^[a-zA-Z\s]*$/; 
    var onlyEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    
    if(n == "" || n == null){
        document.getElementById('nameLabel').innerHTML = ('Please enter your name');
        document.getElementById('name').style.borderColor = "red";
        return false;
    }
       
  
    if (!n.match(onlyLetters)) {
        document.getElementById('nameLabel').innerHTML = ('Please enter only letters');
        document.getElementById('name').style.borderColor = "red";
        return false;
    }
  
    if(e == "" || e == null ){
          document.getElementById('emailLabel').innerHTML = ('Please enter your email');
          document.getElementById('email').style.borderColor = "red";
          return false;
      }
  
    if (!e.match(onlyEmail)) {
        document.getElementById('emailLabel').innerHTML = ('Please enter a valid email address');
        document.getElementById('email').style.borderColor = "red";
        return false;
    }
  
    if(s == "" || s == null ){
          document.getElementById('subjectLabel').innerHTML = ('Please enter your subject');
          document.getElementById('subject').style.borderColor = "red";
          return false;
      }
  
    if (!s.match(onlyLetters)) {
        document.getElementById('subjectLabel').innerHTML = ('Please enter only letters');
        document.getElementById('subject').style.borderColor = "red";
        return false;
    }
  
    if(m == "" || m == null){
        document.getElementById('messageLabel').innerHTML = ('Please enter your message');
        document.getElementById('message').style.borderColor = "red";
        return false;
    }
  
    else{
          return true;
      }
      
}

export default renderContactPage;