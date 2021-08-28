import { defineConfig } from 'umi';
import routes from './routes';

export default defineConfig({
  base: '/dxc/',
  nodeModulesTransform: {
    type: 'none',
  },
  routes,
  fastRefresh: {},
  locale: true,
});
