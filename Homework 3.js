
 /*
Name: Moises
Date created: 11-9-2025
Date last edited: 11-14-2025
Version: 3.6
Description: Homework 3 JS 
*/

const d = new Date();
let text = d.toLocaleDateString();
document.getElementById("Today").innerHTML = text;

let slider = document.getElementById("range");
let output = document.getElementById("range-slider");
output.innerHTML = slider.value;

slider.oninput = function() {
    output.innerHTML = this.value;
}

function validateDob() {
    dob = document.getElementById("dob");
    let date = new Date(dob.value);
    let maxDate = new Date().setFullYear(new Date().getFullYear() - 120);
    
    if (date > new Date()) {
        document.getElementById("dob-error").innerHTML = 
        "Date can't be in the future";
        dob.value = "";
        return false;
    }
    else if (date < new Date(maxDate)) {
        document.getElementById("dob-error").innerHTML =
        "Date can't be more than 120 years ago";
        dob.value = "";
        return false;
    }
    else {
        document.getElementById("dob-error").innerHTML = "";
        return true;
    }
}

function validateSSN(){
    const ssn = document.getElementById("SSN").value;
    const ssnR = /^[0-9]{3}-?[0-9]{2}-?[0-9]{4}$/;

    if(!ssnR.test(ssn)) {
        document.getElementById("SSN-error").innerHTML=
        "Please enter a valid SSN";
        return false;
    }
    else {
        document.getElementById("SSN-error").innerHTML="";
        return true;
    }
}

function validateAddress1() {
    const address1 = document.getElementById("Address1").value.trim();
    
    if (!address1) {
        document.getElementById("Address1-error").innerHTML = 
        "Address Line 1 can't be blank";
        return false;
    } else {
        document.getElementById("Address1-error").innerHTML = 
        "";
        return true;
    }
}

function validateAddress2() {
    const address2 = document.getElementById("Address2").value.trim();
    return true;
}

function validateZip(){
    const zipInput = document.getElementById("Zip");
    let zip = zipInput.value.replace(/[^\d-]/g, "");

    if(!zip) {
        document.getElementById("Zip-error").innerHTML =
        "Zip code can't be blank";
        return false;
    }
    if (zip.length > 5){
        zip = zip.slice(0,5) + "-" + zip.slice(5,9);
    } else{
        zip = zip.slice(0,5);
    }
    zipInput.value = zip;
    document.getElementById("Zip-error").innerHTML = "";
    return true;
}

function validateEmail() {
    var email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    
    if (!email) {
        document.getElementById("email-error").innerHTML =
        "email can't be blank";
        return false;
    }
    else if (email != email.test(email)) {
        document.getElementById("email-error").innerHTML =
        "Please enter a valid email address";
        return false;
    }
    else {
        document.getElementById("email-error").innerHTML = 
        "";
        return true;
    }
    }


function validatePhone() {
    const phone = document.getElementById("phone").value;
    const phonePattern = /^[0-9]{3}[0-9]{3}[0-9]{4}$/;
    
    if (!phone) {
        document.getElementById("phone-error").innerHTML = 
        "Phone can't be blank";
        return false;

    } else if (!phonePattern.test(phone)) {
        document.getElementById("phone-error").innerHTML = 
        "Phone must be in format: 123-456-7890";
        return false;
    } else {
        if (document.getElementById("phone-error")) {
            document.getElementById("phone-error").innerHTML = "";
        }
        return true;
    }
}

    function validateUid() {
        Uid = document.getElementById("Uid").value.toLowerCase();
        document.getElementById("Uid").value = Uid;

        if(Uid.length == 0){
            document.getElementById("Uid-error").innerHTML = 
            "User ID can't be blank";
            return false;
        }
        if(!isNaN(Uid.charAt(0))){
            document.getElementById("Uid-error").innerHTML = 
            "User ID can't start with a number";
            return false;
        }
        let regex = /^[a-zA-Z0-9_-]+$/;
        if (!regex.test(Uid)) {
            document.getElementById("Uid-error").innerHTML = 
            "User ID can only have letter, digits, underscores, and dashes";
            return false;
        }
        else if (Uid.length < 5) {
            document.getElementById("Uid-error").innerHTML =
            "User ID must at be atleast 5 characters";
            return false;
        }
        else if (Uid.length > 30) {
            document.getElementById("Uid-error").innerHTML =
            "User ID can't exceed 30 characters";
            return false;
        }
        else {
            document.getElementById("Uid-error").innerHTML = "";
            return true;
        }
    }
    
