// Se declara el arreglo
const messages = [
    "David",
    "Paulina",
    "Maria",
    "Juan Carlos",
    "Pablo",
    "Diana",
    "Ana Maria",
    "Isabela",
    "Antonio",
    "Norma"
]

//Crear función para enviar aleatoriamente  los nombres del arreglo
export const randomMsg = () => {
    const message = messages[Math.floor(Math.random() * messages.length)]
    console.log(message)
}

// Exportar como un módulo
// module.export = { randomMsg }
export default { randomMsg }