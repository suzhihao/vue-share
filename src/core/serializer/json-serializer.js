/**
 * Created by Wu Jian Ping on - 2017/07/18.
 */
class JSONSerializer {
  serialize(object) {
    return JSON.stringify(object)
  }
  deserialize(str) {
    return JSON.parse(str)
  }
}

export default new JSONSerializer()
