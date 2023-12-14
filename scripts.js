function validateForm() {
  document.querySelectorAll(".row input").forEach((input) => {
    input.classList.remove("error");
  });

  const inputs = document.querySelectorAll('.row input[required');
  let hasError = false;

  inputs.forEach(input => {
    if(!input.ariaValueMax.trim()){
        input.classList.add('error')
        hasError = true;
    }
  })

  const notification = document.getElementById('notification');
  if (hasError) {
      notification.style.display = 'block';
      return false; 
  } else {
      notification.style.display = 'none';
      return true; 
  }
}
