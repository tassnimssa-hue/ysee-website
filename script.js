/* =========================
   FILTER PRODUCTS
========================= */

function filterProducts(category) {

    const products = document.querySelectorAll(".product");

    products.forEach(function(product) {

        if (category === "all") {
            product.style.display = "block";
        }

        else if (product.classList.contains(category)) {
            product.style.display = "block";
        }

        else {
            product.style.display = "none";
        }

    });
}


/* =========================
   PRODUCT DATA
========================= */

const productsData = {

    sage: {
        name: "Sage Elegance",
        price: "29,000 د.ج",
        image: "img/6010065471396318749_121.jpg",
        description: "فستان أنيق بتصميم عصري وخامة فاخرة."
    },

    imperial: {
        name: "Imperial Long Dress",
        price: "21,000 د.ج",
        image: "img/6010065471396318750_121.jpg",
        description: "فستان طويل أنيق ومناسب للمناسبات."
    },

    forest: {
        name: "Forest Heritage Coat",
        price: "24,000 د.ج",
        image: "img/6010065471396318752_120.jpg",
        description: "معطف أنيق بتصميم كلاسيكي."
    },

    orchid: {
        name: "Orchid Velvet Set",
        price: "18,000 د.ج",
        image: "img/6010065471396318754_121.jpg",
        description: "طقم مخملي أنيق بتصميم عصري وخامة فاخرة."
    },

    military: {
        name: "Military Chic",
        price: "22,000 د.ج",
        image: "img/6021794520275553661_121.jpg",
        description: "تصميم أنيق مستوحى من الستايل العسكري."
    },

    olive: {
        name: "Olive Long Coat",
        price: "26,000 د.ج",
        image: "img/6010065471396318748_121.jpg",
        description: "معطف طويل أنيق بلون Olive."
    },

    emerald: {
        name: "Emerald Knit",
        price: "12,000 د.ج",
        image: "img/6010065471396318751_121.jpg",
        description: "قطعة Knit أنيقة ومريحة."
    },

    azure: {
        name: "Azure Breeze Jacket",
        price: "16,000 د.ج",
        image: "img/6010065471396318753_121.jpg",
        description: "جاكيت أنيق بتصميم عصري."
    }

};


/* =========================
   SHOW PRODUCT DETAILS
========================= */

const urlParams = new URLSearchParams(window.location.search);

const productId = urlParams.get("product");

const selectedProduct = productsData[productId];


if (selectedProduct) {

    const productName = document.getElementById("productName");
    const productPrice = document.getElementById("productPrice");
    const productImage = document.getElementById("productImage");
    const productDescription = document.getElementById("productDescription");


    if (productName) {
        productName.textContent = selectedProduct.name;
    }

    if (productPrice) {
        productPrice.textContent = selectedProduct.price;
    }

    if (productImage) {
        productImage.src = selectedProduct.image;
        productImage.alt = selectedProduct.name;
    }

    if (productDescription) {
        productDescription.textContent = selectedProduct.description;
    }

}


/* =========================
   SIZE
========================= */

let selectedSize = "";

function selectSize(button) {

    const sizes = document.querySelectorAll(".sizes button");

    sizes.forEach(function(size) {
        size.classList.remove("selected");
    });

    button.classList.add("selected");

    selectedSize = button.textContent;

}


/* =========================
   COLOR
========================= */

let selectedColor = "";

function selectColor(button) {

    const colors = document.querySelectorAll(".colors .color");

    colors.forEach(function(color) {
        color.classList.remove("selected-color");
    });

    button.classList.add("selected-color");

    selectedColor = button.classList.contains("red") ? "Red" :
                    button.classList.contains("beige") ? "Beige" :
                    button.classList.contains("black") ? "Black" :
                    button.classList.contains("green") ? "Green" : "";

}


/* =========================
   ADD TO CART
========================= */

function addToCart() {

    if (selectedSize === "") {
        alert("Please select a size");
        return;
    }

    if (selectedColor === "") {
        alert("Please select a color");
        return;
    }

    alert(
        "Added to cart!\n\n" +
        "Product: " + selectedProduct.name +
        "\nSize: " + selectedSize +
        "\nColor: " + selectedColor
    );

}