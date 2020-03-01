<template>
    <div>
        <test-child v-on:show-me="testClick" v-bind:my-msg=111111></test-child>

        <test-slot>
            <p>{{slotMsg}}</p>
        </test-slot>

    </div>
</template>

<script>
import TestChild  from './TestChild'
import TestSlot from './TestSlot'
export default {
    data(){
        return{
            msg:"hello world",
            slotMsg:"this is slotMag"
        }
    },
    components:{
        TestChild,TestSlot
    },
    methods:{
        testClick:function(msg){
            console.log("click test msg: "+msg)
        }
    }
}
</script>

<style>

</style>