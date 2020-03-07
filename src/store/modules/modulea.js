/**
 * Created by ever on 2020/2/17.
 */
export default {
  state: {
    _msg: '',
  },
  getters: {
    // eslint-disable-next-line no-underscore-dangle
    msg: (state) => state._msg,
  },
  mutations: {
    SET_MSG: (state, _msg) => {
      // eslint-disable-next-line no-underscore-dangle
      state._msg = _msg
    },
  },
  actions: {
    getMsg({commit}, data) {
      return new Promise((resolve, reject) => {
        setTimeout((data) => {
          commit('SET_MSG', data)
          resolve(data)
        }, 1000)
        if (!data) {
          // eslint-disable-next-line prefer-promise-reject-errors
          reject('sss')
        }
      })
    },
  },
}
