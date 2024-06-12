let formularioVaga = document.getElementById('formulario_vagas');

// abrir formulário
let criarVaga = document.getElementById('criar_vaga').addEventListener('click', function(event) {
    formularioVaga.style.display = 'flex';
});

// fechar formulário
let cancelarVaga = document.getElementById('cancelar_vaga').addEventListener('click', function(event) {
    formularioVaga.style.display = 'none';
    formularioVaga.reset()
});

// publicar vaga
let publicarVaga = document.getElementById('publicar_vaga');

publicarVaga.onclick = async function() {

    let area = document.getElementById('area_atuacao').value;
    let email_empresa = document.getElementById('email').value;
    let cidade = document.getElementById('cidade').value;
    let estado = document.getElementById('estado').value;
    let qtd_vagas = document.getElementById('qtd_vagas').value;

    if (!area || !email_empresa || !cidade || !estado || !qtd_vagas) {
        alert('Preencha todos os campos para publicar sua vaga!')
    } else {
        let data = {area,email_empresa,cidade,estado,qtd_vagas}

        const response = await fetch('http://localhost:3001/api/store/vaga', {
            method: 'POST',
            headers: {'Content-type': 'application/json;charset=UTF-8'},
            body: JSON.stringify(data)
        });
    
        let content = await response.json();
    
        if(content.success) {
            alert('Sucesso!');

            // Criando o novo card
            let cardVaga = document.createElement('div');
            cardVaga.className = 'card_vaga';

            let colunasCard = document.createElement('div');
            colunasCard.className = 'colunasCard_vaga'

            let infosVaga = document.createElement('div');
            infosVaga.className = 'infos_vaga';

            // Adicionando conteúdo ao card
            infosVaga.innerHTML = `
                <h3>${area}</h3>
                <p><b>Email:</b> ${email_empresa}</p>
                <p><b>Cidade:</b> ${cidade}</p>
                <p><b>Estado:</b> ${estado}</p>
                <p><b>Quantidade de Vagas:</b> ${qtd_vagas}</p>
            `;

            // criando coluna para os botoes
            let botoesVaga = document.createElement('div');
            botoesVaga.className = 'botoes_vaga';

            // Criando botão pra config do card da vaga
            let botaoCardVaga = document.createElement('div');
            botaoCardVaga.className = 'info_vaga'
            botaoCardVaga.innerHTML = 'Mais informações'
            botoesVaga.appendChild(botaoCardVaga);

            // aidicionando as colunas ao card
            colunasCard.appendChild(infosVaga);
            colunasCard.appendChild(botoesVaga);
            cardVaga.appendChild(colunasCard);

            // adicionando o card na section de vagas
            document.querySelector('.vagas').appendChild(cardVaga);

            // Ocultando o formulário e resetando os campos
            formularioVaga.style.display = 'none';
            formularioVaga.reset();
        } else {
            alert('Algo deu errado, tente novamente!');
        }
    }
};
