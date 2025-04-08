'use strict';

let btn = document.querySelector('#btn');
let emailEl = document.getElementById('email');
let passwordEl = document.getElementById('password');
let password = document.querySelector('.inputbox');
let pwshowbtn = document.getElementById('pwshow');

let a = 0;

let originEmail = [
  'gks@naver.com',
  'gahee@daum.net',
  'gkstmdgus14152@gmail.com',
  '20nannaya@naver.com',
];
let originPW = [123456789, 987654321, 'gks14152', 'pm9683bk'];

function warning() {
  let befdiv = document.querySelector('.warning');
  if (befdiv == null) {
    let div = document.createElement('div');
    div.classList.add('warning');
    div.append('이메일 또는 비밀번호를 입력하세요');
    password.appendChild(div);
  } else {
    befdiv.remove();
    let div = document.createElement('div');
    div.classList.add('warning');
    div.append('이메일 또는 비밀번호를 입력하세요');
    password.appendChild(div);
  }
}

function validcheck() {
  let email = emailEl.value;
  let password = passwordEl.value;
  if (email == '' || password == '') {
    btn.style.width = '270px';
    btn.style.height = '40px';
    btn.style.margin = '10px';
    btn.style.border = '2px solid gray';
    btn.style.backgroundColor = 'lightgray';
    btn.style.borderRadius = '20px';
    btn.style.fontWeight = '600';
    btn.style.fontSize = '15px';
    btn.style.color = 'black';
    btn.addEventListener('click', warning);
  } else {
    btn.style.width = '270px';
    btn.style.height = '40px';
    btn.style.margin = '10px';
    btn.style.border = '2px solid rgb(17, 167, 102)';
    btn.style.borderRadius = '20px';
    btn.style.backgroundColor = 'rgb(17, 167, 102, 50%)';
    btn.style.fontWeight = '600';
    btn.style.fontSize = '15px';
    btn.style.color = 'white';
    let div = document.querySelector('.warning');
    if (div == null) {
      btn.addEventListener('click', check);
    } else {
      div.remove();
      btn.addEventListener('click', check);
    }
  }
}

function check() {
  let email = document.getElementById('email').value;
  let password = passwordEl.value;
  let j = 0;
  for (let i = 0; i < originEmail.length; i++) {
    if (email == originEmail[i]) {
      if (password == originPW[i]) {
        alert('로그인 성공!');
        emailEl.value = null;
        passwordEl.value = null;
        validcheck();
        eyeimg();
        let div = document.querySelector('.warning');
        if (div !== null) {
          div.remove();
        }
        break;
      } else if (!password) {
        validcheck();
      } else {
        alert('비밀번호가 유효하지 않습니다');
        passwordEl.value = null;
        eyeimg();
        validcheck();
      }
    } else {
      j += 1;
      continue;
    }
  }
  if (email !== '' && email.includes('@') === false) {
    alert('유효한 이메일이 아닙니다!');
    emailEl.value = null;
    passwordEl.value = null;
    eyeimg();
    validcheck();
  } else if (
    password !== '' &&
    (password.length >= 8 && password.length <= 16) === false
  ) {
    alert('비밀번호는 8~16자 이내 입니다!');
    passwordEl.value = null;
    eyeimg();
    validcheck();
  } else if (email !== '' && password !== '' && j == originEmail.length) {
    alert('이메일 또는 비밀번호가 잘못되었습니다');
    emailEl.value = null;
    passwordEl.value = null;
    eyeimg();
    validcheck();
  }
}

pwshow.addEventListener('click', count);
function count() {
  a += 1;
  if (a % 2 == 1) {
    typetext();
  } else {
    typepassword();
  }
}

function typetext() {
  passwordEl.type = 'text';
  pwshowbtn.style.backgroundImage = 'url(/LogIn/img/eye.png)';
}
function typepassword() {
  passwordEl.type = 'password';
  pwshowbtn.style.backgroundImage = 'url(/LogIn/img/hidden.png)';
}

function eyeimg() {
  let pwshowbtnbg = pwshowbtn.style.backgroundImage;
  if (pwshowbtnbg == 'url("/img/hidden.png")') {
    a = 0;
  } else {
    typepassword();
    a += 1;
  }
}
