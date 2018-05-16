<template>
    <section v-title data-title="CKE - Create an article">
        
        <div style="background:blueviolet;width:100%; height:150px;"></div>
        <div v-show="!showValid" class="btn-signIn">
            <div class="container text-left">
                <div class="form-group">
                    <label for="email">Email Id</label>
                    <input type="email" v-model="form.email" class="form-control" id="email" placeholder="email">
                    <p class="help-block text-danger" v-if="$v.form.$dirty && $v.form.email.$invalid">Valid email is required.</p>
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" v-model="form.password" class="form-control" id="password" placeholder="password">
                    <p class="help-block text-danger" v-if="$v.form.$dirty && $v.form.password.$invalid">Password is required.</p>
                </div>
                <div class="form-group">
                    <p class="help-block text-danger" v-if="loginStatus">Either username or password doesn't match.</p>
                    <button class="btn-signin" @click.prevent="login">Sign</button>
                </div>
            </div>            
        </div>
        <div v-if="showValid && !submited" class="content-middle" style="padding-top: 5%;text-align: left;">
            <article >
                <div>
                    <label>Poster Source</label>
                    <a href="#/loadImages" class="selectImage" target="_blank">Select Image Urls</a>
                    <input type="text" class="form-control" v-model="posts.imgPoster">
                    <p class="help-block text-danger" v-if="$v.posts.$dirty && $v.posts.imgPoster.$invalid">This field is required.</p>
                </div>
                <div>
                    <label>Heading</label>
                    <input type="text" class="form-control" v-model.trim="posts.heading">
                    <p class="help-block text-danger" v-if="$v.posts.$dirty && $v.posts.heading.$invalid">This field is required.</p>
                </div>
                <div>
                    <label>Sub Title</label>
                    <input type="text" class="form-control" v-model.trim="posts.subTitle">
                    <p class="help-block text-danger" v-if="$v.posts.$dirty && $v.posts.subTitle.$invalid">This field is required.</p>
                </div>
                <div>
                    <label>Date</label>
                    <input id="js-date" class="form-control" type="text" v-model.trim="posts.date">                            
                    <p class="help-block text-danger" v-if="$v.posts.$dirty && $v.posts.date.$invalid">This field is required.</p>
                </div>
                <article v-for="(post,index) in posts.contents" style="margin-top: 5%;">
                    <div>
                        <label>Paragraph Title</label>
                        <input type="text" class="form-control" v-model="post.paraTitle">
                    </div>
                    <label>Paragraph</label>
                    <textarea class="para" v-model="post.para"></textarea>                                       
                    <div v-show="post.showImg"  class="input-group">
                        <div>
                            <label>Image Source</label> 
                            <input type="text" class="img" v-model="post.img.imgSrc">
                        </div> 
                        <div>
                            <label>Image description</label>
                            <input type="text" class="img" v-model="post.img.imgText">
                        </div>                                                                           
                    </div>   
                    <a class="btn btn-primary" v-on:click="post.showImg = !post.showImg">
                        <span v-show="!post.showImg">Add Image</span>
                        <span v-show="post.showImg">Hide Image</span>                    
                    </a>
                    <a href="#/loadImages" target="_blank" class="selectImage" v-show="post.showImg">Select Image Urls</a>                 
                </article>
                <div title="add-para" class="add-icon">
                    <a class="btn btn-warning" v-on:click="addArticle()">
                        Add paragraph
                    </a>
                </div>
                <div title="Create Post">
                    <a class="btn btn-warning" v-on:click="createThePost()">
                        Create Post
                    </a>
                </div>
            </article>
        </div>
        <div class="reset-form" v-if="submited">
            <section>
                <h4>The article has been posted successfuly</h4>
            </section>
            <button @click.prevent="reset">Post Again</button>
        </div>
    </section>
</template>
<script>
import { validationMixin } from 'vuelidate'
import { required, minLength, email } from 'vuelidate/lib/validators'

