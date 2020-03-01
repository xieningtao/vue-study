import VueStore from "vuex"
import Vue from 'vue'

const AStore = {
    namespaced: true,
    state: {
        count: 100
    },
    mutations: {
        update(state, number) {
            state.count += number
        }
    },
    actions: {
        doUpdate(context, n) {
            context.commit("update", n)
        }
    }
}

export default AStore 