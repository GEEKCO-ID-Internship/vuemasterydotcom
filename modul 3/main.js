// using v-if,v-else, v-elsei-if, v-show
// using span tag
var app = new Vue({
    el: '#app',
    data:{ 
        product: 'Hoodie' ,
        productdesc: 'Hoodie adalah jaket dengan penutup kepala' ,
        image: './assets/hoodie.jpg',
        link: 'https://www.tokopedia.com/search?st=product&q=hoodie&navsource=home' ,
        ella: 'https://www.instagram.com/aqmayanti/' , 
        inventory: 9 ,
        onsale: false
    }
})