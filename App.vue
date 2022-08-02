<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	@font-face {
	  font-family: 'icomoon';
	  src:  url('common/fonts/icomoon.eot?ijberr');
	  src:  url('common/fonts/icomoon.eot?ijberr#iefix') format('embedded-opentype'),
	    url('common/fonts/icomoon.ttf?ijberr') format('truetype'),
	    url('common/fonts/icomoon.woff?ijberr') format('woff'),
	    url('common/fonts/icomoon.svg?ijberr#icomoon') format('svg');
	  font-weight: normal;
	  font-style: normal;
	  font-display: block;
	}
	@import '@/uni_modules/uview-ui/index.scss';
	* {
		box-sizing: border-box;
	}
	page {
		background-color: rgb(33, 35, 48);
		color: #ececec;
		padding: 80upx 50upx;
		font-style: normal;
		box-sizing: border-box;
	}
</style>
