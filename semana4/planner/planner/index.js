function criaTarefa(){
    const minhaTarefa = document.getElementById("tarefa")
    const minhaSemana = document.getElementById("dias-semana").value
    const minhaLista = document.getElementById(minhaSemana)

   minhaLista.innerHTML += `<li>${minhaTarefa.value}</li>`
   minhaTarefa.value = ""
}