import * as user from './action-type'
let defaultState = {
  addressList: [],   // 地址列表
  addressName: '',  // 选中的地址
  temMessage: '', //临时姓名
  hasAddressList: [], // 已有的地址
  operate: 'edit',
  userInfo: 123,
  geohash: [],
  amount: 1,
  loginForm: 1,
  orderList: {
    list: []
  },
  loading: true,
  smsCodeData: {}
}

// 用户消息
export default (state = defaultState, action = {}) => {
  switch (action.type) {
    case user.SAVE_USERINFO:
      return {
        ...state,
        userInfo: action.userInfo
      }
    default:
      return state
  }
}