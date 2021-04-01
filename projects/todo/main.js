document.getElementById("Bens-Button").addEventListener("click", function() {
    document.getElementById("myUL").innerHTML = "<li></li>";
  });

  document.getElementById("Add-Btn").addEventListener("click", function() {
addItem()

  });

  document.getElementById("myUL").addEventListener("click", function(e) {
    console.log(e)
    this.removeChild(e.target.parentElement)



  });

  document.getElementById("myInput").addEventListener("keypress", function(e) {
    if (e.keyCode == 13) {
      addItem()
    }
  });



function addItem() {
  var input=document.getElementById("myInput")
    var ul=document.getElementById("myUL")
    var li=document.createElement("li")
    if (input.value == ""){
      
      return
    
    }
    li.innerHTML=`${input.value} <button class="closebutton">X</button>`
    input.value=""
    ul.appendChild(li)

}