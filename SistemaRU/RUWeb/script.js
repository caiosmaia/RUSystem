// Função para mostrar as informações de acordo com o tipo selecionado
function mostrarInformacoes(tipo) {
    var informacoes = document.getElementById('informacoes');
    var caixaPesquisa = document.querySelector('.caixa-pesquisa');

    // Se a caixa de pesquisa existir, a remove
    if (caixaPesquisa) {
        caixaPesquisa.remove();
    }

    // Remove a classe ativo de todos os itens do menu
    var itensMenu = document.querySelectorAll('.menu a');
    itensMenu.forEach(function(item) {
        item.classList.remove('ativo');
    });

    // Adiciona a classe ativo ao item do menu clicado
    var itemClicado = document.querySelector('.menu a[href="#"][onclick*="' + tipo + '"]');
    itemClicado.classList.add('ativo');

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

    // Remove qualquer caixa de informações anterior
    informacoes.innerHTML = '';

    // Adiciona a nova caixa de informações à div de informações
    informacoes.appendChild(novaCaixa);

    // Exibe a nova caixa de informações
    informacoes.style.display = 'block';

    // Verifica se o tipo selecionado é "estoque"
    if (tipo === 'estoque') {
        // Cria a caixa de pesquisa
        var caixaPesquisa = document.createElement('div');
        caixaPesquisa.classList.add('caixa-pesquisa');

        var inputPesquisa = document.createElement('input');
        inputPesquisa.type = 'text';
        inputPesquisa.placeholder = 'Buscar:';
        caixaPesquisa.appendChild(inputPesquisa);

        var botaoPesquisar = document.createElement('button');
        botaoPesquisar.textContent = 'Pesquisar';
        botaoPesquisar.classList.add('botao-pesquisar');
        caixaPesquisa.appendChild(botaoPesquisar);

        // Posiciona a caixa de pesquisa acima da caixa de informações, mas fora dela
        caixaPesquisa.style.top = (document.querySelector('.menu-container').offsetTop - 50) + 'px'; // 50px de margem
        caixaPesquisa.style.left = informacoes.offsetLeft + 'px'; // Mesma posição horizontal da caixa de informações

        // Adiciona a caixa de pesquisa ao body
        document.body.appendChild(caixaPesquisa);

        // Cria o botão de cadastro para produtos no estoque
        var botaoCadastrarEstoque = document.createElement('button'); // Novo botão
        botaoCadastrarEstoque.textContent = 'Cadastrar'; // Texto "Cadastrar Produto"
        botaoCadastrarEstoque.classList.add('botao-cadastrar'); // Classe para estilização
        caixaPesquisa.appendChild(botaoCadastrarEstoque); // Adiciona o botão ao elemento

        // Adiciona um manipulador de eventos ao botão de cadastro de produtos no estoque
        botaoCadastrarEstoque.addEventListener('click', function() {
            abrirFormularioEstoque();
        });
        
    } else if (tipo === 'funcionarios') {
        // Cria a caixa de pesquisa
        var caixaPesquisa = document.createElement('div');
        caixaPesquisa.classList.add('caixa-pesquisa');
    
        var botoesContainer = document.createElement('div');
        botoesContainer.classList.add('botoes-container');

        var inputPesquisa = document.createElement('input');
        inputPesquisa.type = 'text';
        inputPesquisa.placeholder = 'Buscar:';
        caixaPesquisa.appendChild(inputPesquisa);
    
        var botaoPesquisar = document.createElement('button');
        botaoPesquisar.textContent = 'Pesquisar';
        botaoPesquisar.classList.add('botao-pesquisar');
        caixaPesquisa.appendChild(botaoPesquisar);
    
        var botaoCadastrar = document.createElement('button'); // Novo botão
        botaoCadastrar.textContent = 'Cadastrar'; // Texto "Cadastrar"
        botaoCadastrar.classList.add('botao-cadastrar'); // Classe para estilização
        caixaPesquisa.appendChild(botaoCadastrar); // Adiciona o botão ao elemento
    
        // Posiciona a caixa de pesquisa acima da caixa de informações, mas fora dela
        caixaPesquisa.style.top = (document.querySelector('.menu-container').offsetTop - 50) + 'px'; // 50px de margem
        caixaPesquisa.style.left = informacoes.offsetLeft + 'px'; // Mesma posição horizontal da caixa de informações
    
        // Adiciona a caixa de pesquisa ao body
        document.body.appendChild(caixaPesquisa);
        
        // Adiciona um manipulador de eventos ao botão de cadastro
        botaoCadastrar.addEventListener('click', function() {
            abrirFormulario();
        });
    } else if (tipo === 'fornecedores') {
        // Crie a caixa de pesquisa
        var caixaPesquisa = document.createElement('div');
        caixaPesquisa.classList.add('caixa-pesquisa');
    
        var botoesContainer = document.createElement('div');
        botoesContainer.classList.add('botoes-container');
    
        var inputPesquisa = document.createElement('input');
        inputPesquisa.type = 'text';
        inputPesquisa.placeholder = 'Buscar:';
        caixaPesquisa.appendChild(inputPesquisa);
    
        var botaoPesquisar = document.createElement('button');
        botaoPesquisar.textContent = 'Pesquisar';
        botaoPesquisar.classList.add('botao-pesquisar');
        caixaPesquisa.appendChild(botaoPesquisar);
    
        var botaoCadastrar = document.createElement('button');
        botaoCadastrar.textContent = 'Cadastrar';
        botaoCadastrar.classList.add('botao-cadastrar');
        caixaPesquisa.appendChild(botaoCadastrar);
    
        // Posicione a caixa de pesquisa acima da caixa de informações, mas fora dela
        caixaPesquisa.style.top = (document.querySelector('.menu-container').offsetTop - 50) + 'px'; // 50px de margem
        caixaPesquisa.style.left = informacoes.offsetLeft + 'px'; // Mesma posição horizontal da caixa de informações
    
        // Adicione a caixa de pesquisa ao body
        document.body.appendChild(caixaPesquisa);
    
        // Adicione um manipulador de eventos ao botão de cadastro
        botaoCadastrar.addEventListener('click', function() {
            abrirFormularioFornecedor();
        });
    } else if (tipo === 'funcao') {
        // Crie a caixa de pesquisa
        var caixaPesquisa = document.createElement('div');
        caixaPesquisa.classList.add('caixa-pesquisa');
    
        var botoesContainer = document.createElement('div');
        botoesContainer.classList.add('botoes-container');
    
        var inputPesquisa = document.createElement('input');
        inputPesquisa.type = 'text';
        inputPesquisa.placeholder = 'Buscar:';
        caixaPesquisa.appendChild(inputPesquisa);
    
        var botaoPesquisar = document.createElement('button');
        botaoPesquisar.textContent = 'Pesquisar';
        botaoPesquisar.classList.add('botao-pesquisar');
        caixaPesquisa.appendChild(botaoPesquisar);
    
        var botaoCadastrar = document.createElement('button');
        botaoCadastrar.textContent = 'Cadastrar';
        botaoCadastrar.classList.add('botao-cadastrar');
        caixaPesquisa.appendChild(botaoCadastrar);
    
        // Posicione a caixa de pesquisa acima da caixa de informações, mas fora dela
        caixaPesquisa.style.top = (document.querySelector('.menu-container').offsetTop - 50) + 'px'; // 50px de margem
        caixaPesquisa.style.left = informacoes.offsetLeft + 'px'; // Mesma posição horizontal da caixa de informações
    
        // Adicione a caixa de pesquisa ao body
        document.body.appendChild(caixaPesquisa);
    
        // Adicione um manipulador de eventos ao botão de cadastro
        botaoCadastrar.addEventListener('click', function() {
            abrirFormularioFuncao();
        });
    } else if (tipo === 'refeicao') {
        // Crie a caixa de pesquisa
        var caixaPesquisa = document.createElement('div');
        caixaPesquisa.classList.add('caixa-pesquisa');
    
        var botoesContainer = document.createElement('div');
        botoesContainer.classList.add('botoes-container');
    
        var inputPesquisa = document.createElement('input');
        inputPesquisa.type = 'text';
        inputPesquisa.placeholder = 'Buscar:';
        caixaPesquisa.appendChild(inputPesquisa);
    
        var botaoPesquisar = document.createElement('button');
        botaoPesquisar.textContent = 'Pesquisar';
        botaoPesquisar.classList.add('botao-pesquisar');
        caixaPesquisa.appendChild(botaoPesquisar);
    
        var botaoCadastrar = document.createElement('button');
        botaoCadastrar.textContent = 'Cadastrar';
        botaoCadastrar.classList.add('botao-cadastrar');
        caixaPesquisa.appendChild(botaoCadastrar);
    
        // Posicione a caixa de pesquisa acima da caixa de informações, mas fora dela
        caixaPesquisa.style.top = (document.querySelector('.menu-container').offsetTop - 50) + 'px'; // 50px de margem
        caixaPesquisa.style.left = informacoes.offsetLeft + 'px'; // Mesma posição horizontal da caixa de informações
    
        // Adicione a caixa de pesquisa ao body
        document.body.appendChild(caixaPesquisa);
    
        // Adicione um manipulador de eventos ao botão de cadastro
        botaoCadastrar.addEventListener('click', function() {
            abrirFormularioRefeicao();
        });
    } else if (tipo === 'pedido') {
        // Crie a caixa de pesquisa
        var caixaPesquisa = document.createElement('div');
        caixaPesquisa.classList.add('caixa-pesquisa');
    
        var botoesContainer = document.createElement('div');
        botoesContainer.classList.add('botoes-container');
    
        var inputPesquisa = document.createElement('input');
        inputPesquisa.type = 'text';
        inputPesquisa.placeholder = 'Buscar:';
        caixaPesquisa.appendChild(inputPesquisa);
    
        var botaoPesquisar = document.createElement('button');
        botaoPesquisar.textContent = 'Pesquisar';
        botaoPesquisar.classList.add('botao-pesquisar');
        caixaPesquisa.appendChild(botaoPesquisar);
    
        var botaoCadastrar = document.createElement('button');
        botaoCadastrar.textContent = 'Novo';
        botaoCadastrar.classList.add('botao-cadastrar');
        caixaPesquisa.appendChild(botaoCadastrar);
    
        // Posicione a caixa de pesquisa acima da caixa de informações, mas fora dela
        caixaPesquisa.style.top = (document.querySelector('.menu-container').offsetTop - 50) + 'px'; // 50px de margem
        caixaPesquisa.style.left = informacoes.offsetLeft + 'px'; // Mesma posição horizontal da caixa de informações
    
        // Adicione a caixa de pesquisa ao body
        document.body.appendChild(caixaPesquisa);
    
        // Adicione um manipulador de eventos ao botão de cadastro
        botaoCadastrar.addEventListener('click', function() {
            abrirFormularioPedido();
        });
    } else if (tipo === 'financeiro') {
        // Crie a caixa de pesquisa
        var caixaPesquisa = document.createElement('div');
        caixaPesquisa.classList.add('caixa-pesquisa');
    
        var botoesContainer = document.createElement('div');
        botoesContainer.classList.add('botoes-container');
    
        var inputPesquisa = document.createElement('input');
        inputPesquisa.type = 'text';
        inputPesquisa.placeholder = 'Buscar:';
        caixaPesquisa.appendChild(inputPesquisa);
    
        var botaoPesquisar = document.createElement('button');
        botaoPesquisar.textContent = 'Filtrar';
        botaoPesquisar.classList.add('botao-pesquisar');
        caixaPesquisa.appendChild(botaoPesquisar);
    
        var botaoCadastrar = document.createElement('button');
        botaoCadastrar.textContent = 'Adicionar';
        botaoCadastrar.classList.add('botao-cadastrar');
        caixaPesquisa.appendChild(botaoCadastrar);
    
        // Posicione a caixa de pesquisa acima da caixa de informações, mas fora dela
        caixaPesquisa.style.top = (document.querySelector('.menu-container').offsetTop - 50) + 'px'; // 50px de margem
        caixaPesquisa.style.left = informacoes.offsetLeft + 'px'; // Mesma posição horizontal da caixa de informações
    
        // Adicione a caixa de pesquisa ao body
        document.body.appendChild(caixaPesquisa);
    
        // Adicione um manipulador de eventos ao botão de cadastro
        botaoCadastrar.addEventListener('click', function() {
            abrirFormularioFinanceiro();
        });
    }
}

