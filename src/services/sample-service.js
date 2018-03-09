import createRequest from '../core/request'

let loadSampleDataByPage = (page, req) => {
  return createRequest(req).get('/api/sample', { params: { page } })
}

export default {
  loadSampleDataByPage
}
