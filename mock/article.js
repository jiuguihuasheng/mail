const Mock = require('mockjs')

const List = []
const count = 100

const image_uri = 'http://via.placeholder.com/300x150/008000/FFFFFF?text=img'

for (let i = 0; i < count; i++) {
  List.push(Mock.mock({
    id: '@increment',
    title: '@first',
    image_uri: image_uri + (i+1),
    'type|1': ['pop', 'new', 'sell'],
    price: '@integer(300, 5000)',
    cfav: '@integer(300, 5000)',
    // timestamp: +Mock.Random.date('T'),
    // author: '@first',
    // title: '@title(5, 10)',
    // content_short: 'mock data',
    // forecast: '@float(0, 100, 2, 2)',
    // importance: '@integer(1, 3)',
    // 'status|1': ['published', 'draft'],
    // display_time: '@datetime',
    // comment_disabled: true,
    // pageviews: '@integer(300, 5000)',
    // platforms: ['a-platform']
  }))
}

module.exports = [
  {
    url: '/home/banner-feature/list',
    type: 'get',
    response: config => {
      const { importance, type, title, page = 1, limit = 4, sort } = config.query

      let mockList = List.filter(item => {
        if (importance && item.importance !== +importance) return false
        if (type && item.type !== type) return false
        if (title && item.title.indexOf(title) < 0) return false
        return true
      })

      if (sort === '-id') {
        mockList = mockList.reverse()
      }

      const pageList = mockList.filter((item, index) => index < limit * page && index >= limit * (page - 1))

      return {
        code: 20000,
        data: {
          total: mockList.length,
          items: pageList
        }
      }
    }
  },

  {
    url: '/home/goods',
    type: 'get',
    response: config => {
      const { importance, type, title, page = 1, limit = 10, sort } = config.query
      let mockList = List.filter(item => {
        if (importance && item.importance !== +importance) return false
        if (type && item.type !== type) return false
        if (title && item.title.indexOf(title) < 0) return false
        return true
      })

      if (sort === '-id') {
        mockList = mockList.reverse()
      }

      const pageList = mockList.filter((item, index) => index < limit * page && index >= limit * (page - 1))
      return {
        code: 20000,
        data: {
          total: mockList.length,
          items: pageList
        }
      }
    }
  },

  {
    url: '/vue-element-admin/article/detail',
    type: 'get',
    response: config => {
      const { id } = config.query
      for (const article of List) {
        if (article.id === +id) {
          return {
            code: 20000,
            data: article
          }
        }
      }
    }
  },

  {
    url: '/vue-element-admin/article/pv',
    type: 'get',
    // eslint-disable-next-line no-unused-vars
    response: _ => {
      return {
        code: 20000,
        data: {
          pvData: [
            { key: 'PC', pv: 1024 },
            { key: 'mobile', pv: 1024 },
            { key: 'ios', pv: 1024 },
            { key: 'android', pv: 1024 }
          ]
        }
      }
    }
  },

  {
    url: '/vue-element-admin/article/create',
    type: 'post',
    // eslint-disable-next-line no-unused-vars
    response: _ => {
      return {
        code: 20000,
        data: 'success'
      }
    }
  },

  {
    url: '/vue-element-admin/article/update',
    type: 'post',
    // eslint-disable-next-line no-unused-vars
    response: _ => {
      return {
        code: 20000,
        data: 'success'
      }
    }
  }
]

