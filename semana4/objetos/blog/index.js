
const titulo = document.getElementById("titulo-post");
const autor = document.getElementById("autor-post");
const conteudo = document.getElementById("conteudo-post");

let arrayDeDados = []


const adicionaValor = () => {
   
   const dadosDoPost = {
        titulo1: titulo.value,
        autor1: autor.value,
        conteudo1: conteudo.value,
    }

    if(dadosDoPost.titulo1 !== "" && dadosDoPost.autor1 !== "" && dadosDoPost.conteudo1 !== ""){
        arrayDeDados.push(dadosDoPost);
        
    } else {
        alert("Preencha todos os dados!");
    }
        console.log(arrayDeDados);

    // colocar post 

    // 1. pegar container-de-posts
    const publicacao = document.getElementById("container-de-posts")
    // 2. pegar os dados do post e colocar dentro dele
    publicacao.innerHTML += `${dadosDoPost.value}`


}


   
    
   

