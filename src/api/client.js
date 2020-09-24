
import staffService from 'Api/staffService'

const client = {
  get (url, params) {
    return staffService.get(url, params)
  },
  post (url, employee) {
    staffService.save(url, employee)
  }
}

export default client
