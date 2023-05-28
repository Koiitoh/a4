var valid = true

function checkFirstName() {
    var validFirstname = false;
    var firstname = document.getElementById("firstname").value;
    var regex = /^[a-zA-Z\s]+$/;
    var warningMessage = " ";
    if (firstname === "null" || firstname === "") {
        document.getElementById("errorMessages").innerHTML += "<p>A firstname is required</p>";
        valid = false
    } else if (regex.test(firstname) === false) {
        document.getElementById("errorMessages").innerHTML += "<p>The firstname has to be alphabetical</p>";
        valid = false
    } else if (firstname.length > 20) {
        document.getElementById("errorMessages").innerHTML += "<p>The firstname cannot be greater than 20 characters</p>";
        valid = false
    } else {
        validFirstname = true;
    }

    return (validFirstname);
}

function checkLastName() {
    var validLastname = false;
    var lastname = document.getElementById("lastname").value;
    var regex = /^[a-zA-Z\s]+$/;
    if (lastname === "null" || lastname === "") {
        document.getElementById("errorMessages").innerHTML += "<p>A lastname is required</p>";
        valid = false
    } else if (lastname.length > 50) {
        document.getElementById("errorMessages").innerHTML += "<p>The lastname cannot be greater than 50 characters</p>";
        valid = false
    } else if (regex.test(lastname) === false) {
        document.getElementById("errorMessages").innerHTML += "<p>The lastname has to be alphabetical</p>";
        valid = false

    }
    validLastname = true;
    return (validLastname)
}

function checkEmail() {
    var validemail = false;
    var email = document.getElementById("email").value;

    if (email === "null" || email === "") {
        document.getElementById("errorMessages").innerHTML += "<p>An email is required</p>";
        valid = false
    } else {
        var atpos = email.indexOf("@");
        var dotpos = email.lastIndexOf(".");
        if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= email.length) {
            document.getElementById("errorMessages").innerHTML += "<p>Invalid email</p>";
            valid = false
        }
    }
    validemail = true
    return (validemail)
}

function checkPhone() {
    var validphone = false;
    var phone = document.getElementById("phone").value;
    if (phone === null || phone === "") {
        document.getElementById("errorMessages").innerHTML += "<p>A phone number is required</p>";
        valid = false
    } else if (isNaN(phone)) {
        document.getElementById("errorMessages").innerHTML += "<p>The phone number can only have numerical values</p>";
        valid = false
    } else if (phone.length > 15) {
        document.getElementById("errorMessages").innerHTML += "<p>The phone number cannot be more than 15 characters</p>";
        valid = false
    }
    validphone = true;
    return (validphone)

}

function checkUsername() {
    var validusername = false;
    var username = document.getElementById("username").value;
    if (username === null || username === "") {
        document.getElementById("errorMessages").innerHTML += "<p>A username is required</p>";
        valid = false
    } else if (username.length > 12) {
        document.getElementById("errorMessages").innerHTML += "<p>The username cannot be more than 12 characters</p>";
        valid = false
    }
    validusername = true;
    return (validusername)
}

function checkPassword() {
    var validpassword = false;
    var password = document.getElementById("password").value;
    if (password === null || password === "") {
        document.getElementById("errorMessages").innerHTML += "<p>A password is required</p>";
        valid = false
    } else if (password.search(/[a-z]/) < 0) {
        document.getElementById("errorMessages").innerHTML += "<p>The password needs one lower case letter, one upper case letter, one number, and one special character</p>";
        valid = false
    } else if (password.search(/[A-Z]/) < 0) {
        document.getElementById("errorMessages").innerHTML += "<p>The password needs one lower case letter, one upper case letter, one number, and one special character</p>";
        valid = false
    } else if (password.search(/[0-9]/) < 0) {
        document.getElementById("errorMessages").innerHTML += "<p>The password needs one lower case letter, one upper case letter, one number, and one special character</p>";
        valid = false
    } else if (password.search(/[\!\@\#\$\%\^\&\*\)\(\+\=\.\<\>\{\}\[\]\:\;\'\"\|\~\`\_\-]/) < 0) {
        document.getElementById("errorMessages").innerHTML += "<p>The password needs one lower case letter, one upper case letter, one number, and one special character</p>";
        valid = false
    } else if (password.length > 7) {
        document.getElementById("errorMessages").innerHTML += "<p>The password cannot be more than 7 characters</p>";
        valid = false
    }
    validpassword = true;
    return (validpassword)
}

function checkAddress() {
    var validaddress = false;
    var address = document.getElementById("address").value;
    if (address === null || address === "") {
        document.getElementById("errorMessages").innerHTML += "<p>An address is required</p>";
        valid = false
    }
    validaddress = true;
    return (validaddress);
}

function checkCity() {
    var validcity = false;
    var city = document.getElementById("city").value;
    if (city === null || city === "") {
        document.getElementById("errorMessages").innerHTML += "<p>A city is required</p>";
        valid = false
    }
    validcity = true;
    return (validcity);
}

function checkState() {
    var validstate = false;
    var state = document.getElementById("state").value;
    if (state === "Select state") {
        document.getElementById("errorMessages").innerHTML += "<p>A state is required</p>";
        valid = false
    }
    validcity = true;
    return (validcity);
}

function checkCountry() {
    var validcountry = false;
    var country = document.getElementById("country").value;
    if (country === "Select country") {
        document.getElementById("errorMessages").innerHTML += "<p>A country is required</p>";
        valid = false
    }
    validcountry = true;
    return (validcountry);
}

function checkZip() {
    var validzip = false;
    var country = document.getElementById("country").value;
    if (country === 'US') {
        var zip = document.getElementById("zipcode").value;
        if (zip === null || zip === "") {
            document.getElementById("errorMessages").innerHTML += "<p>A zip code is required</p>";
            valid = false
        } else if (isNaN(zip)) {
            document.getElementById("errorMessages").innerHTML += "<p>The zip code can only have numerical values</p>";
            valid = false
        } else if (zip.length > 5) {
            document.getElementById("errorMessages").innerHTML += "<p>The zip code cannot be more than 5 characters</p>";
            valid = false
        }
    }
    validzip = true;
    return (validzip)
}

function validateForm() {
    valid = true
    document.getElementById("errorMessages").innerHTML = "";
    checkFirstName();
    checkLastName();
    checkPhone();
    checkEmail();
    checkUsername();
    checkPassword();
    checkAddress();
    checkCity();
    checkState();
    checkCountry();
    checkZip();
    return (valid)
}
