<template>
  <section v-title data-title="CKE - All articles">   
    <poster-template v-bind:posterDetail="posterProp"></poster-template>
    <article class="container">
      <div class="row">
        <div class="col-lg-8 col-md-10 mx-auto">
           <div class="post-preview" v-for="article in articles">
            <router-link :to="{path:getArticleLink(article.id),params:{id:article.id}}">
            
              <h2 class="post-title">
                {{article.heading}}
              </h2>
              <h3 class="post-subtitle">
                {{article.subTitle}}
              </h3>
            </router-link>
            <p class="post-meta">Posted by
              <a href="#">CKE</a>
              on {{article.date}}</p>
          </div>
        </div>
      </div>
    </article>
  </section>
</template>

<script>
import poster from "./poster.vue"
import { db } from '../main'
export default{
  name:"readPost",
    data() {
    return {
      posterProp: {
        url:"https://farm1.staticflickr.com/972/41000474825_3bd4b79c92_z.jpg",
        heading:"School 4 Kids",
        subTitle:"Every child deserves education."
      },
      articles:[]
    }
  },  
  components:{
    "poster-template": poster
  },
  created: function() {
    var self = this,
      articleLength;
    db.ref("posts").on("value", function(response){
        articleLength = Object.keys(response.val()).length; 
    });
    var ref = db.ref();
    ref.child("posts").orderByChild("timeStamp").on("child_added", function(response){              
        self.articles.push(response.val());
          
        if(articleLength == self.articles.length) {
          self.articles.reverse();
        }
    })          
  },
  methods:{
    getArticleLink: function(id){
      return "/article/"+id;
    }          
  }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.masthead .post-heading {
  text-align: left;
}
.post-preview {
    text-align: left;
}
</style>