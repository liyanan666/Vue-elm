import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

var state = {
	moeny:0
}
var mutations = {
	addMoney(state,v){
		state.money+=v;
	}
}
const getters = {
	money:state=> {
		return state.money;
	},
	
};


const actions = {
	addMoney({commit},e){
		commit('addMoney', e.target.value)
	},
}
export default new Vuex.Store({
	state,
	mutations,
	actions,
	getters
})
