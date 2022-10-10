    import Items from "./Items.js"

    const cartLink = document.body.getElementsByClassName("show--cart")
    const cart = document.body.getElementsByClassName("cart")
    const products = document.body.getElementsByClassName("products")

    
    window.onload = (() => {
        const products = JSON.parse(localStorage.getItem("Cart"))
        for(let i = 0; i<products.length; i++) {
            convertToCartItem(products[i])
        }
    })
        
    let cartProducts = JSON.parse(localStorage.getItem("Cart")) || []

    for(let i = 0; i < Items.length; i++) {
        const product1 = document.createElement("div")
        product1.setAttribute("class", `product${Items[i]}`)
        
        const productImage = document.createElement("img")
        productImage.src = `${Items[i].image}`
        
        const productName = document.createElement("h3")
        productName.textContent = `${Items[i].name}`
        
        const productPrice = document.createElement("p")
        productPrice.textContent = `${Items[i].price}`
        
        const addToCart = document.createElement("button")
        addToCart.addEventListener("click", () => {
            cartProducts.push(Items[i])
            localStorage.setItem("Cart", JSON.stringify(cartProducts))
            convertToCartItem(Items[i])
        })

        addToCart.textContent = "Add to Cart"
        
        product1.appendChild(productImage)
        product1.appendChild(productName)
        product1.appendChild(productPrice)
        product1.appendChild(addToCart)
        products[0].appendChild(product1)

    }

    function deleteProductt(productId) {
        cartProducts = cartProducts.filter(product => product.id !== productId)
        localStorage.setItem("Cart",JSON.stringify(cartProducts))
    }

    function convertToCartItem(item) {
        const cartImage = document.createElement("img")
        cartImage.src = `${item.image}`

        const cartTitle = document.createElement("h3")
        cartTitle.textContent = `${item.name}`

        const cartPrice = document.createElement("p")
        cartPrice.textContent = `${item.price}`

        cartLink[0].setAttribute("title", `${cartProducts.length} products in cart`)

        const deleteProduct = document.createElement("button")
        deleteProduct.textContent = "Delete Product"
        deleteProduct.addEventListener("click", () => {
            deleteProductt(item.id)
            cartLink[0].setAttribute("title", `${cartProducts.length} products in cart`)
            cart[0].removeChild(cartImage)
            cart[0].removeChild(cartTitle)
            cart[0].removeChild(cartPrice)
            cart[0].removeChild(deleteProduct)
        })

        cart[0].appendChild(cartImage)
        cart[0].appendChild(cartTitle)
        cart[0].appendChild(cartPrice)
        cart[0].appendChild(deleteProduct)
    }

    cartLink[0].addEventListener("click", () => {
        cart[0].style.display = cart[0].style.display == "" ? "block" : "";
    })

    // LOGIN

    let login = document.getElementsByClassName("login")
    let loginform = document.getElementsByClassName("limiter")
    let wrapLogin = document.getElementsByClassName("wrap-login100")
    let body = document.body;


    login[0].addEventListener("click", () => { loginform[0].style.display = "block"; body.style.overflow = "hidden"})
    wrapLogin[0].addEventListener("click", (e) => { e.stopPropagation() })
    loginform[0].addEventListener("click", () => { loginform[0].style.display = "none"; body.style.overflow = "auto"})

    // All Microsoft Menu
    
    const allMicrosoft = document.getElementsByClassName("all-microsoft")
    const navMenu = document.getElementsByClassName("menu1")

    navMenu[0].addEventListener("click", () => {
        allMicrosoft[0].style.display = allMicrosoft[0].style.display == "none" ? "flex" : "none"; 
    })
