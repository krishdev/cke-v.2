<template>
  <section>
    <poster-template v-bind:posterDetail="posterProp"></poster-template> 
    <div class="container">
        <div class="donateEmail">
            <div class="content-title text-center">{{message}}</div>
            <div name="emailForm" novalidate>
              <div class="input-group content-middle">
                <input type="email" class="form-control" v-model="email" placeholder="Drop your email address and we will get back to you." required>
                <span class="input-group-btn">
                <button class="btn btn-primary" @click.prevent="submit" type="submit">Send</button>
            </span></div>
            <p class="help-block text-danger" v-if="$v.email.$dirty && $v.email.$invalid">Please enter a valid email id.</p>
            <p class="help-block" v-if="emailError">Sorry! please email us your email id <a :href="mailTo">chottukiedu@gmail.com</a></p>
            </div>
          </div>
      <div class="row">
        <div class="col-lg-8 col-md-10 mx-auto">
            <div class="col-lg-4 ml-auto">
                <a href="img/cke/team-group.jpg">
                  <img src="" alt="">
                </a>
                <p></p>
            </div>
            <div class="col-lg-4 ml-auto">
                <a href="">
                  <img src="" alt="">
                </a>
                <p></p>
            </div>
          <hr>
          <section v-for="article in articles">
            <div class="post-preview">
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
            <hr>
          </section>
          
          <!-- Pager -->
          <div class="clearfix">
            <a class="btn btn-primary float-right" href="#/article">Older Posts &rarr;</a>
          </div>
        </div>
      </div>      
    </div>
    <div class="row">
      <figure class="col-md-12 full-bleed">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 col-md-10 mx-auto">
              <div class="site-heading">
                <h1>Gallery</h1> 
                  <a href="#/gallery">
                    <span class="subheading">There are many you could see that CKE does every day.</span>
                  </a>
              </div>
            </div>
          </div>
        </div>
      </figure>
    </div>
    <div class="container">
        <section class="member">
            <header class="text-center"><div class="content-title text-center">Become one of us</div></header>
              <div class="row">
            
                <article class="col-md-3">
                    <figure>
                        <img src="../assets/img/about/members/06.jpg">
                    </figure>
                </article>
                <article class="col-md-3">
                    <figure>
                        <img src="https://farm1.staticflickr.com/964/40967009195_67548a8714_q.jpg">
                    </figure>
                </article><article class="col-md-3">
                    <figure>
                        <img src="https://farm1.staticflickr.com/965/41865600521_45c3a9371c_q.jpg">
                    </figure>
                </article><article class="col-md-3">
                    <figure>
                        <a href="/#/contact">
                          <img src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22200%22%20height%3D%22200%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20200%20200%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1632b60a81b%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A10pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1632b60a81b%22%3E%3Crect%20width%3D%22200%22%20height%3D%22200%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2274.4296875%22%20y%3D%22104.5%22%3EJoin%20us%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E">
                        </a>
                    </figure>
                </article>
              </div>
        </section>
    </div>  
    <!-- <section v-if="indexBanner">
      <figure v-modal-box :data-modal="indexSrc.index.src">
        <a href="javascript:;">
          <img :src="indexSrc.index.src" style="width:100%"/>
        </a>
      </figure>      
    </section>  --> 
  </section>
</template>

<script>
import poster from "./poster.vue"
import { db } from '../main'
import { validationMixin } from 'vuelidate'
import { required, email } from 'vuelidate/lib/validators'
import { sendEmail } from './common'
import {modalBox} from './modelBox.js'

export default{
  name:"home",
  mixins: [validationMixin],
  directives:{
    modalBox
  },
  data() {
    return {
      articles:[],
      email:"",
      message:"Willing to get them a pen",
      emailError:"",
      posterProp: {
        url:"https://farm1.staticflickr.com/971/26997471917_893f6a2513_b.jpg",
        heading:"School 4 Kids",
        subTitle:"Every child deserves education."
      },
      mailTo:"mailto:chottukiedu@gmail.com",
      emailError:false,
      indexBanner: false,
      indexSrc:{}
    }
  },
  validations:{
    email:{
      required,
      email
    }
  },
  components:{
    "poster-template": poster
  },
  created:function(){
    var self = this;
    db.ref().child("posts").limitToLast(3).on("child_added", function(response){              
        self.articles.push(response.val());              
    })
     db.ref("banner").on("value", function(response){
        self.indexSrc = response.val();  
        if(self.indexSrc.index.src !== '') {
          self.indexBanner = true;
        }
      });
  },
  methods:{
    submit: function(){
       var self = this;
        self.$v.$touch();
        
        if(!self.$v.$invalid) {
            sendEmail({"name":"Willing to donate","phone":"none","email":self.email,"message":"Willing to donate contact me through email."}).then(response =>{
                self.email = "";
            }).catch(error => {
                self.emailError = true;
                self.mailTo += "?body= Hello, I would like to donate please contact me at "+ self.email + "&subject=CKE - I would like to donate";
                console.log(error);
            });
        }
    },
    getArticleLink: function(id){
      return "/article/"+id;
    }          
  
  }
};
</script>
<style scoped>
  section.member {
      margin-top: 3em;
  }
  .full-bleed {
      background-image: url(https://farm1.staticflickr.com/910/41182060124_65727fa621_z.jpg);
      background-size: cover;
      background-position: center;
      height: 26em;
  }
  .site-heading {
      text-align: center;
      color: #fff;
      padding: 200px 0;
  }

  .site-heading a {
      color: #ffffff;
      padding: 1em;
      background: #15151545;
      margin-top: 1em;
      display: inline-block;
  }
  .clearfix{margin: 1em 0;}

  .help-block{
    text-align: center;
    margin-top: 0.2em;
    font-size: 0.8em;
    margin-bottom: 0;
  }
  .member .row article {
    overflow: hidden;
  }
  .member .row article:first-child img{
    transform: scale(1.8);
  }
  @media (max-width:767px) {
    .member .row article {padding: 0;margin-bottom: 10px;}
  }
</style>