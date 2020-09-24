import store from 'Api/store'
import { uuidGenerate } from 'Utils/functions'

export default {
  get (url, params) {
    switch (url) {
      case 'staff':
        return this._getStaff(params)
    }
  },
  save (url, employee) {
    switch (url) {
      case 'staff':
        this._saveStaff(employee)
        break
    }
  },
  _getStaff (params) {
    let staff = store.get('staff')
    if (params && params.orderBy) {
      let _this = this
      staff.sort((a, b) => {
        switch (params.direction) {
          case 'asc':
            return _this._compare(a, b, params.orderBy)
          case 'desc':
            return _this._compare(b, a, params.orderBy)
          default:
            return 0
        }
      })
    }
    return staff
  },
  _saveStaff (employee) {
    let storedStaff = store.get('staff')
    let newEmployee = {
      ...employee,
      id: uuidGenerate(),
      children: []
    }
    if (employee.chief === '') {
      storedStaff.push(newEmployee)
    } else {
      let chief = this.__deepFindChief(storedStaff, employee.chief)
      chief.children.push(newEmployee)
    }
    store.set('staff', storedStaff)
  },
  __deepFindChief (arr, id) {
    let stack = arr.slice()

    while (stack.length > 0) {
      let current = stack.pop()
      if (current.id === id) return current
      if (current.children.length > 0) stack.push(...current.children)
    }
  },
  _compare (a, b, compareField) {
    if (isNaN(parseInt(a[compareField]))) return a[compareField].localeCompare(b[compareField])
    else return a[compareField] - b[compareField]
  }
}
