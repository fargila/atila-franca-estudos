const padronizarNome = (texto) => {
    let textoNormalizado = texto.normalize('NFD')
    let textoSemAcento = textoNormalizado.replace(/[\u0300-\u036f]/g, '')
    return textoSemAcento.toLowerCase()
}

const ol = document.querySelector('ol')

let userName = prompt("Digite seu nome: ")
let lugares = []
let menu

while(!userName){
    userName = prompt("Digite seu nome: ")
    if(!userName){
        alert('Nome inválido!')
    }
    break
}

do {
    menu = prompt(`Olá, ${userName}!\n\nEscolha uma das opções:\n1-Adicionar um lugar que visitou na lista;`
        + `\n2-Remover um lugar da lista;\n3-Listar todos os lugares visitados;`
        + `\n4-Listar lugares visitados no documento;\n5-Sair do menu;`)

    switch (menu) {
        case "1":
            let re1 = prompt("Quer mesmo adicionar um item à lista?")
            if (re1.toLocaleLowerCase() === 'sim' || re1.toLocaleLowerCase() === 's') {
                let op1 = prompt("Qual lugar você visitou?")
                let lugarPadronizado = padronizarNome(op1)
                if (lugares.includes(lugarPadronizado)) {
                    alert("Esse lugar já está incluso na lista!")
                } else {
                    lugares.push(lugarPadronizado)
                }
            }
            break

        case "2":
            let re2 = prompt("Quer mesmo remover um item da lista?")
            if (re2.toLocaleLowerCase() === 'sim' || re2.toLocaleLowerCase() === 's') {
                let op2 = prompt("Qual lugar você quer remover?")
                let lugarPadronizado = padronizarNome(op2)
                const index = lugares.indexOf(lugarPadronizado)
                if (index > -1) {
                    lugares.splice(index, 1)
                } else {
                    alert("Não há esse lugar na lista!")
                }
            }
            break

        case "3":
            if (lugares.length === 0) {
                alert("Você não adicionou nenhum lugar na lista!")
            } else {
                alert(lugares.join(', '))
            }
            break

        case "4":
            if (lugares.length < 1) {
                alert("Você não adicionou nenhum lugar na lista!")
            } else {
                ol.innerHTML = ''
                for (let i = 0; i < lugares.length; i++) {
                    ol.innerHTML += `<li>${i + 1}º lugar da lista: ${lugares[i]};<li>`
                }
                menu = "5"
            }
            break

        case "5":
            // Sair do menu
            break

        default:
            alert("Selecione um valor dentro das opções! [1, 2, 3, 4 ou 5]")
    }

} while (menu !== "5")
