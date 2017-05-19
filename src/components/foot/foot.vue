<template>
	<div class="shop" >
		<span class="circle" v-on:moneys="changemoney">
			{{money}}
		</span>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				money:0
			}
		},
		methods:{
			changemoney(){
				alert(1)
			}
		},
		mounted(){
		}
	}
</script>

<style scoped="scoped">
	.shop{width: 100%;bottom: 0;background: #141d27;position: absolute;height: 50px;}
	.circle{width: 45px;height: 45px;border-radius: 50%;display: inline-block;background: #141d27;position: absolute;left: 20px;bottom: 10px;color: white;line-height: 45px;text-align: center;}
</style>