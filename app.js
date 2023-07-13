/*
의사코드
1. 이름을 입력하고 클릭하면 input value를 local storage에 저장한다. + 페이지 새로고침 막기
2.  클릭했을때 폼은 사라지고, h1이 등장한다.
3. local storage에 이름이 없을 경우, formSubmit 그대로 돌리면 되고, 이름이 있을 경우에는 form을 숨기고, greeting만 보여준다.
4. 중복되는 class명은 변수처리, 중복되는 코드들은 함수로 묶어준다.
*/

const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_CLASSNAME = "username";

function formSubmit(event) {
  event.preventDefault();
  const username = loginInput.value;
  localStorage.setItem(USERNAME_CLASSNAME, username);
  loginForm.classList.add(HIDDEN_CLASSNAME);
  greetingShow(username);
}

function greetingShow(username) {
  greeting.classList.remove(HIDDEN_CLASSNAME);
  greeting.innerText = `안녕하세요 ${username}님 오늘도 좋은 하루 되세요 :)`;
}

const usernameValue = localStorage.getItem(USERNAME_CLASSNAME);

if (usernameValue === null) {
  loginForm.addEventListener("submit", formSubmit);
} else {
  loginForm.classList.add(HIDDEN_CLASSNAME);
  greetingShow(usernameValue);
}