var db = window.db;
var fb = window.fb;
export default{
    name: "writePost",
    mixins: [validationMixin],
    data(){
        return{
            submited:false,
            showValid:false,
            token: "",
            user: "",
            posts: {
                heading:"",
                subTitle:"",
                date:"",
                imgPoster:"",                    
                contents: [{
                    "paraTitle":"",
                    "para":"",
                    "img": {
                        imgSrc:"",
                        imgText:""
                    },
                    "showImg": false
                }]
            },
            form:{
                email:"",
                password:""                
            },
            loginStatus: false
        }            
    },
    validations:{
        form:{
            email:{
                required,
                email
            },
            password:{
                required
            }
        },
        posts:{
            heading:{
                required
            },
            subTitle:{
                required
            },
            date:{
                required
            },
            imgPoster:{
                required
            }
        }
    },
    created: function(){
        var self = this;
        
        //setTimeout(function(){
            // $('#js-date').datepicker({ 
            //     autoclose: true                
            // });
            // $('#js-date').on('changeDate', function(ev){
            //     self.datePicker();
            // });
        //});
        window.fb.onAuthStateChanged(function(user) {
            if (user) {
                self.showValid = true;
            } else {
                // No user is signed in.
            }
            });
    },
    methods: {
        createThePost: function(){
            
            var self = this;
            self.$v.posts.$touch();
            
            if(!self.$v.posts.$invalid) {
                this.submited = true;
                var db = window.db.ref();
                db = db.child("posts");
                var post = this.posts;
                post.id = (post.heading+post.date).replace(/[^A-Za-z0-9]+/g,"-");
                post.timeStamp = Math.round(new Date().getTime()/1000);
                db.push(post);
            }
        },
        datePicker: function(){
            this.posts.date = $("#js-date").val()
        },
        addArticle: function() {
            this.posts.contents.push({
                "paraTitle":"",
                "para":"",
                "img": {
                    imgSrc:"",
                    imgText:""
                },
                "showImg": false
            })
        },
        login: function() {
            
            var self = this;            
            var provider = window.provider;
      
            self.$v.form.$touch();
            debugger
            if(!self.$v.form.$invalid) {
                window.fb.signInWithEmailAndPassword(self.form.email, self.form.password)
                .then(function(result) {
                    debugger;
                    self.token = result.credential.accessToken;
                    self.user = result.user;    
                    if(result.emailVerified || self.user){
                        self.showValid = true;
                    }else{
                        self.loginStatus = true;
                    }                    
                })
                .catch(function(error) {
                    self.loginStatus = true;
                    self.loginStatus = true;
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    console.log(errorMessage);
                });
            }
            // window.fb.signInWithPopup(provider).then(function(result) {
            //     self.token = result.credential.accessToken;
            //     self.user = result.user;        
            //     self.showValid = true;
            // }).catch(function(error) {
            //     var errorCode = error.code;
            //     var errorMessage = error.message;
        
            //     console.log(error.code)
            //     console.log(error.message)
            // });
            
        },
        logout: function() {
            var self = this;
            window.fb.signOut()
        
            .then(function() {
                self.showValid = false;
            }, function(error) {
                console.log('Signout Failed')
            });
                
        },
        reset: function(){
            this.submited = false;
            this.posts = {
                heading:"",
                subTitle:"",
                date:"",
                imgPoster:"",
                contents: [{
                    "paraTitle":"",
                    "para":"",
                    "img": {
                        imgSrc:"",
                        imgText:""
                    },
                    "showImg": false
                }]
            }
        }
    }
  };
</script>
<style scoped>
    .help-block{
        text-align: left;
        margin-top: 0.2em;
        font-size: 0.8em;
        margin-bottom: 0;
    }
    .selectImage{
        color: #0085a1;
        text-decoration: underline;
    }    
    label{display: block;} 
    textarea{width:100%;}           
    .input-group > div {
        margin-left: 1.4%;
        margin-right: 1.4%;
        width: 46.8%;
    }
    .input-group > div:first-child{
        margin-left: 0;
    }
    .input-group > div:last-child{
        margin-right: 0;
    }
    a.btn {
        margin-top:10px;
    }
    .btn-signin {
        height: 50px;
        overflow: hidden;
        width: 250px;
        color: #fff;
        background-color: #dd4b39;
        border: 0;
        cursor: pointer;
        margin-bottom: 10px;
    }
    .btn-signIn {
        position: absolute;
        top: 40%;
        left: 0;
        width: 100%;
    }
    button.btn-signin:focus {
        border: 0;
    }
    button.btn-signin:hover {
        background-color: #e56959;
    }
    .btn-signin img {
        width: 40px;
        padding-right: 10px;
    }
    body{
        min-height: 100vh;
        overflow-x: hidden;
        position: relative;
    }
</style>