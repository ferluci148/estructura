 
          
  /*  window.onload = function() {
        alert("Load");
        
        nombre.style.color = "red";
     };*/
        
     window.onload = function() { 
     
     // let elemento=document.getElementById("nombre");
        nombre.addEventListener("mouseover", function () {
 
            nombre.style.color = "olive";
            nombre.innerText = (nombre.innerText).toUpperCase();

        }, false)
        nombre.addEventListener("mouseout", function () {
            nombre.style.color = "black";
            nombre.innerText = (nombre.innerText).toLowerCase();

        }, false)

    }

 