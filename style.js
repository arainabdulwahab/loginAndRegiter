let forms = [
    {
        user: "testOne",
        gmail: "antoniolupin@gmail.com",
        password: "hacunamatat"
    },
    {
        user: "testTwo",
        gmail: "carlofesta@gmail.com",
        password: "pastaConSuggo"
    }
];

let gmails = '';
let paswords = '';
function getUserInfo() {
    let gmail = document.getElementById("gmail").value;
    let password = document.getElementById("password").value;
    for (let i = 0; i < forms.length; i++) {
        if (gmail == forms[i].gmail && password == forms[i].password) {
            console.log(forms[i].gmail + 'logged in!!');
            window.location.href = "welcome.html";
            return;
        }
    }
    let errorMsg = 'email or password not correct';
    console.log(errorMsg);
    document.getElementById('errorMsg').innerHTML = errorMsg;

}

function addUser(){
    let userName = document.getElementById('userName').value;
    let gmail = document.getElementById('gmailRegister').value;
    let password = document.getElementById('passwordRegister').value;
    let password2 = document.getElementById('passwordRegister2').value;
    if(password == password2){
        forms.push({user: '"'+ userName +'"', gmail:'"'+ gmail +'"', password: '"'+ password +'"'});
        console.log("user added" + userName + gmail + password);
        window.location.href = "welcome.html";
    }else{
        document.getElementById('errorMsg2').innerHTML = 'password didnt match or email correct'; 
    }
}