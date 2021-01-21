const nombre = 'Diego'
const apellido = 'Vargas'

const nombreCompleto = `${nombre} ${apellido}`

console.log(nombreCompleto)

function getSaludo() {
    return `hola ${nombreCompleto}`
}

console.log(`hola para un saludo a ${getSaludo()}`)