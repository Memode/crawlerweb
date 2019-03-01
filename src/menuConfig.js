// 菜单配置
// headerMenuConfig：头部导航配置
// asideMenuConfig：侧边导航配置

const headerMenuConfig = [
  {
    name: '反馈',
    path: 'https://github.com/alibaba/ice',
    external: true,
    newWindow: true,
    icon: 'message',
  },
  {
    name: '帮助',
    path: 'https://alibaba.github.io/ice',
    external: true,
    newWindow: true,
    icon: 'bangzhu',
  },
];

const asideMenuConfig = [
  {
    name: '资源管理',
    path: '/dashboard',
  },
  {
    name: '配置管理',
    path: '/query',
  },
  {
    name: '调度任务',
    path: '/query2',
  },
  {
    name: '站点配置',
    path: '/account',
    icon: 'home',
  },
  {
    name: '应用详情',
    path: '/app',
    icon: 'home',
  },
  {
    name: '数据监控',
    path: '/monitor',
    icon: 'home',
  },
];

export { headerMenuConfig, asideMenuConfig };
