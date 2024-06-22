let input = document.getElementById("input");
let button = document.getElementById("btn");

button.addEventListener("click", function(){
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (input.value.match(validRegex)) {

        alert("Valid email address!");
    
    
      } else {
    
        alert("Invalid email address!");
    
        
    
      }
})