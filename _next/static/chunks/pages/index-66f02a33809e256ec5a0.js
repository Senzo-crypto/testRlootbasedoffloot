(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8869:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var r=n(5893),o=n(1664),a=n(1163),i=n(9008),s=n(4409),c=n.n(s);function l(e){var t=e.children;return(0,r.jsxs)("div",{children:[(0,r.jsx)(u,{}),(0,r.jsx)(d,{}),(0,r.jsx)("div",{className:c().content,children:t}),(0,r.jsx)(f,{})]})}function u(){return(0,r.jsxs)(i.default,{children:[(0,r.jsx)("title",{children:"RLoot"}),(0,r.jsx)("meta",{name:"title",content:"RLoot"}),(0,r.jsx)("meta",{name:"description",content:"Feel free to use RLoot and interpret this project in any way you want."}),(0,r.jsx)("meta",{property:"og:type",content:"website"}),(0,r.jsx)("meta",{property:"og:url",content:"https://www.lootproject.com/"}),(0,r.jsx)("meta",{property:"og:title",content:"RLoot"}),(0,r.jsx)("meta",{property:"og:description",content:"RLoot is randomly generated car accessories and parts, stored on chain."}),(0,r.jsx)("meta",{property:"og:image",content:"https://lootproject.com/meta.png"}),(0,r.jsx)("meta",{property:"twitter:card",content:"summary_large_image"}),(0,r.jsx)("meta",{property:"twitter:url",content:"https://www.lootproject.com/"}),(0,r.jsx)("meta",{property:"twitter:title",content:"Loot"}),(0,r.jsx)("meta",{property:"twitter:description",content:"RLoot is randomly generated car accessories and parts, stored on chain."}),(0,r.jsx)("meta",{property:"twitter:image",content:"https://lootproject.com/meta.png"}),(0,r.jsx)("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),(0,r.jsx)("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:"true"}),(0,r.jsx)("link",{href:"https://fonts.googleapis.com/css2?family=EB+Garamond:wght@400;700&display=swap",rel:"stylesheet"})]})}function d(){var e=(0,a.useRouter)().pathname;return(0,r.jsxs)("div",{className:c().header,children:[(0,r.jsx)("div",{className:c().header__logo,children:(0,r.jsx)(o.default,{href:"/",children:(0,r.jsx)("a",{children:""})})}),(0,r.jsx)("div",{className:c().header__links,children:(0,r.jsx)("ul",{children:[{name:"",path:""},{name:"",path:""}].map((function(t,n){var a=t.name,i=t.path;return(0,r.jsx)("li",{children:(0,r.jsx)(o.default,{href:i,children:(0,r.jsx)("a",{className:e===i?c().header__links_active:void 0,children:a})})},n)}))})})]})}function f(){return(0,r.jsx)("div",{className:c().footer,children:(0,r.jsxs)("p",{children:["This website is"," ",(0,r.jsx)("a",{href:"https://github.com/lootproject/website",target:"_blank",rel:"noopener noreferrer",children:"open-source"}),"."]})})}},2167:function(e,t,n){"use strict";var r=n(3848);t.default=void 0;var o,a=(o=n(7294))&&o.__esModule?o:{default:o},i=n(1063),s=n(4651),c=n(7426);var l={};function u(e,t,n,r){if(e&&i.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;l[t+"%"+n+(o?"%"+o:"")]=!0}}var d=function(e){var t,n=!1!==e.prefetch,o=s.useRouter(),d=a.default.useMemo((function(){var t=i.resolveHref(o,e.href,!0),n=r(t,2),a=n[0],s=n[1];return{href:a,as:e.as?i.resolveHref(o,e.as):s||a}}),[o,e.href,e.as]),f=d.href,h=d.as,p=e.children,m=e.replace,_=e.shallow,v=e.scroll,g=e.locale;"string"===typeof p&&(p=a.default.createElement("a",null,p));var x=(t=a.default.Children.only(p))&&"object"===typeof t&&t.ref,j=c.useIntersection({rootMargin:"200px"}),y=r(j,2),b=y[0],k=y[1],w=a.default.useCallback((function(e){b(e),x&&("function"===typeof x?x(e):"object"===typeof x&&(x.current=e))}),[x,b]);a.default.useEffect((function(){var e=k&&n&&i.isLocalURL(f),t="undefined"!==typeof g?g:o&&o.locale,r=l[f+"%"+h+(t?"%"+t:"")];e&&!r&&u(o,f,h,{locale:t})}),[h,f,k,g,n,o]);var L={ref:w,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,a,s,c){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&i.isLocalURL(n))&&(e.preventDefault(),null==s&&r.indexOf("#")>=0&&(s=!1),t[o?"replace":"push"](n,r,{shallow:a,locale:c,scroll:s}))}(e,o,f,h,m,_,v,g)},onMouseEnter:function(e){i.isLocalURL(f)&&(t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),u(o,f,h,{priority:!0}))}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var G="undefined"!==typeof g?g:o&&o.locale,N=o&&o.isLocaleDomain&&i.getDomainLocale(h,G,o&&o.locales,o&&o.domainLocales);L.href=N||i.addBasePath(i.addLocale(h,G,o&&o.defaultLocale))}return a.default.cloneElement(t,L)};t.default=d},7426:function(e,t,n){"use strict";var r=n(3848);Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!i,c=o.useRef(),l=o.useState(!1),u=r(l,2),d=u[0],f=u[1],h=o.useCallback((function(e){c.current&&(c.current(),c.current=void 0),n||d||e&&e.tagName&&(c.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=s.get(t);if(n)return n;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return s.set(t,n={id:t,observer:o,elements:r}),n}(n),o=r.id,a=r.observer,i=r.elements;return i.set(e,t),a.observe(e),function(){i.delete(e),a.unobserve(e),0===i.size&&(a.disconnect(),s.delete(o))}}(e,(function(e){return e&&f(e)}),{rootMargin:t}))}),[n,t,d]);return o.useEffect((function(){if(!i&&!d){var e=a.requestIdleCallback((function(){return f(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[d]),[h,d]};var o=n(7294),a=n(3447),i="undefined"!==typeof IntersectionObserver;var s=new Map},844:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return l}});var r=n(5893),o=n(1664),a=n(8869),i=[{id:14,attributes:["Muscle [Rear-Ended]",'V8 [50000 Miles]','Single Turbo [Performance]',"Aluminum Hood","All-Season [Bald]","Dash Camera"]},{id:23,attributes:["Sedan [Rear-Ended]","V8 [2000000 Miles]","Exhaust Manifolds [Street]","Roll Cage","Spare [New]","Chrome Wrap"]},{id:26,attributes:["Coupe [Fender-Bendered]","V10 [New]","Dyno Tuned ECU","Rear Bumper","Mud-Terrain [Bald]","Chrome Wrap"]}],s=n(5594),c=n.n(s);function l(){return(0,r.jsx)(a.Z,{children:(0,r.jsxs)("div",{children:[(0,r.jsxs)("div",{className:c().home__cta,children:[(0,r.jsx)("h1",{children:"RLoot"}),(0,r.jsx)("ul",{children:[{name:"OpenSea",url:"https://opensea.io/collection/rloot-official"},{name:"Twitter",url:"https://twitter.com/RLOOT_OFFICIAL"},{name:"Contract",url:"https://etherscan.io/address/0x3120f1dd4968514373ca23d4f26fec80ee6a9620"}].map((function(e,t){var n=e.name,a=e.url;return(0,r.jsx)("li",{children:a.startsWith("/")?(0,r.jsx)(o.default,{href:a,children:(0,r.jsx)("a",{children:n})}):(0,r.jsx)("a",{href:a,target:"_blank",rel:"noopener noreferrer",children:n})},t)}))}),(0,r.jsxs)("p",{children:["RLoot is randomly generated car accessories and parts, stored on chain.",(0,r.jsx)("br",{})," Much like it's counterpart, Loot, images are intentionally omitted for you and others to interpret. ",(0,r.jsx)("br",{})," Feel free to use RLoot and interpret this project in any way you want."]})]}),(0,r.jsxs)("div",{className:c().home__feature,children:[(0,r.jsx)("span",{children:"Example Cars:"}),i.sort((function(){return.5-Math.random()})).slice(0,3).map((function(e,t){var n=e.id,o=e.attributes;return(0,r.jsx)("a",{href:"https://opensea.io/collection/rloot-official/".concat(n),target:"_blank",rel:"noopener noreferrer",className:c().home__bag,children:(0,r.jsxs)("div",{className:c().home__bag_attributes,children:[(0,r.jsxs)("span",{children:["#",n]}),(0,r.jsx)("ul",{children:o.map((function(e,t){return(0,r.jsx)("li",{children:(0,r.jsx)("span",{children:e})},t)}))})]})},t)}))]})]})})}},5301:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(844)}])},4409:function(e){e.exports={header:"Layout_header__2iLWX",header__logo:"Layout_header__logo__2Zu-m",header__links:"Layout_header__links__2tkmn",header__links_active:"Layout_header__links_active__2DGAB",footer:"Layout_footer__2GYdL"}},5594:function(e){e.exports={home__cta:"Home_home__cta__10yCx",home__feature:"Home_home__feature__GTZaW",home__bag:"Home_home__bag__1YhOb",home__bag_attributes:"Home_home__bag_attributes__3uVtG"}},9008:function(e,t,n){e.exports=n(639)},1664:function(e,t,n){e.exports=n(2167)},1163:function(e,t,n){e.exports=n(4651)}},function(e){e.O(0,[774,888,179],(function(){return t=5301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);