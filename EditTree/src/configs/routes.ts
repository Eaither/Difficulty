
export default [
  {
    path: '/',
    component: '../layouts/index',
    // redirect: '@/layouts',
    // routes: [
    //   {
    //     path: '/CategoryManagement',
    //     component: './CategoryManagement'
    //   }
    // ]
  },
  {
    path: '/CategoryManagement',
    component: '@/pages/CategoryManagement'
  }

]/**
 * 路由匹配不到渲染404页面
 */
// const filling404 = (list: any) => {
//   list.forEach((item: any) => {
//     if (!item.routes) {
//       return;
//     }
//     item.routes.push({ component: '@/pages/exception/404' });
//     filling404(item.routes);
//   });
// };

// filling404(routes);