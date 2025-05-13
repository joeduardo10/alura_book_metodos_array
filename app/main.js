
let livros = []
const endpointDaAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'
getBuscarLivrosDaAPI()

async function getBuscarLivrosDaAPI() {
    const res = await fetch(endpointDaAPI)
    livros = await res.json()
    // livros = aplicarDesconto(livros)   //aplica desconto de .30
    // exibirOsLivrosNaTela(livrosComDesconto) //exibe livros co desconto
    exibirOsLivrosNaTela(livros)
}
