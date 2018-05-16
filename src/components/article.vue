<template>
   <section v-title v-bind:data-title="article.heading">
        <header class="masthead" :style="style">
            <div class="overlay"></div>
            <div class="container">
            <div class="row">
                <div class="col-lg-8 col-md-10 mx-auto">
                <div class="post-heading" v-if="article.heading">
                    <h1>{{article.heading}}</h1>
                    <h2 class="subheading">{{article.subTitle}}</h2>
                    <span class="meta" v-if="article.date">Posted by
                    <a href="#">CKE</a>
                    {{article.date}}</span>
                </div>
                </div>
            </div>
            </div>
        </header>
        <article  class="container">
            <div class="row" style="text-align:left;">
                <div class="col-lg-8 col-md-10 mx-auto">
                    <article v-for="content in article.contents">
                        <h2 v-if="content.paraTitle" class="section-heading">{{content.paraTitle}}</h2>
                        <p v-if="content.para">{{content.para}}</p>
                        <img v-if="content.showImg" :src="content.img.imgSrc">
                        <span class="caption text-muted" v-if="content.img.imgText">{{content.img.imgText}}</span>
                    </article>
                </div>
            </div>
        </article>        
   </section>
</template>
<script>
import { db } from '../main'
export default {
    name: "article",
    data(){
        return {
            article:{},
            isFound:false,
            style:{
                textAlign:"left"
            }              
        }
    },
    created:function(){
        var ref = db.ref();
        this.isFound = false;
        var self = this;
        ref.child("posts").orderByChild("id").equalTo(this.$route.params.id).on("child_added", function(snapshot) {
            self.isFound = true;
            self.article = snapshot.val();    
            self.style = {
                backgroundImage:"url("+self.article.imgPoster+")"
            }            
        });
    }
}
</script>
