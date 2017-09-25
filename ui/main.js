var signin = document.getElementById('sub_login');

signin.onclick = function(){
    
    var request = new XMLHttpRequest();
    
    request.onreadystatechange = function(){
      if(request.readyState == XMLHttpRequest.DONE)
      {
          if(request.status == 200)
          {
              var counter = request.responseText;
              var span = document.getElementById('count');
              span.innerHTML = counter.toString();
          }
      }
    };
    
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    request.open("POST", "http://sabithcad.imad.hasura-app.io/create-user", true);
    request.send(null);
    
};


var signup = document.getElementById('create_user');
signup.onclick = function(){
    
    
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
};



var button = document.getElementById("counter");
var counter = 0;
button.onclick = function(){
 
    var request = new XMLHttpRequest();
    
    request.onreadystatechange = function(){
      if(request.readyState == XMLHttpRequest.DONE)
      {
          if(request.status == 200)
          {
              var counter = request.responseText;
              var span = document.getElementById('count');
              span.innerHTML = counter.toString();
          }
      }
    };
    
    request.open("GET", "http://sabithcad.imad.hasura-app.io/counter", true);
    request.send(null);
   
};

var nameInput = document.getElementById("name");
var name = nameInput.value;
var submit = document.getElementById("submit_btn");
submit.onclick = function(){
    
  
    var names = ['Name1', 'Name2', 'Name3', 'Name4'];
    var list = "";
    
    for(var i=0; i<names.length; i++ )
    {
        list += "<li>" + names[i] + "</li>"; 
    }
    var ul = document.getElementById("namelist");
    ul.innerHTML = list;
};