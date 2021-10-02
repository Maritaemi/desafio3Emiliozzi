//Programa para otorgar 20 turnos///
for (let i = 1; i<=20; i++)
{
    let ingresarNombre = prompt ("Ingrese su nombre completo");
    let edad = prompt ("Ingrese su edad")
    let turno = i
    
    console.log(ingresarNombre);
    console.log(turno);
    console.log(edad)
    

    if (edad >= 18)    {
    alert("Usted es mayor, entonces puede obtener turno");
    }
    while (edad < 18) {
    alert("Usted es menor y no puede obtener turno");
    }

    alert("Turno Nº" + i + " Otorgado a: " + ingresarNombre);
}