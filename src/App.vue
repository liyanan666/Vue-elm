<template>
  <div id="app">
    <headers :data="data"></headers>
    <div>
    	<ul class="nav">
    		<router-link to="/index"><li>商品</li></router-link>
    		<router-link to="/comment"><li>评论</li></router-link>
    		<router-link to="/commodity"><li>商家</li></router-link>
    	</ul>
    </div>
		<keep-alive>
			<router-view :goods.sync="goods" v-on:moenys="show"></router-view>
		</keep-alive>
		
  </div>
</template>

<script>
import axios from 'axios'
import headers from './components/head/Head.vue'


export default {
  name: 'app',
  data () {
    return {
    	data:'',
    	goods:''
    }
  },
  methods:{
  	show(){
  		console.log("hhh")
  	}
  },
  components:{
  	headers,
  },
  created(){
  	axios.get('../data.json').then((data)=>{
  		this.data=data.data.seller
  		this.goods=data.data.goods
  	});
  }
}
</script>

<style>
	#app{
		
	}
.nav{
	width: 100%;
	height: 50px;
}
.nav li{
	float: left;
	width: 33.33%;
	line-height: 50px;
	color: #4d555d;
	background: #ffffff;
	filter: blur();
	text-align: center;
}
</style>
