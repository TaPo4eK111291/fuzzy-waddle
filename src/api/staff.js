import client from 'Api/client'

const getStaff = (params) => client.get('staff', params)

const saveEmployee = (employee) => client.post('staff', employee)

export default {
  getStaff,
  saveEmployee
}
