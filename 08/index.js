const usuarios = [
    {
        nome: "João",
        pets: ["alfredo", "dobby"],
    },
    {
        nome: "Ana",
        pets: ["Pingo",],
    },
    {
        nome: "Beatriz",
        pets: ["Lessie"],
    },
    {
        nome: "Carlos",
        pets: ["Farofa", "Salsicha", "Batata"],
    },
    {
        nome: "Antonio",
        pets: ["Naninha"],
    },
]

for (let item = 0; item < usuarios.length; item++) {
    pessoa = usuarios[item].pets.length
    if (usuarios[item].pets.length < 1) {
        console.log(`Sou ${usuarios[item].nome} e não tenho pets`)
    } else if (usuarios[item].pets.length === 1) {
        console.log(`Sou ${usuarios[item].nome} e tenho 1 pet`)
    } else if (usuarios[item].pets.length >= 2) {
        let contagemPet = usuarios[item].pets.length
        console.log(`Sou ${usuarios[item].nome} e tenho ${contagemPet} pet's`)
    }
}