const usuarios = [
    {
        nome: "paulo",
        idade: 17,
    },
    {
        nome: "Ana",
        idade: 18,
    },
    {
        nome: "Beatriz",
        idade: 15,
    },
    {
        nome: "Carlos",
        idade: 16,
    },
    {
        nome: "Antonio",
        idade: 32,
    },
    {
        nome: "Barbara",
        idade: 45
    }
]

let jovens = []
let adultos = []
cont1 = 0
cont2 = 0

for (let item of usuarios) {
    if (item.idade >= 18) {
        adultos[cont1] = item
        cont1++
    } else {
        jovens[cont2] = item
        cont2++
    }
}
console.log(jovens)
console.log(adultos)