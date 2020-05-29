
import loggger from 'redux-logger';
import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'

// 下面的这种函数的写法统称 reducer
// 登录状态
let isloginStatus = localStorage.getItem('islogin');
function isLogin(state = isloginStatus, action) {
  switch (action.type) {
    case 'login_success':
      localStorage.setItem('islogin', 'yes');
      return 'yes';
    case 'login_out':
      localStorage.removeItem('islogin');
      return null;
    default:
      return state;
  }
}

// 列表的数据状态
let listDataStr = localStorage.getItem('listData');
let listDataDefault = listDataStr ? JSON.parse(listDataStr) : [];
function listData(state = listDataDefault, action) {
  switch (action.type) {
    case 'list_del':
      // 数组删除数据， 1删除下标
      // id删除 [{id:0}]
      // [].findeIndex 找下标， replace删除   
      // filter过滤掉要删除的数据， 性能问题，必须全波循环结束
      
      let id = action.pyload;
      let delArr = state.filter(v => {
        return v.id !== id;
      });
      localStorage.setItem('listData', JSON.stringify(delArr));
      return delArr;
    case 'list_success':
      // 本地存储 只能存储  字符串， 不能存储数组、对象等内容
      localStorage.setItem('listData', JSON.stringify(action.pyload));
      
      return action.pyload;
    default:
      return state;
  }
}

// 购物车的数据状态
function carData(state = [], action) {
  switch (action.type) {
    case 'car_add':

      let addItem = action.pyload;
      let addCar = [...state];

      let isExist = addCar.find(v => {
        let exist = v.id === addItem.id;
        if (exist) {
          v.num = v.num + 1;
        }
        return exist;
      });

      if (!isExist) {
        addItem.num = 1;
        addCar.push(addItem);
      }
      return addCar;
    default:
      return state;
  }
}


// 1， 不能全部传入 那就只能合并
// 2， { isLogin:xxx, listData:[xxxx], carData[xxxx] }

const reducers = combineReducers({
  isLogin,
  listData,
  carData
});



let store = createStore(
  reducers, /*修改state的函数统称  reducer */
  // initStates 可以不写  
  // 插件
  composeWithDevTools(applyMiddleware(loggger, thunk))
  
)
export default store