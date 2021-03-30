document.getElementById("Bens-Button").addEventListener("click", function() {
    document.getElementById("myUL").innerHTML = "<li></li>";
  });

  document.getElementById("Add-Btn").addEventListener("click", function() {
    var input=document.getElementById("myInput")
    var ul=document.getElementById("myUL")
    var li=document.createElement("li")
    li.innerHTML=`${input.value} <button class="closebutton">X</button>`
    input.value=""
    ul.appendChild(li)
  });

  document.getElementById("myUL").addEventListener("click", function(e) {
    console.log(e)
    this.removeChild(e.target.parentElement)



  })