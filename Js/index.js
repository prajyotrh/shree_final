var res = document.querySelectorAll('.filter');

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

var city ={
  city :["area|Area"],
  sangli:["area|Area","vishrambag|Vishrambag","dhamaniRoad|Dhamani Road"],
  miraj:["area|Area"],
  jaysingpur:["area|Area"],
  kupwad:["area|Area"]
};

var main = document.getElementById('city');
var sub = document.getElementById('area');

main.addEventListener('change',function(){
  
  var selected_option = city[this.value];

  //remove options
  while(sub.length > 0){
    sub.options.remove(0);
  }

  // add selected elements data
  Array.from(selected_option).forEach(function(el){

    // console.log(el);

    var pair = el.split("|");
    
    let option = new Option(pair[1],pair[0]);

    sub.appendChild(option);

  });

});

/* filter function*/
function search(){
  
  /* taking input */
  var city = document.getElementById('city').value;
  var area = document.getElementById('area').value;
  var flatType = document.getElementById('flatType').value;

  /* clearing div */
  const container = document.querySelector('#abs');
  removeAllChildNodes(container);

  function removeAllChildNodes(parent) {
      while (parent.firstChild) {
          parent.removeChild(parent.firstChild);
      }
  }

  /* appending items to div */
  if(res.length > 0){
    res.forEach(myfun);
    function myfun(item){
      // console.log(item);
      document.getElementById('abs').appendChild(item);
    }
  }


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
  
  var xyz = document.querySelectorAll(className);

    /* clearing div */
     const container1 = document.querySelector('#abs');
    removeAllChildNodes(container1);
  
    function removeAllChildNodes(parent) {
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
        }
    }
  
  

 

   
  
  // console.log(xyz);


  /* appending items to div */
  if(xyz.length > 0){
    xyz.forEach(myfun);
    function myfun(item){
     
      document.getElementById('abs').appendChild(item);
    }
  }
  else{
    $("#abs").append(alt);
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
