const btn = document.querySelector('#btn-submit');
const fname = document.querySelector('#fname');
const lanme = document.querySelector('#lname');
const msg = document.querySelector('#message');
const closeBtn = document.querySelector('.btn-close');

btn.addEventListener('click', function(){
    event.preventDefault();
    let first = validateTextInput(fname);
    let second = validateTextInput(lname);
    let message = validateMessageInput(msg);
    let gender = validateRadioButton();
    
    if(first && second && message && gender) {
        console.log("First Name: " + fname.value);
        console.log("Last Name: " + lname.value);
        console.log("Gender: " + gender);
        console.log("Message: " + msg.value);
        submitSuccessful();
    }
});

function submitSuccessful() {
    let element = document.querySelector('#green-label');
    let paragraph = document.querySelector('#green-label>p');
    let text = "Thank you for contacting us, ";
    paragraph.innerHTML = text + fname.value;
    element.classList.remove('form-successful-hidden');
    element.classList.add('form-successful-active');
    document.querySelector('.form').reset();
}

function validateTextInput(name) {
    let letters = /^[A-Za-z]+$/;
    
    if (name.value == "" || name.length <= 2 || !name.value.match(letters)) {
        name.classList.add('error-red-border');
        return false;
    } else {
        name.classList.remove('error-red-border');
        return true;
    }
}

function validateRadioButton(){
    var radios = document.getElementsByName('gender');

    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            document.querySelector('.gender').style.color = "black";
            return radios[i].value;
        }
    }

    document.querySelector('.gender').style.color = "red";
    return false;
}

function validateMessageInput(msg) {
    if (msg.value == "") {
        msg.classList.add('error-red-border');
        return false;
    } else {
        msg.classList.remove('error-red-border');
        return true;
    }
}

closeBtn.addEventListener('click', function(){
    closeSubmitSuccessful();
});

function closeSubmitSuccessful() {
    let element = document.querySelector('#green-label');
    element.classList.remove('form-successful-active');
    element.classList.add('form-successful-hidden');
}
