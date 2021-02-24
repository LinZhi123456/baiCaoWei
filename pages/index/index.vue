<template>
	<view class="content">
		<!-- 头部搜索模块 -->
		<view class="content_top">
			<view>搜索</view>
		</view>
		<!-- 轮播图模块 -->
		<swiper class="carousel" autoplay indicator-dots circular indicator-active-color="#eb0028" indicator-color="#fff">
			<swiper-item v-for="item  in carouselData" :key="item.goods_id">
				<image mode="widthFix" :src="item.image_src" />
			</swiper-item>
		</swiper>
		<!-- 导航菜单模块 -->
		<scroll-view class="nav" enable-flex scroll-x>
			<view class="navItem" v-for="(item,index) in navData" :key="index" @click="navJump(item.name)">
				<image mode="widthFix" :src="item.image_src" />
			</view>
		</scroll-view>
<!-- 商品模块 -->
<view>
	<view>
		<!-- <image src="../../static/img/index_top.png"/> -->
		<view>
			<!-- <image src="../../static/img/index_top.png"/> -->
			<view>
				<!-- <> -->
			</view>
		</view>
	</view>
</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// 轮播图数据
				carouselData: [],
				// 导航数据
				navData: []
			}
		},
		onLoad() {
			this.carousel()
			this.nav()
		},
		methods: {
			// 获取轮播图数据
			async carousel() {
				const res = await this.$myRequest({
					url: '/api/public/v1/home/swiperdata',
				})
				console.log(res.data.message)
				this.carouselData = res.data.message
			},
			// 获取导航栏数据
			async nav() {
				const res = await this.$myRequest({
					url: '/api/public/v1/home/catitems'
				})
				console.log(res.data.message)
				this.navData = res.data.message
			},
			// 导航菜单跳转
			navJump(name) {
				uni.showToast({
					title:name+"页面暂未开发",
					duration:1000,
					position:'top',
					icon:"none",
				})
			}
		}
	}
</script>

<style lang="scss">
	// 头部搜索模块 
	.content_top {
		padding: 27px 22px 20px;
		background-color: #ce0d27;

		&>view {
			width: 420rpx;
			height: 25px;
			border-radius: 15px;
			background-color: #fff;
			text-align: center;
			font-size: 12px;
			line-height: 25px;
			color: #969696;
		}
	}

	// 轮播图模块
	.carousel {
		height: 340rpx;

		image {
			width: 750rpx;
		}
	}

	// 下面样式只有编译成小程序时才会运行
	/* #ifdef MP-WEIXIN */
	.nav {
		height: 88px;
		display: flex;
		justify-content: space-around;
		margin: 6px 0;
	}
	.navItem {
		min-width: 80px;

		image {
			width: 100%;
		}
	}

	/* #endif */

	// 下面样式只有编译成小程序时才会运行
	/* #ifdef H5 */

	/* #endif */
</style>
