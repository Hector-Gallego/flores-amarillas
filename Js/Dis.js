
/*
document.getElementById("BVer").addEventListener('click', function() {
    document.getElementById("resultado").style.display = "block";
})
*/

document.getElementById("BVer").addEventListener('click', function() {


     // Obtenemos el valor del código ingresado por el usuario
     const codigoIngresado = document.getElementById("codigoInput").value;
            
     // Validamos el código
     if (codigoIngresado === "1314") { // Cambia "1314" por el código que desees validar
         // Acciones si el código es válido
      
         document.querySelector(".Contenedor-Binicio").style.display = "none";
         document.querySelector(".Con-2").style.display = "block";
     } else {
         // Acciones si el código no es válido
         alert("Se le olvido, chales :c, si me manda una fotito se lo digo :3");
     }


})