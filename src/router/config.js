import asyncComponent from '@/utils/asyncComponent'
// const test  = asyncComponent(() => import('@/pages/test/index')) // 登录

// 路由配置表  数组
const routes = [
  {
    path: "/index",
    component: asyncComponent(() => import('@/components/Layout/index')),
    exact: true,
    key: "index",
    //关键字重定向
    // defaultRedirect: true,
    children: [
      {
        path: "/index/test",
        key: "index-test",
        // defaultRedirect: true,
        component: asyncComponent(() => import('@/pages/test/index')),
        exact: false,
      },
      //二级路由的重定向   默认显示的页面
      {
        path: "/index",
        redirect: "/index/test",
      },
    ]
  },
  {
    path: '/',
    redirect: '/index/test'
  }
];
// 抛出路由配置表
export default routes;
