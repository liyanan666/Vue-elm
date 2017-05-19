<template>
	<div class="addfood" @click.stop="">
		<span class="circle reduce" @click="reduces()">-</span>{{num}}<span class="circle add" @click="adds()">+</span>
	</div>
</template>

<script>
	import {mapGetters,mapActions} from 'vuex'
	export default{
		data(){
			return{
				num:0
			}
		},
		props:['foodmoney'],
		methods:{
			adds(){
				this.num++;
			},
			reduces(){
				if(this.num<=0){
					return 
				}else{
					this.num--;
				}
			}
		},
		com
	}
</script>

<style>
	.addfood{position: absolute;right: 10px;bottom: 20px;width: 90px;height: 20px;}
	.circle{width: 20px;height: 20px;border-radius: 50%;border: 1px solid black;display: inline-block;text-align: center;line-height: 20px;}
	.reduce{margin-right: 10px;}
	.add{margin-left: 10px;}
</style>