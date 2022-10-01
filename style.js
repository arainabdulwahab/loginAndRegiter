let forms = [
    {
        gmail: "antoniolupin@gmail.com",
        password: "hacunamatat"
    },
    {
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
