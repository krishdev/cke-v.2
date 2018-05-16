<template>
    <section v-title data-title="CKE - Contact us">
        <poster-template v-bind:posterDetail="posterProp"></poster-template>
         <div class="container">
        <div class="row">
          <div class="col-lg-8 col-md-10 mx-auto">
            <p v-if="response">We will get back to you at our earliest. Thanks for stopping by.</p>
            <!-- Contact Form - Enter your email address on line 19 of the mail/contact_me.php file to make this form work. -->
            <!-- WARNING: Some web hosts do not allow emails to be sent through forms to common mail hosts like Gmail or Yahoo. It's recommended that you use a private domain email address! -->
            <!-- To use the contact form, your site must be on a live web host with PHP! The form will not work locally! -->
            <form name="sentMessage" id="contactForm" @submit.prevent="formSubmit" novalidate="" class="error">
              <div class="control-group">
                <div class="form-group floating-label-form-group controls floating-label-form-group-with-value">
                  <label>Name</label>
                  <input type="text" class="form-control" v-model="form.name" placeholder="Name" id="name" required="" data-validation-required-message="Please enter your name." aria-invalid="false">
                  <p v-if="$v.form.$dirty && !$v.form.name.required" class="help-block text-danger">Please enter your name.</p>
                </div>
              </div>
              <div class="control-group">
                <div class="form-group floating-label-form-group controls">
                  <label>Email Address</label>
                  <input type="email" class="form-control" v-model="form.email" placeholder="Email Address" id="email" required="" data-validation-required-message="Please enter your email address." aria-invalid="false">
                  <p v-if="$v.form.$dirty && !$v.form.email.required" class="help-block text-danger">Please enter a email address.</p>
                  <p v-if="$v.form.$dirty && !$v.form.email.email" class="help-block text-danger">Please enter a valid email address.</p>
                </div>
              </div>
              <div class="control-group">
                <div class="form-group col-xs-12 floating-label-form-group controls">
                  <label>Phone Number</label>
                  <input type="tel" class="form-control" v-model="form.phone" placeholder="Phone Number" id="phone" required="" data-validation-required-message="Please enter your phone number." aria-invalid="false">
                  <p v-if="$v.form.$dirty && !$v.form.phone.required" class="help-block text-danger">Please enter your phone number.</p>
                </div>
              </div>
              <div class="control-group">
                <div class="form-group floating-label-form-group controls">
                  <label>Message</label>
                  <textarea rows="5" class="form-control" v-model="form.message" placeholder="Message" id="message" required="" data-validation-required-message="Please enter a message." aria-invalid="false"></textarea>
                  <p v-if="$v.form.$dirty && !$v.form.message.required" class="help-block text-danger">Please enter a message.</p>
                </div>
              </div>
              <br>
              <div class="control-group" v-if="emailError">
                  <p>Sorry! something wrong on our end. We couldn't pass your message plesae try to email us <a :href="mailTo">chottukiedu@gmail.com</a></p>
              </div>
              <div class="form-group">
                <button type="submit" class="btn btn-primary" id="sendMessageButton">Send</button>
              </div>
            </form>
          </div>
        </div>
      </div>
  
      <hr>
    </section>
</template>

<script>
import poster from "./poster.vue"
import bgImage from "../assets/img/contact/poster.jpg"
import { validationMixin } from 'vuelidate'
import { required, minLength, email } from 'vuelidate/lib/validators'
import { sendEmail } from './common'

export default {
    name:"Contact",
    mixins: [validationMixin],
    data(){
        return{          
            posterProp: {
                url:bgImage,
                heading:"Contact Us",
                subTitle:"Have questions? I have answers."
            },
            form:{
                name:"",
                email:"",
                phone:"",
                message:""
            },
            response:false,
            emailError: false,
            mailTo:"mailto:chottukiedu@gmail.com"            
        }
    },
    validations: {
        form:{
            name:{
                required
            },
            phone:{
                required,
                minLength:minLength(6)
            },
            email:{
                required,
                email                
            },
            message:{
                required,
                minLength:minLength(2)
            }
        }
    },
    components:{
    "poster-template": poster
    },
    methods:{
        formSubmit: function(event){
            var self = this;
            self.$v.$touch();
            
            if(!self.$v.$invalid) {
                sendEmail(self.form).then(response =>{
                    self.response = true;
                    self.email = "";
                }).catch(error => {
                    self.emailError = true;
                    self.mailTo += "?body="+ self.form.message + "&subject=CKE - Contact Us "+self.form.name;
                    console.log(error);
                });
            }

        },
        validateEmail:function(value){
            var valid = /^(([^<>()[\]\\.,;:#\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,6}))$/.test(value);
            return valid;
        }
    }
}
</script>

<style>
form#contactForm, p.help-block.text-danger{
    text-align: left!important;
}
</style>
