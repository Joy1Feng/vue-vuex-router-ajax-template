import jsonp from 'jsonp'
import ajax from './ajax'

// 登录
export const reqLogin = (username, password) => ajax('/login', { username, password }, 'POST')
// 获取天气信息, jsonp格式
export const reqWeather = (city) => {
  return new Promise((resolve, reject) => {
    const url = `http://api.map.baidu.com/telematics/v3/weather?location=${city}&output=json&ak=3p49MVra6urFRGOT9s8UBWr2`
    jsonp(url, {}, (err, data) => {
      if (!err && data.status === 'success') {
        const { dayPictureUrl, weather } = data.results[0].weather_data[0]
        resolve({ dayPictureUrl, weather })
      } else {
        reject(err)
        console.log('获取内容失败')
      }
    })
  })
}

// 获取音乐列表
export const reqMusicList = () => ajax('https://www.easy-mock.com/mock/5d28bbf61dcc4658e1b09727/music/')

// 获取一级二级列表, Get请求
export const reqCategorys = (parentId) => ajax('/manage/category/list', { parentId })

// 更新分类, Post请求
export const reqUpdateCategory = (categoryId, categoryName) => ajax('/manage/category/update', {
  categoryId,
  categoryName
}, 'POST')
