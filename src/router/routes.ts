import { RouteDefinition } from '@open-cells/core/types';

export const routes: RouteDefinition[] = [
  {
    path: '/',
    name: 'home',
    component: 'home-page',
    action: async () => {
      await import('../pages/home/home-page.js');
    },
  },
  {
    path: '/productos',
    name: 'productos',
    component: 'productos-page',
    action: async () => {
      await import('../pages/productos/productos-page.js');
    },
  },
  {
    path: '/productos/:productoId',
    name: 'producto',
    component: 'producto-page',
    action: async () => {
      await import('../pages/productos/producto/producto.js');
    },
  },
  {
    path: '/contador',
    name: 'contador',
    component: 'contador-page',
    action: async () => {
      await import('../pages/contador/contador-page.js');
    },
  },
  {
    path: '/usuario',
    name: 'usuario',
    component: 'usuario-page',
    action: async () => {
      await import('../pages/usuario/usuario-page.js');
    },
  },
  {
    path: '/login',
    name: 'login',
    component: 'login-page',
    action: async () => {
      await import('../pages/login/login-page.js');
    },
  },
  {
    path: '/input-publico-on',
    name: 'input-publico-on',
    component: 'input-publico-on-page',
    action: async () => {
      await import('../pages/input-publico-on/input-publico-on-page.js');
    },
  },
  {
    path: '/not-found',
    name: 'not-found',
    notFound: true,
    component: 'not-found-page',
    action: async () => {
      await import('../pages/not-found/not-found.js');
    },
  },
];
