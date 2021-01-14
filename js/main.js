function validate() {
    var firstname = document.getElementById("firstname").value;
    var lastname = document.getElementById("lastname").value;
    var email = document.getElementById("mail").value;
    var company = document.getElementById("company").value;
    var phone = document.getElementById("phone").value;
    var message = document.getElementById("msg").value;
    var errorText = document.getElementById("error-id");
    var errorNote;

    errorText.style.padding = '20px';
    if (firstname.length === 0) {
        errorNote = "Please enter your First name." ;
        errorText.innerHTML = errorNote;
        return false;
    }

    if (lastname.length === 0) {
        errorNote = "Please enter your last name." ;
        errorText.innerHTML = errorNote;
        return false;
    }

    if (email.indexOf('@') == -1 || email.length < 7) {
        errorNote = "Please enter a valid email address." ;
        errorText.innerHTML = errorNote;
        return false;
    }

    if (company.length === 0) {
        errorNote = "Please state your company name." ;
        errorText.innerHTML = errorNote;
        return false;
    }

    if (isNaN(phone) || phone.length < 11) {
        errorNote = "Please enter a valid phone number." ;
        errorText.innerHTML = errorNote;
        return false;
    }

    if (message.length === 0) {
        errorNote = "Please enter your message/feedback." ;
        errorText.innerHTML = errorNote;
        return false;
    }

    

    return true;
}