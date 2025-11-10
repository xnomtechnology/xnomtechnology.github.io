
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/xnom-app/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/xnom-app"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 441, hash: 'f1b2b1ca6a3d24a979137d9b752b8c0813655279c27462bb16a4f2c1e5b1d6a1', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 954, hash: '79a7b2b42a481837afaae9dc12b74eae58a8f05e8efdd4487b7416562f2a41e1', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 21572, hash: 'a6e373dd69e319850289c55e29a94bbabdef0fc69c2910bd8cb44dece84925b2', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
