<template>
	<section>
		<poster-template v-bind:posterDetail="posterProp"></poster-template>
		<div class="container">
			<ul class="flex-container">
			  <li class="flex-item" v-for="p in press">
			  	<div class="press-container">
					<header>
						<h3>{{p.title}}</h3>
						<div>{{p.date | formatDate}}</div>					
						<a target="_blank" :href="p.url">click here</a>
					</header>
			  	</div>		  
			  </li>
			</ul>
			<div class="clr"></div>
		</div>
	</section>
</template>
<script>
	import poster from "./poster.vue"
	import { db } from '../main'
	import bgImage from "../assets/img/press-releases.jpg"

	export default {
		name:"press",
		components:{
		    "poster-template": poster
	  	},	  	
		data() {
			return {
				posterProp: {
					url: bgImage,
			        heading:"Press Release",
			        subTitle:""
				},
				press: []
			}
		},
		created:function () {
	  		var self = this;
	        db.ref("press").on("value", function(response){
	            self.press = response.val();
	            console.log(self.press);
	        });
	  	},
	  	filters: {		    
		  formatDate: function(date) {
		      var picker = new Date(date),
		          month,
		          finalFormat;
		    var self = this;
		    var months =["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
		            //debugger
		      if(!isNaN( picker.getTime() )) {
		        month = months[picker.getMonth()]
		      } else {
		        picker = new Date();
		        month = months[picker.getMonth()]
		      }
		      finalFormat = month + " "+ picker.getUTCDate() + ", " + picker.getFullYear();
		      return finalFormat;
		    }
		}
	}
</script>
<style scoped>	
	.flex-container {
	  padding: 0;
	  margin: 0;
	  list-style: none;
	}
	.clr{
		clear: both
	}
	.flex-item {	  
	  float: left;
	}
	@media (min-width: 1024px) {
		.flex-item {	  	 
		  width: 370px;
		}
	}
	.press-container a {
		color: #007bff;
		font-size: 0.8em;
	}
</style>