import VueRouter from 'vue-router'
import Vue from 'vue'
//模板
import index from '../components/content/Index.vue'
import comment from '../components/content/Comment.vue'
import commodity from '../components/content/Commodity.vue'


Vue.use(VueRouter);
//配置路由
const routes = [
	{
		path: '/index',
		component: index,
	},
	{
		path: '/comment',
		component: comment,
	},
	{
		path: '/commodity',
		component: commodity,
	},
	{
		path: '*',
		redirect: '/index'
	}
];

//生成路由实例
const router = new VueRouter({
  	routes
});

export default router;