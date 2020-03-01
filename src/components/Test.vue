<template>
    <div>
        <test-child v-on:show-me="testClick" v-bind:my-msg=111111></test-child>

        <test-slot>
            <p>{{slotMsg}}</p>
        </test-slot>

        <p>store count {{nativeCount}} {{myCount}} {{countAlias}}</p>

        <router-view></router-view>
    </div>
</template>

<script>
import TestChild  from './TestChild'
import TestSlot from './TestSlot'
import {mapState,mapActions} from 'vuex'
export default {
    data(){
        return {
            msg:"hello world",
            slotMsg:"this is slotMag",
            constCount:10
        }
    },
    components:{
        TestChild,TestSlot
    },
    computed:{
        nativeCount(){
            return this.constCount+1;
        },
        ...mapState({
            countAlias:state=>{
                return state.a.count;
            },
            myCount(state){
                return state.b.countB + this.constCount
            }
        })
    },
    created: function () {
    // `this` 指向 vm 实例
    console.log('this is home test')
   
  },
    methods:{
        testClick:function(msg){
            console.log("click test msg: "+msg)
            // this.$store.dispatch("a/doUpdate",10)
            this.myUpdate(3)
        },
        ...mapActions("b",{
            myUpdate:"doUpdate"
        })
    }
}
</script>

<style>

</style>