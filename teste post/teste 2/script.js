document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var date = document.getElementById('date').value;
    var address = document.getElementById('address').value;
    var quantity = document.getElementById('quantity').value;
  
    var outputDiv = document.getElementById('output');
    var cardHTML = `
      <div class="card">
        <h2>Information</h2>
        <p>Name: ${name}</p>
        <p>Email: ${email}</p>
        <p>Date: ${date}</p>
        <p>Address: ${address}</p>
        <p>Quantity: ${quantity}</p>
      </div>
    `;
    outputDiv.innerHTML = cardHTML;
  });