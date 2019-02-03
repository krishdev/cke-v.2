<template>	
	<section>
		<poster-template v-bind:posterDetail="posterProp"></poster-template>	
		<div>
			<div class="timeline">
			  <div v-for="(content, index) in timelines" class="container" :class="index == 0 || index % 2 ==0 ? 'left' : 'right'">
			    <div class="content">
			      <h2>{{ content.date | formatDate}}</h2>
			      <i class="fa icon-fa" :class="content.activity == 'Bookish' ? 'fa-star' : content.activity == 'Sports' ? 'fa-trophy' : content.activity == 'Culturals' ? 'fa-child' : '' " aria-hidden="true"></i>
			      <p>{{ content.description }}</p>
			    </div>
			  </div>
			</div>
		</div>
	</section> 
</template>
<script>
	import poster from "./poster.vue"
	import { db } from '../main'

	export default {
		name:"kids",
		components:{
		    "poster-template": poster
	  	},	  	
		data() {
			return {
				posterProp: {
					url:"https://farm1.staticflickr.com/972/41000474825_3bd4b79c92_b.jpg",
			        heading:"Timeline",
			        subTitle:""
				},
				timelines: []
			}
		},
		created:function () {
	  		var self = this;
	        db.ref("timeline").on("value", function(response){
	            self.timelines = response.val();
	            console.log(self.timelines) 
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
		      if(!isNaN( picker.getTime() )){
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
  section.member {
      margin-top: 3em;
  }
  .full-bleed {
      background-image: url(https://farm1.staticflickr.com/910/41182060124_65727fa621_z.jpg);
      background-size: cover;
      background-position: center;
      height: 26em;
  }
  @media (min-width: 1080px) {
  	header.masthead{  	
		background-position-y: -149px;
  	}
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
  /*Timeline*/
  /* The actual timeline (the vertical ruler) */
	.timeline {
	    position: relative;
	    max-width: 1200px;
	    margin: 0 auto;
	}

	.timeline h2 {
	    border-bottom: 1px solid lightgray;
	    padding-bottom: 12px;
	    margin-bottom: 0;
	}

	/* The actual timeline (the vertical ruler) */
	.timeline::after {
	    content: '';
	    position: absolute;
	    width: 3px;
	    background-color: #cfaaff;
	    top: 0;
	    bottom: 0;
	    left: 50%;
	}

	/* Container around content */
	.container {
	    padding: 10px 40px;
	    position: relative;
	    background-color: inherit;
	    width: 50%;
	}

	/* The circles on the timeline */
	.container::after {
	    content: '';
	    position: absolute;
	    width: 25px;
	    height: 25px;
	    right: -14px;
	    background-color: white;
	    border: 2px solid #FF9F55;
	    top: 15px;
	    border-radius: 50%;
	    z-index: 1;
	}

	/* Place the container to the left */
	.left {
	    left: 0;
        margin-left: 0;
	}

	/* Place the container to the right */
	.right {
	    left: 50%;
        margin-left: 0;
	}

	/* Add arrows to the left container (pointing right) */
	.left::before {
	    content: " ";
	    height: 0;
	    position: absolute;
	    top: 22px;
	    width: 0;
	    z-index: 1;
	    right: 30px;
	    border: medium solid white;
	    border-width: 10px 0 10px 10px;
	    border-color: transparent transparent transparent white;
	}

	/* Add arrows to the right container (pointing left) */
	.right::before {
		content: " ";
	    height: 0;
	    position: absolute;
	    top: 22px;
	    width: 0;
	    z-index: 1;
	    left: 30px;
	    border: medium solid white;
	    border-width: 10px 10px 10px 0;
	    border-color: transparent white transparent transparent;
	}
	/* Fix the circle for containers on the right side */
	.right::after {
	    left: -12px;
	}
	
	

	/* The actual content */
	.content {
	    padding: 20px 30px;
	    background-color: white;
	    position: relative;
	    border-radius: 6px;
	    border: 1px solid #9a9a9a52;
	    box-shadow: 1px 5px 1px #8f8f8f85;
	}

	/* Media queries - Responsive timeline on screens less than 600px wide */
	@media screen and (max-width: 600px) {
	  /* Place the timelime to the left */
	  .timeline::after {
	    left: 31px;
	  }
	  
	  /* Full-width containers */
	  .container {
	    width: 100%;
	    padding-left: 70px;
	    padding-right: 25px;
	  }
	  
	  /* Make sure that all arrows are pointing leftwards */
	  .container::before {
	    left: 60px;
	    border: medium solid white;
	    border-width: 10px 10px 10px 0;
	    border-color: transparent white transparent transparent;
	  }

	  /* Make sure all circles are at the same spot */
	  .left::after, .right::after {
	    left: 15px;
	  }
	  @media (max-width: 600px){
	  	/* Make sure all circles are at the same spot */
		  .left::after, .right::after {
		    left: 20px;
		  }
	  }
	  /* Make all right containers behave like the left ones */
	  .right {
	    left: 0%;
	  }
	}
	.timeline .icon-fa {
		position: absolute;
	    right: -9px;
	    top: -12px;
	    color: cyan;
	    font-size: 1.2em;
	}
</style>