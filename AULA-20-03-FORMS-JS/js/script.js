/*Const define a variavel como constante ( nao pode ser alterada, neste caso, nao0 pode trocar de elemento do html).

document.getElementById ('elementohtml') pega um elemento html pelo id ára ser programado no JS. */
const form = document.getElementById('formTarefa');
const input = document.getElementById('inputTarefa');
const lista = document.getElementById('ListaTarefas');

/*addEventListener adcionar uma "escuta" a um evento do elemento html.
'submit' e o evento que ocorre quando o formulario e enviado.
function(event) cria a funçao que sera executada quando o evento ocorrer.
event e a variavel que armazena as informaçoes do evento que ocorreu.*/

form.addEventListener('submit',function(event){
    // Evita que o formulario seja enviado e a pagina recarregada.*/
    event.preventDefault();

    // Armazena o valor do input na variavel//
    // trim() remove os espaços em branco do começo e do fim do texto

    const textoTarefa = input.value.trim();

    if(textoTarefa != ''){
        // cria um elemento html do li
        const li = document.createElement('li');
        // adiciona o texto do input no elemnto li
        li.textContent = textoTarefa;

        const botaoRemover = document.createElement('button');
        botaoRemover.textContent = 'chiuaua';
        // adiciona a classe remover ao botao criado
        botaoRemover.classList.add('remover');

        botaoRemover.addEventListener('click',function() {
            // remove o elemento li da lista se o botao for clicado
            lista.removeChild(li);
        });
        // adiciona o botão remover ao elemento li
        li.appendChild(botaoRemover);
        // adiciona o elemento li a lista de tarefas
        lista.appendChild(li);
        // limpa o valor do input

        input.value= '';
    }
});