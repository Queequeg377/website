document.getElementById("Bens-Button").addEventListener("click", function() {
    document.getElementById("myUL").innerHTML = "<li>Hello</li>";
  });

  document.getElementById("Add-Btn").addEventListener("click", function() {
    var input=document.getElementById("myInput")
    var ul=document.getElementById("myUL")
    var li=document.createElement("li")
    li.innerHTML=input.value
    input.value=""
    ul.appendChild(li)
  });