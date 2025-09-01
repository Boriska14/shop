"use strict";(self["webpackChunktutor"]=self["webpackChunktutor"]||[]).push([["694"],{42617:function(e,t,r){r.d(t,{LE:()=>s,Mv:()=>i,qg:()=>l});/* ESM import */var n=r(87363);/* ESM import */var o=/*#__PURE__*/r.n(n);const a={display:"none"};function i(e){let{id:t,value:r}=e;return o().createElement("div",{id:t,style:a},r)}function s(e){let{id:t,announcement:r,ariaLiveType:n="assertive"}=e;// Hide element visually but keep it readable by screen readers
const a={position:"fixed",top:0,left:0,width:1,height:1,margin:-1,border:0,padding:0,overflow:"hidden",clip:"rect(0 0 0 0)",clipPath:"inset(100%)",whiteSpace:"nowrap"};return o().createElement("div",{id:t,style:a,role:"status","aria-live":n,"aria-atomic":true},r)}function l(){const[e,t]=(0,n.useState)("");const r=(0,n.useCallback)(e=>{if(e!=null){t(e)}},[]);return{announce:r,announcement:e}}//# sourceMappingURL=accessibility.esm.js.map
},94697:function(e,t,r){r.d(t,{Cj:()=>th,Dy:()=>b,LB:()=>td,Lg:()=>eb,O1:()=>tp,VK:()=>R,VT:()=>m,Zj:()=>tb,_8:()=>C,ey:()=>S,g4:()=>eh,hI:()=>F,pE:()=>E,uN:()=>eA,we:()=>eZ,y9:()=>tB});/* ESM import */var n=r(87363);/* ESM import */var o=/*#__PURE__*/r.n(n);/* ESM import */var a=r(61533);/* ESM import */var i=/*#__PURE__*/r.n(a);/* ESM import */var s=r(24285);/* ESM import */var l=r(42617);const c=/*#__PURE__*/(0,n.createContext)(null);function d(e){const t=(0,n.useContext)(c);(0,n.useEffect)(()=>{if(!t){throw new Error("useDndMonitor must be used within a children of <DndContext>")}const r=t(e);return r},[e,t])}function u(){const[e]=(0,n.useState)(()=>new Set);const t=(0,n.useCallback)(t=>{e.add(t);return()=>e.delete(t)},[e]);const r=(0,n.useCallback)(t=>{let{type:r,event:n}=t;e.forEach(e=>{var t;return(t=e[r])==null?void 0:t.call(e,n)})},[e]);return[r,t]}const v={draggable:"\n    To pick up a draggable item, press the space bar.\n    While dragging, use the arrow keys to move the item.\n    Press space again to drop the item in its new position, or press escape to cancel.\n  "};const f={onDragStart(e){let{active:t}=e;return"Picked up draggable item "+t.id+"."},onDragOver(e){let{active:t,over:r}=e;if(r){return"Draggable item "+t.id+" was moved over droppable area "+r.id+"."}return"Draggable item "+t.id+" is no longer over a droppable area."},onDragEnd(e){let{active:t,over:r}=e;if(r){return"Draggable item "+t.id+" was dropped over droppable area "+r.id}return"Draggable item "+t.id+" was dropped."},onDragCancel(e){let{active:t}=e;return"Dragging was cancelled. Draggable item "+t.id+" was dropped."}};function p(e){let{announcements:t=f,container:r,hiddenTextDescribedById:i,screenReaderInstructions:c=v}=e;const{announce:u,announcement:p}=(0,l/* .useAnnouncement */.qg)();const h=(0,s/* .useUniqueId */.Ld)("DndLiveRegion");const[g,m]=(0,n.useState)(false);(0,n.useEffect)(()=>{m(true)},[]);d((0,n.useMemo)(()=>({onDragStart(e){let{active:r}=e;u(t.onDragStart({active:r}))},onDragMove(e){let{active:r,over:n}=e;if(t.onDragMove){u(t.onDragMove({active:r,over:n}))}},onDragOver(e){let{active:r,over:n}=e;u(t.onDragOver({active:r,over:n}))},onDragEnd(e){let{active:r,over:n}=e;u(t.onDragEnd({active:r,over:n}))},onDragCancel(e){let{active:r,over:n}=e;u(t.onDragCancel({active:r,over:n}))}}),[u,t]));if(!g){return null}const b=o().createElement(o().Fragment,null,o().createElement(l/* .HiddenText */.Mv,{id:i,value:c.draggable}),o().createElement(l/* .LiveRegion */.LE,{id:h,announcement:p}));return r?(0,a.createPortal)(b,r):b}var h;(function(e){e["DragStart"]="dragStart";e["DragMove"]="dragMove";e["DragEnd"]="dragEnd";e["DragCancel"]="dragCancel";e["DragOver"]="dragOver";e["RegisterDroppable"]="registerDroppable";e["SetDroppableDisabled"]="setDroppableDisabled";e["UnregisterDroppable"]="unregisterDroppable"})(h||(h={}));function g(){}function m(e,t){return(0,n.useMemo)(()=>({sensor:e,options:t!=null?t:{}}),[e,t])}function b(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++){t[r]=arguments[r]}return(0,n.useMemo)(()=>[...t].filter(e=>e!=null),[...t])}const _=/*#__PURE__*/Object.freeze({x:0,y:0});/**
 * Returns the distance between two points
 */function y(e,t){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))}function w(e,t){const r=(0,s/* .getEventCoordinates */.DC)(e);if(!r){return"0 0"}const n={x:(r.x-t.left)/t.width*100,y:(r.y-t.top)/t.height*100};return n.x+"% "+n.y+"%"}/**
 * Sort collisions from smallest to greatest value
 */function x(e,t){let{data:{value:r}}=e;let{data:{value:n}}=t;return r-n}/**
 * Sort collisions from greatest to smallest value
 */function Z(e,t){let{data:{value:r}}=e;let{data:{value:n}}=t;return n-r}/**
 * Returns the coordinates of the corners of a given rectangle:
 * [TopLeft {x, y}, TopRight {x, y}, BottomLeft {x, y}, BottomRight {x, y}]
 */function k(e){let{left:t,top:r,height:n,width:o}=e;return[{x:t,y:r},{x:t+o,y:r},{x:t,y:r+n},{x:t+o,y:r+n}]}function C(e,t){if(!e||e.length===0){return null}const[r]=e;return t?r[t]:r}/**
 * Returns the coordinates of the center of a given ClientRect
 */function D(e,t,r){if(t===void 0){t=e.left}if(r===void 0){r=e.top}return{x:t+e.width*.5,y:r+e.height*.5}}/**
 * Returns the closest rectangles from an array of rectangles to the center of a given
 * rectangle.
 */const E=e=>{let{collisionRect:t,droppableRects:r,droppableContainers:n}=e;const o=D(t,t.left,t.top);const a=[];for(const e of n){const{id:t}=e;const n=r.get(t);if(n){const r=y(D(n),o);a.push({id:t,data:{droppableContainer:e,value:r}})}}return a.sort(x)};/**
 * Returns the closest rectangles from an array of rectangles to the corners of
 * another rectangle.
 */const S=e=>{let{collisionRect:t,droppableRects:r,droppableContainers:n}=e;const o=k(t);const a=[];for(const e of n){const{id:t}=e;const n=r.get(t);if(n){const r=k(n);const i=o.reduce((e,t,n)=>{return e+y(r[n],t)},0);const s=Number((i/4).toFixed(4));a.push({id:t,data:{droppableContainer:e,value:s}})}}return a.sort(x)};/**
 * Returns the intersecting rectangle area between two rectangles
 */function W(e,t){const r=Math.max(t.top,e.top);const n=Math.max(t.left,e.left);const o=Math.min(t.left+t.width,e.left+e.width);const a=Math.min(t.top+t.height,e.top+e.height);const i=o-n;const s=a-r;if(n<o&&r<a){const r=t.width*t.height;const n=e.width*e.height;const o=i*s;const a=o/(r+n-o);return Number(a.toFixed(4))}// Rectangles do not overlap, or overlap has an area of zero (edge/corner overlap)
return 0}/**
 * Returns the rectangles that has the greatest intersection area with a given
 * rectangle in an array of rectangles.
 */const M=e=>{let{collisionRect:t,droppableRects:r,droppableContainers:n}=e;const o=[];for(const e of n){const{id:n}=e;const a=r.get(n);if(a){const r=W(a,t);if(r>0){o.push({id:n,data:{droppableContainer:e,value:r}})}}}return o.sort(Z)};/**
 * Check if a given point is contained within a bounding rectangle
 */function T(e,t){const{top:r,left:n,bottom:o,right:a}=t;return r<=e.y&&e.y<=o&&n<=e.x&&e.x<=a}/**
 * Returns the rectangles that the pointer is hovering over
 */const B=e=>{let{droppableContainers:t,droppableRects:r,pointerCoordinates:n}=e;if(!n){return[]}const o=[];for(const e of t){const{id:t}=e;const a=r.get(t);if(a&&T(n,a)){/* There may be more than a single rectangle intersecting
       * with the pointer coordinates. In order to sort the
       * colliding rectangles, we measure the distance between
       * the pointer and the corners of the intersecting rectangle
       */const r=k(a);const i=r.reduce((e,t)=>{return e+y(n,t)},0);const s=Number((i/4).toFixed(4));o.push({id:t,data:{droppableContainer:e,value:s}})}}return o.sort(x)};function I(e,t,r){return{...e,scaleX:t&&r?t.width/r.width:1,scaleY:t&&r?t.height/r.height:1}}function N(e,t){return e&&t?{x:e.left-t.left,y:e.top-t.top}:_}function O(e){return function t(t){for(var r=arguments.length,n=new Array(r>1?r-1:0),o=1;o<r;o++){n[o-1]=arguments[o]}return n.reduce((t,r)=>({...t,top:t.top+e*r.y,bottom:t.bottom+e*r.y,left:t.left+e*r.x,right:t.right+e*r.x}),{...t})}}const A=/*#__PURE__*/O(1);function L(e){if(e.startsWith("matrix3d(")){const t=e.slice(9,-1).split(/, /);return{x:+t[12],y:+t[13],scaleX:+t[0],scaleY:+t[5]}}else if(e.startsWith("matrix(")){const t=e.slice(7,-1).split(/, /);return{x:+t[4],y:+t[5],scaleX:+t[0],scaleY:+t[3]}}return null}function J(e,t,r){const n=L(t);if(!n){return e}const{scaleX:o,scaleY:a,x:i,y:s}=n;const l=e.left-i-(1-o)*parseFloat(r);const c=e.top-s-(1-a)*parseFloat(r.slice(r.indexOf(" ")+1));const d=o?e.width/o:e.width;const u=a?e.height/a:e.height;return{width:d,height:u,top:c,right:l+d,bottom:c+u,left:l}}const P={ignoreTransform:false};/**
 * Returns the bounding client rect of an element relative to the viewport.
 */function R(e,t){if(t===void 0){t=P}let r=e.getBoundingClientRect();if(t.ignoreTransform){const{transform:t,transformOrigin:n}=(0,s/* .getWindow */.Jj)(e).getComputedStyle(e);if(t){r=J(r,t,n)}}const{top:n,left:o,width:a,height:i,bottom:l,right:c}=r;return{top:n,left:o,width:a,height:i,bottom:l,right:c}}/**
 * Returns the bounding client rect of an element relative to the viewport.
 *
 * @remarks
 * The ClientRect returned by this method does not take into account transforms
 * applied to the element it measures.
 *
 */function U(e){return R(e,{ignoreTransform:true})}function z(e){const t=e.innerWidth;const r=e.innerHeight;return{top:0,left:0,right:t,bottom:r,width:t,height:r}}function j(e,t){if(t===void 0){t=(0,s/* .getWindow */.Jj)(e).getComputedStyle(e)}return t.position==="fixed"}function X(e,t){if(t===void 0){t=(0,s/* .getWindow */.Jj)(e).getComputedStyle(e)}const r=/(auto|scroll|overlay)/;const n=["overflow","overflowX","overflowY"];return n.some(e=>{const n=t[e];return typeof n==="string"?r.test(n):false})}function F(e,t){const r=[];function n(o){if(t!=null&&r.length>=t){return r}if(!o){return r}if((0,s/* .isDocument */.qk)(o)&&o.scrollingElement!=null&&!r.includes(o.scrollingElement)){r.push(o.scrollingElement);return r}if(!(0,s/* .isHTMLElement */.Re)(o)||(0,s/* .isSVGElement */.vZ)(o)){return r}if(r.includes(o)){return r}const a=(0,s/* .getWindow */.Jj)(e).getComputedStyle(o);if(o!==e){if(X(o,a)){r.push(o)}}if(j(o,a)){return r}return n(o.parentNode)}if(!e){return r}return n(e)}function Y(e){const[t]=F(e,1);return t!=null?t:null}function Q(e){if(!s/* .canUseDOM */.Nq||!e){return null}if((0,s/* .isWindow */.FJ)(e)){return e}if(!(0,s/* .isNode */.UG)(e)){return null}if((0,s/* .isDocument */.qk)(e)||e===(0,s/* .getOwnerDocument */.r3)(e).scrollingElement){return window}if((0,s/* .isHTMLElement */.Re)(e)){return e}return null}function q(e){if((0,s/* .isWindow */.FJ)(e)){return e.scrollX}return e.scrollLeft}function H(e){if((0,s/* .isWindow */.FJ)(e)){return e.scrollY}return e.scrollTop}function V(e){return{x:q(e),y:H(e)}}var G;(function(e){e[e["Forward"]=1]="Forward";e[e["Backward"]=-1]="Backward"})(G||(G={}));function K(e){if(!s/* .canUseDOM */.Nq||!e){return false}return e===document.scrollingElement}function $(e){const t={x:0,y:0};const r=K(e)?{height:window.innerHeight,width:window.innerWidth}:{height:e.clientHeight,width:e.clientWidth};const n={x:e.scrollWidth-r.width,y:e.scrollHeight-r.height};const o=e.scrollTop<=t.y;const a=e.scrollLeft<=t.x;const i=e.scrollTop>=n.y;const s=e.scrollLeft>=n.x;return{isTop:o,isLeft:a,isBottom:i,isRight:s,maxScroll:n,minScroll:t}}const ee={x:.2,y:.2};function et(e,t,r,n,o){let{top:a,left:i,right:s,bottom:l}=r;if(n===void 0){n=10}if(o===void 0){o=ee}const{isTop:c,isBottom:d,isLeft:u,isRight:v}=$(e);const f={x:0,y:0};const p={x:0,y:0};const h={height:t.height*o.y,width:t.width*o.x};if(!c&&a<=t.top+h.height){// Scroll Up
f.y=G.Backward;p.y=n*Math.abs((t.top+h.height-a)/h.height)}else if(!d&&l>=t.bottom-h.height){// Scroll Down
f.y=G.Forward;p.y=n*Math.abs((t.bottom-h.height-l)/h.height)}if(!v&&s>=t.right-h.width){// Scroll Right
f.x=G.Forward;p.x=n*Math.abs((t.right-h.width-s)/h.width)}else if(!u&&i<=t.left+h.width){// Scroll Left
f.x=G.Backward;p.x=n*Math.abs((t.left+h.width-i)/h.width)}return{direction:f,speed:p}}function er(e){if(e===document.scrollingElement){const{innerWidth:e,innerHeight:t}=window;return{top:0,left:0,right:e,bottom:t,width:e,height:t}}const{top:t,left:r,right:n,bottom:o}=e.getBoundingClientRect();return{top:t,left:r,right:n,bottom:o,width:e.clientWidth,height:e.clientHeight}}function en(e){return e.reduce((e,t)=>{return(0,s/* .add */.IH)(e,V(t))},_)}function eo(e){return e.reduce((e,t)=>{return e+q(t)},0)}function ea(e){return e.reduce((e,t)=>{return e+H(t)},0)}function ei(e,t){if(t===void 0){t=R}if(!e){return}const{top:r,left:n,bottom:o,right:a}=t(e);const i=Y(e);if(!i){return}if(o<=0||a<=0||r>=window.innerHeight||n>=window.innerWidth){e.scrollIntoView({block:"center",inline:"center"})}}const es=[["x",["left","right"],eo],["y",["top","bottom"],ea]];class el{constructor(e,t){this.rect=void 0;this.width=void 0;this.height=void 0;this.top=void 0;this.bottom=void 0;this.right=void 0;this.left=void 0;const r=F(t);const n=en(r);this.rect={...e};this.width=e.width;this.height=e.height;for(const[e,t,o]of es){for(const a of t){Object.defineProperty(this,a,{get:()=>{const t=o(r);const i=n[e]-t;return this.rect[a]+i},enumerable:true})}}Object.defineProperty(this,"rect",{enumerable:false})}}class ec{constructor(e){this.target=void 0;this.listeners=[];this.removeAll=()=>{this.listeners.forEach(e=>{var t;return(t=this.target)==null?void 0:t.removeEventListener(...e)})};this.target=e}add(e,t,r){var n;(n=this.target)==null?void 0:n.addEventListener(e,t,r);this.listeners.push([e,t,r])}}function ed(e){// If the `event.target` element is removed from the document events will still be targeted
// at it, and hence won't always bubble up to the window or document anymore.
// If there is any risk of an element being removed while it is being dragged,
// the best practice is to attach the event listeners directly to the target.
// https://developer.mozilla.org/en-US/docs/Web/API/EventTarget
const{EventTarget:t}=(0,s/* .getWindow */.Jj)(e);return e instanceof t?e:(0,s/* .getOwnerDocument */.r3)(e)}function eu(e,t){const r=Math.abs(e.x);const n=Math.abs(e.y);if(typeof t==="number"){return Math.sqrt(r**2+n**2)>t}if("x"in t&&"y"in t){return r>t.x&&n>t.y}if("x"in t){return r>t.x}if("y"in t){return n>t.y}return false}var ev;(function(e){e["Click"]="click";e["DragStart"]="dragstart";e["Keydown"]="keydown";e["ContextMenu"]="contextmenu";e["Resize"]="resize";e["SelectionChange"]="selectionchange";e["VisibilityChange"]="visibilitychange"})(ev||(ev={}));function ef(e){e.preventDefault()}function ep(e){e.stopPropagation()}var eh;(function(e){e["Space"]="Space";e["Down"]="ArrowDown";e["Right"]="ArrowRight";e["Left"]="ArrowLeft";e["Up"]="ArrowUp";e["Esc"]="Escape";e["Enter"]="Enter";e["Tab"]="Tab"})(eh||(eh={}));const eg={start:[eh.Space,eh.Enter],cancel:[eh.Esc],end:[eh.Space,eh.Enter,eh.Tab]};const em=(e,t)=>{let{currentCoordinates:r}=t;switch(e.code){case eh.Right:return{...r,x:r.x+25};case eh.Left:return{...r,x:r.x-25};case eh.Down:return{...r,y:r.y+25};case eh.Up:return{...r,y:r.y-25}}return undefined};class eb{constructor(e){this.props=void 0;this.autoScrollEnabled=false;this.referenceCoordinates=void 0;this.listeners=void 0;this.windowListeners=void 0;this.props=e;const{event:{target:t}}=e;this.props=e;this.listeners=new ec((0,s/* .getOwnerDocument */.r3)(t));this.windowListeners=new ec((0,s/* .getWindow */.Jj)(t));this.handleKeyDown=this.handleKeyDown.bind(this);this.handleCancel=this.handleCancel.bind(this);this.attach()}attach(){this.handleStart();this.windowListeners.add(ev.Resize,this.handleCancel);this.windowListeners.add(ev.VisibilityChange,this.handleCancel);setTimeout(()=>this.listeners.add(ev.Keydown,this.handleKeyDown))}handleStart(){const{activeNode:e,onStart:t}=this.props;const r=e.node.current;if(r){ei(r)}t(_)}handleKeyDown(e){if((0,s/* .isKeyboardEvent */.vd)(e)){const{active:t,context:r,options:n}=this.props;const{keyboardCodes:o=eg,coordinateGetter:a=em,scrollBehavior:i="smooth"}=n;const{code:l}=e;if(o.end.includes(l)){this.handleEnd(e);return}if(o.cancel.includes(l)){this.handleCancel(e);return}const{collisionRect:c}=r.current;const d=c?{x:c.left,y:c.top}:_;if(!this.referenceCoordinates){this.referenceCoordinates=d}const u=a(e,{active:t,context:r.current,currentCoordinates:d});if(u){const t=(0,s/* .subtract */.$X)(u,d);const n={x:0,y:0};const{scrollableAncestors:o}=r.current;for(const r of o){const o=e.code;const{isTop:a,isRight:s,isLeft:l,isBottom:c,maxScroll:d,minScroll:v}=$(r);const f=er(r);const p={x:Math.min(o===eh.Right?f.right-f.width/2:f.right,Math.max(o===eh.Right?f.left:f.left+f.width/2,u.x)),y:Math.min(o===eh.Down?f.bottom-f.height/2:f.bottom,Math.max(o===eh.Down?f.top:f.top+f.height/2,u.y))};const h=o===eh.Right&&!s||o===eh.Left&&!l;const g=o===eh.Down&&!c||o===eh.Up&&!a;if(h&&p.x!==u.x){const e=r.scrollLeft+t.x;const a=o===eh.Right&&e<=d.x||o===eh.Left&&e>=v.x;if(a&&!t.y){// We don't need to update coordinates, the scroll adjustment alone will trigger
// logic to auto-detect the new container we are over
r.scrollTo({left:e,behavior:i});return}if(a){n.x=r.scrollLeft-e}else{n.x=o===eh.Right?r.scrollLeft-d.x:r.scrollLeft-v.x}if(n.x){r.scrollBy({left:-n.x,behavior:i})}break}else if(g&&p.y!==u.y){const e=r.scrollTop+t.y;const a=o===eh.Down&&e<=d.y||o===eh.Up&&e>=v.y;if(a&&!t.x){// We don't need to update coordinates, the scroll adjustment alone will trigger
// logic to auto-detect the new container we are over
r.scrollTo({top:e,behavior:i});return}if(a){n.y=r.scrollTop-e}else{n.y=o===eh.Down?r.scrollTop-d.y:r.scrollTop-v.y}if(n.y){r.scrollBy({top:-n.y,behavior:i})}break}}this.handleMove(e,(0,s/* .add */.IH)((0,s/* .subtract */.$X)(u,this.referenceCoordinates),n))}}}handleMove(e,t){const{onMove:r}=this.props;e.preventDefault();r(t)}handleEnd(e){const{onEnd:t}=this.props;e.preventDefault();this.detach();t()}handleCancel(e){const{onCancel:t}=this.props;e.preventDefault();this.detach();t()}detach(){this.listeners.removeAll();this.windowListeners.removeAll()}}eb.activators=[{eventName:"onKeyDown",handler:(e,t,r)=>{let{keyboardCodes:n=eg,onActivation:o}=t;let{active:a}=r;const{code:i}=e.nativeEvent;if(n.start.includes(i)){const t=a.activatorNode.current;if(t&&e.target!==t){return false}e.preventDefault();o==null?void 0:o({event:e.nativeEvent});return true}return false}}];function e_(e){return Boolean(e&&"distance"in e)}function ey(e){return Boolean(e&&"delay"in e)}class ew{constructor(e,t,r){var n;if(r===void 0){r=ed(e.event.target)}this.props=void 0;this.events=void 0;this.autoScrollEnabled=true;this.document=void 0;this.activated=false;this.initialCoordinates=void 0;this.timeoutId=null;this.listeners=void 0;this.documentListeners=void 0;this.windowListeners=void 0;this.props=e;this.events=t;const{event:o}=e;const{target:a}=o;this.props=e;this.events=t;this.document=(0,s/* .getOwnerDocument */.r3)(a);this.documentListeners=new ec(this.document);this.listeners=new ec(r);this.windowListeners=new ec((0,s/* .getWindow */.Jj)(a));this.initialCoordinates=(n=(0,s/* .getEventCoordinates */.DC)(o))!=null?n:_;this.handleStart=this.handleStart.bind(this);this.handleMove=this.handleMove.bind(this);this.handleEnd=this.handleEnd.bind(this);this.handleCancel=this.handleCancel.bind(this);this.handleKeydown=this.handleKeydown.bind(this);this.removeTextSelection=this.removeTextSelection.bind(this);this.attach()}attach(){const{events:e,props:{options:{activationConstraint:t,bypassActivationConstraint:r}}}=this;this.listeners.add(e.move.name,this.handleMove,{passive:false});this.listeners.add(e.end.name,this.handleEnd);if(e.cancel){this.listeners.add(e.cancel.name,this.handleCancel)}this.windowListeners.add(ev.Resize,this.handleCancel);this.windowListeners.add(ev.DragStart,ef);this.windowListeners.add(ev.VisibilityChange,this.handleCancel);this.windowListeners.add(ev.ContextMenu,ef);this.documentListeners.add(ev.Keydown,this.handleKeydown);if(t){if(r!=null&&r({event:this.props.event,activeNode:this.props.activeNode,options:this.props.options})){return this.handleStart()}if(ey(t)){this.timeoutId=setTimeout(this.handleStart,t.delay);this.handlePending(t);return}if(e_(t)){this.handlePending(t);return}}this.handleStart()}detach(){this.listeners.removeAll();this.windowListeners.removeAll();// Wait until the next event loop before removing document listeners
// This is necessary because we listen for `click` and `selection` events on the document
setTimeout(this.documentListeners.removeAll,50);if(this.timeoutId!==null){clearTimeout(this.timeoutId);this.timeoutId=null}}handlePending(e,t){const{active:r,onPending:n}=this.props;n(r,e,this.initialCoordinates,t)}handleStart(){const{initialCoordinates:e}=this;const{onStart:t}=this.props;if(e){this.activated=true;// Stop propagation of click events once activation constraints are met
this.documentListeners.add(ev.Click,ep,{capture:true});// Remove any text selection from the document
this.removeTextSelection();// Prevent further text selection while dragging
this.documentListeners.add(ev.SelectionChange,this.removeTextSelection);t(e)}}handleMove(e){var t;const{activated:r,initialCoordinates:n,props:o}=this;const{onMove:a,options:{activationConstraint:i}}=o;if(!n){return}const l=(t=(0,s/* .getEventCoordinates */.DC)(e))!=null?t:_;const c=(0,s/* .subtract */.$X)(n,l);// Constraint validation
if(!r&&i){if(e_(i)){if(i.tolerance!=null&&eu(c,i.tolerance)){return this.handleCancel()}if(eu(c,i.distance)){return this.handleStart()}}if(ey(i)){if(eu(c,i.tolerance)){return this.handleCancel()}}this.handlePending(i,c);return}if(e.cancelable){e.preventDefault()}a(l)}handleEnd(){const{onAbort:e,onEnd:t}=this.props;this.detach();if(!this.activated){e(this.props.active)}t()}handleCancel(){const{onAbort:e,onCancel:t}=this.props;this.detach();if(!this.activated){e(this.props.active)}t()}handleKeydown(e){if(e.code===eh.Esc){this.handleCancel()}}removeTextSelection(){var e;(e=this.document.getSelection())==null?void 0:e.removeAllRanges()}}const ex={cancel:{name:"pointercancel"},move:{name:"pointermove"},end:{name:"pointerup"}};class eZ extends ew{constructor(e){const{event:t}=e;// Pointer events stop firing if the target is unmounted while dragging
// Therefore we attach listeners to the owner document instead
const r=(0,s/* .getOwnerDocument */.r3)(t.target);super(e,ex,r)}}eZ.activators=[{eventName:"onPointerDown",handler:(e,t)=>{let{nativeEvent:r}=e;let{onActivation:n}=t;if(!r.isPrimary||r.button!==0){return false}n==null?void 0:n({event:r});return true}}];const ek={move:{name:"mousemove"},end:{name:"mouseup"}};var eC;(function(e){e[e["RightClick"]=2]="RightClick"})(eC||(eC={}));class eD extends ew{constructor(e){super(e,ek,(0,s/* .getOwnerDocument */.r3)(e.event.target))}}eD.activators=[{eventName:"onMouseDown",handler:(e,t)=>{let{nativeEvent:r}=e;let{onActivation:n}=t;if(r.button===eC.RightClick){return false}n==null?void 0:n({event:r});return true}}];const eE={cancel:{name:"touchcancel"},move:{name:"touchmove"},end:{name:"touchend"}};class eS extends ew{constructor(e){super(e,eE)}static setup(){// Adding a non-capture and non-passive `touchmove` listener in order
// to force `event.preventDefault()` calls to work in dynamically added
// touchmove event handlers. This is required for iOS Safari.
window.addEventListener(eE.move.name,e,{capture:false,passive:false});return function t(){window.removeEventListener(eE.move.name,e)};// We create a new handler because the teardown function of another sensor
// could remove our event listener if we use a referentially equal listener.
function e(){}}}eS.activators=[{eventName:"onTouchStart",handler:(e,t)=>{let{nativeEvent:r}=e;let{onActivation:n}=t;const{touches:o}=r;if(o.length>1){return false}n==null?void 0:n({event:r});return true}}];var eW;(function(e){e[e["Pointer"]=0]="Pointer";e[e["DraggableRect"]=1]="DraggableRect"})(eW||(eW={}));var eM;(function(e){e[e["TreeOrder"]=0]="TreeOrder";e[e["ReversedTreeOrder"]=1]="ReversedTreeOrder"})(eM||(eM={}));function eT(e){let{acceleration:t,activator:r=eW.Pointer,canScroll:o,draggingRect:a,enabled:i,interval:l=5,order:c=eM.TreeOrder,pointerCoordinates:d,scrollableAncestors:u,scrollableAncestorRects:v,delta:f,threshold:p}=e;const h=eI({delta:f,disabled:!i});const[g,m]=(0,s/* .useInterval */.Yz)();const b=(0,n.useRef)({x:0,y:0});const _=(0,n.useRef)({x:0,y:0});const y=(0,n.useMemo)(()=>{switch(r){case eW.Pointer:return d?{top:d.y,bottom:d.y,left:d.x,right:d.x}:null;case eW.DraggableRect:return a}},[r,a,d]);const w=(0,n.useRef)(null);const x=(0,n.useCallback)(()=>{const e=w.current;if(!e){return}const t=b.current.x*_.current.x;const r=b.current.y*_.current.y;e.scrollBy(t,r)},[]);const Z=(0,n.useMemo)(()=>c===eM.TreeOrder?[...u].reverse():u,[c,u]);(0,n.useEffect)(()=>{if(!i||!u.length||!y){m();return}for(const e of Z){if((o==null?void 0:o(e))===false){continue}const r=u.indexOf(e);const n=v[r];if(!n){continue}const{direction:a,speed:i}=et(e,n,y,t,p);for(const e of["x","y"]){if(!h[e][a[e]]){i[e]=0;a[e]=0}}if(i.x>0||i.y>0){m();w.current=e;g(x,l);b.current=i;_.current=a;return}}b.current={x:0,y:0};_.current={x:0,y:0};m()},[t,x,o,m,i,l,JSON.stringify(y),JSON.stringify(h),g,u,Z,v,JSON.stringify(p)])}const eB={x:{[G.Backward]:false,[G.Forward]:false},y:{[G.Backward]:false,[G.Forward]:false}};function eI(e){let{delta:t,disabled:r}=e;const n=(0,s/* .usePrevious */.D9)(t);return(0,s/* .useLazyMemo */.Gj)(e=>{if(r||!n||!e){// Reset scroll intent tracking when auto-scrolling is disabled
return eB}const o={x:Math.sign(t.x-n.x),y:Math.sign(t.y-n.y)};// Keep track of the user intent to scroll in each direction for both axis
return{x:{[G.Backward]:e.x[G.Backward]||o.x===-1,[G.Forward]:e.x[G.Forward]||o.x===1},y:{[G.Backward]:e.y[G.Backward]||o.y===-1,[G.Forward]:e.y[G.Forward]||o.y===1}}},[r,t,n])}function eN(e,t){const r=t!=null?e.get(t):undefined;const n=r?r.node.current:null;return(0,s/* .useLazyMemo */.Gj)(e=>{var r;if(t==null){return null}// In some cases, the draggable node can unmount while dragging
// This is the case for virtualized lists. In those situations,
// we fall back to the last known value for that node.
return(r=n!=null?n:e)!=null?r:null},[n,t])}function eO(e,t){return(0,n.useMemo)(()=>e.reduce((e,r)=>{const{sensor:n}=r;const o=n.activators.map(e=>({eventName:e.eventName,handler:t(e.handler,r)}));return[...e,...o]},[]),[e,t])}var eA;(function(e){e[e["Always"]=0]="Always";e[e["BeforeDragging"]=1]="BeforeDragging";e[e["WhileDragging"]=2]="WhileDragging"})(eA||(eA={}));var eL;(function(e){e["Optimized"]="optimized"})(eL||(eL={}));const eJ=/*#__PURE__*/new Map;function eP(e,t){let{dragging:r,dependencies:o,config:a}=t;const[i,l]=(0,n.useState)(null);const{frequency:c,measure:d,strategy:u}=a;const v=(0,n.useRef)(e);const f=b();const p=(0,s/* .useLatestValue */.Ey)(f);const h=(0,n.useCallback)(function(e){if(e===void 0){e=[]}if(p.current){return}l(t=>{if(t===null){return e}return t.concat(e.filter(e=>!t.includes(e)))})},[p]);const g=(0,n.useRef)(null);const m=(0,s/* .useLazyMemo */.Gj)(t=>{if(f&&!r){return eJ}if(!t||t===eJ||v.current!==e||i!=null){const t=new Map;for(let r of e){if(!r){continue}if(i&&i.length>0&&!i.includes(r.id)&&r.rect.current){// This container does not need to be re-measured
t.set(r.id,r.rect.current);continue}const e=r.node.current;const n=e?new el(d(e),e):null;r.rect.current=n;if(n){t.set(r.id,n)}}return t}return t},[e,i,r,f,d]);(0,n.useEffect)(()=>{v.current=e},[e]);(0,n.useEffect)(()=>{if(f){return}h()},[r,f]);(0,n.useEffect)(()=>{if(i&&i.length>0){l(null)}},[JSON.stringify(i)]);(0,n.useEffect)(()=>{if(f||typeof c!=="number"||g.current!==null){return}g.current=setTimeout(()=>{h();g.current=null},c)},[c,f,h,...o]);return{droppableRects:m,measureDroppableContainers:h,measuringScheduled:i!=null};function b(){switch(u){case eA.Always:return false;case eA.BeforeDragging:return r;default:return!r}}}function eR(e,t){return(0,s/* .useLazyMemo */.Gj)(r=>{if(!e){return null}if(r){return r}return typeof t==="function"?t(e):e},[t,e])}function eU(e,t){return eR(e,t)}/**
 * Returns a new MutationObserver instance.
 * If `MutationObserver` is undefined in the execution environment, returns `undefined`.
 */function ez(e){let{callback:t,disabled:r}=e;const o=(0,s/* .useEvent */.zX)(t);const a=(0,n.useMemo)(()=>{if(r||typeof window==="undefined"||typeof window.MutationObserver==="undefined"){return undefined}const{MutationObserver:e}=window;return new e(o)},[o,r]);(0,n.useEffect)(()=>{return()=>a==null?void 0:a.disconnect()},[a]);return a}/**
 * Returns a new ResizeObserver instance bound to the `onResize` callback.
 * If `ResizeObserver` is undefined in the execution environment, returns `undefined`.
 */function ej(e){let{callback:t,disabled:r}=e;const o=(0,s/* .useEvent */.zX)(t);const a=(0,n.useMemo)(()=>{if(r||typeof window==="undefined"||typeof window.ResizeObserver==="undefined"){return undefined}const{ResizeObserver:e}=window;return new e(o)},[r]);(0,n.useEffect)(()=>{return()=>a==null?void 0:a.disconnect()},[a]);return a}function eX(e){return new el(R(e),e)}function eF(e,t,r){if(t===void 0){t=eX}const[o,a]=(0,n.useState)(null);function i(){a(n=>{if(!e){return null}if(e.isConnected===false){var o;// Fall back to last rect we measured if the element is
// no longer connected to the DOM.
return(o=n!=null?n:r)!=null?o:null}const a=t(e);if(JSON.stringify(n)===JSON.stringify(a)){return n}return a})}const l=ez({callback(t){if(!e){return}for(const r of t){const{type:t,target:n}=r;if(t==="childList"&&n instanceof HTMLElement&&n.contains(e)){i();break}}}});const c=ej({callback:i});(0,s/* .useIsomorphicLayoutEffect */.LI)(()=>{i();if(e){c==null?void 0:c.observe(e);l==null?void 0:l.observe(document.body,{childList:true,subtree:true})}else{c==null?void 0:c.disconnect();l==null?void 0:l.disconnect()}},[e]);return o}function eY(e){const t=eR(e);return N(e,t)}const eQ=[];function eq(e){const t=(0,n.useRef)(e);const r=(0,s/* .useLazyMemo */.Gj)(r=>{if(!e){return eQ}if(r&&r!==eQ&&e&&t.current&&e.parentNode===t.current.parentNode){return r}return F(e)},[e]);(0,n.useEffect)(()=>{t.current=e},[e]);return r}function eH(e){const[t,r]=(0,n.useState)(null);const o=(0,n.useRef)(e);// To-do: Throttle the handleScroll callback
const a=(0,n.useCallback)(e=>{const t=Q(e.target);if(!t){return}r(e=>{if(!e){return null}e.set(t,V(t));return new Map(e)})},[]);(0,n.useEffect)(()=>{const t=o.current;if(e!==t){n(t);const i=e.map(e=>{const t=Q(e);if(t){t.addEventListener("scroll",a,{passive:true});return[t,V(t)]}return null}).filter(e=>e!=null);r(i.length?new Map(i):null);o.current=e}return()=>{n(e);n(t)};function n(e){e.forEach(e=>{const t=Q(e);t==null?void 0:t.removeEventListener("scroll",a)})}},[a,e]);return(0,n.useMemo)(()=>{if(e.length){return t?Array.from(t.values()).reduce((e,t)=>(0,s/* .add */.IH)(e,t),_):en(e)}return _},[e,t])}function eV(e,t){if(t===void 0){t=[]}const r=(0,n.useRef)(null);(0,n.useEffect)(()=>{r.current=null},t);(0,n.useEffect)(()=>{const t=e!==_;if(t&&!r.current){r.current=e}if(!t&&r.current){r.current=null}},[e]);return r.current?(0,s/* .subtract */.$X)(e,r.current):_}function eG(e){(0,n.useEffect)(()=>{if(!s/* .canUseDOM */.Nq){return}const t=e.map(e=>{let{sensor:t}=e;return t.setup==null?void 0:t.setup()});return()=>{for(const e of t){e==null?void 0:e()}}},// eslint-disable-next-line react-hooks/exhaustive-deps
e.map(e=>{let{sensor:t}=e;return t}))}function eK(e,t){return(0,n.useMemo)(()=>{return e.reduce((e,r)=>{let{eventName:n,handler:o}=r;e[n]=e=>{o(e,t)};return e},{})},[e,t])}function e$(e){return(0,n.useMemo)(()=>e?z(e):null,[e])}const e0=[];function e1(e,t){if(t===void 0){t=R}const[r]=e;const o=e$(r?(0,s/* .getWindow */.Jj)(r):null);const[a,i]=(0,n.useState)(e0);function l(){i(()=>{if(!e.length){return e0}return e.map(e=>K(e)?o:new el(t(e),e))})}const c=ej({callback:l});(0,s/* .useIsomorphicLayoutEffect */.LI)(()=>{c==null?void 0:c.disconnect();l();e.forEach(e=>c==null?void 0:c.observe(e))},[e]);return a}function e2(e){if(!e){return null}if(e.children.length>1){return e}const t=e.children[0];return(0,s/* .isHTMLElement */.Re)(t)?t:e}function e4(e){let{measure:t}=e;const[r,o]=(0,n.useState)(null);const a=(0,n.useCallback)(e=>{for(const{target:r}of e){if((0,s/* .isHTMLElement */.Re)(r)){o(e=>{const n=t(r);return e?{...e,width:n.width,height:n.height}:n});break}}},[t]);const i=ej({callback:a});const l=(0,n.useCallback)(e=>{const r=e2(e);i==null?void 0:i.disconnect();if(r){i==null?void 0:i.observe(r)}o(r?t(r):null)},[t,i]);const[c,d]=(0,s/* .useNodeRef */.wm)(l);return(0,n.useMemo)(()=>({nodeRef:c,rect:r,setRef:d}),[r,c,d])}const e3=[{sensor:eZ,options:{}},{sensor:eb,options:{}}];const e8={current:{}};const e6={draggable:{measure:U},droppable:{measure:U,strategy:eA.WhileDragging,frequency:eL.Optimized},dragOverlay:{measure:R}};class e5 extends Map{get(e){var t;return e!=null?(t=super.get(e))!=null?t:undefined:undefined}toArray(){return Array.from(this.values())}getEnabled(){return this.toArray().filter(e=>{let{disabled:t}=e;return!t})}getNodeFor(e){var t,r;return(t=(r=this.get(e))==null?void 0:r.node.current)!=null?t:undefined}}const e9={activatorEvent:null,active:null,activeNode:null,activeNodeRect:null,collisions:null,containerNodeRect:null,draggableNodes:/*#__PURE__*/new Map,droppableRects:/*#__PURE__*/new Map,droppableContainers:/*#__PURE__*/new e5,over:null,dragOverlay:{nodeRef:{current:null},rect:null,setRef:g},scrollableAncestors:[],scrollableAncestorRects:[],measuringConfiguration:e6,measureDroppableContainers:g,windowRect:null,measuringScheduled:false};const e7={activatorEvent:null,activators:[],active:null,activeNodeRect:null,ariaDescribedById:{draggable:""},dispatch:g,draggableNodes:/*#__PURE__*/new Map,over:null,measureDroppableContainers:g};const te=/*#__PURE__*/(0,n.createContext)(e7);const tt=/*#__PURE__*/(0,n.createContext)(e9);function tr(){return{draggable:{active:null,initialCoordinates:{x:0,y:0},nodes:new Map,translate:{x:0,y:0}},droppable:{containers:new e5}}}function tn(e,t){switch(t.type){case h.DragStart:return{...e,draggable:{...e.draggable,initialCoordinates:t.initialCoordinates,active:t.active}};case h.DragMove:if(e.draggable.active==null){return e}return{...e,draggable:{...e.draggable,translate:{x:t.coordinates.x-e.draggable.initialCoordinates.x,y:t.coordinates.y-e.draggable.initialCoordinates.y}}};case h.DragEnd:case h.DragCancel:return{...e,draggable:{...e.draggable,active:null,initialCoordinates:{x:0,y:0},translate:{x:0,y:0}}};case h.RegisterDroppable:{const{element:r}=t;const{id:n}=r;const o=new e5(e.droppable.containers);o.set(n,r);return{...e,droppable:{...e.droppable,containers:o}}}case h.SetDroppableDisabled:{const{id:r,key:n,disabled:o}=t;const a=e.droppable.containers.get(r);if(!a||n!==a.key){return e}const i=new e5(e.droppable.containers);i.set(r,{...a,disabled:o});return{...e,droppable:{...e.droppable,containers:i}}}case h.UnregisterDroppable:{const{id:r,key:n}=t;const o=e.droppable.containers.get(r);if(!o||n!==o.key){return e}const a=new e5(e.droppable.containers);a.delete(r);return{...e,droppable:{...e.droppable,containers:a}}}default:{return e}}}function to(e){let{disabled:t}=e;const{active:r,activatorEvent:o,draggableNodes:a}=(0,n.useContext)(te);const i=(0,s/* .usePrevious */.D9)(o);const l=(0,s/* .usePrevious */.D9)(r==null?void 0:r.id);// Restore keyboard focus on the activator node
(0,n.useEffect)(()=>{if(t){return}if(!o&&i&&l!=null){if(!(0,s/* .isKeyboardEvent */.vd)(i)){return}if(document.activeElement===i.target){// No need to restore focus
return}const e=a.get(l);if(!e){return}const{activatorNode:t,node:r}=e;if(!t.current&&!r.current){return}requestAnimationFrame(()=>{for(const e of[t.current,r.current]){if(!e){continue}const t=(0,s/* .findFirstFocusableNode */.so)(e);if(t){t.focus();break}}})}},[o,t,a,l,i]);return null}function ta(e,t){let{transform:r,...n}=t;return e!=null&&e.length?e.reduce((e,t)=>{return t({transform:e,...n})},r):r}function ti(e){return(0,n.useMemo)(()=>({draggable:{...e6.draggable,...e==null?void 0:e.draggable},droppable:{...e6.droppable,...e==null?void 0:e.droppable},dragOverlay:{...e6.dragOverlay,...e==null?void 0:e.dragOverlay}}),[e==null?void 0:e.draggable,e==null?void 0:e.droppable,e==null?void 0:e.dragOverlay])}function ts(e){let{activeNode:t,measure:r,initialRect:o,config:a=true}=e;const i=(0,n.useRef)(false);const{x:l,y:c}=typeof a==="boolean"?{x:a,y:a}:a;(0,s/* .useIsomorphicLayoutEffect */.LI)(()=>{const e=!l&&!c;if(e||!t){i.current=false;return}if(i.current||!o){// Return early if layout shift scroll compensation was already attempted
// or if there is no initialRect to compare to.
return}// Get the most up to date node ref for the active draggable
const n=t==null?void 0:t.node.current;if(!n||n.isConnected===false){// Return early if there is no attached node ref or if the node is
// disconnected from the document.
return}const a=r(n);const s=N(a,o);if(!l){s.x=0}if(!c){s.y=0}// Only perform layout shift scroll compensation once
i.current=true;if(Math.abs(s.x)>0||Math.abs(s.y)>0){const e=Y(n);if(e){e.scrollBy({top:s.y,left:s.x})}}},[t,l,c,o,r])}const tl=/*#__PURE__*/(0,n.createContext)({..._,scaleX:1,scaleY:1});var tc;(function(e){e[e["Uninitialized"]=0]="Uninitialized";e[e["Initializing"]=1]="Initializing";e[e["Initialized"]=2]="Initialized"})(tc||(tc={}));const td=/*#__PURE__*/(0,n.memo)(function e(e){var t,r,i,l;let{id:d,accessibility:v,autoScroll:f=true,children:g,sensors:m=e3,collisionDetection:b=M,measuring:_,modifiers:y,...w}=e;const x=(0,n.useReducer)(tn,undefined,tr);const[Z,k]=x;const[D,E]=u();const[S,W]=(0,n.useState)(tc.Uninitialized);const T=S===tc.Initialized;const{draggable:{active:B,nodes:N,translate:O},droppable:{containers:L}}=Z;const J=B!=null?N.get(B):null;const P=(0,n.useRef)({initial:null,translated:null});const R=(0,n.useMemo)(()=>{var e;return B!=null?{id:B,// It's possible for the active node to unmount while dragging
data:(e=J==null?void 0:J.data)!=null?e:e8,rect:P}:null},[B,J]);const U=(0,n.useRef)(null);const[z,j]=(0,n.useState)(null);const[X,F]=(0,n.useState)(null);const Y=(0,s/* .useLatestValue */.Ey)(w,Object.values(w));const Q=(0,s/* .useUniqueId */.Ld)("DndDescribedBy",d);const q=(0,n.useMemo)(()=>L.getEnabled(),[L]);const H=ti(_);const{droppableRects:V,measureDroppableContainers:G,measuringScheduled:K}=eP(q,{dragging:T,dependencies:[O.x,O.y],config:H.droppable});const $=eN(N,B);const ee=(0,n.useMemo)(()=>X?(0,s/* .getEventCoordinates */.DC)(X):null,[X]);const et=eL();const er=eU($,H.draggable.measure);ts({activeNode:B!=null?N.get(B):null,config:et.layoutShiftCompensation,initialRect:er,measure:H.draggable.measure});const en=eF($,H.draggable.measure,er);const eo=eF($?$.parentElement:null);const ea=(0,n.useRef)({activatorEvent:null,active:null,activeNode:$,collisionRect:null,collisions:null,droppableRects:V,draggableNodes:N,draggingNode:null,draggingNodeRect:null,droppableContainers:L,over:null,scrollableAncestors:[],scrollAdjustedTranslate:null});const ei=L.getNodeFor((t=ea.current.over)==null?void 0:t.id);const es=e4({measure:H.dragOverlay.measure});// Use the rect of the drag overlay if it is mounted
const el=(r=es.nodeRef.current)!=null?r:$;const ec=T?(i=es.rect)!=null?i:en:null;const ed=Boolean(es.nodeRef.current&&es.rect);// The delta between the previous and new position of the draggable node
// is only relevant when there is no drag overlay
const eu=eY(ed?null:en);// Get the window rect of the dragging node
const ev=e$(el?(0,s/* .getWindow */.Jj)(el):null);// Get scrollable ancestors of the dragging node
const ef=eq(T?ei!=null?ei:$:null);const ep=e1(ef);// Apply modifiers
const eh=ta(y,{transform:{x:O.x-eu.x,y:O.y-eu.y,scaleX:1,scaleY:1},activatorEvent:X,active:R,activeNodeRect:en,containerNodeRect:eo,draggingNodeRect:ec,over:ea.current.over,overlayNodeRect:es.rect,scrollableAncestors:ef,scrollableAncestorRects:ep,windowRect:ev});const eg=ee?(0,s/* .add */.IH)(ee,O):null;const em=eH(ef);// Represents the scroll delta since dragging was initiated
const eb=eV(em);// Represents the scroll delta since the last time the active node rect was measured
const e_=eV(em,[en]);const ey=(0,s/* .add */.IH)(eh,eb);const ew=ec?A(ec,eh):null;const ex=R&&ew?b({active:R,collisionRect:ew,droppableRects:V,droppableContainers:q,pointerCoordinates:eg}):null;const eZ=C(ex,"id");const[ek,eC]=(0,n.useState)(null);// When there is no drag overlay used, we need to account for the
// window scroll delta
const eD=ed?eh:(0,s/* .add */.IH)(eh,e_);const eE=I(eD,(l=ek==null?void 0:ek.rect)!=null?l:null,en);const eS=(0,n.useRef)(null);const eW=(0,n.useCallback)((e,t)=>{let{sensor:r,options:n}=t;if(U.current==null){return}const o=N.get(U.current);if(!o){return}const i=e.nativeEvent;const s=new r({active:U.current,activeNode:o,event:i,options:n,// Sensors need to be instantiated with refs for arguments that change over time
// otherwise they are frozen in time with the stale arguments
context:ea,onAbort(e){const t=N.get(e);if(!t){return}const{onDragAbort:r}=Y.current;const n={id:e};r==null?void 0:r(n);D({type:"onDragAbort",event:n})},onPending(e,t,r,n){const o=N.get(e);if(!o){return}const{onDragPending:a}=Y.current;const i={id:e,constraint:t,initialCoordinates:r,offset:n};a==null?void 0:a(i);D({type:"onDragPending",event:i})},onStart(e){const t=U.current;if(t==null){return}const r=N.get(t);if(!r){return}const{onDragStart:n}=Y.current;const o={activatorEvent:i,active:{id:t,data:r.data,rect:P}};(0,a.unstable_batchedUpdates)(()=>{n==null?void 0:n(o);W(tc.Initializing);k({type:h.DragStart,initialCoordinates:e,active:t});D({type:"onDragStart",event:o});j(eS.current);F(i)})},onMove(e){k({type:h.DragMove,coordinates:e})},onEnd:l(h.DragEnd),onCancel:l(h.DragCancel)});eS.current=s;function l(e){return async function t(){const{active:t,collisions:r,over:n,scrollAdjustedTranslate:o}=ea.current;let s=null;if(t&&o){const{cancelDrop:a}=Y.current;s={activatorEvent:i,active:t,collisions:r,delta:o,over:n};if(e===h.DragEnd&&typeof a==="function"){const t=await Promise.resolve(a(s));if(t){e=h.DragCancel}}}U.current=null;(0,a.unstable_batchedUpdates)(()=>{k({type:e});W(tc.Uninitialized);eC(null);j(null);F(null);eS.current=null;const t=e===h.DragEnd?"onDragEnd":"onDragCancel";if(s){const e=Y.current[t];e==null?void 0:e(s);D({type:t,event:s})}})}}},[N]);const eM=(0,n.useCallback)((e,t)=>{return(r,n)=>{const o=r.nativeEvent;const a=N.get(n);if(U.current!==null||// No active draggable
!a||// Event has already been captured
o.dndKit||o.defaultPrevented){return}const i={active:a};const s=e(r,t.options,i);if(s===true){o.dndKit={capturedBy:t.sensor};U.current=n;eW(r,t)}}},[N,eW]);const eB=eO(m,eM);eG(m);(0,s/* .useIsomorphicLayoutEffect */.LI)(()=>{if(en&&S===tc.Initializing){W(tc.Initialized)}},[en,S]);(0,n.useEffect)(()=>{const{onDragMove:e}=Y.current;const{active:t,activatorEvent:r,collisions:n,over:o}=ea.current;if(!t||!r){return}const i={active:t,activatorEvent:r,collisions:n,delta:{x:ey.x,y:ey.y},over:o};(0,a.unstable_batchedUpdates)(()=>{e==null?void 0:e(i);D({type:"onDragMove",event:i})})},[ey.x,ey.y]);(0,n.useEffect)(()=>{const{active:e,activatorEvent:t,collisions:r,droppableContainers:n,scrollAdjustedTranslate:o}=ea.current;if(!e||U.current==null||!t||!o){return}const{onDragOver:i}=Y.current;const s=n.get(eZ);const l=s&&s.rect.current?{id:s.id,rect:s.rect.current,data:s.data,disabled:s.disabled}:null;const c={active:e,activatorEvent:t,collisions:r,delta:{x:o.x,y:o.y},over:l};(0,a.unstable_batchedUpdates)(()=>{eC(l);i==null?void 0:i(c);D({type:"onDragOver",event:c})})},[eZ]);(0,s/* .useIsomorphicLayoutEffect */.LI)(()=>{ea.current={activatorEvent:X,active:R,activeNode:$,collisionRect:ew,collisions:ex,droppableRects:V,draggableNodes:N,draggingNode:el,draggingNodeRect:ec,droppableContainers:L,over:ek,scrollableAncestors:ef,scrollAdjustedTranslate:ey};P.current={initial:ec,translated:ew}},[R,$,ex,ew,N,el,ec,V,L,ek,ef,ey]);eT({...et,delta:O,draggingRect:ew,pointerCoordinates:eg,scrollableAncestors:ef,scrollableAncestorRects:ep});const eI=(0,n.useMemo)(()=>{const e={active:R,activeNode:$,activeNodeRect:en,activatorEvent:X,collisions:ex,containerNodeRect:eo,dragOverlay:es,draggableNodes:N,droppableContainers:L,droppableRects:V,over:ek,measureDroppableContainers:G,scrollableAncestors:ef,scrollableAncestorRects:ep,measuringConfiguration:H,measuringScheduled:K,windowRect:ev};return e},[R,$,en,X,ex,eo,es,N,L,V,ek,G,ef,ep,H,K,ev]);const eA=(0,n.useMemo)(()=>{const e={activatorEvent:X,activators:eB,active:R,activeNodeRect:en,ariaDescribedById:{draggable:Q},dispatch:k,draggableNodes:N,over:ek,measureDroppableContainers:G};return e},[X,eB,R,en,k,Q,N,ek,G]);return o().createElement(c.Provider,{value:E},o().createElement(te.Provider,{value:eA},o().createElement(tt.Provider,{value:eI},o().createElement(tl.Provider,{value:eE},g)),o().createElement(to,{disabled:(v==null?void 0:v.restoreFocus)===false})),o().createElement(p,{...v,hiddenTextDescribedById:Q}));function eL(){const e=(z==null?void 0:z.autoScrollEnabled)===false;const t=typeof f==="object"?f.enabled===false:f===false;const r=T&&!e&&!t;if(typeof f==="object"){return{...f,enabled:r}}return{enabled:r}}});const tu=/*#__PURE__*/(0,n.createContext)(null);const tv="button";const tf="Draggable";function tp(e){let{id:t,data:r,disabled:o=false,attributes:a}=e;const i=(0,s/* .useUniqueId */.Ld)(tf);const{activators:l,activatorEvent:c,active:d,activeNodeRect:u,ariaDescribedById:v,draggableNodes:f,over:p}=(0,n.useContext)(te);const{role:h=tv,roleDescription:g="draggable",tabIndex:m=0}=a!=null?a:{};const b=(d==null?void 0:d.id)===t;const _=(0,n.useContext)(b?tl:tu);const[y,w]=(0,s/* .useNodeRef */.wm)();const[x,Z]=(0,s/* .useNodeRef */.wm)();const k=eK(l,t);const C=(0,s/* .useLatestValue */.Ey)(r);(0,s/* .useIsomorphicLayoutEffect */.LI)(()=>{f.set(t,{id:t,key:i,node:y,activatorNode:x,data:C});return()=>{const e=f.get(t);if(e&&e.key===i){f.delete(t)}}},[f,t]);const D=(0,n.useMemo)(()=>({role:h,tabIndex:m,"aria-disabled":o,"aria-pressed":b&&h===tv?true:undefined,"aria-roledescription":g,"aria-describedby":v.draggable}),[o,h,m,b,g,v.draggable]);return{active:d,activatorEvent:c,activeNodeRect:u,attributes:D,isDragging:b,listeners:o?undefined:k,node:y,over:p,setNodeRef:w,setActivatorNodeRef:Z,transform:_}}function th(){return(0,n.useContext)(tt)}const tg="Droppable";const tm={timeout:25};function tb(e){let{data:t,disabled:r=false,id:o,resizeObserverConfig:a}=e;const i=(0,s/* .useUniqueId */.Ld)(tg);const{active:l,dispatch:c,over:d,measureDroppableContainers:u}=(0,n.useContext)(te);const v=(0,n.useRef)({disabled:r});const f=(0,n.useRef)(false);const p=(0,n.useRef)(null);const g=(0,n.useRef)(null);const{disabled:m,updateMeasurementsFor:b,timeout:_}={...tm,...a};const y=(0,s/* .useLatestValue */.Ey)(b!=null?b:o);const w=(0,n.useCallback)(()=>{if(!f.current){// ResizeObserver invokes the `handleResize` callback as soon as `observe` is called,
// assuming the element is rendered and displayed.
f.current=true;return}if(g.current!=null){clearTimeout(g.current)}g.current=setTimeout(()=>{u(Array.isArray(y.current)?y.current:[y.current]);g.current=null},_)},[_]);const x=ej({callback:w,disabled:m||!l});const Z=(0,n.useCallback)((e,t)=>{if(!x){return}if(t){x.unobserve(t);f.current=false}if(e){x.observe(e)}},[x]);const[k,C]=(0,s/* .useNodeRef */.wm)(Z);const D=(0,s/* .useLatestValue */.Ey)(t);(0,n.useEffect)(()=>{if(!x||!k.current){return}x.disconnect();f.current=false;x.observe(k.current)},[k,x]);(0,n.useEffect)(()=>{c({type:h.RegisterDroppable,element:{id:o,key:i,disabled:r,node:k,rect:p,data:D}});return()=>c({type:h.UnregisterDroppable,key:i,id:o})},[o]);(0,n.useEffect)(()=>{if(r!==v.current.disabled){c({type:h.SetDroppableDisabled,id:o,key:i,disabled:r});v.current.disabled=r}},[o,i,r,c]);return{active:l,rect:p,isOver:(d==null?void 0:d.id)===o,node:k,over:d,setNodeRef:C}}function t_(e){let{animation:t,children:r}=e;const[a,i]=(0,n.useState)(null);const[l,c]=(0,n.useState)(null);const d=(0,s/* .usePrevious */.D9)(r);if(!r&&!a&&d){i(d)}(0,s/* .useIsomorphicLayoutEffect */.LI)(()=>{if(!l){return}const e=a==null?void 0:a.key;const r=a==null?void 0:a.props.id;if(e==null||r==null){i(null);return}Promise.resolve(t(r,l)).then(()=>{i(null)})},[t,a,l]);return o().createElement(o().Fragment,null,r,a?(0,n.cloneElement)(a,{ref:c}):null)}const ty={x:0,y:0,scaleX:1,scaleY:1};function tw(e){let{children:t}=e;return o().createElement(te.Provider,{value:e7},o().createElement(tl.Provider,{value:ty},t))}const tx={position:"fixed",touchAction:"none"};const tZ=e=>{const t=(0,s/* .isKeyboardEvent */.vd)(e);return t?"transform 250ms ease":undefined};const tk=/*#__PURE__*/(0,n.forwardRef)((e,t)=>{let{as:r,activatorEvent:n,adjustScale:a,children:i,className:l,rect:c,style:d,transform:u,transition:v=tZ}=e;if(!c){return null}const f=a?u:{...u,scaleX:1,scaleY:1};const p={...tx,width:c.width,height:c.height,top:c.top,left:c.left,transform:s/* .CSS.Transform.toString */.ux.Transform.toString(f),transformOrigin:a&&n?w(n,c):undefined,transition:typeof v==="function"?v(n):v,...d};return o().createElement(r,{className:l,style:p,ref:t},i)});const tC=e=>t=>{let{active:r,dragOverlay:n}=t;const o={};const{styles:a,className:i}=e;if(a!=null&&a.active){for(const[e,t]of Object.entries(a.active)){if(t===undefined){continue}o[e]=r.node.style.getPropertyValue(e);r.node.style.setProperty(e,t)}}if(a!=null&&a.dragOverlay){for(const[e,t]of Object.entries(a.dragOverlay)){if(t===undefined){continue}n.node.style.setProperty(e,t)}}if(i!=null&&i.active){r.node.classList.add(i.active)}if(i!=null&&i.dragOverlay){n.node.classList.add(i.dragOverlay)}return function e(){for(const[e,t]of Object.entries(o)){r.node.style.setProperty(e,t)}if(i!=null&&i.active){r.node.classList.remove(i.active)}}};const tD=e=>{let{transform:{initial:t,final:r}}=e;return[{transform:s/* .CSS.Transform.toString */.ux.Transform.toString(t)},{transform:s/* .CSS.Transform.toString */.ux.Transform.toString(r)}]};const tE={duration:250,easing:"ease",keyframes:tD,sideEffects:/*#__PURE__*/tC({styles:{active:{opacity:"0"}}})};function tS(e){let{config:t,draggableNodes:r,droppableContainers:n,measuringConfiguration:o}=e;return(0,s/* .useEvent */.zX)((e,a)=>{if(t===null){return}const i=r.get(e);if(!i){return}const l=i.node.current;if(!l){return}const c=e2(a);if(!c){return}const{transform:d}=(0,s/* .getWindow */.Jj)(a).getComputedStyle(a);const u=L(d);if(!u){return}const v=typeof t==="function"?t:tW(t);ei(l,o.draggable.measure);return v({active:{id:e,data:i.data,node:l,rect:o.draggable.measure(l)},draggableNodes:r,dragOverlay:{node:a,rect:o.dragOverlay.measure(c)},droppableContainers:n,measuringConfiguration:o,transform:u})})}function tW(e){const{duration:t,easing:r,sideEffects:n,keyframes:o}={...tE,...e};return e=>{let{active:a,dragOverlay:i,transform:s,...l}=e;if(!t){// Do not animate if animation duration is zero.
return}const c={x:i.rect.left-a.rect.left,y:i.rect.top-a.rect.top};const d={scaleX:s.scaleX!==1?a.rect.width*s.scaleX/i.rect.width:1,scaleY:s.scaleY!==1?a.rect.height*s.scaleY/i.rect.height:1};const u={x:s.x-c.x,y:s.y-c.y,...d};const v=o({...l,active:a,dragOverlay:i,transform:{initial:s,final:u}});const[f]=v;const p=v[v.length-1];if(JSON.stringify(f)===JSON.stringify(p)){// The start and end keyframes are the same, infer that there is no animation needed.
return}const h=n==null?void 0:n({active:a,dragOverlay:i,...l});const g=i.node.animate(v,{duration:t,easing:r,fill:"forwards"});return new Promise(e=>{g.onfinish=()=>{h==null?void 0:h();e()}})}}let tM=0;function tT(e){return(0,n.useMemo)(()=>{if(e==null){return}tM++;return tM},[e])}const tB=/*#__PURE__*/o().memo(e=>{let{adjustScale:t=false,children:r,dropAnimation:a,style:i,transition:s,modifiers:l,wrapperElement:c="div",className:d,zIndex:u=999}=e;const{activatorEvent:v,active:f,activeNodeRect:p,containerNodeRect:h,draggableNodes:g,droppableContainers:m,dragOverlay:b,over:_,measuringConfiguration:y,scrollableAncestors:w,scrollableAncestorRects:x,windowRect:Z}=th();const k=(0,n.useContext)(tl);const C=tT(f==null?void 0:f.id);const D=ta(l,{activatorEvent:v,active:f,activeNodeRect:p,containerNodeRect:h,draggingNodeRect:b.rect,over:_,overlayNodeRect:b.rect,scrollableAncestors:w,scrollableAncestorRects:x,transform:k,windowRect:Z});const E=eR(p);const S=tS({config:a,draggableNodes:g,droppableContainers:m,measuringConfiguration:y});// We need to wait for the active node to be measured before connecting the drag overlay ref
// otherwise collisions can be computed against a mispositioned drag overlay
const W=E?b.setRef:undefined;return o().createElement(tw,null,o().createElement(t_,{animation:S},f&&C?o().createElement(tk,{key:C,id:f.id,ref:W,as:c,activatorEvent:v,adjustScale:t,className:d,transition:s,rect:E,style:{zIndex:u,...i},transform:D},r):null))});//# sourceMappingURL=core.esm.js.map
},32339:function(e,t,r){r.d(t,{hg:()=>d});/* ESM import */var n=r(24285);function o(e){return t=>{let{transform:r}=t;return{...r,x:Math.ceil(r.x/e)*e,y:Math.ceil(r.y/e)*e}}}const a=e=>{let{transform:t}=e;return{...t,y:0}};function i(e,t,r){const n={...e};if(t.top+e.y<=r.top){n.y=r.top-t.top}else if(t.bottom+e.y>=r.top+r.height){n.y=r.top+r.height-t.bottom}if(t.left+e.x<=r.left){n.x=r.left-t.left}else if(t.right+e.x>=r.left+r.width){n.x=r.left+r.width-t.right}return n}const s=e=>{let{containerNodeRect:t,draggingNodeRect:r,transform:n}=e;if(!r||!t){return n}return i(n,r,t)};const l=e=>{let{draggingNodeRect:t,transform:r,scrollableAncestorRects:n}=e;const o=n[0];if(!t||!o){return r}return i(r,t,o)};const c=e=>{let{transform:t}=e;return{...t,x:0}};const d=e=>{let{transform:t,draggingNodeRect:r,windowRect:n}=e;if(!r||!n){return t}return i(t,r,n)};const u=e=>{let{activatorEvent:t,draggingNodeRect:r,transform:n}=e;if(r&&t){const e=getEventCoordinates(t);if(!e){return n}const o=e.x-r.left;const a=e.y-r.top;return{...n,x:n.x+o-r.width/2,y:n.y+a-r.height/2}}return n};//# sourceMappingURL=modifiers.esm.js.map
},45587:function(e,t,r){r.d(t,{Fo:()=>Z,cP:()=>C,is:()=>O,nB:()=>T,qw:()=>_});/* ESM import */var n=r(87363);/* ESM import */var o=/*#__PURE__*/r.n(n);/* ESM import */var a=r(94697);/* ESM import */var i=r(24285);/**
 * Move an array item to a different position. Returns a new array with the item moved to the new position.
 */function s(e,t,r){const n=e.slice();n.splice(r<0?n.length+r:r,0,n.splice(t,1)[0]);return n}/**
 * Swap an array item to a different position. Returns a new array with the item swapped to the new position.
 */function l(e,t,r){const n=e.slice();n[t]=e[r];n[r]=e[t];return n}function c(e,t){return e.reduce((e,r,n)=>{const o=t.get(r);if(o){e[n]=o}return e},Array(e.length))}function d(e){return e!==null&&e>=0}function u(e,t){if(e===t){return true}if(e.length!==t.length){return false}for(let r=0;r<e.length;r++){if(e[r]!==t[r]){return false}}return true}function v(e){if(typeof e==="boolean"){return{draggable:e,droppable:e}}return e}// To-do: We should be calculating scale transformation
const f=/* unused pure expression or super */null&&{scaleX:1,scaleY:1};const p=e=>{var t;let{rects:r,activeNodeRect:n,activeIndex:o,overIndex:a,index:i}=e;const s=(t=r[o])!=null?t:n;if(!s){return null}const l=h(r,i,o);if(i===o){const e=r[a];if(!e){return null}return{x:o<a?e.left+e.width-(s.left+s.width):e.left-s.left,y:0,...f}}if(i>o&&i<=a){return{x:-s.width-l,y:0,...f}}if(i<o&&i>=a){return{x:s.width+l,y:0,...f}}return{x:0,y:0,...f}};function h(e,t,r){const n=e[t];const o=e[t-1];const a=e[t+1];if(!n||!o&&!a){return 0}if(r<t){return o?n.left-(o.left+o.width):a.left-(n.left+n.width)}return a?a.left-(n.left+n.width):n.left-(o.left+o.width)}const g=e=>{let{rects:t,activeIndex:r,overIndex:n,index:o}=e;const a=s(t,n,r);const i=t[o];const l=a[o];if(!l||!i){return null}return{x:l.left-i.left,y:l.top-i.top,scaleX:l.width/i.width,scaleY:l.height/i.height}};const m=e=>{let{activeIndex:t,index:r,rects:n,overIndex:o}=e;let a;let i;if(r===t){a=n[r];i=n[o]}if(r===o){a=n[r];i=n[t]}if(!i||!a){return null}return{x:i.left-a.left,y:i.top-a.top,scaleX:i.width/a.width,scaleY:i.height/a.height}};// To-do: We should be calculating scale transformation
const b={scaleX:1,scaleY:1};const _=e=>{var t;let{activeIndex:r,activeNodeRect:n,index:o,rects:a,overIndex:i}=e;const s=(t=a[r])!=null?t:n;if(!s){return null}if(o===r){const e=a[i];if(!e){return null}return{x:0,y:r<i?e.top+e.height-(s.top+s.height):e.top-s.top,...b}}const l=y(a,o,r);if(o>r&&o<=i){return{x:0,y:-s.height-l,...b}}if(o<r&&o>=i){return{x:0,y:s.height+l,...b}}return{x:0,y:0,...b}};function y(e,t,r){const n=e[t];const o=e[t-1];const a=e[t+1];if(!n){return 0}if(r<t){return o?n.top-(o.top+o.height):a?a.top-(n.top+n.height):0}return a?a.top-(n.top+n.height):o?n.top-(o.top+o.height):0}const w="Sortable";const x=/*#__PURE__*/o().createContext({activeIndex:-1,containerId:w,disableTransforms:false,items:[],overIndex:-1,useDragOverlay:false,sortedRects:[],strategy:g,disabled:{draggable:false,droppable:false}});function Z(e){let{children:t,id:r,items:s,strategy:l=g,disabled:d=false}=e;const{active:f,dragOverlay:p,droppableRects:h,over:m,measureDroppableContainers:b}=(0,a/* .useDndContext */.Cj)();const _=(0,i/* .useUniqueId */.Ld)(w,r);const y=Boolean(p.rect!==null);const Z=(0,n.useMemo)(()=>s.map(e=>typeof e==="object"&&"id"in e?e.id:e),[s]);const k=f!=null;const C=f?Z.indexOf(f.id):-1;const D=m?Z.indexOf(m.id):-1;const E=(0,n.useRef)(Z);const S=!u(Z,E.current);const W=D!==-1&&C===-1||S;const M=v(d);(0,i/* .useIsomorphicLayoutEffect */.LI)(()=>{if(S&&k){b(Z)}},[S,Z,k,b]);(0,n.useEffect)(()=>{E.current=Z},[Z]);const T=(0,n.useMemo)(()=>({activeIndex:C,containerId:_,disabled:M,disableTransforms:W,items:Z,overIndex:D,useDragOverlay:y,sortedRects:c(Z,h),strategy:l}),[C,_,M.draggable,M.droppable,W,Z,D,h,y,l]);return o().createElement(x.Provider,{value:T},t)}const k=e=>{let{id:t,items:r,activeIndex:n,overIndex:o}=e;return s(r,n,o).indexOf(t)};const C=e=>{let{containerId:t,isSorting:r,wasDragging:n,index:o,items:a,newIndex:i,previousItems:s,previousContainerId:l,transition:c}=e;if(!c||!n){return false}if(s!==a&&o===i){return false}if(r){return true}return i!==o&&t===l};const D={duration:200,easing:"ease"};const E="transform";const S=/*#__PURE__*/i/* .CSS.Transition.toString */.ux.Transition.toString({property:E,duration:0,easing:"linear"});const W={roleDescription:"sortable"};/*
 * When the index of an item changes while sorting,
 * we need to temporarily disable the transforms
 */function M(e){let{disabled:t,index:r,node:o,rect:s}=e;const[l,c]=(0,n.useState)(null);const d=(0,n.useRef)(r);(0,i/* .useIsomorphicLayoutEffect */.LI)(()=>{if(!t&&r!==d.current&&o.current){const e=s.current;if(e){const t=(0,a/* .getClientRect */.VK)(o.current,{ignoreTransform:true});const r={x:e.left-t.left,y:e.top-t.top,scaleX:e.width/t.width,scaleY:e.height/t.height};if(r.x||r.y){c(r)}}}if(r!==d.current){d.current=r}},[t,r,o,s]);(0,n.useEffect)(()=>{if(l){c(null)}},[l]);return l}function T(e){let{animateLayoutChanges:t=C,attributes:r,disabled:o,data:s,getNewIndex:l=k,id:c,strategy:u,resizeObserverConfig:v,transition:f=D}=e;const{items:p,containerId:h,activeIndex:g,disabled:m,disableTransforms:b,sortedRects:_,overIndex:y,useDragOverlay:w,strategy:Z}=(0,n.useContext)(x);const T=B(o,m);const I=p.indexOf(c);const N=(0,n.useMemo)(()=>({sortable:{containerId:h,index:I,items:p},...s}),[h,s,I,p]);const O=(0,n.useMemo)(()=>p.slice(p.indexOf(c)),[p,c]);const{rect:A,node:L,isOver:J,setNodeRef:P}=(0,a/* .useDroppable */.Zj)({id:c,data:N,disabled:T.droppable,resizeObserverConfig:{updateMeasurementsFor:O,...v}});const{active:R,activatorEvent:U,activeNodeRect:z,attributes:j,setNodeRef:X,listeners:F,isDragging:Y,over:Q,setActivatorNodeRef:q,transform:H}=(0,a/* .useDraggable */.O1)({id:c,data:N,attributes:{...W,...r},disabled:T.draggable});const V=(0,i/* .useCombinedRefs */.HB)(P,X);const G=Boolean(R);const K=G&&!b&&d(g)&&d(y);const $=!w&&Y;const ee=$&&K?H:null;const et=u!=null?u:Z;const er=K?ee!=null?ee:et({rects:_,activeNodeRect:z,activeIndex:g,overIndex:y,index:I}):null;const en=d(g)&&d(y)?l({id:c,items:p,activeIndex:g,overIndex:y}):I;const eo=R==null?void 0:R.id;const ea=(0,n.useRef)({activeId:eo,items:p,newIndex:en,containerId:h});const ei=p!==ea.current.items;const es=t({active:R,containerId:h,isDragging:Y,isSorting:G,id:c,index:I,items:p,newIndex:ea.current.newIndex,previousItems:ea.current.items,previousContainerId:ea.current.containerId,transition:f,wasDragging:ea.current.activeId!=null});const el=M({disabled:!es,index:I,node:L,rect:A});(0,n.useEffect)(()=>{if(G&&ea.current.newIndex!==en){ea.current.newIndex=en}if(h!==ea.current.containerId){ea.current.containerId=h}if(p!==ea.current.items){ea.current.items=p}},[G,en,h,p]);(0,n.useEffect)(()=>{if(eo===ea.current.activeId){return}if(eo!=null&&ea.current.activeId==null){ea.current.activeId=eo;return}const e=setTimeout(()=>{ea.current.activeId=eo},50);return()=>clearTimeout(e)},[eo]);return{active:R,activeIndex:g,attributes:j,data:N,rect:A,index:I,newIndex:en,items:p,isOver:J,isSorting:G,isDragging:Y,listeners:F,node:L,overIndex:y,over:Q,setNodeRef:V,setActivatorNodeRef:q,setDroppableNodeRef:P,setDraggableNodeRef:X,transform:el!=null?el:er,transition:ec()};function ec(){if(el||// Or to prevent items jumping to back to their "new" position when items change
ei&&ea.current.newIndex===I){return S}if($&&!(0,i/* .isKeyboardEvent */.vd)(U)||!f){return undefined}if(G||es){return i/* .CSS.Transition.toString */.ux.Transition.toString({...f,property:E})}return undefined}}function B(e,t){var r,n;if(typeof e==="boolean"){return{draggable:e,// Backwards compatibility
droppable:false}}return{draggable:(r=e==null?void 0:e.draggable)!=null?r:t.draggable,droppable:(n=e==null?void 0:e.droppable)!=null?n:t.droppable}}function I(e){if(!e){return false}const t=e.data.current;if(t&&"sortable"in t&&typeof t.sortable==="object"&&"containerId"in t.sortable&&"items"in t.sortable&&"index"in t.sortable){return true}return false}const N=[a/* .KeyboardCode.Down */.g4.Down,a/* .KeyboardCode.Right */.g4.Right,a/* .KeyboardCode.Up */.g4.Up,a/* .KeyboardCode.Left */.g4.Left];const O=(e,t)=>{let{context:{active:r,collisionRect:n,droppableRects:o,droppableContainers:s,over:l,scrollableAncestors:c}}=t;if(N.includes(e.code)){e.preventDefault();if(!r||!n){return}const t=[];s.getEnabled().forEach(r=>{if(!r||r!=null&&r.disabled){return}const i=o.get(r.id);if(!i){return}switch(e.code){case a/* .KeyboardCode.Down */.g4.Down:if(n.top<i.top){t.push(r)}break;case a/* .KeyboardCode.Up */.g4.Up:if(n.top>i.top){t.push(r)}break;case a/* .KeyboardCode.Left */.g4.Left:if(n.left>i.left){t.push(r)}break;case a/* .KeyboardCode.Right */.g4.Right:if(n.left<i.left){t.push(r)}break}});const d=(0,a/* .closestCorners */.ey)({active:r,collisionRect:n,droppableRects:o,droppableContainers:t,pointerCoordinates:null});let u=(0,a/* .getFirstCollision */._8)(d,"id");if(u===(l==null?void 0:l.id)&&d.length>1){u=d[1].id}if(u!=null){const e=s.get(r.id);const t=s.get(u);const l=t?o.get(t.id):null;const d=t==null?void 0:t.node.current;if(d&&l&&e&&t){const r=(0,a/* .getScrollableAncestors */.hI)(d);const o=r.some((e,t)=>c[t]!==e);const s=A(e,t);const u=L(e,t);const v=o||!s?{x:0,y:0}:{x:u?n.width-l.width:0,y:u?n.height-l.height:0};const f={x:l.left,y:l.top};const p=v.x&&v.y?f:(0,i/* .subtract */.$X)(f,v);return p}}}return undefined};function A(e,t){if(!I(e)||!I(t)){return false}return e.data.current.sortable.containerId===t.data.current.sortable.containerId}function L(e,t){if(!I(e)||!I(t)){return false}if(!A(e,t)){return false}return e.data.current.sortable.index<t.data.current.sortable.index}//# sourceMappingURL=sortable.esm.js.map
},24285:function(e,t,r){r.d(t,{$X:()=>C,D9:()=>y,DC:()=>W,Ey:()=>m,FJ:()=>s,Gj:()=>b,HB:()=>a,IH:()=>k,Jj:()=>c,LI:()=>p,Ld:()=>x,Nq:()=>i,Re:()=>u,UG:()=>l,Yz:()=>g,qk:()=>d,r3:()=>f,so:()=>B,ux:()=>M,vZ:()=>v,vd:()=>E,wm:()=>_,zX:()=>h});/* ESM import */var n=r(87363);/* ESM import */var o=/*#__PURE__*/r.n(n);function a(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++){t[r]=arguments[r]}return(0,n.useMemo)(()=>e=>{t.forEach(t=>t(e))},t)}// https://github.com/facebook/react/blob/master/packages/shared/ExecutionEnvironment.js
const i=typeof window!=="undefined"&&typeof window.document!=="undefined"&&typeof window.document.createElement!=="undefined";function s(e){const t=Object.prototype.toString.call(e);return t==="[object Window]"||// In Electron context the Window object serializes to [object global]
t==="[object global]"}function l(e){return"nodeType"in e}function c(e){var t,r;if(!e){return window}if(s(e)){return e}if(!l(e)){return window}return(t=(r=e.ownerDocument)==null?void 0:r.defaultView)!=null?t:window}function d(e){const{Document:t}=c(e);return e instanceof t}function u(e){if(s(e)){return false}return e instanceof c(e).HTMLElement}function v(e){return e instanceof c(e).SVGElement}function f(e){if(!e){return document}if(s(e)){return e.document}if(!l(e)){return document}if(d(e)){return e}if(u(e)||v(e)){return e.ownerDocument}return document}/**
 * A hook that resolves to useEffect on the server and useLayoutEffect on the client
 * @param callback {function} Callback function that is invoked when the dependencies of the hook change
 */const p=i?n.useLayoutEffect:n.useEffect;function h(e){const t=(0,n.useRef)(e);p(()=>{t.current=e});return(0,n.useCallback)(function(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++){r[n]=arguments[n]}return t.current==null?void 0:t.current(...r)},[])}function g(){const e=(0,n.useRef)(null);const t=(0,n.useCallback)((t,r)=>{e.current=setInterval(t,r)},[]);const r=(0,n.useCallback)(()=>{if(e.current!==null){clearInterval(e.current);e.current=null}},[]);return[t,r]}function m(e,t){if(t===void 0){t=[e]}const r=(0,n.useRef)(e);p(()=>{if(r.current!==e){r.current=e}},t);return r}function b(e,t){const r=(0,n.useRef)();return(0,n.useMemo)(()=>{const t=e(r.current);r.current=t;return t},[...t])}function _(e){const t=h(e);const r=(0,n.useRef)(null);const o=(0,n.useCallback)(e=>{if(e!==r.current){t==null?void 0:t(e,r.current)}r.current=e},[]);return[r,o]}function y(e){const t=(0,n.useRef)();(0,n.useEffect)(()=>{t.current=e},[e]);return t.current}let w={};function x(e,t){return(0,n.useMemo)(()=>{if(t){return t}const r=w[e]==null?0:w[e]+1;w[e]=r;return e+"-"+r},[e,t])}function Z(e){return function(t){for(var r=arguments.length,n=new Array(r>1?r-1:0),o=1;o<r;o++){n[o-1]=arguments[o]}return n.reduce((t,r)=>{const n=Object.entries(r);for(const[r,o]of n){const n=t[r];if(n!=null){t[r]=n+e*o}}return t},{...t})}}const k=/*#__PURE__*/Z(1);const C=/*#__PURE__*/Z(-1);function D(e){return"clientX"in e&&"clientY"in e}function E(e){if(!e){return false}const{KeyboardEvent:t}=c(e.target);return t&&e instanceof t}function S(e){if(!e){return false}const{TouchEvent:t}=c(e.target);return t&&e instanceof t}/**
 * Returns the normalized x and y coordinates for mouse and touch events.
 */function W(e){if(S(e)){if(e.touches&&e.touches.length){const{clientX:t,clientY:r}=e.touches[0];return{x:t,y:r}}else if(e.changedTouches&&e.changedTouches.length){const{clientX:t,clientY:r}=e.changedTouches[0];return{x:t,y:r}}}if(D(e)){return{x:e.clientX,y:e.clientY}}return null}const M=/*#__PURE__*/Object.freeze({Translate:{toString(e){if(!e){return}const{x:t,y:r}=e;return"translate3d("+(t?Math.round(t):0)+"px, "+(r?Math.round(r):0)+"px, 0)"}},Scale:{toString(e){if(!e){return}const{scaleX:t,scaleY:r}=e;return"scaleX("+t+") scaleY("+r+")"}},Transform:{toString(e){if(!e){return}return[M.Translate.toString(e),M.Scale.toString(e)].join(" ")}},Transition:{toString(e){let{property:t,duration:r,easing:n}=e;return t+" "+r+"ms "+n}}});const T="a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]";function B(e){if(e.matches(T)){return e}return e.querySelector(T)}//# sourceMappingURL=utilities.esm.js.map
},58574:function(e,t,r){r.d(t,{Z:()=>l});/* ESM import */var n=r(8081);/* ESM import */var o=/*#__PURE__*/r.n(n);/* ESM import */var a=r(23645);/* ESM import */var i=/*#__PURE__*/r.n(a);// Imports
var s=i()(o());// Module
s.push([e.id,`/* Variables declaration */
/* prettier-ignore */
.rdp-root {
  --rdp-accent-color: blue; /* The accent color used for selected days and UI elements. */
  --rdp-accent-background-color: #f0f0ff; /* The accent background color used for selected days and UI elements. */

  --rdp-day-height: 44px; /* The height of the day cells. */
  --rdp-day-width: 44px; /* The width of the day cells. */
  
  --rdp-day_button-border-radius: 100%; /* The border radius of the day cells. */
  --rdp-day_button-border: 2px solid transparent; /* The border of the day cells. */
  --rdp-day_button-height: 42px; /* The height of the day cells. */
  --rdp-day_button-width: 42px; /* The width of the day cells. */
  
  --rdp-selected-border: 2px solid var(--rdp-accent-color); /* The border of the selected days. */
  --rdp-disabled-opacity: 0.5; /* The opacity of the disabled days. */
  --rdp-outside-opacity: 0.75; /* The opacity of the days outside the current month. */
  --rdp-today-color: var(--rdp-accent-color); /* The color of the today's date. */
  
  --rdp-dropdown-gap: 0.5rem;/* The gap between the dropdowns used in the month captons. */
  
  --rdp-months-gap: 2rem; /* The gap between the months in the multi-month view. */
  
  --rdp-nav_button-disabled-opacity: 0.5; /* The opacity of the disabled navigation buttons. */
  --rdp-nav_button-height: 2.25rem; /* The height of the navigation buttons. */
  --rdp-nav_button-width: 2.25rem; /* The width of the navigation buttons. */
  --rdp-nav-height: 2.75rem; /* The height of the navigation bar. */
  
  --rdp-range_middle-background-color: var(--rdp-accent-background-color); /* The color of the background for days in the middle of a range. */
  --rdp-range_middle-color: inherit;/* The color of the range text. */
  
  --rdp-range_start-color: white; /* The color of the range text. */
  --rdp-range_start-background: linear-gradient(var(--rdp-gradient-direction), transparent 50%, var(--rdp-range_middle-background-color) 50%); /* Used for the background of the start of the selected range. */
  --rdp-range_start-date-background-color: var(--rdp-accent-color); /* The background color of the date when at the start of the selected range. */
  
  --rdp-range_end-background: linear-gradient(var(--rdp-gradient-direction), var(--rdp-range_middle-background-color) 50%, transparent 50%); /* Used for the background of the end of the selected range. */
  --rdp-range_end-color: white;/* The color of the range text. */
  --rdp-range_end-date-background-color: var(--rdp-accent-color); /* The background color of the date when at the end of the selected range. */
  
  --rdp-week_number-border-radius: 100%; /* The border radius of the week number. */
  --rdp-week_number-border: 2px solid transparent; /* The border of the week number. */
  
  --rdp-week_number-height: var(--rdp-day-height); /* The height of the week number cells. */
  --rdp-week_number-opacity: 0.75; /* The opacity of the week number. */
  --rdp-week_number-width: var(--rdp-day-width); /* The width of the week number cells. */
  --rdp-weeknumber-text-align: center; /* The text alignment of the weekday cells. */

  --rdp-weekday-opacity: 0.75; /* The opacity of the weekday. */
  --rdp-weekday-padding: 0.5rem 0rem; /* The padding of the weekday. */
  --rdp-weekday-text-align: center; /* The text alignment of the weekday cells. */

  --rdp-gradient-direction: 90deg;

  --rdp-animation_duration: 0.3s;
  --rdp-animation_timing: cubic-bezier(0.4, 0, 0.2, 1);
}

.rdp-root[dir="rtl"] {
  --rdp-gradient-direction: -90deg;
}

.rdp-root[data-broadcast-calendar="true"] {
  --rdp-outside-opacity: unset;
}

/* Root of the component. */
.rdp-root {
  position: relative; /* Required to position the navigation toolbar. */
  box-sizing: border-box;
}

.rdp-root * {
  box-sizing: border-box;
}

.rdp-day {
  width: var(--rdp-day-width);
  height: var(--rdp-day-height);
  text-align: center;
}

.rdp-day_button {
  background: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
  font: inherit;
  color: inherit;
  justify-content: center;
  align-items: center;
  display: flex;

  width: var(--rdp-day_button-width);
  height: var(--rdp-day_button-height);
  border: var(--rdp-day_button-border);
  border-radius: var(--rdp-day_button-border-radius);
}

.rdp-day_button:disabled {
  cursor: revert;
}

.rdp-caption_label {
  z-index: 1;

  position: relative;
  display: inline-flex;
  align-items: center;

  white-space: nowrap;
  border: 0;
}

.rdp-dropdown:focus-visible ~ .rdp-caption_label {
  outline: 5px auto Highlight;
  outline: 5px auto -webkit-focus-ring-color;
}

.rdp-button_next,
.rdp-button_previous {
  border: none;
  background: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
  font: inherit;
  color: inherit;
  -moz-appearance: none;
  -webkit-appearance: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  appearance: none;

  width: var(--rdp-nav_button-width);
  height: var(--rdp-nav_button-height);
}

.rdp-button_next:disabled,
.rdp-button_next[aria-disabled="true"],
.rdp-button_previous:disabled,
.rdp-button_previous[aria-disabled="true"] {
  cursor: revert;

  opacity: var(--rdp-nav_button-disabled-opacity);
}

.rdp-chevron {
  display: inline-block;
  fill: var(--rdp-accent-color);
}

.rdp-root[dir="rtl"] .rdp-nav .rdp-chevron {
  transform: rotate(180deg);
  transform-origin: 50%;
}

.rdp-dropdowns {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: var(--rdp-dropdown-gap);
}
.rdp-dropdown {
  z-index: 2;

  /* Reset */
  opacity: 0;
  appearance: none;
  position: absolute;
  inset-block-start: 0;
  inset-block-end: 0;
  inset-inline-start: 0;
  width: 100%;
  margin: 0;
  padding: 0;
  cursor: inherit;
  border: none;
  line-height: inherit;
}

.rdp-dropdown_root {
  position: relative;
  display: inline-flex;
  align-items: center;
}

.rdp-dropdown_root[data-disabled="true"] .rdp-chevron {
  opacity: var(--rdp-disabled-opacity);
}

.rdp-month_caption {
  display: flex;
  align-content: center;
  height: var(--rdp-nav-height);
  font-weight: bold;
  font-size: large;
}

.rdp-root[data-nav-layout="around"] .rdp-month,
.rdp-root[data-nav-layout="after"] .rdp-month {
  position: relative;
}

.rdp-root[data-nav-layout="around"] .rdp-month_caption {
  justify-content: center;
  margin-inline-start: var(--rdp-nav_button-width);
  margin-inline-end: var(--rdp-nav_button-width);
  position: relative;
}

.rdp-root[data-nav-layout="around"] .rdp-button_previous {
  position: absolute;
  inset-inline-start: 0;
  top: 0;
  height: var(--rdp-nav-height);
  display: inline-flex;
}

.rdp-root[data-nav-layout="around"] .rdp-button_next {
  position: absolute;
  inset-inline-end: 0;
  top: 0;
  height: var(--rdp-nav-height);
  display: inline-flex;
  justify-content: center;
}

.rdp-months {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  gap: var(--rdp-months-gap);
  max-width: fit-content;
}

.rdp-month_grid {
  border-collapse: collapse;
}

.rdp-nav {
  position: absolute;
  inset-block-start: 0;
  inset-inline-end: 0;

  display: flex;
  align-items: center;

  height: var(--rdp-nav-height);
}

.rdp-weekday {
  opacity: var(--rdp-weekday-opacity);
  padding: var(--rdp-weekday-padding);
  font-weight: 500;
  font-size: smaller;
  text-align: var(--rdp-weekday-text-align);
  text-transform: var(--rdp-weekday-text-transform);
}

.rdp-week_number {
  opacity: var(--rdp-week_number-opacity);
  font-weight: 400;
  font-size: small;
  height: var(--rdp-week_number-height);
  width: var(--rdp-week_number-width);
  border: var(--rdp-week_number-border);
  border-radius: var(--rdp-week_number-border-radius);
  text-align: var(--rdp-weeknumber-text-align);
}

/* DAY MODIFIERS */
.rdp-today:not(.rdp-outside) {
  color: var(--rdp-today-color);
}

.rdp-selected {
  font-weight: bold;
  font-size: large;
}

.rdp-selected .rdp-day_button {
  border: var(--rdp-selected-border);
}

.rdp-outside {
  opacity: var(--rdp-outside-opacity);
}

.rdp-disabled {
  opacity: var(--rdp-disabled-opacity);
}

.rdp-hidden {
  visibility: hidden;
  color: var(--rdp-range_start-color);
}

.rdp-range_start {
  background: var(--rdp-range_start-background);
}

.rdp-range_start .rdp-day_button {
  background-color: var(--rdp-range_start-date-background-color);
  color: var(--rdp-range_start-color);
}

.rdp-range_middle {
  background-color: var(--rdp-range_middle-background-color);
}

.rdp-range_middle .rdp-day_button {
  border-color: transparent;
  border: unset;
  border-radius: unset;
  color: var(--rdp-range_middle-color);
}

.rdp-range_end {
  background: var(--rdp-range_end-background);
  color: var(--rdp-range_end-color);
}

.rdp-range_end .rdp-day_button {
  color: var(--rdp-range_start-color);
  background-color: var(--rdp-range_end-date-background-color);
}

.rdp-range_start.rdp-range_end {
  background: revert;
}

.rdp-focusable {
  cursor: pointer;
}

@keyframes rdp-slide_in_left {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0);
  }
}

@keyframes rdp-slide_in_right {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0);
  }
}

@keyframes rdp-slide_out_left {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
}

@keyframes rdp-slide_out_right {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(100%);
  }
}

.rdp-weeks_before_enter {
  animation: rdp-slide_in_left var(--rdp-animation_duration)
    var(--rdp-animation_timing) forwards;
}

.rdp-weeks_before_exit {
  animation: rdp-slide_out_left var(--rdp-animation_duration)
    var(--rdp-animation_timing) forwards;
}

.rdp-weeks_after_enter {
  animation: rdp-slide_in_right var(--rdp-animation_duration)
    var(--rdp-animation_timing) forwards;
}

.rdp-weeks_after_exit {
  animation: rdp-slide_out_right var(--rdp-animation_duration)
    var(--rdp-animation_timing) forwards;
}

.rdp-root[dir="rtl"] .rdp-weeks_after_enter {
  animation: rdp-slide_in_left var(--rdp-animation_duration)
    var(--rdp-animation_timing) forwards;
}

.rdp-root[dir="rtl"] .rdp-weeks_before_exit {
  animation: rdp-slide_out_right var(--rdp-animation_duration)
    var(--rdp-animation_timing) forwards;
}

.rdp-root[dir="rtl"] .rdp-weeks_before_enter {
  animation: rdp-slide_in_right var(--rdp-animation_duration)
    var(--rdp-animation_timing) forwards;
}

.rdp-root[dir="rtl"] .rdp-weeks_after_exit {
  animation: rdp-slide_out_left var(--rdp-animation_duration)
    var(--rdp-animation_timing) forwards;
}

@keyframes rdp-fade_in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes rdp-fade_out {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}

.rdp-caption_after_enter {
  animation: rdp-fade_in var(--rdp-animation_duration)
    var(--rdp-animation_timing) forwards;
}

.rdp-caption_after_exit {
  animation: rdp-fade_out var(--rdp-animation_duration)
    var(--rdp-animation_timing) forwards;
}

.rdp-caption_before_enter {
  animation: rdp-fade_in var(--rdp-animation_duration)
    var(--rdp-animation_timing) forwards;
}

.rdp-caption_before_exit {
  animation: rdp-fade_out var(--rdp-animation_duration)
    var(--rdp-animation_timing) forwards;
}
`,""]);// Exports
/* ESM default export */const l=s},23645:function(e){/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/e.exports=function(e){var t=[];// return the list of modules as css string
t.toString=function t(){return this.map(function(t){var r="";var n=typeof t[5]!=="undefined";if(t[4]){r+="@supports (".concat(t[4],") {")}if(t[2]){r+="@media ".concat(t[2]," {")}if(n){r+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")}r+=e(t);if(n){r+="}"}if(t[2]){r+="}"}if(t[4]){r+="}"}return r}).join("")};// import a list of modules into the list
t.i=function e(e,r,n,o,a){if(typeof e==="string"){e=[[null,e,undefined]]}var i={};if(n){for(var s=0;s<this.length;s++){var l=this[s][0];if(l!=null){i[l]=true}}}for(var c=0;c<e.length;c++){var d=[].concat(e[c]);if(n&&i[d[0]]){continue}if(typeof a!=="undefined"){if(typeof d[5]==="undefined"){d[5]=a}else{d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}");d[5]=a}}if(r){if(!d[2]){d[2]=r}else{d[1]="@media ".concat(d[2]," {").concat(d[1],"}");d[2]=r}}if(o){if(!d[4]){d[4]="".concat(o)}else{d[1]="@supports (".concat(d[4],") {").concat(d[1],"}");d[4]=o}}t.push(d)}};return t}},8081:function(e){e.exports=function(e){return e[1]}},47041:function(e,t,r){r.d(t,{Z:()=>s});/* ESM import */var n=r(58545);/* ESM import */var o=r(19013);/* ESM import */var a=r(18717);/* ESM import */var i=r(13882);/**
 * @name eachMinuteOfInterval
 * @category Interval Helpers
 * @summary Return the array of minutes within the specified time interval.
 *
 * @description
 * Returns the array of minutes within the specified time interval.
 *
 * @param {Interval} interval - the interval. See [Interval]{@link https://date-fns.org/docs/Interval}
 * @param {Object} [options] - an object with options.
 * @param {Number} [options.step=1] - the step to increment by. The step must be equal to or greater than 1
 * @throws {TypeError} 1 argument required
 * @returns {Date[]} the array with starts of minutes from the minute of the interval start to the minute of the interval end
 * @throws {RangeError} `options.step` must be a number equal to or greater than 1
 * @throws {RangeError} The start of an interval cannot be after its end
 * @throws {RangeError} Date in interval cannot be `Invalid Date`
 *
 * @example
 * // Each minute between 14 October 2020, 13:00 and 14 October 2020, 13:03
 * const result = eachMinuteOfInterval({
 *   start: new Date(2014, 9, 14, 13),
 *   end: new Date(2014, 9, 14, 13, 3)
 * })
 * //=> [
 * //   Wed Oct 14 2014 13:00:00,
 * //   Wed Oct 14 2014 13:01:00,
 * //   Wed Oct 14 2014 13:02:00,
 * //   Wed Oct 14 2014 13:03:00
 * // ]
 */function s(e,t){var r;(0,i/* ["default"] */.Z)(1,arguments);var s=(0,a/* ["default"] */.Z)((0,o["default"])(e.start));var l=(0,o["default"])(e.end);var c=s.getTime();var d=l.getTime();if(c>=d){throw new RangeError("Invalid interval")}var u=[];var v=s;var f=Number((r=t===null||t===void 0?void 0:t.step)!==null&&r!==void 0?r:1);if(f<1||isNaN(f))throw new RangeError("`options.step` must be a number equal to or greater than 1");while(v.getTime()<=d){u.push((0,o["default"])(v));v=(0,n["default"])(v,f)}return u}},37042:function(e,t,r){r.r(t);r.d(t,{"default":()=>i});/* ESM import */var n=r(83946);/* ESM import */var o=r(19013);/* ESM import */var a=r(13882);/**
 * @name setHours
 * @category Hour Helpers
 * @summary Set the hours to the given date.
 *
 * @description
 * Set the hours to the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} hours - the hours of the new date
 * @returns {Date} the new date with the hours set
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Set 4 hours to 1 September 2014 11:30:00:
 * const result = setHours(new Date(2014, 8, 1, 11, 30), 4)
 * //=> Mon Sep 01 2014 04:30:00
 */function i(e,t){(0,a/* ["default"] */.Z)(2,arguments);var r=(0,o["default"])(e);var i=(0,n/* ["default"] */.Z)(t);r.setHours(i);return r}},4543:function(e,t,r){r.r(t);r.d(t,{"default":()=>i});/* ESM import */var n=r(83946);/* ESM import */var o=r(19013);/* ESM import */var a=r(13882);/**
 * @name setMinutes
 * @category Minute Helpers
 * @summary Set the minutes to the given date.
 *
 * @description
 * Set the minutes to the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} minutes - the minutes of the new date
 * @returns {Date} the new date with the minutes set
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Set 45 minutes to 1 September 2014 11:30:40:
 * const result = setMinutes(new Date(2014, 8, 1, 11, 30, 40), 45)
 * //=> Mon Sep 01 2014 11:45:40
 */function i(e,t){(0,a/* ["default"] */.Z)(2,arguments);var r=(0,o["default"])(e);var i=(0,n/* ["default"] */.Z)(t);r.setMinutes(i);return r}},18717:function(e,t,r){r.d(t,{Z:()=>a});/* ESM import */var n=r(19013);/* ESM import */var o=r(13882);/**
 * @name startOfMinute
 * @category Minute Helpers
 * @summary Return the start of a minute for the given date.
 *
 * @description
 * Return the start of a minute for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the start of a minute
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The start of a minute for 1 December 2014 22:15:45.400:
 * const result = startOfMinute(new Date(2014, 11, 1, 22, 15, 45, 400))
 * //=> Mon Dec 01 2014 22:15:00
 */function a(e){(0,o/* ["default"] */.Z)(1,arguments);var t=(0,n["default"])(e);t.setSeconds(0,0);return t}},70165:function(e,t,r){/* ESM import */var n=r(93379);/* ESM import */var o=/*#__PURE__*/r.n(n);/* ESM import */var a=r(7795);/* ESM import */var i=/*#__PURE__*/r.n(a);/* ESM import */var s=r(90569);/* ESM import */var l=/*#__PURE__*/r.n(s);/* ESM import */var c=r(3565);/* ESM import */var d=/*#__PURE__*/r.n(c);/* ESM import */var u=r(19216);/* ESM import */var v=/*#__PURE__*/r.n(u);/* ESM import */var f=r(44589);/* ESM import */var p=/*#__PURE__*/r.n(f);/* ESM import */var h=r(58574);var g={};g.styleTagTransform=p();g.setAttributes=d();g.insert=l().bind(null,"head");g.domAPI=i();g.insertStyleElement=v();var m=o()(h/* ["default"] */.Z,g);/* unused ESM default export */var b=h/* ["default"] */.Z&&h/* ["default"].locals */.Z.locals?h/* ["default"].locals */.Z.locals:undefined},93379:function(e){var t=[];function r(e){var r=-1;for(var n=0;n<t.length;n++){if(t[n].identifier===e){r=n;break}}return r}function n(e,n){var a={};var i=[];for(var s=0;s<e.length;s++){var l=e[s];var c=n.base?l[0]+n.base:l[0];var d=a[c]||0;var u="".concat(c," ").concat(d);a[c]=d+1;var v=r(u);var f={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(v!==-1){t[v].references++;t[v].updater(f)}else{var p=o(f,n);n.byIndex=s;t.splice(s,0,{identifier:u,updater:p,references:1})}i.push(u)}return i}function o(e,t){var r=t.domAPI(t);r.update(e);var n=function t(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer){return}r.update(e=t)}else{r.remove()}};return n}e.exports=function(e,o){o=o||{};e=e||[];var a=n(e,o);return function e(e){e=e||[];for(var i=0;i<a.length;i++){var s=a[i];var l=r(s);t[l].references--}var c=n(e,o);for(var d=0;d<a.length;d++){var u=a[d];var v=r(u);if(t[v].references===0){t[v].updater();t.splice(v,1)}}a=c}}},90569:function(e){var t={};/* istanbul ignore next  */function r(e){if(typeof t[e]==="undefined"){var r=document.querySelector(e);// Special case to return head of iframe instead of iframe itself
if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement){try{// This will throw an exception if access to iframe is blocked
// due to cross-origin restrictions
r=r.contentDocument.head}catch(e){// istanbul ignore next
r=null}}t[e]=r}return t[e]}/* istanbul ignore next  */function n(e,t){var n=r(e);if(!n){throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.")}n.appendChild(t)}e.exports=n},19216:function(e){/* istanbul ignore next  */function t(e){var t=document.createElement("style");e.setAttributes(t,e.attributes);e.insert(t,e.options);return t}e.exports=t},3565:function(e,t,r){/* istanbul ignore next  */function n(e){var t=true?r.nc:0;if(t){e.setAttribute("nonce",t)}}e.exports=n},7795:function(e){/* istanbul ignore next  */function t(e,t,r){var n="";if(r.supports){n+="@supports (".concat(r.supports,") {")}if(r.media){n+="@media ".concat(r.media," {")}var o=typeof r.layer!=="undefined";if(o){n+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")}n+=r.css;if(o){n+="}"}if(r.media){n+="}"}if(r.supports){n+="}"}var a=r.sourceMap;if(a&&typeof btoa!=="undefined"){n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")}// For old IE
/* istanbul ignore if  */t.styleTagTransform(n,e,t.options)}function r(e){// istanbul ignore if
if(e.parentNode===null){return false}e.parentNode.removeChild(e)}/* istanbul ignore next  */function n(e){if(typeof document==="undefined"){return{update:function e(){},remove:function e(){}}}var n=e.insertStyleElement(e);return{update:function r(r){t(n,e,r)},remove:function e(){r(n)}}}e.exports=n},44589:function(e){/* istanbul ignore next  */function t(e,t){if(t.styleSheet){t.styleSheet.cssText=e}else{while(t.firstChild){t.removeChild(t.firstChild)}t.appendChild(document.createTextNode(e))}}e.exports=t},56096:function(e,t,r){e.exports=r.p+"js/images/3d-d74232c4.png"},67149:function(e,t,r){e.exports=r.p+"js/images/black-and-white-a1d197c0.png"},41834:function(e,t,r){e.exports=r.p+"js/images/concept-ad427b25.png"},42336:function(e,t,r){e.exports=r.p+"js/images/dreamy-72eab497.png"},79608:function(e,t,r){e.exports=r.p+"js/images/filmic-91db8802.png"},4359:function(e,t,r){e.exports=r.p+"js/images/illustration-19074f05.png"},88013:function(e,t,r){e.exports=r.p+"js/images/neon-bfde2ac7.png"},53192:function(e,t,r){e.exports=r.p+"js/images/none-2088b52b.jpg"},48366:function(e,t,r){e.exports=r.p+"js/images/painting-db63dd8a.png"},39071:function(e,t,r){e.exports=r.p+"js/images/photo-7d69e05e.png"},43666:function(e,t,r){e.exports=r.p+"js/images/retro-bcc8eda3.png"},46572:function(e,t,r){e.exports=r.p+"js/images/sketch-319bbedf.png"},86056:function(e,t,r){e.exports=r.p+"js/images/generate-image-2x-7d387dcf.webp"},95781:function(e,t,r){e.exports=r.p+"js/images/generate-image-3e5f50a6.webp"},19646:function(e,t,r){// EXPORTS
r.d(t,{Z:()=>/* binding */M});// EXTERNAL MODULE: ./node_modules/@swc/helpers/esm/_object_spread.js
var n=r(7409);// EXTERNAL MODULE: ./node_modules/@swc/helpers/esm/_object_spread_props.js
var o=r(99282);// EXTERNAL MODULE: ./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js
var a=r(35944);// EXTERNAL MODULE: ./assets/react/v3/entries/course-builder/contexts/CourseBuilderSlotContext.tsx
var i=r(75537);// EXTERNAL MODULE: ./node_modules/@swc/helpers/esm/_define_property.js
var s=r(27412);// EXTERNAL MODULE: ./assets/react/v3/shared/atoms/Alert.tsx
var l=r(87056);// EXTERNAL MODULE: external "React"
var c=r(87363);// CONCATENATED MODULE: ./assets/react/v3/shared/components/ComponentErrorBoundary.tsx
class d extends c.Component{static getDerivedStateFromError(e){return{hasError:true,error:e}}componentDidCatch(e,t){var r,n;// eslint-disable-next-line no-console
console.error("Error rendering ".concat(this.props.componentName,":"),e,t);(r=(n=this.props).onError)===null||r===void 0?void 0:r.call(n,e,t)}render(){var{children:e,fallback:t,showError:r}=this.props;var{hasError:n,error:o}=this.state;if(n){if(t){return t}return r?/*#__PURE__*/(0,a/* .jsxs */.BX)(l/* ["default"] */.Z,{type:"danger",children:["Error rendering ",this.props.componentName,": ",(o===null||o===void 0?void 0:o.message)||(o===null||o===void 0?void 0:o.toString())]}):null}return e}constructor(...e){super(...e),(0,s._)(this,"state",{hasError:false,error:null})}}(0,s._)(d,"defaultProps",{showError:true,componentName:"Component"});/* ESM default export */const u=d;// CONCATENATED MODULE: ./assets/react/v3/entries/course-builder/components/ContentRenderer.tsx
var v=e=>{var{component:t}=e;return/*#__PURE__*/(0,a/* .jsx */.tZ)(u,{componentName:"content",children:t})};/* ESM default export */const f=v;// EXTERNAL MODULE: ./assets/react/v3/shared/components/fields/FormCheckbox.tsx
var p=r(60274);// EXTERNAL MODULE: ./assets/react/v3/shared/components/fields/FormDateInput.tsx
var h=r(42456);// EXTERNAL MODULE: ./assets/react/v3/shared/components/fields/FormFileUploader.tsx
var g=r(86774);// EXTERNAL MODULE: ./assets/react/v3/shared/components/fields/FormImageInput.tsx
var m=r(44226);// EXTERNAL MODULE: ./assets/react/v3/shared/components/fields/FormInput.tsx
var b=r(78150);// EXTERNAL MODULE: ./assets/react/v3/shared/components/fields/FormRadioGroup.tsx
var _=r(90097);// EXTERNAL MODULE: ./assets/react/v3/shared/components/fields/FormSelectInput.tsx
var y=r(82325);// EXTERNAL MODULE: ./assets/react/v3/shared/components/fields/FormSwitch.tsx
var w=r(92386);// EXTERNAL MODULE: ./assets/react/v3/shared/components/fields/FormTextareaInput.tsx
var x=r(3473);// EXTERNAL MODULE: ./assets/react/v3/shared/components/fields/FormTimeInput.tsx
var Z=r(47778);// EXTERNAL MODULE: ./assets/react/v3/shared/components/fields/FormVideoInput.tsx + 2 modules
var k=r(69789);// EXTERNAL MODULE: ./assets/react/v3/shared/components/fields/FormWPEditor.tsx
var C=r(3960);// EXTERNAL MODULE: ./node_modules/react-hook-form/dist/index.esm.mjs
var D=r(52293);// CONCATENATED MODULE: ./assets/react/v3/entries/course-builder/components/FieldRenderer.tsx
var E=e=>{var{name:t,label:r,buttonText:i,helpText:s,infoText:c,placeholder:d,type:v,options:f,defaultValue:E,rules:S,form:W}=e;// eslint-disable-next-line @typescript-eslint/no-explicit-any
var M=e=>{var D=(()=>{switch(v){case"text":return/*#__PURE__*/(0,a/* .jsx */.tZ)(b/* ["default"] */.Z,(0,o._)((0,n._)({},e),{label:r,placeholder:d,helpText:s}));case"number":return/*#__PURE__*/(0,a/* .jsx */.tZ)(b/* ["default"] */.Z,(0,o._)((0,n._)({},e),{type:"number",label:r,placeholder:d,helpText:s}));case"password":return/*#__PURE__*/(0,a/* .jsx */.tZ)(b/* ["default"] */.Z,(0,o._)((0,n._)({},e),{type:"password",label:r,placeholder:d,helpText:s}));case"textarea":return/*#__PURE__*/(0,a/* .jsx */.tZ)(x/* ["default"] */.Z,(0,o._)((0,n._)({},e),{label:r,placeholder:d,helpText:s}));case"select":return/*#__PURE__*/(0,a/* .jsx */.tZ)(y/* ["default"] */.Z,(0,o._)((0,n._)({},e),{label:r,options:f||[],placeholder:d,helpText:s}));case"radio":return/*#__PURE__*/(0,a/* .jsx */.tZ)(_/* ["default"] */.Z,(0,o._)((0,n._)({},e),{label:r,options:f||[]}));case"checkbox":return/*#__PURE__*/(0,a/* .jsx */.tZ)(p/* ["default"] */.Z,(0,o._)((0,n._)({},e),{label:r}));case"switch":return/*#__PURE__*/(0,a/* .jsx */.tZ)(w/* ["default"] */.Z,(0,o._)((0,n._)({},e),{label:r,helpText:s}));case"date":return/*#__PURE__*/(0,a/* .jsx */.tZ)(h/* ["default"] */.Z,(0,o._)((0,n._)({},e),{label:r,placeholder:d,helpText:s}));case"time":return/*#__PURE__*/(0,a/* .jsx */.tZ)(Z/* ["default"] */.Z,(0,o._)((0,n._)({},e),{label:r,placeholder:d,helpText:s}));case"image":return/*#__PURE__*/(0,a/* .jsx */.tZ)(m/* ["default"] */.Z,(0,o._)((0,n._)({},e),{label:r,buttonText:i,helpText:s,infoText:c}));case"video":return/*#__PURE__*/(0,a/* .jsx */.tZ)(k/* ["default"] */.Z,(0,o._)((0,n._)({},e),{label:r,buttonText:i,helpText:s,infoText:c}));case"uploader":return/*#__PURE__*/(0,a/* .jsx */.tZ)(g/* ["default"] */.Z,(0,o._)((0,n._)({},e),{label:r,buttonText:i,helpText:s}));case"WPEditor":return/*#__PURE__*/(0,a/* .jsx */.tZ)(C/* ["default"] */.Z,(0,o._)((0,n._)({},e),{label:r,placeholder:d,helpText:s}));default:return/*#__PURE__*/(0,a/* .jsxs */.BX)(l/* ["default"] */.Z,{type:"danger",children:["Unsupported field type: ",v]})}})();return/*#__PURE__*/(0,a/* .jsx */.tZ)(u,{componentName:"field ".concat(t),onError:(e,r)=>{// eslint-disable-next-line no-console
console.warn("Field ".concat(t," failed to render:"),{error:e,errorInfo:r})},children:D})};return/*#__PURE__*/(0,a/* .jsx */.tZ)(D/* .Controller */.Qr,{name:t,control:W.control,defaultValue:E!==null&&E!==void 0?E:"",rules:S,render:e=>M(e)})};/* ESM default export */const S=E;// CONCATENATED MODULE: ./assets/react/v3/entries/course-builder/components/CourseBuilderSlot.tsx
var W=e=>{var{section:t,namePrefix:r,form:s}=e;var{fields:l,contents:c}=(0,i/* .useCourseBuilderSlot */.l)();var d=()=>{var e=t.split(".");// eslint-disable-next-line @typescript-eslint/no-explicit-any
var r=l;for(var n of e){if(!r[n])return[];r=r[n]}return Array.isArray(r)?r:[]};var u=()=>{var e=t.split(".");// eslint-disable-next-line @typescript-eslint/no-explicit-any
var r=c;for(var n of e){if(!r[n])return[];r=r[n]}return Array.isArray(r)?r:[]};return/*#__PURE__*/(0,a/* .jsxs */.BX)(a/* .Fragment */.HY,{children:[d().map(e=>/*#__PURE__*/(0,a/* .jsx */.tZ)(S,(0,o._)((0,n._)({form:s},e),{name:r?"".concat(r).concat(e.name):e.name}),e.name)),u().map((e,t)=>{var{component:r}=e;return/*#__PURE__*/(0,a/* .jsx */.tZ)(f,{component:r},t)})]})};/* ESM default export */const M=W},88311:function(e,t,r){r.d(t,{Z:()=>y});/* ESM import */var n=r(7409);/* ESM import */var o=r(99282);/* ESM import */var a=r(35944);/* ESM import */var i=r(20203);/* ESM import */var s=r(89459);/* ESM import */var l=r(19398);/* ESM import */var c=r(26815);/* ESM import */var d=r(74053);/* ESM import */var u=r(60860);/* ESM import */var v=r(17106);/* ESM import */var f=r(93283);/* ESM import */var p=r(70917);/* ESM import */var h=r(38003);/* ESM import */var g=/*#__PURE__*/r.n(h);/* ESM import */var m=r(52293);/* ESM import */var b=r(89250);var _=e=>{var{styleModifier:t}=e;var{steps:r,setSteps:g}=(0,s/* .useCourseNavigator */.O)();var _=(0,b/* .useNavigate */.s0)();var y=(0,f/* .useCurrentPath */.J)(i/* ["default"] */.Z);var x=(0,m/* .useFormContext */.Gc)();var Z=r.findIndex(e=>e.path===y);var k=Math.max(-1,Z-1);var C=Math.min(r.length,Z+1);var D=r[k];var E=r[C];var S=x.watch("post_title");var W=()=>{g(e=>{return e.map((e,t)=>{if(t===Z){return(0,o._)((0,n._)({},e),{isActive:false})}if(t===k){return(0,o._)((0,n._)({},e),{isActive:true})}return e})});_(D.path)};var M=()=>{g(e=>{return e.map((e,t)=>{if(t===Z){return(0,o._)((0,n._)({},e),{isActive:false})}if(t===C){return(0,o._)((0,n._)({},e),{isActive:true})}return e})});_(E.path)};return/*#__PURE__*/(0,a/* .jsxs */.BX)("div",{css:[w.wrapper,t],children:[/*#__PURE__*/(0,a/* .jsx */.tZ)(v/* ["default"] */.Z,{when:Z>0,children:/*#__PURE__*/(0,a/* .jsx */.tZ)(l/* ["default"] */.Z,{variant:"tertiary",iconPosition:"right",size:"small",onClick:W,buttonCss:/*#__PURE__*/(0,p/* .css */.iv)("padding:",u/* .spacing["4"] */.W0["4"],";svg{color:",u/* .colorTokens.icon["default"] */.Jv.icon["default"],";}"),disabled:k<0,children:/*#__PURE__*/(0,a/* .jsx */.tZ)(c/* ["default"] */.Z,{name:!d/* .isRTL */.dZ?"chevronLeft":"chevronRight",height:24,width:24})})}),/*#__PURE__*/(0,a/* .jsx */.tZ)(v/* ["default"] */.Z,{when:Z<r.length-1&&S,children:/*#__PURE__*/(0,a/* .jsx */.tZ)(l/* ["default"] */.Z,{variant:"tertiary",icon:/*#__PURE__*/(0,a/* .jsx */.tZ)(c/* ["default"] */.Z,{name:!d/* .isRTL */.dZ?"chevronRight":"chevronLeft",height:24,width:24}),iconPosition:"right",size:"small",onClick:M,buttonCss:/*#__PURE__*/(0,p/* .css */.iv)("padding:",u/* .spacing["4"] */.W0["4"]," ",u/* .spacing["4"] */.W0["4"]," ",u/* .spacing["4"] */.W0["4"]," ",u/* .spacing["12"] */.W0["12"],";svg{color:",u/* .colorTokens.icon["default"] */.Jv.icon["default"],";}"),disabled:!S||C>=r.length,children:(0,h.__)("Next","tutor")})})]})};/* ESM default export */const y=_;var w={wrapper:/*#__PURE__*/(0,p/* .css */.iv)("width:100%;display:flex;justify-content:end;height:32px;align-items:center;gap:",u/* .spacing["16"] */.W0["16"],";")}},79668:function(e,t,r){// ESM COMPAT FLAG
r.r(t);// EXPORTS
r.d(t,{"default":()=>/* binding */rU});// EXTERNAL MODULE: ./node_modules/@swc/helpers/esm/_async_to_generator.js
var n=r(76150);// EXTERNAL MODULE: ./node_modules/@swc/helpers/esm/_object_spread.js
var o=r(7409);// EXTERNAL MODULE: ./node_modules/@swc/helpers/esm/_object_spread_props.js
var a=r(99282);// EXTERNAL MODULE: ./node_modules/@swc/helpers/esm/_tagged_template_literal.js
var i=r(58865);// EXTERNAL MODULE: ./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js
var s=r(35944);// EXTERNAL MODULE: ./node_modules/@emotion/react/dist/emotion-react.browser.esm.js
var l=r(70917);// EXTERNAL MODULE: ./node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js
var c=r(99469);// EXTERNAL MODULE: ./node_modules/@tanstack/react-query/build/modern/useIsFetching.js
var d=r(33233);// EXTERNAL MODULE: external "wp.i18n"
var u=r(38003);// EXTERNAL MODULE: external "React"
var v=r(87363);// EXTERNAL MODULE: ./node_modules/react-hook-form/dist/index.esm.mjs
var f=r(52293);// EXTERNAL MODULE: ./node_modules/date-fns/esm/format/index.js
var p=r(32449);// EXTERNAL MODULE: ./assets/react/v3/shared/atoms/SVGIcon.tsx
var h=r(26815);// EXTERNAL MODULE: ./node_modules/date-fns/esm/_lib/toInteger/index.js
var g=r(83946);// EXTERNAL MODULE: ./node_modules/date-fns/esm/addMilliseconds/index.js
var m=r(51820);// EXTERNAL MODULE: ./node_modules/date-fns/esm/_lib/requiredArgs/index.js
var b=r(13882);// CONCATENATED MODULE: ./node_modules/date-fns/esm/addHours/index.js
var _=36e5;/**
 * @name addHours
 * @category Hour Helpers
 * @summary Add the specified number of hours to the given date.
 *
 * @description
 * Add the specified number of hours to the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of hours to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the hours added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add 2 hours to 10 July 2014 23:00:00:
 * const result = addHours(new Date(2014, 6, 10, 23, 0), 2)
 * //=> Fri Jul 11 2014 01:00:00
 */function y(e,t){(0,b/* ["default"] */.Z)(2,arguments);var r=(0,g/* ["default"] */.Z)(t);return(0,m/* ["default"] */.Z)(e,r*_)}// EXTERNAL MODULE: ./node_modules/date-fns/esm/isValid/index.js
var w=r(12274);// EXTERNAL MODULE: ./node_modules/date-fns/esm/isBefore/index.js
var x=r(313);// EXTERNAL MODULE: ./node_modules/date-fns/esm/parseISO/index.js
var Z=r(23855);// EXTERNAL MODULE: ./node_modules/date-fns/esm/toDate/index.js
var k=r(19013);// CONCATENATED MODULE: ./node_modules/date-fns/esm/startOfDay/index.js
/**
 * @name startOfDay
 * @category Day Helpers
 * @summary Return the start of a day for the given date.
 *
 * @description
 * Return the start of a day for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the start of a day
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The start of a day for 2 September 2014 11:55:00:
 * const result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 00:00:00
 */function C(e){(0,b/* ["default"] */.Z)(1,arguments);var t=(0,k["default"])(e);t.setHours(0,0,0,0);return t}// EXTERNAL MODULE: ./node_modules/date-fns/esm/startOfMinute/index.js
var D=r(18717);// CONCATENATED MODULE: ./node_modules/date-fns/esm/isSameMinute/index.js
/**
 * @name isSameMinute
 * @category Minute Helpers
 * @summary Are the given dates in the same minute (and hour and day)?
 *
 * @description
 * Are the given dates in the same minute (and hour and day)?
 *
 * @param {Date|Number} dateLeft - the first date to check
 * @param {Date|Number} dateRight - the second date to check
 * @returns {Boolean} the dates are in the same minute (and hour and day)
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Are 4 September 2014 06:30:00 and 4 September 2014 06:30:15 in the same minute?
 * const result = isSameMinute(
 *   new Date(2014, 8, 4, 6, 30),
 *   new Date(2014, 8, 4, 6, 30, 15)
 * )
 * //=> true
 *
 * @example
 * // Are 4 September 2014 06:30:00 and 5 September 2014 06:30:00 in the same minute?
 * const result = isSameMinute(
 *   new Date(2014, 8, 4, 6, 30),
 *   new Date(2014, 8, 5, 6, 30)
 * )
 * //=> false
 */function E(e,t){(0,b/* ["default"] */.Z)(2,arguments);var r=(0,D/* ["default"] */.Z)(e);var n=(0,D/* ["default"] */.Z)(t);return r.getTime()===n.getTime()}// EXTERNAL MODULE: ./assets/react/v3/shared/atoms/Button.tsx
var S=r(19398);// EXTERNAL MODULE: ./assets/react/v3/shared/atoms/ImageInput.tsx
var W=r(30647);// EXTERNAL MODULE: ./assets/react/v3/shared/atoms/ProBadge.tsx
var M=r(86766);// EXTERNAL MODULE: ./assets/react/v3/shared/components/fields/FormCheckbox.tsx
var T=r(60274);// EXTERNAL MODULE: ./assets/react/v3/shared/components/fields/FormDateInput.tsx
var B=r(42456);// EXTERNAL MODULE: ./assets/react/v3/shared/components/fields/FormImageInput.tsx
var I=r(44226);// EXTERNAL MODULE: ./assets/react/v3/shared/components/fields/FormSwitch.tsx
var N=r(92386);// EXTERNAL MODULE: ./assets/react/v3/shared/components/fields/FormTimeInput.tsx
var O=r(47778);// EXTERNAL MODULE: ./assets/react/v3/entries/course-builder/utils/utils.ts
var A=r(14784);// EXTERNAL MODULE: ./assets/react/v3/shared/config/config.ts
var L=r(34039);// EXTERNAL MODULE: ./assets/react/v3/shared/config/constants.ts
var J=r(74053);// EXTERNAL MODULE: ./assets/react/v3/shared/config/styles.ts
var P=r(60860);// EXTERNAL MODULE: ./assets/react/v3/shared/config/typography.ts
var R=r(76487);// EXTERNAL MODULE: ./assets/react/v3/shared/controls/Show.tsx
var U=r(17106);// EXTERNAL MODULE: ./assets/react/v3/shared/hoc/withVisibilityControl.tsx
var z=r(52357);// EXTERNAL MODULE: ./assets/react/v3/shared/utils/style-utils.ts
var j=r(29535);// EXTERNAL MODULE: ./assets/react/v3/shared/utils/util.ts + 4 modules
var X=r(34403);// EXTERNAL MODULE: ./assets/react/v3/shared/utils/validation.ts
var F=r(25481);// CONCATENATED MODULE: ./assets/react/v3/entries/course-builder/components/course-basic/ScheduleOptions.tsx
var Y=!!L/* .tutorConfig.tutor_pro_url */.y.tutor_pro_url;var Q=(0,A/* .getCourseId */.z)();var q=()=>{var e=(0,f/* .useFormContext */.Gc)();var t=(0,f/* .useWatch */.qo)({name:"post_date"});var r;var n=(r=(0,f/* .useWatch */.qo)({name:"schedule_date"}))!==null&&r!==void 0?r:"";var i;var l=(i=(0,f/* .useWatch */.qo)({name:"schedule_time"}))!==null&&i!==void 0?i:(0,p["default"])(y(new Date,1),J/* .DateFormats.hoursMinutes */.E_.hoursMinutes);var c;var g=(c=(0,f/* .useWatch */.qo)({name:"isScheduleEnabled"}))!==null&&c!==void 0?c:false;var m;var b=(m=(0,f/* .useWatch */.qo)({name:"showScheduleForm"}))!==null&&m!==void 0?m:false;var _;var k=(_=(0,f/* .useWatch */.qo)({name:"enable_coming_soon"}))!==null&&_!==void 0?_:false;var D;var A=(D=(0,f/* .useWatch */.qo)({name:"course_enrollment_period"}))!==null&&D!==void 0?D:false;var P;var R=(P=(0,f/* .useWatch */.qo)({name:"enrollment_starts_date"}))!==null&&P!==void 0?P:"";var z;var q=(z=(0,f/* .useWatch */.qo)({name:"enrollment_starts_time"}))!==null&&z!==void 0?z:"";var H=(0,f/* .useWatch */.qo)({name:"coming_soon_thumbnail"});var G=(0,d/* .useIsFetching */.y)({queryKey:["CourseDetails",Q]});var[K,$]=(0,v.useState)(n&&l&&(0,w["default"])(new Date("".concat(n," ").concat(l)))?(0,p["default"])(new Date("".concat(n," ").concat(l)),J/* .DateFormats.yearMonthDayHourMinuteSecond24H */.E_.yearMonthDayHourMinuteSecond24H):"");var ee=new Date("".concat(R," ").concat(q));var et=()=>{e.setValue("schedule_date","",{shouldDirty:true});e.setValue("schedule_time","",{shouldDirty:true});e.setValue("showScheduleForm",true,{shouldDirty:true})};var er=()=>{var r=(0,x["default"])(new Date(t),new Date);e.setValue("schedule_date",r&&K?(0,p["default"])((0,Z["default"])(K),J/* .DateFormats.yearMonthDay */.E_.yearMonthDay):"",{shouldDirty:true});e.setValue("schedule_time",r&&K?(0,p["default"])((0,Z["default"])(K),J/* .DateFormats.hoursMinutes */.E_.hoursMinutes):"",{shouldDirty:true})};var en=()=>{if(!n||!l){return}e.setValue("showScheduleForm",false,{shouldDirty:true});$((0,p["default"])(new Date("".concat(n," ").concat(l)),J/* .DateFormats.yearMonthDayHourMinuteSecond24H */.E_.yearMonthDayHourMinuteSecond24H))};(0,v.useEffect)(()=>{if(g&&b){e.setFocus("schedule_date")}// eslint-disable-next-line react-hooks/exhaustive-deps
},[b,g]);return/*#__PURE__*/(0,s/* .jsxs */.BX)("div",{css:V.scheduleOptions,children:[/*#__PURE__*/(0,s/* .jsx */.tZ)(f/* .Controller */.Qr,{name:"isScheduleEnabled",control:e.control,rules:{deps:["enrollment_starts_date","enrollment_starts_time"]},render:t=>/*#__PURE__*/(0,s/* .jsx */.tZ)(N/* ["default"] */.Z,(0,a._)((0,o._)({},t),{loading:!!G,label:(0,u.__)("Schedule","tutor"),onChange:t=>{if(!t&&n&&l){e.setValue("showScheduleForm",false,{shouldDirty:true})}}}))}),g&&b&&/*#__PURE__*/(0,s/* .jsxs */.BX)("div",{css:V.formWrapper,children:[/*#__PURE__*/(0,s/* .jsxs */.BX)("div",{css:j/* .styleUtils.dateAndTimeWrapper */.i.dateAndTimeWrapper,children:[/*#__PURE__*/(0,s/* .jsx */.tZ)(f/* .Controller */.Qr,{name:"schedule_date",control:e.control,rules:{required:(0,u.__)("Schedule date is required.","tutor"),validate:{invalidDateRule:F/* .invalidDateRule */.Ek,futureDate:e=>{if((0,x["default"])(new Date("".concat(e," +T00:00:00")),C(new Date))){return(0,u.__)("Schedule date should be in the future.","tutor")}return true},isBeforeEnrollmentStartDate:e=>{if(A&&(0,x["default"])(ee,new Date("".concat(e," ").concat(l)))){return(0,u.__)("Schedule date should be before enrollment start date.","tutor")}return true}},deps:["enrollment_starts_date","enrollment_starts_time","schedule_time"]},render:t=>/*#__PURE__*/(0,s/* .jsx */.tZ)(B/* ["default"] */.Z,(0,a._)((0,o._)({},t),{isClearable:false,placeholder:(0,u.__)("Select date","tutor"),disabledBefore:(0,p["default"])(new Date,J/* .DateFormats.yearMonthDay */.E_.yearMonthDay),onChange:()=>{e.setFocus("schedule_time")},dateFormat:J/* .DateFormats.monthDayYear */.E_.monthDayYear}))}),/*#__PURE__*/(0,s/* .jsx */.tZ)(f/* .Controller */.Qr,{name:"schedule_time",control:e.control,rules:{required:(0,u.__)("Schedule time is required.","tutor"),validate:{invalidTimeRule:F/* .invalidTimeRule */.xB,futureDate:e=>{if((0,x["default"])(new Date("".concat(n," ").concat(e)),new Date)){return(0,u.__)("Schedule time should be in the future.","tutor")}return true},isBeforeEnrollmentStartDate:e=>{if(A&&(0,x["default"])(ee,new Date("".concat(n," ").concat(e)))){return(0,u.__)("Schedule time should be before enrollment start date.","tutor")}return true}},deps:["schedule_date","enrollment_starts_date","enrollment_starts_time"]},render:e=>/*#__PURE__*/(0,s/* .jsx */.tZ)(O/* ["default"] */.Z,(0,a._)((0,o._)({},e),{interval:60,isClearable:false,placeholder:"hh:mm A"}))})]}),/*#__PURE__*/(0,s/* .jsx */.tZ)(f/* .Controller */.Qr,{name:"enable_coming_soon",control:e.control,render:e=>/*#__PURE__*/(0,s/* .jsx */.tZ)(T/* ["default"] */.Z,(0,a._)((0,o._)({},e),{label:/*#__PURE__*/(0,s/* .jsxs */.BX)(s/* .Fragment */.HY,{children:[(0,u.__)("Show coming soon in course list & details page","tutor"),/*#__PURE__*/(0,s/* .jsx */.tZ)(U/* ["default"] */.Z,{when:!Y,children:/*#__PURE__*/(0,s/* .jsx */.tZ)("div",{"data-pro-badge":true,children:/*#__PURE__*/(0,s/* .jsx */.tZ)(M/* ["default"] */.Z,{content:(0,u.__)("Pro","tutor"),size:"small"})})})]}),disabled:!Y,labelCss:V.checkboxStartAlign}))}),/*#__PURE__*/(0,s/* .jsx */.tZ)(U/* ["default"] */.Z,{when:Y,children:/*#__PURE__*/(0,s/* .jsxs */.BX)(U/* ["default"] */.Z,{when:k,children:[/*#__PURE__*/(0,s/* .jsx */.tZ)(f/* .Controller */.Qr,{name:"coming_soon_thumbnail",control:e.control,render:e=>/*#__PURE__*/(0,s/* .jsx */.tZ)(I/* ["default"] */.Z,(0,a._)((0,o._)({},e),{label:(0,u.__)("Coming Soon Thumbnail","tutor"),buttonText:(0,u.__)("Upload Thumbnail","tutor"),infoText:/* translators: %s is the maximum allowed upload file size (e.g., "2MB") */(0,u.sprintf)((0,u.__)("JPEG, PNG, GIF, and WebP formats, up to %s","tutor"),L/* .tutorConfig.max_upload_size */.y.max_upload_size)}))}),/*#__PURE__*/(0,s/* .jsx */.tZ)(f/* .Controller */.Qr,{name:"enable_curriculum_preview",control:e.control,render:e=>/*#__PURE__*/(0,s/* .jsx */.tZ)(T/* ["default"] */.Z,(0,a._)((0,o._)({},e),{label:(0,u.__)("Preview Course Curriculum","tutor")}))})]})}),/*#__PURE__*/(0,s/* .jsxs */.BX)("div",{css:V.scheduleButtonsWrapper,children:[/*#__PURE__*/(0,s/* .jsx */.tZ)(S/* ["default"] */.Z,{variant:"tertiary",size:"small",onClick:er,disabled:!n&&!l||(0,w["default"])(new Date("".concat(n," ").concat(l)))&&E(new Date("".concat(n," ").concat(l)),new Date(K)),children:(0,u.__)("Cancel","tutor")}),/*#__PURE__*/(0,s/* .jsx */.tZ)(S/* ["default"] */.Z,{variant:"secondary",size:"small",onClick:e.handleSubmit(en),disabled:!n||!l,children:(0,u.__)("Ok","tutor")})]})]}),g&&!b&&/*#__PURE__*/(0,s/* .jsxs */.BX)("div",{css:V.scheduleInfoWrapper,children:[/*#__PURE__*/(0,s/* .jsxs */.BX)("div",{css:V.scheduledFor,children:[/*#__PURE__*/(0,s/* .jsx */.tZ)("div",{css:V.scheduleLabel,children:!k?(0,u.__)("Scheduled for","tutor"):(0,u.__)("Scheduled with coming soon","tutor")}),/*#__PURE__*/(0,s/* .jsxs */.BX)("div",{css:V.scheduleInfoButtons,children:[/*#__PURE__*/(0,s/* .jsx */.tZ)("button",{type:"button",css:j/* .styleUtils.actionButton */.i.actionButton,onClick:et,children:/*#__PURE__*/(0,s/* .jsx */.tZ)(h/* ["default"] */.Z,{name:"delete",width:24,height:24})}),/*#__PURE__*/(0,s/* .jsx */.tZ)("button",{type:"button",css:j/* .styleUtils.actionButton */.i.actionButton,onClick:()=>{e.setValue("showScheduleForm",true,{shouldDirty:true})},children:/*#__PURE__*/(0,s/* .jsx */.tZ)(h/* ["default"] */.Z,{name:"edit",width:24,height:24})})]})]}),/*#__PURE__*/(0,s/* .jsxs */.BX)(U/* ["default"] */.Z,{when:n&&l&&(0,w["default"])(new Date("".concat(n," ").concat(l))),children:[/*#__PURE__*/(0,s/* .jsx */.tZ)("div",{css:V.scheduleInfo,children:/* translators: %1$s is the date and %2$s is the time */(0,u.sprintf)((0,u.__)("%1$s at %2$s","tutor"),(0,p["default"])((0,Z["default"])(n),J/* .DateFormats.monthDayYear */.E_.monthDayYear),l)}),/*#__PURE__*/(0,s/* .jsx */.tZ)(U/* ["default"] */.Z,{when:H===null||H===void 0?void 0:H.url,children:/*#__PURE__*/(0,s/* .jsx */.tZ)(W/* ["default"] */.Z,{value:H,uploadHandler:X/* .noop */.ZT,clearHandler:X/* .noop */.ZT,disabled:true})})]})]})]})};/* ESM default export */const H=(0,z/* .withVisibilityControl */.v)(q);var V={scheduleOptions:/*#__PURE__*/(0,l/* .css */.iv)("padding:",P/* .spacing["12"] */.W0["12"],";border:1px solid ",P/* .colorTokens.stroke["default"] */.Jv.stroke["default"],";border-radius:",P/* .borderRadius["8"] */.E0["8"],";gap:",P/* .spacing["8"] */.W0["8"],";background-color:",P/* .colorTokens.bg.white */.Jv.bg.white,";"),formWrapper:/*#__PURE__*/(0,l/* .css */.iv)(j/* .styleUtils.display.flex */.i.display.flex("column"),";gap:",P/* .spacing["8"] */.W0["8"],";margin-top:",P/* .spacing["16"] */.W0["16"],";"),scheduleButtonsWrapper:/*#__PURE__*/(0,l/* .css */.iv)("display:flex;gap:",P/* .spacing["12"] */.W0["12"],";margin-top:",P/* .spacing["8"] */.W0["8"],";button{width:100%;span{justify-content:center;}}"),scheduleInfoWrapper:/*#__PURE__*/(0,l/* .css */.iv)("display:flex;flex-direction:column;gap:",P/* .spacing["8"] */.W0["8"],";margin-top:",P/* .spacing["12"] */.W0["12"],";"),scheduledFor:/*#__PURE__*/(0,l/* .css */.iv)("display:flex;align-items:center;justify-content:space-between;"),scheduleLabel:/*#__PURE__*/(0,l/* .css */.iv)(R/* .typography.caption */.c.caption(),";color:",P/* .colorTokens.text.subdued */.Jv.text.subdued,";"),scheduleInfoButtons:/*#__PURE__*/(0,l/* .css */.iv)("display:flex;align-items:center;gap:",P/* .spacing["8"] */.W0["8"],";"),scheduleInfo:/*#__PURE__*/(0,l/* .css */.iv)(R/* .typography.caption */.c.caption(),";background-color:",P/* .colorTokens.background.status.processing */.Jv.background.status.processing,";padding:",P/* .spacing["8"] */.W0["8"],";border-radius:",P/* .borderRadius["4"] */.E0["4"],";text-align:center;"),checkboxStartAlign:/*#__PURE__*/(0,l/* .css */.iv)("span:first-of-type{gap:",P/* .spacing["4"] */.W0["4"],";align-self:flex-start;margin-top:",P/* .spacing["4"] */.W0["4"],";}[data-pro-badge]{display:inline-flex;vertical-align:middle;padding-left:",P/* .spacing["4"] */.W0["4"],";}")};// EXTERNAL MODULE: ./node_modules/immer/dist/immer.mjs
var G=r(18241);// EXTERNAL MODULE: ./assets/react/v3/shared/atoms/CheckBox.tsx
var K=r(69602);// EXTERNAL MODULE: ./assets/react/v3/shared/atoms/LoadingSpinner.tsx
var $=r(2613);// EXTERNAL MODULE: ./assets/react/v3/shared/hooks/useDebounce.ts
var ee=r(4867);// EXTERNAL MODULE: ./assets/react/v3/shared/hooks/useFormWithGlobalError.ts
var et=r(37861);// EXTERNAL MODULE: ./assets/react/v3/shared/hooks/useIsScrolling.ts
var er=r(41819);// EXTERNAL MODULE: ./assets/react/v3/shared/hooks/usePortalPopover.tsx
var en=r(98567);// EXTERNAL MODULE: ./node_modules/@tanstack/react-query/build/modern/useQuery.js
var eo=r(24333);// EXTERNAL MODULE: ./node_modules/@tanstack/react-query/build/modern/useMutation.js
var ea=r(65228);// EXTERNAL MODULE: ./assets/react/v3/shared/atoms/Toast.tsx
var ei=r(13985);// EXTERNAL MODULE: ./assets/react/v3/shared/utils/api.ts
var es=r(82340);// EXTERNAL MODULE: ./assets/react/v3/shared/utils/endpoints.ts
var el=r(84225);// CONCATENATED MODULE: ./assets/react/v3/shared/services/category.ts
var ec=e=>{return es/* .wpAuthApiInstance.get */.B.get(el/* ["default"].CATEGORIES */.Z.CATEGORIES,e?{params:{per_page:100,search:e}}:{params:{per_page:100}})};var ed=e=>{return(0,eo/* .useQuery */.a)({queryKey:["CategoryList",e],queryFn:()=>ec(e).then(e=>e.data)})};var eu=e=>{return es/* .wpAuthApiInstance.post */.B.post(el/* ["default"].CATEGORIES */.Z.CATEGORIES,e)};var ev=()=>{var e=(0,c/* .useQueryClient */.NL)();var{showToast:t}=(0,ei/* .useToast */.p)();return(0,ea/* .useMutation */.D)({mutationFn:eu,onSuccess:()=>{e.invalidateQueries({queryKey:["CategoryList"]})},onError:e=>{// @TODO: Need to add proper type definition for wp rest api errors
t({type:"danger",message:(0,X/* .convertToErrorMessage */.Mo)(e)})}})};// EXTERNAL MODULE: ./assets/react/v3/shared/components/fields/FormFieldWrapper.tsx
var ef=r(84978);// EXTERNAL MODULE: ./assets/react/v3/shared/components/fields/FormInput.tsx
var ep=r(78150);// CONCATENATED MODULE: ./assets/react/v3/shared/components/fields/FormMultiLevelSelect.tsx
function eh(){var e=(0,i._)(["\n      transform: rotate(180deg);\n    "]);eh=function t(){return e};return e}var eg=e=>{var{label:t,field:r,fieldState:n,disabled:i,loading:l,placeholder:c,helpText:d,isInlineLabel:f,clearable:p,listItemsLabel:g,optionsWrapperStyle:m}=e;var[b,_]=(0,v.useState)(false);var[y,w]=(0,v.useState)("");var x=(0,ee/* .useDebounce */.N)(y,300);var Z=ed(x);var k;var C=(0,X/* .generateTree */.TQ)((k=Z.data)!==null&&k!==void 0?k:[]);var{triggerRef:D,triggerWidth:E,position:W,popoverRef:M}=(0,en/* .usePortalPopover */.l)({isOpen:b,isDropdown:true,dependencies:[C.length]});(0,v.useEffect)(()=>{if(!b){w("")}},[b]);return/*#__PURE__*/(0,s/* .jsx */.tZ)(ef/* ["default"] */.Z,{label:t,field:r,fieldState:n,disabled:i||C.length===0,loading:l,placeholder:c,helpText:d,isInlineLabel:f,children:e=>{var t,n;return/*#__PURE__*/(0,s/* .jsxs */.BX)(s/* .Fragment */.HY,{children:[/*#__PURE__*/(0,s/* .jsxs */.BX)("div",{css:e_.inputWrapper,ref:D,children:[/*#__PURE__*/(0,s/* .jsx */.tZ)("input",(0,a._)((0,o._)({},e),{type:"text",onClick:e=>{e.stopPropagation();_(true)},onKeyDown:e=>{if(e.key==="Enter"){e.preventDefault();_(true)}if(e.key==="Tab"){_(false)}},autoComplete:"off",readOnly:true,disabled:i||C.length===0,value:r.value?(n=Z.data)===null||n===void 0?void 0:(t=n.find(e=>e.id===r.value))===null||t===void 0?void 0:t.name:"",placeholder:c})),/*#__PURE__*/(0,s/* .jsx */.tZ)("button",{tabIndex:-1,type:"button",disabled:i||C.length===0,"aria-label":(0,u.__)("Toggle options","tutor"),css:e_.toggleIcon(b),onClick:()=>{_(e=>!e)},children:/*#__PURE__*/(0,s/* .jsx */.tZ)(h/* ["default"] */.Z,{name:"chevronDown",width:20,height:20})})]}),/*#__PURE__*/(0,s/* .jsx */.tZ)(en/* .Portal */.h,{isOpen:b,onClickOutside:()=>_(false),onEscape:()=>_(false),children:/*#__PURE__*/(0,s/* .jsxs */.BX)("div",{css:[e_.categoryWrapper,{[J/* .isRTL */.dZ?"right":"left"]:W.left,top:W.top}],ref:M,style:{maxWidth:E},children:[!!g&&/*#__PURE__*/(0,s/* .jsx */.tZ)("p",{css:e_.listItemLabel,children:g}),/*#__PURE__*/(0,s/* .jsxs */.BX)("div",{css:e_.searchInput,children:[/*#__PURE__*/(0,s/* .jsx */.tZ)("div",{css:e_.searchIcon,children:/*#__PURE__*/(0,s/* .jsx */.tZ)(h/* ["default"] */.Z,{name:"search",width:24,height:24})}),/*#__PURE__*/(0,s/* .jsx */.tZ)("input",{type:"text",placeholder:(0,u.__)("Search","tutor"),value:y,onChange:e=>{w(e.target.value)}})]}),/*#__PURE__*/(0,s/* .jsx */.tZ)(U/* ["default"] */.Z,{when:C.length>0,fallback:/*#__PURE__*/(0,s/* .jsx */.tZ)("div",{css:e_.notFound,children:(0,u.__)("No categories found.","tutor")}),children:/*#__PURE__*/(0,s/* .jsx */.tZ)("div",{css:[e_.options,m],children:C.map(e=>/*#__PURE__*/(0,s/* .jsx */.tZ)(eb,{option:e,onChange:e=>{r.onChange(e);_(false)}},e.id))})}),p&&/*#__PURE__*/(0,s/* .jsx */.tZ)("div",{css:e_.clearButton,children:/*#__PURE__*/(0,s/* .jsx */.tZ)(S/* ["default"] */.Z,{variant:"text",onClick:()=>{r.onChange(null);_(false)},children:(0,u.__)("Clear selection","tutor")})})]})})]})}})};/* ESM default export */const em=eg;var eb=e=>{var{option:t,onChange:r,level:n=0}=e;var o=t.children.length>0;var a=()=>{if(!o){return null}return t.children.map(e=>{return/*#__PURE__*/(0,s/* .jsx */.tZ)(eb,{option:e,onChange:r,level:n+1},e.id)})};return/*#__PURE__*/(0,s/* .jsxs */.BX)("div",{css:e_.branchItem(n),children:[/*#__PURE__*/(0,s/* .jsx */.tZ)("button",{type:"button",onClick:()=>r(t.id),title:t.name,children:(0,X/* .decodeHtmlEntities */.aV)(t.name)}),a()]})};var e_={categoryWrapper:/*#__PURE__*/(0,l/* .css */.iv)("position:absolute;background-color:",P/* .colorTokens.background.white */.Jv.background.white,";box-shadow:",P/* .shadow.popover */.AF.popover,";border-radius:",P/* .borderRadius["6"] */.E0["6"],";border:1px solid ",P/* .colorTokens.stroke.border */.Jv.stroke.border,";padding:",P/* .spacing["8"] */.W0["8"]," 0;min-width:275px;"),options:/*#__PURE__*/(0,l/* .css */.iv)("max-height:455px;",j/* .styleUtils.overflowYAuto */.i.overflowYAuto,";"),notFound:/*#__PURE__*/(0,l/* .css */.iv)(j/* .styleUtils.display.flex */.i.display.flex(),";align-items:center;",R/* .typography.caption */.c.caption("regular"),";padding:",P/* .spacing["8"] */.W0["8"]," ",P/* .spacing["16"] */.W0["16"],";color:",P/* .colorTokens.text.hints */.Jv.text.hints,";"),searchInput:/*#__PURE__*/(0,l/* .css */.iv)("position:sticky;top:0;padding:",P/* .spacing["8"] */.W0["8"]," ",P/* .spacing["16"] */.W0["16"],";input{",R/* .typography.body */.c.body("regular"),";width:100%;border-radius:",P/* .borderRadius["6"] */.E0["6"],";border:1px solid ",P/* .colorTokens.stroke["default"] */.Jv.stroke["default"],";padding:",P/* .spacing["4"] */.W0["4"]," ",P/* .spacing["16"] */.W0["16"]," ",P/* .spacing["4"] */.W0["4"]," ",P/* .spacing["32"] */.W0["32"],";color:",P/* .colorTokens.text.title */.Jv.text.title,";appearance:textfield;:focus{",j/* .styleUtils.inputFocus */.i.inputFocus,";}}"),searchIcon:/*#__PURE__*/(0,l/* .css */.iv)("position:absolute;left:",P/* .spacing["24"] */.W0["24"],";top:50%;transform:translateY(-50%);color:",P/* .colorTokens.icon["default"] */.Jv.icon["default"],";display:flex;"),branchItem:e=>/*#__PURE__*/(0,l/* .css */.iv)("position:relative;z-index:",P/* .zIndex.positive */.W5.positive,";button{",j/* .styleUtils.resetButton */.i.resetButton,";",R/* .typography.body */.c.body("regular"),";",j/* .styleUtils.text.ellipsis */.i.text.ellipsis(1),";color:",P/* .colorTokens.text.title */.Jv.text.title,";padding-left:calc(",P/* .spacing["24"] */.W0["24"]," + ",P/* .spacing["24"] */.W0["24"]," * ",e,");line-height:",P/* .lineHeight["36"] */.Nv["36"],";padding-right:",P/* .spacing["16"] */.W0["16"],";width:100%;&:hover,&:focus,&:active{background-color:",P/* .colorTokens.background.hover */.Jv.background.hover,";color:",P/* .colorTokens.text.title */.Jv.text.title,";}}"),toggleIcon:e=>/*#__PURE__*/(0,l/* .css */.iv)(j/* .styleUtils.resetButton */.i.resetButton,";position:absolute;top:",P/* .spacing["4"] */.W0["4"],";right:",P/* .spacing["4"] */.W0["4"],";display:flex;align-items:center;transition:transform 0.3s ease-in-out;color:",P/* .colorTokens.icon["default"] */.Jv.icon["default"],";padding:",P/* .spacing["6"] */.W0["6"],";&:focus,&:active,&:hover{background:none;color:",P/* .colorTokens.icon["default"] */.Jv.icon["default"],";}",e&&(0,l/* .css */.iv)(eh())),inputWrapper:/*#__PURE__*/(0,l/* .css */.iv)("position:relative;input:read-only{background-color:inherit;}"),clearButton:/*#__PURE__*/(0,l/* .css */.iv)("padding:",P/* .spacing["8"] */.W0["8"]," ",P/* .spacing["24"] */.W0["24"],";box-shadow:",P/* .shadow.dividerTop */.AF.dividerTop,";& > button{padding:0;}"),listItemLabel:/*#__PURE__*/(0,l/* .css */.iv)(R/* .typography.caption */.c.caption(),";font-weight:",P/* .fontWeight.medium */.Ue.medium,";background-color:",P/* .colorTokens.background.white */.Jv.background.white,";color:",P/* .colorTokens.text.hints */.Jv.text.hints,";padding:",P/* .spacing["10"] */.W0["10"]," ",P/* .spacing["16"] */.W0["16"],";"),radioLabel:/*#__PURE__*/(0,l/* .css */.iv)("line-height:",P/* .lineHeight["32"] */.Nv["32"],";padding-left:",P/* .spacing["2"] */.W0["2"],";")};// CONCATENATED MODULE: ./assets/react/v3/shared/components/fields/FormCategoriesInput.tsx
function ey(){var e=(0,i._)(["\n      &:before {\n        content: '';\n        position: absolute;\n        height: 1px;\n        width: 10px;\n        left: -10px;\n        top: ",";\n\n        background-color: ",";\n        z-index: ",";\n      }\n    "]);ey=function t(){return e};return e}function ew(){var e=(0,i._)(["\n      box-shadow: ",";\n    "]);ew=function t(){return e};return e}var ex=e=>{var{label:t,field:r,fieldState:n,disabled:i,loading:l,placeholder:c,helpText:d,optionsWrapperStyle:p}=e;var g=(0,et/* .useFormWithGlobalError */.O)({shouldFocusError:true});var m=g.watch("search");var b=(0,ee/* .useDebounce */.N)(m,300);var _=ed(b);var y=ev();var[w,x]=(0,v.useState)(false);var[Z,k]=(0,v.useState)(false);var{ref:C,isScrolling:D}=(0,er/* .useIsScrolling */.a)();(0,v.useEffect)(()=>{if(!_.isLoading&&(_.data||[]).length>0){k(true)}},[_.isLoading,_.data]);(0,v.useEffect)(()=>{if(w){var e=setTimeout(()=>{g.setFocus("name")},250);return()=>{clearTimeout(e)}}// eslint-disable-next-line react-hooks/exhaustive-deps
},[w]);var{triggerRef:E,position:W,popoverRef:M}=(0,en/* .usePortalPopover */.l)({isOpen:w});var T;var B=(0,X/* .generateTree */.TQ)((T=_.data)!==null&&T!==void 0?T:[]);var I=()=>{x(false);g.reset({name:"",parent:null,search:m})};var N=e=>{if(e.name){y.mutate((0,o._)({name:e.name},e.parent&&{parent:e.parent}));I()}};return/*#__PURE__*/(0,s/* .jsx */.tZ)(ef/* ["default"] */.Z,{label:t,field:r,fieldState:n,loading:l,placeholder:c,helpText:d,children:()=>{return/*#__PURE__*/(0,s/* .jsxs */.BX)(s/* .Fragment */.HY,{children:[/*#__PURE__*/(0,s/* .jsxs */.BX)("div",{css:[eD.options,p],children:[/*#__PURE__*/(0,s/* .jsxs */.BX)("div",{css:eD.categoryListWrapper,ref:C,children:[/*#__PURE__*/(0,s/* .jsx */.tZ)(U/* ["default"] */.Z,{when:!i&&(Z||b),children:/*#__PURE__*/(0,s/* .jsx */.tZ)(f/* .Controller */.Qr,{name:"search",control:g.control,render:e=>/*#__PURE__*/(0,s/* .jsxs */.BX)("div",{css:eD.searchInput,children:[/*#__PURE__*/(0,s/* .jsx */.tZ)("div",{css:eD.searchIcon,children:/*#__PURE__*/(0,s/* .jsx */.tZ)(h/* ["default"] */.Z,{name:"search",width:24,height:24})}),/*#__PURE__*/(0,s/* .jsx */.tZ)("input",{type:"text",placeholder:(0,u.__)("Search","tutor"),value:m,disabled:i||l,onChange:t=>{e.field.onChange(t.target.value)}})]})})}),/*#__PURE__*/(0,s/* .jsx */.tZ)(U/* ["default"] */.Z,{when:!_.isLoading&&!l,fallback:/*#__PURE__*/(0,s/* .jsx */.tZ)($/* .LoadingSection */.g4,{}),children:/*#__PURE__*/(0,s/* .jsx */.tZ)(U/* ["default"] */.Z,{when:B.length>0,fallback:/*#__PURE__*/(0,s/* .jsx */.tZ)("span",{css:eD.notFound,children:(0,u.__)("No categories found.","tutor")}),children:B.map((e,t)=>/*#__PURE__*/(0,s/* .jsx */.tZ)(eC,{disabled:i,option:e,value:r.value,isLastChild:t===B.length-1,onChange:e=>{r.onChange((0,G/* .produce */.Uy)(r.value,t=>{if(Array.isArray(t)){return t.includes(e)?t.filter(t=>t!==e):[...t,e]}return[e]}))}},e.id))})})]}),/*#__PURE__*/(0,s/* .jsx */.tZ)(U/* ["default"] */.Z,{when:!i,children:/*#__PURE__*/(0,s/* .jsx */.tZ)("div",{ref:E,css:eD.addButtonWrapper({isActive:D,hasCategories:_.isLoading||B.length>0}),children:/*#__PURE__*/(0,s/* .jsxs */.BX)("button",{disabled:i||l,type:"button",css:eD.addNewButton,onClick:()=>x(true),children:[/*#__PURE__*/(0,s/* .jsx */.tZ)(h/* ["default"] */.Z,{width:24,height:24,name:"plus"})," ",(0,u.__)("Add","tutor")]})})})]}),/*#__PURE__*/(0,s/* .jsx */.tZ)(en/* .Portal */.h,{isOpen:w,onClickOutside:I,onEscape:I,children:/*#__PURE__*/(0,s/* .jsxs */.BX)("div",{css:[eD.categoryFormWrapper,{[J/* .isRTL */.dZ?"right":"left"]:W.left,top:W.top}],ref:M,children:[/*#__PURE__*/(0,s/* .jsx */.tZ)(f/* .Controller */.Qr,{name:"name",control:g.control,rules:{required:(0,u.__)("Category name is required","tutor")},render:e=>/*#__PURE__*/(0,s/* .jsx */.tZ)(ep/* ["default"] */.Z,(0,a._)((0,o._)({},e),{placeholder:(0,u.__)("Category name","tutor"),selectOnFocus:true}))}),/*#__PURE__*/(0,s/* .jsx */.tZ)(f/* .Controller */.Qr,{name:"parent",control:g.control,render:e=>/*#__PURE__*/(0,s/* .jsx */.tZ)(em,(0,a._)((0,o._)({},e),{placeholder:(0,u.__)("Select parent","tutor"),clearable:!!e.field.value}))}),/*#__PURE__*/(0,s/* .jsxs */.BX)("div",{css:eD.categoryFormButtons,children:[/*#__PURE__*/(0,s/* .jsx */.tZ)(S/* ["default"] */.Z,{variant:"text",size:"small",onClick:I,children:(0,u.__)("Cancel","tutor")}),/*#__PURE__*/(0,s/* .jsx */.tZ)(S/* ["default"] */.Z,{variant:"secondary",size:"small",loading:y.isPending,onClick:g.handleSubmit(N),children:(0,u.__)("Ok","tutor")})]})]})})]})}})};/* ESM default export */const eZ=(0,z/* .withVisibilityControl */.v)(ex);var ek=e=>{return e.children.reduce((e,t)=>e+ek(t),e.children.length)};var eC=e=>{var{option:t,value:r,onChange:n,isLastChild:o,disabled:a}=e;var i=ek(t);var l=i>0;var c=(0,X/* .getCategoryLeftBarHeight */.VH)(o,i);var d=()=>{if(!l){return null}return t.children.map((e,o)=>{return/*#__PURE__*/(0,s/* .jsx */.tZ)(eC,{option:e,value:r,onChange:n,isLastChild:o===t.children.length-1,disabled:a},e.id)})};return/*#__PURE__*/(0,s/* .jsxs */.BX)("div",{css:eD.branchItem({leftBarHeight:c,hasParent:t.parent!==0}),children:[/*#__PURE__*/(0,s/* .jsx */.tZ)(K/* ["default"] */.Z,{checked:Array.isArray(r)?r.includes(t.id):r===t.id,label:(0,X/* .decodeHtmlEntities */.aV)(t.name),onChange:()=>{n(t.id)},labelCss:eD.checkboxLabel,disabled:a}),d()]})};var eD={options:/*#__PURE__*/(0,l/* .css */.iv)("border:1px solid ",P/* .colorTokens.stroke["default"] */.Jv.stroke["default"],";border-radius:",P/* .borderRadius["8"] */.E0["8"],";padding:",P/* .spacing["8"] */.W0["8"]," 0;background-color:",P/* .colorTokens.bg.white */.Jv.bg.white,";"),categoryListWrapper:/*#__PURE__*/(0,l/* .css */.iv)(j/* .styleUtils.overflowYAuto */.i.overflowYAuto,";max-height:208px;"),notFound:/*#__PURE__*/(0,l/* .css */.iv)(j/* .styleUtils.display.flex */.i.display.flex(),";align-items:center;",R/* .typography.caption */.c.caption("regular"),";padding:",P/* .spacing["8"] */.W0["8"]," ",P/* .spacing["16"] */.W0["16"],";color:",P/* .colorTokens.text.hints */.Jv.text.hints,";"),searchInput:/*#__PURE__*/(0,l/* .css */.iv)("position:sticky;top:0;padding:",P/* .spacing["4"] */.W0["4"]," ",P/* .spacing["16"] */.W0["16"],";background-color:",P/* .colorTokens.background.white */.Jv.background.white,";z-index:",P/* .zIndex.dropdown */.W5.dropdown,";input{",R/* .typography.body */.c.body("regular"),";width:100%;border-radius:",P/* .borderRadius["6"] */.E0["6"],";border:1px solid ",P/* .colorTokens.stroke["default"] */.Jv.stroke["default"],";padding:",P/* .spacing["4"] */.W0["4"]," ",P/* .spacing["16"] */.W0["16"]," ",P/* .spacing["4"] */.W0["4"]," ",P/* .spacing["32"] */.W0["32"],";color:",P/* .colorTokens.text.title */.Jv.text.title,";appearance:textfield;:focus{",j/* .styleUtils.inputFocus */.i.inputFocus,";}}"),searchIcon:/*#__PURE__*/(0,l/* .css */.iv)("position:absolute;left:",P/* .spacing["24"] */.W0["24"],";top:50%;transform:translateY(-50%);color:",P/* .colorTokens.icon["default"] */.Jv.icon["default"],";display:flex;"),checkboxLabel:/*#__PURE__*/(0,l/* .css */.iv)("line-height:1.88rem !important;span:last-of-type{",j/* .styleUtils.text.ellipsis */.i.text.ellipsis(1),"}"),branchItem:e=>{var{leftBarHeight:t,hasParent:r}=e;return/*#__PURE__*/(0,l/* .css */.iv)("line-height:",P/* .spacing["32"] */.W0["32"],";position:relative;z-index:",P/* .zIndex.positive */.W5.positive,";margin-inline:",P/* .spacing["20"] */.W0["20"]," ",P/* .spacing["16"] */.W0["16"],";&:after{content:'';position:absolute;height:",t,";width:1px;left:9px;top:26px;background-color:",P/* .colorTokens.stroke.divider */.Jv.stroke.divider,";z-index:",P/* .zIndex.level */.W5.level,";}",r&&(0,l/* .css */.iv)(ey(),P/* .spacing["16"] */.W0["16"],P/* .colorTokens.stroke.divider */.Jv.stroke.divider,P/* .zIndex.level */.W5.level))},addNewButton:/*#__PURE__*/(0,l/* .css */.iv)(j/* .styleUtils.resetButton */.i.resetButton,";",R/* .typography.small */.c.small("medium"),";color:",P/* .colorTokens.brand.blue */.Jv.brand.blue,";padding:0 ",P/* .spacing["8"] */.W0["8"],";display:flex;align-items:center;border-radius:",P/* .borderRadius["2"] */.E0["2"],";&:focus,&:active,&:hover{background:none;color:",P/* .colorTokens.brand.blue */.Jv.brand.blue,";}&:focus-visible{outline:2px solid ",P/* .colorTokens.stroke.brand */.Jv.stroke.brand,";outline-offset:1px;}&:disabled{color:",P/* .colorTokens.text.disable */.Jv.text.disable,";}"),categoryFormWrapper:/*#__PURE__*/(0,l/* .css */.iv)("position:absolute;background-color:",P/* .colorTokens.background.white */.Jv.background.white,";box-shadow:",P/* .shadow.popover */.AF.popover,";border-radius:",P/* .borderRadius["6"] */.E0["6"],";border:1px solid ",P/* .colorTokens.stroke.border */.Jv.stroke.border,";padding:",P/* .spacing["16"] */.W0["16"],";min-width:306px;display:flex;flex-direction:column;gap:",P/* .spacing["12"] */.W0["12"],";"),categoryFormButtons:/*#__PURE__*/(0,l/* .css */.iv)("display:flex;justify-content:end;gap:",P/* .spacing["8"] */.W0["8"],";"),addButtonWrapper:e=>{var{isActive:t=false,hasCategories:r=false}=e;return/*#__PURE__*/(0,l/* .css */.iv)("transition:box-shadow 0.3s ease-in-out;padding-inline:",P/* .spacing["8"] */.W0["8"],";padding-block:",r?P/* .spacing["4"] */.W0["4"]:"0px",";",t&&(0,l/* .css */.iv)(ew(),P/* .shadow.scrollable */.AF.scrollable))}};// EXTERNAL MODULE: ./assets/react/v3/shared/components/fields/FormSelectInput.tsx
var eE=r(82325);// EXTERNAL MODULE: ./node_modules/@swc/helpers/esm/_object_without_properties.js + 1 modules
var eS=r(98848);// EXTERNAL MODULE: ./assets/react/v3/shared/hooks/useSelectKeyboardNavigation.ts
var eW=r(30633);// CONCATENATED MODULE: ./assets/react/v3/public/images/profile-photo.png
const eM=r.p+"js/images/profile-photo-92d02228.png";// CONCATENATED MODULE: ./assets/react/v3/shared/components/fields/FormSelectUser.tsx
function eT(){var e=(0,i._)(["\n      border-color: ",";\n      cursor: pointer;\n    "]);eT=function t(){return e};return e}function eB(){var e=(0,i._)(["\n      transform: rotate(180deg);\n    "]);eB=function t(){return e};return e}var eI={id:0,name:(0,u.__)("Click to select user","tutor"),email:"example@example.com",avatar_url:"https://gravatar.com/avatar"};var eN=e=>{var{field:t,fieldState:r,options:n,onChange:i=X/* .noop */.ZT,handleSearchOnChange:l,isMultiSelect:c=false,label:d,placeholder:f="",disabled:p,readOnly:g,loading:m,isSearchable:b=false,helpText:_,emptyStateText:y=(0,u.__)("No user selected","tutor"),isInstructorMode:w=false}=e;var x;var Z;var k=(Z=t.value)!==null&&Z!==void 0?Z:c?[]:eI;var C=Array.isArray(k)?k.map(e=>String(e.id)):[String(k.id)];var D=(x=L/* .tutorConfig.current_user.roles */.y.current_user.roles)===null||x===void 0?void 0:x.includes(J/* .TutorRoles.ADMINISTRATOR */.er.ADMINISTRATOR);var[E,S]=(0,v.useState)(false);var[W,M]=(0,v.useState)("");var T=(0,ee/* .useDebounce */.N)(W);var B=n.filter(e=>{var t,r;var n=((t=e.name)===null||t===void 0?void 0:t.toLowerCase().includes(W.toLowerCase()))||((r=e.email)===null||r===void 0?void 0:r.toLowerCase().includes(W.toLowerCase()));var o=!C.includes(String(e.id));return n&&o})||[];(0,v.useEffect)(()=>{if(l){l(T)}else{// Handle local filter
}},[T,l]);var{triggerRef:I,triggerWidth:N,position:O,popoverRef:A}=(0,en/* .usePortalPopover */.l)({isOpen:E,isDropdown:true,dependencies:[B.length]});var{activeIndex:P,setActiveIndex:R}=(0,eW/* .useSelectKeyboardNavigation */.U)({options:B.map(e=>({label:e.name,value:e})),isOpen:E,onSelect:e=>{z(e.value)},onClose:()=>{S(false);M("")},selectedValue:Array.isArray(k)?null:k});var z=e=>{var r=w?(0,a._)((0,o._)({},e),{isRemoveAble:true}):e;var n=Array.isArray(k)?[...k,r]:r;t.onChange(n);M("");i(n);S(false)};var j=e=>{if(Array.isArray(k)){var r=k.filter(t=>t.id!==e);t.onChange(r);i(r)}};var F=(0,v.useRef)(null);(0,v.useEffect)(()=>{if(E&&P>=0&&F.current){F.current.scrollIntoView({block:"nearest",behavior:"smooth"})}},[E,P]);return/*#__PURE__*/(0,s/* .jsx */.tZ)(ef/* ["default"] */.Z,{fieldState:r,field:t,label:d,disabled:p,readOnly:g,loading:m,helpText:_,children:e=>{var{css:r}=e,n=(0,eS._)(e,["css"]);return/*#__PURE__*/(0,s/* .jsxs */.BX)("div",{css:eA.mainWrapper,children:[/*#__PURE__*/(0,s/* .jsxs */.BX)("div",{ref:I,children:[!c&&!Array.isArray(k)&&/*#__PURE__*/(0,s/* .jsxs */.BX)("button",{type:"button",css:eA.instructorItem({isDefaultItem:true}),onClick:()=>S(e=>!e),disabled:g||p||B.length===0,children:[/*#__PURE__*/(0,s/* .jsxs */.BX)("div",{css:eA.instructorInfo,children:[/*#__PURE__*/(0,s/* .jsx */.tZ)("img",{src:k.avatar_url?k.avatar_url:eM,alt:k.name,css:eA.instructorAvatar}),/*#__PURE__*/(0,s/* .jsxs */.BX)("div",{children:[/*#__PURE__*/(0,s/* .jsx */.tZ)("div",{css:eA.instructorName,children:k.name}),/*#__PURE__*/(0,s/* .jsx */.tZ)("div",{css:eA.instructorEmail,children:k.email})]})]}),/*#__PURE__*/(0,s/* .jsx */.tZ)(U/* ["default"] */.Z,{when:!m,children:/*#__PURE__*/(0,s/* .jsx */.tZ)("div",{css:eA.toggleIcon({isOpen:E}),children:/*#__PURE__*/(0,s/* .jsx */.tZ)(h/* ["default"] */.Z,{name:"chevronDown",width:20,height:20})})})]}),c&&/*#__PURE__*/(0,s/* .jsxs */.BX)("div",{css:eA.inputWrapper,children:[/*#__PURE__*/(0,s/* .jsx */.tZ)("div",{css:eA.leftIcon,children:/*#__PURE__*/(0,s/* .jsx */.tZ)(h/* ["default"] */.Z,{name:"search",width:24,height:24})}),/*#__PURE__*/(0,s/* .jsx */.tZ)("input",(0,a._)((0,o._)({},n),{onClick:e=>{e.stopPropagation();S(e=>!e)},onKeyDown:e=>{if(e.key==="Enter"){e.preventDefault();S(e=>!e)}if(e.key==="Tab"){S(false)}},className:"tutor-input-field",css:[r,eA.input],autoComplete:"off",readOnly:g||!b,placeholder:f,value:W,onChange:e=>{M(e.target.value)}}))]})]}),c&&Array.isArray(k)&&(k.length>0?/*#__PURE__*/(0,s/* .jsx */.tZ)("div",{css:eA.instructorList,children:k.map(e=>/*#__PURE__*/(0,s/* .jsxs */.BX)("div",{css:eA.instructorItem({isDefaultItem:false}),children:[/*#__PURE__*/(0,s/* .jsxs */.BX)("div",{css:eA.instructorInfo,children:[/*#__PURE__*/(0,s/* .jsx */.tZ)("img",{src:e.avatar_url?e.avatar_url:eM,alt:e.name,css:eA.instructorAvatar}),/*#__PURE__*/(0,s/* .jsxs */.BX)("div",{children:[/*#__PURE__*/(0,s/* .jsx */.tZ)("div",{css:eA.instructorName,children:e.name}),/*#__PURE__*/(0,s/* .jsx */.tZ)("div",{css:eA.instructorEmail,children:e.email})]})]}),/*#__PURE__*/(0,s/* .jsx */.tZ)(U/* ["default"] */.Z,{when:w,fallback:/*#__PURE__*/(0,s/* .jsx */.tZ)("button",{type:"button",onClick:()=>j(e.id),css:eA.instructorDeleteButton,"data-instructor-delete-button":true,children:/*#__PURE__*/(0,s/* .jsx */.tZ)(h/* ["default"] */.Z,{name:"cross",width:32,height:32})}),children:/*#__PURE__*/(0,s/* .jsx */.tZ)(U/* ["default"] */.Z,{when:D||e.isRemoveAble,children:/*#__PURE__*/(0,s/* .jsx */.tZ)("button",{type:"button",onClick:()=>j(e.id),css:eA.instructorDeleteButton,"data-instructor-delete-button":true,children:/*#__PURE__*/(0,s/* .jsx */.tZ)(h/* ["default"] */.Z,{name:"cross",width:32,height:32})})})})]},e.id))}):/*#__PURE__*/(0,s/* .jsx */.tZ)("div",{css:eA.emptyState,children:/*#__PURE__*/(0,s/* .jsx */.tZ)("p",{children:y})})),/*#__PURE__*/(0,s/* .jsx */.tZ)(en/* .Portal */.h,{isOpen:E,onClickOutside:()=>{S(false);M("")},onEscape:()=>{S(false);M("")},children:/*#__PURE__*/(0,s/* .jsx */.tZ)("div",{css:[eA.optionsWrapper,{[J/* .isRTL */.dZ?"right":"left"]:O.left,top:O.top,maxWidth:N}],ref:A,children:/*#__PURE__*/(0,s/* .jsxs */.BX)("ul",{css:[eA.options],children:[!c&&/*#__PURE__*/(0,s/* .jsx */.tZ)("li",{css:eA.inputWrapperListItem,children:/*#__PURE__*/(0,s/* .jsxs */.BX)("div",{css:[eA.inputWrapper,eA.portalInputWrapper],children:[/*#__PURE__*/(0,s/* .jsx */.tZ)("div",{css:eA.leftIcon,children:/*#__PURE__*/(0,s/* .jsx */.tZ)(h/* ["default"] */.Z,{name:"search",width:24,height:24})}),/*#__PURE__*/(0,s/* .jsx */.tZ)("input",(0,a._)((0,o._)({},n),{autoFocus:true,className:"tutor-input-field",css:[r,eA.input],autoComplete:"off",readOnly:g||!b,placeholder:f,value:W,onChange:e=>{M(e.target.value)}}))]})}),/*#__PURE__*/(0,s/* .jsx */.tZ)(U/* ["default"] */.Z,{when:B.length>0,fallback:/*#__PURE__*/(0,s/* .jsx */.tZ)("li",{css:eA.noUserFound,children:/*#__PURE__*/(0,s/* .jsx */.tZ)("p",{children:(0,u.__)("No user found","tutor")})}),children:B.map((e,r)=>/*#__PURE__*/(0,s/* .jsx */.tZ)("li",{css:eA.optionItem,"data-active":P===r,onMouseOver:()=>R(r),onMouseLeave:()=>r!==P&&R(-1),ref:P===r?F:null,onFocus:()=>R(r),children:/*#__PURE__*/(0,s/* .jsxs */.BX)("button",{type:"button",css:eA.label,onClick:()=>{var r=w?(0,a._)((0,o._)({},e),{isRemoveAble:true}):e;var n=Array.isArray(k)?[...k,r]:r;t.onChange(n);M("");i(n);S(false)},"aria-selected":P===r,children:[/*#__PURE__*/(0,s/* .jsx */.tZ)("img",{src:e.avatar_url?e.avatar_url:eM,alt:e.name,css:eA.instructorAvatar}),/*#__PURE__*/(0,s/* .jsxs */.BX)("div",{children:[/*#__PURE__*/(0,s/* .jsx */.tZ)("div",{css:eA.instructorName,children:e.name}),/*#__PURE__*/(0,s/* .jsx */.tZ)("div",{css:eA.instructorEmail,children:e.email})]})]})},String(e.id)))})]})})})]})}})};/* ESM default export */const eO=(0,z/* .withVisibilityControl */.v)(eN);var eA={mainWrapper:/*#__PURE__*/(0,l/* .css */.iv)("width:100%;"),inputWrapper:/*#__PURE__*/(0,l/* .css */.iv)("width:100%;display:flex;justify-content:space-between;align-items:center;position:relative;"),portalInputWrapper:/*#__PURE__*/(0,l/* .css */.iv)("padding:",P/* .spacing["8"] */.W0["8"],";"),inputWrapperListItem:/*#__PURE__*/(0,l/* .css */.iv)("position:sticky;top:0px;padding:0px;background-color:inherit;"),leftIcon:/*#__PURE__*/(0,l/* .css */.iv)("position:absolute;left:",P/* .spacing["12"] */.W0["12"],";top:50%;transform:translateY(-50%);color:",P/* .colorTokens.icon["default"] */.Jv.icon["default"],";display:flex;"),input:/*#__PURE__*/(0,l/* .css */.iv)(R/* .typography.body */.c.body(),";width:100%;padding-right:",P/* .spacing["32"] */.W0["32"],";padding-left:",P/* .spacing["36"] */.W0["36"],";",j/* .styleUtils.textEllipsis */.i.textEllipsis,";border-color:transparent;:focus{outline:none;box-shadow:none;}&.tutor-input-field{padding-right:",P/* .spacing["32"] */.W0["32"],";padding-left:",P/* .spacing["36"] */.W0["36"],";}"),instructorList:/*#__PURE__*/(0,l/* .css */.iv)("display:flex;flex-direction:column;gap:",P/* .spacing["8"] */.W0["8"],";margin-top:",P/* .spacing["8"] */.W0["8"],";"),instructorItem:e=>{var{isDefaultItem:t=false}=e;return/*#__PURE__*/(0,l/* .css */.iv)(j/* .styleUtils.resetButton */.i.resetButton,";position:relative;width:100%;display:flex;align-items:center;justify-content:space-between;padding:",P/* .spacing["8"] */.W0["8"]," ",P/* .spacing["16"] */.W0["16"]," ",P/* .spacing["8"] */.W0["8"]," ",P/* .spacing["12"] */.W0["12"],";border:1px solid transparent;border-radius:",P/* .borderRadius.input */.E0.input,";background-color:",P/* .colorTokens.bg.white */.Jv.bg.white,";&:hover,&:focus,&:active{background-color:",P/* .colorTokens.bg.white */.Jv.bg.white,";}&:focus{outline:2px solid ",P/* .colorTokens.stroke.brand */.Jv.stroke.brand,";outline-offset:1px;}",t&&(0,l/* .css */.iv)(eT(),P/* .colorTokens.stroke["default"] */.Jv.stroke["default"]),"    &:hover{border-color:",P/* .colorTokens.stroke.divider */.Jv.stroke.divider,";[data-instructor-delete-button]{opacity:1;}}",P/* .Breakpoint.smallTablet */.Uo.smallTablet,"{[data-instructor-delete-button]{opacity:1;}}")},instructorInfo:/*#__PURE__*/(0,l/* .css */.iv)("display:flex;align-items:center;gap:",P/* .spacing["10"] */.W0["10"],";"),instructorAvatar:/*#__PURE__*/(0,l/* .css */.iv)("height:40px;width:40px;border:1px solid ",P/* .colorTokens.stroke["default"] */.Jv.stroke["default"],";border-radius:",P/* .borderRadius.circle */.E0.circle,";"),instructorName:/*#__PURE__*/(0,l/* .css */.iv)(R/* .typography.caption */.c.caption(),";display:flex;align-items:center;gap:",P/* .spacing["4"] */.W0["4"],";"),instructorEmail:/*#__PURE__*/(0,l/* .css */.iv)(R/* .typography.small */.c.small(),";color:",P/* .colorTokens.text.subdued */.Jv.text.subdued,";"),optionsWrapper:/*#__PURE__*/(0,l/* .css */.iv)("position:absolute;width:100%;"),instructorDeleteButton:/*#__PURE__*/(0,l/* .css */.iv)(j/* .styleUtils.crossButton */.i.crossButton,";color:",P/* .colorTokens.icon["default"] */.Jv.icon["default"],";opacity:0;transition:none;&:hover,&:focus,&:active{background-color:",P/* .colorTokens.bg.white */.Jv.bg.white,";}&:focus{box-shadow:",P/* .shadow.focus */.AF.focus,";}:focus-visible{opacity:1;}"),options:/*#__PURE__*/(0,l/* .css */.iv)("z-index:",P/* .zIndex.dropdown */.W5.dropdown,";background-color:",P/* .colorTokens.background.white */.Jv.background.white,";list-style-type:none;box-shadow:",P/* .shadow.popover */.AF.popover,";margin:",P/* .spacing["4"] */.W0["4"]," 0;margin:0;max-height:400px;border:1px solid ",P/* .colorTokens.stroke.border */.Jv.stroke.border,";border-radius:",P/* .borderRadius["6"] */.E0["6"],";",j/* .styleUtils.overflowYAuto */.i.overflowYAuto,";scrollbar-gutter:auto;min-width:200px;"),optionItem:/*#__PURE__*/(0,l/* .css */.iv)(R/* .typography.body */.c.body(),";min-height:36px;height:100%;width:100%;display:flex;align-items:center;transition:background-color 0.3s ease-in-out;cursor:pointer;&[data-active='true']{background-color:",P/* .colorTokens.background.hover */.Jv.background.hover,";}&:hover{background-color:",P/* .colorTokens.background.hover */.Jv.background.hover,";}"),label:/*#__PURE__*/(0,l/* .css */.iv)(j/* .styleUtils.resetButton */.i.resetButton,";width:100%;height:100%;display:flex;gap:",P/* .spacing["8"] */.W0["8"],";padding:",P/* .spacing["8"] */.W0["8"]," ",P/* .spacing["12"] */.W0["12"],";text-align:left;line-height:",P/* .lineHeight["24"] */.Nv["24"],";word-break:break-all;cursor:pointer;&:hover,&:focus,&:active{background:none;}&:focus-visible{outline:2px solid ",P/* .colorTokens.stroke.brand */.Jv.stroke.brand,";outline-offset:-2px;border-radius:",P/* .borderRadius["6"] */.E0["6"],";}"),optionsContainer:/*#__PURE__*/(0,l/* .css */.iv)("position:absolute;overflow:hidden auto;min-width:16px;min-height:16px;max-width:calc(100% - 32px);max-height:calc(100% - 32px);"),toggleIcon:e=>{var{isOpen:t=false}=e;return/*#__PURE__*/(0,l/* .css */.iv)("position:absolute;top:0;bottom:0;right:",P/* .spacing["8"] */.W0["8"],";",j/* .styleUtils.flexCenter */.i.flexCenter(),";color:",P/* .colorTokens.icon["default"] */.Jv.icon["default"],";transition:transform 0.3s ease-in-out;",t&&(0,l/* .css */.iv)(eB()))},noUserFound:/*#__PURE__*/(0,l/* .css */.iv)("padding:",P/* .spacing["8"] */.W0["8"],";text-align:center;"),emptyState:/*#__PURE__*/(0,l/* .css */.iv)(j/* .styleUtils.flexCenter */.i.flexCenter(),";",R/* .typography.caption */.c.caption(),";margin-top:",P/* .spacing["8"] */.W0["8"],";padding:",P/* .spacing["8"] */.W0["8"],";background-color:",P/* .colorTokens.background.white */.Jv.background.white,";border:1px solid ",P/* .colorTokens.stroke.divider */.Jv.stroke.divider,";border-radius:",P/* .borderRadius["4"] */.E0["4"],";")};// CONCATENATED MODULE: ./assets/react/v3/shared/atoms/Chip.tsx
function eL(){var e=(0,i._)(["\n      cursor: inherit;\n    "]);eL=function t(){return e};return e}function eJ(){var e=(0,i._)(["\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      gap: ",";\n      padding: "," "," "," ",";\n    "]);eJ=function t(){return e};return e}var eP=e=>{var{label:t,onClick:r=X/* .noop */.ZT,showIcon:n=true,icon:o=/*#__PURE__*/(0,s/* .jsx */.tZ)(h/* ["default"] */.Z,{name:"cross",width:20,height:20}),isClickable:a}=e;if(a){return/*#__PURE__*/(0,s/* .jsxs */.BX)("button",{type:"button",css:eU.wrapper({hasIcon:n,isClickable:true}),onClick:r,children:[/*#__PURE__*/(0,s/* .jsx */.tZ)("div",{css:eU.label,children:t}),n&&/*#__PURE__*/(0,s/* .jsx */.tZ)("div",{css:eU.iconWrapper,"data-icon-wrapper":true,children:o})]})}return/*#__PURE__*/(0,s/* .jsxs */.BX)("div",{css:eU.wrapper({hasIcon:n,isClickable:false}),children:[/*#__PURE__*/(0,s/* .jsx */.tZ)("div",{css:eU.label,children:t}),n&&/*#__PURE__*/(0,s/* .jsx */.tZ)("button",{type:"button",css:eU.iconWrapper,onClick:r,"data-icon-wrapper":true,children:o})]})};/* ESM default export */const eR=eP;var eU={wrapper:e=>{var{hasIcon:t=false,isClickable:r}=e;return/*#__PURE__*/(0,l/* .css */.iv)(j/* .styleUtils.resetButton */.i.resetButton,";background-color:#e4e5e7;border-radius:",P/* .borderRadius["24"] */.E0["24"],";padding:",P/* .spacing["4"] */.W0["4"]," ",P/* .spacing["8"] */.W0["8"],";min-height:24px;transition:background-color 0.3s ease;",!r&&(0,l/* .css */.iv)(eL())," ",t&&(0,l/* .css */.iv)(eJ(),P/* .spacing["2"] */.W0["2"],P/* .spacing["4"] */.W0["4"],P/* .spacing["8"] */.W0["8"],P/* .spacing["4"] */.W0["4"],P/* .spacing["12"] */.W0["12"]),":hover{[data-icon-wrapper]{> svg{color:",P/* .colorTokens.icon.hover */.Jv.icon.hover,";}}}")},label:/*#__PURE__*/(0,l/* .css */.iv)(R/* .typography.caption */.c.caption()),iconWrapper:/*#__PURE__*/(0,l/* .css */.iv)(j/* .styleUtils.resetButton */.i.resetButton,";border-radius:",P/* .borderRadius.circle */.E0.circle,";transition:background-color 0.3s ease;height:20px;width:20px;text-align:center;&:focus,&:active,&:hover{background:none;}svg{color:",P/* .colorTokens.icon["default"] */.Jv.icon["default"],";transition:color 0.3s ease;}")};// CONCATENATED MODULE: ./assets/react/v3/shared/services/tags.ts
var ez=e=>{return es/* .wpAuthApiInstance.get */.B.get(el/* ["default"].TAGS */.Z.TAGS,{params:e})};var ej=e=>{return(0,eo/* .useQuery */.a)({queryKey:["TagList",e],queryFn:()=>ez(e).then(e=>e.data)})};var eX=e=>{return es/* .wpAuthApiInstance.post */.B.post(el/* ["default"].TAGS */.Z.TAGS,e)};var eF=()=>{var e=(0,c/* .useQueryClient */.NL)();var{showToast:t}=(0,ei/* .useToast */.p)();return(0,ea/* .useMutation */.D)({mutationFn:eX,onSuccess:()=>{e.invalidateQueries({queryKey:["TagList"]})},onError:e=>{// @TODO: Need to add proper type definition for wp rest api errors
t({type:"danger",message:(0,X/* .convertToErrorMessage */.Mo)(e)})}})};// CONCATENATED MODULE: ./assets/react/v3/shared/components/fields/FormTagsInput.tsx
function eY(){var e=(0,i._)(["\n      min-width: 200px;\n    "]);eY=function t(){return e};return e}var eQ=e=>{var{field:t,fieldState:r,label:i,placeholder:l="",disabled:c,readOnly:d,loading:f,helpText:p,removeOptionsMinWidth:g=false}=e;var m;var b;var _=(b=t.value)!==null&&b!==void 0?b:[];var[y,w]=(0,v.useState)("");var x=(0,ee/* .useDebounce */.N)(y);var[Z,k]=(0,v.useState)(false);var C=ej({search:x});var D=eF();var{triggerRef:E,triggerWidth:S,position:W,popoverRef:M}=(0,en/* .usePortalPopover */.l)({isOpen:Z,isDropdown:true,dependencies:[(m=C.data)===null||m===void 0?void 0:m.length]});var T;var B=(T=C.data)!==null&&T!==void 0?T:[];var I=(e,r)=>{if(e){t.onChange([..._,r])}else{t.onChange(_.filter(e=>e.id!==r.id))}};var N=()=>(0,n._)(function*(){if(y.length){var e=yield D.mutateAsync({name:y});t.onChange([..._,e.data]);k(false);w("")}})();return/*#__PURE__*/(0,s/* .jsx */.tZ)(ef/* ["default"] */.Z,{fieldState:r,field:t,label:i,disabled:c,readOnly:d,loading:f,helpText:p,children:e=>{var{css:t}=e,r=(0,eS._)(e,["css"]);return/*#__PURE__*/(0,s/* .jsxs */.BX)("div",{css:eH.mainWrapper,children:[/*#__PURE__*/(0,s/* .jsx */.tZ)("div",{css:eH.inputWrapper,ref:E,children:/*#__PURE__*/(0,s/* .jsx */.tZ)("input",(0,a._)((0,o._)({},r),{css:[t,eH.input],onClick:e=>{e.stopPropagation();k(e=>!e)},onKeyDown:e=>{if(e.key==="Enter"){e.preventDefault();k(e=>!e)}if(e.key==="Tab"){k(false)}},autoComplete:"off",readOnly:d,placeholder:l,value:y,onChange:e=>{w(e.target.value)}}))}),_.length>0&&/*#__PURE__*/(0,s/* .jsx */.tZ)("div",{css:eH.tagsWrapper,children:_.map(e=>/*#__PURE__*/(0,s/* .jsx */.tZ)(eR,{label:(0,X/* .decodeHtmlEntities */.aV)(e.name),onClick:()=>I(false,e)},e.id))}),/*#__PURE__*/(0,s/* .jsx */.tZ)(en/* .Portal */.h,{isOpen:Z,onClickOutside:()=>k(false),onEscape:()=>k(false),children:/*#__PURE__*/(0,s/* .jsx */.tZ)("div",{css:[eH.optionsWrapper,{[J/* .isRTL */.dZ?"right":"left"]:W.left,top:W.top,maxWidth:S}],ref:M,children:/*#__PURE__*/(0,s/* .jsxs */.BX)("ul",{css:[eH.options(g)],children:[y.length>0&&/*#__PURE__*/(0,s/* .jsx */.tZ)("li",{children:/*#__PURE__*/(0,s/* .jsxs */.BX)("button",{type:"button",css:eH.addTag,onClick:N,children:[/*#__PURE__*/(0,s/* .jsx */.tZ)(h/* ["default"] */.Z,{name:"plus",width:24,height:24}),/*#__PURE__*/(0,s/* .jsx */.tZ)("strong",{children:(0,u.__)("Add","tutor")})," ",y]})}),/*#__PURE__*/(0,s/* .jsx */.tZ)(U/* ["default"] */.Z,{when:B.length>0,fallback:/*#__PURE__*/(0,s/* .jsx */.tZ)("div",{css:eH.notTag,children:(0,u.__)("No tag created yet.","tutor")}),children:B.map(e=>/*#__PURE__*/(0,s/* .jsx */.tZ)("li",{css:eH.optionItem,children:/*#__PURE__*/(0,s/* .jsx */.tZ)(K/* ["default"] */.Z,{label:(0,X/* .decodeHtmlEntities */.aV)(e.name),checked:!!_.find(t=>t.id===e.id),onChange:t=>I(t,e)})},String(e.id)))})]})})})]})}})};/* ESM default export */const eq=(0,z/* .withVisibilityControl */.v)(eQ);var eH={mainWrapper:/*#__PURE__*/(0,l/* .css */.iv)("width:100%;"),notTag:/*#__PURE__*/(0,l/* .css */.iv)(R/* .typography.caption */.c.caption(),";min-height:80px;display:flex;justify-content:center;align-items:center;color:",P/* .colorTokens.text.subdued */.Jv.text.subdued,";"),inputWrapper:/*#__PURE__*/(0,l/* .css */.iv)("width:100%;display:flex;justify-content:space-between;align-items:center;position:relative;"),input:/*#__PURE__*/(0,l/* .css */.iv)(R/* .typography.body */.c.body(),";width:100%;",j/* .styleUtils.textEllipsis */.i.textEllipsis,";:focus{outline:none;box-shadow:",P/* .shadow.focus */.AF.focus,";}"),tagsWrapper:/*#__PURE__*/(0,l/* .css */.iv)("display:flex;flex-wrap:wrap;align-items:center;gap:",P/* .spacing["4"] */.W0["4"],";margin-top:",P/* .spacing["8"] */.W0["8"],";"),optionsWrapper:/*#__PURE__*/(0,l/* .css */.iv)("position:absolute;width:100%;"),options:e=>/*#__PURE__*/(0,l/* .css */.iv)("z-index:",P/* .zIndex.dropdown */.W5.dropdown,";background-color:",P/* .colorTokens.background.white */.Jv.background.white,";list-style-type:none;box-shadow:",P/* .shadow.popover */.AF.popover,";padding:",P/* .spacing["4"] */.W0["4"]," 0;margin:0;max-height:400px;border:1px solid ",P/* .colorTokens.stroke.border */.Jv.stroke.border,";border-radius:",P/* .borderRadius["6"] */.E0["6"],";",j/* .styleUtils.overflowYAuto */.i.overflowYAuto,";scrollbar-gutter:auto;",!e&&(0,l/* .css */.iv)(eY())),optionItem:/*#__PURE__*/(0,l/* .css */.iv)("min-height:40px;height:100%;width:100%;display:flex;align-items:center;padding:",P/* .spacing["8"] */.W0["8"],";transition:background-color 0.3s ease-in-out;label{width:100%;}&:hover{background-color:",P/* .colorTokens.background.hover */.Jv.background.hover,";}"),addTag:/*#__PURE__*/(0,l/* .css */.iv)(j/* .styleUtils.resetButton */.i.resetButton,";",R/* .typography.body */.c.body(),"    line-height:",P/* .lineHeight["24"] */.Nv["24"],";display:flex;align-items:center;gap:",P/* .spacing["4"] */.W0["4"],";width:100%;padding:",P/* .spacing["8"] */.W0["8"],";&:focus,&:active,&:hover{background-color:",P/* .colorTokens.background.hover */.Jv.background.hover,";color:",P/* .colorTokens.text.primary */.Jv.text.primary,";}")};// EXTERNAL MODULE: ./assets/react/v3/shared/components/fields/FormVideoInput.tsx + 2 modules
var eV=r(69789);// CONCATENATED MODULE: ./assets/react/v3/shared/services/users.ts
var eG=e=>{return es/* .wpAjaxInstance.get */.R.get(el/* ["default"].USERS_LIST */.Z.USERS_LIST,{params:{filter:{search:e,role:[J/* .TutorRoles.ADMINISTRATOR */.er.ADMINISTRATOR,J/* .TutorRoles.TUTOR_INSTRUCTOR */.er.TUTOR_INSTRUCTOR]}}})};var eK=e=>{return(0,eo/* .useQuery */.a)({queryKey:["UserList",e],queryFn:()=>eG(e).then(e=>e.data.results.map(e=>({id:e.id,name:e.display_name,email:e.user_email,avatar_url:e.avatar_url})))})};var e$=e=>{return es/* .wpAjaxInstance.get */.R.get(el/* ["default"].TUTOR_INSTRUCTOR_SEARCH */.Z.TUTOR_INSTRUCTOR_SEARCH,{params:{course_id:e}}).then(e=>e.data)};var e0=(e,t)=>{return(0,eo/* .useQuery */.a)({queryKey:["InstructorList",e],queryFn:()=>e$(e).then(e=>{return e.map(e=>({id:e.id,name:e.display_name,email:e.user_email,avatar_url:e.avatar_url}))}),enabled:t})};// EXTERNAL MODULE: ./node_modules/react-router/dist/index.js
var e1=r(89250);// EXTERNAL MODULE: ./assets/react/v3/shared/components/fields/FormInputWithContent.tsx
var e2=r(35159);// EXTERNAL MODULE: ./assets/react/v3/shared/components/fields/FormRadioGroup.tsx
var e4=r(90097);// EXTERNAL MODULE: ./assets/react/v3/shared/components/modals/Modal.tsx
var e3=r(63260);// EXTERNAL MODULE: ./node_modules/@dnd-kit/core/dist/core.esm.js
var e8=r(94697);// EXTERNAL MODULE: ./node_modules/@dnd-kit/modifiers/dist/modifiers.esm.js
var e6=r(32339);// EXTERNAL MODULE: ./node_modules/@dnd-kit/sortable/dist/sortable.esm.js
var e5=r(45587);// EXTERNAL MODULE: external "ReactDOM"
var e9=r(61533);// EXTERNAL MODULE: ./assets/react/v3/shared/components/modals/ModalWrapper.tsx
var e7=r(36951);// CONCATENATED MODULE: ./assets/react/v3/public/images/subscriptions-empty-state-2x.webp
const te=r.p+"js/images/subscriptions-empty-state-2x-613fb8dd.webp";// CONCATENATED MODULE: ./assets/react/v3/public/images/subscriptions-empty-state.webp
const tt=r.p+"js/images/subscriptions-empty-state-5efc6d18.webp";// CONCATENATED MODULE: ./assets/react/v3/shared/components/subscription/SubscriptionEmptyState.tsx
var tr=e=>{var{onCreateSubscription:t}=e;return/*#__PURE__*/(0,s/* .jsxs */.BX)("div",{css:tn.wrapper,children:[/*#__PURE__*/(0,s/* .jsx */.tZ)("div",{css:tn.banner,children:/*#__PURE__*/(0,s/* .jsx */.tZ)("img",{src:tt,srcSet:"".concat(tt," ").concat(te," 2x"),alt:(0,u.__)("Empty state banner","tutor")})}),/*#__PURE__*/(0,s/* .jsxs */.BX)("div",{css:tn.content,children:[/*#__PURE__*/(0,s/* .jsx */.tZ)("h5",{children:(0,u.__)("Boost Revenue with Subscriptions","tutor")}),/*#__PURE__*/(0,s/* .jsx */.tZ)("p",{children:(0,u.__)("Offer flexible subscription plans to maximize your earnings and provide students with affordable access to your courses.","tutor")})]}),/*#__PURE__*/(0,s/* .jsx */.tZ)("div",{css:tn.action,children:/*#__PURE__*/(0,s/* .jsx */.tZ)(S/* ["default"] */.Z,{variant:"secondary",icon:/*#__PURE__*/(0,s/* .jsx */.tZ)(h/* ["default"] */.Z,{name:"plusSquareBrand",width:24,height:24}),onClick:t,children:(0,u.__)("Add Subscription","tutor")})})]})};var tn={wrapper:/*#__PURE__*/(0,l/* .css */.iv)("display:flex;flex-direction:column;gap:",P/* .spacing["32"] */.W0["32"],";justify-content:center;max-width:640px;width:100%;padding-block:",P/* .spacing["40"] */.W0["40"],";margin-inline:auto;"),content:/*#__PURE__*/(0,l/* .css */.iv)("display:grid;gap:",P/* .spacing["12"] */.W0["12"],";text-align:center;max-width:566px;width:100%;margin:0 auto;h5{",R/* .typography.heading5 */.c.heading5("medium"),";color:",P/* .colorTokens.text.primary */.Jv.text.primary,";}p{",R/* .typography.caption */.c.caption(),";color:",P/* .colorTokens.text.hints */.Jv.text.hints,";}"),action:/*#__PURE__*/(0,l/* .css */.iv)("display:flex;justify-content:center;"),banner:/*#__PURE__*/(0,l/* .css */.iv)("width:100%;height:232px;background-color:",P/* .colorTokens.background.status.drip */.Jv.background.status.drip,";display:flex;align-items:center;justify-content:center;border-radius:",P/* .borderRadius["8"] */.E0["8"],";position:relative;overflow:hidden;img{position:absolute;top:0;left:0;width:100%;height:100%;object-fit:cover;}")};// EXTERNAL MODULE: ./node_modules/@dnd-kit/utilities/dist/utilities.esm.js
var to=r(24285);// EXTERNAL MODULE: ./node_modules/@react-spring/web/dist/react-spring_web.modern.mjs
var ta=r(6154);// EXTERNAL MODULE: ./assets/react/v3/shared/atoms/Tooltip.tsx
var ti=r(58982);// EXTERNAL MODULE: ./assets/react/v3/shared/molecules/ConfirmationPopover.tsx
var ts=r(65361);// CONCATENATED MODULE: ./assets/react/v3/shared/components/fields/FormInputWithPresets.tsx
function tl(){var e=(0,i._)(["\n      border: 1px solid ",";\n      border-radius: ",";\n      box-shadow: ",";\n      background-color: ",";\n    "]);tl=function t(){return e};return e}function tc(){var e=(0,i._)(["\n      border-color: ",";\n      background-color: ",";\n    "]);tc=function t(){return e};return e}function td(){var e=(0,i._)(["\n        border-color: ",";\n      "]);td=function t(){return e};return e}function tu(){var e=(0,i._)(["\n          padding-",": ",";\n        "]);tu=function t(){return e};return e}function tv(){var e=(0,i._)(["\n              padding-",": ",";\n            "]);tv=function t(){return e};return e}function tf(){var e=(0,i._)(["\n          font-size: ",";\n          font-weight: ",";\n          height: 34px;\n          ",";\n        "]);tf=function t(){return e};return e}function tp(){var e=(0,i._)(["\n      min-width: 200px;\n    "]);tp=function t(){return e};return e}function th(){var e=(0,i._)(["\n      background-color: ",";\n      position: relative;\n\n      &::before {\n        content: '';\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 3px;\n        height: 100%;\n        background-color: ",";\n        border-radius: 0 "," "," 0;\n      }\n    "]);th=function t(){return e};return e}function tg(){var e=(0,i._)(["\n      ","\n    "]);tg=function t(){return e};return e}function tm(){var e=(0,i._)(["\n      border-right: 1px solid ",";\n    "]);tm=function t(){return e};return e}function tb(){var e=(0,i._)(["\n      ","\n    "]);tb=function t(){return e};return e}function t_(){var e=(0,i._)(["\n      border-left: 1px solid ",";\n    "]);t_=function t(){return e};return e}var ty=e=>{var{field:t,fieldState:r,content:n,contentPosition:i="left",showVerticalBar:l=true,type:c="text",size:d="regular",label:u,placeholder:f="",disabled:p,readOnly:g,loading:m,helpText:b,removeOptionsMinWidth:_=true,onChange:y,presetOptions:w=[],selectOnFocus:x=false,wrapperCss:Z,contentCss:k,removeBorder:C=false}=e;var D;var E=(D=t.value)!==null&&D!==void 0?D:"";var S=(0,v.useRef)(null);var[W,M]=(0,v.useState)(false);var{triggerRef:T,triggerWidth:B,position:I,popoverRef:N}=(0,en/* .usePortalPopover */.l)({isOpen:W,isDropdown:true});return/*#__PURE__*/(0,s/* .jsx */.tZ)(ef/* ["default"] */.Z,{fieldState:r,field:t,label:u,disabled:p,readOnly:g,loading:m,helpText:b,removeBorder:C,placeholder:f,children:e=>{var{css:u}=e,v=(0,eS._)(e,["css"]);return/*#__PURE__*/(0,s/* .jsxs */.BX)(s/* .Fragment */.HY,{children:[/*#__PURE__*/(0,s/* .jsxs */.BX)("div",{css:[tx.inputWrapper(!!r.error,C),Z],ref:T,children:[n&&i==="left"&&/*#__PURE__*/(0,s/* .jsx */.tZ)("div",{css:[tx.inputLeftContent(l,d),k],children:n}),/*#__PURE__*/(0,s/* .jsx */.tZ)("input",(0,a._)((0,o._)({},v),{css:[u,tx.input(i,l,d)],onClick:()=>M(true),autoComplete:"off",readOnly:g,ref:e=>{t.ref(e);// @ts-ignore
S.current=e;// this is not ideal but it is the only way to set ref to the input element
},onFocus:()=>{if(!x||!S.current){return}S.current.select()},value:E,onChange:e=>{var r=c==="number"?e.target.value.replace(/[^0-9.]/g,"").replace(/(\..*)\./g,"$1"):e.target.value;t.onChange(r);if(y){y(r)}},"data-input":true})),n&&i==="right"&&/*#__PURE__*/(0,s/* .jsx */.tZ)("div",{css:tx.inputRightContent(l,d),children:n})]}),/*#__PURE__*/(0,s/* .jsx */.tZ)(en/* .Portal */.h,{isOpen:W,onClickOutside:()=>M(false),onEscape:()=>M(false),children:/*#__PURE__*/(0,s/* .jsx */.tZ)("div",{css:[tx.optionsWrapper,{[J/* .isRTL */.dZ?"right":"left"]:I.left,top:I.top,maxWidth:B}],ref:N,children:/*#__PURE__*/(0,s/* .jsx */.tZ)("ul",{css:[tx.options(_)],children:w.map(e=>/*#__PURE__*/(0,s/* .jsx */.tZ)("li",{css:tx.optionItem({isSelected:e.value===t.value}),children:/*#__PURE__*/(0,s/* .jsxs */.BX)("button",{type:"button",css:tx.label,onClick:()=>{t.onChange(e.value);y===null||y===void 0?void 0:y(e.value);M(false)},children:[/*#__PURE__*/(0,s/* .jsx */.tZ)(U/* ["default"] */.Z,{when:e.icon,children:/*#__PURE__*/(0,s/* .jsx */.tZ)(h/* ["default"] */.Z,{name:e.icon,width:32,height:32})}),/*#__PURE__*/(0,s/* .jsx */.tZ)("span",{children:e.label})]})},String(e.value)))})})})]})}})};/* ESM default export */const tw=ty;var tx={mainWrapper:/*#__PURE__*/(0,l/* .css */.iv)("width:100%;"),inputWrapper:(e,t)=>/*#__PURE__*/(0,l/* .css */.iv)("display:flex;align-items:center;",!t&&(0,l/* .css */.iv)(tl(),P/* .colorTokens.stroke["default"] */.Jv.stroke["default"],P/* .borderRadius["6"] */.E0["6"],P/* .shadow.input */.AF.input,P/* .colorTokens.background.white */.Jv.background.white)," ",e&&(0,l/* .css */.iv)(tc(),P/* .colorTokens.stroke.danger */.Jv.stroke.danger,P/* .colorTokens.background.status.errorFail */.Jv.background.status.errorFail),";&:focus-within{",j/* .styleUtils.inputFocus */.i.inputFocus,";",e&&(0,l/* .css */.iv)(td(),P/* .colorTokens.stroke.danger */.Jv.stroke.danger),"}"),input:(e,t,r)=>/*#__PURE__*/(0,l/* .css */.iv)("&[data-input]{",R/* .typography.body */.c.body(),";border:none;box-shadow:none;background-color:transparent;padding-",e,":0;",t&&(0,l/* .css */.iv)(tu(),e,P/* .spacing["10"] */.W0["10"]),";",r==="large"&&(0,l/* .css */.iv)(tf(),P/* .fontSize["24"] */.JB["24"],P/* .fontWeight.medium */.Ue.medium,t&&(0,l/* .css */.iv)(tv(),e,P/* .spacing["12"] */.W0["12"])),"      &:focus{box-shadow:none;outline:none;}}"),label:/*#__PURE__*/(0,l/* .css */.iv)(j/* .styleUtils.resetButton */.i.resetButton,";width:100%;height:100%;display:flex;align-items:center;gap:",P/* .spacing["8"] */.W0["8"],";margin:0 ",P/* .spacing["12"] */.W0["12"],";padding:",P/* .spacing["6"] */.W0["6"]," 0;text-align:left;line-height:",P/* .lineHeight["24"] */.Nv["24"],";word-break:break-all;cursor:pointer;span{flex-shrink:0;}"),optionsWrapper:/*#__PURE__*/(0,l/* .css */.iv)("position:absolute;width:100%;"),options:e=>/*#__PURE__*/(0,l/* .css */.iv)("z-index:",P/* .zIndex.dropdown */.W5.dropdown,";background-color:",P/* .colorTokens.background.white */.Jv.background.white,";list-style-type:none;box-shadow:",P/* .shadow.popover */.AF.popover,";padding:",P/* .spacing["4"] */.W0["4"]," 0;margin:0;max-height:500px;border-radius:",P/* .borderRadius["6"] */.E0["6"],";",j/* .styleUtils.overflowYAuto */.i.overflowYAuto,";",!e&&(0,l/* .css */.iv)(tp())),optionItem:e=>{var{isSelected:t=false}=e;return/*#__PURE__*/(0,l/* .css */.iv)(R/* .typography.body */.c.body(),";min-height:36px;height:100%;width:100%;display:flex;align-items:center;transition:background-color 0.3s ease-in-out;cursor:pointer;&:hover{background-color:",P/* .colorTokens.background.hover */.Jv.background.hover,";}",t&&(0,l/* .css */.iv)(th(),P/* .colorTokens.background.active */.Jv.background.active,P/* .colorTokens.action.primary["default"] */.Jv.action.primary["default"],P/* .borderRadius["6"] */.E0["6"],P/* .borderRadius["6"] */.E0["6"]))},inputLeftContent:(e,t)=>/*#__PURE__*/(0,l/* .css */.iv)(R/* .typography.small */.c.small()," ",j/* .styleUtils.flexCenter */.i.flexCenter(),"    height:40px;min-width:48px;color:",P/* .colorTokens.icon.subdued */.Jv.icon.subdued,";padding-inline:",P/* .spacing["12"] */.W0["12"],";",t==="large"&&(0,l/* .css */.iv)(tg(),R/* .typography.body */.c.body())," ",e&&(0,l/* .css */.iv)(tm(),P/* .colorTokens.stroke["default"] */.Jv.stroke["default"])),inputRightContent:(e,t)=>/*#__PURE__*/(0,l/* .css */.iv)(R/* .typography.small */.c.small()," ",j/* .styleUtils.flexCenter */.i.flexCenter(),"    height:40px;min-width:48px;color:",P/* .colorTokens.icon.subdued */.Jv.icon.subdued,";padding-inline:",P/* .spacing["12"] */.W0["12"],";",t==="large"&&(0,l/* .css */.iv)(tb(),R/* .typography.body */.c.body())," ",e&&(0,l/* .css */.iv)(t_(),P/* .colorTokens.stroke["default"] */.Jv.stroke["default"]))};// CONCATENATED MODULE: ./assets/react/v3/shared/components/subscription/OfferSalePrice.tsx
var{tutor_currency:tZ}=L/* .tutorConfig */.y;function tk(e){var{index:t}=e;var r=(0,f/* .useFormContext */.Gc)();var n=r.watch("subscriptions.".concat(t,".offer_sale_price"));var i=r.watch("subscriptions.".concat(t,".regular_price"));var l=!!r.watch("subscriptions.".concat(t,".schedule_sale_price"));return/*#__PURE__*/(0,s/* .jsxs */.BX)("div",{css:tC.wrapper,children:[/*#__PURE__*/(0,s/* .jsx */.tZ)("div",{children:/*#__PURE__*/(0,s/* .jsx */.tZ)(f/* .Controller */.Qr,{control:r.control,name:"subscriptions.".concat(t,".offer_sale_price"),render:e=>/*#__PURE__*/(0,s/* .jsx */.tZ)(N/* ["default"] */.Z,(0,a._)((0,o._)({},e),{label:(0,u.__)("Offer sale price","tutor")}))})}),/*#__PURE__*/(0,s/* .jsx */.tZ)(U/* ["default"] */.Z,{when:n,children:/*#__PURE__*/(0,s/* .jsxs */.BX)("div",{css:tC.inputWrapper,children:[/*#__PURE__*/(0,s/* .jsx */.tZ)(f/* .Controller */.Qr,{control:r.control,name:"subscriptions.".concat(t,".sale_price"),rules:(0,a._)((0,o._)({},(0,F/* .requiredRule */.n0)()),{validate:e=>{if(e&&i&&Number(e)>=Number(i)){return(0,u.__)("Sale price should be less than regular price","tutor")}if(e&&i&&Number(e)<=0){return(0,u.__)("Sale price should be greater than 0","tutor")}return undefined}}),render:e=>/*#__PURE__*/(0,s/* .jsx */.tZ)(e2/* ["default"] */.Z,(0,a._)((0,o._)({},e),{type:"number",label:(0,u.__)("Sale Price","tutor"),content:(tZ===null||tZ===void 0?void 0:tZ.symbol)||"$",selectOnFocus:true,contentCss:j/* .styleUtils.inputCurrencyStyle */.i.inputCurrencyStyle}))}),/*#__PURE__*/(0,s/* .jsx */.tZ)(f/* .Controller */.Qr,{control:r.control,name:"subscriptions.".concat(t,".schedule_sale_price"),render:e=>/*#__PURE__*/(0,s/* .jsx */.tZ)(T/* ["default"] */.Z,(0,a._)((0,o._)({},e),{label:(0,u.__)("Schedule the sale price","tutor")}))}),/*#__PURE__*/(0,s/* .jsxs */.BX)(U/* ["default"] */.Z,{when:l,children:[/*#__PURE__*/(0,s/* .jsxs */.BX)("div",{css:tC.datetimeWrapper,children:[/*#__PURE__*/(0,s/* .jsx */.tZ)("label",{children:(0,u.__)("Sale starts from","tutor")}),/*#__PURE__*/(0,s/* .jsxs */.BX)("div",{css:j/* .styleUtils.dateAndTimeWrapper */.i.dateAndTimeWrapper,children:[/*#__PURE__*/(0,s/* .jsx */.tZ)(f/* .Controller */.Qr,{name:"subscriptions.".concat(t,".sale_price_from_date"),control:r.control,rules:{required:(0,u.__)("Schedule date is required","tutor")},render:e=>/*#__PURE__*/(0,s/* .jsx */.tZ)(B/* ["default"] */.Z,(0,a._)((0,o._)({},e),{isClearable:false,placeholder:"yyyy-mm-dd",disabledBefore:new Date().toISOString()}))}),/*#__PURE__*/(0,s/* .jsx */.tZ)(f/* .Controller */.Qr,{name:"subscriptions.".concat(t,".sale_price_from_time"),control:r.control,rules:{required:(0,u.__)("Schedule time is required","tutor")},render:e=>/*#__PURE__*/(0,s/* .jsx */.tZ)(O/* ["default"] */.Z,(0,a._)((0,o._)({},e),{interval:60,isClearable:false,placeholder:"hh:mm A"}))})]})]}),/*#__PURE__*/(0,s/* .jsxs */.BX)("div",{css:tC.datetimeWrapper,children:[/*#__PURE__*/(0,s/* .jsx */.tZ)("label",{children:(0,u.__)("Sale ends to","tutor")}),/*#__PURE__*/(0,s/* .jsxs */.BX)("div",{css:j/* .styleUtils.dateAndTimeWrapper */.i.dateAndTimeWrapper,children:[/*#__PURE__*/(0,s/* .jsx */.tZ)(f/* .Controller */.Qr,{name:"subscriptions.".concat(t,".sale_price_to_date"),control:r.control,rules:{required:(0,u.__)("Schedule date is required","tutor"),validate:{checkEndDate:e=>{var n=r.watch("subscriptions.".concat(t,".sale_price_from_date"));var o=e;if(n&&o){return new Date(n)>new Date(o)?(0,u.__)("Sales End date should be greater than start date","tutor"):undefined}return undefined}},deps:["subscriptions.".concat(t,".sale_price_from_date")]},render:e=>/*#__PURE__*/(0,s/* .jsx */.tZ)(B/* ["default"] */.Z,(0,a._)((0,o._)({},e),{isClearable:false,placeholder:"yyyy-mm-dd",disabledBefore:r.watch("subscriptions.".concat(t,".sale_price_from_date"))||undefined}))}),/*#__PURE__*/(0,s/* .jsx */.tZ)(f/* .Controller */.Qr,{name:"subscriptions.".concat(t,".sale_price_to_time"),control:r.control,rules:{required:(0,u.__)("Schedule time is required","tutor"),validate:{checkEndTime:e=>{var n=r.watch("subscriptions.".concat(t,".sale_price_from_date"));var o=r.watch("subscriptions.".concat(t,".sale_price_from_time"));var a=r.watch("subscriptions.".concat(t,".sale_price_to_date"));var i=e;if(n&&a&&o&&i){return new Date("".concat(n," ").concat(o))>new Date("".concat(a," ").concat(i))?(0,u.__)("Sales End time should be greater than start time","tutor"):undefined}return undefined}},deps:["subscriptions.".concat(t,".sale_price_from_date"),"subscriptions.".concat(t,".sale_price_from_time"),"subscriptions.".concat(t,".sale_price_to_date")]},render:e=>/*#__PURE__*/(0,s/* .jsx */.tZ)(O/* ["default"] */.Z,(0,a._)((0,o._)({},e),{interval:60,isClearable:false,placeholder:"hh:mm A"}))})]})]})]})]})})]})}var tC={wrapper:/*#__PURE__*/(0,l/* .css */.iv)("background-color:",P/* .colorTokens.background.white */.Jv.background.white,";padding:",P/* .spacing["12"] */.W0["12"],";border:1px solid ",P/* .colorTokens.stroke["default"] */.Jv.stroke["default"],";border-radius:",P/* .borderRadius["8"] */.E0["8"],";display:flex;flex-direction:column;gap:",P/* .spacing["20"] */.W0["20"],";"),inputWrapper:/*#__PURE__*/(0,l/* .css */.iv)("display:flex;flex-direction:column;gap:",P/* .spacing["12"] */.W0["12"],";padding:",P/* .spacing["4"] */.W0["4"],";margin:-",P/* .spacing["4"] */.W0["4"],";"),datetimeWrapper:/*#__PURE__*/(0,l/* .css */.iv)("label{",R/* .typography.caption */.c.caption(),";color:",P/* .colorTokens.text.title */.Jv.text.title,";}")};// EXTERNAL MODULE: ./assets/react/v3/shared/hooks/useAnimation.tsx
var tD=r(54354);// CONCATENATED MODULE: ./assets/react/v3/shared/services/subscription.ts
var tE={id:"0",payment_type:"recurring",plan_type:"course",assign_id:"0",plan_name:"",recurring_value:"1",recurring_interval:"month",is_featured:false,regular_price:"0",sale_price:"0",sale_price_from_date:"",sale_price_from_time:"",sale_price_to_date:"",sale_price_to_time:"",recurring_limit:(0,u.__)("Until cancelled","tutor"),do_not_provide_certificate:false,enrollment_fee:"0",trial_value:"1",trial_interval:"day",charge_enrollment_fee:false,enable_free_trial:false,offer_sale_price:false,schedule_sale_price:false};var tS=e=>{var t,r,n,o,a,i,s,l,c,d;return{id:e.id,payment_type:(t=e.payment_type)!==null&&t!==void 0?t:"recurring",plan_type:(r=e.plan_type)!==null&&r!==void 0?r:"course",assign_id:e.assign_id,plan_name:(n=e.plan_name)!==null&&n!==void 0?n:"",recurring_value:(o=e.recurring_value)!==null&&o!==void 0?o:"0",recurring_interval:(a=e.recurring_interval)!==null&&a!==void 0?a:"month",is_featured:!!Number(e.is_featured),regular_price:(i=e.regular_price)!==null&&i!==void 0?i:"0",recurring_limit:e.recurring_limit==="0"?(0,u.__)("Until cancelled","tutor"):e.recurring_limit||"",enrollment_fee:(s=e.enrollment_fee)!==null&&s!==void 0?s:"0",trial_value:(l=e.trial_value)!==null&&l!==void 0?l:"0",trial_interval:(c=e.trial_interval)!==null&&c!==void 0?c:"day",sale_price:(d=e.sale_price)!==null&&d!==void 0?d:"0",charge_enrollment_fee:!!Number(e.enrollment_fee),enable_free_trial:!!Number(e.trial_value),offer_sale_price:!!Number(e.sale_price),schedule_sale_price:!!e.sale_price_from,do_not_provide_certificate:!Number(e.provide_certificate),sale_price_from_date:e.sale_price_from?(0,p["default"])((0,X/* .convertGMTtoLocalDate */.nP)(e.sale_price_from),J/* .DateFormats.yearMonthDay */.E_.yearMonthDay):"",sale_price_from_time:e.sale_price_from?(0,p["default"])((0,X/* .convertGMTtoLocalDate */.nP)(e.sale_price_from),J/* .DateFormats.hoursMinutes */.E_.hoursMinutes):"",sale_price_to_date:e.sale_price_to?(0,p["default"])((0,X/* .convertGMTtoLocalDate */.nP)(e.sale_price_to),J/* .DateFormats.yearMonthDay */.E_.yearMonthDay):"",sale_price_to_time:e.sale_price_to?(0,p["default"])((0,X/* .convertGMTtoLocalDate */.nP)(e.sale_price_to),J/* .DateFormats.hoursMinutes */.E_.hoursMinutes):""}};var tW=e=>{return(0,a._)((0,o._)((0,a._)((0,o._)((0,a._)((0,o._)((0,a._)((0,o._)({},e.id&&String(e.id)!=="0"&&{id:e.id}),{payment_type:e.payment_type,plan_type:e.plan_type,assign_id:e.assign_id,plan_name:e.plan_name}),e.payment_type==="recurring"&&{recurring_value:e.recurring_value,recurring_interval:e.recurring_interval}),{regular_price:e.regular_price,recurring_limit:e.recurring_limit===(0,u.__)("Until cancelled","tutor")?"0":e.recurring_limit,is_featured:e.is_featured?"1":"0"}),e.charge_enrollment_fee&&{enrollment_fee:e.enrollment_fee},e.enable_free_trial&&{trial_value:e.trial_value,trial_interval:e.trial_interval}),{sale_price:e.offer_sale_price?e.sale_price:"0"}),e.schedule_sale_price&&{sale_price_from:(0,X/* .convertToGMT */.WK)(new Date("".concat(e.sale_price_from_date," ").concat(e.sale_price_from_time))),sale_price_to:(0,X/* .convertToGMT */.WK)(new Date("".concat(e.sale_price_to_date," ").concat(e.sale_price_to_time)))}),{provide_certificate:e.do_not_provide_certificate?"0":"1"})};var tM=e=>{return es/* .wpAjaxInstance.post */.R.post(el/* ["default"].GET_SUBSCRIPTIONS_LIST */.Z.GET_SUBSCRIPTIONS_LIST,{object_id:e})};var tT=e=>{return(0,eo/* .useQuery */.a)({queryKey:["SubscriptionsList",e],queryFn:()=>tM(e).then(e=>e.data)})};var tB=(e,t)=>{return es/* .wpAjaxInstance.post */.R.post(el/* ["default"].SAVE_SUBSCRIPTION */.Z.SAVE_SUBSCRIPTION,(0,o._)({object_id:e},t.id&&{id:t.id},t))};var tI=e=>{var t=(0,c/* .useQueryClient */.NL)();var{showToast:r}=(0,ei/* .useToast */.p)();return(0,ea/* .useMutation */.D)({mutationFn:t=>tB(e,t),onSuccess:n=>{if(n.status_code===200||n.status_code===201){r({message:n.message,type:"success"});t.invalidateQueries({queryKey:["SubscriptionsList",e]})}},onError:e=>{r({type:"danger",message:(0,X/* .convertToErrorMessage */.Mo)(e)})}})};var tN=(e,t)=>{return es/* .wpAjaxInstance.post */.R.post(el/* ["default"].DELETE_SUBSCRIPTION */.Z.DELETE_SUBSCRIPTION,{object_id:e,id:t})};var tO=e=>{var t=(0,c/* .useQueryClient */.NL)();var{showToast:r}=(0,ei/* .useToast */.p)();return(0,ea/* .useMutation */.D)({mutationFn:t=>tN(e,t),onSuccess:(n,o)=>{if(n.status_code===200){r({message:n.message,type:"success"});t.setQueryData(["SubscriptionsList",e],e=>{return e.filter(e=>e.id!==String(o))})}},onError:e=>{r({type:"danger",message:(0,X/* .convertToErrorMessage */.Mo)(e)})}})};var tA=(e,t)=>{return es/* .wpAjaxInstance.post */.R.post(el/* ["default"].DUPLICATE_SUBSCRIPTION */.Z.DUPLICATE_SUBSCRIPTION,{object_id:e,id:t})};var tL=e=>{var t=(0,c/* .useQueryClient */.NL)();var{showToast:r}=(0,ei/* .useToast */.p)();return(0,ea/* .useMutation */.D)({mutationFn:t=>tA(e,t),onSuccess:n=>{if(n.data){r({message:n.message,type:"success"});t.invalidateQueries({queryKey:["SubscriptionsList",e]})}},onError:e=>{r({type:"danger",message:(0,X/* .convertToErrorMessage */.Mo)(e)})}})};var tJ=(e,t)=>{return es/* .wpAjaxInstance.post */.R.post(el/* ["default"].SORT_SUBSCRIPTION */.Z.SORT_SUBSCRIPTION,{object_id:e,plan_ids:t})};var tP=e=>{var t=(0,c/* .useQueryClient */.NL)();var{showToast:r}=(0,ei/* .useToast */.p)();return(0,ea/* .useMutation */.D)({mutationFn:t=>tJ(e,t),onSuccess:(r,n)=>{if(r.status_code===200){t.setQueryData(["SubscriptionsList",e],e=>{var t=n.map(e=>String(e));return e.sort((e,r)=>t.indexOf(e.id)-t.indexOf(r.id))});t.invalidateQueries({queryKey:["SubscriptionsList",e]})}},onError:n=>{r({type:"danger",message:(0,X/* .convertToErrorMessage */.Mo)(n)});t.invalidateQueries({queryKey:["SubscriptionsList",e]})}})};var tR=()=>{return wpAjaxInstance.get(endpoints.GET_MEMBERSHIP_PLANS).then(e=>e.data)};var tU=()=>{return useQuery({queryKey:["MembershipPlans"],queryFn:tR})};// EXTERNAL MODULE: ./assets/react/v3/shared/utils/dndkit.ts
var tz=r(28089);// EXTERNAL MODULE: ./assets/react/v3/shared/utils/types.ts
var tj=r(22456);// CONCATENATED MODULE: ./assets/react/v3/shared/components/subscription/SubscriptionItem.tsx
function tX(){var e=(0,i._)(["\n      background-color: ",";\n    "]);tX=function t(){return e};return e}function tF(){var e=(0,i._)(["\n      border-color: ",";\n    "]);tF=function t(){return e};return e}function tY(){var e=(0,i._)(["\n      box-shadow: ",";\n\n      [data-grabber] {\n        cursor: grabbing;\n      }\n    "]);tY=function t(){return e};return e}function tQ(){var e=(0,i._)(["\n      background-color: ",";\n    "]);tQ=function t(){return e};return e}function tq(){var e=(0,i._)(["\n      background-color: ",";\n      border-bottom: 1px solid ",";\n    "]);tq=function t(){return e};return e}function tH(){var e=(0,i._)(["\n          transform: rotate(180deg);\n        "]);tH=function t(){return e};return e}function tV(){var e=(0,i._)(["\n      transform: rotate(180deg);\n    "]);tV=function t(){return e};return e}var tG=100;// this is hack to fix layout shifting while animating.
var{tutor_currency:tK}=L/* .tutorConfig */.y;function t$(e){var{courseId:t,id:r,toggleCollapse:i,bgLight:l=false,isExpanded:c,isOverlay:d=false}=e;var p;var g=(0,v.useRef)(null);var m=(0,v.useRef)(null);var b=(0,v.useRef)(null);var _=(0,f/* .useFormContext */.Gc)();var y=_.watch("subscriptions");var w=y.findIndex(e=>e.id===r);var x=_.watch("subscriptions.".concat(w));var Z=_.formState.isDirty;var k=_.formState.errors.subscriptions?Object.keys(_.formState.errors.subscriptions[w]||{}).length:0;var[C,D]=(0,v.useState)(false);var[E,S]=(0,v.useState)(false);(0,v.useEffect)(()=>{if(c){var e=setTimeout(()=>{_.setFocus("subscriptions.".concat(w,".plan_name"))},tG);if(w>0){var t;(t=g.current)===null||t===void 0?void 0:t.scrollIntoView({behavior:"smooth",block:"start"})}return()=>{clearTimeout(e)}}// eslint-disable-next-line react-hooks/exhaustive-deps
},[c]);(0,v.useEffect)(()=>{var e=e=>{if((0,tj/* .isDefined */.$K)(g.current)&&!g.current.contains(e.target)){S(false)}};document.addEventListener("click",e);return()=>document.removeEventListener("click",e)},[E]);var W=tO(t);var M=tL(t);var B=()=>(0,n._)(function*(){var e=yield W.mutateAsync(Number(x.id));if(e.data){D(false);if(c){i(x.id)}}})();var I=()=>(0,n._)(function*(){var e=yield M.mutateAsync(Number(x.id));if(e.data){i(String(e.data))}})();var{attributes:N,listeners:O,setNodeRef:A,transform:L,transition:J,isDragging:R}=(0,e5/* .useSortable */.nB)({id:x.id||"",animateLayoutChanges:tz/* .animateLayoutChanges */.h});var z=(0,v.useCallback)(e=>{if(e){A(e);// eslint-disable-next-line @typescript-eslint/no-explicit-any
g.current=e}},[A]);var Y=_.watch("subscriptions.".concat(w,".plan_name"));var Q=_.watch("subscriptions.".concat(w,".charge_enrollment_fee"));// @TODO: Will be added after confirmation
// const enableTrial = form.watch(`subscriptions.${index}.enable_free_trial` as `subscriptions.0.enable_free_trial`);
var q=_.watch("subscriptions.".concat(w,".is_featured"));var H=_.watch("subscriptions.".concat(w,".offer_sale_price"));var V=!!_.watch("subscriptions.".concat(w,".schedule_sale_price"));var[G,K]=(0,ta/* .useSpring */.q_)({height:c?(p=m.current)===null||p===void 0?void 0:p.scrollHeight:0,opacity:c?1:0,overflow:"hidden",config:{duration:300,easing:e=>e*(2-e)}},[Q,// enableTrial,
q,H,V,Z,c,k]);(0,v.useEffect)(()=>{if((0,tj/* .isDefined */.$K)(m.current)){var e;K.start({height:c?(e=m.current)===null||e===void 0?void 0:e.scrollHeight:0,opacity:c?1:0})}// eslint-disable-next-line react-hooks/exhaustive-deps
},[Q,// enableTrial,
q,H,V,Z,c,k]);var ee=[3,6,9,12];var et=[...ee.map(e=>({/* translators: %s is the number of times */label:(0,u.sprintf)((0,u.__)("%s times","tutor"),e.toString()),value:String(e)})),{label:(0,u.__)("Until cancelled","tutor"),value:(0,u.__)("Until cancelled","tutor")}];var er={transform:to/* .CSS.Transform.toString */.ux.Transform.toString(L),transition:J,opacity:R?.3:undefined,background:R?P/* .colorTokens.stroke.hover */.Jv.stroke.hover:undefined};return/*#__PURE__*/(0,s/* .jsxs */.BX)("form",(0,a._)((0,o._)({},N),{css:t0.subscription({bgLight:l,isActive:E,isDragging:d,isDeletePopoverOpen:C}),onClick:()=>S(true),style:er,ref:z,children:[/*#__PURE__*/(0,s/* .jsxs */.BX)("div",{css:t0.subscriptionHeader(c),children:[/*#__PURE__*/(0,s/* .jsxs */.BX)("div",(0,a._)((0,o._)({css:t0.grabber({isFormDirty:Z})},Z?{}:O),{children:[/*#__PURE__*/(0,s/* .jsx */.tZ)(h/* ["default"] */.Z,{"data-grabber":true,name:"threeDotsVerticalDouble",width:24,height:24}),/*#__PURE__*/(0,s/* .jsxs */.BX)("button",{type:"button",css:t0.title,disabled:Z,title:Y,onClick:()=>!Z&&i(x.id),children:[Y,/*#__PURE__*/(0,s/* .jsx */.tZ)(U/* ["default"] */.Z,{when:x.is_featured,children:/*#__PURE__*/(0,s/* .jsx */.tZ)(ti/* ["default"] */.Z,{content:(0,u.__)("Featured","tutor"),delay:200,children:/*#__PURE__*/(0,s/* .jsx */.tZ)(h/* ["default"] */.Z,{name:"star",width:24,height:24})})})]})]})),/*#__PURE__*/(0,s/* .jsxs */.BX)("div",{css:t0.actions(c),"data-visually-hidden":true,children:[/*#__PURE__*/(0,s/* .jsx */.tZ)(U/* ["default"] */.Z,{when:!c,children:/*#__PURE__*/(0,s/* .jsx */.tZ)(ti/* ["default"] */.Z,{content:(0,u.__)("Edit","tutor"),delay:200,children:/*#__PURE__*/(0,s/* .jsx */.tZ)("button",{"data-cy":"edit-subscription",type:"button",disabled:Z,onClick:()=>!Z&&i(x.id),children:/*#__PURE__*/(0,s/* .jsx */.tZ)(h/* ["default"] */.Z,{name:"edit",width:24,height:24})})})}),/*#__PURE__*/(0,s/* .jsxs */.BX)(U/* ["default"] */.Z,{when:x.isSaved,children:[/*#__PURE__*/(0,s/* .jsx */.tZ)(ti/* ["default"] */.Z,{content:(0,u.__)("Duplicate","tutor"),delay:200,children:/*#__PURE__*/(0,s/* .jsx */.tZ)("button",{"data-cy":"duplicate-subscription",type:"button",disabled:Z,onClick:I,children:/*#__PURE__*/(0,s/* .jsx */.tZ)(U/* ["default"] */.Z,{when:!M.isPending,fallback:/*#__PURE__*/(0,s/* .jsx */.tZ)($/* ["default"] */.ZP,{size:24}),children:/*#__PURE__*/(0,s/* .jsx */.tZ)(h/* ["default"] */.Z,{name:"copyPaste",width:24,height:24})})})}),/*#__PURE__*/(0,s/* .jsx */.tZ)(ti/* ["default"] */.Z,{content:(0,u.__)("Delete","tutor"),delay:200,children:/*#__PURE__*/(0,s/* .jsx */.tZ)("button",{"data-cy":"delete-subscription",ref:b,type:"button",disabled:Z,onClick:()=>D(true),children:/*#__PURE__*/(0,s/* .jsx */.tZ)(h/* ["default"] */.Z,{name:"delete",width:24,height:24})})}),/*#__PURE__*/(0,s/* .jsx */.tZ)("button",{type:"button",disabled:Z,onClick:()=>!Z&&i(x.id),"data-collapse-button":true,title:(0,u.__)("Collapse/expand plan","tutor"),children:/*#__PURE__*/(0,s/* .jsx */.tZ)(h/* ["default"] */.Z,{name:"chevronDown",width:24,height:24})})]})]})]}),/*#__PURE__*/(0,s/* .jsx */.tZ)(ta/* .animated.div */.q.div,{style:(0,o._)({},G),css:t0.itemWrapper(c),children:/*#__PURE__*/(0,s/* .jsx */.tZ)("div",{ref:m,css:j/* .styleUtils.display.flex */.i.display.flex("column"),children:/*#__PURE__*/(0,s/* .jsxs */.BX)("div",{css:t0.subscriptionContent,children:[/*#__PURE__*/(0,s/* .jsx */.tZ)(f/* .Controller */.Qr,{control:_.control,name:"subscriptions.".concat(w,".plan_name"),rules:(0,F/* .requiredRule */.n0)(),render:e=>/*#__PURE__*/(0,s/* .jsx */.tZ)(ep/* ["default"] */.Z,(0,a._)((0,o._)({},e),{placeholder:(0,u.__)("Enter plan name","tutor"),label:(0,u.__)("Plan Name","tutor")}))}),/*#__PURE__*/(0,s/* .jsxs */.BX)("div",{css:t0.inputGroup,children:[/*#__PURE__*/(0,s/* .jsx */.tZ)(f/* .Controller */.Qr,{control:_.control,name:"subscriptions.".concat(w,".regular_price"),rules:(0,a._)((0,o._)({},(0,F/* .requiredRule */.n0)()),{validate:e=>{if(Number(e)<=0){return(0,u.__)("Price must be greater than 0","tutor")}}}),render:e=>/*#__PURE__*/(0,s/* .jsx */.tZ)(e2/* ["default"] */.Z,(0,a._)((0,o._)({},e),{label:(0,u.__)("Price","tutor"),content:(tK===null||tK===void 0?void 0:tK.symbol)||"$",placeholder:(0,u.__)("Plan price","tutor"),selectOnFocus:true,contentCss:j/* .styleUtils.inputCurrencyStyle */.i.inputCurrencyStyle,type:"number"}))}),/*#__PURE__*/(0,s/* .jsx */.tZ)(f/* .Controller */.Qr,{control:_.control,name:"subscriptions.".concat(w,".recurring_value"),rules:(0,a._)((0,o._)({},(0,F/* .requiredRule */.n0)()),{validate:e=>{if(Number(e)<1){return(0,u.__)("This value must be equal to or greater than 1","tutor")}}}),render:e=>/*#__PURE__*/(0,s/* .jsx */.tZ)(ep/* ["default"] */.Z,(0,a._)((0,o._)({},e),{label:(0,u.__)("Billing Interval","tutor"),placeholder:(0,u.__)("12","tutor"),selectOnFocus:true,type:"number"}))}),/*#__PURE__*/(0,s/* .jsx */.tZ)(f/* .Controller */.Qr,{control:_.control,name:"subscriptions.".concat(w,".recurring_interval"),render:e=>/*#__PURE__*/(0,s/* .jsx */.tZ)(eE/* ["default"] */.Z,(0,a._)((0,o._)({},e),{label:/*#__PURE__*/(0,s/* .jsx */.tZ)("div",{children:" "}),options:[{label:(0,u.__)("Day(s)","tutor"),value:"day"},{label:(0,u.__)("Week(s)","tutor"),value:"week"},{label:(0,u.__)("Month(s)","tutor"),value:"month"},{label:(0,u.__)("Year(s)","tutor"),value:"year"}],removeOptionsMinWidth:true}))}),/*#__PURE__*/(0,s/* .jsx */.tZ)(f/* .Controller */.Qr,{control:_.control,name:"subscriptions.".concat(w,".recurring_limit"),rules:(0,a._)((0,o._)({},(0,F/* .requiredRule */.n0)()),{validate:e=>{if(e===(0,u.__)("Until cancelled","tutor")){return true}if(Number(e)<=0){return(0,u.__)("Renew plan must be greater than 0","tutor")}return true}}),render:e=>/*#__PURE__*/(0,s/* .jsx */.tZ)(tw,(0,a._)((0,o._)({},e),{label:(0,u.__)("Billing Cycles","tutor"),placeholder:(0,u.__)("Select or type times to renewing the plan","tutor"),content:e.field.value!==(0,u.__)("Until cancelled","tutor")&&(0,u.__)("Times","tutor"),contentPosition:"right",type:"number",presetOptions:et,selectOnFocus:true}))})]}),/*#__PURE__*/(0,s/* .jsx */.tZ)(f/* .Controller */.Qr,{control:_.control,name:"subscriptions.".concat(w,".charge_enrollment_fee"),render:e=>/*#__PURE__*/(0,s/* .jsx */.tZ)(T/* ["default"] */.Z,(0,a._)((0,o._)({},e),{label:(0,u.__)("Charge enrollment fee","tutor")}))}),/*#__PURE__*/(0,s/* .jsx */.tZ)(U/* ["default"] */.Z,{when:Q,children:/*#__PURE__*/(0,s/* .jsx */.tZ)(f/* .Controller */.Qr,{control:_.control,name:"subscriptions.".concat(w,".enrollment_fee"),rules:(0,a._)((0,o._)({},(0,F/* .requiredRule */.n0)()),{validate:e=>{if(Number(e)<=0){return(0,u.__)("Enrollment fee must be greater than 0","tutor")}return true}}),render:e=>/*#__PURE__*/(0,s/* .jsx */.tZ)(e2/* ["default"] */.Z,(0,a._)((0,o._)({},e),{label:(0,u.__)("Enrollment fee","tutor"),content:(tK===null||tK===void 0?void 0:tK.symbol)||"$",placeholder:(0,u.__)("Enter enrollment fee","tutor"),selectOnFocus:true,contentCss:j/* .styleUtils.inputCurrencyStyle */.i.inputCurrencyStyle,type:"number"}))})}),/*#__PURE__*/(0,s/* .jsx */.tZ)(f/* .Controller */.Qr,{control:_.control,name:"subscriptions.".concat(w,".do_not_provide_certificate"),render:e=>/*#__PURE__*/(0,s/* .jsx */.tZ)(T/* ["default"] */.Z,(0,a._)((0,o._)({},e),{label:(0,u.__)("Do not provide certificate","tutor")}))}),/*#__PURE__*/(0,s/* .jsx */.tZ)(f/* .Controller */.Qr,{control:_.control,name:"subscriptions.".concat(w,".is_featured"),render:e=>/*#__PURE__*/(0,s/* .jsx */.tZ)(T/* ["default"] */.Z,(0,a._)((0,o._)({},e),{label:(0,u.__)("Mark as featured","tutor")}))}),/*#__PURE__*/(0,s/* .jsx */.tZ)(tk,{index:w})]})})}),/*#__PURE__*/(0,s/* .jsx */.tZ)(ts/* ["default"] */.Z,{isOpen:C,triggerRef:b,closePopover:X/* .noop */.ZT,maxWidth:"258px",title:(0,u.sprintf)((0,u.__)('Delete "%s"',"tutor"),x.plan_name),message:(0,u.__)("Are you sure you want to delete this plan? This cannot be undone.","tutor"),animationType:tD/* .AnimationType.slideUp */.ru.slideUp,arrow:"auto",hideArrow:true,isLoading:W.isPending,confirmButton:{text:(0,u.__)("Delete","tutor"),variant:"text",isDelete:true},cancelButton:{text:(0,u.__)("Cancel","tutor"),variant:"text"},onConfirmation:B,onCancel:()=>D(false)})]}))}var t0={grabber:e=>{var{isFormDirty:t}=e;return/*#__PURE__*/(0,l/* .css */.iv)("display:flex;align-items:center;gap:",P/* .spacing["4"] */.W0["4"],";",R/* .typography.body */.c.body(),";color:",P/* .colorTokens.text.hints */.Jv.text.hints,";width:100%;min-height:40px;[data-grabber]{color:",P/* .colorTokens.icon["default"] */.Jv.icon["default"],";cursor:",t?"not-allowed":"grab",";flex-shrink:0;}span{max-width:496px;width:100%;",j/* .styleUtils.textEllipsis */.i.textEllipsis,";}")},trialWrapper:/*#__PURE__*/(0,l/* .css */.iv)("display:grid;grid-template-columns:1fr 1fr;align-items:start;gap:",P/* .spacing["8"] */.W0["8"],";"),title:/*#__PURE__*/(0,l/* .css */.iv)(j/* .styleUtils.resetButton */.i.resetButton,";display:flex;align-items:center;color:",P/* .colorTokens.text.hints */.Jv.text.hints,";flex-grow:1;gap:",P/* .spacing["8"] */.W0["8"],";:disabled{cursor:default;}svg{color:",P/* .colorTokens.icon.brand */.Jv.icon.brand,";}"),titleField:/*#__PURE__*/(0,l/* .css */.iv)("width:100%;position:relative;input{padding-right:",P/* .spacing["128"] */.W0["128"]," !important;}"),titleActions:/*#__PURE__*/(0,l/* .css */.iv)("position:absolute;right:",P/* .spacing["4"] */.W0["4"],";top:50%;transform:translateY(-50%);display:flex;align-items:center;gap:",P/* .spacing["8"] */.W0["8"],";"),subscription:e=>{var{bgLight:t,isActive:r,isDragging:n,isDeletePopoverOpen:o}=e;return/*#__PURE__*/(0,l/* .css */.iv)("width:100%;border:1px solid ",P/* .colorTokens.stroke["default"] */.Jv.stroke["default"],";border-radius:",P/* .borderRadius.card */.E0.card,";overflow:hidden;transition:border-color 0.3s ease;[data-visually-hidden]{opacity:",o?1:0,";transition:opacity 0.3s ease;}",t&&(0,l/* .css */.iv)(tX(),P/* .colorTokens.background.white */.Jv.background.white)," ",r&&(0,l/* .css */.iv)(tF(),P/* .colorTokens.stroke.brand */.Jv.stroke.brand)," ",n&&(0,l/* .css */.iv)(tY(),P/* .shadow.drag */.AF.drag),"    &:hover:not(:disabled){[data-visually-hidden]{opacity:1;}}",P/* .Breakpoint.smallTablet */.Uo.smallTablet,"{[data-visually-hidden]{opacity:1;}}")},itemWrapper:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:false;return/*#__PURE__*/(0,l/* .css */.iv)(e&&(0,l/* .css */.iv)(tQ(),P/* .colorTokens.background.hover */.Jv.background.hover))},subscriptionHeader:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:false;return/*#__PURE__*/(0,l/* .css */.iv)("padding:",P/* .spacing["12"] */.W0["12"]," ",P/* .spacing["16"] */.W0["16"],";display:flex;align-items:center;justify-content:space-between;",e&&(0,l/* .css */.iv)(tq(),P/* .colorTokens.background.hover */.Jv.background.hover,P/* .colorTokens.stroke.border */.Jv.stroke.border))},subscriptionContent:/*#__PURE__*/(0,l/* .css */.iv)("padding:",P/* .spacing["16"] */.W0["16"],";display:flex;flex-direction:column;gap:",P/* .spacing["12"] */.W0["12"],";"),actions:e=>/*#__PURE__*/(0,l/* .css */.iv)("display:flex;align-items:center;gap:",P/* .spacing["4"] */.W0["4"],";button{width:24px;height:24px;",j/* .styleUtils.resetButton */.i.resetButton,";color:",P/* .colorTokens.icon["default"] */.Jv.icon["default"],";display:flex;align-items:center;justify-content:center;transition:color 0.3s ease;:disabled{cursor:not-allowed;color:",P/* .colorTokens.icon.disable.background */.Jv.icon.disable.background,";}&[data-collapse-button]{transition:transform 0.3s ease;svg{width:20px;height:20px;}&:hover:not(:disabled){color:",P/* .colorTokens.icon.hover */.Jv.icon.hover,";}",e&&(0,l/* .css */.iv)(tH()),"}}"),collapse:e=>/*#__PURE__*/(0,l/* .css */.iv)("transition:transform 0.3s ease;svg{width:16px;height:16px;}",e&&(0,l/* .css */.iv)(tV())),inputGroup:/*#__PURE__*/(0,l/* .css */.iv)("display:grid;grid-template-columns:1fr 0.7fr 1fr 1fr;align-items:start;gap:",P/* .spacing["8"] */.W0["8"],";",P/* .Breakpoint.smallMobile */.Uo.smallMobile,"{grid-template-columns:1fr;}")};// EXTERNAL MODULE: ./assets/react/v3/shared/controls/For.tsx
var t1=r(36352);// CONCATENATED MODULE: ./assets/react/v3/shared/components/modals/SubscriptionModal.tsx
function t2(e){var{courseId:t,isBundle:r=false,title:i,subtitle:l,icon:p,closeModal:g,expandedSubscriptionId:m,createEmptySubscriptionOnMount:b}=e;var _;var y=(0,c/* .useQueryClient */.NL)();var w=(0,et/* .useFormWithGlobalError */.O)({defaultValues:{subscriptions:[]},mode:"onChange"});var{append:x,remove:Z,move:k,fields:C}=(0,f/* .useFieldArray */.Dq)({control:w.control,name:"subscriptions",keyName:"_id"});var[D,E]=(0,v.useState)(m||"");var[W,M]=(0,v.useState)(null);var T=!!(0,d/* .useIsFetching */.y)({queryKey:["SubscriptionsList",t]});var B=y.getQueryData(["SubscriptionsList",t]);var I=tP(t);var N=tI(t);var O=w.formState.isDirty;var A=w.getValues().subscriptions.find(e=>e.id===D);var L=C.findIndex(e=>!e.isSaved)!==-1?C.findIndex(e=>!e.isSaved):(_=w.formState.dirtyFields.subscriptions)===null||_===void 0?void 0:_.findIndex(e=>(0,tj/* .isDefined */.$K)(e));(0,v.useEffect)(()=>{if(!B){return}if(C.length===0){return w.reset({subscriptions:B.map(e=>(0,a._)((0,o._)({},tS(e)),{isSaved:true}))})}var e=B.map(e=>{var t=C.find(t=>t.id===e.id);if(t){return(0,o._)({},t,(0,a._)((0,o._)({},tS(e)),{isSaved:true}))}return(0,a._)((0,o._)({},tS(e)),{isSaved:true})});w.reset({subscriptions:e});// eslint-disable-next-line react-hooks/exhaustive-deps
},[B,T]);var P=e=>(0,n._)(function*(){try{w.trigger();var i=setTimeout(()=>(0,n._)(function*(){var n=w.formState.errors.subscriptions||[];if(n.length){return}var i=tW((0,a._)((0,o._)({},e),{id:e.isSaved?e.id:"0",assign_id:String(t),plan_type:r?"bundle":"course"}));var s=yield N.mutateAsync(i);if(s.status_code===200||s.status_code===201){E(e=>e===i.id?"":i.id||"")}})(),0);return()=>{clearTimeout(i)}}catch(e){w.reset()}})();var R=(0,e8/* .useSensors */.Dy)((0,e8/* .useSensor */.VT)(e8/* .PointerSensor */.we,{activationConstraint:{distance:10}}),(0,e8/* .useSensor */.VT)(e8/* .KeyboardSensor */.Lg,{coordinateGetter:e5/* .sortableKeyboardCoordinates */.is}));(0,v.useEffect)(()=>{if(b){var e=(0,X/* .nanoid */.x0)();x((0,a._)((0,o._)({},tE),{id:e,isSaved:false}));E(e)}// eslint-disable-next-line react-hooks/exhaustive-deps
},[]);return/*#__PURE__*/(0,s/* .jsx */.tZ)(f/* .FormProvider */.RV,(0,a._)((0,o._)({},w),{children:/*#__PURE__*/(0,s/* .jsx */.tZ)(e7/* ["default"] */.Z,{onClose:()=>g({action:"CLOSE"}),icon:O?/*#__PURE__*/(0,s/* .jsx */.tZ)(h/* ["default"] */.Z,{name:"warning",width:24,height:24}):p,title:O?J/* .CURRENT_VIEWPORT.isAboveMobile */.iM.isAboveMobile?(0,u.__)("Unsaved Changes","tutor"):"":i,subtitle:O?i===null||i===void 0?void 0:i.toString():l,maxWidth:1218,actions:O&&/*#__PURE__*/(0,s/* .jsxs */.BX)(s/* .Fragment */.HY,{children:[/*#__PURE__*/(0,s/* .jsx */.tZ)(S/* ["default"] */.Z,{variant:"text",size:"small",onClick:()=>A?w.reset():g({action:"CLOSE"}),children:(A===null||A===void 0?void 0:A.isSaved)?(0,u.__)("Discard Changes","tutor"):(0,u.__)("Cancel","tutor")}),/*#__PURE__*/(0,s/* .jsx */.tZ)(S/* ["default"] */.Z,{"data-cy":"save-subscription",loading:N.isPending,variant:"primary",size:"small",onClick:()=>{if(L!==-1&&A){P(A)}},children:(A===null||A===void 0?void 0:A.isSaved)?(0,u.__)("Update","tutor"):(0,u.__)("Save","tutor")})]}),children:/*#__PURE__*/(0,s/* .jsx */.tZ)("div",{css:t4.wrapper,children:/*#__PURE__*/(0,s/* .jsx */.tZ)(U/* ["default"] */.Z,{when:C.length,fallback:/*#__PURE__*/(0,s/* .jsx */.tZ)(tr,{onCreateSubscription:()=>{var e=(0,X/* .nanoid */.x0)();x((0,a._)((0,o._)({},tE),{id:e,isSaved:false}));E(e)}}),children:/*#__PURE__*/(0,s/* .jsxs */.BX)("div",{css:t4.container,children:[/*#__PURE__*/(0,s/* .jsx */.tZ)("div",{css:t4.header,children:/*#__PURE__*/(0,s/* .jsx */.tZ)("h6",{children:(0,u.__)("Subscription Plans","tutor")})}),/*#__PURE__*/(0,s/* .jsxs */.BX)("div",{css:t4.content,children:[/*#__PURE__*/(0,s/* .jsxs */.BX)(e8/* .DndContext */.LB,{sensors:R,collisionDetection:e8/* .closestCenter */.pE,measuring:tz/* .droppableMeasuringStrategy */.O,modifiers:[e6/* .restrictToWindowEdges */.hg],onDragStart:e=>{M(e.active.id)},onDragEnd:e=>(0,n._)(function*(){var{active:t,over:r}=e;if(!r){M(null);return}if(t.id!==r.id){var n=C.findIndex(e=>e.id===t.id);var o=C.findIndex(e=>e.id===r.id);var a=(0,X/* .moveTo */.Ao)(C,n,o);k(n,o);I.mutateAsync(a.map(e=>Number(e.id)))}M(null)})(),children:[/*#__PURE__*/(0,s/* .jsx */.tZ)(e5/* .SortableContext */.Fo,{items:C,strategy:e5/* .verticalListSortingStrategy */.qw,children:/*#__PURE__*/(0,s/* .jsx */.tZ)(t1/* ["default"] */.Z,{each:C,children:(e,r)=>{return/*#__PURE__*/(0,s/* .jsx */.tZ)(t$,{id:e.id,courseId:t,toggleCollapse:e=>{E(t=>t===e?"":e)},onDiscard:!e.id?()=>{Z(r)}:X/* .noop */.ZT,isExpanded:W?false:D===e.id},e.id)}})}),/*#__PURE__*/(0,e9.createPortal)(/*#__PURE__*/(0,s/* .jsx */.tZ)(e8/* .DragOverlay */.y9,{children:/*#__PURE__*/(0,s/* .jsx */.tZ)(U/* ["default"] */.Z,{when:W,children:e=>{return/*#__PURE__*/(0,s/* .jsx */.tZ)(t$,{id:e,courseId:t,toggleCollapse:X/* .noop */.ZT,bgLight:true,onDiscard:X/* .noop */.ZT,isExpanded:false,isOverlay:true})}})}),document.body)]}),/*#__PURE__*/(0,s/* .jsx */.tZ)("div",{children:/*#__PURE__*/(0,s/* .jsx */.tZ)(S/* ["default"] */.Z,{variant:"secondary",icon:/*#__PURE__*/(0,s/* .jsx */.tZ)(h/* ["default"] */.Z,{name:"plusSquareBrand",width:24,height:24}),disabled:O,onClick:()=>{var e=(0,X/* .nanoid */.x0)();x((0,a._)((0,o._)({},tE),{id:e,isSaved:false}));E(e)},children:(0,u.__)("Add New Plan","tutor")})})]})]})})})})}))}var t4={wrapper:/*#__PURE__*/(0,l/* .css */.iv)("width:100%;height:100%;"),container:/*#__PURE__*/(0,l/* .css */.iv)("max-width:640px;width:100%;padding-block:",P/* .spacing["40"] */.W0["40"],";margin-inline:auto;display:flex;flex-direction:column;gap:",P/* .spacing["32"] */.W0["32"],";",P/* .Breakpoint.smallMobile */.Uo.smallMobile,"{padding-block:",P/* .spacing["24"] */.W0["24"],";padding-inline:",P/* .spacing["8"] */.W0["8"],";}"),header:/*#__PURE__*/(0,l/* .css */.iv)("display:flex;align-items:center;justify-content:space-between;h6{",R/* .typography.heading6 */.c.heading6("medium"),";color:",P/* .colorTokens.text.primary */.Jv.text.primary,";text-transform:none;letter-spacing:normal;}"),content:/*#__PURE__*/(0,l/* .css */.iv)("display:flex;flex-direction:column;gap:",P/* .spacing["16"] */.W0["16"],";")};// CONCATENATED MODULE: ./assets/react/v3/shared/components/subscription/PreviewItem.tsx
function t3(e,t){switch(e){case"hour":return t>1?(0,u.__)("Hours","tutor"):(0,u.__)("Hour","tutor");case"day":return t>1?(0,u.__)("Days","tutor"):(0,u.__)("Day","tutor");case"week":return t>1?(0,u.__)("Weeks","tutor"):(0,u.__)("Week","tutor");case"month":return t>1?(0,u.__)("Months","tutor"):(0,u.__)("Month","tutor");case"year":return t>1?(0,u.__)("Years","tutor"):(0,u.__)("Year","tutor");case"until_cancellation":return(0,u.__)("Until Cancellation","tutor")}}function t8(e){var{subscription:t,courseId:r,isBundle:n}=e;var{showModal:o}=(0,e3/* .useModal */.d)();return/*#__PURE__*/(0,s/* .jsxs */.BX)("div",{"data-cy":"subscription-preview-item",css:t6.wrapper,children:[/*#__PURE__*/(0,s/* .jsxs */.BX)("div",{css:t6.item,children:[/*#__PURE__*/(0,s/* .jsxs */.BX)("p",{css:t6.title,children:[t.plan_name,/*#__PURE__*/(0,s/* .jsx */.tZ)(U/* ["default"] */.Z,{when:t.is_featured,children:/*#__PURE__*/(0,s/* .jsx */.tZ)(h/* ["default"] */.Z,{style:t6.featuredIcon,name:"star",height:20,width:20})})]}),/*#__PURE__*/(0,s/* .jsxs */.BX)("div",{css:t6.information,children:[/*#__PURE__*/(0,s/* .jsx */.tZ)(U/* ["default"] */.Z,{when:t.payment_type==="recurring",fallback:/*#__PURE__*/(0,s/* .jsx */.tZ)("span",{children:(0,u.__)("Lifetime","tutor")}),children:/*#__PURE__*/(0,s/* .jsx */.tZ)("span",{children:/* translators: %1$s is the number and the %2$s is the repeat unit (e.g., day, week, month) */(0,u.sprintf)((0,u.__)("Renew every %1$s %2$s","tutor"),t.recurring_value.toString().padStart(2,"0"),t3(t.recurring_interval,Number(t.recurring_value)))})}),/*#__PURE__*/(0,s/* .jsx */.tZ)(U/* ["default"] */.Z,{when:t.payment_type!=="onetime",children:/*#__PURE__*/(0,s/* .jsxs */.BX)(U/* ["default"] */.Z,{when:t.recurring_limit===(0,u.__)("Until cancelled","tutor"),fallback:/*#__PURE__*/(0,s/* .jsxs */.BX)(s/* .Fragment */.HY,{children:[/*#__PURE__*/(0,s/* .jsx */.tZ)("span",{children:"•"}),/*#__PURE__*/(0,s/* .jsxs */.BX)("span",{children:[t.recurring_limit.toString().padStart(2,"0")," ",(0,u.__)("Billing Cycles","tutor")]})]}),children:[/*#__PURE__*/(0,s/* .jsx */.tZ)("span",{children:"•"}),/*#__PURE__*/(0,s/* .jsx */.tZ)("span",{children:(0,u.__)("Until Cancellation","tutor")})]})})]})]}),/*#__PURE__*/(0,s/* .jsx */.tZ)("button",{type:"button",css:t6.editButton,onClick:()=>{o({component:t2,props:{title:(0,u.__)("Manage Subscription Plans","tutor"),icon:/*#__PURE__*/(0,s/* .jsx */.tZ)(h/* ["default"] */.Z,{name:"dollar-recurring",width:24,height:24}),expandedSubscriptionId:t.id,courseId:r,isBundle:n}})},"data-edit-button":true,"data-cy":"edit-subscription",children:/*#__PURE__*/(0,s/* .jsx */.tZ)(h/* ["default"] */.Z,{name:"pen",width:19,height:19})})]})}var t6={wrapper:/*#__PURE__*/(0,l/* .css */.iv)("display:flex;justify-content:space-between;align-items:center;background-color:",P/* .colorTokens.background.white */.Jv.background.white,";padding:",P/* .spacing["8"] */.W0["8"]," ",P/* .spacing["12"] */.W0["12"],";[data-edit-button]{opacity:0;transition:opacity 0.3s ease;}&:hover{background-color:",P/* .colorTokens.background.hover */.Jv.background.hover,";[data-edit-button]{opacity:1;}}&:not(:last-of-type){border-bottom:1px solid ",P/* .colorTokens.stroke["default"] */.Jv.stroke["default"],";}"),item:/*#__PURE__*/(0,l/* .css */.iv)("min-height:48px;display:flex;flex-direction:column;justify-content:center;gap:",P/* .spacing["4"] */.W0["4"],";"),title:/*#__PURE__*/(0,l/* .css */.iv)(R/* .typography.caption */.c.caption("medium"),";color:",P/* .colorTokens.text.primary */.Jv.text.primary,";display:flex;align-items:center;"),information:/*#__PURE__*/(0,l/* .css */.iv)(R/* .typography.small */.c.small(),";color:",P/* .colorTokens.text.hints */.Jv.text.hints,";display:flex;align-items:center;flex-wrap:wrap;gap:",P/* .spacing["4"] */.W0["4"],";"),featuredIcon:/*#__PURE__*/(0,l/* .css */.iv)("color:",P/* .colorTokens.icon.brand */.Jv.icon.brand,";"),editButton:/*#__PURE__*/(0,l/* .css */.iv)(j/* .styleUtils.resetButton */.i.resetButton,";",j/* .styleUtils.flexCenter */.i.flexCenter(),";width:24px;height:24px;border-radius:",P/* .borderRadius["4"] */.E0["4"],";color:",P/* .colorTokens.icon["default"] */.Jv.icon["default"],";transition:color 0.3s ease,background 0.3s ease;&:hover{background:",P/* .colorTokens.action.secondary["default"] */.Jv.action.secondary["default"],";color:",P/* .colorTokens.icon.brand */.Jv.icon.brand,";}")};// CONCATENATED MODULE: ./assets/react/v3/shared/components/subscription/SubscriptionPreview.tsx
function t5(){var e=(0,i._)(["\n      border: none;\n    "]);t5=function t(){return e};return e}function t9(e){var{courseId:t,isBundle:r=false}=e;var n=tT(t);var{showModal:o}=(0,e3/* .useModal */.d)();if(n.isLoading){return/*#__PURE__*/(0,s/* .jsx */.tZ)($/* .LoadingSection */.g4,{})}if(!n.data){return null}var a=n.data;return/*#__PURE__*/(0,s/* .jsxs */.BX)("div",{css:re.outer,children:[/*#__PURE__*/(0,s/* .jsx */.tZ)(U/* ["default"] */.Z,{when:a.length>0,children:/*#__PURE__*/(0,s/* .jsx */.tZ)("div",{css:re.header,children:(0,u.__)("Subscriptions","tutor")})}),/*#__PURE__*/(0,s/* .jsxs */.BX)("div",{css:re.inner({hasSubscriptions:a.length>0}),children:[/*#__PURE__*/(0,s/* .jsx */.tZ)(t1/* ["default"] */.Z,{each:a,children:(e,n)=>/*#__PURE__*/(0,s/* .jsx */.tZ)(t8,{subscription:tS(e),courseId:t,isBundle:r},n)}),/*#__PURE__*/(0,s/* .jsx */.tZ)("div",{css:re.emptyState({hasSubscriptions:a.length>0}),children:/*#__PURE__*/(0,s/* .jsx */.tZ)(S/* ["default"] */.Z,{"data-cy":"add-subscription",variant:"secondary",icon:/*#__PURE__*/(0,s/* .jsx */.tZ)(h/* ["default"] */.Z,{name:"dollar-recurring",width:24,height:24}),onClick:()=>{o({component:t2,props:{title:(0,u.__)("Manage Subscription Plans","tutor"),icon:/*#__PURE__*/(0,s/* .jsx */.tZ)(h/* ["default"] */.Z,{name:"dollar-recurring",width:24,height:24}),createEmptySubscriptionOnMount:true,courseId:t,isBundle:r}})},children:(0,u.__)("Add Subscription","tutor")})})]})]})}/* ESM default export */const t7=t9;var re={outer:/*#__PURE__*/(0,l/* .css */.iv)("width:100%;display:flex;flex-direction:column;gap:",P/* .spacing["8"] */.W0["8"],";"),inner:e=>{var{hasSubscriptions:t}=e;return/*#__PURE__*/(0,l/* .css */.iv)("background:",P/* .colorTokens.background.white */.Jv.background.white,";border:1px solid ",P/* .colorTokens.stroke["default"] */.Jv.stroke["default"],";border-radius:",P/* .borderRadius.card */.E0.card,";width:100%;overflow:hidden;",!t&&(0,l/* .css */.iv)(t5()))},header:/*#__PURE__*/(0,l/* .css */.iv)("display:flex;align-items:center;justify-content:space-between;",R/* .typography.body */.c.body(),";color:",P/* .colorTokens.text.title */.Jv.text.title,";"),emptyState:e=>{var{hasSubscriptions:t}=e;return/*#__PURE__*/(0,l/* .css */.iv)("padding:",t?"".concat(P/* .spacing["8"] */.W0["8"]," ").concat(P/* .spacing["12"] */.W0["12"]):0,";width:100%;& > button{width:100%;}")}};// EXTERNAL MODULE: ./assets/react/v3/entries/course-builder/config/route-configs.ts + 1 modules
var rt=r(38032);// EXTERNAL MODULE: ./assets/react/v3/entries/course-builder/services/course.ts
var rr=r(90406);// CONCATENATED MODULE: ./assets/react/v3/entries/course-builder/components/course-basic/CoursePricing.tsx
var rn=(0,A/* .getCourseId */.z)();var ro=()=>{var e,t,r,n;var i=(0,f/* .useFormContext */.Gc)();var l=(0,c/* .useQueryClient */.NL)();var p=(0,d/* .useIsFetching */.y)({queryKey:["CourseDetails",rn]});var h=(0,e1/* .useNavigate */.s0)();var{state:g}=(0,e1/* .useLocation */.TH)();var m=(0,f/* .useWatch */.qo)({control:i.control,name:"course_price_type"});var b=(0,f/* .useWatch */.qo)({control:i.control,name:"course_product_id"});var _=(0,f/* .useWatch */.qo)({control:i.control,name:"course_selling_option"});var y=(0,f/* .useWatch */.qo)({control:i.control,name:"is_public_course"});var w=l.getQueryData(["CourseDetails",rn]);var{tutor_currency:x}=L/* .tutorConfig */.y;var Z=!!L/* .tutorConfig.tutor_pro_url */.y.tutor_pro_url;var k=!!((e=L/* .tutorConfig.settings */.y.settings)===null||e===void 0?void 0:e.enable_tax);var C=!!((t=L/* .tutorConfig.settings */.y.settings)===null||t===void 0?void 0:t.enable_individual_tax_control);var D=!!((r=L/* .tutorConfig.settings */.y.settings)===null||r===void 0?void 0:r.is_tax_included_in_price);var E=(n=L/* .tutorConfig.settings */.y.settings)===null||n===void 0?void 0:n.monetize_by;// prettier-ignore
var S=(0,u.__)("You have unchecked the Tax Collection option. Please review your pricing, as your tax settings currently indicate that prices are inclusive of tax.","tutor");var W=["wc","tutor","edd"].includes(E||"")?[{label:(0,u.__)("Free","tutor"),value:"free"},{label:(0,u.__)("Paid","tutor"),value:"paid"}]:[{label:(0,u.__)("Free","tutor"),value:"free"}];var M=[{label:(0,u.__)("One-time purchase only","tutor"),value:"one_time"},{label:(0,u.__)("Subscription only","tutor"),value:"subscription"},{label:(0,u.__)("Subscription & one-time purchase","tutor"),value:"both"},{label:(0,u.__)("Membership only","tutor"),value:"membership"},{label:(0,u.__)("All","tutor"),value:"all"}];var B=(0,rr/* .useGetWcProductsQuery */.ni)(E,rn?String(rn):"");var I=(0,rr/* .useWcProductDetailsQuery */.vG)(b,String(rn),m,Z?E:undefined);var N=e=>{if(!e||!e.length){return[]}var{course_pricing:t}=w||{};var r=(t===null||t===void 0?void 0:t.product_id)&&t.product_id!=="0"&&t.product_name?{label:t.product_name||"",value:String(t.product_id)}:null;var n;var o=(n=e.map(e=>{var{post_title:t,ID:r}=e;return{label:t,value:String(r)}}))!==null&&n!==void 0?n:[];var a=[r,...o].filter(tj/* .isDefined */.$K);var i=Array.from(new Map(a.map(e=>[e.value,e])).values());return i};(0,v.useEffect)(()=>{if(B.isSuccess&&B.data){var{course_pricing:e}=w||{};if(E==="wc"&&(e===null||e===void 0?void 0:e.product_id)&&e.product_id!=="0"&&!N(B.data).find(t=>{var{value:r}=t;return String(r)===String(e.product_id)})){i.setValue("course_product_id","",{shouldValidate:true})}}// eslint-disable-next-line react-hooks/exhaustive-deps
},[B.data]);(0,v.useEffect)(()=>{if(!L/* .tutorConfig.edd_products */.y.edd_products||!L/* .tutorConfig.edd_products.length */.y.edd_products.length){return}var{course_pricing:e}=w||{};if(E==="edd"&&(e===null||e===void 0?void 0:e.product_id)&&e.product_id!=="0"&&!L/* .tutorConfig.edd_products.find */.y.edd_products.find(t=>{var{ID:r}=t;return String(r)===String(e.product_id)})){i.setValue("course_product_id","",{shouldValidate:true})}// eslint-disable-next-line react-hooks/exhaustive-deps
},[L/* .tutorConfig.edd_products */.y.edd_products]);(0,v.useEffect)(()=>{if(E!=="wc"){return}if(I.isSuccess&&I.data){if(g===null||g===void 0?void 0:g.isError){h(rt/* .CourseBuilderRouteConfigs.CourseBasics.buildLink */.L.CourseBasics.buildLink(),{state:{isError:false}});return}i.setValue("course_price",I.data.regular_price||"0",{shouldValidate:true});i.setValue("course_sale_price",I.data.sale_price||"0",{shouldValidate:true});return}var e=i.formState.dirtyFields.course_price;var t=i.formState.dirtyFields.course_sale_price;if(!e){i.setValue("course_price","0")}if(!t){i.setValue("course_sale_price","0")}// eslint-disable-next-line react-hooks/exhaustive-deps
},[I.data]);return/*#__PURE__*/(0,s/* .jsxs */.BX)(s/* .Fragment */.HY,{children:[/*#__PURE__*/(0,s/* .jsx */.tZ)(f/* .Controller */.Qr,{name:"course_price_type",control:i.control,rules:{validate:e=>{if(e==="paid"&&y){return(0,u.__)("Public courses cannot be paid.","tutor")}return true},deps:["is_public_course"]},render:e=>/*#__PURE__*/(0,s/* .jsx */.tZ)(e4/* ["default"] */.Z,(0,a._)((0,o._)({},e),{label:(0,u.__)("Pricing Model","tutor"),options:W,wrapperCss:ri.priceRadioGroup,onSelect:e=>{if(e.value==="paid"&&y){i.setError("course_price_type",{type:"validate",message:(0,u.__)("Public courses cannot be paid.","tutor")});i.setValue("course_price_type","free")}}}))}),/*#__PURE__*/(0,s/* .jsx */.tZ)(U/* ["default"] */.Z,{when:(0,X/* .isAddonEnabled */.ro)(J/* .Addons.SUBSCRIPTION */.AO.SUBSCRIPTION)&&E==="tutor"&&m==="paid",children:/*#__PURE__*/(0,s/* .jsx */.tZ)(f/* .Controller */.Qr,{name:"course_selling_option",control:i.control,render:e=>/*#__PURE__*/(0,s/* .jsx */.tZ)(eE/* ["default"] */.Z,(0,a._)((0,o._)({},e),{label:(0,u.__)("Purchase Options","tutor"),options:M}))})}),/*#__PURE__*/(0,s/* .jsx */.tZ)(U/* ["default"] */.Z,{when:m==="paid"&&E==="wc",children:/*#__PURE__*/(0,s/* .jsx */.tZ)(f/* .Controller */.Qr,{name:"course_product_id",control:i.control,render:e=>/*#__PURE__*/(0,s/* .jsx */.tZ)(eE/* ["default"] */.Z,(0,a._)((0,o._)({},e),{label:(0,u.__)("Select product","tutor"),placeholder:(0,u.__)("Select a product","tutor"),options:[{label:(0,u.__)("Select a product","tutor"),value:"-1"},...N(B.data)],helpText:Z?(0,u.__)("You can select an existing WooCommerce product, alternatively, a new WooCommerce product will be created for you.","tutor"):(0,u.__)("You can select an existing WooCommerce product.","tutor"),isSearchable:true,loading:B.isLoading&&!e.field.value,isClearable:true}))})}),/*#__PURE__*/(0,s/* .jsx */.tZ)(U/* ["default"] */.Z,{when:m==="paid"&&E==="edd",children:/*#__PURE__*/(0,s/* .jsx */.tZ)(f/* .Controller */.Qr,{name:"course_product_id",control:i.control,rules:(0,o._)({},(0,F/* .requiredRule */.n0)()),render:e=>/*#__PURE__*/(0,s/* .jsx */.tZ)(eE/* ["default"] */.Z,(0,a._)((0,o._)({},e),{label:(0,u.__)("Select product","tutor"),placeholder:(0,u.__)("Select a product","tutor"),options:L/* .tutorConfig.edd_products */.y.edd_products?L/* .tutorConfig.edd_products.map */.y.edd_products.map(e=>({label:e.post_title,value:String(e.ID)})):[],helpText:(0,u.__)("Sell your product, process by EDD","tutor"),isSearchable:true,loading:!!p&&!e.field.value}))})}),/*#__PURE__*/(0,s/* .jsx */.tZ)(U/* ["default"] */.Z,{when:m==="paid"&&!["subscription","membership"].includes(_)&&(E==="tutor"||Z&&E==="wc"&&b!=="-1"),children:/*#__PURE__*/(0,s/* .jsxs */.BX)("div",{css:ri.coursePriceWrapper,children:[/*#__PURE__*/(0,s/* .jsx */.tZ)(f/* .Controller */.Qr,{name:"course_price",control:i.control,rules:(0,a._)((0,o._)({},(0,F/* .requiredRule */.n0)()),{validate:e=>{if(Number(e)<=0){return(0,u.__)("Price must be greater than 0","tutor")}return true}}),render:e=>/*#__PURE__*/(0,s/* .jsx */.tZ)(e2/* ["default"] */.Z,(0,a._)((0,o._)({},e),{label:(0,u.__)("Regular Price","tutor"),content:(x===null||x===void 0?void 0:x.symbol)||"$",placeholder:(0,u.__)("0","tutor"),type:"number",loading:!!p&&!e.field.value,selectOnFocus:true,contentCss:j/* .styleUtils.inputCurrencyStyle */.i.inputCurrencyStyle}))}),/*#__PURE__*/(0,s/* .jsx */.tZ)(f/* .Controller */.Qr,{name:"course_sale_price",control:i.control,rules:{validate:e=>{if(!e){return true}var t=i.getValues("course_price");if(Number(e)>=Number(t)){return(0,u.__)("Sale price must be less than regular price","tutor")}return true}},render:e=>/*#__PURE__*/(0,s/* .jsx */.tZ)(e2/* ["default"] */.Z,(0,a._)((0,o._)({},e),{label:(0,u.__)("Sale Price","tutor"),content:(x===null||x===void 0?void 0:x.symbol)||"$",placeholder:(0,u.__)("0","tutor"),type:"number",loading:!!p&&!e.field.value,selectOnFocus:true,contentCss:j/* .styleUtils.inputCurrencyStyle */.i.inputCurrencyStyle}))})]})}),/*#__PURE__*/(0,s/* .jsx */.tZ)(U/* ["default"] */.Z,{when:(0,X/* .isAddonEnabled */.ro)(J/* .Addons.SUBSCRIPTION */.AO.SUBSCRIPTION)&&E==="tutor"&&m==="paid",children:/*#__PURE__*/(0,s/* .jsx */.tZ)(U/* ["default"] */.Z,{when:!["one_time","membership"].includes(_),children:/*#__PURE__*/(0,s/* .jsx */.tZ)(t7,{courseId:rn})})}),/*#__PURE__*/(0,s/* .jsx */.tZ)(U/* ["default"] */.Z,{when:m==="paid"&&E==="tutor"&&k&&C&&_!=="membership",children:/*#__PURE__*/(0,s/* .jsxs */.BX)("div",{css:ri.taxWrapper,children:[/*#__PURE__*/(0,s/* .jsx */.tZ)("label",{children:(0,u.__)("Tax Collection","tutor")}),/*#__PURE__*/(0,s/* .jsxs */.BX)("div",{css:ri.checkboxWrapper,children:[/*#__PURE__*/(0,s/* .jsx */.tZ)(U/* ["default"] */.Z,{when:["one_time","both","all"].includes(_),children:/*#__PURE__*/(0,s/* .jsx */.tZ)(f/* .Controller */.Qr,{name:"tax_on_single",control:i.control,render:e=>/*#__PURE__*/(0,s/* .jsx */.tZ)(T/* ["default"] */.Z,(0,a._)((0,o._)({},e),{label:(0,u.__)("Charge tax on one-time purchase ","tutor"),helpText:D&&!e.field.value?S:""}))})}),/*#__PURE__*/(0,s/* .jsx */.tZ)(U/* ["default"] */.Z,{when:(0,X/* .isAddonEnabled */.ro)(J/* .Addons.SUBSCRIPTION */.AO.SUBSCRIPTION)&&["subscription","both","all"].includes(_),children:/*#__PURE__*/(0,s/* .jsx */.tZ)(f/* .Controller */.Qr,{name:"tax_on_subscription",control:i.control,render:e=>/*#__PURE__*/(0,s/* .jsx */.tZ)(T/* ["default"] */.Z,(0,a._)((0,o._)({},e),{label:(0,u.__)("Charge tax on subscription","tutor"),helpText:D&&!e.field.value?S:""}))})})]})]})})]})};/* ESM default export */const ra=(0,z/* .withVisibilityControl */.v)(ro);var ri={priceRadioGroup:/*#__PURE__*/(0,l/* .css */.iv)("display:flex;align-items:center;gap:",P/* .spacing["36"] */.W0["36"],";"),coursePriceWrapper:/*#__PURE__*/(0,l/* .css */.iv)("display:flex;align-items:flex-start;gap:",P/* .spacing["16"] */.W0["16"],";"),taxWrapper:/*#__PURE__*/(0,l/* .css */.iv)(j/* .styleUtils.display.flex */.i.display.flex("column"),"    gap:",P/* .spacing["4"] */.W0["4"],";label{",R/* .typography.body */.c.body(),"      color:",P/* .colorTokens.text.title */.Jv.text.title,";}"),checkboxWrapper:/*#__PURE__*/(0,l/* .css */.iv)(j/* .styleUtils.display.flex */.i.display.flex("column"),"    gap:",P/* .spacing["4"] */.W0["4"],";"),taxAlert:/*#__PURE__*/(0,l/* .css */.iv)(j/* .styleUtils.display.flex */.i.display.flex("column"),"    gap:",P/* .spacing["8"] */.W0["8"],";margin-top:",P/* .spacing["8"] */.W0["8"],";padding:",P/* .spacing["12"] */.W0["12"],";background-color:",P/* .colorTokens.color.warning["40"] */.Jv.color.warning["40"],";border:1px solid ",P/* .colorTokens.color.warning["50"] */.Jv.color.warning["50"],";border-radius:",P/* .borderRadius["6"] */.E0["6"],";"),alertTitle:/*#__PURE__*/(0,l/* .css */.iv)(j/* .styleUtils.display.flex */.i.display.flex(),"    gap:",P/* .spacing["4"] */.W0["4"],";align-items:center;",R/* .typography.caption */.c.caption("medium"),";color:",P/* .colorTokens.color.warning["100"] */.Jv.color.warning["100"],";svg{color:",P/* .colorTokens.design.warning */.Jv.design.warning,";flex-shrink:0;}"),alertDescription:/*#__PURE__*/(0,l/* .css */.iv)(R/* .typography.caption */.c.caption(),"    color:",P/* .colorTokens.color.warning["100"] */.Jv.color.warning["100"],";")};// CONCATENATED MODULE: ./assets/react/v3/entries/course-builder/components/course-basic/CourseBasicSidebar.tsx
var rs=(0,A/* .getCourseId */.z)();var rl=()=>{var e,t,r,n;var i=(0,f/* .useFormContext */.Gc)();var l=(0,c/* .useQueryClient */.NL)();var g=(0,d/* .useIsFetching */.y)({queryKey:["CourseDetails",rs]});var[m,b]=(0,v.useState)("");var _=l.getQueryData(["CourseDetails",rs]);var y=L/* .tutorConfig.current_user */.y.current_user;var w=(0,X/* .isAddonEnabled */.ro)(J/* .Addons.TUTOR_MULTI_INSTRUCTORS */.AO.TUTOR_MULTI_INSTRUCTORS);var x=!!L/* .tutorConfig.tutor_pro_url */.y.tutor_pro_url;var Z=((e=L/* .tutorConfig.settings */.y.settings)===null||e===void 0?void 0:e.chatgpt_enable)==="on";var k=((t=L/* .tutorConfig.settings */.y.settings)===null||t===void 0?void 0:t.instructor_can_change_course_author)!=="off";var C=((r=L/* .tutorConfig.settings */.y.settings)===null||r===void 0?void 0:r.instructor_can_manage_co_instructors)!=="off";var D=String(y.data.id)===String((_===null||_===void 0?void 0:_.post_author.ID)||"");var E=y.roles.includes(J/* .TutorRoles.ADMINISTRATOR */.er.ADMINISTRATOR);var S=((_===null||_===void 0?void 0:_.course_instructors)||[]).find(e=>String(e.id)===String(y.data.id));var W=(0,X/* .isAddonEnabled */.ro)(J/* .Addons.SUBSCRIPTION */.AO.SUBSCRIPTION)&&((n=L/* .tutorConfig.settings */.y.settings)===null||n===void 0?void 0:n.membership_only_mode);var M=i.watch("post_author");var T=x&&w&&(E||S&&C);var B=E||D&&k;var N=(0,f/* .useWatch */.qo)({control:i.control,name:"visibility"});var O=[{label:(0,u.__)("Public","tutor"),value:"publish"},{label:(0,u.__)("Password Protected","tutor"),value:"password_protected"},{label:(0,u.__)("Private","tutor"),value:"private"}];var A=eK(m);var P=e0(String(rs),w);var R=((_===null||_===void 0?void 0:_.course_instructors)||[]).map(e=>({id:e.id,name:e.display_name,email:e.user_email,avatar_url:e.avatar_url}));var z=[...R,...P.data||[]].filter(e=>String(e.id)!==String(M===null||M===void 0?void 0:M.id));var j=()=>{var e=_===null||_===void 0?void 0:_.post_author;var t=i.getValues("course_instructors");var r=!!t.find(t=>String(t.id)===String(e===null||e===void 0?void 0:e.ID));var n={id:Number(e===null||e===void 0?void 0:e.ID),name:e===null||e===void 0?void 0:e.display_name,email:e.user_email,avatar_url:e===null||e===void 0?void 0:e.tutor_profile_photo_url,isRemoveAble:String(e===null||e===void 0?void 0:e.ID)!==String(y.data.id)};var o=r?t:[...t,n];i.setValue("course_instructors",o)};return/*#__PURE__*/(0,s/* .jsxs */.BX)("div",{css:rd.sidebar,children:[/*#__PURE__*/(0,s/* .jsxs */.BX)("div",{css:rd.statusAndDate,children:[/*#__PURE__*/(0,s/* .jsx */.tZ)(f/* .Controller */.Qr,{name:"visibility",control:i.control,render:e=>/*#__PURE__*/(0,s/* .jsx */.tZ)(eE/* ["default"] */.Z,(0,a._)((0,o._)({},e),{label:(0,u.__)("Visibility","tutor"),placeholder:(0,u.__)("Select visibility status","tutor"),options:O,leftIcon:/*#__PURE__*/(0,s/* .jsx */.tZ)(h/* ["default"] */.Z,{name:"eye",width:32,height:32}),loading:!!g&&!e.field.value,onChange:()=>{i.setValue("post_password","")}}))}),/*#__PURE__*/(0,s/* .jsx */.tZ)(U/* ["default"] */.Z,{when:_===null||_===void 0?void 0:_.post_modified,children:e=>/*#__PURE__*/(0,s/* .jsx */.tZ)("div",{css:rd.updatedOn,children:/* translators: %s is the last updated date */(0,u.sprintf)((0,u.__)("Last updated on %s","tutor"),(0,p["default"])(new Date(e),J/* .DateFormats.dayMonthYear */.E_.dayMonthYear)||"")})})]}),/*#__PURE__*/(0,s/* .jsx */.tZ)(U/* ["default"] */.Z,{when:N==="password_protected",children:/*#__PURE__*/(0,s/* .jsx */.tZ)(f/* .Controller */.Qr,{name:"post_password",control:i.control,rules:{required:(0,u.__)("Password is required","tutor")},render:e=>/*#__PURE__*/(0,s/* .jsx */.tZ)(ep/* ["default"] */.Z,(0,a._)((0,o._)({},e),{label:(0,u.__)("Password","tutor"),placeholder:(0,u.__)("Enter password","tutor"),type:"password",isPassword:true,loading:!!g&&!e.field.value}))})}),/*#__PURE__*/(0,s/* .jsx */.tZ)(H,{visibilityKey:J/* .VisibilityControlKeys.COURSE_BUILDER.BASICS.SCHEDULING_OPTIONS */.j9.COURSE_BUILDER.BASICS.SCHEDULING_OPTIONS}),/*#__PURE__*/(0,s/* .jsx */.tZ)(f/* .Controller */.Qr,{name:"thumbnail",control:i.control,render:e=>/*#__PURE__*/(0,s/* .jsx */.tZ)(I/* ["default"] */.Z,(0,a._)((0,o._)({},e),{label:(0,u.__)("Featured Image","tutor"),buttonText:(0,u.__)("Upload Thumbnail","tutor"),infoText:(0,u.sprintf)((0,u.__)("JPEG, PNG, GIF, and WebP formats, up to %s","tutor"),L/* .tutorConfig.max_upload_size */.y.max_upload_size),generateWithAi:!x||Z,loading:!!g&&!e.field.value,visibilityKey:J/* .VisibilityControlKeys.COURSE_BUILDER.BASICS.FEATURED_IMAGE */.j9.COURSE_BUILDER.BASICS.FEATURED_IMAGE}))}),/*#__PURE__*/(0,s/* .jsx */.tZ)(f/* .Controller */.Qr,{name:"video",control:i.control,render:e=>/*#__PURE__*/(0,s/* .jsx */.tZ)(eV/* ["default"] */.Z,(0,a._)((0,o._)({},e),{label:(0,u.__)("Intro Video","tutor"),buttonText:(0,u.__)("Upload Video","tutor"),infoText:(0,u.sprintf)((0,u.__)("MP4, and WebM formats, up to %s","tutor"),L/* .tutorConfig.max_upload_size */.y.max_upload_size),loading:!!g&&!e.field.value,visibilityKey:J/* .VisibilityControlKeys.COURSE_BUILDER.BASICS.INTRO_VIDEO */.j9.COURSE_BUILDER.BASICS.INTRO_VIDEO}))}),/*#__PURE__*/(0,s/* .jsx */.tZ)(U/* ["default"] */.Z,{when:!W,children:/*#__PURE__*/(0,s/* .jsx */.tZ)(ra,{visibilityKey:J/* .VisibilityControlKeys.COURSE_BUILDER.BASICS.PRICING_OPTIONS */.j9.COURSE_BUILDER.BASICS.PRICING_OPTIONS})}),/*#__PURE__*/(0,s/* .jsx */.tZ)(f/* .Controller */.Qr,{name:"course_categories",control:i.control,defaultValue:[],render:e=>/*#__PURE__*/(0,s/* .jsx */.tZ)(eZ,(0,a._)((0,o._)({},e),{label:(0,u.__)("Categories","tutor"),visibilityKey:J/* .VisibilityControlKeys.COURSE_BUILDER.BASICS.CATEGORIES */.j9.COURSE_BUILDER.BASICS.CATEGORIES}))}),/*#__PURE__*/(0,s/* .jsx */.tZ)(f/* .Controller */.Qr,{name:"course_tags",control:i.control,render:e=>/*#__PURE__*/(0,s/* .jsx */.tZ)(eq,(0,a._)((0,o._)({},e),{label:(0,u.__)("Tags","tutor"),placeholder:(0,u.__)("Add tags","tutor"),visibilityKey:J/* .VisibilityControlKeys.COURSE_BUILDER.BASICS.TAGS */.j9.COURSE_BUILDER.BASICS.TAGS}))}),/*#__PURE__*/(0,s/* .jsx */.tZ)(f/* .Controller */.Qr,{name:"post_author",control:i.control,render:e=>{var t;var r;return/*#__PURE__*/(0,s/* .jsx */.tZ)(eO,(0,a._)((0,o._)({},e),{label:(0,u.__)("Author","tutor"),options:(r=(t=A.data)===null||t===void 0?void 0:t.map(e=>({id:e.id,name:e.name||"",email:e.email||"",avatar_url:e.avatar_url||""})))!==null&&r!==void 0?r:[],placeholder:(0,u.__)("Search to add author","tutor"),isSearchable:true,disabled:!B,loading:A.isLoading,onChange:j,handleSearchOnChange:e=>{b(e)},visibilityKey:J/* .VisibilityControlKeys.COURSE_BUILDER.BASICS.AUTHOR */.j9.COURSE_BUILDER.BASICS.AUTHOR}))}}),/*#__PURE__*/(0,s/* .jsx */.tZ)(U/* ["default"] */.Z,{when:T,children:/*#__PURE__*/(0,s/* .jsx */.tZ)(f/* .Controller */.Qr,{name:"course_instructors",control:i.control,render:e=>/*#__PURE__*/(0,s/* .jsx */.tZ)(eO,(0,a._)((0,o._)({},e),{label:(0,u.__)("Instructors","tutor"),options:z,placeholder:(0,u.__)("Search to add instructor","tutor"),isSearchable:true,isMultiSelect:true,loading:P.isLoading&&!e.field.value,emptyStateText:(0,u.__)("No instructors added.","tutor"),isInstructorMode:true,visibilityKey:J/* .VisibilityControlKeys.COURSE_BUILDER.BASICS.INSTRUCTORS */.j9.COURSE_BUILDER.BASICS.INSTRUCTORS}))})})]})};/* ESM default export */const rc=rl;var rd={sidebar:/*#__PURE__*/(0,l/* .css */.iv)("border-left:1px solid ",P/* .colorTokens.stroke.divider */.Jv.stroke.divider,";min-height:calc(100vh - ",P/* .headerHeight */.J9,"px);padding-left:",P/* .spacing["32"] */.W0["32"],";padding-block:",P/* .spacing["24"] */.W0["24"],";display:flex;flex-direction:column;gap:",P/* .spacing["16"] */.W0["16"],";",P/* .Breakpoint.smallTablet */.Uo.smallTablet,"{border-left:none;border-top:1px solid ",P/* .colorTokens.stroke.divider */.Jv.stroke.divider,";padding-block:",P/* .spacing["16"] */.W0["16"],";padding-left:0;}"),statusAndDate:/*#__PURE__*/(0,l/* .css */.iv)(j/* .styleUtils.display.flex */.i.display.flex("column"),";gap:",P/* .spacing["4"] */.W0["4"],";"),updatedOn:/*#__PURE__*/(0,l/* .css */.iv)(R/* .typography.caption */.c.caption(),";color:",P/* .colorTokens.text.hints */.Jv.text.hints,";"),priceRadioGroup:/*#__PURE__*/(0,l/* .css */.iv)("display:flex;align-items:center;gap:",P/* .spacing["36"] */.W0["36"],";"),coursePriceWrapper:/*#__PURE__*/(0,l/* .css */.iv)("display:flex;align-items:flex-start;gap:",P/* .spacing["16"] */.W0["16"],";")};// EXTERNAL MODULE: ./assets/react/v3/shared/molecules/Tabs.tsx
var ru=r(63189);// CONCATENATED MODULE: ./assets/react/v3/shared/components/fields/FormMultiSelectInput.tsx
function rv(){var e=(0,i._)(["\n      min-width: 200px;\n    "]);rv=function t(){return e};return e}var rf=e=>{var{field:t,fieldState:r,label:n,placeholder:i="",disabled:l,readOnly:c,loading:d,helpText:f,removeOptionsMinWidth:p=false,options:h}=e;var g=t.value||[];var m=h.filter(e=>g.includes(e.value));var[b,_]=(0,v.useState)("");var y=(0,ee/* .useDebounce */.N)(b);var w=h.filter(e=>e.label.toLowerCase().includes(y.toLowerCase()));var[x,Z]=(0,v.useState)(false);var{triggerRef:k,triggerWidth:C,position:D,popoverRef:E}=(0,en/* .usePortalPopover */.l)({isOpen:x,isDropdown:true});var S=(e,r)=>{if(e){t.onChange([...g,r])}else{t.onChange(g.filter(e=>e!==r))}};return/*#__PURE__*/(0,s/* .jsx */.tZ)(ef/* ["default"] */.Z,{fieldState:r,field:t,label:n,disabled:l,readOnly:c,loading:d,helpText:f,children:e=>{var{css:t}=e,r=(0,eS._)(e,["css"]);return/*#__PURE__*/(0,s/* .jsxs */.BX)("div",{css:rh.mainWrapper,children:[/*#__PURE__*/(0,s/* .jsx */.tZ)("div",{css:rh.inputWrapper,ref:k,children:/*#__PURE__*/(0,s/* .jsx */.tZ)("input",(0,a._)((0,o._)({},r),{css:[t,rh.input],onClick:()=>Z(true),autoComplete:"off",readOnly:c,placeholder:i,value:b,onChange:e=>{_(e.target.value)}}))}),g.length>0&&/*#__PURE__*/(0,s/* .jsx */.tZ)("div",{css:rh.selectedOptionsWrapper,children:m.map(e=>/*#__PURE__*/(0,s/* .jsx */.tZ)(eR,{label:e.label,onClick:()=>S(false,e.value)},e.value))}),/*#__PURE__*/(0,s/* .jsx */.tZ)(en/* .Portal */.h,{isOpen:x,onClickOutside:()=>Z(false),onEscape:()=>Z(false),children:/*#__PURE__*/(0,s/* .jsx */.tZ)("div",{css:[rh.optionsWrapper,{[J/* .isRTL */.dZ?"right":"left"]:D.left,top:D.top,maxWidth:C}],ref:E,children:/*#__PURE__*/(0,s/* .jsx */.tZ)("ul",{css:[rh.options(p)],children:/*#__PURE__*/(0,s/* .jsx */.tZ)(U/* ["default"] */.Z,{when:w.length>0,fallback:/*#__PURE__*/(0,s/* .jsx */.tZ)("div",{css:rh.notTag,children:(0,u.__)("No option available.","tutor")}),children:/*#__PURE__*/(0,s/* .jsx */.tZ)(t1/* ["default"] */.Z,{each:w,children:e=>/*#__PURE__*/(0,s/* .jsx */.tZ)("li",{css:rh.optionItem,children:/*#__PURE__*/(0,s/* .jsx */.tZ)(K/* ["default"] */.Z,{label:e.label,checked:!!g.find(t=>t===e.value),onChange:t=>S(t,e.value)})},e.value)})})})})})]})}})};/* ESM default export */const rp=rf;var rh={mainWrapper:/*#__PURE__*/(0,l/* .css */.iv)("width:100%;"),notTag:/*#__PURE__*/(0,l/* .css */.iv)(R/* .typography.caption */.c.caption(),";min-height:80px;display:flex;justify-content:center;align-items:center;color:",P/* .colorTokens.text.subdued */.Jv.text.subdued,";"),inputWrapper:/*#__PURE__*/(0,l/* .css */.iv)("width:100%;display:flex;justify-content:space-between;align-items:center;position:relative;"),input:/*#__PURE__*/(0,l/* .css */.iv)(R/* .typography.body */.c.body(),";width:100%;",j/* .styleUtils.textEllipsis */.i.textEllipsis,";:focus{outline:none;box-shadow:",P/* .shadow.focus */.AF.focus,";}"),selectedOptionsWrapper:/*#__PURE__*/(0,l/* .css */.iv)("display:flex;flex-wrap:wrap;align-items:center;gap:",P/* .spacing["4"] */.W0["4"],";margin-top:",P/* .spacing["8"] */.W0["8"],";"),optionsWrapper:/*#__PURE__*/(0,l/* .css */.iv)("position:absolute;width:100%;"),options:e=>/*#__PURE__*/(0,l/* .css */.iv)("z-index:",P/* .zIndex.dropdown */.W5.dropdown,";background-color:",P/* .colorTokens.background.white */.Jv.background.white,";list-style-type:none;box-shadow:",P/* .shadow.popover */.AF.popover,";padding:",P/* .spacing["4"] */.W0["4"]," 0;margin:0;max-height:400px;border-radius:",P/* .borderRadius["6"] */.E0["6"],";",j/* .styleUtils.overflowYAuto */.i.overflowYAuto,";",!e&&(0,l/* .css */.iv)(rv())),optionItem:/*#__PURE__*/(0,l/* .css */.iv)("min-height:40px;height:100%;width:100%;display:flex;align-items:center;padding:",P/* .spacing["8"] */.W0["8"],";transition:background-color 0.3s ease-in-out;label{width:100%;}&:hover{background-color:",P/* .colorTokens.background.hover */.Jv.background.hover,";}"),addTag:/*#__PURE__*/(0,l/* .css */.iv)(j/* .styleUtils.resetButton */.i.resetButton,";",R/* .typography.body */.c.body(),"    line-height:",P/* .lineHeight["24"] */.Nv["24"],";display:flex;align-items:center;gap:",P/* .spacing["4"] */.W0["4"],";width:100%;padding:",P/* .spacing["8"] */.W0["8"],";&:hover{background-color:",P/* .colorTokens.background.hover */.Jv.background.hover,";}")};// CONCATENATED MODULE: ./assets/react/v3/entries/course-builder/components/course-basic/ContentDripSettings.tsx
var rg=()=>{var e=(0,f/* .useFormContext */.Gc)();var t=[{label:(0,u.__)("Schedule course content by date","tutor"),value:"unlock_by_date"},{label:(0,u.__)("Content available after X days from enrollment","tutor"),value:"specific_days"},{label:(0,u.__)("Course content available sequentially","tutor"),value:"unlock_sequentially"},{label:(0,u.__)("Course content unlocked after finishing prerequisites","tutor"),value:"after_finishing_prerequisites",labelCss:/*#__PURE__*/(0,l/* .css */.iv)("align-items:start;span{top:3px;}")},{label:(0,u.__)("None","tutor"),value:""}];if(!L/* .tutorConfig.tutor_pro_url */.y.tutor_pro_url){return/*#__PURE__*/(0,s/* .jsxs */.BX)("div",{css:rb.dripNoProWrapper,children:[/*#__PURE__*/(0,s/* .jsx */.tZ)(h/* ["default"] */.Z,{name:"crown",width:72,height:72}),/*#__PURE__*/(0,s/* .jsx */.tZ)("h6",{css:R/* .typography.body */.c.body("medium"),children:(0,u.__)("Content Drip is a pro feature","tutor")}),/*#__PURE__*/(0,s/* .jsx */.tZ)("p",{css:rb.dripNoProDescription,children:(0,u.__)("You can schedule your course content using  content drip options","tutor")}),/*#__PURE__*/(0,s/* .jsx */.tZ)(S/* ["default"] */.Z,{icon:/*#__PURE__*/(0,s/* .jsx */.tZ)(h/* ["default"] */.Z,{name:"crown",width:24,height:24}),onClick:()=>{window.open(L/* ["default"].TUTOR_PRICING_PAGE */.Z.TUTOR_PRICING_PAGE,"_blank","noopener")},children:(0,u.__)("Get Tutor LMS Pro","tutor")})]})}if(!(0,X/* .isAddonEnabled */.ro)(J/* .Addons.CONTENT_DRIP */.AO.CONTENT_DRIP)){return/*#__PURE__*/(0,s/* .jsxs */.BX)("div",{css:rb.dripNoProWrapper,children:[/*#__PURE__*/(0,s/* .jsx */.tZ)(h/* ["default"] */.Z,{name:"contentDrip",width:72,height:72,style:rb.dripIcon}),/*#__PURE__*/(0,s/* .jsx */.tZ)("h6",{css:R/* .typography.body */.c.body("medium"),children:(0,u.__)("Activate the “Content Drip” addon to use this feature.","tutor")}),/*#__PURE__*/(0,s/* .jsx */.tZ)("p",{css:rb.dripNoProDescription,children:(0,u.__)("Control when students can access lessons and quizzes using the Content Drip feature.","tutor")}),/*#__PURE__*/(0,s/* .jsx */.tZ)(S/* ["default"] */.Z,{variant:"secondary",icon:/*#__PURE__*/(0,s/* .jsx */.tZ)(h/* ["default"] */.Z,{name:"linkExternal",width:24,height:24}),onClick:()=>{window.open(L/* ["default"].TUTOR_ADDONS_PAGE */.Z.TUTOR_ADDONS_PAGE,"_blank","noopener")},children:(0,u.__)("Enable Content Drip Addon","tutor")})]})}return/*#__PURE__*/(0,s/* .jsxs */.BX)("div",{css:rb.dripWrapper,children:[/*#__PURE__*/(0,s/* .jsx */.tZ)("h6",{css:rb.dripTitle,children:(0,u.__)("Content Drip Type","tutor")}),/*#__PURE__*/(0,s/* .jsx */.tZ)("p",{css:rb.dripSubTitle,children:(0,u.__)("You can schedule your course content using one of the following Content Drip options","tutor")}),/*#__PURE__*/(0,s/* .jsx */.tZ)(f/* .Controller */.Qr,{name:"contentDripType",control:e.control,render:e=>/*#__PURE__*/(0,s/* .jsx */.tZ)(e4/* ["default"] */.Z,(0,a._)((0,o._)({},e),{options:t,wrapperCss:rb.radioWrapper}))})]})};/* ESM default export */const rm=rg;var rb={dripWrapper:/*#__PURE__*/(0,l/* .css */.iv)("background-color:",P/* .colorTokens.background.white */.Jv.background.white,";padding:",P/* .spacing["16"] */.W0["16"]," ",P/* .spacing["24"] */.W0["24"]," ",P/* .spacing["32"] */.W0["32"]," ",P/* .spacing["32"] */.W0["32"],";min-height:400px;",P/* .Breakpoint.smallMobile */.Uo.smallMobile,"{padding:",P/* .spacing["16"] */.W0["16"],";}"),dripTitle:/*#__PURE__*/(0,l/* .css */.iv)(R/* .typography.body */.c.body("medium"),";margin-bottom:",P/* .spacing["4"] */.W0["4"],";"),dripSubTitle:/*#__PURE__*/(0,l/* .css */.iv)(R/* .typography.small */.c.small(),";color:",P/* .colorTokens.text.hints */.Jv.text.hints,";margin-bottom:",P/* .spacing["16"] */.W0["16"],";"),radioWrapper:/*#__PURE__*/(0,l/* .css */.iv)("display:flex;flex-direction:column;gap:",P/* .spacing["8"] */.W0["8"],";"),dripNoProWrapper:/*#__PURE__*/(0,l/* .css */.iv)("min-height:400px;background:",P/* .colorTokens.background.white */.Jv.background.white,";display:flex;flex-direction:column;align-items:center;justify-content:center;gap:",P/* .spacing["4"] */.W0["4"],";padding:",P/* .spacing["24"] */.W0["24"],";text-align:center;"),dripNoProDescription:/*#__PURE__*/(0,l/* .css */.iv)(R/* .typography.caption */.c.caption(),";color:",P/* .colorTokens.text.subdued */.Jv.text.subdued,";max-width:320px;margin:0 auto ",P/* .spacing["12"] */.W0["12"],";"),dripIcon:/*#__PURE__*/(0,l/* .css */.iv)("color:",P/* .colorTokens.icon.brand */.Jv.icon.brand,";")};// CONCATENATED MODULE: ./assets/react/v3/entries/course-builder/components/course-basic/EnrollmentSettings.tsx
function r_(){var e=(0,i._)(["\n      padding-bottom: ",";\n    "]);r_=function t(){return e};return e}var ry=(0,A/* .getCourseId */.z)();var rw=()=>{var e,t;var r=!!L/* .tutorConfig.tutor_pro_url */.y.tutor_pro_url;var n=(0,f/* .useFormContext */.Gc)();var i=(0,d/* .useIsFetching */.y)({queryKey:["CourseDetails",ry]});var l=(0,f/* .useWatch */.qo)({control:n.control,name:"course_enrollment_period"});var c=(0,f/* .useWatch */.qo)({control:n.control,name:"enrollment_starts_date"});var p=(0,f/* .useWatch */.qo)({control:n.control,name:"enrollment_starts_time"});var h=(0,f/* .useWatch */.qo)({control:n.control,name:"enrollment_ends_date"});var g=(0,f/* .useWatch */.qo)({control:n.control,name:"isScheduleEnabled"});var m=(0,f/* .useWatch */.qo)({control:n.control,name:"schedule_date"});var b=(0,f/* .useWatch */.qo)({control:n.control,name:"schedule_time"});var[_,y]=(0,v.useState)(false);var w=(0,X/* .isAddonEnabled */.ro)(J/* .Addons.SUBSCRIPTION */.AO.SUBSCRIPTION)&&((e=L/* .tutorConfig.settings */.y.settings)===null||e===void 0?void 0:e.membership_only_mode);var Z=(0,X/* .isAddonEnabled */.ro)(J/* .Addons.ENROLLMENT */.AO.ENROLLMENT);var k=new Date("".concat(m," ").concat(b));return/*#__PURE__*/(0,s/* .jsxs */.BX)("div",{css:rZ.wrapper,children:[/*#__PURE__*/(0,s/* .jsx */.tZ)(f/* .Controller */.Qr,{name:"maximum_students",control:n.control,render:e=>/*#__PURE__*/(0,s/* .jsx */.tZ)(ep/* ["default"] */.Z,(0,a._)((0,o._)({},e),{label:(0,u.__)("Maximum Student","tutor"),helpText:(0,u.__)("Number of students that can enrol in this course. Set 0 for no limits.","tutor"),placeholder:"0",type:"number",isClearable:true,selectOnFocus:true,loading:!!i&&!e.field.value}))}),/*#__PURE__*/(0,s/* .jsxs */.BX)(U/* ["default"] */.Z,{when:r&&Z,children:[/*#__PURE__*/(0,s/* .jsx */.tZ)(U/* ["default"] */.Z,{when:!w&&((t=L/* .tutorConfig.settings */.y.settings)===null||t===void 0?void 0:t.enrollment_expiry_enabled)==="on",children:/*#__PURE__*/(0,s/* .jsx */.tZ)(f/* .Controller */.Qr,{name:"enrollment_expiry",control:n.control,render:e=>/*#__PURE__*/(0,s/* .jsx */.tZ)(ep/* ["default"] */.Z,(0,a._)((0,o._)({},e),{label:(0,u.__)("Enrollment Expiration","tutor"),helpText:(0,u.__)("Student's enrollment will be removed after this number of days. Set 0 for lifetime enrollment.","tutor"),placeholder:"0",type:"number",isClearable:true,selectOnFocus:true,loading:!!i&&!e.field.value}))})}),/*#__PURE__*/(0,s/* .jsxs */.BX)("div",{css:rZ.enrollmentPeriod({isEnabled:l}),children:[/*#__PURE__*/(0,s/* .jsx */.tZ)(f/* .Controller */.Qr,{name:"course_enrollment_period",control:n.control,rules:{deps:["schedule_date","schedule_time",...c?["enrollment_starts_date"]:[],...p?["enrollment_starts_time"]:[],"enrollment_ends_date","enrollment_ends_time"]},render:e=>/*#__PURE__*/(0,s/* .jsx */.tZ)(N/* ["default"] */.Z,(0,a._)((0,o._)({},e),{label:(0,u.__)("Course Enrollment Period","tutor"),loading:!!i&&!e.field.value,onChange:e=>{if(!e){n.clearErrors(["enrollment_starts_date","enrollment_starts_time","enrollment_ends_date","enrollment_ends_time"])}}}))}),/*#__PURE__*/(0,s/* .jsx */.tZ)(U/* ["default"] */.Z,{when:l,children:/*#__PURE__*/(0,s/* .jsxs */.BX)("div",{css:rZ.enrollmentDateWrapper,children:[/*#__PURE__*/(0,s/* .jsxs */.BX)("div",{css:rZ.enrollmentDate,children:[/*#__PURE__*/(0,s/* .jsx */.tZ)("label",{htmlFor:"enrollment_starts_at",children:(0,u.__)("Start Date","tutor")}),/*#__PURE__*/(0,s/* .jsxs */.BX)("div",{id:"enrollment_starts_at",css:j/* .styleUtils.dateAndTimeWrapper */.i.dateAndTimeWrapper,children:[/*#__PURE__*/(0,s/* .jsx */.tZ)(f/* .Controller */.Qr,{name:"enrollment_starts_date",control:n.control,rules:(0,a._)((0,o._)({},(0,F/* .requiredRule */.n0)()),{validate:{invalidDate:F/* .invalidDateRule */.Ek,isAfterScheduleDate:e=>{if(g&&k&&(0,x["default"])(C(new Date(e)),C(new Date(m)))){return(0,u.__)("Start date should be after the schedule date","tutor")}}},deps:["schedule_date","schedule_time","enrollment_starts_time","enrollment_ends_date","enrollment_ends_time"]}),render:e=>/*#__PURE__*/(0,s/* .jsx */.tZ)(B/* ["default"] */.Z,(0,a._)((0,o._)({},e),{loading:!!i&&!e.field.value,placeholder:(0,u.__)("Start Date","tutor"),dateFormat:J/* .DateFormats.monthDayYear */.E_.monthDayYear}))}),/*#__PURE__*/(0,s/* .jsx */.tZ)(f/* .Controller */.Qr,{name:"enrollment_starts_time",control:n.control,rules:(0,a._)((0,o._)({},(0,F/* .requiredRule */.n0)()),{validate:{invalidTime:F/* .invalidTimeRule */.xB,isAfterScheduleTime:e=>{if(g&&k&&(0,x["default"])(new Date("".concat(c," ").concat(e)),k)){return(0,u.__)("Start time should be after the schedule time","tutor")}}},deps:["schedule_date","schedule_time","enrollment_starts_date","enrollment_ends_date"]}),render:e=>/*#__PURE__*/(0,s/* .jsx */.tZ)(O/* ["default"] */.Z,(0,a._)((0,o._)({},e),{loading:!!i&&!e.field.value,placeholder:(0,u.__)("hh:mm a","tutor")}))})]})]}),/*#__PURE__*/(0,s/* .jsx */.tZ)(U/* ["default"] */.Z,{when:_||h,fallback:/*#__PURE__*/(0,s/* .jsx */.tZ)("div",{children:/*#__PURE__*/(0,s/* .jsx */.tZ)(S/* ["default"] */.Z,{variant:"secondary",size:"small",onClick:()=>y(true),disabled:!!i||!c||!p,children:(0,u.__)("Add End Date","tutor")})}),children:/*#__PURE__*/(0,s/* .jsxs */.BX)("div",{css:rZ.enrollmentDate,children:[/*#__PURE__*/(0,s/* .jsxs */.BX)("label",{htmlFor:"enrollment_ends_at",children:[/*#__PURE__*/(0,s/* .jsx */.tZ)("span",{children:(0,u.__)("End Date","tutor")}),/*#__PURE__*/(0,s/* .jsx */.tZ)(S/* ["default"] */.Z,{variant:"text",size:"small",onClick:()=>{y(false);n.setValue("enrollment_ends_date","");n.setValue("enrollment_ends_time","")},css:rZ.removeButton,children:(0,u.__)("Remove","tutor")})]}),/*#__PURE__*/(0,s/* .jsxs */.BX)("div",{id:"enrollment_ends_at",css:j/* .styleUtils.dateAndTimeWrapper */.i.dateAndTimeWrapper,children:[/*#__PURE__*/(0,s/* .jsx */.tZ)(f/* .Controller */.Qr,{name:"enrollment_ends_date",control:n.control,rules:(0,a._)((0,o._)({},(0,F/* .requiredRule */.n0)()),{validate:{invalidDate:F/* .invalidDateRule */.Ek,checkEndDate:e=>{if((0,x["default"])(C(new Date(e)),C(new Date(c)))){return(0,u.__)("End date should be after the start date","tutor")}}},deps:["enrollment_starts_date","enrollment_starts_time","enrollment_ends_time"]}),render:e=>/*#__PURE__*/(0,s/* .jsx */.tZ)(B/* ["default"] */.Z,(0,a._)((0,o._)({},e),{loading:!!i&&!e.field.value,placeholder:(0,u.__)("End Date","tutor"),disabledBefore:c,dateFormat:J/* .DateFormats.monthDayYear */.E_.monthDayYear}))}),/*#__PURE__*/(0,s/* .jsx */.tZ)(f/* .Controller */.Qr,{name:"enrollment_ends_time",control:n.control,rules:(0,a._)((0,o._)({},(0,F/* .requiredRule */.n0)()),{validate:{invalidTime:F/* .invalidTimeRule */.xB,checkEndTime:e=>{if(c&&h&&p&&!(0,x["default"])(new Date("".concat(c," ").concat(p)),new Date("".concat(h," ").concat(e)))){return(0,u.__)("End time should be after the start time","tutor")}}},deps:["enrollment_starts_date","enrollment_starts_time","enrollment_ends_date"]}),render:e=>/*#__PURE__*/(0,s/* .jsx */.tZ)(O/* ["default"] */.Z,(0,a._)((0,o._)({},e),{loading:!!i&&!e.field.value,placeholder:(0,u.__)("hh:mm a","tutor")}))})]})]})})]})})]}),/*#__PURE__*/(0,s/* .jsx */.tZ)(f/* .Controller */.Qr,{name:"pause_enrollment",control:n.control,render:e=>/*#__PURE__*/(0,s/* .jsx */.tZ)(T/* ["default"] */.Z,(0,a._)((0,o._)({},e),{label:(0,u.__)("Pause Enrollment","tutor"),description:(0,u.__)("If you pause enrolment, students will no longer be able to enroll in the course.","tutor")}))})]})]})};/* ESM default export */const rx=rw;var rZ={wrapper:/*#__PURE__*/(0,l/* .css */.iv)(j/* .styleUtils.display.flex */.i.display.flex("column"),";gap:",P/* .spacing["16"] */.W0["16"],";background-color:",P/* .colorTokens.background.white */.Jv.background.white,";padding:",P/* .spacing["16"] */.W0["16"]," ",P/* .spacing["24"] */.W0["24"]," ",P/* .spacing["32"] */.W0["32"]," ",P/* .spacing["32"] */.W0["32"],";min-height:400px;",P/* .Breakpoint.smallMobile */.Uo.smallMobile,"{padding:",P/* .spacing["16"] */.W0["16"],";}"),enrollmentPeriod:e=>{var{isEnabled:t=false}=e;return/*#__PURE__*/(0,l/* .css */.iv)("padding:",P/* .spacing["12"] */.W0["12"],";border:1px solid ",P/* .colorTokens.stroke["default"] */.Jv.stroke["default"],";border-radius:",P/* .borderRadius["8"] */.E0["8"],";background-color:",P/* .colorTokens.bg.white */.Jv.bg.white,";",t&&(0,l/* .css */.iv)(r_(),P/* .spacing["16"] */.W0["16"]))},enrollmentDateWrapper:/*#__PURE__*/(0,l/* .css */.iv)(j/* .styleUtils.display.flex */.i.display.flex("column"),";gap:",P/* .spacing["8"] */.W0["8"],";margin-top:",P/* .spacing["16"] */.W0["16"],";"),enrollmentDate:/*#__PURE__*/(0,l/* .css */.iv)(j/* .styleUtils.display.flex */.i.display.flex("column"),";gap:",P/* .spacing["4"] */.W0["4"],";label{",j/* .styleUtils.display.flex */.i.display.flex(),";align-items:center;justify-content:space-between;",R/* .typography.caption */.c.caption(),";color:",P/* .colorTokens.text.title */.Jv.text.title,";}"),removeButton:/*#__PURE__*/(0,l/* .css */.iv)("margin-left:auto;padding:0;")};// EXTERNAL MODULE: ./assets/react/v3/shared/hooks/useVisibilityControl.tsx
var rk=r(72501);// CONCATENATED MODULE: ./assets/react/v3/entries/course-builder/components/course-basic/CourseSettings.tsx
var rC=(0,A/* .getCourseId */.z)();var rD=()=>{var e,t;var r=(0,f/* .useFormContext */.Gc)();var n=(0,d/* .useIsFetching */.y)({queryKey:["CourseDetails",rC]});var i=(0,rk/* ["default"] */.Z)(J/* .VisibilityControlKeys.COURSE_BUILDER.BASICS.OPTIONS.GENERAL */.j9.COURSE_BUILDER.BASICS.OPTIONS.GENERAL);var c=(0,rk/* ["default"] */.Z)(J/* .VisibilityControlKeys.COURSE_BUILDER.BASICS.OPTIONS.CONTENT_DRIP */.j9.COURSE_BUILDER.BASICS.OPTIONS.CONTENT_DRIP);var p=(0,rk/* ["default"] */.Z)(J/* .VisibilityControlKeys.COURSE_BUILDER.BASICS.OPTIONS.ENROLLMENT */.j9.COURSE_BUILDER.BASICS.OPTIONS.ENROLLMENT);var g=r.watch("contentDripType");var m=r.watch("enable_tutor_bp");var b=r.watch("course_price_type")==="paid";var _=[i&&{label:(0,u.__)("General","tutor"),value:"general",icon:/*#__PURE__*/(0,s/* .jsx */.tZ)(h/* ["default"] */.Z,{name:"settings",width:24,height:24})},c&&{label:(0,u.__)("Content Drip","tutor"),value:"content_drip",icon:/*#__PURE__*/(0,s/* .jsx */.tZ)(h/* ["default"] */.Z,{name:"contentDrip",width:24,height:24}),activeBadge:!!g},p&&{label:(0,u.__)("Enrollment","tutor"),value:"enrollment",icon:/*#__PURE__*/(0,s/* .jsx */.tZ)(h/* ["default"] */.Z,{name:"update",width:24,height:24})},(0,X/* .isAddonEnabled */.ro)(J/* .Addons.BUDDYPRESS */.AO.BUDDYPRESS)&&{label:(0,u.__)("BuddyPress","tutor"),value:"buddyPress",icon:/*#__PURE__*/(0,s/* .jsx */.tZ)(h/* ["default"] */.Z,{name:"buddyPress",width:24,height:24}),activeBadge:m}].filter(Boolean);var[y,w]=(0,v.useState)(((e=_[0])===null||e===void 0?void 0:e.value)||"general");if(!_.length){return null}var x=J/* .CURRENT_VIEWPORT.isAboveSmallMobile */.iM.isAboveSmallMobile?_:_.map(e=>(0,a._)((0,o._)({},e),{label:y===e.value?e.label:""}));var Z=(L/* .tutorConfig.difficulty_levels */.y.difficulty_levels||[]).map(e=>({label:e.label,value:e.value}));return/*#__PURE__*/(0,s/* .jsxs */.BX)("div",{children:[/*#__PURE__*/(0,s/* .jsx */.tZ)("label",{css:R/* .typography.caption */.c.caption(),children:(0,u.__)("Options","tutor")}),/*#__PURE__*/(0,s/* .jsxs */.BX)("div",{"data-cy":"course-settings",css:rS.courseSettings,children:[/*#__PURE__*/(0,s/* .jsx */.tZ)(ru/* ["default"] */.Z,{tabList:x,activeTab:y,onChange:w,orientation:!J/* .CURRENT_VIEWPORT.isAboveSmallMobile */.iM.isAboveSmallMobile?"horizontal":"vertical",wrapperCss:/*#__PURE__*/(0,l/* .css */.iv)("button{min-width:auto;}")}),/*#__PURE__*/(0,s/* .jsxs */.BX)("div",{css:{borderLeft:"1px solid ".concat(P/* .colorTokens.stroke.divider */.Jv.stroke.divider)},children:[y==="general"&&/*#__PURE__*/(0,s/* .jsxs */.BX)("div",{css:rS.settingsOptions,children:[/*#__PURE__*/(0,s/* .jsx */.tZ)(f/* .Controller */.Qr,{name:"course_level",control:r.control,render:e=>/*#__PURE__*/(0,s/* .jsx */.tZ)(eE/* ["default"] */.Z,(0,a._)((0,o._)({},e),{label:(0,u.__)("Difficulty Level","tutor"),placeholder:(0,u.__)("Select Difficulty Level","tutor"),helpText:(0,u.__)("Course difficulty level","tutor"),options:Z,isClearable:false,loading:!!n&&!e.field.value}))}),/*#__PURE__*/(0,s/* .jsxs */.BX)("div",{css:rS.courseAndQna,children:[/*#__PURE__*/(0,s/* .jsx */.tZ)(f/* .Controller */.Qr,{name:"is_public_course",control:r.control,rules:{validate:e=>{if(e&&b){return(0,u.__)("Paid courses cannot be public.","tutor")}return true},deps:["course_price_type"]},render:e=>/*#__PURE__*/(0,s/* .jsx */.tZ)(N/* ["default"] */.Z,(0,a._)((0,o._)({},e),{label:(0,u.__)("Public Course","tutor"),helpText:(0,u.__)("Make This Course Public. No Enrollment Required.","tutor"),loading:!!n&&!e.field.value,onChange:e=>{if(b&&e){r.setValue("is_public_course",false);r.setError("is_public_course",{type:"validate",message:(0,u.__)("Paid courses cannot be public.","tutor")})}}}))}),/*#__PURE__*/(0,s/* .jsx */.tZ)(U/* ["default"] */.Z,{when:((t=L/* .tutorConfig.settings */.y.settings)===null||t===void 0?void 0:t.enable_q_and_a_on_course)==="on",children:/*#__PURE__*/(0,s/* .jsx */.tZ)(f/* .Controller */.Qr,{name:"enable_qna",control:r.control,render:e=>/*#__PURE__*/(0,s/* .jsx */.tZ)(N/* ["default"] */.Z,(0,a._)((0,o._)({},e),{label:(0,u.__)("Q&A","tutor"),helpText:(0,u.__)("Enable Q&A section for your course","tutor"),loading:!!n&&!e.field.value}))})})]})]}),y==="content_drip"&&/*#__PURE__*/(0,s/* .jsx */.tZ)(rm,{}),y==="enrollment"&&/*#__PURE__*/(0,s/* .jsx */.tZ)(rx,{}),y==="buddyPress"&&/*#__PURE__*/(0,s/* .jsxs */.BX)("div",{css:rS.settingsOptions,children:[/*#__PURE__*/(0,s/* .jsx */.tZ)(f/* .Controller */.Qr,{name:"enable_tutor_bp",control:r.control,render:e=>/*#__PURE__*/(0,s/* .jsx */.tZ)(T/* ["default"] */.Z,(0,a._)((0,o._)({},e),{label:(0,u.__)("Enable BuddyPress group activity feeds","tutor")}))}),/*#__PURE__*/(0,s/* .jsx */.tZ)(f/* .Controller */.Qr,{name:"bp_attached_group_ids",control:r.control,render:e=>/*#__PURE__*/(0,s/* .jsx */.tZ)(rp,(0,a._)((0,o._)({},e),{label:(0,u.__)("BuddyPress Groups","tutor"),helpText:(0,u.__)("Assign this course to BuddyPress Groups","tutor"),placeholder:(0,u.__)("Search BuddyPress Groups","tutor"),options:(L/* .tutorConfig.bp_groups */.y.bp_groups||[]).map(e=>({label:e.name,value:String(e.id)})),loading:!!n&&!e.field.value}))})]})]})]})]})};/* ESM default export */const rE=rD;var rS={courseSettings:/*#__PURE__*/(0,l/* .css */.iv)("display:grid;grid-template-columns:200px 1fr;margin-top:",P/* .spacing["12"] */.W0["12"],";border:1px solid ",P/* .colorTokens.stroke["default"] */.Jv.stroke["default"],";border-radius:",P/* .borderRadius["6"] */.E0["6"],";background-color:",P/* .colorTokens.background["default"] */.Jv.background["default"],";overflow:hidden;",P/* .Breakpoint.smallMobile */.Uo.smallMobile,"{grid-template-columns:1fr;}"),settingsOptions:/*#__PURE__*/(0,l/* .css */.iv)("min-height:400px;display:flex;flex-direction:column;gap:",P/* .spacing["12"] */.W0["12"],";padding:",P/* .spacing["16"] */.W0["16"]," ",P/* .spacing["32"] */.W0["32"]," ",P/* .spacing["48"] */.W0["48"]," ",P/* .spacing["32"] */.W0["32"],";background-color:",P/* .colorTokens.background.white */.Jv.background.white,";",P/* .Breakpoint.smallMobile */.Uo.smallMobile,"{padding:",P/* .spacing["16"] */.W0["16"],";}"),courseAndQna:/*#__PURE__*/(0,l/* .css */.iv)("display:flex;flex-direction:column;gap:",P/* .spacing["32"] */.W0["32"],";margin-top:",P/* .spacing["12"] */.W0["12"],";")};// EXTERNAL MODULE: ./assets/react/v3/entries/course-builder/components/layouts/Navigator.tsx
var rW=r(88311);// CONCATENATED MODULE: ./assets/react/v3/shared/components/fields/FormEditableAlias.tsx
var rM=e=>{var{field:t,fieldState:r,label:n="",baseURL:i,onChange:l}=e;var{value:c=""}=t;var d="".concat(i,"/").concat(c);var[f,p]=(0,v.useState)(false);var[g,m]=(0,v.useState)(d);var b="".concat(i,"/");var[_,y]=(0,v.useState)(c);(0,v.useEffect)(()=>{if(i){m("".concat(i,"/").concat(c))}if(c){y(c)}},[i,c]);return/*#__PURE__*/(0,s/* .jsx */.tZ)(ef/* ["default"] */.Z,{field:t,fieldState:r,children:e=>{return/*#__PURE__*/(0,s/* .jsxs */.BX)("div",{css:rT.aliasWrapper,children:[n&&/*#__PURE__*/(0,s/* .jsxs */.BX)("label",{css:rT.label,children:[n,": "]}),/*#__PURE__*/(0,s/* .jsx */.tZ)("div",{css:rT.linkWrapper,children:!f?/*#__PURE__*/(0,s/* .jsxs */.BX)(s/* .Fragment */.HY,{children:[/*#__PURE__*/(0,s/* .jsx */.tZ)("a",{"data-cy":"course-slug",href:g,target:"_blank",css:rT.link,title:g,rel:"noreferrer",children:g}),/*#__PURE__*/(0,s/* .jsx */.tZ)("button",{css:rT.iconWrapper,type:"button",onClick:()=>p(e=>!e),children:/*#__PURE__*/(0,s/* .jsx */.tZ)(h/* ["default"] */.Z,{name:"edit",width:24,height:24,style:rT.editIcon})})]}):/*#__PURE__*/(0,s/* .jsxs */.BX)(s/* .Fragment */.HY,{children:[/*#__PURE__*/(0,s/* .jsx */.tZ)("span",{css:rT.prefix,title:b,children:b}),/*#__PURE__*/(0,s/* .jsxs */.BX)("div",{css:rT.editWrapper,children:[/*#__PURE__*/(0,s/* .jsx */.tZ)("input",(0,a._)((0,o._)({},e),{className:"tutor-input-field",css:rT.editable,type:"text",value:_,onChange:e=>y(e.target.value),autoComplete:"off"})),/*#__PURE__*/(0,s/* .jsx */.tZ)(S/* ["default"] */.Z,{variant:"secondary",isOutlined:true,size:"small",buttonCss:rT.saveBtn,onClick:()=>{p(false);t.onChange((0,X/* .convertToSlug */.k6)(_.replace(i,"")));l===null||l===void 0?void 0:l((0,X/* .convertToSlug */.k6)(_.replace(i,"")))},children:(0,u.__)("Save","tutor")}),/*#__PURE__*/(0,s/* .jsx */.tZ)(S/* ["default"] */.Z,{buttonContentCss:rT.cancelButton,variant:"text",size:"small",onClick:()=>{p(false);y(c)},children:(0,u.__)("Cancel","tutor")})]})]})})]})}})};var rT={aliasWrapper:/*#__PURE__*/(0,l/* .css */.iv)("display:flex;min-height:32px;align-items:center;gap:",P/* .spacing["4"] */.W0["4"],";",P/* .Breakpoint.smallMobile */.Uo.smallMobile,"{flex-direction:column;gap:",P/* .spacing["4"] */.W0["4"],";align-items:flex-start;}"),label:/*#__PURE__*/(0,l/* .css */.iv)("flex-shrink:0;",R/* .typography.caption */.c.caption(),";color:",P/* .colorTokens.text.subdued */.Jv.text.subdued,";margin:0px;"),linkWrapper:/*#__PURE__*/(0,l/* .css */.iv)("display:flex;align-items:center;width:fit-content;font-size:",P/* .fontSize["14"] */.JB["14"],";",P/* .Breakpoint.smallMobile */.Uo.smallMobile,"{gap:",P/* .spacing["4"] */.W0["4"],";flex-wrap:wrap;}"),link:/*#__PURE__*/(0,l/* .css */.iv)(R/* .typography.caption */.c.caption(),";color:",P/* .colorTokens.text.subdued */.Jv.text.subdued,";text-decoration:none;",j/* .styleUtils.text.ellipsis */.i.text.ellipsis(1),"    max-width:fit-content;word-break:break-all;"),iconWrapper:/*#__PURE__*/(0,l/* .css */.iv)(j/* .styleUtils.resetButton */.i.resetButton,"    margin-left:",P/* .spacing["8"] */.W0["8"],";height:24px;width:24px;background-color:",P/* .colorTokens.background.white */.Jv.background.white,";border-radius:",P/* .borderRadius["4"] */.E0["4"],";:focus{",j/* .styleUtils.inputFocus */.i.inputFocus,"}"),editIcon:/*#__PURE__*/(0,l/* .css */.iv)("color:",P/* .colorTokens.icon["default"] */.Jv.icon["default"],";:hover{color:",P/* .colorTokens.icon.brand */.Jv.icon.brand,";}"),prefix:/*#__PURE__*/(0,l/* .css */.iv)(R/* .typography.caption */.c.caption(),"    color:",P/* .colorTokens.text.subdued */.Jv.text.subdued,";",j/* .styleUtils.text.ellipsis */.i.text.ellipsis(1),"    word-break:break-all;max-width:fit-content;"),editWrapper:/*#__PURE__*/(0,l/* .css */.iv)("margin-left:",P/* .spacing["2"] */.W0["2"],";display:flex;align-items:center;width:fit-content;"),editable:/*#__PURE__*/(0,l/* .css */.iv)("&.tutor-input-field{",R/* .typography.caption */.c.caption(),"      background:",P/* .colorTokens.background.white */.Jv.background.white,";width:208px;height:32px;border:1px solid ",P/* .colorTokens.stroke["default"] */.Jv.stroke["default"],";padding:",P/* .spacing["8"] */.W0["8"]," ",P/* .spacing["12"] */.W0["12"],";border-radius:",P/* .borderRadius.input */.E0.input,";margin-right:",P/* .spacing["8"] */.W0["8"],";outline:none;&:focus{border-color:",P/* .colorTokens.stroke["default"] */.Jv.stroke["default"],";box-shadow:none;outline:2px solid ",P/* .colorTokens.stroke.brand */.Jv.stroke.brand,";outline-offset:1px;}}"),saveBtn:/*#__PURE__*/(0,l/* .css */.iv)("flex-shrink:0;margin-right:",P/* .spacing["8"] */.W0["8"],";"),cancelButton:/*#__PURE__*/(0,l/* .css */.iv)("color:",P/* .colorTokens.text.brand */.Jv.text.brand,";")};/* ESM default export */const rB=rM;// EXTERNAL MODULE: ./assets/react/v3/shared/components/fields/FormWPEditor.tsx
var rI=r(3960);// EXTERNAL MODULE: ./assets/react/v3/entries/course-builder/components/CourseBuilderSlot.tsx + 3 modules
var rN=r(19646);// EXTERNAL MODULE: ./assets/react/v3/entries/course-builder/contexts/CourseBuilderSlotContext.tsx
var rO=r(75537);// EXTERNAL MODULE: ./assets/react/v3/shared/services/course.ts
var rA=r(19918);// CONCATENATED MODULE: ./assets/react/v3/entries/course-builder/pages/CourseBasic.tsx
function rL(){var e=(0,i._)(["\n      z-index: ",";\n    "]);rL=function t(){return e};return e}var rJ=(0,A/* .getCourseId */.z)();var rP=false;var rR=()=>{var e;var{fields:t}=(0,rO/* .useCourseBuilderSlot */.l)();var r=(0,f/* .useFormContext */.Gc)();var i=(0,c/* .useQueryClient */.NL)();var l=(0,d/* .useIsFetching */.y)({queryKey:["CourseDetails",rJ]});var p=(0,rr/* .useUpdateCourseMutation */.mG)();var h=(0,rA/* .useUnlinkPageBuilderMutation */.Fv)();var[g,m]=(0,v.useState)(false);var b=i.getQueryData(["CourseDetails",rJ]);var _=!!L/* .tutorConfig.tutor_pro_url */.y.tutor_pro_url;var y=((e=L/* .tutorConfig.settings */.y.settings)===null||e===void 0?void 0:e.chatgpt_enable)==="on";var w=r.watch("post_status");var x=r.watch("editor_used");return/*#__PURE__*/(0,s/* .jsxs */.BX)("div",{css:rz.wrapper,children:[/*#__PURE__*/(0,s/* .jsxs */.BX)("div",{css:rz.mainForm({isWpEditorFullScreen:g}),children:[/*#__PURE__*/(0,s/* .jsxs */.BX)("div",{css:rz.fieldsWrapper,children:[/*#__PURE__*/(0,s/* .jsxs */.BX)("div",{css:rz.titleAndSlug,children:[/*#__PURE__*/(0,s/* .jsx */.tZ)(f/* .Controller */.Qr,{name:"post_title",control:r.control,rules:(0,o._)({},(0,F/* .requiredRule */.n0)(),(0,F/* .maxLimitRule */.T9)(255)),render:e=>/*#__PURE__*/(0,s/* .jsx */.tZ)(ep/* ["default"] */.Z,(0,a._)((0,o._)({},e),{label:(0,u.__)("Title","tutor"),placeholder:(0,u.__)("ex. Learn Photoshop CS6 from scratch","tutor"),isClearable:true,generateWithAi:!_||y,loading:!!l&&!e.field.value,onChange:e=>{if(w==="draft"&&!rP){r.setValue("post_name",(0,X/* .convertToSlug */.k6)(String(e)),{shouldValidate:true,shouldDirty:true})}}}))}),/*#__PURE__*/(0,s/* .jsx */.tZ)(f/* .Controller */.Qr,{name:"post_name",control:r.control,render:e=>{var t;return/*#__PURE__*/(0,s/* .jsx */.tZ)(rB,(0,a._)((0,o._)({},e),{label:(0,u.__)("Course URL","tutor"),baseURL:"".concat(L/* .tutorConfig.home_url */.y.home_url,"/").concat((t=L/* .tutorConfig.settings */.y.settings)===null||t===void 0?void 0:t.course_permalink_base),onChange:()=>{rP=true}}))}})]}),/*#__PURE__*/(0,s/* .jsx */.tZ)(f/* .Controller */.Qr,{name:"post_content",control:r.control,render:e=>/*#__PURE__*/(0,s/* .jsx */.tZ)(rI/* ["default"] */.Z,(0,a._)((0,o._)({},e),{label:(0,u.__)("Description","tutor"),loading:!!l&&!e.field.value,max_height:280,generateWithAi:!_||y,hasCustomEditorSupport:true,editorUsed:x,editors:b===null||b===void 0?void 0:b.editors,onCustomEditorButtonClick:()=>{return r.handleSubmit(e=>{var n=(0,rr/* .convertCourseDataToPayload */.iC)(e,(0,X/* .findSlotFields */.hk)({fields:t.Basic},{fields:t.Additional}));return p.mutateAsync((0,a._)((0,o._)({course_id:rJ},n),{post_status:(0,X/* .determinePostStatus */.Xl)(r.getValues("post_status"),r.getValues("visibility"))}))})()},onBackToWPEditorClick:e=>(0,n._)(function*(){return h.mutateAsync({courseId:rJ,builder:e}).then(e=>{r.setValue("editor_used",{name:"classic",label:(0,u.__)("Classic Editor","tutor"),link:""});return e})})(),onFullScreenChange:e=>{m(e)}}))}),/*#__PURE__*/(0,s/* .jsx */.tZ)(rN/* ["default"] */.Z,{section:"Basic.after_description",form:r}),/*#__PURE__*/(0,s/* .jsx */.tZ)(rE,{}),/*#__PURE__*/(0,s/* .jsx */.tZ)(rN/* ["default"] */.Z,{section:"Basic.after_settings",form:r})]}),/*#__PURE__*/(0,s/* .jsx */.tZ)(U/* ["default"] */.Z,{when:J/* .CURRENT_VIEWPORT.isAboveTablet */.iM.isAboveTablet,children:/*#__PURE__*/(0,s/* .jsx */.tZ)(rW/* ["default"] */.Z,{styleModifier:rz.navigator})})]}),/*#__PURE__*/(0,s/* .jsx */.tZ)(rc,{}),/*#__PURE__*/(0,s/* .jsx */.tZ)(U/* ["default"] */.Z,{when:!J/* .CURRENT_VIEWPORT.isAboveTablet */.iM.isAboveTablet,children:/*#__PURE__*/(0,s/* .jsx */.tZ)(rW/* ["default"] */.Z,{styleModifier:rz.navigator})})]})};/* ESM default export */const rU=rR;var rz={wrapper:/*#__PURE__*/(0,l/* .css */.iv)("display:grid;grid-template-columns:1fr 338px;gap:",P/* .spacing["32"] */.W0["32"],";width:100%;",P/* .Breakpoint.smallTablet */.Uo.smallTablet,"{grid-template-columns:1fr;gap:0;}"),mainForm:e=>{var{isWpEditorFullScreen:t}=e;return/*#__PURE__*/(0,l/* .css */.iv)("padding-block:",P/* .spacing["32"] */.W0["32"]," ",P/* .spacing["24"] */.W0["24"],";align-self:start;top:",P/* .headerHeight */.J9,"px;position:sticky;",t&&(0,l/* .css */.iv)(rL(),P/* .zIndex.header */.W5.header+1)," ",P/* .Breakpoint.smallTablet */.Uo.smallTablet,"{padding-top:",P/* .spacing["16"] */.W0["16"],";position:unset;}")},fieldsWrapper:/*#__PURE__*/(0,l/* .css */.iv)("display:flex;flex-direction:column;gap:",P/* .spacing["24"] */.W0["24"],";"),titleAndSlug:/*#__PURE__*/(0,l/* .css */.iv)("display:flex;flex-direction:column;gap:",P/* .spacing["8"] */.W0["8"],";"),sidebar:/*#__PURE__*/(0,l/* .css */.iv)("border-left:1px solid ",P/* .colorTokens.stroke.divider */.Jv.stroke.divider,";min-height:calc(100vh - ",P/* .headerHeight */.J9,"px);padding-left:",P/* .spacing["32"] */.W0["32"],";padding-block:",P/* .spacing["24"] */.W0["24"],";display:flex;flex-direction:column;gap:",P/* .spacing["16"] */.W0["16"],";"),priceRadioGroup:/*#__PURE__*/(0,l/* .css */.iv)("display:flex;align-items:center;gap:",P/* .spacing["36"] */.W0["36"],";"),coursePriceWrapper:/*#__PURE__*/(0,l/* .css */.iv)("display:flex;align-items:flex-start;gap:",P/* .spacing["16"] */.W0["16"],";"),navigator:/*#__PURE__*/(0,l/* .css */.iv)("margin-top:",P/* .spacing["40"] */.W0["40"],";",P/* .Breakpoint.smallTablet */.Uo.smallTablet,"{margin-top:0;}"),statusAndDate:/*#__PURE__*/(0,l/* .css */.iv)(j/* .styleUtils.display.flex */.i.display.flex("column"),";gap:",P/* .spacing["4"] */.W0["4"],";"),updatedOn:/*#__PURE__*/(0,l/* .css */.iv)(R/* .typography.caption */.c.caption(),";color:",P/* .colorTokens.text.hints */.Jv.text.hints,";")}},69602:function(e,t,r){r.d(t,{Z:()=>w});/* ESM import */var n=r(7409);/* ESM import */var o=r(99282);/* ESM import */var a=r(58865);/* ESM import */var i=r(35944);/* ESM import */var s=r(60860);/* ESM import */var l=r(76487);/* ESM import */var c=r(34403);/* ESM import */var d=r(70917);/* ESM import */var u=r(87363);/* ESM import */var v=/*#__PURE__*/r.n(u);function f(){var e=(0,a._)(["\n      cursor: not-allowed;\n    "]);f=function t(){return e};return e}function p(){var e=(0,a._)(["\n      color: ",";\n    "]);p=function t(){return e};return e}function h(){var e=(0,a._)(["\n        margin-right: ",";\n      "]);h=function t(){return e};return e}function g(){var e=(0,a._)(["\n        background-color: ",";\n      "]);g=function t(){return e};return e}function m(){var e=(0,a._)(["\n      & + span::before {\n        background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='2' fill='none'%3E%3Crect width='10' height='1.5' y='.25' fill='%23fff' rx='.75'/%3E%3C/svg%3E\");\n        background-repeat: no-repeat;\n        background-size: 10px;\n        background-position: center center;\n        background-color: ",";\n        border: 0.5px solid ",";\n      }\n    "]);m=function t(){return e};return e}function b(){var e=(0,a._)(["\n      & + span {\n        cursor: not-allowed;\n\n        &::before {\n          border-color: ",";\n        }\n      }\n    "]);b=function t(){return e};return e}var _=/*#__PURE__*/v().forwardRef((e,t)=>{var{id:r=(0,c/* .nanoid */.x0)(),name:a,labelCss:s,inputCss:l,label:d="",checked:u,value:f,disabled:p=false,onChange:h,onBlur:g,isIndeterminate:m=false}=e;var b=e=>{h===null||h===void 0?void 0:h(!m?e.target.checked:true,e)};var _=e=>{if(typeof e==="string"){return e}if(typeof e==="number"||typeof e==="boolean"||e===null){return String(e)}if(e===undefined){return""}if(/*#__PURE__*/v().isValidElement(e)){var t;var r=(t=e.props)===null||t===void 0?void 0:t.children;if(typeof r==="string"){return r}if(Array.isArray(r)){return r.map(e=>typeof e==="string"?e:"").filter(Boolean).join(" ")}}return""};return/*#__PURE__*/(0,i/* .jsxs */.BX)("label",{htmlFor:r,css:[y.container({disabled:p}),s],children:[/*#__PURE__*/(0,i/* .jsx */.tZ)("input",(0,o._)((0,n._)({},e),{ref:t,id:r,name:a,type:"checkbox",value:f,checked:!!u,disabled:p,"aria-invalid":e["aria-invalid"],onChange:b,onBlur:g,css:[l,y.checkbox({label:!!d,isIndeterminate:m,disabled:p})]})),/*#__PURE__*/(0,i/* .jsx */.tZ)("span",{}),/*#__PURE__*/(0,i/* .jsx */.tZ)("span",{css:[y.label({isDisabled:p}),s],title:_(d),children:d})]})});var y={container:e=>{var{disabled:t=false}=e;return/*#__PURE__*/(0,d/* .css */.iv)("position:relative;display:flex;align-items:center;cursor:pointer;user-select:none;color:",s/* .colorTokens.text.title */.Jv.text.title,";",t&&(0,d/* .css */.iv)(f()))},label:e=>{var{isDisabled:t=false}=e;return/*#__PURE__*/(0,d/* .css */.iv)(l/* .typography.caption */.c.caption(),";color:",s/* .colorTokens.text.title */.Jv.text.title,";",t&&(0,d/* .css */.iv)(p(),s/* .colorTokens.text.disable */.Jv.text.disable))},checkbox:e=>{var{label:t,isIndeterminate:r,disabled:n}=e;return/*#__PURE__*/(0,d/* .css */.iv)("position:absolute;opacity:0 !important;height:0;width:0;& + span{position:relative;cursor:pointer;display:inline-flex;align-items:center;",t&&(0,d/* .css */.iv)(h(),s/* .spacing["10"] */.W0["10"]),"}& + span::before{content:'';background-color:",s/* .colorTokens.background.white */.Jv.background.white,";border:1px solid ",s/* .colorTokens.stroke["default"] */.Jv.stroke["default"],";border-radius:3px;width:20px;height:20px;}&:checked + span::before{background-image:url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iOSIgdmlld0JveD0iMCAwIDEyIDkiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0wLjE2NTM0NCA0Ljg5OTQ2QzAuMTEzMjM1IDQuODQ0OTcgMC4wNzE3MzQ2IDQuNzgxMTUgMC4wNDI5ODg3IDQuNzExM0MtMC4wMTQzMjk2IDQuNTU1NjQgLTAuMDE0MzI5NiA0LjM4NDQ5IDAuMDQyOTg4NyA0LjIyODg0QzAuMDcxMTU0OSA0LjE1ODY4IDAuMTEyNzIzIDQuMDk0NzUgMC4xNjUzNDQgNC4wNDA2OEwxLjAzMzgyIDMuMjAzNkMxLjA4NDkzIDMuMTQzNCAxLjE0ODkgMy4wOTU1NyAxLjIyMDk2IDMuMDYzNjlDMS4yOTAzMiAzLjAzMjEzIDEuMzY1NTQgMy4wMTU2OSAxLjQ0MTY3IDMuMDE1NDRDMS41MjQxOCAzLjAxMzgzIDEuNjA2MDUgMy4wMzAyOSAxLjY4MTU5IDMuMDYzNjlDMS43NTYyNiAzLjA5NzA3IDEuODIzODYgMy4xNDQ1NyAxLjg4MDcxIDMuMjAzNkw0LjUwMDU1IDUuODQyNjhMMTAuMTI0MSAwLjE4ODIwNUMxMC4xNzk0IDAuMTI5NTQ0IDEwLjI0NTQgMC4wODIwNTQyIDEwLjMxODQgMC4wNDgyOTA4QzEwLjM5NDEgMC4wMTU0NjYxIDEwLjQ3NTkgLTAuMDAwOTcyMDU3IDEwLjU1ODMgNC40NDIyOGUtMDVDMTAuNjM1NyAwLjAwMDQ3NTMxOCAxMC43MTIxIDAuMDE3NDc5NSAxMC43ODI0IDAuMDQ5OTI0MkMxMC44NTI3IDAuMDgyMzY4OSAxMC45MTU0IDAuMTI5NTA5IDEwLjk2NjIgMC4xODgyMDVMMTEuODM0NyAxLjAzNzM0QzExLjg4NzMgMS4wOTE0MiAxMS45Mjg4IDEuMTU1MzQgMTEuOTU3IDEuMjI1NUMxMi4wMTQzIDEuMzgxMTYgMTIuMDE0MyAxLjU1MjMxIDExLjk1NyAxLjcwNzk2QzExLjkyODMgMS43Nzc4MSAxMS44ODY4IDEuODQxNjMgMTEuODM0NyAxLjg5NjEzTDQuOTIyOCA4LjgwOTgyQzQuODcxMjkgOC44NzAyMSA0LjgwNzQ3IDguOTE4NzUgNC43MzU2NiA4Ljk1MjE1QzQuNTgyMDIgOS4wMTU5NSA0LjQwOTQ5IDkuMDE1OTUgNC4yNTU4NCA4Ljk1MjE1QzQuMTg0MDQgOC45MTg3NSA0LjEyMDIyIDguODcwMjEgNC4wNjg3MSA4LjgwOTgyTDAuMTY1MzQ0IDQuODk5NDZaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K');background-repeat:no-repeat;background-size:10px 10px;background-position:center center;border-color:transparent;background-color:",s/* .colorTokens.icon.brand */.Jv.icon.brand,";border-radius:",s/* .borderRadius["4"] */.E0["4"],";",n&&(0,d/* .css */.iv)(g(),s/* .colorTokens.icon.disable["default"] */.Jv.icon.disable["default"]),"}",r&&(0,d/* .css */.iv)(m(),s/* .colorTokens.brand.blue */.Jv.brand.blue,s/* .colorTokens.stroke.white */.Jv.stroke.white)," ",n&&(0,d/* .css */.iv)(b(),s/* .colorTokens.stroke.disable */.Jv.stroke.disable),"    &:focus-visible{& + span{border-radius:",s/* .borderRadius["2"] */.E0["2"],";outline:2px solid ",s/* .colorTokens.stroke.brand */.Jv.stroke.brand,";outline-offset:1px;}}")}};/* ESM default export */const w=_},30647:function(e,t,r){r.d(t,{Z:()=>y});/* ESM import */var n=r(58865);/* ESM import */var o=r(35944);/* ESM import */var a=r(70917);/* ESM import */var i=r(38003);/* ESM import */var s=/*#__PURE__*/r.n(i);/* ESM import */var l=r(86138);/* ESM import */var c=/*#__PURE__*/r.n(l);/* ESM import */var d=r(19398);/* ESM import */var u=r(26815);/* ESM import */var v=r(60860);/* ESM import */var f=r(76487);/* ESM import */var p=r(17106);/* ESM import */var h=r(2613);function g(){var e=(0,n._)(["\n      width: 168px;\n    "]);g=function t(){return e};return e}function m(){var e=(0,n._)(["\n      width: 168px;\n    "]);m=function t(){return e};return e}var b={large:"regular",regular:"small",small:"small"};var _=e=>{var{buttonText:t=(0,i.__)("Upload Media","tutor"),infoText:r,size:n="regular",value:s,uploadHandler:l,clearHandler:c,emptyImageCss:f,previewImageCss:g,overlayCss:m,replaceButtonText:_,loading:y,disabled:x=false,isClearAble:Z=true}=e;return/*#__PURE__*/(0,o/* .jsx */.tZ)(p/* ["default"] */.Z,{when:!y,fallback:/*#__PURE__*/(0,o/* .jsx */.tZ)("div",{css:w.emptyMedia({size:n,isDisabled:x}),children:/*#__PURE__*/(0,o/* .jsx */.tZ)(h/* .LoadingOverlay */.fz,{})}),children:/*#__PURE__*/(0,o/* .jsx */.tZ)(p/* ["default"] */.Z,{when:s===null||s===void 0?void 0:s.url,fallback:/*#__PURE__*/(0,o/* .jsxs */.BX)("div",{"aria-disabled":x,css:[w.emptyMedia({size:n,isDisabled:x}),f],onClick:e=>{e.stopPropagation();if(x){return}l()},onKeyDown:e=>{if(!x&&e.key==="Enter"){e.preventDefault();l()}},children:[/*#__PURE__*/(0,o/* .jsx */.tZ)(u/* ["default"] */.Z,{name:"addImage",width:32,height:32}),/*#__PURE__*/(0,o/* .jsx */.tZ)(d/* ["default"] */.Z,{disabled:x,size:b[n],variant:"secondary",buttonContentCss:w.buttonText,"data-cy":"upload-media",children:t}),/*#__PURE__*/(0,o/* .jsx */.tZ)(p/* ["default"] */.Z,{when:r,children:/*#__PURE__*/(0,o/* .jsx */.tZ)("p",{css:w.infoTexts,children:r})})]}),children:e=>{return/*#__PURE__*/(0,o/* .jsxs */.BX)("div",{css:[w.previewWrapper({size:n,isDisabled:x}),g],"data-cy":"media-preview",children:[/*#__PURE__*/(0,o/* .jsx */.tZ)("img",{src:e,alt:s===null||s===void 0?void 0:s.title,css:w.imagePreview}),/*#__PURE__*/(0,o/* .jsxs */.BX)("div",{css:[w.hoverPreview,m],"data-hover-buttons-wrapper":true,children:[/*#__PURE__*/(0,o/* .jsx */.tZ)(d/* ["default"] */.Z,{disabled:x,variant:"secondary",size:b[n],buttonCss:/*#__PURE__*/(0,a/* .css */.iv)("margin-top:",Z&&v/* .spacing["16"] */.W0["16"],";"),onClick:e=>{e.stopPropagation();l()},"data-cy":"replace-media",children:_||(0,i.__)("Replace Image","tutor")}),/*#__PURE__*/(0,o/* .jsx */.tZ)(p/* ["default"] */.Z,{when:Z,children:/*#__PURE__*/(0,o/* .jsx */.tZ)(d/* ["default"] */.Z,{disabled:x,variant:"text",size:b[n],onClick:e=>{e.stopPropagation();c()},"data-cy":"clear-media",children:(0,i.__)("Remove","tutor")})})]})]})}})})};/* ESM default export */const y=_;var w={emptyMedia:e=>{var{size:t,isDisabled:r}=e;return/*#__PURE__*/(0,a/* .css */.iv)("width:100%;height:168px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:",v/* .spacing["8"] */.W0["8"],";border:1px dashed ",v/* .colorTokens.stroke.border */.Jv.stroke.border,";border-radius:",v/* .borderRadius["8"] */.E0["8"],";background-color:",v/* .colorTokens.bg.white */.Jv.bg.white,";overflow:hidden;cursor:",r?"not-allowed":"pointer",";",t==="small"&&(0,a/* .css */.iv)(g()),"    svg{color:",v/* .colorTokens.icon["default"] */.Jv.icon["default"],";}&:hover svg{color:",!r&&v/* .colorTokens.brand.blue */.Jv.brand.blue,";}")},buttonText:/*#__PURE__*/(0,a/* .css */.iv)("color:",v/* .colorTokens.text.brand */.Jv.text.brand,";"),infoTexts:/*#__PURE__*/(0,a/* .css */.iv)(f/* .typography.tiny */.c.tiny(),";color:",v/* .colorTokens.text.subdued */.Jv.text.subdued,";text-align:center;"),previewWrapper:e=>{var{size:t,isDisabled:r}=e;return/*#__PURE__*/(0,a/* .css */.iv)("width:100%;height:168px;border:1px solid ",v/* .colorTokens.stroke["default"] */.Jv.stroke["default"],";border-radius:",v/* .borderRadius["8"] */.E0["8"],";overflow:hidden;position:relative;background-color:",v/* .colorTokens.bg.white */.Jv.bg.white,";",t==="small"&&(0,a/* .css */.iv)(m()),"    &:hover{[data-hover-buttons-wrapper]{display:",r?"none":"flex",";opacity:",r?0:1,";}}")},imagePreview:/*#__PURE__*/(0,a/* .css */.iv)("height:100%;width:100%;object-fit:contain;"),hoverPreview:/*#__PURE__*/(0,a/* .css */.iv)("display:flex;flex-direction:column;justify-content:center;align-items:center;gap:",v/* .spacing["8"] */.W0["8"],";opacity:0;position:absolute;inset:0;background-color:",c()(v/* .colorTokens.color.black.main */.Jv.color.black.main,.6),";button:first-of-type{box-shadow:",v/* .shadow.button */.AF.button,";}button:last-of-type:not(:only-of-type){color:",v/* .colorTokens.text.white */.Jv.text.white,";box-shadow:none;}")}},86766:function(e,t,r){r.d(t,{Z:()=>p});/* ESM import */var n=r(58865);/* ESM import */var o=r(35944);/* ESM import */var a=r(70917);/* ESM import */var i=r(60860);/* ESM import */var s=r(17106);/* ESM import */var l=r(22456);/* ESM import */var c=r(26815);function d(){var e=(0,n._)(["\n      height: ",";\n      display: inline-flex;\n      border-radius: ",";\n      align-items: center;\n      gap: ",";\n      overflow: hidden;\n      background: linear-gradient(88.9deg, #d65702 6.26%, #e5803c 91.4%);\n    "]);d=function t(){return e};return e}function u(){var e=(0,n._)(["\n        padding: 0;\n        padding-inline: ",";\n        margin: 0;\n      "]);u=function t(){return e};return e}function v(){var e=(0,n._)(["\n      display: inline-flex;\n      position: static;\n      transform: none;\n      padding: ",";\n      color: ",";\n      margin-right: ",";\n      font-size: ",";\n      line-height: ",";\n\n      ","\n    "]);v=function t(){return e};return e}var f=e=>{var{children:t,content:r,size:n="regular",textOnly:a}=e;return/*#__PURE__*/(0,o/* .jsxs */.BX)("div",{css:g.wrapper({hasChildren:(0,l/* .isDefined */.$K)(t),size:n}),children:[t,/*#__PURE__*/(0,o/* .jsx */.tZ)(s/* ["default"] */.Z,{when:!(0,l/* .isDefined */.$K)(t)&&!a,children:/*#__PURE__*/(0,o/* .jsx */.tZ)(c/* ["default"] */.Z,{name:n==="tiny"?"crownRoundedSmall":"crownRounded",width:h[n].iconSize,height:h[n].iconSize})}),/*#__PURE__*/(0,o/* .jsx */.tZ)("div",{css:g.content({hasChildren:(0,l/* .isDefined */.$K)(t),size:n,textOnly:a}),children:(0,l/* .isDefined */.$K)(t)?/*#__PURE__*/(0,o/* .jsx */.tZ)(c/* ["default"] */.Z,{name:n==="tiny"?"crownRoundedSmall":"crownRounded",width:n==="tiny"?h[n].iconSize:16}):r})]})};/* ESM default export */const p=f;var h={tiny:{borderRadius:i/* .spacing["10"] */.W0["10"],height:i/* .spacing["10"] */.W0["10"],gap:i/* .spacing["2"] */.W0["2"],iconSize:10,fontSize:"0.5rem",lineHeight:"0.625rem"},small:{borderRadius:i/* .spacing["16"] */.W0["16"],height:i/* .spacing["16"] */.W0["16"],gap:i/* .spacing["4"] */.W0["4"],iconSize:16,fontSize:i/* .fontSize["10"] */.JB["10"],lineHeight:i/* .lineHeight["16"] */.Nv["16"]},regular:{borderRadius:"22px",height:"22px",gap:"5px",iconSize:22,fontSize:i/* .fontSize["14"] */.JB["14"],lineHeight:i/* .lineHeight["18"] */.Nv["18"]},large:{borderRadius:"26px",height:"26px",gap:i/* .spacing["6"] */.W0["6"],iconSize:26,fontSize:i/* .fontSize["16"] */.JB["16"],lineHeight:i/* .lineHeight["26"] */.Nv["26"]}};var g={wrapper:e=>{var{hasChildren:t,size:r="regular"}=e;return/*#__PURE__*/(0,a/* .css */.iv)("position:relative;svg{flex-shrink:0;}",!t&&(0,a/* .css */.iv)(d(),h[r].height,h[r].borderRadius,h[r].gap))},content:e=>{var{hasChildren:t,size:r="regular",textOnly:n}=e;return/*#__PURE__*/(0,a/* .css */.iv)("position:absolute;top:0;right:0;display:flex;flex-shrink:0;transform:translateX(50%) translateY(-50%);",!t&&(0,a/* .css */.iv)(v(),i/* .spacing["2"] */.W0["2"],i/* .colorTokens.icon.white */.Jv.icon.white,h[r].gap,h[r].fontSize,h[r].lineHeight,n&&(0,a/* .css */.iv)(u(),i/* .spacing["6"] */.W0["6"])))}}},63772:function(e,t,r){r.d(t,{Z:()=>g});/* ESM import */var n=r(58865);/* ESM import */var o=r(35944);/* ESM import */var a=r(70917);/* ESM import */var i=r(87363);/* ESM import */var s=/*#__PURE__*/r.n(i);/* ESM import */var l=r(60860);/* ESM import */var c=r(76487);/* ESM import */var d=r(29535);/* ESM import */var u=r(34403);function v(){var e=(0,n._)(["\n      color: ",";\n    "]);v=function t(){return e};return e}function f(){var e=(0,n._)(["\n        margin-right: ",";\n      "]);f=function t(){return e};return e}var p=/*#__PURE__*/s().forwardRef((e,t)=>{var{name:r,checked:n,readOnly:a,disabled:i=false,labelCss:s,label:l,icon:c,value:d,onChange:v,onBlur:f,description:p}=e;var g=(0,u/* .nanoid */.x0)();return/*#__PURE__*/(0,o/* .jsxs */.BX)("div",{css:h.wrapper,children:[/*#__PURE__*/(0,o/* .jsxs */.BX)("label",{htmlFor:g,css:[h.container(i),s],children:[/*#__PURE__*/(0,o/* .jsx */.tZ)("input",{ref:t,id:g,name:r,type:"radio",checked:n,readOnly:a,value:d,disabled:i,onChange:v,onBlur:f,css:[h.radio(l)]}),/*#__PURE__*/(0,o/* .jsx */.tZ)("span",{}),c,l]}),p&&/*#__PURE__*/(0,o/* .jsx */.tZ)("p",{css:h.description,children:p})]})});var h={wrapper:/*#__PURE__*/(0,a/* .css */.iv)(d/* .styleUtils.display.flex */.i.display.flex("column"),";gap:",l/* .spacing["8"] */.W0["8"],";"),container:e=>/*#__PURE__*/(0,a/* .css */.iv)(c/* .typography.caption */.c.caption(),";display:flex;align-items:center;cursor:pointer;user-select:none;",e&&(0,a/* .css */.iv)(v(),l/* .colorTokens.text.disable */.Jv.text.disable)),radio:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";return/*#__PURE__*/(0,a/* .css */.iv)("position:absolute;opacity:0;height:0;width:0;cursor:pointer;& + span{position:relative;cursor:pointer;height:18px;width:18px;background-color:",l/* .colorTokens.background.white */.Jv.background.white,";border:2px solid ",l/* .colorTokens.stroke["default"] */.Jv.stroke["default"],";border-radius:100%;",e&&(0,a/* .css */.iv)(f(),l/* .spacing["10"] */.W0["10"]),"}& + span::before{content:'';position:absolute;left:3px;top:3px;background-color:",l/* .colorTokens.background.white */.Jv.background.white,";width:8px;height:8px;border-radius:100%;}&:checked + span{border-color:",l/* .colorTokens.action.primary["default"] */.Jv.action.primary["default"],";}&:checked + span::before{background-color:",l/* .colorTokens.action.primary["default"] */.Jv.action.primary["default"],";}&:focus-visible{& + span{outline:2px solid ",l/* .colorTokens.stroke.brand */.Jv.stroke.brand,";outline-offset:1px;}}")},description:/*#__PURE__*/(0,a/* .css */.iv)(c/* .typography.small */.c.small(),";color:",l/* .colorTokens.text.hints */.Jv.text.hints,";padding-left:30px;")};/* ESM default export */const g=p},98978:function(e,t,r){r.d(t,{Z:()=>c});/* ESM import */var n=r(35944);/* ESM import */var o=r(60860);/* ESM import */var a=r(78151);/* ESM import */var i=r(70917);/* ESM import */var s=r(87363);/* ESM import */var l=/*#__PURE__*/r.n(s);var c=/*#__PURE__*/l().forwardRef((e,t)=>{var{className:r,variant:o}=e;return/*#__PURE__*/(0,n/* .jsx */.tZ)("div",{className:r,ref:t,css:u({variant:o})})});c.displayName="Separator";var d={horizontal:/*#__PURE__*/(0,i/* .css */.iv)("height:1px;width:100%;"),vertical:/*#__PURE__*/(0,i/* .css */.iv)("height:100%;width:1px;"),base:/*#__PURE__*/(0,i/* .css */.iv)("flex-shrink:0;background-color:",o/* .colorTokens.stroke.divider */.Jv.stroke.divider,";")};var u=(0,a/* .createVariation */.Y)({variants:{variant:{horizontal:d.horizontal,vertical:d.vertical}},defaultVariants:{variant:"horizontal"}},d.base)},85746:function(e,t,r){r.d(t,{Z:()=>x});/* ESM import */var n=r(58865);/* ESM import */var o=r(35944);/* ESM import */var a=r(70917);/* ESM import */var i=r(38003);/* ESM import */var s=/*#__PURE__*/r.n(i);/* ESM import */var l=r(87363);/* ESM import */var c=/*#__PURE__*/r.n(l);/* ESM import */var d=r(34039);/* ESM import */var u=r(74053);/* ESM import */var v=r(60860);/* ESM import */var f=r(29535);/* ESM import */var p=r(34403);function h(){var e=(0,n._)(["\n        ","\n      "]);h=function t(){return e};return e}function g(){var e=(0,n._)(["\n        border-top-right-radius: ",";\n      "]);g=function t(){return e};return e}function m(){var e=(0,n._)(["\n          ","\n        "]);m=function t(){return e};return e}function b(){var e=(0,n._)(["\n      .mce-tinymce.mce-container {\n        border: ",";\n        border-radius: ",";\n\n        ","\n      }\n    "]);b=function t(){return e};return e}var _=!!d/* .tutorConfig.tutor_pro_url */.y.tutor_pro_url;// Without getDefaultSettings function editor does not initiate
if(!window.wp.editor.getDefaultSettings){window.wp.editor.getDefaultSettings=()=>({})}function y(e,t,r,n,o,a,s,l,c,u,v,f,p){var h=f||(n?"bold italic underline | image | ".concat(_?"codesample":""):"formatselect bold italic underline | bullist numlist | blockquote | alignleft aligncenter alignright | link unlink | wp_more ".concat(_?" codesample":""," | wp_adv"));var g=p||"strikethrough hr | forecolor pastetext removeformat | charmap | outdent indent | undo redo | wp_help | fullscreen | tutor_button | undoRedoDropdown";h=v?h:h.replaceAll(" | "," ");return{tinymce:{wpautop:true,menubar:false,autoresize_min_height:c||200,autoresize_max_height:u||500,wp_autoresize_on:true,browser_spellcheck:!l,convert_urls:false,end_container_on_empty_block:true,entities:"38,amp,60,lt,62,gt",entity_encoding:"raw",fix_list_elements:true,indent:false,relative_urls:0,remove_script_host:0,plugins:"charmap,colorpicker,hr,lists,image,media,paste,tabfocus,textcolor,fullscreen,wordpress,wpautoresize,wpeditimage,wpemoji,wpgallery,wplink,wpdialogs,wptextpattern,wpview".concat(_?",codesample":""),skin:"light",skin_url:"".concat(d/* .tutorConfig.site_url */.y.site_url,"/wp-content/plugins/tutor/assets/lib/tinymce/light"),submit_patch:true,link_context_toolbar:false,theme:"modern",toolbar:!l,toolbar1:h,toolbar2:n?false:g,content_css:"".concat(d/* .tutorConfig.site_url */.y.site_url,"/wp-includes/css/dashicons.min.css,").concat(d/* .tutorConfig.site_url */.y.site_url,"/wp-includes/js/tinymce/skins/wordpress/wp-content.css,").concat(d/* .tutorConfig.site_url */.y.site_url,"/wp-content/plugins/tutor/assets/lib/tinymce/light/content.min.css"),statusbar:!l,branding:false,// eslint-disable-next-line @typescript-eslint/no-explicit-any
setup:o=>{o.on("init",()=>{if(e&&!l){o.getBody().focus()}if(l){o.setMode("readonly");var t=o.contentDocument.querySelector(".mce-content-body");t.style.backgroundColor="transparent";setTimeout(()=>{var e=t.scrollHeight;if(e){o.iframeElement.style.height="".concat(e,"px")}},500)}});if(!n){o.addButton("tutor_button",{text:(0,i.__)("Tutor ShortCode","tutor"),icon:false,type:"menubutton",menu:[{text:(0,i.__)("Student Registration Form","tutor"),onclick:()=>{o.insertContent("[tutor_student_registration_form]")}},{text:(0,i.__)("Instructor Registration Form","tutor"),onclick:()=>{o.insertContent("[tutor_instructor_registration_form]")}},{text:(0,i.__)("Courses","tutor"),onclick:()=>{o.windowManager.open({title:(0,i.__)("Courses Shortcode","tutor"),body:[{type:"textbox",name:"id",label:(0,i.__)("Course id, separate by (,) comma","tutor"),value:""},{type:"textbox",name:"exclude_ids",label:(0,i.__)("Exclude Course IDS","tutor"),value:""},{type:"textbox",name:"category",label:(0,i.__)("Category IDS","tutor"),value:""},{type:"listbox",name:"orderby",label:(0,i.__)("Order By","tutor"),onselect:()=>{},values:[{text:"ID",value:"ID"},{text:"title",value:"title"},{text:"rand",value:"rand"},{text:"date",value:"date"},{text:"menu_order",value:"menu_order"},{text:"post__in",value:"post__in"}]},{type:"listbox",name:"order",label:(0,i.__)("Order","tutor"),onselect:()=>{},values:[{text:"DESC",value:"DESC"},{text:"ASC",value:"ASC"}]},{type:"textbox",name:"count",label:(0,i.__)("Count","tutor"),value:"6"}],// eslint-disable-next-line @typescript-eslint/no-explicit-any
onsubmit:e=>{o.insertContent('[tutor_course id="'.concat(e.data.id,'" exclude_ids="').concat(e.data.exclude_ids,'" category="').concat(e.data.category,'" orderby="').concat(e.data.orderby,'" order="').concat(e.data.order,'" count="').concat(e.data.count,'"]'))}})}}]})}o.on("change keyup paste",()=>{t(o.getContent())});o.on("focus",()=>{r(true)});o.on("blur",()=>r(false));o.on("FullscreenStateChanged",e=>{var t=document.getElementById("tutor-course-builder");var r=document.getElementById("tutor-course-bundle-builder-root");var n=t||r;if(n){if(e.state){n.style.position="relative";n.style.zIndex="100000"}else{n.removeAttribute("style")}}s===null||s===void 0?void 0:s(e.state)})},wp_keep_scroll_position:false,wpeditimage_html5_captions:true},mediaButtons:!o&&!n&&!l,drag_drop_upload:true,quicktags:a||n||l?false:{buttons:["strong","em","block","del","ins","img","ul","ol","li","code","more","close"]}}}var w=e=>{var{value:t="",onChange:r,isMinimal:n,hideMediaButtons:a,hideQuickTags:i,autoFocus:s=false,onFullScreenChange:c,readonly:d=false,min_height:v,max_height:f,toolbar1:h,toolbar2:g}=e;var m=(0,l.useRef)(null);var{current:b}=(0,l.useRef)((0,p/* .nanoid */.x0)());var[_,w]=(0,l.useState)(s);var x=e=>{var t=e.target;r(t.value)};var k=(0,l.useCallback)(e=>{var{tinymce:t}=window;if(!t||_){return}var r=window.tinymce.get(b);if(r){if(e!==r.getContent()){r.setContent(e)}}},[b,_]);(0,l.useEffect)(()=>{k(t);// eslint-disable-next-line react-hooks/exhaustive-deps
},[t]);(0,l.useEffect)(()=>{if(typeof window.wp!=="undefined"&&window.wp.editor){window.wp.editor.remove(b);window.wp.editor.initialize(b,y(_,r,w,n,a,i,c,d,v,f,u/* .CURRENT_VIEWPORT.isAboveMobile */.iM.isAboveMobile,h,g));var e=m.current;e===null||e===void 0?void 0:e.addEventListener("change",x);e===null||e===void 0?void 0:e.addEventListener("input",x);return()=>{window.wp.editor.remove(b);e===null||e===void 0?void 0:e.removeEventListener("change",x);e===null||e===void 0?void 0:e.removeEventListener("input",x)}}// eslint-disable-next-line react-hooks/exhaustive-deps
},[d]);return/*#__PURE__*/(0,o/* .jsx */.tZ)("div",{css:Z.wrapper({hideQuickTags:i,isMinimal:n,isFocused:_,isReadOnly:d}),children:/*#__PURE__*/(0,o/* .jsx */.tZ)("textarea",{"data-cy":"tutor-tinymce",ref:m,id:b,defaultValue:t})})};/* ESM default export */const x=w;var Z={wrapper:e=>{var{hideQuickTags:t,isMinimal:r,isFocused:n,isReadOnly:o}=e;return/*#__PURE__*/(0,a/* .css */.iv)("flex:1;.wp-editor-tools{z-index:auto;}.wp-editor-container{border-top-left-radius:",v/* .borderRadius["6"] */.E0["6"],";border-bottom-left-radius:",v/* .borderRadius["6"] */.E0["6"],";border-bottom-right-radius:",v/* .borderRadius["6"] */.E0["6"],";",n&&!o&&(0,a/* .css */.iv)(h(),f/* .styleUtils.inputFocus */.i.inputFocus),":focus-within{",!o&&f/* .styleUtils.inputFocus */.i.inputFocus,"}}.wp-switch-editor{height:auto;border:1px solid #dcdcde;border-radius:0px;border-top-left-radius:",v/* .borderRadius["4"] */.E0["4"],";border-top-right-radius:",v/* .borderRadius["4"] */.E0["4"],";top:2px;padding:3px 8px 4px;font-size:13px;color:#646970;&:focus,&:active,&:hover{background:#f0f0f1;color:#646970;}}.mce-btn button{&:focus,&:active,&:hover{background:none;color:#50575e;}}.mce-toolbar-grp,.quicktags-toolbar{border-top-left-radius:",v/* .borderRadius["6"] */.E0["6"],";",(t||r)&&(0,a/* .css */.iv)(g(),v/* .borderRadius["6"] */.E0["6"]),"}.mce-top-part::before{display:none;}.mce-statusbar{border-bottom-left-radius:",v/* .borderRadius["6"] */.E0["6"],";border-bottom-right-radius:",v/* .borderRadius["6"] */.E0["6"],";}.mce-tinymce{box-shadow:none;background-color:transparent;}.mce-edit-area{background-color:unset;}",(t||r)&&(0,a/* .css */.iv)(b(),!o?"1px solid ".concat(v/* .colorTokens.stroke["default"] */.Jv.stroke["default"]):"none",v/* .borderRadius["6"] */.E0["6"],n&&!o&&(0,a/* .css */.iv)(m(),f/* .styleUtils.inputFocus */.i.inputFocus)),"    textarea{visibility:visible !important;width:100%;resize:none;border:none;outline:none;padding:",v/* .spacing["10"] */.W0["10"],";}")}}},60274:function(e,t,r){r.d(t,{Z:()=>h});/* ESM import */var n=r(7409);/* ESM import */var o=r(99282);/* ESM import */var a=r(98848);/* ESM import */var i=r(35944);/* ESM import */var s=r(69602);/* ESM import */var l=r(60860);/* ESM import */var c=r(76487);/* ESM import */var d=r(70917);/* ESM import */var u=r(26815);/* ESM import */var v=r(58982);/* ESM import */var f=r(84978);var p=e=>{var{field:t,fieldState:r,disabled:l,value:c,onChange:d,label:p,description:h,helpText:m,isHidden:b,labelCss:_}=e;return/*#__PURE__*/(0,i/* .jsx */.tZ)(f/* ["default"] */.Z,{field:t,fieldState:r,isHidden:b,children:e=>{var{css:r}=e,f=(0,a._)(e,["css"]);return/*#__PURE__*/(0,i/* .jsxs */.BX)("div",{children:[/*#__PURE__*/(0,i/* .jsxs */.BX)("div",{css:g.wrapper,children:[/*#__PURE__*/(0,i/* .jsx */.tZ)(s/* ["default"] */.Z,(0,o._)((0,n._)({},t,f),{inputCss:r,labelCss:_,value:c,disabled:l,checked:t.value,label:p,onChange:()=>{t.onChange(!t.value);if(d){d(!t.value)}}})),m&&/*#__PURE__*/(0,i/* .jsx */.tZ)(v/* ["default"] */.Z,{content:m,placement:"top",allowHTML:true,children:/*#__PURE__*/(0,i/* .jsx */.tZ)(u/* ["default"] */.Z,{name:"info",width:20,height:20})})]}),h&&/*#__PURE__*/(0,i/* .jsx */.tZ)("p",{css:g.description,children:h})]})}})};/* ESM default export */const h=p;var g={wrapper:/*#__PURE__*/(0,d/* .css */.iv)("display:flex;align-items:center;gap:",l/* .spacing["6"] */.W0["6"],";& > div{display:flex;color:",l/* .colorTokens.icon["default"] */.Jv.icon["default"],";}"),description:/*#__PURE__*/(0,d/* .css */.iv)(c/* .typography.small */.c.small(),"    color:",l/* .colorTokens.text.hints */.Jv.text.hints,";padding-left:30px;margin-top:",l/* .spacing["6"] */.W0["6"],";")}},42456:function(e,t,r){r.d(t,{Z:()=>C});/* ESM import */var n=r(7409);/* ESM import */var o=r(99282);/* ESM import */var a=r(98848);/* ESM import */var i=r(35944);/* ESM import */var s=r(70917);/* ESM import */var l=r(12274);/* ESM import */var c=r(32449);/* ESM import */var d=r(87363);/* ESM import */var u=/*#__PURE__*/r.n(d);/* ESM import */var v=r(57684);/* ESM import */var f=r(19398);/* ESM import */var p=r(26815);/* ESM import */var h=r(74053);/* ESM import */var g=r(60860);/* ESM import */var m=r(98567);/* ESM import */var b=r(29535);/* ESM import */var _=r(70165);/* ESM import */var y=r(76487);/* ESM import */var w=r(84978);// Create DayPicker formatters based on WordPress locale
var x=()=>{if(typeof window==="undefined"||!window.wp||!window.wp.date){return}var{format:e}=wp.date;return{formatMonthDropdown:t=>e("F",t),formatMonthCaption:t=>e("F",t),formatCaption:t=>e("F",t),formatWeekdayName:t=>e("D",t)}};var Z=e=>{if(!e)return undefined;return(0,l["default"])(new Date(e))?new Date(e.length===10?e+"T00:00:00":e):undefined};var k=e=>{var{label:t,field:r,fieldState:s,disabled:l,disabledBefore:u,disabledAfter:g,loading:b,placeholder:_,helpText:y,isClearable:k=true,onChange:C,dateFormat:E=h/* .DateFormats.monthDayYear */.E_.monthDayYear}=e;var S=(0,d.useRef)(null);var[W,M]=(0,d.useState)(false);var T=Z(r.value);var B=typeof window!=="undefined"&&window.wp&&window.wp.date;var I=T?B?window.wp.date.format("F j, Y",T):(0,c["default"])(T,E):"";var{triggerRef:N,position:O,popoverRef:A}=(0,m/* .usePortalPopover */.l)({isOpen:W,isDropdown:true});var L=()=>{var e;M(false);(e=S.current)===null||e===void 0?void 0:e.focus()};var J=Z(u);var P=Z(g);return/*#__PURE__*/(0,i/* .jsx */.tZ)(w/* ["default"] */.Z,{label:t,field:r,fieldState:s,disabled:l,loading:b,placeholder:_,helpText:y,children:e=>{var{css:t}=e,s=(0,a._)(e,["css"]);return/*#__PURE__*/(0,i/* .jsxs */.BX)("div",{children:[/*#__PURE__*/(0,i/* .jsxs */.BX)("div",{css:D.wrapper,ref:N,children:[/*#__PURE__*/(0,i/* .jsx */.tZ)("input",(0,o._)((0,n._)({},s),{css:[t,D.input],ref:e=>{r.ref(e);// @ts-ignore
S.current=e},type:"text",value:I,onClick:e=>{e.stopPropagation();M(e=>!e)},onKeyDown:e=>{if(e.key==="Enter"){e.preventDefault();M(e=>!e)}},autoComplete:"off","data-input":true})),/*#__PURE__*/(0,i/* .jsx */.tZ)(p/* ["default"] */.Z,{name:"calendarLine",width:30,height:32,style:D.icon}),k&&r.value&&/*#__PURE__*/(0,i/* .jsx */.tZ)(f/* ["default"] */.Z,{variant:"text",buttonCss:D.clearButton,onClick:()=>{r.onChange("")},children:/*#__PURE__*/(0,i/* .jsx */.tZ)(p/* ["default"] */.Z,{name:"times",width:12,height:12})})]}),/*#__PURE__*/(0,i/* .jsx */.tZ)(m/* .Portal */.h,{isOpen:W,onClickOutside:L,onEscape:L,children:/*#__PURE__*/(0,i/* .jsx */.tZ)("div",{css:[D.pickerWrapper,{[h/* .isRTL */.dZ?"right":"left"]:O.left,top:O.top}],ref:A,children:/*#__PURE__*/(0,i/* .jsx */.tZ)(v/* .DayPicker */._,{dir:h/* .isRTL */.dZ?"rtl":"ltr",animate:true,mode:"single",formatters:x(),disabled:[!!J&&{before:J},!!P&&{after:P}],selected:T,onSelect:e=>{if(e){var t=(0,c["default"])(e,h/* .DateFormats.yearMonthDay */.E_.yearMonthDay);r.onChange(t);L();if(C){C(t)}}},showOutsideDays:true,captionLayout:"dropdown",autoFocus:true,defaultMonth:T||new Date,startMonth:J||new Date(new Date().getFullYear()-10,0),endMonth:P||new Date(new Date().getFullYear()+10,11),weekStartsOn:B?window.wp.date.getSettings().l10n.startOfWeek:0})})})]})}})};/* ESM default export */const C=k;var D={wrapper:/*#__PURE__*/(0,s/* .css */.iv)("position:relative;&:hover,&:focus-within{& > button{opacity:1;}}"),input:/*#__PURE__*/(0,s/* .css */.iv)("&[data-input]{padding-left:",g/* .spacing["40"] */.W0["40"],";}"),icon:/*#__PURE__*/(0,s/* .css */.iv)("position:absolute;top:50%;left:",g/* .spacing["8"] */.W0["8"],";transform:translateY(-50%);color:",g/* .colorTokens.icon["default"] */.Jv.icon["default"],";"),pickerWrapper:/*#__PURE__*/(0,s/* .css */.iv)(y/* .typography.body */.c.body("regular"),";position:absolute;background-color:",g/* .colorTokens.background.white */.Jv.background.white,";box-shadow:",g/* .shadow.popover */.AF.popover,";border-radius:",g/* .borderRadius["6"] */.E0["6"],";.rdp-root{--rdp-day-height:40px;--rdp-day-width:40px;--rdp-day_button-height:40px;--rdp-day_button-width:40px;--rdp-nav-height:40px;--rdp-today-color:",g/* .colorTokens.text.title */.Jv.text.title,";--rdp-caption-font-size:",g/* .fontSize["18"] */.JB["18"],";--rdp-accent-color:",g/* .colorTokens.action.primary["default"] */.Jv.action.primary["default"],";--rdp-background-color:",g/* .colorTokens.background.hover */.Jv.background.hover,";--rdp-accent-color-dark:",g/* .colorTokens.action.primary.active */.Jv.action.primary.active,";--rdp-background-color-dark:",g/* .colorTokens.action.primary.hover */.Jv.action.primary.hover,";--rdp-selected-color:",g/* .colorTokens.text.white */.Jv.text.white,";--rdp-day_button-border-radius:",g/* .borderRadius.circle */.E0.circle,";--rdp-outside-opacity:0.5;--rdp-disabled-opacity:0.25;}.rdp-months{margin:",g/* .spacing["16"] */.W0["16"],";}.rdp-month_grid{margin:0px;}.rdp-day{padding:0px;}.rdp-nav{--rdp-accent-color:",g/* .colorTokens.text.primary */.Jv.text.primary,";button{border-radius:",g/* .borderRadius.circle */.E0.circle,";&:hover,&:focus,&:active{background-color:",g/* .colorTokens.background.hover */.Jv.background.hover,";color:",g/* .colorTokens.text.primary */.Jv.text.primary,";}&:focus-visible:not(:disabled){--rdp-accent-color:",g/* .colorTokens.text.white */.Jv.text.white,";background-color:",g/* .colorTokens.background.brand */.Jv.background.brand,";}}}.rdp-dropdown_root{.rdp-caption_label{padding:",g/* .spacing["8"] */.W0["8"],";}}.rdp-today{.rdp-day_button{font-weight:",g/* .fontWeight.bold */.Ue.bold,";}}.rdp-selected{color:var(--rdp-selected-color);background-color:var(--rdp-accent-color);border-radius:",g/* .borderRadius.circle */.E0.circle,";font-weight:",g/* .fontWeight.regular */.Ue.regular,";.rdp-day_button{&:hover,&:focus,&:active{background-color:var(--rdp-accent-color);color:",g/* .colorTokens.text.primary */.Jv.text.primary,";}&:focus-visible{outline:2px solid var(--rdp-accent-color);outline-offset:2px;}&:not(.rdp-outside){color:var(--rdp-selected-color);}}}.rdp-day_button{&:hover,&:focus,&:active{background-color:var(--rdp-background-color);color:",g/* .colorTokens.text.primary */.Jv.text.primary,";}&:focus-visible:not([disabled]){color:var(--rdp-selected-color);opacity:1;background-color:var(--rdp-accent-color);}}"),clearButton:/*#__PURE__*/(0,s/* .css */.iv)("position:absolute;top:50%;right:",g/* .spacing["4"] */.W0["4"],";transform:translateY(-50%);width:32px;height:32px;",b/* .styleUtils.flexCenter */.i.flexCenter(),";opacity:0;transition:background-color 0.3s ease-in-out,opacity 0.3s ease-in-out;border-radius:",g/* .borderRadius["2"] */.E0["2"],";:hover{background-color:",g/* .colorTokens.background.hover */.Jv.background.hover,";}")}},86774:function(e,t,r){r.d(t,{Z:()=>Z});/* ESM import */var n=r(58865);/* ESM import */var o=r(35944);/* ESM import */var a=r(70917);/* ESM import */var i=r(38003);/* ESM import */var s=/*#__PURE__*/r.n(i);/* ESM import */var l=r(19398);/* ESM import */var c=r(26815);/* ESM import */var d=r(84978);/* ESM import */var u=r(60860);/* ESM import */var v=r(76487);/* ESM import */var f=r(36352);/* ESM import */var p=r(17106);/* ESM import */var h=r(52357);/* ESM import */var g=r(43372);/* ESM import */var m=r(29535);function b(){var e=(0,n._)(["\n      background-color: ",";\n      padding: "," 0 "," ",";\n      border: 1px solid ",";\n      border-radius: ",";\n      gap: ",";\n    "]);b=function t(){return e};return e}function _(){var e=(0,n._)(["\n      margin-right: ",";\n    "]);_=function t(){return e};return e}var y={iso:["iso"],dwg:["dwg"],pdf:["pdf"],doc:["doc","docx"],csv:["csv"],xls:["xls","xlsx"],ppt:["ppt","pptx"],zip:["zip"],archive:["rar","7z","tar","gz"],txt:["txt"],rtf:["rtf"],text:["log"],jpg:["jpg"],png:["png"],image:["jpeg","gif","webp","avif"],mp3:["mp3"],fla:["fla"],audio:["ogg","wav","wma"],mp4:["mp4"],avi:["avi"],ai:["ai"],videoFile:["mkv","mpeg","flv","mov","wmv"],svg:["svg"],css:["css"],javascript:["js"],xml:["xml"],html:["html"],exe:["exe"],psd:["psd"],jsonFile:["json"],dbf:["dbf"]};var w=e=>{for(var[t,r]of Object.entries(y)){if(r.includes(e)){return t}}return"file"};var x=e=>{var{field:t,fieldState:r,label:n,helpText:a,buttonText:s=(0,i.__)("Upload Media","tutor"),selectMultiple:u=false,onChange:v,maxFileSize:h,maxFiles:b}=e;var _=t.value;var{openMediaLibrary:y,resetFiles:x}=(0,g/* ["default"] */.Z)({options:{multiple:u,maxFiles:b,maxFileSize:h},onChange:e=>{t.onChange(e);if(v){v(e)}},initialFiles:_?Array.isArray(_)?_:[_]:[]});var Z=()=>{y()};var C=e=>{x();if(u){var r=(Array.isArray(_)?_:_?[_]:[]).filter(t=>t.id!==e);t.onChange(r.length>0?r:null);if(v){v(r.length>0?r:null)}}else{t.onChange(null);if(v){v(null)}}};return/*#__PURE__*/(0,o/* .jsx */.tZ)(d/* ["default"] */.Z,{label:n,field:t,fieldState:r,helpText:a,children:()=>{return/*#__PURE__*/(0,o/* .jsx */.tZ)(p/* ["default"] */.Z,{when:_,fallback:/*#__PURE__*/(0,o/* .jsx */.tZ)(l/* ["default"] */.Z,{buttonCss:k.uploadButton,icon:/*#__PURE__*/(0,o/* .jsx */.tZ)(c/* ["default"] */.Z,{name:"attach",height:24,width:24}),variant:"secondary",onClick:Z,children:s}),children:e=>/*#__PURE__*/(0,o/* .jsxs */.BX)("div",{css:k.wrapper({hasFiles:Array.isArray(e)?e.length>0:e!==null}),children:[/*#__PURE__*/(0,o/* .jsx */.tZ)("div",{css:k.attachmentsWrapper,children:/*#__PURE__*/(0,o/* .jsx */.tZ)(f/* ["default"] */.Z,{each:Array.isArray(e)?e:[e],children:e=>/*#__PURE__*/(0,o/* .jsxs */.BX)("div",{css:k.attachmentCardWrapper,children:[/*#__PURE__*/(0,o/* .jsxs */.BX)("div",{css:k.attachmentCard,children:[/*#__PURE__*/(0,o/* .jsx */.tZ)(c/* ["default"] */.Z,{style:k.fileIcon,name:w(e.ext||"file"),height:40,width:40}),/*#__PURE__*/(0,o/* .jsxs */.BX)("div",{css:k.attachmentCardBody,children:[/*#__PURE__*/(0,o/* .jsxs */.BX)("div",{css:k.attachmentCardTitle,children:[/*#__PURE__*/(0,o/* .jsx */.tZ)("div",{title:e.title,css:m/* .styleUtils.text.ellipsis */.i.text.ellipsis(1),children:e.title}),/*#__PURE__*/(0,o/* .jsx */.tZ)("div",{css:k.fileExtension,children:".".concat(e.ext)})]}),/*#__PURE__*/(0,o/* .jsx */.tZ)("div",{css:k.attachmentCardSubtitle,children:/*#__PURE__*/(0,o/* .jsx */.tZ)("span",{children:"".concat((0,i.__)("Size","tutor"),": ").concat(e.size)})})]})]}),/*#__PURE__*/(0,o/* .jsx */.tZ)("button",{type:"button",css:k.removeButton,onClick:()=>{C(e.id)},children:/*#__PURE__*/(0,o/* .jsx */.tZ)(c/* ["default"] */.Z,{name:"cross",height:24,width:24})})]},e.id)})}),/*#__PURE__*/(0,o/* .jsx */.tZ)("div",{css:k.uploadButtonWrapper({hasFiles:Array.isArray(e)?e.length>0:e!==null}),children:/*#__PURE__*/(0,o/* .jsx */.tZ)(l/* ["default"] */.Z,{buttonCss:k.uploadButton,icon:/*#__PURE__*/(0,o/* .jsx */.tZ)(c/* ["default"] */.Z,{name:"attach",height:24,width:24}),variant:"secondary",onClick:Z,"data-cy":"upload-media",children:s})})]})})}})};/* ESM default export */const Z=(0,h/* .withVisibilityControl */.v)(x);var k={wrapper:e=>{var{hasFiles:t}=e;return/*#__PURE__*/(0,a/* .css */.iv)("display:flex;flex-direction:column;position:relative;",t&&(0,a/* .css */.iv)(b(),u/* .colorTokens.background.white */.Jv.background.white,u/* .spacing["16"] */.W0["16"],u/* .spacing["16"] */.W0["16"],u/* .spacing["16"] */.W0["16"],u/* .colorTokens.stroke["default"] */.Jv.stroke["default"],u/* .borderRadius.card */.E0.card,u/* .spacing["8"] */.W0["8"]))},attachmentsWrapper:/*#__PURE__*/(0,a/* .css */.iv)("max-height:260px;padding-right:",u/* .spacing["16"] */.W0["16"],";",m/* .styleUtils.overflowYAuto */.i.overflowYAuto,";"),attachmentCardWrapper:/*#__PURE__*/(0,a/* .css */.iv)(m/* .styleUtils.display.flex */.i.display.flex(),";justify-content:space-between;align-items:center;gap:",u/* .spacing["20"] */.W0["20"],";padding:",u/* .spacing["4"] */.W0["4"]," ",u/* .spacing["12"] */.W0["12"]," ",u/* .spacing["4"] */.W0["4"]," 0;border-radius:",u/* .borderRadius["6"] */.E0["6"],";button{opacity:0;}&:hover,&:focus-within{background:",u/* .colorTokens.background.hover */.Jv.background.hover,";button{opacity:1;}}",u/* .Breakpoint.smallTablet */.Uo.smallTablet,"{button{opacity:1;}}"),attachmentCard:/*#__PURE__*/(0,a/* .css */.iv)(m/* .styleUtils.display.flex */.i.display.flex(),";align-items:center;gap:",u/* .spacing["8"] */.W0["8"],";overflow:hidden;"),attachmentCardBody:/*#__PURE__*/(0,a/* .css */.iv)(m/* .styleUtils.display.flex */.i.display.flex("column"),";gap:",u/* .spacing["4"] */.W0["4"],";"),attachmentCardTitle:/*#__PURE__*/(0,a/* .css */.iv)(m/* .styleUtils.display.flex */.i.display.flex(),";",v/* .typography.caption */.c.caption("medium"),"    word-break:break-all;"),fileExtension:/*#__PURE__*/(0,a/* .css */.iv)("flex-shrink:0;"),attachmentCardSubtitle:/*#__PURE__*/(0,a/* .css */.iv)(v/* .typography.tiny */.c.tiny("regular")," ",m/* .styleUtils.display.flex */.i.display.flex(),";align-items:center;gap:",u/* .spacing["8"] */.W0["8"],";color:",u/* .colorTokens.text.hints */.Jv.text.hints,";svg{color:",u/* .colorTokens.icon["default"] */.Jv.icon["default"],";}"),uploadButtonWrapper:e=>{var{hasFiles:t}=e;return/*#__PURE__*/(0,a/* .css */.iv)(t&&(0,a/* .css */.iv)(_(),u/* .spacing["16"] */.W0["16"]))},uploadButton:/*#__PURE__*/(0,a/* .css */.iv)("width:100%;"),fileIcon:/*#__PURE__*/(0,a/* .css */.iv)("flex-shrink:0;color:",u/* .colorTokens.icon["default"] */.Jv.icon["default"],";"),removeButton:/*#__PURE__*/(0,a/* .css */.iv)(m/* .styleUtils.crossButton */.i.crossButton,";background:none;transition:none;flex-shrink:0;")}},44226:function(e,t,r){r.d(t,{Z:()=>x});/* ESM import */var n=r(35944);/* ESM import */var o=r(38003);/* ESM import */var a=/*#__PURE__*/r.n(o);/* ESM import */var i=r(30647);/* ESM import */var s=r(26815);/* ESM import */var l=r(36853);/* ESM import */var c=r(63260);/* ESM import */var d=r(31342);/* ESM import */var u=r(99678);/* ESM import */var v=r(34039);/* ESM import */var f=r(52357);/* ESM import */var p=r(43372);/* ESM import */var h=r(86056);/* ESM import */var g=r(95781);/* ESM import */var m=r(84978);var b;var _=!!v/* .tutorConfig.tutor_pro_url */.y.tutor_pro_url;var y=(b=v/* .tutorConfig.settings */.y.settings)===null||b===void 0?void 0:b.chatgpt_key_exist;var w=e=>{var{field:t,fieldState:r,label:a,size:v,helpText:f,buttonText:b=(0,o.__)("Upload Media","tutor"),infoText:w,onChange:x,generateWithAi:Z=false,previewImageCss:k,loading:C,onClickAiButton:D}=e;var{showModal:E}=(0,c/* .useModal */.d)();var{openMediaLibrary:S,resetFiles:W}=(0,p/* ["default"] */.Z)({options:{type:"image",multiple:false},onChange:e=>{if(e&&!Array.isArray(e)){var{id:r,url:n,title:o}=e;t.onChange({id:r,url:n,title:o});if(x){x({id:r,url:n,title:o})}}},initialFiles:t.value});var M=t.value;var T=()=>{S()};var B=()=>{W();t.onChange(null);if(x){x(null)}};var I=()=>{if(!_){E({component:d/* ["default"] */.Z,props:{image:g,image2x:h}})}else if(!y){E({component:u/* ["default"] */.Z,props:{image:g,image2x:h}})}else{E({component:l/* ["default"] */.Z,isMagicAi:true,props:{title:(0,o.__)("AI Studio","tutor"),icon:/*#__PURE__*/(0,n/* .jsx */.tZ)(s/* ["default"] */.Z,{name:"magicAiColorize",width:24,height:24}),field:t,fieldState:r}});D===null||D===void 0?void 0:D()}};return/*#__PURE__*/(0,n/* .jsx */.tZ)(m/* ["default"] */.Z,{label:a,field:t,fieldState:r,helpText:f,onClickAiButton:I,generateWithAi:Z,children:()=>{return/*#__PURE__*/(0,n/* .jsx */.tZ)("div",{children:/*#__PURE__*/(0,n/* .jsx */.tZ)(i/* ["default"] */.Z,{size:v,value:M,uploadHandler:T,clearHandler:B,buttonText:b,infoText:w,previewImageCss:k,loading:C})})}})};/* ESM default export */const x=(0,f/* .withVisibilityControl */.v)(w)},99308:function(e,t,r){r.d(t,{Z:()=>f});/* ESM import */var n=r(58865);/* ESM import */var o=r(35944);/* ESM import */var a=r(60860);/* ESM import */var i=r(70917);/* ESM import */var s=r(76487);/* ESM import */var l=r(29535);/* ESM import */var c=r(84978);function d(){var e=(0,n._)(["\n        img {\n          border-color: ",";\n        }\n      "]);d=function t(){return e};return e}function u(){var e=(0,n._)(["\n        outline-color: ",";\n      "]);u=function t(){return e};return e}var v=e=>{var{field:t,fieldState:r,label:n,options:a=[],disabled:i}=e;return/*#__PURE__*/(0,o/* .jsx */.tZ)(c/* ["default"] */.Z,{field:t,fieldState:r,label:n,disabled:i,children:()=>{return/*#__PURE__*/(0,o/* .jsx */.tZ)("div",{css:p.wrapper,children:a.map((e,r)=>/*#__PURE__*/(0,o/* .jsxs */.BX)("button",{type:"button",css:p.item(t.value===e.value),onClick:()=>{t.onChange(e.value)},disabled:i,children:[/*#__PURE__*/(0,o/* .jsx */.tZ)("img",{src:e.image,alt:e.label,width:64,height:64}),/*#__PURE__*/(0,o/* .jsx */.tZ)("p",{children:e.label})]},r))})}})};/* ESM default export */const f=v;var p={wrapper:/*#__PURE__*/(0,i/* .css */.iv)("display:grid;grid-template-columns:repeat(4,minmax(64px,1fr));gap:",a/* .spacing["12"] */.W0["12"],";margin-top:",a/* .spacing["4"] */.W0["4"],";"),item:e=>/*#__PURE__*/(0,i/* .css */.iv)(l/* .styleUtils.resetButton */.i.resetButton,";display:flex;flex-direction:column;gap:",a/* .spacing["4"] */.W0["4"],";align-items:center;width:100%;cursor:pointer;input{appearance:none;}p{",s/* .typography.small */.c.small(),";width:100%;",l/* .styleUtils.textEllipsis */.i.textEllipsis,";color:",a/* .colorTokens.text.subdued */.Jv.text.subdued,";text-align:center;}&:hover,&:focus-visible{",!e&&(0,i/* .css */.iv)(d(),a/* .colorTokens.stroke.hover */.Jv.stroke.hover),"}img{border-radius:",a/* .borderRadius["6"] */.E0["6"],";border:2px solid ",a/* .colorTokens.stroke.border */.Jv.stroke.border,";outline:2px solid transparent;outline-offset:2px;transition:border-color 0.3s ease;",e&&(0,i/* .css */.iv)(u(),a/* .colorTokens.stroke.magicAi */.Jv.stroke.magicAi),"}")}},35159:function(e,t,r){r.d(t,{Z:()=>E});/* ESM import */var n=r(7409);/* ESM import */var o=r(99282);/* ESM import */var a=r(98848);/* ESM import */var i=r(58865);/* ESM import */var s=r(35944);/* ESM import */var l=r(70917);/* ESM import */var c=r(87363);/* ESM import */var d=/*#__PURE__*/r.n(c);/* ESM import */var u=r(60860);/* ESM import */var v=r(76487);/* ESM import */var f=r(52357);/* ESM import */var p=r(29535);/* ESM import */var h=r(84978);function g(){var e=(0,i._)(["\n      border: 1px solid ",";\n      border-radius: ",";\n      box-shadow: ",";\n      background-color: ",";\n    "]);g=function t(){return e};return e}function m(){var e=(0,i._)(["\n      border-color: ",";\n      background-color: ",";\n    "]);m=function t(){return e};return e}function b(){var e=(0,i._)(["\n        border-color: ",";\n      "]);b=function t(){return e};return e}function _(){var e=(0,i._)(["\n          padding-",": ",";\n        "]);_=function t(){return e};return e}function y(){var e=(0,i._)(["\n            padding-",": ",";\n          "]);y=function t(){return e};return e}function w(){var e=(0,i._)(["\n          font-size: ",";\n          font-weight: ",";\n          height: 34px;\n          ",";\n        "]);w=function t(){return e};return e}function x(){var e=(0,i._)(["\n      ","\n    "]);x=function t(){return e};return e}function Z(){var e=(0,i._)(["\n      border-right: 1px solid ",";\n    "]);Z=function t(){return e};return e}function k(){var e=(0,i._)(["\n      ","\n    "]);k=function t(){return e};return e}function C(){var e=(0,i._)(["\n      border-left: 1px solid ",";\n    "]);C=function t(){return e};return e}var D=e=>{var{label:t,content:r,contentPosition:i="left",showVerticalBar:l=true,size:d="regular",type:u="text",field:v,fieldState:f,disabled:p,readOnly:g,loading:m,placeholder:b,helpText:_,onChange:y,onKeyDown:w,isHidden:x,wrapperCss:Z,contentCss:k,removeBorder:C=false,selectOnFocus:D=false}=e;var E=(0,c.useRef)(null);return/*#__PURE__*/(0,s/* .jsx */.tZ)(h/* ["default"] */.Z,{label:t,field:v,fieldState:f,disabled:p,readOnly:g,loading:m,placeholder:b,helpText:_,isHidden:x,removeBorder:C,children:e=>{var{css:t}=e,c=(0,a._)(e,["css"]);var p;return/*#__PURE__*/(0,s/* .jsxs */.BX)("div",{css:[S.inputWrapper(!!f.error,C),Z],children:[i==="left"&&/*#__PURE__*/(0,s/* .jsx */.tZ)("div",{css:[S.inputLeftContent(l,d),k],children:r}),/*#__PURE__*/(0,s/* .jsx */.tZ)("input",(0,o._)((0,n._)({},v,c),{type:"text",value:(p=v.value)!==null&&p!==void 0?p:"",onChange:e=>{var t=u==="number"?e.target.value.replace(/[^0-9.]/g,"").replace(/(\..*)\./g,"$1"):e.target.value;v.onChange(t);if(y){y(t)}},onKeyDown:e=>w===null||w===void 0?void 0:w(e.key),css:[t,S.input(i,l,d)],autoComplete:"off",ref:e=>{v.ref(e);// @ts-ignore
E.current=e;// this is not ideal but it is the only way to set ref to the input element
},onFocus:()=>{if(!D||!E.current){return}E.current.select()},"data-input":true})),i==="right"&&/*#__PURE__*/(0,s/* .jsx */.tZ)("div",{css:[S.inputRightContent(l,d),k],children:r})]})}})};/* ESM default export */const E=(0,f/* .withVisibilityControl */.v)(D);var S={inputWrapper:(e,t)=>/*#__PURE__*/(0,l/* .css */.iv)("display:flex;align-items:center;",!t&&(0,l/* .css */.iv)(g(),u/* .colorTokens.stroke["default"] */.Jv.stroke["default"],u/* .borderRadius["6"] */.E0["6"],u/* .shadow.input */.AF.input,u/* .colorTokens.background.white */.Jv.background.white)," ",e&&(0,l/* .css */.iv)(m(),u/* .colorTokens.stroke.danger */.Jv.stroke.danger,u/* .colorTokens.background.status.errorFail */.Jv.background.status.errorFail),";&:focus-within{",p/* .styleUtils.inputFocus */.i.inputFocus,";",e&&(0,l/* .css */.iv)(b(),u/* .colorTokens.stroke.danger */.Jv.stroke.danger),"}"),input:(e,t,r)=>/*#__PURE__*/(0,l/* .css */.iv)("&[data-input]{",v/* .typography.body */.c.body(),";border:none;box-shadow:none;background-color:transparent;padding-",e,":0;",t&&(0,l/* .css */.iv)(_(),e,u/* .spacing["10"] */.W0["10"]),";",r==="large"&&(0,l/* .css */.iv)(w(),u/* .fontSize["24"] */.JB["24"],u/* .fontWeight.medium */.Ue.medium,t&&(0,l/* .css */.iv)(y(),e,u/* .spacing["12"] */.W0["12"])),"  \n      &:focus{box-shadow:none;outline:none;}}"),inputLeftContent:(e,t)=>/*#__PURE__*/(0,l/* .css */.iv)(v/* .typography.small */.c.small()," ",p/* .styleUtils.flexCenter */.i.flexCenter(),"    height:40px;min-width:48px;color:",u/* .colorTokens.icon.subdued */.Jv.icon.subdued,";padding-inline:",u/* .spacing["12"] */.W0["12"],";",t==="large"&&(0,l/* .css */.iv)(x(),v/* .typography.body */.c.body())," ",e&&(0,l/* .css */.iv)(Z(),u/* .colorTokens.stroke["default"] */.Jv.stroke["default"])),inputRightContent:(e,t)=>/*#__PURE__*/(0,l/* .css */.iv)(v/* .typography.small */.c.small()," ",p/* .styleUtils.flexCenter */.i.flexCenter(),"    height:40px;min-width:48px;color:",u/* .colorTokens.icon.subdued */.Jv.icon.subdued,";padding-inline:",u/* .spacing["12"] */.W0["12"],";",t==="large"&&(0,l/* .css */.iv)(k(),v/* .typography.body */.c.body())," ",e&&(0,l/* .css */.iv)(C(),u/* .colorTokens.stroke["default"] */.Jv.stroke["default"]))}},90097:function(e,t,r){r.d(t,{Z:()=>f});/* ESM import */var n=r(7409);/* ESM import */var o=r(99282);/* ESM import */var a=r(98848);/* ESM import */var i=r(35944);/* ESM import */var s=r(63772);/* ESM import */var l=r(60860);/* ESM import */var c=r(76487);/* ESM import */var d=r(70917);/* ESM import */var u=r(84978);var v=e=>{var{field:t,fieldState:r,label:l,options:c=[],disabled:d,wrapperCss:v,onSelect:f,onSelectRender:h}=e;return/*#__PURE__*/(0,i/* .jsx */.tZ)(u/* ["default"] */.Z,{field:t,fieldState:r,label:l,disabled:d,children:e=>{var{css:r}=e,l=(0,a._)(e,["css"]);return/*#__PURE__*/(0,i/* .jsx */.tZ)("div",{css:v,children:c.map((e,a)=>/*#__PURE__*/(0,i/* .jsxs */.BX)("div",{children:[/*#__PURE__*/(0,i/* .jsx */.tZ)(s/* ["default"] */.Z,(0,o._)((0,n._)({},l),{inputCss:r,value:e.value,label:e.label,disabled:e.disabled||d,labelCss:e.labelCss,checked:t.value===e.value,description:e.description,onChange:()=>{t.onChange(e.value);if(f){f(e)}}})),h&&t.value===e.value&&h(e),e.legend&&/*#__PURE__*/(0,i/* .jsx */.tZ)("span",{css:p.radioLegend,children:e.legend})]},a))})}})};/* ESM default export */const f=v;var p={radioLegend:/*#__PURE__*/(0,d/* .css */.iv)("margin-left:",l/* .spacing["28"] */.W0["28"],";",c/* .typography.body */.c.body(),";color:",l/* .colorTokens.text.subdued */.Jv.text.subdued,";")}},60309:function(e,t,r){r.d(t,{Z:()=>b});/* ESM import */var n=r(58865);/* ESM import */var o=r(35944);/* ESM import */var a=r(60860);/* ESM import */var i=r(76487);/* ESM import */var s=r(4867);/* ESM import */var l=r(29535);/* ESM import */var c=r(34403);/* ESM import */var d=r(70917);/* ESM import */var u=r(87363);/* ESM import */var v=/*#__PURE__*/r.n(u);/* ESM import */var f=r(84978);function p(){var e=(0,n._)(["\n      border: 1px solid ",";\n      border-radius: ",";\n      padding: "," "," "," ",";\n    "]);p=function t(){return e};return e}function h(){var e=(0,n._)(["\n      background: ",";\n    "]);h=function t(){return e};return e}function g(e,t,r,n){if(!t.current){return 0}var o=t.current.getBoundingClientRect();var a=o.width;var i=e-o.left;var s=Math.max(0,Math.min(i,a));var l=s/a*100;var c=Math.floor(r+l/100*(n-r));return c}var m=e=>{var{field:t,fieldState:r,label:n,min:a=0,max:i=100,isMagicAi:l=false,hasBorder:d=false}=e;var v=(0,u.useRef)(null);var[p,h]=(0,u.useState)(t.value);var m=(0,u.useRef)(null);var b=(0,u.useRef)(null);var y=(0,s/* .useDebounce */.N)(p);(0,u.useEffect)(()=>{t.onChange(y);// eslint-disable-next-line react-hooks/exhaustive-deps
},[y,t.onChange]);(0,u.useEffect)(()=>{var e=false;var t=t=>{if(t.target!==b.current){return}e=true;document.body.style.userSelect="none"};var r=t=>{if(!e||!m.current){return}h(g(t.clientX,m,a,i))};var n=()=>{e=false;document.body.style.userSelect="auto"};window.addEventListener("mousedown",t);window.addEventListener("mousemove",r);window.addEventListener("mouseup",n);return()=>{window.removeEventListener("mousedown",t);window.removeEventListener("mousemove",r);window.removeEventListener("mouseup",n)}},[a,i]);var w=(0,u.useMemo)(()=>{return Math.floor((p-a)/(i-a)*100)},[p,a,i]);return/*#__PURE__*/(0,o/* .jsx */.tZ)(f/* ["default"] */.Z,{field:t,fieldState:r,label:n,isMagicAi:l,children:()=>/*#__PURE__*/(0,o/* .jsxs */.BX)("div",{css:_.wrapper(d),children:[/*#__PURE__*/(0,o/* .jsxs */.BX)("div",{css:_.track,ref:m,onKeyDown:c/* .noop */.ZT,onClick:e=>{h(g(e.clientX,m,a,i))},children:[/*#__PURE__*/(0,o/* .jsx */.tZ)("div",{css:_.fill,style:{width:"".concat(w,"%")}}),/*#__PURE__*/(0,o/* .jsx */.tZ)("div",{css:_.thumb(l),style:{left:"".concat(w,"%")},ref:b})]}),/*#__PURE__*/(0,o/* .jsx */.tZ)("input",{type:"text",css:_.input,value:String(p),onChange:e=>{h(Number(e.target.value))},ref:v,onFocus:()=>{var e;(e=v.current)===null||e===void 0?void 0:e.select()}})]})})};/* ESM default export */const b=m;var _={wrapper:e=>/*#__PURE__*/(0,d/* .css */.iv)("display:grid;grid-template-columns:1fr 45px;gap:",a/* .spacing["20"] */.W0["20"],";align-items:center;",e&&(0,d/* .css */.iv)(p(),a/* .colorTokens.stroke.disable */.Jv.stroke.disable,a/* .borderRadius["6"] */.E0["6"],a/* .spacing["12"] */.W0["12"],a/* .spacing["10"] */.W0["10"],a/* .spacing["12"] */.W0["12"],a/* .spacing["16"] */.W0["16"])),track:/*#__PURE__*/(0,d/* .css */.iv)("position:relative;height:4px;background-color:",a/* .colorTokens.bg.gray20 */.Jv.bg.gray20,";border-radius:",a/* .borderRadius["50"] */.E0["50"],";width:100%;flex-shrink:0;cursor:pointer;"),fill:/*#__PURE__*/(0,d/* .css */.iv)("position:absolute;left:0;top:0;height:100%;background:",a/* .colorTokens.ai.gradient_1 */.Jv.ai.gradient_1,";width:50%;border-radius:",a/* .borderRadius["50"] */.E0["50"],";"),thumb:e=>/*#__PURE__*/(0,d/* .css */.iv)("position:absolute;top:50%;transform:translate(-50%,-50%);width:20px;height:20px;border-radius:",a/* .borderRadius.circle */.E0.circle,";&::before{content:'';position:absolute;top:50%;left:50%;width:8px;height:8px;transform:translate(-50%,-50%);border-radius:",a/* .borderRadius.circle */.E0.circle,";background-color:",a/* .colorTokens.background.white */.Jv.background.white,";cursor:pointer;}",e&&(0,d/* .css */.iv)(h(),a/* .colorTokens.ai.gradient_1 */.Jv.ai.gradient_1)),input:/*#__PURE__*/(0,d/* .css */.iv)(i/* .typography.caption */.c.caption("medium"),";height:32px;border:1px solid ",a/* .colorTokens.stroke.border */.Jv.stroke.border,";border-radius:",a/* .borderRadius["6"] */.E0["6"],";text-align:center;color:",a/* .colorTokens.text.primary */.Jv.text.primary,";&:focus-visible{",l/* .styleUtils.inputFocus */.i.inputFocus,";}")}},47778:function(e,t,r){r.d(t,{Z:()=>k});/* ESM import */var n=r(7409);/* ESM import */var o=r(99282);/* ESM import */var a=r(98848);/* ESM import */var i=r(35944);/* ESM import */var s=r(19398);/* ESM import */var l=r(26815);/* ESM import */var c=r(74053);/* ESM import */var d=r(60860);/* ESM import */var u=r(76487);/* ESM import */var v=r(98567);/* ESM import */var f=r(29535);/* ESM import */var p=r(70917);/* ESM import */var h=r(4543);/* ESM import */var g=r(37042);/* ESM import */var m=r(47041);/* ESM import */var b=r(32449);/* ESM import */var _=r(87363);/* ESM import */var y=/*#__PURE__*/r.n(_);/* ESM import */var w=r(30633);/* ESM import */var x=r(84978);var Z=e=>{var{label:t,field:r,fieldState:d,interval:u=30,disabled:f,loading:p,placeholder:y,helpText:Z,isClearable:k=true}=e;var[D,E]=(0,_.useState)(false);var S=(0,_.useRef)(null);var W=(0,_.useMemo)(()=>{var e=(0,h["default"])((0,g["default"])(new Date,0),0);var t=(0,h["default"])((0,g["default"])(new Date,23),59);var r=(0,m/* ["default"] */.Z)({start:e,end:t},{step:u});return r.map(e=>(0,b["default"])(e,c/* .DateFormats.hoursMinutes */.E_.hoursMinutes))},[u]);var{triggerRef:M,triggerWidth:T,position:B,popoverRef:I}=(0,v/* .usePortalPopover */.l)({isOpen:D,isDropdown:true});var{activeIndex:N,setActiveIndex:O}=(0,w/* .useSelectKeyboardNavigation */.U)({options:W.map(e=>({label:e,value:e})),isOpen:D,selectedValue:r.value,onSelect:e=>{r.onChange(e.value);E(false)},onClose:()=>E(false)});(0,_.useEffect)(()=>{if(D&&N>=0&&S.current){S.current.scrollIntoView({block:"nearest",behavior:"smooth"})}},[D,N]);return/*#__PURE__*/(0,i/* .jsx */.tZ)(x/* ["default"] */.Z,{label:t,field:r,fieldState:d,disabled:f,loading:p,placeholder:y,helpText:Z,children:e=>{var{css:t}=e,d=(0,a._)(e,["css"]);var u;return/*#__PURE__*/(0,i/* .jsxs */.BX)("div",{children:[/*#__PURE__*/(0,i/* .jsxs */.BX)("div",{css:C.wrapper,ref:M,children:[/*#__PURE__*/(0,i/* .jsx */.tZ)("input",(0,o._)((0,n._)({},d),{ref:r.ref,css:[t,C.input],type:"text",onClick:e=>{e.stopPropagation();E(e=>!e)},onKeyDown:e=>{if(e.key==="Enter"){e.preventDefault();E(e=>!e)}if(e.key==="Tab"){E(false)}},value:(u=r.value)!==null&&u!==void 0?u:"",onChange:e=>{var{value:t}=e.target;r.onChange(t)},autoComplete:"off","data-input":true})),/*#__PURE__*/(0,i/* .jsx */.tZ)(l/* ["default"] */.Z,{name:"clock",width:32,height:32,style:C.icon}),k&&r.value&&/*#__PURE__*/(0,i/* .jsx */.tZ)(s/* ["default"] */.Z,{variant:"text",buttonCss:C.clearButton,onClick:()=>r.onChange(""),children:/*#__PURE__*/(0,i/* .jsx */.tZ)(l/* ["default"] */.Z,{name:"times",width:12,height:12})})]}),/*#__PURE__*/(0,i/* .jsx */.tZ)(v/* .Portal */.h,{isOpen:D,onClickOutside:()=>E(false),onEscape:()=>E(false),children:/*#__PURE__*/(0,i/* .jsx */.tZ)("div",{css:[C.popover,{[c/* .isRTL */.dZ?"right":"left"]:B.left,top:B.top,maxWidth:T}],ref:I,children:/*#__PURE__*/(0,i/* .jsx */.tZ)("ul",{css:C.list,children:W.map((e,t)=>{return/*#__PURE__*/(0,i/* .jsx */.tZ)("li",{css:C.listItem,ref:N===t?S:null,"data-active":N===t,children:/*#__PURE__*/(0,i/* .jsx */.tZ)("button",{type:"button",css:C.itemButton,onClick:()=>{r.onChange(e);E(false)},onMouseOver:()=>O(t),onMouseLeave:()=>t!==N&&O(-1),onFocus:()=>O(t),children:e})},t)})})})})]})}})};/* ESM default export */const k=Z;var C={wrapper:/*#__PURE__*/(0,p/* .css */.iv)("position:relative;&:hover,&:focus-within{& > button{opacity:1;}}"),input:/*#__PURE__*/(0,p/* .css */.iv)("&[data-input]{padding-left:",d/* .spacing["40"] */.W0["40"],";}"),icon:/*#__PURE__*/(0,p/* .css */.iv)("position:absolute;top:50%;left:",d/* .spacing["8"] */.W0["8"],";transform:translateY(-50%);color:",d/* .colorTokens.icon["default"] */.Jv.icon["default"],";"),popover:/*#__PURE__*/(0,p/* .css */.iv)("position:absolute;width:100%;background-color:",d/* .colorTokens.background.white */.Jv.background.white,";box-shadow:",d/* .shadow.popover */.AF.popover,";height:380px;overflow-y:auto;border-radius:",d/* .borderRadius["6"] */.E0["6"],";"),list:/*#__PURE__*/(0,p/* .css */.iv)("list-style:none;padding:0;margin:0;"),listItem:/*#__PURE__*/(0,p/* .css */.iv)("width:100%;height:40px;cursor:pointer;display:flex;align-items:center;transition:background-color 0.3s ease-in-out;&[data-active='true']{background-color:",d/* .colorTokens.background.hover */.Jv.background.hover,";}:hover{background-color:",d/* .colorTokens.background.hover */.Jv.background.hover,";}"),itemButton:/*#__PURE__*/(0,p/* .css */.iv)(f/* .styleUtils.resetButton */.i.resetButton,";",u/* .typography.body */.c.body(),";margin:",d/* .spacing["4"] */.W0["4"]," ",d/* .spacing["12"] */.W0["12"],";width:100%;height:100%;&:focus,&:active,&:hover{background:none;color:",d/* .colorTokens.text.primary */.Jv.text.primary,";}"),clearButton:/*#__PURE__*/(0,p/* .css */.iv)("position:absolute;top:50%;right:",d/* .spacing["4"] */.W0["4"],";transform:translateY(-50%);width:32px;height:32px;",f/* .styleUtils.flexCenter */.i.flexCenter(),";opacity:0;transition:background-color 0.3s ease-in-out,opacity 0.3s ease-in-out;border-radius:",d/* .borderRadius["2"] */.E0["2"],";:hover{background-color:",d/* .colorTokens.background.hover */.Jv.background.hover,";}")}},69789:function(e,t,r){// EXPORTS
r.d(t,{Z:()=>/* binding */$});// EXTERNAL MODULE: ./node_modules/@swc/helpers/esm/_async_to_generator.js
var n=r(76150);// EXTERNAL MODULE: ./node_modules/@swc/helpers/esm/_object_spread.js
var o=r(7409);// EXTERNAL MODULE: ./node_modules/@swc/helpers/esm/_object_spread_props.js
var a=r(99282);// EXTERNAL MODULE: ./node_modules/@swc/helpers/esm/_tagged_template_literal.js
var i=r(58865);// EXTERNAL MODULE: ./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js
var s=r(35944);// EXTERNAL MODULE: ./node_modules/@emotion/react/dist/emotion-react.browser.esm.js
var l=r(70917);// EXTERNAL MODULE: external "wp.i18n"
var c=r(38003);// EXTERNAL MODULE: external "React"
var d=r(87363);// EXTERNAL MODULE: ./node_modules/react-hook-form/dist/index.esm.mjs
var u=r(52293);// EXTERNAL MODULE: ./assets/react/v3/shared/atoms/Button.tsx
var v=r(19398);// EXTERNAL MODULE: ./assets/react/v3/shared/atoms/ImageInput.tsx
var f=r(30647);// EXTERNAL MODULE: ./assets/react/v3/shared/atoms/LoadingSpinner.tsx
var p=r(2613);// EXTERNAL MODULE: ./assets/react/v3/shared/atoms/SVGIcon.tsx
var h=r(26815);// EXTERNAL MODULE: ./assets/react/v3/shared/config/config.ts
var g=r(34039);// EXTERNAL MODULE: ./assets/react/v3/shared/config/constants.ts
var m=r(74053);// EXTERNAL MODULE: ./assets/react/v3/shared/config/styles.ts
var b=r(60860);// EXTERNAL MODULE: ./assets/react/v3/shared/config/typography.ts
var _=r(76487);// EXTERNAL MODULE: ./assets/react/v3/shared/controls/Show.tsx
var y=r(17106);// EXTERNAL MODULE: ./assets/react/v3/shared/hoc/withVisibilityControl.tsx
var w=r(52357);// EXTERNAL MODULE: ./assets/react/v3/shared/hooks/useAnimation.tsx
var x=r(54354);// EXTERNAL MODULE: ./assets/react/v3/shared/hooks/useFormWithGlobalError.ts
var Z=r(37861);// EXTERNAL MODULE: ./assets/react/v3/shared/hooks/usePortalPopover.tsx
var k=r(98567);// EXTERNAL MODULE: ./assets/react/v3/shared/hooks/useWpMedia.ts
var C=r(43372);// EXTERNAL MODULE: ./node_modules/@tanstack/react-query/build/modern/useMutation.js
var D=r(65228);// EXTERNAL MODULE: ./assets/react/v3/shared/utils/api.ts
var E=r(82340);// EXTERNAL MODULE: ./assets/react/v3/shared/utils/endpoints.ts
var S=r(84225);// CONCATENATED MODULE: ./assets/react/v3/shared/services/video.ts
var W=e=>{return E/* .wpAjaxInstance.post */.R.post(S/* ["default"].TUTOR_YOUTUBE_VIDEO_DURATION */.Z.TUTOR_YOUTUBE_VIDEO_DURATION,{video_id:e})};var M=()=>{return(0,D/* .useMutation */.D)({mutationFn:W})};// EXTERNAL MODULE: ./assets/react/v3/shared/utils/style-utils.ts
var T=r(29535);// EXTERNAL MODULE: ./assets/react/v3/shared/utils/util.ts + 4 modules
var B=r(34403);// EXTERNAL MODULE: ./assets/react/v3/shared/utils/validation.ts
var I=r(25481);// CONCATENATED MODULE: ./assets/react/v3/shared/utils/video.ts
function N(e){return(0,n._)(function*(){var t=/^.*(vimeo\.com\/)((channels\/[A-z]+\/)|(groups\/[A-z]+\/videos\/))?([0-9]+)/;var r=e.match(t);var n=r?r[5]:null;var o="https://vimeo.com/api/v2/video/".concat(n,".xml");try{var a=yield fetch(o);if(!a.ok){throw new Error((0,c.__)("Failed to fetch the video data","tutor"))}var i=yield a.text();var s=new DOMParser;var l=s.parseFromString(i,"application/xml");var d=l.getElementsByTagName("duration")[0];if(!d||!d.textContent){return null}var u=Number.parseInt(d.textContent,10);return u;// in seconds
}catch(e){// eslint-disable-next-line no-console
console.error("Error fetching video duration:",e);return null}})()}var O=e=>(0,n._)(function*(){var t=document.createElement("video");t.src=e;t.preload="metadata";return new Promise(e=>{t.onloadedmetadata=()=>{e(t.duration)}})})();var A=e=>{var t=e.match(/PT(\d+H)?(\d+M)?(\d+S)?/);if(!t){return 0}var r=t[1]?Number(t[1].replace("H","")):0;var n=t[2]?Number(t[2].replace("M","")):0;var o=t[3]?Number(t[3].replace("S","")):0;return r*3600+n*60+o};/**
 * Generates a thumbnail from different video sources
 * @param {string} source - Video source type ('youtube', 'vimeo', 'external_url', 'html5')
 * @param {string} url - Video URL
 * @returns {Promise<string>} - Base64 encoded thumbnail image
 */var L=(e,t)=>(0,n._)(function*(){if(e==="youtube"){var r=t.match(m/* .VideoRegex.YOUTUBE */.t8.YOUTUBE);var n=r&&r[7].length===11?r[7]:"";return"https://img.youtube.com/vi/".concat(n,"/maxresdefault.jpg")}if(e==="vimeo"){try{var o=t.split("/").pop();var a=yield fetch("https://vimeo.com/api/v2/video/".concat(o,".json"));var i=yield a.json();return i[0].thumbnail_large}catch(e){throw new Error("Failed to get Vimeo thumbnail. Error: ".concat(e))}}if(e==="external_url"||e==="html5"){return new Promise((e,r)=>{try{// Create video element
    var n=document.createElement("video");n.muted=true;n.style.cssText="position: fixed; left: 0; top: 0; width: 1px; height: 1px; object-fit: contain; z-index: -1;";n.crossOrigin="Anonymous";// Create canvas element
    var o=document.createElement("canvas");// Track loading states
    var a=false;var i=false;var s=false;var l=false;var d=()=>{n.src="";n.remove();o.remove();clearTimeout(v)};var u=()=>{if(a&&i&&s&&l){try{o.height=n.videoHeight;o.width=n.videoWidth;var t=o.getContext("2d");if(!t){throw new Error((0,c.__)("Failed to get canvas context","tutor"))}t.drawImage(n,0,0);var u=o.toDataURL("image/png");d();e(u)}catch(e){d();var v=e instanceof Error?e.message:(0,c.__)("Unknown error occurred","tutor");r(new Error("Thumbnail generation failed: ".concat(v)))}}};// Setup event listeners
    n.addEventListener("loadedmetadata",()=>{a=true;if(!n.currentTime||n.currentTime<2){n.currentTime=2;// Take snapshot at 2 seconds
    }});n.addEventListener("loadeddata",()=>{i=true;u()});n.addEventListener("suspend",()=>{s=true;u()});n.addEventListener("seeked",()=>{l=true;u()});n.addEventListener("error",e=>{d();r(new Error("Video loading failed: ".concat(e.message)))});// Set timeout
    // 30 seconds is a reasonable maximum time to wait for video metadata and frame capture
    var v=setTimeout(()=>{d();r(new Error((0,c.__)("Thumbnail generation timed out","tutor")))},3e4);// Add elements to DOM
    document.body.appendChild(n);document.body.appendChild(o);// Start loading the video
    n.src=t}catch(e){var f=e instanceof Error?e.message:"Unknown error occurred";r(new Error("Thumbnail generation failed: ".concat(f)))}})}throw new Error((0,c.__)("Unsupported video source","tutor"))})();// EXTERNAL MODULE: ./assets/react/v3/shared/components/fields/FormFieldWrapper.tsx
var J=r(84978);// EXTERNAL MODULE: ./assets/react/v3/shared/components/fields/FormSelectInput.tsx
var P=r(82325);// EXTERNAL MODULE: ./assets/react/v3/shared/components/fields/FormTextareaInput.tsx
var R=r(3473);// CONCATENATED MODULE: ./assets/react/v3/shared/components/fields/FormVideoInput.tsx
function U(){var e=(0,i._)(["\n      background-color: ",";\n    "]);U=function t(){return e};return e}function z(){var e=(0,i._)(["\n      ",";\n    "]);z=function t(){return e};return e}var j=g/* .tutorConfig.supported_video_sources */.y.supported_video_sources||[];var X=j.filter(e=>e.value!=="html5");var F=j.map(e=>e.value);var Y=["vimeo","youtube","html5"];var Q={youtube:(0,c.__)("Paste YouTube Video URL","tutor"),vimeo:(0,c.__)("Paste Vimeo Video URL","tutor"),external_url:(0,c.__)("Paste External Video URL","tutor"),shortcode:(0,c.__)("Paste Video Shortcode","tutor"),embedded:(0,c.__)("Paste Embedded Video Code","tutor")};var q={youtube:"youtube",vimeo:"vimeo",shortcode:"shortcode",embedded:"coding"};var H=(e,t)=>{var r={source:"",source_video_id:"",poster:"",poster_url:"",source_html5:"",source_external_url:"",source_shortcode:"",source_youtube:"",source_vimeo:"",source_embedded:""};return e?(0,o._)({},e,t):(0,o._)({},r,t)};var V={youtube:e=>{var t=e.match(m/* .VideoRegex.YOUTUBE */.t8.YOUTUBE);return t&&t[7].length===11?t[7]:null},vimeo:e=>{var t=e.match(m/* .VideoRegex.VIMEO */.t8.VIMEO);return(t===null||t===void 0?void 0:t[5])||null},shortcode:e=>{return e.match(m/* .VideoRegex.SHORTCODE */.t8.SHORTCODE)?e:null},url:e=>{return e.match(m/* .VideoRegex.EXTERNAL_URL */.t8.EXTERNAL_URL)?e:null}};var G=e=>{var{source:t,url:r,getYouTubeVideoDurationMutation:o}=e;return(0,n._)(function*(){try{var e=0;switch(t){case"vimeo":var n;e=(n=yield N(r))!==null&&n!==void 0?n:0;break;case"html5":case"external_url":var a;e=(a=yield O(r))!==null&&a!==void 0?a:0;break;case"youtube":{var i=V.youtube(r);if(i){var s=yield o.mutateAsync(i);e=A(s.data.duration)}break}}if(e){var l=(0,B/* .covertSecondsToHMS */.lL)(Math.floor(e));return l}return null}catch(e){// eslint-disable-next-line no-console
console.error("Error getting video duration:",e);return null}})()};var K=e=>{var{field:t,fieldState:r,label:i,helpText:b,buttonText:_=(0,c.__)("Upload Media","tutor"),infoText:w,onChange:D,supportedFormats:E,loading:S,onGetDuration:W}=e;var U,z,K,$,et;var er=(0,Z/* .useFormWithGlobalError */.O)({defaultValues:{videoSource:((U=X[0])===null||U===void 0?void 0:U.value)||"",videoUrl:""}});var en=M();var[eo,ea]=(0,d.useState)(false);var[ei,es]=(0,d.useState)({hours:0,minutes:0,seconds:0});var[el,ec]=(0,d.useState)("");var[ed,eu]=(0,d.useState)(false);var ev=(0,d.useRef)(null);var{popoverRef:ef,position:ep}=(0,k/* .usePortalPopover */.l)({isOpen:ed,triggerRef:ev,positionModifier:{top:((z=ev.current)===null||z===void 0?void 0:z.getBoundingClientRect().top)||0,left:0}});var eh=e=>(0,n._)(function*(){if(!e){return}var r=Array.isArray(e)?e[0]:e;var n={source:"html5",source_video_id:r.id.toString(),source_html5:r.url};t.onChange(H(t.value,n));D===null||D===void 0?void 0:D(H(t.value,n));try{ea(true);e_();var o=yield L("external_url",r.url);var a=yield O(r.url);if(!a){return}es((0,B/* .covertSecondsToHMS */.lL)(Math.floor(a)));if(W){W((0,B/* .covertSecondsToHMS */.lL)(Math.floor(a)))}if(o){ec(o)}}finally{ea(false)}})();var{openMediaLibrary:eg,resetFiles:em}=(0,C/* ["default"] */.Z)({options:{type:(E===null||E===void 0?void 0:E.length)?E.map(e=>"video/".concat(e)).join(","):"video"},onChange:eh});var{openMediaLibrary:eb,resetFiles:e_}=(0,C/* ["default"] */.Z)({options:{type:"image"},onChange:e=>{if(!e){return}var r=Array.isArray(e)?e[0]:e;var n={poster:r.id.toString(),poster_url:r.url};t.onChange(H(t.value,n));D===null||D===void 0?void 0:D(H(t.value,n))},initialFiles:((K=t.value)===null||K===void 0?void 0:K.poster)?{id:Number(t.value.poster),url:t.value.poster_url,title:""}:null});var ey=er.watch("videoSource")||"";var ew=t.value;(0,d.useEffect)(()=>{var e;if(!ew){return}if(!ew.source){var r,n;er.setValue("videoSource",(r=X[0])===null||r===void 0?void 0:r.value);er.setValue("videoUrl",ew["source_".concat((n=X[0])===null||n===void 0?void 0:n.value)]||"");return}var o=F.includes(ew.source);if(!o){t.onChange(H(ew,{source:""}));return}er.setValue("videoSource",ew.source);er.setValue("videoUrl",ew["source_".concat(ew.source)]||"");if(!ew.poster_url&&Y.includes(ew.source)){var a=ew.source;ea(true);L(a,ew["source_".concat(a)]||"").then(e=>{ea(false);ec(e)}).finally(()=>{ea(false)})}if(Object.values(ei).some(e=>e>0)){return}if(ew.source==="vimeo"){N(ew["source_vimeo"]||"").then(e=>{if(!e){return}es((0,B/* .covertSecondsToHMS */.lL)(Math.floor(e)));if(W){W((0,B/* .covertSecondsToHMS */.lL)(Math.floor(e)))}})}if(["external_url","html5"].includes(ew.source)){O(ew["source_".concat(ew.source)]||"").then(e=>{if(!e){return}es((0,B/* .covertSecondsToHMS */.lL)(Math.floor(e)));if(W){W((0,B/* .covertSecondsToHMS */.lL)(Math.floor(e)))}})}if(ew.source==="youtube"&&((e=g/* .tutorConfig.settings */.y.settings)===null||e===void 0?void 0:e.youtube_api_key_exist)){var i;var s=(i=V.youtube(ew["source_youtube"]||""))!==null&&i!==void 0?i:"";en.mutateAsync(s).then(e=>{var t=e.data.duration;if(!t){return}var r=A(t);es((0,B/* .covertSecondsToHMS */.lL)(Math.floor(r)));if(W){W((0,B/* .covertSecondsToHMS */.lL)(Math.floor(r)))}})}// eslint-disable-next-line react-hooks/exhaustive-deps
},[ew]);if(!F.length){return/*#__PURE__*/(0,s/* .jsxs */.BX)("div",{css:ee.emptyMediaWrapper,children:[/*#__PURE__*/(0,s/* .jsx */.tZ)(y/* ["default"] */.Z,{when:i,children:/*#__PURE__*/(0,s/* .jsx */.tZ)("label",{children:i})}),/*#__PURE__*/(0,s/* .jsxs */.BX)("div",{css:ee.emptyMedia({hasVideoSource:false}),children:[/*#__PURE__*/(0,s/* .jsxs */.BX)("p",{css:ee.warningText,children:[/*#__PURE__*/(0,s/* .jsx */.tZ)(h/* ["default"] */.Z,{name:"info",height:20,width:20}),(0,c.__)("No video source selected","tutor")]}),/*#__PURE__*/(0,s/* .jsx */.tZ)(v/* ["default"] */.Z,{buttonCss:ee.selectFromSettingsButton,variant:"secondary",size:"small",icon:/*#__PURE__*/(0,s/* .jsx */.tZ)(h/* ["default"] */.Z,{name:"linkExternal",height:24,width:24}),onClick:()=>{window.open(g/* ["default"].VIDEO_SOURCES_SETTINGS_URL */.Z.VIDEO_SOURCES_SETTINGS_URL,"_blank","noopener")},children:(0,c.__)("Select from settings","tutor")})]})]})}var ex=e=>{if(e==="video"){eg();return}eb()};var eZ=e=>{var r=e==="video"?{source:"",source_video_id:"",poster:"",poster_url:""}:{poster:"",poster_url:""};var n=H(ew,r);if(e==="video"){em()}else{e_()}t.onChange(n);ec("");es({hours:0,minutes:0,seconds:0});if(D){D(n)}};var ek=()=>{if(!(ew===null||ew===void 0?void 0:ew.source)||!F.includes(ew.source)){return false}var e=ew===null||ew===void 0?void 0:ew.source;var t="source_".concat(e);return ew&&ew[t]!==""};var eC=e=>(0,n._)(function*(){ea(true);try{var{videoSource:r,videoUrl:n}=e;var o={source:r,["source_".concat(r)]:n};t.onChange(H(ew,o));D===null||D===void 0?void 0:D(H(ew,o));eu(false);var[a,i]=yield Promise.all([G({source:r,url:n,getYouTubeVideoDurationMutation:en}),Y.includes(r)?L(r,n):null]);if(a){es(a);W===null||W===void 0?void 0:W(a)}if(i){ec(i)}}finally{ea(false)}})();var eD=e=>{var t=e.trim();if(ey==="embedded")return true;if(ey==="shortcode"){return V.shortcode(t)?true:(0,c.__)("Invalid Shortcode","tutor")}if(!V.url(t)){return(0,c.__)("Invalid URL","tutor")}if(ey==="youtube"&&!V.youtube(t)){return(0,c.__)("Invalid YouTube URL","tutor")}if(ey==="vimeo"&&!V.vimeo(t)){return(0,c.__)("Invalid Vimeo URL","tutor")}return true};return/*#__PURE__*/(0,s/* .jsxs */.BX)(s/* .Fragment */.HY,{children:[/*#__PURE__*/(0,s/* .jsx */.tZ)(J/* ["default"] */.Z,{label:i,field:t,fieldState:r,helpText:b,children:()=>{return/*#__PURE__*/(0,s/* .jsx */.tZ)("div",{ref:ev,children:/*#__PURE__*/(0,s/* .jsx */.tZ)(y/* ["default"] */.Z,{when:!S,fallback:/*#__PURE__*/(0,s/* .jsx */.tZ)("div",{css:ee.emptyMedia({hasVideoSource:true}),children:/*#__PURE__*/(0,s/* .jsx */.tZ)(p/* .LoadingOverlay */.fz,{})}),children:/*#__PURE__*/(0,s/* .jsx */.tZ)(y/* ["default"] */.Z,{when:ek(),fallback:/*#__PURE__*/(0,s/* .jsxs */.BX)("div",{css:ee.emptyMedia({hasVideoSource:true}),children:[/*#__PURE__*/(0,s/* .jsx */.tZ)(y/* ["default"] */.Z,{when:F.includes("html5"),children:/*#__PURE__*/(0,s/* .jsx */.tZ)(v/* ["default"] */.Z,{"data-cy":"upload-media",size:"small",variant:"secondary",icon:/*#__PURE__*/(0,s/* .jsx */.tZ)(h/* ["default"] */.Z,{name:"monitorPlay",height:24,width:24}),onClick:()=>{ex("video")},children:_})}),/*#__PURE__*/(0,s/* .jsx */.tZ)(y/* ["default"] */.Z,{when:F.filter(e=>e!=="html5").length>0,children:/*#__PURE__*/(0,s/* .jsx */.tZ)(y/* ["default"] */.Z,{when:!F.includes("html5"),fallback:/*#__PURE__*/(0,s/* .jsx */.tZ)("button",{"data-cy":"add-from-url",type:"button",css:ee.urlButton,onClick:()=>{eu(e=>!e)},children:(0,c.__)("Add from URL","tutor")}),children:/*#__PURE__*/(0,s/* .jsx */.tZ)(v/* ["default"] */.Z,{"data-cy":"add-from-url",size:"small",variant:"secondary",icon:/*#__PURE__*/(0,s/* .jsx */.tZ)(h/* ["default"] */.Z,{name:"plusSquareBrand",height:24,width:24}),onClick:()=>{eu(e=>!e)},children:(0,c.__)("Add from URL","tutor")})})}),/*#__PURE__*/(0,s/* .jsx */.tZ)(y/* ["default"] */.Z,{when:F.includes("html5"),children:/*#__PURE__*/(0,s/* .jsx */.tZ)("p",{css:ee.infoTexts,children:w})})]}),children:()=>{var e;return/*#__PURE__*/(0,s/* .jsxs */.BX)("div",{css:ee.previewWrapper,"data-cy":"media-preview",children:[/*#__PURE__*/(0,s/* .jsxs */.BX)("div",{css:ee.videoInfoWrapper,children:[/*#__PURE__*/(0,s/* .jsxs */.BX)("div",{css:ee.videoInfoCard,children:[/*#__PURE__*/(0,s/* .jsx */.tZ)(h/* ["default"] */.Z,{name:q[ew===null||ew===void 0?void 0:ew.source]||"video",height:36,width:36}),/*#__PURE__*/(0,s/* .jsx */.tZ)("div",{css:ee.videoInfo,children:/*#__PURE__*/(0,s/* .jsx */.tZ)("div",{css:ee.videoInfoTitle,children:/*#__PURE__*/(0,s/* .jsx */.tZ)("div",{css:T/* .styleUtils.text.ellipsis */.i.text.ellipsis(1),children:Y.includes((ew===null||ew===void 0?void 0:ew.source)||"")?ew===null||ew===void 0?void 0:ew["source_".concat(ew.source)]:(e=j.find(e=>e.value===(ew===null||ew===void 0?void 0:ew.source)))===null||e===void 0?void 0:e.label})})})]}),/*#__PURE__*/(0,s/* .jsxs */.BX)("div",{css:ee.actionButtons,children:[/*#__PURE__*/(0,s/* .jsx */.tZ)(y/* ["default"] */.Z,{when:ey!=="html5",children:/*#__PURE__*/(0,s/* .jsx */.tZ)("button",{type:"button",css:T/* .styleUtils.actionButton */.i.actionButton,onClick:()=>{eu(true)},children:/*#__PURE__*/(0,s/* .jsx */.tZ)(h/* ["default"] */.Z,{name:"edit",height:24,width:24})})}),/*#__PURE__*/(0,s/* .jsx */.tZ)("button",{"data-cy":"remove-video",type:"button",css:T/* .styleUtils.actionButton */.i.actionButton,onClick:()=>{eZ("video")},children:/*#__PURE__*/(0,s/* .jsx */.tZ)(h/* ["default"] */.Z,{name:"cross",height:24,width:24})})]})]}),/*#__PURE__*/(0,s/* .jsx */.tZ)("div",{css:ee.imagePreview({hasImageInput:Y.includes((ew===null||ew===void 0?void 0:ew.source)||"")}),children:/*#__PURE__*/(0,s/* .jsxs */.BX)(y/* ["default"] */.Z,{when:Y.includes((ew===null||ew===void 0?void 0:ew.source)||""),fallback:/*#__PURE__*/(0,s/* .jsx */.tZ)("div",{css:ee.urlData,children:er.watch("videoUrl")}),children:[/*#__PURE__*/(0,s/* .jsx */.tZ)(f/* ["default"] */.Z,{value:ew?{id:Number(ew.poster)||0,url:ew.poster_url||el,title:""}:null,loading:eo,isClearAble:!!(ew===null||ew===void 0?void 0:ew.poster),disabled:["vimeo","youtube"].includes((ew===null||ew===void 0?void 0:ew.source)||""),uploadHandler:()=>ex("poster"),clearHandler:()=>eZ("poster"),buttonText:(0,c.__)("Upload Thumbnail","tutor"),infoText:(0,c.__)("Upload a thumbnail image for your video","tutor"),emptyImageCss:ee.thumbImage,previewImageCss:ee.thumbImage,overlayCss:ee.thumbImage,replaceButtonText:(0,c.__)("Replace Thumbnail","tutor")}),/*#__PURE__*/(0,s/* .jsx */.tZ)(y/* ["default"] */.Z,{when:ei.hours>0||ei.minutes>0||ei.seconds>0,children:/*#__PURE__*/(0,s/* .jsxs */.BX)("div",{css:ee.duration,children:[ei.hours>0&&"".concat(ei.hours,"h")," ",ei.minutes,"m ",ei.seconds,"s"]})})]})})]})}})})})}}),/*#__PURE__*/(0,s/* .jsx */.tZ)(k/* .Portal */.h,{isOpen:ed,onClickOutside:()=>eu(false),onEscape:()=>eu(false),animationType:x/* .AnimationType.fadeIn */.ru.fadeIn,children:/*#__PURE__*/(0,s/* .jsx */.tZ)("div",{ref:ef,css:[ee.popover,{[m/* .isRTL */.dZ?"right":"left"]:ep.left,top:($=ev.current)===null||$===void 0?void 0:$.getBoundingClientRect().top,maxWidth:(et=ev.current)===null||et===void 0?void 0:et.offsetWidth}],children:/*#__PURE__*/(0,s/* .jsxs */.BX)("div",{css:ee.popoverContent,children:[/*#__PURE__*/(0,s/* .jsx */.tZ)(u/* .Controller */.Qr,{control:er.control,name:"videoSource",rules:(0,o._)({},(0,I/* .requiredRule */.n0)()),render:e=>{return/*#__PURE__*/(0,s/* .jsx */.tZ)(P/* ["default"] */.Z,(0,a._)((0,o._)({},e),{options:X,disabled:j.length<=1,placeholder:(0,c.__)("Select source","tutor"),hideCaret:j.length<=1}))}}),/*#__PURE__*/(0,s/* .jsx */.tZ)(u/* .Controller */.Qr,{control:er.control,name:"videoUrl",rules:(0,a._)((0,o._)({},(0,I/* .requiredRule */.n0)()),{validate:eD}),render:e=>{return/*#__PURE__*/(0,s/* .jsx */.tZ)(R/* ["default"] */.Z,(0,a._)((0,o._)({},e),{inputCss:/*#__PURE__*/(0,l/* .css */.iv)("border-style:dashed;"),rows:2,placeholder:Q[ey]||(0,c.__)("Paste Here","tutor")}))}}),/*#__PURE__*/(0,s/* .jsxs */.BX)("div",{css:ee.popoverButtonWrapper,children:[/*#__PURE__*/(0,s/* .jsx */.tZ)(v/* ["default"] */.Z,{variant:"text",size:"small",onClick:()=>{eu(false)},children:(0,c.__)("Cancel","tutor")}),/*#__PURE__*/(0,s/* .jsx */.tZ)(v/* ["default"] */.Z,{"data-cy":"submit-url",variant:"secondary",size:"small",onClick:er.handleSubmit(eC),children:(0,c.__)("Ok","tutor")})]})]})})})]})};/* ESM default export */const $=(0,w/* .withVisibilityControl */.v)(K);var ee={emptyMediaWrapper:/*#__PURE__*/(0,l/* .css */.iv)(T/* .styleUtils.display.flex */.i.display.flex("column"),";gap:",b/* .spacing["4"] */.W0["4"],";label{",_/* .typography.caption */.c.caption(),";color:",b/* .colorTokens.text.title */.Jv.text.title,";}"),emptyMedia:e=>{var{hasVideoSource:t=false}=e;return/*#__PURE__*/(0,l/* .css */.iv)("width:100%;height:164px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:",b/* .spacing["8"] */.W0["8"],";border:1px dashed ",b/* .colorTokens.stroke.border */.Jv.stroke.border,";border-radius:",b/* .borderRadius["8"] */.E0["8"],";background-color:",b/* .colorTokens.background.status.warning */.Jv.background.status.warning,";",t&&(0,l/* .css */.iv)(U(),b/* .colorTokens.bg.white */.Jv.bg.white))},infoTexts:/*#__PURE__*/(0,l/* .css */.iv)(_/* .typography.tiny */.c.tiny(),";color:",b/* .colorTokens.text.subdued */.Jv.text.subdued,";"),warningText:/*#__PURE__*/(0,l/* .css */.iv)(T/* .styleUtils.display.flex */.i.display.flex(),";align-items:center;gap:",b/* .spacing["4"] */.W0["4"],";",_/* .typography.caption */.c.caption(),";color:",b/* .colorTokens.text.warning */.Jv.text.warning,";"),selectFromSettingsButton:/*#__PURE__*/(0,l/* .css */.iv)("background:",b/* .colorTokens.bg.white */.Jv.bg.white,";"),urlData:/*#__PURE__*/(0,l/* .css */.iv)(_/* .typography.caption */.c.caption(),";",T/* .styleUtils.display.flex */.i.display.flex("column"),";padding:",b/* .spacing["8"] */.W0["8"]," ",b/* .spacing["12"] */.W0["12"],";gap:",b/* .spacing["8"] */.W0["8"],";word-break:break-all;"),previewWrapper:/*#__PURE__*/(0,l/* .css */.iv)("width:100%;height:100%;border:1px solid ",b/* .colorTokens.stroke["default"] */.Jv.stroke["default"],";border-radius:",b/* .borderRadius["8"] */.E0["8"],";overflow:hidden;background-color:",b/* .colorTokens.bg.white */.Jv.bg.white,";"),videoInfoWrapper:/*#__PURE__*/(0,l/* .css */.iv)(T/* .styleUtils.display.flex */.i.display.flex(),";justify-content:space-between;align-items:center;gap:",b/* .spacing["20"] */.W0["20"],";padding:",b/* .spacing["8"] */.W0["8"]," ",b/* .spacing["12"] */.W0["12"],";"),videoInfoCard:/*#__PURE__*/(0,l/* .css */.iv)(T/* .styleUtils.display.flex */.i.display.flex(),";align-items:center;gap:",b/* .spacing["8"] */.W0["8"],";svg{flex-shrink:0;color:",b/* .colorTokens.icon.hover */.Jv.icon.hover,";}"),videoInfo:/*#__PURE__*/(0,l/* .css */.iv)(T/* .styleUtils.display.flex */.i.display.flex("column"),";gap:",b/* .spacing["4"] */.W0["4"],";"),videoInfoTitle:/*#__PURE__*/(0,l/* .css */.iv)(T/* .styleUtils.display.flex */.i.display.flex(),";",_/* .typography.caption */.c.caption("medium"),"    word-break:break-all;"),imagePreview:e=>{var{hasImageInput:t}=e;return/*#__PURE__*/(0,l/* .css */.iv)("width:100%;max-height:168px;position:relative;overflow:hidden;background-color:",b/* .colorTokens.background["default"] */.Jv.background["default"],";",!t&&(0,l/* .css */.iv)(z(),T/* .styleUtils.overflowYAuto */.i.overflowYAuto),";scrollbar-gutter:auto;&:hover{[data-hover-buttons-wrapper]{opacity:1;}}")},duration:/*#__PURE__*/(0,l/* .css */.iv)(_/* .typography.tiny */.c.tiny(),";position:absolute;bottom:",b/* .spacing["12"] */.W0["12"],";right:",b/* .spacing["12"] */.W0["12"],";background-color:rgba(0,0,0,0.5);color:",b/* .colorTokens.text.white */.Jv.text.white,";padding:",b/* .spacing["4"] */.W0["4"]," ",b/* .spacing["8"] */.W0["8"],";border-radius:",b/* .borderRadius["6"] */.E0["6"],";pointer-events:none;"),thumbImage:/*#__PURE__*/(0,l/* .css */.iv)("border-radius:0;border:none;"),urlButton:/*#__PURE__*/(0,l/* .css */.iv)(T/* .styleUtils.resetButton */.i.resetButton,";",_/* .typography.small */.c.small("medium"),";color:",b/* .colorTokens.text.brand */.Jv.text.brand,";border-radius:",b/* .borderRadius["2"] */.E0["2"],";padding:0 ",b/* .spacing["4"] */.W0["4"],";margin-bottom:",b/* .spacing["8"] */.W0["8"],";&:focus,&:active,&:hover{background:none;color:",b/* .colorTokens.text.brand */.Jv.text.brand,";}&:focus-visible{outline:2px solid ",b/* .colorTokens.stroke.brand */.Jv.stroke.brand,";outline-offset:1px;}"),actionButtons:/*#__PURE__*/(0,l/* .css */.iv)(T/* .styleUtils.display.flex */.i.display.flex(),";gap:",b/* .spacing["4"] */.W0["4"],";"),popover:/*#__PURE__*/(0,l/* .css */.iv)("position:absolute;width:100%;z-index:",b/* .zIndex.dropdown */.W5.dropdown,";background-color:",b/* .colorTokens.bg.white */.Jv.bg.white,";border-radius:",b/* .borderRadius.card */.E0.card,";box-shadow:",b/* .shadow.popover */.AF.popover,";"),popoverContent:/*#__PURE__*/(0,l/* .css */.iv)(T/* .styleUtils.display.flex */.i.display.flex("column"),";gap:",b/* .spacing["12"] */.W0["12"],";padding:",b/* .spacing["16"] */.W0["16"],";"),popoverButtonWrapper:/*#__PURE__*/(0,l/* .css */.iv)(T/* .styleUtils.display.flex */.i.display.flex(),";gap:",b/* .spacing["8"] */.W0["8"],";justify-content:flex-end;")}},3960:function(e,t,r){r.d(t,{Z:()=>R});/* ESM import */var n=r(76150);/* ESM import */var o=r(58865);/* ESM import */var a=r(35944);/* ESM import */var i=r(70917);/* ESM import */var s=r(38003);/* ESM import */var l=/*#__PURE__*/r.n(s);/* ESM import */var c=r(86138);/* ESM import */var d=/*#__PURE__*/r.n(c);/* ESM import */var u=r(87363);/* ESM import */var v=/*#__PURE__*/r.n(u);/* ESM import */var f=r(87056);/* ESM import */var p=r(19398);/* ESM import */var h=r(2613);/* ESM import */var g=r(26815);/* ESM import */var m=r(58982);/* ESM import */var b=r(85746);/* ESM import */var _=r(54273);/* ESM import */var y=r(6293);/* ESM import */var w=r(63260);/* ESM import */var x=r(31342);/* ESM import */var Z=r(99678);/* ESM import */var k=r(34039);/* ESM import */var C=r(74053);/* ESM import */var D=r(60860);/* ESM import */var E=r(36352);/* ESM import */var S=r(17106);/* ESM import */var W=r(29535);/* ESM import */var M=r(14578);/* ESM import */var T=r(43567);/* ESM import */var B=r(84978);function I(){var e=(0,o._)(["\n      overflow: hidden;\n      border-radius: ",";\n    "]);I=function t(){return e};return e}var N;var O={droip:"droipColorized",elementor:"elementorColorized",gutenberg:"gutenbergColorized",divi:"diviColorized"};var A=!!k/* .tutorConfig.tutor_pro_url */.y.tutor_pro_url;var L=(N=k/* .tutorConfig.settings */.y.settings)===null||N===void 0?void 0:N.chatgpt_key_exist;var J=e=>{var{editorUsed:t,onBackToWPEditorClick:r,onCustomEditorButtonClick:o}=e;var{showModal:i}=(0,w/* .useModal */.d)();var[l,c]=(0,u.useState)("");return/*#__PURE__*/(0,a/* .jsxs */.BX)("div",{css:U.editorOverlay,children:[/*#__PURE__*/(0,a/* .jsx */.tZ)(S/* ["default"] */.Z,{when:t.name!=="gutenberg",children:/*#__PURE__*/(0,a/* .jsx */.tZ)(p/* ["default"] */.Z,{variant:"tertiary",size:"small",buttonCss:U.editWithButton,icon:/*#__PURE__*/(0,a/* .jsx */.tZ)(g/* ["default"] */.Z,{name:"arrowLeft",height:24,width:24}),loading:l==="back_to",onClick:()=>(0,n._)(function*(){var{action:e}=yield i({component:y/* ["default"] */.Z,props:{title:(0,s.__)("Back to WordPress Editor","tutor"),description:/*#__PURE__*/(0,a/* .jsx */.tZ)(f/* ["default"] */.Z,{type:"warning",icon:"warning",children:(0,s.__)("Warning: Switching to the WordPress default editor may cause issues with your current layout, design, and content.","tutor")}),confirmButtonText:(0,s.__)("Confirm","tutor"),confirmButtonVariant:"primary"},depthIndex:D/* .zIndex.highest */.W5.highest});if(e==="CONFIRM"){try{c("back_to");yield r===null||r===void 0?void 0:r(t.name)}finally{c("")}}})(),children:(0,s.__)("Back to WordPress Editor","tutor")})}),/*#__PURE__*/(0,a/* .jsx */.tZ)(p/* ["default"] */.Z,{variant:"tertiary",size:"small",buttonCss:U.editWithButton,loading:l==="edit_with",icon:O[t.name]&&/*#__PURE__*/(0,a/* .jsx */.tZ)(g/* ["default"] */.Z,{name:O[t.name],height:24,width:24}),onClick:()=>(0,n._)(function*(){try{c("edit_with");yield o===null||o===void 0?void 0:o(t);window.location.href=t.link}finally{c("")}})(),children:/* translators: %s is the editor name */(0,s.sprintf)((0,s.__)("Edit with %s","tutor"),t===null||t===void 0?void 0:t.label)})]})};var P=e=>{var{label:t,field:r,fieldState:o,disabled:i,readOnly:l,loading:c,placeholder:d,helpText:v,onChange:f,generateWithAi:p=false,onClickAiButton:y,hasCustomEditorSupport:I=false,isMinimal:N=false,hideMediaButtons:P=false,hideQuickTags:R=false,editors:z=[],editorUsed:j={name:"classic",label:"Classic Editor",link:""},isMagicAi:X=false,autoFocus:F=false,onCustomEditorButtonClick:Y,onBackToWPEditorClick:Q,onFullScreenChange:q,min_height:H,max_height:V,toolbar1:G,toolbar2:K}=e;var $,ee,et,er,en;var{showModal:eo}=(0,w/* .useModal */.d)();var ea=(($=k/* .tutorConfig.settings */.y.settings)===null||$===void 0?void 0:$.hide_admin_bar_for_users)==="off";var ei=(et=k/* .tutorConfig.current_user */.y.current_user)===null||et===void 0?void 0:(ee=et.roles)===null||ee===void 0?void 0:ee.includes(C/* .TutorRoles.ADMINISTRATOR */.er.ADMINISTRATOR);var es=(en=k/* .tutorConfig.current_user */.y.current_user)===null||en===void 0?void 0:(er=en.roles)===null||er===void 0?void 0:er.includes(C/* .TutorRoles.TUTOR_INSTRUCTOR */.er.TUTOR_INSTRUCTOR);var[el,ec]=(0,u.useState)(null);var ed=z.filter(e=>ei||es&&ea||e.name==="droip");var eu=I&&ed.length>0;var ev=eu&&j.name!=="classic";var ef=()=>{if(!A){eo({component:x/* ["default"] */.Z,props:{image:T,image2x:M}})}else if(!L){eo({component:Z/* ["default"] */.Z,props:{image:T,image2x:M}})}else{eo({component:_/* ["default"] */.Z,isMagicAi:true,props:{title:(0,s.__)("AI Studio","tutor"),icon:/*#__PURE__*/(0,a/* .jsx */.tZ)(g/* ["default"] */.Z,{name:"magicAiColorize",width:24,height:24}),characters:1e3,field:r,fieldState:o,is_html:true}});y===null||y===void 0?void 0:y()}};var ep=/*#__PURE__*/(0,a/* .jsxs */.BX)("div",{css:U.editorLabel,children:[/*#__PURE__*/(0,a/* .jsxs */.BX)("span",{css:U.labelWithAi,children:[t,/*#__PURE__*/(0,a/* .jsx */.tZ)(S/* ["default"] */.Z,{when:p,children:/*#__PURE__*/(0,a/* .jsx */.tZ)("button",{type:"button",css:U.aiButton,onClick:ef,children:/*#__PURE__*/(0,a/* .jsx */.tZ)(g/* ["default"] */.Z,{name:"magicAiColorize",width:32,height:32})})})]}),/*#__PURE__*/(0,a/* .jsxs */.BX)("div",{css:U.editorsButtonWrapper,children:[/*#__PURE__*/(0,a/* .jsx */.tZ)("span",{children:(0,s.__)("Edit with","tutor")}),/*#__PURE__*/(0,a/* .jsx */.tZ)("div",{css:U.customEditorButtons,children:/*#__PURE__*/(0,a/* .jsx */.tZ)(E/* ["default"] */.Z,{each:ed,children:e=>/*#__PURE__*/(0,a/* .jsx */.tZ)(m/* ["default"] */.Z,{content:e.label,delay:200,children:/*#__PURE__*/(0,a/* .jsxs */.BX)("button",{type:"button",css:U.customEditorButton,disabled:el===e.name,onClick:()=>(0,n._)(function*(){try{ec(e.name);yield Y===null||Y===void 0?void 0:Y(e);window.location.href=e.link}finally{ec(null)}})(),children:[/*#__PURE__*/(0,a/* .jsx */.tZ)(S/* ["default"] */.Z,{when:el===e.name,children:/*#__PURE__*/(0,a/* .jsx */.tZ)(h/* .LoadingOverlay */.fz,{})}),/*#__PURE__*/(0,a/* .jsx */.tZ)(g/* ["default"] */.Z,{name:O[e.name],height:24,width:24})]})},e.name)})})]})]});return/*#__PURE__*/(0,a/* .jsx */.tZ)(B/* ["default"] */.Z,{label:eu?ep:t,field:r,fieldState:o,disabled:i,readOnly:l,placeholder:d,helpText:v,isMagicAi:X,generateWithAi:!eu&&p,onClickAiButton:ef,replaceEntireLabel:eu,children:()=>{if(c){return/*#__PURE__*/(0,a/* .jsx */.tZ)("div",{css:W/* .styleUtils.flexCenter */.i.flexCenter(),children:/*#__PURE__*/(0,a/* .jsx */.tZ)(h/* ["default"] */.ZP,{size:20,color:D/* .colorTokens.icon["default"] */.Jv.icon["default"]})})}var e;return/*#__PURE__*/(0,a/* .jsxs */.BX)("div",{css:U.wrapper({isOverlayVisible:ev}),children:[/*#__PURE__*/(0,a/* .jsx */.tZ)(S/* ["default"] */.Z,{when:ev,children:/*#__PURE__*/(0,a/* .jsx */.tZ)(J,{editorUsed:j,onBackToWPEditorClick:Q,onCustomEditorButtonClick:Y})}),/*#__PURE__*/(0,a/* .jsx */.tZ)(b/* ["default"] */.Z,{value:(e=r.value)!==null&&e!==void 0?e:"",onChange:e=>{r.onChange(e);if(f){f(e)}},isMinimal:N,hideMediaButtons:P,hideQuickTags:R,autoFocus:F,onFullScreenChange:q,readonly:l,min_height:H,max_height:V,toolbar1:G,toolbar2:K})]})}})};/* ESM default export */const R=P;var U={wrapper:e=>{var{isOverlayVisible:t=false}=e;return/*#__PURE__*/(0,i/* .css */.iv)("position:relative;",t&&(0,i/* .css */.iv)(I(),D/* .borderRadius["6"] */.E0["6"]))},editorLabel:/*#__PURE__*/(0,i/* .css */.iv)("display:flex;width:100%;align-items:center;justify-content:space-between;"),aiButton:/*#__PURE__*/(0,i/* .css */.iv)(W/* .styleUtils.resetButton */.i.resetButton,";",W/* .styleUtils.flexCenter */.i.flexCenter(),";width:32px;height:32px;border-radius:",D/* .borderRadius["4"] */.E0["4"],";:disabled{cursor:not-allowed;}&:focus-visible{outline:2px solid ",D/* .colorTokens.stroke.brand */.Jv.stroke.brand,";}"),labelWithAi:/*#__PURE__*/(0,i/* .css */.iv)("display:flex;align-items:center;gap:",D/* .spacing["4"] */.W0["4"],";"),editorsButtonWrapper:/*#__PURE__*/(0,i/* .css */.iv)("display:flex;align-items:center;gap:",D/* .spacing["8"] */.W0["8"],";color:",D/* .colorTokens.text.hints */.Jv.text.hints,";"),customEditorButtons:/*#__PURE__*/(0,i/* .css */.iv)("display:flex;align-items:center;gap:",D/* .spacing["4"] */.W0["4"],";"),customEditorButton:/*#__PURE__*/(0,i/* .css */.iv)(W/* .styleUtils.resetButton */.i.resetButton,"    display:flex;align-items:center;justify-content:center;position:relative;border-radius:",D/* .borderRadius.circle */.E0.circle,";&:focus-visible{outline:2px solid ",D/* .colorTokens.stroke.brand */.Jv.stroke.brand,";outline-offset:1px;}"),editorOverlay:/*#__PURE__*/(0,i/* .css */.iv)("position:absolute;height:100%;width:100%;",W/* .styleUtils.flexCenter */.i.flexCenter(),";gap:",D/* .spacing["8"] */.W0["8"],";background-color:",d()(D/* .colorTokens.background.modal */.Jv.background.modal,.6),";border-radius:",D/* .borderRadius["6"] */.E0["6"],";z-index:",D/* .zIndex.positive */.W5.positive,";backdrop-filter:blur(8px);"),editWithButton:/*#__PURE__*/(0,i/* .css */.iv)("background:",D/* .colorTokens.action.secondary["default"] */.Jv.action.secondary["default"],";color:",D/* .colorTokens.text.primary */.Jv.text.primary,";box-shadow:inset 0 -1px 0 0 ",d()("#1112133D",.24),",0 1px 0 0 ",d()("#1112133D",.8),";")}},33267:function(e,t,r){r.d(t,{R:()=>c});/* ESM import */var n=r(35944);/* ESM import */var o=r(60860);/* ESM import */var a=r(75361);/* ESM import */var i=r(70917);/* ESM import */var s=r(87363);/* ESM import */var l=/*#__PURE__*/r.n(s);var c=/*#__PURE__*/l().forwardRef((e,t)=>{var{src:r,width:o,height:i,brushSize:l,trackStack:c,pointer:u,setTrackStack:v,setPointer:f}=e;var[p,h]=(0,s.useState)(false);var[g,m]=(0,s.useState)({x:0,y:0});var b=(0,s.useRef)(null);var _=e=>{var{canvas:r,context:n}=(0,a/* .getCanvas */.o_)(t);if(!r||!n){return}var o=r.getBoundingClientRect();var i=(e.clientX-o.left)*(r.width/o.width);var s=(e.clientY-o.top)*(r.height/o.height);n.globalCompositeOperation="destination-out";n.beginPath();n.moveTo(i,s);h(true);m({x:i,y:s})};var y=e=>{var{canvas:r,context:n}=(0,a/* .getCanvas */.o_)(t);if(!r||!n||!b.current){return}var o=r.getBoundingClientRect();var i={x:(e.clientX-o.left)*(r.width/o.width),y:(e.clientY-o.top)*(r.height/o.height)};if(p){(0,a/* .drawPath */.MC)(n,i)}b.current.style.left="".concat(i.x,"px");b.current.style.top="".concat(i.y,"px")};var w=e=>{var{canvas:r,context:n}=(0,a/* .getCanvas */.o_)(t);if(!n||!r){return}h(false);n.closePath();var o=r.getBoundingClientRect();var i={x:(e.clientX-o.left)*(r.width/o.width),y:(e.clientY-o.top)*(r.height/o.height)};// Check if the mouse is just clicked but not drag for drawing a path, then draw a circle
if((0,a/* .calculateCartesianDistance */.jo)(g,i)===0){(0,a/* .drawPath */.MC)(n,{x:i.x+1,y:i.y+1})}v(e=>{var t=e.slice(0,u);return[...t,n.getImageData(0,0,1024,1024)]});f(e=>e+1)};var x=()=>{var{canvas:e,context:n}=(0,a/* .getCanvas */.o_)(t);if(!e||!n){return}var o=new Image;o.src=r;o.onload=()=>{n.clearRect(0,0,e.width,e.height);var t=o.width/o.height;var r=e.width/e.height;var a;var i;if(r>t){i=e.height;a=e.height*t}else{a=e.width;i=e.width/t}var s=(e.width-a)/2;var l=(e.height-i)/2;n.drawImage(o,s,l,a,i);if(c.length===0){v([n.getImageData(0,0,e.width,e.height)])}};n.lineJoin="round";n.lineCap="round"};var Z=()=>{if(!b.current){return}document.body.style.cursor="none";b.current.style.display="block"};var k=()=>{if(!b.current){return}document.body.style.cursor="auto";b.current.style.display="none"};(0,s.useEffect)(()=>{x();// eslint-disable-next-line react-hooks/exhaustive-deps
},[]);return/*#__PURE__*/(0,n/* .jsxs */.BX)("div",{css:d.wrapper,children:[/*#__PURE__*/(0,n/* .jsx */.tZ)("canvas",{ref:t,width:o,height:i,onMouseDown:_,onMouseMove:y,onMouseUp:w,onMouseEnter:Z,onMouseLeave:k}),/*#__PURE__*/(0,n/* .jsx */.tZ)("div",{ref:b,css:d.customCursor(l)})]})});var d={wrapper:/*#__PURE__*/(0,i/* .css */.iv)("position:relative;"),customCursor:e=>/*#__PURE__*/(0,i/* .css */.iv)("position:absolute;width:",e,"px;height:",e,"px;border-radius:",o/* .borderRadius.circle */.E0.circle,";background:linear-gradient(\n      73.09deg,rgba(255,150,69,0.4) 18.05%,rgba(255,100,113,0.4) 30.25%,rgba(207,110,189,0.4) 55.42%,rgba(164,119,209,0.4) 71.66%,rgba(62,100,222,0.4) 97.9%\n    );border:3px solid ",o/* .colorTokens.stroke.white */.Jv.stroke.white,";pointer-events:none;transform:translate(-50%,-50%);z-index:",o/* .zIndex.highest */.W5.highest,";display:none;")}},68439:function(e,t,r){r.d(t,{$h:()=>v,DK:()=>p,_$:()=>h});/* ESM import */var n=r(7409);/* ESM import */var o=r(99282);/* ESM import */var a=r(35944);/* ESM import */var i=r(37861);/* ESM import */var s=r(38003);/* ESM import */var l=/*#__PURE__*/r.n(s);/* ESM import */var c=r(87363);/* ESM import */var d=/*#__PURE__*/r.n(c);/* ESM import */var u=r(52293);var v=[(0,s.__)("A serene classroom setting with books and a chalkboard","tutor"),(0,s.__)("An abstract representation of innovation and creativity","tutor"),(0,s.__)("A vibrant workspace with a laptop and coffee cup","tutor"),(0,s.__)("A modern design with digital learning icons","tutor"),(0,s.__)("A futuristic cityscape with a glowing pathway","tutor"),(0,s.__)("A peaceful nature scene with soft colors","tutor"),(0,s.__)("A professional boardroom with sleek visuals","tutor"),(0,s.__)("A stack of books with warm, inviting lighting","tutor"),(0,s.__)("A dynamic collage of technology and education themes","tutor"),(0,s.__)("A bold and minimalistic design with striking colors","tutor")];// eslint-disable-next-line @typescript-eslint/no-explicit-any
var f=/*#__PURE__*/d().createContext(null);var p=()=>{var e=(0,c.useContext)(f);if(!e){throw new Error("useMagicImageGeneration must be used within MagicImageGenerationProvider.")}return e};var h=e=>{var{children:t,field:r,fieldState:s,onCloseModal:l}=e;var d=(0,i/* .useFormWithGlobalError */.O)({defaultValues:{prompt:"",style:"none"}});var[v,p]=(0,c.useState)("generation");var[h,g]=(0,c.useState)("");var[m,b]=(0,c.useState)([null,null,null,null]);var _=(0,c.useCallback)(e=>{p(e)},[]);return/*#__PURE__*/(0,a/* .jsx */.tZ)(f.Provider,{value:{state:v,onDropdownMenuChange:_,images:m,setImages:b,currentImage:h,setCurrentImage:g,field:r,fieldState:s,onCloseModal:l},children:/*#__PURE__*/(0,a/* .jsx */.tZ)(u/* .FormProvider */.RV,(0,o._)((0,n._)({},d),{children:t}))})}},59355:function(e,t,r){r.d(t,{E:()=>U});/* ESM import */var n=r(76150);/* ESM import */var o=r(7409);/* ESM import */var a=r(99282);/* ESM import */var i=r(35944);/* ESM import */var s=r(53052);/* ESM import */var l=r(26815);/* ESM import */var c=r(99308);/* ESM import */var d=r(3473);/* ESM import */var u=r(60860);/* ESM import */var v=r(76487);/* ESM import */var f=r(36352);/* ESM import */var p=r(17106);/* ESM import */var h=r(15287);/* ESM import */var g=r(56096);/* ESM import */var m=r(67149);/* ESM import */var b=r(41834);/* ESM import */var _=r(42336);/* ESM import */var y=r(79608);/* ESM import */var w=r(4359);/* ESM import */var x=r(88013);/* ESM import */var Z=r(53192);/* ESM import */var k=r(48366);/* ESM import */var C=r(39071);/* ESM import */var D=r(43666);/* ESM import */var E=r(46572);/* ESM import */var S=r(13985);/* ESM import */var W=r(29535);/* ESM import */var M=r(22456);/* ESM import */var T=r(70917);/* ESM import */var B=r(38003);/* ESM import */var I=/*#__PURE__*/r.n(B);/* ESM import */var N=r(87363);/* ESM import */var O=/*#__PURE__*/r.n(N);/* ESM import */var A=r(52293);/* ESM import */var L=r(68439);/* ESM import */var J=r(45019);/* ESM import */var P=r(95754);var R=[{label:(0,B.__)("None","tutor"),value:"none",image:Z},{label:(0,B.__)("Photo","tutor"),value:"photo",image:C},{label:(0,B.__)("Neon","tutor"),value:"neon",image:x},{label:(0,B.__)("3D","tutor"),value:"3d",image:g},{label:(0,B.__)("Painting","tutor"),value:"painting",image:k},{label:(0,B.__)("Sketch","tutor"),value:"sketch",image:E},{label:(0,B.__)("Concept","tutor"),value:"concept_art",image:b},{label:(0,B.__)("Illustration","tutor"),value:"illustration",image:w},{label:(0,B.__)("Dreamy","tutor"),value:"dreamy",image:_},{label:(0,B.__)("Filmic","tutor"),value:"filmic",image:y},{label:(0,B.__)("Retro","tutor"),value:"retrowave",image:D},{label:(0,B.__)("Black & White","tutor"),value:"black-and-white",image:m}];var U=()=>{var e=(0,A/* .useForm */.cI)({defaultValues:{style:"none",prompt:""}});var{images:t,setImages:r}=(0,L/* .useMagicImageGeneration */.DK)();var u=(0,h/* .useMagicImageGenerationMutation */.QL)();var{showToast:v}=(0,S/* .useToast */.p)();var[g,m]=(0,N.useState)(t.every(e=>e===null));var[b,_]=(0,N.useState)([false,false,false,false]);var y=e.watch("style");var w=e.watch("prompt");var x=!y||!w;var Z=t.some(M/* .isDefined */.$K);(0,N.useEffect)(()=>{if(u.isError){v({type:"danger",message:u.error.response.data.message})}// eslint-disable-next-line react-hooks/exhaustive-deps
},[u.isError]);(0,N.useEffect)(()=>{e.setFocus("prompt");// eslint-disable-next-line react-hooks/exhaustive-deps
},[]);return/*#__PURE__*/(0,i/* .jsxs */.BX)("form",{css:P/* .magicAIStyles.wrapper */.a.wrapper,onSubmit:e.handleSubmit(e=>(0,n._)(function*(){_([true,true,true,true]);m(false);try{yield Promise.all(Array.from({length:4}).map((t,n)=>{return u.mutateAsync(e).then(e=>{r(t=>{var r,o;var a=[...t];var i;a[n]=(i=(o=e.data.data)===null||o===void 0?void 0:(r=o[0])===null||r===void 0?void 0:r.b64_json)!==null&&i!==void 0?i:null;return a});_(e=>{var t=[...e];t[n]=false;return t})}).catch(e=>{_(e=>{var t=[...e];t[n]=false;return t});throw e})}))}catch(e){_([false,false,false,false]);m(true)}})()),children:[/*#__PURE__*/(0,i/* .jsx */.tZ)("div",{css:P/* .magicAIStyles.left */.a.left,children:/*#__PURE__*/(0,i/* .jsx */.tZ)(p/* ["default"] */.Z,{when:!g,fallback:/*#__PURE__*/(0,i/* .jsx */.tZ)(l/* ["default"] */.Z,{name:"magicAiPlaceholder",width:72,height:72}),children:/*#__PURE__*/(0,i/* .jsx */.tZ)("div",{css:z.images,children:/*#__PURE__*/(0,i/* .jsx */.tZ)(f/* ["default"] */.Z,{each:t,children:(e,t)=>{return/*#__PURE__*/(0,i/* .jsx */.tZ)(J/* .AiImageItem */.J,{src:e,loading:b[t],index:t},t)}})})})}),/*#__PURE__*/(0,i/* .jsxs */.BX)("div",{css:P/* .magicAIStyles.right */.a.right,children:[/*#__PURE__*/(0,i/* .jsxs */.BX)("div",{css:z.fields,children:[/*#__PURE__*/(0,i/* .jsxs */.BX)("div",{css:z.promptWrapper,children:[/*#__PURE__*/(0,i/* .jsx */.tZ)(A/* .Controller */.Qr,{control:e.control,name:"prompt",render:e=>/*#__PURE__*/(0,i/* .jsx */.tZ)(d/* ["default"] */.Z,(0,a._)((0,o._)({},e),{label:(0,B.__)("Visualize Your Course","tutor"),placeholder:(0,B.__)("Describe the image you want for your course thumbnail","tutor"),rows:4,isMagicAi:true,disabled:u.isPending,enableResize:false}))}),/*#__PURE__*/(0,i/* .jsxs */.BX)("button",{type:"button",css:z.inspireButton,onClick:()=>{var t=L/* .inspirationPrompts.length */.$h.length;var r=Math.floor(Math.random()*t);e.reset((0,a._)((0,o._)({},e.getValues()),{prompt:L/* .inspirationPrompts */.$h[r]}))},disabled:u.isPending,children:[/*#__PURE__*/(0,i/* .jsx */.tZ)(l/* ["default"] */.Z,{name:"bulbLine"}),(0,B.__)("Inspire Me","tutor")]})]}),/*#__PURE__*/(0,i/* .jsx */.tZ)(A/* .Controller */.Qr,{control:e.control,name:"style",render:e=>/*#__PURE__*/(0,i/* .jsx */.tZ)(c/* ["default"] */.Z,(0,a._)((0,o._)({},e),{label:(0,B.__)("Styles","tutor"),options:R,disabled:u.isPending}))})]}),/*#__PURE__*/(0,i/* .jsx */.tZ)("div",{css:P/* .magicAIStyles.rightFooter */.a.rightFooter,children:/*#__PURE__*/(0,i/* .jsxs */.BX)(s/* ["default"] */.Z,{type:"submit",disabled:u.isPending||x,children:[/*#__PURE__*/(0,i/* .jsx */.tZ)(l/* ["default"] */.Z,{name:Z?"reload":"magicAi",width:24,height:24}),Z?(0,B.__)("Generate Again","tutor"):(0,B.__)("Generate Now","tutor")]})})]})]})};var z={images:/*#__PURE__*/(0,T/* .css */.iv)("display:grid;grid-template-columns:repeat(2,minmax(150px,1fr));grid-template-rows:repeat(2,minmax(150px,1fr));gap:",u/* .spacing["12"] */.W0["12"],";align-self:start;padding:",u/* .spacing["24"] */.W0["24"],";width:100%;height:100%;> div{aspect-ratio:1 / 1;}"),fields:/*#__PURE__*/(0,T/* .css */.iv)("display:flex;flex-direction:column;gap:",u/* .spacing["12"] */.W0["12"],";"),promptWrapper:/*#__PURE__*/(0,T/* .css */.iv)("position:relative;textarea{padding-bottom:",u/* .spacing["40"] */.W0["40"]," !important;}"),inspireButton:/*#__PURE__*/(0,T/* .css */.iv)(W/* .styleUtils.resetButton */.i.resetButton,";",v/* .typography.small */.c.small(),";position:absolute;height:28px;bottom:",u/* .spacing["12"] */.W0["12"],";left:",u/* .spacing["12"] */.W0["12"],";border:1px solid ",u/* .colorTokens.stroke.brand */.Jv.stroke.brand,";border-radius:",u/* .borderRadius["4"] */.E0["4"],";display:flex;align-items:center;gap:",u/* .spacing["4"] */.W0["4"],";color:",u/* .colorTokens.text.brand */.Jv.text.brand,";padding-inline:",u/* .spacing["12"] */.W0["12"],";background-color:",u/* .colorTokens.background.white */.Jv.background.white,";&:hover{background-color:",u/* .colorTokens.background.brand */.Jv.background.brand,";color:",u/* .colorTokens.text.white */.Jv.text.white,";}&:focus-visible{outline:2px solid ",u/* .colorTokens.stroke.brand */.Jv.stroke.brand,";outline-offset:1px;}&:disabled{background-color:",u/* .colorTokens.background.disable */.Jv.background.disable,";color:",u/* .colorTokens.text.disable */.Jv.text.disable,";}")}},45019:function(e,t,r){r.d(t,{J:()=>W});/* ESM import */var n=r(76150);/* ESM import */var o=r(58865);/* ESM import */var a=r(35944);/* ESM import */var i=r(53052);/* ESM import */var s=r(26815);/* ESM import */var l=r(60860);/* ESM import */var c=r(76487);/* ESM import */var d=r(36352);/* ESM import */var u=r(54354);/* ESM import */var v=r(97669);/* ESM import */var f=r(15287);/* ESM import */var p=r(75361);/* ESM import */var h=r(29535);/* ESM import */var g=r(34403);/* ESM import */var m=r(70917);/* ESM import */var b=r(38003);/* ESM import */var _=/*#__PURE__*/r.n(b);/* ESM import */var y=r(87363);/* ESM import */var w=/*#__PURE__*/r.n(y);/* ESM import */var x=r(68439);function Z(){var e=(0,o._)(["\n      background-position: top left;\n    "]);Z=function t(){return e};return e}function k(){var e=(0,o._)(["\n      background-position: top right;\n      animation-delay: 0.5s;\n    "]);k=function t(){return e};return e}function C(){var e=(0,o._)(["\n      background-position: bottom left;\n      animation-delay: 1.5s;\n    "]);C=function t(){return e};return e}function D(){var e=(0,o._)(["\n      background-position: bottom right;\n      animation-delay: 1s;\n    "]);D=function t(){return e};return e}function E(){var e=(0,o._)(["\n      outline-color: ",";\n\n      [data-actions] {\n        opacity: 1;\n      }\n    "]);E=function t(){return e};return e}var S=[{label:(0,b.__)("Magic Fill","tutor"),value:"magic-fill",icon:/*#__PURE__*/(0,a/* .jsx */.tZ)(s/* ["default"] */.Z,{name:"magicWand",width:24,height:24})},// @TODO: will be implemented in the future
// {
//   label: __('Object eraser', 'tutor'),
//   value: 'magic-erase',
//   icon: <SVGIcon name="eraser" width={24} height={24} />,
// },
// {
//   label: __('Variations', 'tutor'),
//   value: 'variations',
//   icon: <SVGIcon name="reload" width={24} height={24} />,
// },
{label:(0,b.__)("Download","tutor"),value:"download",icon:/*#__PURE__*/(0,a/* .jsx */.tZ)(s/* ["default"] */.Z,{name:"download",width:24,height:24})}];var W=e=>{var{src:t,loading:r,index:o}=e;var l=(0,y.useRef)(null);var[c,h]=(0,y.useState)(false);var{onDropdownMenuChange:m,setCurrentImage:_,onCloseModal:w,field:Z}=(0,x/* .useMagicImageGeneration */.DK)();var k=(0,f/* .useStoreAIGeneratedImageMutation */.H9)();if(r||!t){return/*#__PURE__*/(0,a/* .jsx */.tZ)("div",{css:T.loader(o+1)})}return/*#__PURE__*/(0,a/* .jsxs */.BX)(a/* .Fragment */.HY,{children:[/*#__PURE__*/(0,a/* .jsxs */.BX)("div",{css:T.image({isActive:k.isPending}),children:[/*#__PURE__*/(0,a/* .jsx */.tZ)("img",{src:t,alt:(0,b.__)("Generated Image","tutor")}),/*#__PURE__*/(0,a/* .jsxs */.BX)("div",{"data-actions":true,children:[/*#__PURE__*/(0,a/* .jsx */.tZ)("div",{css:T.useButton,children:/*#__PURE__*/(0,a/* .jsxs */.BX)(i/* ["default"] */.Z,{variant:"primary",disabled:k.isPending,onClick:()=>(0,n._)(function*(){if(!t){return}var e=yield k.mutateAsync({image:t});if(e.data){Z.onChange(e.data);w()}})(),loading:k.isPending,children:[/*#__PURE__*/(0,a/* .jsx */.tZ)(s/* ["default"] */.Z,{name:"download",width:24,height:24}),(0,b.__)("Use This","tutor")]})}),/*#__PURE__*/(0,a/* .jsx */.tZ)(i/* ["default"] */.Z,{variant:"primary",size:"icon",css:T.threeDots,ref:l,onClick:()=>h(true),children:/*#__PURE__*/(0,a/* .jsx */.tZ)(s/* ["default"] */.Z,{name:"threeDotsVertical",width:24,height:24})})]})]}),/*#__PURE__*/(0,a/* .jsx */.tZ)(v/* ["default"] */.Z,{triggerRef:l,isOpen:c,closePopover:()=>{h(false)},animationType:u/* .AnimationType.slideDown */.ru.slideDown,maxWidth:"160px",children:/*#__PURE__*/(0,a/* .jsx */.tZ)("div",{css:T.dropdownOptions,children:/*#__PURE__*/(0,a/* .jsx */.tZ)(d/* ["default"] */.Z,{each:S,children:(e,r)=>/*#__PURE__*/(0,a/* .jsxs */.BX)("button",{type:"button",css:T.dropdownItem,onClick:()=>{switch(e.value){case"magic-fill":{_(t);m(e.value);break}case"download":{var r="".concat((0,g/* .nanoid */.x0)(),".png");(0,p/* .downloadBase64Image */.Lp)(t,r);break}default:break}h(false)},children:[e.icon,e.label]},r)})})})]})};var M=/*#__PURE__*/(0,m/* .keyframes */.F4)("		0%{opacity:0.3;}25%{opacity:0.5;}50%{opacity:0.7;}75%{opacity:0.5;}100%{opacity:0.3;}");var T={loader:e=>/*#__PURE__*/(0,m/* .css */.iv)("border-radius:",l/* .borderRadius["12"] */.E0["12"],";background:linear-gradient(\n      73.09deg,#ff9645 18.05%,#ff6471 30.25%,#cf6ebd 55.42%,#a477d1 71.66%,#3e64de 97.9%\n    );position:relative;width:100%;height:100%;background-size:612px 612px;opacity:0.3;transition:opacity 0.5s ease;animation:",M," 2s linear infinite;",e===1&&(0,m/* .css */.iv)(Z())," ",e===2&&(0,m/* .css */.iv)(k()),"		",e===3&&(0,m/* .css */.iv)(C()),"		",e===4&&(0,m/* .css */.iv)(D())),image:e=>{var{isActive:t}=e;return/*#__PURE__*/(0,m/* .css */.iv)("width:100%;height:100%;overflow:hidden;border-radius:",l/* .borderRadius["12"] */.E0["12"],";position:relative;outline:2px solid transparent;outline-offset:2px;transition:border-radius 0.3s ease;[data-actions]{opacity:0;transition:opacity 0.3s ease;}img{position:absolute;top:0;left:0;width:100%;height:100%;object-fit:cover;}",t&&(0,m/* .css */.iv)(E(),l/* .colorTokens.stroke.brand */.Jv.stroke.brand),"    &:hover,&:focus-within{outline-color:",l/* .colorTokens.stroke.brand */.Jv.stroke.brand,";[data-actions]{opacity:1;}}")},threeDots:/*#__PURE__*/(0,m/* .css */.iv)("position:absolute;top:",l/* .spacing["8"] */.W0["8"],";right:",l/* .spacing["8"] */.W0["8"],";border-radius:",l/* .borderRadius["4"] */.E0["4"],";"),useButton:/*#__PURE__*/(0,m/* .css */.iv)("position:absolute;left:50%;bottom:",l/* .spacing["12"] */.W0["12"],";transform:translateX(-50%);button{display:inline-flex;align-items:center;gap:",l/* .spacing["4"] */.W0["4"],";}"),dropdownOptions:/*#__PURE__*/(0,m/* .css */.iv)("display:flex;flex-direction:column;padding-block:",l/* .spacing["8"] */.W0["8"],";"),dropdownItem:/*#__PURE__*/(0,m/* .css */.iv)(c/* .typography.small */.c.small(),";",h/* .styleUtils.resetButton */.i.resetButton,";height:40px;display:flex;gap:",l/* .spacing["10"] */.W0["10"],";align-items:center;transition:background-color 0.3s ease;color:",l/* .colorTokens.text.title */.Jv.text.title,";padding-inline:",l/* .spacing["8"] */.W0["8"],";cursor:pointer;svg{color:",l/* .colorTokens.icon["default"] */.Jv.icon["default"],";}&:hover{background-color:",l/* .colorTokens.background.hover */.Jv.background.hover,";}")}},81828:function(e,t,r){r.d(t,{Z:()=>I});/* ESM import */var n=r(76150);/* ESM import */var o=r(7409);/* ESM import */var a=r(99282);/* ESM import */var i=r(35944);/* ESM import */var s=r(53052);/* ESM import */var l=r(26815);/* ESM import */var c=r(98978);/* ESM import */var d=r(60309);/* ESM import */var u=r(3473);/* ESM import */var v=r(60860);/* ESM import */var f=r(76487);/* ESM import */var p=r(17106);/* ESM import */var h=r(4867);/* ESM import */var g=r(37861);/* ESM import */var m=r(15287);/* ESM import */var b=r(75361);/* ESM import */var _=r(29535);/* ESM import */var y=r(34403);/* ESM import */var w=r(70917);/* ESM import */var x=r(38003);/* ESM import */var Z=/*#__PURE__*/r.n(x);/* ESM import */var k=r(87363);/* ESM import */var C=/*#__PURE__*/r.n(k);/* ESM import */var D=r(52293);/* ESM import */var E=r(33267);/* ESM import */var S=r(68439);/* ESM import */var W=r(95754);var M=620;var T=620;var B=()=>{var e=(0,g/* .useFormWithGlobalError */.O)({defaultValues:{brush_size:40,prompt:""}});var t=(0,m/* .useMagicFillImageMutation */.vN)();var r=(0,k.useRef)(null);var{onDropdownMenuChange:v,currentImage:f,field:_,onCloseModal:Z}=(0,S/* .useMagicImageGeneration */.DK)();var C=(0,m/* .useStoreAIGeneratedImageMutation */.H9)();var B=(0,h/* .useDebounce */.N)(e.watch("brush_size",40));var[I,N]=(0,k.useState)([]);var[A,L]=(0,k.useState)(1);var J=(0,k.useCallback)((e,t)=>{var n;var o=(n=r.current)===null||n===void 0?void 0:n.getContext("2d");if(!o){return}for(var a of t.slice(0,e)){o.putImageData(a,0,0)}},[]);(0,k.useEffect)(()=>{var e;var t=(e=r.current)===null||e===void 0?void 0:e.getContext("2d");if(!t){return}t.lineWidth=B},[B]);(0,k.useEffect)(()=>{var e=e=>{if(e.metaKey){if(e.shiftKey&&e.key.toUpperCase()==="Z"){J(A+1,I);L(e=>Math.min(e+1,I.length));return}if(e.key.toUpperCase()==="Z"){J(A-1,I);L(e=>Math.max(e-1,1));return}}};window.addEventListener("keydown",e);return()=>{window.removeEventListener("keydown",e)}},[A,I,J]);if(!f){return null}return/*#__PURE__*/(0,i/* .jsxs */.BX)("form",{css:W/* .magicAIStyles.wrapper */.a.wrapper,onSubmit:e.handleSubmit(e=>(0,n._)(function*(){var n=r.current;var o=n===null||n===void 0?void 0:n.getContext("2d");if(!n||!o){return}var a={prompt:e.prompt,image:(0,b/* .getImageData */.n$)(n)};var i=yield t.mutateAsync(a);if(i){var s=new Image;s.onload=()=>{n.width=M;n.height=T;o.drawImage(s,0,0,n.width,n.height);o.lineWidth=B;o.lineJoin="round";o.lineCap="round"};s.src=i}})()),children:[/*#__PURE__*/(0,i/* .jsx */.tZ)("div",{css:W/* .magicAIStyles.left */.a.left,children:/*#__PURE__*/(0,i/* .jsxs */.BX)("div",{css:O.leftWrapper,children:[/*#__PURE__*/(0,i/* .jsxs */.BX)("div",{css:O.actionBar,children:[/*#__PURE__*/(0,i/* .jsxs */.BX)("div",{css:O.backButtonWrapper,children:[/*#__PURE__*/(0,i/* .jsx */.tZ)("button",{type:"button",css:O.backButton,onClick:()=>v("generation"),children:/*#__PURE__*/(0,i/* .jsx */.tZ)(l/* ["default"] */.Z,{name:"arrowLeft"})}),(0,x.__)("Magic Fill","tutor")]}),/*#__PURE__*/(0,i/* .jsxs */.BX)("div",{css:O.actions,children:[/*#__PURE__*/(0,i/* .jsx */.tZ)(s/* ["default"] */.Z,{variant:"ghost",disabled:I.length===0,onClick:()=>{J(1,I);N(I.slice(0,1));L(1)},children:(0,x.__)("Revert to Original","tutor")}),/*#__PURE__*/(0,i/* .jsx */.tZ)(c/* .Separator */.Z,{variant:"vertical",css:/*#__PURE__*/(0,w/* .css */.iv)("min-height:16px;")}),/*#__PURE__*/(0,i/* .jsxs */.BX)("div",{css:O.undoRedo,children:[/*#__PURE__*/(0,i/* .jsx */.tZ)(s/* ["default"] */.Z,{variant:"ghost",size:"icon",disabled:A<=1,onClick:()=>{J(A-1,I);L(e=>Math.max(e-1,1))},children:/*#__PURE__*/(0,i/* .jsx */.tZ)(l/* ["default"] */.Z,{name:"undo",width:20,height:20})}),/*#__PURE__*/(0,i/* .jsx */.tZ)(s/* ["default"] */.Z,{variant:"ghost",size:"icon",disabled:A===I.length,onClick:()=>{J(A+1,I);L(e=>Math.min(e+1,I.length))},children:/*#__PURE__*/(0,i/* .jsx */.tZ)(l/* ["default"] */.Z,{name:"redo",width:20,height:20})})]})]})]}),/*#__PURE__*/(0,i/* .jsxs */.BX)("div",{css:O.canvasAndLoading,children:[/*#__PURE__*/(0,i/* .jsx */.tZ)(E/* .DrawingCanvas */.R,{ref:r,width:M,height:T,src:f,brushSize:B,trackStack:I,pointer:A,setTrackStack:N,setPointer:L}),/*#__PURE__*/(0,i/* .jsx */.tZ)(p/* ["default"] */.Z,{when:t.isPending,children:/*#__PURE__*/(0,i/* .jsx */.tZ)("div",{css:O.loading})})]}),/*#__PURE__*/(0,i/* .jsx */.tZ)("div",{css:O.footerActions,children:/*#__PURE__*/(0,i/* .jsx */.tZ)("div",{css:O.footerActionsLeft,children:/*#__PURE__*/(0,i/* .jsx */.tZ)(s/* ["default"] */.Z,{variant:"secondary",onClick:()=>{var e="".concat((0,y/* .nanoid */.x0)(),".png");var{canvas:t}=(0,b/* .getCanvas */.o_)(r);if(!t)return;(0,b/* .downloadBase64Image */.Lp)((0,b/* .getImageData */.n$)(t),e)},children:/*#__PURE__*/(0,i/* .jsx */.tZ)(l/* ["default"] */.Z,{name:"download",width:24,height:24})})})})]})}),/*#__PURE__*/(0,i/* .jsxs */.BX)("div",{css:W/* .magicAIStyles.right */.a.right,children:[/*#__PURE__*/(0,i/* .jsxs */.BX)("div",{css:O.fields,children:[/*#__PURE__*/(0,i/* .jsx */.tZ)(D/* .Controller */.Qr,{control:e.control,name:"brush_size",render:e=>/*#__PURE__*/(0,i/* .jsx */.tZ)(d/* ["default"] */.Z,(0,a._)((0,o._)({},e),{label:"Brush Size",min:1,max:100,isMagicAi:true,hasBorder:true}))}),/*#__PURE__*/(0,i/* .jsx */.tZ)(D/* .Controller */.Qr,{control:e.control,name:"prompt",render:e=>/*#__PURE__*/(0,i/* .jsx */.tZ)(u/* ["default"] */.Z,(0,a._)((0,o._)({},e),{label:(0,x.__)("Describe the Fill","tutor"),placeholder:(0,x.__)("Write 5 words to describe...","tutor"),rows:4,isMagicAi:true}))})]}),/*#__PURE__*/(0,i/* .jsx */.tZ)("div",{css:[W/* .magicAIStyles.rightFooter */.a.rightFooter,/*#__PURE__*/(0,w/* .css */.iv)("margin-top:auto;")],children:/*#__PURE__*/(0,i/* .jsxs */.BX)("div",{css:O.footerButtons,children:[/*#__PURE__*/(0,i/* .jsxs */.BX)(s/* ["default"] */.Z,{type:"submit",disabled:t.isPending||!e.watch("prompt"),children:[/*#__PURE__*/(0,i/* .jsx */.tZ)(l/* ["default"] */.Z,{name:"magicWand",width:24,height:24}),(0,x.__)("Generative Erase","tutor")]}),/*#__PURE__*/(0,i/* .jsx */.tZ)(s/* ["default"] */.Z,{variant:"primary_outline",disabled:t.isPending,loading:C.isPending,onClick:()=>(0,n._)(function*(){var{canvas:e}=(0,b/* .getCanvas */.o_)(r);if(!e)return;var t=yield C.mutateAsync({image:(0,b/* .getImageData */.n$)(e)});if(t.data){_.onChange(t.data);Z()}})(),children:(0,x.__)("Use Image","tutor")})]})})]})]})};/* ESM default export */const I=B;var N={loading:/*#__PURE__*/(0,w/* .keyframes */.F4)("0%{opacity:0;}50%{opacity:0.6;}100%{opacity:0;}"),walker:/*#__PURE__*/(0,w/* .keyframes */.F4)("0%{left:0%;}100%{left:100%;}")};var O={canvasAndLoading:/*#__PURE__*/(0,w/* .css */.iv)("position:relative;z-index:",v/* .zIndex.positive */.W5.positive,";"),loading:/*#__PURE__*/(0,w/* .css */.iv)("position:absolute;top:0;left:0;width:100%;height:100%;background:",v/* .colorTokens.ai.gradient_1 */.Jv.ai.gradient_1,";opacity:0.6;transition:0.5s ease opacity;animation:",N.loading," 1s linear infinite;z-index:0;&::before{content:'';position:absolute;top:0;left:0;width:200px;height:100%;background:linear-gradient(\n        270deg,rgba(255,255,255,0) 0%,rgba(255,255,255,0.6) 51.13%,rgba(255,255,255,0) 100%\n      );animation:",N.walker," 1s linear infinite;}"),actionBar:/*#__PURE__*/(0,w/* .css */.iv)("display:flex;align-items:center;justify-content:space-between;"),fields:/*#__PURE__*/(0,w/* .css */.iv)("display:flex;flex-direction:column;gap:",v/* .spacing["12"] */.W0["12"],";"),leftWrapper:/*#__PURE__*/(0,w/* .css */.iv)("display:flex;flex-direction:column;gap:",v/* .spacing["8"] */.W0["8"],";padding-block:",v/* .spacing["16"] */.W0["16"],";"),footerButtons:/*#__PURE__*/(0,w/* .css */.iv)("display:flex;flex-direction:column;gap:",v/* .spacing["8"] */.W0["8"],";"),footerActions:/*#__PURE__*/(0,w/* .css */.iv)("display:flex;justify-content:space-between;"),footerActionsLeft:/*#__PURE__*/(0,w/* .css */.iv)("display:flex;align-items:center;gap:",v/* .spacing["12"] */.W0["12"],";"),actions:/*#__PURE__*/(0,w/* .css */.iv)("display:flex;align-items:center;gap:",v/* .spacing["16"] */.W0["16"],";"),undoRedo:/*#__PURE__*/(0,w/* .css */.iv)("display:flex;align-items:center;gap:",v/* .spacing["12"] */.W0["12"],";"),backButtonWrapper:/*#__PURE__*/(0,w/* .css */.iv)("display:flex;align-items:center;gap:",v/* .spacing["8"] */.W0["8"],";",f/* .typography.body */.c.body("medium"),";color:",v/* .colorTokens.text.title */.Jv.text.title,";"),backButton:/*#__PURE__*/(0,w/* .css */.iv)(_/* .styleUtils.resetButton */.i.resetButton,";width:24px;height:24px;border-radius:",v/* .borderRadius["4"] */.E0["4"],";border:1px solid ",v/* .colorTokens.stroke["default"] */.Jv.stroke["default"],";display:flex;align-items:center;justify-content:center;"),image:/*#__PURE__*/(0,w/* .css */.iv)("width:492px;height:498px;position:relative;img{position:absolute;top:0;left:0;width:100%;height:100%;object-fit:cover;}"),canvasWrapper:/*#__PURE__*/(0,w/* .css */.iv)("position:relative;"),customCursor:e=>/*#__PURE__*/(0,w/* .css */.iv)("position:absolute;width:",e,"px;height:",e,"px;border-radius:",v/* .borderRadius.circle */.E0.circle,";background:linear-gradient(\n      73.09deg,rgba(255,150,69,0.4) 18.05%,rgba(255,100,113,0.4) 30.25%,rgba(207,110,189,0.4) 55.42%,rgba(164,119,209,0.4) 71.66%,rgba(62,100,222,0.4) 97.9%\n    );border:3px solid ",v/* .colorTokens.stroke.white */.Jv.stroke.white,";pointer-events:none;transform:translate(-50%,-50%);z-index:",v/* .zIndex.highest */.W5.highest,";display:none;")}},95754:function(e,t,r){r.d(t,{a:()=>a});/* ESM import */var n=r(60860);/* ESM import */var o=r(70917);var a={wrapper:/*#__PURE__*/(0,o/* .css */.iv)("min-width:1000px;display:grid;grid-template-columns:1fr 330px;",n/* .Breakpoint.tablet */.Uo.tablet,"{min-width:auto;grid-template-columns:1fr;width:100%;}"),left:/*#__PURE__*/(0,o/* .css */.iv)("display:flex;justify-content:center;align-items:center;background-color:#f7f7f7;z-index:",n/* .zIndex.level */.W5.level,";"),right:/*#__PURE__*/(0,o/* .css */.iv)("padding:",n/* .spacing["20"] */.W0["20"],";display:flex;flex-direction:column;align-items:space-between;z-index:",n/* .zIndex.positive */.W5.positive,";"),rightFooter:/*#__PURE__*/(0,o/* .css */.iv)("display:flex;flex-direction:column;gap:",n/* .spacing["8"] */.W0["8"],";margin-top:auto;padding-top:80px;")}},36853:function(e,t,r){r.d(t,{Z:()=>d});/* ESM import */var n=r(35944);/* ESM import */var o=r(68439);/* ESM import */var a=r(59355);/* ESM import */var i=r(81828);/* ESM import */var s=r(22128);function l(){var{state:e}=(0,o/* .useMagicImageGeneration */.DK)();switch(e){case"generation":return/*#__PURE__*/(0,n/* .jsx */.tZ)(a/* .ImageGeneration */.E,{});case"magic-fill":return/*#__PURE__*/(0,n/* .jsx */.tZ)(i/* ["default"] */.Z,{});default:return null}}var c=e=>{var{title:t,icon:r,closeModal:a,field:i,fieldState:c}=e;return/*#__PURE__*/(0,n/* .jsx */.tZ)(s/* ["default"] */.Z,{onClose:a,title:t,icon:r,maxWidth:1e3,children:/*#__PURE__*/(0,n/* .jsx */.tZ)(o/* .MagicImageGenerationProvider */._$,{field:i,fieldState:c,onCloseModal:a,children:/*#__PURE__*/(0,n/* .jsx */.tZ)(l,{})})})};/* ESM default export */const d=c},36951:function(e,t,r){r.d(t,{Z:()=>g});/* ESM import */var n=r(35944);/* ESM import */var o=r(70917);/* ESM import */var a=r(87363);/* ESM import */var i=/*#__PURE__*/r.n(a);/* ESM import */var s=r(26815);/* ESM import */var l=r(68214);/* ESM import */var c=r(62067);/* ESM import */var d=r(74053);/* ESM import */var u=r(60860);/* ESM import */var v=r(76487);/* ESM import */var f=r(17106);/* ESM import */var p=r(29535);var h=e=>{var{children:t,onClose:r,title:o,subtitle:i,icon:d,headerChildren:u,entireHeader:v,actions:p,maxWidth:h=1218,blurTriggerElement:g=true}=e;(0,a.useEffect)(()=>{document.body.style.overflow="hidden";return()=>{document.body.style.overflow="initial"}},[]);return/*#__PURE__*/(0,n/* .jsx */.tZ)(c/* ["default"] */.Z,{blurPrevious:g,children:/*#__PURE__*/(0,n/* .jsxs */.BX)("div",{css:m.container({maxWidth:h}),children:[/*#__PURE__*/(0,n/* .jsx */.tZ)("div",{css:m.header({hasHeaderChildren:!!u}),children:/*#__PURE__*/(0,n/* .jsx */.tZ)(f/* ["default"] */.Z,{when:v,fallback:/*#__PURE__*/(0,n/* .jsxs */.BX)(n/* .Fragment */.HY,{children:[/*#__PURE__*/(0,n/* .jsxs */.BX)("div",{css:m.headerContent,children:[/*#__PURE__*/(0,n/* .jsxs */.BX)("div",{css:m.iconWithTitle,children:[/*#__PURE__*/(0,n/* .jsx */.tZ)(f/* ["default"] */.Z,{when:d,children:d}),/*#__PURE__*/(0,n/* .jsx */.tZ)(f/* ["default"] */.Z,{when:o,children:/*#__PURE__*/(0,n/* .jsx */.tZ)("h6",{css:m.title,title:typeof o==="string"?o:"",children:o})})]}),/*#__PURE__*/(0,n/* .jsx */.tZ)(f/* ["default"] */.Z,{when:i,children:/*#__PURE__*/(0,n/* .jsx */.tZ)("span",{css:m.subtitle,children:i})})]}),/*#__PURE__*/(0,n/* .jsx */.tZ)("div",{css:m.headerChildren,children:/*#__PURE__*/(0,n/* .jsx */.tZ)(f/* ["default"] */.Z,{when:u,children:u})}),/*#__PURE__*/(0,n/* .jsx */.tZ)("div",{css:m.actionsWrapper,children:/*#__PURE__*/(0,n/* .jsx */.tZ)(f/* ["default"] */.Z,{when:p,fallback:/*#__PURE__*/(0,n/* .jsx */.tZ)("button",{type:"button",css:m.closeButton,onClick:r,children:/*#__PURE__*/(0,n/* .jsx */.tZ)(s/* ["default"] */.Z,{name:"times",width:14,height:14})}),children:p})})]}),children:v})}),/*#__PURE__*/(0,n/* .jsx */.tZ)("div",{css:m.content,children:/*#__PURE__*/(0,n/* .jsx */.tZ)(l/* ["default"] */.Z,{children:t})})]})})};/* ESM default export */const g=h;var m={container:e=>{var{maxWidth:t}=e;return/*#__PURE__*/(0,o/* .css */.iv)("position:relative;background:",u/* .colorTokens.background.white */.Jv.background.white,";margin:",d/* .modal.MARGIN_TOP */.oC.MARGIN_TOP,"px auto ",u/* .spacing["24"] */.W0["24"],";height:100%;max-width:",t,"px;box-shadow:",u/* .shadow.modal */.AF.modal,";border-radius:",u/* .borderRadius["10"] */.E0["10"],";overflow:hidden;bottom:0;z-index:",u/* .zIndex.modal */.W5.modal,";width:100%;",u/* .Breakpoint.smallTablet */.Uo.smallTablet,"{width:90%;}")},header:e=>{var{hasHeaderChildren:t}=e;return/*#__PURE__*/(0,o/* .css */.iv)("display:grid;grid-template-columns:",t?"1fr auto 1fr":"1fr auto auto",";gap:",u/* .spacing["8"] */.W0["8"],";align-items:center;width:100%;height:",d/* .modal.HEADER_HEIGHT */.oC.HEADER_HEIGHT,"px;background:",u/* .colorTokens.background.white */.Jv.background.white,";border-bottom:1px solid ",u/* .colorTokens.stroke.divider */.Jv.stroke.divider,";position:sticky;")},headerContent:/*#__PURE__*/(0,o/* .css */.iv)("place-self:center start;display:inline-flex;align-items:center;gap:",u/* .spacing["12"] */.W0["12"],";padding-left:",u/* .spacing["24"] */.W0["24"],";",u/* .Breakpoint.smallMobile */.Uo.smallMobile,"{padding-left:",u/* .spacing["16"] */.W0["16"],";}"),headerChildren:/*#__PURE__*/(0,o/* .css */.iv)("place-self:center center;"),iconWithTitle:/*#__PURE__*/(0,o/* .css */.iv)("display:inline-flex;align-items:center;gap:",u/* .spacing["4"] */.W0["4"],";flex-shrink:0;color:",u/* .colorTokens.icon["default"] */.Jv.icon["default"],";"),title:/*#__PURE__*/(0,o/* .css */.iv)(v/* .typography.heading6 */.c.heading6("medium"),";color:",u/* .colorTokens.text.title */.Jv.text.title,";text-transform:none;letter-spacing:normal;"),subtitle:/*#__PURE__*/(0,o/* .css */.iv)(p/* .styleUtils.text.ellipsis */.i.text.ellipsis(1)," ",v/* .typography.caption */.c.caption(),";color:",u/* .colorTokens.text.hints */.Jv.text.hints,";padding-left:",u/* .spacing["12"] */.W0["12"],";border-left:1px solid ",u/* .colorTokens.icon.hints */.Jv.icon.hints,";"),actionsWrapper:/*#__PURE__*/(0,o/* .css */.iv)("place-self:center end;display:inline-flex;gap:",u/* .spacing["16"] */.W0["16"],";padding-right:",u/* .spacing["24"] */.W0["24"],";",u/* .Breakpoint.smallMobile */.Uo.smallMobile,"{padding-right:",u/* .spacing["16"] */.W0["16"],";}"),closeButton:/*#__PURE__*/(0,o/* .css */.iv)(p/* .styleUtils.resetButton */.i.resetButton,";display:inline-flex;align-items:center;justify-content:center;width:32px;height:32px;border-radius:",u/* .borderRadius.circle */.E0.circle,";background:",u/* .colorTokens.background.white */.Jv.background.white,";&:focus,&:active,&:hover{background:",u/* .colorTokens.background.white */.Jv.background.white,";}svg{color:",u/* .colorTokens.icon["default"] */.Jv.icon["default"],";transition:color 0.3s ease-in-out;}:hover{svg{color:",u/* .colorTokens.icon.hover */.Jv.icon.hover,";}}:focus{box-shadow:",u/* .shadow.focus */.AF.focus,";}"),content:/*#__PURE__*/(0,o/* .css */.iv)("height:calc(100% - ",d/* .modal.HEADER_HEIGHT */.oC.HEADER_HEIGHT+d/* .modal.MARGIN_TOP */.oC.MARGIN_TOP,"px);background-color:",u/* .colorTokens.surface.courseBuilder */.Jv.surface.courseBuilder,";overflow-x:hidden;",p/* .styleUtils.overflowYAuto */.i.overflowYAuto)}},4867:function(e,t,r){r.d(t,{N:()=>a});/* ESM import */var n=r(87363);/* ESM import */var o=/*#__PURE__*/r.n(n);var a=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:300;var[r,o]=(0,n.useState)(e);(0,n.useEffect)(()=>{var r=setTimeout(()=>{o(e)},t);return()=>{clearTimeout(r)}},[e,t]);return r}},41819:function(e,t,r){r.d(t,{a:()=>l});/* ESM import */var n=r(7409);/* ESM import */var o=r(22456);/* ESM import */var a=r(87363);/* ESM import */var i=/*#__PURE__*/r.n(a);var s={defaultValue:false};var l=e=>{var t=(0,a.useRef)(null);var r=(0,n._)({},s,e);var[i,l]=(0,a.useState)(r.defaultValue);(0,a.useEffect)(()=>{if(!(0,o/* .isDefined */.$K)(t.current)){return}if(t.current.scrollHeight<=t.current.clientHeight){l(false);return}var e=e=>{var t=e.target;if(t.scrollTop+t.clientHeight>=t.scrollHeight){l(false);return}l(t.scrollTop>=0)};t.current.addEventListener("scroll",e);return()=>{var r;(r=t.current)===null||r===void 0?void 0:r.removeEventListener("scroll",e)};// eslint-disable-next-line react-hooks/exhaustive-deps
},[t.current]);return{ref:t,isScrolling:i}}},43372:function(e,t,r){r.d(t,{Z:()=>u});/* ESM import */var n=r(7409);/* ESM import */var o=r(99282);/* ESM import */var a=r(38003);/* ESM import */var i=/*#__PURE__*/r.n(a);/* ESM import */var s=r(87363);/* ESM import */var l=/*#__PURE__*/r.n(s);/* ESM import */var c=r(13985);var d=e=>{var{options:t={},onChange:r,initialFiles:i}=e;var{showToast:l}=(0,c/* .useToast */.p)();var d=(0,s.useMemo)(()=>i?Array.isArray(i)?i:[i]:[],[i]);var u=(0,s.useMemo)(()=>(0,o._)((0,n._)({},t,t.type?{library:{type:t.type}}:{}),{multiple:t.multiple?t.multiple===true?"add":t.multiple:false}),[t]);var[v,f]=(0,s.useState)(d);(0,s.useEffect)(()=>{if(d&&!v.length){f(d)}},[v,d]);var p=(0,s.useCallback)(()=>{var e;if(!((e=window.wp)===null||e===void 0?void 0:e.media)){// eslint-disable-next-line no-console
console.error("WordPress media library is not available");return}var t=window.wp.media(u);t.on("close",()=>{if(t.$el){t.$el.parent().parent().remove()}});t.on("open",()=>{var e=t.state().get("selection");t.$el.attr("data-focus-trap","true");e.reset();v.forEach(t=>{var r=window.wp.media.attachment(t.id);if(r){r.fetch();e.add(r)}})});t.on("select",()=>{var e=t.state().get("selection").toJSON();var n=new Set(e.map(e=>e.id));var o=v.filter(e=>n.has(e.id));var i=e.reduce((e,t)=>{if(o.some(e=>e.id===t.id)){return e}if(u.maxFileSize&&t.filesizeInBytes>u.maxFileSize){l({// translators: %s is the file title
message:(0,a.sprintf)((0,a.__)("%s size exceeds the maximum allowed size","tutor"),t.title),type:"danger"});return e}var r={id:t.id,title:t.title,url:t.url,name:t.title,size:t.filesizeHumanReadable,size_bytes:t.filesizeInBytes,ext:t.filename.split(".").pop()||""};e.push(r);return e},[]);var s=u.multiple?[...o,...i]:i.slice(0,1);if(u.maxFiles&&s.length>u.maxFiles){l({// translators: %d is the maximum number of files allowed
message:(0,a.sprintf)((0,a.__)("Cannot select more than %d files","tutor"),u.maxFiles),type:"warning"});return}f(s);r===null||r===void 0?void 0:r(u.multiple?s:s[0]||null);t.close()});t.open()},[u,r,v,l]);var h=(0,s.useCallback)(()=>{f([]);r===null||r===void 0?void 0:r(u.multiple?[]:null)},[u.multiple,r]);return{openMediaLibrary:p,existingFiles:v,resetFiles:h}};/* ESM default export */const u=d},65361:function(e,t,r){r.d(t,{Z:()=>b});/* ESM import */var n=r(58865);/* ESM import */var o=r(35944);/* ESM import */var a=r(19398);/* ESM import */var i=r(74053);/* ESM import */var s=r(60860);/* ESM import */var l=r(76487);/* ESM import */var c=r(54354);/* ESM import */var d=r(98567);/* ESM import */var u=r(29535);/* ESM import */var v=r(70917);/* ESM import */var f=r(38003);/* ESM import */var p=/*#__PURE__*/r.n(f);function h(){var e=(0,n._)(["\n        content: '';\n        position: absolute;\n        border: "," solid transparent;\n\n        ","\n        ","\n        ","\n        ","\n      "]);h=function t(){return e};return e}function g(){var e=(0,n._)(["\n      button:last-of-type {\n        color: ",";\n      }\n    "]);g=function t(){return e};return e}var m=e=>{var{arrow:t,triggerRef:r,isOpen:n,title:s,message:l,onConfirmation:u,onCancel:v,isLoading:p=false,gap:h,maxWidth:g,closePopover:m,animationType:b=c/* .AnimationType.slideLeft */.ru.slideLeft,hideArrow:y=false,confirmButton:w,cancelButton:x,positionModifier:Z}=e;var{position:k,triggerWidth:C,popoverRef:D}=(0,d/* .usePortalPopover */.l)({triggerRef:r,isOpen:n,arrow:t,gap:h,positionModifier:Z});var E,S,W,M,T;return/*#__PURE__*/(0,o/* .jsx */.tZ)(d/* .Portal */.h,{isOpen:n,onClickOutside:m,animationType:b,children:/*#__PURE__*/(0,o/* .jsx */.tZ)("div",{css:[_.wrapper(t?k.arrowPlacement:undefined,y),{[i/* .isRTL */.dZ?"right":"left"]:k.left,top:k.top,maxWidth:g!==null&&g!==void 0?g:C}],ref:D,children:/*#__PURE__*/(0,o/* .jsxs */.BX)("div",{css:_.content,children:[/*#__PURE__*/(0,o/* .jsxs */.BX)("div",{css:_.body,children:[/*#__PURE__*/(0,o/* .jsx */.tZ)("div",{css:_.title,children:s}),/*#__PURE__*/(0,o/* .jsx */.tZ)("p",{css:_.description,children:l})]}),/*#__PURE__*/(0,o/* .jsxs */.BX)("div",{css:_.footer({isDelete:(E=w===null||w===void 0?void 0:w.isDelete)!==null&&E!==void 0?E:false}),children:[/*#__PURE__*/(0,o/* .jsx */.tZ)(a/* ["default"] */.Z,{variant:(S=x===null||x===void 0?void 0:x.variant)!==null&&S!==void 0?S:"text",size:"small",onClick:v!==null&&v!==void 0?v:m,children:(W=x===null||x===void 0?void 0:x.text)!==null&&W!==void 0?W:(0,f.__)("Cancel","tutor")}),/*#__PURE__*/(0,o/* .jsx */.tZ)(a/* ["default"] */.Z,{"data-cy":"confirm-button",variant:(M=w===null||w===void 0?void 0:w.variant)!==null&&M!==void 0?M:"text",onClick:()=>{u();m()},loading:p,size:"small",children:(T=w===null||w===void 0?void 0:w.text)!==null&&T!==void 0?T:(0,f.__)("Ok","tutor")})]})]})})})};/* ESM default export */const b=m;var _={wrapper:(e,t)=>/*#__PURE__*/(0,v/* .css */.iv)("position:absolute;width:100%;z-index:",s/* .zIndex.dropdown */.W5.dropdown,";&::before{",e&&!t&&(0,v/* .css */.iv)(h(),s/* .spacing["8"] */.W0["8"],e==="left"&&_.arrowLeft,e==="right"&&_.arrowRight,e==="top"&&_.arrowTop,e==="bottom"&&_.arrowBottom),"}"),arrowLeft:/*#__PURE__*/(0,v/* .css */.iv)("border-right-color:",s/* .colorTokens.surface.tutor */.Jv.surface.tutor,";top:50%;transform:translateY(-50%);left:-",s/* .spacing["16"] */.W0["16"],";"),arrowRight:/*#__PURE__*/(0,v/* .css */.iv)("border-left-color:",s/* .colorTokens.surface.tutor */.Jv.surface.tutor,";top:50%;transform:translateY(-50%);right:-",s/* .spacing["16"] */.W0["16"],";"),arrowTop:/*#__PURE__*/(0,v/* .css */.iv)("border-bottom-color:",s/* .colorTokens.surface.tutor */.Jv.surface.tutor,";left:50%;transform:translateX(-50%);top:-",s/* .spacing["16"] */.W0["16"],";"),arrowBottom:/*#__PURE__*/(0,v/* .css */.iv)("border-top-color:",s/* .colorTokens.surface.tutor */.Jv.surface.tutor,";left:50%;transform:translateX(-50%);bottom:-",s/* .spacing["16"] */.W0["16"],";"),content:/*#__PURE__*/(0,v/* .css */.iv)("background-color:",s/* .colorTokens.surface.tutor */.Jv.surface.tutor,";box-shadow:",s/* .shadow.popover */.AF.popover,";border-radius:",s/* .borderRadius["6"] */.E0["6"],";::-webkit-scrollbar{background-color:",s/* .colorTokens.surface.tutor */.Jv.surface.tutor,";width:10px;}::-webkit-scrollbar-thumb{background-color:",s/* .colorTokens.action.secondary["default"] */.Jv.action.secondary["default"],";border-radius:",s/* .borderRadius["6"] */.E0["6"],";}"),title:/*#__PURE__*/(0,v/* .css */.iv)(l/* .typography.small */.c.small("medium"),";color:",s/* .colorTokens.text.primary */.Jv.text.primary,";"),description:/*#__PURE__*/(0,v/* .css */.iv)(l/* .typography.small */.c.small(),";color:",s/* .colorTokens.text.subdued */.Jv.text.subdued,";"),body:/*#__PURE__*/(0,v/* .css */.iv)("padding:",s/* .spacing["16"] */.W0["16"]," ",s/* .spacing["20"] */.W0["20"]," ",s/* .spacing["12"] */.W0["12"],";",u/* .styleUtils.display.flex */.i.display.flex("column"),";gap:",s/* .spacing["8"] */.W0["8"],";"),footer:e=>{var{isDelete:t=false}=e;return/*#__PURE__*/(0,v/* .css */.iv)(u/* .styleUtils.display.flex */.i.display.flex(),";padding:",s/* .spacing["4"] */.W0["4"]," ",s/* .spacing["16"] */.W0["16"]," ",s/* .spacing["8"] */.W0["8"],";justify-content:end;gap:",s/* .spacing["10"] */.W0["10"],";",t&&(0,v/* .css */.iv)(g(),s/* .colorTokens.text.error */.Jv.text.error))}}},63189:function(e,t,r){r.d(t,{Z:()=>h});/* ESM import */var n=r(58865);/* ESM import */var o=r(35944);/* ESM import */var a=r(60860);/* ESM import */var i=r(29535);/* ESM import */var s=r(70917);/* ESM import */var l=r(87363);/* ESM import */var c=/*#__PURE__*/r.n(l);function d(){var e=(0,n._)(["\n      flex-direction: column;\n      align-items: start;\n      box-shadow: none;\n    "]);d=function t(){return e};return e}function u(){var e=(0,n._)(["\n      width: 3px;\n      height: ","px;\n      top: ","px;\n      bottom: auto;\n      border-radius: 0 "," "," 0;\n    "]);u=function t(){return e};return e}function v(){var e=(0,n._)(["\n      width: 100%;\n      border-bottom: 1px solid ",";\n      justify-content: flex-start;\n\n      &:hover,\n      &:focus,\n      &:active {\n        border-bottom: 1px solid ",";\n      }\n    "]);v=function t(){return e};return e}function f(){var e=(0,n._)(["\n      &,\n      &:hover,\n      &:focus,\n      &:active {\n        background-color: ",";\n        color: ",";\n      }\n\n      & > span {\n        color: ",";\n      }\n\n      & > svg {\n        color: ",";\n      }\n    "]);f=function t(){return e};return e}var p=e=>{var{activeTab:t,onChange:r,tabList:n,orientation:a="horizontal",disabled:i=false,wrapperCss:s}=e;var c=(0,l.useRef)(n.map(()=>/*#__PURE__*/(0,l.createRef)()));var[d,u]=(0,l.useState)();(0,l.useEffect)(()=>{var e=n.reduce((e,t,r)=>{var n,o,a,i;var s=c.current[r];var l={width:((n=s.current)===null||n===void 0?void 0:n.offsetWidth)||0,height:((o=s.current)===null||o===void 0?void 0:o.offsetHeight)||0,left:((a=s.current)===null||a===void 0?void 0:a.offsetLeft)||0,top:((i=s.current)===null||i===void 0?void 0:i.offsetTop)||0};e[t.value]=l;return e},{});u(e)},[n]);return/*#__PURE__*/(0,o/* .jsxs */.BX)("div",{css:g.container,children:[/*#__PURE__*/(0,o/* .jsx */.tZ)("div",{css:[g.wrapper(a),s],role:"tablist",children:n.map((e,n)=>{return/*#__PURE__*/(0,o/* .jsxs */.BX)("button",{onClick:()=>{r(e.value)},css:g.tabButton({isActive:t===e.value,orientation:a}),disabled:i||e.disabled,type:"button",role:"tab","aria-selected":t===e.value?"true":"false",ref:c.current[n],children:[e.icon,e.label,e.count!==undefined&&/*#__PURE__*/(0,o/* .jsxs */.BX)("span",{children:[" (",e.count<10&&e.count>0?"0".concat(e.count):e.count,")"]}),e.activeBadge&&/*#__PURE__*/(0,o/* .jsx */.tZ)("span",{css:g.activeBadge})]},n)})}),/*#__PURE__*/(0,o/* .jsx */.tZ)("span",{css:g.indicator((d===null||d===void 0?void 0:d[t])||{width:0,height:0,left:0,top:0},a)})]})};/* ESM default export */const h=p;var g={container:/*#__PURE__*/(0,s/* .css */.iv)("position:relative;width:100%;"),wrapper:e=>/*#__PURE__*/(0,s/* .css */.iv)("width:100%;display:flex;justify-items:left;align-items:center;flex-wrap:wrap;box-shadow:",a/* .shadow.tabs */.AF.tabs,";",e==="vertical"&&(0,s/* .css */.iv)(d())),indicator:(e,t)=>/*#__PURE__*/(0,s/* .css */.iv)("width:",e.width,"px;height:3px;position:absolute;left:",e.left,"px;bottom:0;background:",a/* .colorTokens.brand.blue */.Jv.brand.blue,";border-radius:",a/* .borderRadius["4"] */.E0["4"]," ",a/* .borderRadius["4"] */.E0["4"]," 0 0;transition:all 0.3s cubic-bezier(0.4,0,0.2,1) 0ms;:dir(rtl){left:auto;right:",e.left,"px;}",t==="vertical"&&(0,s/* .css */.iv)(u(),e.height,e.top,a/* .borderRadius["4"] */.E0["4"],a/* .borderRadius["4"] */.E0["4"])),tabButton:e=>{var{isActive:t,orientation:r}=e;return/*#__PURE__*/(0,s/* .css */.iv)(i/* .styleUtils.resetButton */.i.resetButton,";font-size:",a/* .fontSize["15"] */.JB["15"],";line-height:",a/* .lineHeight["20"] */.Nv["20"],";display:flex;justify-content:center;align-items:center;gap:",a/* .spacing["6"] */.W0["6"],";padding:",a/* .spacing["12"] */.W0["12"]," ",a/* .spacing["20"] */.W0["20"],";color:",a/* .colorTokens.text.subdued */.Jv.text.subdued,";min-width:130px;position:relative;transition:color 0.3s ease-in-out;border-radius:0px;&:hover,&:focus,&:active{background-color:transparent;color:",a/* .colorTokens.text.subdued */.Jv.text.subdued,";box-shadow:none;}& > svg{color:",a/* .colorTokens.icon["default"] */.Jv.icon["default"],";}",r==="vertical"&&(0,s/* .css */.iv)(v(),a/* .colorTokens.stroke.border */.Jv.stroke.border,a/* .colorTokens.stroke.border */.Jv.stroke.border)," ",t&&(0,s/* .css */.iv)(f(),a/* .colorTokens.background.white */.Jv.background.white,a/* .colorTokens.text.primary */.Jv.text.primary,a/* .colorTokens.text.subdued */.Jv.text.subdued,a/* .colorTokens.icon.brand */.Jv.icon.brand),"    &:disabled{color:",a/* .colorTokens.text.disable */.Jv.text.disable,";&::before{background:",a/* .colorTokens.text.disable */.Jv.text.disable,";}}&:focus-visible{outline:2px solid ",a/* .colorTokens.stroke.brand */.Jv.stroke.brand,";outline-offset:-2px;border-radius:",a/* .borderRadius["4"] */.E0["4"],";}")},activeBadge:/*#__PURE__*/(0,s/* .css */.iv)("display:inline-block;height:8px;width:8px;border-radius:",a/* .borderRadius.circle */.E0.circle,";background-color:",a/* .colorTokens.color.success["80"] */.Jv.color.success["80"],";")}},19918:function(e,t,r){r.d(t,{Cp:()=>d,Fv:()=>v});/* ESM import */var n=r(7409);/* ESM import */var o=r(24333);/* ESM import */var a=r(49982);/* ESM import */var i=r(65228);/* ESM import */var s=r(82340);/* ESM import */var l=r(84225);var c=e=>{return s/* .wpAjaxInstance.get */.R.get(l/* ["default"].GET_COURSE_LIST */.Z.GET_COURSE_LIST,{params:e})};var d=e=>{var{params:t,isEnabled:r}=e;return(0,o/* .useQuery */.a)({queryKey:["PrerequisiteCourses",t],queryFn:()=>c((0,n._)({exclude:t.exclude,limit:t.limit,offset:t.offset,filter:t.filter},t.post_status&&{post_status:t.post_status})).then(e=>e.data),placeholderData:a/* .keepPreviousData */.Wk,enabled:r})};var u=e=>{var{courseId:t,builder:r}=e;return s/* .wpAjaxInstance.post */.R.post(l/* ["default"].TUTOR_UNLINK_PAGE_BUILDER */.Z.TUTOR_UNLINK_PAGE_BUILDER,{course_id:t,builder:r})};var v=()=>{return(0,i/* .useMutation */.D)({mutationFn:u})};var f=e=>{return wpAjaxInstance.get(endpoints.BUNDLE_LIST,{params:e})};var p=e=>{var{params:t,isEnabled:r}=e;return useQuery({queryKey:["PrerequisiteCourses",t],queryFn:()=>f(_object_spread({exclude:t.exclude,limit:t.limit,offset:t.offset,filter:t.filter},t.post_status&&{post_status:t.post_status})).then(e=>e.data),placeholderData:keepPreviousData,enabled:r})}},28089:function(e,t,r){r.d(t,{O:()=>l,h:()=>s});/* ESM import */var n=r(7409);/* ESM import */var o=r(99282);/* ESM import */var a=r(94697);/* ESM import */var i=r(45587);var s=e=>(0,i/* .defaultAnimateLayoutChanges */.cP)((0,o._)((0,n._)({},e),{wasDragging:true}));var l={droppable:{strategy:a/* .MeasuringStrategy.Always */.uN.Always}}},75361:function(e,t,r){r.d(t,{Lp:()=>i,MC:()=>n,jo:()=>o,n$:()=>c,o_:()=>l});function n(e,t){e.lineTo(t.x,t.y);e.stroke()}function o(e,t){var r=t.x-e.x;var n=t.y-e.y;return Math.sqrt(r*r+n*n)}function a(e){var t=atob(e.split(",")[1]);var r=e.split(",")[0].split(":")[1].split(";")[0];var n=new ArrayBuffer(t.length);var o=new Uint8Array(n);for(var a=0;a<t.length;a++){o[a]=t.charCodeAt(a)}return new Blob([n],{type:r})}function i(e,t){var r=a(e);var n=document.createElement("a");n.href=URL.createObjectURL(r);n.download=t;document.body.appendChild(n);n.click();document.body.removeChild(n)}function s(e,t){var r=document.createElement("canvas");r.width=1024;r.height=1024;var n=r.getContext("2d");n===null||n===void 0?void 0:n.putImageData(e,0,0);n===null||n===void 0?void 0:n.drawImage(r,0,0,1024,1024);return new Promise(e=>{r.toBlob(r=>{if(!r){e(null);return}e(new File([r],t,{type:"image/png"}))})})}var l=e=>{if(e&&typeof e!=="function"&&e.current){var t=e.current;var r=t.getContext("2d");return{canvas:t,context:r}}return{canvas:null,context:null}};var c=e=>{return e.toDataURL("image/png")}},53754:function(){/**
 * The symbol to access the `TZDate`'s function to construct a new instance from
 * the provided value. It helps date-fns to inherit the time zone.
 */const e=Symbol.for("constructDateFrom")},26402:function(e,t,r){r.d(t,{N:()=>a});/* ESM import */var n=r(1493);/* ESM import */var o=r(91336);class a extends o/* .TZDateMini */.Z{//#region static
static tz(e,...t){return t.length?new a(...t,e):new a(Date.now(),e)}//#endregion
//#region representation
toISOString(){const[e,t,r]=this.tzComponents();const n=`${e}${t}:${r}`;return this.internal.toISOString().slice(0,-1)+n}toString(){// "Tue Aug 13 2024 07:50:19 GMT+0800 (Singapore Standard Time)";
return`${this.toDateString()} ${this.toTimeString()}`}toDateString(){// toUTCString returns RFC 7231 ("Mon, 12 Aug 2024 23:36:08 GMT")
const[e,t,r,n]=this.internal.toUTCString().split(" ");// "Tue Aug 13 2024"
return`${e?.slice(0,-1)} ${r} ${t} ${n}`}toTimeString(){// toUTCString returns RFC 7231 ("Mon, 12 Aug 2024 23:36:08 GMT")
const e=this.internal.toUTCString().split(" ")[4];const[t,r,o]=this.tzComponents();// "07:42:23 GMT+0800 (Singapore Standard Time)"
return`${e} GMT${t}${r}${o} (${(0,n/* .tzName */.P)(this.timeZone,this)})`}toLocaleString(e,t){return Date.prototype.toLocaleString.call(this,e,{...t,timeZone:t?.timeZone||this.timeZone})}toLocaleDateString(e,t){return Date.prototype.toLocaleDateString.call(this,e,{...t,timeZone:t?.timeZone||this.timeZone})}toLocaleTimeString(e,t){return Date.prototype.toLocaleTimeString.call(this,e,{...t,timeZone:t?.timeZone||this.timeZone})}//#endregion
//#region private
tzComponents(){const e=this.getTimezoneOffset();const t=e>0?"-":"+";const r=String(Math.floor(Math.abs(e)/60)).padStart(2,"0");const n=String(Math.abs(e)%60).padStart(2,"0");return[t,r,n]}//#endregion
withTimeZone(e){return new a(+this,e)}//#region date-fns integration
[Symbol.for("constructDateFrom")](e){return new a(+new Date(e),this.timeZone)}}},91336:function(e,t,r){r.d(t,{Z:()=>o});/* ESM import */var n=r(4973);class o extends Date{//#region static
constructor(...e){super();if(e.length>1&&typeof e[e.length-1]==="string"){this.timeZone=e.pop()}this.internal=new Date;if(isNaN((0,n/* .tzOffset */.I)(this.timeZone,this))){this.setTime(NaN)}else{if(!e.length){this.setTime(Date.now())}else if(typeof e[0]==="number"&&(e.length===1||e.length===2&&typeof e[1]!=="number")){this.setTime(e[0])}else if(typeof e[0]==="string"){this.setTime(+new Date(e[0]))}else if(e[0]instanceof Date){this.setTime(+e[0])}else{this.setTime(+new Date(...e));l(this,NaN);i(this)}}}static tz(e,...t){return t.length?new o(...t,e):new o(Date.now(),e)}//#endregion
//#region time zone
withTimeZone(e){return new o(+this,e)}getTimezoneOffset(){const e=-(0,n/* .tzOffset */.I)(this.timeZone,this);// Remove the seconds offset
// use Math.floor for negative GMT timezones and Math.ceil for positive GMT timezones.
return e>0?Math.floor(e):Math.ceil(e)}//#endregion
//#region time
setTime(e){Date.prototype.setTime.apply(this,arguments);i(this);return+this}//#endregion
//#region date-fns integration
[Symbol.for("constructDateFrom")](e){return new o(+new Date(e),this.timeZone)}}// Assign getters and setters
const a=/^(get|set)(?!UTC)/;Object.getOwnPropertyNames(Date.prototype).forEach(e=>{if(!a.test(e))return;const t=e.replace(a,"$1UTC");// Filter out methods without UTC counterparts
if(!o.prototype[t])return;if(e.startsWith("get")){// Delegate to internal date's UTC method
o.prototype[e]=function(){return this.internal[t]()}}else{// Assign regular setter
o.prototype[e]=function(){Date.prototype[t].apply(this.internal,arguments);s(this);return+this};// Assign UTC setter
o.prototype[t]=function(){Date.prototype[t].apply(this,arguments);i(this);return+this}}});/**
 * Function syncs time to internal date, applying the time zone offset.
 *
 * @param {Date} date - Date to sync
 */function i(e){e.internal.setTime(+e);e.internal.setUTCSeconds(e.internal.getUTCSeconds()-Math.round(-(0,n/* .tzOffset */.I)(e.timeZone,e)*60))}/**
 * Function syncs the internal date UTC values to the date. It allows to get
 * accurate timestamp value.
 *
 * @param {Date} date - The date to sync
 */function s(e){// First we transpose the internal values
Date.prototype.setFullYear.call(e,e.internal.getUTCFullYear(),e.internal.getUTCMonth(),e.internal.getUTCDate());Date.prototype.setHours.call(e,e.internal.getUTCHours(),e.internal.getUTCMinutes(),e.internal.getUTCSeconds(),e.internal.getUTCMilliseconds());// Now we have to adjust the date to the system time zone
l(e)}/**
 * Function adjusts the date to the system time zone. It uses the time zone
 * differences to calculate the offset and adjust the date.
 *
 * @param {Date} date - Date to adjust
 */function l(e){// Save the time zone offset before all the adjustments
const t=(0,n/* .tzOffset */.I)(e.timeZone,e);// Remove the seconds offset
// use Math.floor for negative GMT timezones and Math.ceil for positive GMT timezones.
const r=t>0?Math.floor(t):Math.ceil(t);//#region System DST adjustment
// The biggest problem with using the system time zone is that when we create
// a date from internal values stored in UTC, the system time zone might end
// up on the DST hour:
//
//   $ TZ=America/New_York node
//   > new Date(2020, 2, 8, 1).toString()
//   'Sun Mar 08 2020 01:00:00 GMT-0500 (Eastern Standard Time)'
//   > new Date(2020, 2, 8, 2).toString()
//   'Sun Mar 08 2020 03:00:00 GMT-0400 (Eastern Daylight Time)'
//   > new Date(2020, 2, 8, 3).toString()
//   'Sun Mar 08 2020 03:00:00 GMT-0400 (Eastern Daylight Time)'
//   > new Date(2020, 2, 8, 4).toString()
//   'Sun Mar 08 2020 04:00:00 GMT-0400 (Eastern Daylight Time)'
//
// Here we get the same hour for both 2 and 3, because the system time zone
// has DST beginning at 8 March 2020, 2 a.m. and jumps to 3 a.m. So we have
// to adjust the internal date to reflect that.
//
// However we want to adjust only if that's the DST hour the change happenes,
// not the hour where DST moves to.
// We calculate the previous hour to see if the time zone offset has changed
// and we have landed on the DST hour.
const o=new Date(+e);// We use UTC methods here as we don't want to land on the same hour again
// in case of DST.
o.setUTCHours(o.getUTCHours()-1);// Calculate if we are on the system DST hour.
const a=-new Date(+e).getTimezoneOffset();const i=-new Date(+o).getTimezoneOffset();const s=a-i;// Detect the DST shift. System DST change will occur both on
const l=Date.prototype.getHours.apply(e)!==e.internal.getUTCHours();// Move the internal date when we are on the system DST hour.
if(s&&l)e.internal.setUTCMinutes(e.internal.getUTCMinutes()+s);//#endregion
//#region System diff adjustment
// Now we need to adjust the date, since we just applied internal values.
// We need to calculate the difference between the system and date time zones
// and apply it to the date.
const c=a-r;if(c)Date.prototype.setUTCMinutes.call(e,Date.prototype.getUTCMinutes.call(e)+c);//#endregion
//#region Seconds System diff adjustment
const d=new Date(+e);// Set the UTC seconds to 0 to isolate the timezone offset in seconds.
d.setUTCSeconds(0);// For negative systemOffset, invert the seconds.
const u=a>0?d.getSeconds():(d.getSeconds()-60)%60;// Calculate the seconds offset based on the timezone offset.
const v=Math.round(-((0,n/* .tzOffset */.I)(e.timeZone,e)*60))%60;if(v||u){e.internal.setUTCSeconds(e.internal.getUTCSeconds()+v);Date.prototype.setUTCSeconds.call(e,Date.prototype.getUTCSeconds.call(e)+v+u)}//#endregion
//#region Post-adjustment DST fix
const f=(0,n/* .tzOffset */.I)(e.timeZone,e);// Remove the seconds offset
// use Math.floor for negative GMT timezones and Math.ceil for positive GMT timezones.
const p=f>0?Math.floor(f):Math.ceil(f);const h=-new Date(+e).getTimezoneOffset();const g=h-p;const m=p!==r;const b=g-c;if(m&&b){Date.prototype.setUTCMinutes.call(e,Date.prototype.getUTCMinutes.call(e)+b);// Now we need to check if got offset change during the post-adjustment.
// If so, we also need both dates to reflect that.
const t=(0,n/* .tzOffset */.I)(e.timeZone,e);// Remove the seconds offset
// use Math.floor for negative GMT timezones and Math.ceil for positive GMT timezones.
const r=t>0?Math.floor(t):Math.ceil(t);const o=p-r;if(o){e.internal.setUTCMinutes(e.internal.getUTCMinutes()+o);Date.prototype.setUTCMinutes.call(e,Date.prototype.getUTCMinutes.call(e)+o)}}//#endregion
}},58184:function(e,t,r){r.d(t,{N9:()=>/* reexport safe */o.N});/* ESM import */var n=r(53754);/* ESM import */var o=r(26402);/* ESM import */var a=r(91336);/* ESM import */var i=r(20981)},20981:function(e,t,r){/* ESM import */var n=r(26402);/**
 * The function creates accepts a time zone and returns a function that creates
 * a new `TZDate` instance in the time zone from the provided value. Use it to
 * provide the context for the date-fns functions, via the `in` option.
 *
 * @param timeZone - Time zone name (IANA or UTC offset)
 *
 * @returns Function that creates a new `TZDate` instance in the time zone
 */const o=e=>t=>TZDate.tz(e,+new Date(t))},1493:function(e,t,r){r.d(t,{P:()=>n});/**
 * Time zone name format.
 *//**
 * The function returns the time zone name for the given date in the specified
 * time zone.
 *
 * It uses the `Intl.DateTimeFormat` API and by default outputs the time zone
 * name in a long format, e.g. "Pacific Standard Time" or
 * "Singapore Standard Time".
 *
 * It is possible to specify the format as the third argument using one of the following options
 *
 * - "short": e.g. "EDT" or "GMT+8".
 * - "long": e.g. "Eastern Daylight Time".
 * - "shortGeneric": e.g. "ET" or "Singapore Time".
 * - "longGeneric": e.g. "Eastern Time" or "Singapore Standard Time".
 *
 * These options correspond to TR35 tokens `z..zzz`, `zzzz`, `v`, and `vvvv` respectively: https://www.unicode.org/reports/tr35/tr35-dates.html#dfst-zone
 *
 * @param timeZone - Time zone name (IANA or UTC offset)
 * @param date - Date object to get the time zone name for
 * @param format - Optional format of the time zone name. Defaults to "long". Can be "short", "long", "shortGeneric", or "longGeneric".
 *
 * @returns Time zone name (e.g. "Singapore Standard Time")
 */function n(e,t,r="long"){return new Intl.DateTimeFormat("en-US",{// Enforces engine to render the time. Without the option JavaScriptCore omits it.
hour:"numeric",timeZone:e,timeZoneName:r}).format(t).split(/\s/g)// Format.JS uses non-breaking spaces
.slice(2)// Skip the hour and AM/PM parts
.join(" ")}},4973:function(e,t,r){r.d(t,{I:()=>a});const n={};const o={};/**
 * The function extracts UTC offset in minutes from the given date in specified
 * time zone.
 *
 * Unlike `Date.prototype.getTimezoneOffset`, this function returns the value
 * mirrored to the sign of the offset in the time zone. For Asia/Singapore
 * (UTC+8), `tzOffset` returns 480, while `getTimezoneOffset` returns -480.
 *
 * @param timeZone - Time zone name (IANA or UTC offset)
 * @param date - Date to check the offset for
 *
 * @returns UTC offset in minutes
 */function a(e,t){try{const r=n[e]||=new Intl.DateTimeFormat("en-US",{timeZone:e,timeZoneName:"longOffset"}).format;const a=r(t).split("GMT")[1];if(a in o)return o[a];return s(a,a.split(":"))}catch{// Fallback to manual parsing if the runtime doesn't support ±HH:MM/±HHMM/±HH
// See: https://github.com/nodejs/node/issues/53419
if(e in o)return o[e];const t=e?.match(i);if(t)return s(e,t.slice(1));return NaN}}const i=/([+-]\d\d):?(\d\d)?/;function s(e,t){const r=+(t[0]||0);const n=+(t[1]||0);// Convert seconds to minutes by dividing by 60 to keep the function return in minutes.
const a=+(t[2]||0)/60;return o[e]=r*60+n>0?r*60+n+a:r*60-n-a}},33233:function(e,t,r){r.d(t,{y:()=>i});/* ESM import */var n=r(87363);/* ESM import */var o=r(93242);/* ESM import */var a=r(99469);"use client";// src/useIsFetching.ts
function i(e,t){const r=(0,a/* .useQueryClient */.NL)(t);const i=r.getQueryCache();return n.useSyncExternalStore(n.useCallback(e=>i.subscribe(o/* .notifyManager.batchCalls */.Vr.batchCalls(e)),[i]),()=>r.isFetching(e),()=>r.isFetching(e))}//# sourceMappingURL=useIsFetching.js.map
},57684:function(e,t,r){r.d(t,{_:()=>D});/* ESM import */var n=r(87363);/* ESM import */var o=r(58184);/* ESM import */var a=r(6156);/* ESM import */var i=r(79237);/* ESM import */var s=r(65469);/* ESM import */var l=r(48834);/* ESM import */var c=r(52395);/* ESM import */var d=r(18296);/* ESM import */var u=r(54054);/* ESM import */var v=r(45734);/* ESM import */var f=r(54908);/* ESM import */var p=r(71264);/* ESM import */var h=r(64347);/* ESM import */var g=r(77614);/* ESM import */var m=r(62464);/* ESM import */var b=r(58100);/* ESM import */var _=r(84332);/* ESM import */var y=r(30833);/* ESM import */var w=r(5293);/* ESM import */var x=r(35625);/* ESM import */var Z=r(70162);/* ESM import */var k=r(94232);/* ESM import */var C=r(20311);/**
 * Renders the DayPicker calendar component.
 *
 * @param initialProps - The props for the DayPicker component.
 * @returns The rendered DayPicker component.
 * @group DayPicker
 * @see https://daypicker.dev
 */function D(e){let t=e;if(t.timeZone){t={...e};if(t.today){t.today=new o/* .TZDate */.N9(t.today,t.timeZone)}if(t.month){t.month=new o/* .TZDate */.N9(t.month,t.timeZone)}if(t.defaultMonth){t.defaultMonth=new o/* .TZDate */.N9(t.defaultMonth,t.timeZone)}if(t.startMonth){t.startMonth=new o/* .TZDate */.N9(t.startMonth,t.timeZone)}if(t.endMonth){t.endMonth=new o/* .TZDate */.N9(t.endMonth,t.timeZone)}if(t.mode==="single"&&t.selected){t.selected=new o/* .TZDate */.N9(t.selected,t.timeZone)}else if(t.mode==="multiple"&&t.selected){t.selected=t.selected?.map(e=>new o/* .TZDate */.N9(e,t.timeZone))}else if(t.mode==="range"&&t.selected){t.selected={from:t.selected.from?new o/* .TZDate */.N9(t.selected.from,t.timeZone):undefined,to:t.selected.to?new o/* .TZDate */.N9(t.selected.to,t.timeZone):undefined}}}const{components:r,formatters:D,labels:E,dateLib:S,locale:W,classNames:M}=(0,n.useMemo)(()=>{const e={...i/* .enUS */._,...t.locale};const r=new s/* .DateLib */.Z1({locale:e,weekStartsOn:t.broadcastCalendar?1:t.weekStartsOn,firstWeekContainsDate:t.firstWeekContainsDate,useAdditionalWeekYearTokens:t.useAdditionalWeekYearTokens,useAdditionalDayOfYearTokens:t.useAdditionalDayOfYearTokens,timeZone:t.timeZone,numerals:t.numerals},t.dateLib);return{dateLib:r,components:(0,d/* .getComponents */.O)(t.components),formatters:(0,f/* .getFormatters */._)(t.formatters),labels:{...b,...t.labels},locale:e,classNames:{...(0,v/* .getDefaultClassNames */.U)(),...t.classNames}}},[t.locale,t.broadcastCalendar,t.weekStartsOn,t.firstWeekContainsDate,t.useAdditionalWeekYearTokens,t.useAdditionalDayOfYearTokens,t.timeZone,t.numerals,t.dateLib,t.components,t.formatters,t.labels,t.classNames]);const{captionLayout:T,mode:B,navLayout:I,numberOfMonths:N=1,onDayBlur:O,onDayClick:A,onDayFocus:L,onDayKeyDown:J,onDayMouseEnter:P,onDayMouseLeave:R,onNextClick:U,onPrevClick:z,showWeekNumber:j,styles:X}=t;const{formatCaption:F,formatDay:Y,formatMonthDropdown:Q,formatWeekNumber:q,formatWeekNumberHeader:H,formatWeekdayName:V,formatYearDropdown:G}=D;const K=(0,y/* .useCalendar */.G)(t,S);const{days:$,months:ee,navStart:et,navEnd:er,previousMonth:en,nextMonth:eo,goToMonth:ea}=K;const ei=(0,l/* .createGetModifiers */.H)($,t,et,er,S);const{isSelected:es,select:el,selected:ec}=(0,Z/* .useSelection */.c)(t,S)??{};const{blur:ed,focused:eu,isFocusTarget:ev,moveFocus:ef,setFocused:ep}=(0,x/* .useFocus */.K)(t,K,ei,es??(()=>false),S);const{labelDayButton:eh,labelGridcell:eg,labelGrid:em,labelMonthDropdown:eb,labelNav:e_,labelPrevious:ey,labelNext:ew,labelWeekday:ex,labelWeekNumber:eZ,labelWeekNumberHeader:ek,labelYearDropdown:eC}=E;const eD=(0,n.useMemo)(()=>(0,g/* .getWeekdays */.D)(S,t.ISOWeek),[S,t.ISOWeek]);const eE=B!==undefined||A!==undefined;const eS=(0,n.useCallback)(()=>{if(!en)return;ea(en);z?.(en)},[en,ea,z]);const eW=(0,n.useCallback)(()=>{if(!eo)return;ea(eo);U?.(eo)},[ea,eo,U]);const eM=(0,n.useCallback)((e,t)=>r=>{r.preventDefault();r.stopPropagation();ep(e);el?.(e.date,t,r);A?.(e.date,t,r)},[el,A,ep]);const eT=(0,n.useCallback)((e,t)=>r=>{ep(e);L?.(e.date,t,r)},[L,ep]);const eB=(0,n.useCallback)((e,t)=>r=>{ed();O?.(e.date,t,r)},[ed,O]);const eI=(0,n.useCallback)((e,r)=>n=>{const o={ArrowLeft:[n.shiftKey?"month":"day",t.dir==="rtl"?"after":"before"],ArrowRight:[n.shiftKey?"month":"day",t.dir==="rtl"?"before":"after"],ArrowDown:[n.shiftKey?"year":"week","after"],ArrowUp:[n.shiftKey?"year":"week","before"],PageUp:[n.shiftKey?"year":"month","before"],PageDown:[n.shiftKey?"year":"month","after"],Home:["startOfWeek","before"],End:["endOfWeek","after"]};if(o[n.key]){n.preventDefault();n.stopPropagation();const[e,t]=o[n.key];ef(e,t)}J?.(e.date,r,n)},[ef,J,t.dir]);const eN=(0,n.useCallback)((e,t)=>r=>{P?.(e.date,t,r)},[P]);const eO=(0,n.useCallback)((e,t)=>r=>{R?.(e.date,t,r)},[R]);const eA=(0,n.useCallback)(e=>t=>{const r=Number(t.target.value);const n=S.setMonth(S.startOfMonth(e),r);ea(n)},[S,ea]);const eL=(0,n.useCallback)(e=>t=>{const r=Number(t.target.value);const n=S.setYear(S.startOfMonth(e),r);ea(n)},[S,ea]);const{className:eJ,style:eP}=(0,n.useMemo)(()=>({className:[M[a.UI.Root],t.className].filter(Boolean).join(" "),style:{...X?.[a.UI.Root],...t.style}}),[M,t.className,t.style,X]);const eR=(0,u/* .getDataAttributes */.P)(t);const eU=(0,n.useRef)(null);(0,_/* .useAnimation */._)(eU,Boolean(t.animate),{classNames:M,months:ee,focused:eu,dateLib:S});const ez={dayPickerProps:t,selected:ec,select:el,isSelected:es,months:ee,nextMonth:eo,previousMonth:en,goToMonth:ea,getModifiers:ei,components:r,classNames:M,styles:X,labels:E,formatters:D};return n.createElement(w/* .dayPickerContext.Provider */.Z.Provider,{value:ez},n.createElement(r.Root,{rootRef:t.animate?eU:undefined,className:eJ,style:eP,dir:t.dir,id:t.id,lang:t.lang,nonce:t.nonce,title:t.title,role:t.role,"aria-label":t["aria-label"],...eR},n.createElement(r.Months,{className:M[a.UI.Months],style:X?.[a.UI.Months]},!t.hideNavigation&&!I&&n.createElement(r.Nav,{"data-animated-nav":t.animate?"true":undefined,className:M[a.UI.Nav],style:X?.[a.UI.Nav],"aria-label":e_(),onPreviousClick:eS,onNextClick:eW,previousMonth:en,nextMonth:eo}),ee.map((e,o)=>{const i=(0,p/* .getMonthOptions */.d)(e.date,et,er,D,S);const s=(0,m/* .getYearOptions */.h)(et,er,D,S);return n.createElement(r.Month,{"data-animated-month":t.animate?"true":undefined,className:M[a.UI.Month],style:X?.[a.UI.Month],key:o,displayIndex:o,calendarMonth:e},I==="around"&&!t.hideNavigation&&o===0&&n.createElement(r.PreviousMonthButton,{type:"button",className:M[a.UI.PreviousMonthButton],tabIndex:en?undefined:-1,"aria-disabled":en?undefined:true,"aria-label":ey(en),onClick:eS,"data-animated-button":t.animate?"true":undefined},n.createElement(r.Chevron,{disabled:en?undefined:true,className:M[a.UI.Chevron],orientation:t.dir==="rtl"?"right":"left"})),n.createElement(r.MonthCaption,{"data-animated-caption":t.animate?"true":undefined,className:M[a.UI.MonthCaption],style:X?.[a.UI.MonthCaption],calendarMonth:e,displayIndex:o},T?.startsWith("dropdown")?n.createElement(r.DropdownNav,{className:M[a.UI.Dropdowns],style:X?.[a.UI.Dropdowns]},T==="dropdown"||T==="dropdown-months"?n.createElement(r.MonthsDropdown,{className:M[a.UI.MonthsDropdown],"aria-label":eb(),classNames:M,components:r,disabled:Boolean(t.disableNavigation),onChange:eA(e.date),options:i,style:X?.[a.UI.Dropdown],value:S.getMonth(e.date)}):n.createElement("span",null,Q(e.date,S)),T==="dropdown"||T==="dropdown-years"?n.createElement(r.YearsDropdown,{className:M[a.UI.YearsDropdown],"aria-label":eC(S.options),classNames:M,components:r,disabled:Boolean(t.disableNavigation),onChange:eL(e.date),options:s,style:X?.[a.UI.Dropdown],value:S.getYear(e.date)}):n.createElement("span",null,G(e.date,S)),n.createElement("span",{role:"status","aria-live":"polite",style:{border:0,clip:"rect(0 0 0 0)",height:"1px",margin:"-1px",overflow:"hidden",padding:0,position:"absolute",width:"1px",whiteSpace:"nowrap",wordWrap:"normal"}},F(e.date,S.options,S))):n.createElement(r.CaptionLabel,{className:M[a.UI.CaptionLabel],role:"status","aria-live":"polite"},F(e.date,S.options,S))),I==="around"&&!t.hideNavigation&&o===N-1&&n.createElement(r.NextMonthButton,{type:"button",className:M[a.UI.NextMonthButton],tabIndex:eo?undefined:-1,"aria-disabled":eo?undefined:true,"aria-label":ew(eo),onClick:eW,"data-animated-button":t.animate?"true":undefined},n.createElement(r.Chevron,{disabled:eo?undefined:true,className:M[a.UI.Chevron],orientation:t.dir==="rtl"?"left":"right"})),o===N-1&&I==="after"&&!t.hideNavigation&&n.createElement(r.Nav,{"data-animated-nav":t.animate?"true":undefined,className:M[a.UI.Nav],style:X?.[a.UI.Nav],"aria-label":e_(),onPreviousClick:eS,onNextClick:eW,previousMonth:en,nextMonth:eo}),n.createElement(r.MonthGrid,{role:"grid","aria-multiselectable":B==="multiple"||B==="range","aria-label":em(e.date,S.options,S)||undefined,className:M[a.UI.MonthGrid],style:X?.[a.UI.MonthGrid]},!t.hideWeekdays&&n.createElement(r.Weekdays,{"data-animated-weekdays":t.animate?"true":undefined,className:M[a.UI.Weekdays],style:X?.[a.UI.Weekdays]},j&&n.createElement(r.WeekNumberHeader,{"aria-label":ek(S.options),className:M[a.UI.WeekNumberHeader],style:X?.[a.UI.WeekNumberHeader],scope:"col"},H()),eD.map((e,t)=>n.createElement(r.Weekday,{"aria-label":ex(e,S.options,S),className:M[a.UI.Weekday],key:t,style:X?.[a.UI.Weekday],scope:"col"},V(e,S.options,S)))),n.createElement(r.Weeks,{"data-animated-weeks":t.animate?"true":undefined,className:M[a.UI.Weeks],style:X?.[a.UI.Weeks]},e.weeks.map((e,o)=>{return n.createElement(r.Week,{className:M[a.UI.Week],key:e.weekNumber,style:X?.[a.UI.Week],week:e},j&&n.createElement(r.WeekNumber,{week:e,style:X?.[a.UI.WeekNumber],"aria-label":eZ(e.weekNumber,{locale:W}),className:M[a.UI.WeekNumber],scope:"row",role:"rowheader"},q(e.weekNumber,S)),e.days.map(e=>{const{date:o}=e;const i=ei(e);i[a/* .DayFlag.focused */.BE.focused]=!i.hidden&&Boolean(eu?.isEqualTo(e));i[a/* .SelectionState.selected */.fP.selected]=es?.(o)||i.selected;if((0,C/* .isDateRange */.Ws)(ec)){// add range modifiers
const{from:e,to:t}=ec;i[a/* .SelectionState.range_start */.fP.range_start]=Boolean(e&&t&&S.isSameDay(o,e));i[a/* .SelectionState.range_end */.fP.range_end]=Boolean(e&&t&&S.isSameDay(o,t));i[a/* .SelectionState.range_middle */.fP.range_middle]=(0,k/* .rangeIncludesDate */.C)(ec,o,true,S)}const s=(0,h/* .getStyleForModifiers */.D)(i,X,t.modifiersStyles);const l=(0,c/* .getClassNamesForModifiers */.k)(i,M,t.modifiersClassNames);const d=!eE&&!i.hidden?eg(o,i,S.options,S):undefined;return n.createElement(r.Day,{key:`${S.format(o,"yyyy-MM-dd")}_${S.format(e.displayMonth,"yyyy-MM")}`,day:e,modifiers:i,className:l.join(" "),style:s,role:"gridcell","aria-selected":i.selected||undefined,"aria-label":d,"data-day":S.format(o,"yyyy-MM-dd"),"data-month":e.outside?S.format(o,"yyyy-MM"):undefined,"data-selected":i.selected||undefined,"data-disabled":i.disabled||undefined,"data-hidden":i.hidden||undefined,"data-outside":e.outside||undefined,"data-focused":i.focused||undefined,"data-today":i.today||undefined},!i.hidden&&eE?n.createElement(r.DayButton,{className:M[a.UI.DayButton],style:X?.[a.UI.DayButton],type:"button",day:e,modifiers:i,disabled:i.disabled||undefined,tabIndex:ev(e)?0:-1,"aria-label":eh(o,i,S.options,S),onClick:eM(e,i),onBlur:eB(e,i),onFocus:eT(e,i),onKeyDown:eI(e,i),onMouseEnter:eN(e,i),onMouseLeave:eO(e,i)},Y(o,S.options,S)):!i.hidden&&Y(e.date,S.options,S))}))}))))})),t.footer&&n.createElement(r.Footer,{className:M[a.UI.Footer],style:X?.[a.UI.Footer],role:"status","aria-live":"polite"},t.footer)))}//# sourceMappingURL=DayPicker.js.map
},6156:function(e,t,r){r.d(t,{BE:()=>o,UI:()=>n,fP:()=>a,fw:()=>i});/**
 * Enum representing the UI elements composing DayPicker. These elements are
 * mapped to {@link CustomComponents}, {@link ClassNames}, and {@link Styles}.
 *
 * Some elements are extended by flags and modifiers.
 */var n;(function(e){/** The root component displaying the months and the navigation bar. */e["Root"]="root";/** The Chevron SVG element used by navigation buttons and dropdowns. */e["Chevron"]="chevron";/**
     * The grid cell with the day's date. Extended by {@link DayFlag} and
     * {@link SelectionState}.
     */e["Day"]="day";/** The button containing the formatted day's date, inside the grid cell. */e["DayButton"]="day_button";/** The caption label of the month (when not showing the dropdown navigation). */e["CaptionLabel"]="caption_label";/** The container of the dropdown navigation (when enabled). */e["Dropdowns"]="dropdowns";/** The dropdown element to select for years and months. */e["Dropdown"]="dropdown";/** The container element of the dropdown. */e["DropdownRoot"]="dropdown_root";/** The root element of the footer. */e["Footer"]="footer";/** The month grid. */e["MonthGrid"]="month_grid";/** Contains the dropdown navigation or the caption label. */e["MonthCaption"]="month_caption";/** The dropdown with the months. */e["MonthsDropdown"]="months_dropdown";/** Wrapper of the month grid. */e["Month"]="month";/** The container of the displayed months. */e["Months"]="months";/** The navigation bar with the previous and next buttons. */e["Nav"]="nav";/**
     * The next month button in the navigation. *
     *
     * @since 9.1.0
     */e["NextMonthButton"]="button_next";/**
     * The previous month button in the navigation.
     *
     * @since 9.1.0
     */e["PreviousMonthButton"]="button_previous";/** The row containing the week. */e["Week"]="week";/** The group of row weeks in a month (`tbody`). */e["Weeks"]="weeks";/** The column header with the weekday. */e["Weekday"]="weekday";/** The row grouping the weekdays in the column headers. */e["Weekdays"]="weekdays";/** The cell containing the week number. */e["WeekNumber"]="week_number";/** The cell header of the week numbers column. */e["WeekNumberHeader"]="week_number_header";/** The dropdown with the years. */e["YearsDropdown"]="years_dropdown"})(n||(n={}));/** Enum representing flags for the {@link UI.Day} element. */var o;(function(e){/** The day is disabled. */e["disabled"]="disabled";/** The day is hidden. */e["hidden"]="hidden";/** The day is outside the current month. */e["outside"]="outside";/** The day is focused. */e["focused"]="focused";/** The day is today. */e["today"]="today"})(o||(o={}));/**
 * Enum representing selection states that can be applied to the {@link UI.Day}
 * element in selection mode.
 */var a;(function(e){/** The day is at the end of a selected range. */e["range_end"]="range_end";/** The day is at the middle of a selected range. */e["range_middle"]="range_middle";/** The day is at the start of a selected range. */e["range_start"]="range_start";/** The day is selected. */e["selected"]="selected"})(a||(a={}));/**
 * Enum representing different animation states for transitioning between
 * months.
 */var i;(function(e){/** The entering weeks when they appear before the exiting month. */e["weeks_before_enter"]="weeks_before_enter";/** The exiting weeks when they disappear before the entering month. */e["weeks_before_exit"]="weeks_before_exit";/** The entering weeks when they appear after the exiting month. */e["weeks_after_enter"]="weeks_after_enter";/** The exiting weeks when they disappear after the entering month. */e["weeks_after_exit"]="weeks_after_exit";/** The entering caption when it appears after the exiting month. */e["caption_after_enter"]="caption_after_enter";/** The exiting caption when it disappears after the entering month. */e["caption_after_exit"]="caption_after_exit";/** The entering caption when it appears before the exiting month. */e["caption_before_enter"]="caption_before_enter";/** The exiting caption when it disappears before the entering month. */e["caption_before_exit"]="caption_before_exit"})(i||(i={}));//# sourceMappingURL=UI.js.map
},77827:function(e,t,r){r.d(t,{X:()=>o});/* ESM import */var n=r(65469);/**
 * Represents a day displayed in the calendar.
 *
 * In DayPicker, a `CalendarDay` is a wrapper around a `Date` object that
 * provides additional information about the day, such as whether it belongs to
 * the displayed month.
 */class o{constructor(e,t,r=n/* .defaultDateLib */.zk){this.date=e;this.displayMonth=t;this.outside=Boolean(t&&!r.isSameMonth(e,t));this.dateLib=r}/**
     * Checks if this day is equal to another `CalendarDay`, considering both the
     * date and the displayed month.
     *
     * @param day The `CalendarDay` to compare with.
     * @returns `true` if the days are equal, otherwise `false`.
     */isEqualTo(e){return this.dateLib.isSameDay(e.date,this.date)&&this.dateLib.isSameMonth(e.displayMonth,this.displayMonth)}}//# sourceMappingURL=CalendarDay.js.map
},50644:function(e,t,r){r.d(t,{C:()=>n});/**
 * Represents a month in a calendar year.
 *
 * A `CalendarMonth` contains the weeks within the month and the date of the
 * month.
 */class n{constructor(e,t){this.date=e;this.weeks=t}}//# sourceMappingURL=CalendarMonth.js.map
},26046:function(e,t,r){r.d(t,{u:()=>n});/**
 * Represents a week in a calendar month.
 *
 * A `CalendarWeek` contains the days within the week and the week number.
 */class n{constructor(e,t){this.days=t;this.weekNumber=e}}//# sourceMappingURL=CalendarWeek.js.map
},65469:function(e,t,r){r.d(t,{Z1:()=>J,zk:()=>P});/* ESM import */var n=r(58184);/* ESM import */var o=r(55722);/* ESM import */var a=r(636);/* ESM import */var i=r(46263);/* ESM import */var s=r(90423);/* ESM import */var l=r(23279);/* ESM import */var c=r(36430);/* ESM import */var d=r(83475);/* ESM import */var u=r(13470);/* ESM import */var v=r(28353);/* ESM import */var f=r(41041);/* ESM import */var p=r(45827);/* ESM import */var h=r(17989);/* ESM import */var g=r(65719);/* ESM import */var m=r(11854);/* ESM import */var b=r(22431);/* ESM import */var _=r(12347);/* ESM import */var y=r(18474);/* ESM import */var w=r(32880);/* ESM import */var x=r(46695);/* ESM import */var Z=r(17522);/* ESM import */var k=r(40756);/* ESM import */var C=r(26098);/* ESM import */var D=r(5618);/* ESM import */var E=r(20831);/* ESM import */var S=r(19706);/* ESM import */var W=r(16614);/* ESM import */var M=r(51066);/* ESM import */var T=r(44459);/* ESM import */var B=r(12432);/* ESM import */var I=r(19397);/* ESM import */var N=r(35523);/* ESM import */var O=r(79237);/* ESM import */var A=r(11548);/* ESM import */var L=r(29726);/**
 * A wrapper class around [date-fns](http://date-fns.org) that provides utility
 * methods for date manipulation and formatting.
 *
 * @since 9.2.0
 * @example
 *   const dateLib = new DateLib({ locale: es });
 *   const newDate = dateLib.addDays(new Date(), 5);
 */class J{/**
     * Creates an instance of `DateLib`.
     *
     * @param options Configuration options for the date library.
     * @param overrides Custom overrides for the date library functions.
     */constructor(e,t){/**
         * Reference to the built-in Date constructor.
         *
         * @deprecated Use `newDate()` or `today()`.
         */this.Date=Date;/**
         * Creates a new `Date` object representing today's date.
         *
         * @since 9.5.0
         * @returns A `Date` object for today's date.
         */this.today=()=>{if(this.overrides?.today){return this.overrides.today()}if(this.options.timeZone){return n/* .TZDate.tz */.N9.tz(this.options.timeZone)}return new this.Date};/**
         * Creates a new `Date` object with the specified year, month, and day.
         *
         * @since 9.5.0
         * @param year The year.
         * @param monthIndex The month (0-11).
         * @param date The day of the month.
         * @returns A new `Date` object.
         */this.newDate=(e,t,r)=>{if(this.overrides?.newDate){return this.overrides.newDate(e,t,r)}if(this.options.timeZone){return new n/* .TZDate */.N9(e,t,r,this.options.timeZone)}return new Date(e,t,r)};/**
         * Adds the specified number of days to the given date.
         *
         * @param date The date to add days to.
         * @param amount The number of days to add.
         * @returns The new date with the days added.
         */this.addDays=(e,t)=>{return this.overrides?.addDays?this.overrides.addDays(e,t):(0,o/* .addDays */.E)(e,t)};/**
         * Adds the specified number of months to the given date.
         *
         * @param date The date to add months to.
         * @param amount The number of months to add.
         * @returns The new date with the months added.
         */this.addMonths=(e,t)=>{return this.overrides?.addMonths?this.overrides.addMonths(e,t):(0,a/* .addMonths */.z)(e,t)};/**
         * Adds the specified number of weeks to the given date.
         *
         * @param date The date to add weeks to.
         * @param amount The number of weeks to add.
         * @returns The new date with the weeks added.
         */this.addWeeks=(e,t)=>{return this.overrides?.addWeeks?this.overrides.addWeeks(e,t):(0,i/* .addWeeks */.j)(e,t)};/**
         * Adds the specified number of years to the given date.
         *
         * @param date The date to add years to.
         * @param amount The number of years to add.
         * @returns The new date with the years added.
         */this.addYears=(e,t)=>{return this.overrides?.addYears?this.overrides.addYears(e,t):(0,s/* .addYears */.B)(e,t)};/**
         * Returns the number of calendar days between the given dates.
         *
         * @param dateLeft The later date.
         * @param dateRight The earlier date.
         * @returns The number of calendar days between the dates.
         */this.differenceInCalendarDays=(e,t)=>{return this.overrides?.differenceInCalendarDays?this.overrides.differenceInCalendarDays(e,t):(0,l/* .differenceInCalendarDays */.w)(e,t)};/**
         * Returns the number of calendar months between the given dates.
         *
         * @param dateLeft The later date.
         * @param dateRight The earlier date.
         * @returns The number of calendar months between the dates.
         */this.differenceInCalendarMonths=(e,t)=>{return this.overrides?.differenceInCalendarMonths?this.overrides.differenceInCalendarMonths(e,t):(0,c/* .differenceInCalendarMonths */.T)(e,t)};/**
         * Returns the months between the given dates.
         *
         * @param interval The interval to get the months for.
         */this.eachMonthOfInterval=e=>{return this.overrides?.eachMonthOfInterval?this.overrides.eachMonthOfInterval(e):(0,d/* .eachMonthOfInterval */.R)(e)};/**
         * Returns the end of the broadcast week for the given date.
         *
         * @param date The original date.
         * @returns The end of the broadcast week.
         */this.endOfBroadcastWeek=e=>{return this.overrides?.endOfBroadcastWeek?this.overrides.endOfBroadcastWeek(e):(0,A/* .endOfBroadcastWeek */.r)(e,this)};/**
         * Returns the end of the ISO week for the given date.
         *
         * @param date The original date.
         * @returns The end of the ISO week.
         */this.endOfISOWeek=e=>{return this.overrides?.endOfISOWeek?this.overrides.endOfISOWeek(e):(0,u/* .endOfISOWeek */.g)(e)};/**
         * Returns the end of the month for the given date.
         *
         * @param date The original date.
         * @returns The end of the month.
         */this.endOfMonth=e=>{return this.overrides?.endOfMonth?this.overrides.endOfMonth(e):(0,v/* .endOfMonth */.V)(e)};/**
         * Returns the end of the week for the given date.
         *
         * @param date The original date.
         * @returns The end of the week.
         */this.endOfWeek=(e,t)=>{return this.overrides?.endOfWeek?this.overrides.endOfWeek(e,t):(0,f/* .endOfWeek */.v)(e,this.options)};/**
         * Returns the end of the year for the given date.
         *
         * @param date The original date.
         * @returns The end of the year.
         */this.endOfYear=e=>{return this.overrides?.endOfYear?this.overrides.endOfYear(e):(0,p/* .endOfYear */.w)(e)};/**
         * Formats the given date using the specified format string.
         *
         * @param date The date to format.
         * @param formatStr The format string.
         * @returns The formatted date string.
         */this.format=(e,t,r)=>{const n=this.overrides?.format?this.overrides.format(e,t,this.options):(0,h/* .format */.WU)(e,t,this.options);if(this.options.numerals&&this.options.numerals!=="latn"){return this.replaceDigits(n)}return n};/**
         * Returns the ISO week number for the given date.
         *
         * @param date The date to get the ISO week number for.
         * @returns The ISO week number.
         */this.getISOWeek=e=>{return this.overrides?.getISOWeek?this.overrides.getISOWeek(e):(0,g/* .getISOWeek */.l)(e)};/**
         * Returns the month of the given date.
         *
         * @param date The date to get the month for.
         * @returns The month.
         */this.getMonth=(e,t)=>{return this.overrides?.getMonth?this.overrides.getMonth(e,this.options):(0,m/* .getMonth */.j)(e,this.options)};/**
         * Returns the year of the given date.
         *
         * @param date The date to get the year for.
         * @returns The year.
         */this.getYear=(e,t)=>{return this.overrides?.getYear?this.overrides.getYear(e,this.options):(0,b/* .getYear */.S)(e,this.options)};/**
         * Returns the local week number for the given date.
         *
         * @param date The date to get the week number for.
         * @returns The week number.
         */this.getWeek=(e,t)=>{return this.overrides?.getWeek?this.overrides.getWeek(e,this.options):(0,_/* .getWeek */.Q)(e,this.options)};/**
         * Checks if the first date is after the second date.
         *
         * @param date The date to compare.
         * @param dateToCompare The date to compare with.
         * @returns True if the first date is after the second date.
         */this.isAfter=(e,t)=>{return this.overrides?.isAfter?this.overrides.isAfter(e,t):(0,y/* .isAfter */.A)(e,t)};/**
         * Checks if the first date is before the second date.
         *
         * @param date The date to compare.
         * @param dateToCompare The date to compare with.
         * @returns True if the first date is before the second date.
         */this.isBefore=(e,t)=>{return this.overrides?.isBefore?this.overrides.isBefore(e,t):(0,w/* .isBefore */.R)(e,t)};/**
         * Checks if the given value is a Date object.
         *
         * @param value The value to check.
         * @returns True if the value is a Date object.
         */this.isDate=e=>{return this.overrides?.isDate?this.overrides.isDate(e):(0,x/* .isDate */.J)(e)};/**
         * Checks if the given dates are on the same day.
         *
         * @param dateLeft The first date to compare.
         * @param dateRight The second date to compare.
         * @returns True if the dates are on the same day.
         */this.isSameDay=(e,t)=>{return this.overrides?.isSameDay?this.overrides.isSameDay(e,t):(0,Z/* .isSameDay */.K)(e,t)};/**
         * Checks if the given dates are in the same month.
         *
         * @param dateLeft The first date to compare.
         * @param dateRight The second date to compare.
         * @returns True if the dates are in the same month.
         */this.isSameMonth=(e,t)=>{return this.overrides?.isSameMonth?this.overrides.isSameMonth(e,t):(0,k/* .isSameMonth */.x)(e,t)};/**
         * Checks if the given dates are in the same year.
         *
         * @param dateLeft The first date to compare.
         * @param dateRight The second date to compare.
         * @returns True if the dates are in the same year.
         */this.isSameYear=(e,t)=>{return this.overrides?.isSameYear?this.overrides.isSameYear(e,t):(0,C/* .isSameYear */.F)(e,t)};/**
         * Returns the latest date in the given array of dates.
         *
         * @param dates The array of dates to compare.
         * @returns The latest date.
         */this.max=e=>{return this.overrides?.max?this.overrides.max(e):(0,D/* .max */.F)(e)};/**
         * Returns the earliest date in the given array of dates.
         *
         * @param dates The array of dates to compare.
         * @returns The earliest date.
         */this.min=e=>{return this.overrides?.min?this.overrides.min(e):(0,E/* .min */.V)(e)};/**
         * Sets the month of the given date.
         *
         * @param date The date to set the month on.
         * @param month The month to set (0-11).
         * @returns The new date with the month set.
         */this.setMonth=(e,t)=>{return this.overrides?.setMonth?this.overrides.setMonth(e,t):(0,S/* .setMonth */.q)(e,t)};/**
         * Sets the year of the given date.
         *
         * @param date The date to set the year on.
         * @param year The year to set.
         * @returns The new date with the year set.
         */this.setYear=(e,t)=>{return this.overrides?.setYear?this.overrides.setYear(e,t):(0,W/* .setYear */.M)(e,t)};/**
         * Returns the start of the broadcast week for the given date.
         *
         * @param date The original date.
         * @returns The start of the broadcast week.
         */this.startOfBroadcastWeek=(e,t)=>{return this.overrides?.startOfBroadcastWeek?this.overrides.startOfBroadcastWeek(e,this):(0,L/* .startOfBroadcastWeek */.i)(e,this)};/**
         * Returns the start of the day for the given date.
         *
         * @param date The original date.
         * @returns The start of the day.
         */this.startOfDay=e=>{return this.overrides?.startOfDay?this.overrides.startOfDay(e):(0,M/* .startOfDay */.b)(e)};/**
         * Returns the start of the ISO week for the given date.
         *
         * @param date The original date.
         * @returns The start of the ISO week.
         */this.startOfISOWeek=e=>{return this.overrides?.startOfISOWeek?this.overrides.startOfISOWeek(e):(0,T/* .startOfISOWeek */.T)(e)};/**
         * Returns the start of the month for the given date.
         *
         * @param date The original date.
         * @returns The start of the month.
         */this.startOfMonth=e=>{return this.overrides?.startOfMonth?this.overrides.startOfMonth(e):(0,B/* .startOfMonth */.N)(e)};/**
         * Returns the start of the week for the given date.
         *
         * @param date The original date.
         * @returns The start of the week.
         */this.startOfWeek=(e,t)=>{return this.overrides?.startOfWeek?this.overrides.startOfWeek(e,this.options):(0,I/* .startOfWeek */.z)(e,this.options)};/**
         * Returns the start of the year for the given date.
         *
         * @param date The original date.
         * @returns The start of the year.
         */this.startOfYear=e=>{return this.overrides?.startOfYear?this.overrides.startOfYear(e):(0,N/* .startOfYear */.e)(e)};this.options={locale:O/* .enUS */._,...e};this.overrides=t}/**
     * Generates a mapping of Arabic digits (0-9) to the target numbering system
     * digits.
     *
     * @since 9.5.0
     * @returns A record mapping Arabic digits to the target numerals.
     */getDigitMap(){const{numerals:e="latn"}=this.options;// Use Intl.NumberFormat to create a formatter with the specified numbering system
const t=new Intl.NumberFormat("en-US",{numberingSystem:e});// Map Arabic digits (0-9) to the target numerals
const r={};for(let e=0;e<10;e++){r[e.toString()]=t.format(e)}return r}/**
     * Replaces Arabic digits in a string with the target numbering system digits.
     *
     * @since 9.5.0
     * @param input The string containing Arabic digits.
     * @returns The string with digits replaced.
     */replaceDigits(e){const t=this.getDigitMap();return e.replace(/\d/g,e=>t[e]||e)}/**
     * Formats a number using the configured numbering system.
     *
     * @since 9.5.0
     * @param value The number to format.
     * @returns The formatted number as a string.
     */formatNumber(e){return this.replaceDigits(e.toString())}}/** The default locale (English). *//**
 * The default date library with English locale.
 *
 * @since 9.2.0
 */const P=new J;/**
 * @ignore
 * @deprecated Use `defaultDateLib`.
 */const R=/* unused pure expression or super */null&&P;//# sourceMappingURL=DateLib.js.map
},77204:function(e,t,r){r.d(t,{z:()=>o});/* ESM import */var n=r(87363);/**
 * Render the button elements in the calendar.
 *
 * @private
 * @deprecated Use `PreviousMonthButton` or `@link NextMonthButton` instead.
 */function o(e){return n.createElement("button",{...e})}//# sourceMappingURL=Button.js.map
},91293:function(e,t,r){r.d(t,{i:()=>o});/* ESM import */var n=r(87363);/**
 * Render the label in the month caption.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function o(e){return n.createElement("span",{...e})}//# sourceMappingURL=CaptionLabel.js.map
},1745:function(e,t,r){r.d(t,{T:()=>o});/* ESM import */var n=r(87363);/**
 * Render the chevron icon used in the navigation buttons and dropdowns.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function o(e){const{size:t=24,orientation:r="left",className:o}=e;return n.createElement("svg",{className:o,width:t,height:t,viewBox:"0 0 24 24"},r==="up"&&n.createElement("polygon",{points:"6.77 17 12.5 11.43 18.24 17 20 15.28 12.5 8 5 15.28"}),r==="down"&&n.createElement("polygon",{points:"6.77 8 12.5 13.57 18.24 8 20 9.72 12.5 17 5 9.72"}),r==="left"&&n.createElement("polygon",{points:"16 18.112 9.81111111 12 16 5.87733333 14.0888889 4 6 12 14.0888889 20"}),r==="right"&&n.createElement("polygon",{points:"8 18.112 14.18888889 12 8 5.87733333 9.91111111 4 18 12 9.91111111 20"}))}//# sourceMappingURL=Chevron.js.map
},60442:function(e,t,r){r.d(t,{J:()=>o});/* ESM import */var n=r(87363);/**
 * Render a grid cell for a specific day in the calendar.
 *
 * Handles interaction and focus for the day. If you only need to change the
 * content of the day cell, consider swapping the `DayButton` component
 * instead.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function o(e){const{day:t,modifiers:r,...o}=e;return n.createElement("td",{...o})}//# sourceMappingURL=Day.js.map
},17431:function(e,t,r){r.d(t,{b:()=>o});/* ESM import */var n=r(87363);/**
 * Render a button for a specific day in the calendar.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function o(e){const{day:t,modifiers:r,...o}=e;const a=n.useRef(null);n.useEffect(()=>{if(r.focused)a.current?.focus()},[r.focused]);return n.createElement("button",{ref:a,...o})}//# sourceMappingURL=DayButton.js.map
},26031:function(e,t,r){r.d(t,{L:()=>a});/* ESM import */var n=r(87363);/* ESM import */var o=r(6156);/**
 * Render a dropdown component for navigation in the calendar.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function a(e){const{options:t,className:r,components:a,classNames:i,...s}=e;const l=[i[o.UI.Dropdown],r].join(" ");const c=t?.find(({value:e})=>e===s.value);return n.createElement("span",{"data-disabled":s.disabled,className:i[o.UI.DropdownRoot]},n.createElement(a.Select,{className:l,...s},t?.map(({value:e,label:t,disabled:r})=>n.createElement(a.Option,{key:e,value:e,disabled:r},t))),n.createElement("span",{className:i[o.UI.CaptionLabel],"aria-hidden":true},c?.label,n.createElement(a.Chevron,{orientation:"down",size:18,className:i[o.UI.Chevron]})))}//# sourceMappingURL=Dropdown.js.map
},58581:function(e,t,r){r.d(t,{Z:()=>o});/* ESM import */var n=r(87363);/**
 * Render the navigation dropdowns for the calendar.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function o(e){return n.createElement("div",{...e})}//# sourceMappingURL=DropdownNav.js.map
},50947:function(e,t,r){r.d(t,{$:()=>o});/* ESM import */var n=r(87363);/**
 * Render the footer of the calendar.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function o(e){return n.createElement("div",{...e})}//# sourceMappingURL=Footer.js.map
},18149:function(e,t,r){r.d(t,{m:()=>o});/* ESM import */var n=r(87363);/**
 * Render the grid with the weekday header row and the weeks for a specific
 * month.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function o(e){const{calendarMonth:t,displayIndex:r,...o}=e;return n.createElement("div",{...o},e.children)}//# sourceMappingURL=Month.js.map
},78136:function(e,t,r){r.d(t,{h:()=>o});/* ESM import */var n=r(87363);/**
 * Render the caption for a month in the calendar.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function o(e){const{calendarMonth:t,displayIndex:r,...o}=e;return n.createElement("div",{...o})}//# sourceMappingURL=MonthCaption.js.map
},51601:function(e,t,r){r.d(t,{A:()=>o});/* ESM import */var n=r(87363);/**
 * Render the grid of days for a specific month.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function o(e){return n.createElement("table",{...e})}//# sourceMappingURL=MonthGrid.js.map
},28299:function(e,t,r){r.d(t,{z:()=>o});/* ESM import */var n=r(87363);/**
 * Render a container wrapping the month grids.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function o(e){return n.createElement("div",{...e})}//# sourceMappingURL=Months.js.map
},43498:function(e,t,r){r.d(t,{c:()=>a});/* ESM import */var n=r(87363);/* ESM import */var o=r(5293);/**
 * Render a dropdown to navigate between months in the calendar.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function a(e){const{components:t}=(0,o/* .useDayPicker */.k)();return n.createElement(t.Dropdown,{...e})}//# sourceMappingURL=MonthsDropdown.js.map
},30841:function(e,t,r){r.d(t,{J:()=>i});/* ESM import */var n=r(87363);/* ESM import */var o=r(6156);/* ESM import */var a=r(5293);/**
 * Render the navigation toolbar with buttons to navigate between months.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function i(e){const{onPreviousClick:t,onNextClick:r,previousMonth:i,nextMonth:s,...l}=e;const{components:c,classNames:d,labels:{labelPrevious:u,labelNext:v}}=(0,a/* .useDayPicker */.k)();const f=(0,n.useCallback)(e=>{if(s){r?.(e)}},[s,r]);const p=(0,n.useCallback)(e=>{if(i){t?.(e)}},[i,t]);return n.createElement("nav",{...l},n.createElement(c.PreviousMonthButton,{type:"button",className:d[o.UI.PreviousMonthButton],tabIndex:i?undefined:-1,"aria-disabled":i?undefined:true,"aria-label":u(i),onClick:p},n.createElement(c.Chevron,{disabled:i?undefined:true,className:d[o.UI.Chevron],orientation:"left"})),n.createElement(c.NextMonthButton,{type:"button",className:d[o.UI.NextMonthButton],tabIndex:s?undefined:-1,"aria-disabled":s?undefined:true,"aria-label":v(s),onClick:f},n.createElement(c.Chevron,{disabled:s?undefined:true,orientation:"right",className:d[o.UI.Chevron]})))}//# sourceMappingURL=Nav.js.map
},60296:function(e,t,r){r.d(t,{b:()=>a});/* ESM import */var n=r(87363);/* ESM import */var o=r(5293);/**
 * Render the button to navigate to the next month in the calendar.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function a(e){const{components:t}=(0,o/* .useDayPicker */.k)();return n.createElement(t.Button,{...e})}//# sourceMappingURL=NextMonthButton.js.map
},93073:function(e,t,r){r.d(t,{W:()=>o});/* ESM import */var n=r(87363);/**
 * Render an `option` element.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function o(e){return n.createElement("option",{...e})}//# sourceMappingURL=Option.js.map
},92348:function(e,t,r){r.d(t,{U:()=>a});/* ESM import */var n=r(87363);/* ESM import */var o=r(5293);/**
 * Render the button to navigate to the previous month in the calendar.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function a(e){const{components:t}=(0,o/* .useDayPicker */.k)();return n.createElement(t.Button,{...e})}//# sourceMappingURL=PreviousMonthButton.js.map
},24618:function(e,t,r){r.d(t,{f:()=>o});/* ESM import */var n=r(87363);/**
 * Render the root element of the calendar.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function o(e){const{rootRef:t,...r}=e;return n.createElement("div",{...r,ref:t})}//# sourceMappingURL=Root.js.map
},59145:function(e,t,r){r.d(t,{P:()=>o});/* ESM import */var n=r(87363);/**
 * Render a `select` element.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function o(e){return n.createElement("select",{...e})}//# sourceMappingURL=Select.js.map
},60287:function(e,t,r){r.d(t,{H:()=>o});/* ESM import */var n=r(87363);/**
 * Render a table row representing a week in the calendar.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function o(e){const{week:t,...r}=e;return n.createElement("tr",{...r})}//# sourceMappingURL=Week.js.map
},63914:function(e,t,r){r.d(t,{M:()=>o});/* ESM import */var n=r(87363);/**
 * Render a table cell displaying the number of the week.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function o(e){const{week:t,...r}=e;return n.createElement("th",{...r})}//# sourceMappingURL=WeekNumber.js.map
},78351:function(e,t,r){r.d(t,{o:()=>o});/* ESM import */var n=r(87363);/**
 * Render the header cell for the week numbers column.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function o(e){return n.createElement("th",{...e})}//# sourceMappingURL=WeekNumberHeader.js.map
},12620:function(e,t,r){r.d(t,{O:()=>o});/* ESM import */var n=r(87363);/**
 * Render a table header cell with the name of a weekday (e.g., "Mo", "Tu").
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function o(e){return n.createElement("th",{...e})}//# sourceMappingURL=Weekday.js.map
},56053:function(e,t,r){r.d(t,{o:()=>o});/* ESM import */var n=r(87363);/**
 * Render the table row containing the weekday names.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function o(e){return n.createElement("thead",{"aria-hidden":true},n.createElement("tr",{...e}))}//# sourceMappingURL=Weekdays.js.map
},51615:function(e,t,r){r.d(t,{B:()=>o});/* ESM import */var n=r(87363);/**
 * Render the container for the weeks in the month grid.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function o(e){return n.createElement("tbody",{...e})}//# sourceMappingURL=Weeks.js.map
},38678:function(e,t,r){r.d(t,{T:()=>a});/* ESM import */var n=r(87363);/* ESM import */var o=r(5293);/**
 * Render a dropdown to navigate between years in the calendar.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function a(e){const{components:t}=(0,o/* .useDayPicker */.k)();return n.createElement(t.Dropdown,{...e})}//# sourceMappingURL=YearsDropdown.js.map
},73840:function(e,t,r){r.r(t);r.d(t,{Button:()=>/* reexport safe */n.z,CaptionLabel:()=>/* reexport safe */o.i,Chevron:()=>/* reexport safe */a.T,Day:()=>/* reexport safe */i.J,DayButton:()=>/* reexport safe */s.b,Dropdown:()=>/* reexport safe */l.L,DropdownNav:()=>/* reexport safe */c.Z,Footer:()=>/* reexport safe */d.$,Month:()=>/* reexport safe */u.m,MonthCaption:()=>/* reexport safe */v.h,MonthGrid:()=>/* reexport safe */f.A,Months:()=>/* reexport safe */p.z,MonthsDropdown:()=>/* reexport safe */h.c,Nav:()=>/* reexport safe */g.J,NextMonthButton:()=>/* reexport safe */m.b,Option:()=>/* reexport safe */b.W,PreviousMonthButton:()=>/* reexport safe */_.U,Root:()=>/* reexport safe */y.f,Select:()=>/* reexport safe */w.P,Week:()=>/* reexport safe */x.H,WeekNumber:()=>/* reexport safe */C.M,WeekNumberHeader:()=>/* reexport safe */D.o,Weekday:()=>/* reexport safe */Z.O,Weekdays:()=>/* reexport safe */k.o,Weeks:()=>/* reexport safe */E.B,YearsDropdown:()=>/* reexport safe */S.T});/* ESM import */var n=r(77204);/* ESM import */var o=r(91293);/* ESM import */var a=r(1745);/* ESM import */var i=r(60442);/* ESM import */var s=r(17431);/* ESM import */var l=r(26031);/* ESM import */var c=r(58581);/* ESM import */var d=r(50947);/* ESM import */var u=r(18149);/* ESM import */var v=r(78136);/* ESM import */var f=r(51601);/* ESM import */var p=r(28299);/* ESM import */var h=r(43498);/* ESM import */var g=r(30841);/* ESM import */var m=r(60296);/* ESM import */var b=r(93073);/* ESM import */var _=r(92348);/* ESM import */var y=r(24618);/* ESM import */var w=r(59145);/* ESM import */var x=r(60287);/* ESM import */var Z=r(12620);/* ESM import */var k=r(56053);/* ESM import */var C=r(63914);/* ESM import */var D=r(78351);/* ESM import */var E=r(51615);/* ESM import */var S=r(38678);//# sourceMappingURL=custom-components.js.map
},2957:function(e,t,r){r.d(t,{I:()=>a,O:()=>o});/* ESM import */var n=r(65469);/**
 * Formats the caption of the month.
 *
 * @defaultValue `LLLL y` (e.g., "November 2022").
 * @param month The date representing the month.
 * @param options Configuration options for the date library.
 * @param dateLib The date library to use for formatting. If not provided, a new
 *   instance is created.
 * @returns The formatted caption as a string.
 * @group Formatters
 * @see https://daypicker.dev/docs/translation#custom-formatters
 */function o(e,t,r){return(r??new n/* .DateLib */.Z1(t)).format(e,"LLLL y")}/**
 * @private
 * @deprecated Use {@link formatCaption} instead.
 * @group Formatters
 */const a=o;//# sourceMappingURL=formatCaption.js.map
},29187:function(e,t,r){r.d(t,{f:()=>o});/* ESM import */var n=r(65469);/**
 * Formats the day date shown in the day cell.
 *
 * @defaultValue `d` (e.g., "1").
 * @param date The date to format.
 * @param options Configuration options for the date library.
 * @param dateLib The date library to use for formatting. If not provided, a new
 *   instance is created.
 * @returns The formatted day as a string.
 * @group Formatters
 * @see https://daypicker.dev/docs/translation#custom-formatters
 */function o(e,t,r){return(r??new n/* .DateLib */.Z1(t)).format(e,"d")}//# sourceMappingURL=formatDay.js.map
},6906:function(e,t,r){r.d(t,{E:()=>o});/* ESM import */var n=r(65469);/**
 * Formats the month for the dropdown option label.
 *
 * @defaultValue The localized full month name.
 * @param month The date representing the month.
 * @param dateLib The date library to use for formatting. Defaults to
 *   `defaultDateLib`.
 * @returns The formatted month name as a string.
 * @group Formatters
 * @see https://daypicker.dev/docs/translation#custom-formatters
 */function o(e,t=n/* .defaultDateLib */.zk){return t.format(e,"LLLL")}//# sourceMappingURL=formatMonthDropdown.js.map
},67221:function(e,t,r){r.d(t,{z:()=>o});/* ESM import */var n=r(65469);/**
 * Formats the week number.
 *
 * @defaultValue The week number as a string, with a leading zero for single-digit numbers.
 * @param weekNumber The week number to format.
 * @param dateLib The date library to use for formatting. Defaults to
 *   `defaultDateLib`.
 * @returns The formatted week number as a string.
 * @group Formatters
 * @see https://daypicker.dev/docs/translation#custom-formatters
 */function o(e,t=n/* .defaultDateLib */.zk){if(e<10){return t.formatNumber(`0${e.toLocaleString()}`)}return t.formatNumber(`${e.toLocaleString()}`)}//# sourceMappingURL=formatWeekNumber.js.map
},7655:function(e,t,r){r.d(t,{I:()=>n});/**
 * Formats the header for the week number column.
 *
 * @defaultValue An empty string `""`.
 * @returns The formatted week number header as a string.
 * @group Formatters
 * @see https://daypicker.dev/docs/translation#custom-formatters
 */function n(){return``}//# sourceMappingURL=formatWeekNumberHeader.js.map
},69583:function(e,t,r){r.d(t,{T:()=>o});/* ESM import */var n=r(65469);/**
 * Formats the name of a weekday to be displayed in the weekdays header.
 *
 * @defaultValue `cccccc` (e.g., "Mo" for Monday).
 * @param weekday The date representing the weekday.
 * @param options Configuration options for the date library.
 * @param dateLib The date library to use for formatting. If not provided, a new
 *   instance is created.
 * @returns The formatted weekday name as a string.
 * @group Formatters
 * @see https://daypicker.dev/docs/translation#custom-formatters
 */function o(e,t,r){return(r??new n/* .DateLib */.Z1(t)).format(e,"cccccc")}//# sourceMappingURL=formatWeekdayName.js.map
},41614:function(e,t,r){r.d(t,{N:()=>a,P:()=>o});/* ESM import */var n=r(65469);/**
 * Formats the year for the dropdown option label.
 *
 * @param year The year to format.
 * @param dateLib The date library to use for formatting. Defaults to
 *   `defaultDateLib`.
 * @returns The formatted year as a string.
 * @group Formatters
 * @see https://daypicker.dev/docs/translation#custom-formatters
 */function o(e,t=n/* .defaultDateLib */.zk){return t.format(e,"yyyy")}/**
 * @private
 * @deprecated Use `formatYearDropdown` instead.
 * @group Formatters
 */const a=o;//# sourceMappingURL=formatYearDropdown.js.map
},27790:function(e,t,r){r.r(t);r.d(t,{formatCaption:()=>/* reexport safe */n.O,formatDay:()=>/* reexport safe */o.f,formatMonthCaption:()=>/* reexport safe */n.I,formatMonthDropdown:()=>/* reexport safe */a.E,formatWeekNumber:()=>/* reexport safe */i.z,formatWeekNumberHeader:()=>/* reexport safe */s.I,formatWeekdayName:()=>/* reexport safe */l.T,formatYearCaption:()=>/* reexport safe */c.N,formatYearDropdown:()=>/* reexport safe */c.P});/* ESM import */var n=r(2957);/* ESM import */var o=r(29187);/* ESM import */var a=r(6906);/* ESM import */var i=r(67221);/* ESM import */var s=r(7655);/* ESM import */var l=r(69583);/* ESM import */var c=r(41614);//# sourceMappingURL=index.js.map
},79173:function(e,t,r){r.d(t,{k:()=>i});/* ESM import */var n=r(6156);var o;(function(e){e[e["Today"]=0]="Today";e[e["Selected"]=1]="Selected";e[e["LastFocused"]=2]="LastFocused";e[e["FocusedModifier"]=3]="FocusedModifier"})(o||(o={}));/**
 * Determines if a day is focusable based on its modifiers.
 *
 * A day is considered focusable if it is not disabled, hidden, or outside the
 * displayed month.
 *
 * @param modifiers The modifiers applied to the day.
 * @returns `true` if the day is focusable, otherwise `false`.
 */function a(e){return!e[n/* .DayFlag.disabled */.BE.disabled]&&!e[n/* .DayFlag.hidden */.BE.hidden]&&!e[n/* .DayFlag.outside */.BE.outside]}/**
 * Calculates the focus target day based on priority.
 *
 * This function determines the day that should receive focus in the calendar,
 * prioritizing days with specific modifiers (e.g., "focused", "today") or
 * selection states.
 *
 * @param days The array of `CalendarDay` objects to evaluate.
 * @param getModifiers A function to retrieve the modifiers for a given day.
 * @param isSelected A function to determine if a day is selected.
 * @param lastFocused The last focused day, if any.
 * @returns The `CalendarDay` that should receive focus, or `undefined` if no
 *   focusable day is found.
 */function i(e,t,r,i){let s;let l=-1;for(const c of e){const e=t(c);if(a(e)){if(e[n/* .DayFlag.focused */.BE.focused]&&l<o.FocusedModifier){s=c;l=o.FocusedModifier}else if(i?.isEqualTo(c)&&l<o.LastFocused){s=c;l=o.LastFocused}else if(r(c.date)&&l<o.Selected){s=c;l=o.Selected}else if(e[n/* .DayFlag.today */.BE.today]&&l<o.Today){s=c;l=o.Today}}}if(!s){// Return the first day that is focusable
s=e.find(e=>a(t(e)))}return s}//# sourceMappingURL=calculateFocusTarget.js.map
},48834:function(e,t,r){r.d(t,{H:()=>a});/* ESM import */var n=r(6156);/* ESM import */var o=r(52804);/**
 * Creates a function to retrieve the modifiers for a given day.
 *
 * This function calculates both internal and custom modifiers for each day
 * based on the provided calendar days and DayPicker props.
 *
 * @private
 * @param days The array of `CalendarDay` objects to process.
 * @param props The DayPicker props, including modifiers and configuration
 *   options.
 * @param dateLib The date library to use for date manipulation.
 * @returns A function that retrieves the modifiers for a given `CalendarDay`.
 */function a(e,t,r,a,i){const{disabled:s,hidden:l,modifiers:c,showOutsideDays:d,broadcastCalendar:u,today:v}=t;const{isSameDay:f,isSameMonth:p,startOfMonth:h,isBefore:g,endOfMonth:m,isAfter:b}=i;const _=r&&h(r);const y=a&&m(a);const w={[n/* .DayFlag.focused */.BE.focused]:[],[n/* .DayFlag.outside */.BE.outside]:[],[n/* .DayFlag.disabled */.BE.disabled]:[],[n/* .DayFlag.hidden */.BE.hidden]:[],[n/* .DayFlag.today */.BE.today]:[]};const x={};for(const t of e){const{date:e,displayMonth:r}=t;const n=Boolean(r&&!p(e,r));const a=Boolean(_&&g(e,_));const h=Boolean(y&&b(e,y));const m=Boolean(s&&(0,o/* .dateMatchModifiers */.W)(e,s,i));const Z=Boolean(l&&(0,o/* .dateMatchModifiers */.W)(e,l,i))||a||h||// Broadcast calendar will show outside days as default
!u&&!d&&n||u&&d===false&&n;const k=f(e,v??i.today());if(n)w.outside.push(t);if(m)w.disabled.push(t);if(Z)w.hidden.push(t);if(k)w.today.push(t);// Add custom modifiers
if(c){Object.keys(c).forEach(r=>{const n=c?.[r];const a=n?(0,o/* .dateMatchModifiers */.W)(e,n,i):false;if(!a)return;if(x[r]){x[r].push(t)}else{x[r]=[t]}})}}return e=>{// Initialize all the modifiers to false
const t={[n/* .DayFlag.focused */.BE.focused]:false,[n/* .DayFlag.disabled */.BE.disabled]:false,[n/* .DayFlag.hidden */.BE.hidden]:false,[n/* .DayFlag.outside */.BE.outside]:false,[n/* .DayFlag.today */.BE.today]:false};const r={};// Find the modifiers for the given day
for(const r in w){const n=w[r];t[r]=n.some(t=>t===e)}for(const t in x){r[t]=x[t].some(t=>t===e)}return{...t,// custom modifiers should override all the previous ones
...r}}}//# sourceMappingURL=createGetModifiers.js.map
},11548:function(e,t,r){r.d(t,{r:()=>a});/* ESM import */var n=r(59582);/* ESM import */var o=r(29726);/**
 * Returns the end date of the week in the broadcast calendar.
 *
 * The broadcast week ends on the last day of the last broadcast week for the
 * given date.
 *
 * @since 9.4.0
 * @param date The date for which to calculate the end of the broadcast week.
 * @param dateLib The date library to use for date manipulation.
 * @returns The end date of the broadcast week.
 */function a(e,t){const r=(0,o/* .startOfBroadcastWeek */.i)(e,t);const a=(0,n/* .getBroadcastWeeksInMonth */.I)(e,t);const i=t.addDays(r,a*7-1);return i}//# sourceMappingURL=endOfBroadcastWeek.js.map
},59582:function(e,t,r){r.d(t,{I:()=>a});const n=5;const o=4;/**
 * Returns the number of weeks to display in the broadcast calendar for a given
 * month.
 *
 * The broadcast calendar may have either 4 or 5 weeks in a month, depending on
 * the start and end dates of the broadcast weeks.
 *
 * @since 9.4.0
 * @param month The month for which to calculate the number of weeks.
 * @param dateLib The date library to use for date manipulation.
 * @returns The number of weeks in the broadcast calendar (4 or 5).
 */function a(e,t){// Get the first day of the month
const r=t.startOfMonth(e);// Get the day of the week for the first day of the month (1-7, where 1 is Monday)
const a=r.getDay()>0?r.getDay():7;const i=t.addDays(e,-a+1);const s=t.addDays(i,n*7-1);const l=t.getMonth(e)===t.getMonth(s)?n:o;return l}//# sourceMappingURL=getBroadcastWeeksInMonth.js.map
},52395:function(e,t,r){r.d(t,{k:()=>o});/* ESM import */var n=r(6156);/**
 * Returns the class names for a day based on its modifiers.
 *
 * This function combines the base class name for the day with any class names
 * associated with active modifiers.
 *
 * @param modifiers The modifiers applied to the day.
 * @param classNames The base class names for the calendar elements.
 * @param modifiersClassNames The class names associated with specific
 *   modifiers.
 * @returns An array of class names for the day.
 */function o(e,t,r={}){const a=Object.entries(e).filter(([,e])=>e===true).reduce((e,[o])=>{if(r[o]){e.push(r[o])}else if(t[n/* .DayFlag */.BE[o]]){e.push(t[n/* .DayFlag */.BE[o]])}else if(t[n/* .SelectionState */.fP[o]]){e.push(t[n/* .SelectionState */.fP[o]])}return e},[t[n.UI.Day]]);return a}//# sourceMappingURL=getClassNamesForModifiers.js.map
},18296:function(e,t,r){r.d(t,{O:()=>o});/* ESM import */var n=r(73840);/**
 * Merges custom components from the props with the default components.
 *
 * This function ensures that any custom components provided in the props
 * override the default components.
 *
 * @param customComponents The custom components provided in the DayPicker
 *   props.
 * @returns An object containing the merged components.
 */function o(e){return{...n,...e}}//# sourceMappingURL=getComponents.js.map
},54054:function(e,t,r){r.d(t,{P:()=>n});/**
 * Extracts `data-` attributes from the DayPicker props.
 *
 * This function collects all `data-` attributes from the props and adds
 * additional attributes based on the DayPicker configuration.
 *
 * @param props The DayPicker props.
 * @returns An object containing the `data-` attributes.
 */function n(e){const t={"data-mode":e.mode??undefined,"data-required":"required"in e?e.required:undefined,"data-multiple-months":e.numberOfMonths&&e.numberOfMonths>1||undefined,"data-week-numbers":e.showWeekNumber||undefined,"data-broadcast-calendar":e.broadcastCalendar||undefined,"data-nav-layout":e.navLayout||undefined};Object.entries(e).forEach(([e,r])=>{if(e.startsWith("data-")){t[e]=r}});return t}//# sourceMappingURL=getDataAttributes.js.map
},11732:function(e,t,r){r.d(t,{i:()=>n});/**
 * Returns all the dates to display in the calendar.
 *
 * This function calculates the range of dates to display based on the provided
 * display months, constraints, and calendar configuration.
 *
 * @param displayMonths The months to display in the calendar.
 * @param maxDate The maximum date to include in the range.
 * @param props The DayPicker props, including calendar configuration options.
 * @param dateLib The date library to use for date manipulation.
 * @returns An array of dates to display in the calendar.
 */function n(e,t,r,n){const o=e[0];const a=e[e.length-1];const{ISOWeek:i,fixedWeeks:s,broadcastCalendar:l}=r??{};const{addDays:c,differenceInCalendarDays:d,differenceInCalendarMonths:u,endOfBroadcastWeek:v,endOfISOWeek:f,endOfMonth:p,endOfWeek:h,isAfter:g,startOfBroadcastWeek:m,startOfISOWeek:b,startOfWeek:_}=n;const y=l?m(o,n):i?b(o):_(o);const w=l?v(a):i?f(p(a)):h(p(a));const x=d(w,y);const Z=u(a,o)+1;const k=[];for(let e=0;e<=x;e++){const r=c(y,e);if(t&&g(r,t)){break}k.push(r)}// If fixed weeks is enabled, add the extra dates to the array
const C=l?35:42;const D=C*Z;if(s&&k.length<D){const e=D-k.length;for(let t=0;t<e;t++){const e=c(k[k.length-1],1);k.push(e)}}return k}//# sourceMappingURL=getDates.js.map
},84517:function(e,t,r){r.d(t,{g:()=>n});/**
 * Returns all the days belonging to the calendar by merging the days in the
 * weeks for each month.
 *
 * @param calendarMonths The array of calendar months.
 * @returns An array of `CalendarDay` objects representing all the days in the
 *   calendar.
 */function n(e){const t=[];return e.reduce((e,r)=>{const n=r.weeks.reduce((e,t)=>{return[...e,...t.days]},t);return[...e,...n]},t)}//# sourceMappingURL=getDays.js.map
},45734:function(e,t,r){r.d(t,{U:()=>o});/* ESM import */var n=r(6156);/**
 * Returns the default class names for the UI elements.
 *
 * This function generates a mapping of default class names for various UI
 * elements, day flags, selection states, and animations.
 *
 * @returns An object containing the default class names.
 * @group Utilities
 */function o(){const e={};for(const t in n.UI){e[n.UI[t]]=`rdp-${n.UI[t]}`}for(const t in n/* .DayFlag */.BE){e[n/* .DayFlag */.BE[t]]=`rdp-${n/* .DayFlag */.BE[t]}`}for(const t in n/* .SelectionState */.fP){e[n/* .SelectionState */.fP[t]]=`rdp-${n/* .SelectionState */.fP[t]}`}for(const t in n/* .Animation */.fw){e[n/* .Animation */.fw[t]]=`rdp-${n/* .Animation */.fw[t]}`}return e}//# sourceMappingURL=getDefaultClassNames.js.map
},6341:function(e,t,r){r.d(t,{b:()=>n});/**
 * Returns the months to display in the calendar.
 *
 * @param firstDisplayedMonth The first month currently displayed in the
 *   calendar.
 * @param calendarEndMonth The latest month the user can navigate to.
 * @param props The DayPicker props, including `numberOfMonths`.
 * @param dateLib The date library to use for date manipulation.
 * @returns An array of dates representing the months to display.
 */function n(e,t,r,n){const{numberOfMonths:o=1}=r;const a=[];for(let r=0;r<o;r++){const o=n.addMonths(e,r);if(t&&o>t){break}a.push(o)}return a}//# sourceMappingURL=getDisplayMonths.js.map
},9025:function(e,t,r){r.d(t,{N:()=>n});/**
 * Calculates the next date that should be focused in the calendar.
 *
 * This function determines the next focusable date based on the movement
 * direction, constraints, and calendar configuration.
 *
 * @param moveBy The unit of movement (e.g., "day", "week").
 * @param moveDir The direction of movement ("before" or "after").
 * @param refDate The reference date from which to calculate the next focusable
 *   date.
 * @param navStart The earliest date the user can navigate to.
 * @param navEnd The latest date the user can navigate to.
 * @param props The DayPicker props, including calendar configuration options.
 * @param dateLib The date library to use for date manipulation.
 * @returns The next focusable date.
 */function n(e,t,r,n,o,a,i){const{ISOWeek:s,broadcastCalendar:l}=a;const{addDays:c,addMonths:d,addWeeks:u,addYears:v,endOfBroadcastWeek:f,endOfISOWeek:p,endOfWeek:h,max:g,min:m,startOfBroadcastWeek:b,startOfISOWeek:_,startOfWeek:y}=i;const w={day:c,week:u,month:d,year:v,startOfWeek:e=>l?b(e,i):s?_(e):y(e),endOfWeek:e=>l?f(e):s?p(e):h(e)};let x=w[e](r,t==="after"?1:-1);if(t==="before"&&n){x=g([n,x])}else if(t==="after"&&o){x=m([o,x])}return x}//# sourceMappingURL=getFocusableDate.js.map
},54908:function(e,t,r){r.d(t,{_:()=>o});/* ESM import */var n=r(27790);/**
 * Merges custom formatters from the props with the default formatters.
 *
 * @param customFormatters The custom formatters provided in the DayPicker
 *   props.
 * @returns The merged formatters object.
 */function o(e){if(e?.formatMonthCaption&&!e.formatCaption){e.formatCaption=e.formatMonthCaption}if(e?.formatYearCaption&&!e.formatYearDropdown){e.formatYearDropdown=e.formatYearCaption}return{...n,...e}}//# sourceMappingURL=getFormatters.js.map
},82283:function(e,t,r){r.d(t,{Z:()=>n});/**
 * Determines the initial month to display in the calendar based on the provided
 * props.
 *
 * This function calculates the starting month, considering constraints such as
 * `startMonth`, `endMonth`, and the number of months to display.
 *
 * @param props The DayPicker props, including navigation and date constraints.
 * @param dateLib The date library to use for date manipulation.
 * @returns The initial month to display.
 */function n(e,t,r,n){const{month:o,defaultMonth:a,today:i=n.today(),numberOfMonths:s=1}=e;let l=o||a||i;const{differenceInCalendarMonths:c,addMonths:d,startOfMonth:u}=n;if(r&&c(r,l)<s-1){const e=-1*(s-1);l=d(r,e)}if(t&&c(l,t)<0){l=t}return u(l)}//# sourceMappingURL=getInitialMonth.js.map
},71264:function(e,t,r){r.d(t,{d:()=>n});/**
 * Returns the months to show in the dropdown.
 *
 * This function generates a list of months for the current year, formatted
 * using the provided formatter, and determines whether each month should be
 * disabled based on the navigation range.
 *
 * @param displayMonth The currently displayed month.
 * @param navStart The start date for navigation.
 * @param navEnd The end date for navigation.
 * @param formatters The formatters to use for formatting the month labels.
 * @param dateLib The date library to use for date manipulation.
 * @returns An array of dropdown options representing the months, or `undefined`
 *   if no months are available.
 */function n(e,t,r,n,o){const{startOfMonth:a,startOfYear:i,endOfYear:s,eachMonthOfInterval:l,getMonth:c}=o;const d=l({start:i(e),end:s(e)});const u=d.map(e=>{const i=n.formatMonthDropdown(e,o);const s=c(e);const l=t&&e<a(t)||r&&e>a(r)||false;return{value:s,label:i,disabled:l}});return u}//# sourceMappingURL=getMonthOptions.js.map
},97018:function(e,t,r){r.d(t,{w:()=>i});/* ESM import */var n=r(77827);/* ESM import */var o=r(26046);/* ESM import */var a=r(50644);/**
 * Returns the months to display in the calendar.
 *
 * This function generates `CalendarMonth` objects for each month to be
 * displayed, including their weeks and days, based on the provided display
 * months and dates.
 *
 * @param displayMonths The months (as dates) to display in the calendar.
 * @param dates The dates to display in the calendar.
 * @param props Options from the DayPicker props context.
 * @param dateLib The date library to use for date manipulation.
 * @returns An array of `CalendarMonth` objects representing the months to
 *   display.
 */function i(e,t,r,i){const{addDays:s,endOfBroadcastWeek:l,endOfISOWeek:c,endOfMonth:d,endOfWeek:u,getISOWeek:v,getWeek:f,startOfBroadcastWeek:p,startOfISOWeek:h,startOfWeek:g}=i;const m=e.reduce((e,m)=>{const b=r.broadcastCalendar?p(m,i):r.ISOWeek?h(m):g(m);const _=r.broadcastCalendar?l(m):r.ISOWeek?c(d(m)):u(d(m));/** The dates to display in the month. */const y=t.filter(e=>{return e>=b&&e<=_});const w=r.broadcastCalendar?35:42;if(r.fixedWeeks&&y.length<w){const e=t.filter(e=>{const t=w-y.length;return e>_&&e<=s(_,t)});y.push(...e)}const x=y.reduce((e,t)=>{const a=r.ISOWeek?v(t):f(t);const s=e.find(e=>e.weekNumber===a);const l=new n/* .CalendarDay */.X(t,m,i);if(!s){e.push(new o/* .CalendarWeek */.u(a,[l]))}else{s.days.push(l)}return e},[]);const Z=new a/* .CalendarMonth */.C(m,x);e.push(Z);return e},[]);if(!r.reverseMonths){return m}else{return m.reverse()}}//# sourceMappingURL=getMonths.js.map
},38540:function(e,t,r){r.d(t,{P:()=>n});/**
 * Returns the start and end months for calendar navigation.
 *
 * @param props The DayPicker props, including navigation and layout options.
 * @param dateLib The date library to use for date manipulation.
 * @returns A tuple containing the start and end months for navigation.
 */function n(e,t){let{startMonth:r,endMonth:n}=e;const{startOfYear:o,startOfDay:a,startOfMonth:i,endOfMonth:s,addYears:l,endOfYear:c,newDate:d,today:u}=t;// Handle deprecated code
const{fromYear:v,toYear:f,fromMonth:p,toMonth:h}=e;if(!r&&p){r=p}if(!r&&v){r=t.newDate(v,0,1)}if(!n&&h){n=h}if(!n&&f){n=d(f,11,31)}const g=e.captionLayout==="dropdown"||e.captionLayout==="dropdown-years";if(r){r=i(r)}else if(v){r=d(v,0,1)}else if(!r&&g){r=o(l(e.today??u(),-100))}if(n){n=s(n)}else if(f){n=d(f,11,31)}else if(!n&&g){n=c(e.today??u())}return[r?a(r):r,n?a(n):n]}//# sourceMappingURL=getNavMonth.js.map
},84110:function(e,t,r){r.d(t,{j:()=>i});/* ESM import */var n=r(77827);/* ESM import */var o=r(52804);/* ESM import */var a=r(9025);/**
 * Determines the next focusable day in the calendar.
 *
 * This function recursively calculates the next focusable day based on the
 * movement direction and modifiers applied to the days.
 *
 * @param moveBy The unit of movement (e.g., "day", "week").
 * @param moveDir The direction of movement ("before" or "after").
 * @param refDay The currently focused day.
 * @param calendarStartMonth The earliest month the user can navigate to.
 * @param calendarEndMonth The latest month the user can navigate to.
 * @param props The DayPicker props, including modifiers and configuration
 *   options.
 * @param dateLib The date library to use for date manipulation.
 * @param attempt The current recursion attempt (used to limit recursion depth).
 * @returns The next focusable day, or `undefined` if no focusable day is found.
 */function i(e,t,r,s,l,c,d,u=0){if(u>365){// Limit the recursion to 365 attempts
return undefined}const v=(0,a/* .getFocusableDate */.N)(e,t,r.date,s,l,c,d);const f=Boolean(c.disabled&&(0,o/* .dateMatchModifiers */.W)(v,c.disabled,d));const p=Boolean(c.hidden&&(0,o/* .dateMatchModifiers */.W)(v,c.hidden,d));const h=v;const g=new n/* .CalendarDay */.X(v,h,d);if(!f&&!p){return g}// Recursively attempt to find the next focusable date
return i(e,t,g,s,l,c,d,u+1)}//# sourceMappingURL=getNextFocus.js.map
},22663:function(e,t,r){r.d(t,{f:()=>n});/**
 * Returns the next month the user can navigate to, based on the given options.
 *
 * The next month is not always the next calendar month:
 *
 * - If it is after the `calendarEndMonth`, it returns `undefined`.
 * - If paged navigation is enabled, it skips forward by the number of displayed
 *   months.
 *
 * @param firstDisplayedMonth The first month currently displayed in the
 *   calendar.
 * @param calendarEndMonth The latest month the user can navigate to.
 * @param options Navigation options, including `numberOfMonths` and
 *   `pagedNavigation`.
 * @param dateLib The date library to use for date manipulation.
 * @returns The next month, or `undefined` if navigation is not possible.
 */function n(e,t,r,n){if(r.disableNavigation){return undefined}const{pagedNavigation:o,numberOfMonths:a=1}=r;const{startOfMonth:i,addMonths:s,differenceInCalendarMonths:l}=n;const c=o?a:1;const d=i(e);if(!t){return s(d,c)}const u=l(t,e);if(u<a){return undefined}return s(d,c)}//# sourceMappingURL=getNextMonth.js.map
},88490:function(e,t,r){r.d(t,{S:()=>n});/**
 * Returns the previous month the user can navigate to, based on the given
 * options.
 *
 * The previous month is not always the previous calendar month:
 *
 * - If it is before the `calendarStartMonth`, it returns `undefined`.
 * - If paged navigation is enabled, it skips back by the number of displayed
 *   months.
 *
 * @param firstDisplayedMonth The first month currently displayed in the
 *   calendar.
 * @param calendarStartMonth The earliest month the user can navigate to.
 * @param options Navigation options, including `numberOfMonths` and
 *   `pagedNavigation`.
 * @param dateLib The date library to use for date manipulation.
 * @returns The previous month, or `undefined` if navigation is not possible.
 */function n(e,t,r,n){if(r.disableNavigation){return undefined}const{pagedNavigation:o,numberOfMonths:a}=r;const{startOfMonth:i,addMonths:s,differenceInCalendarMonths:l}=n;const c=o?a??1:1;const d=i(e);if(!t){return s(d,-c)}const u=l(d,t);if(u<=0){return undefined}return s(d,-c)}//# sourceMappingURL=getPreviousMonth.js.map
},64347:function(e,t,r){r.d(t,{D:()=>o});/* ESM import */var n=r(6156);/**
 * Returns the computed style for a day based on its modifiers.
 *
 * This function merges the base styles for the day with any styles associated
 * with active modifiers.
 *
 * @param dayModifiers The modifiers applied to the day.
 * @param styles The base styles for the calendar elements.
 * @param modifiersStyles The styles associated with specific modifiers.
 * @returns The computed style for the day.
 */function o(e,t={},r={}){let a={...t?.[n.UI.Day]};Object.entries(e).filter(([,e])=>e===true).forEach(([e])=>{a={...a,...r?.[e]}});return a}//# sourceMappingURL=getStyleForModifiers.js.map
},77614:function(e,t,r){r.d(t,{D:()=>n});/**
 * Generates a series of 7 days, starting from the beginning of the week, to use
 * for formatting weekday names (e.g., Monday, Tuesday, etc.).
 *
 * @param dateLib The date library to use for date manipulation.
 * @param ISOWeek Whether to use ISO week numbering (weeks start on Monday).
 * @param broadcastCalendar Whether to use the broadcast calendar (weeks start
 *   on Monday, but may include adjustments for broadcast-specific rules).
 * @returns An array of 7 dates representing the weekdays.
 */function n(e,t,r){const n=e.today();const o=r?e.startOfBroadcastWeek(n,e):t?e.startOfISOWeek(n):e.startOfWeek(n);const a=[];for(let t=0;t<7;t++){const r=e.addDays(o,t);a.push(r)}return a}//# sourceMappingURL=getWeekdays.js.map
},60049:function(e,t,r){r.d(t,{K:()=>n});/**
 * Returns an array of calendar weeks from an array of calendar months.
 *
 * @param months The array of calendar months.
 * @returns An array of calendar weeks.
 */function n(e){const t=[];return e.reduce((e,t)=>{return[...e,...t.weeks]},t)}//# sourceMappingURL=getWeeks.js.map
},62464:function(e,t,r){r.d(t,{h:()=>n});/**
 * Returns the years to display in the dropdown.
 *
 * This function generates a list of years between the navigation start and end
 * dates, formatted using the provided formatter.
 *
 * @param navStart The start date for navigation.
 * @param navEnd The end date for navigation.
 * @param formatters The formatters to use for formatting the year labels.
 * @param dateLib The date library to use for date manipulation.
 * @returns An array of dropdown options representing the years, or `undefined`
 *   if `navStart` or `navEnd` is not provided.
 */function n(e,t,r,n){if(!e)return undefined;if(!t)return undefined;const{startOfYear:o,endOfYear:a,addYears:i,getYear:s,isBefore:l,isSameYear:c}=n;const d=o(e);const u=a(t);const v=[];let f=d;while(l(f,u)||c(f,u)){v.push(f);f=i(f,1)}return v.map(e=>{const t=r.formatYearDropdown(e,n);return{value:s(e),label:t,disabled:false}})}//# sourceMappingURL=getYearOptions.js.map
},29726:function(e,t,r){r.d(t,{i:()=>n});/**
 * Returns the start date of the week in the broadcast calendar.
 *
 * The broadcast week starts on Monday. If the first day of the month is not a
 * Monday, this function calculates the previous Monday as the start of the
 * broadcast week.
 *
 * @since 9.4.0
 * @param date The date for which to calculate the start of the broadcast week.
 * @param dateLib The date library to use for date manipulation.
 * @returns The start date of the broadcast week.
 */function n(e,t){const r=t.startOfMonth(e);const n=r.getDay();if(n===1){return r}else if(n===0){return t.addDays(r,-1*6)}else{return t.addDays(r,-1*(n-1))}}//# sourceMappingURL=startOfBroadcastWeek.js.map
},50717:function(e,t,r){r.d(t,{O:()=>o});/* ESM import */var n=r(87363);/**
 * A custom hook for managing both controlled and uncontrolled component states.
 *
 * This hook allows a component to support both controlled and uncontrolled
 * states by determining whether the `controlledValue` is provided. If it is
 * undefined, the hook falls back to using the internal state.
 *
 * @example
 *   // Uncontrolled usage
 *   const [value, setValue] = useControlledValue(0, undefined);
 *
 *   // Controlled usage
 *   const [value, setValue] = useControlledValue(0, props.value);
 *
 * @template T - The type of the value.
 * @param defaultValue The initial value for the uncontrolled state.
 * @param controlledValue The value for the controlled state. If undefined, the
 *   component will use the uncontrolled state.
 * @returns A tuple where the first element is the current value (either
 *   controlled or uncontrolled) and the second element is a setter function to
 *   update the value.
 */function o(e,t){const[r,o]=(0,n.useState)(e);const a=t===undefined?r:t;return[a,o]}//# sourceMappingURL=useControlledValue.js.map
},58100:function(e,t,r){r.r(t);r.d(t,{labelCaption:()=>/* reexport safe */n.D,labelDay:()=>/* reexport safe */a.Q,labelDayButton:()=>/* reexport safe */a.l,labelGrid:()=>/* reexport safe */n.v,labelGridcell:()=>/* reexport safe */o.R,labelMonthDropdown:()=>/* reexport safe */s.N,labelNav:()=>/* reexport safe */i.g,labelNext:()=>/* reexport safe */l.T,labelPrevious:()=>/* reexport safe */c.b,labelWeekNumber:()=>/* reexport safe */u.j,labelWeekNumberHeader:()=>/* reexport safe */v.E,labelWeekday:()=>/* reexport safe */d.O,labelYearDropdown:()=>/* reexport safe */f.I});/* ESM import */var n=r(80782);/* ESM import */var o=r(54428);/* ESM import */var a=r(95490);/* ESM import */var i=r(88234);/* ESM import */var s=r(60327);/* ESM import */var l=r(96368);/* ESM import */var c=r(55341);/* ESM import */var d=r(79231);/* ESM import */var u=r(58095);/* ESM import */var v=r(82779);/* ESM import */var f=r(58634);//# sourceMappingURL=index.js.map
},95490:function(e,t,r){r.d(t,{Q:()=>a,l:()=>o});/* ESM import */var n=r(65469);/**
 * Generates the ARIA label for a day button.
 *
 * Use the `modifiers` argument to provide additional context for the label,
 * such as indicating if the day is "today" or "selected."
 *
 * @defaultValue The formatted date.
 * @param date - The date to format.
 * @param modifiers - The modifiers providing context for the day.
 * @param options - Optional configuration for the date formatting library.
 * @param dateLib - An optional instance of the date formatting library.
 * @returns The ARIA label for the day button.
 * @group Labels
 * @see https://daypicker.dev/docs/translation#aria-labels
 */function o(e,t,r,o){let a=(o??new n/* .DateLib */.Z1(r)).format(e,"PPPP");if(t.today)a=`Today, ${a}`;if(t.selected)a=`${a}, selected`;return a}/**
 * @ignore
 * @deprecated Use `labelDayButton` instead.
 */const a=o;//# sourceMappingURL=labelDayButton.js.map
},80782:function(e,t,r){r.d(t,{D:()=>a,v:()=>o});/* ESM import */var n=r(65469);/**
 * Generates the ARIA label for the month grid, which is announced when entering
 * the grid.
 *
 * @defaultValue `LLLL y` (e.g., "November 2022").
 * @param date - The date representing the month.
 * @param options - Optional configuration for the date formatting library.
 * @param dateLib - An optional instance of the date formatting library.
 * @returns The ARIA label for the month grid.
 * @group Labels
 * @see https://daypicker.dev/docs/translation#aria-labels
 */function o(e,t,r){return(r??new n/* .DateLib */.Z1(t)).format(e,"LLLL y")}/**
 * @ignore
 * @deprecated Use {@link labelGrid} instead.
 */const a=o;//# sourceMappingURL=labelGrid.js.map
},54428:function(e,t,r){r.d(t,{R:()=>o});/* ESM import */var n=r(65469);/**
 * Generates the label for a day grid cell when the calendar is not interactive.
 *
 * @param date - The date to format.
 * @param modifiers - Optional modifiers providing context for the day.
 * @param options - Optional configuration for the date formatting library.
 * @param dateLib - An optional instance of the date formatting library.
 * @returns The label for the day grid cell.
 * @group Labels
 * @see https://daypicker.dev/docs/translation#aria-labels
 */function o(e,t,r,o){let a=(o??new n/* .DateLib */.Z1(r)).format(e,"PPPP");if(t?.today){a=`Today, ${a}`}return a}//# sourceMappingURL=labelGridcell.js.map
},60327:function(e,t,r){r.d(t,{N:()=>n});/**
 * Generates the ARIA label for the months dropdown.
 *
 * @defaultValue `"Choose the Month"`
 * @param options - Optional configuration for the date formatting library.
 * @returns The ARIA label for the months dropdown.
 * @group Labels
 * @see https://daypicker.dev/docs/translation#aria-labels
 */function n(e){return"Choose the Month"}//# sourceMappingURL=labelMonthDropdown.js.map
},88234:function(e,t,r){r.d(t,{g:()=>n});/**
 * Generates the ARIA label for the navigation toolbar.
 *
 * @defaultValue `""`
 * @returns The ARIA label for the navigation toolbar.
 * @group Labels
 * @see https://daypicker.dev/docs/translation#aria-labels
 */function n(){return""}//# sourceMappingURL=labelNav.js.map
},96368:function(e,t,r){r.d(t,{T:()=>n});/**
 * Generates the ARIA label for the "next month" button.
 *
 * @defaultValue `"Go to the Next Month"`
 * @param month - The date representing the next month, or `undefined` if there
 *   is no next month.
 * @returns The ARIA label for the "next month" button.
 * @group Labels
 * @see https://daypicker.dev/docs/translation#aria-labels
 */function n(e){return"Go to the Next Month"}//# sourceMappingURL=labelNext.js.map
},55341:function(e,t,r){r.d(t,{b:()=>n});/**
 * Generates the ARIA label for the "previous month" button.
 *
 * @defaultValue `"Go to the Previous Month"`
 * @param month - The date representing the previous month, or `undefined` if
 *   there is no previous month.
 * @returns The ARIA label for the "previous month" button.
 * @group Labels
 * @see https://daypicker.dev/docs/translation#aria-labels
 */function n(e){return"Go to the Previous Month"}//# sourceMappingURL=labelPrevious.js.map
},58095:function(e,t,r){r.d(t,{j:()=>n});/**
 * Generates the ARIA label for the week number cell (the first cell in a row).
 *
 * @defaultValue `Week ${weekNumber}`
 * @param weekNumber - The number of the week.
 * @param options - Optional configuration for the date formatting library.
 * @returns The ARIA label for the week number cell.
 * @group Labels
 * @see https://daypicker.dev/docs/translation#aria-labels
 */function n(e,t){return`Week ${e}`}//# sourceMappingURL=labelWeekNumber.js.map
},82779:function(e,t,r){r.d(t,{E:()=>n});/**
 * Generates the ARIA label for the week number header element.
 *
 * @defaultValue `"Week Number"`
 * @param options - Optional configuration for the date formatting library.
 * @returns The ARIA label for the week number header.
 * @group Labels
 * @see https://daypicker.dev/docs/translation#aria-labels
 */function n(e){return"Week Number"}//# sourceMappingURL=labelWeekNumberHeader.js.map
},79231:function(e,t,r){r.d(t,{O:()=>o});/* ESM import */var n=r(65469);/**
 * Generates the ARIA label for a weekday column header.
 *
 * @defaultValue `"Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"`
 * @param date - The date representing the weekday.
 * @param options - Optional configuration for the date formatting library.
 * @param dateLib - An optional instance of the date formatting library.
 * @returns The ARIA label for the weekday column header.
 * @group Labels
 * @see https://daypicker.dev/docs/translation#aria-labels
 */function o(e,t,r){return(r??new n/* .DateLib */.Z1(t)).format(e,"cccc")}//# sourceMappingURL=labelWeekday.js.map
},58634:function(e,t,r){r.d(t,{I:()=>n});/**
 * Generates the ARIA label for the years dropdown.
 *
 * @defaultValue `"Choose the Year"`
 * @param options - Optional configuration for the date formatting library.
 * @returns The ARIA label for the years dropdown.
 * @group Labels
 * @see https://daypicker.dev/docs/translation#aria-labels
 */function n(e){return"Choose the Year"}//# sourceMappingURL=labelYearDropdown.js.map
},13796:function(e,t,r){r.d(t,{R:()=>o});/* ESM import */var n=r(50717);/**
 * Hook to manage multiple-date selection in the DayPicker component.
 *
 * @template T - The type of DayPicker props.
 * @param props - The DayPicker props.
 * @param dateLib - The date utility library instance.
 * @returns An object containing the selected dates, a function to select dates,
 *   and a function to check if a date is selected.
 */function o(e,t){const{selected:r,required:o,onSelect:a}=e;const[i,s]=(0,n/* .useControlledValue */.O)(r,a?r:undefined);const l=!a?i:r;const{isSameDay:c}=t;const d=e=>{return l?.some(t=>c(t,e))??false};const{min:u,max:v}=e;const f=(e,t,r)=>{let n=[...l??[]];if(d(e)){if(l?.length===u){// Min value reached, do nothing
return}if(o&&l?.length===1){// Required value already selected do nothing
return}n=l?.filter(t=>!c(t,e))}else{if(l?.length===v){// Max value reached, reset the selection to date
n=[e]}else{// Add the date to the selection
n=[...n,e]}}if(!a){s(n)}a?.(n,e,t,r);return n};return{selected:l,select:f,isSelected:d}}//# sourceMappingURL=useMulti.js.map
},9998:function(e,t,r){r.d(t,{C:()=>s});/* ESM import */var n=r(50717);/* ESM import */var o=r(16257);/* ESM import */var a=r(99217);/* ESM import */var i=r(94232);/**
 * Hook to manage range selection in the DayPicker component.
 *
 * @template T - The type of DayPicker props.
 * @param props - The DayPicker props.
 * @param dateLib - The date utility library instance.
 * @returns An object containing the selected range, a function to select a
 *   range, and a function to check if a date is within the range.
 */function s(e,t){const{disabled:r,excludeDisabled:s,selected:l,required:c,onSelect:d}=e;const[u,v]=(0,n/* .useControlledValue */.O)(l,d?l:undefined);const f=!d?u:l;const p=e=>f&&(0,i/* .rangeIncludesDate */.C)(f,e,false,t);const h=(n,i,l)=>{const{min:u,max:p}=e;const h=n?(0,o/* .addToRange */.n)(n,f,u,p,c,t):undefined;if(s&&r&&h?.from&&h.to){if((0,a/* .rangeContainsModifiers */.C)({from:h.from,to:h.to},r,t)){// if a disabled days is found, the range is reset
h.from=n;h.to=undefined}}if(!d){v(h)}d?.(h,n,i,l);return h};return{selected:f,select:h,isSelected:p}}//# sourceMappingURL=useRange.js.map
},67413:function(e,t,r){r.d(t,{G:()=>o});/* ESM import */var n=r(50717);/**
 * Hook to manage single-date selection in the DayPicker component.
 *
 * @template T - The type of DayPicker props.
 * @param props - The DayPicker props.
 * @param dateLib - The date utility library instance.
 * @returns An object containing the selected date, a function to select a date,
 *   and a function to check if a date is selected.
 */function o(e,t){const{selected:r,required:o,onSelect:a}=e;const[i,s]=(0,n/* .useControlledValue */.O)(r,a?r:undefined);const l=!a?i:r;const{isSameDay:c}=t;const d=e=>{return l?c(l,e):false};const u=(e,t,r)=>{let n=e;if(!o&&l&&l&&c(e,l)){// If the date is the same, clear the selection.
n=undefined}if(!a){s(n)}if(o){a?.(n,e,t,r)}else{a?.(n,e,t,r)}return n};return{selected:l,select:u,isSelected:d}}//# sourceMappingURL=useSingle.js.map
},84332:function(e,t,r){r.d(t,{_:()=>v});/* ESM import */var n=r(87363);/* ESM import */var o=r(6156);const a=e=>{if(e instanceof HTMLElement)return e;return null};const i=e=>[...e.querySelectorAll("[data-animated-month]")??[]];const s=e=>a(e.querySelector("[data-animated-month]"));const l=e=>a(e.querySelector("[data-animated-caption]"));const c=e=>a(e.querySelector("[data-animated-weeks]"));const d=e=>a(e.querySelector("[data-animated-nav]"));const u=e=>a(e.querySelector("[data-animated-weekdays]"));/**
 * Handles animations for transitioning between months in the DayPicker
 * component.
 *
 * @private
 * @param rootElRef - A reference to the root element of the DayPicker
 *   component.
 * @param enabled - Whether animations are enabled.
 * @param options - Configuration options for the animation, including class
 *   names, months, focused day, and the date utility library.
 */function v(e,t,{classNames:r,months:a,focused:v,dateLib:f}){const p=(0,n.useRef)(null);const h=(0,n.useRef)(a);const g=(0,n.useRef)(false);(0,n.useLayoutEffect)(()=>{// get previous months before updating the previous months ref
const n=h.current;// update previous months ref for next effect trigger
h.current=a;if(!t||!e.current||// safety check because the ref can be set to anything by consumers
!(e.current instanceof HTMLElement)||// validation required for the animation to work as expected
a.length===0||n.length===0||a.length!==n.length){return}const m=f.isSameMonth(a[0].date,n[0].date);const b=f.isAfter(a[0].date,n[0].date);const _=b?r[o/* .Animation.caption_after_enter */.fw.caption_after_enter]:r[o/* .Animation.caption_before_enter */.fw.caption_before_enter];const y=b?r[o/* .Animation.weeks_after_enter */.fw.weeks_after_enter]:r[o/* .Animation.weeks_before_enter */.fw.weeks_before_enter];// get previous root element snapshot before updating the snapshot ref
const w=p.current;// update snapshot for next effect trigger
const x=e.current.cloneNode(true);if(x instanceof HTMLElement){// if this effect is triggered while animating, we need to clean up the new root snapshot
// to put it in the same state as when not animating, to correctly animate the next month change
const e=i(x);e.forEach(e=>{if(!(e instanceof HTMLElement))return;// remove the old month snapshots from the new root snapshot
const t=s(e);if(t&&e.contains(t)){e.removeChild(t)}// remove animation classes from the new month snapshots
const r=l(e);if(r){r.classList.remove(_)}const n=c(e);if(n){n.classList.remove(y)}});p.current=x}else{p.current=null}if(g.current||m||// skip animation if a day is focused because it can cause issues to the animation and is better for a11y
v){return}const Z=w instanceof HTMLElement?i(w):[];const k=i(e.current);if(k&&k.every(e=>e instanceof HTMLElement)&&Z&&Z.every(e=>e instanceof HTMLElement)){g.current=true;const t=[];// set isolation to isolate to isolate the stacking context during animation
e.current.style.isolation="isolate";// set z-index to 1 to ensure the nav is clickable over the other elements being animated
const n=d(e.current);if(n){n.style.zIndex="1"}k.forEach((a,i)=>{const s=Z[i];if(!s){return}// animate new displayed month
a.style.position="relative";a.style.overflow="hidden";const d=l(a);if(d){d.classList.add(_)}const v=c(a);if(v){v.classList.add(y)}// animate new displayed month end
const f=()=>{g.current=false;if(e.current){e.current.style.isolation=""}if(n){n.style.zIndex=""}if(d){d.classList.remove(_)}if(v){v.classList.remove(y)}a.style.position="";a.style.overflow="";if(a.contains(s)){a.removeChild(s)}};t.push(f);// animate old displayed month
s.style.pointerEvents="none";s.style.position="absolute";s.style.overflow="hidden";s.setAttribute("aria-hidden","true");// hide the weekdays container of the old month and only the new one
const p=u(s);if(p){p.style.opacity="0"}const h=l(s);if(h){h.classList.add(b?r[o/* .Animation.caption_before_exit */.fw.caption_before_exit]:r[o/* .Animation.caption_after_exit */.fw.caption_after_exit]);h.addEventListener("animationend",f)}const m=c(s);if(m){m.classList.add(b?r[o/* .Animation.weeks_before_exit */.fw.weeks_before_exit]:r[o/* .Animation.weeks_after_exit */.fw.weeks_after_exit])}a.insertBefore(s,a.firstChild)})}})}//# sourceMappingURL=useAnimation.js.map
},30833:function(e,t,r){r.d(t,{G:()=>p});/* ESM import */var n=r(87363);/* ESM import */var o=r(11732);/* ESM import */var a=r(84517);/* ESM import */var i=r(6341);/* ESM import */var s=r(82283);/* ESM import */var l=r(97018);/* ESM import */var c=r(38540);/* ESM import */var d=r(22663);/* ESM import */var u=r(88490);/* ESM import */var v=r(60049);/* ESM import */var f=r(50717);/**
 * Provides the calendar object to work with the calendar in custom components.
 *
 * @private
 * @param props - The DayPicker props related to calendar configuration.
 * @param dateLib - The date utility library instance.
 * @returns The calendar object containing displayed days, weeks, months, and
 *   navigation methods.
 */function p(e,t){const[r,p]=(0,c/* .getNavMonths */.P)(e,t);const{startOfMonth:h,endOfMonth:g}=t;const m=(0,s/* .getInitialMonth */.Z)(e,r,p,t);const[b,_]=(0,f/* .useControlledValue */.O)(m,// initialMonth is always computed from props.month if provided
e.month?m:undefined);(0,n.useEffect)(()=>{const n=(0,s/* .getInitialMonth */.Z)(e,r,p,t);_(n);// eslint-disable-next-line react-hooks/exhaustive-deps
},[e.timeZone]);/** The months displayed in the calendar. */const y=(0,i/* .getDisplayMonths */.b)(b,p,e,t);/** The dates displayed in the calendar. */const w=(0,o/* .getDates */.i)(y,e.endMonth?g(e.endMonth):undefined,e,t);/** The Months displayed in the calendar. */const x=(0,l/* .getMonths */.w)(y,w,e,t);/** The Weeks displayed in the calendar. */const Z=(0,v/* .getWeeks */.K)(x);/** The Days displayed in the calendar. */const k=(0,a/* .getDays */.g)(x);const C=(0,u/* .getPreviousMonth */.S)(b,r,e,t);const D=(0,d/* .getNextMonth */.f)(b,p,e,t);const{disableNavigation:E,onMonthChange:S}=e;const W=e=>Z.some(t=>t.days.some(t=>t.isEqualTo(e)));const M=e=>{if(E){return}let t=h(e);// if month is before start, use the first month instead
if(r&&t<h(r)){t=h(r)}// if month is after endMonth, use the last month instead
if(p&&t>h(p)){t=h(p)}_(t);S?.(t)};const T=e=>{// is this check necessary?
if(W(e)){return}M(e.date)};const B={months:x,weeks:Z,days:k,navStart:r,navEnd:p,previousMonth:C,nextMonth:D,goToMonth:M,goToDay:T};return B}//# sourceMappingURL=useCalendar.js.map
},5293:function(e,t,r){r.d(t,{Z:()=>o,k:()=>a});/* ESM import */var n=r(87363);/** @ignore */const o=(0,n.createContext)(undefined);/**
 * Provides access to the DayPicker context, which includes properties and
 * methods to interact with the DayPicker component. This hook must be used
 * within a custom component.
 *
 * @template T - Use this type to refine the returned context type with a
 *   specific selection mode.
 * @returns The context to work with DayPicker.
 * @throws {Error} If the hook is used outside of a DayPicker provider.
 * @group Hooks
 * @see https://daypicker.dev/guides/custom-components
 */function a(){const e=(0,n.useContext)(o);if(e===undefined){throw new Error("useDayPicker() must be used within a custom component.")}return e}//# sourceMappingURL=useDayPicker.js.map
},35625:function(e,t,r){r.d(t,{K:()=>i});/* ESM import */var n=r(87363);/* ESM import */var o=r(79173);/* ESM import */var a=r(84110);/**
 * Manages focus behavior for the DayPicker component, including setting,
 * moving, and blurring focus on calendar days.
 *
 * @template T - The type of DayPicker props.
 * @param props - The DayPicker props.
 * @param calendar - The calendar object containing the displayed days and
 *   months.
 * @param getModifiers - A function to retrieve modifiers for a given day.
 * @param isSelected - A function to check if a date is selected.
 * @param dateLib - The date utility library instance.
 * @returns An object containing focus-related methods and the currently focused
 *   day.
 */function i(e,t,r,i,s){const{autoFocus:l}=e;const[c,d]=(0,n.useState)();const u=(0,o/* .calculateFocusTarget */.k)(t.days,r,i||(()=>false),c);const[v,f]=(0,n.useState)(l?u:undefined);const p=()=>{d(v);f(undefined)};const h=(r,n)=>{if(!v)return;const o=(0,a/* .getNextFocus */.j)(r,n,v,t.navStart,t.navEnd,e,s);if(!o)return;t.goToDay(o);f(o)};const g=e=>{return Boolean(u?.isEqualTo(e))};const m={isFocusTarget:g,setFocused:f,focused:v,blur:p,moveFocus:h};return m}//# sourceMappingURL=useFocus.js.map
},70162:function(e,t,r){r.d(t,{c:()=>i});/* ESM import */var n=r(13796);/* ESM import */var o=r(9998);/* ESM import */var a=r(67413);/**
 * Determines the appropriate selection hook to use based on the selection mode
 * and returns the corresponding selection object.
 *
 * @template T - The type of DayPicker props.
 * @param props - The DayPicker props.
 * @param dateLib - The date utility library instance.
 * @returns The selection object for the specified mode, or `undefined` if no
 *   mode is set.
 */function i(e,t){const r=(0,a/* .useSingle */.G)(e,t);const i=(0,n/* .useMulti */.R)(e,t);const s=(0,o/* .useRange */.C)(e,t);switch(e.mode){case"single":return r;case"multiple":return i;case"range":return s;default:return undefined}}//# sourceMappingURL=useSelection.js.map
},16257:function(e,t,r){r.d(t,{n:()=>o});/* ESM import */var n=r(65469);/**
 * Adds a date to an existing range, considering constraints like minimum and
 * maximum range size.
 *
 * @param date - The date to add to the range.
 * @param initialRange - The initial range to which the date will be added.
 * @param min - The minimum number of days in the range.
 * @param max - The maximum number of days in the range.
 * @param required - Whether the range must always include at least one date.
 * @param dateLib - The date utility library instance.
 * @returns The updated date range, or `undefined` if the range is cleared.
 * @group Utilities
 */function o(e,t,r=0,a=0,i=false,s=n/* .defaultDateLib */.zk){const{from:l,to:c}=t||{};const{isSameDay:d,isAfter:u,isBefore:v}=s;let f;if(!l&&!c){// the range is empty, add the date
f={from:e,to:r>0?undefined:e}}else if(l&&!c){// adding date to an incomplete range
if(d(l,e)){// adding a date equal to the start of the range
if(i){f={from:l,to:undefined}}else{f=undefined}}else if(v(e,l)){// adding a date before the start of the range
f={from:e,to:l}}else{// adding a date after the start of the range
f={from:l,to:e}}}else if(l&&c){// adding date to a complete range
if(d(l,e)&&d(c,e)){// adding a date that is equal to both start and end of the range
if(i){f={from:l,to:c}}else{f=undefined}}else if(d(l,e)){// adding a date equal to the the start of the range
f={from:l,to:r>0?undefined:e}}else if(d(c,e)){// adding a dare equal to the end of the range
f={from:e,to:r>0?undefined:e}}else if(v(e,l)){// adding a date before the start of the range
f={from:e,to:c}}else if(u(e,l)){// adding a date after the start of the range
f={from:l,to:e}}else if(u(e,c)){// adding a date after the end of the range
f={from:l,to:e}}else{throw new Error("Invalid range")}}// check for min / max
if(f?.from&&f?.to){const t=s.differenceInCalendarDays(f.to,f.from);if(a>0&&t>a){f={from:e,to:undefined}}else if(r>1&&t<r){f={from:e,to:undefined}}}return f}//# sourceMappingURL=addToRange.js.map
},52804:function(e,t,r){r.d(t,{W:()=>i});/* ESM import */var n=r(65469);/* ESM import */var o=r(94232);/* ESM import */var a=r(20311);/**
 * Checks if a given date matches at least one of the specified {@link Matcher}.
 *
 * @param date - The date to check.
 * @param matchers - The matchers to check against.
 * @param dateLib - The date utility library instance.
 * @returns `true` if the date matches any of the matchers, otherwise `false`.
 * @group Utilities
 */function i(e,t,r=n/* .defaultDateLib */.zk){const s=!Array.isArray(t)?[t]:t;const{isSameDay:l,differenceInCalendarDays:c,isAfter:d}=r;return s.some(t=>{if(typeof t==="boolean"){return t}if(r.isDate(t)){return l(e,t)}if((0,a/* .isDatesArray */.jA)(t,r)){return t.includes(e)}if((0,a/* .isDateRange */.Ws)(t)){return(0,o/* .rangeIncludesDate */.C)(t,e,false,r)}if((0,a/* .isDayOfWeekType */.U4)(t)){if(!Array.isArray(t.dayOfWeek)){return t.dayOfWeek===e.getDay()}return t.dayOfWeek.includes(e.getDay())}if((0,a/* .isDateInterval */.Zl)(t)){const r=c(t.before,e);const n=c(t.after,e);const o=r>0;const a=n<0;const i=d(t.before,t.after);if(i){return a&&o}else{return o||a}}if((0,a/* .isDateAfterType */.FZ)(t)){return c(e,t.after)>0}if((0,a/* .isDateBeforeType */.Vp)(t)){return c(t.before,e)>0}if(typeof t==="function"){return t(e)}return false})}/**
 * @private
 * @deprecated Use {@link dateMatchModifiers} instead.
 */const s=/* unused pure expression or super */null&&i;//# sourceMappingURL=dateMatchModifiers.js.map
},7493:function(e,t,r){r.d(t,{L:()=>o});/* ESM import */var n=r(65469);/**
 * Checks if a date range contains one or more specified days of the week.
 *
 * @since 9.2.2
 * @param range - The date range to check.
 * @param dayOfWeek - The day(s) of the week to check for (`0-6`, where `0` is
 *   Sunday).
 * @param dateLib - The date utility library instance.
 * @returns `true` if the range contains the specified day(s) of the week,
 *   otherwise `false`.
 * @group Utilities
 */function o(e,t,r=n/* .defaultDateLib */.zk){const a=!Array.isArray(t)?[t]:t;let i=e.from;const s=r.differenceInCalendarDays(e.to,e.from);// iterate at maximum one week or the total days if the range is shorter than one week
const l=Math.min(s,6);for(let e=0;e<=l;e++){if(a.includes(i.getDay())){return true}i=r.addDays(i,1)}return false}//# sourceMappingURL=rangeContainsDayOfWeek.js.map
},99217:function(e,t,r){r.d(t,{C:()=>c});/* ESM import */var n=r(65469);/* ESM import */var o=r(52804);/* ESM import */var a=r(7493);/* ESM import */var i=r(94232);/* ESM import */var s=r(1297);/* ESM import */var l=r(20311);/**
 * Checks if a date range contains dates that match the given modifiers.
 *
 * @since 9.2.2
 * @param range - The date range to check.
 * @param modifiers - The modifiers to match against.
 * @param dateLib - The date utility library instance.
 * @returns `true` if the range contains matching dates, otherwise `false`.
 * @group Utilities
 */function c(e,t,r=n/* .defaultDateLib */.zk){const d=Array.isArray(t)?t:[t];// Defer function matchers evaluation as they are the least performant.
const u=d.filter(e=>typeof e!=="function");const v=u.some(t=>{if(typeof t==="boolean")return t;if(r.isDate(t)){return(0,i/* .rangeIncludesDate */.C)(e,t,false,r)}if((0,l/* .isDatesArray */.jA)(t,r)){return t.some(t=>(0,i/* .rangeIncludesDate */.C)(e,t,false,r))}if((0,l/* .isDateRange */.Ws)(t)){if(t.from&&t.to){return(0,s/* .rangeOverlaps */.z)(e,{from:t.from,to:t.to},r)}return false}if((0,l/* .isDayOfWeekType */.U4)(t)){return(0,a/* .rangeContainsDayOfWeek */.L)(e,t.dayOfWeek,r)}if((0,l/* .isDateInterval */.Zl)(t)){const n=r.isAfter(t.before,t.after);if(n){return(0,s/* .rangeOverlaps */.z)(e,{from:r.addDays(t.after,1),to:r.addDays(t.before,-1)},r)}return(0,o/* .dateMatchModifiers */.W)(e.from,t,r)||(0,o/* .dateMatchModifiers */.W)(e.to,t,r)}if((0,l/* .isDateAfterType */.FZ)(t)||(0,l/* .isDateBeforeType */.Vp)(t)){return(0,o/* .dateMatchModifiers */.W)(e.from,t,r)||(0,o/* .dateMatchModifiers */.W)(e.to,t,r)}return false});if(v){return true}const f=d.filter(e=>typeof e==="function");if(f.length){let t=e.from;const n=r.differenceInCalendarDays(e.to,e.from);for(let e=0;e<=n;e++){if(f.some(e=>e(t))){return true}t=r.addDays(t,1)}}return false}//# sourceMappingURL=rangeContainsModifiers.js.map
},94232:function(e,t,r){r.d(t,{C:()=>o});/* ESM import */var n=r(65469);/**
 * Checks if a given date is within a specified date range.
 *
 * @since 9.0.0
 * @param range - The date range to check against.
 * @param date - The date to check.
 * @param excludeEnds - If `true`, the range's start and end dates are excluded.
 * @param dateLib - The date utility library instance.
 * @returns `true` if the date is within the range, otherwise `false`.
 * @group Utilities
 */function o(e,t,r=false,a=n/* .defaultDateLib */.zk){let{from:i,to:s}=e;const{differenceInCalendarDays:l,isSameDay:c}=a;if(i&&s){const e=l(s,i)<0;if(e){[i,s]=[s,i]}const n=l(t,i)>=(r?1:0)&&l(s,t)>=(r?1:0);return n}if(!r&&s){return c(s,t)}if(!r&&i){return c(i,t)}return false}/**
 * @private
 * @deprecated Use {@link rangeIncludesDate} instead.
 */const a=(e,t)=>o(e,t,false,defaultDateLib);//# sourceMappingURL=rangeIncludesDate.js.map
},1297:function(e,t,r){r.d(t,{z:()=>a});/* ESM import */var n=r(65469);/* ESM import */var o=r(94232);/**
 * Determines if two date ranges overlap.
 *
 * @since 9.2.2
 * @param rangeLeft - The first date range.
 * @param rangeRight - The second date range.
 * @param dateLib - The date utility library instance.
 * @returns `true` if the ranges overlap, otherwise `false`.
 * @group Utilities
 */function a(e,t,r=n/* .defaultDateLib */.zk){return(0,o/* .rangeIncludesDate */.C)(e,t.from,false,r)||(0,o/* .rangeIncludesDate */.C)(e,t.to,false,r)||(0,o/* .rangeIncludesDate */.C)(t,e.from,false,r)||(0,o/* .rangeIncludesDate */.C)(t,e.to,false,r)}//# sourceMappingURL=rangeOverlaps.js.map
},20311:function(e,t,r){r.d(t,{FZ:()=>a,U4:()=>s,Vp:()=>i,Ws:()=>o,Zl:()=>n,jA:()=>l});/**
 * Checks if the given value is of type {@link DateInterval}.
 *
 * @param matcher - The value to check.
 * @returns `true` if the value is a {@link DateInterval}, otherwise `false`.
 * @group Utilities
 */function n(e){return Boolean(e&&typeof e==="object"&&"before"in e&&"after"in e)}/**
 * Checks if the given value is of type {@link DateRange}.
 *
 * @param value - The value to check.
 * @returns `true` if the value is a {@link DateRange}, otherwise `false`.
 * @group Utilities
 */function o(e){return Boolean(e&&typeof e==="object"&&"from"in e)}/**
 * Checks if the given value is of type {@link DateAfter}.
 *
 * @param value - The value to check.
 * @returns `true` if the value is a {@link DateAfter}, otherwise `false`.
 * @group Utilities
 */function a(e){return Boolean(e&&typeof e==="object"&&"after"in e)}/**
 * Checks if the given value is of type {@link DateBefore}.
 *
 * @param value - The value to check.
 * @returns `true` if the value is a {@link DateBefore}, otherwise `false`.
 * @group Utilities
 */function i(e){return Boolean(e&&typeof e==="object"&&"before"in e)}/**
 * Checks if the given value is of type {@link DayOfWeek}.
 *
 * @param value - The value to check.
 * @returns `true` if the value is a {@link DayOfWeek}, otherwise `false`.
 * @group Utilities
 */function s(e){return Boolean(e&&typeof e==="object"&&"dayOfWeek"in e)}/**
 * Checks if the given value is an array of valid dates.
 *
 * @private
 * @param value - The value to check.
 * @param dateLib - The date utility library instance.
 * @returns `true` if the value is an array of valid dates, otherwise `false`.
 */function l(e,t){return Array.isArray(e)&&e.every(t.isDate)}//# sourceMappingURL=typeguards.js.map
},51805:function(e,t,r){r.d(t,{r:()=>n});function n(e,t){const r=e<0?"-":"";const n=Math.abs(e).toString().padStart(t,"0");return r+n}},92639:function(e,t,r){r.d(t,{j:()=>o});let n={};function o(){return n}function a(e){n=e}},46083:function(e,t,r){r.d(t,{$:()=>u});/* ESM import */var n=r(29750);/* ESM import */var o=r(65719);/* ESM import */var a=r(74155);/* ESM import */var i=r(12347);/* ESM import */var s=r(7898);/* ESM import */var l=r(51805);/* ESM import */var c=r(12471);const d={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"};/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* | Milliseconds in day            |
 * |  b  | AM, PM, noon, midnight         |  B  | Flexible day period            |
 * |  c  | Stand-alone local day of week  |  C* | Localized hour w/ day period   |
 * |  d  | Day of month                   |  D  | Day of year                    |
 * |  e  | Local day of week              |  E  | Day of week                    |
 * |  f  |                                |  F* | Day of week in month           |
 * |  g* | Modified Julian day            |  G  | Era                            |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  i! | ISO day of week                |  I! | ISO week of year               |
 * |  j* | Localized hour w/ day period   |  J* | Localized hour w/o day period  |
 * |  k  | Hour [1-24]                    |  K  | Hour [0-11]                    |
 * |  l* | (deprecated)                   |  L  | Stand-alone month              |
 * |  m  | Minute                         |  M  | Month                          |
 * |  n  |                                |  N  |                                |
 * |  o! | Ordinal number modifier        |  O  | Timezone (GMT)                 |
 * |  p! | Long localized time            |  P! | Long localized date            |
 * |  q  | Stand-alone quarter            |  Q  | Quarter                        |
 * |  r* | Related Gregorian year         |  R! | ISO week-numbering year        |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  t! | Seconds timestamp              |  T! | Milliseconds timestamp         |
 * |  u  | Extended year                  |  U* | Cyclic year                    |
 * |  v* | Timezone (generic non-locat.)  |  V* | Timezone (location)            |
 * |  w  | Local week of year             |  W* | Week of month                  |
 * |  x  | Timezone (ISO-8601 w/o Z)      |  X  | Timezone (ISO-8601)            |
 * |  y  | Year (abs)                     |  Y  | Local week-numbering year      |
 * |  z  | Timezone (specific non-locat.) |  Z* | Timezone (aliases)             |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 *
 * Letters marked by ! are non-standard, but implemented by date-fns:
 * - `o` modifies the previous token to turn it into an ordinal (see `format` docs)
 * - `i` is ISO day of week. For `i` and `ii` is returns numeric ISO week days,
 *   i.e. 7 for Sunday, 1 for Monday, etc.
 * - `I` is ISO week of year, as opposed to `w` which is local week of year.
 * - `R` is ISO week-numbering year, as opposed to `Y` which is local week-numbering year.
 *   `R` is supposed to be used in conjunction with `I` and `i`
 *   for universal ISO week-numbering date, whereas
 *   `Y` is supposed to be used in conjunction with `w` and `e`
 *   for week-numbering date specific to the locale.
 * - `P` is long localized date format
 * - `p` is long localized time format
 */const u={// Era
G:function(e,t,r){const n=e.getFullYear()>0?1:0;switch(t){// AD, BC
case"G":case"GG":case"GGG":return r.era(n,{width:"abbreviated"});// A, B
case"GGGGG":return r.era(n,{width:"narrow"});// Anno Domini, Before Christ
case"GGGG":default:return r.era(n,{width:"wide"})}},// Year
y:function(e,t,r){// Ordinal number
if(t==="yo"){const t=e.getFullYear();// Returns 1 for 1 BC (which is year 0 in JavaScript)
const n=t>0?t:1-t;return r.ordinalNumber(n,{unit:"year"})}return c/* .lightFormatters.y */.o.y(e,t)},// Local week-numbering year
Y:function(e,t,r,n){const o=(0,s/* .getWeekYear */.c)(e,n);// Returns 1 for 1 BC (which is year 0 in JavaScript)
const a=o>0?o:1-o;// Two digit year
if(t==="YY"){const e=a%100;return(0,l/* .addLeadingZeros */.r)(e,2)}// Ordinal number
if(t==="Yo"){return r.ordinalNumber(a,{unit:"year"})}// Padding
return(0,l/* .addLeadingZeros */.r)(a,t.length)},// ISO week-numbering year
R:function(e,t){const r=(0,a/* .getISOWeekYear */.L)(e);// Padding
return(0,l/* .addLeadingZeros */.r)(r,t.length)},// Extended year. This is a single number designating the year of this calendar system.
// The main difference between `y` and `u` localizers are B.C. years:
// | Year | `y` | `u` |
// |------|-----|-----|
// | AC 1 |   1 |   1 |
// | BC 1 |   1 |   0 |
// | BC 2 |   2 |  -1 |
// Also `yy` always returns the last two digits of a year,
// while `uu` pads single digit years to 2 characters and returns other years unchanged.
u:function(e,t){const r=e.getFullYear();return(0,l/* .addLeadingZeros */.r)(r,t.length)},// Quarter
Q:function(e,t,r){const n=Math.ceil((e.getMonth()+1)/3);switch(t){// 1, 2, 3, 4
case"Q":return String(n);// 01, 02, 03, 04
case"QQ":return(0,l/* .addLeadingZeros */.r)(n,2);// 1st, 2nd, 3rd, 4th
case"Qo":return r.ordinalNumber(n,{unit:"quarter"});// Q1, Q2, Q3, Q4
case"QQQ":return r.quarter(n,{width:"abbreviated",context:"formatting"});// 1, 2, 3, 4 (narrow quarter; could be not numerical)
case"QQQQQ":return r.quarter(n,{width:"narrow",context:"formatting"});// 1st quarter, 2nd quarter, ...
case"QQQQ":default:return r.quarter(n,{width:"wide",context:"formatting"})}},// Stand-alone quarter
q:function(e,t,r){const n=Math.ceil((e.getMonth()+1)/3);switch(t){// 1, 2, 3, 4
case"q":return String(n);// 01, 02, 03, 04
case"qq":return(0,l/* .addLeadingZeros */.r)(n,2);// 1st, 2nd, 3rd, 4th
case"qo":return r.ordinalNumber(n,{unit:"quarter"});// Q1, Q2, Q3, Q4
case"qqq":return r.quarter(n,{width:"abbreviated",context:"standalone"});// 1, 2, 3, 4 (narrow quarter; could be not numerical)
case"qqqqq":return r.quarter(n,{width:"narrow",context:"standalone"});// 1st quarter, 2nd quarter, ...
case"qqqq":default:return r.quarter(n,{width:"wide",context:"standalone"})}},// Month
M:function(e,t,r){const n=e.getMonth();switch(t){case"M":case"MM":return c/* .lightFormatters.M */.o.M(e,t);// 1st, 2nd, ..., 12th
case"Mo":return r.ordinalNumber(n+1,{unit:"month"});// Jan, Feb, ..., Dec
case"MMM":return r.month(n,{width:"abbreviated",context:"formatting"});// J, F, ..., D
case"MMMMM":return r.month(n,{width:"narrow",context:"formatting"});// January, February, ..., December
case"MMMM":default:return r.month(n,{width:"wide",context:"formatting"})}},// Stand-alone month
L:function(e,t,r){const n=e.getMonth();switch(t){// 1, 2, ..., 12
case"L":return String(n+1);// 01, 02, ..., 12
case"LL":return(0,l/* .addLeadingZeros */.r)(n+1,2);// 1st, 2nd, ..., 12th
case"Lo":return r.ordinalNumber(n+1,{unit:"month"});// Jan, Feb, ..., Dec
case"LLL":return r.month(n,{width:"abbreviated",context:"standalone"});// J, F, ..., D
case"LLLLL":return r.month(n,{width:"narrow",context:"standalone"});// January, February, ..., December
case"LLLL":default:return r.month(n,{width:"wide",context:"standalone"})}},// Local week of year
w:function(e,t,r,n){const o=(0,i/* .getWeek */.Q)(e,n);if(t==="wo"){return r.ordinalNumber(o,{unit:"week"})}return(0,l/* .addLeadingZeros */.r)(o,t.length)},// ISO week of year
I:function(e,t,r){const n=(0,o/* .getISOWeek */.l)(e);if(t==="Io"){return r.ordinalNumber(n,{unit:"week"})}return(0,l/* .addLeadingZeros */.r)(n,t.length)},// Day of the month
d:function(e,t,r){if(t==="do"){return r.ordinalNumber(e.getDate(),{unit:"date"})}return c/* .lightFormatters.d */.o.d(e,t)},// Day of year
D:function(e,t,r){const o=(0,n/* .getDayOfYear */.B)(e);if(t==="Do"){return r.ordinalNumber(o,{unit:"dayOfYear"})}return(0,l/* .addLeadingZeros */.r)(o,t.length)},// Day of week
E:function(e,t,r){const n=e.getDay();switch(t){// Tue
case"E":case"EE":case"EEE":return r.day(n,{width:"abbreviated",context:"formatting"});// T
case"EEEEE":return r.day(n,{width:"narrow",context:"formatting"});// Tu
case"EEEEEE":return r.day(n,{width:"short",context:"formatting"});// Tuesday
case"EEEE":default:return r.day(n,{width:"wide",context:"formatting"})}},// Local day of week
e:function(e,t,r,n){const o=e.getDay();const a=(o-n.weekStartsOn+8)%7||7;switch(t){// Numerical value (Nth day of week with current locale or weekStartsOn)
case"e":return String(a);// Padded numerical value
case"ee":return(0,l/* .addLeadingZeros */.r)(a,2);// 1st, 2nd, ..., 7th
case"eo":return r.ordinalNumber(a,{unit:"day"});case"eee":return r.day(o,{width:"abbreviated",context:"formatting"});// T
case"eeeee":return r.day(o,{width:"narrow",context:"formatting"});// Tu
case"eeeeee":return r.day(o,{width:"short",context:"formatting"});// Tuesday
case"eeee":default:return r.day(o,{width:"wide",context:"formatting"})}},// Stand-alone local day of week
c:function(e,t,r,n){const o=e.getDay();const a=(o-n.weekStartsOn+8)%7||7;switch(t){// Numerical value (same as in `e`)
case"c":return String(a);// Padded numerical value
case"cc":return(0,l/* .addLeadingZeros */.r)(a,t.length);// 1st, 2nd, ..., 7th
case"co":return r.ordinalNumber(a,{unit:"day"});case"ccc":return r.day(o,{width:"abbreviated",context:"standalone"});// T
case"ccccc":return r.day(o,{width:"narrow",context:"standalone"});// Tu
case"cccccc":return r.day(o,{width:"short",context:"standalone"});// Tuesday
case"cccc":default:return r.day(o,{width:"wide",context:"standalone"})}},// ISO day of week
i:function(e,t,r){const n=e.getDay();const o=n===0?7:n;switch(t){// 2
case"i":return String(o);// 02
case"ii":return(0,l/* .addLeadingZeros */.r)(o,t.length);// 2nd
case"io":return r.ordinalNumber(o,{unit:"day"});// Tue
case"iii":return r.day(n,{width:"abbreviated",context:"formatting"});// T
case"iiiii":return r.day(n,{width:"narrow",context:"formatting"});// Tu
case"iiiiii":return r.day(n,{width:"short",context:"formatting"});// Tuesday
case"iiii":default:return r.day(n,{width:"wide",context:"formatting"})}},// AM or PM
a:function(e,t,r){const n=e.getHours();const o=n/12>=1?"pm":"am";switch(t){case"a":case"aa":return r.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"aaa":return r.dayPeriod(o,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return r.dayPeriod(o,{width:"narrow",context:"formatting"});case"aaaa":default:return r.dayPeriod(o,{width:"wide",context:"formatting"})}},// AM, PM, midnight, noon
b:function(e,t,r){const n=e.getHours();let o;if(n===12){o=d.noon}else if(n===0){o=d.midnight}else{o=n/12>=1?"pm":"am"}switch(t){case"b":case"bb":return r.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"bbb":return r.dayPeriod(o,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return r.dayPeriod(o,{width:"narrow",context:"formatting"});case"bbbb":default:return r.dayPeriod(o,{width:"wide",context:"formatting"})}},// in the morning, in the afternoon, in the evening, at night
B:function(e,t,r){const n=e.getHours();let o;if(n>=17){o=d.evening}else if(n>=12){o=d.afternoon}else if(n>=4){o=d.morning}else{o=d.night}switch(t){case"B":case"BB":case"BBB":return r.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"BBBBB":return r.dayPeriod(o,{width:"narrow",context:"formatting"});case"BBBB":default:return r.dayPeriod(o,{width:"wide",context:"formatting"})}},// Hour [1-12]
h:function(e,t,r){if(t==="ho"){let t=e.getHours()%12;if(t===0)t=12;return r.ordinalNumber(t,{unit:"hour"})}return c/* .lightFormatters.h */.o.h(e,t)},// Hour [0-23]
H:function(e,t,r){if(t==="Ho"){return r.ordinalNumber(e.getHours(),{unit:"hour"})}return c/* .lightFormatters.H */.o.H(e,t)},// Hour [0-11]
K:function(e,t,r){const n=e.getHours()%12;if(t==="Ko"){return r.ordinalNumber(n,{unit:"hour"})}return(0,l/* .addLeadingZeros */.r)(n,t.length)},// Hour [1-24]
k:function(e,t,r){let n=e.getHours();if(n===0)n=24;if(t==="ko"){return r.ordinalNumber(n,{unit:"hour"})}return(0,l/* .addLeadingZeros */.r)(n,t.length)},// Minute
m:function(e,t,r){if(t==="mo"){return r.ordinalNumber(e.getMinutes(),{unit:"minute"})}return c/* .lightFormatters.m */.o.m(e,t)},// Second
s:function(e,t,r){if(t==="so"){return r.ordinalNumber(e.getSeconds(),{unit:"second"})}return c/* .lightFormatters.s */.o.s(e,t)},// Fraction of second
S:function(e,t){return c/* .lightFormatters.S */.o.S(e,t)},// Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
X:function(e,t,r){const n=e.getTimezoneOffset();if(n===0){return"Z"}switch(t){// Hours and optional minutes
case"X":return f(n);// Hours, minutes and optional seconds without `:` delimiter
// Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
// so this token always has the same output as `XX`
case"XXXX":case"XX":return p(n);// Hours, minutes and optional seconds with `:` delimiter
// Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
// so this token always has the same output as `XXX`
case"XXXXX":case"XXX":default:return p(n,":")}},// Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
x:function(e,t,r){const n=e.getTimezoneOffset();switch(t){// Hours and optional minutes
case"x":return f(n);// Hours, minutes and optional seconds without `:` delimiter
// Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
// so this token always has the same output as `xx`
case"xxxx":case"xx":return p(n);// Hours, minutes and optional seconds with `:` delimiter
// Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
// so this token always has the same output as `xxx`
case"xxxxx":case"xxx":default:return p(n,":")}},// Timezone (GMT)
O:function(e,t,r){const n=e.getTimezoneOffset();switch(t){// Short
case"O":case"OO":case"OOO":return"GMT"+v(n,":");// Long
case"OOOO":default:return"GMT"+p(n,":")}},// Timezone (specific non-location)
z:function(e,t,r){const n=e.getTimezoneOffset();switch(t){// Short
case"z":case"zz":case"zzz":return"GMT"+v(n,":");// Long
case"zzzz":default:return"GMT"+p(n,":")}},// Seconds timestamp
t:function(e,t,r){const n=Math.trunc(+e/1e3);return(0,l/* .addLeadingZeros */.r)(n,t.length)},// Milliseconds timestamp
T:function(e,t,r){return(0,l/* .addLeadingZeros */.r)(+e,t.length)}};function v(e,t=""){const r=e>0?"-":"+";const n=Math.abs(e);const o=Math.trunc(n/60);const a=n%60;if(a===0){return r+String(o)}return r+String(o)+t+(0,l/* .addLeadingZeros */.r)(a,2)}function f(e,t){if(e%60===0){const t=e>0?"-":"+";return t+(0,l/* .addLeadingZeros */.r)(Math.abs(e)/60,2)}return p(e,t)}function p(e,t=""){const r=e>0?"-":"+";const n=Math.abs(e);const o=(0,l/* .addLeadingZeros */.r)(Math.trunc(n/60),2);const a=(0,l/* .addLeadingZeros */.r)(n%60,2);return r+o+t+a}},12471:function(e,t,r){r.d(t,{o:()=>o});/* ESM import */var n=r(51805);/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* |                                |
 * |  d  | Day of month                   |  D  |                                |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  m  | Minute                         |  M  | Month                          |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  y  | Year (abs)                     |  Y  |                                |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 */const o={// Year
y(e,t){// From http://www.unicode.org/reports/tr35/tr35-31/tr35-dates.html#Date_Format_tokens
// | Year     |     y | yy |   yyy |  yyyy | yyyyy |
// |----------|-------|----|-------|-------|-------|
// | AD 1     |     1 | 01 |   001 |  0001 | 00001 |
// | AD 12    |    12 | 12 |   012 |  0012 | 00012 |
// | AD 123   |   123 | 23 |   123 |  0123 | 00123 |
// | AD 1234  |  1234 | 34 |  1234 |  1234 | 01234 |
// | AD 12345 | 12345 | 45 | 12345 | 12345 | 12345 |
const r=e.getFullYear();// Returns 1 for 1 BC (which is year 0 in JavaScript)
const o=r>0?r:1-r;return(0,n/* .addLeadingZeros */.r)(t==="yy"?o%100:o,t.length)},// Month
M(e,t){const r=e.getMonth();return t==="M"?String(r+1):(0,n/* .addLeadingZeros */.r)(r+1,2)},// Day of the month
d(e,t){return(0,n/* .addLeadingZeros */.r)(e.getDate(),t.length)},// AM or PM
a(e,t){const r=e.getHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return r.toUpperCase();case"aaa":return r;case"aaaaa":return r[0];case"aaaa":default:return r==="am"?"a.m.":"p.m."}},// Hour [1-12]
h(e,t){return(0,n/* .addLeadingZeros */.r)(e.getHours()%12||12,t.length)},// Hour [0-23]
H(e,t){return(0,n/* .addLeadingZeros */.r)(e.getHours(),t.length)},// Minute
m(e,t){return(0,n/* .addLeadingZeros */.r)(e.getMinutes(),t.length)},// Second
s(e,t){return(0,n/* .addLeadingZeros */.r)(e.getSeconds(),t.length)},// Fraction of second
S(e,t){const r=t.length;const o=e.getMilliseconds();const a=Math.trunc(o*Math.pow(10,r-3));return(0,n/* .addLeadingZeros */.r)(a,t.length)}}},15475:function(e,t,r){r.d(t,{G:()=>i});const n=(e,t)=>{switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});case"PPPP":default:return t.date({width:"full"})}};const o=(e,t)=>{switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});case"pppp":default:return t.time({width:"full"})}};const a=(e,t)=>{const r=e.match(/(P+)(p+)?/)||[];const a=r[1];const i=r[2];if(!i){return n(e,t)}let s;switch(a){case"P":s=t.dateTime({width:"short"});break;case"PP":s=t.dateTime({width:"medium"});break;case"PPP":s=t.dateTime({width:"long"});break;case"PPPP":default:s=t.dateTime({width:"full"});break}return s.replace("{{date}}",n(a,t)).replace("{{time}}",o(i,t))};const i={p:o,P:a}},29486:function(e,t,r){r.d(t,{D:()=>o});/* ESM import */var n=r(28898);/**
 * Google Chrome as of 67.0.3396.87 introduced timezones with offset that includes seconds.
 * They usually appear for dates that denote time before the timezones were introduced
 * (e.g. for 'Europe/Prague' timezone the offset is GMT+00:57:44 before 1 October 1891
 * and GMT+01:00:00 after that date)
 *
 * Date#getTimezoneOffset returns the offset in minutes and would return 57 for the example above,
 * which would lead to incorrect calculations.
 *
 * This function returns the timezone offset in milliseconds that takes seconds in account.
 */function o(e){const t=(0,n/* .toDate */.Q)(e);const r=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));r.setUTCFullYear(t.getFullYear());return+e-+r}},90457:function(e,t,r){r.d(t,{d:()=>o});/* ESM import */var n=r(85941);function o(e,...t){const r=n/* .constructFrom.bind */.L.bind(null,e||t.find(e=>typeof e==="object"));return t.map(r)}},15176:function(e,t,r){r.d(t,{T:()=>o});/* ESM import */var n=r(90457);function o(e,t){const[r,o]=(0,n/* .normalizeDates */.d)(e,t.start,t.end);return{start:r,end:o}}},69814:function(e,t,r){r.d(t,{DD:()=>l,Do:()=>s,Iu:()=>i});const n=/^D+$/;const o=/^Y+$/;const a=["D","DD","YY","YYYY"];function i(e){return n.test(e)}function s(e){return o.test(e)}function l(e,t,r){const n=c(e,t,r);console.warn(n);if(a.includes(e))throw new RangeError(n)}function c(e,t,r){const n=e[0]==="Y"?"years":"days of the month";return`Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${n} to the input \`${r}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}},55722:function(e,t,r){r.d(t,{E:()=>a});/* ESM import */var n=r(85941);/* ESM import */var o=r(28898);/**
 * The {@link addDays} function options.
 *//**
 * @name addDays
 * @category Day Helpers
 * @summary Add the specified number of days to the given date.
 *
 * @description
 * Add the specified number of days to the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The date to be changed
 * @param amount - The amount of days to be added.
 * @param options - An object with options
 *
 * @returns The new date with the days added
 *
 * @example
 * // Add 10 days to 1 September 2014:
 * const result = addDays(new Date(2014, 8, 1), 10)
 * //=> Thu Sep 11 2014 00:00:00
 */function a(e,t,r){const a=(0,o/* .toDate */.Q)(e,r?.in);if(isNaN(t))return(0,n/* .constructFrom */.L)(r?.in||e,NaN);// If 0 days, no-op to avoid changing times in the hour before end of DST
if(!t)return a;a.setDate(a.getDate()+t);return a}// Fallback for modularized imports:
/* unused ESM default export */var i=/* unused pure expression or super */null&&a},636:function(e,t,r){r.d(t,{z:()=>a});/* ESM import */var n=r(85941);/* ESM import */var o=r(28898);/**
 * The {@link addMonths} function options.
 *//**
 * @name addMonths
 * @category Month Helpers
 * @summary Add the specified number of months to the given date.
 *
 * @description
 * Add the specified number of months to the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The date to be changed
 * @param amount - The amount of months to be added.
 * @param options - The options object
 *
 * @returns The new date with the months added
 *
 * @example
 * // Add 5 months to 1 September 2014:
 * const result = addMonths(new Date(2014, 8, 1), 5)
 * //=> Sun Feb 01 2015 00:00:00
 *
 * // Add one month to 30 January 2023:
 * const result = addMonths(new Date(2023, 0, 30), 1)
 * //=> Tue Feb 28 2023 00:00:00
 */function a(e,t,r){const a=(0,o/* .toDate */.Q)(e,r?.in);if(isNaN(t))return(0,n/* .constructFrom */.L)(r?.in||e,NaN);if(!t){// If 0 months, no-op to avoid changing times in the hour before end of DST
return a}const i=a.getDate();// The JS Date object supports date math by accepting out-of-bounds values for
// month, day, etc. For example, new Date(2020, 0, 0) returns 31 Dec 2019 and
// new Date(2020, 13, 1) returns 1 Feb 2021.  This is *almost* the behavior we
// want except that dates will wrap around the end of a month, meaning that
// new Date(2020, 13, 31) will return 3 Mar 2021 not 28 Feb 2021 as desired. So
// we'll default to the end of the desired month by adding 1 to the desired
// month and using a date of 0 to back up one day to the end of the desired
// month.
const s=(0,n/* .constructFrom */.L)(r?.in||e,a.getTime());s.setMonth(a.getMonth()+t+1,0);const l=s.getDate();if(i>=l){// If we're already at the end of the month, then this is the correct date
// and we're done.
return s}else{// Otherwise, we now know that setting the original day-of-month value won't
// cause an overflow, so set the desired day-of-month. Note that we can't
// just set the date of `endOfDesiredMonth` because that object may have had
// its time changed in the unusual case where where a DST transition was on
// the last day of the month and its local time was in the hour skipped or
// repeated next to a DST transition.  So we use `date` instead which is
// guaranteed to still have the original time.
a.setFullYear(s.getFullYear(),s.getMonth(),i);return a}}// Fallback for modularized imports:
/* unused ESM default export */var i=/* unused pure expression or super */null&&a},46263:function(e,t,r){r.d(t,{j:()=>o});/* ESM import */var n=r(55722);/**
 * The {@link addWeeks} function options.
 *//**
 * @name addWeeks
 * @category Week Helpers
 * @summary Add the specified number of weeks to the given date.
 *
 * @description
 * Add the specified number of weeks to the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The date to be changed
 * @param amount - The amount of weeks to be added.
 * @param options - An object with options
 *
 * @returns The new date with the weeks added
 *
 * @example
 * // Add 4 weeks to 1 September 2014:
 * const result = addWeeks(new Date(2014, 8, 1), 4)
 * //=> Mon Sep 29 2014 00:00:00
 */function o(e,t,r){return(0,n/* .addDays */.E)(e,t*7,r)}// Fallback for modularized imports:
/* unused ESM default export */var a=/* unused pure expression or super */null&&o},90423:function(e,t,r){r.d(t,{B:()=>o});/* ESM import */var n=r(636);/**
 * The {@link addYears} function options.
 *//**
 * @name addYears
 * @category Year Helpers
 * @summary Add the specified number of years to the given date.
 *
 * @description
 * Add the specified number of years to the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type.
 *
 * @param date - The date to be changed
 * @param amount - The amount of years to be added.
 * @param options - The options
 *
 * @returns The new date with the years added
 *
 * @example
 * // Add 5 years to 1 September 2014:
 * const result = addYears(new Date(2014, 8, 1), 5)
 * //=> Sun Sep 01 2019 00:00:00
 */function o(e,t,r){return(0,n/* .addMonths */.z)(e,t*12,r)}// Fallback for modularized imports:
/* unused ESM default export */var a=/* unused pure expression or super */null&&o},22050:function(e,t,r){r.d(t,{I7:()=>D,dP:()=>l,jE:()=>s});/**
 * @module constants
 * @summary Useful constants
 * @description
 * Collection of useful date constants.
 *
 * The constants could be imported from `date-fns/constants`:
 *
 * ```ts
 * import { maxTime, minTime } from "./constants/date-fns/constants";
 *
 * function isAllowedTime(time) {
 *   return time <= maxTime && time >= minTime;
 * }
 * ```
 *//**
 * @constant
 * @name daysInWeek
 * @summary Days in 1 week.
 */const n=7;/**
 * @constant
 * @name daysInYear
 * @summary Days in 1 year.
 *
 * @description
 * How many days in a year.
 *
 * One years equals 365.2425 days according to the formula:
 *
 * > Leap year occurs every 4 years, except for years that are divisible by 100 and not divisible by 400.
 * > 1 mean year = (365+1/4-1/100+1/400) days = 365.2425 days
 */const o=365.2425;/**
 * @constant
 * @name maxTime
 * @summary Maximum allowed time.
 *
 * @example
 * import { maxTime } from "./constants/date-fns/constants";
 *
 * const isValid = 8640000000000001 <= maxTime;
 * //=> false
 *
 * new Date(8640000000000001);
 * //=> Invalid Date
 */const a=Math.pow(10,8)*24*60*60*1e3;/**
 * @constant
 * @name minTime
 * @summary Minimum allowed time.
 *
 * @example
 * import { minTime } from "./constants/date-fns/constants";
 *
 * const isValid = -8640000000000001 >= minTime;
 * //=> false
 *
 * new Date(-8640000000000001)
 * //=> Invalid Date
 */const i=/* unused pure expression or super */null&&-a;/**
 * @constant
 * @name millisecondsInWeek
 * @summary Milliseconds in 1 week.
 */const s=6048e5;/**
 * @constant
 * @name millisecondsInDay
 * @summary Milliseconds in 1 day.
 */const l=864e5;/**
 * @constant
 * @name millisecondsInMinute
 * @summary Milliseconds in 1 minute
 */const c=6e4;/**
 * @constant
 * @name millisecondsInHour
 * @summary Milliseconds in 1 hour
 */const d=36e5;/**
 * @constant
 * @name millisecondsInSecond
 * @summary Milliseconds in 1 second
 */const u=1e3;/**
 * @constant
 * @name minutesInYear
 * @summary Minutes in 1 year.
 */const v=525600;/**
 * @constant
 * @name minutesInMonth
 * @summary Minutes in 1 month.
 */const f=43200;/**
 * @constant
 * @name minutesInDay
 * @summary Minutes in 1 day.
 */const p=1440;/**
 * @constant
 * @name minutesInHour
 * @summary Minutes in 1 hour.
 */const h=60;/**
 * @constant
 * @name monthsInQuarter
 * @summary Months in 1 quarter.
 */const g=3;/**
 * @constant
 * @name monthsInYear
 * @summary Months in 1 year.
 */const m=12;/**
 * @constant
 * @name quartersInYear
 * @summary Quarters in 1 year
 */const b=4;/**
 * @constant
 * @name secondsInHour
 * @summary Seconds in 1 hour.
 */const _=3600;/**
 * @constant
 * @name secondsInMinute
 * @summary Seconds in 1 minute.
 */const y=60;/**
 * @constant
 * @name secondsInDay
 * @summary Seconds in 1 day.
 */const w=/* unused pure expression or super */null&&_*24;/**
 * @constant
 * @name secondsInWeek
 * @summary Seconds in 1 week.
 */const x=/* unused pure expression or super */null&&w*7;/**
 * @constant
 * @name secondsInYear
 * @summary Seconds in 1 year.
 */const Z=/* unused pure expression or super */null&&w*o;/**
 * @constant
 * @name secondsInMonth
 * @summary Seconds in 1 month
 */const k=/* unused pure expression or super */null&&Z/12;/**
 * @constant
 * @name secondsInQuarter
 * @summary Seconds in 1 quarter.
 */const C=/* unused pure expression or super */null&&k*3;/**
 * @constant
 * @name constructFromSymbol
 * @summary Symbol enabling Date extensions to inherit properties from the reference date.
 *
 * The symbol is used to enable the `constructFrom` function to construct a date
 * using a reference date and a value. It allows to transfer extra properties
 * from the reference date to the new date. It's useful for extensions like
 * [`TZDate`](https://github.com/date-fns/tz) that accept a time zone as
 * a constructor argument.
 */const D=Symbol.for("constructDateFrom")},85941:function(e,t,r){r.d(t,{L:()=>o});/* ESM import */var n=r(22050);/**
 * @name constructFrom
 * @category Generic Helpers
 * @summary Constructs a date using the reference date and the value
 *
 * @description
 * The function constructs a new date using the constructor from the reference
 * date and the given value. It helps to build generic functions that accept
 * date extensions.
 *
 * It defaults to `Date` if the passed reference date is a number or a string.
 *
 * Starting from v3.7.0, it allows to construct a date using `[Symbol.for("constructDateFrom")]`
 * enabling to transfer extra properties from the reference date to the new date.
 * It's useful for extensions like [`TZDate`](https://github.com/date-fns/tz)
 * that accept a time zone as a constructor argument.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The reference date to take constructor from
 * @param value - The value to create the date
 *
 * @returns Date initialized using the given date and value
 *
 * @example
 * import { constructFrom } from "./constructFrom/date-fns";
 *
 * // A function that clones a date preserving the original type
 * function cloneDate<DateType extends Date>(date: DateType): DateType {
 *   return constructFrom(
 *     date, // Use constructor from the given date
 *     date.getTime() // Use the date value to create a new date
 *   );
 * }
 */function o(e,t){if(typeof e==="function")return e(t);if(e&&typeof e==="object"&&n/* .constructFromSymbol */.I7 in e)return e[n/* .constructFromSymbol */.I7](t);if(e instanceof Date)return new e.constructor(t);return new Date(t)}// Fallback for modularized imports:
/* unused ESM default export */var a=/* unused pure expression or super */null&&o},23279:function(e,t,r){r.d(t,{w:()=>s});/* ESM import */var n=r(29486);/* ESM import */var o=r(90457);/* ESM import */var a=r(22050);/* ESM import */var i=r(51066);/**
 * The {@link differenceInCalendarDays} function options.
 *//**
 * @name differenceInCalendarDays
 * @category Day Helpers
 * @summary Get the number of calendar days between the given dates.
 *
 * @description
 * Get the number of calendar days between the given dates. This means that the times are removed
 * from the dates and then the difference in days is calculated.
 *
 * @param laterDate - The later date
 * @param earlierDate - The earlier date
 * @param options - The options object
 *
 * @returns The number of calendar days
 *
 * @example
 * // How many calendar days are between
 * // 2 July 2011 23:00:00 and 2 July 2012 00:00:00?
 * const result = differenceInCalendarDays(
 *   new Date(2012, 6, 2, 0, 0),
 *   new Date(2011, 6, 2, 23, 0)
 * )
 * //=> 366
 * // How many calendar days are between
 * // 2 July 2011 23:59:00 and 3 July 2011 00:01:00?
 * const result = differenceInCalendarDays(
 *   new Date(2011, 6, 3, 0, 1),
 *   new Date(2011, 6, 2, 23, 59)
 * )
 * //=> 1
 */function s(e,t,r){const[s,l]=(0,o/* .normalizeDates */.d)(r?.in,e,t);const c=(0,i/* .startOfDay */.b)(s);const d=(0,i/* .startOfDay */.b)(l);const u=+c-(0,n/* .getTimezoneOffsetInMilliseconds */.D)(c);const v=+d-(0,n/* .getTimezoneOffsetInMilliseconds */.D)(d);// Round the number of days to the nearest integer because the number of
// milliseconds in a day is not constant (e.g. it's different in the week of
// the daylight saving time clock shift).
return Math.round((u-v)/a/* .millisecondsInDay */.dP)}// Fallback for modularized imports:
/* unused ESM default export */var l=/* unused pure expression or super */null&&s},36430:function(e,t,r){r.d(t,{T:()=>o});/* ESM import */var n=r(90457);/**
 * The {@link differenceInCalendarMonths} function options.
 *//**
 * @name differenceInCalendarMonths
 * @category Month Helpers
 * @summary Get the number of calendar months between the given dates.
 *
 * @description
 * Get the number of calendar months between the given dates.
 *
 * @param laterDate - The later date
 * @param earlierDate - The earlier date
 * @param options - An object with options
 *
 * @returns The number of calendar months
 *
 * @example
 * // How many calendar months are between 31 January 2014 and 1 September 2014?
 * const result = differenceInCalendarMonths(
 *   new Date(2014, 8, 1),
 *   new Date(2014, 0, 31)
 * )
 * //=> 8
 */function o(e,t,r){const[o,a]=(0,n/* .normalizeDates */.d)(r?.in,e,t);const i=o.getFullYear()-a.getFullYear();const s=o.getMonth()-a.getMonth();return i*12+s}// Fallback for modularized imports:
/* unused ESM default export */var a=/* unused pure expression or super */null&&o},83475:function(e,t,r){r.d(t,{R:()=>a});/* ESM import */var n=r(15176);/* ESM import */var o=r(85941);/**
 * The {@link eachMonthOfInterval} function options.
 *//**
 * The {@link eachMonthOfInterval} function result type. It resolves the proper data type.
 *//**
 * @name eachMonthOfInterval
 * @category Interval Helpers
 * @summary Return the array of months within the specified time interval.
 *
 * @description
 * Return the array of months within the specified time interval.
 *
 * @typeParam IntervalType - Interval type.
 * @typeParam Options - Options type.
 *
 * @param interval - The interval.
 * @param options - An object with options.
 *
 * @returns The array with starts of months from the month of the interval start to the month of the interval end
 *
 * @example
 * // Each month between 6 February 2014 and 10 August 2014:
 * const result = eachMonthOfInterval({
 *   start: new Date(2014, 1, 6),
 *   end: new Date(2014, 7, 10)
 * })
 * //=> [
 * //   Sat Feb 01 2014 00:00:00,
 * //   Sat Mar 01 2014 00:00:00,
 * //   Tue Apr 01 2014 00:00:00,
 * //   Thu May 01 2014 00:00:00,
 * //   Sun Jun 01 2014 00:00:00,
 * //   Tue Jul 01 2014 00:00:00,
 * //   Fri Aug 01 2014 00:00:00
 * // ]
 */function a(e,t){const{start:r,end:a}=(0,n/* .normalizeInterval */.T)(t?.in,e);let i=+r>+a;const s=i?+r:+a;const l=i?a:r;l.setHours(0,0,0,0);l.setDate(1);let c=t?.step??1;if(!c)return[];if(c<0){c=-c;i=!i}const d=[];while(+l<=s){d.push((0,o/* .constructFrom */.L)(r,l));l.setMonth(l.getMonth()+c)}return i?d.reverse():d}// Fallback for modularized imports:
/* unused ESM default export */var i=/* unused pure expression or super */null&&a},13470:function(e,t,r){r.d(t,{g:()=>o});/* ESM import */var n=r(41041);/**
 * The {@link endOfISOWeek} function options.
 *//**
 * @name endOfISOWeek
 * @category ISO Week Helpers
 * @summary Return the end of an ISO week for the given date.
 *
 * @description
 * Return the end of an ISO week for the given date.
 * The result will be in the local timezone.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The original date
 * @param options - An object with options
 *
 * @returns The end of an ISO week
 *
 * @example
 * // The end of an ISO week for 2 September 2014 11:55:00:
 * const result = endOfISOWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sun Sep 07 2014 23:59:59.999
 */function o(e,t){return(0,n/* .endOfWeek */.v)(e,{...t,weekStartsOn:1})}// Fallback for modularized imports:
/* unused ESM default export */var a=/* unused pure expression or super */null&&o},28353:function(e,t,r){r.d(t,{V:()=>o});/* ESM import */var n=r(28898);/**
 * The {@link endOfMonth} function options.
 *//**
 * @name endOfMonth
 * @category Month Helpers
 * @summary Return the end of a month for the given date.
 *
 * @description
 * Return the end of a month for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The original date
 * @param options - An object with options
 *
 * @returns The end of a month
 *
 * @example
 * // The end of a month for 2 September 2014 11:55:00:
 * const result = endOfMonth(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 30 2014 23:59:59.999
 */function o(e,t){const r=(0,n/* .toDate */.Q)(e,t?.in);const o=r.getMonth();r.setFullYear(r.getFullYear(),o+1,0);r.setHours(23,59,59,999);return r}// Fallback for modularized imports:
/* unused ESM default export */var a=/* unused pure expression or super */null&&o},41041:function(e,t,r){r.d(t,{v:()=>a});/* ESM import */var n=r(92639);/* ESM import */var o=r(28898);/**
 * The {@link endOfWeek} function options.
 *//**
 * @name endOfWeek
 * @category Week Helpers
 * @summary Return the end of a week for the given date.
 *
 * @description
 * Return the end of a week for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The original date
 * @param options - An object with options
 *
 * @returns The end of a week
 *
 * @example
 * // The end of a week for 2 September 2014 11:55:00:
 * const result = endOfWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sat Sep 06 2014 23:59:59.999
 *
 * @example
 * // If the week starts on Monday, the end of the week for 2 September 2014 11:55:00:
 * const result = endOfWeek(new Date(2014, 8, 2, 11, 55, 0), { weekStartsOn: 1 })
 * //=> Sun Sep 07 2014 23:59:59.999
 */function a(e,t){const r=(0,n/* .getDefaultOptions */.j)();const a=t?.weekStartsOn??t?.locale?.options?.weekStartsOn??r.weekStartsOn??r.locale?.options?.weekStartsOn??0;const i=(0,o/* .toDate */.Q)(e,t?.in);const s=i.getDay();const l=(s<a?-7:0)+6-(s-a);i.setDate(i.getDate()+l);i.setHours(23,59,59,999);return i}// Fallback for modularized imports:
/* unused ESM default export */var i=/* unused pure expression or super */null&&a},45827:function(e,t,r){r.d(t,{w:()=>o});/* ESM import */var n=r(28898);/**
 * The {@link endOfYear} function options.
 *//**
 * @name endOfYear
 * @category Year Helpers
 * @summary Return the end of a year for the given date.
 *
 * @description
 * Return the end of a year for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The original date
 * @param options - The options
 *
 * @returns The end of a year
 *
 * @example
 * // The end of a year for 2 September 2014 11:55:00:
 * const result = endOfYear(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Wed Dec 31 2014 23:59:59.999
 */function o(e,t){const r=(0,n/* .toDate */.Q)(e,t?.in);const o=r.getFullYear();r.setFullYear(o+1,0,0);r.setHours(23,59,59,999);return r}// Fallback for modularized imports:
/* unused ESM default export */var a=/* unused pure expression or super */null&&o},17989:function(e,t,r){r.d(t,{WU:()=>h});/* ESM import */var n=r(79237);/* ESM import */var o=r(92639);/* ESM import */var a=r(46083);/* ESM import */var i=r(15475);/* ESM import */var s=r(69814);/* ESM import */var l=r(1173);/* ESM import */var c=r(28898);// Rexports of internal for libraries to use.
// See: https://github.com/date-fns/date-fns/issues/3638#issuecomment-1877082874
// This RegExp consists of three parts separated by `|`:
// - [yYQqMLwIdDecihHKkms]o matches any available ordinal number token
//   (one of the certain letters followed by `o`)
// - (\w)\1* matches any sequences of the same letter
// - '' matches two quote characters in a row
// - '(''|[^'])+('|$) matches anything surrounded by two quote characters ('),
//   except a single quote symbol, which ends the sequence.
//   Two quote characters do not end the sequence.
//   If there is no matching single quote
//   then the sequence will continue until the end of the string.
// - . matches any single character unmatched by previous parts of the RegExps
const d=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g;// This RegExp catches symbols escaped by quotes, and also
// sequences of symbols P, p, and the combinations like `PPPPPPPppppp`
const u=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;const v=/^'([^]*?)'?$/;const f=/''/g;const p=/[a-zA-Z]/;/**
 * The {@link format} function options.
 *//**
 * @name format
 * @alias formatDate
 * @category Common Helpers
 * @summary Format the date.
 *
 * @description
 * Return the formatted date string in the given format. The result may vary by locale.
 *
 * > ⚠️ Please note that the `format` tokens differ from Moment.js and other libraries.
 * > See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * The characters wrapped between two single quotes characters (') are escaped.
 * Two single quotes in a row, whether inside or outside a quoted sequence, represent a 'real' single quote.
 * (see the last example)
 *
 * Format of the string is based on Unicode Technical Standard #35:
 * https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
 * with a few additions (see note 7 below the table).
 *
 * Accepted patterns:
 * | Unit                            | Pattern | Result examples                   | Notes |
 * |---------------------------------|---------|-----------------------------------|-------|
 * | Era                             | G..GGG  | AD, BC                            |       |
 * |                                 | GGGG    | Anno Domini, Before Christ        | 2     |
 * |                                 | GGGGG   | A, B                              |       |
 * | Calendar year                   | y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | yo      | 44th, 1st, 0th, 17th              | 5,7   |
 * |                                 | yy      | 44, 01, 00, 17                    | 5     |
 * |                                 | yyy     | 044, 001, 1900, 2017              | 5     |
 * |                                 | yyyy    | 0044, 0001, 1900, 2017            | 5     |
 * |                                 | yyyyy   | ...                               | 3,5   |
 * | Local week-numbering year       | Y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | Yo      | 44th, 1st, 1900th, 2017th         | 5,7   |
 * |                                 | YY      | 44, 01, 00, 17                    | 5,8   |
 * |                                 | YYY     | 044, 001, 1900, 2017              | 5     |
 * |                                 | YYYY    | 0044, 0001, 1900, 2017            | 5,8   |
 * |                                 | YYYYY   | ...                               | 3,5   |
 * | ISO week-numbering year         | R       | -43, 0, 1, 1900, 2017             | 5,7   |
 * |                                 | RR      | -43, 00, 01, 1900, 2017           | 5,7   |
 * |                                 | RRR     | -043, 000, 001, 1900, 2017        | 5,7   |
 * |                                 | RRRR    | -0043, 0000, 0001, 1900, 2017     | 5,7   |
 * |                                 | RRRRR   | ...                               | 3,5,7 |
 * | Extended year                   | u       | -43, 0, 1, 1900, 2017             | 5     |
 * |                                 | uu      | -43, 01, 1900, 2017               | 5     |
 * |                                 | uuu     | -043, 001, 1900, 2017             | 5     |
 * |                                 | uuuu    | -0043, 0001, 1900, 2017           | 5     |
 * |                                 | uuuuu   | ...                               | 3,5   |
 * | Quarter (formatting)            | Q       | 1, 2, 3, 4                        |       |
 * |                                 | Qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | QQ      | 01, 02, 03, 04                    |       |
 * |                                 | QQQ     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | QQQQ    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | QQQQQ   | 1, 2, 3, 4                        | 4     |
 * | Quarter (stand-alone)           | q       | 1, 2, 3, 4                        |       |
 * |                                 | qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | qq      | 01, 02, 03, 04                    |       |
 * |                                 | qqq     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | qqqq    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | qqqqq   | 1, 2, 3, 4                        | 4     |
 * | Month (formatting)              | M       | 1, 2, ..., 12                     |       |
 * |                                 | Mo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | MM      | 01, 02, ..., 12                   |       |
 * |                                 | MMM     | Jan, Feb, ..., Dec                |       |
 * |                                 | MMMM    | January, February, ..., December  | 2     |
 * |                                 | MMMMM   | J, F, ..., D                      |       |
 * | Month (stand-alone)             | L       | 1, 2, ..., 12                     |       |
 * |                                 | Lo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | LL      | 01, 02, ..., 12                   |       |
 * |                                 | LLL     | Jan, Feb, ..., Dec                |       |
 * |                                 | LLLL    | January, February, ..., December  | 2     |
 * |                                 | LLLLL   | J, F, ..., D                      |       |
 * | Local week of year              | w       | 1, 2, ..., 53                     |       |
 * |                                 | wo      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | ww      | 01, 02, ..., 53                   |       |
 * | ISO week of year                | I       | 1, 2, ..., 53                     | 7     |
 * |                                 | Io      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | II      | 01, 02, ..., 53                   | 7     |
 * | Day of month                    | d       | 1, 2, ..., 31                     |       |
 * |                                 | do      | 1st, 2nd, ..., 31st               | 7     |
 * |                                 | dd      | 01, 02, ..., 31                   |       |
 * | Day of year                     | D       | 1, 2, ..., 365, 366               | 9     |
 * |                                 | Do      | 1st, 2nd, ..., 365th, 366th       | 7     |
 * |                                 | DD      | 01, 02, ..., 365, 366             | 9     |
 * |                                 | DDD     | 001, 002, ..., 365, 366           |       |
 * |                                 | DDDD    | ...                               | 3     |
 * | Day of week (formatting)        | E..EEE  | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | EEEE    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | EEEEE   | M, T, W, T, F, S, S               |       |
 * |                                 | EEEEEE  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | ISO day of week (formatting)    | i       | 1, 2, 3, ..., 7                   | 7     |
 * |                                 | io      | 1st, 2nd, ..., 7th                | 7     |
 * |                                 | ii      | 01, 02, ..., 07                   | 7     |
 * |                                 | iii     | Mon, Tue, Wed, ..., Sun           | 7     |
 * |                                 | iiii    | Monday, Tuesday, ..., Sunday      | 2,7   |
 * |                                 | iiiii   | M, T, W, T, F, S, S               | 7     |
 * |                                 | iiiiii  | Mo, Tu, We, Th, Fr, Sa, Su        | 7     |
 * | Local day of week (formatting)  | e       | 2, 3, 4, ..., 1                   |       |
 * |                                 | eo      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | ee      | 02, 03, ..., 01                   |       |
 * |                                 | eee     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | eeee    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | eeeee   | M, T, W, T, F, S, S               |       |
 * |                                 | eeeeee  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | Local day of week (stand-alone) | c       | 2, 3, 4, ..., 1                   |       |
 * |                                 | co      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | cc      | 02, 03, ..., 01                   |       |
 * |                                 | ccc     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | cccc    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | ccccc   | M, T, W, T, F, S, S               |       |
 * |                                 | cccccc  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | AM, PM                          | a..aa   | AM, PM                            |       |
 * |                                 | aaa     | am, pm                            |       |
 * |                                 | aaaa    | a.m., p.m.                        | 2     |
 * |                                 | aaaaa   | a, p                              |       |
 * | AM, PM, noon, midnight          | b..bb   | AM, PM, noon, midnight            |       |
 * |                                 | bbb     | am, pm, noon, midnight            |       |
 * |                                 | bbbb    | a.m., p.m., noon, midnight        | 2     |
 * |                                 | bbbbb   | a, p, n, mi                       |       |
 * | Flexible day period             | B..BBB  | at night, in the morning, ...     |       |
 * |                                 | BBBB    | at night, in the morning, ...     | 2     |
 * |                                 | BBBBB   | at night, in the morning, ...     |       |
 * | Hour [1-12]                     | h       | 1, 2, ..., 11, 12                 |       |
 * |                                 | ho      | 1st, 2nd, ..., 11th, 12th         | 7     |
 * |                                 | hh      | 01, 02, ..., 11, 12               |       |
 * | Hour [0-23]                     | H       | 0, 1, 2, ..., 23                  |       |
 * |                                 | Ho      | 0th, 1st, 2nd, ..., 23rd          | 7     |
 * |                                 | HH      | 00, 01, 02, ..., 23               |       |
 * | Hour [0-11]                     | K       | 1, 2, ..., 11, 0                  |       |
 * |                                 | Ko      | 1st, 2nd, ..., 11th, 0th          | 7     |
 * |                                 | KK      | 01, 02, ..., 11, 00               |       |
 * | Hour [1-24]                     | k       | 24, 1, 2, ..., 23                 |       |
 * |                                 | ko      | 24th, 1st, 2nd, ..., 23rd         | 7     |
 * |                                 | kk      | 24, 01, 02, ..., 23               |       |
 * | Minute                          | m       | 0, 1, ..., 59                     |       |
 * |                                 | mo      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | mm      | 00, 01, ..., 59                   |       |
 * | Second                          | s       | 0, 1, ..., 59                     |       |
 * |                                 | so      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | ss      | 00, 01, ..., 59                   |       |
 * | Fraction of second              | S       | 0, 1, ..., 9                      |       |
 * |                                 | SS      | 00, 01, ..., 99                   |       |
 * |                                 | SSS     | 000, 001, ..., 999                |       |
 * |                                 | SSSS    | ...                               | 3     |
 * | Timezone (ISO-8601 w/ Z)        | X       | -08, +0530, Z                     |       |
 * |                                 | XX      | -0800, +0530, Z                   |       |
 * |                                 | XXX     | -08:00, +05:30, Z                 |       |
 * |                                 | XXXX    | -0800, +0530, Z, +123456          | 2     |
 * |                                 | XXXXX   | -08:00, +05:30, Z, +12:34:56      |       |
 * | Timezone (ISO-8601 w/o Z)       | x       | -08, +0530, +00                   |       |
 * |                                 | xx      | -0800, +0530, +0000               |       |
 * |                                 | xxx     | -08:00, +05:30, +00:00            | 2     |
 * |                                 | xxxx    | -0800, +0530, +0000, +123456      |       |
 * |                                 | xxxxx   | -08:00, +05:30, +00:00, +12:34:56 |       |
 * | Timezone (GMT)                  | O...OOO | GMT-8, GMT+5:30, GMT+0            |       |
 * |                                 | OOOO    | GMT-08:00, GMT+05:30, GMT+00:00   | 2     |
 * | Timezone (specific non-locat.)  | z...zzz | GMT-8, GMT+5:30, GMT+0            | 6     |
 * |                                 | zzzz    | GMT-08:00, GMT+05:30, GMT+00:00   | 2,6   |
 * | Seconds timestamp               | t       | 512969520                         | 7     |
 * |                                 | tt      | ...                               | 3,7   |
 * | Milliseconds timestamp          | T       | 512969520900                      | 7     |
 * |                                 | TT      | ...                               | 3,7   |
 * | Long localized date             | P       | 04/29/1453                        | 7     |
 * |                                 | PP      | Apr 29, 1453                      | 7     |
 * |                                 | PPP     | April 29th, 1453                  | 7     |
 * |                                 | PPPP    | Friday, April 29th, 1453          | 2,7   |
 * | Long localized time             | p       | 12:00 AM                          | 7     |
 * |                                 | pp      | 12:00:00 AM                       | 7     |
 * |                                 | ppp     | 12:00:00 AM GMT+2                 | 7     |
 * |                                 | pppp    | 12:00:00 AM GMT+02:00             | 2,7   |
 * | Combination of date and time    | Pp      | 04/29/1453, 12:00 AM              | 7     |
 * |                                 | PPpp    | Apr 29, 1453, 12:00:00 AM         | 7     |
 * |                                 | PPPppp  | April 29th, 1453 at ...           | 7     |
 * |                                 | PPPPpppp| Friday, April 29th, 1453 at ...   | 2,7   |
 * Notes:
 * 1. "Formatting" units (e.g. formatting quarter) in the default en-US locale
 *    are the same as "stand-alone" units, but are different in some languages.
 *    "Formatting" units are declined according to the rules of the language
 *    in the context of a date. "Stand-alone" units are always nominative singular:
 *
 *    `format(new Date(2017, 10, 6), 'do LLLL', {locale: cs}) //=> '6. listopad'`
 *
 *    `format(new Date(2017, 10, 6), 'do MMMM', {locale: cs}) //=> '6. listopadu'`
 *
 * 2. Any sequence of the identical letters is a pattern, unless it is escaped by
 *    the single quote characters (see below).
 *    If the sequence is longer than listed in table (e.g. `EEEEEEEEEEE`)
 *    the output will be the same as default pattern for this unit, usually
 *    the longest one (in case of ISO weekdays, `EEEE`). Default patterns for units
 *    are marked with "2" in the last column of the table.
 *
 *    `format(new Date(2017, 10, 6), 'MMM') //=> 'Nov'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMM') //=> 'N'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMMM') //=> 'November'`
 *
 * 3. Some patterns could be unlimited length (such as `yyyyyyyy`).
 *    The output will be padded with zeros to match the length of the pattern.
 *
 *    `format(new Date(2017, 10, 6), 'yyyyyyyy') //=> '00002017'`
 *
 * 4. `QQQQQ` and `qqqqq` could be not strictly numerical in some locales.
 *    These tokens represent the shortest form of the quarter.
 *
 * 5. The main difference between `y` and `u` patterns are B.C. years:
 *
 *    | Year | `y` | `u` |
 *    |------|-----|-----|
 *    | AC 1 |   1 |   1 |
 *    | BC 1 |   1 |   0 |
 *    | BC 2 |   2 |  -1 |
 *
 *    Also `yy` always returns the last two digits of a year,
 *    while `uu` pads single digit years to 2 characters and returns other years unchanged:
 *
 *    | Year | `yy` | `uu` |
 *    |------|------|------|
 *    | 1    |   01 |   01 |
 *    | 14   |   14 |   14 |
 *    | 376  |   76 |  376 |
 *    | 1453 |   53 | 1453 |
 *
 *    The same difference is true for local and ISO week-numbering years (`Y` and `R`),
 *    except local week-numbering years are dependent on `options.weekStartsOn`
 *    and `options.firstWeekContainsDate` (compare [getISOWeekYear](https://date-fns.org/docs/getISOWeekYear)
 *    and [getWeekYear](https://date-fns.org/docs/getWeekYear)).
 *
 * 6. Specific non-location timezones are currently unavailable in `date-fns`,
 *    so right now these tokens fall back to GMT timezones.
 *
 * 7. These patterns are not in the Unicode Technical Standard #35:
 *    - `i`: ISO day of week
 *    - `I`: ISO week of year
 *    - `R`: ISO week-numbering year
 *    - `t`: seconds timestamp
 *    - `T`: milliseconds timestamp
 *    - `o`: ordinal number modifier
 *    - `P`: long localized date
 *    - `p`: long localized time
 *
 * 8. `YY` and `YYYY` tokens represent week-numbering years but they are often confused with years.
 *    You should enable `options.useAdditionalWeekYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * 9. `D` and `DD` tokens represent days of the year but they are often confused with days of the month.
 *    You should enable `options.useAdditionalDayOfYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * @param date - The original date
 * @param format - The string of tokens
 * @param options - An object with options
 *
 * @returns The formatted date string
 *
 * @throws `date` must not be Invalid Date
 * @throws `options.locale` must contain `localize` property
 * @throws `options.locale` must contain `formatLong` property
 * @throws use `yyyy` instead of `YYYY` for formatting years using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws use `yy` instead of `YY` for formatting years using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws use `d` instead of `D` for formatting days of the month using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws use `dd` instead of `DD` for formatting days of the month using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws format string contains an unescaped latin alphabet character
 *
 * @example
 * // Represent 11 February 2014 in middle-endian format:
 * const result = format(new Date(2014, 1, 11), 'MM/dd/yyyy')
 * //=> '02/11/2014'
 *
 * @example
 * // Represent 2 July 2014 in Esperanto:
 * import { eoLocale } from 'date-fns/locale/eo'
 * const result = format(new Date(2014, 6, 2), "do 'de' MMMM yyyy", {
 *   locale: eoLocale
 * })
 * //=> '2-a de julio 2014'
 *
 * @example
 * // Escape string by single quote characters:
 * const result = format(new Date(2014, 6, 2, 15), "h 'o''clock'")
 * //=> "3 o'clock"
 */function h(e,t,r){const v=(0,o/* .getDefaultOptions */.j)();const f=r?.locale??v.locale??n/* .enUS */._;const h=r?.firstWeekContainsDate??r?.locale?.options?.firstWeekContainsDate??v.firstWeekContainsDate??v.locale?.options?.firstWeekContainsDate??1;const m=r?.weekStartsOn??r?.locale?.options?.weekStartsOn??v.weekStartsOn??v.locale?.options?.weekStartsOn??0;const b=(0,c/* .toDate */.Q)(e,r?.in);if(!(0,l/* .isValid */.J)(b)){throw new RangeError("Invalid time value")}let _=t.match(u).map(e=>{const t=e[0];if(t==="p"||t==="P"){const r=i/* .longFormatters */.G[t];return r(e,f.formatLong)}return e}).join("").match(d).map(e=>{// Replace two single quote characters with one single quote character
if(e==="''"){return{isToken:false,value:"'"}}const t=e[0];if(t==="'"){return{isToken:false,value:g(e)}}if(a/* .formatters */.$[t]){return{isToken:true,value:e}}if(t.match(p)){throw new RangeError("Format string contains an unescaped latin alphabet character `"+t+"`")}return{isToken:false,value:e}});// invoke localize preprocessor (only for french locales at the moment)
if(f.localize.preprocessor){_=f.localize.preprocessor(b,_)}const y={firstWeekContainsDate:h,weekStartsOn:m,locale:f};return _.map(n=>{if(!n.isToken)return n.value;const o=n.value;if(!r?.useAdditionalWeekYearTokens&&(0,s/* .isProtectedWeekYearToken */.Do)(o)||!r?.useAdditionalDayOfYearTokens&&(0,s/* .isProtectedDayOfYearToken */.Iu)(o)){(0,s/* .warnOrThrowProtectedError */.DD)(o,t,String(e))}const i=a/* .formatters */.$[o[0]];return i(b,o,f.localize,y)}).join("")}function g(e){const t=e.match(v);if(!t){return e}return t[1].replace(f,"'")}// Fallback for modularized imports:
/* unused ESM default export */var m=/* unused pure expression or super */null&&h},29750:function(e,t,r){r.d(t,{B:()=>i});/* ESM import */var n=r(23279);/* ESM import */var o=r(35523);/* ESM import */var a=r(28898);/**
 * The {@link getDayOfYear} function options.
 *//**
 * @name getDayOfYear
 * @category Day Helpers
 * @summary Get the day of the year of the given date.
 *
 * @description
 * Get the day of the year of the given date.
 *
 * @param date - The given date
 * @param options - The options
 *
 * @returns The day of year
 *
 * @example
 * // Which day of the year is 2 July 2014?
 * const result = getDayOfYear(new Date(2014, 6, 2))
 * //=> 183
 */function i(e,t){const r=(0,a/* .toDate */.Q)(e,t?.in);const i=(0,n/* .differenceInCalendarDays */.w)(r,(0,o/* .startOfYear */.e)(r));const s=i+1;return s}// Fallback for modularized imports:
/* unused ESM default export */var s=/* unused pure expression or super */null&&i},12309:function(e,t,r){r.d(t,{N:()=>a});/* ESM import */var n=r(85941);/* ESM import */var o=r(28898);/**
 * The {@link getDaysInMonth} function options.
 *//**
 * @name getDaysInMonth
 * @category Month Helpers
 * @summary Get the number of days in a month of the given date.
 *
 * @description
 * Get the number of days in a month of the given date, considering the context if provided.
 *
 * @param date - The given date
 * @param options - An object with options
 *
 * @returns The number of days in a month
 *
 * @example
 * // How many days are in February 2000?
 * const result = getDaysInMonth(new Date(2000, 1))
 * //=> 29
 */function a(e,t){const r=(0,o/* .toDate */.Q)(e,t?.in);const a=r.getFullYear();const i=r.getMonth();const s=(0,n/* .constructFrom */.L)(r,0);s.setFullYear(a,i+1,0);s.setHours(0,0,0,0);return s.getDate()}// Fallback for modularized imports:
/* unused ESM default export */var i=/* unused pure expression or super */null&&a},65719:function(e,t,r){r.d(t,{l:()=>s});/* ESM import */var n=r(22050);/* ESM import */var o=r(44459);/* ESM import */var a=r(47926);/* ESM import */var i=r(28898);/**
 * The {@link getISOWeek} function options.
 *//**
 * @name getISOWeek
 * @category ISO Week Helpers
 * @summary Get the ISO week of the given date.
 *
 * @description
 * Get the ISO week of the given date.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param date - The given date
 * @param options - The options
 *
 * @returns The ISO week
 *
 * @example
 * // Which week of the ISO-week numbering year is 2 January 2005?
 * const result = getISOWeek(new Date(2005, 0, 2))
 * //=> 53
 */function s(e,t){const r=(0,i/* .toDate */.Q)(e,t?.in);const s=+(0,o/* .startOfISOWeek */.T)(r)-+(0,a/* .startOfISOWeekYear */.E)(r);// Round the number of weeks to the nearest integer because the number of
// milliseconds in a week is not constant (e.g. it's different in the week of
// the daylight saving time clock shift).
return Math.round(s/n/* .millisecondsInWeek */.jE)+1}// Fallback for modularized imports:
/* unused ESM default export */var l=/* unused pure expression or super */null&&s},74155:function(e,t,r){r.d(t,{L:()=>i});/* ESM import */var n=r(85941);/* ESM import */var o=r(44459);/* ESM import */var a=r(28898);/**
 * The {@link getISOWeekYear} function options.
 *//**
 * @name getISOWeekYear
 * @category ISO Week-Numbering Year Helpers
 * @summary Get the ISO week-numbering year of the given date.
 *
 * @description
 * Get the ISO week-numbering year of the given date,
 * which always starts 3 days before the year's first Thursday.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param date - The given date
 *
 * @returns The ISO week-numbering year
 *
 * @example
 * // Which ISO-week numbering year is 2 January 2005?
 * const result = getISOWeekYear(new Date(2005, 0, 2))
 * //=> 2004
 */function i(e,t){const r=(0,a/* .toDate */.Q)(e,t?.in);const i=r.getFullYear();const s=(0,n/* .constructFrom */.L)(r,0);s.setFullYear(i+1,0,4);s.setHours(0,0,0,0);const l=(0,o/* .startOfISOWeek */.T)(s);const c=(0,n/* .constructFrom */.L)(r,0);c.setFullYear(i,0,4);c.setHours(0,0,0,0);const d=(0,o/* .startOfISOWeek */.T)(c);if(r.getTime()>=l.getTime()){return i+1}else if(r.getTime()>=d.getTime()){return i}else{return i-1}}// Fallback for modularized imports:
/* unused ESM default export */var s=/* unused pure expression or super */null&&i},11854:function(e,t,r){r.d(t,{j:()=>o});/* ESM import */var n=r(28898);/**
 * The {@link getMonth} function options.
 *//**
 * @name getMonth
 * @category Month Helpers
 * @summary Get the month of the given date.
 *
 * @description
 * Get the month of the given date.
 *
 * @param date - The given date
 * @param options - An object with options
 *
 * @returns The month index (0-11)
 *
 * @example
 * // Which month is 29 February 2012?
 * const result = getMonth(new Date(2012, 1, 29))
 * //=> 1
 */function o(e,t){return(0,n/* .toDate */.Q)(e,t?.in).getMonth()}// Fallback for modularized imports:
/* unused ESM default export */var a=/* unused pure expression or super */null&&o},12347:function(e,t,r){r.d(t,{Q:()=>s});/* ESM import */var n=r(22050);/* ESM import */var o=r(19397);/* ESM import */var a=r(86009);/* ESM import */var i=r(28898);/**
 * The {@link getWeek} function options.
 *//**
 * @name getWeek
 * @category Week Helpers
 * @summary Get the local week index of the given date.
 *
 * @description
 * Get the local week index of the given date.
 * The exact calculation depends on the values of
 * `options.weekStartsOn` (which is the index of the first day of the week)
 * and `options.firstWeekContainsDate` (which is the day of January, which is always in
 * the first week of the week-numbering year)
 *
 * Week numbering: https://en.wikipedia.org/wiki/Week#The_ISO_week_date_system
 *
 * @param date - The given date
 * @param options - An object with options
 *
 * @returns The week
 *
 * @example
 * // Which week of the local week numbering year is 2 January 2005 with default options?
 * const result = getWeek(new Date(2005, 0, 2))
 * //=> 2
 *
 * @example
 * // Which week of the local week numbering year is 2 January 2005,
 * // if Monday is the first day of the week,
 * // and the first week of the year always contains 4 January?
 * const result = getWeek(new Date(2005, 0, 2), {
 *   weekStartsOn: 1,
 *   firstWeekContainsDate: 4
 * })
 * //=> 53
 */function s(e,t){const r=(0,i/* .toDate */.Q)(e,t?.in);const s=+(0,o/* .startOfWeek */.z)(r,t)-+(0,a/* .startOfWeekYear */.v)(r,t);// Round the number of weeks to the nearest integer because the number of
// milliseconds in a week is not constant (e.g. it's different in the week of
// the daylight saving time clock shift).
return Math.round(s/n/* .millisecondsInWeek */.jE)+1}// Fallback for modularized imports:
/* unused ESM default export */var l=/* unused pure expression or super */null&&s},7898:function(e,t,r){r.d(t,{c:()=>s});/* ESM import */var n=r(92639);/* ESM import */var o=r(85941);/* ESM import */var a=r(19397);/* ESM import */var i=r(28898);/**
 * The {@link getWeekYear} function options.
 *//**
 * @name getWeekYear
 * @category Week-Numbering Year Helpers
 * @summary Get the local week-numbering year of the given date.
 *
 * @description
 * Get the local week-numbering year of the given date.
 * The exact calculation depends on the values of
 * `options.weekStartsOn` (which is the index of the first day of the week)
 * and `options.firstWeekContainsDate` (which is the day of January, which is always in
 * the first week of the week-numbering year)
 *
 * Week numbering: https://en.wikipedia.org/wiki/Week#The_ISO_week_date_system
 *
 * @param date - The given date
 * @param options - An object with options.
 *
 * @returns The local week-numbering year
 *
 * @example
 * // Which week numbering year is 26 December 2004 with the default settings?
 * const result = getWeekYear(new Date(2004, 11, 26))
 * //=> 2005
 *
 * @example
 * // Which week numbering year is 26 December 2004 if week starts on Saturday?
 * const result = getWeekYear(new Date(2004, 11, 26), { weekStartsOn: 6 })
 * //=> 2004
 *
 * @example
 * // Which week numbering year is 26 December 2004 if the first week contains 4 January?
 * const result = getWeekYear(new Date(2004, 11, 26), { firstWeekContainsDate: 4 })
 * //=> 2004
 */function s(e,t){const r=(0,i/* .toDate */.Q)(e,t?.in);const s=r.getFullYear();const l=(0,n/* .getDefaultOptions */.j)();const c=t?.firstWeekContainsDate??t?.locale?.options?.firstWeekContainsDate??l.firstWeekContainsDate??l.locale?.options?.firstWeekContainsDate??1;const d=(0,o/* .constructFrom */.L)(t?.in||e,0);d.setFullYear(s+1,0,c);d.setHours(0,0,0,0);const u=(0,a/* .startOfWeek */.z)(d,t);const v=(0,o/* .constructFrom */.L)(t?.in||e,0);v.setFullYear(s,0,c);v.setHours(0,0,0,0);const f=(0,a/* .startOfWeek */.z)(v,t);if(+r>=+u){return s+1}else if(+r>=+f){return s}else{return s-1}}// Fallback for modularized imports:
/* unused ESM default export */var l=/* unused pure expression or super */null&&s},22431:function(e,t,r){r.d(t,{S:()=>o});/* ESM import */var n=r(28898);/**
 * The {@link getYear} function options.
 *//**
 * @name getYear
 * @category Year Helpers
 * @summary Get the year of the given date.
 *
 * @description
 * Get the year of the given date.
 *
 * @param date - The given date
 * @param options - An object with options
 *
 * @returns The year
 *
 * @example
 * // Which year is 2 July 2014?
 * const result = getYear(new Date(2014, 6, 2))
 * //=> 2014
 */function o(e,t){return(0,n/* .toDate */.Q)(e,t?.in).getFullYear()}// Fallback for modularized imports:
/* unused ESM default export */var a=/* unused pure expression or super */null&&o},18474:function(e,t,r){r.d(t,{A:()=>o});/* ESM import */var n=r(28898);/**
 * @name isAfter
 * @category Common Helpers
 * @summary Is the first date after the second one?
 *
 * @description
 * Is the first date after the second one?
 *
 * @param date - The date that should be after the other one to return true
 * @param dateToCompare - The date to compare with
 *
 * @returns The first date is after the second date
 *
 * @example
 * // Is 10 July 1989 after 11 February 1987?
 * const result = isAfter(new Date(1989, 6, 10), new Date(1987, 1, 11))
 * //=> true
 */function o(e,t){return+(0,n/* .toDate */.Q)(e)>+(0,n/* .toDate */.Q)(t)}// Fallback for modularized imports:
/* unused ESM default export */var a=/* unused pure expression or super */null&&o},32880:function(e,t,r){r.d(t,{R:()=>o});/* ESM import */var n=r(28898);/**
 * @name isBefore
 * @category Common Helpers
 * @summary Is the first date before the second one?
 *
 * @description
 * Is the first date before the second one?
 *
 * @param date - The date that should be before the other one to return true
 * @param dateToCompare - The date to compare with
 *
 * @returns The first date is before the second date
 *
 * @example
 * // Is 10 July 1989 before 11 February 1987?
 * const result = isBefore(new Date(1989, 6, 10), new Date(1987, 1, 11))
 * //=> false
 */function o(e,t){return+(0,n/* .toDate */.Q)(e)<+(0,n/* .toDate */.Q)(t)}// Fallback for modularized imports:
/* unused ESM default export */var a=/* unused pure expression or super */null&&o},46695:function(e,t,r){r.d(t,{J:()=>n});/**
 * @name isDate
 * @category Common Helpers
 * @summary Is the given value a date?
 *
 * @description
 * Returns true if the given value is an instance of Date. The function works for dates transferred across iframes.
 *
 * @param value - The value to check
 *
 * @returns True if the given value is a date
 *
 * @example
 * // For a valid date:
 * const result = isDate(new Date())
 * //=> true
 *
 * @example
 * // For an invalid date:
 * const result = isDate(new Date(NaN))
 * //=> true
 *
 * @example
 * // For some value:
 * const result = isDate('2014-02-31')
 * //=> false
 *
 * @example
 * // For an object:
 * const result = isDate({})
 * //=> false
 */function n(e){return e instanceof Date||typeof e==="object"&&Object.prototype.toString.call(e)==="[object Date]"}// Fallback for modularized imports:
/* unused ESM default export */var o=/* unused pure expression or super */null&&n},17522:function(e,t,r){r.d(t,{K:()=>a});/* ESM import */var n=r(90457);/* ESM import */var o=r(51066);/**
 * The {@link isSameDay} function options.
 *//**
 * @name isSameDay
 * @category Day Helpers
 * @summary Are the given dates in the same day (and year and month)?
 *
 * @description
 * Are the given dates in the same day (and year and month)?
 *
 * @param laterDate - The first date to check
 * @param earlierDate - The second date to check
 * @param options - An object with options
 *
 * @returns The dates are in the same day (and year and month)
 *
 * @example
 * // Are 4 September 06:00:00 and 4 September 18:00:00 in the same day?
 * const result = isSameDay(new Date(2014, 8, 4, 6, 0), new Date(2014, 8, 4, 18, 0))
 * //=> true
 *
 * @example
 * // Are 4 September and 4 October in the same day?
 * const result = isSameDay(new Date(2014, 8, 4), new Date(2014, 9, 4))
 * //=> false
 *
 * @example
 * // Are 4 September, 2014 and 4 September, 2015 in the same day?
 * const result = isSameDay(new Date(2014, 8, 4), new Date(2015, 8, 4))
 * //=> false
 */function a(e,t,r){const[a,i]=(0,n/* .normalizeDates */.d)(r?.in,e,t);return+(0,o/* .startOfDay */.b)(a)===+(0,o/* .startOfDay */.b)(i)}// Fallback for modularized imports:
/* unused ESM default export */var i=/* unused pure expression or super */null&&a},40756:function(e,t,r){r.d(t,{x:()=>o});/* ESM import */var n=r(90457);/**
 * The {@link isSameMonth} function options.
 *//**
 * @name isSameMonth
 * @category Month Helpers
 * @summary Are the given dates in the same month (and year)?
 *
 * @description
 * Are the given dates in the same month (and year)?
 *
 * @param laterDate - The first date to check
 * @param earlierDate - The second date to check
 * @param options - An object with options
 *
 * @returns The dates are in the same month (and year)
 *
 * @example
 * // Are 2 September 2014 and 25 September 2014 in the same month?
 * const result = isSameMonth(new Date(2014, 8, 2), new Date(2014, 8, 25))
 * //=> true
 *
 * @example
 * // Are 2 September 2014 and 25 September 2015 in the same month?
 * const result = isSameMonth(new Date(2014, 8, 2), new Date(2015, 8, 25))
 * //=> false
 */function o(e,t,r){const[o,a]=(0,n/* .normalizeDates */.d)(r?.in,e,t);return o.getFullYear()===a.getFullYear()&&o.getMonth()===a.getMonth()}// Fallback for modularized imports:
/* unused ESM default export */var a=/* unused pure expression or super */null&&o},26098:function(e,t,r){r.d(t,{F:()=>o});/* ESM import */var n=r(90457);/**
 * The {@link isSameYear} function options.
 *//**
 * @name isSameYear
 * @category Year Helpers
 * @summary Are the given dates in the same year?
 *
 * @description
 * Are the given dates in the same year?
 *
 * @param laterDate - The first date to check
 * @param earlierDate - The second date to check
 * @param options - An object with options
 *
 * @returns The dates are in the same year
 *
 * @example
 * // Are 2 September 2014 and 25 September 2014 in the same year?
 * const result = isSameYear(new Date(2014, 8, 2), new Date(2014, 8, 25))
 * //=> true
 */function o(e,t,r){const[o,a]=(0,n/* .normalizeDates */.d)(r?.in,e,t);return o.getFullYear()===a.getFullYear()}// Fallback for modularized imports:
/* unused ESM default export */var a=/* unused pure expression or super */null&&o},1173:function(e,t,r){r.d(t,{J:()=>a});/* ESM import */var n=r(46695);/* ESM import */var o=r(28898);/**
 * @name isValid
 * @category Common Helpers
 * @summary Is the given date valid?
 *
 * @description
 * Returns false if argument is Invalid Date and true otherwise.
 * Argument is converted to Date using `toDate`. See [toDate](https://date-fns.org/docs/toDate)
 * Invalid Date is a Date, whose time value is NaN.
 *
 * Time value of Date: http://es5.github.io/#x15.9.1.1
 *
 * @param date - The date to check
 *
 * @returns The date is valid
 *
 * @example
 * // For the valid date:
 * const result = isValid(new Date(2014, 1, 31))
 * //=> true
 *
 * @example
 * // For the value, convertible into a date:
 * const result = isValid(1393804800000)
 * //=> true
 *
 * @example
 * // For the invalid date:
 * const result = isValid(new Date(''))
 * //=> false
 */function a(e){return!(!(0,n/* .isDate */.J)(e)&&typeof e!=="number"||isNaN(+(0,o/* .toDate */.Q)(e)))}// Fallback for modularized imports:
/* unused ESM default export */var i=/* unused pure expression or super */null&&a},96018:function(e,t,r){r.d(t,{l:()=>n});function n(e){return (t={})=>{// TODO: Remove String()
const r=t.width?String(t.width):e.defaultWidth;const n=e.formats[r]||e.formats[e.defaultWidth];return n}}},23495:function(e,t,r){r.d(t,{Y:()=>n});/**
 * The localize function argument callback which allows to convert raw value to
 * the actual type.
 *
 * @param value - The value to convert
 *
 * @returns The converted value
 *//**
 * The map of localized values for each width.
 *//**
 * The index type of the locale unit value. It types conversion of units of
 * values that don't start at 0 (i.e. quarters).
 *//**
 * Converts the unit value to the tuple of values.
 *//**
 * The tuple of localized era values. The first element represents BC,
 * the second element represents AD.
 *//**
 * The tuple of localized quarter values. The first element represents Q1.
 *//**
 * The tuple of localized day values. The first element represents Sunday.
 *//**
 * The tuple of localized month values. The first element represents January.
 */function n(e){return(t,r)=>{const n=r?.context?String(r.context):"standalone";let o;if(n==="formatting"&&e.formattingValues){const t=e.defaultFormattingWidth||e.defaultWidth;const n=r?.width?String(r.width):t;o=e.formattingValues[n]||e.formattingValues[t]}else{const t=e.defaultWidth;const n=r?.width?String(r.width):e.defaultWidth;o=e.values[n]||e.values[t]}const a=e.argumentCallback?e.argumentCallback(t):t;// @ts-expect-error - For some reason TypeScript just don't want to match it, no matter how hard we try. I challenge you to try to remove it!
return o[a]}}},46588:function(e,t,r){r.d(t,{t:()=>n});function n(e){return(t,r={})=>{const n=r.width;const i=n&&e.matchPatterns[n]||e.matchPatterns[e.defaultMatchWidth];const s=t.match(i);if(!s){return null}const l=s[0];const c=n&&e.parsePatterns[n]||e.parsePatterns[e.defaultParseWidth];const d=Array.isArray(c)?a(c,e=>e.test(l)):o(c,e=>e.test(l));let u;u=e.valueCallback?e.valueCallback(d):d;u=r.valueCallback?r.valueCallback(u):u;const v=t.slice(l.length);return{value:u,rest:v}}}function o(e,t){for(const r in e){if(Object.prototype.hasOwnProperty.call(e,r)&&t(e[r])){return r}}return undefined}function a(e,t){for(let r=0;r<e.length;r++){if(t(e[r])){return r}}return undefined}},12931:function(e,t,r){r.d(t,{y:()=>n});function n(e){return(t,r={})=>{const n=t.match(e.matchPattern);if(!n)return null;const o=n[0];const a=t.match(e.parsePattern);if(!a)return null;let i=e.valueCallback?e.valueCallback(a[0]):a[0];// [TODO] I challenge you to fix the type
i=r.valueCallback?r.valueCallback(i):i;const s=t.slice(o.length);return{value:i,rest:s}}}},79237:function(e,t,r){r.d(t,{_:()=>l});/* ESM import */var n=r(71953);/* ESM import */var o=r(87049);/* ESM import */var a=r(20040);/* ESM import */var i=r(15318);/* ESM import */var s=r(57113);/**
 * @category Locales
 * @summary English locale (United States).
 * @language English
 * @iso-639-2 eng
 * @author Sasha Koss [@kossnocorp](https://github.com/kossnocorp)
 * @author Lesha Koss [@leshakoss](https://github.com/leshakoss)
 */const l={code:"en-US",formatDistance:n/* .formatDistance */.B,formatLong:o/* .formatLong */.W,formatRelative:a/* .formatRelative */.l,localize:i/* .localize */.N,match:s/* .match */.E,options:{weekStartsOn:0/* Sunday */,firstWeekContainsDate:1}};// Fallback for modularized imports:
/* unused ESM default export */var c=/* unused pure expression or super */null&&l},71953:function(e,t,r){r.d(t,{B:()=>o});const n={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};const o=(e,t,r)=>{let o;const a=n[e];if(typeof a==="string"){o=a}else if(t===1){o=a.one}else{o=a.other.replace("{{count}}",t.toString())}if(r?.addSuffix){if(r.comparison&&r.comparison>0){return"in "+o}else{return o+" ago"}}return o}},87049:function(e,t,r){r.d(t,{W:()=>s});/* ESM import */var n=r(96018);const o={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"};const a={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"};const i={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"};const s={date:(0,n/* .buildFormatLongFn */.l)({formats:o,defaultWidth:"full"}),time:(0,n/* .buildFormatLongFn */.l)({formats:a,defaultWidth:"full"}),dateTime:(0,n/* .buildFormatLongFn */.l)({formats:i,defaultWidth:"full"})}},20040:function(e,t,r){r.d(t,{l:()=>o});const n={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};const o=(e,t,r,o)=>n[e]},15318:function(e,t,r){r.d(t,{N:()=>u});/* ESM import */var n=r(23495);const o={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]};const a={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]};// Note: in English, the names of days of the week and months are capitalized.
// If you are making a new locale based on this one, check if the same is true for the language you're working on.
// Generally, formatted dates should look like they are in the middle of a sentence,
// e.g. in Spanish language the weekdays and months should be in the lowercase.
const i={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]};const s={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]};const l={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}};const c={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}};const d=(e,t)=>{const r=Number(e);// If ordinal numbers depend on context, for example,
// if they are different for different grammatical genders,
// use `options.unit`.
//
// `unit` can be 'year', 'quarter', 'month', 'week', 'date', 'dayOfYear',
// 'day', 'hour', 'minute', 'second'.
const n=r%100;if(n>20||n<10){switch(n%10){case 1:return r+"st";case 2:return r+"nd";case 3:return r+"rd"}}return r+"th"};const u={ordinalNumber:d,era:(0,n/* .buildLocalizeFn */.Y)({values:o,defaultWidth:"wide"}),quarter:(0,n/* .buildLocalizeFn */.Y)({values:a,defaultWidth:"wide",argumentCallback:e=>e-1}),month:(0,n/* .buildLocalizeFn */.Y)({values:i,defaultWidth:"wide"}),day:(0,n/* .buildLocalizeFn */.Y)({values:s,defaultWidth:"wide"}),dayPeriod:(0,n/* .buildLocalizeFn */.Y)({values:l,defaultWidth:"wide",formattingValues:c,defaultFormattingWidth:"wide"})}},57113:function(e,t,r){r.d(t,{E:()=>m});/* ESM import */var n=r(46588);/* ESM import */var o=r(12931);const a=/^(\d+)(th|st|nd|rd)?/i;const i=/\d+/i;const s={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i};const l={any:[/^b/i,/^(a|c)/i]};const c={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i};const d={any:[/1/i,/2/i,/3/i,/4/i]};const u={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i};const v={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]};const f={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i};const p={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]};const h={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i};const g={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}};const m={ordinalNumber:(0,o/* .buildMatchPatternFn */.y)({matchPattern:a,parsePattern:i,valueCallback:e=>parseInt(e,10)}),era:(0,n/* .buildMatchFn */.t)({matchPatterns:s,defaultMatchWidth:"wide",parsePatterns:l,defaultParseWidth:"any"}),quarter:(0,n/* .buildMatchFn */.t)({matchPatterns:c,defaultMatchWidth:"wide",parsePatterns:d,defaultParseWidth:"any",valueCallback:e=>e+1}),month:(0,n/* .buildMatchFn */.t)({matchPatterns:u,defaultMatchWidth:"wide",parsePatterns:v,defaultParseWidth:"any"}),day:(0,n/* .buildMatchFn */.t)({matchPatterns:f,defaultMatchWidth:"wide",parsePatterns:p,defaultParseWidth:"any"}),dayPeriod:(0,n/* .buildMatchFn */.t)({matchPatterns:h,defaultMatchWidth:"any",parsePatterns:g,defaultParseWidth:"any"})}},5618:function(e,t,r){r.d(t,{F:()=>a});/* ESM import */var n=r(85941);/* ESM import */var o=r(28898);/**
 * The {@link max} function options.
 *//**
 * @name max
 * @category Common Helpers
 * @summary Return the latest of the given dates.
 *
 * @description
 * Return the latest of the given dates.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param dates - The dates to compare
 *
 * @returns The latest of the dates
 *
 * @example
 * // Which of these dates is the latest?
 * const result = max([
 *   new Date(1989, 6, 10),
 *   new Date(1987, 1, 11),
 *   new Date(1995, 6, 2),
 *   new Date(1990, 0, 1)
 * ])
 * //=> Sun Jul 02 1995 00:00:00
 */function a(e,t){let r;let a=t?.in;e.forEach(e=>{// Use the first date object as the context function
if(!a&&typeof e==="object")a=n/* .constructFrom.bind */.L.bind(null,e);const t=(0,o/* .toDate */.Q)(e,a);if(!r||r<t||isNaN(+t))r=t});return(0,n/* .constructFrom */.L)(a,r||NaN)}// Fallback for modularized imports:
/* unused ESM default export */var i=/* unused pure expression or super */null&&a},20831:function(e,t,r){r.d(t,{V:()=>a});/* ESM import */var n=r(85941);/* ESM import */var o=r(28898);/**
 * The {@link min} function options.
 *//**
 * @name min
 * @category Common Helpers
 * @summary Returns the earliest of the given dates.
 *
 * @description
 * Returns the earliest of the given dates.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param dates - The dates to compare
 *
 * @returns The earliest of the dates
 *
 * @example
 * // Which of these dates is the earliest?
 * const result = min([
 *   new Date(1989, 6, 10),
 *   new Date(1987, 1, 11),
 *   new Date(1995, 6, 2),
 *   new Date(1990, 0, 1)
 * ])
 * //=> Wed Feb 11 1987 00:00:00
 */function a(e,t){let r;let a=t?.in;e.forEach(e=>{// Use the first date object as the context function
if(!a&&typeof e==="object")a=n/* .constructFrom.bind */.L.bind(null,e);const t=(0,o/* .toDate */.Q)(e,a);if(!r||r>t||isNaN(+t))r=t});return(0,n/* .constructFrom */.L)(a,r||NaN)}// Fallback for modularized imports:
/* unused ESM default export */var i=/* unused pure expression or super */null&&a},19706:function(e,t,r){r.d(t,{q:()=>i});/* ESM import */var n=r(85941);/* ESM import */var o=r(12309);/* ESM import */var a=r(28898);/**
 * The {@link setMonth} function options.
 *//**
 * @name setMonth
 * @category Month Helpers
 * @summary Set the month to the given date.
 *
 * @description
 * Set the month to the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The date to be changed
 * @param month - The month index to set (0-11)
 * @param options - The options
 *
 * @returns The new date with the month set
 *
 * @example
 * // Set February to 1 September 2014:
 * const result = setMonth(new Date(2014, 8, 1), 1)
 * //=> Sat Feb 01 2014 00:00:00
 */function i(e,t,r){const i=(0,a/* .toDate */.Q)(e,r?.in);const s=i.getFullYear();const l=i.getDate();const c=(0,n/* .constructFrom */.L)(r?.in||e,0);c.setFullYear(s,t,15);c.setHours(0,0,0,0);const d=(0,o/* .getDaysInMonth */.N)(c);// Set the earlier date, allows to wrap Jan 31 to Feb 28
i.setMonth(t,Math.min(l,d));return i}// Fallback for modularized imports:
/* unused ESM default export */var s=/* unused pure expression or super */null&&i},16614:function(e,t,r){r.d(t,{M:()=>a});/* ESM import */var n=r(85941);/* ESM import */var o=r(28898);/**
 * The {@link setYear} function options.
 *//**
 * @name setYear
 * @category Year Helpers
 * @summary Set the year to the given date.
 *
 * @description
 * Set the year to the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The date to be changed
 * @param year - The year of the new date
 * @param options - An object with options.
 *
 * @returns The new date with the year set
 *
 * @example
 * // Set year 2013 to 1 September 2014:
 * const result = setYear(new Date(2014, 8, 1), 2013)
 * //=> Sun Sep 01 2013 00:00:00
 */function a(e,t,r){const a=(0,o/* .toDate */.Q)(e,r?.in);// Check if date is Invalid Date because Date.prototype.setFullYear ignores the value of Invalid Date
if(isNaN(+a))return(0,n/* .constructFrom */.L)(r?.in||e,NaN);a.setFullYear(t);return a}// Fallback for modularized imports:
/* unused ESM default export */var i=/* unused pure expression or super */null&&a},51066:function(e,t,r){r.d(t,{b:()=>o});/* ESM import */var n=r(28898);/**
 * The {@link startOfDay} function options.
 *//**
 * @name startOfDay
 * @category Day Helpers
 * @summary Return the start of a day for the given date.
 *
 * @description
 * Return the start of a day for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The original date
 * @param options - The options
 *
 * @returns The start of a day
 *
 * @example
 * // The start of a day for 2 September 2014 11:55:00:
 * const result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 00:00:00
 */function o(e,t){const r=(0,n/* .toDate */.Q)(e,t?.in);r.setHours(0,0,0,0);return r}// Fallback for modularized imports:
/* unused ESM default export */var a=/* unused pure expression or super */null&&o},44459:function(e,t,r){r.d(t,{T:()=>o});/* ESM import */var n=r(19397);/**
 * The {@link startOfISOWeek} function options.
 *//**
 * @name startOfISOWeek
 * @category ISO Week Helpers
 * @summary Return the start of an ISO week for the given date.
 *
 * @description
 * Return the start of an ISO week for the given date.
 * The result will be in the local timezone.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The original date
 * @param options - An object with options
 *
 * @returns The start of an ISO week
 *
 * @example
 * // The start of an ISO week for 2 September 2014 11:55:00:
 * const result = startOfISOWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Mon Sep 01 2014 00:00:00
 */function o(e,t){return(0,n/* .startOfWeek */.z)(e,{...t,weekStartsOn:1})}// Fallback for modularized imports:
/* unused ESM default export */var a=/* unused pure expression or super */null&&o},47926:function(e,t,r){r.d(t,{E:()=>i});/* ESM import */var n=r(85941);/* ESM import */var o=r(74155);/* ESM import */var a=r(44459);/**
 * The {@link startOfISOWeekYear} function options.
 *//**
 * @name startOfISOWeekYear
 * @category ISO Week-Numbering Year Helpers
 * @summary Return the start of an ISO week-numbering year for the given date.
 *
 * @description
 * Return the start of an ISO week-numbering year,
 * which always starts 3 days before the year's first Thursday.
 * The result will be in the local timezone.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The original date
 * @param options - An object with options
 *
 * @returns The start of an ISO week-numbering year
 *
 * @example
 * // The start of an ISO week-numbering year for 2 July 2005:
 * const result = startOfISOWeekYear(new Date(2005, 6, 2))
 * //=> Mon Jan 03 2005 00:00:00
 */function i(e,t){const r=(0,o/* .getISOWeekYear */.L)(e,t);const i=(0,n/* .constructFrom */.L)(t?.in||e,0);i.setFullYear(r,0,4);i.setHours(0,0,0,0);return(0,a/* .startOfISOWeek */.T)(i)}// Fallback for modularized imports:
/* unused ESM default export */var s=/* unused pure expression or super */null&&i},12432:function(e,t,r){r.d(t,{N:()=>o});/* ESM import */var n=r(28898);/**
 * The {@link startOfMonth} function options.
 *//**
 * @name startOfMonth
 * @category Month Helpers
 * @summary Return the start of a month for the given date.
 *
 * @description
 * Return the start of a month for the given date. The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments.
 * Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed,
 * or inferred from the arguments.
 *
 * @param date - The original date
 * @param options - An object with options
 *
 * @returns The start of a month
 *
 * @example
 * // The start of a month for 2 September 2014 11:55:00:
 * const result = startOfMonth(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Mon Sep 01 2014 00:00:00
 */function o(e,t){const r=(0,n/* .toDate */.Q)(e,t?.in);r.setDate(1);r.setHours(0,0,0,0);return r}// Fallback for modularized imports:
/* unused ESM default export */var a=/* unused pure expression or super */null&&o},19397:function(e,t,r){r.d(t,{z:()=>a});/* ESM import */var n=r(92639);/* ESM import */var o=r(28898);/**
 * The {@link startOfWeek} function options.
 *//**
 * @name startOfWeek
 * @category Week Helpers
 * @summary Return the start of a week for the given date.
 *
 * @description
 * Return the start of a week for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The original date
 * @param options - An object with options
 *
 * @returns The start of a week
 *
 * @example
 * // The start of a week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sun Aug 31 2014 00:00:00
 *
 * @example
 * // If the week starts on Monday, the start of the week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0), { weekStartsOn: 1 })
 * //=> Mon Sep 01 2014 00:00:00
 */function a(e,t){const r=(0,n/* .getDefaultOptions */.j)();const a=t?.weekStartsOn??t?.locale?.options?.weekStartsOn??r.weekStartsOn??r.locale?.options?.weekStartsOn??0;const i=(0,o/* .toDate */.Q)(e,t?.in);const s=i.getDay();const l=(s<a?7:0)+s-a;i.setDate(i.getDate()-l);i.setHours(0,0,0,0);return i}// Fallback for modularized imports:
/* unused ESM default export */var i=/* unused pure expression or super */null&&a},86009:function(e,t,r){r.d(t,{v:()=>s});/* ESM import */var n=r(92639);/* ESM import */var o=r(85941);/* ESM import */var a=r(7898);/* ESM import */var i=r(19397);/**
 * The {@link startOfWeekYear} function options.
 *//**
 * @name startOfWeekYear
 * @category Week-Numbering Year Helpers
 * @summary Return the start of a local week-numbering year for the given date.
 *
 * @description
 * Return the start of a local week-numbering year.
 * The exact calculation depends on the values of
 * `options.weekStartsOn` (which is the index of the first day of the week)
 * and `options.firstWeekContainsDate` (which is the day of January, which is always in
 * the first week of the week-numbering year)
 *
 * Week numbering: https://en.wikipedia.org/wiki/Week#The_ISO_week_date_system
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type.
 *
 * @param date - The original date
 * @param options - An object with options
 *
 * @returns The start of a week-numbering year
 *
 * @example
 * // The start of an a week-numbering year for 2 July 2005 with default settings:
 * const result = startOfWeekYear(new Date(2005, 6, 2))
 * //=> Sun Dec 26 2004 00:00:00
 *
 * @example
 * // The start of a week-numbering year for 2 July 2005
 * // if Monday is the first day of week
 * // and 4 January is always in the first week of the year:
 * const result = startOfWeekYear(new Date(2005, 6, 2), {
 *   weekStartsOn: 1,
 *   firstWeekContainsDate: 4
 * })
 * //=> Mon Jan 03 2005 00:00:00
 */function s(e,t){const r=(0,n/* .getDefaultOptions */.j)();const s=t?.firstWeekContainsDate??t?.locale?.options?.firstWeekContainsDate??r.firstWeekContainsDate??r.locale?.options?.firstWeekContainsDate??1;const l=(0,a/* .getWeekYear */.c)(e,t);const c=(0,o/* .constructFrom */.L)(t?.in||e,0);c.setFullYear(l,0,s);c.setHours(0,0,0,0);const d=(0,i/* .startOfWeek */.z)(c,t);return d}// Fallback for modularized imports:
/* unused ESM default export */var l=/* unused pure expression or super */null&&s},35523:function(e,t,r){r.d(t,{e:()=>o});/* ESM import */var n=r(28898);/**
 * The {@link startOfYear} function options.
 *//**
 * @name startOfYear
 * @category Year Helpers
 * @summary Return the start of a year for the given date.
 *
 * @description
 * Return the start of a year for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The original date
 * @param options - The options
 *
 * @returns The start of a year
 *
 * @example
 * // The start of a year for 2 September 2014 11:55:00:
 * const result = startOfYear(new Date(2014, 8, 2, 11, 55, 00))
 * //=> Wed Jan 01 2014 00:00:00
 */function o(e,t){const r=(0,n/* .toDate */.Q)(e,t?.in);r.setFullYear(r.getFullYear(),0,1);r.setHours(0,0,0,0);return r}// Fallback for modularized imports:
/* unused ESM default export */var a=/* unused pure expression or super */null&&o},28898:function(e,t,r){r.d(t,{Q:()=>o});/* ESM import */var n=r(85941);/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * Starting from v3.7.0, it clones a date using `[Symbol.for("constructDateFrom")]`
 * enabling to transfer extra properties from the reference date to the new date.
 * It's useful for extensions like [`TZDate`](https://github.com/date-fns/tz)
 * that accept a time zone as a constructor argument.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param argument - The value to convert
 *
 * @returns The parsed date in the local time zone
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */function o(e,t){// [TODO] Get rid of `toDate` or `constructFrom`?
return(0,n/* .constructFrom */.L)(t||e,e)}// Fallback for modularized imports:
/* unused ESM default export */var a=/* unused pure expression or super */null&&o}}]);