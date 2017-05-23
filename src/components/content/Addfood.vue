<template>
	<div class="addfood" @click.stop="">
		<span class="circle reduce" @click="reduces()" v-if="food.count>0">-</span>{{food.count}}<span class="circle add" @click="adds($event)">+</span>
	</div>
</template>

<script>
	import Vue from 'vue'
	import {mapActions} from 'vuex'
	export default{
		data(){
			return{
				num:0
			}
		},
		props:['food'],
		methods:{
			adds(event){
				if(!this.food.count){
					Vue.set(this.food,'count',0);
				}
				this.food.count++;
			},
			reduces(){
				if(this.food.count<=0){
					return 
				}else{
					this.food.count--;
				}
			}
			
		}
		
	}
</script>

<style>
	.addfood{position: absolute;right: 10px;bottom: 20px;width: 90px;height: 20px;}
	.circle{width: 20px;height: 20px;border-radius: 50%;border: 1px solid black;display: inline-block;text-align: center;line-height: 20px;}
	.reduce{margin-right: 10px;}
	.add{margin-left: 10px;}
</style>