// using computed method
var app = new Vue({
    el: '#app',
    data:{ 
        product: 'Hoodie' ,
        brand: 'RGS Clothing',
        link: 'https://www.tokopedia.com/search?st=product&q=hoodie&navsource=home' ,
        selectedVariant: 0,
        details: ["80% cotton","20% polyester","Gender-neutral"],
        variants: [
            {
                variantId: 2234,
                variantColor:"red",
                variantImage:'./assets/red.jfif',
                variantQuantity: 10,
                
            },
            {
                variantId: 2235,
                variantColor:"blue",
                variantImage:'./assets/blue.jfif',
                variantQuantity: 10,
                
            },
            {
                variantId: 2236,
                variantColor:"grey",
                variantImage:'./assets/grey.jfif',
                variantQuantity: 10,
               
            },
            {
                variantId: 2237,
                variantColor:"black",
                variantImage:'./assets/black.jfif',
                variantQuantity: 10,
                
            },
            {
                variantId: 2238,
                variantColor:"green",
                variantImage:'./assets/green.jfif',
                variantQuantity: 0,
                
            }
        ],
        cart: 0,
        onSale: true,
    },
    methods:
        {
        addToCart()
        {
            this.cart += 1
        },
        updateProduct: function(index)
        {
            this.selectedVariant = index
            console.log(index)
        },
        removeCart()
        {   
            this.cart -= 1
        }
        
    },
    computed: {
        title() {
            return this.brand + ' ' + this.product
        },
        image() {
            return this.variants[this.selectedVariant].variantImage
        },
        instock(){
            return this.variants[this.selectedVariant].variantQuantity
        },
        sale() {
            if (this.onSale) {
              return this.brand + ' ' + this.product + ' are on sale!'
            } 
              return this.brand + ' ' + this.product + ' are not on sale'
          }
    },
    
})