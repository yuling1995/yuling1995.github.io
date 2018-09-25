
//引入vue.js文件
import Vue from 'vue'

// 引入路由
import VueRouter from 'vue-router'

// 引进组件
import Homepage from '../components/homepage/homepage';

import Pro_categories from '../components/pro_categories/pro_categories';
import Pro_list from '../components/pro_categories/pro_list';
import Pro_search from '../components/pro_categories/pro_search';
import Pro_screening from '../components/pro_categories/pro_screening';
import Pro_details from '../components/pro_categories//pro_details';

import Shop_cart from '../components/shop_cart/shop_cart';
import Booking from '../components/shop_cart/booking';
import Pay from '../components/shop_cart/pay';
import Pay_failure from '../components/shop_cart/pay_failure';
import Pay_success from '../components/shop_cart/pay_success';

import User from '../components/user/user';
import Order from '../components/user/order';
import Register from '../components/user/register';
import Login from '../components/user/login';

export default new VueRouter({
	routes:[{
		path:'/',
		redirect:'/homepage',
	},{
		path:'/homepage',
		component:Homepage
	},{
		path:'/pro_categories',
		component:Pro_categories,
		children:[{
			path:'/pro_categories/pro_list',
			component:Pro_list
		},{
			path:'/pro_categories/pro_search',
			component:Pro_search
		},{
			path:'/pro_categories/pro_screening',
			component:Pro_screening
		},{
			path:'/pro_categories/pro_details',
			component:Pro_details
		}]
	},{
		path:'/shop_cart',
		component:Shop_cart,
		children:[{
			path:'/shop_cart/booking',
			component:Booking
		},{
			path:'/shop_cart/pay',
			component:Pay
		},{
			path:'/shop_cart/pay_failure',
			component:Pay_failure
		},{
			path:'/shop_cart/pay_success',
			component:Pay_success
		}]
	},{
		path:'/user',
		component:User,
		children:[{
			path:'/user/order',
			component:Order
		},{
			path:'/user/register',
			component:Register
		},{
			path:'/user/login',
			component:Login
		}]
	}]
})