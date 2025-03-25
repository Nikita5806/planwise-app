let inputs = document.getElementById("inp");
let text = document.querySelector(".text");

function Add(){
   if( inputs.value == ""){
    alert ("enter some task")
   }else{
    let newEl = document.createElement("ol");
    newEl.innerHTML = `${inputs.value}<i class="fa fa-trash" style="color: red;"></i>
 `;
    text.appendChild(newEl);
    inputs.value =  "";
    newEl.querySelector("i").addEventListener("click" , remove);
    function remove (){
      newEl.remove();
    }
   }
}
