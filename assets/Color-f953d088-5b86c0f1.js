var Vr=Object.defineProperty;var c=(a,r)=>Vr(a,"name",{value:r,configurable:!0});import"./iframe-01e48fd2.js";import"./es.map.constructor-364896f7.js";import{ak as Ir,al as Gr,am as Kr,an as Wr,ao as Dr,X as Ur,ap as fr,aq as Jr,ar as Qr}from"./Props-47176c1c.js";import{R as d,r as m}from"./index-be62b029.js";import{a as P}from"./index-efae73fc.js";import"./string-29a8df90.js";import"./es.number.to-fixed-8af3c5d6.js";var $,q;function _(a,r,e){return r in a?Object.defineProperty(a,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):a[r]=e,a}c(_,"_defineProperty");function ir(a){return ir=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},ir(a)}c(ir,"_typeof");function N(a,r){return ee(a)||re(a,r)||Zr(a,r)||Yr()}c(N,"_slicedToArray");function Yr(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}c(Yr,"_nonIterableRest");function Zr(a,r){if(a){if(typeof a=="string")return mr(a,r);var e=Object.prototype.toString.call(a).slice(8,-1);if(e==="Object"&&a.constructor&&(e=a.constructor.name),e==="Map"||e==="Set")return Array.from(a);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return mr(a,r)}}c(Zr,"_unsupportedIterableToArray");function mr(a,r){(r==null||r>a.length)&&(r=a.length);for(var e=0,n=new Array(r);e<r;e++)n[e]=a[e];return n}c(mr,"_arrayLikeToArray");function re(a,r){var e=a==null?null:typeof Symbol<"u"&&a[Symbol.iterator]||a["@@iterator"];if(e!=null){var n=[],t=!0,o=!1,i,l;try{for(e=e.call(a);!(t=(i=e.next()).done)&&(n.push(i.value),!(r&&n.length===r));t=!0);}catch(u){o=!0,l=u}finally{try{!t&&e.return!=null&&e.return()}finally{if(o)throw l}}return n}}c(re,"_iterableToArrayLimit");function ee(a){if(Array.isArray(a))return a}c(ee,"_arrayWithHoles");function L(){return(L=Object.assign||function(a){for(var r=1;r<arguments.length;r++){var e=arguments[r];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n])}return a}).apply(this,arguments)}c(L,"u");function hr(a,r){if(a==null)return{};var e,n,t={},o=Object.keys(a);for(n=0;n<o.length;n++)r.indexOf(e=o[n])>=0||(t[e]=a[e]);return t}c(hr,"c");function lr(a){var r=m.useRef(a),e=m.useRef(function(n){r.current&&r.current(n)});return r.current=a,e.current}c(lr,"i");var B=c(function(r,e,n){return e===void 0&&(e=0),n===void 0&&(n=1),r>n?n:r<e?e:r},"s"),A=c(function(r){return"touches"in r},"f"),ur=c(function(r){return r&&r.ownerDocument.defaultView||self},"v"),pr=c(function(r,e,n){var t=r.getBoundingClientRect(),o=A(e)?function(i,l){for(var u=0;u<i.length;u++)if(i[u].identifier===l)return i[u];return i[0]}(e.touches,n):e;return{left:B((o.pageX-(t.left+ur(r).pageXOffset))/t.width),top:B((o.pageY-(t.top+ur(r).pageYOffset))/t.height)}},"d"),br=c(function(r){!A(r)&&r.preventDefault()},"h"),dr=d.memo(function(a){var r=a.onMove,e=a.onKey,n=hr(a,["onMove","onKey"]),t=m.useRef(null),o=lr(r),i=lr(e),l=m.useRef(null),u=m.useRef(!1),s=m.useMemo(function(){var E=c(function(g){br(g),(A(g)?g.touches.length>0:g.buttons>0)&&t.current?o(pr(t.current,g,l.current)):I(!1)},"e"),C=c(function(){return I(!1)},"r");function I(w){var g=u.current,p=ur(t.current),b=w?p.addEventListener:p.removeEventListener;b(g?"touchmove":"mousemove",E),b(g?"touchend":"mouseup",C)}return c(I,"t"),[function(w){var g=w.nativeEvent,p=t.current;if(p&&(br(g),!function(M,S){return S&&!A(M)}(g,u.current)&&p)){if(A(g)){u.current=!0;var b=g.changedTouches||[];b.length&&(l.current=b[0].identifier)}p.focus(),o(pr(p,g,l.current)),I(!0)}},function(w){var g=w.which||w.keyCode;g<37||g>40||(w.preventDefault(),i({left:g===39?.05:g===37?-.05:0,top:g===40?.05:g===38?-.05:0}))},I]},[i,o]),f=s[0],h=s[1],x=s[2];return m.useEffect(function(){return x},[x]),d.createElement("div",L({},n,{onTouchStart:f,onMouseDown:f,className:"react-colorful__interactive",ref:t,onKeyDown:h,tabIndex:0,role:"slider"}))}),K=c(function(r){return r.filter(Boolean).join(" ")},"g"),gr=c(function(r){var e=r.color,n=r.left,t=r.top,o=t===void 0?.5:t,i=K(["react-colorful__pointer",r.className]);return d.createElement("div",{className:i,style:{top:100*o+"%",left:100*n+"%"}},d.createElement("div",{className:"react-colorful__pointer-fill",style:{backgroundColor:e}}))},"p"),O=c(function(r,e,n){return e===void 0&&(e=0),n===void 0&&(n=Math.pow(10,e)),Math.round(n*r)/n},"b"),ae={grad:.9,turn:360,rad:360/(2*Math.PI)},er=c(function(r){return r[0]==="#"&&(r=r.substr(1)),r.length<6?{r:parseInt(r[0]+r[0],16),g:parseInt(r[1]+r[1],16),b:parseInt(r[2]+r[2],16),a:1}:{r:parseInt(r.substr(0,2),16),g:parseInt(r.substr(2,2),16),b:parseInt(r.substr(4,2),16),a:1}},"x"),ne=c(function(r,e){return e===void 0&&(e="deg"),Number(r)*(ae[e]||1)},"C"),te=c(function(r){var e=/hsla?\(?\s*(-?\d*\.?\d+)(deg|rad|grad|turn)?[,\s]+(-?\d*\.?\d+)%?[,\s]+(-?\d*\.?\d+)%?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i.exec(r);return e?oe({h:ne(e[1],e[2]),s:Number(e[3]),l:Number(e[4]),a:e[5]===void 0?1:Number(e[5])/(e[6]?100:1)}):{h:0,s:0,v:0,a:1}},"E"),oe=c(function(r){var e=r.s,n=r.l;return{h:r.h,s:(e*=(n<50?n:100-n)/100)>0?2*e/(n+e)*100:0,v:n+e,a:r.a}},"M"),Rr=c(function(r){var e=r.s,n=r.v,t=r.a,o=(200-e)*n/100;return{h:O(r.h),s:O(o>0&&o<200?e*n/100/(o<=100?o:200-o)*100:0),l:O(o/2),a:O(t,2)}},"N"),cr=c(function(r){var e=Rr(r);return"hsl("+e.h+", "+e.s+"%, "+e.l+"%)"},"w"),Q=c(function(r){var e=Rr(r);return"hsla("+e.h+", "+e.s+"%, "+e.l+"%, "+e.a+")"},"y"),Hr=c(function(r){var e=r.h,n=r.s,t=r.v,o=r.a;e=e/360*6,n/=100,t/=100;var i=Math.floor(e),l=t*(1-n),u=t*(1-(e-i)*n),s=t*(1-(1-e+i)*n),f=i%6;return{r:O(255*[t,u,l,l,s,t][f]),g:O(255*[s,t,t,u,l,l][f]),b:O(255*[l,l,s,t,t,u][f]),a:O(o,2)}},"q"),ie=c(function(r){var e=/rgba?\(?\s*(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i.exec(r);return e?Nr({r:Number(e[1])/(e[2]?100/255:1),g:Number(e[3])/(e[4]?100/255:1),b:Number(e[5])/(e[6]?100/255:1),a:e[7]===void 0?1:Number(e[7])/(e[8]?100:1)}):{h:0,s:0,v:0,a:1}},"I"),ar=c(function(r){var e=r.toString(16);return e.length<2?"0"+e:e},"z"),Nr=c(function(r){var e=r.r,n=r.g,t=r.b,o=r.a,i=Math.max(e,n,t),l=i-Math.min(e,n,t),u=l?i===e?(n-t)/l:i===n?2+(t-e)/l:4+(e-n)/l:0;return{h:O(60*(u<0?u+6:u)),s:O(i?l/i*100:0),v:O(i/255*100),a:o}},"B"),Tr=d.memo(function(a){var r=a.hue,e=a.onChange,n=K(["react-colorful__hue",a.className]);return d.createElement("div",{className:n},d.createElement(dr,{onMove:c(function(o){e({h:360*o.left})},"onMove"),onKey:c(function(o){e({h:B(r+360*o.left,0,360)})},"onKey"),"aria-label":"Hue","aria-valuetext":O(r)},d.createElement(gr,{className:"react-colorful__hue-pointer",left:r/360,color:cr({h:r,s:100,v:100,a:1})})))}),Fr=d.memo(function(a){var r=a.hsva,e=a.onChange,n={backgroundColor:cr({h:r.h,s:100,v:100,a:1})};return d.createElement("div",{className:"react-colorful__saturation",style:n},d.createElement(dr,{onMove:c(function(o){e({s:100*o.left,v:100-100*o.top})},"onMove"),onKey:c(function(o){e({s:B(r.s+100*o.left,0,100),v:B(r.v-100*o.top,0,100)})},"onKey"),"aria-label":"Color","aria-valuetext":"Saturation "+O(r.s)+"%, Brightness "+O(r.v)+"%"},d.createElement(gr,{className:"react-colorful__saturation-pointer",top:1-r.v/100,left:r.s/100,color:cr(r)})))}),Pr=c(function(r,e){if(r===e)return!0;for(var n in r)if(r[n]!==e[n])return!1;return!0},"A"),zr=c(function(r,e){return r.replace(/\s/g,"")===e.replace(/\s/g,"")},"S");function Lr(a,r,e){var n=lr(e),t=m.useState(function(){return a.toHsva(r)}),o=t[0],i=t[1],l=m.useRef({color:r,hsva:o});m.useEffect(function(){if(!a.equal(r,l.current.color)){var s=a.toHsva(r);l.current={hsva:s,color:r},i(s)}},[r,a]),m.useEffect(function(){var s;Pr(o,l.current.hsva)||a.equal(s=a.fromHsva(o),l.current.color)||(l.current={hsva:o,color:s},n(s))},[o,a,n]);var u=m.useCallback(function(s){i(function(f){return Object.assign({},f,s)})},[]);return[o,u]}c(Lr,"T");var le=typeof window<"u"?m.useLayoutEffect:m.useEffect,ue=c(function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:void 0},"X"),yr=new Map,jr=c(function(r){le(function(){var e=r.current?r.current.ownerDocument:document;if(e!==void 0&&!yr.has(e)){var n=e.createElement("style");n.innerHTML=`.react-colorful{position:relative;display:flex;flex-direction:column;width:200px;height:200px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.react-colorful__saturation{position:relative;flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(0deg,#000,transparent),linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.react-colorful__alpha-gradient,.react-colorful__pointer-fill{content:"";position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;border-radius:inherit}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}.react-colorful__alpha,.react-colorful__hue{position:relative;height:24px}.react-colorful__hue{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{position:absolute;left:0;top:0;right:0;bottom:0;border-radius:inherit;outline:none;touch-action:none}.react-colorful__pointer{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%) scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>')}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}`,yr.set(e,n);var t=ue();t&&n.setAttribute("nonce",t),e.head.appendChild(n)}},[])},"V"),ce=c(function(r){var e=r.className,n=r.colorModel,t=r.color,o=t===void 0?n.defaultColor:t,i=r.onChange,l=hr(r,["className","colorModel","color","onChange"]),u=m.useRef(null);jr(u);var s=Lr(n,o,i),f=s[0],h=s[1],x=K(["react-colorful",e]);return d.createElement("div",L({},l,{ref:u,className:x}),d.createElement(Fr,{hsva:f,onChange:h}),d.createElement(Tr,{hue:f.h,onChange:h,className:"react-colorful__last-control"}))},"$"),se={defaultColor:"000",toHsva:c(function(r){return Nr(er(r))},"toHsva"),fromHsva:c(function(r){return n=(e=Hr(r)).g,t=e.b,"#"+ar(e.r)+ar(n)+ar(t);var e,n,t},"fromHsva"),equal:c(function(r,e){return r.toLowerCase()===e.toLowerCase()||Pr(er(r),er(e))},"equal")},ve=c(function(r){return d.createElement(ce,L({},r,{colorModel:se}))},"J"),fe=c(function(r){var e=r.className,n=r.hsva,t=r.onChange,o={backgroundImage:"linear-gradient(90deg, "+Q(Object.assign({},n,{a:0}))+", "+Q(Object.assign({},n,{a:1}))+")"},i=K(["react-colorful__alpha",e]);return d.createElement("div",{className:i},d.createElement("div",{className:"react-colorful__alpha-gradient",style:o}),d.createElement(dr,{onMove:c(function(u){t({a:u.left})},"onMove"),onKey:c(function(u){t({a:B(n.a+u.left)})},"onKey"),"aria-label":"Alpha","aria-valuetext":O(100*n.a)+"%"},d.createElement(gr,{className:"react-colorful__alpha-pointer",left:n.a,color:Q(n)})))},"Q"),Br=c(function(r){var e=r.className,n=r.colorModel,t=r.color,o=t===void 0?n.defaultColor:t,i=r.onChange,l=hr(r,["className","colorModel","color","onChange"]),u=m.useRef(null);jr(u);var s=Lr(n,o,i),f=s[0],h=s[1],x=K(["react-colorful",e]);return d.createElement("div",L({},l,{ref:u,className:x}),d.createElement(Fr,{hsva:f,onChange:h}),d.createElement(Tr,{hue:f.h,onChange:h}),d.createElement(fe,{hsva:f,onChange:h,className:"react-colorful__last-control"}))},"U"),he={defaultColor:"hsla(0, 0%, 0%, 1)",toHsva:te,fromHsva:Q,equal:zr},de=c(function(r){return d.createElement(Br,L({},r,{colorModel:he}))},"re"),ge={defaultColor:"rgba(0, 0, 0, 1)",toHsva:ie,fromHsva:c(function(r){var e=Hr(r);return"rgba("+e.r+", "+e.g+", "+e.b+", "+e.a+")"},"fromHsva"),equal:zr},me=c(function(r){return d.createElement(Br,L({},r,{colorModel:ge}))},"pe"),pe={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]},G=pe,Xr={};for(var nr=0,wr=Object.keys(G);nr<wr.length;nr++){var xr=wr[nr];Xr[G[xr]]=xr}var v={rgb:{channels:3,labels:"rgb"},hsl:{channels:3,labels:"hsl"},hsv:{channels:3,labels:"hsv"},hwb:{channels:3,labels:"hwb"},cmyk:{channels:4,labels:"cmyk"},xyz:{channels:3,labels:"xyz"},lab:{channels:3,labels:"lab"},lch:{channels:3,labels:"lch"},hex:{channels:1,labels:["hex"]},keyword:{channels:1,labels:["keyword"]},ansi16:{channels:1,labels:["ansi16"]},ansi256:{channels:1,labels:["ansi256"]},hcg:{channels:3,labels:["h","c","g"]},apple:{channels:3,labels:["r16","g16","b16"]},gray:{channels:1,labels:["gray"]}},$r=v;for(var tr=0,kr=Object.keys(v);tr<kr.length;tr++){var R=kr[tr];if(!("channels"in v[R]))throw new Error("missing channels property: "+R);if(!("labels"in v[R]))throw new Error("missing channel labels property: "+R);if(v[R].labels.length!==v[R].channels)throw new Error("channel and label counts mismatch: "+R);var Er=v[R],be=Er.channels,ye=Er.labels;delete v[R].channels,delete v[R].labels,Object.defineProperty(v[R],"channels",{value:be}),Object.defineProperty(v[R],"labels",{value:ye})}v.rgb.hsl=function(a){var r=a[0]/255,e=a[1]/255,n=a[2]/255,t=Math.min(r,e,n),o=Math.max(r,e,n),i=o-t,l,u;o===t?l=0:r===o?l=(e-n)/i:e===o?l=2+(n-r)/i:n===o&&(l=4+(r-e)/i),l=Math.min(l*60,360),l<0&&(l+=360);var s=(t+o)/2;return o===t?u=0:s<=.5?u=i/(o+t):u=i/(2-o-t),[l,u*100,s*100]};v.rgb.hsv=function(a){var r,e,n,t,o,i=a[0]/255,l=a[1]/255,u=a[2]/255,s=Math.max(i,l,u),f=s-Math.min(i,l,u),h=c(function(E){return(s-E)/6/f+1/2},"diffc");return f===0?(t=0,o=0):(o=f/s,r=h(i),e=h(l),n=h(u),i===s?t=n-e:l===s?t=1/3+r-n:u===s&&(t=2/3+e-r),t<0?t+=1:t>1&&(t-=1)),[t*360,o*100,s*100]};v.rgb.hwb=function(a){var r=a[0],e=a[1],n=a[2],t=v.rgb.hsl(a)[0],o=1/255*Math.min(r,Math.min(e,n));return n=1-1/255*Math.max(r,Math.max(e,n)),[t,o*100,n*100]};v.rgb.cmyk=function(a){var r=a[0]/255,e=a[1]/255,n=a[2]/255,t=Math.min(1-r,1-e,1-n),o=(1-r-t)/(1-t)||0,i=(1-e-t)/(1-t)||0,l=(1-n-t)/(1-t)||0;return[o*100,i*100,l*100,t*100]};function we(a,r){return Math.pow(a[0]-r[0],2)+Math.pow(a[1]-r[1],2)+Math.pow(a[2]-r[2],2)}c(we,"comparativeDistance");v.rgb.keyword=function(a){var r=Xr[a];if(r)return r;for(var e=1/0,n,t=0,o=Object.keys(G);t<o.length;t++){var i=o[t],l=G[i],u=we(a,l);u<e&&(e=u,n=i)}return n};v.keyword.rgb=function(a){return G[a]};v.rgb.xyz=function(a){var r=a[0]/255,e=a[1]/255,n=a[2]/255;r=r>.04045?Math.pow((r+.055)/1.055,2.4):r/12.92,e=e>.04045?Math.pow((e+.055)/1.055,2.4):e/12.92,n=n>.04045?Math.pow((n+.055)/1.055,2.4):n/12.92;var t=r*.4124+e*.3576+n*.1805,o=r*.2126+e*.7152+n*.0722,i=r*.0193+e*.1192+n*.9505;return[t*100,o*100,i*100]};v.rgb.lab=function(a){var r=v.rgb.xyz(a),e=r[0],n=r[1],t=r[2];e/=95.047,n/=100,t/=108.883,e=e>.008856?Math.pow(e,1/3):7.787*e+16/116,n=n>.008856?Math.pow(n,1/3):7.787*n+16/116,t=t>.008856?Math.pow(t,1/3):7.787*t+16/116;var o=116*n-16,i=500*(e-n),l=200*(n-t);return[o,i,l]};v.hsl.rgb=function(a){var r=a[0]/360,e=a[1]/100,n=a[2]/100,t,o,i;if(e===0)return i=n*255,[i,i,i];n<.5?t=n*(1+e):t=n+e-n*e;for(var l=2*n-t,u=[0,0,0],s=0;s<3;s++)o=r+1/3*-(s-1),o<0&&o++,o>1&&o--,6*o<1?i=l+(t-l)*6*o:2*o<1?i=t:3*o<2?i=l+(t-l)*(2/3-o)*6:i=l,u[s]=i*255;return u};v.hsl.hsv=function(a){var r=a[0],e=a[1]/100,n=a[2]/100,t=e,o=Math.max(n,.01);n*=2,e*=n<=1?n:2-n,t*=o<=1?o:2-o;var i=(n+e)/2,l=n===0?2*t/(o+t):2*e/(n+e);return[r,l*100,i*100]};v.hsv.rgb=function(a){var r=a[0]/60,e=a[1]/100,n=a[2]/100,t=Math.floor(r)%6,o=r-Math.floor(r),i=255*n*(1-e),l=255*n*(1-e*o),u=255*n*(1-e*(1-o));switch(n*=255,t){case 0:return[n,u,i];case 1:return[l,n,i];case 2:return[i,n,u];case 3:return[i,l,n];case 4:return[u,i,n];case 5:return[n,i,l]}};v.hsv.hsl=function(a){var r=a[0],e=a[1]/100,n=a[2]/100,t=Math.max(n,.01),o,i;i=(2-e)*n;var l=(2-e)*t;return o=e*t,o/=l<=1?l:2-l,o=o||0,i/=2,[r,o*100,i*100]};v.hwb.rgb=function(a){var r=a[0]/360,e=a[1]/100,n=a[2]/100,t=e+n,o;t>1&&(e/=t,n/=t);var i=Math.floor(6*r),l=1-n;o=6*r-i,i&1&&(o=1-o);var u=e+o*(l-e),s,f,h;switch(i){default:case 6:case 0:s=l,f=u,h=e;break;case 1:s=u,f=l,h=e;break;case 2:s=e,f=l,h=u;break;case 3:s=e,f=u,h=l;break;case 4:s=u,f=e,h=l;break;case 5:s=l,f=e,h=u;break}return[s*255,f*255,h*255]};v.cmyk.rgb=function(a){var r=a[0]/100,e=a[1]/100,n=a[2]/100,t=a[3]/100,o=1-Math.min(1,r*(1-t)+t),i=1-Math.min(1,e*(1-t)+t),l=1-Math.min(1,n*(1-t)+t);return[o*255,i*255,l*255]};v.xyz.rgb=function(a){var r=a[0]/100,e=a[1]/100,n=a[2]/100,t,o,i;return t=r*3.2406+e*-1.5372+n*-.4986,o=r*-.9689+e*1.8758+n*.0415,i=r*.0557+e*-.204+n*1.057,t=t>.0031308?1.055*Math.pow(t,1/2.4)-.055:t*12.92,o=o>.0031308?1.055*Math.pow(o,1/2.4)-.055:o*12.92,i=i>.0031308?1.055*Math.pow(i,1/2.4)-.055:i*12.92,t=Math.min(Math.max(0,t),1),o=Math.min(Math.max(0,o),1),i=Math.min(Math.max(0,i),1),[t*255,o*255,i*255]};v.xyz.lab=function(a){var r=a[0],e=a[1],n=a[2];r/=95.047,e/=100,n/=108.883,r=r>.008856?Math.pow(r,1/3):7.787*r+16/116,e=e>.008856?Math.pow(e,1/3):7.787*e+16/116,n=n>.008856?Math.pow(n,1/3):7.787*n+16/116;var t=116*e-16,o=500*(r-e),i=200*(e-n);return[t,o,i]};v.lab.xyz=function(a){var r=a[0],e=a[1],n=a[2],t,o,i;o=(r+16)/116,t=e/500+o,i=o-n/200;var l=Math.pow(o,3),u=Math.pow(t,3),s=Math.pow(i,3);return o=l>.008856?l:(o-16/116)/7.787,t=u>.008856?u:(t-16/116)/7.787,i=s>.008856?s:(i-16/116)/7.787,t*=95.047,o*=100,i*=108.883,[t,o,i]};v.lab.lch=function(a){var r=a[0],e=a[1],n=a[2],t,o=Math.atan2(n,e);t=o*360/2/Math.PI,t<0&&(t+=360);var i=Math.sqrt(e*e+n*n);return[r,i,t]};v.lch.lab=function(a){var r=a[0],e=a[1],n=a[2],t=n/360*2*Math.PI,o=e*Math.cos(t),i=e*Math.sin(t);return[r,o,i]};v.rgb.ansi16=function(a){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null,e=N(a,3),n=e[0],t=e[1],o=e[2],i=r===null?v.rgb.hsv(a)[2]:r;if(i=Math.round(i/50),i===0)return 30;var l=30+(Math.round(o/255)<<2|Math.round(t/255)<<1|Math.round(n/255));return i===2&&(l+=60),l};v.hsv.ansi16=function(a){return v.rgb.ansi16(v.hsv.rgb(a),a[2])};v.rgb.ansi256=function(a){var r=a[0],e=a[1],n=a[2];if(r===e&&e===n)return r<8?16:r>248?231:Math.round((r-8)/247*24)+232;var t=16+36*Math.round(r/255*5)+6*Math.round(e/255*5)+Math.round(n/255*5);return t};v.ansi16.rgb=function(a){var r=a%10;if(r===0||r===7)return a>50&&(r+=3.5),r=r/10.5*255,[r,r,r];var e=(~~(a>50)+1)*.5,n=(r&1)*e*255,t=(r>>1&1)*e*255,o=(r>>2&1)*e*255;return[n,t,o]};v.ansi256.rgb=function(a){if(a>=232){var r=(a-232)*10+8;return[r,r,r]}a-=16;var e,n=Math.floor(a/36)/5*255,t=Math.floor((e=a%36)/6)/5*255,o=e%6/5*255;return[n,t,o]};v.rgb.hex=function(a){var r=((Math.round(a[0])&255)<<16)+((Math.round(a[1])&255)<<8)+(Math.round(a[2])&255),e=r.toString(16).toUpperCase();return"000000".substring(e.length)+e};v.hex.rgb=function(a){var r=a.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);if(!r)return[0,0,0];var e=r[0];r[0].length===3&&(e=e.split("").map(function(l){return l+l}).join(""));var n=parseInt(e,16),t=n>>16&255,o=n>>8&255,i=n&255;return[t,o,i]};v.rgb.hcg=function(a){var r=a[0]/255,e=a[1]/255,n=a[2]/255,t=Math.max(Math.max(r,e),n),o=Math.min(Math.min(r,e),n),i=t-o,l,u;return i<1?l=o/(1-i):l=0,i<=0?u=0:t===r?u=(e-n)/i%6:t===e?u=2+(n-r)/i:u=4+(r-e)/i,u/=6,u%=1,[u*360,i*100,l*100]};v.hsl.hcg=function(a){var r=a[1]/100,e=a[2]/100,n=e<.5?2*r*e:2*r*(1-e),t=0;return n<1&&(t=(e-.5*n)/(1-n)),[a[0],n*100,t*100]};v.hsv.hcg=function(a){var r=a[1]/100,e=a[2]/100,n=r*e,t=0;return n<1&&(t=(e-n)/(1-n)),[a[0],n*100,t*100]};v.hcg.rgb=function(a){var r=a[0]/360,e=a[1]/100,n=a[2]/100;if(e===0)return[n*255,n*255,n*255];var t=[0,0,0],o=r%1*6,i=o%1,l=1-i,u=0;switch(Math.floor(o)){case 0:t[0]=1,t[1]=i,t[2]=0;break;case 1:t[0]=l,t[1]=1,t[2]=0;break;case 2:t[0]=0,t[1]=1,t[2]=i;break;case 3:t[0]=0,t[1]=l,t[2]=1;break;case 4:t[0]=i,t[1]=0,t[2]=1;break;default:t[0]=1,t[1]=0,t[2]=l}return u=(1-e)*n,[(e*t[0]+u)*255,(e*t[1]+u)*255,(e*t[2]+u)*255]};v.hcg.hsv=function(a){var r=a[1]/100,e=a[2]/100,n=r+e*(1-r),t=0;return n>0&&(t=r/n),[a[0],t*100,n*100]};v.hcg.hsl=function(a){var r=a[1]/100,e=a[2]/100,n=e*(1-r)+.5*r,t=0;return n>0&&n<.5?t=r/(2*n):n>=.5&&n<1&&(t=r/(2*(1-n))),[a[0],t*100,n*100]};v.hcg.hwb=function(a){var r=a[1]/100,e=a[2]/100,n=r+e*(1-r);return[a[0],(n-r)*100,(1-n)*100]};v.hwb.hcg=function(a){var r=a[1]/100,e=a[2]/100,n=1-e,t=n-r,o=0;return t<1&&(o=(n-t)/(1-t)),[a[0],t*100,o*100]};v.apple.rgb=function(a){return[a[0]/65535*255,a[1]/65535*255,a[2]/65535*255]};v.rgb.apple=function(a){return[a[0]/255*65535,a[1]/255*65535,a[2]/255*65535]};v.gray.rgb=function(a){return[a[0]/100*255,a[0]/100*255,a[0]/100*255]};v.gray.hsl=function(a){return[0,0,a[0]]};v.gray.hsv=v.gray.hsl;v.gray.hwb=function(a){return[0,100,a[0]]};v.gray.cmyk=function(a){return[0,0,0,a[0]]};v.gray.lab=function(a){return[a[0],0,0]};v.gray.hex=function(a){var r=Math.round(a[0]/100*255)&255,e=(r<<16)+(r<<8)+r,n=e.toString(16).toUpperCase();return"000000".substring(n.length)+n};v.rgb.gray=function(a){var r=(a[0]+a[1]+a[2])/3;return[r/255*100]};var Y=$r;function xe(){for(var a={},r=Object.keys(Y),e=r.length,n=0;n<e;n++)a[r[n]]={distance:-1,parent:null};return a}c(xe,"buildGraph");function ke(a){var r=xe(),e=[a];for(r[a].distance=0;e.length;)for(var n=e.pop(),t=Object.keys(Y[n]),o=t.length,i=0;i<o;i++){var l=t[i],u=r[l];u.distance===-1&&(u.distance=r[n].distance+1,u.parent=n,e.unshift(l))}return r}c(ke,"deriveBFS");function Ee(a,r){return function(e){return r(a(e))}}c(Ee,"link");function Me(a,r){for(var e=[r[a].parent,a],n=Y[r[a].parent][a],t=r[a].parent;r[t].parent;)e.unshift(r[t].parent),n=Ee(Y[r[t].parent][t],n),t=r[t].parent;return n.conversion=e,n}c(Me,"wrapConversion");var Ce=c(function(r){for(var e=ke(r),n={},t=Object.keys(e),o=t.length,i=0;i<o;i++){var l=t[i],u=e[l];u.parent!==null&&(n[l]=Me(l,e))}return n},"route$1"),sr=$r,Se=Ce,j={},_e=Object.keys(sr);function Oe(a){var r=c(function(){for(var n=arguments.length,t=new Array(n),o=0;o<n;o++)t[o]=arguments[o];var i=t[0];return i==null?i:(i.length>1&&(t=i),a(t))},"wrappedFn");return"conversion"in a&&(r.conversion=a.conversion),r}c(Oe,"wrapRaw");function Ie(a){var r=c(function(){for(var n=arguments.length,t=new Array(n),o=0;o<n;o++)t[o]=arguments[o];var i=t[0];if(i==null)return i;i.length>1&&(t=i);var l=a(t);if(ir(l)==="object")for(var u=l.length,s=0;s<u;s++)l[s]=Math.round(l[s]);return l},"wrappedFn");return"conversion"in a&&(r.conversion=a.conversion),r}c(Ie,"wrapRounded");_e.forEach(function(a){j[a]={},Object.defineProperty(j[a],"channels",{value:sr[a].channels}),Object.defineProperty(j[a],"labels",{value:sr[a].labels});var r=Se(a),e=Object.keys(r);e.forEach(function(n){var t=r[n];j[a][n]=Ie(t),j[a][n].raw=Oe(t)})});var H=j,Re=Qr,He=c(function(){return Re.Date.now()},"now$1"),Ne=He,Te=/\s/;function Fe(a){for(var r=a.length;r--&&Te.test(a.charAt(r)););return r}c(Fe,"trimmedEndIndex$1");var Pe=Fe,ze=Pe,Le=/^\s+/;function je(a){return a&&a.slice(0,ze(a)+1).replace(Le,"")}c(je,"baseTrim$1");var Be=je,Xe=Be,Mr=fr,$e=Jr,Cr=0/0,qe=/^[-+]0x[0-9a-f]+$/i,Ae=/^0b[01]+$/i,Ve=/^0o[0-7]+$/i,Ge=parseInt;function Ke(a){if(typeof a=="number")return a;if($e(a))return Cr;if(Mr(a)){var r=typeof a.valueOf=="function"?a.valueOf():a;a=Mr(r)?r+"":r}if(typeof a!="string")return a===0?a:+a;a=Xe(a);var e=Ae.test(a);return e||Ve.test(a)?Ge(a.slice(2),e?2:8):qe.test(a)?Cr:+a}c(Ke,"toNumber$1");var We=Ke,De=fr,or=Ne,Sr=We,Ue="Expected a function",Je=Math.max,Qe=Math.min;function Ye(a,r,e){var n,t,o,i,l,u,s=0,f=!1,h=!1,x=!0;if(typeof a!="function")throw new TypeError(Ue);r=Sr(r)||0,De(e)&&(f=!!e.leading,h="maxWait"in e,o=h?Je(Sr(e.maxWait)||0,r):o,x="trailing"in e?!!e.trailing:x);function E(k){var T=n,F=t;return n=t=void 0,s=k,i=a.apply(F,T),i}c(E,"invokeFunc");function C(k){return s=k,l=setTimeout(g,r),f?E(k):i}c(C,"leadingEdge");function I(k){var T=k-u,F=k-s,W=r-T;return h?Qe(W,o-F):W}c(I,"remainingWait");function w(k){var T=k-u,F=k-s;return u===void 0||T>=r||T<0||h&&F>=o}c(w,"shouldInvoke");function g(){var k=or();if(w(k))return p(k);l=setTimeout(g,I(k))}c(g,"timerExpired");function p(k){return l=void 0,x&&n?E(k):(n=t=void 0,i)}c(p,"trailingEdge");function b(){l!==void 0&&clearTimeout(l),s=0,n=u=t=l=void 0}c(b,"cancel");function M(){return l===void 0?i:p(or())}c(M,"flush");function S(){var k=or(),T=w(k);if(n=arguments,t=this,u=k,T){if(l===void 0)return C(u);if(h)return clearTimeout(l),l=setTimeout(g,r),E(u)}return l===void 0&&(l=setTimeout(g,r)),i}return c(S,"debounced"),S.cancel=b,S.flush=M,S}c(Ye,"debounce$1");var Ze=Ye,ra=Ze,ea=fr,aa="Expected a function";function na(a,r,e){var n=!0,t=!0;if(typeof a!="function")throw new TypeError(aa);return ea(e)&&(n="leading"in e?!!e.leading:n,t="trailing"in e?!!e.trailing:t),ra(a,r,{leading:n,maxWait:r,trailing:t})}c(na,"throttle");var ta=na,oa=P.div({position:"relative",maxWidth:250}),ia=P(Ir)({position:"absolute",zIndex:1,top:4,left:4}),la=P.div({width:200,margin:5,".react-colorful__saturation":{borderRadius:"4px 4px 0 0"},".react-colorful__hue":{boxShadow:"inset 0 0 0 1px rgb(0 0 0 / 5%)"},".react-colorful__last-control":{borderRadius:"0 0 4px 4px"}}),ua=P(Gr)(function(a){var r=a.theme;return{fontFamily:r.typography.fonts.base}}),ca=P.div({display:"grid",gridTemplateColumns:"repeat(9, 16px)",gap:6,padding:3,marginTop:5,width:200}),sa=P.div(function(a){var r=a.theme,e=a.active;return{width:16,height:16,boxShadow:e?"".concat(r.appBorderColor," 0 0 0 1px inset, ").concat(r.color.mediumdark,"50 0 0 0 4px"):"".concat(r.appBorderColor," 0 0 0 1px inset"),borderRadius:r.appBorderRadius}}),va=`url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>')`,_r=c(function(r){var e=r.value,n=r.active,t=r.onClick,o=r.style,i=Ur(r,["value","active","onClick","style"]),l="linear-gradient(".concat(e,", ").concat(e,"), ").concat(va,", linear-gradient(#fff, #fff)");return d.createElement(sa,Object.assign({},i,{active:n,onClick:t},{style:Object.assign(Object.assign({},o),{backgroundImage:l})}))},"Swatch"),fa=P(Kr.Input)(function(a){var r=a.theme;return{width:"100%",paddingLeft:30,paddingRight:30,boxSizing:"border-box",fontFamily:r.typography.fonts.base}}),ha=P(Wr)(function(a){var r=a.theme;return{position:"absolute",zIndex:1,top:6,right:7,width:20,height:20,padding:4,boxSizing:"border-box",cursor:"pointer",color:r.input.color}}),y;(function(a){a.RGB="rgb",a.HSL="hsl",a.HEX="hex"})(y||(y={}));var U=Object.values(y),da=/\(([0-9]+),\s*([0-9]+)%?,\s*([0-9]+)%?,?\s*([0-9.]+)?\)/,ga=/^\s*rgba?\(([0-9]+),\s*([0-9]+),\s*([0-9]+),?\s*([0-9.]+)?\)\s*$/i,ma=/^\s*hsla?\(([0-9]+),\s*([0-9]+)%,\s*([0-9]+)%,?\s*([0-9.]+)?\)\s*$/i,vr=/^\s*#?([0-9a-f]{3}|[0-9a-f]{6})\s*$/i,pa=/^\s*#?([0-9a-f]{3})\s*$/i,ba=($={},_($,y.HEX,ve),_($,y.RGB,me),_($,y.HSL,de),$),J=(q={},_(q,y.HEX,"transparent"),_(q,y.RGB,"rgba(0, 0, 0, 0)"),_(q,y.HSL,"hsla(0, 0%, 0%, 0)"),q),Or=c(function(r){var e=r==null?void 0:r.match(da);if(!e)return[0,0,0,1];var n=N(e,5),t=n[1],o=n[2],i=n[3],l=n[4],u=l===void 0?1:l;return[t,o,i,u].map(Number)},"stringToArgs"),V=c(function(r){var e;if(r){var n=!0;if(ga.test(r)){var t,o=Or(r),i=N(o,4),l=i[0],u=i[1],s=i[2],f=i[3],h=H.rgb.hsl([l,u,s])||[0,0,0],x=N(h,3),E=x[0],C=x[1],I=x[2];return t={valid:n,value:r,keyword:H.rgb.keyword([l,u,s]),colorSpace:y.RGB},_(t,y.RGB,r),_(t,y.HSL,"hsla(".concat(E,", ").concat(C,"%, ").concat(I,"%, ").concat(f,")")),_(t,y.HEX,"#".concat(H.rgb.hex([l,u,s]).toLowerCase())),t}if(ma.test(r)){var w,g=Or(r),p=N(g,4),b=p[0],M=p[1],S=p[2],k=p[3],T=H.hsl.rgb([b,M,S])||[0,0,0],F=N(T,3),W=F[0],qr=F[1],Ar=F[2];return w={valid:n,value:r,keyword:H.hsl.keyword([b,M,S]),colorSpace:y.HSL},_(w,y.RGB,"rgba(".concat(W,", ").concat(qr,", ").concat(Ar,", ").concat(k,")")),_(w,y.HSL,r),_(w,y.HEX,"#".concat(H.hsl.hex([b,M,S]).toLowerCase())),w}var D=r.replace("#",""),X=H.keyword.rgb(D)||H.hex.rgb(D),rr=H.rgb.hsl(X),z=r;if(/[^#a-f0-9]/i.test(r)?z=D:vr.test(r)&&(z="#".concat(D)),z.startsWith("#"))n=vr.test(z);else try{H.keyword.hex(z)}catch{n=!1}return e={valid:n,value:z,keyword:H.rgb.keyword(X),colorSpace:y.HEX},_(e,y.RGB,"rgba(".concat(X[0],", ").concat(X[1],", ").concat(X[2],", 1)")),_(e,y.HSL,"hsla(".concat(rr[0],", ").concat(rr[1],"%, ").concat(rr[2],"%, 1)")),_(e,y.HEX,z),e}},"parseValue"),ya=c(function(r,e,n){if(!r||!(e!=null&&e.valid))return J[n];if(n!==y.HEX)return(e==null?void 0:e[n])||J[n];if(!e.hex.startsWith("#"))try{return"#".concat(H.keyword.hex(e.hex))}catch{return J.hex}var t=e.hex.match(pa);if(!t)return vr.test(e.hex)?e.hex:J.hex;var o=t[1].split(""),i=N(o,3),l=i[0],u=i[1],s=i[2];return"#".concat(l).concat(l).concat(u).concat(u).concat(s).concat(s)},"getRealValue"),wa=c(function(r,e){var n=m.useState(r||""),t=N(n,2),o=t[0],i=t[1],l=m.useState(function(){return V(o)}),u=N(l,2),s=u[0],f=u[1],h=m.useState((s==null?void 0:s.colorSpace)||y.HEX),x=N(h,2),E=x[0],C=x[1];m.useEffect(function(){r===void 0&&(i(""),f(void 0),C(y.HEX))},[r]);var I=m.useMemo(function(){return ya(o,s,E).toLowerCase()},[o,s,E]),w=m.useCallback(function(p){var b=V(p);i((b==null?void 0:b.value)||p||""),b&&(f(b),C(b.colorSpace),e(b.value))},[e]),g=m.useCallback(function(){var p=U.indexOf(E)+1;p>=U.length&&(p=0),C(U[p]);var b=(s==null?void 0:s[U[p]])||"";i(b),e(b)},[s,E,e]);return{value:o,realValue:I,updateValue:w,color:s,colorSpace:E,cycleColorSpace:g}},"useColorInput"),Z=c(function(r){return r.replace(/\s*/,"").toLowerCase()},"id"),xa=c(function(r,e,n){var t=m.useState(e!=null&&e.valid?[e]:[]),o=N(t,2),i=o[0],l=o[1];m.useEffect(function(){e===void 0&&l([])},[e]);var u=m.useMemo(function(){var f=(r||[]).map(function(h){return typeof h=="string"?V(h):h.title?Object.assign(Object.assign({},V(h.color)),{keyword:h.title}):V(h.color)});return f.concat(i).filter(Boolean).slice(-27)},[r,i]),s=m.useCallback(function(f){f!=null&&f.valid&&(u.some(function(h){return Z(h[n])===Z(f[n])})||l(function(h){return h.concat(f)}))},[n,u]);return{presets:u,addPreset:s}},"usePresets"),Ha=c(function(r){var e=r.name,n=r.value,t=r.onChange,o=r.onFocus,i=r.onBlur,l=r.presetColors,u=r.startOpen,s=wa(n,ta(t,200)),f=s.value,h=s.realValue,x=s.updateValue,E=s.color,C=s.colorSpace,I=s.cycleColorSpace,w=xa(l,E,C),g=w.presets,p=w.addPreset,b=ba[C];return d.createElement(oa,null,d.createElement(ia,{trigger:"click",startOpen:u,closeOnClick:!0,onVisibilityChange:c(function(){return p(E)},"onVisibilityChange"),tooltip:d.createElement(la,null,d.createElement(b,Object.assign({color:h==="transparent"?"#000000":h},{onChange:x,onFocus:o,onBlur:i})),g.length>0&&d.createElement(ca,null,g.map(function(M,S){return d.createElement(Ir,{key:"".concat(M.value,"-").concat(S),hasChrome:!1,tooltip:d.createElement(ua,{note:M.keyword||M.value})},d.createElement(_r,{value:M[C],active:E&&Z(M[C])===Z(E[C]),onClick:c(function(){return x(M.value)},"onClick")}))})))},d.createElement(_r,{value:h,style:{margin:4}})),d.createElement(fa,{id:Dr(e),value:f,onChange:c(function(S){return x(S.target.value)},"onChange"),onFocus:c(function(S){return S.target.select()},"onFocus"),placeholder:"Choose color..."}),f?d.createElement(ha,{icon:"markup",onClick:I}):null)},"ColorControl");export{Ha as ColorControl,Ha as default};
//# sourceMappingURL=Color-f953d088-5b86c0f1.js.map
