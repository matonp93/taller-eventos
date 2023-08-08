document.addEventListener('DOMContentLoaded', ()=>{

    let div= document.getElementById("divs")
    console.log(div)
//Corrección del problema al presionar el botón y que se ejecute acción del div//
    const boton = document.getElementById("miBoton");
    boton.addEventListener("click", function(event) {
      event.stopPropagation(); // Detiene la propagación del evento
      alert("Hola!");
    });
div.addEventListener('click',()=>{alert("Hola! Soy el div");
})
})



