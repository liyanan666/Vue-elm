<template>
	<div id="">
		<ul class="foodlist">
			<li v-for="(val,index) in goods" @click="getindex(index)" :class="index==menuindex?'active':''">
				{{val.name}}
			</li>
		</ul>
		<div class="foodinfo">
			<ul>
				<li v-for="(val1,index) in goods">
					<h2 class="title"><span></span>{{val1.name}}</h2> 
					<!--<li v-for="(val2,index) in val1.foods">
						{{val2.name}}
					</li>-->
					<h1 v-for="(val,index) in val1.foods">{{val.name}}</h1>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return{
				food:{},
				menuindex:0
			}
		},
		
		props:['goods'],
		created() {
			this.food = this.goods
		},
		methods:{
			getindex(index){
				this.menuindex=index
			}
		}
	}       
</script>

<style>
.foodlist{
	display: inline-block;
	width: 29%;
	background: #f3f5f7;
}
.foodlist li{
	height: 50px;
	line-height: 50px;
	text-align: center;
	border-bottom:1px solid #e2e2e2;
}
.foodlist .active{
	background: #FFFFFF;
}
.foodinfo{
	width: 69%;
	display: inline-block;
	vertical-align: top;
}
.title{
	height: 30px;
	line-height: 30px;
	background: #E2E2E2;
}
.title span{
	width: 2px;
	height: 30px;
	background: gray;
	float: left;
	margin-left: -2px;
	display: inline-block;
}
</style>
