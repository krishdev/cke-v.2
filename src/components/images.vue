<template>
    <div class="container" v-title data-title="CKE - All Images">
        <div class="row">
            <article class="col-6 col-md-4" v-for="(image,index) in images" v-if="image.url_z">
                <figure>
                    <img :src="image.url_z">
                </figure>
                <div class="input-group mb-3">
                    <input type="text" class="form-control" :value="image.url_z" :id="image.id" width="75%">
                    <button type="button" @click="copy(image.id)" class="btn btn-default" aria-label="Left Align">
                        <span class="fa fa-clipboard" aria-hidden="true"></span>
                    </button>
                    
                </div>
            </article>            
        </div>
        <div class="text-center">
            <button @click="loadMore" class="btn btn-primary">{{btnText}}</button>
        </div>
    </div>
</template>
<script>
import { db } from '../main'
export default{
    name:"images",
    data(){
        return{
            images:[],
            page:2,
            pages:1,
            btnText: "Load more"
        }
    },
    created:function(){
        var self = this;        
        self.$http.get("http://krishdev.com/api/getGalleryCKE?page=1").then(function(response){
            self.images = response.data.photos.photo;
            self.pages = response.data.photos.pages;
        });
    },
    methods:{
        copy:function(id){
        var copyText = document.getElementById(id);
        copyText.select();
        document.execCommand("Copy");
        },
        loadMore: function(){
            var self = this;
            if(self.page <= self.pages) {
            self.$http.get("http://krishdev.com/api/getGalleryCKE?page="+self.page).then(function(response){
                self.images.push.apply(self.images, response.data.photos.photo);  
                self.page += 1;                  
            });
            }else {
                this.btnText = "Thats it";
            }
            
        }
    }
};
</script>
<style>
article{
    margin: 18px 0;
}
article figure{
    overflow: hidden;    
    max-height: 240px;    
    margin-bottom: 10px;
}

article img {
    width: 100%;
}
</style>
