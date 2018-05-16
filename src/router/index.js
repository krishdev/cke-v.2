import Vue from 'vue'
import Router from 'vue-router'
import Read from '@/components/readPost'
import Write from '@/components/writePost'
import article from '@/components/article'
import index from '@/components/index'
import allImages from '@/components/images'
import Gallery from '@/components/gallery'
import Member from '@/components/Join'
import About from '@/components/about'
import Contact from '@/components/contact'

Vue.use(Router)

const router = new Router({
  routes: [
    {
        path: "/article", 
        name: "Read", 
        component:Read
    },
    {
        path: "/article/:id", 
        name: "Article", 
        component:article
    },
    {
        path: "/writePost", 
        name: "WritePost", 
        component:Write
    },
    {
        path:"/",
        name:"home",
        component:index
    },      
    {
        path:"/loadImages",
        name:"Images",
        component:allImages
    },      
    {
        path:"/gallery",
        name:"Gallery",
        component:Gallery
    },      
    {
        path:"/about",
        name:"About",
        component:About
    },      
    {
        path:"/contact",
        name:"Contact",
        component:Contact
    }
    
  ]
})
router.beforeEach((to, from, next) => {
window.scrollTo(0, 0);
var navElm = document.querySelector("#navbarResponsive");
if(navElm){
    navElm.classList.remove("show");
}
next();
})
export default router;