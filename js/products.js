function showData(dataArray) {
    const productContainer = document.querySelector(".row.row-cols-1.row-cols-md-2.g-4");
    productContainer.innerHTML = ''; // Limpia el contenedor antes de añadir nuevas tarjetas

    dataArray.forEach(product => {
        const productCard = `
            <div class="col">
                <div class="card">
                   <div class="imagen-precios position-relative"> 
                       <img src="${product.image}" class="card-img-top" alt="${product.name}">
                       <div class="precios-vendidos mask text-light d-flex justify-content-center flex-column text-center" style="background-color: rgba(0, 0, 0, 0.5);"> 
                           <p class="card-text">Precio: ${product.currency} ${product.cost}</p>
                           <p class="card-text">Vendidos: ${product.soldCount}</p>
                       </div>
                   </div>
                   <div class="card-body">
                       <h5 class="card-title">${product.name}</h5>
                       <p class="card-text">${product.description}</p>
                   </div>
                </div>
            </div>
        `;
        productContainer.innerHTML += productCard;
    });
}

document.addEventListener("DOMContentLoaded", () => {
    const apiUrl = "https://japceibal.github.io/emercado-api/cats_products/101.json";
    
    getJSONData(apiUrl).then(result => {
        if (result.status === 'ok') {
            showData(result.data.products);
        } else {
            console.error("Error al cargar el producto:", result.data);
        }
    });
});
