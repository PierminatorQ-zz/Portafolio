$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })



  $('a[href*="#"]').on('click', function(e) {
    e.preventDefault()
  
    $('html, body').animate(
      {
        scrollTop: $($(this).attr('href')).offset().top,
      },
      800,
      'linear'
    )
  })



  var frmvalidator  = new Validator("contactform");
    frmvalidator.addValidation("name","req","Please provide your name");
    frmvalidator.addValidation("email","req","Please provide your email");
    frmvalidator.addValidation("email","email", "Please enter a valid email address");