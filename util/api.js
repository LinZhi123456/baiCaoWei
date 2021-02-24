const BASE_URL = "https://api-hmugo-web.itheima.net"
export const myRequest = (options) => {
	return new Promise((resolve, reject) => {
		uni.request({
			url: BASE_URL + options.url,
			method: options.method || 'GET',
			data: options.data || {},
			success: (res) => {
				console.log('数据获取成功')
				resolve(res)
			},
			fail: (err) => {
				console.log('数据获取失败')
				reject(err)
			}
		})
	})
}
