import React, { Component } from 'react';
import { HashRouter as Router } from "react-router-dom"
// 引入 Provider
import { Provider } from "react-redux";
// 引入 store 
import store from '@/store'
import RouteConfig from '@/router/config';
import RouteView from '@/router/index';
class App extends Component {
    render() {
        return <div className="wrapper">
          <Provider store={store}>
            <Router>
                {/* 传入默认路由配置文件 */}
                <RouteView defaultConfig={RouteConfig}></RouteView>
            </Router>
            </Provider>
        </div>
    }
}
export default App;

// // 根组件  App.js
// import React, { Component } from 'react'
// // 引入路由内置组件
// import {HashRouter} from 'react-router-dom'
// // 引入加载路由视图得函数组件
// import RouterView from './router/index'
// // 引入路由配置表
// import config from './router/config'
// // 引入 Provider
// import { Provider } from "react-redux";
// // 引入 store 
// import store from '@/store'
// export default class App extends Component {
//     render() {
//         return (
//             <div className='App'>
//                 <Provider store={store}>
//                   <HashRouter>
//                       {/* 加载/展示路由视图组件 */}
//                       <RouterView routes={config}/>
//                   </HashRouter>
//                 </Provider>
//             </div>
//         )
//     }
// }