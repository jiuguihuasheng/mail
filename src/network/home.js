import { request } from './request';

function getHomeMulData () {
  return request({
    url: '/home/banner-feature/list',
    method: 'get'
  });
}

function getGoods (query) {
  return request({
    url: '/home/goods',
    method: 'get',
    params:query
  });
}

export {
  getHomeMulData,
  getGoods
}
