import VueStore from "vuex"
import Vue from 'vue'

var BStore ={
    namespaced: true,
    state:{
        countB:0
    },
    mutations:{
        update(state,number){
            state.countB+= number
        }
    },
    actions:{   
        doUpdate(context,n){
            context.commit("update",n)
        }
    }
}
export default BStore