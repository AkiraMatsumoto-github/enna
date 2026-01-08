import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CqBUGN2f.mjs';
import { manifest } from './manifest_Cj-2UnQY.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/activity.astro.mjs');
const _page2 = () => import('./pages/api/schedule.json.astro.mjs');
const _page3 = () => import('./pages/contact.astro.mjs');
const _page4 = () => import('./pages/news/_id_.astro.mjs');
const _page5 = () => import('./pages/profile.astro.mjs');
const _page6 = () => import('./pages/service.astro.mjs');
const _page7 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/activity.astro", _page1],
    ["src/pages/api/schedule.json.ts", _page2],
    ["src/pages/contact.astro", _page3],
    ["src/pages/news/[id].astro", _page4],
    ["src/pages/profile.astro", _page5],
    ["src/pages/service.astro", _page6],
    ["src/pages/index.astro", _page7]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "a393c46a-b887-4e11-bac2-39c3e890b1b5",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
