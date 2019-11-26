
$(document).ready(function(){
  $("#ch4form").on('submit', function(){
    var validInput = true;
    var fullname=$("#fullname").val();
    var address=$("#streetaddr").val();
    if (fullname == 0){
      $('#nameerrormsg').css("display", "block");
      console.log("no name")
      validInput = false;
    }
    else{
      $('#nameerrormsg').css("display", "none");
      console.log("name's here")
    }

    if (address == 0){
      $('#addrerrormsg').css("display", "block");
      validInput = false;
      console.log("no address")
    }
    else{
      $('#addrerrormsg').css("display", "none");
      console.log("address here")
    }
    return validInput;
  })
})
