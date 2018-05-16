import Vue from 'vue';
import VueResource from 'vue-resource';
Vue.use(VueResource);
export const sendEmail = function(data) {
    var formData = new FormData();
    formData.append('name', data.name);
    formData.append('email', data.email);
    formData.append('phone', data.phone);
    formData.append('message', data.message);
    return  Vue.http.post("././mail/contact_me.php", data,{
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'            
        },
        'emulateJSON': true
    })
};
