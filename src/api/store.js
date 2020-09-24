const store = {
  set (url, data) {
    localStorage.setItem(url, JSON.stringify(data))
  },
  get (url) {
    return JSON.parse(localStorage.getItem(url)) || []
  }
}

export default store
