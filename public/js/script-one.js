// Obtener el botón de submit
let submitButton = document.getElementById("submit-button");

// Agregar un event listener al botón de submit
submitButton.addEventListener("click", function (event) {
    // Evitar que el formulario se envíe automáticamente
    event.preventDefault();

    // Obtener los valores de los inputs
    let name = document.getElementById("name").value;
    let price = document.getElementById("price").value;
    let category = document.getElementById("category").value;

    // Verificar si ya hay datos guardados en el localstorage
    let storedData = JSON.parse(localStorage.getItem("form_data"));

    // Si no hay datos guardados, inicializar un array vacío
    if (!storedData) {
        storedData = [];
    }

    // Agregar un nuevo objeto con los valores al array
    storedData.push({ name: name, price: price, category: category });

    // Guardar todo el array en el localstorage
    localStorage.setItem("form_data", JSON.stringify(storedData));

    // Borrar los valores de los inputs
    document.getElementById("name").value = "";
    document.getElementById("price").value = "";
    document.getElementById("category").value = "";
    
    
// Mostrar los datos en la consola
console.log(storedData);


});





document.getElementById("submit-button").addEventListener("click", function () {
  window.location.href = "index.html"; }) 


