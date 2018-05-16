<template>
   <header class="masthead" :style="style">
        <div class="overlay"></div>
        <div class="container">
          <div class="row">
            <div class="col-lg-8 col-md-10 mx-auto">
              <div class="page-heading" v-if="heading">
                <h1>{{heading}}</h1>
                <h2 class="subheading">{{subTitle}}</h2>
                <span class="meta" v-if="date">Posted by
                  <a href="#">CKE</a>
                  {{date}}</span>
              </div>
            </div>
          </div>
        </div>
      </header>
</template>
<script>
export default{
  name:"poster-template",
  props:["posterDetail"],
  data(){
    return {
      style:{
        backgroundImage:"url(" + this.posterDetail.url + ")",              
      },
      heading: this.posterDetail.heading,
        subTitle: this.posterDetail.subTitle,
        date: this.posterDetail.date
    };
  },
  created: function() {
  }
};
</script>