class Product {
    name = "DEFAULT";
    desc;
    price;
    image;

    constructor(name, desc, price, imageUrl) {
        this.name = name;
        this.desc = desc;
        this.price = price;
        this.imageUrl = imageUrl
    }
}

class Cart {
    cartProducts = [];

    addToCartHandler (productItem) {
        let newCartProduct = {};
        let productExists = false;
    
        newCartProduct.name = productItem.product.name;
        newCartProduct.price = productItem.product.price;
        newCartProduct.qty = 1;

        for(let product of this.cartProducts) {
            if(product.name == productItem.product.name) {
                product.qty++;
                productExists = true
            }
        }
    
        if(!productExists) {
            myCart.cartProducts.push(newCartProduct);
        }
    
    }

    toggleCartView () {
        const prodCart = document.getElementById("product-cart");
        const cartBtn = document.getElementById('cart-btn');
        console.log(this);
        if(cartState == false) {
            prodCart.style.display = "block";
            this.renderCart();
            cartBtn.innerText = "Hide Cart"
            cartState = true;
        } else {
            prodCart.style.display = "none";
            cartBtn.innerText = "View Cart"
            cartState = false;
        }
    };

    renderCart() {
        const cartDetailsEl = document.getElementById("cart-details");
        const cartTotalEl = document.getElementById("cart-total-amount");
        let cartListEl = document.getElementById("cart-list");
        let cartTotal = 0;

        if( typeof(cartListEl) != 'undefined' && cartListEl != null) {
            cartListEl.remove();
        }

        cartListEl = document.createElement("div");
        cartListEl.id = "cart-list";
        cartListEl.classList.add("cart-list");
        cartDetailsEl.appendChild(cartListEl)

        let cartItemNameEl = document.createElement("div");
        cartItemNameEl.classList.add("cart-item-name");
        cartItemNameEl.innerText = "Product Name"
        cartListEl.appendChild(cartItemNameEl);

        let cartItemQtyEl = document.createElement("div");
        cartItemQtyEl.classList.add("cart-item-qty");
        cartItemQtyEl.innerText = "Qty"
        cartListEl.appendChild(cartItemQtyEl);

        let cartItemPriceEl = document.createElement("div");
        cartItemPriceEl.classList.add("cart-item-price");
        cartItemPriceEl.innerText = "Unit Price"
        cartListEl.appendChild(cartItemPriceEl);

        let cartItemAmountEl = document.createElement("div");
        cartItemAmountEl.classList.add("cart-item-amount");
        cartItemAmountEl.innerText = "Amount";
        cartListEl.appendChild(cartItemAmountEl);

        for (let cartProduct of this.cartProducts) {

            let cartItemNameEl = document.createElement("div");
            cartItemNameEl.classList.add("cart-item-name");
            cartItemNameEl.innerText = cartProduct.name
            cartListEl.appendChild(cartItemNameEl);

            let cartItemQtyEl = document.createElement("div");
            cartItemQtyEl.classList.add("cart-item-qty");
            cartItemQtyEl.innerText = cartProduct.qty
            cartListEl.appendChild(cartItemQtyEl);

            let cartItemPriceEl = document.createElement("div");
            cartItemPriceEl.classList.add("cart-item-price");
            cartItemPriceEl.innerText = "Rs. " + cartProduct.price
            cartListEl.appendChild(cartItemPriceEl);

            let cartItemAmountEl = document.createElement("div");
            cartItemAmountEl.classList.add("cart-item-amount");
            cartItemAmountEl.innerText = "Rs. " + (cartProduct.price * cartProduct.qty)
            cartListEl.appendChild(cartItemAmountEl);

            cartTotal += cartProduct.price * cartProduct.qty;
        }
        cartTotalEl.innerText = "Rs. " + cartTotal;

    }
}

class ProductItem {
    constructor(product) {
        this.product = product;
    }

