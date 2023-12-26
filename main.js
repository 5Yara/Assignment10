var signInPage = document.querySelector('#signInPage');
var signUpPage = document.querySelector('#signUpPage');
var WelcomePage = document.querySelector('#welcomePage');

var signUpName = document.querySelector('#signUpName');
var signUpEmail = document.querySelector('#signUpEmail');
var signUpPassword = document.querySelector('#signUpPassword');
var signInEmail = document.querySelector('#signInEmail');
var signInPassword = document.querySelector('#signInPassword');

var signUpLink = document.querySelector('#signUpLink');
var signInLink = document.querySelector('#signInLink');

var logInBtn = document.querySelector('#logInBtn');
var signUpBtn = document.querySelector('#signUpBtn');
var logOutBtn = document.querySelector('#logOutBtn');

var userName = document.querySelector('#userName');


signUpLink.addEventListener('click', function (eventInfo) {
    signUpPage.style.display = 'block';
    signInPage.style.display = 'none';
})

signInLink.addEventListener('click', function (eventInfo) {
    signUpPage.style.display = 'none';
    signInPage.style.display = 'block';
})

logInBtn.addEventListener('click' , function(eventInfo){
    WelcomePage.style.display = 'block';
    signInPage.style.display = 'none';
    signUpPage.style.display = 'none';
})

logOutBtn.addEventListener('click' , function(eventInfo){
    WelcomePage.style.display = 'none';
    signInPage.style.display = 'block';
    signUpPage.style.display = 'none';
})

// <.................................... Start Saving info .......................................>

var container = [];

if (localStorage.getItem("allPeople") != null) {
    productContainer = JSON.parse(localStorage.getItem("allPeople"));
}

function addPerson() {

    var person = {
        name: signUpName.value,
        email: signUpEmail.value,
        password: signUpPassword.value
    }


    container.push(person)
    localStorage.setItem("allPeople", JSON.stringify(container))
    clearForm();
}

function clearForm() {
    signUpName.value = '';
    signUpEmail.value = '';
    signUpPassword.value = '';
}

// <.................................... End Saving info .......................................>

function personAccount(){
    var person = {
        email: signInEmail.value,
        password: signInPassword.value
    }
    if(signInPassword.value == signUpPassword.value && signInEmail == signUpEmail){
        logInBtn.addEventListener('click' , function(eventInfo){
            WelcomePage.style.display = 'block';
            signInPage.style.display = 'none';
            signUpPage.style.display = 'none';
            document.getElementById('username').innerHTML = "Welcome " + userName;
        })
    }

    else {
        logInBtn.addEventListener('click' , function(eventInfo){
            WelcomePage.style.display = 'none';
            signInPage.style.display = 'block';
            signUpPage.style.display = 'none';
        })
    }
}
