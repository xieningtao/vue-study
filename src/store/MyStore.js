import AStore from './AStore'
import BStore from './BStore'
import Vue from 'vue'
import VueStore from 'vuex'
Vue.use(VueStore)

const myStore = new VueStore.Store({
    modules: {

        a:{
         ...AStore
        },
        b:{
            ...BStore
        }
    }
})
export default myStore;