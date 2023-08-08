/* 
1. submit 함수 
- 이름 입력하면  local storage에 저장.
- form 사라지고, greeting div 등장

2. submit 함수 돌아가기 전에 먼저 local storage에 이름이 저장되어 있는지 확인하고, 
저장 o -> 바로 greeting div 보여주기
저장 x -> submit 함수를 실행한다.
*/

const idFrm = document.querySelector("#id_frm");
const nameInput = document.querySelector("#id_frm input");
const greeting = document.querySelector(".greeting");
const greetingName = greeting.querySelector(".name");

function loginFtn(event){
    event.preventDefault();

    const username = nameInput.value;
    localStorage.setItem("username",username);

    idFrm.classList.add("hidden");
    greeting.classList.remove("hidden");
    greetingName.innerText = username;
};



const name = localStorage.getItem("username");

if(name === null){
    idFrm.addEventListener("submit",loginFtn);
}else{
    idFrm.classList.add("hidden");
    greeting.classList.remove("hidden");
    greetingName.innerText = name;
}
