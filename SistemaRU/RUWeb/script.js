function mostrarInformacoes(tipo) {
    var informacoes = document.getElementById('informacoes');

    // Limpa o conteúdo anterior, se houver
    informacoes.innerHTML = '';

    // Cria a nova caixa de informações
    var novaCaixa = document.createElement('div');
    novaCaixa.classList.add('caixa-informacoes');

    // Adiciona as informações correspondentes ao tipo selecionado
    if (tipo === 'estoque') {
        novaCaixa.textContent = 'Informações sobre estoque';
    } else if (tipo === 'funcao') {
        novaCaixa.textContent = 'Informações sobre função';
    } else if (tipo === 'funcionarios') {
        novaCaixa.textContent = 'Informações sobre funcionários';
    } else if (tipo === 'refeicao') {
        novaCaixa.textContent = 'Informações sobre refeição';
    } else if (tipo === 'pedido') {
        novaCaixa.textContent = 'Informações sobre pedido';
    } else if (tipo === 'financeiro') {
        novaCaixa.textContent = 'Informações sobre financeiro';
    } else if (tipo === 'fornecedores') {
        novaCaixa.textContent = 'Informações sobre fornecedores';
    }
    // Adicione mais casos conforme necessário

    // Adiciona a nova caixa de informações à div de informações
    informacoes.appendChild(novaCaixa);

    // Exibe a nova caixa de informações
    informacoes.style.display = 'block';

    // Remove a classe ativo de todos os itens do menu
    var itensMenu = document.querySelectorAll('.menu a');
    itensMenu.forEach(function(item) {
        item.classList.remove('ativo');
    });

    // Adiciona a classe ativo ao item do menu clicado
    var itemClicado = document.querySelector('.menu a[href="#"][onclick*="' + tipo + '"]');
    itemClicado.classList.add('ativo');
}




