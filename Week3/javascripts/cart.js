var Cart = {
  initOnLoad: function() {
    Cart.getDetailsCart();
    Cart.removeDetailsCart();
    Cart.changeQuantity();
  },
  changeQuantity: function() {
    var inputNumber = document.getElementsByClassName('quantity');
    Cart.getTotalPrice(inputNumber);
    [].forEach.call(inputNumber, function (el) {
      el.addEventListener('change', function() {
        Cart.changeQuantity();
      });
    });
  },
  getTotalPrice: function(el) {
    var details = Cart.filterDetails();
    var total = [].reduce.call(el, (weight, input, index) => {
      var detail = details[index];
      return weight += (detail.price * input.value);
    }, 0);
    var totalPrice = document.getElementById('total-price');
    totalPrice.innerHTML = total;
  },
  getDetailsCart: function() {
    var html = '';
    var details = Cart.filterDetails();
    details.forEach((obj) => {
      html += '<tr>';
      html += '<td><img src="images/'+ obj.image +'" alt="None"></td>';
      html += '<td>'+ obj.name +'</td>';
      html += '<td>'+ obj.price +' <span>$</span></td>';
      html += '<td>';
      html += '<input type="number" class="quantity" name="quantity" min="1" value="1">';
      html += '</td>';
      html += '<td>';
      html += '<button class="remove-item" type="button" data-id="'+ obj.id +'">Remove</button>';
      html += '</td>';
      html += '</tr>';
    });
    html += '<tr>';
    html += '<td colspan="5">';
    html += '<h3 class="border-price"><span id="total-price"></span> $</h3>';
    html += '</td>';
    html += '</tr>';
    var dataDetails = document.getElementById('data-details');
    dataDetails.insertAdjacentHTML('beforeend', html);
  },
  removeDetailsCart: function() {
    var btn = document.getElementsByClassName('remove-item');
    [].forEach.call(btn, function (el) {
      el.addEventListener('click', function() {
        var self = this;
        var id = self.getAttribute('data-id');
        var element = self.parentNode.parentNode;
        var tbody = document.querySelector('#data-details');
        tbody.removeChild(element);
        var localCarts = Cart.getLocalStorage('products');
        var johnRemoved = localCarts.findIndex(x => x.id === id);
        localCarts.splice(johnRemoved ,1);
        Cart.setLocalStorage('products', localCarts);
        Cart.changeQuantity();
      });
    });
  },
  filterDetails: function() {
    var products = Cart.listProducts();
    var cart = Cart.getLocalStorage('products');
    var details = cart.map((obj) => {
      var id = +obj.id;
      return products.find(x => x.id === id);
    });
    return details;
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
  Cart.initOnLoad();
})();

