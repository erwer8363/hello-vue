/**
 * Created by ever on 2020/2/17.
 */

const com = {
  IP: JSON.stringify('xxx'),
}

module.exports = {
  dev: {
    env: {
      TYPE: JSON.stringify('dev'),
      ...com,
    },
  },
  build: {
    env: {
      TYPE: JSON.stringify('prod'),
      ...com,
    },
  },
}
