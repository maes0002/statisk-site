document.addEventListener("DOMContentLoaded", () => {
  let productId = 1163;
  let productContainer = document.querySelector(".productContainer");

  if (!productContainer) {
    console.error("Elementet med klassen 'productContainer' findes ikke i DOM'en.");
    return; // Stop udførelsen, hvis elementet ikke findes
  }

  fetch(`https://kea-alt-del.dk/t7/api/products/${productId}`)
    .then((response) => response.json())
    .then((data) => {
      productContainer.innerHTML = `

          <main class="productContainer">
            <div class="product_container">
              <div>
                <img src="https://kea-alt-del.dk/t7/images/webp/640/${productId}.webp" alt="Snesko" />
              </div>
  
              <div class="information_container">
                <div class="sold_out">
                  <h1>${data.soldout ? "Sold Out" : "Available"}</h1>
                </div> 
                <div class="discount">
                  <h1>${data.discount}%</h1>
                </div>
             
                <div class="information">
                  <h1>${data.brandname} ${data.productdisplayname}</h1>
                  <h2>${data.price} DKK</h2>
                </div>
           
                <div class="product_details">
               
                 <p>${data.gender}</p>
                  <p>${data.subcategory}</p>
                  <p>${data.articletype}</p>
                  <p>${data.usagetype}</p>
                </div>
                  <div class="cta_index">
                    <a class="cta_index" href="">ADD TO BASKET</a>
                  </div>
                </div> 
              </div>
            </div>
          </main>
        `;
    });
});
