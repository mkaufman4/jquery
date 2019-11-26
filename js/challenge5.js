console.log("here");
var imgs= $(".preview");
var msg = "Hover over an image below."

imgs.each(function(){
  $(this).mouseover(function(){
    console.log("mouseover")
    $("#image").css('backgroundImage',"url('"+this.src+"')");
    $('#image').html(this.alt);
  })
  $(this).focus(function(){
    console.log("focus")
    $("#image").css('backgroundImage', "url('"+this.src+"')");
    $("#image").html(this.alt);
  })
  $(this).mouseout(function(){
    console.log("mouseout")
    $("#image").css("backgroundImage", "ur;('')");
    $("#image").html(msg)
  })
  $(this).blur(function(){
    console.log("blur")
    $("#image").css("backgroundImage", "url('')");
    $("#image").html(msg);
  })

})
