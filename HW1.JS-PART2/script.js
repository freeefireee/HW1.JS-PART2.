function checkWebsite(input) {
    const isValid = /^https?:\/\/.*\..*/.test(input);
    setValidationStyle('websiteInput', isValid);
  }

  function checkEmail(input) {
    const isValid = /.+@.+\..+/.test(input);
    setValidationStyle('emailInput', isValid);
  }

  function setValidationStyle(elementId, isValid) {
    const inputElement = document.getElementById(elementId);
    if (isValid) {
      inputElement.classList.remove('invalid');
      inputElement.classList.add('valid');
    } else {
      inputElement.classList.remove('valid');
      inputElement.classList.add('invalid');
    }
  }