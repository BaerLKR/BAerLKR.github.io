let L=null,V=4,M=1,N=0,X=27,T=`function`,R=`number`,O=`undefined`,S=`string`,U=`Object`,P=`utf-8`,J=Array,Q=Error,W=Math.random,K=undefined;var g=(a=>{if(d===b.length)b.push(b.length+ M);const c=d;d=b[c];b[c]=a;return c});var I=(async(b)=>{if(a!==K)return a;if(typeof b===O){b=new URL(`lovirent-eu_bg.wasm`,import.meta.url)};const c=E();if(typeof b===S||typeof Request===T&&b instanceof Request||typeof URL===T&&b instanceof URL){b=fetch(b)};F(c);const {instance:d,module:e}=await D(await b,c);return G(d,e)});var F=((a,b)=>{});var G=((b,c)=>{a=b.exports;I.__wbindgen_wasm_module=c;i=L;k=L;n=L;a.__wbindgen_start();return a});var c=(a=>b[a]);var H=(b=>{if(a!==K)return a;const c=E();F(c);if(!(b instanceof WebAssembly.Module)){b=new WebAssembly.Module(b)};const d=new WebAssembly.Instance(b,c);return G(d,b)});var h=(a=>a===K||a===L);var w=((b,c)=>{a.__wbindgen_export_3(b,c)});var u=((a,b,c)=>{if(c===K){const c=s.encode(a);const d=b(c.length,M)>>>N;o().subarray(d,d+ c.length).set(c);r=c.length;return d};let d=a.length;let e=b(d,M)>>>N;const f=o();let g=N;for(;g<d;g++){const b=a.charCodeAt(g);if(b>127)break;f[e+ g]=b};if(g!==d){if(g!==N){a=a.slice(g)};e=c(e,d,d=g+ a.length*3,M)>>>N;const b=o().subarray(e+ g,e+ d);const f=t(a,b);g+=f.written};r=g;return e});var E=(()=>{const b={};b.wbg={};b.wbg.__wbindgen_object_drop_ref=(a=>{f(a)});b.wbg.__wbg_settextContent_28d80502cf08bde7=((a,b,d)=>{c(a).textContent=b===N?K:p(b,d)});b.wbg.__wbg_scrollHeight_b8deee7a26235364=(a=>{const b=c(a).scrollHeight;return b});b.wbg.__wbg_clientX_1a480606ab0cabaa=(a=>{const b=c(a).clientX;return b});b.wbg.__wbg_clientY_9c7878f7faf3900f=(a=>{const b=c(a).clientY;return b});b.wbg.__wbg_style_3801009b2339aa94=(a=>{const b=c(a).style;return g(b)});b.wbg.__wbg_setProperty_b95ef63ab852879e=function(){return C(((a,b,d,e,f)=>{c(a).setProperty(p(b,d),p(e,f))}),arguments)};b.wbg.__wbg_getElementById_cc0e0d931b0d9a28=((a,b,d)=>{const e=c(a).getElementById(p(b,d));return h(e)?N:g(e)});b.wbg.__wbg_instanceof_HtmlElement_6f4725d4677c7968=(a=>{let b;try{b=c(a) instanceof HTMLElement}catch(a){b=!1}const d=b;return d});b.wbg.__wbg_setTimeout_eb1a0d116c26d9f6=function(){return C(((a,b,d)=>{const e=c(a).setTimeout(c(b),d);return e}),arguments)};b.wbg.__wbindgen_number_new=(a=>{const b=a;return g(b)});b.wbg.__wbindgen_object_clone_ref=(a=>{const b=c(a);return g(b)});b.wbg.__wbg_setTimeout_aa910ef1e16d3d75=function(){return C(((a,b,d,e,f)=>{const g=c(a).setTimeout(c(b),d,c(e),c(f));return g}),arguments)};b.wbg.__wbg_document_f7ace2b956f30a4f=(a=>{const b=c(a).document;return h(b)?N:g(b)});b.wbg.__wbg_setinnerHTML_b089587252408b67=((a,b,d)=>{c(a).innerHTML=p(b,d)});b.wbg.__wbg_log_a82e76da8e673942=((a,b)=>{console.log(p(a,b))});b.wbg.__wbg_documentElement_0df873a7503a9af9=(a=>{const b=c(a).documentElement;return h(b)?N:g(b)});b.wbg.__wbg_instanceof_HtmlCanvasElement_da5f9efa0688cf6d=(a=>{let b;try{b=c(a) instanceof HTMLCanvasElement}catch(a){b=!1}const d=b;return d});b.wbg.__wbg_clearInterval_080a47b47538d08c=((a,b)=>{c(a).clearInterval(b)});b.wbg.__wbg_innerHeight_2dd06d8cf68f1d7d=function(){return C((a=>{const b=c(a).innerHeight;return g(b)}),arguments)};b.wbg.__wbindgen_number_get=((a,b)=>{const d=c(b);const e=typeof d===R?d:K;j()[a/8+ M]=h(e)?N:e;l()[a/V+ N]=!h(e)});b.wbg.__wbg_setheight_a747d440760fe5aa=((a,b)=>{c(a).height=b>>>N});b.wbg.__wbg_innerWidth_ebe07ce5463ff293=function(){return C((a=>{const b=c(a).innerWidth;return g(b)}),arguments)};b.wbg.__wbg_setwidth_a667a942dba6656e=((a,b)=>{c(a).width=b>>>N});b.wbg.__wbg_getContext_7c5944ea807bf5d3=function(){return C(((a,b,d)=>{const e=c(a).getContext(p(b,d));return h(e)?N:g(e)}),arguments)};b.wbg.__wbg_instanceof_CanvasRenderingContext2d_bc0a6635c96eca9b=(a=>{let b;try{b=c(a) instanceof CanvasRenderingContext2D}catch(a){b=!1}const d=b;return d});b.wbg.__wbg_scrollWidth_913984e3ed11e471=(a=>{const b=c(a).scrollWidth;return b});b.wbg.__wbg_random_edd19f535a968d2a=typeof W==T?W:B(`Math.random`);b.wbg.__wbg_setInterval_5676632e4a58b04e=function(){return C(((a,b,d)=>{const e=c(a).setInterval(c(b),d);return e}),arguments)};b.wbg.__wbg_setfont_3d2943420717ac87=((a,b,d)=>{c(a).font=p(b,d)});b.wbg.__wbindgen_string_new=((a,b)=>{const c=p(a,b);return g(c)});b.wbg.__wbg_setfillStyle_401fa583a1c8863c=((a,b)=>{c(a).fillStyle=c(b)});b.wbg.__wbg_fillRect_e285f7b46668b7fa=((a,b,d,e,f)=>{c(a).fillRect(b,d,e,f)});b.wbg.__wbg_fillText_ba4313e6835ce7ea=function(){return C(((a,b,d,e,f)=>{c(a).fillText(p(b,d),e,f)}),arguments)};b.wbg.__wbg_addEventListener_5651108fc3ffeb6e=function(){return C(((a,b,d,e)=>{c(a).addEventListener(p(b,d),c(e))}),arguments)};b.wbg.__wbg_new_abda76e883ba8a5f=(()=>{const a=new Q();return g(a)});b.wbg.__wbg_stack_658279fe44541cf6=((b,d)=>{const e=c(d).stack;const f=u(e,a.__wbindgen_export_0,a.__wbindgen_export_1);const g=r;l()[b/V+ M]=g;l()[b/V+ N]=f});b.wbg.__wbg_error_f851667af71bcfc6=((b,c)=>{let d;let e;try{d=b;e=c;console.error(p(b,c))}finally{a.__wbindgen_export_7(d,e,M)}});b.wbg.__wbg_self_1ff1d729e9aae938=function(){return C((()=>{const a=self.self;return g(a)}),arguments)};b.wbg.__wbg_window_5f4faef6c12b79ec=function(){return C((()=>{const a=window.window;return g(a)}),arguments)};b.wbg.__wbg_globalThis_1d39714405582d3c=function(){return C((()=>{const a=globalThis.globalThis;return g(a)}),arguments)};b.wbg.__wbg_global_651f05c6a0944d1c=function(){return C((()=>{const a=global.global;return g(a)}),arguments)};b.wbg.__wbindgen_is_undefined=(a=>{const b=c(a)===K;return b});b.wbg.__wbg_newnoargs_581967eacc0e2604=((a,b)=>{const c=new Function(p(a,b));return g(c)});b.wbg.__wbg_call_cb65541d95d71282=function(){return C(((a,b)=>{const d=c(a).call(c(b));return g(d)}),arguments)};b.wbg.__wbindgen_cb_drop=(a=>{const b=f(a).original;if(b.cnt--==M){b.a=N;return !0};const c=!1;return c});b.wbg.__wbindgen_debug_string=((b,d)=>{const e=q(c(d));const f=u(e,a.__wbindgen_export_0,a.__wbindgen_export_1);const g=r;l()[b/V+ M]=g;l()[b/V+ N]=f});b.wbg.__wbindgen_throw=((a,b)=>{throw new Q(p(a,b))});b.wbg.__wbg_instanceof_Window_9029196b662bc42a=(a=>{let b;try{b=c(a) instanceof Window}catch(a){b=!1}const d=b;return d});b.wbg.__wbindgen_closure_wrapper91=((a,b,c)=>{const d=v(a,b,X,w);return g(d)});b.wbg.__wbindgen_closure_wrapper98=((a,b,c)=>{const d=x(a,b,X,y);return g(d)});b.wbg.__wbindgen_closure_wrapper99=((a,b,c)=>{const d=x(a,b,X,z);return g(d)});b.wbg.__wbindgen_closure_wrapper100=((a,b,c)=>{const d=x(a,b,X,A);return g(d)});return b});function C(b,c){try{return b.apply(this,c)}catch(b){a.__wbindgen_export_8(g(b))}}var p=((a,b)=>{a=a>>>N;return m.decode(o().subarray(a,a+ b))});var e=(a=>{if(a<132)return;b[a]=d;d=a});var x=((b,c,d,e)=>{const f={a:b,b:c,cnt:M,dtor:d};const g=(...b)=>{f.cnt++;const c=f.a;f.a=N;try{return e(c,f.b,...b)}finally{if(--f.cnt===N){a.__wbindgen_export_2.get(f.dtor)(c,f.b)}else{f.a=c}}};g.original=f;return g});var B=(a=>()=>{throw new Q(`${a} is not defined`)});var D=(async(a,b)=>{if(typeof Response===T&&a instanceof Response){if(typeof WebAssembly.instantiateStreaming===T){try{return await WebAssembly.instantiateStreaming(a,b)}catch(b){if(a.headers.get(`Content-Type`)!=`application/wasm`){console.warn(`\`WebAssembly.instantiateStreaming\` failed because your server does not serve wasm with \`application/wasm\` MIME type. Falling back to \`WebAssembly.instantiate\` which is slower. Original error:\\n`,b)}else{throw b}}};const c=await a.arrayBuffer();return await WebAssembly.instantiate(c,b)}else{const c=await WebAssembly.instantiate(a,b);if(c instanceof WebAssembly.Instance){return {instance:c,module:a}}else{return c}}});var A=((b,c,d)=>{a.__wbindgen_export_6(b,c,g(d))});var v=((b,c,d,e)=>{const f={a:b,b:c,cnt:M,dtor:d};const g=(...b)=>{f.cnt++;try{return e(f.a,f.b,...b)}finally{if(--f.cnt===N){a.__wbindgen_export_2.get(f.dtor)(f.a,f.b);f.a=N}}};g.original=f;return g});var f=(a=>{const b=c(a);e(a);return b});var j=(()=>{if(i===L||i.byteLength===N){i=new Float64Array(a.memory.buffer)};return i});var q=(a=>{const b=typeof a;if(b==R||b==`boolean`||a==L){return `${a}`};if(b==S){return `"${a}"`};if(b==`symbol`){const b=a.description;if(b==L){return `Symbol`}else{return `Symbol(${b})`}};if(b==T){const b=a.name;if(typeof b==S&&b.length>N){return `Function(${b})`}else{return `Function`}};if(J.isArray(a)){const b=a.length;let c=`[`;if(b>N){c+=q(a[N])};for(let d=M;d<b;d++){c+=`, `+ q(a[d])};c+=`]`;return c};const c=/\[object ([^\]]+)\]/.exec(toString.call(a));let d;if(c.length>M){d=c[M]}else{return toString.call(a)};if(d==U){try{return `Object(`+ JSON.stringify(a)+ `)`}catch(a){return U}};if(a instanceof Q){return `${a.name}: ${a.message}\n${a.stack}`};return d});var l=(()=>{if(k===L||k.byteLength===N){k=new Int32Array(a.memory.buffer)};return k});var o=(()=>{if(n===L||n.byteLength===N){n=new Uint8Array(a.memory.buffer)};return n});var z=((b,c)=>{a.__wbindgen_export_5(b,c)});var y=((b,c,d,e)=>{a.__wbindgen_export_4(b,c,d,g(e))});let a;const b=new J(128).fill(K);b.push(K,L,!0,!1);let d=b.length;let i=L;let k=L;const m=typeof TextDecoder!==O?new TextDecoder(P,{ignoreBOM:!0,fatal:!0}):{decode:()=>{throw Q(`TextDecoder not available`)}};if(typeof TextDecoder!==O){m.decode()};let n=L;let r=N;const s=typeof TextEncoder!==O?new TextEncoder(P):{encode:()=>{throw Q(`TextEncoder not available`)}};const t=typeof s.encodeInto===T?((a,b)=>s.encodeInto(a,b)):((a,b)=>{const c=s.encode(a);b.set(c);return {read:a.length,written:c.length}});export default I;export{H as initSync}