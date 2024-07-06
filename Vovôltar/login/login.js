let logarButton = document.getElementById('entrar_login');

logarButton.onclick = async function (e) {
    e.preventDefault();

    let email = document.getElementById('email').value;
    let senha = document.getElementById('senha').value;

    let data = { email, senha };

    const response = await fetch('http://localhost:3001/api/post/login', {
        method: "POST",
        headers: { "Content-type": "application/json;charset=UTF-8" },
        body: JSON.stringify(data)
    });

    let content = await response.json();
    console.log(content);

    if (content.success) {
        alert('Sucesso no login!');
        window.location.href = '../home/home.html'
    } else {
        alert('Erro no login, tente novamente!');
    }
};