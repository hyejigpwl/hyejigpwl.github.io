/*
1. 함수생성
1) 사용자가 이름을 입력하고 submit하면, 페이지가 새로고침되지 않게 막는다.
2) 입력한 이름은 localStorage에 저장되고, greeting 문구에 사용자 이름을 보낸다.

2. 조건문 
- localStorage에 이름이 저장되어 있으면, form은 없애고 바로 greeting 문구를 보여준다.
- 이름이 저장되어 있지 않으면 getUserId 함수를 실행한다.
*/

const idFrm = document.querySelector("#id_frm");
const idIpt = idFrm.querySelector("input");
const greetingBox = document.querySelector(".greeting");
const greetingName = document.querySelector(".greeting span");

const HIDDEN_CLASSNAME_ = "hidden";
const USERNAME_CLASSNAME = "username";

function getUserId(event){
    event.preventDefault();
    const userName = idIpt.value;
    idFrm.classList.add(HIDDEN_CLASSNAME_);
    localStorage.setItem(USERNAME_CLASSNAME,userName);
    greetingName.innerText = userName;
    greetingBox.classList.remove(HIDDEN_CLASSNAME_);
};   

const usernameValue = localStorage.getItem(USERNAME_CLASSNAME);

if(usernameValue===null){
    idFrm.addEventListener("submit",getUserId);
}else{
    idFrm.classList.add(HIDDEN_CLASSNAME_);
    greetingName.innerText = usernameValue;
    greetingBox.classList.remove(HIDDEN_CLASSNAME_);

}
