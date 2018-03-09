/**
 * Created by Wu Jian Ping on - 2017/06/05.
 */

import log4js from './log4js-node'
import config from '../../config/server'

log4js.configure(config.log4js)
export default log4js.getLogger('app')
