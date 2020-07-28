// eslint-disable-next-line
import { UserLayout, BasicLayout, RouteView, BlankLayout, PageView } from '@/layouts'
import { bxAnaalyse } from '@/core/icons'

export const asyncRouterMap = [
  {
    path: '/',
    name: 'index',
    component: BasicLayout,
    meta: { title: '首页' },
    redirect: '/dashboard/Monitor',
    children: [
      // 首页dashboard
      {
        path: 'dashboard',
        name: 'dashboard',
        component: RouteView,
        redirect: '/dashboard/Monitor',

        meta: { title: '首页', keepAlive: true, icon: bxAnaalyse, permission: ['dashboard'] },
        children: [
          {
            path: '/dashboard/Monitor',
            name: 'Monitor',
            component: () => import('@/views/dashboard/Monitor'),
            meta: { title: '工作台', keepAlive: false, permission: ['dashboard'] }
          }
        ]
      },
      // 搜索管理
      {
        path: '/search',
        redirect: 'search/SearchStatistics',
        component: RouteView,
        meta: { title: '搜索管理', icon: 'profile', permission: ['profile'] },
        children: [{
          path: 'SearchStatistics',
          name: 'SearchStatistics',
          component: () =>
          import('@/views/search/SearchStatistics'),
          meta: { title: '搜索统计', keepAlive: true, permission: ['profile'], },
          hideChildrenInMenu: true,

          // children : [
          //   {
          //     path: '/search/SearchStatistics/SearchStatisticsWrong',
          //     name: 'SearchStatisticsWrong',
          //     component: () =>
          //         import ('@/views/search/SearchStatisticsWrong'),
          //     meta: { title: '用户行为统计', permission: ['profile'], keepAlive: true, },
          //     hideInMenu: true,

          // },
          // ]
        },
        {
          path: '/SearchStatistics/SearchStatisticsWrong',
          name: 'SearchStatistics',
          component: () => import('@/views/search/SearchStatisticsWrong'),
          meta: { title: '用户行为统计', hideChildrenInMenu: true, keepAlive: true, permission: ['profile'], keepAlive: true, },
          hidden: true,

        },
        {
          path: 'ResourceBank',
          name: 'ResourceBank',
          component: () =>
            import('@/views/search/ResourceBase'),
          meta: { title: '资源库管理', keepAlive: true, permission: ['profile'] }
        },
        {
          path: 'DataSource',
          name: 'DataSource',
          component: () =>
            import('@/views/search/DataSource'),
          meta: { title: '数据源管理', keepAlive: true, permission: ['profile'] }
        },
        // {
        //   path: 'entryTask',
        //   name: 'EntryTask',
        //   redirect: 'entryTask/taskAddFirst',
        //   component: () =>
        //     import('@/views/search/EntryTaskAdd'),
        //   meta: { title: '录入任务管理', keepAlive: true, permission: ['profile'] },
        //   hideChildrenInMenu: true,
        //   children: [
        //     {
        //       path: 'taskAddFirst',
        //       name: 'TaskAddFirst',
        //       component: () =>
        //         import('@/views/search/TaskAddFirst'),
        //       meta: { title: '录入任务添加', keepAlive: true, permission: ['profile'] },
        //     },
        //     {
        //       path: 'taskAddSecond',
        //       name: 'TaskAddSecond',
        //       component: () =>
        //         import('@/views/search/TaskAddSecond'),
        //       meta: { title: '录入任务添加', keepAlive: true, permission: ['profile'] },
        //     }
        //   ]
        // },
        {
          path: 'entryTask',
          name: 'EntryTask',
          // redirect: 'entryTask',
          component: () =>
            import('@/views/search/EntryTask'),
          meta: { title: '录入任务管理', keepAlive: true, permission: ['profile'] },
          hideChildrenInMenu: true,

          children: [
              

            
          ]
        },
        {
          path: 'entryTaskAdd',
          name: 'EntryTaskAdd',
          redirect: 'entryTaskAdd/taskAddFirst',
          component: () =>
            import('@/views/search/EntryTaskAdd'),
          meta: { title: '录入任务添加', keepAlive: true, permission: ['profile'] },
          hidden: true,
          children: [
              {
                path: 'taskAddFirst',
                name: 'TaskAddFirst',
                component: () =>
                  import('@/views/search/TaskAddFirst'),
                meta: { title: '录入任务添加第一步', keepAlive: true, permission: ['profile'] },
              },
              {
                path: 'taskAddSecond',
                name: 'TaskAddSecond',
                component: () =>
                  import('@/views/search/TaskAddSecond'),
                meta: { title: '录入任务添加第二步', keepAlive: true, permission: ['profile'] },
              }

            ]
        },
        {
          path: 'Synonym',
          name: 'Synonym',
          component: () =>
            import('@/views/search/Synonym'),
          meta: { title: '同义词管理', keepAlive: true, permission: ['profile'] }
        }
        ]
      },
      // 推荐管理
      {
        path: '/profile',
        name: 'profile',
        component: RouteView,
        redirect: '/profile/basic',
        meta: { title: '推荐管理', icon: 'profile', permission: ['profile'] },
        children: [
          {
            path: '/profile/basic',
            name: 'ProfileBasic',
            component: () => import('@/views/profile/basic/Index'),
            meta: { title: '标签管理', permission: ['profile'] }
          }
        ]
      },
      // 方案管理
      {
        path: '/account',
        component: RouteView,
        redirect: '/account/settings',
        name: 'account',
        meta: { title: '方案管理', icon: 'user', keepAlive: true, permission: ['user'] },
        children: [
          {
            path: '/account/settings/tongji',
            name: 'Guzhangtongji',
            component: () => import('@/views/account/settings/Guzhangtongji'),
            meta: { title: '故障统计上报', keepAlive: true, permission: ['user'] }
          },
          {
            path: 'settings/base',
            name: 'BaseSettings',
            component: () => import('@/views/account/settings/BaseSetting'),
            meta: { title: '装备知识管理', keepAlive: true, permission: ['user'] }
          },
          {
            // 装备知识添加
            path: 'settings/eqadd',
            name: 'eqadd',
            component: () => import('@/views/account/settings/operate/EquipmentKnowledgeAdd'),
            meta: { title: '装备知识添加', keepAlive: true, permission: ['user'] },
            hidden:true
          },
          {
            // 装备知识修改
            path: 'settings/eqmodify',
            name: 'eqmodify',
            component: () => import('@/views/account/settings/operate/EquipmentKnowledgeModify'),
            meta: { title: '装备知识修改', keepAlive: true, permission: ['user'] },
            hidden:true
          },
          {
            path: '/account/settings/security',
            name: 'security',
            component: () => import('@/views/account/settings/Security'),
            meta: { title: '保障装备管理', keepAlive: true, permission: ['user'] }
          },
          
          {
            path: '/account/settings/custom',
            name: 'CustomSettings',
            component: () => import('@/views/account/settings/Custom'),
            meta: { title: '装备器材目录管理', keepAlive: true, permission: ['user'] }
          },
          {
            path: '/account/settings/customedit',
            name: 'customedit',
            component: () => import('@/views/account/settings/operate/CustomEdit'),
            meta: { title: '保障装备修改', keepAlive: true, permission: ['user'] },
            hidden:true
          },
          {
            path: '/account/settings/binding',
            name: 'BindingSettings',
            component: () => import('@/views/account/settings/Binding'),
            meta: { title: '装备信息管理', keepAlive: true, permission: ['user'] }
          },
          {
            // 装备信息添加页
            path: '/account/settings/bindedited',
            name: 'bindedited',
            component: () => import('@/views/account/settings/BindingEdited'),
            hidden:true,
            meta: { title: '装备信息添加', keepAlive: true, permission: ['user'] }
          },
          {
            path: '/account/settings/notification',
            name: 'notificationSettings',
            component: () => import('@/views/account/settings/Notification'),
            meta: { title: '故障信息管理', keepAlive: true, permission: ['user'] },
          },
          {
            path: '/account/settings/index',
            name: 'index',
            component: () => import('@/views/account/settings/Index'),
            meta: { title: '故障上报管理', keepAlive: true, permission: ['user'] }
          },

          {
            //维修案例库管理
            path: '/account/settings/supportequipment',
            name: 'supportequipment',
            component: () => import('@/views/account/settings/SupportEquipment'),
            meta: { title: '维修案例库管理', keepAlive: true, permission: ['user'] }
          },
         
          {
            // 故障信息管理中的编辑页
            path: '/account/settings/operate/notificationedited',
            name: 'edited',
            component: () => import('@/views/account/settings/operate/NotificationEdited'),
            meta: { title: '故障信息编辑', keepAlive: true, permission: ['user'] },
            hidden: true
          },
          
          {
            // 故障上报管理中的编辑页
            path: '/account/settings/operate/indexedited',
            name: 'indexedited',
            component: () => import('@/views/account/settings/operate/IndexEdited'),
            meta: { title: '故障上报编辑', keepAlive: true, permission: ['user'] },
            hidden: true
          },
          {
            // 维修案例库管理中的编辑页
            path: '/account/settings/operate/supportequipmentedited',
            name: 'supportequipmentedited',
            component: () => import('@/views/account/settings/operate/SupportEquipmentEdited'),
            meta: { title: '故障方案编辑', keepAlive: true, permission: ['user'] },
            hidden: true
          },
          {
            // 维修案例库管理中的添加
            path: '/account/settings/operate/supportequipmentadd',
            name: 'supportequipmentadd',
            component: () => import('@/views/account/settings/operate/SupportEquipmentAdd'),
            meta: { title: '故障方案添加', keepAlive: true, permission: ['user'] },

            hidden: true
          },
         
          {
            // 保障装备管理中的编辑页
            path: '/account/settings/operate/securityedited',
            name: 'securityedited',
            component: () => import('@/views/account/settings/operate/SecurityEdited'),
            meta: { title: '保障装备修改', keepAlive: true, permission: ['user'] },

            hidden: true
          },
          {
            //保障装备管理中的添加
            path: '/account/settings/operate/securityadd',
            name: 'securityadd',
            component: () => import('@/views/account/settings/operate/SecurityAdd'),
            meta: { title: '保障装备添加', keepAlive: true, permission: ['user'] },

            hidden: true
          },
        ]
      },
      {
        path: 'system',
        name: 'system',
        component: RouteView,
        redirect: '/system/user',
        meta: { title: '系统管理', icon: 'table', permission: ['table'] },
        children: [
          {
            path: 'user',
            name: 'user',
            component: () => import('@/views/system/User'),
            // component: () => import('@/views/system/UserPortrait'),
            meta: { title: '用户管理', keepAlive: true, permission: ['table'] },
            hideChildrenInMenu: true,
          },
          {
            path: 'userPortrait',
            name: 'UserPortrait',
            component: () => import('@/views/system/UserPortrait'),
            // component: () => import('@/views/system/UserPortrait'),
            meta: { title: '用户画像', keepAlive: true, permission: ['table'] },
            hidden: true
          },
          {
            path: 'jurisdiction',
            name: 'jurisdiction',
            component: () => import('@/views/system/Jurisdiction'),
            meta: { title: '权限管理', keepAlive: true, permission: ['table'] }
          },
          {
            path: 'role',
            name: 'role',
            component: () => import('@/views/system/Role'),
            meta: { title: '角色管理', keepAlive: true, permission: ['table'] }
          },
          {
            name: 'authorization',
            path: '/Authorization/authorization',
            component: () => import('@/views/system/Authorization/Authorization'),

            meta: { title: '授权管理', keepAlive: true, permission: ['table'] },
          },
          {
            // 授予权限
            path: '/Authorization/grantpermissions',
            name:'grantpermissions',
            component: () => import('@/views/system/Authorization/GrantPermissions'),
            meta: { title: '授予权限', keepAlive: true, permission: ['table'] },
            hidden:true
          },
          {
            // 授予权限
            path: '/Authorization/awardrole',
            name:'awardrole',
            component: () => import('@/views/system/Authorization/AwardRole'),
            meta: { title: '授予角色', keepAlive: true, permission: ['table'] },
            hidden:true
          }
        ]
      },
      // 方案管理

    ]
  }
  // {
  //   path: '*', redirect: '/404', hidden: true
  // }
]

/**
 * 基础路由
 * @type { *[] }
 */
export const constantRouterMap = [
  {
    path: '/user',
    component: UserLayout,
    redirect: '/user/login',
    hidden: true,
    children: [
      {
        path: 'login',
        name: 'login',
        component: () => import(/* webpackChunkName: "user" */ '@/views/user/Login')
      },
      {
        path: 'register',
        name: 'register',
        component: () => import(/* webpackChunkName: "user" */ '@/views/user/Register')
      },
      {
        path: 'register-result',
        name: 'registerResult',
        component: () => import(/* webpackChunkName: "user" */ '@/views/user/RegisterResult')
      },
      {
        path: 'recover',
        name: 'recover',
        component: undefined
      }
    ]
  },

  {
    path: '/test',
    component: BlankLayout,
    redirect: '/test/home',
    children: [
      {
        path: 'home',
        name: 'TestHome',
        component: () => import('@/views/Home')
      }
    ]
  },

  {
    path: '/404',
    component: () => import(/* webpackChunkName: "fail" */ '@/views/exception/404')
  }

]
