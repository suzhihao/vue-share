/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

/* Configure Mocha test runner, see package.json/scripts/test */

/* eslint node/no-deprecated-api: 0 */

process.env.NODE_ENV = 'test'

global.__DEV__ = true
global.__SIT__ = true
global.__UAT__ = true
global.__PROD__ = true
global.__BUILD__ = true


function noop() {
  return null
}

require.extensions['.css'] = noop
require.extensions['.scss'] = noop
require.extensions['.less'] = noop
require.extensions['.md'] = noop

require.extensions['.ico'] = noop
require.extensions['.gif'] = noop
require.extensions['.png'] = noop
require.extensions['.jpg'] = noop
require.extensions['.jpeg'] = noop
require.extensions['.webp'] = noop

require.extensions['.mp4'] = noop
require.extensions['.webm'] = noop
require.extensions['.wav'] = noop
require.extensions['.mp3'] = noop
require.extensions['.m4a'] = noop
require.extensions['.aac'] = noop
require.extensions['.oga'] = noop

require.extensions['.woff'] = noop
require.extensions['.woff2'] = noop
require.extensions['.ttf'] = noop
require.extensions['.eot'] = noop
require.extensions['.svg'] = noop
