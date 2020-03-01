<template>
    <div>
        <p>{{myMsg}}</p>

        <div v-on:click="clickme">click me</div>
    </div>
</template>

<script>
export default {
    methods:{
        clickme:function(){
            this.$emit("show-me","this is msg")
        }
    },
    props:{
        myMsg:{
            type:Number,
            default:0
        },

    }
}
</script>

<style>

</style>