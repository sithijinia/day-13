

$('#firstName').keyup(function () {

    var firstNameValue = $('#firstName').val();
   $('#firstName1').text(firstNameValue);


});


$('#lastName').keyup(function () {

    var lastNameValue = $('#lastName').val();
    $('#lastName1').text(lastNameValue);


});


$('#lastName').blur(function () {
    var firstNameValue = $('#firstName').val();
    var lastNameValue = $('#lastName').val();
    $('#fullName').text(firstNameValue +''+lastNameValue);


});
