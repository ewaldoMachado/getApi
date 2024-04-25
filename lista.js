// -*-*-*-*-*- Captura de elementos -*-*-*-*-*-
const btnLista = document.getElementById('btn-lista')

// -*-*-*-*-*- Funções -*-*-*-*-*-
function gerarLista(){
// -*-*-*-*-*- Requisição do tipo GET -*-*-*-*-*-
    fetch('https://lojafalsaapi.com/produtos?ordenar=dec&limit=20')
    .then((res)=>res.json())
    .then((data)=>{
        console.log(data)
        if(data){
            const lista = document.getElementById('lista')
            lista.innerHTML = `${data}`
        } else{
            return error
        }
    })
    .catch((error)=>{
        console.log(error)
        alert('Não foi possivel exibir a lista de produtos.')
    })
}
// -*-*-*-*-*- Eventos -*-*-*-*-*-
btnLista.addEventListener('click', gerarLista)