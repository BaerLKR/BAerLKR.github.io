let S=`number`,O=`utf-8`,T=`string`,N=`undefined`,R=1,U=`Object`,Q=`function`,L=0,a1=13,Z=4,a0=6,Y=`same-origin`,K=null,I=Array,P=Error,W=FinalizationRegistry,V=JSON.stringify,$=Math.random,X=Object,a2=Object.getPrototypeOf,_=Reflect,M=Uint8Array,J=undefined;var w=((b,c,d,e)=>{const f={a:b,b:c,cnt:R,dtor:d};const g=(...b)=>{f.cnt++;try{return e(f.a,f.b,...b)}finally{if(--f.cnt===L){a.__wbindgen_export_2.get(f.dtor)(f.a,f.b);f.a=L;t.unregister(f)}}};g.original=f;t.register(g,f,f);return g});var y=((b,c,d,e)=>{a.__wbindgen_export_5(b,c,d,p(e))});var v=((b,c,d)=>{a.__wbindgen_export_3(b,c,p(d))});var s=(a=>{const b=typeof a;if(b==S||b==`boolean`||a==K){return `${a}`};if(b==T){return `"${a}"`};if(b==`symbol`){const b=a.description;if(b==K){return `Symbol`}else{return `Symbol(${b})`}};if(b==Q){const b=a.name;if(typeof b==T&&b.length>L){return `Function(${b})`}else{return `Function`}};if(I.isArray(a)){const b=a.length;let c=`[`;if(b>L){c+=s(a[L])};for(let d=R;d<b;d++){c+=`, `+ s(a[d])};c+=`]`;return c};const c=/\[object ([^\]]+)\]/.exec(toString.call(a));let d;if(c.length>R){d=c[R]}else{return toString.call(a)};if(d==U){try{return `Object(`+ V(a)+ `)`}catch(a){return U}};if(a instanceof P){return `${a.name}: ${a.message}\n${a.stack}`};return d});var C=(async(a,b)=>{if(typeof Response===Q&&a instanceof Response){if(typeof WebAssembly.instantiateStreaming===Q){try{return await WebAssembly.instantiateStreaming(a,b)}catch(b){if(a.headers.get(`Content-Type`)!=`application/wasm`){console.warn(`\`WebAssembly.instantiateStreaming\` failed because your server does not serve wasm with \`application/wasm\` MIME type. Falling back to \`WebAssembly.instantiate\` which is slower. Original error:\\n`,b)}else{throw b}}};const c=await a.arrayBuffer();return await WebAssembly.instantiate(c,b)}else{const c=await WebAssembly.instantiate(a,b);if(c instanceof WebAssembly.Instance){return {instance:c,module:a}}else{return c}}});var A=(a=>()=>{throw new P(`${a} is not defined`)});var r=((a,b)=>{a=a>>>L;return q.decode(i().subarray(a,a+ b))});var m=(a=>a===J||a===K);var c=(a=>b[a]);var i=(()=>{if(h===K||h.byteLength===L){h=new M(a.memory.buffer)};return h});var l=((a,b,c)=>{if(c===J){const c=j.encode(a);const d=b(c.length,R)>>>L;i().subarray(d,d+ c.length).set(c);g=c.length;return d};let d=a.length;let e=b(d,R)>>>L;const f=i();let h=L;for(;h<d;h++){const b=a.charCodeAt(h);if(b>127)break;f[e+ h]=b};if(h!==d){if(h!==L){a=a.slice(h)};e=c(e,d,d=h+ a.length*3,R)>>>L;const b=i().subarray(e+ h,e+ d);const f=k(a,b);h+=f.written;e=c(e,d,h,R)>>>L};g=h;return e});var f=(a=>{const b=c(a);e(a);return b});var G=(b=>{if(a!==J)return a;if(typeof b!==N&&a2(b)===X.prototype)({module:b}=b);else console.warn(`using deprecated parameters for \`initSync()\`; pass a single object instead`);const c=D();E(c);if(!(b instanceof WebAssembly.Module)){b=new WebAssembly.Module(b)};const d=new WebAssembly.Instance(b,c);return F(d,b)});var D=(()=>{const b={};b.wbg={};b.wbg.__wbindgen_object_drop_ref=(a=>{f(a)});b.wbg.__wbg_abort_8659d889a7877ae3=(a=>{c(a).abort()});b.wbg.__wbindgen_cb_drop=(a=>{const b=f(a).original;if(b.cnt--==R){b.a=L;return !0};const c=!1;return c});b.wbg.__wbg_new_525245e2b9901204=(()=>{const a=new X();return p(a)});b.wbg.__wbg_setmethod_dc68a742c2db5c6a=((a,b,d)=>{c(a).method=r(b,d)});b.wbg.__wbg_new_e27c93803e1acc42=function(){return B((()=>{const a=new Headers();return p(a)}),arguments)};b.wbg.__wbg_setheaders_be10a5ab566fd06f=((a,b)=>{c(a).headers=c(b)});b.wbg.__wbg_setmode_a781aae2bd3df202=((a,b)=>{c(a).mode=[Y,`no-cors`,`cors`,`navigate`][b]});b.wbg.__wbg_setcredentials_2b67800db3f7b621=((a,b)=>{c(a).credentials=[`omit`,Y,`include`][b]});b.wbg.__wbg_setbody_734cb3d7ee8e6e96=((a,b)=>{c(a).body=c(b)});b.wbg.__wbg_new_ebf2727385ee825c=function(){return B((()=>{const a=new AbortController();return p(a)}),arguments)};b.wbg.__wbg_append_f3a4426bb50622c5=function(){return B(((a,b,d,e,f)=>{c(a).append(r(b,d),r(e,f))}),arguments)};b.wbg.__wbg_signal_41e46ccad44bb5e2=(a=>{const b=c(a).signal;return p(b)});b.wbg.__wbg_setsignal_91c4e8ebd04eb935=((a,b)=>{c(a).signal=c(b)});b.wbg.__wbg_instanceof_Response_e91b7eb7c611a9ae=(a=>{let b;try{b=c(a) instanceof Response}catch(a){b=!1}const d=b;return d});b.wbg.__wbg_status_ae8de515694c5c7c=(a=>{const b=c(a).status;return b});b.wbg.__wbg_url_1bf85c8abeb8c92d=((b,d)=>{const e=c(d).url;const f=l(e,a.__wbindgen_export_0,a.__wbindgen_export_1);const h=g;o().setInt32(b+ Z*R,h,!0);o().setInt32(b+ Z*L,f,!0)});b.wbg.__wbg_headers_5e283e8345689121=(a=>{const b=c(a).headers;return p(b)});b.wbg.__wbg_iterator_888179a48810a9fe=(()=>{const a=Symbol.iterator;return p(a)});b.wbg.__wbg_get_224d16597dbbfd96=function(){return B(((a,b)=>{const d=_.get(c(a),c(b));return p(d)}),arguments)};b.wbg.__wbindgen_is_function=(a=>{const b=typeof c(a)===Q;return b});b.wbg.__wbg_call_1084a111329e68ce=function(){return B(((a,b)=>{const d=c(a).call(c(b));return p(d)}),arguments)};b.wbg.__wbindgen_is_object=(a=>{const b=c(a);const d=typeof b===`object`&&b!==K;return d});b.wbg.__wbg_next_de3e9db4440638b2=(a=>{const b=c(a).next;return p(b)});b.wbg.__wbg_next_f9cb570345655b9a=function(){return B((a=>{const b=c(a).next();return p(b)}),arguments)};b.wbg.__wbg_done_bfda7aa8f252b39f=(a=>{const b=c(a).done;return b});b.wbg.__wbg_value_6d39332ab4788d86=(a=>{const b=c(a).value;return p(b)});b.wbg.__wbg_stringify_bbf45426c92a6bf5=function(){return B((a=>{const b=V(c(a));return p(b)}),arguments)};b.wbg.__wbindgen_string_get=((b,d)=>{const e=c(d);const f=typeof e===T?e:J;var h=m(f)?L:l(f,a.__wbindgen_export_0,a.__wbindgen_export_1);var i=g;o().setInt32(b+ Z*R,i,!0);o().setInt32(b+ Z*L,h,!0)});b.wbg.__wbg_arrayBuffer_a5fbad63cc7e663b=function(){return B((a=>{const b=c(a).arrayBuffer();return p(b)}),arguments)};b.wbg.__wbg_new_ea1883e1e5e86686=(a=>{const b=new M(c(a));return p(b)});b.wbg.__wbg_length_8339fcf5d8ecd12e=(a=>{const b=c(a).length;return b});b.wbg.__wbindgen_memory=(()=>{const b=a.memory;return p(b)});b.wbg.__wbg_buffer_b7b08af79b0b0974=(a=>{const b=c(a).buffer;return p(b)});b.wbg.__wbg_set_d1e79e2388520f18=((a,b,d)=>{c(a).set(c(b),d>>>L)});b.wbg.__wbg_document_8554450897a855b9=(a=>{const b=c(a).document;return m(b)?L:p(b)});b.wbg.__wbg_getElementById_f56c8e6a15a6926d=((a,b,d)=>{const e=c(a).getElementById(r(b,d));return m(e)?L:p(e)});b.wbg.__wbg_setinnerHTML_ea7e3c6a3c4790c6=((a,b,d)=>{c(a).innerHTML=r(b,d)});b.wbg.__wbg_settextContent_cd38ea7d4e0f7260=((a,b,d)=>{c(a).textContent=b===L?J:r(b,d)});b.wbg.__wbg_instanceof_HtmlCanvasElement_1a96a01603ec2d8b=(a=>{let b;try{b=c(a) instanceof HTMLCanvasElement}catch(a){b=!1}const d=b;return d});b.wbg.__wbg_clearInterval_df3409c32c572e85=((a,b)=>{c(a).clearInterval(b)});b.wbg.__wbg_style_e06c9e03355741e9=(a=>{const b=c(a).style;return p(b)});b.wbg.__wbg_innerHeight_c1b7737de203a7f6=function(){return B((a=>{const b=c(a).innerHeight;return p(b)}),arguments)};b.wbg.__wbindgen_number_get=((a,b)=>{const d=c(b);const e=typeof d===S?d:J;o().setFloat64(a+ 8*R,m(e)?L:e,!0);o().setInt32(a+ Z*L,!m(e),!0)});b.wbg.__wbg_setheight_ba99ad2df4295e89=((a,b)=>{c(a).height=b>>>L});b.wbg.__wbg_innerWidth_74051c08b26d0627=function(){return B((a=>{const b=c(a).innerWidth;return p(b)}),arguments)};b.wbg.__wbg_setwidth_e371a8d6b16ebe84=((a,b)=>{c(a).width=b>>>L});b.wbg.__wbg_getContext_69ec873410cbba3c=function(){return B(((a,b,d)=>{const e=c(a).getContext(r(b,d));return m(e)?L:p(e)}),arguments)};b.wbg.__wbg_instanceof_CanvasRenderingContext2d_a0c4f0da6392b8ca=(a=>{let b;try{b=c(a) instanceof CanvasRenderingContext2D}catch(a){b=!1}const d=b;return d});b.wbg.__wbg_scrollHeight_3bb102589b9a0e33=(a=>{const b=c(a).scrollHeight;return b});b.wbg.__wbg_scrollWidth_a2bdee78f09b4be7=(a=>{const b=c(a).scrollWidth;return b});b.wbg.__wbg_random_94e88d2d7c05e6d0=typeof $==Q?$:A(`Math.random`);b.wbg.__wbg_setInterval_76a7ba11bc095d2d=function(){return B(((a,b,d)=>{const e=c(a).setInterval(c(b),d);return e}),arguments)};b.wbg.__wbg_setfont_931e1f36bec6a342=((a,b,d)=>{c(a).font=r(b,d)});b.wbg.__wbindgen_string_new=((a,b)=>{const c=r(a,b);return p(c)});b.wbg.__wbg_setfillStyle_98060f7b257936ba=((a,b)=>{c(a).fillStyle=c(b)});b.wbg.__wbg_fillRect_a5a5da573f0412b5=((a,b,d,e,f)=>{c(a).fillRect(b,d,e,f)});b.wbg.__wbg_fillText_ae0445d1930428dd=function(){return B(((a,b,d,e,f)=>{c(a).fillText(r(b,d),e,f)}),arguments)};b.wbg.__wbg_clientX_3967ecd5e962e1b2=(a=>{const b=c(a).clientX;return b});b.wbg.__wbg_clientY_37d418b8d9c0bb52=(a=>{const b=c(a).clientY;return b});b.wbg.__wbg_instanceof_HtmlElement_ee6cb55e6b90ae79=(a=>{let b;try{b=c(a) instanceof HTMLElement}catch(a){b=!1}const d=b;return d});b.wbg.__wbg_setTimeout_73b734ca971c19f4=function(){return B(((a,b,d)=>{const e=c(a).setTimeout(c(b),d);return e}),arguments)};b.wbg.__wbindgen_number_new=(a=>{const b=a;return p(b)});b.wbg.__wbindgen_object_clone_ref=(a=>{const b=c(a);return p(b)});b.wbg.__wbg_setTimeout_ae88a034da964620=function(){return B(((a,b,d,e,f)=>{const g=c(a).setTimeout(c(b),d,c(e),c(f));return g}),arguments)};b.wbg.__wbg_documentElement_7c4f131d61dd61f2=(a=>{const b=c(a).documentElement;return m(b)?L:p(b)});b.wbg.__wbg_new_abda76e883ba8a5f=(()=>{const a=new P();return p(a)});b.wbg.__wbg_stack_658279fe44541cf6=((b,d)=>{const e=c(d).stack;const f=l(e,a.__wbindgen_export_0,a.__wbindgen_export_1);const h=g;o().setInt32(b+ Z*R,h,!0);o().setInt32(b+ Z*L,f,!0)});b.wbg.__wbg_error_f851667af71bcfc6=((b,c)=>{let d;let e;try{d=b;e=c;console.error(r(b,c))}finally{a.__wbindgen_export_7(d,e,R)}});b.wbg.__wbg_self_3093d5d1f7bcb682=function(){return B((()=>{const a=self.self;return p(a)}),arguments)};b.wbg.__wbg_window_3bcfc4d31bc012f8=function(){return B((()=>{const a=window.window;return p(a)}),arguments)};b.wbg.__wbg_globalThis_86b222e13bdf32ed=function(){return B((()=>{const a=globalThis.globalThis;return p(a)}),arguments)};b.wbg.__wbg_global_e5a3fe56f8be9485=function(){return B((()=>{const a=global.global;return p(a)}),arguments)};b.wbg.__wbindgen_is_undefined=(a=>{const b=c(a)===J;return b});b.wbg.__wbg_newnoargs_76313bd6ff35d0f2=((a,b)=>{const c=new Function(r(a,b));return p(c)});b.wbg.__wbg_newwithbyteoffsetandlength_8a2cb9ca96b27ec9=((a,b,d)=>{const e=new M(c(a),b>>>L,d>>>L);return p(e)});b.wbg.__wbg_has_4bfbc01db38743f7=function(){return B(((a,b)=>{const d=_.has(c(a),c(b));return d}),arguments)};b.wbg.__wbg_fetch_25e3a297f7b04639=(a=>{const b=fetch(c(a));return p(b)});b.wbg.__wbg_fetch_ba7fe179e527d942=((a,b)=>{const d=c(a).fetch(c(b));return p(d)});b.wbg.__wbindgen_throw=((a,b)=>{throw new P(r(a,b))});b.wbg.__wbindgen_debug_string=((b,d)=>{const e=s(c(d));const f=l(e,a.__wbindgen_export_0,a.__wbindgen_export_1);const h=g;o().setInt32(b+ Z*R,h,!0);o().setInt32(b+ Z*L,f,!0)});b.wbg.__wbg_queueMicrotask_48421b3cc9052b68=(a=>{const b=c(a).queueMicrotask;return p(b)});b.wbg.__wbg_resolve_570458cb99d56a43=(a=>{const b=Promise.resolve(c(a));return p(b)});b.wbg.__wbg_then_95e6edc0f89b73b1=((a,b)=>{const d=c(a).then(c(b));return p(d)});b.wbg.__wbg_queueMicrotask_12a30234db4045d3=(a=>{queueMicrotask(c(a))});b.wbg.__wbg_then_876bb3c633745cc6=((a,b,d)=>{const e=c(a).then(c(b),c(d));return p(e)});b.wbg.__wbg_instanceof_Window_5012736c80a01584=(a=>{let b;try{b=c(a) instanceof Window}catch(a){b=!1}const d=b;return d});b.wbg.__wbg_setProperty_ff389e5a7fb9910e=function(){return B(((a,b,d,e,f)=>{c(a).setProperty(r(b,d),r(e,f))}),arguments)};b.wbg.__wbg_addEventListener_e167f012cbedfa4e=function(){return B(((a,b,d,e)=>{c(a).addEventListener(r(b,d),c(e))}),arguments)};b.wbg.__wbg_newwithstrandinit_a31c69e4cc337183=function(){return B(((a,b,d)=>{const e=new Request(r(a,b),c(d));return p(e)}),arguments)};b.wbg.__wbindgen_closure_wrapper110=((a,b,c)=>{const d=u(a,b,a0,v);return p(d)});b.wbg.__wbindgen_closure_wrapper112=((a,b,c)=>{const d=w(a,b,a0,x);return p(d)});b.wbg.__wbindgen_closure_wrapper114=((a,b,c)=>{const d=u(a,b,a1,y);return p(d)});b.wbg.__wbindgen_closure_wrapper116=((a,b,c)=>{const d=u(a,b,a1,z);return p(d)});b.wbg.__wbindgen_closure_wrapper1240=((a,b,c)=>{const d=u(a,b,a1,v);return p(d)});return b});var x=((b,c)=>{a.__wbindgen_export_4(b,c)});var e=(a=>{if(a<132)return;b[a]=d;d=a});var E=((a,b)=>{});var F=((b,c)=>{a=b.exports;H.__wbindgen_wasm_module=c;n=K;h=K;a.__wbindgen_start();return a});var u=((b,c,d,e)=>{const f={a:b,b:c,cnt:R,dtor:d};const g=(...b)=>{f.cnt++;const c=f.a;f.a=L;try{return e(c,f.b,...b)}finally{if(--f.cnt===L){a.__wbindgen_export_2.get(f.dtor)(c,f.b);t.unregister(f)}else{f.a=c}}};g.original=f;t.register(g,f,f);return g});var H=(async(b)=>{if(a!==J)return a;if(typeof b!==N&&a2(b)===X.prototype)({module_or_path:b}=b);else console.warn(`using deprecated parameters for the initialization function; pass a single object instead`);if(typeof b===N){b=new URL(`lovirent-eu_bg.wasm`,import.meta.url)};const c=D();if(typeof b===T||typeof Request===Q&&b instanceof Request||typeof URL===Q&&b instanceof URL){b=fetch(b)};E(c);const {instance:d,module:e}=await C(await b,c);return F(d,e)});function B(b,c){try{return b.apply(this,c)}catch(b){a.__wbindgen_export_8(p(b))}}var z=((b,c)=>{a.__wbindgen_export_6(b,c)});var p=(a=>{if(d===b.length)b.push(b.length+ R);const c=d;d=b[c];b[c]=a;return c});var o=(()=>{if(n===K||n.buffer.detached===!0||n.buffer.detached===J&&n.buffer!==a.memory.buffer){n=new DataView(a.memory.buffer)};return n});let a;const b=new I(128).fill(J);b.push(J,K,!0,!1);let d=b.length;let g=L;let h=K;const j=typeof TextEncoder!==N?new TextEncoder(O):{encode:()=>{throw P(`TextEncoder not available`)}};const k=typeof j.encodeInto===Q?((a,b)=>j.encodeInto(a,b)):((a,b)=>{const c=j.encode(a);b.set(c);return {read:a.length,written:c.length}});let n=K;const q=typeof TextDecoder!==N?new TextDecoder(O,{ignoreBOM:!0,fatal:!0}):{decode:()=>{throw P(`TextDecoder not available`)}};if(typeof TextDecoder!==N){q.decode()};const t=typeof W===N?{register:()=>{},unregister:()=>{}}:new W(b=>{a.__wbindgen_export_2.get(b.dtor)(b.a,b.b)});export default H;export{G as initSync}