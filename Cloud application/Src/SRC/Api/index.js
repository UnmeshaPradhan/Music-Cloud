const _baseUrl = 'http://api.javaswing.cn'
const _baseUrl2 = 'https://api.imjad.cn/cloudmusic/'
export default {

  getBannerList () {
    return `${_baseUrl}/banner`
  },
 
  getPersonalized () {
    return `${_baseUrl}/personalized`
  },
 
  getPersonalizedMV () {
    return `${_baseUrl}/personalized/mv`
  },
  /**
   *
   * @param {*} cat
   * @param {*} order
   * @param {*} offset
   * @param {*} total
   * @param {*} limit
   */
  getPlayListByWhere (offset, limit) {
    return `${_baseUrl}/top/playlist?limit=${limit}&order=all&offset=${offset}`
  },
  /**
   
   * @param {Number} id
   */
  getLrc (id) {
    return `${_baseUrl}/lyric?id=${id}`
  },
  /**
   
   * @param {Number} id
   */
  getSong (id) {
    return `${_baseUrl}/song/url?id=${id}`
  },
  /**
   
   * @param {Number} id
   */
  getPlayListDetail (id) {
    return `${_baseUrl}/playlist/detail?id=${id}`
  },
  getMv (id) {
    return _baseUrl2 + '?type=mv&id=' + id
  },
  search (words) {
    return _baseUrl2 + '?type=search&s=' + words
  }
}