$(document).ready(function(){
  $("form").submit(function(onsubmit){
    var fruit = $('input[name="fruit"]');
    var year = $('input[name="standing"]');
    if((fruit.is(":checked")) && (year.is(":checked"))){
      console.log("picked")
      return true;
    }
    alert("Pick a fruit and a year!");
        console.log("didnt pick")
    return false;
  })
})
