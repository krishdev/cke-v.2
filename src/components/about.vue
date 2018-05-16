<template>
  <section v-title data-title="CKE - About us">
    <poster-template v-bind:posterDetail="posterProp"></poster-template>
    <!-- Main Content -->
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-md-10 mx-auto">
     <div class="moto">
        <span class="firstLetter red">O</span>ur Moto: <span class="red">"Every kid deserves education."</span>
    </div>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span class="firstLetter">W</span>e are a group of dynamic, vibrant young diversified working professionals connected together for a common cause which ensures that every child receives their right towards education. We strongly believe that illiteracy is the root cause of all evils in our society &amp; wish to address it at the very core by focusing kids living in the streets, imminent from migrant families &amp; from slums (basti). We have structured ourselves to keenly observe the community, understand their way of living, their necessities, importance towards education, life style of kids, and several other essential requirements.</p>
			<figure class="founderImg" style="padding:2em">
				<img src="../assets/img/about/yuva.jpg" class="img-fluid" alt="founder Image">
				<div class="tagLine">
					<div>Yuva</div>
					<b> Founder of CKE </b>
				</div>
			</figure>
			<p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Based on these findings we take our decision in working for education for those community kids. We also address few of their basic needs, by arranging free medical camps which will increase their trust on us too. Occasionally food packets distribution will happen in the community for kids alone.</p>

			<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Currently we have classes in the mornings of weekends only. Video session, paintings, verbal interaction,story creation form the main content delivery for the bridge course that we are executing before joining them in school. Simultaneously we counsel the parents to make them understand the importance of education and get permission to join them in school. We also search for nearby Government Schools (with or without hostel facilities) and complete the pre-works for their smooth admission in the next academic year.</p>
			<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Regular visit to the hostels, getting feedback from teachers, arrange volunteers to teach them in hostel premises have been planned &amp; executed successfully. Based on our progress, we then target another community &amp; repeat the whole process.</p>
    
