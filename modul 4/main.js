// using v-for
// using ul, ol, li tag
var app = new Vue({
    el: '#app',
    data:{ 
        product: 'Hoodie' ,
        productdesc: 'Hoodie adalah jaket dengan penutup kepala' ,
        image: './assets/hoodie.jpg',
        link: 'https://www.tokopedia.com/search?st=product&q=hoodie&navsource=home' ,
        ella: 'https://www.instagram.com/aqmayanti/' , 
        inventory: 9 ,
        onsale: true ,
        details: ["80% cotton","20% polyester","Gender-neutral"],
        variants: [
            {
                variantId: 2234,
                variantColor:"red"
            },
            {
                variantId: 2235,
                variantColor:"blue"
            },
            {
                variantId: 2236,
                variantColor:"grey"
            },
            {
                variantId: 2237,
                variantColor:"black"
            },
            {
                variantId: 2238,
                variantColor:"green"
            }
        ],
        sizes: ['S','M','L','XL','XXL']
    }
})