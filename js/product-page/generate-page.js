document.querySelector('head').innerHTML += `
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="icon" href="../img/shop/coffee-seeds-logo.webp">
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet">
  <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css"
      integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x"
      rel="stylesheet" crossorigin="anonymous">
  <link rel="stylesheet" href="../css/product_page.css">`;

document.querySelector('body').innerHTML += `
<header>
  <div>
    <a href="../index.html">
      <img src="../img/shop/coffee-seeds-logo.webp" alt="Coffee Kava Logo">
    </a>
    <button class="ham"><span class="menuIcon material-icons">menu</span>
    </button>
  </div>
  <div class="menu">
    <div>
      <a href="../index.html">
        <img src="../img/shop/coffee-seeds-logo.webp" alt="Coffee Kava Logo">
      </a>
      <button class="ham"><span class="xIcon material-icons">close</span>
      </button>
    </div>
    <nav>
      <a href="../index.html#about">About Us</a>
      <a href="../index.html#types-of-coffee">Types of Coffee</a>
      <a href="../index.html#store">Store</a>
      <a href="../index.html#testimonials">Testimonials</a>
      <a href="../index.html#contacts">Contact Us</a>
    </nav>
    <h1>Coffee Kava</h1>
    <a href="../index.html#store">
      <button class="btn btn-secondary">Buy COFFEE</button>
    </a>
  </div>
  <div class="container">
    <div>
      <a href="../index.html">
        <img src="../img/shop/coffee-seeds-logo.webp" alt="Coffee Kava Logo">
      </a>
      <h1>Coffee&nbspKava</h1>
    </div>
    <a href="../index.html#store">
      <button class="btn btn-secondary">Buy COFFEE</button>
    </a>
    <nav>
      <a href="../index.html#about">About Us</a>
      <a href="../index.html#types-of-coffee">Types of Coffee</a>
      <a href="../index.html#store">Store</a>
      <a href="../index.html#testimonials">Testimonials</a>
      <a href="../index.html#contacts">Contact Us</a>
    </nav>
  </div>
</header>
<main>
  <div class="container">
    <img class="product-img" src="" alt="">
    <div>
      <p id="stock"></p>
      <h2 class="second-name"></h2>
      <h2 class="first-name"></h2>
      <p id="price"></p>
      <form action="">
        <label for="quantity">Quantity</label>
        <input class="form-control" id="quantity" min="1" type="number">
        <button type="submit" class="btn btn-secondary">Add to cart</button>
      </form>
      <h3>DESCRIPTION</h3>
      <p id="description"></p>
    </div>
  </div>
  <div class="popup">
    <div>
      <h2 class="first-name"></h2>
      <button><span class="xPopup material-icons">close</span></button>
    </div>
    <img class="product-img" src="" alt="">
  </div>
</main>
<footer>
  <div>
    <a href="../index.html">
      <img src="../img/shop/coffee-seeds-logo.webp" alt="Koffee Kava">
    </a>
    <p>Coffee Production Company</p>
    <nav class="container">
      <a href="../index.html#about">About Us</a>
      <a href="../index.html#types-of-coffee">Types of Coffee</a>
      <a href="../index.html#store">Store</a>
      <a href="../index.html#testimonials">Testimonials</a>
      <a href="../index.html#contacts">Contact Us</a>
    </nav>
    <div>
      <a target="_blank" href="mailto:example@mail.com">
        <img src="../img/shop/media-icons/mail.svg" alt="mail">
        <img src="../img/shop/media-icons/mail_inverted.svg" alt="mail">
      </a>
      <a target="_blank" href="tel:+1234567890">
        <img src="../img/shop/media-icons/phone.svg" alt="phone">
        <img src="../img/shop/media-icons/phone_inverted.svg" alt="phone">
      </a>
      <a target="_blank" href="https://linkedin.com/">
        <img src="../img/shop/media-icons/li.svg" alt="LinkedIn">
        <img src="../img/shop/media-icons/li_inverted.svg" alt="LinkedIn">
      </a>
      <a target="_blank" href="https://facebook.com/">
        <img src="../img/shop/media-icons/fb.svg" alt="Facebook">
        <img src="../img/shop/media-icons/fb_inverted.svg"
             alt="Facebook">
      </a>
      <a target="_blank" href="https://youtube.com/">
        <img src="../img/shop/media-icons/yt.svg" alt="YouTube">
        <img src="../img/shop/media-icons/yt_inverted.svg"
             alt="YouTube">
      </a>
      <a target="_blank" href="https://pinterest.com/">
        <img src="../img/shop/media-icons/pinterest.svg" alt="Pinterest">
        <img src="../img/shop/media-icons/pinterest_inverted.svg"
             alt="Pinterest">
      </a>
    </div>
  </div>
  <div>
    <p>© Created by 604-team-1</p>
    <p>All rights Reserved</p>
  </div>
</footer>`;

fetch('../products.json')
  .then(response => response.json())
  .then(products => {
    for (const product of products) {
      if (product.id === document.querySelector('head title').textContent){
        document.querySelector('title').textContent = product.title;
        for (const img of document.querySelectorAll('.product-img')) {
          img.src = product.img;
          img.alt = product.title;
        }
        document.querySelector('.second-name').textContent = product.secondName;
        for (const name of document.querySelectorAll('.first-name')) {
          name.textContent = product.title.toUpperCase();
        }
        document.querySelector('#price').textContent = `$${product.price}USD`;
        const stock = document.querySelector('#stock');
        const input = document.querySelector('main form input');
        if (product.quantity > 0) {
          stock.classList.add('in-stock');
          stock.textContent = 'In stock';
          input.max = product.quantity < 11 ? product.quantity : 10;
          input.min = 1;
          input.value = 1;
        } else {
          stock.classList.add('out-of-stock');
          stock.textContent = 'Out of stock';
          input.setAttribute('disabled', 'disabled');
          input.value = 0;
          document.querySelector('main form button').addEventListener('click', () => alert('Out of stock'));
        }
        document.querySelector('#description').textContent = product.description;
        break;
      }
    }
  });
