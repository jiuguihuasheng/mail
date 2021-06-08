import { request } from './request';

function getHomeMulData () {
  return request({
    url: '',
    method: 'GET'
  });
}

export {
  getHomeMulData
}
