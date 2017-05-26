<template>
	<div class="shop" >
		<span class="circle">
			{{moeny}}	
		</span>
	</div>
</template>

<script>
	export default{
		props:['selecteds'],
		data(){
			return{
			}
		},
		methods:{
			
		},
		computed:{
			moeny(){
				let moneys = 0;
				for (var i=0;i<this.selecteds.length;i++) {
					moneys+=this.selecteds[i].count*this.selecteds[i].price;
				}
				return moneys;
			}
		},
		mounted(){
		}
	}
</script>

<style scoped="scoped">
	.shop{width: 100%;bottom: 0;background: #141d27;position: absolute;height: 50px;z-index: 1000;}
	.circle{width: 45px;height: 45px;border-radius: 50%;display: inline-block;background: #141d27;position: absolute;left: 20px;bottom: 10px;color: white;line-height: 45px;text-align: center;}
</style>