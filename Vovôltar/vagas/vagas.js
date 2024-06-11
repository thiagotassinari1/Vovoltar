let formularioVaga = document.getElementById('formulario_vagas');

let criarVaga = document.getElementById('criar_vaga').addEventListener('click', function(event) {
    formularioVaga.style.display = 'flex';
});

let cancelarVaga = document.getElementById('cancelar_vaga').addEventListener('click', function(event) {
    formularioVaga.style.display = 'none';
    window.location.reload();
});