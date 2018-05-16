export default {
    data(){
        return {
            $v:{
                $invalid:false,
                $dirty:false   
            }
        }
    },
    created: function(){
        console.log("validation");
        debugger;
    }
}