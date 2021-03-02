function adicionaTarefa() {
        let minhaLista = document.getElementById("dias-semana").value
        let meuInput = document.getElementById("tarefa").value
        
        document.getElementById(minhaLista).innerHTML += meuInput
        document.getElementById("tarefa").value = ""
        
}
        
