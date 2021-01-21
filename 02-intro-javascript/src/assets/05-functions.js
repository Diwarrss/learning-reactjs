//Funciones en JS
/* const showSaludo = function(nombre) {
    return `Hola ${nombre}`
} */
const showSaludo = (nombre) => `Hola ${nombre}`

console.log(showSaludo('Juan Diaz'))

/* const getUser = () => {
    return {
        uid: 5455645,
        username: 'Juan'
    }
} */

const getUser = () => ({
    uid: 5455645,
    username: 'Juan'
})

console.table(getUser())

//Tarea
//1. Transformar a una funcion flecha oki
//2. retornar objeto implicito oki
//3. pruebas
const getUsuarioActivo = (nombre) => ({
    uid: 5455645,
    username: nombre
})

const usuarioActivo = getUsuarioActivo('Diwarrs')
console.log(usuarioActivo)