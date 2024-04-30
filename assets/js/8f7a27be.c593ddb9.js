"use strict";(self.webpackChunkreact_native_reanimated_docs=self.webpackChunkreact_native_reanimated_docs||[]).push([[7303],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>h});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=a.createContext({}),c=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(t),p=i,h=m["".concat(l,".").concat(p)]||m[p]||d[p]||r;return t?a.createElement(h,o(o({ref:n},u),{},{components:t})):a.createElement(h,o({ref:n},u))}));function h(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=p;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[m]="string"==typeof e?e:i,o[1]=s;for(var c=2;c<r;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},3305:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>_,contentTitle:()=>F,default:()=>X,frontMatter:()=>D,metadata:()=>I,toc:()=>j});var a=t(87462),i=t(67294),r=t(3905),o=t(10758),s=t(35842),l=t(6328),c=t(49638),u=t(67177),m=t(72400),d=t(28033);const p={code:"function anonymous(){const{offset}=this.__closure;return{transform:[{translateX:offset.value}]};}"};function h(){const e=(0,o.y)(0),n=(0,s.l)(function(){const n=()=>({transform:[{translateX:e.value}]});return n.__closure={offset:e},n.__workletHash=0xf945d52c70d,n.__initData=p,n}());return i.createElement(u.Z,{style:f.container},i.createElement(c.n,{style:[f.box,n]}),i.createElement(m.Z,{title:"shake",onPress:()=>{e.value=(0,l.j)(40)}}))}const f=d.Z.create({container:{flex:1,flexDirection:"column",alignItems:"center"},box:{width:100,height:100,margin:50,borderRadius:15,backgroundColor:"#b58df1"}}),y="import Animated, {\n  useSharedValue,\n  withTiming,\n  useAnimatedStyle,\n} from 'react-native-reanimated';\nimport { View, Button, StyleSheet } from 'react-native';\nimport React from 'react';\n\nexport default function App() {\n  const offset = useSharedValue<number>(0);\n\n  // highlight-start\n  const style = useAnimatedStyle(() => ({\n    transform: [{ translateX: offset.value }],\n  }));\n  // highlight-end\n\n  const OFFSET = 40;\n\n  const handlePress = () => {\n    // highlight-next-line\n    offset.value = withTiming(OFFSET);\n  };\n\n  return (\n    <View style={styles.container}>\n      {/* highlight-next-line */}\n      <Animated.View style={[styles.box, style]} />\n      <Button title=\"shake\" onPress={handlePress} />\n    </View>\n  );\n}\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    flexDirection: 'column',\n    alignItems: 'center',\n  },\n  box: {\n    width: 100,\n    height: 100,\n    margin: 50,\n    borderRadius: 15,\n    backgroundColor: '#b58df1',\n  },\n});\n";var g=t(347);const b={code:"function anonymous(){const{offset}=this.__closure;return{transform:[{translateX:offset.value}]};}"};function w(){const e=(0,o.y)(0),n=(0,s.l)(function(){const n=()=>({transform:[{translateX:e.value}]});return n.__closure={offset:e},n.__workletHash=0xf945d52c70d,n.__initData=b,n}());return i.createElement(u.Z,{style:k.container},i.createElement(c.n,{style:[k.box,n]}),i.createElement(m.Z,{title:"shake",onPress:()=>{e.value=(0,g.D)((0,l.j)(40),5,!0)}}))}const k=d.Z.create({container:{flex:1,flexDirection:"column",alignItems:"center"},box:{width:100,height:100,margin:50,borderRadius:15,backgroundColor:"#b58df1"}}),v="import Animated, {\n  useSharedValue,\n  withTiming,\n  useAnimatedStyle,\n  withRepeat,\n} from 'react-native-reanimated';\nimport { View, Button, StyleSheet } from 'react-native';\nimport React from 'react';\n\nexport default function App() {\n  const offset = useSharedValue<number>(0);\n\n  const style = useAnimatedStyle(() => ({\n    transform: [{ translateX: offset.value }],\n  }));\n\n  const OFFSET = 40;\n\n  const handlePress = () => {\n    // highlight-next-line\n    offset.value = withRepeat(withTiming(OFFSET), 5, true);\n  };\n\n  return (\n    <View style={styles.container}>\n      <Animated.View style={[styles.box, style]} />\n      <Button title=\"shake\" onPress={handlePress} />\n    </View>\n  );\n}\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    flexDirection: 'column',\n    alignItems: 'center',\n  },\n  box: {\n    width: 100,\n    height: 100,\n    margin: 50,\n    borderRadius: 15,\n    backgroundColor: '#b58df1',\n  },\n});\n";var x=t(12448);const S={code:"function anonymous(){const{offset}=this.__closure;return{transform:[{translateX:offset.value}]};}"};function T(){const e=(0,o.y)(0),n=(0,s.l)(function(){const n=()=>({transform:[{translateX:e.value}]});return n.__closure={offset:e},n.__workletHash=0xf945d52c70d,n.__initData=S,n}());return i.createElement(u.Z,{style:C.container},i.createElement(c.n,{style:[C.box,n]}),i.createElement(m.Z,{title:"shake",onPress:()=>{e.value=(0,x.u)((0,l.j)(-40,{duration:125}),(0,g.D)((0,l.j)(40,{duration:250}),5,!0),(0,l.j)(0,{duration:125}))}}))}const C=d.Z.create({container:{flex:1,flexDirection:"column",alignItems:"center"},box:{width:100,height:100,margin:50,borderRadius:15,backgroundColor:"#b58df1"}}),E="import Animated, {\n  useSharedValue,\n  withTiming,\n  useAnimatedStyle,\n  withRepeat,\n  withSequence,\n} from 'react-native-reanimated';\nimport { View, Button, StyleSheet } from 'react-native';\nimport React from 'react';\n\nexport default function App() {\n  const offset = useSharedValue<number>(0);\n\n  const style = useAnimatedStyle(() => ({\n    transform: [{ translateX: offset.value }],\n  }));\n\n  const OFFSET = 40;\n  const TIME = 250;\n\n  const handlePress = () => {\n    // highlight-next-line\n    offset.value = withSequence(\n      // start from -OFFSET\n      withTiming(-OFFSET, { duration: TIME / 2 }),\n      // shake between -OFFSET and OFFSET 5 times\n      withRepeat(withTiming(OFFSET, { duration: TIME }), 5, true),\n      // go back to 0 at the end\n      withTiming(0, { duration: TIME / 2 })\n      // highlight-next-line\n    );\n  };\n\n  return (\n    <View style={styles.container}>\n      <Animated.View style={[styles.box, style]} />\n      <Button title=\"shake\" onPress={handlePress} />\n    </View>\n  );\n}\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    flexDirection: 'column',\n    alignItems: 'center',\n  },\n  box: {\n    width: 100,\n    height: 100,\n    margin: 50,\n    borderRadius: 15,\n    backgroundColor: '#b58df1',\n  },\n});\n",P="import Animated, {\n  useSharedValue,\n  withTiming,\n  Easing,\n  useAnimatedStyle,\n  withRepeat,\n  withSequence,\n  withDelay,\n} from 'react-native-reanimated';\nimport { View, Button, StyleSheet } from 'react-native';\nimport React from 'react';\n\nexport default function App() {\n  const offset = useSharedValue<number>(0);\n\n  const style = useAnimatedStyle(() => ({\n    transform: [{ translateX: offset.value }],\n  }));\n\n  const OFFSET = 40;\n  const TIME = 250;\n  const DELAY = 400;\n\n  const handlePress = () => {\n    // highlight-next-line\n    offset.value = withDelay(\n      // highlight-next-line\n      DELAY,\n      withSequence(\n        // start from -OFFSET\n        withTiming(-OFFSET, { duration: TIME / 2 }),\n        // shake between -OFFSET and OFFSET 5 times\n        withRepeat(withTiming(OFFSET, { duration: TIME }), 5, true),\n        // go back to 0 at the end\n        withTiming(0, { duration: TIME / 2 })\n      )\n      // highlight-next-line\n    );\n  };\n\n  return (\n    <View style={styles.container}>\n      <Animated.View style={[styles.box, style]} />\n      <Button title=\"shake\" onPress={handlePress} />\n    </View>\n  );\n}\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    flexDirection: 'column',\n    alignItems: 'center',\n  },\n  box: {\n    width: 100,\n    height: 100,\n    margin: 50,\n    borderRadius: 15,\n    backgroundColor: '#b58df1',\n  },\n});\n";var N=t(65641);const O={code:"function anonymous(){const{offset}=this.__closure;return{transform:[{translateX:offset.value}]};}"};function R(){const e=(0,o.y)(0),n=(0,s.l)(function(){const n=()=>({transform:[{translateX:e.value}]});return n.__closure={offset:e},n.__workletHash=0xf945d52c70d,n.__initData=O,n}());return i.createElement(u.Z,{style:A.container},i.createElement(c.n,{style:[A.box,n]}),i.createElement(m.Z,{title:"shake",onPress:()=>{e.value=(0,N.p)(400,(0,x.u)((0,l.j)(-40,{duration:125}),(0,g.D)((0,l.j)(40,{duration:250}),5,!0),(0,l.j)(0,{duration:125})))}}))}const A=d.Z.create({container:{flex:1,flexDirection:"column",alignItems:"center"},box:{width:100,height:100,margin:50,borderRadius:15,backgroundColor:"#b58df1"}}),D={sidebar_position:5},F="Applying modifiers",I={unversionedId:"fundamentals/applying-modifiers",id:"fundamentals/applying-modifiers",title:"Applying modifiers",description:"Another way of customizing animations in Reanimated is by using animation modifiers. Reanimated comes with three built-in modifiers: withRepeat, withSequence, and withDelay.",source:"@site/docs/fundamentals/applying-modifiers.mdx",sourceDirName:"fundamentals",slug:"/fundamentals/applying-modifiers",permalink:"/react-native-reanimated/docs/fundamentals/applying-modifiers",draft:!1,editUrl:"https://github.com/software-mansion/react-native-reanimated/tree/main/docs/docs/fundamentals/applying-modifiers.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Customizing animations",permalink:"/react-native-reanimated/docs/fundamentals/customizing-animation"},next:{title:"Handling gestures",permalink:"/react-native-reanimated/docs/fundamentals/handling-gestures"}},_={},j=[{value:"Starting point",id:"starting-point",level:2},{value:"Repeating an animation",id:"repeating-an-animation",level:2},{value:"Running animations in a sequence",id:"running-animations-in-a-sequence",level:2},{value:"Starting the animation with delay",id:"starting-the-animation-with-delay",level:2},{value:"Summary",id:"summary",level:2},{value:"What&#39;s next?",id:"whats-next",level:2}],M=e=>function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",n)},V=M("CollapsibleCode"),Z=M("InteractiveExample"),q={toc:j},L="wrapper";function X(e){let{components:n,...t}=e;return(0,r.kt)(L,(0,a.Z)({},q,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"applying-modifiers"},"Applying modifiers"),(0,r.kt)("p",null,"Another way of ",(0,r.kt)("a",{parentName:"p",href:"/docs/fundamentals/customizing-animation"},"customizing animations")," in Reanimated is by using animation modifiers. Reanimated comes with three built-in modifiers: ",(0,r.kt)("a",{parentName:"p",href:"/docs/animations/withRepeat"},(0,r.kt)("inlineCode",{parentName:"a"},"withRepeat")),", ",(0,r.kt)("a",{parentName:"p",href:"/docs/animations/withSequence"},(0,r.kt)("inlineCode",{parentName:"a"},"withSequence")),", and ",(0,r.kt)("a",{parentName:"p",href:"/docs/animations/withDelay"},(0,r.kt)("inlineCode",{parentName:"a"},"withDelay")),"."),(0,r.kt)("p",null,"Let's build a simple shake animation which uses all the modifiers and learn them along the way. Let's go!"),(0,r.kt)("h2",{id:"starting-point"},"Starting point"),(0,r.kt)("p",null,"In this example, we're going to make an animated box which will shake on a button press after a slight delay."),(0,r.kt)("p",null,"Let's start by having an ",(0,r.kt)("inlineCode",{parentName:"p"},"Animated.View")," and a ",(0,r.kt)("inlineCode",{parentName:"p"},"Button")," which moves the view to the right on press. To achieve this we can use ",(0,r.kt)("inlineCode",{parentName:"p"},"useAnimatedStyle")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"withTiming")," function to smoothly animate our box ",(0,r.kt)("inlineCode",{parentName:"p"},"40px")," to the right."),(0,r.kt)("p",null,"If this sounds new to you, no worries! Start by going through the basics in ",(0,r.kt)("a",{parentName:"p",href:"/docs/fundamentals/your-first-animation"},"Your First Animation")," and come back here when you're ready."),(0,r.kt)(V,{showLines:[8,32],src:y,mdxType:"CollapsibleCode"}),(0,r.kt)(Z,{src:y,component:(0,r.kt)(h,{mdxType:"Timing"}),mdxType:"InteractiveExample"}),(0,r.kt)("h2",{id:"repeating-an-animation"},"Repeating an animation"),(0,r.kt)("p",null,"To implement our desired shake animation we can use ",(0,r.kt)("a",{parentName:"p",href:"/docs/animations/withRepeat"},(0,r.kt)("inlineCode",{parentName:"a"},"withRepeat"))," modifier. This modifier lets you repeat a provided animation."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import { withRepeat } from 'react-native-reanimated';\n\nfunction App() {\n  sv.value = withRepeat(withTiming(50), 5);\n  // ...\n}\n")),(0,r.kt)("p",null,"Pass a number to the second parameter of the function to make it repeat a given number of times. You can make it repeat forever by passing a non-positive value (eg. ",(0,r.kt)("inlineCode",{parentName:"p"},"0")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"-1"),"). You can make the animation go back and forth by passing ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," to the third (i.e. ",(0,r.kt)("inlineCode",{parentName:"p"},"reverse"),") argument."),(0,r.kt)("p",null,"To learn more about it you can check out the full ",(0,r.kt)("a",{parentName:"p",href:"/docs/animations/withRepeat"},(0,r.kt)("inlineCode",{parentName:"a"},"withRepeat")," API reference"),"."),(0,r.kt)("p",null,"Let's use this function in our example:"),(0,r.kt)(V,{showLines:[9,29],src:v,mdxType:"CollapsibleCode"}),(0,r.kt)("p",null,"When we run this code we can see that the box jiggles left to right between the set offset and a starting position. After the animation finishes the box doesn't come back to its initial place. It's not really how we imagined a shake animation but we'll get there in a second!"),(0,r.kt)(Z,{src:v,component:(0,r.kt)(w,{mdxType:"Repeat"}),mdxType:"InteractiveExample"}),(0,r.kt)("h2",{id:"running-animations-in-a-sequence"},"Running animations in a sequence"),(0,r.kt)("p",null,"One way to improve our animation is to start it with a left offset and reset it back to starting position after the animation ends. That's a perfect use case for the ",(0,r.kt)("inlineCode",{parentName:"p"},"withSequence")," modifier."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import { withSequence } from 'react-native-reanimated';\n\nfunction App() {\n  sv.value = withSequence(withTiming(50), withTiming(0));\n  // ...\n}\n")),(0,r.kt)("p",null,"This modifier lets you chain animations together. The next animation starts when the previous one ends. You use it by passing animations as arguments in the order you want them to run."),(0,r.kt)("p",null,"To learn more about it you can check out the full ",(0,r.kt)("a",{parentName:"p",href:"/docs/animations/withSequence"},(0,r.kt)("inlineCode",{parentName:"a"},"withSequence")," API reference"),"."),(0,r.kt)("p",null,"Coming back to our example - we can utilize ",(0,r.kt)("inlineCode",{parentName:"p"},"withSequence")," to improve our animation. First, we'll sway the box to the left which we'll make it to take half of the duration of one swing. Then, we'll shake the box 5 times and finish up the animation by bringing it to starting position also with half of the animation duration."),(0,r.kt)(V,{showLines:[18,32],src:E,mdxType:"CollapsibleCode"}),(0,r.kt)(Z,{src:E,component:(0,r.kt)(T,{mdxType:"Sequence"}),mdxType:"InteractiveExample"}),(0,r.kt)("h2",{id:"starting-the-animation-with-delay"},"Starting the animation with delay"),(0,r.kt)("p",null,"As a cherry on top, we'll add a little bit of suspense by adding a slight delay before the animation begins. For this exact purpose, Reanimated comes with a ",(0,r.kt)("inlineCode",{parentName:"p"},"withDelay")," modifier."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import { withDelay } from 'react-native-reanimated';\n\nfunction App() {\n  sv.value = withDelay(500, withTiming(0));\n  // ...\n}\n")),(0,r.kt)("p",null,"This function as a first parameter takes the duration in milliseconds before the animation starts. The second parameter defines the animation to delay."),(0,r.kt)("p",null,"To learn more about it you can check out the full ",(0,r.kt)("a",{parentName:"p",href:"/docs/animations/withDelay"},(0,r.kt)("inlineCode",{parentName:"a"},"withDelay")," API reference"),"."),(0,r.kt)(V,{showLines:[19,38],src:P,mdxType:"CollapsibleCode"}),(0,r.kt)(Z,{src:P,component:(0,r.kt)(R,{mdxType:"Delay"}),mdxType:"InteractiveExample"}),(0,r.kt)("h2",{id:"summary"},"Summary"),(0,r.kt)("p",null,"In this section, we learned how to create complex animations by using animation modifiers. To sum up:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Reanimated comes with three built-in animation modifiers - ",(0,r.kt)("inlineCode",{parentName:"li"},"withRepeat"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"withSequence"),", and ",(0,r.kt)("inlineCode",{parentName:"li"},"withDelay"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"withRepeat")," lets you repeat an animation a given number of times or run it indefinitely."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"withSequence")," lets you run animations in a sequence."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"withDelay")," lets you start an animation with a delay.")),(0,r.kt)("h2",{id:"whats-next"},"What's next?"),(0,r.kt)("p",null,"In the ",(0,r.kt)("a",{parentName:"p",href:"/docs/fundamentals/handling-gestures"},"next section"),", we're going to learn about handling ",(0,r.kt)("inlineCode",{parentName:"p"},"Tap")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Pan")," gestures. Also, we'll get to know the ",(0,r.kt)("inlineCode",{parentName:"p"},"withDecay")," animation function."))}X.isMDXComponent=!0},65641:(e,n,t)=>{t.d(n,{p:()=>i});var a=t(76933);const i=function(e,n,t){return(0,a.oF)(n,(()=>{const i="function"==typeof n?n():n;return{isHigherOrder:!0,onFrame:function(n,t){const{startTime:a,started:r,previousAnimation:o}=n,s=n.current;if(t-a>e||n.reduceMotion){r||(i.onStart(i,s,t,o),n.previousAnimation=null,n.started=!0);const e=i.onFrame(i,t);return n.current=i.current,e}if(o){const e=o.finished||o.onFrame(o,t);n.current=o.current,e&&(n.previousAnimation=null)}return!1},onStart:function(e,n,t,a){e.startTime=t,e.started=!1,e.current=n,e.previousAnimation=a===e?a.previousAnimation:a,void 0===i.reduceMotion&&(i.reduceMotion=e.reduceMotion)},current:i.current,callback:e=>{i.callback&&i.callback(e)},previousAnimation:null,startTime:0,started:!1,reduceMotion:(0,a.uh)(t)}}))}},12448:(e,n,t)=>{t.d(n,{u:()=>i});var a=t(76933);function i(e){for(var n=arguments.length,t=new Array(n>1?n-1:0),i=1;i<n;i++)t[i-1]=arguments[i];let r;return e&&("string"==typeof e?r=e:t.unshift(e)),0===t.length?(console.warn("[Reanimated] No animation was provided for the sequence"),(0,a.oF)(0,(()=>({onStart:(e,n)=>e.current=n,onFrame:()=>!0,current:0,animationIndex:0,reduceMotion:(0,a.uh)(r)})))):(0,a.oF)(t[0],(()=>{const e=t.map((e=>{const n="function"==typeof e?e():e;return n.finished=!1,n}));function n(n){for(;n<e.length-1&&e[n].reduceMotion;)n++;return n}return{isHigherOrder:!0,onFrame:function(t,a){const i=e[t.animationIndex],r=i.onFrame(i,a);if(t.current=i.current,r){if(i.callback&&i.callback(!0),i.finished=!0,t.animationIndex=n(t.animationIndex+1),t.animationIndex<e.length){const n=e[t.animationIndex];return n.onStart(n,i.current,a,i),!1}return!0}return!1},onStart:function(t,a,i,r){e.forEach((e=>{void 0===e.reduceMotion&&(e.reduceMotion=t.reduceMotion)})),t.animationIndex=n(0),void 0===r&&(r=e[e.length-1]);const o=e[t.animationIndex];o.onStart(o,a,i,r)},animationIndex:0,current:e[0].current,callback:n=>{n||e.forEach((e=>{"function"!=typeof e.callback||e.finished||e.callback(n)}))},reduceMotion:(0,a.uh)(r)}}))}},72400:(e,n,t)=>{t.d(n,{Z:()=>c});var a=t(67294),i=t(28033),r=t(88548),o=t(24404),s=a.forwardRef(((e,n)=>{var t=e.accessibilityLabel,i=e.color,s=e.disabled,c=e.onPress,u=e.testID,m=e.title;return a.createElement(r.Z,{accessibilityLabel:t,accessibilityRole:"button",disabled:s,focusable:!s,onPress:c,ref:n,style:[l.button,i&&{backgroundColor:i},s&&l.buttonDisabled],testID:u},a.createElement(o.Z,{style:[l.text,s&&l.textDisabled]},m))}));s.displayName="Button";var l=i.Z.create({button:{backgroundColor:"#2196F3",borderRadius:2},text:{color:"#fff",fontWeight:"500",padding:8,textAlign:"center",textTransform:"uppercase"},buttonDisabled:{backgroundColor:"#dfdfdf"},textDisabled:{color:"#a1a1a1"}});const c=s},88548:(e,n,t)=>{t.d(n,{Z:()=>h});var a=t(87462),i=t(63366),r=t(67294),o=t(16528),s=t(94119),l=t(28033),c=t(67177),u=["activeOpacity","delayPressIn","delayPressOut","delayLongPress","disabled","focusable","onLongPress","onPress","onPressIn","onPressOut","rejectResponderTermination","style"];function m(e,n){var t=e.activeOpacity,l=e.delayPressIn,m=e.delayPressOut,p=e.delayLongPress,h=e.disabled,f=e.focusable,y=e.onLongPress,g=e.onPress,b=e.onPressIn,w=e.onPressOut,k=e.rejectResponderTermination,v=e.style,x=(0,i.Z)(e,u),S=(0,r.useRef)(null),T=(0,o.Z)(n,S),C=(0,r.useState)("0s"),E=C[0],P=C[1],N=(0,r.useState)(null),O=N[0],R=N[1],A=(0,r.useCallback)(((e,n)=>{R(e),P(n?n/1e3+"s":"0s")}),[R,P]),D=(0,r.useCallback)((e=>{A(null!=t?t:.2,e)}),[t,A]),F=(0,r.useCallback)((e=>{A(null,e)}),[A]),I=(0,r.useMemo)((()=>({cancelable:!k,disabled:h,delayLongPress:p,delayPressStart:l,delayPressEnd:m,onLongPress:y,onPress:g,onPressStart(e){var n=null!=e.dispatchConfig?"onResponderGrant"===e.dispatchConfig.registrationName:"keydown"===e.type;D(n?0:150),null!=b&&b(e)},onPressEnd(e){F(250),null!=w&&w(e)}})),[p,l,m,h,y,g,b,w,k,D,F]),_=(0,s.Z)(S,I);return r.createElement(c.Z,(0,a.Z)({},x,_,{accessibilityDisabled:h,focusable:!h&&!1!==f,pointerEvents:h?"none":void 0,ref:T,style:[d.root,!h&&d.actionable,v,null!=O&&{opacity:O},{transitionDuration:E}]}))}var d=l.Z.create({root:{transitionProperty:"opacity",transitionDuration:"0.15s",userSelect:"none"},actionable:{cursor:"pointer",touchAction:"manipulation"}}),p=r.memo(r.forwardRef(m));p.displayName="TouchableOpacity";const h=p}}]);