var input = document.getElementById("textfield");
var words = document.getElementById("words");
var signs = document.getElementById("signs");
var nowhite = document.getElementById("no-white");
var button = document.getElementById("button");

var regex = /[\s]/g;

input.addEventListener("focus", function(){
  input.style.backgroundColor="#355948";
  input.style.fontSize="25px";
})
input.addEventListener("blur", function (){
  input.style.backgroundColor="#447344";
})


input.addEventListener("keyup", function(){
  var characters = input.value.trim().split(" ");
  if(input.value == ""){
    words.innerText = 0;
  }else if(input.value.match(/\S/) == null){
    words.innerText = 0;
  }else{
      words.innerText = characters.length;
  }
})

input.addEventListener("keyup", function(){
  var chars = input.value.split("");
  signs.innerText = chars.length;
})

input.addEventListener("keyup", function(){
  var nospace = input.value.replace(regex, "");
  nowhite.innerText = nospace.length;
})

button.addEventListener("click", function(){
  input.select();
    document.execCommand("copy");
  alert("Skopiowano tekst");
})


