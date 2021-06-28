const productsJson = `
[
    {
        "id" : "1",
        "title": "Medium",
        "description": "MEDIUM ROAST COFFEE",
        "price": 16.00,
        "imgUrl": "img/medium.png"
    },
    {
        "id" : "2",
        "title": "Dark",
        "description": "DARK ROAST COFFEE",
        "price": 18.00,
        "imgUrl": "img/dark.png" 
    },
    {
        "id" : "3",
        "title": "Decaf",
        "description": "DECAF COFFEE",
        "price": 20.00,
        "imgUrl": "img/decaf.png" 
    }
]
`;

function renderProducts(products, sortDirection) {
  const sortedProducts = [...products].sort((a, b) =>
    sortDirection === "ascending" ? a.price - b.price : b.price - a.price
  );
  let productsHtml = "";
  for (const product of sortedProducts) {
    productsHtml += `
            <article>
                <img src="${product.imgUrl}" class="products-img" alt="${product.title}" />
                <h3>${product.title}</h3>
                <p>${product.description}</p>
                <div class="buttons">
                    <button class="button card-button">Info</button>
                    <button class="button card-button">Buy - $${product.price}</button>
                </div>
        </article>`;
  }
  document.querySelector(".products").innerHTML = productsHtml;
}

const products = JSON.parse(productsJson);

renderProducts(products, "ascending");

const btnSortAsc = document.querySelector(".sort-asc");
const btnSortDesc = document.querySelector(".sort-desc");

btnSortAsc.addEventListener("click", sortAscending);
btnSortDesc.addEventListener("click", sortDescending);

function sortAscending() {
  renderProducts(products, "ascending");
}

function sortDescending() {
  renderProducts(products, "descending");
}