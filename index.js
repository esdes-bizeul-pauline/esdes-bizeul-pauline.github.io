console.log(document);

var name = "pauline";

function changeName(newName){
    name= newName;
    alert(name);
}
  
function changeClass(){
   var button = document.getElementById ("myButton");
   if(button.className == "rotate") {
         button.className= "";
   } else {
         button.className = "rotate";
   }
}