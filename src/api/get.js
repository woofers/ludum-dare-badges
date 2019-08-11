import http from 'axios'

export default url => {
  return new Promise((resolve, reject) => {
    http.get(url).then(res => {
      if (res && res.data) return resolve(res.data)
      return reject(res)
    }).catch(err => reject(err))
  })
}