function validatePword() {
    const pword = document.getElementById("Pword").value;
    let errorMessage = [];
    
    if (!pword || pword.length === 0) {
        document.getElementById("Pword-error").innerHTML = "Password can't be blank";
        return false;
    }
    
    if (pword.length < 6) {
        errorMessage.push("At least 6 characters");
    }
    if (!pword.match(/[a-z]/)) {
        errorMessage.push("Enter at least one lowercase letter");
    }
    if (!pword.match(/[A-Z]/)) {
        errorMessage.push("Enter at least one uppercase letter");
    }
    if (!pword.match(/[0-9]/)) {
        errorMessage.push("Enter at least one number");
    }
    if (!pword.match(/[!@#$%&*\-_.+()]/)) {
        errorMessage.push("Enter at least one special character");
    }
    
    const Uid = document.getElementById("Uid").value;
    if (pword.includes(Uid)) {
        errorMessage.push("Password can't contain user ID");
    }
    
    if (errorMessage.length > 0) {
        document.getElementById("msg1").innerHTML = errorMessage[0] || "";
        document.getElementById("msg2").innerHTML = errorMessage[1] || "";
        document.getElementById("msg3").innerHTML = errorMessage[2] || "";
        document.getElementById("msg4").innerHTML = errorMessage[3] || "";
        document.getElementById("Pword-error").innerHTML = "Password does not meet requirements";
        return false;
    } else {
        document.getElementById("msg1").innerHTML = "";
        document.getElementById("msg2").innerHTML = "";
        document.getElementById("msg3").innerHTML = "";
        document.getElementById("msg4").innerHTML = "";
        document.getElementById("Pword-error").innerHTML = "";
        return true;
    }
}

function validateRpword() {
    pword1 = document.getElementById("Pword").value;
    pword2 = document.getElementById("Rpword").value;

    if (pword1 !== pword2) {
        document.getElementById("Rpword-error").innerHTML =
        "Passwords don't match";
        return false;
    }
    else {
        document.getElementById("Rpword-error").innerHTML =
        "Passwords match";
        return true;
    }
}

function reviewInput() {
    var formcontent = document.getElementById("signup");
    var formoutput = "<table class='output'><th colspan='3'>Review Your Information:</th>";
    for (let i = 0; i < formcontent.elements.length; i ++) {
        if (formcontent.elements[i].value !== "") {
            switch (formcontent.elements[i].type) {
                case "checkbox":
                    if (formcontent.elements[i].checked) {
                        formoutput += "<tr><td align='right'>" + formcontent.elements[i].name + "</td><td>&#x2713;</td></tr>";
                    }
                    break;
                case "radio":
                    if (formcontent.elements[i].checked) {
                        formoutput += "<tr><td align='right'>" + formcontent.elements[i].name + "</td><td>" + formcontent.elements[i].value + "</td></tr>";
                    }
                    break;
                default:
                    formoutput += "<tr><td align='right'>" + formcontent.elements[i].name + "</td><td>" + formcontent.elements[i].value + "</td></tr>";
            }
        }
    }
    formoutput += "</table>";
    document.getElementById("showInput").innerHTML = formoutput;
}

function removeReview() {
    document.getElementById("showInput").innerHTML = "";
}

function showAlert() {
    var alertbox = document.getElementById("alert-box");
    var closeAlert = document.getElementById("close-alert");

    alertbox.style.display = "block";
    closeAlert.onclick = function() {
        alertbox.style.display = "none";
    };
}

function validateEverything() {
    let valid = true;
    
    if (!validateFname()) {
        valid = false;
    }
    if (!validateMname()) {
        valid = false;
    }
    if (!validateLname()) {
        valid = false;
    }
    if (!validateDob()) {
        valid = false;
    }
    if (!validateSSN()) {
        valid = false;
    }
    if (!validateAddress1()) {
        valid = false;
    }
    if (!validateCity()) {
        valid = false;
    }
    if (!validateZip()) {
        valid = false;
    }
    if (!validateEmail()) {
        valid = false;
    }
    if (!validatePhone()) {
        valid = false;
    }
    if (!validateUid()) {
        valid = false;
    }
    if (!validatePword()) {
        valid = false;
    }
    if (!validateRpword()) {
        valid = false;
    }
    if (valid) {
        document.getElementById("submit").disabled = false;
    } else {
        showAlert();
    }
}

function validateCity() {
    city = document.getElementById("City").value.trim();

    if (!city) {
        document.getElementById("City-error").innerHTML = 
        "City can't be blank";
        return false;
    } else {
        document.getElementById("City-error").innerHTML = "";
        return true;
    }
}

function validateFname() {
    fname = document.getElementById("firstname").value.trim();
    var namePattern = /^[a-zA-Z'-]+$/;
    if (fname == "") {
        document.getElementById("fname-error").innerHTML = 
        "First name can't be empty";
        return false;
    } else if (fname != "") {
        if (!fname.match(namePattern)) {
        document.getElementById("fname-error").innerHTML =
        "Letters, apostrophes, and dashes only.";
        return false;
        } else if (fname.length < 2) {
            document.getElementById("fname-error").innerHTML =
            "First name must be at least 2 characters.";
            return false;
        } else if (fname.length > 30) {
            document.getElementById("fname-error").innerHTML =
            "First name can't exceed 30 characters.";
            return false;
        } else {
            document.getElementById("fname-error").innerHTML = 
            "";
            return true;
        }
        }
    }

    function validateMname() {
        mname = document.getElementById("Mname").value;
        var namePattern = /^[a-zA-Z'-]+$/;

        mname = mname.toUpperCase();
        document.getElementById("Mname").value = mname;

        if (!mname.match(namePattern)) {
            document.getElementById("Mname-error").innerHTML =
            "Middle name must be a single uppercase letter.";
            return false;
        } else {
            document.getElementById("Mname-error").innerHTML =
            "";
            return true;

        }
    }

    function validateLname() {
        lname = document.getElementById("Lname").value.trim();
        var namePattern = /^[a-zA-Z'-]+$/;
        if (lname == "") {
            document.getElementById("Lname-error").innerHTML = 
            "Last name can't be empty";
            return false;
        } else if (lname != "") { 
            if (!lname.match(namePattern)) {
            document.getElementById("Lname-error").innerHTML =
            "Letters, apostrophes, and dashes only.";
            return false;
        } else if (Lname.length < 2) {
            document.getElementById("Lname-error").innerHTML =
            "Last name must be at least 2 characters.";
            return false;
        } else if (Lname.length > 30) { 
            document.getElementById("Lname-error").innerHTML =
            "Last name can't exceed 30 characters.";
            return false;
        } else {
            document.getElementById("Lname-error").innerHTML = 
            "";
            return true;
        }
    }
    }