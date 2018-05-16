<template>
    <section v-title data-title="CKE - Gallery">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.3.5/jquery.fancybox.min.css" />
       
        <poster-template v-bind:posterDetail="posterProp"></poster-template> 

        <div class="container">
            <section class="img-wrapper row">
                <figure v-for="image in images" class="col-md-4">
                    <a data-fancybox="gallery" :href="image">
                        <img :src="image">
                    </a>
                </figure>
            </section>
            <div class="text-center" style="margin-top:1em;">
                <button @click="loadMore" class="btn btn-primary">{{btnText}}</button>
            </div>
        </div>
        
    </section>
</template>

<script>
import poster from "./poster.vue"
import { db } from '../main'
export default{
    name:"gallery",
    data(){
        return {
            imageBundle:[],
            images:[],
            page: 1,
            pages: 1,
            btnText:"Load more",
            loadNumber: 18,
            posterProp:{
                url: "https://farm1.staticflickr.com/872/41000043885_d1ba080d9a_z.jpg",
                heading:"Gallery",
                subTitle:"Things that you see are just a small percentage of what CKE does. Join us to get the real experience."
            }
        }
    },
    components:{
        "poster-template": poster
    },
    created: function(){
        var self = this;
        var first = db.ref("gallery").on("value", function(response){
            self.imageBundle = response.val(); 
            self.pages = Math.ceil(self.imageBundle.length / 18);
            self.images = self.imageBundle.slice(0, self.loadNumber);  
        })            
    },
    methods:{
        loadMore: function(){
            var self = this;
            if(self.page <= self.pages) {              
                var images = self;                                      

                self.images.push.apply(self.images, self.imageBundle.slice(self.loadNumber,self.loadNumber += 18));  
                self.page += 1;                  

            }else {
                this.btnText = "Thats it";
            }  
        }
    }
};
</script>

<style>
@import "../plugins/font-awesome/css/font-awesome.min.css";
.img-wrapper img {
    width: 100%;
}

.img-wrapper figure.col-md-4 {
    padding: 0;
    max-height: 200px;
    margin: 0;
    overflow: hidden;
}

.img-wrapper {
    background-color: #72ffbe;
}
</style>
