<template>
    <div>
        <p>this is home aaaaaaaaaaaaaaaaa</p>
    </div>
</template>

<script>
export default {
    data(){
        return {
            msg:"hello"
        }
    },
    created: function () {
    // `this` 指向 vm 实例
    console.log('a is: ' + this.$router)
  }
}
</script>