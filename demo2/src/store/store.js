import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
export default new Vuex.Store({
	state:{  // 
		courseList:[1,2,3,4],
		userInfo:{
			userName:'',
			userPass:''
		}
	},
	mutations:{
		chanedDate(state,obj){
			//console.log(state.courseList)
			state.courseList = obj;
		}
	}
})
