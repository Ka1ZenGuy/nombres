
function generate(){
    generate.addEventListener("click",()=> {

        const nombres = ["Juan", "María", "Pedro", "Ana", "Luis", "Laura", "Diego", "Valeria", "Carlos", "Julieta"];
        const apellidos = ["Pérez", "García", "Rodríguez", "González", "Martínez", "Hernández", "López", "Díaz", "Sánchez", "Romero"];
        const rand_first = Math.floor(Math.random()* nombres.length);
        const rand_last = Math.floor(Math.random()*lastname.length);
        document.getElementById('result').innerHTML ="<h2>Nombre:</h2><div class='alert alert-success'><h4>"+nombres[rand_first]+" "+apellidos[rand_last]+"</h4></div>";
    })

}