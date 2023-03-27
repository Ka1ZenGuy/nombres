
function generate(){
    const nombres = ["Juan", "María", "Pedro", "Ana", "Luis", "Laura", "Diego", "Valeria", "Carlos", "Julieta"];
    const apellidos = ["Pérez", "García", "Rodríguez", "González", "Martínez", "Hernández", "López", "Díaz", "Sánchez", "Romero"];
    const rand_first = Math.floor(Math.random()* nombres.length);
    const rand_last = Math.floor(Math.random()*lastname.length);
    document.getElementById(`result`).innerHTML ="<h1>Nombre:</h1><div class='alert alert-success'><h2>"+nombres[rand_first]+" "+apellidos[rand_last]+"</h2></div>";

}