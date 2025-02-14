const createCard = (product) => {
  return `<div class="card">
    <img src="${product.images[0]}" alt="Product" class="card__img">
    <p class="card__title">${product.title}</p>
    <p><b>Stock</b>: ${product.stock}</p>
    <p><b>Price</b>: $ ${product.price}</p>
    <p><b>Rating</b>: ${product.rating}</p>
    <p><b>Category</b>: ${product.category}</p>
  </div>`
};

const requestProduct = async (id) => {
  try {
    const res = await fetch(`https://dummyjson.com/products/${id}`);
    if (!res.ok) throw new Error("Product not found");
    return await res.json();
  } catch (error) { throw error };
};

const formHandler = () => {
  const form = document.querySelector(".form"),
    container = document.querySelector(".container");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    try {
      const input = e.target.querySelector("input[type='number']"),
        id = parseInt(input.value.trim(), 10);

      if (!id || id < 1) {
        container.innerHTML = `<p style="color: red;">Please enter a valid product ID.</p>`;
        return;
      }

      container.innerHTML = `<p>Loading...</p>`;
      const product = await requestProduct(id);

      container.innerHTML = createCard(product);

    } catch (error) {
      container.innerHTML = `<p style="color: red;">${error.message}</p>`;
    }
  });
};


document.addEventListener("DOMContentLoaded", formHandler);