// Função para abrir o formulário de cadastro de produtos no estoque
function abrirFormularioEstoque() {
    var overlay = document.getElementById('overlayProduto'); // Alterado para overlayProduto
    overlay.style.display = 'block';
}

// Função para fechar o formulário de cadastro
function fecharFormularioEstoque() {
    var overlay = document.getElementById('overlayProduto');
    overlay.style.display = 'none';
}
// Função para abrir o formulário de cadastro
function abrirFormulario() {
    var overlay = document.getElementById('overlayFuncionario');
    overlay.style.display = 'block';
}

// Função para fechar o formulário de cadastro
function fecharFormulario() {
    var overlay = document.getElementById('overlayFuncionario');
    overlay.style.display = 'none';
}

function abrirFormularioFornecedor() {
    var overlay = document.getElementById('overlayFornecedor');
    overlay.style.display = 'block';
}

function fecharFormularioFornecedor() {
    var overlay = document.getElementById('overlayFornecedor');
    overlay.style.display = 'none';
}

function abrirFormularioFuncao() {
    var overlay = document.getElementById('overlayFuncao');
    overlay.style.display = 'block';
}

function fecharFormularioFuncao() {
    var overlay = document.getElementById('overlayFuncao');
    overlay.style.display = 'none';
}

function abrirFormularioRefeicao() {
    var overlay = document.getElementById('overlayRefeicao');
    overlay.style.display = 'block';
}

function fecharFormularioRefeicao() {
    var overlay = document.getElementById('overlayRefeicao');
    overlay.style.display = 'none';
}

function abrirFormularioPedido() {
    var overlay = document.getElementById('overlayPedido');
    overlay.style.display = 'block';
}

function fecharFormularioPedido() {
    var overlay = document.getElementById('overlayPedido');
    overlay.style.display = 'none';
}

function abrirFormularioFinanceiro() {
    var overlay = document.getElementById('overlayFinanceiro');
    overlay.style.display = 'block';
}

function fecharFormularioFinanceiro() {
    var overlay = document.getElementById('overlayFinanceiro');
    overlay.style.display = 'none';
}