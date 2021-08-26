// using true-false classification
// using style binding and class binding
var app = new Vue({
    el: '#app',
    data:{ 
        product: 'Hoodie' ,
        productdesc: 'Hoodie adalah jaket dengan penutup kepala' ,
        image: './assets/hoodie.jpg',
        link: 'https://www.tokopedia.com/search?st=product&q=hoodie&navsource=home' ,
        ella: 'https://www.instagram.com/aqmayanti/' , 
        inventory: 20 ,
        onsale: true ,
        instock: true,
        details: ["80% cotton","20% polyester","Gender-neutral"],
        variants: [
            {
                variantId: 2234,
                variantColor:"red",
                variantImage:'./assets/red.jfif'
            },
            {
                variantId: 2235,
                variantColor:"blue",
                variantImage:'./assets/blue.jfif'
            },
            {
                variantId: 2236,
                variantColor:"grey",
                variantImage:'./assets/grey.jfif'

            },
            {
                variantId: 2237,
                variantColor:"black",
                variantImage:'./assets/black.jfif'
            },
            {
                variantId: 2238,
                variantColor:"green",
                variantImage:'./assets/green.jfif'
            }
        ],
        sizes: ['S','M','L','XL','XXL'],
        cart: 0
    },
    methods:
        {
        addToCart()
        {
            this.cart += 1
        },
        updateProduct(variantImage)
        {
            this.image = variantImage
        },
        removeCart()
        {   
            this.cart -= 1
        }
        
    }
})