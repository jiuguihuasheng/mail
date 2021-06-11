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
    detail: {
      id: '@id',
      result: {
        columns: ['销量 @integer(300, 5000)', '收藏@integer(400, 4000)', '默认快递'],
        detailInfo: {},
        esi: '',
        isLogin: false,
        itemInfo: {
          title: 'title',
          desc: 'desc',
          newPrice: 'newPrice',
          oldPrice: 'oldPrice',
          nowPrice: 'nowPrice',
          discount: 'discount',
          topImages: ['http://via.placeholder.com/300x150/008000/FFFFFF?text=img1','http://via.placeholder.com/300x150/008000/FFFFFF?text=img2','http://via.placeholder.com/300x150/008000/FFFFFF?text=img3']
        },
        itemParams: {
          info: {
            // images: [],
            set: [
              {
                key: 'key',
                value: 'value'
              }
            ]
          },
          rule: {
            tables: [
              [
                [
                  1,2,3
                ],
              ]
            ]
          }
        },
        promotions: {
          alertData: {},
          link: '',
          list: []
        },
        rate: {
          cRate: 125,
          list: [
            {
              canExplain: false,
              content: '物美价廉',
              created: 1535694719,
              extraInfo: ['是否合身:合身'],
              images: ['http://via.placeholder.com/400x299/008000/FFFFFF?text=img'],
              isAnonymous: 1,
              isEmpty: 0,
              level: '',
              rateId: '11624z5q',
              style: '颜色:上衣+裤子 尺码:M ',
              user: {}
            }
          ]
        },
        shopInfo: {
          cFans: 40249,
          cGoods: 45,
          cCells: 303067,
          services: [
            {
              name: 'name',
              icon: 'icon'
            }
          ]
        },
        skuInfo: {
          defaultPrice: '$55.00',
          isAbroad: false,
          props: []
        },
        topBar: {}
      }
    }
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

  // detail
  {
    url: '/detail',
    type: 'get',
    response: config => {
      console.log(config.query)
      for (const article of List) {
        // if (article.id === +id) {
          return {
            code: 20000,
            data: article.detail
          }
        // }
      }
    }
  },

  {
    url: '/recommend',
    type: 'get',
    // eslint-disable-next-line no-unused-vars
    response: _ => {
      return {
        code: 20000,
        data: {
          list: [
            {
              id: '@increment',
              title: '@first',
              image_uri: image_uri + 1,
              price: '@integer(300, 5000)',
              cfav: '@integer(300, 5000)',
            },
            {
              id: '@increment',
              title: '@first',
              image_uri: image_uri + 2,
              price: '@integer(300, 5000)',
              cfav: '@integer(300, 5000)',
            },
            {
              id: '@increment',
              title: '@first',
              image_uri: image_uri + 3,
              price: '@integer(300, 5000)',
              cfav: '@integer(300, 5000)',
            },
            {
              id: '@increment',
              title: '@first',
              image_uri: image_uri + 4,
              price: '@integer(300, 5000)',
              cfav: '@integer(300, 5000)',
            },
            {
              id: '@increment',
              title: '@first',
              image_uri: image_uri + 5,
              price: '@integer(300, 5000)',
              cfav: '@integer(300, 5000)',
            },
            {
              id: '@increment',
              title: '@first',
              image_uri: image_uri + 6,
              price: '@integer(300, 5000)',
              cfav: '@integer(300, 5000)',
            },
            {
              id: '@increment',
              title: '@first',
              image_uri: image_uri + 7,
              price: '@integer(300, 5000)',
              cfav: '@integer(300, 5000)',
            },
          ]
        }
      }
    }
  }
]

