const persona = {
    nombre: 'Diego',
    apellido: 'Vargas',
    edad: 25
}

const persona2 = {...persona}
persona2.nombre = 'Juan'

console.table(persona)
console.table(persona2)