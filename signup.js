const inputs = document.querySelectorAll('input');



const regex = {

  username: /^[a-z0-9]{5,12}$/i,
  email: /^([a-z\d.-]+)@([a-z]+)\.([a-z]+)?$/,
  password: /^[\w@-]{8,20}$/,
  telephone: /^[\d]{11}$/

}



function validate(field, regex) {

  field.className = (regex.test(field.value))?"valid":"invalid";

}



inputs.forEach((input) => {
  
  input.addEventListener('keyup', (e) => {

    validate(e.target, regex[e.target.attributes.name.value]);
    
  });

});

const formButton = document.getElementById('form-button');
let success = true;

formButton.addEventListener('click', (e) => {

  inputs.forEach((input) => {
    
    if ((regex[input.attributes.name.value].test(input.value))) {
      success = true;//this condition was needed for setting success to true if it had been set to false after the last click
    }
    else  {
      success = false;
    }

  });

  formButton.className=success?"valid":"invalid";

});