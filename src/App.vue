<template>
  <div id="app">
    <navigation-template></navigation-template>
    <router-view/>
    <footer-template></footer-template>
  </div>
</template>

<script>
import navigation from "./components/navigation_header.vue"
import footer from "./components/footer.vue"
export default {
  name: 'App',
  created:function(){
     
  },
  components:{
    'navigation-template':navigation,
    'footer-template':footer
  },
}
</script>

<style> 
  @import '/plugins/font-awesome/css/font-awesome.css';
  @import 'bootstrap';
   @import '/assets/css/clean-blog.min.css';
   @import '/assets/css/modalBox.css';
 body{
     overflow-x: hidden;
 } 
.moto {
    font-size: 2em;
    font-family: 'Josefin Slab', serif;
    color: #007bff;
}
.founderImg {
    width: 253px;
    float: left;
    height: 263px;
    overflow: hidden;
    position: relative;
    text-align: center;
}
.founderImg .tagLine {
    position: absolute;
    bottom: 0;
    left: 55px;
    color: #fff;
}
    .imgGrid {
    width: 100%;
    height: 323px;
    overflow: hidden;
    border: 1px solid lightgray;
    -webkit-box-shadow: 6px 8px 5px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 6px 8px 5px 0px rgba(0, 0, 0, 0.75);
    box-shadow: 6px 8px 5px 0px rgba(0, 0, 0, 0.75);
    margin: 2px 0;
}
@media screen and (min-width: 639px){
    .imgGrid {
        width: 46%;
        margin: 2%;
        float: left;
    }
}
@media screen and (min-width: 1024px){
    .imgGrid {
        width: 27%;
        margin: 3%;
        float: left;
    }
}

section.member:after {
    content: " ";
    clear: both;
}

section.member {
    max-width: 66.666667%;
    margin: 0 auto;
}

.member img {
    width: 100%;
    transform: scale(1.0);
}
.member .imgGrid figure {
    height: 200px;
    overflow: hidden;
}
.member .imgGrid article .moto {
    font-size: 1em;
    color:#000;
    font-weight:normal;
}
.member .imgGrid article {
    padding: 2px 15px;   
}
.member .imgGrid article p,
.member .imgGrid article a{
    margin:0;
    font-size: 14px;
}
.member .imgGrid hr{
    margin:0;
}
.member .moto {
    text-align: center;
}
</style>
