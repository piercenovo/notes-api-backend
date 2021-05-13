const http = require('http')

let notes = [
    {
        id: 1,
        "content": "Me gusta dibujar en blanco",
        "date": "2020-05-30T17:30:31.098Z",
        "important": true
    },
    {
        id: 2,
        "content": "Tengo que estudiar MongoDB y NodeJS",
        "date": "2021-06-30T18:39:34.091Z",
        "important": false
    },
    {
        id: 3,
        "content": "Practicar piano 4 veces por semana",
        "date": "2021-08-30T19:20:14.298Z",
        "important": true
    }
]

const app = http.createServer((request, response) => {
    response.writeHead(200, {'Content-Type': 'application/json'})
    response.end(JSON.stringify(notes))
})

const PORT = 3001
app.listen(PORT)
console.log(`Server running on port ${PORT}`) 