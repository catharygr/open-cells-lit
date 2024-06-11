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
];
