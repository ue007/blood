import React from 'react';
import {
  Router as DefaultRouter,
  Route,
  Switch,
  StaticRouter,
} from 'react-router-dom';
import dynamic from 'umi/dynamic';
import renderRoutes from 'umi/lib/renderRoutes';
import history from '@@/history';
import { routerRedux, dynamic as _dvaDynamic } from 'dva';

const Router = routerRedux.ConnectedRouter;

const routes = [
  {
    path: '/',
    component: __IS_BROWSER
      ? _dvaDynamic({
          component: () => import('../../layouts/index'),
        })
      : require('../../layouts/index').default,
    routes: [
      {
        path: '/',
        component: __IS_BROWSER
          ? _dvaDynamic({
              component: () => import('../index'),
            })
          : require('../index').default,
        exact: true,
        _title: 'web',
        _title_default: 'web',
      },
      {
        path: '/hello',
        component: __IS_BROWSER
          ? _dvaDynamic({
              component: () => import('../hello'),
            })
          : require('../hello').default,
        exact: true,
        _title: 'web',
        _title_default: 'web',
      },
      {
        path: '/users',
        component: __IS_BROWSER
          ? _dvaDynamic({
              component: () => import('../users'),
            })
          : require('../users').default,
        exact: true,
        _title: 'web',
        _title_default: 'web',
      },
      {
        path: '/learning',
        component: __IS_BROWSER
          ? _dvaDynamic({
              component: () => import('../learning'),
            })
          : require('../learning').default,
        exact: true,
        _title: 'web',
        _title_default: 'web',
      },
      {
        path: '/500',
        component: __IS_BROWSER
          ? _dvaDynamic({
              component: () => import('../500'),
            })
          : require('../500').default,
        name: 500,
        exact: true,
        _title: 'web',
        _title_default: 'web',
      },
      {
        path: '/404',
        component: __IS_BROWSER
          ? _dvaDynamic({
              component: () => import('../404'),
            })
          : require('../404').default,
        exact: true,
        _title: 'web',
        _title_default: 'web',
      },
      {
        path: '/puzzlecards',
        component: __IS_BROWSER
          ? _dvaDynamic({
              component: () => import('../puzzlecards'),
            })
          : require('../puzzlecards').default,
        exact: true,
        _title: 'web',
        _title_default: 'web',
      },
      {
        path: '/list',
        component: __IS_BROWSER
          ? _dvaDynamic({
              component: () => import('../list'),
            })
          : require('../list').default,
        exact: true,
        _title: 'web',
        _title_default: 'web',
      },
      {
        path: '/dashboard',
        component: __IS_BROWSER
          ? _dvaDynamic({
              component: () => import('../../layouts/learning'),
            })
          : require('../../layouts/learning').default,
        routes: [
          {
            path: '/dashboard/analysis',
            component: __IS_BROWSER
              ? _dvaDynamic({
                  component: () => import('../Dashboard/Analysis'),
                })
              : require('../Dashboard/Analysis').default,
            exact: true,
            _title: 'web',
            _title_default: 'web',
          },
          {
            path: '/dashboard/monitor',
            component: __IS_BROWSER
              ? _dvaDynamic({
                  component: () => import('../Dashboard/Monitor'),
                })
              : require('../Dashboard/Monitor').default,
            exact: true,
            _title: 'web',
            _title_default: 'web',
          },
          {
            path: '/dashboard/workplace',
            component: __IS_BROWSER
              ? _dvaDynamic({
                  component: () => import('../Dashboard/Workplace'),
                })
              : require('../Dashboard/Workplace').default,
            exact: true,
            _title: 'web',
            _title_default: 'web',
          },
          {
            component: () =>
              React.createElement(
                require('/Users/merlot/Documents/CG/3DForFun/blood/blood/node_modules/_umi-build-dev@1.18.8@umi-build-dev/lib/plugins/404/NotFound.js')
                  .default,
                { pagesPath: 'src/pages', hasRoutesInConfig: true },
              ),
            _title: 'web',
            _title_default: 'web',
          },
        ],
        _title: 'web',
        _title_default: 'web',
      },
      {
        component: () =>
          React.createElement(
            require('/Users/merlot/Documents/CG/3DForFun/blood/blood/node_modules/_umi-build-dev@1.18.8@umi-build-dev/lib/plugins/404/NotFound.js')
              .default,
            { pagesPath: 'src/pages', hasRoutesInConfig: true },
          ),
        _title: 'web',
        _title_default: 'web',
      },
    ],
    _title: 'web',
    _title_default: 'web',
  },
  {
    component: () =>
      React.createElement(
        require('/Users/merlot/Documents/CG/3DForFun/blood/blood/node_modules/_umi-build-dev@1.18.8@umi-build-dev/lib/plugins/404/NotFound.js')
          .default,
        { pagesPath: 'src/pages', hasRoutesInConfig: true },
      ),
    _title: 'web',
    _title_default: 'web',
  },
];
window.g_routes = routes;
const plugins = require('umi/_runtimePlugin');
plugins.applyForEach('patchRoutes', { initialValue: routes });

export { routes };

export default class RouterWrapper extends React.Component {
  unListen() {}

  constructor(props) {
    super(props);

    // route change handler
    function routeChangeHandler(location, action) {
      plugins.applyForEach('onRouteChange', {
        initialValue: {
          routes,
          location,
          action,
        },
      });
    }
    this.unListen = history.listen(routeChangeHandler);
    // dva 中 history.listen 会初始执行一次
    // 这里排除掉 dva 的场景，可以避免 onRouteChange 在启用 dva 后的初始加载时被多执行一次
    const isDva =
      history.listen
        .toString()
        .indexOf('callback(history.location, history.action)') > -1;
    if (!isDva) {
      routeChangeHandler(history.location);
    }
  }

  componentWillUnmount() {
    this.unListen();
  }

  render() {
    const props = this.props || {};
    return <Router history={history}>{renderRoutes(routes, props)}</Router>;
  }
}
