import 'piccolore';
import { p as decodeKey } from './chunks/astro/server_QXGJpzTU.mjs';
import 'clsx';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_Cgl7qgDD.mjs';
import 'es-module-lexer';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///Users/matsumotoakira/Documents/Private_development/enna/","cacheDir":"file:///Users/matsumotoakira/Documents/Private_development/enna/node_modules/.astro/","outDir":"file:///Users/matsumotoakira/Documents/Private_development/enna/dist/","srcDir":"file:///Users/matsumotoakira/Documents/Private_development/enna/src/","publicDir":"file:///Users/matsumotoakira/Documents/Private_development/enna/public/","buildClientDir":"file:///Users/matsumotoakira/Documents/Private_development/enna/dist/client/","buildServerDir":"file:///Users/matsumotoakira/Documents/Private_development/enna/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"activity/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/activity","isIndex":false,"type":"page","pattern":"^\\/activity\\/?$","segments":[[{"content":"activity","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/activity.astro","pathname":"/activity","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"contact/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/contact","isIndex":false,"type":"page","pattern":"^\\/contact\\/?$","segments":[[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contact.astro","pathname":"/contact","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"profile/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/profile","isIndex":false,"type":"page","pattern":"^\\/profile\\/?$","segments":[[{"content":"profile","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/profile.astro","pathname":"/profile","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"service/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/service","isIndex":false,"type":"page","pattern":"^\\/service\\/?$","segments":[[{"content":"service","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/service.astro","pathname":"/service","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/schedule.json","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/schedule\\.json\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"schedule.json","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/schedule.json.ts","pathname":"/api/schedule.json","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/matsumotoakira/Documents/Private_development/enna/src/pages/activity.astro",{"propagation":"none","containsHead":true}],["/Users/matsumotoakira/Documents/Private_development/enna/src/pages/contact.astro",{"propagation":"none","containsHead":true}],["/Users/matsumotoakira/Documents/Private_development/enna/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/Users/matsumotoakira/Documents/Private_development/enna/src/pages/news/[id].astro",{"propagation":"none","containsHead":true}],["/Users/matsumotoakira/Documents/Private_development/enna/src/pages/profile.astro",{"propagation":"none","containsHead":true}],["/Users/matsumotoakira/Documents/Private_development/enna/src/pages/service.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000virtual:astro:actions/noop-entrypoint":"noop-entrypoint.mjs","\u0000@astro-page:src/pages/activity@_@astro":"pages/activity.astro.mjs","\u0000@astro-page:src/pages/api/schedule.json@_@ts":"pages/api/schedule.json.astro.mjs","\u0000@astro-page:src/pages/contact@_@astro":"pages/contact.astro.mjs","\u0000@astro-page:src/pages/news/[id]@_@astro":"pages/news/_id_.astro.mjs","\u0000@astro-page:src/pages/profile@_@astro":"pages/profile.astro.mjs","\u0000@astro-page:src/pages/service@_@astro":"pages/service.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_Cj-2UnQY.mjs","/Users/matsumotoakira/Documents/Private_development/enna/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_CIlIkbJ5.mjs","/Users/matsumotoakira/Documents/Private_development/enna/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts":"_astro/Layout.astro_astro_type_script_index_0_lang.ClXrCzw1.js","/Users/matsumotoakira/Documents/Private_development/enna/src/components/common/Header.astro?astro&type=script&index=0&lang.ts":"_astro/Header.astro_astro_type_script_index_0_lang.BXW_8WE-.js","/Users/matsumotoakira/Documents/Private_development/enna/src/components/features/Schedule.astro?astro&type=script&index=0&lang.ts":"_astro/Schedule.astro_astro_type_script_index_0_lang.wws6Jd5V.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["/Users/matsumotoakira/Documents/Private_development/enna/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts","const n={root:null,rootMargin:\"0px\",threshold:.1},o=new IntersectionObserver(t=>{t.forEach(e=>{e.isIntersecting&&(e.target.classList.add(\"is-visible\"),o.unobserve(e.target))})},n);document.addEventListener(\"DOMContentLoaded\",()=>{document.querySelectorAll(\".animate-on-scroll\").forEach(e=>o.observe(e))});"],["/Users/matsumotoakira/Documents/Private_development/enna/src/components/common/Header.astro?astro&type=script&index=0&lang.ts","const o=document.getElementById(\"menu-btn\"),t=document.getElementById(\"mobile-menu\"),e=o?.querySelectorAll(\"span\");let n=!1;o?.addEventListener(\"click\",()=>{n=!n,n?(e[0].style.transform=\"translateY(8px) rotate(45deg)\",e[1].style.opacity=\"0\",e[2].style.transform=\"translateY(-8px) rotate(-45deg)\",t?.classList.remove(\"opacity-0\",\"pointer-events-none\"),t?.classList.add(\"opacity-100\",\"pointer-events-auto\"),document.body.style.overflow=\"hidden\"):(e[0].style.transform=\"none\",e[1].style.opacity=\"1\",e[2].style.transform=\"none\",t?.classList.remove(\"opacity-100\",\"pointer-events-auto\"),t?.classList.add(\"opacity-0\",\"pointer-events-none\"),document.body.style.overflow=\"\")});const l=t?.querySelectorAll(\"a\");l?.forEach(s=>{s.addEventListener(\"click\",()=>{n&&o?.click()})});"],["/Users/matsumotoakira/Documents/Private_development/enna/src/components/features/Schedule.astro?astro&type=script&index=0&lang.ts","class g{constructor(){this.currentDate=new Date,this.today=new Date,this.els={days:document.getElementById(\"calendar-days\"),label:document.getElementById(\"current-month-label\"),prevBtn:document.getElementById(\"prev-month\"),nextBtn:document.getElementById(\"next-month\"),loading:document.getElementById(\"calendar-loading\"),error:document.getElementById(\"calendar-error\")},this.init()}init(){this.els.days&&(this.updateHeader(),this.fetchAndRender(),this.els.prevBtn?.addEventListener(\"click\",()=>this.changeMonth(-1)),this.els.nextBtn?.addEventListener(\"click\",()=>this.changeMonth(1)))}changeMonth(t){this.currentDate.setMonth(this.currentDate.getMonth()+t),this.updateHeader(),this.updateButtons(),this.fetchAndRender()}updateHeader(){const t=this.currentDate.getFullYear(),a=this.currentDate.getMonth()+1;this.els.label.textContent=`${t}.${a.toString().padStart(2,\"0\")}`}updateButtons(){const t=this.currentDate.getFullYear()===this.today.getFullYear()&&this.currentDate.getMonth()===this.today.getMonth();this.els.prevBtn&&(this.els.prevBtn.disabled=t)}async fetchAndRender(){this.setLoading(!0),this.setError(!1);const t=new Date(this.currentDate.getFullYear(),this.currentDate.getMonth(),1),a=new Date(this.currentDate.getFullYear(),this.currentDate.getMonth()+1,0),d=new Date(t);d.setDate(1-t.getDay());const s=new Date(a);s.setDate(a.getDate()+(6-a.getDay()));const e=n=>`${n.getFullYear()}-${(n.getMonth()+1).toString().padStart(2,\"0\")}-${n.getDate().toString().padStart(2,\"0\")}`;try{const n=e(d),i=e(s),o=await fetch(`/api/schedule.json?start=${n}&end=${i}`);if(!o.ok)throw new Error(\"API Error\");const r=await o.json();this.renderGrid(d,s,r)}catch(n){console.error(n),this.setError(!0)}finally{this.setLoading(!1)}}renderGrid(t,a,d){this.els.days.innerHTML=\"\";const s={};d.forEach(n=>{const i=n.start.split(\"T\")[0];s[i]=n});let e=new Date(t);for(;e<=a;){const n=`${e.getFullYear()}-${(e.getMonth()+1).toString().padStart(2,\"0\")}-${e.getDate().toString().padStart(2,\"0\")}`,i=n===`${this.today.getFullYear()}-${(this.today.getMonth()+1).toString().padStart(2,\"0\")}-${this.today.getDate().toString().padStart(2,\"0\")}`,o=e.getMonth()===this.currentDate.getMonth(),r=s[n],h=document.createElement(\"div\");h.className=`\n          aspect-square rounded-lg md:rounded-xl p-1 flex flex-col items-center justify-start pt-2 relative border border-transparent\n          ${o?\"bg-white\":\"opacity-30 bg-gray-50\"}\n          ${i?\"border-brand-main/50 bg-brand-base/10\":\"\"}\n        `;let c='<span class=\"text-xs text-gray-300 mt-1\">-</span>',l=\"\";r&&(r.title===\"○\"||r.title===\"◎\"?(c='<span class=\"text-lg md:text-xl font-bold text-red-400 leading-none mt-1\">◎</span>',l=\"bg-red-50 hover:bg-red-100 cursor-pointer\"):r.title===\"×\"?(c='<span class=\"text-lg md:text-xl font-bold text-gray-300 leading-none mt-1\">×</span>',l=\"bg-gray-50\"):r.title===\"△\"&&(c='<span class=\"text-lg md:text-xl font-bold text-orange-400 leading-none mt-1\">△</span>',l=\"bg-orange-50 hover:bg-orange-100 cursor-pointer\")),l&&o&&(h.className+=` ${l}`),h.innerHTML=`\n          <span class=\"text-xs md:text-sm font-bold ${e.getDay()===0?\"text-red-400\":e.getDay()===6?\"text-blue-400\":\"text-brand-text\"}\">\n            ${e.getDate()}\n          </span>\n          ${o?c:\"\"}\n        `,this.els.days.appendChild(h),e.setDate(e.getDate()+1)}}setLoading(t){this.els.loading&&(this.els.loading.style.opacity=t?\"1\":\"0\",this.els.loading.style.pointerEvents=t?\"auto\":\"none\")}setError(t){this.els.error&&this.els.error.classList.toggle(\"hidden\",!t)}}document.addEventListener(\"DOMContentLoaded\",()=>{new g});"]],"assets":["/_astro/activity.BQGkQRKD.css","/favicon.png","/favicon.svg","/hero.png","/logo.png","/images/activity-eurhythmics.png","/images/activity-handprint.png","/images/activity-massage.png","/images/activity-storytime.png","/images/activity-wheat-clay.png","/images/feature-activity.png","/images/feature-care.png","/images/feature-professional.png","/images/floating_baby.png","/images/floating_baby_transparent.png","/images/flow-day.png","/images/flow-inquiry.png","/images/flow-interview.png","/images/flow-payment.png","/images/flow-report.png","/images/flow-reservation.png","/images/flow-reservation_old.png","/images/profile.jpg","/activity/index.html","/contact/index.html","/profile/index.html","/service/index.html","/index.html"],"buildFormat":"directory","checkOrigin":true,"allowedDomains":[],"serverIslandNameMap":[],"key":"/wOdkFE73qeq4Q8z80QDOvLXHEElXDMjyLcgPs0e/cQ="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
