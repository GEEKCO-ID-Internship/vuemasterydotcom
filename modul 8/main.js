// using computed method

Vue.component('product-details', {
    props: {
        details: {
            type: Array,
            required: true
        }
    },
    template:`
    <ul>
	<li v-for="detail in details">{{ detail }}</li>
	</ul>`
})

Vue.component('product', {
    props: {
        premium: {
            type: Boolean,
            required: true
        }
    },
    template: `
    <div class="product">
			<div class="product-image">
			<img :src="image">
			</div>
		<div class="product-info">
			<h1>{{ product }}</h1>
				<p v-if="instock">In Stock</p>
				<p v-else>Out of Stock</p>
				<p>Shipping: {{ shipping }}</p>
				<p>Material Composition: </p>
                <product-details :details="details">
                </product-details>
				
			<div class="color-box"
				v-for="(variant, index) in variants" 
				:key="variants.variantId"
				:style="{ backgroundColor: variant.variantColor }"
				@mouseover="updateProduct(index)"
				>
		   </div>

				
			<button v-on:click="addToCart"
			:disabled="!instock"
			:class="{disabledButton: !instock}"
			>Add to cart</button>
			
		    <div class="cart">
		        <p>Cart (
                    {{ cart }})
		        </p>
		
	    </div>	
		
	</div>
			<a :href="link" 
			target="_blank"> Produk Seperti Ini Lagi </a>
    `,


data() {
    return {
        product: 'Hoodie' ,
        brand: 'RGS Clothing',
        link: 'https://www.tokopedia.com/search?st=product&q=hoodie&navsource=home' ,
        selectedVariant: 0,
        details: ['80% cotton', '20% polyester', 'Gender-neutral'],
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
    }
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
        },
        shipping() {
            if (this.premium) {
                return "Free"
            }
            return 2.99 
        }
    },
})

var app = new Vue({
    el:'#app',
    data: {
        premium: true
    }
})