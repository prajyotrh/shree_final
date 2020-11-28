

/* contact form*/
$("form").submit(function(){
  var post = $('form').serialize();
  $('#submit').addClass('disabled');

  $.post('php/form1.php', post, function(data){

  $("#success_msg").text(data);
  

setTimeout(function() {
      $("#success_msg").fadeOut().empty();
      }, 3000);

      $('#submit').removeClass('disabled');
      $('form').trigger("reset");
      if(data.match('success') != null)
      {
          $("#error_msg").text(data);   
          setTimeout(function() {
          $("#success_msg").fadeOut().empty();
          }, 3000);
      }
  });
return false;
});

/* dropdown list */
function addon(city,area){
  var ct = document.getElementById('city');
  var loc = document.getElementById('area');

  if(ct.value == "sangli"){
    var optionArray = ["vishrambag|Vishrambag","dhamaniRoad|Dhamani Road"];
  }

  for(var option in optionArray){
    var pair = optionArray[option].split("|");
    var newOption = document.createElement("option");
    newOption.value = pair[0];
    newOption.innerHTML=pair[1];
    loc.options.add(newOption);
  }

}

/* filter function*/
function search(){

  /* taking input */
  var city = document.getElementById('city').value;
  var area = document.getElementById('area').value;
  var flatType = document.getElementById('flatType').value;


  /* creating classname */

  var className=".col-sm-6.col-md-4.col-xl-3.filter";
  if(city != 'city')
  {
    className+='.';
    className+=city;
  }

  if(area != 'area')
  {
    className+='.';
    className+=area;
  }

  if(flatType != 'flat')
  {
    className+='.';
    className+=flatType;
  }


  var alt = $('<div class="col-12 alert alert-danger text-center" role="alert">Sorry, no result found !</div>');
  
  var res = document.querySelectorAll(className);

  console.log(res);


  /* clearing div */
  const container = document.querySelector('#abs');
  removeAllChildNodes(container);

  function removeAllChildNodes(parent) {
      while (parent.firstChild) {
          parent.removeChild(parent.firstChild);
      }
  }
  


  /* appending items to div */
  if(res.length == 0){
    alt.appendTo('#abs');
  }
  else{
    res.forEach(myfun);
    function myfun(item){
      console.log(item);
      document.getElementById('abs').appendChild(item);
    }
  }

    

  document.getElementById('flats').style.display="none";

}

/* whatsapp chat */
document.getElementById('chat').style.display= "none";
window.onload = function(){
  document.getElementById('chat').style.display= "none";
document.getElementById('whatsapp').addEventListener("click",function(){
  document.getElementById('chat').style.display ="block";
});

document.getElementById('close').addEventListener("click",function(){
  document.getElementById('chat').style.display="none";
});


document.getElementById('send').addEventListener("click",function(){
  var msg = document.getElementById('msg').value;
  window.location="https://api.whatsapp.com/send/?phone=919284088484&text="+msg;
});
}

// var chat = document.getElementsById('whatsapp');
// chat.a.href+=msg;