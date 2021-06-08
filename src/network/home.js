import { request } from './request';

function getHomeMulData (query) {
  return request({
    url: '/vue-element-admin/article/list',
    method: 'get',
    params: query
  });
}

export {
  getHomeMulData
}
