// Array para armazenar os dados dos cards
let cardsData = [];

// Função para abrir o formulário preenchido com os dados do card selecionado para edição
function openEditForm(index) {
  if (index >= 0) {
    // Obtém os dados do card com base no índice fornecido
    var cardData = cardsData[index];
    // Preenche o formulário com os dados do card
    document.getElementById("cardIndex").value = index;
    document.getElementById("name").value = cardData.name;
    document.getElementById("email").value = cardData.email;
    document.getElementById("address").value = cardData.address;
    document.getElementById("quantity").value = cardData.quantity;
  } else {
    // Limpa o índice do card e reseta o formulário
    document.getElementById("cardIndex").value = "";
    document.getElementById("myForm").reset();
  }
  // Exibe o formulário
  document.getElementById("formContainer").style.display = "block";
}

// Event listener para abrir o formulário ao clicar no botão "Abrir Formulário"
document.getElementById("openForm").addEventListener("click", function() {
  openEditForm(-1); // Chama a função para abrir o formulário para adicionar um novo card
});

// Event listener para fechar o formulário ao clicar no botão "Fechar"
document.getElementById("closeForm").addEventListener("click", function() {
  // Oculta o formulário
  document.getElementById("formContainer").style.display = "none";
});

// Event listener para lidar com o envio do formulário
document.getElementById("myForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Previne o comportamento padrão do formulário
  
  // Obtém os valores dos campos do formulário
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var address = document.getElementById("address").value;
  var quantity = document.getElementById("quantity").value;
  var image = document.getElementById("image").files[0]; // Obtém o arquivo de imagem selecionado
  
  // Obtém o índice do card a ser editado ou -1 para adicionar um novo card
  var cardIndex = document.getElementById("cardIndex").value;
  
  if (cardIndex === "") { // Adicionar novo card
    // Cria um novo elemento div para representar o card
    var card = document.createElement("div");
    card.classList.add("card");
    
    // Cria um novo elemento div para representar as informações do card
    var info = document.createElement("div");
    info.innerHTML = "<p><strong>Nome:</strong> " + name + "</p>" +
                     "<p><strong>Email:</strong> " + email + "</p>" +
                     "<p><strong>Endereço:</strong> " + address + "</p>" +
                     "<p><strong>Quantidade:</strong> " + quantity + "</p>";
    card.appendChild(info);
    
    // Adiciona uma imagem ao card, se disponível
    if (image) {
      var reader = new FileReader();
      reader.onload = function(e) {
        var imgElement = document.createElement("img");
        imgElement.src = e.target.result;
        card.insertBefore(imgElement, info); // Insere a imagem antes das informações
      };
      reader.readAsDataURL(image); // Converte o arquivo de imagem em base64
    }
    
    // Cria botões de editar e excluir para o card
    var editButton = document.createElement("button");
    editButton.innerText = "Editar";
    editButton.addEventListener("click", function() {
      // Encontra o índice do card clicado e abre o formulário para edição
      var index = Array.from(document.querySelectorAll(".card")).indexOf(card);
      openEditForm(index);
    });
    card.appendChild(editButton);
    
    var deleteButton = document.createElement("button");
    deleteButton.innerText = "Excluir";
    deleteButton.addEventListener("click", function() {
      // Remove o card do DOM
      card.remove();
    });
    card.appendChild(deleteButton);
    
    // Adiciona o card ao contêiner de cards
    document.getElementById("cardContainer").appendChild(card);
    
    // Adiciona os dados do card ao array de cardsData
    cardsData.push({
      name: name,
      email: email,
      address: address,
      quantity: quantity
    });
  } else { // Editar card existente
    // Obtém os dados do card a ser editado
    var cardData = cardsData[cardIndex];
    var card = document.querySelector(".card:nth-child(" + (parseInt(cardIndex) + 1) + ")");
    
    // Atualiza as informações do card com os novos valores do formulário
    var info = card.querySelector("div");
    info.innerHTML = "<p><strong>Nome:</strong> " + name + "</p>" +
                     "<p><strong>Email:</strong> " + email + "</p>" +
                     "<p><strong>Endereço:</strong> " + address + "</p>" +
                     "<p><strong>Quantidade:</strong> " + quantity + "</p>";
    
    // Atualiza a imagem do card, se disponível
    if (image) {
      var reader = new FileReader();
      reader.onload = function(e) {
        var imgElement = card.querySelector("img");
        if (!imgElement) {
          imgElement = document.createElement("img");
          card.insertBefore(imgElement, info); // Insere a imagem antes das informações
        }
        imgElement.src = e.target.result;
      };
      reader.readAsDataURL(image); // Converte o arquivo de imagem em base64
    }
    
    // Atualiza os dados do card no array de cardsData
    cardData.name = name;
    cardData.email = email;
    cardData.address = address;
    cardData.quantity = quantity;
  }
  
  // Limpa os campos do formulário após enviar
  document.getElementById("myForm").reset();
  // Oculta o formulário
  document.getElementById("formContainer").style.display = "none";
});
