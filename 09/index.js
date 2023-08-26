const participantes = [
    { nome: "João" },
    { nome: "Ana" },
    { nome: "Beatriz" },
    { nome: "Maria" },
    { nome: "Ana Clara" },
    { nome: "Joana" },
    { nome: "Augusto" },
    { nome: "Renan" },
    { nome: "Patricia" },
    { nome: "Carlos" },
    { nome: "Renato" },
    { nome: "José" },
    { nome: "Roberto" },
    { nome: "Sara" },
    { nome: "Junior" },
    { nome: "Pedro" },
    { nome: "Vitor" },
    { nome: "Antonio" },
]

amigoPerdido = "Antonio"
let contagem = 1

for (let item = 0; item < participantes.length; item++) {
    if (participantes[item].nome == amigoPerdido) {
        console.log(`Galera... O ${amigoPerdido} está na posição ${contagem}, corre lá!`)
    } contagem++
}
