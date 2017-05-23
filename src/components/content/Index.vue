<template>
	<div class="goods" id="" v-cloak>
		<div class="menu-wrapper" ref="menuwrapper">
            <ul>
                <li v-for="(item,index) in food" :class="{'current':currentIndex === index}" @click="selectMenu(index,$event)" class="menu-item" v-cloak>
                    <span class="text">
                            <span v-show="item.type>0" class="icon"  v-cloak></span> {{item.name}}
                    </span>
                </li>
            </ul>
        </div>
		<div class="foods-wrapper" ref="foodwrapper">
            <ul>
                <li v-for="(item,index) in food"  class="food-list food-list-hook" v-cloak>
                    <h2 class="title" >{{item.name}}</h2>
                    <ul>
                        <li v-for="food in item.foods" class="food-item" @click="goDetail(food)">
                            <div class="icon">
                                <img :src="food.icon" />
                            </div>
                            <div class="content">
                                <h2 class="name">{{food.name}}</h2>
                                <p class="desc">{{food.description}}</p>
                                <div class="extra">
                                    <span class="count">月售{{food.sellCount}}份</span>
                                    <span>好评率{{food.rating}}%</span>
                                </div>
                                <addfood v-on:num="hh" :food="food"></addfood>
                                <div class="price" >
                                    <span class="now">￥{{food.price}}</span>
                                    <span v-show="food.oldPrice" class="old">￥{{food.oldPrice}}</span>
                                </div>
                            </div>
                        </li>
                    </ul>
                </li>
            </ul>
     </div>
      <food :selecteds="selecteds"></food>
      <fooddetail :food="selectedFood" v-if="showDetail" v-on:msg="hideDetail" ></fooddetail>
	</div>
</template>

<script>
	import fooddetail from './foodDetail.vue'
	import food from '../foot/foot.vue'
	import addfood from './Addfood.vue'
	import BScroll from 'better-scroll'
	import axios from 'axios'
	import Vue from 'vue'
	export default {
		data(){
			return{
				food:[],
				menuindex:0,
		        listHeight: [],
		        scrollY: 0,
		        showDetail: false
			}
		},
		created() {
			this.classMap = ['decrease', 'discount', 'guarantee', 'invoice', 'special'];
			axios.get('../data.json').then((data)=>{
		  		this.food = data.data.goods;
		  		this.$nextTick(() => {
	                this._initScroll();
	                this._calculateHeight();
	            })
		    });
		    
		},
		components:{
			fooddetail,
			addfood,
			food
		},
		mounted(){
			
		},
		methods:{
			selectMenu (index,event) {
		//      自己默认派发事件时候(BScroll),_constructed被置为true,但是浏览器原生并没有这个属性
		        if (!event._constructed){
		            return;
		        }
		        //运用BScroll接口，滚动到相应位置
		        let foodList = this.$refs.foodwrapper.getElementsByClassName('food-list-hook');
		        //获取对应元素的列表
		        let el = foodList[index];
		              //设置滚动时间
		        this.foodScroll.scrollToElement(el, 300);
		    },
		  	_initScroll() {
                this.meunScroll = new BScroll(this.$refs.menuwrapper, {
                    click: true
                });
                this.foodScroll = new BScroll(this.$refs.foodwrapper, {
                    click: true,
                    //探针作用，实时监测滚动位置
                    probeType: 3
                });
                 this.foodScroll.on('scroll', (pos) => {
                        //scrollY接收变量
                    this.scrollY = Math.abs(Math.round(pos.y));
                    
                })
           	},
           	_calculateHeight (){
           		let foodlist = this.$refs.foodwrapper.getElementsByClassName('food-list-hook');
           		let height = 0;
		        //把第一个高度送入数组
		        this.listHeight.push(height);
		        //通过循环foodList下的dom结构，将每一个li的高度依次送入数组
		        for(let i=0; i<foodlist.length; i++){
		             let item = foodlist[i]
		                height += item.clientHeight
		            this.listHeight.push(height);
		        }
		    },
		    goDetail(food){
		    	this.selectedFood=food;
		    	this.showDetail = !this.showDetail;
		    },
		    hideDetail(){
		    	this.showDetail = false;
		    },
		    hh(data){
		    	
		    }
		},
		computed:{
		    currentIndex () {
		        for(let i=0; i<this.listHeight.length; i++){
		            //判断当currentIndex在height1和height2之间的时候显示
		            let height1 = this.listHeight[i];
		            let height2 = this.listHeight[i+1];
		            //最后一个区间没有height2
		            if(!height2 || (this.scrollY >= height1 && this.scrollY < height2)){
		                return i;
		            }
		        }
		        return 0;
		    },
		    selecteds(){
		    	let foods = [];
		    	this.food.forEach((good) => {
			        good.foods.forEach((food2) => {
			          if (food2.count) {
			            foods.push(food2)
			          }
			        })
			    })
		      	return foods
		    }
	    },
	}       
