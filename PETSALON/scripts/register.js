let pets= [];//areglo vacio
// crear constructor
function Pet (nombreP, generoP, razaP, edadP, servicioP){
    this.nombre=nombreP;
    this.genero=generoP;
    this.raza=razaP;
    this.edadP=edadP;
    this.servicio=servicioP;
}
// variables globales
//obtener los valores de los inputs
    let inputNombre=document.getElementById("txtNombre");
    let inputGenero=document.getElementById("txtGenero");
    let inputRaza=document.getElementById("txtRaza");
    let inputEdad=document.getElementById("txtEdad");
    let inputServicio=document.getElementById("selServicio");
    

    function validacion(pet){
        let valida=true; //todo bien
        if(pet.nombre ==""){//comparacion (utilizar== < >= <= !=)
            //si entro aquí no es valida la mascota
            inputNombre.className.add=("error");
            valida=false;
        }
        return valida;
    //validar que el servicio no quede vacio
    if(pet.servicio==""){//comparacion (utilizar== < >= <= !=)
        //si entro aqui no se valida la mascota
        inputServicio.className.add("error");
        valida= false;
    }
        return valida;
    }
   
// crear funcion de registro
function registro (){
    console.log ("Registrando mascota...");
    //crear objeto
    let newPet= new Pet(inputNombre.value,inputGenero.value,inputRaza.value,inputEdad.value,inputServicio.value,inputSucursal.value);
    if(validacion(newPet)==true){
        //Imprimir el objeto en consola
    console.log(newPet);
    pets.push(newPet);
    //limpiar
    limpiarForm();
    }
}
function limpiarForm(){
    inputNombre.value="";
    inputGenero.value="";
    inputRaza.value="";
    inputEdad.value="";
    inputServicio.value="";
   
}

function init(){
    console.log("register");
    //objeto
    let pet1 = new Pet("Macchiato","Macho","Boxer","Grooming");
    let pet2 = new Pet("Scooby", "Male","Dane",60);
    let pet3= new Pet ("Scrappy","Male","Mixed",50);
    pets.push (pet1);//agregar al arreglo
    pets.push (pet2);
    pets.push (pet3);
}

window.onload=init; //ejecuta init cuando termina de renderizar el HTML


