const LoginForm = document.getElementById("Login-form");
const LoginInput = LoginForm.querySelector("input");

const greeting = document.getElementById("greeting");
const HIDEEN_NAME = "hideen";
const KEY_NAME = "username";

console.log(LoginForm);

function LoginEvent(e){
    e.preventDefault();
    LoginInput.classList.add(HIDEEN_NAME);
    const username = LoginInput.value;
    LoginInput.value = "";
    console.log(username);
    
    localStorage.setItem(KEY_NAME, username);
    Login();
    
}
function Login(){
    const username = localStorage.getItem(KEY_NAME);
    greeting.innerText= `${username}님 환영합니다.`;
    greeting.classList.remove(HIDEEN_NAME);
    LoginInput.classList.add(HIDEEN_NAME);
}

const Storage_val = localStorage.getItem(KEY_NAME);

if(Storage_val === null){
    LoginForm.classList.remove(HIDEEN_NAME);
    LoginForm.addEventListener("submit", LoginEvent);
}else{
    Login();
}
