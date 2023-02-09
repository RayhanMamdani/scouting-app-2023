<template >
    <div class="tile is-ancestor ">
     
        <div class="tile is-parent is-vertical">
            <button  @click = "gpAdd('cone',0,2)" class="button is-large box is-warning is-light box has-text-centered is-responsive">△</button>
            <button  @click = "gpAdd('cone',0,1)" class="button is-large tile box is-warning is-light box has-text-centered is-responsive">△</button>
            <div class="buttons tile has-addons has-text-centered">
                    <button @click = "gpAdd('cone',0,0)" class="button is-large column is-warning is-light is-responsive ">△</button>
                    <button @click = "gpAdd('cube',0,0)" class=" button is-large column is-link is-light is-responsive">□</button>
            </div>
        
        </div>
        <div class="tile is-parent is-vertical">
            <button @click = "gpAdd('cone',0,0)" class="button is-large tile box is-warning is-light box has-text-centered is-responsive ">□</button>
            <button class="button is-large tile box is-warning is-light box has-text-centered is-responsive">□</button>
            <div class="buttons tile has-addons has-text-centered ">
                    <button class="button is-large column is-warning is-light is-responsive ">△</button>
                    <button class=" button is-large column is-link is-light is-responsive">□</button>
            </div>
        </div> 
        <div class="tile is-parent is-vertical">
            <button class="button is-large box is-warning is-light box has-text-centered is-responsive">△</button>
            <button class="button is-large tile box is-warning is-light box has-text-centered is-responsive">△</button>
            <div class="buttons tile has-addons has-text-centered">
                    <button class="button is-large column is-warning is-light is-responsive">△</button>
                    <button class=" button is-large column is-link is-light is-responsive">□</button>
            </div>
        </div>
    </div>
    
</template>

<script>
import {watchEffect} from "vue";
export default {

 created(){
    watchEffect(() => {
            this.$emit('sendData', {
                gpScored: this.gpScored,
                gpTotal: this.gpTotal,
    
            })
        })
    },

data() {
    return {
        gpScored:[],   
        gpTotal:0,
    }
},

methods: {

gpAdd(type, column, height){
    // type: Cone or Cube , height: 0-bottom 1-middle 2-top, column: 0-left 1-middle 2-right
     let gp = {type,column,height}
    this.gpScored.push(gp);
    
    this.gpTotal = this.gpScored.length;
},
gpRemove(){
this.gpScored.slice(this.gpScored.length-1);
},

test(){
    console.log(this.gpTotal);
}

},


}

</script>