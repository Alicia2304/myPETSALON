function displayCards(){
    //declaracion de variables
    const DIV= document.getElementById ("mascotas");
    let card ="";
    // recorrer el arreglo pets[]
    for(let i=0;i<pets.length;i++){
    card +=`
       <div class= "card">
            <p>Nombre: ${pets[i].nombre}</p>
            <p>Genero: ${pets[i].nombre}</p>
        </div>

    `;

    }
    console.log(card);
    //crear el template de la tarjeta
    //insertar la tarjeta en el HTML
    DIV.innerHTML=li;
}