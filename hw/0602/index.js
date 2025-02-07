document.addEventListener("DOMContentLoaded", () => {
	const product = JSON.parse(localStorage.getItem("product")) ||
	{
		title: "Bicycle Bicycle BicycleBicycleBicycle Bicycle",
		img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Left_side_of_Flying_Pigeon.jpg/800px-Left_side_of_Flying_Pigeon.jpg",
		count: 0,
		favorite: false,
	};
	const prodBtnFavorite = document.querySelector(".product__favorite"),
		prodImg = document.querySelector(".product__img"),
		prodName = document.querySelector(".product__name"),
		prodCountValue = document.querySelector(".product__counter-value"),
		prodCountDecrement = document.querySelector(".product__counter-decrement"),
		prodCountIncrement = document.querySelector(".product__counter-increment");

	function fillProduct(obj) {
		if (!obj) return alert("Missing product!");
		obj.favorite && prodBtnFavorite.classList.add("product__favorite--active")
		if (obj.count <= 0) prodCountDecrement.setAttribute("disabled", true);
		if (!prodImg || !prodName || !prodCountValue) return alert("Missing selector!");
		prodImg.src = obj.img || "#";
		prodName.textContent = obj.title || "NoName";
		prodCountValue.textContent = obj.count || 0;
	};
	fillProduct(product);

	function setStorage(obj) {
		localStorage.setItem("product", JSON.stringify(obj));
	};

	prodBtnFavorite.addEventListener("click", (e) => {
		product.favorite = !product.favorite;
		prodBtnFavorite.classList.toggle("product__favorite--active");
		setStorage(product);
	});

	function countHandler(n) {
		product.count += n;
		prodCountValue.textContent = product.count;
		setStorage(product);
	};

	prodCountDecrement.addEventListener("click", () => {
		if (product.count <= 1) prodCountDecrement.setAttribute("disabled", true);
		countHandler(-1);
	});

	prodCountIncrement.addEventListener("click", () => {
		prodCountDecrement.getAttribute("disabled") && prodCountDecrement.removeAttribute("disabled");
		countHandler(1);
	});

});