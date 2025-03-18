function addToCart(productName, price) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.push({ name: productName, price: price });
  localStorage.setItem('cart', JSON.stringify(cart));
  alert(productName + " has been added to the cart!");
  displayCart();
}

document.addEventListener("DOMContentLoaded", function() {
  console.log("E-Commerce site loaded");
  displayCart();
});

function displayCart() {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  let cartContainer = document.getElementById("cart-items");
  if (cartContainer) {
      cartContainer.innerHTML = "";
      cart.forEach(item => {
          let div = document.createElement("div");
          div.innerText = `${item.name} - $${item.price}`;
          cartContainer.appendChild(div);
      });
  }
}


function addToCart(productName, price) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.push({ name: productName, price: price });
  localStorage.setItem('cart', JSON.stringify(cart));
  alert(productName + " has been added to the cart!");
  displayCart();
}

document.addEventListener("DOMContentLoaded", function() {
  console.log("E-Commerce site loaded");
  displayCart();
});

function displayCart() {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  let cartContainer = document.getElementById("cart-items");
  if (cartContainer) {
      cartContainer.innerHTML = "";
      if (cart.length === 0) {
          cartContainer.innerHTML = "<p>Your cart is empty.</p>";
      } else {
          cart.forEach((item, index) => {
              let div = document.createElement("div");
              div.innerHTML = `${item.name} - $${item.price} <button onclick="removeFromCart(${index})">Remove</button>`;
              cartContainer.appendChild(div);
          });
      }
  }
}

function clearCart() {
  localStorage.removeItem('cart');
  displayCart();
  alert("Cart has been cleared!");
}

function removeFromCart(index) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.splice(index, 1);
  localStorage.setItem('cart', JSON.stringify(cart));
  displayCart();
}




// product page functions
let cart = JSON.parse(localStorage.getItem('cart')) || [];


function updateCartCounter() {
    const cartCounter = document.getElementById('cart-counter');
    cartCounter.textContent = cart.length;
}


function addToCart(productName, productPrice) {
    
    const product = {
        name: productName,
        price: productPrice
    };

    
    cart.push(product);

    
    localStorage.setItem('cart', JSON.stringify(cart));

    
    updateCartCounter();

    
    alert(`${productName} has been added to your cart!`);
}


updateCartCounter();


// CONTACT US
document.addEventListener('DOMContentLoaded', function() {
  
  const form = document.getElementById('contact-form');
  const responseMessage = document.getElementById('response-message');

 
  function validateEmail(email) {
      const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
      return emailPattern.test(email);
  }

  
  form.addEventListener('submit', function(event) {
      event.preventDefault();  

      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;

     
      if (!validateEmail(email)) {
          alert("Please enter a valid email address.");
          return;  
      }

      
      if (name === "" || message === "") {
          alert("Name and message are required.");
          return;
      }

      
      setTimeout(function() {
          responseMessage.textContent = `Thank you, ${name}. Your message has been sent successfully!`;
          responseMessage.classList.remove('hidden');
          
          
          form.reset();
      }, 1000);
  });
});


