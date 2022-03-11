const button = document.getElementById('start')
const light  = document.getElementById('light')
const logo = document.getElementById('logo')

function func(){
  button.classList.toggle('active')
  light.classList.toggle('on')
  if(logo.textContent === 'Ankit Aggarwal'){
    logo.textContent = 'Hi';
  }
  else{
    logo.textContent = 'Ankit Aggarwal'
  }
}

const namee = document.querySelector('#name');
const email = document.querySelector('#email');
const message = document.querySelector('#message');
let success = document.getElementsByClassName('success');
const error = document.querySelectorAll('.error');
console.dir(success)

function validateForm(){
  clearMessage();
  let errorFlag=false;

  if(namee.value.length<1){
    error[0].innerText = 'Name can not be Empty';
    errorFlag = true;
  }

  if(!emailIsValid(email.value)){
    error[1].innerText = 'Email is not valid';
    errorFlag = true;
  }
  if(message.value.length<1){
    error[2].innerText = 'Message is Empty';
    errorFlag = true;
  }
  if(!errorFlag){
    success[0].innerText = "Success";
    console.log(success.innerText)
    console.log(errorFlag)
    namee.value='';
    // console.log(namee)
    // console.log(namee.value)
  email.value='';
  message.value='';
  }
}

function clearMessage(){
  for(let temp of error){
    temp.innerText='';
  }
  success.innerText='';
  // namee.value.innerText='';
  // email.value.innerText='';
  // message.value.innerText='';
}
function emailIsValid(email){
  let pattern = /\S+@\S+\.\S+/;
  return pattern.test(email);
}
