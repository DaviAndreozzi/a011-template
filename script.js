// const estudante = {
//     nome: 'Davi',
//     sobrenome: 'Andreozzi',
//     numeroDeMatricula: 4521102,
//     notasDoSemestre: [8, 9]
// }
// estudante.modulo = 'javascript'
// // estudante['modulo'] = 'javascript'

// console.log(estudante.nome, estudante.sobrenome)

// console.log(estudante['nome'])

// console.log(estudante.notasDoSemestre[1])

// console.log(estudante['notasDoSemestre'][1])

// console.log(estudante.modulo)

// // copiar o objeto e alterar as propriedades

// const novoEstudante = {
//     ...estudante,
//     nome: 'Astrodev',
//     notasDoSemestre: [...estudante.notasDoSemestre,10],
//     modulo: 'HTML'
// }
// console.log(novoEstudante)

// // const arrayEstudantesLabenu = [estudante, novoEstudante, {nome:'Pedrinho', graduação:'futebol'}, {nome:'joãozin'}, {graduação:'logista'}]

// const arrayEstudantesLabenu = [{...estudante}, {...novoEstudante}, {nome:'Pedrinho', graduação:'futebol'}, {nome:'joãozin'}, {graduação:'logista'}]
// console.log(arrayEstudantesLabenu)

const carrinho = {
    nome: 'Davi',
    formaDePagamento: 'credito',
    endereço: 'Rua larga, numero 200',
    compras: [{Produto: 'batata', preço: 3.50, Quantidade: 2,}, { Produto: 'Cenoura', preço: 4.50, Quantidade: 4}, {Produto: 'carré', preço: 12.00, Quantidade: 3} ]
    
}
carrinho.compras = [{Produto: 'batata', preço: 3.50, Quantidade: 2,}, { Produto: 'Cenoura', preço: 4.50, quantidade: 4}, {Produto: 'carré', preço: 12.00, Quantidade: 3} ]
//  criando demtrp de objetos 

console.log(carrinho)

console.log(carrinho.compras.length)

console.log(carrinho.compras[0].Quantidade)

const copiaCarrinhoPresente = {
    ...carrinho,
    nome: 'Juliana',
    formaDePagamento: 'Debito'
}

console.log(copiaCarrinhoPresente)
