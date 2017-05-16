<template>
	<div class="bg">
		<img class="bgpic" :src="data.avatar" width="100%" height="100px"/>
		<div class="content">
			<div class="pic">
				<img :src="data.avatar" width="64" height="64"/>
			</div>
			<div class="info">
				<!--<p class="brand">{{data.name}}</p>
				<p>{{data.description + ' / ' + data.deliveryTime + '分钟送达'}}</p>
				<p><span>{{data.supports[0].description}}</span></p>-->
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		
		props:['data'],
		
	}
</script>

<style>
	.bg{
		height: 100px;
		width: 100%;
		background: rgba(0,0,0,0.3);
		position: relative;
	}
	.content{
		
	}
	.bgpic{
		top: 0;
		left: 0;
		filter: blur(10px);
		position: absolute;
	}
	.pic{
		margin: 18px 10px 18px 40px;
		display: inline-block;
	}
	.pic img{
		filter: blur(0);
	}
	.info{
		margin-top: 18px;
		vertical-align:top;
		filter: blur(0);
		display: inline-block;
	}
	.info p{
		line-height: 21px;
		color: #F3F5F7;
	}
	.info p:nth-of-type(2){
		line-height: 30px;
		font-size: 12px;
	}
	.info p:nth-of-type(3){
		font-size: 10px;
	}
	.info .brand{
		background: url(../../img/brand@2x.png) no-repeat;
		background-size: contain;
		padding-left:40px ;
		font-weight: bold;
		color: #F3F5F7;
	}
	.bulletin{
		white-space: nowrap; 
	}
</style>