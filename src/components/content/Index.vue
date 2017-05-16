<template>
	<div id="">
		<ul class="foodlist">
			<li v-for="(item,index) in goods" :key="index" @click="getindex(index)" :class="index=menuindex?active:''">
				{{item.name}} {{index}}
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		data(){
			return{
				menuindex:0
			}
		},
		props:['goods'],
		methods:{
			getindex(index){
				alert(index)
				this.menuindex=index
			}
		}
	}
</script>

<style>
.foodlist{
	width: 110px;
	background: #f3f5f7;
}
.foodlist li{
	height: 50px;
	line-height: 50px;
	width: 100px;
	margin-left: 5px;
	text-align: center;
	border-bottom:1px solid #e2e2e2;
}
.foodlist .active{
	background: #FFFFFF;
}
</style>