</div>
<!-- photo -->
<section class="member"><div class="moto">
        <span>We as a team</span>
    </div>
    
    <div class="imgGrid ng-scope" ng-repeat="image in aCtrl.images | orderBy: 'name'" style="">
				<figure>
					<img  alt="Memeber image" src="../assets/img/about/members/10.jpg">
				</figure>
				<article>
					<h3 class="moto ng-binding" ng-bind="image.name">Alekhya</h3>
					<hr>
					<!-- ngIf: image.proffession --><p ng-if="image.proffession" ng-bind-html="image.proffession" class="ng-binding ng-scope">House Maker</p><!-- end ngIf: image.proffession -->
					<a>Status: Active</a>
				</article>
			</div><!-- end ngRepeat: image in aCtrl.images | orderBy: 'name' --><div class="imgGrid ng-scope" ng-repeat="image in aCtrl.images | orderBy: 'name'">
				<figure>
					<img  alt="Memeber image" src="../assets/img/about/members/04.jpg">
				</figure>
				<article>
					<h3 class="moto ng-binding" ng-bind="image.name">Atluri Bhanu chander</h3>
					<hr>
					<!-- ngIf: image.proffession -->
					<a>Status: Active</a>
				</article>
			</div><!-- end ngRepeat: image in aCtrl.images | orderBy: 'name' --><div class="imgGrid ng-scope" ng-repeat="image in aCtrl.images | orderBy: 'name'">
				<figure>
					<img  alt="Memeber image" src="../assets/img/about/members/09.jpg">
				</figure>
				<article>
					<h3 class="moto ng-binding" ng-bind="image.name">Bhavika</h3>
					<hr>
					<!-- ngIf: image.proffession --><p ng-if="image.proffession" ng-bind-html="image.proffession" class="ng-binding ng-scope">MBA Student in Symbiosis</p><!-- end ngIf: image.proffession -->
					<a>Status: Active</a>
				</article>
			</div><!-- end ngRepeat: image in aCtrl.images | orderBy: 'name' --><div class="imgGrid ng-scope" ng-repeat="image in aCtrl.images | orderBy: 'name'">
				<figure>
					<img  alt="Memeber image" src="../assets/img/about/members/12.jpg">
				</figure>
				<article>
					<h3 class="moto ng-binding" ng-bind="image.name">Madhavi</h3>
					<hr>
					<!-- ngIf: image.proffession --><p ng-if="image.proffession" ng-bind-html="image.proffession" class="ng-binding ng-scope">Project manager in Dr.Reddys <b>Co-founder of CKE</b></p><!-- end ngIf: image.proffession -->
					<a>Status: Active</a>
				</article>
			</div><!-- end ngRepeat: image in aCtrl.images | orderBy: 'name' --><div class="imgGrid ng-scope" ng-repeat="image in aCtrl.images | orderBy: 'name'">
				<figure>
					<img  alt="Memeber image" src="../assets/img/about/members/02.jpg">
				</figure>
				<article>
					<h3 class="moto ng-binding" ng-bind="image.name">Prasanna</h3>
					<hr>
					<!-- ngIf: image.proffession -->
					<a>Status: Active</a>
				</article>
			</div><!-- end ngRepeat: image in aCtrl.images | orderBy: 'name' --><div class="imgGrid ng-scope" ng-repeat="image in aCtrl.images | orderBy: 'name'">
				<figure>
					<img  alt="Memeber image" src="../assets/img/about/members/11.jpg">
				</figure>
				<article>
					<h3 class="moto ng-binding" ng-bind="image.name">Ravi</h3>
					<hr>
					<!-- ngIf: image.proffession --><p ng-if="image.proffession" ng-bind-html="image.proffession" class="ng-binding ng-scope">General Manager</p><!-- end ngIf: image.proffession -->
					<a>Status: Active</a>
				</article>
			</div><!-- end ngRepeat: image in aCtrl.images | orderBy: 'name' --><div class="imgGrid ng-scope" ng-repeat="image in aCtrl.images | orderBy: 'name'">
				<figure>
					<img  alt="Memeber image" src="../assets/img/about/members/01.jpg">
				</figure>
				<article>
					<h3 class="moto ng-binding" ng-bind="image.name">Reddy Lakshmi Narasaiah</h3>
					<hr>
					<!-- ngIf: image.proffession --><p ng-if="image.proffession" ng-bind-html="image.proffession" class="ng-binding ng-scope">Scientist in Dr.Reddys</p><!-- end ngIf: image.proffession -->
					<a>Status: Active</a>
				</article>
			</div><!-- end ngRepeat: image in aCtrl.images | orderBy: 'name' --><div class="imgGrid ng-scope" ng-repeat="image in aCtrl.images | orderBy: 'name'">
				<figure>
					<img  alt="Memeber image" src="../assets/img/about/members/06.jpg">
				</figure>
				<article>
					<h3 class="moto ng-binding" ng-bind="image.name">Rohit</h3>
					<hr>
					<!-- ngIf: image.proffession --><p ng-if="image.proffession" ng-bind-html="image.proffession" class="ng-binding ng-scope">Scientist in Dr.Reddys</p><!-- end ngIf: image.proffession -->
					<a>Status: Active</a>
				</article>
			</div><!-- end ngRepeat: image in aCtrl.images | orderBy: 'name' --><div class="imgGrid ng-scope" ng-repeat="image in aCtrl.images | orderBy: 'name'">
				<figure>
					<img ng-src="photos/members/07.jpg" alt="Memeber image" src="../assets/img/about/members/07.jpg">
				</figure>
				<article>
					<h3 class="moto ng-binding" ng-bind="image.name">Rupesh</h3>
					<hr>
					<!-- ngIf: image.proffession --><p ng-if="image.proffession" ng-bind-html="image.proffession" class="ng-binding ng-scope">Software Dev Engineer</p><!-- end ngIf: image.proffession -->
					<a>Status: Active</a>
				</article>
			</div><!-- end ngRepeat: image in aCtrl.images | orderBy: 'name' --><div class="imgGrid ng-scope" ng-repeat="image in aCtrl.images | orderBy: 'name'">
				<figure>
					<img  alt="Memeber image" src="../assets/img/about/members/05.jpg">
				</figure>
				<article>
					<h3 class="moto ng-binding" ng-bind="image.name">Seenu vasan</h3>
					<hr>
					<!-- ngIf: image.proffession -->
					<a>Status: Active</a>
				</article>
			</div><!-- end ngRepeat: image in aCtrl.images | orderBy: 'name' --><div class="imgGrid ng-scope" ng-repeat="image in aCtrl.images | orderBy: 'name'">
				<figure>
					<img  alt="Memeber image" src="../assets/img/about/members/08.jpg">
				</figure>
				<article>
					<h3 class="moto ng-binding" ng-bind="image.name">Sravan</h3>
					<hr>
					<!-- ngIf: image.proffession --><p ng-if="image.proffession" ng-bind-html="image.proffession" class="ng-binding ng-scope">Design Engineer</p><!-- end ngIf: image.proffession -->
					<a>Status: Active</a>
				</article>
			</div><!-- end ngRepeat: image in aCtrl.images | orderBy: 'name' --><div class="imgGrid ng-scope" ng-repeat="image in aCtrl.images | orderBy: 'name'">
				<figure>
					<img  alt="Memeber image" src="../assets/img/about/members/03.jpg">
				</figure>
				<article>
					<h3 class="moto ng-binding" ng-bind="image.name">Vijaya</h3>
					<hr>
					<!-- ngIf: image.proffession --><p ng-if="image.proffession" ng-bind-html="image.proffession" class="ng-binding ng-scope">Scientist in Dr.Reddys</p><!-- end ngIf: image.proffession -->
					<a>Status: Active</a>
				</article>
			</div>
          </section>
      </div>
    </div>
  </section>
</template>
<script>
import poster from "./poster.vue"
export default {
    name:"About",
    data(){
        return{          
        posterProp: {
            url:"https://farm1.staticflickr.com/972/40054139440_db0c5b9387_b.jpg",
            heading:"About CKE",
            subTitle:"This is what we do."
        }
        }
    },
    components:{
    "poster-template": poster
    }
}
</script>
