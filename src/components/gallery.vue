<template>
    <section v-title data-title="CKE - Gallery">      
        <poster-template v-bind:posterDetail="posterProp"></poster-template> 

        <div class="container">
            <section class="img-wrapper row" v-modal-box>
                <figure v-for="(image, index) in images" :data-modal="image" class="col-md-4 gallery">
                    <a href="javascript:;" >
                        <img :src="image">
                    </a>
                </figure>
            </section>
            <div class="text-center" style="margin-top:1em;">
                <button @click="loadMore" class="btn btn-primary">{{btnText}}</button>
            </div>
        </div>
        <section v-if="showModal" id="shadow"></section>
        <div id="mastermodal">
            <section class="modal-box" v-if="showModal">
                <header v-if="modal.header && modal.header != ''" id="modal-header" class="">
                    <h3>{{modal.header}}</h3>
                </header>
                <figure>
                    <div class="modal-image">
                        <img :src="modal.src" style="width:100%"/>
                    </div>
                    <figcaption><span><i>{{modal.caption}}</i></span></figcaption>                
                    <a href="javascript:;" @click="previous(modal)" class="btn-previous">
                        <span class="fa-stack fa-lg">
                          <i class="fa fa-circle fa-stack-2x"></i>
                          <i class="fa fa-chevron-left fa-stack-1x fa-inverse"></i>
                        </span>
                    </a>
                    <a href="javascript:;" @click="next(modal)" class="btn-next">
                        <span class="fa-stack fa-lg">
                          <i class="fa fa-circle fa-stack-2x"></i>
                          <i class="fa fa-chevron-right fa-stack-1x fa-inverse"></i>
                        </span>
                    </a>
                </figure>
                <div class="modal-close">
                    <a href="javascript:;" @click="close">
                        <span class="fa-stack fa-lg">
                          <i class="fa fa-circle fa-stack-2x"></i>
                          <i class="fa fa-close fa-stack-1x fa-inverse"></i>
                        </span>
                    </a>
                </div>
            </section>
        </div>
    </section>
</template>

<script>

import poster from "./poster.vue"
import { db } from '../main'
import {modalBox} from './modelBox.js'
export default {
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
            },
            modal: {
                target:"",
                header:"",
                src:"",
                caption:"",
                btns:false
            },
            showModal: false 
        }
    },
    directives: {
      modalBox
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
        });

    },
    methods:{
        loadMore: function () {
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
