
const form = document.querySelector('#generar-nombre');
 
form.addEventListener('submit', cargarNombres);
 
 
 
function cargarNombres(e){
    e.preventDefault();

    //Leer las variables
    const origen = document.querySelector('#origen').value;
 
    const gender = document.querySelector('#genero').value;
 
    const average = document.querySelector('#numero').value
   
    let url = '';

    //Agregar los valores a la URL
    url += `https://randomuser.me/api/?nat=${origen}&gender=${gender}&results=${average}`;
 
    //Iniciar XMLHTTPREQUEST
    const xhr = new XMLHttpRequest();

    //Abrir la conexion
    xhr.open('GET',url, true);

    //Leer datos e imprimir el template
    xhr.onload = function(){
        if(this.status === 200){
            const names = JSON.parse(this.responseText);
            let nombres = names.results;
            let template = '';
            nombres.forEach(nombre => {
               template += `
               <ul class="lista">
                    <li>${nombre.name.first}</li>
               </ul>
               `;
               document.querySelector('#resultado').innerHTML = template;
            });
            
            
        }
    }
    xhr.send();
}
 