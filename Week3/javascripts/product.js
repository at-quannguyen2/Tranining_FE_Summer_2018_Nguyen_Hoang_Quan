var Product = {
  initOnLoad: function() {
    Product.getCountCart();
    Product.getProducts();
    Product.disableBtnAddCart();
    Product.eventAddCart();
  },
  eventAddCart: function() {
    var btn = document.getElementsByClassName('btn-addcart');
    [].forEach.call(btn, function (el) {
      el.addEventListener('click', function() {
        var self = this;
        var id = self.getAttribute('data-id');
        var products = Product.getLocalStorage('products');
        products.push({id: id});
        Product.setLocalStorage('products', products);
        self.disabled = true;
        self.style.backgroundColor = '#2f2f2f';
        Product.getCountCart();
      });
    });
  },
  disableBtnAddCart: function() {
    var localProducts = Product.getLocalStorage('products');
    var products = Product.listProducts();
    localProducts.map((obj) => {
      var id = +obj.id;
      return products.find(x => x.id === id);
    });
    var btn = document.getElementsByClassName('btn-addcart');
    [].forEach.call(btn, function(el) {
      var id = el.getAttribute('data-id');
      var product = localProducts.find(x => x.id === id);
      if (product) {
        el.disabled = true;
        el.style.backgroundColor = '#2f2f2f';
      }
    });
  },
  getProducts: function() {
    var html = '';
    var products = Product.listProducts();
    products.forEach((obj) => {
      html += '<li class="item-information">';
      html += '<div class="border-information">';
      html += '<a href="#"><img src="images/'+ obj.image +'" alt="None"></a>';
      html += '<div class="text-information">';
      html += '<h4 class="uppercase"><a href="#">'+ obj.name +'</a></h4>';
      html += '<h3><span class="price">'+ obj.price +'</span> $</h3>';
      html += '<button type="button" class="btn-addcart" data-id="'+ obj.id +'">Add Cart</button>';
      html += '</div>';
      html += '<a href="#" class="btn-next"></a>';
      html += '</div>';
      html += '</li>';
    });
    var information = document.getElementById('information');
    information.insertAdjacentHTML('beforeend', html);
  },
  setLocalStorage: function(key, values) {
    if (typeof(Storage) !== "undefined") {
      localStorage.setItem(key, JSON.stringify(values));
    } else {
      alert('Your web browser does not support local storage');
    }
  },
  getLocalStorage: function(key) {
    return JSON.parse(localStorage.getItem(key) || "[]");
  },
  getCountCart: function() {
    var products = Product.getLocalStorage('products');
    var contact  = document.getElementById('contact-right');
    var length   = products.length;
    contact.style.display = 'none';
    if (length) {
      contact.style.display = 'block';
      contact.querySelector('span').innerHTML = length;
    }
  },
  listProducts: function() {
    var obj = [
      {id: 1, name: 'NECK SHOULDER PAIN', price: 200, image: '1.jpg'},
      {id: 2, name: 'NECK SHOULDER PAIN', price: 400, image: '2.jpg'},
      {id: 3, name: 'NECK SHOULDER PAIN', price: 500, image: '3.jpg'},
      {id: 4, name: 'NECK SHOULDER PAIN', price: 600, image: '4.jpg'},
      {id: 5, name: 'NECK SHOULDER PAIN', price: 700, image: '5.jpg'},
      {id: 6, name: 'NECK SHOULDER PAIN', price: 800, image: '6.jpg'},
      {id: 7, name: 'NECK SHOULDER PAIN', price: 900, image: '7.jpg'},
      {id: 8, name: 'NECK SHOULDER PAIN', price: 1000, image: '9.jpg'}
    ]
    return obj;
  }
};

(function() {
  Product.initOnLoad();
})();

