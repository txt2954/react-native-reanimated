"use strict";(self.webpackChunkdocs_reanimated=self.webpackChunkdocs_reanimated||[]).push([[9228],{15680:(e,n,t)=>{t.d(n,{xA:()=>d,yg:()=>m});var r=t(96540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=c(t),f=a,m=u["".concat(s,".").concat(f)]||u[f]||p[f]||o;return t?r.createElement(m,l(l({ref:n},d),{},{components:t})):r.createElement(m,l({ref:n},d))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=f;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},66190:(e,n,t)=>{t.d(n,{A:()=>m});var r=t(96540),a=t(45151),o=t(15782),l=t(9176),i=t(68444),s=t(72188),c=t(98348);const d=a.default.createAnimatedComponent(o.A),u={code:"function UseHandlerEventExampleTsx1(event){const{offsetY}=this.__closure;offsetY.value=event.contentOffset.y;}"},p={code:"function UseHandlerEventExampleTsx2(event){const{handlers}=this.__closure;const{onScroll:onScroll}=handlers;if(onScroll){onScroll(event);}}"},f={code:'function UseHandlerEventExampleTsx3(){const{offsetY}=this.__closure;return{text:"Scroll offset: "+Math.round(offsetY.value)+"px",defaultValue:"Scroll offset: "+offsetY.value+"px"};}'};const m=function(){const e=(0,c.A)(),n=(0,a.useSharedValue)(0),t={onScroll:function(){const e=function(e){n.value=e.contentOffset.y};return e.__closure={offsetY:n},e.__workletHash=0x91a68d1fb11,e.__initData=u,e}()},{context:o,doDependenciesDiffer:s}=(0,a.useHandler)(t),m=(0,a.useEvent)(function(){const e=function(e){const{onScroll:n}=t;n&&n(e)};return e.__closure={handlers:t},e.__workletHash=0x9938ee7cde1,e.__initData=p,e}(),["onScroll"],s),y=(0,a.useAnimatedProps)(function(){const e=function(){return{text:`Scroll offset: ${Math.round(n.value)}px`,defaultValue:`Scroll offset: ${n.value}px`}};return e.__closure={offsetY:n},e.__workletHash=2714082481794,e.__initData=f,e}()),h=["#fa7f7c","#b58df1","#ffe780","#82cab2","#87cce8"].map(((e,n)=>r.createElement(l.A,{key:n,style:[v.section,{backgroundColor:e}]})));return r.createElement(i.A,{style:v.container},r.createElement(d,{animatedProps:y,editable:!1,style:[v.header,e]}),r.createElement(a.default.ScrollView,{onScroll:m},r.createElement(l.A,{style:v.container},h)))},v=s.A.create({container:{paddingHorizontal:32,height:350},header:{paddingVertical:16,paddingHorizontal:32,textAlign:"center",fontFamily:"Aeonik",marginTop:"-1px"},section:{height:150,borderRadius:20,marginVertical:10,marginHorizontal:20}})},98348:(e,n,t)=>{t.d(n,{A:()=>o});var r=t(39235),a=t(72188);const o=()=>{const{colorScheme:e}=(0,r.Ut)();return"light"===e?l.darkText:l.lightText},l=a.A.create({lightText:{color:"var(--swm-off-white)"},darkText:{color:"var(--swm-navy-light-100)"}})},94624:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>g,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var r=t(58168),a=(t(96540),t(15680)),o=t(66190),l=t(88907);const i={sidebar_position:4},s="useEvent",c={unversionedId:"advanced/useEvent",id:"advanced/useEvent",title:"useEvent",description:"useEvent is a low-level hook. It returns event handler that will be called when native event occurs. You can use it to create custom event handler hooks, like useScrollViewOffset or useAnimatedScrollHandler.",source:"@site/docs/advanced/useEvent.mdx",sourceDirName:"advanced",slug:"/advanced/useEvent",permalink:"/react-native-reanimated/docs/advanced/useEvent",draft:!1,editUrl:"https://github.com/software-mansion/react-native-reanimated/edit/main/packages/docs-reanimated/docs/advanced/useEvent.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"useFrameCallback",permalink:"/react-native-reanimated/docs/advanced/useFrameCallback"},next:{title:"useHandler",permalink:"/react-native-reanimated/docs/advanced/useHandler"}},d={},u=[{value:"Reference",id:"reference",level:2},{value:"Arguments",id:"arguments",level:3},{value:"<code>handler</code>",id:"handler",level:4},{value:"<code>eventNames</code> <Optional/>",id:"eventnames-",level:4},{value:"<code>rebuild</code> <Optional/>",id:"rebuild-",level:4},{value:"Returns",id:"returns",level:3},{value:"Example",id:"example",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Platform compatibility",id:"platform-compatibility",level:2}],p=e=>function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.yg)("div",n)},f=p("Optional"),m=p("InteractiveExample"),v=p("PlatformCompatibility"),y={toc:u},h="wrapper";function g(e){let{components:n,...t}=e;return(0,a.yg)(h,(0,r.A)({},y,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"useevent"},"useEvent"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"useEvent")," is a low-level hook. It returns event handler that will be called when native event occurs. You can use it to create custom event handler hooks, like ",(0,a.yg)("a",{parentName:"p",href:"/docs/scroll/useScrollViewOffset/"},(0,a.yg)("inlineCode",{parentName:"a"},"useScrollViewOffset"))," or ",(0,a.yg)("a",{parentName:"p",href:"/docs/scroll/useAnimatedScrollHandler/"},(0,a.yg)("inlineCode",{parentName:"a"},"useAnimatedScrollHandler")),"."),(0,a.yg)("h2",{id:"reference"},"Reference"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},"import { useEvent } from 'react-native-reanimated';\n\nfunction useAnimatedPagerScrollHandler(handlers, dependencies) {\n  const { context, doDependenciesDiffer } = useHandler(handlers, dependencies);\n\n  // highlight-start\n  return useEvent(\n    (event) => {\n      'worklet';\n      const { onPageScroll } = handlers;\n\n      if (onPageScroll && event.eventName.endsWith('onPageScroll')) {\n        onPageScroll(event, context);\n      }\n    },\n    ['onPageScroll'],\n    doDependenciesDiffer\n  );\n}\n// highlight-end\n\nreturn <Animated.View onScroll={useAnimatedPagerScrollHandler} />;\n")),(0,a.yg)("details",null,(0,a.yg)("summary",null,"Type definitions"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-typescript"},"function useEvent<\n  Event extends object,\n  Context extends Record<string, unknown> = never\n>(\n  handler: EventHandler<Event, Context>,\n  eventNames?: string[],\n  rebuild?: boolean\n): EventHandlerProcessed<Event, Context>;\n\ntype EventHandler<\n  Event extends object,\n  Context extends Record<string, unknown> = never\n> = (event: ReanimatedEvent<Event>, context?: Context) => void;\n\ntype EventHandlerProcessed<\n  Event extends object,\n  Context extends Record<string, unknown> = never\n> = (event: Event, context?: Context) => void;\n"))),(0,a.yg)("h3",{id:"arguments"},"Arguments"),(0,a.yg)("h4",{id:"handler"},(0,a.yg)("inlineCode",{parentName:"h4"},"handler")),(0,a.yg)("p",null,"Function that receives event object with native payload, that can be passed to custom handler hook's worklets."),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"event")," - event object.\nThe payload can differ depending on the type of the event.")),(0,a.yg)("h4",{id:"eventnames-"},(0,a.yg)("inlineCode",{parentName:"h4"},"eventNames")," ",(0,a.yg)(f,{mdxType:"Optional"})),(0,a.yg)("p",null,"Array of event names that will be handled by handler."),(0,a.yg)("h4",{id:"rebuild-"},(0,a.yg)("inlineCode",{parentName:"h4"},"rebuild")," ",(0,a.yg)(f,{mdxType:"Optional"})),(0,a.yg)("p",null,"Value indicating whether handler should be rebuilt."),(0,a.yg)("h3",{id:"returns"},"Returns"),(0,a.yg)("p",null,"The hook returns event handler that will be invoked when native event is dispatched. That handler may be connected to multiple components and will be invoked for each one's specific events."),(0,a.yg)("h2",{id:"example"},"Example"),(0,a.yg)(m,{src:l.A,component:o.A,mdxType:"InteractiveExample"}),(0,a.yg)("p",null,"This example can be more easily implemented using ",(0,a.yg)("a",{parentName:"p",href:"/docs/scroll/useScrollViewOffset/"},(0,a.yg)("inlineCode",{parentName:"a"},"useScrollViewOffset")),"."),(0,a.yg)("h2",{id:"remarks"},"Remarks"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Keep in mind that not all scroll events are supported on the web, only ",(0,a.yg)("inlineCode",{parentName:"li"},"onScroll")," is available across browsers.")),(0,a.yg)("h2",{id:"platform-compatibility"},"Platform compatibility"),(0,a.yg)(v,{android:!0,ios:!0,web:!0,mdxType:"PlatformCompatibility"}))}g.isMDXComponent=!0},88907:(e,n,t)=>{t.d(n,{A:()=>r});const r="import React, { useEffect } from 'react';\nimport Animated, {\n  useHandler,\n  useEvent,\n  useSharedValue,\n  useAnimatedProps,\n  type ScrollEvent,\n} from 'react-native-reanimated';\nimport { TextInput, SafeAreaView, View, StyleSheet } from 'react-native';\nimport useThemedTextStyle from '@site/src/hooks/useThemedTextStyle';\n\nconst AnimatedTextInput = Animated.createAnimatedComponent(TextInput);\n\nfunction UseHandlerExample() {\n  const textColor = useThemedTextStyle();\n  const offsetY = useSharedValue(0);\n\n  const handlers = {\n    onScroll: (event: ScrollEvent) => {\n      'worklet';\n      offsetY.value = event.contentOffset.y;\n    },\n  };\n\n  const { context, doDependenciesDiffer } = useHandler(handlers);\n\n  const scrollHandler = useEvent(\n    (event: ScrollEvent) => {\n      'worklet';\n      const { onScroll } = handlers;\n      if (onScroll) {\n        onScroll(event);\n      }\n    },\n    ['onScroll'],\n    doDependenciesDiffer\n  );\n\n  const animatedProps = useAnimatedProps(() => {\n    return {\n      text: `Scroll offset: ${Math.round(offsetY.value)}px`,\n      defaultValue: `Scroll offset: ${offsetY.value}px`,\n    };\n  });\n\n  const BRAND_COLORS = ['#fa7f7c', '#b58df1', '#ffe780', '#82cab2', '#87cce8'];\n\n  const content = BRAND_COLORS.map((color, index) => (\n    <View\n      key={index}\n      style={[\n        styles.section,\n        {\n          backgroundColor: color,\n        },\n      ]}\n    />\n  ));\n\n  return (\n    <SafeAreaView style={styles.container}>\n      <AnimatedTextInput\n        animatedProps={animatedProps}\n        editable={false}\n        style={[styles.header, textColor]}\n      />\n      <Animated.ScrollView onScroll={scrollHandler}>\n        <View style={styles.container}>{content}</View>\n      </Animated.ScrollView>\n    </SafeAreaView>\n  );\n}\n\nexport default UseHandlerExample;\n\nconst styles = StyleSheet.create({\n  container: {\n    paddingHorizontal: 32,\n    height: 350,\n  },\n  header: {\n    paddingVertical: 16,\n    paddingHorizontal: 32,\n    textAlign: 'center',\n    fontFamily: 'Aeonik',\n    marginTop: '-1px',\n  },\n  section: {\n    height: 150,\n    borderRadius: 20,\n    marginVertical: 10,\n    marginHorizontal: 20,\n  },\n});\n"},68444:(e,n,t)=>{t.d(n,{A:()=>f});var r=t(58168),a=t(98587),o=t(96540),l=t(72188),i=t(9176),s=t(7162),c=["style"],d=s.A&&window.CSS&&window.CSS.supports&&window.CSS.supports("top: constant(safe-area-inset-top)")?"constant":"env",u=o.forwardRef(((e,n)=>{var t=e.style,s=(0,a.A)(e,c);return o.createElement(i.A,(0,r.A)({},s,{ref:n,style:l.A.compose(p.root,t)}))}));u.displayName="SafeAreaView";var p=l.A.create({root:{paddingTop:d+"(safe-area-inset-top)",paddingRight:d+"(safe-area-inset-right)",paddingBottom:d+"(safe-area-inset-bottom)",paddingLeft:d+"(safe-area-inset-left)"}});const f=u}}]);