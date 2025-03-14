let linhas = ''
const nomes = []
const numerosDeTelefones =[]



const form = document.getElementById ('form-cadastro')
form.addEventListener ('submit', function(e) {
    e.preventDefault ();

    adicionaLinha ()
})

function adicionaLinha () {

    const nomeCompleto =document.getElementById ('nome-completo')
    const telefone = document.getElementById ('telefone-contato')

    if (nomes.includes(nomeCompleto.value)){
        alert (`O nome: ${nomeCompleto.value} ja foi inserida`)
    }
    else if ( numerosDeTelefones.includes(telefone.value)){
        alert(`O número de telefone: ${telefone.value} ja foi inserido`)}
    else {
    nomes.push (nomeCompleto.value)
    numerosDeTelefones.push (telefone.value)

    let linha = ('<tr>')
    linha += (`<td> ${nomeCompleto.value}</td>`)
    linha += (`<td> ${telefone.value}</td>`)
    linha += ('</tr>')
    linhas += linha

    nomeCompleto.value = ''
    telefone.value = ''

    const corpoDaTabela = document.querySelector('tbody')
    corpoDaTabela.innerHTML = linhas
}
}