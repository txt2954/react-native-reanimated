"use strict";(self.webpackChunkdocs_reanimated=self.webpackChunkdocs_reanimated||[]).push([[4882],{10571:(e,n,t)=>{t.d(n,{A:()=>h});var o=t(96540),a=t(9176),i=t(68444),r=t(62257),s=t(72188),d=t(45151);const l={code:"function AccordionJs1(){const{withTiming,height,isExpanded,duration}=this.__closure;return withTiming(height.value*Number(isExpanded.value),{duration:duration});}"},c={code:"function AccordionJs2(){const{derivedHeight}=this.__closure;return{height:derivedHeight.value};}"};function u(e){let{isExpanded:n,children:t,viewKey:i,style:r,duration:s=500}=e;const u=(0,d.useSharedValue)(0),m=(0,d.useDerivedValue)(function(){const e=()=>(0,d.withTiming)(u.value*Number(n.value),{duration:s});return e.__closure={withTiming:d.withTiming,height:u,isExpanded:n,duration:s},e.__workletHash=0x938906346dc,e.__initData=l,e}()),p=(0,d.useAnimatedStyle)(function(){const e=()=>({height:m.value});return e.__closure={derivedHeight:m},e.__workletHash=9515459959826,e.__initData=c,e}());return o.createElement(d.default.View,{key:`accordionItem_${i}`,style:[y.animatedView,p,r]},o.createElement(a.A,{onLayout:e=>{u.value=e.nativeEvent.layout.height},style:y.wrapper},t))}function m(){return o.createElement(a.A,{style:y.box})}function p(e){let{open:n}=e;return o.createElement(a.A,{style:y.parent},o.createElement(u,{isExpanded:n,viewKey:"Accordion"},o.createElement(m,null)))}function h(){const e=(0,d.useSharedValue)(!1);return o.createElement(i.A,{style:y.container},o.createElement(a.A,{style:y.buttonContainer},o.createElement(r.A,{onPress:()=>{e.value=!e.value},title:"Click me"})),o.createElement(a.A,{style:y.content},o.createElement(p,{open:e})))}const y=s.A.create({container:{flex:1,justifyContent:"center",paddingTop:24},buttonContainer:{flex:1,paddingBottom:"1rem",display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"},content:{flex:1,justifyContent:"center",alignItems:"center"},parent:{width:200},wrapper:{width:"100%",position:"absolute",display:"flex",alignItems:"center"},animatedView:{width:"100%",overflow:"hidden"},box:{height:120,width:120,color:"#f8f9ff",backgroundColor:"#b58df1",borderRadius:20,alignItems:"center",justifyContent:"center"}})},44851:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>w,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var o=t(58168),a=(t(96540),t(15680)),i=t(10571),r=t(1228);const s={slug:"accordion",title:"Accordion"},d=void 0,l={permalink:"/react-native-reanimated/examples/accordion",source:"@site/blog/accordion.md",title:"Accordion",description:'An accordion allows to show and hide a piece of content with a smooth animation. Commonly used in "FAQ" sections.',date:"2024-11-04T08:03:33.000Z",formattedDate:"November 4, 2024",tags:[],hasTruncateMarker:!1,authors:[],frontMatter:{slug:"accordion",title:"Accordion"},nextItem:{title:"Bottom Sheet",permalink:"/react-native-reanimated/examples/bottomsheet"}},c={authorsImageUrls:[]},u=[],m=e=>function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.yg)("div",n)},p=m("InteractiveExample"),h=m("CollapsibleCode"),y=m("ExampleVideo"),f={toc:u},g="wrapper";function w(e){let{components:n,...t}=e;return(0,a.yg)(g,(0,o.A)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("p",null,'An accordion allows to show and hide a piece of content with a smooth animation. Commonly used in "FAQ" sections.'),(0,a.yg)(p,{src:r.A,component:i.A,mdxType:"InteractiveExample"}),(0,a.yg)("p",null,"The following implementation of an accordion relies on ",(0,a.yg)("a",{parentName:"p",href:"/docs/fundamentals/glossary#shared-value"},"shared values"),". Leveraging shared values helps to prevent unnecessary re-renders. We define shared values using the useSharedValue hook."),(0,a.yg)(h,{src:r.A,showLines:[16,16],mdxType:"CollapsibleCode"}),(0,a.yg)(y,{sources:{android:"/react-native-reanimated/recordings/examples/accordion_android.mov",ios:"/react-native-reanimated/recordings/examples/accordion_ios.mov"},mdxType:"ExampleVideo"}),(0,a.yg)("p",null,"The ",(0,a.yg)("strong",{parentName:"p"},"AccordionItem")," component encapsulates each item in the accordion. A ",(0,a.yg)("inlineCode",{parentName:"p"},"height")," shared value manages the height of the item. The height dynamically adjusts based on the ",(0,a.yg)("inlineCode",{parentName:"p"},"isExpanded")," prop, resulting in smooth expansion and collapse animations. The ",(0,a.yg)("inlineCode",{parentName:"p"},"duration")," prop controls the duration of the animation."),(0,a.yg)("p",null,"Inside the ",(0,a.yg)("strong",{parentName:"p"},"AccordionItem"),", the children represent the content section. It can accommodate various types of content."),(0,a.yg)("samp",{id:"Accordion"},"Accordion"),(0,a.yg)(h,{src:r.A,showLines:[9,41],mdxType:"CollapsibleCode"}))}w.isMDXComponent=!0},1228:(e,n,t)=>{t.d(n,{A:()=>o});const o="import React from 'react';\nimport { StyleSheet, View, Button, SafeAreaView } from 'react-native';\nimport Animated, {\n  useAnimatedStyle,\n  useDerivedValue,\n  useSharedValue,\n  withTiming,\n} from 'react-native-reanimated';\n\nfunction AccordionItem({\n  isExpanded,\n  children,\n  viewKey,\n  style,\n  duration = 500,\n}) {\n  const height = useSharedValue(0);\n\n  const derivedHeight = useDerivedValue(() =>\n    withTiming(height.value * Number(isExpanded.value), {\n      duration,\n    })\n  );\n  const bodyStyle = useAnimatedStyle(() => ({\n    height: derivedHeight.value,\n  }));\n\n  return (\n    <Animated.View\n      key={`accordionItem_${viewKey}`}\n      style={[styles.animatedView, bodyStyle, style]}>\n      <View\n        onLayout={(e) => {\n          height.value = e.nativeEvent.layout.height;\n        }}\n        style={styles.wrapper}>\n        {children}\n      </View>\n    </Animated.View>\n  );\n}\n\nfunction Item() {\n  return <View style={styles.box} />;\n}\n\nfunction Parent({ open }) {\n  return (\n    <View style={styles.parent}>\n      <AccordionItem isExpanded={open} viewKey=\"Accordion\">\n        <Item />\n      </AccordionItem>\n    </View>\n  );\n}\n\nexport default function App() {\n  const open = useSharedValue(false);\n  const onPress = () => {\n    open.value = !open.value;\n  };\n\n  return (\n    <SafeAreaView style={styles.container}>\n      <View style={styles.buttonContainer}>\n        <Button onPress={onPress} title=\"Click me\" />\n      </View>\n\n      <View style={styles.content}>\n        <Parent open={open} />\n      </View>\n    </SafeAreaView>\n  );\n}\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    justifyContent: 'center',\n    paddingTop: 24,\n  },\n  buttonContainer: {\n    flex: 1,\n    paddingBottom: '1rem',\n    display: 'flex',\n    flexDirection: 'row',\n    justifyContent: 'center',\n    alignItems: 'center',\n  },\n  content: {\n    flex: 1,\n    justifyContent: 'center',\n    alignItems: 'center',\n  },\n  parent: {\n    width: 200,\n  },\n  wrapper: {\n    width: '100%',\n    position: 'absolute',\n    display: 'flex',\n    alignItems: 'center',\n  },\n  animatedView: {\n    width: '100%',\n    overflow: 'hidden',\n  },\n  box: {\n    height: 120,\n    width: 120,\n    color: '#f8f9ff',\n    backgroundColor: '#b58df1',\n    borderRadius: 20,\n    alignItems: 'center',\n    justifyContent: 'center',\n  },\n});\n"},62257:(e,n,t)=>{t.d(n,{A:()=>l});var o=t(96540),a=t(72188),i=t(46413),r=t(78506),s=o.forwardRef(((e,n)=>{var t=e.accessibilityLabel,a=e.color,s=e.disabled,l=e.onPress,c=e.testID,u=e.title;return o.createElement(i.A,{accessibilityLabel:t,accessibilityRole:"button",disabled:s,focusable:!s,onPress:l,ref:n,style:[d.button,a&&{backgroundColor:a},s&&d.buttonDisabled],testID:c},o.createElement(r.A,{style:[d.text,s&&d.textDisabled]},u))}));s.displayName="Button";var d=a.A.create({button:{backgroundColor:"#2196F3",borderRadius:2},text:{color:"#fff",fontWeight:"500",padding:8,textAlign:"center",textTransform:"uppercase"},buttonDisabled:{backgroundColor:"#dfdfdf"},textDisabled:{color:"#a1a1a1"}});const l=s},68444:(e,n,t)=>{t.d(n,{A:()=>p});var o=t(58168),a=t(98587),i=t(96540),r=t(72188),s=t(9176),d=t(7162),l=["style"],c=d.A&&window.CSS&&window.CSS.supports&&window.CSS.supports("top: constant(safe-area-inset-top)")?"constant":"env",u=i.forwardRef(((e,n)=>{var t=e.style,d=(0,a.A)(e,l);return i.createElement(s.A,(0,o.A)({},d,{ref:n,style:r.A.compose(m.root,t)}))}));u.displayName="SafeAreaView";var m=r.A.create({root:{paddingTop:c+"(safe-area-inset-top)",paddingRight:c+"(safe-area-inset-right)",paddingBottom:c+"(safe-area-inset-bottom)",paddingLeft:c+"(safe-area-inset-left)"}});const p=u}}]);