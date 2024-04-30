// https://sweetalert2.github.io/#download

const button = document.querySelector('button');

button.addEventListener('click', function () {
    Swal.fire({
        title: "Deu certo!",
        // text: "fodase fodase.",
        imageUrl: "./5610944.png",
        imageWidth: 200,
        imageHeight: 200,
        imageAlt: "Custom image",
        // background: "black",
        confirmButtonColor: "green",
        customClass: {
            popup: 'box_popUp'
        }
        
      });
})