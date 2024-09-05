document.addEventListener('DOMContentLoaded', function() {
    var signUpButton = document.querySelector('.btn-primary');
  
    signUpButton.addEventListener('click', function() {
      var emailInput = document.querySelector('.form-control');
      var email = emailInput.value;
      
      if (email === '') {
        alert('Please enter your email address.');
      } else {
        alert('Thank you for signing up! You will receive our newsletter soon.');
        emailInput.value = '';
      }
    });
  });
  

