


const ingresotarea = document.getElementById("ingresotarea");

const contenedorlista = document.getElementById("contenedor-lista");



function displaytareas() {
if (ingresotarea.value === ''){
    
    alert('debe ingresar una tarea, algo debes tener pendiente');

}
else{ 
    
    let li = document.createElement("li");

li.innerHTML = ingresotarea.value;
console.log('ingresotarea');
contenedorlista.appendChild(li);
}


}

