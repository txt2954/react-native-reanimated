"use strict";(self.webpackChunkdocs_reanimated=self.webpackChunkdocs_reanimated||[]).push([[8714,8776],{97540:(e,t,a)=>{a.r(t),a.d(t,{default:()=>Ie});var n=a(96540),s=a(20053),o=a(69024),i=a(17559),r=a(2967),c=a(84142),d=a(32252),l=a(26588),m=a(41758),u=a(21312),p=a(23104),h=a(75062);const b={backToTopButton:"backToTopButton_sjWU",backToTopButtonShow:"backToTopButtonShow_xfvO"};function g(){const{shown:e,scrollToTop:t}=function(e){let{threshold:t}=e;const[a,s]=(0,n.useState)(!1),o=(0,n.useRef)(!1),{startScroll:i,cancelScroll:r}=(0,p.gk)();return(0,p.Mq)(((e,a)=>{let{scrollY:n}=e;const i=a?.scrollY;i&&(o.current?o.current=!1:n>=i?(r(),s(!1)):n<t?s(!1):n+window.innerHeight<document.documentElement.scrollHeight&&s(!0))})),(0,h.$)((e=>{e.location.hash&&(o.current=!0,s(!1))})),{shown:a,scrollToTop:()=>i(0)}}({threshold:300});return n.createElement("button",{"aria-label":(0,u.T)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,s.default)("clean-btn",i.G.common.backToTopButton,b.backToTopButton,e&&b.backToTopButtonShow),type:"button",onClick:t})}var f=a(53109),x=a(56347),_=a(58168),I=a(86025),v=a(64071),j=a(24581),w=a(69229),A=a(6342),k=a(45863);function E(e){return v.j.jsx("svg",{width:"20",height:"20","aria-hidden":"true",...e,children:v.j.jsxs("g",{fill:"#7a7a7a",children:[v.j.jsx("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),v.j.jsx("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})]})})}const S={collapseSidebarButton:"_collapseSidebarButton_1hl7s_12",collapseSidebarButtonIcon:"_collapseSidebarButtonIcon_1hl7s_22"};function y({onClick:e}){return v.j.jsx("button",{type:"button",title:(0,u.T)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,u.T)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,w.c)("button button--secondary button--outline",S.collapseSidebarButton),onClick:e,children:v.j.jsx(E,{className:S.collapseSidebarButtonIcon})})}var C=a(65041),T=a(99169),N=a(89532);const B=Symbol("EmptyContext"),L=n.createContext(B);function H(e){let{children:t}=e;const[a,s]=(0,n.useState)(null),o=(0,n.useMemo)((()=>({expandedItem:a,setExpandedItem:s})),[a]);return n.createElement(L.Provider,{value:o},t)}var M=a(41422),D=a(75489),P=a(92303);const R={badge:"_badge_1epvr_1",new:"_new_1epvr_15",experimental:"_experimental_1epvr_20",deprecated:"_deprecated_1epvr_25",unreleased:"_unreleased_1epvr_30"};function F({type:e}){return v.j.jsx("div",{className:(0,w.c)(R.badge,"new"===e&&R.new,"experimental"===e&&R.experimental,"deprecated"===e&&R.deprecated,"unreleased"===e&&R.unreleased),children:e})}var V=a(16654),W=a(81255);const G={menuExternalLink:"_menuExternalLink_afw9w_1"};function O({item:e,onItemClick:t,activePath:a,level:n,index:s,...o}){const{href:r,label:d,className:l,autoAddBaseUrl:m}=e,u=(0,c.w8)(e,a),p=(0,V.A)(r);return v.j.jsx("li",{className:(0,w.c)(i.G.docs.docSidebarItemLink,i.G.docs.docSidebarItemLinkLevel(n),"menu__list-item",l),children:v.j.jsxs(D.A,{className:(0,w.c)("menu__link",!p&&G.menuExternalLink,{"menu__link--active":u}),autoAddBaseUrl:m,"aria-current":u?"page":void 0,to:r,...p&&{onClick:t?()=>t(e):void 0},...o,children:[d,!p&&v.j.jsx(W.A,{})]})},d)}const z={menuHtmlItem:"_menuHtmlItem_1cavx_2"};function U({item:e,level:t,index:a}){const{value:n,defaultStyle:s,className:o}=e;return v.j.jsx("li",{className:(0,w.c)(i.G.docs.docSidebarItemLink,i.G.docs.docSidebarItemLinkLevel(t),s&&[z.menuHtmlItem,"menu__list-item"],o),dangerouslySetInnerHTML:{__html:n}},a)}function $({categoryLabel:e,onClick:t}){return v.j.jsx("button",{"aria-label":(0,u.T)({id:"theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel",message:"Toggle the collapsible sidebar category '{label}'",description:"The ARIA label to toggle the collapsible sidebar category"},{label:e}),type:"button",className:"clean-btn menu__caret",onClick:t})}function q({item:e,onItemClick:t,activePath:a,level:s,index:o,...r}){const{items:d,label:l,collapsible:m,className:u,href:p}=e,{docs:{sidebar:{autoCollapseCategories:h}}}=(0,A.p)(),b=function(e){const t=(0,P.A)();return(0,n.useMemo)((()=>e.href?e.href:!t&&e.collapsible?(0,c._o)(e):void 0),[e,t])}(e),g=(0,c.w8)(e,a),f=(0,T.ys)(p,a),{collapsed:x,setCollapsed:_}=(0,M.u)({initialState:()=>!!m&&(!g&&e.collapsed)}),{expandedItem:I,setExpandedItem:j}=function(){const e=(0,n.useContext)(L);if(e===B)throw new N.dV("DocSidebarItemsExpandedStateProvider");return e}(),k=(e=!x)=>{j(e?null:o),_(e)};return function({isActive:e,collapsed:t,updateCollapsed:a}){const s=(0,N.ZC)(e);(0,n.useEffect)((()=>{e&&!s&&t&&a(!1)}),[e,s,t,a])}({isActive:g,collapsed:x,updateCollapsed:k}),(0,n.useEffect)((()=>{m&&null!=I&&I!==o&&h&&_(!0)}),[m,I,o,_,h]),v.j.jsxs("li",{className:(0,w.c)(i.G.docs.docSidebarItemCategory,i.G.docs.docSidebarItemCategoryLevel(s),"menu__list-item",{"menu__list-item--collapsed":x},u),children:[v.j.jsxs("div",{className:(0,w.c)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":f}),children:[v.j.jsx(D.A,{className:(0,w.c)("menu__link",{"menu__link--sublist":m,"menu__link--sublist-caret":!p&&m,"menu__link--active":g}),onClick:m?a=>{null==t||t(e),p?k(!1):(a.preventDefault(),k())}:()=>{null==t||t(e)},"aria-current":f?"page":void 0,"aria-expanded":m?!x:void 0,href:m?b??"#":b,...r,children:l}),p&&m&&v.j.jsx($,{categoryLabel:l,onClick:e=>{e.preventDefault(),k()}})]}),v.j.jsx(M.N,{lazy:!0,as:"ul",className:"menu__list",collapsed:x,children:v.j.jsx(Y,{items:d,newItems:r.newItems,experimentalItems:r.experimentalItems,deprecatedItems:r.deprecatedItems,unreleasedItems:r.unreleasedItems,tabIndex:x?-1:0,onItemClick:t,activePath:a,level:s+1})})]})}function K({item:e,...t}){switch(e.type){case"category":return v.j.jsx(q,{newItems:t.newItems,experimentalItems:t.experimentalItems,deprecatedItems:t.deprecatedItems,unreleasedItems:t.unreleasedItems,item:e,...t});case"html":return v.j.jsx(U,{item:e,...t});default:return v.j.jsx(O,{item:e,...t})}}const X="_wrapper_19jsa_1",Y=(0,n.memo)((function({items:e,experimentalItems:t,deprecatedItems:a,newItems:n,unreleasedItems:s,...o}){return v.j.jsx(H,{children:e.map(((e,i)=>v.j.jsxs("div",{className:X,children:[v.j.jsx(K,{newItems:n,experimentalItems:t,deprecatedItems:a,unreleasedItems:s,item:e,index:i,...o}),t&&t.includes(e.docId)&&v.j.jsx(F,{type:"experimental"},e.docId),n&&n.includes(e.docId)&&v.j.jsx(F,{type:"new"},e.docId),a&&a.includes(e.docId)&&v.j.jsx(F,{type:"deprecated"},e.docId),s&&s.includes(e.docId)&&v.j.jsx(F,{type:"unreleased"},e.docId)]},`${e.docId}-${i}`)))})})),J={menu:"_menu_14x8a_2",menuWithAnnouncementBar:"_menuWithAnnouncementBar_14x8a_14"};function Z({path:e,sidebar:t,className:a,experimentalItems:s,newItems:o,deprecatedItems:r,unreleasedItems:c}){const d=function(){const{isActive:e}=(0,C.Mj)(),[t,a]=(0,n.useState)(e);return(0,p.Mq)((({scrollY:t})=>{e&&a(0===t)}),[e]),e&&t}();return v.j.jsx("nav",{"aria-label":(0,u.T)({id:"theme.docs.sidebar.navAriaLabel",message:"Docs sidebar",description:"The ARIA label for the sidebar navigation"}),className:(0,w.c)("menu thin-scrollbar",J.menu,d&&J.menuWithAnnouncementBar,a),children:v.j.jsx("ul",{className:(0,w.c)(i.G.docs.docSidebarMenu,"menu__list"),children:v.j.jsx(Y,{newItems:o,experimentalItems:s,deprecatedItems:r,unreleasedItems:c,items:t,activePath:e,level:1})})})}const Q={sidebar:"_sidebar_1ccyh_2",sidebarWithHideableNavbar:"_sidebarWithHideableNavbar_1ccyh_12",sidebarHidden:"_sidebarHidden_1ccyh_16",sidebarLogo:"_sidebarLogo_1ccyh_21","menu__link--sublist":"_menu__link--sublist_1ccyh_91"};const ee=n.memo((function({path:e,sidebar:t,onCollapse:a,heroImages:n,titleImages:s,isHidden:o,experimentalItems:i,deprecatedItems:r,unreleasedItems:c,newItems:d}){const{navbar:{hideOnScroll:l},docs:{sidebar:{hideable:m}}}=(0,A.p)();return v.j.jsxs("div",{className:(0,w.c)(Q.sidebar,l&&Q.sidebarWithHideableNavbar,o&&Q.sidebarHidden),children:[l&&v.j.jsx(k.f,{heroImages:n,titleImages:s,tabIndex:-1,className:Q.sidebarLogo}),v.j.jsx(Z,{newItems:d,experimentalItems:i,deprecatedItems:r,unreleasedItems:c,path:e,sidebar:t}),m&&v.j.jsx(y,{onClick:a})]})}));var te=a(75600),ae=a(22069);const ne=({newItems:e,experimentalItems:t,sidebar:a,path:n})=>{const s=(0,ae.M)();return v.j.jsx("ul",{className:(0,w.c)(i.G.docs.docSidebarMenu,"menu__list"),children:v.j.jsx(Y,{items:a,newItems:e,experimentalItems:t,activePath:n,onItemClick:e=>{("category"===e.type&&e.href||"link"===e.type)&&s.toggle()},level:1})})};const se=n.memo((function(e){return v.j.jsx(te.GX,{component:ne,props:e})}));function oe(e){const t=(0,j.l)(),a="desktop"===t||"ssr"===t,n="mobile"===t;return v.j.jsxs(v.j.Fragment,{children:[a&&v.j.jsx(ee,{heroImages:e.heroImages,titleImages:e.titleImages,...e}),n&&v.j.jsx(se,{...e})]})}function ie(e){const t={light:(0,I.A)("/img/title.svg"),dark:(0,I.A)("/img/title-dark.svg")},a={logo:(0,I.A)("/img/logo-hero.svg"),title:(0,I.A)("/img/title-hero.svg")};return n.createElement(oe,(0,_.A)({newItems:["animations/withClamp"],experimentalItems:["shared-element-transitions/overview"],unreleasedItems:[],heroImages:a,titleImages:t},e))}function re(e){return n.createElement("svg",(0,_.A)({width:"20",height:"20","aria-hidden":"true"},e),n.createElement("g",{fill:"#7a7a7a"},n.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),n.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))}const ce={expandButton:"expandButton_m80_",expandButtonIcon:"expandButtonIcon_BlDH"};function de(e){let{toggleSidebar:t}=e;return n.createElement("div",{className:ce.expandButton,title:(0,u.T)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,u.T)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:t,onClick:t},n.createElement(re,{className:ce.expandButtonIcon}))}const le={docSidebarContainer:"docSidebarContainer_b6E3",docSidebarContainerHidden:"docSidebarContainerHidden_b3ry",sidebarViewport:"sidebarViewport_Xe31"};function me(e){let{children:t}=e;const a=(0,l.t)();return n.createElement(n.Fragment,{key:a?.name??"noSidebar"},t)}function ue(e){let{sidebar:t,hiddenSidebarContainer:a,setHiddenSidebarContainer:o}=e;const{pathname:r}=(0,x.zy)(),[c,d]=(0,n.useState)(!1),l=(0,n.useCallback)((()=>{c&&d(!1),!c&&(0,f.O)()&&d(!0),o((e=>!e))}),[o,c]);return n.createElement("aside",{className:(0,s.default)(i.G.docs.docSidebarContainer,le.docSidebarContainer,a&&le.docSidebarContainerHidden),onTransitionEnd:e=>{e.currentTarget.classList.contains(le.docSidebarContainer)&&a&&d(!0)}},n.createElement(me,null,n.createElement("div",{className:(0,s.default)(le.sidebarViewport,c&&le.sidebarViewportHidden)},n.createElement(ie,{sidebar:t,path:r,onCollapse:l,isHidden:c}),c&&n.createElement(de,{toggleSidebar:l}))))}const pe={docMainContainer:"docMainContainer_gTbr",docMainContainerEnhanced:"docMainContainerEnhanced_Uz_u",docItemWrapperEnhanced:"docItemWrapperEnhanced_czyv"};function he(e){let{hiddenSidebarContainer:t,children:a}=e;const o=(0,l.t)();return n.createElement("main",{className:(0,s.default)(pe.docMainContainer,(t||!o)&&pe.docMainContainerEnhanced)},n.createElement("div",{className:(0,s.default)("container padding-top--md padding-bottom--lg",pe.docItemWrapper,t&&pe.docItemWrapperEnhanced)},a))}const be={docPage:"docPage__5DB",docsWrapper:"docsWrapper_BCFX","themedComponent--light":"themedComponent--light_NU7w"};function ge(e){let{children:t}=e;const a=(0,l.t)(),[s,o]=(0,n.useState)(!1);return n.createElement(m.A,{wrapperClassName:be.docsWrapper},n.createElement(g,null),n.createElement("div",{className:be.docPage},a&&n.createElement(ue,{sidebar:a.items,hiddenSidebarContainer:s,setHiddenSidebarContainer:o}),n.createElement(he,{hiddenSidebarContainer:s},t)))}var fe=a(88776),xe=a(41463);function _e(e){const{versionMetadata:t}=e;return n.createElement(n.Fragment,null,n.createElement(xe.A,{version:t.version,tag:(0,r.tU)(t.pluginId,t.version)}),n.createElement(o.be,null,t.noIndex&&n.createElement("meta",{name:"robots",content:"noindex, nofollow"})))}function Ie(e){const{versionMetadata:t}=e,a=(0,c.mz)(e);if(!a)return n.createElement(fe.default,null);const{docElement:r,sidebarName:m,sidebarItems:u}=a;return n.createElement(n.Fragment,null,n.createElement(_e,e),n.createElement(o.e3,{className:(0,s.default)(i.G.wrapper.docsPages,i.G.page.docsDocPage,e.versionMetadata.className)},n.createElement(d.n,{version:t},n.createElement(l.V,{name:m,items:u},n.createElement(ge,null,r)))))}},88776:(e,t,a)=>{a.r(t),a.d(t,{default:()=>p});var n=a(96540),s=a(21312),o=a(69024),i=a(41758);function r(){return n.createElement(n.Fragment,null,n.createElement(o.be,{title:(0,s.T)({id:"theme.NotFound.title",message:"Page Not Found"})}),n.createElement(i.A,null,n.createElement("main",{className:"container margin-vert--xl"},n.createElement("div",{className:"row"},n.createElement("div",{className:"col col--6 col--offset-3"},n.createElement("h1",{className:"hero__title"},n.createElement(s.A,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),n.createElement("p",null,n.createElement(s.A,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),n.createElement("p",null,n.createElement(s.A,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))))}var c=a(56347);const d={fundamentals:["installation","worklets","shared-values","animations","events","custom_events","layout_animations","architecture","migration","web-support","troubleshooting"],animations:["cancelAnimation","withDecay","withDelay","withRepeat","withSequence","withSpring","withTiming"],hooks:["useAnimatedGestureHandler","useAnimatedKeyboard","useAnimatedProps","useAnimatedReaction","useAnimatedRef","useAnimatedScrollHandler","useAnimatedSensor","useAnimatedStyle","useDerivedValue","useEvent","useFrameCallback","useHandler","useScrollViewOffset","useSharedValue"]},l=[{from:"/docs/1.x.x",to:"/docs/1.x"},{from:"/docs/2.0.x",to:"/docs/2.x"},{from:"/docs/2.1.x",to:"/docs/2.x"},{from:"/docs/2.2.x",to:"/docs/2.x"},{from:"/docs/2.3.x",to:"/docs/2.x"}];function m(e){const t=function(e){const t=l.find((t=>{let{from:a}=t;return e.match(a)}));return t?e.replace(t.from,t.to):null}(e);return t?function(e){const t=e.split("#")[1]??"",a=e.replace(/#.*/,""),[n,...s]=a.split("/").reverse(),[o]=Object.entries(d).find((e=>{let[t,a]=e;return a.includes(n)}))??[];if(!o)return e;let i=[];return i=s.includes(o)?[n,...s]:[n,o,...s],`${i.reverse().join("/")}${t?`#${t}`:""}`}(t):null}const u={"/docs/fundamentals/animations":"/docs/fundamentals/your-first-animation","/docs/fundamentals/web-support":"/docs/guides/web-support","/docs/api/animations/cancelAnimation":"/docs/core/cancelAnimation","/docs/api/animations/withDecay":"/docs/animations/withDecay","/docs/api/animations/withDelay":"/docs/animations/withDelay","/docs/api/animations/withRepeat":"/docs/animations/withRepeat","/docs/api/animations/withSequence":"/docs/animations/withSequence","/docs/api/animations/withSpring":"/docs/animations/withSpring","/docs/api/animations/withTiming":"/docs/animations/withTiming","/docs/api/hooks/useAnimatedKeyboard":"/docs/device/useAnimatedKeyboard","/docs/api/hooks/useAnimatedProps":"/docs/core/useAnimatedProps","/docs/api/hooks/useAnimatedReaction":"/docs/advanced/useAnimatedReaction","/docs/api/hooks/useAnimatedRef":"/docs/core/useAnimatedRef","/docs/api/hooks/useAnimatedScrollHandler":"/docs/scroll/useAnimatedScrollHandler","/docs/api/hooks/useAnimatedSensor":"/docs/device/useAnimatedSensor","/docs/api/hooks/useAnimatedStyle":"/docs/core/useAnimatedStyle","/docs/api/hooks/useDerivedValue":"/docs/core/useDerivedValue","/docs/api/hooks/useEvent":"/docs/advanced/useEvent","/docs/api/hooks/useFrameCallback":"/docs/advanced/useFrameCallback","/docs/api/hooks/useHandler":"/docs/advanced/useHandler","/docs/api/hooks/useScrollViewOffset":"/docs/scroll/useScrollViewOffset","/docs/api/hooks/useSharedValue":"/docs/core/useSharedValue","/docs/api/LayoutAnimations/customAnimations":"/docs/layout-animations/custom-animations","/docs/api/LayoutAnimations/entryAnimations":"/docs/layout-animations/entering-exiting-animations","/docs/api/LayoutAnimations/exitAnimations":"/docs/layout-animations/entering-exiting-animations","/docs/api/LayoutAnimations/keyframeAnimations":"/docs/layout-animations/keyframe-animations","/docs/api/LayoutAnimations/layoutTransitions":"/docs/layout-animations/layout-transitions","/docs/api/sharedElementTransitions":"/docs/shared-element-transitions/overview","/docs/api/nativeMethods/measure":"/docs/advanced/measure","/docs/api/nativeMethods/scrollTo":"/docs/scroll/scrollTo","/docs/api/nativeMethods/dispatchCommand":"/docs/advanced/dispatchCommand","/docs/api/miscellaneous/getRelativeCoords":"/docs/utilities/getRelativeCoords","/docs/api/miscellaneous/interpolate":"/docs/utilities/interpolate","/docs/api/miscellaneous/runOnJS":"/docs/threading/runOnJS","/docs/api/miscellaneous/runOnUI":"/docs/threading/runOnUI","/docs/api/miscellaneous/interpolateColors":"/docs/utilities/interpolateColors","/docs/guide/testing":"/docs/guides/testing","/docs/guide/debugging":"/docs/guides/debugging","/docs/guide/migration-from-1.x":"/docs/guides/migration-from-1.x","/docs/guide/migration-from-2.x":"/docs/guides/migration-from-2.x"};function p(e){const t=(0,c.zy)(),{pathname:a}=t,s=m(a);if(s)return n.createElement(c.rd,{to:s});const o=function(e){return u[e]||null}(a);return o?n.createElement(c.rd,{to:o}):n.createElement(r,e)}}}]);