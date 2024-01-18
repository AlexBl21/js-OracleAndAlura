// let numeroSecreto = 6;
// let numeroUsuario = prompt("Me indicas un número por favor:");

// console.log(numeroUsuario);

// if (numeroUsuario == numeroSecreto) {
//     alert('Acertaste el número');
// }
//-----------------------------------------------------------------------------------------------

// alert("¡Bienvenida y bievenido a nuestro sitio web!");
// let nombre= "luna";
// let edad= "25";
// let mensajeError="Completa todos los campos";
// alert(mensajeError);
// nombre=prompt("ingresa tu nombre:");
// edad=prompt("ingresa tu edad:");
// alert("hola "+nombre+", tu edad es: "+edad);
// if (edad>=18){
//     alert("¡Puedes obtener tu licencia de conducir!")
// }

//-----------------------------------------------------------------------------------------------------

// //Variables
// let numeroSecreto = 2;
// let numeroUsuario = prompt("Me indicas un número entre 1 y 10 por favor:");

// console.log(numeroUsuario);
// /*
// Este código realiza
// la comparación
// */
// if (numeroUsuario == numeroSecreto) {
//     //Acertamos, fue verdadera la condición
//     alert(`Acertaste, el número es: ${numeroUsuario}`);
// } else {
//     //La condición no se cumplió
//     alert('Lo siento, no acertaste el número');
// }

//------------------------------------------------------------------------------------------------------------------

// let dia =prompt("que dia es?");
// if(dia=="sabado"|| dia=="domingo"){
//     alert("buen fin de semana");
// }
// else{
//     alert("buena semana");
// }

// let numero = prompt("ingresa un numero:");
// if(numero>=0){
//     alert("es numero positivo");
// }
// else{
//     alert("es numero negativo");
// }
//------------------------------------------------------------------------------------------------------------------
//Variables
let numeroMaximoPosible = prompt("ingresa hasta que numero quieres jugar:");
let numeroSecreto = Math.floor(Math.random()*numeroMaximoPosible)+1;
let numeroUsuario = 0;
let intentos = 1;
//let palabraVeces = 'vez';
let maximosIntentos = prompt("pon una dificultad (maximo de 10 intentos)");


while (numeroUsuario != numeroSecreto) {
    numeroUsuario = parseInt(prompt(`Me indicas un número entre 1 y ${numeroMaximoPosible}  por favor:`));

    console.log(typeof(numeroUsuario));
    if (numeroUsuario == numeroSecreto) {
        //Acertamos, fue verdadera la condición
        alert(`Acertaste, el número es: ${numeroUsuario}. Lo hiciste en ${intentos} ${intentos == 1 ? 'vez' : 'veces' }`);
    } else {
        if (numeroUsuario > numeroSecreto) {
            alert('El número secreto es menor');
        } else {
            alert('El número secreto es mayor');
        }
        //Incrementamos el contador cuando no acierta
        //intentos = intentos + 1;
        //intentos += 1;
        intentos++;

        //palabraVeces = 'veces';
        if (intentos > maximosIntentos) {
            alert(`Llegaste al número máximo de ${maximosIntentos} intentos`);
            break;
        }
        //La condición no se cumplió
        //alert('Lo siento, no acertaste el número');
    }
}
//------------------------------------------------------------------------------------------------------------------

// let contador =1;
// while(contador <=10){
//     console.log(contador);
//     contador++;
// }

// console.log("contador invertido")
// let contador2 =10;
// while(contador2 >0){
//     console.log(contador2);
//     contador2--;
// }

// console.log("cuenta regresiva")
// let cuenta=prompt("ingresa la cuenta regresiva:");
// while(cuenta>0){
//     console.log(cuenta);
//     cuenta--;
// }

// console.log("cuenta regresiva")
// let cuentaP=prompt("ingresa la cuenta progresiva:");
// let conteo=0;
// while(conteo<=cuentaP){
//     console.log(conteo);
//     conteo++;
// }

//------------------------------------------------------------------------------------------------------------------

// console.log("bienvenido")
// let nombre="alex";
// console.log("Hola "+nombre);
// alert("Hola "+nombre);
// let respuesta=prompt("cual es el lenguaje que mas le gusta?")
// console.log(respuesta);

// let i=1;
// while(i<=10){
//     console.log(i)
//     i++
// }