    renderProductCard() {
        const cardContainer = document.getElementById("card-deck");

        const cardDivEl = document.createElement("div");
        cardDivEl.className = "col-sm-3";
        cardContainer.appendChild(cardDivEl);

        const cardEl = document.createElement("div");
        cardEl.className = "card";
        cardDivEl.appendChild(cardEl);

        const cardImgEl = document.createElement("img");
        cardImgEl.className = "card-img-top";
        cardImgEl.style.width = "9em";
        cardImgEl.style.alignSelf = "center";

        cardImgEl.alt = this.product.name;
        cardImgEl.src = this.product.image;
        cardEl.appendChild(cardImgEl);

        const cardBodyEl = document.createElement("div");
        cardBodyEl.className = "card-body";
        cardEl.appendChild(cardBodyEl);

        const cardTitleEl = document.createElement("h5");
        cardTitleEl.classList.add("card-title");
        cardTitleEl.innerText = this.product.name;
        cardBodyEl.appendChild(cardTitleEl);

        const cardTextEl = document.createElement("p");
        cardTextEl.classList.add("card-text");
        cardTextEl.innerText = this.product.desc;
        cardBodyEl.appendChild(cardTextEl);

        const cardPriceEl = document.createElement("p");
        cardPriceEl.classList.add("card-text");
        cardPriceEl.innerText = "Rs. " + this.product.price;
        cardPriceEl.style.textAlign = "right";
        cardPriceEl.style.fontWeight = "bold";
        cardBodyEl.appendChild(cardPriceEl);

        const cardCartBtnEl = document.createElement("a");
        cardCartBtnEl.style.href = "#";
        cardCartBtnEl.classList.add("btn");
        cardCartBtnEl.classList.add("btn-primary");
        cardCartBtnEl.innerText = "Add to Cart";
        cardBodyEl.appendChild(cardCartBtnEl);

        cardCartBtnEl.addEventListener("click", myCart.addToCartHandler.bind(myCart, this));
    }
}

class ProductList {

    products = [
        {
            name: "AKHILAM Women's Linen Saree",
            desc: "AKHILAM Women's Linen Saree With Blouse Piece (BGBLT80001 Sarees_Green)",
            price: "829.00",
            image: "./assets/images/akhilam.jpg",
        },
        {
            name: "SERONA FABRICS Cotton Silk Saree",
            desc: "SERONA FABRICS Women's Cotton Silk Saree With Blouse Piece",
            price: "899.00",
            image: "./assets/images/serona.jpg",
        },
        {
            name: "Rajnandini Women's Salwar Suit Dress Material",
            desc: "Rajnandini Women's Red Crepe Printed Unstitched Salwar Suit Dress Material (Free Size)",
            price: "499.00",
            image: "./assets/images/rajnandini.jpg",
        },
        {
            name: "Winza Designer Cotton Saree with Blouse Piece",
            desc: "80% Cotton and 20% Polycotton saree With blouse piece. Wash separately in cold water, do not bleach, dry in shade, medium to hot iron. 6 yards length.",
            price: "399.00",
            image: "./assets/images/Winza.jpg",
        },
        {
            name: "Anand Sarees chiffon with blouse piece Saree",
            desc: "Anand Sarees chiffon with blouse piece Saree",
            price: "469.00",
            image: "./assets/images/anand.jpg",
        },
        {
            name: "Anand Sarees Georgette Saree with Blouse Piece (1341_Multicoloured_Free size)",
            desc: "Anand Sarees Georgette Saree with Blouse Piece (1341_Multicoloured_Free size)",
            price: "269.00",
            image: "./assets/images/anand_georgette.jpg",
        },
        {
            name: "Yashika Women's Bhagalpuri Art Silk Saree With Blouse Piece",
            desc: "Yashika Women's Bhagalpuri Art Silk Saree With Blouse Piece",
            price: "299.00",
            image: "./assets/images/yashika.jpg",
        },
        {
            name: "Vaamsi Georgette Printed Saree with Blouse Piece",
            desc: "Vaamsi Georgette Printed Saree with Blouse Piece",
            price: "299.00",
            image: "./assets/images/vaamsi.jpg",
        },
    ]

    renderProdListData() {
        let renderProdCount = 0;

        for (let product of this.products) {
            let prod = new ProductItem(product);
            prod.renderProductCard();
            renderProdCount++;
        }

        return renderProdCount;
    }
}

let cartState = false;
const cartBtn = document.getElementById("cart-btn");

const myCart = new Cart();
cartBtn.addEventListener("click", myCart.toggleCartView.bind(myCart));


const prodList = new ProductList();
prodList.renderProdListData();

