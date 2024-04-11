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

    // Adiciona a nova caixa de informações à div de informações
    informacoes.appendChild(novaCaixa);

    // Exibe a nova caixa de informações
    informacoes.style.display = 'block';
}