</script>

<style>
.foodlist{
	display: inline-block;
	width: 100%;
	height: 400px;
	background: #f3f5f7;
	overflow: hidden;
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
.foodcontet{
	height: 450px;
	overflow: auto;
}
.food{
	height: 100px;
}
 .goods {
    width: 100%;
    top: 150px;
    height: 460px;
    display: flex;
    overflow: hidden;
}

.goods .menu-wrapper {
    flex: 0 0 80px;
    width: 80px;
    background: #f3f5f7;
}

.goods .menu-wrapper .current {
    position: relative;
    z-index: 10;
    margin-top: -1px;
    background: #FFFFFF;
    font-weight: 700;
    font-size: 14px;
}

.goods .menu-wrapper .menu-item {
    display: table;
    height: 54px;
    width: 80px;
    line-height: 14px;
    padding: 0 12px;
    border-bottom: 1px solid rgba(7, 17, 27, .1);
    box-sizing: border-box;
}

.goods .menu-wrapper .menu-item .icon {
    display: inline-block;
    width: 12px;
    height: 12px;
    margin-right: 2px;
    -webkit-background-size: 12px 12px;
    background-size: 12px 12px;
    background-repeat: no-repeat;
    vertical-align: top;
}

.goods .menu-wrapper .menu-item .text {
    display: table-cell;
    width: 56px;
    vertical-align: middle;
    font-size: 12px;
    text-align: center;
}
.goods .foods-wrapper {
    flex: 1;
}

.goods .foods-wrapper .title {
    padding-left: 14px;
    height: 26px;
    line-height: 26px;
    border-left: 2px solid #d9dde1;
    font-size: 12px;
    color: rgb(147, 153, 159);
    background: #F3F5F7;
}

.goods .foods-wrapper .current {
    color: #42B983;
    font-size: 14px;
    transition: all .5s;
    line-height: 27px;
}
.content{
	position: relative;
}
.goods .foods-wrapper .food-item {
    display: flex;
    margin: 18px 0 18px 0;
    border-bottom: 1px solid rgba(7, 17, 27, .1);
    padding-bottom: 18px;
}

.goods .foods-wrapper .food-item:last-child {
    border-bottom: 0px solid rgba(7, 17, 27, .1);
    margin-bottom: 0;
}

.goods .foods-wrapper .food-item .icon {
    flex: 0 0 57px;
    margin-right: 10px;
    margin-left: 10px;
}

.goods .foods-wrapper .food-item .content {
    position: relative;
    flex: 1;
}

.goods .foods-wrapper .food-item .content .name {
    margin: 2px 0 8px 0;
    height: 14px;
    line-height: 14px;
    font-size: 14px;
    color: rgb(7, 17, 27);
}

.goods .foods-wrapper .food-item .content .desc {
    margin-bottom: 8px;
    line-height: 10px;
    font-size: 10px;
    color: rgb(147, 153, 159);
}

.goods .foods-wrapper .food-item .content .extra {
    font-size: 10px;
    color: rgb(147, 153, 159);
    line-height: 10px;
}

.goods .foods-wrapper .food-item .content .extra .count {
    margin-right: 12px;
}

.goods .foods-wrapper .food-item .content .price {
    font-weight: 700;
    line-height: 24px;
}

.goods .foods-wrapper .food-item .content .price .now {
    margin-right: 8px;
    font-size: 14px;
    color: rgb(240, 20, 20);
}

.goods .foods-wrapper .food-item .content .price .old {
    text-decoration: line-through;
    font-size: 10px;
    color: rgb(147, 153, 159);
}

.goods .foods-wrapper .food-item .content .cartcontrol-wrapper {
    position: absolute;
    right: 6px;
    bottom: 12px;
}
       
</style>
