constproductsJson = 
[
    {
        "ia" : "1",
        "title": "Medium",
        "discription": "MEDIUM ROAST COFFEE",
        "imgUrl": "img/medium.jpg"
    },
    {
        "ia" : "2",
        "title": "Dark",
        "discription": "DARK ROAST COFFEE",
        "imgUrl": "img/dark.jpg" 
    },
    {
        "ia" : "3",
        "title": "Decaf",
        "discription": "DECAF COFFEE",
        "imgUrl": "img/decaf.jpg" 
    }
]
;
renderProducts (products) {
    let productsHtml = '';
    for(const product of products) {
        products += <article>
        <img src="img/medium.png" width="200" class="photo" alt="Medium" />
  <h3><b>MEDIUM ROAST COFFEE</b></h3>
  <p>Arabica & Robusta</p>
  <div class="buttons">
    <button class="button card-button">Shop now</button>
            </div>
            </article>
            
}