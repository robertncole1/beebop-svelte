import{s as Vg,n as bo}from"../chunks/scheduler.e108d1fd.js";import{S as kg,i as Ng,g as Tn,s as gu,h as An,j as Po,y as Co,c as pu,f as Rn,k as jt,a as Do,x as pr,z as xg,A as Og}from"../chunks/index.a8e6cd80.js";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fh=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},Mg=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=n[t++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=n[t++],o=n[t++],a=n[t++],c=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const s=n[t++],o=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},mh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const s=n[i],o=i+1<n.length,a=o?n[i+1]:0,c=i+2<n.length,u=c?n[i+2]:0,l=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|u>>6,f=u&63;c||(f=64,o||(d=64)),r.push(t[l],t[h],t[d],t[f])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(fh(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Mg(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const s=t[n.charAt(i++)],a=i<n.length?t[n.charAt(i)]:0;++i;const u=i<n.length?t[n.charAt(i)]:64;++i;const h=i<n.length?t[n.charAt(i)]:64;if(++i,s==null||a==null||u==null||h==null)throw new Lg;const d=s<<2|a>>4;if(r.push(d),u!==64){const f=a<<4&240|u>>2;if(r.push(f),h!==64){const y=u<<6&192|h;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Lg extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Fg=function(n){const e=fh(n);return mh.encodeByteArray(e,!0)},ss=function(n){return Fg(n).replace(/\./g,"")},gh=function(n){try{return mh.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function os(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!Ug(t)||(n[t]=os(n[t],e[t]));return n}function Ug(n){return n!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bg(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qg=()=>Bg().__FIREBASE_DEFAULTS__,$g=()=>{if(typeof process>"u"||typeof process.env>"u")return;const n={}.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},jg=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&gh(n[1]);return e&&JSON.parse(e)},xs=()=>{try{return qg()||$g()||jg()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Gg=n=>{var e,t;return(t=(e=xs())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},ph=()=>{var n;return(n=xs())===null||n===void 0?void 0:n.config},_h=n=>{var e;return(e=xs())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zg{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kg(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",i=n.iat||0,s=n.sub||n.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},n),a="";return[ss(JSON.stringify(t)),ss(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function se(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Wg(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(se())}function Hg(){var n;const e=(n=xs())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Qg(){return typeof self=="object"&&self.self===self}function Yg(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Xg(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Jg(){const n=se();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Zg(){return!Hg()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function yh(){try{return typeof indexedDB=="object"}catch{return!1}}function ep(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tp="FirebaseError";class Xe extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=tp,Object.setPrototypeOf(this,Xe.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,pn.prototype.create)}}class pn{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?np(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Xe(i,a,r)}}function np(n,e){return n.replace(rp,(t,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const rp=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _u(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function ip(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function as(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const i of t){if(!r.includes(i))return!1;const s=n[i],o=e[i];if(yu(s)&&yu(o)){if(!as(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!t.includes(i))return!1;return!0}function yu(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ui(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ih(n,e){const t=new sp(n,e);return t.subscribe.bind(t)}class sp{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");op(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:r},i.next===void 0&&(i.next=Vo),i.error===void 0&&(i.error=Vo),i.complete===void 0&&(i.complete=Vo);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function op(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Vo(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $(n){return n&&n._delegate?n._delegate:n}class it{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ap{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new zg;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(up(e))try{this.getOrInitializeService({instanceIdentifier:zt})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=zt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=zt){return this.instances.has(e)}getOptions(e=zt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,t){var r;const i=this.normalizeInstanceIdentifier(t),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const i of r)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:cp(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=zt){return this.component?this.component.multipleInstances?e:zt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function cp(n){return n===zt?void 0:n}function up(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lp{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new ap(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const La=[];var N;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(N||(N={}));const vh={debug:N.DEBUG,verbose:N.VERBOSE,info:N.INFO,warn:N.WARN,error:N.ERROR,silent:N.SILENT},hp=N.INFO,dp={[N.DEBUG]:"log",[N.VERBOSE]:"log",[N.INFO]:"info",[N.WARN]:"warn",[N.ERROR]:"error"},fp=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),i=dp[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Os{constructor(e){this.name=e,this._logLevel=hp,this._logHandler=fp,this._userLogHandler=null,La.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in N))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?vh[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,N.DEBUG,...e),this._logHandler(this,N.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,N.VERBOSE,...e),this._logHandler(this,N.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,N.INFO,...e),this._logHandler(this,N.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,N.WARN,...e),this._logHandler(this,N.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,N.ERROR,...e),this._logHandler(this,N.ERROR,...e)}}function mp(n){La.forEach(e=>{e.setLogLevel(n)})}function gp(n,e){for(const t of La){let r=null;e&&e.level&&(r=vh[e.level]),n===null?t.userLogHandler=null:t.userLogHandler=(i,s,...o)=>{const a=o.map(c=>{if(c==null)return null;if(typeof c=="string")return c;if(typeof c=="number"||typeof c=="boolean")return c.toString();if(c instanceof Error)return c.message;try{return JSON.stringify(c)}catch{return null}}).filter(c=>c).join(" ");s>=(r??i.logLevel)&&n({level:N[s].toLowerCase(),message:a,args:o,type:i.name})}}}const pp=(n,e)=>e.some(t=>n instanceof t);let Iu,vu;function _p(){return Iu||(Iu=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function yp(){return vu||(vu=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Eh=new WeakMap,Xo=new WeakMap,wh=new WeakMap,ko=new WeakMap,Fa=new WeakMap;function Ip(n){const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("success",s),n.removeEventListener("error",o)},s=()=>{t(wt(n.result)),i()},o=()=>{r(n.error),i()};n.addEventListener("success",s),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&Eh.set(t,n)}).catch(()=>{}),Fa.set(e,n),e}function vp(n){if(Xo.has(n))return;const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",o),n.removeEventListener("abort",o)},s=()=>{t(),i()},o=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",s),n.addEventListener("error",o),n.addEventListener("abort",o)});Xo.set(n,e)}let Jo={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Xo.get(n);if(e==="objectStoreNames")return n.objectStoreNames||wh.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return wt(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Ep(n){Jo=n(Jo)}function wp(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(No(this),e,...t);return wh.set(r,e.sort?e.sort():[e]),wt(r)}:yp().includes(n)?function(...e){return n.apply(No(this),e),wt(Eh.get(this))}:function(...e){return wt(n.apply(No(this),e))}}function Tp(n){return typeof n=="function"?wp(n):(n instanceof IDBTransaction&&vp(n),pp(n,_p())?new Proxy(n,Jo):n)}function wt(n){if(n instanceof IDBRequest)return Ip(n);if(ko.has(n))return ko.get(n);const e=Tp(n);return e!==n&&(ko.set(n,e),Fa.set(e,n)),e}const No=n=>Fa.get(n);function Ap(n,e,{blocked:t,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(n,e),a=wt(o);return r&&o.addEventListener("upgradeneeded",c=>{r(wt(o.result),c.oldVersion,c.newVersion,wt(o.transaction),c)}),t&&o.addEventListener("blocked",c=>t(c.oldVersion,c.newVersion,c)),a.then(c=>{s&&c.addEventListener("close",()=>s()),i&&c.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const Rp=["get","getKey","getAll","getAllKeys","count"],Sp=["put","add","delete","clear"],xo=new Map;function Eu(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(xo.get(e))return xo.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,i=Sp.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Rp.includes(t)))return;const s=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[t](...a),i&&c.done]))[0]};return xo.set(e,s),s}Ep(n=>({...n,get:(e,t,r)=>Eu(e,t)||n.get(e,t,r),has:(e,t)=>!!Eu(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bp{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Pp(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function Pp(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Zo="@firebase/app",wu="0.9.19";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sn=new Os("@firebase/app"),Cp="@firebase/app-compat",Dp="@firebase/analytics-compat",Vp="@firebase/analytics",kp="@firebase/app-check-compat",Np="@firebase/app-check",xp="@firebase/auth",Op="@firebase/auth-compat",Mp="@firebase/database",Lp="@firebase/database-compat",Fp="@firebase/functions",Up="@firebase/functions-compat",Bp="@firebase/installations",qp="@firebase/installations-compat",$p="@firebase/messaging",jp="@firebase/messaging-compat",Gp="@firebase/performance",zp="@firebase/performance-compat",Kp="@firebase/remote-config",Wp="@firebase/remote-config-compat",Hp="@firebase/storage",Qp="@firebase/storage-compat",Yp="@firebase/firestore",Xp="@firebase/firestore-compat",Jp="firebase",Zp="10.4.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const At="[DEFAULT]",e_={[Zo]:"fire-core",[Cp]:"fire-core-compat",[Vp]:"fire-analytics",[Dp]:"fire-analytics-compat",[Np]:"fire-app-check",[kp]:"fire-app-check-compat",[xp]:"fire-auth",[Op]:"fire-auth-compat",[Mp]:"fire-rtdb",[Lp]:"fire-rtdb-compat",[Fp]:"fire-fn",[Up]:"fire-fn-compat",[Bp]:"fire-iid",[qp]:"fire-iid-compat",[$p]:"fire-fcm",[jp]:"fire-fcm-compat",[Gp]:"fire-perf",[zp]:"fire-perf-compat",[Kp]:"fire-rc",[Wp]:"fire-rc-compat",[Hp]:"fire-gcs",[Qp]:"fire-gcs-compat",[Yp]:"fire-fst",[Xp]:"fire-fst-compat","fire-js":"fire-js",[Jp]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rt=new Map,Lr=new Map;function cs(n,e){try{n.container.addComponent(e)}catch(t){sn.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Th(n,e){n.container.addOrOverwriteComponent(e)}function St(n){const e=n.name;if(Lr.has(e))return sn.debug(`There were multiple attempts to register component ${e}.`),!1;Lr.set(e,n);for(const t of Rt.values())cs(t,n);return!0}function Ms(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function t_(n,e,t=At){Ms(n,e).clearInstance(t)}function n_(){Lr.clear()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r_={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},rt=new pn("app","Firebase",r_);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let i_=class{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new it("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw rt.create("app-deleted",{appName:this._name})}};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mt=Zp;function Ls(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:At,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw rt.create("bad-app-name",{appName:String(i)});if(t||(t=ph()),!t)throw rt.create("no-options");const s=Rt.get(i);if(s){if(as(t,s.options)&&as(r,s.config))return s;throw rt.create("duplicate-app",{appName:i})}const o=new lp(i);for(const c of Lr.values())o.addComponent(c);const a=new i_(t,r,o);return Rt.set(i,a),a}function Ah(n=At){const e=Rt.get(n);if(!e&&n===At&&ph())return Ls();if(!e)throw rt.create("no-app",{appName:n});return e}function s_(){return Array.from(Rt.values())}async function Rh(n){const e=n.name;Rt.has(e)&&(Rt.delete(e),await Promise.all(n.container.getProviders().map(t=>t.delete())),n.isDeleted=!0)}function Le(n,e,t){var r;let i=(r=e_[n])!==null&&r!==void 0?r:n;t&&(i+=`-${t}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),sn.warn(a.join(" "));return}St(new it(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}function Sh(n,e){if(n!==null&&typeof n!="function")throw rt.create("invalid-log-argument");gp(n,e)}function bh(n){mp(n)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o_="firebase-heartbeat-database",a_=1,Fr="firebase-heartbeat-store";let Oo=null;function Ph(){return Oo||(Oo=Ap(o_,a_,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(Fr)}}}).catch(n=>{throw rt.create("idb-open",{originalErrorMessage:n.message})})),Oo}async function c_(n){try{return await(await Ph()).transaction(Fr).objectStore(Fr).get(Ch(n))}catch(e){if(e instanceof Xe)sn.warn(e.message);else{const t=rt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});sn.warn(t.message)}}}async function Tu(n,e){try{const r=(await Ph()).transaction(Fr,"readwrite");await r.objectStore(Fr).put(e,Ch(n)),await r.done}catch(t){if(t instanceof Xe)sn.warn(t.message);else{const r=rt.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});sn.warn(r.message)}}}function Ch(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u_=1024,l_=30*24*60*60*1e3;class h_{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new f_(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Au();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=l_}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Au(),{heartbeatsToSend:t,unsentEntries:r}=d_(this._heartbeatsCache.heartbeats),i=ss(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Au(){return new Date().toISOString().substring(0,10)}function d_(n,e=u_){const t=[];let r=n.slice();for(const i of n){const s=t.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Ru(t)>e){s.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),Ru(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class f_{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return yh()?ep().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await c_(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Tu(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Tu(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Ru(n){return ss(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m_(n){St(new it("platform-logger",e=>new bp(e),"PRIVATE")),St(new it("heartbeat",e=>new h_(e),"PRIVATE")),Le(Zo,wu,n),Le(Zo,wu,"esm2017"),Le("fire-js","")}m_("");const g_=Object.freeze(Object.defineProperty({__proto__:null,FirebaseError:Xe,SDK_VERSION:Mt,_DEFAULT_ENTRY_NAME:At,_addComponent:cs,_addOrOverwriteComponent:Th,_apps:Rt,_clearComponents:n_,_components:Lr,_getProvider:Ms,_registerComponent:St,_removeServiceInstance:t_,deleteApp:Rh,getApp:Ah,getApps:s_,initializeApp:Ls,onLog:Sh,registerVersion:Le,setLogLevel:bh},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p_{constructor(e,t){this._delegate=e,this.firebase=t,cs(e,new it("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),Rh(this._delegate)))}_getService(e,t=At){var r;this._delegate.checkDestroyed();const i=this._delegate.container.getProvider(e);return!i.isInitialized()&&((r=i.getComponent())===null||r===void 0?void 0:r.instantiationMode)==="EXPLICIT"&&i.initialize(),i.getImmediate({identifier:t})}_removeServiceInstance(e,t=At){this._delegate.container.getProvider(e).clearInstance(t)}_addComponent(e){cs(this._delegate,e)}_addOrOverwriteComponent(e){Th(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const __={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance."},Su=new pn("app-compat","Firebase",__);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y_(n){const e={},t={__esModule:!0,initializeApp:s,app:i,registerVersion:Le,setLogLevel:bh,onLog:Sh,apps:null,SDK_VERSION:Mt,INTERNAL:{registerComponent:a,removeApp:r,useAsService:c,modularAPIs:g_}};t.default=t,Object.defineProperty(t,"apps",{get:o});function r(u){delete e[u]}function i(u){if(u=u||At,!_u(e,u))throw Su.create("no-app",{appName:u});return e[u]}i.App=n;function s(u,l={}){const h=Ls(u,l);if(_u(e,h.name))return e[h.name];const d=new n(h,t);return e[h.name]=d,d}function o(){return Object.keys(e).map(u=>e[u])}function a(u){const l=u.name,h=l.replace("-compat","");if(St(u)&&u.type==="PUBLIC"){const d=(f=i())=>{if(typeof f[h]!="function")throw Su.create("invalid-app-argument",{appName:l});return f[h]()};u.serviceProps!==void 0&&os(d,u.serviceProps),t[h]=d,n.prototype[h]=function(...f){return this._getService.bind(this,l).apply(this,u.multipleInstances?f:[])}}return u.type==="PUBLIC"?t[h]:null}function c(u,l){return l==="serverAuth"?null:l}return t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dh(){const n=y_(p_);n.INTERNAL=Object.assign(Object.assign({},n.INTERNAL),{createFirebaseNamespace:Dh,extendNamespace:e,createSubscribe:Ih,ErrorFactory:pn,deepExtend:os});function e(t){os(n,t)}return n}const I_=Dh();/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bu=new Os("@firebase/app-compat"),v_="@firebase/app-compat",E_="0.2.19";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w_(n){Le(v_,E_,n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */if(Qg()&&self.firebase!==void 0){bu.warn(`
    Warning: Firebase is already defined in the global scope. Please make sure
    Firebase library is only loaded once.
  `);const n=self.firebase.SDK_VERSION;n&&n.indexOf("LITE")>=0&&bu.warn(`
    Warning: You are trying to load Firebase while using Firebase Performance standalone script.
    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
    `)}const Vh=I_;w_();var T_="firebase",A_="10.4.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Vh.registerVersion(T_,A_,"app-compat");var R_="firebase",S_="10.4.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Le(R_,S_,"app");function Ua(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(n);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(t[r[i]]=n[r[i]]);return t}function kh(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const b_=kh,Nh=new pn("auth","Firebase",kh());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const us=new Os("@firebase/auth");function P_(n,...e){us.logLevel<=N.WARN&&us.warn(`Auth (${Mt}): ${n}`,...e)}function Wi(n,...e){us.logLevel<=N.ERROR&&us.error(`Auth (${Mt}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function He(n,...e){throw Ba(n,...e)}function ze(n,...e){return Ba(n,...e)}function xh(n,e,t){const r=Object.assign(Object.assign({},b_()),{[e]:t});return new pn("auth","Firebase",r).create(e,{appName:n.name})}function C_(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&He(n,"argument-error"),xh(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Ba(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Nh.create(n,...e)}function C(n,e,...t){if(!n)throw Ba(e,...t)}function Ze(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Wi(e),new Error(e)}function st(n,e){n||Ze(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ea(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function D_(){return Pu()==="http:"||Pu()==="https:"}function Pu(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V_(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(D_()||Yg()||"connection"in navigator)?navigator.onLine:!0}function k_(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class li{constructor(e,t){this.shortDelay=e,this.longDelay=t,st(t>e,"Short delay should be less than long delay!"),this.isMobile=Wg()||Xg()}get(){return V_()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qa(n,e){st(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oh{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Ze("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Ze("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Ze("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N_={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x_=new li(3e4,6e4);function Mh(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function hi(n,e,t,r,i={}){return Lh(n,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=ui(Object.assign({key:n.config.apiKey},o)).slice(1),c=await n._getAdditionalHeaders();return c["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode),Oh.fetch()(Fh(n,n.config.apiHost,t,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},s))})}async function Lh(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},N_),e);try{const i=new M_(n),s=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Mi(n,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[c,u]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Mi(n,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Mi(n,"email-already-in-use",o);if(c==="USER_DISABLED")throw Mi(n,"user-disabled",o);const l=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw xh(n,l,u);He(n,l)}}catch(i){if(i instanceof Xe)throw i;He(n,"network-request-failed",{message:String(i)})}}async function O_(n,e,t,r,i={}){const s=await hi(n,e,t,r,i);return"mfaPendingCredential"in s&&He(n,"multi-factor-auth-required",{_serverResponse:s}),s}function Fh(n,e,t,r){const i=`${e}${t}?${r}`;return n.config.emulator?qa(n.config,i):`${n.config.apiScheme}://${i}`}class M_{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(ze(this.auth,"network-request-failed")),x_.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Mi(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const i=ze(n,e,r);return i.customData._tokenResponse=t,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function L_(n,e){return hi(n,"POST","/v1/accounts:delete",e)}async function F_(n,e){return hi(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cr(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function U_(n,e=!1){const t=$(n),r=await t.getIdToken(e),i=$a(r);C(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Cr(Mo(i.auth_time)),issuedAtTime:Cr(Mo(i.iat)),expirationTime:Cr(Mo(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Mo(n){return Number(n)*1e3}function $a(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return Wi("JWT malformed, contained fewer than 3 sections"),null;try{const i=gh(t);return i?JSON.parse(i):(Wi("Failed to decode base64 JWT payload"),null)}catch(i){return Wi("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function B_(n){const e=$a(n);return C(e,"internal-error"),C(typeof e.exp<"u","internal-error"),C(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ur(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof Xe&&q_(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function q_({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $_{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uh{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Cr(this.lastLoginAt),this.creationTime=Cr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ls(n){var e;const t=n.auth,r=await n.getIdToken(),i=await Ur(n,F_(t,{idToken:r}));C(i==null?void 0:i.users.length,t,"internal-error");const s=i.users[0];n._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?z_(s.providerUserInfo):[],a=G_(n.providerData,o),c=n.isAnonymous,u=!(n.email&&s.passwordHash)&&!(a!=null&&a.length),l=c?u:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Uh(s.createdAt,s.lastLoginAt),isAnonymous:l};Object.assign(n,h)}async function j_(n){const e=$(n);await ls(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function G_(n,e){return[...n.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function z_(n){return n.map(e=>{var{providerId:t}=e,r=Ua(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function K_(n,e){const t=await Lh(n,{},async()=>{const r=ui({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=n.config,o=Fh(n,i,"/v1/token",`key=${s}`),a=await n._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Oh.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Br{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){C(e.idToken,"internal-error"),C(typeof e.idToken<"u","internal-error"),C(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):B_(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return C(!this.accessToken||this.refreshToken,e,"user-token-expired"),!t&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:i,expiresIn:s}=await K_(e,t);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:i,expirationTime:s}=t,o=new Br;return r&&(C(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(C(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(C(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Br,this.toJSON())}_performRefresh(){return Ze("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dt(n,e){C(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class nn{constructor(e){var{uid:t,auth:r,stsTokenManager:i}=e,s=Ua(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new $_(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Uh(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await Ur(this,this.stsTokenManager.getToken(this.auth,e));return C(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return U_(this,e)}reload(){return j_(this)}_assign(e){this!==e&&(C(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new nn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){C(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await ls(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Ur(this,L_(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,i,s,o,a,c,u,l;const h=(r=t.displayName)!==null&&r!==void 0?r:void 0,d=(i=t.email)!==null&&i!==void 0?i:void 0,f=(s=t.phoneNumber)!==null&&s!==void 0?s:void 0,y=(o=t.photoURL)!==null&&o!==void 0?o:void 0,I=(a=t.tenantId)!==null&&a!==void 0?a:void 0,v=(c=t._redirectEventId)!==null&&c!==void 0?c:void 0,b=(u=t.createdAt)!==null&&u!==void 0?u:void 0,L=(l=t.lastLoginAt)!==null&&l!==void 0?l:void 0,{uid:k,emailVerified:G,isAnonymous:z,providerData:K,stsTokenManager:me}=t;C(k&&me,e,"internal-error");const ht=Br.fromJSON(this.name,me);C(typeof k=="string",e,"internal-error"),dt(h,e.name),dt(d,e.name),C(typeof G=="boolean",e,"internal-error"),C(typeof z=="boolean",e,"internal-error"),dt(f,e.name),dt(y,e.name),dt(I,e.name),dt(v,e.name),dt(b,e.name),dt(L,e.name);const gr=new nn({uid:k,auth:e,email:d,emailVerified:G,displayName:h,isAnonymous:z,photoURL:y,phoneNumber:f,tenantId:I,stsTokenManager:ht,createdAt:b,lastLoginAt:L});return K&&Array.isArray(K)&&(gr.providerData=K.map(Oi=>Object.assign({},Oi))),v&&(gr._redirectEventId=v),gr}static async _fromIdTokenResponse(e,t,r=!1){const i=new Br;i.updateFromServerResponse(t);const s=new nn({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await ls(s),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cu=new Map;function et(n){st(n instanceof Function,"Expected a class definition");let e=Cu.get(n);return e?(st(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Cu.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bh{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Bh.type="NONE";const Du=Bh;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hi(n,e,t){return`firebase:${n}:${e}:${t}`}class Fn{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Hi(this.userKey,i.apiKey,s),this.fullPersistenceKey=Hi("persistence",i.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?nn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Fn(et(Du),e,r);const i=(await Promise.all(t.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||et(Du);const o=Hi(r,e.config.apiKey,e.name);let a=null;for(const u of t)try{const l=await u._get(o);if(l){const h=nn._fromJSON(e,l);u!==s&&(a=h),s=u;break}}catch{}const c=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!c.length?new Fn(s,e,r):(s=c[0],a&&await s._set(o,a.toJSON()),await Promise.all(t.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Fn(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vu(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(jh(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(qh(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(zh(e))return"Blackberry";if(Kh(e))return"Webos";if(ja(e))return"Safari";if((e.includes("chrome/")||$h(e))&&!e.includes("edge/"))return"Chrome";if(Gh(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function qh(n=se()){return/firefox\//i.test(n)}function ja(n=se()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function $h(n=se()){return/crios\//i.test(n)}function jh(n=se()){return/iemobile/i.test(n)}function Gh(n=se()){return/android/i.test(n)}function zh(n=se()){return/blackberry/i.test(n)}function Kh(n=se()){return/webos/i.test(n)}function Fs(n=se()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function W_(n=se()){var e;return Fs(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function H_(){return Jg()&&document.documentMode===10}function Wh(n=se()){return Fs(n)||Gh(n)||Kh(n)||zh(n)||/windows phone/i.test(n)||jh(n)}function Q_(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hh(n,e=[]){let t;switch(n){case"Browser":t=Vu(se());break;case"Worker":t=`${Vu(se())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Mt}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y_{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=s=>new Promise((o,a)=>{try{const c=e(s);o(c)}catch(c){a(c)}});r.onAbort=t,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function X_(n,e={}){return hi(n,"GET","/v2/passwordPolicy",Mh(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J_=6;class Z_{constructor(e){var t,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=o.minPasswordLength)!==null&&t!==void 0?t:J_,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,i,s,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(t=c.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(i=c.containsLowercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(s=c.containsUppercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ey{constructor(e,t,r,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ku(this),this.idTokenSubscription=new ku(this),this.beforeStateQueue=new Y_(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Nh,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=et(t)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Fn.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var t;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,a=i==null?void 0:i._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(i=c.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return C(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await ls(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=k_()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?$(e):null;return t&&C(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&C(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(et(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await X_(this),t=new Z_(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new pn("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&et(e)||this._popupRedirectResolver;C(t,this,"argument-error"),this.redirectPersistenceManager=await Fn.create(this,[et(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};const s=typeof t=="function"?t:t.next.bind(t);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(C(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof t=="function"){const c=e.addObserver(t,r,i);return()=>{o=!0,c()}}else{const c=e.addObserver(t);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return C(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Hh(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&P_(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Us(n){return $(n)}class ku{constructor(e){this.auth=e,this.observer=null,this.addObserver=Ih(t=>this.observer=t)}get next(){return C(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ty(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}function ny(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=i=>{const s=ze("internal-error");s.customData=i,t(s)},r.type="text/javascript",r.charset="UTF-8",ty().appendChild(r)})}function ry(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iy(n,e){const t=Ms(n,"auth");if(t.isInitialized()){const i=t.getImmediate(),s=t.getOptions();if(as(s,e??{}))return i;He(i,"already-initialized")}return t.initialize({options:e})}function sy(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(et);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function oy(n,e,t){const r=Us(n);C(r._canInitEmulator,r,"emulator-config-failed"),C(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(t!=null&&t.disableWarnings),s=Qh(e),{host:o,port:a}=ay(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||cy()}function Qh(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function ay(n){const e=Qh(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Nu(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Nu(o)}}}function Nu(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function cy(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yh{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Ze("not implemented")}_getIdTokenResponse(e){return Ze("not implemented")}_linkToIdToken(e,t){return Ze("not implemented")}_getReauthenticationResolver(e){return Ze("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Un(n,e){return O_(n,"POST","/v1/accounts:signInWithIdp",Mh(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uy="http://localhost";class on extends Yh{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new on(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):He("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=t,s=Ua(t,["providerId","signInMethod"]);if(!r||!i)return null;const o=new on(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return Un(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Un(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Un(e,t)}buildRequest(){const e={requestUri:uy,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=ui(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ga{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di extends Ga{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt extends di{constructor(){super("facebook.com")}static credential(e){return on._fromParams({providerId:pt.PROVIDER_ID,signInMethod:pt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return pt.credentialFromTaggedObject(e)}static credentialFromError(e){return pt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return pt.credential(e.oauthAccessToken)}catch{return null}}}pt.FACEBOOK_SIGN_IN_METHOD="facebook.com";pt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je extends di{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return on._fromParams({providerId:Je.PROVIDER_ID,signInMethod:Je.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Je.credentialFromTaggedObject(e)}static credentialFromError(e){return Je.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return Je.credential(t,r)}catch{return null}}}Je.GOOGLE_SIGN_IN_METHOD="google.com";Je.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t extends di{constructor(){super("github.com")}static credential(e){return on._fromParams({providerId:_t.PROVIDER_ID,signInMethod:_t.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return _t.credentialFromTaggedObject(e)}static credentialFromError(e){return _t.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return _t.credential(e.oauthAccessToken)}catch{return null}}}_t.GITHUB_SIGN_IN_METHOD="github.com";_t.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt extends di{constructor(){super("twitter.com")}static credential(e,t){return on._fromParams({providerId:yt.PROVIDER_ID,signInMethod:yt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return yt.credentialFromTaggedObject(e)}static credentialFromError(e){return yt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return yt.credential(t,r)}catch{return null}}}yt.TWITTER_SIGN_IN_METHOD="twitter.com";yt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,i=!1){const s=await nn._fromIdTokenResponse(e,r,i),o=xu(r);return new zn({user:s,providerId:o,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const i=xu(r);return new zn({user:e,providerId:i,_tokenResponse:r,operationType:t})}}function xu(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hs extends Xe{constructor(e,t,r,i){var s;super(t.code,t.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,hs.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,i){return new hs(e,t,r,i)}}function Xh(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?hs._fromErrorAndOperation(n,s,e,r):s})}async function ly(n,e,t=!1){const r=await Ur(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return zn._forOperation(n,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hy(n,e,t=!1){const{auth:r}=n,i="reauthenticate";try{const s=await Ur(n,Xh(r,i,e,n),t);C(s.idToken,r,"internal-error");const o=$a(s.idToken);C(o,r,"internal-error");const{sub:a}=o;return C(n.uid===a,r,"user-mismatch"),zn._forOperation(n,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&He(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dy(n,e,t=!1){const r="signIn",i=await Xh(n,r,e),s=await zn._fromIdTokenResponse(n,r,i);return t||await n._updateCurrentUser(s.user),s}function fy(n,e,t,r){return $(n).onIdTokenChanged(e,t,r)}function my(n,e,t){return $(n).beforeAuthStateChanged(e,t)}const ds="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jh{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(ds,"1"),this.storage.removeItem(ds),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gy(){const n=se();return ja(n)||Fs(n)}const py=1e3,_y=10;class Zh extends Jh{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=gy()&&Q_(),this.fallbackToPolling=Wh(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),i=this.localCache[t];r!==i&&e(t,i,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!t)return}const i=()=>{const o=this.storage.getItem(r);!t&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);H_()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,_y):i()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},py)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Zh.type="LOCAL";const yy=Zh;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ed extends Jh{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}ed.type="SESSION";const td=ed;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Iy(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bs{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const r=new Bs(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:i,data:s}=t.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(t.origin,s)),c=await Iy(a);t.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:c})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Bs.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function za(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vy{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,c)=>{const u=za("",20);i.port1.start();const l=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(l),s=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(l),clearTimeout(s),c(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:t},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ke(){return window}function Ey(n){Ke().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nd(){return typeof Ke().WorkerGlobalScope<"u"&&typeof Ke().importScripts=="function"}async function wy(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Ty(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function Ay(){return nd()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rd="firebaseLocalStorageDb",Ry=1,fs="firebaseLocalStorage",id="fbase_key";class fi{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function qs(n,e){return n.transaction([fs],e?"readwrite":"readonly").objectStore(fs)}function Sy(){const n=indexedDB.deleteDatabase(rd);return new fi(n).toPromise()}function ta(){const n=indexedDB.open(rd,Ry);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(fs,{keyPath:id})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(fs)?e(r):(r.close(),await Sy(),e(await ta()))})})}async function Ou(n,e,t){const r=qs(n,!0).put({[id]:e,value:t});return new fi(r).toPromise()}async function by(n,e){const t=qs(n,!1).get(e),r=await new fi(t).toPromise();return r===void 0?null:r.value}function Mu(n,e){const t=qs(n,!0).delete(e);return new fi(t).toPromise()}const Py=800,Cy=3;class sd{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ta(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>Cy)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return nd()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Bs._getInstance(Ay()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await wy(),!this.activeServiceWorker)return;this.sender=new vy(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Ty()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ta();return await Ou(e,ds,"1"),await Mu(e,ds),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>Ou(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>by(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Mu(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=qs(i,!1).getAll();return new fi(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Py)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}sd.type="LOCAL";const Dy=sd;new li(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function od(n,e){return e?et(e):(C(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ka extends Yh{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Un(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Un(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Un(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Vy(n){return dy(n.auth,new Ka(n),n.bypassAuthState)}function ky(n){const{auth:e,user:t}=n;return C(t,e,"internal-error"),hy(t,new Ka(n),n.bypassAuthState)}async function Ny(n){const{auth:e,user:t}=n;return C(t,e,"internal-error"),ly(t,new Ka(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ad{constructor(e,t,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:t,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Vy;case"linkViaPopup":case"linkViaRedirect":return Ny;case"reauthViaPopup":case"reauthViaRedirect":return ky;default:He(this.auth,"internal-error")}}resolve(e){st(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){st(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xy=new li(2e3,1e4);class Mn extends ad{constructor(e,t,r,i,s){super(e,t,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Mn.currentPopupAction&&Mn.currentPopupAction.cancel(),Mn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return C(e,this.auth,"internal-error"),e}async onExecution(){st(this.filter.length===1,"Popup operations only handle one event");const e=za();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(ze(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(ze(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Mn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ze(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,xy.get())};e()}}Mn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oy="pendingRedirect",Qi=new Map;class My extends ad{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=Qi.get(this.auth._key());if(!e){try{const r=await Ly(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}Qi.set(this.auth._key(),e)}return this.bypassAuthState||Qi.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Ly(n,e){const t=ud(e),r=cd(n);if(!await r._isAvailable())return!1;const i=await r._get(t)==="true";return await r._remove(t),i}async function Fy(n,e){return cd(n)._set(ud(e),"true")}function Uy(n,e){Qi.set(n._key(),e)}function cd(n){return et(n._redirectPersistence)}function ud(n){return Hi(Oy,n.config.apiKey,n.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function By(n,e,t){return qy(n,e,t)}async function qy(n,e,t){const r=Us(n);C_(n,e,Ga),await r._initializationPromise;const i=od(r,t);return await Fy(i,r),i._openRedirect(r,e,"signInViaRedirect")}async function $y(n,e,t=!1){const r=Us(n),i=od(r,e),o=await new My(r,i,t).execute();return o&&!t&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jy=10*60*1e3;class Gy{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!zy(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!ld(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(ze(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=jy&&this.cachedEventUids.clear(),this.cachedEventUids.has(Lu(e))}saveEventToCache(e){this.cachedEventUids.add(Lu(e)),this.lastProcessedEventTime=Date.now()}}function Lu(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function ld({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function zy(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ld(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ky(n,e={}){return hi(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wy=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Hy=/^https?/;async function Qy(n){if(n.config.emulator)return;const{authorizedDomains:e}=await Ky(n);for(const t of e)try{if(Yy(t))return}catch{}He(n,"unauthorized-domain")}function Yy(n){const e=ea(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===r}if(!Hy.test(t))return!1;if(Wy.test(n))return r===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xy=new li(3e4,6e4);function Fu(){const n=Ke().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function Jy(n){return new Promise((e,t)=>{var r,i,s;function o(){Fu(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Fu(),t(ze(n,"network-request-failed"))},timeout:Xy.get()})}if(!((i=(r=Ke().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Ke().gapi)===null||s===void 0)&&s.load)o();else{const a=ry("iframefcb");return Ke()[a]=()=>{gapi.load?o():t(ze(n,"network-request-failed"))},ny(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>t(c))}}).catch(e=>{throw Yi=null,e})}let Yi=null;function Zy(n){return Yi=Yi||Jy(n),Yi}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eI=new li(5e3,15e3),tI="__/auth/iframe",nI="emulator/auth/iframe",rI={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},iI=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function sI(n){const e=n.config;C(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?qa(e,nI):`https://${n.config.authDomain}/${tI}`,r={apiKey:e.apiKey,appName:n.name,v:Mt},i=iI.get(n.config.apiHost);i&&(r.eid=i);const s=n._getFrameworks();return s.length&&(r.fw=s.join(",")),`${t}?${ui(r).slice(1)}`}async function oI(n){const e=await Zy(n),t=Ke().gapi;return C(t,n,"internal-error"),e.open({where:document.body,url:sI(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:rI,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=ze(n,"network-request-failed"),a=Ke().setTimeout(()=>{s(o)},eI.get());function c(){Ke().clearTimeout(a),i(r)}r.ping(c).then(c,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aI={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},cI=500,uI=600,lI="_blank",hI="http://localhost";class Uu{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function dI(n,e,t,r=cI,i=uI){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},aI),{width:r.toString(),height:i.toString(),top:s,left:o}),u=se().toLowerCase();t&&(a=$h(u)?lI:t),qh(u)&&(e=e||hI,c.scrollbars="yes");const l=Object.entries(c).reduce((d,[f,y])=>`${d}${f}=${y},`,"");if(W_(u)&&a!=="_self")return fI(e||"",a),new Uu(null);const h=window.open(e||"",a,l);C(h,n,"popup-blocked");try{h.focus()}catch{}return new Uu(h)}function fI(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mI="__/auth/handler",gI="emulator/auth/handler",pI=encodeURIComponent("fac");async function Bu(n,e,t,r,i,s){C(n.config.authDomain,n,"auth-domain-config-required"),C(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:Mt,eventId:i};if(e instanceof Ga){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",ip(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,h]of Object.entries(s||{}))o[l]=h}if(e instanceof di){const l=e.getScopes().filter(h=>h!=="");l.length>0&&(o.scopes=l.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];const c=await n._getAppCheckToken(),u=c?`#${pI}=${encodeURIComponent(c)}`:"";return`${_I(n)}?${ui(a).slice(1)}${u}`}function _I({config:n}){return n.emulator?qa(n,gI):`https://${n.authDomain}/${mI}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lo="webStorageSupport";class yI{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=td,this._completeRedirectFn=$y,this._overrideRedirectResult=Uy}async _openPopup(e,t,r,i){var s;st((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Bu(e,t,r,ea(),i);return dI(e,o,za())}async _openRedirect(e,t,r,i){await this._originValidation(e);const s=await Bu(e,t,r,ea(),i);return Ey(s),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:s}=this.eventManagers[t];return i?Promise.resolve(i):(st(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await oI(e),r=new Gy(e);return t.register("authEvent",i=>(C(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Lo,{type:Lo},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Lo];o!==void 0&&t(!!o),He(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Qy(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Wh()||ja()||Fs()}}const II=yI;var qu="@firebase/auth",$u="1.3.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vI{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){C(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EI(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function wI(n){St(new it("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;C(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Hh(n)},u=new ey(r,i,s,c);return sy(u,t),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),St(new it("auth-internal",e=>{const t=Us(e.getProvider("auth").getImmediate());return(r=>new vI(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Le(qu,$u,EI(n)),Le(qu,$u,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TI=5*60,AI=_h("authIdTokenMaxAge")||TI;let ju=null;const RI=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>AI)return;const i=t==null?void 0:t.token;ju!==i&&(ju=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function SI(n=Ah()){const e=Ms(n,"auth");if(e.isInitialized())return e.getImmediate();const t=iy(n,{popupRedirectResolver:II,persistence:[Dy,yy,td]}),r=_h("authTokenSyncURL");if(r){const s=RI(r);my(t,s,()=>s(t.currentUser)),fy(t,o=>s(o))}const i=Gg("auth");return i&&oy(t,`http://${i}`),t}wI("Browser");const bI={apiKey:"AIzaSyD7YSMCgQwNqI180eGLMjLhSfUvtPZMI6A",authDomain:"beebop-64a63.firebaseapp.com",projectId:"beebop-64a63",storageBucket:"beebop-64a63.appspot.com",messagingSenderId:"505033348294",appId:"G-C7JRG4JHYH",measurementId:{}.VITE_DGRAPH_ENDPOINT},PI=Ls(bI),CI=SI(PI),DI=new Je;var VI=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},T,Wa=Wa||{},P=VI||self;function $s(n){var e=typeof n;return e=e!="object"?e:n?Array.isArray(n)?"array":e:"null",e=="array"||e=="object"&&typeof n.length=="number"}function mi(n){var e=typeof n;return e=="object"&&n!=null||e=="function"}function kI(n){return Object.prototype.hasOwnProperty.call(n,Fo)&&n[Fo]||(n[Fo]=++NI)}var Fo="closure_uid_"+(1e9*Math.random()>>>0),NI=0;function xI(n,e,t){return n.call.apply(n.bind,arguments)}function OI(n,e,t){if(!n)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),n.apply(e,i)}}return function(){return n.apply(e,arguments)}}function ve(n,e,t){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?ve=xI:ve=OI,ve.apply(null,arguments)}function Li(n,e){var t=Array.prototype.slice.call(arguments,1);return function(){var r=t.slice();return r.push.apply(r,arguments),n.apply(this,r)}}function he(n,e){function t(){}t.prototype=e.prototype,n.$=e.prototype,n.prototype=new t,n.prototype.constructor=n,n.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function Lt(){this.s=this.s,this.o=this.o}var MI=0;Lt.prototype.s=!1;Lt.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),MI!=0)&&kI(this)};Lt.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const hd=Array.prototype.indexOf?function(n,e){return Array.prototype.indexOf.call(n,e,void 0)}:function(n,e){if(typeof n=="string")return typeof e!="string"||e.length!=1?-1:n.indexOf(e,0);for(let t=0;t<n.length;t++)if(t in n&&n[t]===e)return t;return-1};function Ha(n){const e=n.length;if(0<e){const t=Array(e);for(let r=0;r<e;r++)t[r]=n[r];return t}return[]}function Gu(n,e){for(let t=1;t<arguments.length;t++){const r=arguments[t];if($s(r)){const i=n.length||0,s=r.length||0;n.length=i+s;for(let o=0;o<s;o++)n[i+o]=r[o]}else n.push(r)}}function Ee(n,e){this.type=n,this.g=this.target=e,this.defaultPrevented=!1}Ee.prototype.h=function(){this.defaultPrevented=!0};var LI=function(){if(!P.addEventListener||!Object.defineProperty)return!1;var n=!1,e=Object.defineProperty({},"passive",{get:function(){n=!0}});try{P.addEventListener("test",()=>{},e),P.removeEventListener("test",()=>{},e)}catch{}return n}();function qr(n){return/^[\s\xa0]*$/.test(n)}function js(){var n=P.navigator;return n&&(n=n.userAgent)?n:""}function Be(n){return js().indexOf(n)!=-1}function Qa(n){return Qa[" "](n),n}Qa[" "]=function(){};function FI(n,e){var t=Dv;return Object.prototype.hasOwnProperty.call(t,n)?t[n]:t[n]=e(n)}var UI=Be("Opera"),Kn=Be("Trident")||Be("MSIE"),dd=Be("Edge"),na=dd||Kn,fd=Be("Gecko")&&!(js().toLowerCase().indexOf("webkit")!=-1&&!Be("Edge"))&&!(Be("Trident")||Be("MSIE"))&&!Be("Edge"),BI=js().toLowerCase().indexOf("webkit")!=-1&&!Be("Edge");function md(){var n=P.document;return n?n.documentMode:void 0}var ra;e:{var Uo="",Bo=function(){var n=js();if(fd)return/rv:([^\);]+)(\)|;)/.exec(n);if(dd)return/Edge\/([\d\.]+)/.exec(n);if(Kn)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(n);if(BI)return/WebKit\/(\S+)/.exec(n);if(UI)return/(?:Version)[ \/]?(\S+)/.exec(n)}();if(Bo&&(Uo=Bo?Bo[1]:""),Kn){var qo=md();if(qo!=null&&qo>parseFloat(Uo)){ra=String(qo);break e}}ra=Uo}var ia;if(P.document&&Kn){var zu=md();ia=zu||parseInt(ra,10)||void 0}else ia=void 0;var qI=ia;function $r(n,e){if(Ee.call(this,n?n.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,n){var t=this.type=n.type,r=n.changedTouches&&n.changedTouches.length?n.changedTouches[0]:null;if(this.target=n.target||n.srcElement,this.g=e,e=n.relatedTarget){if(fd){e:{try{Qa(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else t=="mouseover"?e=n.fromElement:t=="mouseout"&&(e=n.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=n.clientX!==void 0?n.clientX:n.pageX,this.clientY=n.clientY!==void 0?n.clientY:n.pageY,this.screenX=n.screenX||0,this.screenY=n.screenY||0),this.button=n.button,this.key=n.key||"",this.ctrlKey=n.ctrlKey,this.altKey=n.altKey,this.shiftKey=n.shiftKey,this.metaKey=n.metaKey,this.pointerId=n.pointerId||0,this.pointerType=typeof n.pointerType=="string"?n.pointerType:$I[n.pointerType]||"",this.state=n.state,this.i=n,n.defaultPrevented&&$r.$.h.call(this)}}he($r,Ee);var $I={2:"touch",3:"pen",4:"mouse"};$r.prototype.h=function(){$r.$.h.call(this);var n=this.i;n.preventDefault?n.preventDefault():n.returnValue=!1};var gi="closure_listenable_"+(1e6*Math.random()|0),jI=0;function GI(n,e,t,r,i){this.listener=n,this.proxy=null,this.src=e,this.type=t,this.capture=!!r,this.la=i,this.key=++jI,this.fa=this.ia=!1}function Gs(n){n.fa=!0,n.listener=null,n.proxy=null,n.src=null,n.la=null}function Ya(n,e,t){for(const r in n)e.call(t,n[r],r,n)}function zI(n,e){for(const t in n)e.call(void 0,n[t],t,n)}function gd(n){const e={};for(const t in n)e[t]=n[t];return e}const Ku="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function pd(n,e){let t,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(t in r)n[t]=r[t];for(let s=0;s<Ku.length;s++)t=Ku[s],Object.prototype.hasOwnProperty.call(r,t)&&(n[t]=r[t])}}function zs(n){this.src=n,this.g={},this.h=0}zs.prototype.add=function(n,e,t,r,i){var s=n.toString();n=this.g[s],n||(n=this.g[s]=[],this.h++);var o=oa(n,e,r,i);return-1<o?(e=n[o],t||(e.ia=!1)):(e=new GI(e,this.src,s,!!r,i),e.ia=t,n.push(e)),e};function sa(n,e){var t=e.type;if(t in n.g){var r=n.g[t],i=hd(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(Gs(e),n.g[t].length==0&&(delete n.g[t],n.h--))}}function oa(n,e,t,r){for(var i=0;i<n.length;++i){var s=n[i];if(!s.fa&&s.listener==e&&s.capture==!!t&&s.la==r)return i}return-1}var Xa="closure_lm_"+(1e6*Math.random()|0),$o={};function _d(n,e,t,r,i){if(r&&r.once)return Id(n,e,t,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)_d(n,e[s],t,r,i);return null}return t=ec(t),n&&n[gi]?n.O(e,t,mi(r)?!!r.capture:!!r,i):yd(n,e,t,!1,r,i)}function yd(n,e,t,r,i,s){if(!e)throw Error("Invalid event type");var o=mi(i)?!!i.capture:!!i,a=Za(n);if(a||(n[Xa]=a=new zs(n)),t=a.add(e,t,r,o,s),t.proxy)return t;if(r=KI(),t.proxy=r,r.src=n,r.listener=t,n.addEventListener)LI||(i=o),i===void 0&&(i=!1),n.addEventListener(e.toString(),r,i);else if(n.attachEvent)n.attachEvent(Ed(e.toString()),r);else if(n.addListener&&n.removeListener)n.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return t}function KI(){function n(t){return e.call(n.src,n.listener,t)}const e=WI;return n}function Id(n,e,t,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)Id(n,e[s],t,r,i);return null}return t=ec(t),n&&n[gi]?n.P(e,t,mi(r)?!!r.capture:!!r,i):yd(n,e,t,!0,r,i)}function vd(n,e,t,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)vd(n,e[s],t,r,i);else r=mi(r)?!!r.capture:!!r,t=ec(t),n&&n[gi]?(n=n.i,e=String(e).toString(),e in n.g&&(s=n.g[e],t=oa(s,t,r,i),-1<t&&(Gs(s[t]),Array.prototype.splice.call(s,t,1),s.length==0&&(delete n.g[e],n.h--)))):n&&(n=Za(n))&&(e=n.g[e.toString()],n=-1,e&&(n=oa(e,t,r,i)),(t=-1<n?e[n]:null)&&Ja(t))}function Ja(n){if(typeof n!="number"&&n&&!n.fa){var e=n.src;if(e&&e[gi])sa(e.i,n);else{var t=n.type,r=n.proxy;e.removeEventListener?e.removeEventListener(t,r,n.capture):e.detachEvent?e.detachEvent(Ed(t),r):e.addListener&&e.removeListener&&e.removeListener(r),(t=Za(e))?(sa(t,n),t.h==0&&(t.src=null,e[Xa]=null)):Gs(n)}}}function Ed(n){return n in $o?$o[n]:$o[n]="on"+n}function WI(n,e){if(n.fa)n=!0;else{e=new $r(e,this);var t=n.listener,r=n.la||n.src;n.ia&&Ja(n),n=t.call(r,e)}return n}function Za(n){return n=n[Xa],n instanceof zs?n:null}var jo="__closure_events_fn_"+(1e9*Math.random()>>>0);function ec(n){return typeof n=="function"?n:(n[jo]||(n[jo]=function(e){return n.handleEvent(e)}),n[jo])}function le(){Lt.call(this),this.i=new zs(this),this.S=this,this.J=null}he(le,Lt);le.prototype[gi]=!0;le.prototype.removeEventListener=function(n,e,t,r){vd(this,n,e,t,r)};function ye(n,e){var t,r=n.J;if(r)for(t=[];r;r=r.J)t.push(r);if(n=n.S,r=e.type||e,typeof e=="string")e=new Ee(e,n);else if(e instanceof Ee)e.target=e.target||n;else{var i=e;e=new Ee(r,n),pd(e,i)}if(i=!0,t)for(var s=t.length-1;0<=s;s--){var o=e.g=t[s];i=Fi(o,r,!0,e)&&i}if(o=e.g=n,i=Fi(o,r,!0,e)&&i,i=Fi(o,r,!1,e)&&i,t)for(s=0;s<t.length;s++)o=e.g=t[s],i=Fi(o,r,!1,e)&&i}le.prototype.N=function(){if(le.$.N.call(this),this.i){var n=this.i,e;for(e in n.g){for(var t=n.g[e],r=0;r<t.length;r++)Gs(t[r]);delete n.g[e],n.h--}}this.J=null};le.prototype.O=function(n,e,t,r){return this.i.add(String(n),e,!1,t,r)};le.prototype.P=function(n,e,t,r){return this.i.add(String(n),e,!0,t,r)};function Fi(n,e,t,r){if(e=n.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==t){var a=o.listener,c=o.la||o.src;o.ia&&sa(n.i,o),i=a.call(c,r)!==!1&&i}}return i&&!r.defaultPrevented}var tc=P.JSON.stringify;class HI{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function QI(){var n=nc;let e=null;return n.g&&(e=n.g,n.g=n.g.next,n.g||(n.h=null),e.next=null),e}class YI{constructor(){this.h=this.g=null}add(e,t){const r=wd.get();r.set(e,t),this.h?this.h.next=r:this.g=r,this.h=r}}var wd=new HI(()=>new XI,n=>n.reset());class XI{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function JI(n){var e=1;n=n.split(":");const t=[];for(;0<e&&n.length;)t.push(n.shift()),e--;return n.length&&t.push(n.join(":")),t}function ZI(n){P.setTimeout(()=>{throw n},0)}let jr,Gr=!1,nc=new YI,Td=()=>{const n=P.Promise.resolve(void 0);jr=()=>{n.then(ev)}};var ev=()=>{for(var n;n=QI();){try{n.h.call(n.g)}catch(t){ZI(t)}var e=wd;e.j(n),100>e.h&&(e.h++,n.next=e.g,e.g=n)}Gr=!1};function Ks(n,e){le.call(this),this.h=n||1,this.g=e||P,this.j=ve(this.qb,this),this.l=Date.now()}he(Ks,le);T=Ks.prototype;T.ga=!1;T.T=null;T.qb=function(){if(this.ga){var n=Date.now()-this.l;0<n&&n<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-n):(this.T&&(this.g.clearTimeout(this.T),this.T=null),ye(this,"tick"),this.ga&&(rc(this),this.start()))}};T.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function rc(n){n.ga=!1,n.T&&(n.g.clearTimeout(n.T),n.T=null)}T.N=function(){Ks.$.N.call(this),rc(this),delete this.g};function ic(n,e,t){if(typeof n=="function")t&&(n=ve(n,t));else if(n&&typeof n.handleEvent=="function")n=ve(n.handleEvent,n);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:P.setTimeout(n,e||0)}function Ad(n){n.g=ic(()=>{n.g=null,n.i&&(n.i=!1,Ad(n))},n.j);const e=n.h;n.h=null,n.m.apply(null,e)}class tv extends Lt{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Ad(this)}N(){super.N(),this.g&&(P.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function zr(n){Lt.call(this),this.h=n,this.g={}}he(zr,Lt);var Wu=[];function Rd(n,e,t,r){Array.isArray(t)||(t&&(Wu[0]=t.toString()),t=Wu);for(var i=0;i<t.length;i++){var s=_d(e,t[i],r||n.handleEvent,!1,n.h||n);if(!s)break;n.g[s.key]=s}}function Sd(n){Ya(n.g,function(e,t){this.g.hasOwnProperty(t)&&Ja(e)},n),n.g={}}zr.prototype.N=function(){zr.$.N.call(this),Sd(this)};zr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Ws(){this.g=!0}Ws.prototype.Ea=function(){this.g=!1};function nv(n,e,t,r,i,s){n.info(function(){if(n.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&h[1]=="type"?o+(l+"="+u+"&"):o+(l+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+t+`
`+o})}function rv(n,e,t,r,i,s,o){n.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+t+`
`+s+" "+o})}function Ln(n,e,t,r){n.info(function(){return"XMLHTTP TEXT ("+e+"): "+sv(n,t)+(r?" "+r:"")})}function iv(n,e){n.info(function(){return"TIMEOUT: "+e})}Ws.prototype.info=function(){};function sv(n,e){if(!n.g)return e;if(!e)return null;try{var t=JSON.parse(e);if(t){for(n=0;n<t.length;n++)if(Array.isArray(t[n])){var r=t[n];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return tc(t)}catch{return e}}var _n={},Hu=null;function Hs(){return Hu=Hu||new le}_n.Ta="serverreachability";function bd(n){Ee.call(this,_n.Ta,n)}he(bd,Ee);function Kr(n){const e=Hs();ye(e,new bd(e))}_n.STAT_EVENT="statevent";function Pd(n,e){Ee.call(this,_n.STAT_EVENT,n),this.stat=e}he(Pd,Ee);function Ae(n){const e=Hs();ye(e,new Pd(e,n))}_n.Ua="timingevent";function Cd(n,e){Ee.call(this,_n.Ua,n),this.size=e}he(Cd,Ee);function pi(n,e){if(typeof n!="function")throw Error("Fn must not be null and must be a function");return P.setTimeout(function(){n()},e)}var Qs={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},Dd={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function sc(){}sc.prototype.h=null;function Qu(n){return n.h||(n.h=n.i())}function Vd(){}var _i={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function oc(){Ee.call(this,"d")}he(oc,Ee);function ac(){Ee.call(this,"c")}he(ac,Ee);var aa;function Ys(){}he(Ys,sc);Ys.prototype.g=function(){return new XMLHttpRequest};Ys.prototype.i=function(){return{}};aa=new Ys;function yi(n,e,t,r){this.l=n,this.j=e,this.m=t,this.W=r||1,this.U=new zr(this),this.P=ov,n=na?125:void 0,this.V=new Ks(n),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new kd}function kd(){this.i=null,this.g="",this.h=!1}var ov=45e3,ca={},ms={};T=yi.prototype;T.setTimeout=function(n){this.P=n};function ua(n,e,t){n.L=1,n.v=Js(ot(e)),n.s=t,n.S=!0,Nd(n,null)}function Nd(n,e){n.G=Date.now(),Ii(n),n.A=ot(n.v);var t=n.A,r=n.W;Array.isArray(r)||(r=[String(r)]),qd(t.i,"t",r),n.C=0,t=n.l.J,n.h=new kd,n.g=uf(n.l,t?e:null,!n.s),0<n.O&&(n.M=new tv(ve(n.Pa,n,n.g),n.O)),Rd(n.U,n.g,"readystatechange",n.nb),e=n.I?gd(n.I):{},n.s?(n.u||(n.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",n.g.ha(n.A,n.u,n.s,e)):(n.u="GET",n.g.ha(n.A,n.u,null,e)),Kr(),nv(n.j,n.u,n.A,n.m,n.W,n.s)}T.nb=function(n){n=n.target;const e=this.M;e&&qe(n)==3?e.l():this.Pa(n)};T.Pa=function(n){try{if(n==this.g)e:{const l=qe(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>l)&&(l!=3||na||this.g&&(this.h.h||this.g.ja()||Zu(this.g)))){this.J||l!=4||e==7||(e==8||0>=h?Kr(3):Kr(2)),Xs(this);var t=this.g.da();this.ca=t;t:if(xd(this)){var r=Zu(this.g);n="";var i=r.length,s=qe(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Jt(this),Dr(this);var o="";break t}this.h.i=new P.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,n+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=n,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=t==200,rv(this.j,this.u,this.A,this.m,this.W,l,t),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!qr(a)){var u=a;break t}}u=null}if(t=u)Ln(this.j,this.m,t,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,la(this,t);else{this.i=!1,this.o=3,Ae(12),Jt(this),Dr(this);break e}}this.S?(Od(this,l,o),na&&this.i&&l==3&&(Rd(this.U,this.V,"tick",this.mb),this.V.start())):(Ln(this.j,this.m,o,null),la(this,o)),l==4&&Jt(this),this.i&&!this.J&&(l==4?sf(this.l,this):(this.i=!1,Ii(this)))}else bv(this.g),t==400&&0<o.indexOf("Unknown SID")?(this.o=3,Ae(12)):(this.o=0,Ae(13)),Jt(this),Dr(this)}}}catch{}finally{}};function xd(n){return n.g?n.u=="GET"&&n.L!=2&&n.l.Ha:!1}function Od(n,e,t){let r=!0,i;for(;!n.J&&n.C<t.length;)if(i=av(n,t),i==ms){e==4&&(n.o=4,Ae(14),r=!1),Ln(n.j,n.m,null,"[Incomplete Response]");break}else if(i==ca){n.o=4,Ae(15),Ln(n.j,n.m,t,"[Invalid Chunk]"),r=!1;break}else Ln(n.j,n.m,i,null),la(n,i);xd(n)&&i!=ms&&i!=ca&&(n.h.g="",n.C=0),e!=4||t.length!=0||n.h.h||(n.o=1,Ae(16),r=!1),n.i=n.i&&r,r?0<t.length&&!n.ba&&(n.ba=!0,e=n.l,e.g==n&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+t.length),fc(e),e.M=!0,Ae(11))):(Ln(n.j,n.m,t,"[Invalid Chunked Response]"),Jt(n),Dr(n))}T.mb=function(){if(this.g){var n=qe(this.g),e=this.g.ja();this.C<e.length&&(Xs(this),Od(this,n,e),this.i&&n!=4&&Ii(this))}};function av(n,e){var t=n.C,r=e.indexOf(`
`,t);return r==-1?ms:(t=Number(e.substring(t,r)),isNaN(t)?ca:(r+=1,r+t>e.length?ms:(e=e.slice(r,r+t),n.C=r+t,e)))}T.cancel=function(){this.J=!0,Jt(this)};function Ii(n){n.Y=Date.now()+n.P,Md(n,n.P)}function Md(n,e){if(n.B!=null)throw Error("WatchDog timer not null");n.B=pi(ve(n.lb,n),e)}function Xs(n){n.B&&(P.clearTimeout(n.B),n.B=null)}T.lb=function(){this.B=null;const n=Date.now();0<=n-this.Y?(iv(this.j,this.A),this.L!=2&&(Kr(),Ae(17)),Jt(this),this.o=2,Dr(this)):Md(this,this.Y-n)};function Dr(n){n.l.H==0||n.J||sf(n.l,n)}function Jt(n){Xs(n);var e=n.M;e&&typeof e.sa=="function"&&e.sa(),n.M=null,rc(n.V),Sd(n.U),n.g&&(e=n.g,n.g=null,e.abort(),e.sa())}function la(n,e){try{var t=n.l;if(t.H!=0&&(t.g==n||ha(t.i,n))){if(!n.K&&ha(t.i,n)&&t.H==3){try{var r=t.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!t.u){if(t.g)if(t.g.G+3e3<n.G)_s(t),no(t);else break e;dc(t),Ae(18)}}else t.Fa=i[1],0<t.Fa-t.V&&37500>i[2]&&t.G&&t.A==0&&!t.v&&(t.v=pi(ve(t.ib,t),6e3));if(1>=Gd(t.i)&&t.oa){try{t.oa()}catch{}t.oa=void 0}}else Zt(t,11)}else if((n.K||t.g==n)&&_s(t),!qr(e))for(i=t.Ja.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(t.V=u[0],u=u[1],t.H==2)if(u[0]=="c"){t.K=u[1],t.pa=u[2];const l=u[3];l!=null&&(t.ra=l,t.l.info("VER="+t.ra));const h=u[4];h!=null&&(t.Ga=h,t.l.info("SVER="+t.Ga));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,t.L=r,t.l.info("backChannelRequestTimeoutMs_="+r)),r=t;const f=n.g;if(f){const y=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(y){var s=r.i;s.g||y.indexOf("spdy")==-1&&y.indexOf("quic")==-1&&y.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(cc(s,s.h),s.h=null))}if(r.F){const I=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;I&&(r.Da=I,W(r.I,r.F,I))}}t.H=3,t.h&&t.h.Ba(),t.ca&&(t.S=Date.now()-n.G,t.l.info("Handshake RTT: "+t.S+"ms")),r=t;var o=n;if(r.wa=cf(r,r.J?r.pa:null,r.Y),o.K){zd(r.i,o);var a=o,c=r.L;c&&a.setTimeout(c),a.B&&(Xs(a),Ii(a)),r.g=o}else nf(r);0<t.j.length&&ro(t)}else u[0]!="stop"&&u[0]!="close"||Zt(t,7);else t.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?Zt(t,7):hc(t):u[0]!="noop"&&t.h&&t.h.Aa(u),t.A=0)}}Kr(4)}catch{}}function cv(n){if(n.Z&&typeof n.Z=="function")return n.Z();if(typeof Map<"u"&&n instanceof Map||typeof Set<"u"&&n instanceof Set)return Array.from(n.values());if(typeof n=="string")return n.split("");if($s(n)){for(var e=[],t=n.length,r=0;r<t;r++)e.push(n[r]);return e}e=[],t=0;for(r in n)e[t++]=n[r];return e}function uv(n){if(n.ta&&typeof n.ta=="function")return n.ta();if(!n.Z||typeof n.Z!="function"){if(typeof Map<"u"&&n instanceof Map)return Array.from(n.keys());if(!(typeof Set<"u"&&n instanceof Set)){if($s(n)||typeof n=="string"){var e=[];n=n.length;for(var t=0;t<n;t++)e.push(t);return e}e=[],t=0;for(const r in n)e[t++]=r;return e}}}function Ld(n,e){if(n.forEach&&typeof n.forEach=="function")n.forEach(e,void 0);else if($s(n)||typeof n=="string")Array.prototype.forEach.call(n,e,void 0);else for(var t=uv(n),r=cv(n),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],t&&t[s],n)}var Fd=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function lv(n,e){if(n){n=n.split("&");for(var t=0;t<n.length;t++){var r=n[t].indexOf("="),i=null;if(0<=r){var s=n[t].substring(0,r);i=n[t].substring(r+1)}else s=n[t];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function rn(n){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,n instanceof rn){this.h=n.h,gs(this,n.j),this.s=n.s,this.g=n.g,ps(this,n.m),this.l=n.l;var e=n.i,t=new Wr;t.i=e.i,e.g&&(t.g=new Map(e.g),t.h=e.h),Yu(this,t),this.o=n.o}else n&&(e=String(n).match(Fd))?(this.h=!1,gs(this,e[1]||"",!0),this.s=Ar(e[2]||""),this.g=Ar(e[3]||"",!0),ps(this,e[4]),this.l=Ar(e[5]||"",!0),Yu(this,e[6]||"",!0),this.o=Ar(e[7]||"")):(this.h=!1,this.i=new Wr(null,this.h))}rn.prototype.toString=function(){var n=[],e=this.j;e&&n.push(Rr(e,Xu,!0),":");var t=this.g;return(t||e=="file")&&(n.push("//"),(e=this.s)&&n.push(Rr(e,Xu,!0),"@"),n.push(encodeURIComponent(String(t)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t=this.m,t!=null&&n.push(":",String(t))),(t=this.l)&&(this.g&&t.charAt(0)!="/"&&n.push("/"),n.push(Rr(t,t.charAt(0)=="/"?fv:dv,!0))),(t=this.i.toString())&&n.push("?",t),(t=this.o)&&n.push("#",Rr(t,gv)),n.join("")};function ot(n){return new rn(n)}function gs(n,e,t){n.j=t?Ar(e,!0):e,n.j&&(n.j=n.j.replace(/:$/,""))}function ps(n,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);n.m=e}else n.m=null}function Yu(n,e,t){e instanceof Wr?(n.i=e,pv(n.i,n.h)):(t||(e=Rr(e,mv)),n.i=new Wr(e,n.h))}function W(n,e,t){n.i.set(e,t)}function Js(n){return W(n,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),n}function Ar(n,e){return n?e?decodeURI(n.replace(/%25/g,"%2525")):decodeURIComponent(n):""}function Rr(n,e,t){return typeof n=="string"?(n=encodeURI(n).replace(e,hv),t&&(n=n.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n):null}function hv(n){return n=n.charCodeAt(0),"%"+(n>>4&15).toString(16)+(n&15).toString(16)}var Xu=/[#\/\?@]/g,dv=/[#\?:]/g,fv=/[#\?]/g,mv=/[#\?@]/g,gv=/#/g;function Wr(n,e){this.h=this.g=null,this.i=n||null,this.j=!!e}function Ft(n){n.g||(n.g=new Map,n.h=0,n.i&&lv(n.i,function(e,t){n.add(decodeURIComponent(e.replace(/\+/g," ")),t)}))}T=Wr.prototype;T.add=function(n,e){Ft(this),this.i=null,n=sr(this,n);var t=this.g.get(n);return t||this.g.set(n,t=[]),t.push(e),this.h+=1,this};function Ud(n,e){Ft(n),e=sr(n,e),n.g.has(e)&&(n.i=null,n.h-=n.g.get(e).length,n.g.delete(e))}function Bd(n,e){return Ft(n),e=sr(n,e),n.g.has(e)}T.forEach=function(n,e){Ft(this),this.g.forEach(function(t,r){t.forEach(function(i){n.call(e,i,r,this)},this)},this)};T.ta=function(){Ft(this);const n=Array.from(this.g.values()),e=Array.from(this.g.keys()),t=[];for(let r=0;r<e.length;r++){const i=n[r];for(let s=0;s<i.length;s++)t.push(e[r])}return t};T.Z=function(n){Ft(this);let e=[];if(typeof n=="string")Bd(this,n)&&(e=e.concat(this.g.get(sr(this,n))));else{n=Array.from(this.g.values());for(let t=0;t<n.length;t++)e=e.concat(n[t])}return e};T.set=function(n,e){return Ft(this),this.i=null,n=sr(this,n),Bd(this,n)&&(this.h-=this.g.get(n).length),this.g.set(n,[e]),this.h+=1,this};T.get=function(n,e){return n?(n=this.Z(n),0<n.length?String(n[0]):e):e};function qd(n,e,t){Ud(n,e),0<t.length&&(n.i=null,n.g.set(sr(n,e),Ha(t)),n.h+=t.length)}T.toString=function(){if(this.i)return this.i;if(!this.g)return"";const n=[],e=Array.from(this.g.keys());for(var t=0;t<e.length;t++){var r=e[t];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),n.push(i)}}return this.i=n.join("&")};function sr(n,e){return e=String(e),n.j&&(e=e.toLowerCase()),e}function pv(n,e){e&&!n.j&&(Ft(n),n.i=null,n.g.forEach(function(t,r){var i=r.toLowerCase();r!=i&&(Ud(this,r),qd(this,i,t))},n)),n.j=e}var _v=class{constructor(n,e){this.g=n,this.map=e}};function $d(n){this.l=n||yv,P.PerformanceNavigationTiming?(n=P.performance.getEntriesByType("navigation"),n=0<n.length&&(n[0].nextHopProtocol=="hq"||n[0].nextHopProtocol=="h2")):n=!!(P.g&&P.g.Ka&&P.g.Ka()&&P.g.Ka().dc),this.j=n?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var yv=10;function jd(n){return n.h?!0:n.g?n.g.size>=n.j:!1}function Gd(n){return n.h?1:n.g?n.g.size:0}function ha(n,e){return n.h?n.h==e:n.g?n.g.has(e):!1}function cc(n,e){n.g?n.g.add(e):n.h=e}function zd(n,e){n.h&&n.h==e?n.h=null:n.g&&n.g.has(e)&&n.g.delete(e)}$d.prototype.cancel=function(){if(this.i=Kd(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const n of this.g.values())n.cancel();this.g.clear()}};function Kd(n){if(n.h!=null)return n.i.concat(n.h.F);if(n.g!=null&&n.g.size!==0){let e=n.i;for(const t of n.g.values())e=e.concat(t.F);return e}return Ha(n.i)}var Iv=class{stringify(n){return P.JSON.stringify(n,void 0)}parse(n){return P.JSON.parse(n,void 0)}};function vv(){this.g=new Iv}function Ev(n,e,t){const r=t||"";try{Ld(n,function(i,s){let o=i;mi(i)&&(o=tc(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function wv(n,e){const t=new Ws;if(P.Image){const r=new Image;r.onload=Li(Ui,t,r,"TestLoadImage: loaded",!0,e),r.onerror=Li(Ui,t,r,"TestLoadImage: error",!1,e),r.onabort=Li(Ui,t,r,"TestLoadImage: abort",!1,e),r.ontimeout=Li(Ui,t,r,"TestLoadImage: timeout",!1,e),P.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=n}else e(!1)}function Ui(n,e,t,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function Zs(n){this.l=n.ec||null,this.j=n.ob||!1}he(Zs,sc);Zs.prototype.g=function(){return new eo(this.l,this.j)};Zs.prototype.i=function(n){return function(){return n}}({});function eo(n,e){le.call(this),this.F=n,this.u=e,this.m=void 0,this.readyState=uc,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}he(eo,le);var uc=0;T=eo.prototype;T.open=function(n,e){if(this.readyState!=uc)throw this.abort(),Error("Error reopening a connection");this.C=n,this.B=e,this.readyState=1,Hr(this)};T.send=function(n){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};n&&(e.body=n),(this.F||P).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};T.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,vi(this)),this.readyState=uc};T.$a=function(n){if(this.g&&(this.l=n,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=n.headers,this.readyState=2,Hr(this)),this.g&&(this.readyState=3,Hr(this),this.g)))if(this.responseType==="arraybuffer")n.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof P.ReadableStream<"u"&&"body"in n){if(this.j=n.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Wd(this)}else n.text().then(this.Za.bind(this),this.ka.bind(this))};function Wd(n){n.j.read().then(n.Xa.bind(n)).catch(n.ka.bind(n))}T.Xa=function(n){if(this.g){if(this.u&&n.value)this.response.push(n.value);else if(!this.u){var e=n.value?n.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!n.done}))&&(this.response=this.responseText+=e)}n.done?vi(this):Hr(this),this.readyState==3&&Wd(this)}};T.Za=function(n){this.g&&(this.response=this.responseText=n,vi(this))};T.Ya=function(n){this.g&&(this.response=n,vi(this))};T.ka=function(){this.g&&vi(this)};function vi(n){n.readyState=4,n.l=null,n.j=null,n.A=null,Hr(n)}T.setRequestHeader=function(n,e){this.v.append(n,e)};T.getResponseHeader=function(n){return this.h&&this.h.get(n.toLowerCase())||""};T.getAllResponseHeaders=function(){if(!this.h)return"";const n=[],e=this.h.entries();for(var t=e.next();!t.done;)t=t.value,n.push(t[0]+": "+t[1]),t=e.next();return n.join(`\r
`)};function Hr(n){n.onreadystatechange&&n.onreadystatechange.call(n)}Object.defineProperty(eo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(n){this.m=n?"include":"same-origin"}});var Tv=P.JSON.parse;function ee(n){le.call(this),this.headers=new Map,this.u=n||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Hd,this.L=this.M=!1}he(ee,le);var Hd="",Av=/^https?$/i,Rv=["POST","PUT"];T=ee.prototype;T.Oa=function(n){this.M=n};T.ha=function(n,e,t,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+n);e=e?e.toUpperCase():"GET",this.I=n,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():aa.g(),this.C=this.u?Qu(this.u):Qu(aa),this.g.onreadystatechange=ve(this.La,this);try{this.G=!0,this.g.open(e,String(n),!0),this.G=!1}catch(s){Ju(this,s);return}if(n=t||"",t=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)t.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())t.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(t.keys()).find(s=>s.toLowerCase()=="content-type"),i=P.FormData&&n instanceof P.FormData,!(0<=hd(Rv,e))||r||i||t.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of t)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Xd(this),0<this.B&&((this.L=Sv(this.g))?(this.g.timeout=this.B,this.g.ontimeout=ve(this.ua,this)):this.A=ic(this.ua,this.B,this)),this.v=!0,this.g.send(n),this.v=!1}catch(s){Ju(this,s)}};function Sv(n){return Kn&&typeof n.timeout=="number"&&n.ontimeout!==void 0}T.ua=function(){typeof Wa<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,ye(this,"timeout"),this.abort(8))};function Ju(n,e){n.h=!1,n.g&&(n.l=!0,n.g.abort(),n.l=!1),n.j=e,n.m=5,Qd(n),to(n)}function Qd(n){n.F||(n.F=!0,ye(n,"complete"),ye(n,"error"))}T.abort=function(n){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=n||7,ye(this,"complete"),ye(this,"abort"),to(this))};T.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),to(this,!0)),ee.$.N.call(this)};T.La=function(){this.s||(this.G||this.v||this.l?Yd(this):this.kb())};T.kb=function(){Yd(this)};function Yd(n){if(n.h&&typeof Wa<"u"&&(!n.C[1]||qe(n)!=4||n.da()!=2)){if(n.v&&qe(n)==4)ic(n.La,0,n);else if(ye(n,"readystatechange"),qe(n)==4){n.h=!1;try{const o=n.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var t;if(!(t=e)){var r;if(r=o===0){var i=String(n.I).match(Fd)[1]||null;!i&&P.self&&P.self.location&&(i=P.self.location.protocol.slice(0,-1)),r=!Av.test(i?i.toLowerCase():"")}t=r}if(t)ye(n,"complete"),ye(n,"success");else{n.m=6;try{var s=2<qe(n)?n.g.statusText:""}catch{s=""}n.j=s+" ["+n.da()+"]",Qd(n)}}finally{to(n)}}}}function to(n,e){if(n.g){Xd(n);const t=n.g,r=n.C[0]?()=>{}:null;n.g=null,n.C=null,e||ye(n,"ready");try{t.onreadystatechange=r}catch{}}}function Xd(n){n.g&&n.L&&(n.g.ontimeout=null),n.A&&(P.clearTimeout(n.A),n.A=null)}T.isActive=function(){return!!this.g};function qe(n){return n.g?n.g.readyState:0}T.da=function(){try{return 2<qe(this)?this.g.status:-1}catch{return-1}};T.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};T.Wa=function(n){if(this.g){var e=this.g.responseText;return n&&e.indexOf(n)==0&&(e=e.substring(n.length)),Tv(e)}};function Zu(n){try{if(!n.g)return null;if("response"in n.g)return n.g.response;switch(n.K){case Hd:case"text":return n.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in n.g)return n.g.mozResponseArrayBuffer}return null}catch{return null}}function bv(n){const e={};n=(n.g&&2<=qe(n)&&n.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<n.length;r++){if(qr(n[r]))continue;var t=JI(n[r]);const i=t[0];if(t=t[1],typeof t!="string")continue;t=t.trim();const s=e[i]||[];e[i]=s,s.push(t)}zI(e,function(r){return r.join(", ")})}T.Ia=function(){return this.m};T.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Jd(n){let e="";return Ya(n,function(t,r){e+=r,e+=":",e+=t,e+=`\r
`}),e}function lc(n,e,t){e:{for(r in t){var r=!1;break e}r=!0}r||(t=Jd(t),typeof n=="string"?t!=null&&encodeURIComponent(String(t)):W(n,e,t))}function _r(n,e,t){return t&&t.internalChannelParams&&t.internalChannelParams[n]||e}function Zd(n){this.Ga=0,this.j=[],this.l=new Ws,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=_r("failFast",!1,n),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=_r("baseRetryDelayMs",5e3,n),this.hb=_r("retryDelaySeedMs",1e4,n),this.eb=_r("forwardChannelMaxRetries",2,n),this.xa=_r("forwardChannelRequestTimeoutMs",2e4,n),this.va=n&&n.xmlHttpFactory||void 0,this.Ha=n&&n.useFetchStreams||!1,this.L=void 0,this.J=n&&n.supportsCrossDomainXhr||!1,this.K="",this.i=new $d(n&&n.concurrentRequestLimit),this.Ja=new vv,this.P=n&&n.fastHandshake||!1,this.O=n&&n.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=n&&n.bc||!1,n&&n.Ea&&this.l.Ea(),n&&n.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&n&&n.detectBufferingProxy||!1,this.qa=void 0,n&&n.longPollingTimeout&&0<n.longPollingTimeout&&(this.qa=n.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}T=Zd.prototype;T.ra=8;T.H=1;function hc(n){if(ef(n),n.H==3){var e=n.W++,t=ot(n.I);if(W(t,"SID",n.K),W(t,"RID",e),W(t,"TYPE","terminate"),Ei(n,t),e=new yi(n,n.l,e),e.L=2,e.v=Js(ot(t)),t=!1,P.navigator&&P.navigator.sendBeacon)try{t=P.navigator.sendBeacon(e.v.toString(),"")}catch{}!t&&P.Image&&(new Image().src=e.v,t=!0),t||(e.g=uf(e.l,null),e.g.ha(e.v)),e.G=Date.now(),Ii(e)}af(n)}function no(n){n.g&&(fc(n),n.g.cancel(),n.g=null)}function ef(n){no(n),n.u&&(P.clearTimeout(n.u),n.u=null),_s(n),n.i.cancel(),n.m&&(typeof n.m=="number"&&P.clearTimeout(n.m),n.m=null)}function ro(n){if(!jd(n.i)&&!n.m){n.m=!0;var e=n.Na;jr||Td(),Gr||(jr(),Gr=!0),nc.add(e,n),n.C=0}}function Pv(n,e){return Gd(n.i)>=n.i.j-(n.m?1:0)?!1:n.m?(n.j=e.F.concat(n.j),!0):n.H==1||n.H==2||n.C>=(n.cb?0:n.eb)?!1:(n.m=pi(ve(n.Na,n,e),of(n,n.C)),n.C++,!0)}T.Na=function(n){if(this.m)if(this.m=null,this.H==1){if(!n){this.W=Math.floor(1e5*Math.random()),n=this.W++;const i=new yi(this,this.l,n);let s=this.s;if(this.U&&(s?(s=gd(s),pd(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var e=0,t=0;t<this.j.length;t++){t:{var r=this.j[t];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=t;break e}if(e===4096||t===this.j.length-1){e=t+1;break e}}e=1e3}else e=1e3;e=tf(this,i,e),t=ot(this.I),W(t,"RID",n),W(t,"CVER",22),this.F&&W(t,"X-HTTP-Session-Id",this.F),Ei(this,t),s&&(this.O?e="headers="+encodeURIComponent(String(Jd(s)))+"&"+e:this.o&&lc(t,this.o,s)),cc(this.i,i),this.bb&&W(t,"TYPE","init"),this.P?(W(t,"$req",e),W(t,"SID","null"),i.aa=!0,ua(i,t,null)):ua(i,t,e),this.H=2}}else this.H==3&&(n?el(this,n):this.j.length==0||jd(this.i)||el(this))};function el(n,e){var t;e?t=e.m:t=n.W++;const r=ot(n.I);W(r,"SID",n.K),W(r,"RID",t),W(r,"AID",n.V),Ei(n,r),n.o&&n.s&&lc(r,n.o,n.s),t=new yi(n,n.l,t,n.C+1),n.o===null&&(t.I=n.s),e&&(n.j=e.F.concat(n.j)),e=tf(n,t,1e3),t.setTimeout(Math.round(.5*n.xa)+Math.round(.5*n.xa*Math.random())),cc(n.i,t),ua(t,r,e)}function Ei(n,e){n.na&&Ya(n.na,function(t,r){W(e,r,t)}),n.h&&Ld({},function(t,r){W(e,r,t)})}function tf(n,e,t){t=Math.min(n.j.length,t);var r=n.h?ve(n.h.Va,n.h,n):null;e:{var i=n.j;let s=-1;for(;;){const o=["count="+t];s==-1?0<t?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let c=0;c<t;c++){let u=i[c].g;const l=i[c].map;if(u-=s,0>u)s=Math.max(0,i[c].g-100),a=!1;else try{Ev(l,o,"req"+u+"_")}catch{r&&r(l)}}if(a){r=o.join("&");break e}}}return n=n.j.splice(0,t),e.F=n,r}function nf(n){if(!n.g&&!n.u){n.ba=1;var e=n.Ma;jr||Td(),Gr||(jr(),Gr=!0),nc.add(e,n),n.A=0}}function dc(n){return n.g||n.u||3<=n.A?!1:(n.ba++,n.u=pi(ve(n.Ma,n),of(n,n.A)),n.A++,!0)}T.Ma=function(){if(this.u=null,rf(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var n=2*this.S;this.l.info("BP detection timer enabled: "+n),this.B=pi(ve(this.jb,this),n)}};T.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,Ae(10),no(this),rf(this))};function fc(n){n.B!=null&&(P.clearTimeout(n.B),n.B=null)}function rf(n){n.g=new yi(n,n.l,"rpc",n.ba),n.o===null&&(n.g.I=n.s),n.g.O=0;var e=ot(n.wa);W(e,"RID","rpc"),W(e,"SID",n.K),W(e,"AID",n.V),W(e,"CI",n.G?"0":"1"),!n.G&&n.qa&&W(e,"TO",n.qa),W(e,"TYPE","xmlhttp"),Ei(n,e),n.o&&n.s&&lc(e,n.o,n.s),n.L&&n.g.setTimeout(n.L);var t=n.g;n=n.pa,t.L=1,t.v=Js(ot(e)),t.s=null,t.S=!0,Nd(t,n)}T.ib=function(){this.v!=null&&(this.v=null,no(this),dc(this),Ae(19))};function _s(n){n.v!=null&&(P.clearTimeout(n.v),n.v=null)}function sf(n,e){var t=null;if(n.g==e){_s(n),fc(n),n.g=null;var r=2}else if(ha(n.i,e))t=e.F,zd(n.i,e),r=1;else return;if(n.H!=0){if(e.i)if(r==1){t=e.s?e.s.length:0,e=Date.now()-e.G;var i=n.C;r=Hs(),ye(r,new Cd(r,t)),ro(n)}else nf(n);else if(i=e.o,i==3||i==0&&0<e.ca||!(r==1&&Pv(n,e)||r==2&&dc(n)))switch(t&&0<t.length&&(e=n.i,e.i=e.i.concat(t)),i){case 1:Zt(n,5);break;case 4:Zt(n,10);break;case 3:Zt(n,6);break;default:Zt(n,2)}}}function of(n,e){let t=n.ab+Math.floor(Math.random()*n.hb);return n.isActive()||(t*=2),t*e}function Zt(n,e){if(n.l.info("Error code "+e),e==2){var t=null;n.h&&(t=null);var r=ve(n.pb,n);t||(t=new rn("//www.google.com/images/cleardot.gif"),P.location&&P.location.protocol=="http"||gs(t,"https"),Js(t)),wv(t.toString(),r)}else Ae(2);n.H=0,n.h&&n.h.za(e),af(n),ef(n)}T.pb=function(n){n?(this.l.info("Successfully pinged google.com"),Ae(2)):(this.l.info("Failed to ping google.com"),Ae(1))};function af(n){if(n.H=0,n.ma=[],n.h){const e=Kd(n.i);(e.length!=0||n.j.length!=0)&&(Gu(n.ma,e),Gu(n.ma,n.j),n.i.i.length=0,Ha(n.j),n.j.length=0),n.h.ya()}}function cf(n,e,t){var r=t instanceof rn?ot(t):new rn(t);if(r.g!="")e&&(r.g=e+"."+r.g),ps(r,r.m);else{var i=P.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new rn(null);r&&gs(s,r),e&&(s.g=e),i&&ps(s,i),t&&(s.l=t),r=s}return t=n.F,e=n.Da,t&&e&&W(r,t,e),W(r,"VER",n.ra),Ei(n,r),r}function uf(n,e,t){if(e&&!n.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=t&&n.Ha&&!n.va?new ee(new Zs({ob:!0})):new ee(n.va),e.Oa(n.J),e}T.isActive=function(){return!!this.h&&this.h.isActive(this)};function lf(){}T=lf.prototype;T.Ba=function(){};T.Aa=function(){};T.za=function(){};T.ya=function(){};T.isActive=function(){return!0};T.Va=function(){};function ys(){if(Kn&&!(10<=Number(qI)))throw Error("Environmental error: no available transport.")}ys.prototype.g=function(n,e){return new ke(n,e)};function ke(n,e){le.call(this),this.g=new Zd(e),this.l=n,this.h=e&&e.messageUrlParams||null,n=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(n?n["X-Client-Protocol"]="webchannel":n={"X-Client-Protocol":"webchannel"}),this.g.s=n,n=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(n?n["X-WebChannel-Content-Type"]=e.messageContentType:n={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(n?n["X-WebChannel-Client-Profile"]=e.Ca:n={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=n,(n=e&&e.cc)&&!qr(n)&&(this.g.o=n),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!qr(e)&&(this.g.F=e,n=this.h,n!==null&&e in n&&(n=this.h,e in n&&delete n[e])),this.j=new or(this)}he(ke,le);ke.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var n=this.g,e=this.l,t=this.h||void 0;Ae(0),n.Y=e,n.na=t||{},n.G=n.aa,n.I=cf(n,null,n.Y),ro(n)};ke.prototype.close=function(){hc(this.g)};ke.prototype.u=function(n){var e=this.g;if(typeof n=="string"){var t={};t.__data__=n,n=t}else this.v&&(t={},t.__data__=tc(n),n=t);e.j.push(new _v(e.fb++,n)),e.H==3&&ro(e)};ke.prototype.N=function(){this.g.h=null,delete this.j,hc(this.g),delete this.g,ke.$.N.call(this)};function hf(n){oc.call(this),n.__headers__&&(this.headers=n.__headers__,this.statusCode=n.__status__,delete n.__headers__,delete n.__status__);var e=n.__sm__;if(e){e:{for(const t in e){n=t;break e}n=void 0}(this.i=n)&&(n=this.i,e=e!==null&&n in e?e[n]:void 0),this.data=e}else this.data=n}he(hf,oc);function df(){ac.call(this),this.status=1}he(df,ac);function or(n){this.g=n}he(or,lf);or.prototype.Ba=function(){ye(this.g,"a")};or.prototype.Aa=function(n){ye(this.g,new hf(n))};or.prototype.za=function(n){ye(this.g,new df)};or.prototype.ya=function(){ye(this.g,"b")};function Cv(){this.blockSize=-1}function Fe(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}he(Fe,Cv);Fe.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Go(n,e,t){t||(t=0);var r=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)r[i]=e.charCodeAt(t++)|e.charCodeAt(t++)<<8|e.charCodeAt(t++)<<16|e.charCodeAt(t++)<<24;else for(i=0;16>i;++i)r[i]=e[t++]|e[t++]<<8|e[t++]<<16|e[t++]<<24;e=n.g[0],t=n.g[1],i=n.g[2];var s=n.g[3],o=e+(s^t&(i^s))+r[0]+3614090360&4294967295;e=t+(o<<7&4294967295|o>>>25),o=s+(i^e&(t^i))+r[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(t^s&(e^t))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=t+(e^i&(s^e))+r[3]+3250441966&4294967295,t=i+(o<<22&4294967295|o>>>10),o=e+(s^t&(i^s))+r[4]+4118548399&4294967295,e=t+(o<<7&4294967295|o>>>25),o=s+(i^e&(t^i))+r[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(t^s&(e^t))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=t+(e^i&(s^e))+r[7]+4249261313&4294967295,t=i+(o<<22&4294967295|o>>>10),o=e+(s^t&(i^s))+r[8]+1770035416&4294967295,e=t+(o<<7&4294967295|o>>>25),o=s+(i^e&(t^i))+r[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(t^s&(e^t))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=t+(e^i&(s^e))+r[11]+2304563134&4294967295,t=i+(o<<22&4294967295|o>>>10),o=e+(s^t&(i^s))+r[12]+1804603682&4294967295,e=t+(o<<7&4294967295|o>>>25),o=s+(i^e&(t^i))+r[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(t^s&(e^t))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=t+(e^i&(s^e))+r[15]+1236535329&4294967295,t=i+(o<<22&4294967295|o>>>10),o=e+(i^s&(t^i))+r[1]+4129170786&4294967295,e=t+(o<<5&4294967295|o>>>27),o=s+(t^i&(e^t))+r[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^t&(s^e))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=t+(s^e&(i^s))+r[0]+3921069994&4294967295,t=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(t^i))+r[5]+3593408605&4294967295,e=t+(o<<5&4294967295|o>>>27),o=s+(t^i&(e^t))+r[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^t&(s^e))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=t+(s^e&(i^s))+r[4]+3889429448&4294967295,t=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(t^i))+r[9]+568446438&4294967295,e=t+(o<<5&4294967295|o>>>27),o=s+(t^i&(e^t))+r[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^t&(s^e))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=t+(s^e&(i^s))+r[8]+1163531501&4294967295,t=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(t^i))+r[13]+2850285829&4294967295,e=t+(o<<5&4294967295|o>>>27),o=s+(t^i&(e^t))+r[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^t&(s^e))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=t+(s^e&(i^s))+r[12]+2368359562&4294967295,t=i+(o<<20&4294967295|o>>>12),o=e+(t^i^s)+r[5]+4294588738&4294967295,e=t+(o<<4&4294967295|o>>>28),o=s+(e^t^i)+r[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^t)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=t+(i^s^e)+r[14]+4259657740&4294967295,t=i+(o<<23&4294967295|o>>>9),o=e+(t^i^s)+r[1]+2763975236&4294967295,e=t+(o<<4&4294967295|o>>>28),o=s+(e^t^i)+r[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^t)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=t+(i^s^e)+r[10]+3200236656&4294967295,t=i+(o<<23&4294967295|o>>>9),o=e+(t^i^s)+r[13]+681279174&4294967295,e=t+(o<<4&4294967295|o>>>28),o=s+(e^t^i)+r[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^t)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=t+(i^s^e)+r[6]+76029189&4294967295,t=i+(o<<23&4294967295|o>>>9),o=e+(t^i^s)+r[9]+3654602809&4294967295,e=t+(o<<4&4294967295|o>>>28),o=s+(e^t^i)+r[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^t)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=t+(i^s^e)+r[2]+3299628645&4294967295,t=i+(o<<23&4294967295|o>>>9),o=e+(i^(t|~s))+r[0]+4096336452&4294967295,e=t+(o<<6&4294967295|o>>>26),o=s+(t^(e|~i))+r[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~t))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=t+(s^(i|~e))+r[5]+4237533241&4294967295,t=i+(o<<21&4294967295|o>>>11),o=e+(i^(t|~s))+r[12]+1700485571&4294967295,e=t+(o<<6&4294967295|o>>>26),o=s+(t^(e|~i))+r[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~t))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=t+(s^(i|~e))+r[1]+2240044497&4294967295,t=i+(o<<21&4294967295|o>>>11),o=e+(i^(t|~s))+r[8]+1873313359&4294967295,e=t+(o<<6&4294967295|o>>>26),o=s+(t^(e|~i))+r[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~t))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=t+(s^(i|~e))+r[13]+1309151649&4294967295,t=i+(o<<21&4294967295|o>>>11),o=e+(i^(t|~s))+r[4]+4149444226&4294967295,e=t+(o<<6&4294967295|o>>>26),o=s+(t^(e|~i))+r[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~t))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=t+(s^(i|~e))+r[9]+3951481745&4294967295,n.g[0]=n.g[0]+e&4294967295,n.g[1]=n.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,n.g[2]=n.g[2]+i&4294967295,n.g[3]=n.g[3]+s&4294967295}Fe.prototype.j=function(n,e){e===void 0&&(e=n.length);for(var t=e-this.blockSize,r=this.m,i=this.h,s=0;s<e;){if(i==0)for(;s<=t;)Go(this,n,s),s+=this.blockSize;if(typeof n=="string"){for(;s<e;)if(r[i++]=n.charCodeAt(s++),i==this.blockSize){Go(this,r),i=0;break}}else for(;s<e;)if(r[i++]=n[s++],i==this.blockSize){Go(this,r),i=0;break}}this.h=i,this.i+=e};Fe.prototype.l=function(){var n=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);n[0]=128;for(var e=1;e<n.length-8;++e)n[e]=0;var t=8*this.i;for(e=n.length-8;e<n.length;++e)n[e]=t&255,t/=256;for(this.j(n),n=Array(16),e=t=0;4>e;++e)for(var r=0;32>r;r+=8)n[t++]=this.g[e]>>>r&255;return n};function B(n,e){this.h=e;for(var t=[],r=!0,i=n.length-1;0<=i;i--){var s=n[i]|0;r&&s==e||(t[i]=s,r=!1)}this.g=t}var Dv={};function mc(n){return-128<=n&&128>n?FI(n,function(e){return new B([e|0],0>e?-1:0)}):new B([n|0],0>n?-1:0)}function $e(n){if(isNaN(n)||!isFinite(n))return Bn;if(0>n)return pe($e(-n));for(var e=[],t=1,r=0;n>=t;r++)e[r]=n/t|0,t*=da;return new B(e,0)}function ff(n,e){if(n.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(n.charAt(0)=="-")return pe(ff(n.substring(1),e));if(0<=n.indexOf("-"))throw Error('number format error: interior "-" character');for(var t=$e(Math.pow(e,8)),r=Bn,i=0;i<n.length;i+=8){var s=Math.min(8,n.length-i),o=parseInt(n.substring(i,i+s),e);8>s?(s=$e(Math.pow(e,s)),r=r.R(s).add($e(o))):(r=r.R(t),r=r.add($e(o)))}return r}var da=4294967296,Bn=mc(0),fa=mc(1),tl=mc(16777216);T=B.prototype;T.ea=function(){if(xe(this))return-pe(this).ea();for(var n=0,e=1,t=0;t<this.g.length;t++){var r=this.D(t);n+=(0<=r?r:da+r)*e,e*=da}return n};T.toString=function(n){if(n=n||10,2>n||36<n)throw Error("radix out of range: "+n);if(tt(this))return"0";if(xe(this))return"-"+pe(this).toString(n);for(var e=$e(Math.pow(n,6)),t=this,r="";;){var i=vs(t,e).g;t=Is(t,i.R(e));var s=((0<t.g.length?t.g[0]:t.h)>>>0).toString(n);if(t=i,tt(t))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};T.D=function(n){return 0>n?0:n<this.g.length?this.g[n]:this.h};function tt(n){if(n.h!=0)return!1;for(var e=0;e<n.g.length;e++)if(n.g[e]!=0)return!1;return!0}function xe(n){return n.h==-1}T.X=function(n){return n=Is(this,n),xe(n)?-1:tt(n)?0:1};function pe(n){for(var e=n.g.length,t=[],r=0;r<e;r++)t[r]=~n.g[r];return new B(t,~n.h).add(fa)}T.abs=function(){return xe(this)?pe(this):this};T.add=function(n){for(var e=Math.max(this.g.length,n.g.length),t=[],r=0,i=0;i<=e;i++){var s=r+(this.D(i)&65535)+(n.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(n.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,t[i]=o<<16|s}return new B(t,t[t.length-1]&-2147483648?-1:0)};function Is(n,e){return n.add(pe(e))}T.R=function(n){if(tt(this)||tt(n))return Bn;if(xe(this))return xe(n)?pe(this).R(pe(n)):pe(pe(this).R(n));if(xe(n))return pe(this.R(pe(n)));if(0>this.X(tl)&&0>n.X(tl))return $e(this.ea()*n.ea());for(var e=this.g.length+n.g.length,t=[],r=0;r<2*e;r++)t[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<n.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=n.D(i)>>>16,c=n.D(i)&65535;t[2*r+2*i]+=o*c,Bi(t,2*r+2*i),t[2*r+2*i+1]+=s*c,Bi(t,2*r+2*i+1),t[2*r+2*i+1]+=o*a,Bi(t,2*r+2*i+1),t[2*r+2*i+2]+=s*a,Bi(t,2*r+2*i+2)}for(r=0;r<e;r++)t[r]=t[2*r+1]<<16|t[2*r];for(r=e;r<2*e;r++)t[r]=0;return new B(t,0)};function Bi(n,e){for(;(n[e]&65535)!=n[e];)n[e+1]+=n[e]>>>16,n[e]&=65535,e++}function yr(n,e){this.g=n,this.h=e}function vs(n,e){if(tt(e))throw Error("division by zero");if(tt(n))return new yr(Bn,Bn);if(xe(n))return e=vs(pe(n),e),new yr(pe(e.g),pe(e.h));if(xe(e))return e=vs(n,pe(e)),new yr(pe(e.g),e.h);if(30<n.g.length){if(xe(n)||xe(e))throw Error("slowDivide_ only works with positive integers.");for(var t=fa,r=e;0>=r.X(n);)t=nl(t),r=nl(r);var i=Sn(t,1),s=Sn(r,1);for(r=Sn(r,2),t=Sn(t,2);!tt(r);){var o=s.add(r);0>=o.X(n)&&(i=i.add(t),s=o),r=Sn(r,1),t=Sn(t,1)}return e=Is(n,i.R(e)),new yr(i,e)}for(i=Bn;0<=n.X(e);){for(t=Math.max(1,Math.floor(n.ea()/e.ea())),r=Math.ceil(Math.log(t)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=$e(t),o=s.R(e);xe(o)||0<o.X(n);)t-=r,s=$e(t),o=s.R(e);tt(s)&&(s=fa),i=i.add(s),n=Is(n,o)}return new yr(i,n)}T.gb=function(n){return vs(this,n).h};T.and=function(n){for(var e=Math.max(this.g.length,n.g.length),t=[],r=0;r<e;r++)t[r]=this.D(r)&n.D(r);return new B(t,this.h&n.h)};T.or=function(n){for(var e=Math.max(this.g.length,n.g.length),t=[],r=0;r<e;r++)t[r]=this.D(r)|n.D(r);return new B(t,this.h|n.h)};T.xor=function(n){for(var e=Math.max(this.g.length,n.g.length),t=[],r=0;r<e;r++)t[r]=this.D(r)^n.D(r);return new B(t,this.h^n.h)};function nl(n){for(var e=n.g.length+1,t=[],r=0;r<e;r++)t[r]=n.D(r)<<1|n.D(r-1)>>>31;return new B(t,n.h)}function Sn(n,e){var t=e>>5;e%=32;for(var r=n.g.length-t,i=[],s=0;s<r;s++)i[s]=0<e?n.D(s+t)>>>e|n.D(s+t+1)<<32-e:n.D(s+t);return new B(i,n.h)}ys.prototype.createWebChannel=ys.prototype.g;ke.prototype.send=ke.prototype.u;ke.prototype.open=ke.prototype.m;ke.prototype.close=ke.prototype.close;Qs.NO_ERROR=0;Qs.TIMEOUT=8;Qs.HTTP_ERROR=6;Dd.COMPLETE="complete";Vd.EventType=_i;_i.OPEN="a";_i.CLOSE="b";_i.ERROR="c";_i.MESSAGE="d";le.prototype.listen=le.prototype.O;ee.prototype.listenOnce=ee.prototype.P;ee.prototype.getLastError=ee.prototype.Sa;ee.prototype.getLastErrorCode=ee.prototype.Ia;ee.prototype.getStatus=ee.prototype.da;ee.prototype.getResponseJson=ee.prototype.Wa;ee.prototype.getResponseText=ee.prototype.ja;ee.prototype.send=ee.prototype.ha;ee.prototype.setWithCredentials=ee.prototype.Oa;Fe.prototype.digest=Fe.prototype.l;Fe.prototype.reset=Fe.prototype.reset;Fe.prototype.update=Fe.prototype.j;B.prototype.add=B.prototype.add;B.prototype.multiply=B.prototype.R;B.prototype.modulo=B.prototype.gb;B.prototype.compare=B.prototype.X;B.prototype.toNumber=B.prototype.ea;B.prototype.toString=B.prototype.toString;B.prototype.getBits=B.prototype.D;B.fromNumber=$e;B.fromString=ff;var Vv=function(){return new ys},kv=function(){return Hs()},zo=Qs,Nv=Dd,xv=_n,rl={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},qi=Vd,Ov=ee,Mv=Fe,qn=B;const il="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ce{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ce.UNAUTHENTICATED=new ce(null),ce.GOOGLE_CREDENTIALS=new ce("google-credentials-uid"),ce.FIRST_PARTY=new ce("first-party-uid"),ce.MOCK_USER=new ce("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ar="10.4.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bt=new Os("@firebase/firestore");function Vn(){return bt.logLevel}function Lv(n){bt.setLogLevel(n)}function _(n,...e){if(bt.logLevel<=N.DEBUG){const t=e.map(gc);bt.debug(`Firestore (${ar}): ${n}`,...t)}}function ne(n,...e){if(bt.logLevel<=N.ERROR){const t=e.map(gc);bt.error(`Firestore (${ar}): ${n}`,...t)}}function Ue(n,...e){if(bt.logLevel<=N.WARN){const t=e.map(gc);bt.warn(`Firestore (${ar}): ${n}`,...t)}}function gc(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A(n="Unexpected state"){const e=`FIRESTORE (${ar}) INTERNAL ASSERTION FAILED: `+n;throw ne(e),new Error(e)}function S(n,e){n||A()}function Fv(n,e){n||A()}function w(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class p extends Xe{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mf{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Uv{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(ce.UNAUTHENTICATED))}shutdown(){}}class Bv{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class qv{constructor(e){this.t=e,this.currentUser=ce.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let r=this.i;const i=c=>this.i!==r?(r=this.i,t(c)):Promise.resolve();let s=new ue;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new ue,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const c=s;e.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},a=c=>{_("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(_("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new ue)}},0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(_("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(S(typeof r.accessToken=="string"),new mf(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return S(e===null||typeof e=="string"),new ce(e)}}class $v{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=ce.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class jv{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new $v(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(ce.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Gv{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class zv{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){const r=s=>{s.error!=null&&_("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,_("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{_("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):_("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(S(typeof t.token=="string"),this.R=t.token,new Gv(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kv(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gf{static V(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=Kv(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<t&&(r+=e.charAt(i[s]%e.length))}return r}}function D(n,e){return n<e?-1:n>e?1:0}function Wn(n,e,t){return n.length===e.length&&n.every((r,i)=>t(r,e[i]))}function pf(n){return n+"\0"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new p(g.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new p(g.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new p(g.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new p(g.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Y.fromMillis(Date.now())}static fromDate(e){return Y.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new Y(t,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?D(this.nanoseconds,e.nanoseconds):D(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R{constructor(e){this.timestamp=e}static fromTimestamp(e){return new R(e)}static min(){return new R(new Y(0,0))}static max(){return new R(new Y(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qr{constructor(e,t,r){t===void 0?t=0:t>e.length&&A(),r===void 0?r=e.length-t:r>e.length-t&&A(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Qr.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Qr?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let i=0;i<r;i++){const s=e.get(i),o=t.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class M extends Qr{construct(e,t,r){return new M(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new p(g.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(i=>i.length>0))}return new M(t)}static emptyPath(){return new M([])}}const Wv=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Z extends Qr{construct(e,t,r){return new Z(e,t,r)}static isValidIdentifier(e){return Wv.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Z.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Z(["__name__"])}static fromServerFormat(e){const t=[];let r="",i=0;const s=()=>{if(r.length===0)throw new p(g.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new p(g.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new p(g.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new p(g.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Z(t)}static emptyPath(){return new Z([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E{constructor(e){this.path=e}static fromPath(e){return new E(M.fromString(e))}static fromName(e){return new E(M.fromString(e).popFirst(5))}static empty(){return new E(M.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&M.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return M.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new E(new M(e.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Es{constructor(e,t,r,i){this.indexId=e,this.collectionGroup=t,this.fields=r,this.indexState=i}}function ma(n){return n.fields.find(e=>e.kind===2)}function Kt(n){return n.fields.filter(e=>e.kind!==2)}Es.UNKNOWN_ID=-1;class Xi{constructor(e,t){this.fieldPath=e,this.kind=t}}class Yr{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new Yr(0,Ne.min())}}function _f(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=R.fromTimestamp(r===1e9?new Y(t+1,0):new Y(t,r));return new Ne(i,E.empty(),e)}function yf(n){return new Ne(n.readTime,n.key,-1)}class Ne{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new Ne(R.min(),E.empty(),-1)}static max(){return new Ne(R.max(),E.empty(),-1)}}function pc(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=E.comparator(n.documentKey,e.documentKey),t!==0?t:D(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const If="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class vf{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ut(n){if(n.code!==g.FAILED_PRECONDITION||n.message!==If)throw n;_("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&A(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new m((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(t,s).next(r,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof m?t:m.resolve(t)}catch(t){return m.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):m.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):m.reject(t)}static resolve(e){return new m((t,r)=>{t(e)})}static reject(e){return new m((t,r)=>{r(e)})}static waitFor(e){return new m((t,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&t()},c=>r(c))}),o=!0,s===i&&t()})}static or(e){let t=m.resolve(!1);for(const r of e)t=t.next(i=>i?m.resolve(i):r());return t}static forEach(e,t){const r=[];return e.forEach((i,s)=>{r.push(t.call(this,i,s))}),this.waitFor(r)}static mapArray(e,t){return new m((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let c=0;c<s;c++){const u=c;t(e[u]).next(l=>{o[u]=l,++a,a===s&&r(o)},l=>i(l))}})}static doWhile(e,t){return new m((r,i)=>{const s=()=>{e()===!0?t().next(()=>{s()},i):r()};s()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class io{constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.m=new ue,this.transaction.oncomplete=()=>{this.m.resolve()},this.transaction.onabort=()=>{t.error?this.m.reject(new Vr(e,t.error)):this.m.resolve()},this.transaction.onerror=r=>{const i=_c(r.target.error);this.m.reject(new Vr(e,i))}}static open(e,t,r,i){try{return new io(t,e.transaction(i,r))}catch(s){throw new Vr(t,s)}}get g(){return this.m.promise}abort(e){e&&this.m.reject(e),this.aborted||(_("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}p(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const t=this.transaction.objectStore(e);return new Qv(t)}}class Me{constructor(e,t,r){this.name=e,this.version=t,this.S=r,Me.D(se())===12.2&&ne("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return _("SimpleDb","Removing database:",e),Wt(window.indexedDB.deleteDatabase(e)).toPromise()}static C(){if(!yh())return!1;if(Me.v())return!0;const e=se(),t=Me.D(e),r=0<t&&t<10,i=Me.F(e),s=0<i&&i<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||s)}static v(){var e;return typeof process<"u"&&((e=process.env)===null||e===void 0?void 0:e.M)==="YES"}static O(e,t){return e.store(t)}static D(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(r)}static F(e){const t=e.match(/Android ([\d.]+)/i),r=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(r)}async N(e){return this.db||(_("SimpleDb","Opening database:",this.name),this.db=await new Promise((t,r)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=s=>{const o=s.target.result;t(o)},i.onblocked=()=>{r(new Vr(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=s=>{const o=s.target.error;o.name==="VersionError"?r(new p(g.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new p(g.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new Vr(e,o))},i.onupgradeneeded=s=>{_("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',s.oldVersion);const o=s.target.result;this.S.B(o,i.transaction,s.oldVersion,this.version).next(()=>{_("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.L&&(this.db.onversionchange=t=>this.L(t)),this.db}k(e){this.L=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,r,i){const s=t==="readonly";let o=0;for(;;){++o;try{this.db=await this.N(e);const a=io.open(this.db,e,s?"readonly":"readwrite",r),c=i(a).next(u=>(a.p(),u)).catch(u=>(a.abort(u),m.reject(u))).toPromise();return c.catch(()=>{}),await a.g,c}catch(a){const c=a,u=c.name!=="FirebaseError"&&o<3;if(_("SimpleDb","Transaction failed with error:",c.message,"Retrying:",u),this.close(),!u)return Promise.reject(c)}}}close(){this.db&&this.db.close(),this.db=void 0}}class Hv{constructor(e){this.q=e,this.K=!1,this.$=null}get isDone(){return this.K}get U(){return this.$}set cursor(e){this.q=e}done(){this.K=!0}W(e){this.$=e}delete(){return Wt(this.q.delete())}}class Vr extends p{constructor(e,t){super(g.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function Bt(n){return n.name==="IndexedDbTransactionError"}class Qv{constructor(e){this.store=e}put(e,t){let r;return t!==void 0?(_("SimpleDb","PUT",this.store.name,e,t),r=this.store.put(t,e)):(_("SimpleDb","PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),Wt(r)}add(e){return _("SimpleDb","ADD",this.store.name,e,e),Wt(this.store.add(e))}get(e){return Wt(this.store.get(e)).next(t=>(t===void 0&&(t=null),_("SimpleDb","GET",this.store.name,e,t),t))}delete(e){return _("SimpleDb","DELETE",this.store.name,e),Wt(this.store.delete(e))}count(){return _("SimpleDb","COUNT",this.store.name),Wt(this.store.count())}G(e,t){const r=this.options(e,t);if(r.index||typeof this.store.getAll!="function"){const i=this.cursor(r),s=[];return this.j(i,(o,a)=>{s.push(a)}).next(()=>s)}{const i=this.store.getAll(r.range);return new m((s,o)=>{i.onerror=a=>{o(a.target.error)},i.onsuccess=a=>{s(a.target.result)}})}}H(e,t){const r=this.store.getAll(e,t===null?void 0:t);return new m((i,s)=>{r.onerror=o=>{s(o.target.error)},r.onsuccess=o=>{i(o.target.result)}})}J(e,t){_("SimpleDb","DELETE ALL",this.store.name);const r=this.options(e,t);r.Y=!1;const i=this.cursor(r);return this.j(i,(s,o,a)=>a.delete())}Z(e,t){let r;t?r=e:(r={},t=e);const i=this.cursor(r);return this.j(i,t)}X(e){const t=this.cursor({});return new m((r,i)=>{t.onerror=s=>{const o=_c(s.target.error);i(o)},t.onsuccess=s=>{const o=s.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}j(e,t){const r=[];return new m((i,s)=>{e.onerror=o=>{s(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void i();const c=new Hv(a),u=t(a.primaryKey,a.value,c);if(u instanceof m){const l=u.catch(h=>(c.done(),m.reject(h)));r.push(l)}c.isDone?i():c.U===null?a.continue():a.continue(c.U)}}).next(()=>m.waitFor(r))}options(e,t){let r;return e!==void 0&&(typeof e=="string"?r=e:t=e),{index:r,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const r=this.store.index(e.index);return e.Y?r.openKeyCursor(e.range,t):r.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function Wt(n){return new m((e,t)=>{n.onsuccess=r=>{const i=r.target.result;e(i)},n.onerror=r=>{const i=_c(r.target.error);t(i)}})}let sl=!1;function _c(n){const e=Me.D(se());if(e>=12.2&&e<13){const t="An internal error was encountered in the Indexed Database server";if(n.message.indexOf(t)>=0){const r=new p("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return sl||(sl=!0,setTimeout(()=>{throw r},0)),r}}return n}class Yv{constructor(e,t){this.asyncQueue=e,this.ee=t,this.task=null}start(){this.te(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}te(e){_("IndexBackiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{_("IndexBackiller",`Documents written: ${await this.ee.ne()}`)}catch(t){Bt(t)?_("IndexBackiller","Ignoring IndexedDB error during index backfill: ",t):await Ut(t)}await this.te(6e4)})}}class Xv{constructor(e,t){this.localStore=e,this.persistence=t}async ne(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",t=>this.re(t,e))}re(e,t){const r=new Set;let i=t,s=!0;return m.doWhile(()=>s===!0&&i>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!r.has(o))return _("IndexBackiller",`Processing collection: ${o}`),this.ie(e,o,i).next(a=>{i-=a,r.add(o)});s=!1})).next(()=>t-i)}ie(e,t,r){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next(i=>this.localStore.localDocuments.getNextDocuments(e,t,i,r).next(s=>{const o=s.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this.se(i,s)).next(a=>(_("IndexBackiller",`Updating offset: ${a}`),this.localStore.indexManager.updateCollectionGroup(e,t,a))).next(()=>o.size)}))}se(e,t){let r=e;return t.changes.forEach((i,s)=>{const o=yf(s);pc(o,r)>0&&(r=o)}),new Ne(r.readTime,r.documentKey,Math.max(t.batchId,e.largestBatchId))}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.oe(r),this._e=r=>t.writeSequenceNumber(r))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}Ce.ae=-1;function wi(n){return n==null}function Xr(n){return n===0&&1/n==-1/0}function Ef(n){return typeof n=="number"&&Number.isInteger(n)&&!Xr(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Re(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=ol(e)),e=Jv(n.get(t),e);return ol(e)}function Jv(n,e){let t=e;const r=n.length;for(let i=0;i<r;i++){const s=n.charAt(i);switch(s){case"\0":t+="";break;case"":t+="";break;default:t+=s}}return t}function ol(n){return n+""}function je(n){const e=n.length;if(S(e>=2),e===2)return S(n.charAt(0)===""&&n.charAt(1)===""),M.emptyPath();const t=e-2,r=[];let i="";for(let s=0;s<e;){const o=n.indexOf("",s);switch((o<0||o>t)&&A(),n.charAt(o+1)){case"":const a=n.substring(s,o);let c;i.length===0?c=a:(i+=a,c=i,i=""),r.push(c);break;case"":i+=n.substring(s,o),i+="\0";break;case"":i+=n.substring(s,o+1);break;default:A()}s=o+2}return new M(r)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const al=["userId","batchId"];/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ji(n,e){return[n,Re(e)]}function wf(n,e,t){return[n,Re(e),t]}const Zv={},eE=["prefixPath","collectionGroup","readTime","documentId"],tE=["prefixPath","collectionGroup","documentId"],nE=["collectionGroup","readTime","prefixPath","documentId"],rE=["canonicalId","targetId"],iE=["targetId","path"],sE=["path","targetId"],oE=["collectionId","parent"],aE=["indexId","uid"],cE=["uid","sequenceNumber"],uE=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],lE=["indexId","uid","orderedDocumentKey"],hE=["userId","collectionPath","documentId"],dE=["userId","collectionPath","largestBatchId"],fE=["userId","collectionGroup","largestBatchId"],Tf=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],mE=[...Tf,"documentOverlays"],Af=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],Rf=Af,gE=[...Rf,"indexConfiguration","indexState","indexEntries"];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ga extends vf{constructor(e,t){super(),this.ue=e,this.currentSequenceNumber=t}}function de(n,e){const t=w(n);return Me.O(t.ue,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cl(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function yn(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Sf(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{constructor(e,t){this.comparator=e,this.root=t||ge.EMPTY}insert(e,t){return new j(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,ge.BLACK,null,null))}remove(e){return new j(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ge.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return t+r.left.size;i<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new $i(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new $i(this.root,e,this.comparator,!1)}getReverseIterator(){return new $i(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new $i(this.root,e,this.comparator,!0)}}class $i{constructor(e,t,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?r(e.key,t):1,t&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ge{constructor(e,t,r,i,s){this.key=e,this.value=t,this.color=r??ge.RED,this.left=i??ge.EMPTY,this.right=s??ge.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,i,s){return new ge(e??this.key,t??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,t,r),null):s===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return ge.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return ge.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ge.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ge.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw A();const e=this.left.check();if(e!==this.right.check())throw A();return e+(this.isRed()?0:1)}}ge.EMPTY=null,ge.RED=!0,ge.BLACK=!1;ge.EMPTY=new class{constructor(){this.size=0}get key(){throw A()}get value(){throw A()}get color(){throw A()}get left(){throw A()}get right(){throw A()}copy(e,t,r,i,s){return this}insert(e,t,r){return new ge(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(e){this.comparator=e,this.data=new j(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new ul(this.data.getIterator())}getIteratorFrom(e){return new ul(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof q)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new q(this.comparator);return t.data=e,t}}class ul{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function bn(n){return n.hasNext()?n.getNext():void 0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De{constructor(e){this.fields=e,e.sort(Z.comparator)}static empty(){return new De([])}unionWith(e){let t=new q(Z.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new De(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Wn(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bf extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pE(){return typeof atob<"u"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oe{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new bf("Invalid base64 string: "+s):s}}(e);return new oe(t)}static fromUint8Array(e){const t=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new oe(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return D(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}oe.EMPTY_BYTE_STRING=new oe("");const _E=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Pt(n){if(S(!!n),typeof n=="string"){let e=0;const t=_E.exec(n);if(S(!!t),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:J(n.seconds),nanos:J(n.nanos)}}function J(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Ct(n){return typeof n=="string"?oe.fromBase64String(n):oe.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function so(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function yc(n){const e=n.mapValue.fields.__previous_value__;return so(e)?yc(e):e}function Jr(n){const e=Pt(n.mapValue.fields.__local_write_time__.timestampValue);return new Y(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yE{constructor(e,t,r,i,s,o,a,c,u){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=u}}class Dt{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new Dt("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Dt&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Et={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},Zi={nullValue:"NULL_VALUE"};function an(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?so(n)?4:Pf(n)?9007199254740991:10:A()}function Qe(n,e){if(n===e)return!0;const t=an(n);if(t!==an(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Jr(n).isEqual(Jr(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Pt(i.timestampValue),a=Pt(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(i,s){return Ct(i.bytesValue).isEqual(Ct(s.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(i,s){return J(i.geoPointValue.latitude)===J(s.geoPointValue.latitude)&&J(i.geoPointValue.longitude)===J(s.geoPointValue.longitude)}(n,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return J(i.integerValue)===J(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=J(i.doubleValue),a=J(s.doubleValue);return o===a?Xr(o)===Xr(a):isNaN(o)&&isNaN(a)}return!1}(n,e);case 9:return Wn(n.arrayValue.values||[],e.arrayValue.values||[],Qe);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(cl(o)!==cl(a))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(a[c]===void 0||!Qe(o[c],a[c])))return!1;return!0}(n,e);default:return A()}}function Zr(n,e){return(n.values||[]).find(t=>Qe(t,e))!==void 0}function Vt(n,e){if(n===e)return 0;const t=an(n),r=an(e);if(t!==r)return D(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return D(n.booleanValue,e.booleanValue);case 2:return function(s,o){const a=J(s.integerValue||s.doubleValue),c=J(o.integerValue||o.doubleValue);return a<c?-1:a>c?1:a===c?0:isNaN(a)?isNaN(c)?0:-1:1}(n,e);case 3:return ll(n.timestampValue,e.timestampValue);case 4:return ll(Jr(n),Jr(e));case 5:return D(n.stringValue,e.stringValue);case 6:return function(s,o){const a=Ct(s),c=Ct(o);return a.compareTo(c)}(n.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),c=o.split("/");for(let u=0;u<a.length&&u<c.length;u++){const l=D(a[u],c[u]);if(l!==0)return l}return D(a.length,c.length)}(n.referenceValue,e.referenceValue);case 8:return function(s,o){const a=D(J(s.latitude),J(o.latitude));return a!==0?a:D(J(s.longitude),J(o.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return function(s,o){const a=s.values||[],c=o.values||[];for(let u=0;u<a.length&&u<c.length;++u){const l=Vt(a[u],c[u]);if(l)return l}return D(a.length,c.length)}(n.arrayValue,e.arrayValue);case 10:return function(s,o){if(s===Et.mapValue&&o===Et.mapValue)return 0;if(s===Et.mapValue)return 1;if(o===Et.mapValue)return-1;const a=s.fields||{},c=Object.keys(a),u=o.fields||{},l=Object.keys(u);c.sort(),l.sort();for(let h=0;h<c.length&&h<l.length;++h){const d=D(c[h],l[h]);if(d!==0)return d;const f=Vt(a[c[h]],u[l[h]]);if(f!==0)return f}return D(c.length,l.length)}(n.mapValue,e.mapValue);default:throw A()}}function ll(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return D(n,e);const t=Pt(n),r=Pt(e),i=D(t.seconds,r.seconds);return i!==0?i:D(t.nanos,r.nanos)}function Hn(n){return pa(n)}function pa(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=Pt(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Ct(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return E.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",i=!0;for(const s of t.values||[])i?i=!1:r+=",",r+=pa(s);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${pa(t.fields[o])}`;return i+"}"}(n.mapValue):A()}function cn(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function _a(n){return!!n&&"integerValue"in n}function ei(n){return!!n&&"arrayValue"in n}function hl(n){return!!n&&"nullValue"in n}function dl(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function es(n){return!!n&&"mapValue"in n}function kr(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return yn(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=kr(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=kr(n.arrayValue.values[t]);return e}return Object.assign({},n)}function Pf(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}function IE(n){return"nullValue"in n?Zi:"booleanValue"in n?{booleanValue:!1}:"integerValue"in n||"doubleValue"in n?{doubleValue:NaN}:"timestampValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in n?{stringValue:""}:"bytesValue"in n?{bytesValue:""}:"referenceValue"in n?cn(Dt.empty(),E.empty()):"geoPointValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in n?{arrayValue:{}}:"mapValue"in n?{mapValue:{}}:A()}function vE(n){return"nullValue"in n?{booleanValue:!1}:"booleanValue"in n?{doubleValue:NaN}:"integerValue"in n||"doubleValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in n?{stringValue:""}:"stringValue"in n?{bytesValue:""}:"bytesValue"in n?cn(Dt.empty(),E.empty()):"referenceValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in n?{arrayValue:{}}:"arrayValue"in n?{mapValue:{}}:"mapValue"in n?Et:A()}function fl(n,e){const t=Vt(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?-1:!n.inclusive&&e.inclusive?1:0}function ml(n,e){const t=Vt(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?1:!n.inclusive&&e.inclusive?-1:0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _e{constructor(e){this.value=e}static empty(){return new _e({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!es(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=kr(t)}setAll(e){let t=Z.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!t.isImmediateParentOf(a)){const c=this.getFieldsMap(t);this.applyChanges(c,r,i),r={},i=[],t=a.popLast()}o?r[a.lastSegment()]=kr(o):i.push(a.lastSegment())});const s=this.getFieldsMap(t);this.applyChanges(s,r,i)}delete(e){const t=this.field(e.popLast());es(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Qe(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=t.mapValue.fields[e.get(r)];es(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,r){yn(t,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new _e(kr(this.value))}}function Cf(n){const e=[];return yn(n.fields,(t,r)=>{const i=new Z([t]);if(es(r)){const s=Cf(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new De(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H{constructor(e,t,r,i,s,o,a){this.key=e,this.documentType=t,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new H(e,0,R.min(),R.min(),R.min(),_e.empty(),0)}static newFoundDocument(e,t,r,i){return new H(e,1,t,R.min(),r,i,0)}static newNoDocument(e,t){return new H(e,2,t,R.min(),R.min(),_e.empty(),0)}static newUnknownDocument(e,t){return new H(e,3,t,R.min(),R.min(),_e.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(R.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=_e.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=_e.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=R.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof H&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new H(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{constructor(e,t){this.position=e,this.inclusive=t}}function gl(n,e,t){let r=0;for(let i=0;i<n.position.length;i++){const s=e[i],o=n.position[i];if(s.field.isKeyField()?r=E.comparator(E.fromName(o.referenceValue),t.key):r=Vt(o,t.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function pl(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Qe(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n{constructor(e,t="asc"){this.field=e,this.dir=t}}function EE(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Df{}class x extends Df{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new wE(e,t,r):t==="array-contains"?new RE(e,r):t==="in"?new Mf(e,r):t==="not-in"?new SE(e,r):t==="array-contains-any"?new bE(e,r):new x(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new TE(e,r):new AE(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(Vt(t,this.value)):t!==null&&an(this.value)===an(t)&&this.matchesComparison(Vt(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return A()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class U extends Df{constructor(e,t){super(),this.filters=e,this.op=t,this.ce=null}static create(e,t){return new U(e,t)}matches(e){return Qn(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.le(t=>t.isInequality());return e!==null?e.field:null}le(e){for(const t of this.getFlattenedFilters())if(e(t))return t;return null}}function Qn(n){return n.op==="and"}function ya(n){return n.op==="or"}function Ic(n){return Vf(n)&&Qn(n)}function Vf(n){for(const e of n.filters)if(e instanceof U)return!1;return!0}function Ia(n){if(n instanceof x)return n.field.canonicalString()+n.op.toString()+Hn(n.value);if(Ic(n))return n.filters.map(e=>Ia(e)).join(",");{const e=n.filters.map(t=>Ia(t)).join(",");return`${n.op}(${e})`}}function kf(n,e){return n instanceof x?function(r,i){return i instanceof x&&r.op===i.op&&r.field.isEqual(i.field)&&Qe(r.value,i.value)}(n,e):n instanceof U?function(r,i){return i instanceof U&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&kf(o,i.filters[a]),!0):!1}(n,e):void A()}function Nf(n,e){const t=n.filters.concat(e);return U.create(t,n.op)}function xf(n){return n instanceof x?function(t){return`${t.field.canonicalString()} ${t.op} ${Hn(t.value)}`}(n):n instanceof U?function(t){return t.op.toString()+" {"+t.getFilters().map(xf).join(" ,")+"}"}(n):"Filter"}class wE extends x{constructor(e,t,r){super(e,t,r),this.key=E.fromName(r.referenceValue)}matches(e){const t=E.comparator(e.key,this.key);return this.matchesComparison(t)}}class TE extends x{constructor(e,t){super(e,"in",t),this.keys=Of("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class AE extends x{constructor(e,t){super(e,"not-in",t),this.keys=Of("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Of(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>E.fromName(r.referenceValue))}class RE extends x{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return ei(t)&&Zr(t.arrayValue,this.value)}}class Mf extends x{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Zr(this.value.arrayValue,t)}}class SE extends x{constructor(e,t){super(e,"not-in",t)}matches(e){if(Zr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!Zr(this.value.arrayValue,t)}}class bE extends x{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!ei(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>Zr(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PE{constructor(e,t=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.he=null}}function va(n,e=null,t=[],r=[],i=null,s=null,o=null){return new PE(n,e,t,r,i,s,o)}function un(n){const e=w(n);if(e.he===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>Ia(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),wi(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>Hn(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>Hn(r)).join(",")),e.he=t}return e.he}function Ti(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!EE(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!kf(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!pl(n.startAt,e.startAt)&&pl(n.endAt,e.endAt)}function ws(n){return E.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function Ts(n,e){return n.filters.filter(t=>t instanceof x&&t.field.isEqual(e))}function _l(n,e,t){let r=Zi,i=!0;for(const s of Ts(n,e)){let o=Zi,a=!0;switch(s.op){case"<":case"<=":o=IE(s.value);break;case"==":case"in":case">=":o=s.value;break;case">":o=s.value,a=!1;break;case"!=":case"not-in":o=Zi}fl({value:r,inclusive:i},{value:o,inclusive:a})<0&&(r=o,i=a)}if(t!==null){for(let s=0;s<n.orderBy.length;++s)if(n.orderBy[s].field.isEqual(e)){const o=t.position[s];fl({value:r,inclusive:i},{value:o,inclusive:t.inclusive})<0&&(r=o,i=t.inclusive);break}}return{value:r,inclusive:i}}function yl(n,e,t){let r=Et,i=!0;for(const s of Ts(n,e)){let o=Et,a=!0;switch(s.op){case">=":case">":o=vE(s.value),a=!1;break;case"==":case"in":case"<=":o=s.value;break;case"<":o=s.value,a=!1;break;case"!=":case"not-in":o=Et}ml({value:r,inclusive:i},{value:o,inclusive:a})>0&&(r=o,i=a)}if(t!==null){for(let s=0;s<n.orderBy.length;++s)if(n.orderBy[s].field.isEqual(e)){const o=t.position[s];ml({value:r,inclusive:i},{value:o,inclusive:t.inclusive})>0&&(r=o,i=t.inclusive);break}}return{value:r,inclusive:i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(e,t=null,r=[],i=[],s=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=c,this.Pe=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function Lf(n,e,t,r,i,s,o,a){return new ct(n,e,t,r,i,s,o,a)}function cr(n){return new ct(n)}function Il(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function vc(n){return n.explicitOrderBy.length>0?n.explicitOrderBy[0].field:null}function oo(n){for(const e of n.filters){const t=e.getFirstInequalityField();if(t!==null)return t}return null}function Ec(n){return n.collectionGroup!==null}function jn(n){const e=w(n);if(e.Pe===null){e.Pe=[];const t=oo(e),r=vc(e);if(t!==null&&r===null)t.isKeyField()||e.Pe.push(new $n(t)),e.Pe.push(new $n(Z.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.Pe.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.Pe.push(new $n(Z.keyField(),s))}}}return e.Pe}function Se(n){const e=w(n);return e.Ie||(e.Ie=CE(e,jn(n))),e.Ie}function CE(n,e){if(n.limitType==="F")return va(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new $n(i.field,s)});const t=n.endAt?new kt(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new kt(n.startAt.position,n.startAt.inclusive):null;return va(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function Ea(n,e){e.getFirstInequalityField(),oo(n);const t=n.filters.concat([e]);return new ct(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function As(n,e,t){return new ct(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Ai(n,e){return Ti(Se(n),Se(e))&&n.limitType===e.limitType}function Ff(n){return`${un(Se(n))}|lt:${n.limitType}`}function kn(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(i=>xf(i)).join(", ")}]`),wi(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(i=>Hn(i)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(i=>Hn(i)).join(",")),`Target(${r})`}(Se(n))}; limitType=${n.limitType})`}function Ri(n,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):E.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(n,e)&&function(r,i){for(const s of jn(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(n,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(n,e)&&function(r,i){return!(r.startAt&&!function(o,a,c){const u=gl(o,a,c);return o.inclusive?u<=0:u<0}(r.startAt,jn(r),i)||r.endAt&&!function(o,a,c){const u=gl(o,a,c);return o.inclusive?u>=0:u>0}(r.endAt,jn(r),i))}(n,e)}function Uf(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Bf(n){return(e,t)=>{let r=!1;for(const i of jn(n)){const s=DE(i,e,t);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function DE(n,e,t){const r=n.field.isKeyField()?E.comparator(e.key,t.key):function(s,o,a){const c=o.data.field(s),u=a.data.field(s);return c!==null&&u!==null?Vt(c,u):A()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return A()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[t]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){yn(this.inner,(t,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return Sf(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VE=new j(E.comparator);function Ve(){return VE}const qf=new j(E.comparator);function Sr(...n){let e=qf;for(const t of n)e=e.insert(t.key,t);return e}function $f(n){let e=qf;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function Ge(){return Nr()}function jf(){return Nr()}function Nr(){return new qt(n=>n.toString(),(n,e)=>n.isEqual(e))}const kE=new j(E.comparator),NE=new q(E.comparator);function V(...n){let e=NE;for(const t of n)e=e.add(t);return e}const xE=new q(D);function wc(){return xE}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gf(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Xr(e)?"-0":e}}function zf(n){return{integerValue:""+n}}function Kf(n,e){return Ef(e)?zf(e):Gf(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ao{constructor(){this._=void 0}}function OE(n,e,t){return n instanceof Yn?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&so(s)&&(s=yc(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(t,e):n instanceof ln?Hf(n,e):n instanceof hn?Qf(n,e):function(i,s){const o=Wf(i,s),a=vl(o)+vl(i.Te);return _a(o)&&_a(i.Te)?zf(a):Gf(i.serializer,a)}(n,e)}function ME(n,e,t){return n instanceof ln?Hf(n,e):n instanceof hn?Qf(n,e):t}function Wf(n,e){return n instanceof Xn?function(r){return _a(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Yn extends ao{}class ln extends ao{constructor(e){super(),this.elements=e}}function Hf(n,e){const t=Yf(e);for(const r of n.elements)t.some(i=>Qe(i,r))||t.push(r);return{arrayValue:{values:t}}}class hn extends ao{constructor(e){super(),this.elements=e}}function Qf(n,e){let t=Yf(e);for(const r of n.elements)t=t.filter(i=>!Qe(i,r));return{arrayValue:{values:t}}}class Xn extends ao{constructor(e,t){super(),this.serializer=e,this.Te=t}}function vl(n){return J(n.integerValue||n.doubleValue)}function Yf(n){return ei(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Si{constructor(e,t){this.field=e,this.transform=t}}function LE(n,e){return n.field.isEqual(e.field)&&function(r,i){return r instanceof ln&&i instanceof ln||r instanceof hn&&i instanceof hn?Wn(r.elements,i.elements,Qe):r instanceof Xn&&i instanceof Xn?Qe(r.Te,i.Te):r instanceof Yn&&i instanceof Yn}(n.transform,e.transform)}class FE{constructor(e,t){this.version=e,this.transformResults=t}}class Q{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Q}static exists(e){return new Q(void 0,e)}static updateTime(e){return new Q(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ts(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class co{}function Xf(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new lr(n.key,Q.none()):new ur(n.key,n.data,Q.none());{const t=n.data,r=_e.empty();let i=new q(Z.comparator);for(let s of e.fields)if(!i.has(s)){let o=t.field(s);o===null&&s.length>1&&(s=s.popLast(),o=t.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new ut(n.key,r,new De(i.toArray()),Q.none())}}function UE(n,e,t){n instanceof ur?function(i,s,o){const a=i.value.clone(),c=wl(i.fieldTransforms,s,o.transformResults);a.setAll(c),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(n,e,t):n instanceof ut?function(i,s,o){if(!ts(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=wl(i.fieldTransforms,s,o.transformResults),c=s.data;c.setAll(Jf(i)),c.setAll(a),s.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(n,e,t):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,t)}function xr(n,e,t,r){return n instanceof ur?function(s,o,a,c){if(!ts(s.precondition,o))return a;const u=s.value.clone(),l=Tl(s.fieldTransforms,c,o);return u.setAll(l),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(n,e,t,r):n instanceof ut?function(s,o,a,c){if(!ts(s.precondition,o))return a;const u=Tl(s.fieldTransforms,c,o),l=o.data;return l.setAll(Jf(s)),l.setAll(u),o.convertToFoundDocument(o.version,l).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(h=>h.field))}(n,e,t,r):function(s,o,a){return ts(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(n,e,t)}function BE(n,e){let t=null;for(const r of n.fieldTransforms){const i=e.data.field(r.field),s=Wf(r.transform,i||null);s!=null&&(t===null&&(t=_e.empty()),t.set(r.field,s))}return t||null}function El(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Wn(r,i,(s,o)=>LE(s,o))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class ur extends co{constructor(e,t,r,i=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class ut extends co{constructor(e,t,r,i,s=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Jf(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function wl(n,e,t){const r=new Map;S(n.length===t.length);for(let i=0;i<t.length;i++){const s=n[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,ME(o,a,t[i]))}return r}function Tl(n,e,t){const r=new Map;for(const i of n){const s=i.transform,o=t.data.field(i.field);r.set(i.field,OE(s,o,e))}return r}class lr extends co{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Tc extends co{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ac{constructor(e,t,r,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&UE(s,e,r[i])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=xr(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=xr(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=jf();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=t.has(i.key)?null:a;const c=Xf(o,a);c!==null&&r.set(i.key,c),o.isValidDocument()||o.convertToNoDocument(R.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),V())}isEqual(e){return this.batchId===e.batchId&&Wn(this.mutations,e.mutations,(t,r)=>El(t,r))&&Wn(this.baseMutations,e.baseMutations,(t,r)=>El(t,r))}}class Rc{constructor(e,t,r,i){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=i}static from(e,t,r){S(e.mutations.length===r.length);let i=function(){return kE}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Rc(e,t,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sc{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qE{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ie,O;function Zf(n){switch(n){default:return A();case g.CANCELLED:case g.UNKNOWN:case g.DEADLINE_EXCEEDED:case g.RESOURCE_EXHAUSTED:case g.INTERNAL:case g.UNAVAILABLE:case g.UNAUTHENTICATED:return!1;case g.INVALID_ARGUMENT:case g.NOT_FOUND:case g.ALREADY_EXISTS:case g.PERMISSION_DENIED:case g.FAILED_PRECONDITION:case g.ABORTED:case g.OUT_OF_RANGE:case g.UNIMPLEMENTED:case g.DATA_LOSS:return!0}}function em(n){if(n===void 0)return ne("GRPC error has no .code"),g.UNKNOWN;switch(n){case ie.OK:return g.OK;case ie.CANCELLED:return g.CANCELLED;case ie.UNKNOWN:return g.UNKNOWN;case ie.DEADLINE_EXCEEDED:return g.DEADLINE_EXCEEDED;case ie.RESOURCE_EXHAUSTED:return g.RESOURCE_EXHAUSTED;case ie.INTERNAL:return g.INTERNAL;case ie.UNAVAILABLE:return g.UNAVAILABLE;case ie.UNAUTHENTICATED:return g.UNAUTHENTICATED;case ie.INVALID_ARGUMENT:return g.INVALID_ARGUMENT;case ie.NOT_FOUND:return g.NOT_FOUND;case ie.ALREADY_EXISTS:return g.ALREADY_EXISTS;case ie.PERMISSION_DENIED:return g.PERMISSION_DENIED;case ie.FAILED_PRECONDITION:return g.FAILED_PRECONDITION;case ie.ABORTED:return g.ABORTED;case ie.OUT_OF_RANGE:return g.OUT_OF_RANGE;case ie.UNIMPLEMENTED:return g.UNIMPLEMENTED;case ie.DATA_LOSS:return g.DATA_LOSS;default:return A()}}(O=ie||(ie={}))[O.OK=0]="OK",O[O.CANCELLED=1]="CANCELLED",O[O.UNKNOWN=2]="UNKNOWN",O[O.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",O[O.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",O[O.NOT_FOUND=5]="NOT_FOUND",O[O.ALREADY_EXISTS=6]="ALREADY_EXISTS",O[O.PERMISSION_DENIED=7]="PERMISSION_DENIED",O[O.UNAUTHENTICATED=16]="UNAUTHENTICATED",O[O.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",O[O.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",O[O.ABORTED=10]="ABORTED",O[O.OUT_OF_RANGE=11]="OUT_OF_RANGE",O[O.UNIMPLEMENTED=12]="UNIMPLEMENTED",O[O.INTERNAL=13]="INTERNAL",O[O.UNAVAILABLE=14]="UNAVAILABLE",O[O.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tm(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $E=new qn([4294967295,4294967295],0);function Al(n){const e=tm().encode(n),t=new Mv;return t.update(e),new Uint8Array(t.digest())}function Rl(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new qn([t,r],0),new qn([i,s],0)]}class bc{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new br(`Invalid padding: ${t}`);if(r<0)throw new br(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new br(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new br(`Invalid padding when bitmap length is 0: ${t}`);this.Ae=8*e.length-t,this.Re=qn.fromNumber(this.Ae)}Ve(e,t,r){let i=e.add(t.multiply(qn.fromNumber(r)));return i.compare($E)===1&&(i=new qn([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Re).toNumber()}me(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ae===0)return!1;const t=Al(e),[r,i]=Rl(t);for(let s=0;s<this.hashCount;s++){const o=this.Ve(r,i,s);if(!this.me(o))return!1}return!0}static create(e,t,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new bc(s,i,t);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Ae===0)return;const t=Al(e),[r,i]=Rl(t);for(let s=0;s<this.hashCount;s++){const o=this.Ve(r,i,s);this.fe(o)}}fe(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class br extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bi{constructor(e,t,r,i,s){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const i=new Map;return i.set(e,Pi.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new bi(R.min(),i,new j(D),Ve(),V())}}class Pi{constructor(e,t,r,i,s){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new Pi(r,t,V(),V(),V())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns{constructor(e,t,r,i){this.ge=e,this.removedTargetIds=t,this.key=r,this.pe=i}}class nm{constructor(e,t){this.targetId=e,this.ye=t}}class rm{constructor(e,t,r=oe.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=i}}class Sl{constructor(){this.we=0,this.Se=Pl(),this.be=oe.EMPTY_BYTE_STRING,this.De=!1,this.Ce=!0}get current(){return this.De}get resumeToken(){return this.be}get ve(){return this.we!==0}get Fe(){return this.Ce}Me(e){e.approximateByteSize()>0&&(this.Ce=!0,this.be=e)}xe(){let e=V(),t=V(),r=V();return this.Se.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:r=r.add(i);break;default:A()}}),new Pi(this.be,this.De,e,t,r)}Oe(){this.Ce=!1,this.Se=Pl()}Ne(e,t){this.Ce=!0,this.Se=this.Se.insert(e,t)}Be(e){this.Ce=!0,this.Se=this.Se.remove(e)}Le(){this.we+=1}ke(){this.we-=1}qe(){this.Ce=!0,this.De=!0}}class jE{constructor(e){this.Qe=e,this.Ke=new Map,this.$e=Ve(),this.Ue=bl(),this.We=new j(D)}Ge(e){for(const t of e.ge)e.pe&&e.pe.isFoundDocument()?this.ze(t,e.pe):this.je(t,e.key,e.pe);for(const t of e.removedTargetIds)this.je(t,e.key,e.pe)}He(e){this.forEachTarget(e,t=>{const r=this.Je(t);switch(e.state){case 0:this.Ye(t)&&r.Me(e.resumeToken);break;case 1:r.ke(),r.ve||r.Oe(),r.Me(e.resumeToken);break;case 2:r.ke(),r.ve||this.removeTarget(t);break;case 3:this.Ye(t)&&(r.qe(),r.Me(e.resumeToken));break;case 4:this.Ye(t)&&(this.Ze(t),r.Me(e.resumeToken));break;default:A()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Ke.forEach((r,i)=>{this.Ye(i)&&t(i)})}Xe(e){const t=e.targetId,r=e.ye.count,i=this.et(t);if(i){const s=i.target;if(ws(s))if(r===0){const o=new E(s.path);this.je(t,o,H.newNoDocument(o,R.min()))}else S(r===1);else{const o=this.tt(t);if(o!==r){const a=this.nt(e),c=a?this.rt(a,e,o):1;if(c!==0){this.Ze(t);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.We=this.We.insert(t,u)}}}}}nt(e){const t=e.ye.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=t;let o,a;try{o=Ct(r).toUint8Array()}catch(c){if(c instanceof bf)return Ue("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{a=new bc(o,i,s)}catch(c){return Ue(c instanceof br?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return a.Ae===0?null:a}rt(e,t,r){return t.ye.count===r-this.ot(e,t.targetId)?0:2}ot(e,t){const r=this.Qe.getRemoteKeysForTarget(t);let i=0;return r.forEach(s=>{const o=this.Qe.st(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.je(t,s,null),i++)}),i}_t(e){const t=new Map;this.Ke.forEach((s,o)=>{const a=this.et(o);if(a){if(s.current&&ws(a.target)){const c=new E(a.target.path);this.$e.get(c)!==null||this.ut(o,c)||this.je(o,c,H.newNoDocument(c,e))}s.Fe&&(t.set(o,s.xe()),s.Oe())}});let r=V();this.Ue.forEach((s,o)=>{let a=!0;o.forEachWhile(c=>{const u=this.et(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.$e.forEach((s,o)=>o.setReadTime(e));const i=new bi(e,t,this.We,this.$e,r);return this.$e=Ve(),this.Ue=bl(),this.We=new j(D),i}ze(e,t){if(!this.Ye(e))return;const r=this.ut(e,t.key)?2:0;this.Je(e).Ne(t.key,r),this.$e=this.$e.insert(t.key,t),this.Ue=this.Ue.insert(t.key,this.ct(t.key).add(e))}je(e,t,r){if(!this.Ye(e))return;const i=this.Je(e);this.ut(e,t)?i.Ne(t,1):i.Be(t),this.Ue=this.Ue.insert(t,this.ct(t).delete(e)),r&&(this.$e=this.$e.insert(t,r))}removeTarget(e){this.Ke.delete(e)}tt(e){const t=this.Je(e).xe();return this.Qe.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Le(e){this.Je(e).Le()}Je(e){let t=this.Ke.get(e);return t||(t=new Sl,this.Ke.set(e,t)),t}ct(e){let t=this.Ue.get(e);return t||(t=new q(D),this.Ue=this.Ue.insert(e,t)),t}Ye(e){const t=this.et(e)!==null;return t||_("WatchChangeAggregator","Detected inactive target",e),t}et(e){const t=this.Ke.get(e);return t&&t.ve?null:this.Qe.lt(e)}Ze(e){this.Ke.set(e,new Sl),this.Qe.getRemoteKeysForTarget(e).forEach(t=>{this.je(e,t,null)})}ut(e,t){return this.Qe.getRemoteKeysForTarget(e).has(t)}}function bl(){return new j(E.comparator)}function Pl(){return new j(E.comparator)}const GE=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),zE=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),KE=(()=>({and:"AND",or:"OR"}))();class WE{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function wa(n,e){return n.useProto3Json||wi(e)?e:{value:e}}function Jn(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function im(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function HE(n,e){return Jn(n,e.toTimestamp())}function re(n){return S(!!n),R.fromTimestamp(function(t){const r=Pt(t);return new Y(r.seconds,r.nanos)}(n))}function Pc(n,e){return function(r){return new M(["projects",r.projectId,"databases",r.database])}(n).child("documents").child(e).canonicalString()}function sm(n){const e=M.fromString(n);return S(mm(e)),e}function ti(n,e){return Pc(n.databaseId,e.path)}function We(n,e){const t=sm(e);if(t.get(1)!==n.databaseId.projectId)throw new p(g.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new p(g.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new E(am(t))}function Ta(n,e){return Pc(n.databaseId,e)}function om(n){const e=sm(n);return e.length===4?M.emptyPath():am(e)}function ni(n){return new M(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function am(n){return S(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function Cl(n,e,t){return{name:ti(n,e),fields:t.value.mapValue.fields}}function cm(n,e,t){const r=We(n,e.name),i=re(e.updateTime),s=e.createTime?re(e.createTime):R.min(),o=new _e({mapValue:{fields:e.fields}}),a=H.newFoundDocument(r,i,s,o);return t&&a.setHasCommittedMutations(),t?a.setHasCommittedMutations():a}function QE(n,e){return"found"in e?function(r,i){S(!!i.found),i.found.name,i.found.updateTime;const s=We(r,i.found.name),o=re(i.found.updateTime),a=i.found.createTime?re(i.found.createTime):R.min(),c=new _e({mapValue:{fields:i.found.fields}});return H.newFoundDocument(s,o,a,c)}(n,e):"missing"in e?function(r,i){S(!!i.missing),S(!!i.readTime);const s=We(r,i.missing),o=re(i.readTime);return H.newNoDocument(s,o)}(n,e):A()}function YE(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:A()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(u,l){return u.useProto3Json?(S(l===void 0||typeof l=="string"),oe.fromBase64String(l||"")):(S(l===void 0||l instanceof Uint8Array),oe.fromUint8Array(l||new Uint8Array))}(n,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const l=u.code===void 0?g.UNKNOWN:em(u.code);return new p(l,u.message||"")}(o);t=new rm(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=We(n,r.document.name),s=re(r.document.updateTime),o=r.document.createTime?re(r.document.createTime):R.min(),a=new _e({mapValue:{fields:r.document.fields}}),c=H.newFoundDocument(i,s,o,a),u=r.targetIds||[],l=r.removedTargetIds||[];t=new ns(u,l,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=We(n,r.document),s=r.readTime?re(r.readTime):R.min(),o=H.newNoDocument(i,s),a=r.removedTargetIds||[];t=new ns([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=We(n,r.document),s=r.removedTargetIds||[];t=new ns([],s,i,null)}else{if(!("filter"in e))return A();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new qE(i,s),a=r.targetId;t=new nm(a,o)}}return t}function ri(n,e){let t;if(e instanceof ur)t={update:Cl(n,e.key,e.value)};else if(e instanceof lr)t={delete:ti(n,e.key)};else if(e instanceof ut)t={update:Cl(n,e.key,e.data),updateMask:nw(e.fieldMask)};else{if(!(e instanceof Tc))return A();t={verify:ti(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof Yn)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof ln)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof hn)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Xn)return{fieldPath:o.field.canonicalString(),increment:a.Te};throw A()}(0,r))),e.precondition.isNone||(t.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:HE(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:A()}(n,e.precondition)),t}function Aa(n,e){const t=e.currentDocument?function(s){return s.updateTime!==void 0?Q.updateTime(re(s.updateTime)):s.exists!==void 0?Q.exists(s.exists):Q.none()}(e.currentDocument):Q.none(),r=e.updateTransforms?e.updateTransforms.map(i=>function(o,a){let c=null;if("setToServerValue"in a)S(a.setToServerValue==="REQUEST_TIME"),c=new Yn;else if("appendMissingElements"in a){const l=a.appendMissingElements.values||[];c=new ln(l)}else if("removeAllFromArray"in a){const l=a.removeAllFromArray.values||[];c=new hn(l)}else"increment"in a?c=new Xn(o,a.increment):A();const u=Z.fromServerFormat(a.fieldPath);return new Si(u,c)}(n,i)):[];if(e.update){e.update.name;const i=We(n,e.update.name),s=new _e({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(c){const u=c.fieldPaths||[];return new De(u.map(l=>Z.fromServerFormat(l)))}(e.updateMask);return new ut(i,s,o,t,r)}return new ur(i,s,t,r)}if(e.delete){const i=We(n,e.delete);return new lr(i,t)}if(e.verify){const i=We(n,e.verify);return new Tc(i,t)}return A()}function XE(n,e){return n&&n.length>0?(S(e!==void 0),n.map(t=>function(i,s){let o=i.updateTime?re(i.updateTime):re(s);return o.isEqual(R.min())&&(o=re(s)),new FE(o,i.transformResults||[])}(t,e))):[]}function um(n,e){return{documents:[Ta(n,e.path)]}}function lm(n,e){const t={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(t.parent=Ta(n,r),t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(t.parent=Ta(n,r.popLast()),t.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(c){if(c.length!==0)return fm(U.create(c,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const s=function(c){if(c.length!==0)return c.map(u=>function(h){return{field:Nn(h.field),direction:ZE(h.dir)}}(u))}(e.orderBy);s&&(t.structuredQuery.orderBy=s);const o=wa(n,e.limit);return o!==null&&(t.structuredQuery.limit=o),e.startAt&&(t.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),t}function hm(n){let e=om(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let i=null;if(r>0){S(r===1);const l=t.from[0];l.allDescendants?i=l.collectionId:e=e.child(l.collectionId)}let s=[];t.where&&(s=function(h){const d=dm(h);return d instanceof U&&Ic(d)?d.getFilters():[d]}(t.where));let o=[];t.orderBy&&(o=function(h){return h.map(d=>function(y){return new $n(xn(y.field),function(v){switch(v){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(y.direction))}(d))}(t.orderBy));let a=null;t.limit&&(a=function(h){let d;return d=typeof h=="object"?h.value:h,wi(d)?null:d}(t.limit));let c=null;t.startAt&&(c=function(h){const d=!!h.before,f=h.values||[];return new kt(f,d)}(t.startAt));let u=null;return t.endAt&&(u=function(h){const d=!h.before,f=h.values||[];return new kt(f,d)}(t.endAt)),Lf(e,i,o,s,a,"F",c,u)}function JE(n,e){const t=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return A()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function dm(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=xn(t.unaryFilter.field);return x.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=xn(t.unaryFilter.field);return x.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=xn(t.unaryFilter.field);return x.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=xn(t.unaryFilter.field);return x.create(o,"!=",{nullValue:"NULL_VALUE"});default:return A()}}(n):n.fieldFilter!==void 0?function(t){return x.create(xn(t.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return A()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return U.create(t.compositeFilter.filters.map(r=>dm(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return A()}}(t.compositeFilter.op))}(n):A()}function ZE(n){return GE[n]}function ew(n){return zE[n]}function tw(n){return KE[n]}function Nn(n){return{fieldPath:n.canonicalString()}}function xn(n){return Z.fromServerFormat(n.fieldPath)}function fm(n){return n instanceof x?function(t){if(t.op==="=="){if(dl(t.value))return{unaryFilter:{field:Nn(t.field),op:"IS_NAN"}};if(hl(t.value))return{unaryFilter:{field:Nn(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(dl(t.value))return{unaryFilter:{field:Nn(t.field),op:"IS_NOT_NAN"}};if(hl(t.value))return{unaryFilter:{field:Nn(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Nn(t.field),op:ew(t.op),value:t.value}}}(n):n instanceof U?function(t){const r=t.getFilters().map(i=>fm(i));return r.length===1?r[0]:{compositeFilter:{op:tw(t.op),filters:r}}}(n):A()}function nw(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function mm(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(e,t,r,i,s=R.min(),o=R.min(),a=oe.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(e){return new nt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new nt(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new nt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new nt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gm{constructor(e){this.ht=e}}function rw(n,e){let t;if(e.document)t=cm(n.ht,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const r=E.fromSegments(e.noDocument.path),i=fn(e.noDocument.readTime);t=H.newNoDocument(r,i),e.hasCommittedMutations&&t.setHasCommittedMutations()}else{if(!e.unknownDocument)return A();{const r=E.fromSegments(e.unknownDocument.path),i=fn(e.unknownDocument.version);t=H.newUnknownDocument(r,i)}}return e.readTime&&t.setReadTime(function(i){const s=new Y(i[0],i[1]);return R.fromTimestamp(s)}(e.readTime)),t}function Dl(n,e){const t=e.key,r={prefixPath:t.getCollectionPath().popLast().toArray(),collectionGroup:t.collectionGroup,documentId:t.path.lastSegment(),readTime:Rs(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())r.document=function(s,o){return{name:ti(s,o.key),fields:o.data.value.mapValue.fields,updateTime:Jn(s,o.version.toTimestamp()),createTime:Jn(s,o.createTime.toTimestamp())}}(n.ht,e);else if(e.isNoDocument())r.noDocument={path:t.path.toArray(),readTime:dn(e.version)};else{if(!e.isUnknownDocument())return A();r.unknownDocument={path:t.path.toArray(),version:dn(e.version)}}return r}function Rs(n){const e=n.toTimestamp();return[e.seconds,e.nanoseconds]}function dn(n){const e=n.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function fn(n){const e=new Y(n.seconds,n.nanoseconds);return R.fromTimestamp(e)}function Ht(n,e){const t=(e.baseMutations||[]).map(s=>Aa(n.ht,s));for(let s=0;s<e.mutations.length-1;++s){const o=e.mutations[s];if(s+1<e.mutations.length&&e.mutations[s+1].transform!==void 0){const a=e.mutations[s+1];o.updateTransforms=a.transform.fieldTransforms,e.mutations.splice(s+1,1),++s}}const r=e.mutations.map(s=>Aa(n.ht,s)),i=Y.fromMillis(e.localWriteTimeMs);return new Ac(e.batchId,i,t,r)}function Pr(n){const e=fn(n.readTime),t=n.lastLimboFreeSnapshotVersion!==void 0?fn(n.lastLimboFreeSnapshotVersion):R.min();let r;return r=function(s){return s.documents!==void 0}(n.query)?function(s){return S(s.documents.length===1),Se(cr(om(s.documents[0])))}(n.query):function(s){return Se(hm(s))}(n.query),new nt(r,n.targetId,"TargetPurposeListen",n.lastListenSequenceNumber,e,t,oe.fromBase64String(n.resumeToken))}function pm(n,e){const t=dn(e.snapshotVersion),r=dn(e.lastLimboFreeSnapshotVersion);let i;i=ws(e.target)?um(n.ht,e.target):lm(n.ht,e.target);const s=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:un(e.target),readTime:t,resumeToken:s,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:i}}function Cc(n){const e=hm({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?As(e,e.limit,"L"):e}function Ko(n,e){return new Sc(e.largestBatchId,Aa(n.ht,e.overlayMutation))}function Vl(n,e){const t=e.path.lastSegment();return[n,Re(e.path.popLast()),t]}function kl(n,e,t,r){return{indexId:n,uid:e.uid||"",sequenceNumber:t,readTime:dn(r.readTime),documentKey:Re(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iw{getBundleMetadata(e,t){return Nl(e).get(t).next(r=>{if(r)return function(s){return{id:s.bundleId,createTime:fn(s.createTime),version:s.version}}(r)})}saveBundleMetadata(e,t){return Nl(e).put(function(i){return{bundleId:i.id,createTime:dn(re(i.createTime)),version:i.version}}(t))}getNamedQuery(e,t){return xl(e).get(t).next(r=>{if(r)return function(s){return{name:s.name,query:Cc(s.bundledQuery),readTime:fn(s.readTime)}}(r)})}saveNamedQuery(e,t){return xl(e).put(function(i){return{name:i.name,readTime:dn(re(i.readTime)),bundledQuery:i.bundledQuery}}(t))}}function Nl(n){return de(n,"bundles")}function xl(n){return de(n,"namedQueries")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uo{constructor(e,t){this.serializer=e,this.userId=t}static Pt(e,t){const r=t.uid||"";return new uo(e,r)}getOverlay(e,t){return Ir(e).get(Vl(this.userId,t)).next(r=>r?Ko(this.serializer,r):null)}getOverlays(e,t){const r=Ge();return m.forEach(t,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,t,r){const i=[];return r.forEach((s,o)=>{const a=new Sc(t,o);i.push(this.It(e,a))}),m.waitFor(i)}removeOverlaysForBatchId(e,t,r){const i=new Set;t.forEach(o=>i.add(Re(o.getCollectionPath())));const s=[];return i.forEach(o=>{const a=IDBKeyRange.bound([this.userId,o,r],[this.userId,o,r+1],!1,!0);s.push(Ir(e).J("collectionPathOverlayIndex",a))}),m.waitFor(s)}getOverlaysForCollection(e,t,r){const i=Ge(),s=Re(t),o=IDBKeyRange.bound([this.userId,s,r],[this.userId,s,Number.POSITIVE_INFINITY],!0);return Ir(e).G("collectionPathOverlayIndex",o).next(a=>{for(const c of a){const u=Ko(this.serializer,c);i.set(u.getKey(),u)}return i})}getOverlaysForCollectionGroup(e,t,r,i){const s=Ge();let o;const a=IDBKeyRange.bound([this.userId,t,r],[this.userId,t,Number.POSITIVE_INFINITY],!0);return Ir(e).Z({index:"collectionGroupOverlayIndex",range:a},(c,u,l)=>{const h=Ko(this.serializer,u);s.size()<i||h.largestBatchId===o?(s.set(h.getKey(),h),o=h.largestBatchId):l.done()}).next(()=>s)}It(e,t){return Ir(e).put(function(i,s,o){const[a,c,u]=Vl(s,o.mutation.key);return{userId:s,collectionPath:c,documentId:u,collectionGroup:o.mutation.key.getCollectionGroup(),largestBatchId:o.largestBatchId,overlayMutation:ri(i.ht,o.mutation)}}(this.serializer,this.userId,t))}}function Ir(n){return de(n,"documentOverlays")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt{constructor(){}dt(e,t){this.Tt(e,t),t.Et()}Tt(e,t){if("nullValue"in e)this.At(t,5);else if("booleanValue"in e)this.At(t,10),t.Rt(e.booleanValue?1:0);else if("integerValue"in e)this.At(t,15),t.Rt(J(e.integerValue));else if("doubleValue"in e){const r=J(e.doubleValue);isNaN(r)?this.At(t,13):(this.At(t,15),Xr(r)?t.Rt(0):t.Rt(r))}else if("timestampValue"in e){const r=e.timestampValue;this.At(t,20),typeof r=="string"?t.Vt(r):(t.Vt(`${r.seconds||""}`),t.Rt(r.nanos||0))}else if("stringValue"in e)this.ft(e.stringValue,t),this.gt(t);else if("bytesValue"in e)this.At(t,30),t.yt(Ct(e.bytesValue)),this.gt(t);else if("referenceValue"in e)this.wt(e.referenceValue,t);else if("geoPointValue"in e){const r=e.geoPointValue;this.At(t,45),t.Rt(r.latitude||0),t.Rt(r.longitude||0)}else"mapValue"in e?Pf(e)?this.At(t,Number.MAX_SAFE_INTEGER):(this.St(e.mapValue,t),this.gt(t)):"arrayValue"in e?(this.bt(e.arrayValue,t),this.gt(t)):A()}ft(e,t){this.At(t,25),this.Dt(e,t)}Dt(e,t){t.Vt(e)}St(e,t){const r=e.fields||{};this.At(t,55);for(const i of Object.keys(r))this.ft(i,t),this.Tt(r[i],t)}bt(e,t){const r=e.values||[];this.At(t,50);for(const i of r)this.Tt(i,t)}wt(e,t){this.At(t,37),E.fromName(e).path.forEach(r=>{this.At(t,60),this.Dt(r,t)})}At(e,t){e.Rt(t)}gt(e){e.Rt(2)}}Qt.Ct=new Qt;function sw(n){if(n===0)return 8;let e=0;return!(n>>4)&&(e+=4,n<<=4),!(n>>6)&&(e+=2,n<<=2),!(n>>7)&&(e+=1),e}function Ol(n){const e=64-function(r){let i=0;for(let s=0;s<8;++s){const o=sw(255&r[s]);if(i+=o,o!==8)break}return i}(n);return Math.ceil(e/8)}class ow{constructor(){this.buffer=new Uint8Array(1024),this.position=0}vt(e){const t=e[Symbol.iterator]();let r=t.next();for(;!r.done;)this.Ft(r.value),r=t.next();this.Mt()}xt(e){const t=e[Symbol.iterator]();let r=t.next();for(;!r.done;)this.Ot(r.value),r=t.next();this.Nt()}Bt(e){for(const t of e){const r=t.charCodeAt(0);if(r<128)this.Ft(r);else if(r<2048)this.Ft(960|r>>>6),this.Ft(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.Ft(480|r>>>12),this.Ft(128|63&r>>>6),this.Ft(128|63&r);else{const i=t.codePointAt(0);this.Ft(240|i>>>18),this.Ft(128|63&i>>>12),this.Ft(128|63&i>>>6),this.Ft(128|63&i)}}this.Mt()}Lt(e){for(const t of e){const r=t.charCodeAt(0);if(r<128)this.Ot(r);else if(r<2048)this.Ot(960|r>>>6),this.Ot(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.Ot(480|r>>>12),this.Ot(128|63&r>>>6),this.Ot(128|63&r);else{const i=t.codePointAt(0);this.Ot(240|i>>>18),this.Ot(128|63&i>>>12),this.Ot(128|63&i>>>6),this.Ot(128|63&i)}}this.Nt()}kt(e){const t=this.qt(e),r=Ol(t);this.Qt(1+r),this.buffer[this.position++]=255&r;for(let i=t.length-r;i<t.length;++i)this.buffer[this.position++]=255&t[i]}Kt(e){const t=this.qt(e),r=Ol(t);this.Qt(1+r),this.buffer[this.position++]=~(255&r);for(let i=t.length-r;i<t.length;++i)this.buffer[this.position++]=~(255&t[i])}$t(){this.Ut(255),this.Ut(255)}Wt(){this.Gt(255),this.Gt(255)}reset(){this.position=0}seed(e){this.Qt(e.length),this.buffer.set(e,this.position),this.position+=e.length}zt(){return this.buffer.slice(0,this.position)}qt(e){const t=function(s){const o=new DataView(new ArrayBuffer(8));return o.setFloat64(0,s,!1),new Uint8Array(o.buffer)}(e),r=(128&t[0])!=0;t[0]^=r?255:128;for(let i=1;i<t.length;++i)t[i]^=r?255:0;return t}Ft(e){const t=255&e;t===0?(this.Ut(0),this.Ut(255)):t===255?(this.Ut(255),this.Ut(0)):this.Ut(t)}Ot(e){const t=255&e;t===0?(this.Gt(0),this.Gt(255)):t===255?(this.Gt(255),this.Gt(0)):this.Gt(e)}Mt(){this.Ut(0),this.Ut(1)}Nt(){this.Gt(0),this.Gt(1)}Ut(e){this.Qt(1),this.buffer[this.position++]=e}Gt(e){this.Qt(1),this.buffer[this.position++]=~e}Qt(e){const t=e+this.position;if(t<=this.buffer.length)return;let r=2*this.buffer.length;r<t&&(r=t);const i=new Uint8Array(r);i.set(this.buffer),this.buffer=i}}class aw{constructor(e){this.jt=e}yt(e){this.jt.vt(e)}Vt(e){this.jt.Bt(e)}Rt(e){this.jt.kt(e)}Et(){this.jt.$t()}}class cw{constructor(e){this.jt=e}yt(e){this.jt.xt(e)}Vt(e){this.jt.Lt(e)}Rt(e){this.jt.Kt(e)}Et(){this.jt.Wt()}}class vr{constructor(){this.jt=new ow,this.Ht=new aw(this.jt),this.Jt=new cw(this.jt)}seed(e){this.jt.seed(e)}Yt(e){return e===0?this.Ht:this.Jt}zt(){return this.jt.zt()}reset(){this.jt.reset()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt{constructor(e,t,r,i){this.indexId=e,this.documentKey=t,this.arrayValue=r,this.directionalValue=i}Zt(){const e=this.directionalValue.length,t=e===0||this.directionalValue[e-1]===255?e+1:e,r=new Uint8Array(t);return r.set(this.directionalValue,0),t!==e?r.set([0],this.directionalValue.length):++r[r.length-1],new Yt(this.indexId,this.documentKey,this.arrayValue,r)}}function ft(n,e){let t=n.indexId-e.indexId;return t!==0?t:(t=Ml(n.arrayValue,e.arrayValue),t!==0?t:(t=Ml(n.directionalValue,e.directionalValue),t!==0?t:E.comparator(n.documentKey,e.documentKey)))}function Ml(n,e){for(let t=0;t<n.length&&t<e.length;++t){const r=n[t]-e[t];if(r!==0)return r}return n.length-e.length}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ll{constructor(e){this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.Xt=e.orderBy,this.en=[];for(const t of e.filters){const r=t;r.isInequality()?this.tn=r:this.en.push(r)}}nn(e){S(e.collectionGroup===this.collectionId);const t=ma(e);if(t!==void 0&&!this.rn(t))return!1;const r=Kt(e);let i=new Set,s=0,o=0;for(;s<r.length&&this.rn(r[s]);++s)i=i.add(r[s].fieldPath.canonicalString());if(s===r.length)return!0;if(this.tn!==void 0){if(!i.has(this.tn.field.canonicalString())){const a=r[s];if(!this.sn(this.tn,a)||!this.on(this.Xt[o++],a))return!1}++s}for(;s<r.length;++s){const a=r[s];if(o>=this.Xt.length||!this.on(this.Xt[o++],a))return!1}return!0}_n(){let e=new q(Z.comparator);const t=[];for(const r of this.en)if(!r.field.isKeyField())if(r.op==="array-contains"||r.op==="array-contains-any")t.push(new Xi(r.field,2));else{if(e.has(r.field))continue;e=e.add(r.field),t.push(new Xi(r.field,0))}for(const r of this.Xt)r.field.isKeyField()||e.has(r.field)||(e=e.add(r.field),t.push(new Xi(r.field,r.dir==="asc"?0:1)));return new Es(Es.UNKNOWN_ID,this.collectionId,t,Yr.empty())}rn(e){for(const t of this.en)if(this.sn(t,e))return!0;return!1}sn(e,t){if(e===void 0||!e.field.isEqual(t.fieldPath))return!1;const r=e.op==="array-contains"||e.op==="array-contains-any";return t.kind===2===r}on(e,t){return!!e.field.isEqual(t.fieldPath)&&(t.kind===0&&e.dir==="asc"||t.kind===1&&e.dir==="desc")}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _m(n){var e,t;if(S(n instanceof x||n instanceof U),n instanceof x){if(n instanceof Mf){const i=((t=(e=n.value.arrayValue)===null||e===void 0?void 0:e.values)===null||t===void 0?void 0:t.map(s=>x.create(n.field,"==",s)))||[];return U.create(i,"or")}return n}const r=n.filters.map(i=>_m(i));return U.create(r,n.op)}function uw(n){if(n.getFilters().length===0)return[];const e=ba(_m(n));return S(ym(e)),Ra(e)||Sa(e)?[e]:e.getFilters()}function Ra(n){return n instanceof x}function Sa(n){return n instanceof U&&Ic(n)}function ym(n){return Ra(n)||Sa(n)||function(t){if(t instanceof U&&ya(t)){for(const r of t.getFilters())if(!Ra(r)&&!Sa(r))return!1;return!0}return!1}(n)}function ba(n){if(S(n instanceof x||n instanceof U),n instanceof x)return n;if(n.filters.length===1)return ba(n.filters[0]);const e=n.filters.map(r=>ba(r));let t=U.create(e,n.op);return t=Ss(t),ym(t)?t:(S(t instanceof U),S(Qn(t)),S(t.filters.length>1),t.filters.reduce((r,i)=>Dc(r,i)))}function Dc(n,e){let t;return S(n instanceof x||n instanceof U),S(e instanceof x||e instanceof U),t=n instanceof x?e instanceof x?function(i,s){return U.create([i,s],"and")}(n,e):Fl(n,e):e instanceof x?Fl(e,n):function(i,s){if(S(i.filters.length>0&&s.filters.length>0),Qn(i)&&Qn(s))return Nf(i,s.getFilters());const o=ya(i)?i:s,a=ya(i)?s:i,c=o.filters.map(u=>Dc(u,a));return U.create(c,"or")}(n,e),Ss(t)}function Fl(n,e){if(Qn(e))return Nf(e,n.getFilters());{const t=e.filters.map(r=>Dc(n,r));return U.create(t,"or")}}function Ss(n){if(S(n instanceof x||n instanceof U),n instanceof x)return n;const e=n.getFilters();if(e.length===1)return Ss(e[0]);if(Vf(n))return n;const t=e.map(i=>Ss(i)),r=[];return t.forEach(i=>{i instanceof x?r.push(i):i instanceof U&&(i.op===n.op?r.push(...i.filters):r.push(i))}),r.length===1?r[0]:U.create(r,n.op)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lw{constructor(){this.an=new Vc}addToCollectionParentIndex(e,t){return this.an.add(t),m.resolve()}getCollectionParents(e,t){return m.resolve(this.an.getEntries(t))}addFieldIndex(e,t){return m.resolve()}deleteFieldIndex(e,t){return m.resolve()}deleteAllFieldIndexes(e){return m.resolve()}createTargetIndexes(e,t){return m.resolve()}getDocumentsMatchingTarget(e,t){return m.resolve(null)}getIndexType(e,t){return m.resolve(0)}getFieldIndexes(e,t){return m.resolve([])}getNextCollectionGroupToUpdate(e){return m.resolve(null)}getMinOffset(e,t){return m.resolve(Ne.min())}getMinOffsetFromCollectionGroup(e,t){return m.resolve(Ne.min())}updateCollectionGroup(e,t,r){return m.resolve()}updateIndexEntries(e,t){return m.resolve()}}class Vc{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t]||new q(M.comparator),s=!i.has(r);return this.index[t]=i.add(r),s}has(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t];return i&&i.has(r)}getEntries(e){return(this.index[e]||new q(M.comparator)).toArray()}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ji=new Uint8Array(0);class hw{constructor(e,t){this.user=e,this.databaseId=t,this.un=new Vc,this.cn=new qt(r=>un(r),(r,i)=>Ti(r,i)),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.un.has(t)){const r=t.lastSegment(),i=t.popLast();e.addOnCommittedListener(()=>{this.un.add(t)});const s={collectionId:r,parent:Re(i)};return Ul(e).put(s)}return m.resolve()}getCollectionParents(e,t){const r=[],i=IDBKeyRange.bound([t,""],[pf(t),""],!1,!0);return Ul(e).G(i).next(s=>{for(const o of s){if(o.collectionId!==t)break;r.push(je(o.parent))}return r})}addFieldIndex(e,t){const r=Er(e),i=function(a){return{indexId:a.indexId,collectionGroup:a.collectionGroup,fields:a.fields.map(c=>[c.fieldPath.canonicalString(),c.kind])}}(t);delete i.indexId;const s=r.add(i);if(t.indexState){const o=Cn(e);return s.next(a=>{o.put(kl(a,this.user,t.indexState.sequenceNumber,t.indexState.offset))})}return s.next()}deleteFieldIndex(e,t){const r=Er(e),i=Cn(e),s=Pn(e);return r.delete(t.indexId).next(()=>i.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))).next(()=>s.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))}deleteAllFieldIndexes(e){const t=Er(e),r=Pn(e),i=Cn(e);return t.J().next(()=>r.J()).next(()=>i.J())}createTargetIndexes(e,t){return m.forEach(this.ln(t),r=>this.getIndexType(e,r).next(i=>{if(i===0||i===1){const s=new Ll(r);return this.addFieldIndex(e,s._n())}}))}getDocumentsMatchingTarget(e,t){const r=Pn(e);let i=!0;const s=new Map;return m.forEach(this.ln(t),o=>this.hn(e,o).next(a=>{i&&(i=!!a),s.set(o,a)})).next(()=>{if(i){let o=V();const a=[];return m.forEach(s,(c,u)=>{_("IndexedDbIndexManager",`Using index ${function(k){return`id=${k.indexId}|cg=${k.collectionGroup}|f=${k.fields.map(G=>`${G.fieldPath}:${G.kind}`).join(",")}`}(c)} to execute ${un(t)}`);const l=function(k,G){const z=ma(G);if(z===void 0)return null;for(const K of Ts(k,z.fieldPath))switch(K.op){case"array-contains-any":return K.value.arrayValue.values||[];case"array-contains":return[K.value]}return null}(u,c),h=function(k,G){const z=new Map;for(const K of Kt(G))for(const me of Ts(k,K.fieldPath))switch(me.op){case"==":case"in":z.set(K.fieldPath.canonicalString(),me.value);break;case"not-in":case"!=":return z.set(K.fieldPath.canonicalString(),me.value),Array.from(z.values())}return null}(u,c),d=function(k,G){const z=[];let K=!0;for(const me of Kt(G)){const ht=me.kind===0?_l(k,me.fieldPath,k.startAt):yl(k,me.fieldPath,k.startAt);z.push(ht.value),K&&(K=ht.inclusive)}return new kt(z,K)}(u,c),f=function(k,G){const z=[];let K=!0;for(const me of Kt(G)){const ht=me.kind===0?yl(k,me.fieldPath,k.endAt):_l(k,me.fieldPath,k.endAt);z.push(ht.value),K&&(K=ht.inclusive)}return new kt(z,K)}(u,c),y=this.Pn(c,u,d),I=this.Pn(c,u,f),v=this.In(c,u,h),b=this.dn(c.indexId,l,y,d.inclusive,I,f.inclusive,v);return m.forEach(b,L=>r.H(L,t.limit).next(k=>{k.forEach(G=>{const z=E.fromSegments(G.documentKey);o.has(z)||(o=o.add(z),a.push(z))})}))}).next(()=>a)}return m.resolve(null)})}ln(e){let t=this.cn.get(e);return t||(e.filters.length===0?t=[e]:t=uw(U.create(e.filters,"and")).map(r=>va(e.path,e.collectionGroup,e.orderBy,r.getFilters(),e.limit,e.startAt,e.endAt)),this.cn.set(e,t),t)}dn(e,t,r,i,s,o,a){const c=(t!=null?t.length:1)*Math.max(r.length,s.length),u=c/(t!=null?t.length:1),l=[];for(let h=0;h<c;++h){const d=t?this.Tn(t[h/u]):ji,f=this.En(e,d,r[h%u],i),y=this.An(e,d,s[h%u],o),I=a.map(v=>this.En(e,d,v,!0));l.push(...this.createRange(f,y,I))}return l}En(e,t,r,i){const s=new Yt(e,E.empty(),t,r);return i?s:s.Zt()}An(e,t,r,i){const s=new Yt(e,E.empty(),t,r);return i?s.Zt():s}hn(e,t){const r=new Ll(t),i=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,i).next(s=>{let o=null;for(const a of s)r.nn(a)&&(!o||a.fields.length>o.fields.length)&&(o=a);return o})}getIndexType(e,t){let r=2;const i=this.ln(t);return m.forEach(i,s=>this.hn(e,s).next(o=>{o?r!==0&&o.fields.length<function(c){let u=new q(Z.comparator),l=!1;for(const h of c.filters)for(const d of h.getFlattenedFilters())d.field.isKeyField()||(d.op==="array-contains"||d.op==="array-contains-any"?l=!0:u=u.add(d.field));for(const h of c.orderBy)h.field.isKeyField()||(u=u.add(h.field));return u.size+(l?1:0)}(s)&&(r=1):r=0})).next(()=>function(o){return o.limit!==null}(t)&&i.length>1&&r===2?1:r)}Rn(e,t){const r=new vr;for(const i of Kt(e)){const s=t.data.field(i.fieldPath);if(s==null)return null;const o=r.Yt(i.kind);Qt.Ct.dt(s,o)}return r.zt()}Tn(e){const t=new vr;return Qt.Ct.dt(e,t.Yt(0)),t.zt()}Vn(e,t){const r=new vr;return Qt.Ct.dt(cn(this.databaseId,t),r.Yt(function(s){const o=Kt(s);return o.length===0?0:o[o.length-1].kind}(e))),r.zt()}In(e,t,r){if(r===null)return[];let i=[];i.push(new vr);let s=0;for(const o of Kt(e)){const a=r[s++];for(const c of i)if(this.mn(t,o.fieldPath)&&ei(a))i=this.fn(i,o,a);else{const u=c.Yt(o.kind);Qt.Ct.dt(a,u)}}return this.gn(i)}Pn(e,t,r){return this.In(e,t,r.position)}gn(e){const t=[];for(let r=0;r<e.length;++r)t[r]=e[r].zt();return t}fn(e,t,r){const i=[...e],s=[];for(const o of r.arrayValue.values||[])for(const a of i){const c=new vr;c.seed(a.zt()),Qt.Ct.dt(o,c.Yt(t.kind)),s.push(c)}return s}mn(e,t){return!!e.filters.find(r=>r instanceof x&&r.field.isEqual(t)&&(r.op==="in"||r.op==="not-in"))}getFieldIndexes(e,t){const r=Er(e),i=Cn(e);return(t?r.G("collectionGroupIndex",IDBKeyRange.bound(t,t)):r.G()).next(s=>{const o=[];return m.forEach(s,a=>i.get([a.indexId,this.uid]).next(c=>{o.push(function(l,h){const d=h?new Yr(h.sequenceNumber,new Ne(fn(h.readTime),new E(je(h.documentKey)),h.largestBatchId)):Yr.empty(),f=l.fields.map(([y,I])=>new Xi(Z.fromServerFormat(y),I));return new Es(l.indexId,l.collectionGroup,f,d)}(a,c))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(t=>t.length===0?null:(t.sort((r,i)=>{const s=r.indexState.sequenceNumber-i.indexState.sequenceNumber;return s!==0?s:D(r.collectionGroup,i.collectionGroup)}),t[0].collectionGroup))}updateCollectionGroup(e,t,r){const i=Er(e),s=Cn(e);return this.pn(e).next(o=>i.G("collectionGroupIndex",IDBKeyRange.bound(t,t)).next(a=>m.forEach(a,c=>s.put(kl(c.indexId,this.user,o,r)))))}updateIndexEntries(e,t){const r=new Map;return m.forEach(t,(i,s)=>{const o=r.get(i.collectionGroup);return(o?m.resolve(o):this.getFieldIndexes(e,i.collectionGroup)).next(a=>(r.set(i.collectionGroup,a),m.forEach(a,c=>this.yn(e,i,c).next(u=>{const l=this.wn(s,c);return u.isEqual(l)?m.resolve():this.Sn(e,s,c,u,l)}))))})}bn(e,t,r,i){return Pn(e).put({indexId:i.indexId,uid:this.uid,arrayValue:i.arrayValue,directionalValue:i.directionalValue,orderedDocumentKey:this.Vn(r,t.key),documentKey:t.key.path.toArray()})}Dn(e,t,r,i){return Pn(e).delete([i.indexId,this.uid,i.arrayValue,i.directionalValue,this.Vn(r,t.key),t.key.path.toArray()])}yn(e,t,r){const i=Pn(e);let s=new q(ft);return i.Z({index:"documentKeyIndex",range:IDBKeyRange.only([r.indexId,this.uid,this.Vn(r,t)])},(o,a)=>{s=s.add(new Yt(r.indexId,t,a.arrayValue,a.directionalValue))}).next(()=>s)}wn(e,t){let r=new q(ft);const i=this.Rn(t,e);if(i==null)return r;const s=ma(t);if(s!=null){const o=e.data.field(s.fieldPath);if(ei(o))for(const a of o.arrayValue.values||[])r=r.add(new Yt(t.indexId,e.key,this.Tn(a),i))}else r=r.add(new Yt(t.indexId,e.key,ji,i));return r}Sn(e,t,r,i,s){_("IndexedDbIndexManager","Updating index entries for document '%s'",t.key);const o=[];return function(c,u,l,h,d){const f=c.getIterator(),y=u.getIterator();let I=bn(f),v=bn(y);for(;I||v;){let b=!1,L=!1;if(I&&v){const k=l(I,v);k<0?L=!0:k>0&&(b=!0)}else I!=null?L=!0:b=!0;b?(h(v),v=bn(y)):L?(d(I),I=bn(f)):(I=bn(f),v=bn(y))}}(i,s,ft,a=>{o.push(this.bn(e,t,r,a))},a=>{o.push(this.Dn(e,t,r,a))}),m.waitFor(o)}pn(e){let t=1;return Cn(e).Z({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(r,i,s)=>{s.done(),t=i.sequenceNumber+1}).next(()=>t)}createRange(e,t,r){r=r.sort((o,a)=>ft(o,a)).filter((o,a,c)=>!a||ft(o,c[a-1])!==0);const i=[];i.push(e);for(const o of r){const a=ft(o,e),c=ft(o,t);if(a===0)i[0]=e.Zt();else if(a>0&&c<0)i.push(o),i.push(o.Zt());else if(c>0)break}i.push(t);const s=[];for(let o=0;o<i.length;o+=2){if(this.Cn(i[o],i[o+1]))return[];const a=[i[o].indexId,this.uid,i[o].arrayValue,i[o].directionalValue,ji,[]],c=[i[o+1].indexId,this.uid,i[o+1].arrayValue,i[o+1].directionalValue,ji,[]];s.push(IDBKeyRange.bound(a,c))}return s}Cn(e,t){return ft(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(Bl)}getMinOffset(e,t){return m.mapArray(this.ln(t),r=>this.hn(e,r).next(i=>i||A())).next(Bl)}}function Ul(n){return de(n,"collectionParents")}function Pn(n){return de(n,"indexEntries")}function Er(n){return de(n,"indexConfiguration")}function Cn(n){return de(n,"indexState")}function Bl(n){S(n.length!==0);let e=n[0].indexState.offset,t=e.largestBatchId;for(let r=1;r<n.length;r++){const i=n[r].indexState.offset;pc(i,e)<0&&(e=i),t<i.largestBatchId&&(t=i.largestBatchId)}return new Ne(e.readTime,e.documentKey,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ql={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Pe{constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}static withCacheSize(e){return new Pe(e,Pe.DEFAULT_COLLECTION_PERCENTILE,Pe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Im(n,e,t){const r=n.store("mutations"),i=n.store("documentMutations"),s=[],o=IDBKeyRange.only(t.batchId);let a=0;const c=r.Z({range:o},(l,h,d)=>(a++,d.delete()));s.push(c.next(()=>{S(a===1)}));const u=[];for(const l of t.mutations){const h=wf(e,l.key.path,t.batchId);s.push(i.delete(h)),u.push(l.key)}return m.waitFor(s).next(()=>u)}function bs(n){if(!n)return 0;let e;if(n.document)e=n.document;else if(n.unknownDocument)e=n.unknownDocument;else{if(!n.noDocument)throw A();e=n.noDocument}return JSON.stringify(e).length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Pe.DEFAULT_COLLECTION_PERCENTILE=10,Pe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Pe.DEFAULT=new Pe(41943040,Pe.DEFAULT_COLLECTION_PERCENTILE,Pe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Pe.DISABLED=new Pe(-1,0,0);class lo{constructor(e,t,r,i){this.userId=e,this.serializer=t,this.indexManager=r,this.referenceDelegate=i,this.vn={}}static Pt(e,t,r,i){S(e.uid!=="");const s=e.isAuthenticated()?e.uid:"";return new lo(s,t,r,i)}checkEmpty(e){let t=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return mt(e).Z({index:"userMutationsIndex",range:r},(i,s,o)=>{t=!1,o.done()}).next(()=>t)}addMutationBatch(e,t,r,i){const s=On(e),o=mt(e);return o.add({}).next(a=>{S(typeof a=="number");const c=new Ac(a,t,r,i),u=function(f,y,I){const v=I.baseMutations.map(L=>ri(f.ht,L)),b=I.mutations.map(L=>ri(f.ht,L));return{userId:y,batchId:I.batchId,localWriteTimeMs:I.localWriteTime.toMillis(),baseMutations:v,mutations:b}}(this.serializer,this.userId,c),l=[];let h=new q((d,f)=>D(d.canonicalString(),f.canonicalString()));for(const d of i){const f=wf(this.userId,d.key.path,a);h=h.add(d.key.path.popLast()),l.push(o.put(u)),l.push(s.put(f,Zv))}return h.forEach(d=>{l.push(this.indexManager.addToCollectionParentIndex(e,d))}),e.addOnCommittedListener(()=>{this.vn[a]=c.keys()}),m.waitFor(l).next(()=>c)})}lookupMutationBatch(e,t){return mt(e).get(t).next(r=>r?(S(r.userId===this.userId),Ht(this.serializer,r)):null)}Fn(e,t){return this.vn[t]?m.resolve(this.vn[t]):this.lookupMutationBatch(e,t).next(r=>{if(r){const i=r.keys();return this.vn[t]=i,i}return null})}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=IDBKeyRange.lowerBound([this.userId,r]);let s=null;return mt(e).Z({index:"userMutationsIndex",range:i},(o,a,c)=>{a.userId===this.userId&&(S(a.batchId>=r),s=Ht(this.serializer,a)),c.done()}).next(()=>s)}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=-1;return mt(e).Z({index:"userMutationsIndex",range:t,reverse:!0},(i,s,o)=>{r=s.batchId,o.done()}).next(()=>r)}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return mt(e).G("userMutationsIndex",t).next(r=>r.map(i=>Ht(this.serializer,i)))}getAllMutationBatchesAffectingDocumentKey(e,t){const r=Ji(this.userId,t.path),i=IDBKeyRange.lowerBound(r),s=[];return On(e).Z({range:i},(o,a,c)=>{const[u,l,h]=o,d=je(l);if(u===this.userId&&t.path.isEqual(d))return mt(e).get(h).next(f=>{if(!f)throw A();S(f.userId===this.userId),s.push(Ht(this.serializer,f))});c.done()}).next(()=>s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new q(D);const i=[];return t.forEach(s=>{const o=Ji(this.userId,s.path),a=IDBKeyRange.lowerBound(o),c=On(e).Z({range:a},(u,l,h)=>{const[d,f,y]=u,I=je(f);d===this.userId&&s.path.isEqual(I)?r=r.add(y):h.done()});i.push(c)}),m.waitFor(i).next(()=>this.Mn(e,r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1,s=Ji(this.userId,r),o=IDBKeyRange.lowerBound(s);let a=new q(D);return On(e).Z({range:o},(c,u,l)=>{const[h,d,f]=c,y=je(d);h===this.userId&&r.isPrefixOf(y)?y.length===i&&(a=a.add(f)):l.done()}).next(()=>this.Mn(e,a))}Mn(e,t){const r=[],i=[];return t.forEach(s=>{i.push(mt(e).get(s).next(o=>{if(o===null)throw A();S(o.userId===this.userId),r.push(Ht(this.serializer,o))}))}),m.waitFor(i).next(()=>r)}removeMutationBatch(e,t){return Im(e.ue,this.userId,t).next(r=>(e.addOnCommittedListener(()=>{this.xn(t.batchId)}),m.forEach(r,i=>this.referenceDelegate.markPotentiallyOrphaned(e,i))))}xn(e){delete this.vn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(t=>{if(!t)return m.resolve();const r=IDBKeyRange.lowerBound(function(o){return[o]}(this.userId)),i=[];return On(e).Z({range:r},(s,o,a)=>{if(s[0]===this.userId){const c=je(s[1]);i.push(c)}else a.done()}).next(()=>{S(i.length===0)})})}containsKey(e,t){return vm(e,this.userId,t)}On(e){return Em(e).get(this.userId).next(t=>t||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function vm(n,e,t){const r=Ji(e,t.path),i=r[1],s=IDBKeyRange.lowerBound(r);let o=!1;return On(n).Z({range:s,Y:!0},(a,c,u)=>{const[l,h,d]=a;l===e&&h===i&&(o=!0),u.done()}).next(()=>o)}function mt(n){return de(n,"mutations")}function On(n){return de(n,"documentMutations")}function Em(n){return de(n,"mutationQueues")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn{constructor(e){this.Nn=e}next(){return this.Nn+=2,this.Nn}static Bn(){return new mn(0)}static Ln(){return new mn(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dw{constructor(e,t){this.referenceDelegate=e,this.serializer=t}allocateTargetId(e){return this.kn(e).next(t=>{const r=new mn(t.highestTargetId);return t.highestTargetId=r.next(),this.qn(e,t).next(()=>t.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.kn(e).next(t=>R.fromTimestamp(new Y(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.kn(e).next(t=>t.highestListenSequenceNumber)}setTargetsMetadata(e,t,r){return this.kn(e).next(i=>(i.highestListenSequenceNumber=t,r&&(i.lastRemoteSnapshotVersion=r.toTimestamp()),t>i.highestListenSequenceNumber&&(i.highestListenSequenceNumber=t),this.qn(e,i)))}addTargetData(e,t){return this.Qn(e,t).next(()=>this.kn(e).next(r=>(r.targetCount+=1,this.Kn(t,r),this.qn(e,r))))}updateTargetData(e,t){return this.Qn(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next(()=>Dn(e).delete(t.targetId)).next(()=>this.kn(e)).next(r=>(S(r.targetCount>0),r.targetCount-=1,this.qn(e,r)))}removeTargets(e,t,r){let i=0;const s=[];return Dn(e).Z((o,a)=>{const c=Pr(a);c.sequenceNumber<=t&&r.get(c.targetId)===null&&(i++,s.push(this.removeTargetData(e,c)))}).next(()=>m.waitFor(s)).next(()=>i)}forEachTarget(e,t){return Dn(e).Z((r,i)=>{const s=Pr(i);t(s)})}kn(e){return $l(e).get("targetGlobalKey").next(t=>(S(t!==null),t))}qn(e,t){return $l(e).put("targetGlobalKey",t)}Qn(e,t){return Dn(e).put(pm(this.serializer,t))}Kn(e,t){let r=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,r=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.kn(e).next(t=>t.targetCount)}getTargetData(e,t){const r=un(t),i=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let s=null;return Dn(e).Z({range:i,index:"queryTargetsIndex"},(o,a,c)=>{const u=Pr(a);Ti(t,u.target)&&(s=u,c.done())}).next(()=>s)}addMatchingKeys(e,t,r){const i=[],s=It(e);return t.forEach(o=>{const a=Re(o.path);i.push(s.put({targetId:r,path:a})),i.push(this.referenceDelegate.addReference(e,r,o))}),m.waitFor(i)}removeMatchingKeys(e,t,r){const i=It(e);return m.forEach(t,s=>{const o=Re(s.path);return m.waitFor([i.delete([r,o]),this.referenceDelegate.removeReference(e,r,s)])})}removeMatchingKeysForTargetId(e,t){const r=It(e),i=IDBKeyRange.bound([t],[t+1],!1,!0);return r.delete(i)}getMatchingKeysForTargetId(e,t){const r=IDBKeyRange.bound([t],[t+1],!1,!0),i=It(e);let s=V();return i.Z({range:r,Y:!0},(o,a,c)=>{const u=je(o[1]),l=new E(u);s=s.add(l)}).next(()=>s)}containsKey(e,t){const r=Re(t.path),i=IDBKeyRange.bound([r],[pf(r)],!1,!0);let s=0;return It(e).Z({index:"documentTargetsIndex",Y:!0,range:i},([o,a],c,u)=>{o!==0&&(s++,u.done())}).next(()=>s>0)}lt(e,t){return Dn(e).get(t).next(r=>r?Pr(r):null)}}function Dn(n){return de(n,"targets")}function $l(n){return de(n,"targetGlobal")}function It(n){return de(n,"targetDocuments")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jl([n,e],[t,r]){const i=D(n,t);return i===0?D(e,r):i}class fw{constructor(e){this.$n=e,this.buffer=new q(jl),this.Un=0}Wn(){return++this.Un}Gn(e){const t=[e,this.Wn()];if(this.buffer.size<this.$n)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();jl(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class mw{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.zn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.jn(6e4)}stop(){this.zn&&(this.zn.cancel(),this.zn=null)}get started(){return this.zn!==null}jn(e){_("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.zn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.zn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Bt(t)?_("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await Ut(t)}await this.jn(3e5)})}}class gw{constructor(e,t){this.Hn=e,this.params=t}calculateTargetCount(e,t){return this.Hn.Jn(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return m.resolve(Ce.ae);const r=new fw(t);return this.Hn.forEachTarget(e,i=>r.Gn(i.sequenceNumber)).next(()=>this.Hn.Yn(e,i=>r.Gn(i))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.Hn.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.Hn.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(_("LruGarbageCollector","Garbage collection skipped; disabled"),m.resolve(ql)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(_("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),ql):this.Zn(e,t))}getCacheSize(e){return this.Hn.getCacheSize(e)}Zn(e,t){let r,i,s,o,a,c,u;const l=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(h=>(h>this.params.maximumSequenceNumbersToCollect?(_("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${h}`),i=this.params.maximumSequenceNumbersToCollect):i=h,o=Date.now(),this.nthSequenceNumber(e,i))).next(h=>(r=h,a=Date.now(),this.removeTargets(e,r,t))).next(h=>(s=h,c=Date.now(),this.removeOrphanedDocuments(e,r))).next(h=>(u=Date.now(),Vn()<=N.DEBUG&&_("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-l}ms
	Determined least recently used ${i} in `+(a-o)+`ms
	Removed ${s} targets in `+(c-a)+`ms
	Removed ${h} documents in `+(u-c)+`ms
Total Duration: ${u-l}ms`),m.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:h})))}}function pw(n,e){return new gw(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _w{constructor(e,t){this.db=e,this.garbageCollector=pw(this,t)}Jn(e){const t=this.Xn(e);return this.db.getTargetCache().getTargetCount(e).next(r=>t.next(i=>r+i))}Xn(e){let t=0;return this.Yn(e,r=>{t++}).next(()=>t)}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}Yn(e,t){return this.er(e,(r,i)=>t(i))}addReference(e,t,r){return Gi(e,r)}removeReference(e,t,r){return Gi(e,r)}removeTargets(e,t,r){return this.db.getTargetCache().removeTargets(e,t,r)}markPotentiallyOrphaned(e,t){return Gi(e,t)}tr(e,t){return function(i,s){let o=!1;return Em(i).X(a=>vm(i,a,s).next(c=>(c&&(o=!0),m.resolve(!c)))).next(()=>o)}(e,t)}removeOrphanedDocuments(e,t){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),i=[];let s=0;return this.er(e,(o,a)=>{if(a<=t){const c=this.tr(e,o).next(u=>{if(!u)return s++,r.getEntry(e,o).next(()=>(r.removeEntry(o,R.min()),It(e).delete(function(h){return[0,Re(h.path)]}(o))))});i.push(c)}}).next(()=>m.waitFor(i)).next(()=>r.apply(e)).next(()=>s)}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,t){return Gi(e,t)}er(e,t){const r=It(e);let i,s=Ce.ae;return r.Z({index:"documentTargetsIndex"},([o,a],{path:c,sequenceNumber:u})=>{o===0?(s!==Ce.ae&&t(new E(je(i)),s),s=u,i=c):s=Ce.ae}).next(()=>{s!==Ce.ae&&t(new E(je(i)),s)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function Gi(n,e){return It(n).put(function(r,i){return{targetId:0,path:Re(r.path),sequenceNumber:i}}(e,n.currentSequenceNumber))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wm{constructor(){this.changes=new qt(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,H.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?m.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yw{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,r){return Gt(e).put(r)}removeEntry(e,t,r){return Gt(e).delete(function(s,o){const a=s.path.toArray();return[a.slice(0,a.length-2),a[a.length-2],Rs(o),a[a.length-1]]}(t,r))}updateMetadata(e,t){return this.getMetadata(e).next(r=>(r.byteSize+=t,this.nr(e,r)))}getEntry(e,t){let r=H.newInvalidDocument(t);return Gt(e).Z({index:"documentKeyIndex",range:IDBKeyRange.only(wr(t))},(i,s)=>{r=this.rr(t,s)}).next(()=>r)}ir(e,t){let r={size:0,document:H.newInvalidDocument(t)};return Gt(e).Z({index:"documentKeyIndex",range:IDBKeyRange.only(wr(t))},(i,s)=>{r={document:this.rr(t,s),size:bs(s)}}).next(()=>r)}getEntries(e,t){let r=Ve();return this.sr(e,t,(i,s)=>{const o=this.rr(i,s);r=r.insert(i,o)}).next(()=>r)}_r(e,t){let r=Ve(),i=new j(E.comparator);return this.sr(e,t,(s,o)=>{const a=this.rr(s,o);r=r.insert(s,a),i=i.insert(s,bs(o))}).next(()=>({documents:r,ar:i}))}sr(e,t,r){if(t.isEmpty())return m.resolve();let i=new q(Kl);t.forEach(c=>i=i.add(c));const s=IDBKeyRange.bound(wr(i.first()),wr(i.last())),o=i.getIterator();let a=o.getNext();return Gt(e).Z({index:"documentKeyIndex",range:s},(c,u,l)=>{const h=E.fromSegments([...u.prefixPath,u.collectionGroup,u.documentId]);for(;a&&Kl(a,h)<0;)r(a,null),a=o.getNext();a&&a.isEqual(h)&&(r(a,u),a=o.hasNext()?o.getNext():null),a?l.W(wr(a)):l.done()}).next(()=>{for(;a;)r(a,null),a=o.hasNext()?o.getNext():null})}getDocumentsMatchingQuery(e,t,r,i,s){const o=t.path,a=[o.popLast().toArray(),o.lastSegment(),Rs(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],c=[o.popLast().toArray(),o.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return Gt(e).G(IDBKeyRange.bound(a,c,!0)).next(u=>{s==null||s.incrementDocumentReadCount(u.length);let l=Ve();for(const h of u){const d=this.rr(E.fromSegments(h.prefixPath.concat(h.collectionGroup,h.documentId)),h);d.isFoundDocument()&&(Ri(t,d)||i.has(d.key))&&(l=l.insert(d.key,d))}return l})}getAllFromCollectionGroup(e,t,r,i){let s=Ve();const o=zl(t,r),a=zl(t,Ne.max());return Gt(e).Z({index:"collectionGroupIndex",range:IDBKeyRange.bound(o,a,!0)},(c,u,l)=>{const h=this.rr(E.fromSegments(u.prefixPath.concat(u.collectionGroup,u.documentId)),u);s=s.insert(h.key,h),s.size===i&&l.done()}).next(()=>s)}newChangeBuffer(e){return new Iw(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(t=>t.byteSize)}getMetadata(e){return Gl(e).get("remoteDocumentGlobalKey").next(t=>(S(!!t),t))}nr(e,t){return Gl(e).put("remoteDocumentGlobalKey",t)}rr(e,t){if(t){const r=rw(this.serializer,t);if(!(r.isNoDocument()&&r.version.isEqual(R.min())))return r}return H.newInvalidDocument(e)}}function Tm(n){return new yw(n)}class Iw extends wm{constructor(e,t){super(),this.ur=e,this.trackRemovals=t,this.cr=new qt(r=>r.toString(),(r,i)=>r.isEqual(i))}applyChanges(e){const t=[];let r=0,i=new q((s,o)=>D(s.canonicalString(),o.canonicalString()));return this.changes.forEach((s,o)=>{const a=this.cr.get(s);if(t.push(this.ur.removeEntry(e,s,a.readTime)),o.isValidDocument()){const c=Dl(this.ur.serializer,o);i=i.add(s.path.popLast());const u=bs(c);r+=u-a.size,t.push(this.ur.addEntry(e,s,c))}else if(r-=a.size,this.trackRemovals){const c=Dl(this.ur.serializer,o.convertToNoDocument(R.min()));t.push(this.ur.addEntry(e,s,c))}}),i.forEach(s=>{t.push(this.ur.indexManager.addToCollectionParentIndex(e,s))}),t.push(this.ur.updateMetadata(e,r)),m.waitFor(t)}getFromCache(e,t){return this.ur.ir(e,t).next(r=>(this.cr.set(t,{size:r.size,readTime:r.document.readTime}),r.document))}getAllFromCache(e,t){return this.ur._r(e,t).next(({documents:r,ar:i})=>(i.forEach((s,o)=>{this.cr.set(s,{size:o,readTime:r.get(s).readTime})}),r))}}function Gl(n){return de(n,"remoteDocumentGlobal")}function Gt(n){return de(n,"remoteDocumentsV14")}function wr(n){const e=n.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function zl(n,e){const t=e.documentKey.path.toArray();return[n,Rs(e.readTime),t.slice(0,t.length-2),t.length>0?t[t.length-1]:""]}function Kl(n,e){const t=n.path.toArray(),r=e.path.toArray();let i=0;for(let s=0;s<t.length-2&&s<r.length-2;++s)if(i=D(t[s],r[s]),i)return i;return i=D(t.length,r.length),i||(i=D(t[t.length-2],r[r.length-2]),i||D(t[t.length-1],r[r.length-1]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vw{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Am{constructor(e,t,r,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,t))).next(i=>(r!==null&&xr(r.mutation,i,De.empty(),Y.now()),i))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,V()).next(()=>r))}getLocalViewOfDocuments(e,t,r=V()){const i=Ge();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,r).next(s=>{let o=Sr();return s.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,t){const r=Ge();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,V()))}populateOverlays(e,t,r){const i=[];return r.forEach(s=>{t.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{t.set(o,a)})})}computeViews(e,t,r,i){let s=Ve();const o=Nr(),a=function(){return Nr()}();return t.forEach((c,u)=>{const l=r.get(u.key);i.has(u.key)&&(l===void 0||l.mutation instanceof ut)?s=s.insert(u.key,u):l!==void 0?(o.set(u.key,l.mutation.getFieldMask()),xr(l.mutation,u,l.mutation.getFieldMask(),Y.now())):o.set(u.key,De.empty())}),this.recalculateAndSaveOverlays(e,s).next(c=>(c.forEach((u,l)=>o.set(u,l)),t.forEach((u,l)=>{var h;return a.set(u,new vw(l,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,t){const r=Nr();let i=new j((o,a)=>o-a),s=V();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(o=>{for(const a of o)a.keys().forEach(c=>{const u=t.get(c);if(u===null)return;let l=r.get(c)||De.empty();l=a.applyToLocalView(u,l),r.set(c,l);const h=(i.get(a.batchId)||V()).add(c);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),u=c.key,l=c.value,h=jf();l.forEach(d=>{if(!s.has(d)){const f=Xf(t.get(d),r.get(d));f!==null&&h.set(d,f),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return m.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,i){return function(o){return E.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Ec(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,i):this.getDocumentsMatchingCollectionQuery(e,t,r,i)}getNextDocuments(e,t,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,i-s.size):m.resolve(Ge());let a=-1,c=s;return o.next(u=>m.forEach(u,(l,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(l)?m.resolve():this.remoteDocumentCache.getEntry(e,l).next(d=>{c=c.insert(l,d)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,c,u,V())).next(l=>({batchId:a,changes:$f(l)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new E(t)).next(r=>{let i=Sr();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,t,r,i){const s=t.collectionGroup;let o=Sr();return this.indexManager.getCollectionParents(e,s).next(a=>m.forEach(a,c=>{const u=function(h,d){return new ct(d,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(t,c.child(s));return this.getDocumentsMatchingCollectionQuery(e,u,r,i).next(l=>{l.forEach((h,d)=>{o=o.insert(h,d)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,t,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,s,i))).next(o=>{s.forEach((c,u)=>{const l=u.getKey();o.get(l)===null&&(o=o.insert(l,H.newInvalidDocument(l)))});let a=Sr();return o.forEach((c,u)=>{const l=s.get(c);l!==void 0&&xr(l.mutation,u,De.empty(),Y.now()),Ri(t,u)&&(a=a.insert(c,u))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ew{constructor(e){this.serializer=e,this.lr=new Map,this.hr=new Map}getBundleMetadata(e,t){return m.resolve(this.lr.get(t))}saveBundleMetadata(e,t){return this.lr.set(t.id,function(i){return{id:i.id,version:i.version,createTime:re(i.createTime)}}(t)),m.resolve()}getNamedQuery(e,t){return m.resolve(this.hr.get(t))}saveNamedQuery(e,t){return this.hr.set(t.name,function(i){return{name:i.name,query:Cc(i.bundledQuery),readTime:re(i.readTime)}}(t)),m.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ww{constructor(){this.overlays=new j(E.comparator),this.Pr=new Map}getOverlay(e,t){return m.resolve(this.overlays.get(t))}getOverlays(e,t){const r=Ge();return m.forEach(t,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((i,s)=>{this.It(e,t,s)}),m.resolve()}removeOverlaysForBatchId(e,t,r){const i=this.Pr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Pr.delete(r)),m.resolve()}getOverlaysForCollection(e,t,r){const i=Ge(),s=t.length+1,o=new E(t.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,u=c.getKey();if(!t.isPrefixOf(u.path))break;u.path.length===s&&c.largestBatchId>r&&i.set(c.getKey(),c)}return m.resolve(i)}getOverlaysForCollectionGroup(e,t,r,i){let s=new j((u,l)=>u-l);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===t&&u.largestBatchId>r){let l=s.get(u.largestBatchId);l===null&&(l=Ge(),s=s.insert(u.largestBatchId,l)),l.set(u.getKey(),u)}}const a=Ge(),c=s.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,l)=>a.set(u,l)),!(a.size()>=i)););return m.resolve(a)}It(e,t,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Pr.get(i.largestBatchId).delete(r.key);this.Pr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Sc(t,r));let s=this.Pr.get(t);s===void 0&&(s=V(),this.Pr.set(t,s)),this.Pr.set(t,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kc{constructor(){this.Ir=new q(ae.dr),this.Tr=new q(ae.Er)}isEmpty(){return this.Ir.isEmpty()}addReference(e,t){const r=new ae(e,t);this.Ir=this.Ir.add(r),this.Tr=this.Tr.add(r)}Ar(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Rr(new ae(e,t))}Vr(e,t){e.forEach(r=>this.removeReference(r,t))}mr(e){const t=new E(new M([])),r=new ae(t,e),i=new ae(t,e+1),s=[];return this.Tr.forEachInRange([r,i],o=>{this.Rr(o),s.push(o.key)}),s}gr(){this.Ir.forEach(e=>this.Rr(e))}Rr(e){this.Ir=this.Ir.delete(e),this.Tr=this.Tr.delete(e)}pr(e){const t=new E(new M([])),r=new ae(t,e),i=new ae(t,e+1);let s=V();return this.Tr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const t=new ae(e,0),r=this.Ir.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class ae{constructor(e,t){this.key=e,this.yr=t}static dr(e,t){return E.comparator(e.key,t.key)||D(e.yr,t.yr)}static Er(e,t){return D(e.yr,t.yr)||E.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tw{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.wr=1,this.Sr=new q(ae.dr)}checkEmpty(e){return m.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,i){const s=this.wr;this.wr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Ac(s,t,r,i);this.mutationQueue.push(o);for(const a of i)this.Sr=this.Sr.add(new ae(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return m.resolve(o)}lookupMutationBatch(e,t){return m.resolve(this.br(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=this.Dr(r),s=i<0?0:i;return m.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return m.resolve(this.mutationQueue.length===0?-1:this.wr-1)}getAllMutationBatches(e){return m.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new ae(t,0),i=new ae(t,Number.POSITIVE_INFINITY),s=[];return this.Sr.forEachInRange([r,i],o=>{const a=this.br(o.yr);s.push(a)}),m.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new q(D);return t.forEach(i=>{const s=new ae(i,0),o=new ae(i,Number.POSITIVE_INFINITY);this.Sr.forEachInRange([s,o],a=>{r=r.add(a.yr)})}),m.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1;let s=r;E.isDocumentKey(s)||(s=s.child(""));const o=new ae(new E(s),0);let a=new q(D);return this.Sr.forEachWhile(c=>{const u=c.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(c.yr)),!0)},o),m.resolve(this.Cr(a))}Cr(e){const t=[];return e.forEach(r=>{const i=this.br(r);i!==null&&t.push(i)}),t}removeMutationBatch(e,t){S(this.vr(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Sr;return m.forEach(t.mutations,i=>{const s=new ae(i.key,t.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Sr=r})}xn(e){}containsKey(e,t){const r=new ae(t,0),i=this.Sr.firstAfterOrEqual(r);return m.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,m.resolve()}vr(e,t){return this.Dr(e)}Dr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}br(e){const t=this.Dr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aw{constructor(e){this.Fr=e,this.docs=function(){return new j(E.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,i=this.docs.get(r),s=i?i.size:0,o=this.Fr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return m.resolve(r?r.document.mutableCopy():H.newInvalidDocument(t))}getEntries(e,t){let r=Ve();return t.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():H.newInvalidDocument(i))}),m.resolve(r)}getDocumentsMatchingQuery(e,t,r,i){let s=Ve();const o=t.path,a=new E(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:u,value:{document:l}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||pc(yf(l),r)<=0||(i.has(l.key)||Ri(t,l))&&(s=s.insert(l.key,l.mutableCopy()))}return m.resolve(s)}getAllFromCollectionGroup(e,t,r,i){A()}Mr(e,t){return m.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new Rw(this)}getSize(e){return m.resolve(this.size)}}class Rw extends wm{constructor(e){super(),this.ur=e}applyChanges(e){const t=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?t.push(this.ur.addEntry(e,i)):this.ur.removeEntry(r)}),m.waitFor(t)}getFromCache(e,t){return this.ur.getEntry(e,t)}getAllFromCache(e,t){return this.ur.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sw{constructor(e){this.persistence=e,this.Or=new qt(t=>un(t),Ti),this.lastRemoteSnapshotVersion=R.min(),this.highestTargetId=0,this.Nr=0,this.Br=new kc,this.targetCount=0,this.Lr=mn.Bn()}forEachTarget(e,t){return this.Or.forEach((r,i)=>t(i)),m.resolve()}getLastRemoteSnapshotVersion(e){return m.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return m.resolve(this.Nr)}allocateTargetId(e){return this.highestTargetId=this.Lr.next(),m.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.Nr&&(this.Nr=t),m.resolve()}Qn(e){this.Or.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Lr=new mn(t),this.highestTargetId=t),e.sequenceNumber>this.Nr&&(this.Nr=e.sequenceNumber)}addTargetData(e,t){return this.Qn(t),this.targetCount+=1,m.resolve()}updateTargetData(e,t){return this.Qn(t),m.resolve()}removeTargetData(e,t){return this.Or.delete(t.target),this.Br.mr(t.targetId),this.targetCount-=1,m.resolve()}removeTargets(e,t,r){let i=0;const s=[];return this.Or.forEach((o,a)=>{a.sequenceNumber<=t&&r.get(a.targetId)===null&&(this.Or.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),m.waitFor(s).next(()=>i)}getTargetCount(e){return m.resolve(this.targetCount)}getTargetData(e,t){const r=this.Or.get(t)||null;return m.resolve(r)}addMatchingKeys(e,t,r){return this.Br.Ar(t,r),m.resolve()}removeMatchingKeys(e,t,r){this.Br.Vr(t,r);const i=this.persistence.referenceDelegate,s=[];return i&&t.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),m.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this.Br.mr(t),m.resolve()}getMatchingKeysForTargetId(e,t){const r=this.Br.pr(t);return m.resolve(r)}containsKey(e,t){return m.resolve(this.Br.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rm{constructor(e,t){this.kr={},this.overlays={},this.qr=new Ce(0),this.Qr=!1,this.Qr=!0,this.referenceDelegate=e(this),this.Kr=new Sw(this),this.indexManager=new lw,this.remoteDocumentCache=function(i){return new Aw(i)}(r=>this.referenceDelegate.$r(r)),this.serializer=new gm(t),this.Ur=new Ew(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Qr=!1,Promise.resolve()}get started(){return this.Qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new ww,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.kr[e.toKey()];return r||(r=new Tw(t,this.referenceDelegate),this.kr[e.toKey()]=r),r}getTargetCache(){return this.Kr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ur}runTransaction(e,t,r){_("MemoryPersistence","Starting transaction:",e);const i=new bw(this.qr.next());return this.referenceDelegate.Wr(),r(i).next(s=>this.referenceDelegate.Gr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}zr(e,t){return m.or(Object.values(this.kr).map(r=>()=>r.containsKey(e,t)))}}class bw extends vf{constructor(e){super(),this.currentSequenceNumber=e}}class ho{constructor(e){this.persistence=e,this.jr=new kc,this.Hr=null}static Jr(e){return new ho(e)}get Yr(){if(this.Hr)return this.Hr;throw A()}addReference(e,t,r){return this.jr.addReference(r,t),this.Yr.delete(r.toString()),m.resolve()}removeReference(e,t,r){return this.jr.removeReference(r,t),this.Yr.add(r.toString()),m.resolve()}markPotentiallyOrphaned(e,t){return this.Yr.add(t.toString()),m.resolve()}removeTarget(e,t){this.jr.mr(t.targetId).forEach(i=>this.Yr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(i=>{i.forEach(s=>this.Yr.add(s.toString()))}).next(()=>r.removeTargetData(e,t))}Wr(){this.Hr=new Set}Gr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return m.forEach(this.Yr,r=>{const i=E.fromPath(r);return this.Zr(e,i).next(s=>{s||t.removeEntry(i,R.min())})}).next(()=>(this.Hr=null,t.apply(e)))}updateLimboDocument(e,t){return this.Zr(e,t).next(r=>{r?this.Yr.delete(t.toString()):this.Yr.add(t.toString())})}$r(e){return 0}Zr(e,t){return m.or([()=>m.resolve(this.jr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.zr(e,t)])}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pw{constructor(e){this.serializer=e}B(e,t,r,i){const s=new io("createOrUpgrade",t);r<1&&i>=1&&(function(c){c.createObjectStore("owner")}(e),function(c){c.createObjectStore("mutationQueues",{keyPath:"userId"}),c.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",al,{unique:!0}),c.createObjectStore("documentMutations")}(e),Wl(e),function(c){c.createObjectStore("remoteDocuments")}(e));let o=m.resolve();return r<3&&i>=3&&(r!==0&&(function(c){c.deleteObjectStore("targetDocuments"),c.deleteObjectStore("targets"),c.deleteObjectStore("targetGlobal")}(e),Wl(e)),o=o.next(()=>function(c){const u=c.store("targetGlobal"),l={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:R.min().toTimestamp(),targetCount:0};return u.put("targetGlobalKey",l)}(s))),r<4&&i>=4&&(r!==0&&(o=o.next(()=>function(c,u){return u.store("mutations").G().next(l=>{c.deleteObjectStore("mutations"),c.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",al,{unique:!0});const h=u.store("mutations"),d=l.map(f=>h.put(f));return m.waitFor(d)})}(e,s))),o=o.next(()=>{(function(c){c.createObjectStore("clientMetadata",{keyPath:"clientId"})})(e)})),r<5&&i>=5&&(o=o.next(()=>this.ei(s))),r<6&&i>=6&&(o=o.next(()=>(function(c){c.createObjectStore("remoteDocumentGlobal")}(e),this.ti(s)))),r<7&&i>=7&&(o=o.next(()=>this.ni(s))),r<8&&i>=8&&(o=o.next(()=>this.ri(e,s))),r<9&&i>=9&&(o=o.next(()=>{(function(c){c.objectStoreNames.contains("remoteDocumentChanges")&&c.deleteObjectStore("remoteDocumentChanges")})(e)})),r<10&&i>=10&&(o=o.next(()=>this.ii(s))),r<11&&i>=11&&(o=o.next(()=>{(function(c){c.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(c){c.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),r<12&&i>=12&&(o=o.next(()=>{(function(c){const u=c.createObjectStore("documentOverlays",{keyPath:hE});u.createIndex("collectionPathOverlayIndex",dE,{unique:!1}),u.createIndex("collectionGroupOverlayIndex",fE,{unique:!1})})(e)})),r<13&&i>=13&&(o=o.next(()=>function(c){const u=c.createObjectStore("remoteDocumentsV14",{keyPath:eE});u.createIndex("documentKeyIndex",tE),u.createIndex("collectionGroupIndex",nE)}(e)).next(()=>this.si(e,s)).next(()=>e.deleteObjectStore("remoteDocuments"))),r<14&&i>=14&&(o=o.next(()=>this.oi(e,s))),r<15&&i>=15&&(o=o.next(()=>function(c){c.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),c.createObjectStore("indexState",{keyPath:aE}).createIndex("sequenceNumberIndex",cE,{unique:!1}),c.createObjectStore("indexEntries",{keyPath:uE}).createIndex("documentKeyIndex",lE,{unique:!1})}(e))),o}ti(e){let t=0;return e.store("remoteDocuments").Z((r,i)=>{t+=bs(i)}).next(()=>{const r={byteSize:t};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",r)})}ei(e){const t=e.store("mutationQueues"),r=e.store("mutations");return t.G().next(i=>m.forEach(i,s=>{const o=IDBKeyRange.bound([s.userId,-1],[s.userId,s.lastAcknowledgedBatchId]);return r.G("userMutationsIndex",o).next(a=>m.forEach(a,c=>{S(c.userId===s.userId);const u=Ht(this.serializer,c);return Im(e,s.userId,u).next(()=>{})}))}))}ni(e){const t=e.store("targetDocuments"),r=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(i=>{const s=[];return r.Z((o,a)=>{const c=new M(o),u=function(h){return[0,Re(h)]}(c);s.push(t.get(u).next(l=>l?m.resolve():(h=>t.put({targetId:0,path:Re(h),sequenceNumber:i.highestListenSequenceNumber}))(c)))}).next(()=>m.waitFor(s))})}ri(e,t){e.createObjectStore("collectionParents",{keyPath:oE});const r=t.store("collectionParents"),i=new Vc,s=o=>{if(i.add(o)){const a=o.lastSegment(),c=o.popLast();return r.put({collectionId:a,parent:Re(c)})}};return t.store("remoteDocuments").Z({Y:!0},(o,a)=>{const c=new M(o);return s(c.popLast())}).next(()=>t.store("documentMutations").Z({Y:!0},([o,a,c],u)=>{const l=je(a);return s(l.popLast())}))}ii(e){const t=e.store("targets");return t.Z((r,i)=>{const s=Pr(i),o=pm(this.serializer,s);return t.put(o)})}si(e,t){const r=t.store("remoteDocuments"),i=[];return r.Z((s,o)=>{const a=t.store("remoteDocumentsV14"),c=function(h){return h.document?new E(M.fromString(h.document.name).popFirst(5)):h.noDocument?E.fromSegments(h.noDocument.path):h.unknownDocument?E.fromSegments(h.unknownDocument.path):A()}(o).path.toArray(),u={prefixPath:c.slice(0,c.length-2),collectionGroup:c[c.length-2],documentId:c[c.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};i.push(a.put(u))}).next(()=>m.waitFor(i))}oi(e,t){const r=t.store("mutations"),i=Tm(this.serializer),s=new Rm(ho.Jr,this.serializer.ht);return r.G().next(o=>{const a=new Map;return o.forEach(c=>{var u;let l=(u=a.get(c.userId))!==null&&u!==void 0?u:V();Ht(this.serializer,c).keys().forEach(h=>l=l.add(h)),a.set(c.userId,l)}),m.forEach(a,(c,u)=>{const l=new ce(u),h=uo.Pt(this.serializer,l),d=s.getIndexManager(l),f=lo.Pt(l,this.serializer,d,s.referenceDelegate);return new Am(i,f,h,d).recalculateAndSaveOverlaysForDocumentKeys(new ga(t,Ce.ae),c).next()})})}}function Wl(n){n.createObjectStore("targetDocuments",{keyPath:iE}).createIndex("documentTargetsIndex",sE,{unique:!0}),n.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",rE,{unique:!0}),n.createObjectStore("targetGlobal")}const Wo="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class Nc{constructor(e,t,r,i,s,o,a,c,u,l,h=15){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=r,this._i=s,this.window=o,this.document=a,this.ai=u,this.ui=l,this.ci=h,this.qr=null,this.Qr=!1,this.isPrimary=!1,this.networkEnabled=!0,this.li=null,this.inForeground=!1,this.hi=null,this.Pi=null,this.Ii=Number.NEGATIVE_INFINITY,this.di=d=>Promise.resolve(),!Nc.C())throw new p(g.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new _w(this,i),this.Ti=t+"main",this.serializer=new gm(c),this.Ei=new Me(this.Ti,this.ci,new Pw(this.serializer)),this.Kr=new dw(this.referenceDelegate,this.serializer),this.remoteDocumentCache=Tm(this.serializer),this.Ur=new iw,this.window&&this.window.localStorage?this.Ai=this.window.localStorage:(this.Ai=null,l===!1&&ne("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.Ri().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new p(g.FAILED_PRECONDITION,Wo);return this.Vi(),this.mi(),this.fi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Kr.getHighestSequenceNumber(e))}).then(e=>{this.qr=new Ce(e,this.ai)}).then(()=>{this.Qr=!0}).catch(e=>(this.Ei&&this.Ei.close(),Promise.reject(e)))}gi(e){return this.di=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.Ei.k(async t=>{t.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this._i.enqueueAndForget(async()=>{this.started&&await this.Ri()}))}Ri(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>zi(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.pi(e).next(t=>{t||(this.isPrimary=!1,this._i.enqueueRetryable(()=>this.di(!1)))})}).next(()=>this.yi(e)).next(t=>this.isPrimary&&!t?this.wi(e).next(()=>!1):!!t&&this.Si(e).next(()=>!0))).catch(e=>{if(Bt(e))return _("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return _("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this._i.enqueueRetryable(()=>this.di(e)),this.isPrimary=e})}pi(e){return Tr(e).get("owner").next(t=>m.resolve(this.bi(t)))}Di(e){return zi(e).delete(this.clientId)}async Ci(){if(this.isPrimary&&!this.vi(this.Ii,18e5)){this.Ii=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",t=>{const r=de(t,"clientMetadata");return r.G().next(i=>{const s=this.Fi(i,18e5),o=i.filter(a=>s.indexOf(a)===-1);return m.forEach(o,a=>r.delete(a.clientId)).next(()=>o)})}).catch(()=>[]);if(this.Ai)for(const t of e)this.Ai.removeItem(this.Mi(t.clientId))}}fi(){this.Pi=this._i.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.Ri().then(()=>this.Ci()).then(()=>this.fi()))}bi(e){return!!e&&e.ownerId===this.clientId}yi(e){return this.ui?m.resolve(!0):Tr(e).get("owner").next(t=>{if(t!==null&&this.vi(t.leaseTimestampMs,5e3)&&!this.xi(t.ownerId)){if(this.bi(t)&&this.networkEnabled)return!0;if(!this.bi(t)){if(!t.allowTabSynchronization)throw new p(g.FAILED_PRECONDITION,Wo);return!1}}return!(!this.networkEnabled||!this.inForeground)||zi(e).G().next(r=>this.Fi(r,5e3).find(i=>{if(this.clientId!==i.clientId){const s=!this.networkEnabled&&i.networkEnabled,o=!this.inForeground&&i.inForeground,a=this.networkEnabled===i.networkEnabled;if(s||o&&a)return!0}return!1})===void 0)}).next(t=>(this.isPrimary!==t&&_("IndexedDbPersistence",`Client ${t?"is":"is not"} eligible for a primary lease.`),t))}async shutdown(){this.Qr=!1,this.Oi(),this.Pi&&(this.Pi.cancel(),this.Pi=null),this.Ni(),this.Bi(),await this.Ei.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{const t=new ga(e,Ce.ae);return this.wi(t).next(()=>this.Di(t))}),this.Ei.close(),this.Li()}Fi(e,t){return e.filter(r=>this.vi(r.updateTimeMs,t)&&!this.xi(r.clientId))}ki(){return this.runTransaction("getActiveClients","readonly",e=>zi(e).G().next(t=>this.Fi(t,18e5).map(r=>r.clientId)))}get started(){return this.Qr}getMutationQueue(e,t){return lo.Pt(e,this.serializer,t,this.referenceDelegate)}getTargetCache(){return this.Kr}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new hw(e,this.serializer.ht.databaseId)}getDocumentOverlayCache(e){return uo.Pt(this.serializer,e)}getBundleCache(){return this.Ur}runTransaction(e,t,r){_("IndexedDbPersistence","Starting transaction:",e);const i=t==="readonly"?"readonly":"readwrite",s=function(c){return c===15?gE:c===14?Rf:c===13?Af:c===12?mE:c===11?Tf:void A()}(this.ci);let o;return this.Ei.runTransaction(e,i,s,a=>(o=new ga(a,this.qr?this.qr.next():Ce.ae),t==="readwrite-primary"?this.pi(o).next(c=>!!c||this.yi(o)).next(c=>{if(!c)throw ne(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this._i.enqueueRetryable(()=>this.di(!1)),new p(g.FAILED_PRECONDITION,If);return r(o)}).next(c=>this.Si(o).next(()=>c)):this.qi(o).next(()=>r(o)))).then(a=>(o.raiseOnCommittedEvent(),a))}qi(e){return Tr(e).get("owner").next(t=>{if(t!==null&&this.vi(t.leaseTimestampMs,5e3)&&!this.xi(t.ownerId)&&!this.bi(t)&&!(this.ui||this.allowTabSynchronization&&t.allowTabSynchronization))throw new p(g.FAILED_PRECONDITION,Wo)})}Si(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return Tr(e).put("owner",t)}static C(){return Me.C()}wi(e){const t=Tr(e);return t.get("owner").next(r=>this.bi(r)?(_("IndexedDbPersistence","Releasing primary lease."),t.delete("owner")):m.resolve())}vi(e,t){const r=Date.now();return!(e<r-t)&&(!(e>r)||(ne(`Detected an update time that is in the future: ${e} > ${r}`),!1))}Vi(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.hi=()=>{this._i.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.Ri()))},this.document.addEventListener("visibilitychange",this.hi),this.inForeground=this.document.visibilityState==="visible")}Ni(){this.hi&&(this.document.removeEventListener("visibilitychange",this.hi),this.hi=null)}mi(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.li=()=>{this.Oi();const t=/(?:Version|Mobile)\/1[456]/;Zg()&&(navigator.appVersion.match(t)||navigator.userAgent.match(t))&&this._i.enterRestrictedMode(!0),this._i.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.li))}Bi(){this.li&&(this.window.removeEventListener("pagehide",this.li),this.li=null)}xi(e){var t;try{const r=((t=this.Ai)===null||t===void 0?void 0:t.getItem(this.Mi(e)))!==null;return _("IndexedDbPersistence",`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return ne("IndexedDbPersistence","Failed to get zombied client id.",r),!1}}Oi(){if(this.Ai)try{this.Ai.setItem(this.Mi(this.clientId),String(Date.now()))}catch(e){ne("Failed to set zombie client id.",e)}}Li(){if(this.Ai)try{this.Ai.removeItem(this.Mi(this.clientId))}catch{}}Mi(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function Tr(n){return de(n,"owner")}function zi(n){return de(n,"clientMetadata")}function xc(n,e){let t=n.projectId;return n.isDefaultDatabase||(t+="."+n.database),"firestore/"+e+"/"+t+"/"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oc{constructor(e,t,r,i){this.targetId=e,this.fromCache=t,this.Qi=r,this.Ki=i}static $i(e,t){let r=V(),i=V();for(const s of t.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Oc(e,t.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cw{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sm{constructor(){this.Ui=!1,this.Wi=!1,this.Gi=100,this.zi=8}initialize(e,t){this.ji=e,this.indexManager=t,this.Ui=!0}getDocumentsMatchingQuery(e,t,r,i){const s={result:null};return this.Hi(e,t).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Ji(e,t,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new Cw;return this.Yi(e,t,o).next(a=>{if(s.result=a,this.Wi)return this.Zi(e,t,o,a.size)})}).next(()=>s.result)}Zi(e,t,r,i){return r.documentReadCount<this.Gi?(Vn()<=N.DEBUG&&_("QueryEngine","SDK will not create cache indexes for query:",kn(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Gi,"documents"),m.resolve()):(Vn()<=N.DEBUG&&_("QueryEngine","Query:",kn(t),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.zi*i?(Vn()<=N.DEBUG&&_("QueryEngine","The SDK decides to create cache indexes for query:",kn(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Se(t))):m.resolve())}Hi(e,t){if(Il(t))return m.resolve(null);let r=Se(t);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(t.limit!==null&&i===1&&(t=As(t,null,"F"),r=Se(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=V(...s);return this.ji.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(c=>{const u=this.Xi(t,a);return this.es(t,u,o,c.readTime)?this.Hi(e,As(t,null,"F")):this.ts(e,u,t,c)}))})))}Ji(e,t,r,i){return Il(t)||i.isEqual(R.min())?m.resolve(null):this.ji.getDocuments(e,r).next(s=>{const o=this.Xi(t,s);return this.es(t,o,r,i)?m.resolve(null):(Vn()<=N.DEBUG&&_("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),kn(t)),this.ts(e,o,t,_f(i,-1)).next(a=>a))})}Xi(e,t){let r=new q(Bf(e));return t.forEach((i,s)=>{Ri(e,s)&&(r=r.add(s))}),r}es(e,t,r,i){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const s=e.limitType==="F"?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Yi(e,t,r){return Vn()<=N.DEBUG&&_("QueryEngine","Using full collection scan to execute query:",kn(t)),this.ji.getDocumentsMatchingQuery(e,t,Ne.min(),r)}ts(e,t,r,i){return this.ji.getDocumentsMatchingQuery(e,r,i).next(s=>(t.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dw{constructor(e,t,r,i){this.persistence=e,this.ns=t,this.serializer=i,this.rs=new j(D),this.ss=new qt(s=>un(s),Ti),this.os=new Map,this._s=e.getRemoteDocumentCache(),this.Kr=e.getTargetCache(),this.Ur=e.getBundleCache(),this.us(r)}us(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Am(this._s,this.mutationQueue,this.documentOverlayCache,this.indexManager),this._s.setIndexManager(this.indexManager),this.ns.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.rs))}}function bm(n,e,t,r){return new Dw(n,e,t,r)}async function Pm(n,e){const t=w(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let i;return t.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,t.us(e),t.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let c=V();for(const u of i){o.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}for(const u of s){a.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}return t.localDocuments.getDocuments(r,c).next(u=>({cs:u,removedBatchIds:o,addedBatchIds:a}))})})}function Vw(n,e){const t=w(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=t._s.newChangeBuffer({trackRemovals:!0});return function(a,c,u,l){const h=u.batch,d=h.keys();let f=m.resolve();return d.forEach(y=>{f=f.next(()=>l.getEntry(c,y)).next(I=>{const v=u.docVersions.get(y);S(v!==null),I.version.compareTo(v)<0&&(h.applyToRemoteDocument(I,u),I.isValidDocument()&&(I.setReadTime(u.commitVersion),l.addEntry(I)))})}),f.next(()=>a.mutationQueue.removeMutationBatch(c,h))}(t,r,e,s).next(()=>s.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let c=V();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(c=c.add(a.batch.mutations[u].key));return c}(e))).next(()=>t.localDocuments.getDocuments(r,i))})}function Cm(n){const e=w(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Kr.getLastRemoteSnapshotVersion(t))}function kw(n,e){const t=w(n),r=e.snapshotVersion;let i=t.rs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=t._s.newChangeBuffer({trackRemovals:!0});i=t.rs;const a=[];e.targetChanges.forEach((l,h)=>{const d=i.get(h);if(!d)return;a.push(t.Kr.removeMatchingKeys(s,l.removedDocuments,h).next(()=>t.Kr.addMatchingKeys(s,l.addedDocuments,h)));let f=d.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(h)!==null?f=f.withResumeToken(oe.EMPTY_BYTE_STRING,R.min()).withLastLimboFreeSnapshotVersion(R.min()):l.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(l.resumeToken,r)),i=i.insert(h,f),function(I,v,b){return I.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-I.snapshotVersion.toMicroseconds()>=3e8?!0:b.addedDocuments.size+b.modifiedDocuments.size+b.removedDocuments.size>0}(d,f,l)&&a.push(t.Kr.updateTargetData(s,f))});let c=Ve(),u=V();if(e.documentUpdates.forEach(l=>{e.resolvedLimboDocuments.has(l)&&a.push(t.persistence.referenceDelegate.updateLimboDocument(s,l))}),a.push(Dm(s,o,e.documentUpdates).next(l=>{c=l.ls,u=l.hs})),!r.isEqual(R.min())){const l=t.Kr.getLastRemoteSnapshotVersion(s).next(h=>t.Kr.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(l)}return m.waitFor(a).next(()=>o.apply(s)).next(()=>t.localDocuments.getLocalViewOfDocuments(s,c,u)).next(()=>c)}).then(s=>(t.rs=i,s))}function Dm(n,e,t){let r=V(),i=V();return t.forEach(s=>r=r.add(s)),e.getEntries(n,r).next(s=>{let o=Ve();return t.forEach((a,c)=>{const u=s.get(a);c.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),c.isNoDocument()&&c.version.isEqual(R.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):_("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",c.version)}),{ls:o,hs:i}})}function Nw(n,e){const t=w(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function Zn(n,e){const t=w(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return t.Kr.getTargetData(r,e).next(s=>s?(i=s,m.resolve(i)):t.Kr.allocateTargetId(r).next(o=>(i=new nt(e,o,"TargetPurposeListen",r.currentSequenceNumber),t.Kr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=t.rs.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.rs=t.rs.insert(r.targetId,r),t.ss.set(e,r.targetId)),r})}async function er(n,e,t){const r=w(n),i=r.rs.get(e),s=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Bt(o))throw o;_("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.rs=r.rs.remove(e),r.ss.delete(i.target)}function Ps(n,e,t){const r=w(n);let i=R.min(),s=V();return r.persistence.runTransaction("Execute query","readwrite",o=>function(c,u,l){const h=w(c),d=h.ss.get(l);return d!==void 0?m.resolve(h.rs.get(d)):h.Kr.getTargetData(u,l)}(r,o,Se(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Kr.getMatchingKeysForTargetId(o,a.targetId).next(c=>{s=c})}).next(()=>r.ns.getDocumentsMatchingQuery(o,e,t?i:R.min(),t?s:V())).next(a=>(Nm(r,Uf(e),a),{documents:a,Ps:s})))}function Vm(n,e){const t=w(n),r=w(t.Kr),i=t.rs.get(e);return i?Promise.resolve(i.target):t.persistence.runTransaction("Get target data","readonly",s=>r.lt(s,e).next(o=>o?o.target:null))}function km(n,e){const t=w(n),r=t.os.get(e)||R.min();return t.persistence.runTransaction("Get new document changes","readonly",i=>t._s.getAllFromCollectionGroup(i,e,_f(r,-1),Number.MAX_SAFE_INTEGER)).then(i=>(Nm(t,e,i),i))}function Nm(n,e,t){let r=n.os.get(e)||R.min();t.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),n.os.set(e,r)}async function xw(n,e,t,r){const i=w(n);let s=V(),o=Ve();for(const u of t){const l=e.Is(u.metadata.name);u.document&&(s=s.add(l));const h=e.ds(u);h.setReadTime(e.Ts(u.metadata.readTime)),o=o.insert(l,h)}const a=i._s.newChangeBuffer({trackRemovals:!0}),c=await Zn(i,function(l){return Se(cr(M.fromString(`__bundle__/docs/${l}`)))}(r));return i.persistence.runTransaction("Apply bundle documents","readwrite",u=>Dm(u,a,o).next(l=>(a.apply(u),l)).next(l=>i.Kr.removeMatchingKeysForTargetId(u,c.targetId).next(()=>i.Kr.addMatchingKeys(u,s,c.targetId)).next(()=>i.localDocuments.getLocalViewOfDocuments(u,l.ls,l.hs)).next(()=>l.ls)))}async function Ow(n,e,t=V()){const r=await Zn(n,Se(Cc(e.bundledQuery))),i=w(n);return i.persistence.runTransaction("Save named query","readwrite",s=>{const o=re(e.readTime);if(r.snapshotVersion.compareTo(o)>=0)return i.Ur.saveNamedQuery(s,e);const a=r.withResumeToken(oe.EMPTY_BYTE_STRING,o);return i.rs=i.rs.insert(a.targetId,a),i.Kr.updateTargetData(s,a).next(()=>i.Kr.removeMatchingKeysForTargetId(s,r.targetId)).next(()=>i.Kr.addMatchingKeys(s,t,r.targetId)).next(()=>i.Ur.saveNamedQuery(s,e))})}function Hl(n,e){return`firestore_clients_${n}_${e}`}function Ql(n,e,t){let r=`firestore_mutations_${n}_${t}`;return e.isAuthenticated()&&(r+=`_${e.uid}`),r}function Ho(n,e){return`firestore_targets_${n}_${e}`}class Cs{constructor(e,t,r,i){this.user=e,this.batchId=t,this.state=r,this.error=i}static Es(e,t,r){const i=JSON.parse(r);let s,o=typeof i=="object"&&["pending","acknowledged","rejected"].indexOf(i.state)!==-1&&(i.error===void 0||typeof i.error=="object");return o&&i.error&&(o=typeof i.error.message=="string"&&typeof i.error.code=="string",o&&(s=new p(i.error.code,i.error.message))),o?new Cs(e,t,i.state,s):(ne("SharedClientState",`Failed to parse mutation state for ID '${t}': ${r}`),null)}As(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Or{constructor(e,t,r){this.targetId=e,this.state=t,this.error=r}static Es(e,t){const r=JSON.parse(t);let i,s=typeof r=="object"&&["not-current","current","rejected"].indexOf(r.state)!==-1&&(r.error===void 0||typeof r.error=="object");return s&&r.error&&(s=typeof r.error.message=="string"&&typeof r.error.code=="string",s&&(i=new p(r.error.code,r.error.message))),s?new Or(e,r.state,i):(ne("SharedClientState",`Failed to parse target state for ID '${e}': ${t}`),null)}As(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Ds{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static Es(e,t){const r=JSON.parse(t);let i=typeof r=="object"&&r.activeTargetIds instanceof Array,s=wc();for(let o=0;i&&o<r.activeTargetIds.length;++o)i=Ef(r.activeTargetIds[o]),s=s.add(r.activeTargetIds[o]);return i?new Ds(e,s):(ne("SharedClientState",`Failed to parse client data for instance '${e}': ${t}`),null)}}class Mc{constructor(e,t){this.clientId=e,this.onlineState=t}static Es(e){const t=JSON.parse(e);return typeof t=="object"&&["Unknown","Online","Offline"].indexOf(t.onlineState)!==-1&&typeof t.clientId=="string"?new Mc(t.clientId,t.onlineState):(ne("SharedClientState",`Failed to parse online state: ${e}`),null)}}class Pa{constructor(){this.activeTargetIds=wc()}Rs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Vs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}As(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Qo{constructor(e,t,r,i,s){this.window=e,this._i=t,this.persistenceKey=r,this.fs=i,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.gs=this.ps.bind(this),this.ys=new j(D),this.started=!1,this.ws=[];const o=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=s,this.Ss=Hl(this.persistenceKey,this.fs),this.bs=function(c){return`firestore_sequence_number_${c}`}(this.persistenceKey),this.ys=this.ys.insert(this.fs,new Pa),this.Ds=new RegExp(`^firestore_clients_${o}_([^_]*)$`),this.Cs=new RegExp(`^firestore_mutations_${o}_(\\d+)(?:_(.*))?$`),this.vs=new RegExp(`^firestore_targets_${o}_(\\d+)$`),this.Fs=function(c){return`firestore_online_state_${c}`}(this.persistenceKey),this.Ms=function(c){return`firestore_bundle_loaded_v2_${c}`}(this.persistenceKey),this.window.addEventListener("storage",this.gs)}static C(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.ki();for(const r of e){if(r===this.fs)continue;const i=this.getItem(Hl(this.persistenceKey,r));if(i){const s=Ds.Es(r,i);s&&(this.ys=this.ys.insert(s.clientId,s))}}this.xs();const t=this.storage.getItem(this.Fs);if(t){const r=this.Os(t);r&&this.Ns(r)}for(const r of this.ws)this.ps(r);this.ws=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.bs,JSON.stringify(e))}getAllActiveQueryTargets(){return this.Bs(this.ys)}isActiveQueryTarget(e){let t=!1;return this.ys.forEach((r,i)=>{i.activeTargetIds.has(e)&&(t=!0)}),t}addPendingMutation(e){this.Ls(e,"pending")}updateMutationState(e,t,r){this.Ls(e,t,r),this.ks(e)}addLocalQueryTarget(e){let t="not-current";if(this.isActiveQueryTarget(e)){const r=this.storage.getItem(Ho(this.persistenceKey,e));if(r){const i=Or.Es(e,r);i&&(t=i.state)}}return this.qs.Rs(e),this.xs(),t}removeLocalQueryTarget(e){this.qs.Vs(e),this.xs()}isLocalQueryTarget(e){return this.qs.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(Ho(this.persistenceKey,e))}updateQueryState(e,t,r){this.Qs(e,t,r)}handleUserChange(e,t,r){t.forEach(i=>{this.ks(i)}),this.currentUser=e,r.forEach(i=>{this.addPendingMutation(i)})}setOnlineState(e){this.Ks(e)}notifyBundleLoaded(e){this.$s(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.gs),this.removeItem(this.Ss),this.started=!1)}getItem(e){const t=this.storage.getItem(e);return _("SharedClientState","READ",e,t),t}setItem(e,t){_("SharedClientState","SET",e,t),this.storage.setItem(e,t)}removeItem(e){_("SharedClientState","REMOVE",e),this.storage.removeItem(e)}ps(e){const t=e;if(t.storageArea===this.storage){if(_("SharedClientState","EVENT",t.key,t.newValue),t.key===this.Ss)return void ne("Received WebStorage notification for local change. Another client might have garbage-collected our state");this._i.enqueueRetryable(async()=>{if(this.started){if(t.key!==null){if(this.Ds.test(t.key)){if(t.newValue==null){const r=this.Us(t.key);return this.Ws(r,null)}{const r=this.Gs(t.key,t.newValue);if(r)return this.Ws(r.clientId,r)}}else if(this.Cs.test(t.key)){if(t.newValue!==null){const r=this.zs(t.key,t.newValue);if(r)return this.js(r)}}else if(this.vs.test(t.key)){if(t.newValue!==null){const r=this.Hs(t.key,t.newValue);if(r)return this.Js(r)}}else if(t.key===this.Fs){if(t.newValue!==null){const r=this.Os(t.newValue);if(r)return this.Ns(r)}}else if(t.key===this.bs){const r=function(s){let o=Ce.ae;if(s!=null)try{const a=JSON.parse(s);S(typeof a=="number"),o=a}catch(a){ne("SharedClientState","Failed to read sequence number from WebStorage",a)}return o}(t.newValue);r!==Ce.ae&&this.sequenceNumberHandler(r)}else if(t.key===this.Ms){const r=this.Ys(t.newValue);await Promise.all(r.map(i=>this.syncEngine.Zs(i)))}}}else this.ws.push(t)})}}get qs(){return this.ys.get(this.fs)}xs(){this.setItem(this.Ss,this.qs.As())}Ls(e,t,r){const i=new Cs(this.currentUser,e,t,r),s=Ql(this.persistenceKey,this.currentUser,e);this.setItem(s,i.As())}ks(e){const t=Ql(this.persistenceKey,this.currentUser,e);this.removeItem(t)}Ks(e){const t={clientId:this.fs,onlineState:e};this.storage.setItem(this.Fs,JSON.stringify(t))}Qs(e,t,r){const i=Ho(this.persistenceKey,e),s=new Or(e,t,r);this.setItem(i,s.As())}$s(e){const t=JSON.stringify(Array.from(e));this.setItem(this.Ms,t)}Us(e){const t=this.Ds.exec(e);return t?t[1]:null}Gs(e,t){const r=this.Us(e);return Ds.Es(r,t)}zs(e,t){const r=this.Cs.exec(e),i=Number(r[1]),s=r[2]!==void 0?r[2]:null;return Cs.Es(new ce(s),i,t)}Hs(e,t){const r=this.vs.exec(e),i=Number(r[1]);return Or.Es(i,t)}Os(e){return Mc.Es(e)}Ys(e){return JSON.parse(e)}async js(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.Xs(e.batchId,e.state,e.error);_("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}Js(e){return this.syncEngine.eo(e.targetId,e.state,e.error)}Ws(e,t){const r=t?this.ys.insert(e,t):this.ys.remove(e),i=this.Bs(this.ys),s=this.Bs(r),o=[],a=[];return s.forEach(c=>{i.has(c)||o.push(c)}),i.forEach(c=>{s.has(c)||a.push(c)}),this.syncEngine.no(o,a).then(()=>{this.ys=r})}Ns(e){this.ys.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}Bs(e){let t=wc();return e.forEach((r,i)=>{t=t.unionWith(i.activeTargetIds)}),t}}class xm{constructor(){this.ro=new Pa,this.io={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e){return this.ro.Rs(e),this.io[e]||"not-current"}updateQueryState(e,t,r){this.io[e]=t}removeLocalQueryTarget(e){this.ro.Vs(e)}isLocalQueryTarget(e){return this.ro.activeTargetIds.has(e)}clearQueryState(e){delete this.io[e]}getAllActiveQueryTargets(){return this.ro.activeTargetIds}isActiveQueryTarget(e){return this.ro.activeTargetIds.has(e)}start(){return this.ro=new Pa,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mw{so(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yl{constructor(){this.oo=()=>this._o(),this.ao=()=>this.uo(),this.co=[],this.lo()}so(e){this.co.push(e)}shutdown(){window.removeEventListener("online",this.oo),window.removeEventListener("offline",this.ao)}lo(){window.addEventListener("online",this.oo),window.addEventListener("offline",this.ao)}_o(){_("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.co)e(0)}uo(){_("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.co)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ki=null;function Yo(){return Ki===null?Ki=function(){return 268435456+Math.round(2147483648*Math.random())}():Ki++,"0x"+Ki.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lw={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fw{constructor(e){this.ho=e.ho,this.Po=e.Po}Io(e){this.To=e}Eo(e){this.Ao=e}onMessage(e){this.Ro=e}close(){this.Po()}send(e){this.ho(e)}Vo(){this.To()}mo(e){this.Ao(e)}fo(e){this.Ro(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ie="WebChannelConnection";class Uw extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const r=t.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.po=r+"://"+t.host,this.yo=`projects/${i}/databases/${s}`,this.wo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get So(){return!1}bo(t,r,i,s,o){const a=Yo(),c=this.Do(t,r);_("RestConnection",`Sending RPC '${t}' ${a}:`,c,i);const u={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Co(u,s,o),this.vo(t,c,u,i).then(l=>(_("RestConnection",`Received RPC '${t}' ${a}: `,l),l),l=>{throw Ue("RestConnection",`RPC '${t}' ${a} failed with error: `,l,"url: ",c,"request:",i),l})}Fo(t,r,i,s,o,a){return this.bo(t,r,i,s,o)}Co(t,r,i){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ar}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>t[o]=s),i&&i.headers.forEach((s,o)=>t[o]=s)}Do(t,r){const i=Lw[t];return`${this.po}/v1/${r}:${i}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}vo(e,t,r,i){const s=Yo();return new Promise((o,a)=>{const c=new Ov;c.setWithCredentials(!0),c.listenOnce(Nv.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case zo.NO_ERROR:const l=c.getResponseJson();_(Ie,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(l)),o(l);break;case zo.TIMEOUT:_(Ie,`RPC '${e}' ${s} timed out`),a(new p(g.DEADLINE_EXCEEDED,"Request time out"));break;case zo.HTTP_ERROR:const h=c.getStatus();if(_(Ie,`RPC '${e}' ${s} failed with status:`,h,"response text:",c.getResponseText()),h>0){let d=c.getResponseJson();Array.isArray(d)&&(d=d[0]);const f=d==null?void 0:d.error;if(f&&f.status&&f.message){const y=function(v){const b=v.toLowerCase().replace(/_/g,"-");return Object.values(g).indexOf(b)>=0?b:g.UNKNOWN}(f.status);a(new p(y,f.message))}else a(new p(g.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new p(g.UNAVAILABLE,"Connection failed."));break;default:A()}}finally{_(Ie,`RPC '${e}' ${s} completed.`)}});const u=JSON.stringify(i);_(Ie,`RPC '${e}' ${s} sending request:`,i),c.send(t,"POST",u,r,15)})}Mo(e,t,r){const i=Yo(),s=[this.po,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Vv(),a=kv(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Co(c.initMessageHeaders,t,r),c.encodeInitMessageHeaders=!0;const l=s.join("");_(Ie,`Creating RPC '${e}' stream ${i}: ${l}`,c);const h=o.createWebChannel(l,c);let d=!1,f=!1;const y=new Fw({ho:v=>{f?_(Ie,`Not sending because RPC '${e}' stream ${i} is closed:`,v):(d||(_(Ie,`Opening RPC '${e}' stream ${i} transport.`),h.open(),d=!0),_(Ie,`RPC '${e}' stream ${i} sending:`,v),h.send(v))},Po:()=>h.close()}),I=(v,b,L)=>{v.listen(b,k=>{try{L(k)}catch(G){setTimeout(()=>{throw G},0)}})};return I(h,qi.EventType.OPEN,()=>{f||_(Ie,`RPC '${e}' stream ${i} transport opened.`)}),I(h,qi.EventType.CLOSE,()=>{f||(f=!0,_(Ie,`RPC '${e}' stream ${i} transport closed`),y.mo())}),I(h,qi.EventType.ERROR,v=>{f||(f=!0,Ue(Ie,`RPC '${e}' stream ${i} transport errored:`,v),y.mo(new p(g.UNAVAILABLE,"The operation could not be completed")))}),I(h,qi.EventType.MESSAGE,v=>{var b;if(!f){const L=v.data[0];S(!!L);const k=L,G=k.error||((b=k[0])===null||b===void 0?void 0:b.error);if(G){_(Ie,`RPC '${e}' stream ${i} received error:`,G);const z=G.status;let K=function(gr){const Oi=ie[gr];if(Oi!==void 0)return em(Oi)}(z),me=G.message;K===void 0&&(K=g.INTERNAL,me="Unknown error status: "+z+" with message "+G.message),f=!0,y.mo(new p(K,me)),h.close()}else _(Ie,`RPC '${e}' stream ${i} received:`,L),y.fo(L)}}),I(a,xv.STAT_EVENT,v=>{v.stat===rl.PROXY?_(Ie,`RPC '${e}' stream ${i} detected buffering proxy`):v.stat===rl.NOPROXY&&_(Ie,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{y.Vo()},0),y}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Om(){return typeof window<"u"?window:null}function rs(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ci(n){return new WE(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lc{constructor(e,t,r=1e3,i=1.5,s=6e4){this._i=e,this.timerId=t,this.xo=r,this.Oo=i,this.No=s,this.Bo=0,this.Lo=null,this.ko=Date.now(),this.reset()}reset(){this.Bo=0}qo(){this.Bo=this.No}Qo(e){this.cancel();const t=Math.floor(this.Bo+this.Ko()),r=Math.max(0,Date.now()-this.ko),i=Math.max(0,t-r);i>0&&_("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Bo} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.Lo=this._i.enqueueAfterDelay(this.timerId,i,()=>(this.ko=Date.now(),e())),this.Bo*=this.Oo,this.Bo<this.xo&&(this.Bo=this.xo),this.Bo>this.No&&(this.Bo=this.No)}$o(){this.Lo!==null&&(this.Lo.skipDelay(),this.Lo=null)}cancel(){this.Lo!==null&&(this.Lo.cancel(),this.Lo=null)}Ko(){return(Math.random()-.5)*this.Bo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mm{constructor(e,t,r,i,s,o,a,c){this._i=e,this.Uo=r,this.Wo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Go=0,this.zo=null,this.jo=null,this.stream=null,this.Ho=new Lc(e,t)}Jo(){return this.state===1||this.state===5||this.Yo()}Yo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Zo()}async stop(){this.Jo()&&await this.close(0)}Xo(){this.state=0,this.Ho.reset()}e_(){this.Yo()&&this.zo===null&&(this.zo=this._i.enqueueAfterDelay(this.Uo,6e4,()=>this.t_()))}n_(e){this.r_(),this.stream.send(e)}async t_(){if(this.Yo())return this.close(0)}r_(){this.zo&&(this.zo.cancel(),this.zo=null)}i_(){this.jo&&(this.jo.cancel(),this.jo=null)}async close(e,t){this.r_(),this.i_(),this.Ho.cancel(),this.Go++,e!==4?this.Ho.reset():t&&t.code===g.RESOURCE_EXHAUSTED?(ne(t.toString()),ne("Using maximum backoff delay to prevent overloading the backend."),this.Ho.qo()):t&&t.code===g.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.s_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Eo(t)}s_(){}auth(){this.state=1;const e=this.o_(this.Go),t=this.Go;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Go===t&&this.__(r,i)},r=>{e(()=>{const i=new p(g.UNKNOWN,"Fetching auth token failed: "+r.message);return this.a_(i)})})}__(e,t){const r=this.o_(this.Go);this.stream=this.u_(e,t),this.stream.Io(()=>{r(()=>(this.state=2,this.jo=this._i.enqueueAfterDelay(this.Wo,1e4,()=>(this.Yo()&&(this.state=3),Promise.resolve())),this.listener.Io()))}),this.stream.Eo(i=>{r(()=>this.a_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Zo(){this.state=5,this.Ho.Qo(async()=>{this.state=0,this.start()})}a_(e){return _("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}o_(e){return t=>{this._i.enqueueAndForget(()=>this.Go===e?t():(_("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Bw extends Mm{constructor(e,t,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,i,o),this.serializer=s}u_(e,t){return this.connection.Mo("Listen",e,t)}onMessage(e){this.Ho.reset();const t=YE(this.serializer,e),r=function(s){if(!("targetChange"in s))return R.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?R.min():o.readTime?re(o.readTime):R.min()}(e);return this.listener.c_(t,r)}l_(e){const t={};t.database=ni(this.serializer),t.addTarget=function(s,o){let a;const c=o.target;if(a=ws(c)?{documents:um(s,c)}:{query:lm(s,c)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=im(s,o.resumeToken);const u=wa(s,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(R.min())>0){a.readTime=Jn(s,o.snapshotVersion.toTimestamp());const u=wa(s,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,e);const r=JE(this.serializer,e);r&&(t.labels=r),this.n_(t)}h_(e){const t={};t.database=ni(this.serializer),t.removeTarget=e,this.n_(t)}}class qw extends Mm{constructor(e,t,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,i,o),this.serializer=s,this.P_=!1}get I_(){return this.P_}start(){this.P_=!1,this.lastStreamToken=void 0,super.start()}s_(){this.P_&&this.d_([])}u_(e,t){return this.connection.Mo("Write",e,t)}onMessage(e){if(S(!!e.streamToken),this.lastStreamToken=e.streamToken,this.P_){this.Ho.reset();const t=XE(e.writeResults,e.commitTime),r=re(e.commitTime);return this.listener.T_(r,t)}return S(!e.writeResults||e.writeResults.length===0),this.P_=!0,this.listener.E_()}A_(){const e={};e.database=ni(this.serializer),this.n_(e)}d_(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>ri(this.serializer,r))};this.n_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $w extends class{}{constructor(e,t,r,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=i,this.R_=!1}V_(){if(this.R_)throw new p(g.FAILED_PRECONDITION,"The client has already been terminated.")}bo(e,t,r){return this.V_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.bo(e,t,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===g.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new p(g.UNKNOWN,i.toString())})}Fo(e,t,r,i){return this.V_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Fo(e,t,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===g.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new p(g.UNKNOWN,s.toString())})}terminate(){this.R_=!0}}class jw{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.f_=0,this.g_=null,this.p_=!0}y_(){this.f_===0&&(this.w_("Unknown"),this.g_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.g_=null,this.S_("Backend didn't respond within 10 seconds."),this.w_("Offline"),Promise.resolve())))}b_(e){this.state==="Online"?this.w_("Unknown"):(this.f_++,this.f_>=1&&(this.D_(),this.S_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.w_("Offline")))}set(e){this.D_(),this.f_=0,e==="Online"&&(this.p_=!1),this.w_(e)}w_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}S_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.p_?(ne(t),this.p_=!1):_("OnlineStateTracker",t)}D_(){this.g_!==null&&(this.g_.cancel(),this.g_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gw{constructor(e,t,r,i,s){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.C_=[],this.v_=new Map,this.F_=new Set,this.M_=[],this.x_=s,this.x_.so(o=>{r.enqueueAndForget(async()=>{$t(this)&&(_("RemoteStore","Restarting streams for network reachability change."),await async function(c){const u=w(c);u.F_.add(4),await hr(u),u.O_.set("Unknown"),u.F_.delete(4),await Di(u)}(this))})}),this.O_=new jw(r,i)}}async function Di(n){if($t(n))for(const e of n.M_)await e(!0)}async function hr(n){for(const e of n.M_)await e(!1)}function fo(n,e){const t=w(n);t.v_.has(e.targetId)||(t.v_.set(e.targetId,e),Bc(t)?Uc(t):fr(t).Yo()&&Fc(t,e))}function ii(n,e){const t=w(n),r=fr(t);t.v_.delete(e),r.Yo()&&Lm(t,e),t.v_.size===0&&(r.Yo()?r.e_():$t(t)&&t.O_.set("Unknown"))}function Fc(n,e){if(n.N_.Le(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(R.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}fr(n).l_(e)}function Lm(n,e){n.N_.Le(e),fr(n).h_(e)}function Uc(n){n.N_=new jE({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),lt:e=>n.v_.get(e)||null,st:()=>n.datastore.serializer.databaseId}),fr(n).start(),n.O_.y_()}function Bc(n){return $t(n)&&!fr(n).Jo()&&n.v_.size>0}function $t(n){return w(n).F_.size===0}function Fm(n){n.N_=void 0}async function zw(n){n.v_.forEach((e,t)=>{Fc(n,e)})}async function Kw(n,e){Fm(n),Bc(n)?(n.O_.b_(e),Uc(n)):n.O_.set("Unknown")}async function Ww(n,e,t){if(n.O_.set("Online"),e instanceof rm&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.v_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.v_.delete(a),i.N_.removeTarget(a))}(n,e)}catch(r){_("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Vs(n,r)}else if(e instanceof ns?n.N_.Ge(e):e instanceof nm?n.N_.Xe(e):n.N_.He(e),!t.isEqual(R.min()))try{const r=await Cm(n.localStore);t.compareTo(r)>=0&&await function(s,o){const a=s.N_._t(o);return a.targetChanges.forEach((c,u)=>{if(c.resumeToken.approximateByteSize()>0){const l=s.v_.get(u);l&&s.v_.set(u,l.withResumeToken(c.resumeToken,o))}}),a.targetMismatches.forEach((c,u)=>{const l=s.v_.get(c);if(!l)return;s.v_.set(c,l.withResumeToken(oe.EMPTY_BYTE_STRING,l.snapshotVersion)),Lm(s,c);const h=new nt(l.target,c,u,l.sequenceNumber);Fc(s,h)}),s.remoteSyncer.applyRemoteEvent(a)}(n,t)}catch(r){_("RemoteStore","Failed to raise snapshot:",r),await Vs(n,r)}}async function Vs(n,e,t){if(!Bt(e))throw e;n.F_.add(1),await hr(n),n.O_.set("Offline"),t||(t=()=>Cm(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{_("RemoteStore","Retrying IndexedDB access"),await t(),n.F_.delete(1),await Di(n)})}function Um(n,e){return e().catch(t=>Vs(n,t,e))}async function dr(n){const e=w(n),t=Nt(e);let r=e.C_.length>0?e.C_[e.C_.length-1].batchId:-1;for(;Hw(e);)try{const i=await Nw(e.localStore,r);if(i===null){e.C_.length===0&&t.e_();break}r=i.batchId,Qw(e,i)}catch(i){await Vs(e,i)}Bm(e)&&qm(e)}function Hw(n){return $t(n)&&n.C_.length<10}function Qw(n,e){n.C_.push(e);const t=Nt(n);t.Yo()&&t.I_&&t.d_(e.mutations)}function Bm(n){return $t(n)&&!Nt(n).Jo()&&n.C_.length>0}function qm(n){Nt(n).start()}async function Yw(n){Nt(n).A_()}async function Xw(n){const e=Nt(n);for(const t of n.C_)e.d_(t.mutations)}async function Jw(n,e,t){const r=n.C_.shift(),i=Rc.from(r,e,t);await Um(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await dr(n)}async function Zw(n,e){e&&Nt(n).I_&&await async function(r,i){if(function(o){return Zf(o)&&o!==g.ABORTED}(i.code)){const s=r.C_.shift();Nt(r).Xo(),await Um(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await dr(r)}}(n,e),Bm(n)&&qm(n)}async function Xl(n,e){const t=w(n);t.asyncQueue.verifyOperationInProgress(),_("RemoteStore","RemoteStore received new credentials");const r=$t(t);t.F_.add(3),await hr(t),r&&t.O_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.F_.delete(3),await Di(t)}async function Ca(n,e){const t=w(n);e?(t.F_.delete(2),await Di(t)):e||(t.F_.add(2),await hr(t),t.O_.set("Unknown"))}function fr(n){return n.B_||(n.B_=function(t,r,i){const s=w(t);return s.V_(),new Bw(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{Io:zw.bind(null,n),Eo:Kw.bind(null,n),c_:Ww.bind(null,n)}),n.M_.push(async e=>{e?(n.B_.Xo(),Bc(n)?Uc(n):n.O_.set("Unknown")):(await n.B_.stop(),Fm(n))})),n.B_}function Nt(n){return n.L_||(n.L_=function(t,r,i){const s=w(t);return s.V_(),new qw(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{Io:Yw.bind(null,n),Eo:Zw.bind(null,n),E_:Xw.bind(null,n),T_:Jw.bind(null,n)}),n.M_.push(async e=>{e?(n.L_.Xo(),await dr(n)):(await n.L_.stop(),n.C_.length>0&&(_("RemoteStore",`Stopping write stream with ${n.C_.length} pending writes`),n.C_=[]))})),n.L_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qc{constructor(e,t,r,i,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new ue,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,i,s){const o=Date.now()+r,a=new qc(e,t,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new p(g.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function mr(n,e){if(ne("AsyncQueue",`${e}: ${n}`),Bt(n))return new p(g.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn{constructor(e){this.comparator=e?(t,r)=>e(t,r)||E.comparator(t.key,r.key):(t,r)=>E.comparator(t.key,r.key),this.keyedMap=Sr(),this.sortedSet=new j(this.comparator)}static emptySet(e){return new Gn(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Gn)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new Gn;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jl{constructor(){this.k_=new j(E.comparator)}track(e){const t=e.doc.key,r=this.k_.get(t);r?e.type!==0&&r.type===3?this.k_=this.k_.insert(t,e):e.type===3&&r.type!==1?this.k_=this.k_.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.k_=this.k_.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.k_=this.k_.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.k_=this.k_.remove(t):e.type===1&&r.type===2?this.k_=this.k_.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.k_=this.k_.insert(t,{type:2,doc:e.doc}):A():this.k_=this.k_.insert(t,e)}q_(){const e=[];return this.k_.inorderTraversal((t,r)=>{e.push(r)}),e}}class tr{constructor(e,t,r,i,s,o,a,c,u){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,t,r,i,s){const o=[];return t.forEach(a=>{o.push({type:0,doc:a})}),new tr(e,t,Gn.emptySet(t),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ai(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==r[i].type||!t[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eT{constructor(){this.Q_=void 0,this.listeners=[]}}class tT{constructor(){this.queries=new qt(e=>Ff(e),Ai),this.onlineState="Unknown",this.K_=new Set}}async function $c(n,e){const t=w(n),r=e.query;let i=!1,s=t.queries.get(r);if(s||(i=!0,s=new eT),i)try{s.Q_=await t.onListen(r)}catch(o){const a=mr(o,`Initialization of query '${kn(e.query)}' failed`);return void e.onError(a)}t.queries.set(r,s),s.listeners.push(e),e.U_(t.onlineState),s.Q_&&e.W_(s.Q_)&&Gc(t)}async function jc(n,e){const t=w(n),r=e.query;let i=!1;const s=t.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return t.queries.delete(r),t.onUnlisten(r)}function nT(n,e){const t=w(n);let r=!1;for(const i of e){const s=i.query,o=t.queries.get(s);if(o){for(const a of o.listeners)a.W_(i)&&(r=!0);o.Q_=i}}r&&Gc(t)}function rT(n,e,t){const r=w(n),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(t);r.queries.delete(e)}function Gc(n){n.K_.forEach(e=>{e.next()})}class zc{constructor(e,t,r){this.query=e,this.G_=t,this.z_=!1,this.j_=null,this.onlineState="Unknown",this.options=r||{}}W_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new tr(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.z_?this.H_(e)&&(this.G_.next(e),t=!0):this.J_(e,this.onlineState)&&(this.Y_(e),t=!0),this.j_=e,t}onError(e){this.G_.error(e)}U_(e){this.onlineState=e;let t=!1;return this.j_&&!this.z_&&this.J_(this.j_,e)&&(this.Y_(this.j_),t=!0),t}J_(e,t){if(!e.fromCache)return!0;const r=t!=="Offline";return(!this.options.Z_||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}H_(e){if(e.docChanges.length>0)return!0;const t=this.j_&&this.j_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}Y_(e){e=tr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.z_=!0,this.G_.next(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iT{constructor(e,t){this.X_=e,this.byteLength=t}ea(){return"metadata"in this.X_}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zl{constructor(e){this.serializer=e}Is(e){return We(this.serializer,e)}ds(e){return e.metadata.exists?cm(this.serializer,e.document,!1):H.newNoDocument(this.Is(e.metadata.name),this.Ts(e.metadata.readTime))}Ts(e){return re(e)}}class sT{constructor(e,t,r){this.ta=e,this.localStore=t,this.serializer=r,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=$m(e)}na(e){this.progress.bytesLoaded+=e.byteLength;let t=this.progress.documentsLoaded;if(e.X_.namedQuery)this.queries.push(e.X_.namedQuery);else if(e.X_.documentMetadata){this.documents.push({metadata:e.X_.documentMetadata}),e.X_.documentMetadata.exists||++t;const r=M.fromString(e.X_.documentMetadata.name);this.collectionGroups.add(r.get(r.length-2))}else e.X_.document&&(this.documents[this.documents.length-1].document=e.X_.document,++t);return t!==this.progress.documentsLoaded?(this.progress.documentsLoaded=t,Object.assign({},this.progress)):null}ra(e){const t=new Map,r=new Zl(this.serializer);for(const i of e)if(i.metadata.queries){const s=r.Is(i.metadata.name);for(const o of i.metadata.queries){const a=(t.get(o)||V()).add(s);t.set(o,a)}}return t}async complete(){const e=await xw(this.localStore,new Zl(this.serializer),this.documents,this.ta.id),t=this.ra(this.documents);for(const r of this.queries)await Ow(this.localStore,r,t.get(r.name));return this.progress.taskState="Success",{progress:this.progress,ia:this.collectionGroups,sa:e}}}function $m(n){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:n.totalDocuments,totalBytes:n.totalBytes}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jm{constructor(e){this.key=e}}class Gm{constructor(e){this.key=e}}class zm{constructor(e,t){this.query=e,this.oa=t,this._a=null,this.hasCachedResults=!1,this.current=!1,this.aa=V(),this.mutatedKeys=V(),this.ua=Bf(e),this.ca=new Gn(this.ua)}get la(){return this.oa}ha(e,t){const r=t?t.Pa:new Jl,i=t?t.ca:this.ca;let s=t?t.mutatedKeys:this.mutatedKeys,o=i,a=!1;const c=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((l,h)=>{const d=i.get(l),f=Ri(this.query,h)?h:null,y=!!d&&this.mutatedKeys.has(d.key),I=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let v=!1;d&&f?d.data.isEqual(f.data)?y!==I&&(r.track({type:3,doc:f}),v=!0):this.Ia(d,f)||(r.track({type:2,doc:f}),v=!0,(c&&this.ua(f,c)>0||u&&this.ua(f,u)<0)&&(a=!0)):!d&&f?(r.track({type:0,doc:f}),v=!0):d&&!f&&(r.track({type:1,doc:d}),v=!0,(c||u)&&(a=!0)),v&&(f?(o=o.add(f),s=I?s.add(l):s.delete(l)):(o=o.delete(l),s=s.delete(l)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const l=this.query.limitType==="F"?o.last():o.first();o=o.delete(l.key),s=s.delete(l.key),r.track({type:1,doc:l})}return{ca:o,Pa:r,es:a,mutatedKeys:s}}Ia(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r){const i=this.ca;this.ca=e.ca,this.mutatedKeys=e.mutatedKeys;const s=e.Pa.q_();s.sort((u,l)=>function(d,f){const y=I=>{switch(I){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return A()}};return y(d)-y(f)}(u.type,l.type)||this.ua(u.doc,l.doc)),this.da(r);const o=t?this.Ta():[],a=this.aa.size===0&&this.current?1:0,c=a!==this._a;return this._a=a,s.length!==0||c?{snapshot:new tr(this.query,e.ca,i,s,e.mutatedKeys,a===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ea:o}:{Ea:o}}U_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ca:this.ca,Pa:new Jl,mutatedKeys:this.mutatedKeys,es:!1},!1)):{Ea:[]}}Aa(e){return!this.oa.has(e)&&!!this.ca.has(e)&&!this.ca.get(e).hasLocalMutations}da(e){e&&(e.addedDocuments.forEach(t=>this.oa=this.oa.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.oa=this.oa.delete(t)),this.current=e.current)}Ta(){if(!this.current)return[];const e=this.aa;this.aa=V(),this.ca.forEach(r=>{this.Aa(r.key)&&(this.aa=this.aa.add(r.key))});const t=[];return e.forEach(r=>{this.aa.has(r)||t.push(new Gm(r))}),this.aa.forEach(r=>{e.has(r)||t.push(new jm(r))}),t}Ra(e){this.oa=e.Ps,this.aa=V();const t=this.ha(e.documents);return this.applyChanges(t,!0)}Va(){return tr.fromInitialDocuments(this.query,this.ca,this.mutatedKeys,this._a===0,this.hasCachedResults)}}class oT{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class aT{constructor(e){this.key=e,this.ma=!1}}class cT{constructor(e,t,r,i,s,o){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.fa={},this.ga=new qt(a=>Ff(a),Ai),this.pa=new Map,this.ya=new Set,this.wa=new j(E.comparator),this.Sa=new Map,this.ba=new kc,this.Da={},this.Ca=new Map,this.va=mn.Ln(),this.onlineState="Unknown",this.Fa=void 0}get isPrimaryClient(){return this.Fa===!0}}async function uT(n,e){const t=Yc(n);let r,i;const s=t.ga.get(e);if(s)r=s.targetId,t.sharedClientState.addLocalQueryTarget(r),i=s.view.Va();else{const o=await Zn(t.localStore,Se(e)),a=t.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await Kc(t,e,r,a==="current",o.resumeToken),t.isPrimaryClient&&fo(t.remoteStore,o)}return i}async function Kc(n,e,t,r,i){n.Ma=(h,d,f)=>async function(I,v,b,L){let k=v.view.ha(b);k.es&&(k=await Ps(I.localStore,v.query,!1).then(({documents:K})=>v.view.ha(K,k)));const G=L&&L.targetChanges.get(v.targetId),z=v.view.applyChanges(k,I.isPrimaryClient,G);return Da(I,v.targetId,z.Ea),z.snapshot}(n,h,d,f);const s=await Ps(n.localStore,e,!0),o=new zm(e,s.Ps),a=o.ha(s.documents),c=Pi.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",i),u=o.applyChanges(a,n.isPrimaryClient,c);Da(n,t,u.Ea);const l=new oT(e,t,o);return n.ga.set(e,l),n.pa.has(t)?n.pa.get(t).push(e):n.pa.set(t,[e]),u.snapshot}async function lT(n,e){const t=w(n),r=t.ga.get(e),i=t.pa.get(r.targetId);if(i.length>1)return t.pa.set(r.targetId,i.filter(s=>!Ai(s,e))),void t.ga.delete(e);t.isPrimaryClient?(t.sharedClientState.removeLocalQueryTarget(r.targetId),t.sharedClientState.isActiveQueryTarget(r.targetId)||await er(t.localStore,r.targetId,!1).then(()=>{t.sharedClientState.clearQueryState(r.targetId),ii(t.remoteStore,r.targetId),nr(t,r.targetId)}).catch(Ut)):(nr(t,r.targetId),await er(t.localStore,r.targetId,!0))}async function hT(n,e,t){const r=Xc(n);try{const i=await function(o,a){const c=w(o),u=Y.now(),l=a.reduce((f,y)=>f.add(y.key),V());let h,d;return c.persistence.runTransaction("Locally write mutations","readwrite",f=>{let y=Ve(),I=V();return c._s.getEntries(f,l).next(v=>{y=v,y.forEach((b,L)=>{L.isValidDocument()||(I=I.add(b))})}).next(()=>c.localDocuments.getOverlayedDocuments(f,y)).next(v=>{h=v;const b=[];for(const L of a){const k=BE(L,h.get(L.key).overlayedDocument);k!=null&&b.push(new ut(L.key,k,Cf(k.value.mapValue),Q.exists(!0)))}return c.mutationQueue.addMutationBatch(f,u,b,a)}).next(v=>{d=v;const b=v.applyToLocalDocumentSet(h,I);return c.documentOverlayCache.saveOverlays(f,v.batchId,b)})}).then(()=>({batchId:d.batchId,changes:$f(h)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,c){let u=o.Da[o.currentUser.toKey()];u||(u=new j(D)),u=u.insert(a,c),o.Da[o.currentUser.toKey()]=u}(r,i.batchId,t),await lt(r,i.changes),await dr(r.remoteStore)}catch(i){const s=mr(i,"Failed to persist write");t.reject(s)}}async function Km(n,e){const t=w(n);try{const r=await kw(t.localStore,e);e.targetChanges.forEach((i,s)=>{const o=t.Sa.get(s);o&&(S(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.ma=!0:i.modifiedDocuments.size>0?S(o.ma):i.removedDocuments.size>0&&(S(o.ma),o.ma=!1))}),await lt(t,r,e)}catch(r){await Ut(r)}}function eh(n,e,t){const r=w(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const i=[];r.ga.forEach((s,o)=>{const a=o.view.U_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const c=w(o);c.onlineState=a;let u=!1;c.queries.forEach((l,h)=>{for(const d of h.listeners)d.U_(a)&&(u=!0)}),u&&Gc(c)}(r.eventManager,e),i.length&&r.fa.c_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function dT(n,e,t){const r=w(n);r.sharedClientState.updateQueryState(e,"rejected",t);const i=r.Sa.get(e),s=i&&i.key;if(s){let o=new j(E.comparator);o=o.insert(s,H.newNoDocument(s,R.min()));const a=V().add(s),c=new bi(R.min(),new Map,new j(D),o,a);await Km(r,c),r.wa=r.wa.remove(s),r.Sa.delete(e),Qc(r)}else await er(r.localStore,e,!1).then(()=>nr(r,e,t)).catch(Ut)}async function fT(n,e){const t=w(n),r=e.batch.batchId;try{const i=await Vw(t.localStore,e);Hc(t,r,null),Wc(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await lt(t,i)}catch(i){await Ut(i)}}async function mT(n,e,t){const r=w(n);try{const i=await function(o,a){const c=w(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let l;return c.mutationQueue.lookupMutationBatch(u,a).next(h=>(S(h!==null),l=h.keys(),c.mutationQueue.removeMutationBatch(u,h))).next(()=>c.mutationQueue.performConsistencyCheck(u)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(u,l,a)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,l)).next(()=>c.localDocuments.getDocuments(u,l))})}(r.localStore,e);Hc(r,e,t),Wc(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await lt(r,i)}catch(i){await Ut(i)}}async function gT(n,e){const t=w(n);$t(t.remoteStore)||_("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const r=await function(o){const a=w(o);return a.persistence.runTransaction("Get highest unacknowledged batch id","readonly",c=>a.mutationQueue.getHighestUnacknowledgedBatchId(c))}(t.localStore);if(r===-1)return void e.resolve();const i=t.Ca.get(r)||[];i.push(e),t.Ca.set(r,i)}catch(r){const i=mr(r,"Initialization of waitForPendingWrites() operation failed");e.reject(i)}}function Wc(n,e){(n.Ca.get(e)||[]).forEach(t=>{t.resolve()}),n.Ca.delete(e)}function Hc(n,e,t){const r=w(n);let i=r.Da[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(t?s.reject(t):s.resolve(),i=i.remove(e)),r.Da[r.currentUser.toKey()]=i}}function nr(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.pa.get(e))n.ga.delete(r),t&&n.fa.xa(r,t);n.pa.delete(e),n.isPrimaryClient&&n.ba.mr(e).forEach(r=>{n.ba.containsKey(r)||Wm(n,r)})}function Wm(n,e){n.ya.delete(e.path.canonicalString());const t=n.wa.get(e);t!==null&&(ii(n.remoteStore,t),n.wa=n.wa.remove(e),n.Sa.delete(t),Qc(n))}function Da(n,e,t){for(const r of t)r instanceof jm?(n.ba.addReference(r.key,e),pT(n,r)):r instanceof Gm?(_("SyncEngine","Document no longer in limbo: "+r.key),n.ba.removeReference(r.key,e),n.ba.containsKey(r.key)||Wm(n,r.key)):A()}function pT(n,e){const t=e.key,r=t.path.canonicalString();n.wa.get(t)||n.ya.has(r)||(_("SyncEngine","New document in limbo: "+t),n.ya.add(r),Qc(n))}function Qc(n){for(;n.ya.size>0&&n.wa.size<n.maxConcurrentLimboResolutions;){const e=n.ya.values().next().value;n.ya.delete(e);const t=new E(M.fromString(e)),r=n.va.next();n.Sa.set(r,new aT(t)),n.wa=n.wa.insert(t,r),fo(n.remoteStore,new nt(Se(cr(t.path)),r,"TargetPurposeLimboResolution",Ce.ae))}}async function lt(n,e,t){const r=w(n),i=[],s=[],o=[];r.ga.isEmpty()||(r.ga.forEach((a,c)=>{o.push(r.Ma(c,e,t).then(u=>{if((u||t)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(c.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const l=Oc.$i(c.targetId,u);s.push(l)}}))}),await Promise.all(o),r.fa.c_(i),await async function(c,u){const l=w(c);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>m.forEach(u,d=>m.forEach(d.Qi,f=>l.persistence.referenceDelegate.addReference(h,d.targetId,f)).next(()=>m.forEach(d.Ki,f=>l.persistence.referenceDelegate.removeReference(h,d.targetId,f)))))}catch(h){if(!Bt(h))throw h;_("LocalStore","Failed to update sequence numbers: "+h)}for(const h of u){const d=h.targetId;if(!h.fromCache){const f=l.rs.get(d),y=f.snapshotVersion,I=f.withLastLimboFreeSnapshotVersion(y);l.rs=l.rs.insert(d,I)}}}(r.localStore,s))}async function _T(n,e){const t=w(n);if(!t.currentUser.isEqual(e)){_("SyncEngine","User change. New user:",e.toKey());const r=await Pm(t.localStore,e);t.currentUser=e,function(s,o){s.Ca.forEach(a=>{a.forEach(c=>{c.reject(new p(g.CANCELLED,o))})}),s.Ca.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await lt(t,r.cs)}}function yT(n,e){const t=w(n),r=t.Sa.get(e);if(r&&r.ma)return V().add(r.key);{let i=V();const s=t.pa.get(e);if(!s)return i;for(const o of s){const a=t.ga.get(o);i=i.unionWith(a.view.la)}return i}}async function IT(n,e){const t=w(n),r=await Ps(t.localStore,e.query,!0),i=e.view.Ra(r);return t.isPrimaryClient&&Da(t,e.targetId,i.Ea),i}async function vT(n,e){const t=w(n);return km(t.localStore,e).then(r=>lt(t,r))}async function ET(n,e,t,r){const i=w(n),s=await function(a,c){const u=w(a),l=w(u.mutationQueue);return u.persistence.runTransaction("Lookup mutation documents","readonly",h=>l.Fn(h,c).next(d=>d?u.localDocuments.getDocuments(h,d):m.resolve(null)))}(i.localStore,e);s!==null?(t==="pending"?await dr(i.remoteStore):t==="acknowledged"||t==="rejected"?(Hc(i,e,r||null),Wc(i,e),function(a,c){w(w(a).mutationQueue).xn(c)}(i.localStore,e)):A(),await lt(i,s)):_("SyncEngine","Cannot apply mutation batch with id: "+e)}async function wT(n,e){const t=w(n);if(Yc(t),Xc(t),e===!0&&t.Fa!==!0){const r=t.sharedClientState.getAllActiveQueryTargets(),i=await th(t,r.toArray());t.Fa=!0,await Ca(t.remoteStore,!0);for(const s of i)fo(t.remoteStore,s)}else if(e===!1&&t.Fa!==!1){const r=[];let i=Promise.resolve();t.pa.forEach((s,o)=>{t.sharedClientState.isLocalQueryTarget(o)?r.push(o):i=i.then(()=>(nr(t,o),er(t.localStore,o,!0))),ii(t.remoteStore,o)}),await i,await th(t,r),function(o){const a=w(o);a.Sa.forEach((c,u)=>{ii(a.remoteStore,u)}),a.ba.gr(),a.Sa=new Map,a.wa=new j(E.comparator)}(t),t.Fa=!1,await Ca(t.remoteStore,!1)}}async function th(n,e,t){const r=w(n),i=[],s=[];for(const o of e){let a;const c=r.pa.get(o);if(c&&c.length!==0){a=await Zn(r.localStore,Se(c[0]));for(const u of c){const l=r.ga.get(u),h=await IT(r,l);h.snapshot&&s.push(h.snapshot)}}else{const u=await Vm(r.localStore,o);a=await Zn(r.localStore,u),await Kc(r,Hm(u),o,!1,a.resumeToken)}i.push(a)}return r.fa.c_(s),i}function Hm(n){return Lf(n.path,n.collectionGroup,n.orderBy,n.filters,n.limit,"F",n.startAt,n.endAt)}function TT(n){return function(t){return w(w(t).persistence).ki()}(w(n).localStore)}async function AT(n,e,t,r){const i=w(n);if(i.Fa)return void _("SyncEngine","Ignoring unexpected query state notification.");const s=i.pa.get(e);if(s&&s.length>0)switch(t){case"current":case"not-current":{const o=await km(i.localStore,Uf(s[0])),a=bi.createSynthesizedRemoteEventForCurrentChange(e,t==="current",oe.EMPTY_BYTE_STRING);await lt(i,o,a);break}case"rejected":await er(i.localStore,e,!0),nr(i,e,r);break;default:A()}}async function RT(n,e,t){const r=Yc(n);if(r.Fa){for(const i of e){if(r.pa.has(i)){_("SyncEngine","Adding an already active target "+i);continue}const s=await Vm(r.localStore,i),o=await Zn(r.localStore,s);await Kc(r,Hm(s),o.targetId,!1,o.resumeToken),fo(r.remoteStore,o)}for(const i of t)r.pa.has(i)&&await er(r.localStore,i,!1).then(()=>{ii(r.remoteStore,i),nr(r,i)}).catch(Ut)}}function Yc(n){const e=w(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Km.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=yT.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=dT.bind(null,e),e.fa.c_=nT.bind(null,e.eventManager),e.fa.xa=rT.bind(null,e.eventManager),e}function Xc(n){const e=w(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=fT.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=mT.bind(null,e),e}function ST(n,e,t){const r=w(n);(async function(s,o,a){try{const c=await o.getMetadata();if(await function(f,y){const I=w(f),v=re(y.createTime);return I.persistence.runTransaction("hasNewerBundle","readonly",b=>I.Ur.getBundleMetadata(b,y.id)).then(b=>!!b&&b.createTime.compareTo(v)>=0)}(s.localStore,c))return await o.close(),a._completeWith(function(f){return{taskState:"Success",documentsLoaded:f.totalDocuments,bytesLoaded:f.totalBytes,totalDocuments:f.totalDocuments,totalBytes:f.totalBytes}}(c)),Promise.resolve(new Set);a._updateProgress($m(c));const u=new sT(c,s.localStore,o.serializer);let l=await o.Oa();for(;l;){const d=await u.na(l);d&&a._updateProgress(d),l=await o.Oa()}const h=await u.complete();return await lt(s,h.sa,void 0),await function(f,y){const I=w(f);return I.persistence.runTransaction("Save bundle","readwrite",v=>I.Ur.saveBundleMetadata(v,y))}(s.localStore,c),a._completeWith(h.progress),Promise.resolve(h.ia)}catch(c){return Ue("SyncEngine",`Loading bundle failed with ${c}`),a._failWith(c),Promise.resolve(new Set)}})(r,e,t).then(i=>{r.sharedClientState.notifyBundleLoaded(i)})}class Va{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Ci(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,t){return null}createIndexBackfillerScheduler(e,t){return null}createLocalStore(e){return bm(this.persistence,new Sm,e.initialUser,this.serializer)}createPersistence(e){return new Rm(ho.Jr,this.serializer)}createSharedClientState(e){return new xm}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Qm extends Va{constructor(e,t,r){super(),this.Na=e,this.cacheSizeBytes=t,this.forceOwnership=r,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Na.initialize(this,e),await Xc(this.Na.syncEngine),await dr(this.Na.remoteStore),await this.persistence.gi(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}createLocalStore(e){return bm(this.persistence,new Sm,e.initialUser,this.serializer)}createGarbageCollectionScheduler(e,t){const r=this.persistence.referenceDelegate.garbageCollector;return new mw(r,e.asyncQueue,t)}createIndexBackfillerScheduler(e,t){const r=new Xv(t,this.persistence);return new Yv(e.asyncQueue,r)}createPersistence(e){const t=xc(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?Pe.withCacheSize(this.cacheSizeBytes):Pe.DEFAULT;return new Nc(this.synchronizeTabs,t,e.clientId,r,e.asyncQueue,Om(),rs(),this.serializer,this.sharedClientState,!!this.forceOwnership)}createSharedClientState(e){return new xm}}class bT extends Qm{constructor(e,t){super(e,t,!1),this.Na=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const t=this.Na.syncEngine;this.sharedClientState instanceof Qo&&(this.sharedClientState.syncEngine={Xs:ET.bind(null,t),eo:AT.bind(null,t),no:RT.bind(null,t),ki:TT.bind(null,t),Zs:vT.bind(null,t)},await this.sharedClientState.start()),await this.persistence.gi(async r=>{await wT(this.Na.syncEngine,r),this.gcScheduler&&(r&&!this.gcScheduler.started?this.gcScheduler.start():r||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(r&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():r||this.indexBackfillerScheduler.stop())})}createSharedClientState(e){const t=Om();if(!Qo.C(t))throw new p(g.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const r=xc(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new Qo(t,e.asyncQueue,r,e.clientId,e.initialUser)}}class Jc{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>eh(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=_T.bind(null,this.syncEngine),await Ca(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new tT}()}createDatastore(e){const t=Ci(e.databaseInfo.databaseId),r=function(s){return new Uw(s)}(e.databaseInfo);return function(s,o,a,c){return new $w(s,o,a,c)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,i,s,o,a){return new Gw(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,t=>eh(this.syncEngine,t,0),function(){return Yl.C()?new Yl:new Mw}())}createSyncEngine(e,t){return function(i,s,o,a,c,u,l){const h=new cT(i,s,o,a,c,u);return l&&(h.Fa=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(t){const r=w(t);_("RemoteStore","RemoteStore shutting down."),r.F_.add(5),await hr(r),r.x_.shutdown(),r.O_.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nh(n,e=10240){let t=0;return{async read(){if(t<n.byteLength){const r={value:n.slice(t,t+e),done:!1};return t+=e,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mo{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ba(this.observer.next,e)}error(e){this.observer.error?this.Ba(this.observer.error,e):ne("Uncaught Error in snapshot listener:",e.toString())}La(){this.muted=!0}Ba(e,t){this.muted||setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PT{constructor(e,t){this.ka=e,this.serializer=t,this.metadata=new ue,this.buffer=new Uint8Array,this.qa=function(){return new TextDecoder("utf-8")}(),this.Qa().then(r=>{r&&r.ea()?this.metadata.resolve(r.X_.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(r==null?void 0:r.X_)}`))},r=>this.metadata.reject(r))}close(){return this.ka.cancel()}async getMetadata(){return this.metadata.promise}async Oa(){return await this.getMetadata(),this.Qa()}async Qa(){const e=await this.Ka();if(e===null)return null;const t=this.qa.decode(e),r=Number(t);isNaN(r)&&this.$a(`length string (${t}) is not valid number`);const i=await this.Ua(r);return new iT(JSON.parse(i),e.length+r)}Wa(){return this.buffer.findIndex(e=>e==="{".charCodeAt(0))}async Ka(){for(;this.Wa()<0&&!await this.Ga(););if(this.buffer.length===0)return null;const e=this.Wa();e<0&&this.$a("Reached the end of bundle when a length string is expected.");const t=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),t}async Ua(e){for(;this.buffer.length<e;)await this.Ga()&&this.$a("Reached the end of bundle when more is expected.");const t=this.qa.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),t}$a(e){throw this.ka.cancel(),new Error(`Invalid bundle format: ${e}`)}async Ga(){const e=await this.ka.read();if(!e.done){const t=new Uint8Array(this.buffer.length+e.value.length);t.set(this.buffer),t.set(e.value,this.buffer.length),this.buffer=t}return e.done}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CT{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new p(g.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const t=await async function(i,s){const o=w(i),a=ni(o.serializer)+"/documents",c={documents:s.map(d=>ti(o.serializer,d))},u=await o.Fo("BatchGetDocuments",a,c,s.length),l=new Map;u.forEach(d=>{const f=QE(o.serializer,d);l.set(f.key.toString(),f)});const h=[];return s.forEach(d=>{const f=l.get(d.toString());S(!!f),h.push(f)}),h}(this.datastore,e);return t.forEach(r=>this.recordVersion(r)),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastWriteError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new lr(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const e=this.readVersions;this.mutations.forEach(t=>{e.delete(t.key.toString())}),e.forEach((t,r)=>{const i=E.fromPath(r);this.mutations.push(new Tc(i,this.precondition(i)))}),await async function(r,i){const s=w(r),o=ni(s.serializer)+"/documents",a={writes:i.map(c=>ri(s.serializer,c))};await s.bo("Commit",o,a)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw A();t=R.min()}const r=this.readVersions.get(e.key.toString());if(r){if(!t.isEqual(r))throw new p(g.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){const t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?t.isEqual(R.min())?Q.exists(!1):Q.updateTime(t):Q.none()}preconditionForUpdate(e){const t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(R.min()))throw new p(g.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return Q.updateTime(t)}return Q.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DT{constructor(e,t,r,i,s){this.asyncQueue=e,this.datastore=t,this.options=r,this.updateFunction=i,this.deferred=s,this.za=r.maxAttempts,this.Ho=new Lc(this.asyncQueue,"transaction_retry")}run(){this.za-=1,this.ja()}ja(){this.Ho.Qo(async()=>{const e=new CT(this.datastore),t=this.Ha(e);t&&t.then(r=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(r)}).catch(i=>{this.Ja(i)}))}).catch(r=>{this.Ja(r)})})}Ha(e){try{const t=this.updateFunction(e);return!wi(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(t){return this.deferred.reject(t),null}}Ja(e){this.za>0&&this.Ya(e)?(this.za-=1,this.asyncQueue.enqueueAndForget(()=>(this.ja(),Promise.resolve()))):this.deferred.reject(e)}Ya(e){if(e.name==="FirebaseError"){const t=e.code;return t==="aborted"||t==="failed-precondition"||t==="already-exists"||!Zf(t)}return!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VT{constructor(e,t,r,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=i,this.user=ce.UNAUTHENTICATED,this.clientId=gf.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{_("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(_("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new p(g.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ue;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=mr(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function is(n,e){n.asyncQueue.verifyOperationInProgress(),_("FirestoreClient","Initializing OfflineComponentProvider");const t=await n.getConfiguration();await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await Pm(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function ka(n,e){n.asyncQueue.verifyOperationInProgress();const t=await Zc(n);_("FirestoreClient","Initializing OnlineComponentProvider");const r=await n.getConfiguration();await e.initialize(t,r),n.setCredentialChangeListener(i=>Xl(e.remoteStore,i)),n.setAppCheckTokenChangeListener((i,s)=>Xl(e.remoteStore,s)),n._onlineComponents=e}function Ym(n){return n.name==="FirebaseError"?n.code===g.FAILED_PRECONDITION||n.code===g.UNIMPLEMENTED:!(typeof DOMException<"u"&&n instanceof DOMException)||n.code===22||n.code===20||n.code===11}async function Zc(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){_("FirestoreClient","Using user provided OfflineComponentProvider");try{await is(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!Ym(t))throw t;Ue("Error using user provided cache. Falling back to memory cache: "+t),await is(n,new Va)}}else _("FirestoreClient","Using default OfflineComponentProvider"),await is(n,new Va);return n._offlineComponents}async function go(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(_("FirestoreClient","Using user provided OnlineComponentProvider"),await ka(n,n._uninitializedComponentsProvider._online)):(_("FirestoreClient","Using default OnlineComponentProvider"),await ka(n,new Jc))),n._onlineComponents}function Xm(n){return Zc(n).then(e=>e.persistence)}function eu(n){return Zc(n).then(e=>e.localStore)}function Jm(n){return go(n).then(e=>e.remoteStore)}function tu(n){return go(n).then(e=>e.syncEngine)}function kT(n){return go(n).then(e=>e.datastore)}async function rr(n){const e=await go(n),t=e.eventManager;return t.onListen=uT.bind(null,e.syncEngine),t.onUnlisten=lT.bind(null,e.syncEngine),t}function NT(n){return n.asyncQueue.enqueue(async()=>{const e=await Xm(n),t=await Jm(n);return e.setNetworkEnabled(!0),function(i){const s=w(i);return s.F_.delete(0),Di(s)}(t)})}function xT(n){return n.asyncQueue.enqueue(async()=>{const e=await Xm(n),t=await Jm(n);return e.setNetworkEnabled(!1),async function(i){const s=w(i);s.F_.add(0),await hr(s),s.O_.set("Offline")}(t)})}function OT(n,e){const t=new ue;return n.asyncQueue.enqueueAndForget(async()=>async function(i,s,o){try{const a=await function(u,l){const h=w(u);return h.persistence.runTransaction("read document","readonly",d=>h.localDocuments.getDocument(d,l))}(i,s);a.isFoundDocument()?o.resolve(a):a.isNoDocument()?o.resolve(null):o.reject(new p(g.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(a){const c=mr(a,`Failed to get document '${s} from cache`);o.reject(c)}}(await eu(n),e,t)),t.promise}function Zm(n,e,t={}){const r=new ue;return n.asyncQueue.enqueueAndForget(async()=>function(s,o,a,c,u){const l=new mo({next:d=>{o.enqueueAndForget(()=>jc(s,h));const f=d.docs.has(a);!f&&d.fromCache?u.reject(new p(g.UNAVAILABLE,"Failed to get document because the client is offline.")):f&&d.fromCache&&c&&c.source==="server"?u.reject(new p(g.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(d)},error:d=>u.reject(d)}),h=new zc(cr(a.path),l,{includeMetadataChanges:!0,Z_:!0});return $c(s,h)}(await rr(n),n.asyncQueue,e,t,r)),r.promise}function MT(n,e){const t=new ue;return n.asyncQueue.enqueueAndForget(async()=>async function(i,s,o){try{const a=await Ps(i,s,!0),c=new zm(s,a.Ps),u=c.ha(a.documents),l=c.applyChanges(u,!1);o.resolve(l.snapshot)}catch(a){const c=mr(a,`Failed to execute query '${s} against cache`);o.reject(c)}}(await eu(n),e,t)),t.promise}function eg(n,e,t={}){const r=new ue;return n.asyncQueue.enqueueAndForget(async()=>function(s,o,a,c,u){const l=new mo({next:d=>{o.enqueueAndForget(()=>jc(s,h)),d.fromCache&&c.source==="server"?u.reject(new p(g.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(d)},error:d=>u.reject(d)}),h=new zc(a,l,{includeMetadataChanges:!0,Z_:!0});return $c(s,h)}(await rr(n),n.asyncQueue,e,t,r)),r.promise}function LT(n,e){const t=new mo(e);return n.asyncQueue.enqueueAndForget(async()=>function(i,s){w(i).K_.add(s),s.next()}(await rr(n),t)),()=>{t.La(),n.asyncQueue.enqueueAndForget(async()=>function(i,s){w(i).K_.delete(s)}(await rr(n),t))}}function FT(n,e,t,r){const i=function(o,a){let c;return c=typeof o=="string"?tm().encode(o):o,function(l,h){return new PT(l,h)}(function(l,h){if(l instanceof Uint8Array)return nh(l,h);if(l instanceof ArrayBuffer)return nh(new Uint8Array(l),h);if(l instanceof ReadableStream)return l.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(c),a)}(t,Ci(e));n.asyncQueue.enqueueAndForget(async()=>{ST(await tu(n),i,r)})}function UT(n,e){return n.asyncQueue.enqueue(async()=>function(r,i){const s=w(r);return s.persistence.runTransaction("Get named query","readonly",o=>s.Ur.getNamedQuery(o,i))}(await eu(n),e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tg(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rh=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nu(n,e,t){if(!t)throw new p(g.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function ng(n,e,t,r){if(e===!0&&r===!0)throw new p(g.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function ih(n){if(!E.isDocumentKey(n))throw new p(g.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function sh(n){if(E.isDocumentKey(n))throw new p(g.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function po(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":A()}function F(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new p(g.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=po(n);throw new p(g.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}function rg(n,e){if(e<=0)throw new p(g.INVALID_ARGUMENT,`Function ${n}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oh{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new p(g.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new p(g.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}ng("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=tg((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new p(g.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new p(g.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new p(g.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Vi{constructor(e,t,r,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new oh({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new p(g.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new p(g.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new oh(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Uv;switch(r.type){case"firstParty":return new jv(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new p(g.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=rh.get(t);r&&(_("ComponentProvider","Removing Datastore"),rh.delete(t),r.terminate())}(this),Promise.resolve()}}function BT(n,e,t,r={}){var i;const s=(n=F(n,Vi))._getSettings(),o=`${e}:${t}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Ue("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,c;if(typeof r.mockUserToken=="string")a=r.mockUserToken,c=ce.MOCK_USER;else{a=Kg(r.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new p(g.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new ce(u)}n._authCredentials=new Bv(new mf(a,c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let be=class ig{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new ig(this.firestore,e,this._query)}},X=class sg{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Tt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new sg(this.firestore,e,this._key)}},Tt=class og extends be{constructor(e,t,r){super(e,t,cr(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new X(this.firestore,null,new E(e))}withConverter(e){return new og(this.firestore,e,this._path)}};function ag(n,e,...t){if(n=$(n),nu("collection","path",e),n instanceof Vi){const r=M.fromString(e,...t);return sh(r),new Tt(n,null,r)}{if(!(n instanceof X||n instanceof Tt))throw new p(g.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(M.fromString(e,...t));return sh(r),new Tt(n.firestore,null,r)}}function qT(n,e){if(n=F(n,Vi),nu("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new p(g.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new be(n,null,function(r){return new ct(M.emptyPath(),r)}(e))}function ks(n,e,...t){if(n=$(n),arguments.length===1&&(e=gf.V()),nu("doc","path",e),n instanceof Vi){const r=M.fromString(e,...t);return ih(r),new X(n,null,new E(r))}{if(!(n instanceof X||n instanceof Tt))throw new p(g.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(M.fromString(e,...t));return ih(r),new X(n.firestore,n instanceof Tt?n.converter:null,new E(r))}}function cg(n,e){return n=$(n),e=$(e),(n instanceof X||n instanceof Tt)&&(e instanceof X||e instanceof Tt)&&n.firestore===e.firestore&&n.path===e.path&&n.converter===e.converter}function ug(n,e){return n=$(n),e=$(e),n instanceof be&&e instanceof be&&n.firestore===e.firestore&&Ai(n._query,e._query)&&n.converter===e.converter}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $T{constructor(){this.Za=Promise.resolve(),this.Xa=[],this.eu=!1,this.tu=[],this.nu=null,this.ru=!1,this.iu=!1,this.su=[],this.Ho=new Lc(this,"async_queue_retry"),this.ou=()=>{const t=rs();t&&_("AsyncQueue","Visibility state changed to "+t.visibilityState),this.Ho.$o()};const e=rs();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.ou)}get isShuttingDown(){return this.eu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this._u(),this.au(e)}enterRestrictedMode(e){if(!this.eu){this.eu=!0,this.iu=e||!1;const t=rs();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.ou)}}enqueue(e){if(this._u(),this.eu)return new Promise(()=>{});const t=new ue;return this.au(()=>this.eu&&this.iu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xa.push(e),this.uu()))}async uu(){if(this.Xa.length!==0){try{await this.Xa[0](),this.Xa.shift(),this.Ho.reset()}catch(e){if(!Bt(e))throw e;_("AsyncQueue","Operation failed with retryable error: "+e)}this.Xa.length>0&&this.Ho.Qo(()=>this.uu())}}au(e){const t=this.Za.then(()=>(this.ru=!0,e().catch(r=>{this.nu=r,this.ru=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw ne("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.ru=!1,r))));return this.Za=t,t}enqueueAfterDelay(e,t,r){this._u(),this.su.indexOf(e)>-1&&(t=0);const i=qc.createAndSchedule(this,e,t,r,s=>this.cu(s));return this.tu.push(i),i}_u(){this.nu&&A()}verifyOperationInProgress(){}async lu(){let e;do e=this.Za,await e;while(e!==this.Za)}hu(e){for(const t of this.tu)if(t.timerId===e)return!0;return!1}Pu(e){return this.lu().then(()=>{this.tu.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.tu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.lu()})}Iu(e){this.su.push(e)}cu(e){const t=this.tu.indexOf(e);this.tu.splice(t,1)}}function Na(n){return function(t,r){if(typeof t!="object"||t===null)return!1;const i=t;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(n,["next","error","complete"])}class jT{constructor(){this._progressObserver={},this._taskCompletionResolver=new ue,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,t,r){this._progressObserver={next:e,error:t,complete:r}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,t){return this._taskCompletionResolver.promise.then(e,t)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GT=-1;let te=class extends Vi{constructor(e,t,r,i){super(e,t,r,i),this.type="firestore",this._queue=function(){return new $T}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||lg(this),this._firestoreClient.terminate()}};function fe(n){return n._firestoreClient||lg(n),n._firestoreClient.verifyNotTerminated(),n._firestoreClient}function lg(n){var e,t,r;const i=n._freezeSettings(),s=function(a,c,u,l){return new yE(a,c,u,l.host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,tg(l.experimentalLongPollingOptions),l.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,i);n._firestoreClient=new VT(n._authCredentials,n._appCheckCredentials,n._queue,s),!((t=i.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}function zT(n,e){dg(n=F(n,te));const t=fe(n);if(t._uninitializedComponentsProvider)throw new p(g.FAILED_PRECONDITION,"SDK cache is already specified.");Ue("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const r=n._freezeSettings(),i=new Jc;return hg(t,i,new Qm(i,r.cacheSizeBytes,e==null?void 0:e.forceOwnership))}function KT(n){dg(n=F(n,te));const e=fe(n);if(e._uninitializedComponentsProvider)throw new p(g.FAILED_PRECONDITION,"SDK cache is already specified.");Ue("enableMultiTabIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const t=n._freezeSettings(),r=new Jc;return hg(e,r,new bT(r,t.cacheSizeBytes))}function hg(n,e,t){const r=new ue;return n.asyncQueue.enqueue(async()=>{try{await is(n,t),await ka(n,e),r.resolve()}catch(i){const s=i;if(!Ym(s))throw s;Ue("Error enabling indexeddb cache. Falling back to memory cache: "+s),r.reject(s)}}).then(()=>r.promise)}function WT(n){if(n._initialized&&!n._terminated)throw new p(g.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new ue;return n._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(r){if(!Me.C())return Promise.resolve();const i=r+"main";await Me.delete(i)}(xc(n._databaseId,n._persistenceKey)),e.resolve()}catch(t){e.reject(t)}}),e.promise}function HT(n){return function(t){const r=new ue;return t.asyncQueue.enqueueAndForget(async()=>gT(await tu(t),r)),r.promise}(fe(n=F(n,te)))}function QT(n){return NT(fe(n=F(n,te)))}function YT(n){return xT(fe(n=F(n,te)))}function XT(n,e){const t=fe(n=F(n,te)),r=new jT;return FT(t,n._databaseId,e,r),r}function JT(n,e){return UT(fe(n=F(n,te)),e).then(t=>t?new be(n,null,t.query):null)}function dg(n){if(n._initialized||n._terminated)throw new p(g.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ye(oe.fromBase64String(e))}catch(t){throw new p(g.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Ye(oe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xt=class{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new p(g.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Z(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let In=class{constructor(e){this._methodName=e}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _o{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new p(g.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new p(g.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return D(this._lat,e._lat)||D(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZT=/^__.*__$/;class eA{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new ut(e,this.data,this.fieldMask,t,this.fieldTransforms):new ur(e,this.data,t,this.fieldTransforms)}}class fg{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new ut(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function mg(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw A()}}class yo{constructor(e,t,r,i,s,o){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.du(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Tu(){return this.settings.Tu}Eu(e){return new yo(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Au(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.Eu({path:r,Ru:!1});return i.Vu(e),i}mu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.Eu({path:r,Ru:!1});return i.du(),i}fu(e){return this.Eu({path:void 0,Ru:!0})}gu(e){return Ns(e,this.settings.methodName,this.settings.pu||!1,this.path,this.settings.yu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}du(){if(this.path)for(let e=0;e<this.path.length;e++)this.Vu(this.path.get(e))}Vu(e){if(e.length===0)throw this.gu("Document fields must not be empty");if(mg(this.Tu)&&ZT.test(e))throw this.gu('Document fields cannot begin and end with "__"')}}class tA{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||Ci(e)}wu(e,t,r,i=!1){return new yo({Tu:e,methodName:t,yu:r,path:Z.emptyPath(),Ru:!1,pu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function vn(n){const e=n._freezeSettings(),t=Ci(n._databaseId);return new tA(n._databaseId,!!e.ignoreUndefinedProperties,t)}function Io(n,e,t,r,i,s={}){const o=n.wu(s.merge||s.mergeFields?2:0,e,t,i);ou("Data must be an object, but it was:",o,r);const a=_g(r,o);let c,u;if(s.merge)c=new De(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const l=[];for(const h of s.mergeFields){const d=xa(e,h,t);if(!o.contains(d))throw new p(g.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);Ig(l,d)||l.push(d)}c=new De(l),u=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,u=o.fieldTransforms;return new eA(new _e(a),c,u)}class ki extends In{_toFieldTransform(e){if(e.Tu!==2)throw e.Tu===1?e.gu(`${this._methodName}() can only appear at the top level of your update data`):e.gu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof ki}}function gg(n,e,t){return new yo({Tu:3,yu:e.settings.yu,methodName:n._methodName,Ru:t},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class ru extends In{_toFieldTransform(e){return new Si(e.path,new Yn)}isEqual(e){return e instanceof ru}}class nA extends In{constructor(e,t){super(e),this.Su=t}_toFieldTransform(e){const t=gg(this,e,!0),r=this.Su.map(s=>En(s,t)),i=new ln(r);return new Si(e.path,i)}isEqual(e){return this===e}}class rA extends In{constructor(e,t){super(e),this.Su=t}_toFieldTransform(e){const t=gg(this,e,!0),r=this.Su.map(s=>En(s,t)),i=new hn(r);return new Si(e.path,i)}isEqual(e){return this===e}}class iA extends In{constructor(e,t){super(e),this.bu=t}_toFieldTransform(e){const t=new Xn(e.serializer,Kf(e.serializer,this.bu));return new Si(e.path,t)}isEqual(e){return this===e}}function iu(n,e,t,r){const i=n.wu(1,e,t);ou("Data must be an object, but it was:",i,r);const s=[],o=_e.empty();yn(r,(c,u)=>{const l=au(e,c,t);u=$(u);const h=i.mu(l);if(u instanceof ki)s.push(l);else{const d=En(u,h);d!=null&&(s.push(l),o.set(l,d))}});const a=new De(s);return new fg(o,a,i.fieldTransforms)}function su(n,e,t,r,i,s){const o=n.wu(1,e,t),a=[xa(e,r,t)],c=[i];if(s.length%2!=0)throw new p(g.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<s.length;d+=2)a.push(xa(e,s[d])),c.push(s[d+1]);const u=[],l=_e.empty();for(let d=a.length-1;d>=0;--d)if(!Ig(u,a[d])){const f=a[d];let y=c[d];y=$(y);const I=o.mu(f);if(y instanceof ki)u.push(f);else{const v=En(y,I);v!=null&&(u.push(f),l.set(f,v))}}const h=new De(u);return new fg(l,h,o.fieldTransforms)}function pg(n,e,t,r=!1){return En(t,n.wu(r?4:3,e))}function En(n,e){if(yg(n=$(n)))return ou("Unsupported field value:",e,n),_g(n,e);if(n instanceof In)return function(r,i){if(!mg(i.Tu))throw i.gu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.gu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.Ru&&e.Tu!==4)throw e.gu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let c=En(a,i.fu(o));c==null&&(c={nullValue:"NULL_VALUE"}),s.push(c),o++}return{arrayValue:{values:s}}}(n,e)}return function(r,i){if((r=$(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Kf(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Y.fromDate(r);return{timestampValue:Jn(i.serializer,s)}}if(r instanceof Y){const s=new Y(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Jn(i.serializer,s)}}if(r instanceof _o)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Ye)return{bytesValue:im(i.serializer,r._byteString)};if(r instanceof X){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.gu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Pc(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.gu(`Unsupported field value: ${po(r)}`)}(n,e)}function _g(n,e){const t={};return Sf(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):yn(n,(r,i)=>{const s=En(i,e.Au(r));s!=null&&(t[r]=s)}),{mapValue:{fields:t}}}function yg(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Y||n instanceof _o||n instanceof Ye||n instanceof X||n instanceof In)}function ou(n,e,t){if(!yg(t)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(t)){const r=po(t);throw r==="an object"?e.gu(n+" a custom object"):e.gu(n+" "+r)}}function xa(n,e,t){if((e=$(e))instanceof xt)return e._internalPath;if(typeof e=="string")return au(n,e);throw Ns("Field path arguments must be of type string or ",n,!1,void 0,t)}const sA=new RegExp("[~\\*/\\[\\]]");function au(n,e,t){if(e.search(sA)>=0)throw Ns(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new xt(...e.split("."))._internalPath}catch{throw Ns(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Ns(n,e,t,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;t&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new p(g.INVALID_ARGUMENT,a+n+c)}function Ig(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si{constructor(e,t,r,i,s){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new X(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new oA(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(vo("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class oA extends si{data(){return super.data()}}function vo(n,e){return typeof e=="string"?au(n,e):e instanceof xt?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vg(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new p(g.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class cu{}class Ni extends cu{}function gt(n,e,...t){let r=[];e instanceof cu&&r.push(e),r=r.concat(t),function(s){const o=s.filter(c=>c instanceof uu).length,a=s.filter(c=>c instanceof Eo).length;if(o>1||o>0&&a>0)throw new p(g.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)n=i._apply(n);return n}class Eo extends Ni{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new Eo(e,t,r)}_apply(e){const t=this._parse(e);return wg(e._query,t),new be(e.firestore,e.converter,Ea(e._query,t))}_parse(e){const t=vn(e.firestore);return function(s,o,a,c,u,l,h){let d;if(u.isKeyField()){if(l==="array-contains"||l==="array-contains-any")throw new p(g.INVALID_ARGUMENT,`Invalid Query. You can't perform '${l}' queries on documentId().`);if(l==="in"||l==="not-in"){ch(h,l);const f=[];for(const y of h)f.push(ah(c,s,y));d={arrayValue:{values:f}}}else d=ah(c,s,h)}else l!=="in"&&l!=="not-in"&&l!=="array-contains-any"||ch(h,l),d=pg(a,o,h,l==="in"||l==="not-in");return x.create(u,l,d)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function aA(n,e,t){const r=e,i=vo("where",n);return Eo._create(i,r,t)}class uu extends cu{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new uu(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:U.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const c of a)wg(o,c),o=Ea(o,c)}(e._query,t),new be(e.firestore,e.converter,Ea(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class lu extends Ni{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new lu(e,t)}_apply(e){const t=function(i,s,o){if(i.startAt!==null)throw new p(g.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new p(g.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const a=new $n(s,o);return function(u,l){if(vc(u)===null){const h=oo(u);h!==null&&Tg(u,h,l.field)}}(i,a),a}(e._query,this._field,this._direction);return new be(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new ct(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,t))}}function cA(n,e="asc"){const t=e,r=vo("orderBy",n);return lu._create(r,t)}class wo extends Ni{constructor(e,t,r){super(),this.type=e,this._limit=t,this._limitType=r}static _create(e,t,r){return new wo(e,t,r)}_apply(e){return new be(e.firestore,e.converter,As(e._query,this._limit,this._limitType))}}function uA(n){return rg("limit",n),wo._create("limit",n,"F")}function lA(n){return rg("limitToLast",n),wo._create("limitToLast",n,"L")}class To extends Ni{constructor(e,t,r){super(),this.type=e,this._docOrFields=t,this._inclusive=r}static _create(e,t,r){return new To(e,t,r)}_apply(e){const t=Eg(e,this.type,this._docOrFields,this._inclusive);return new be(e.firestore,e.converter,function(i,s){return new ct(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,s,i.endAt)}(e._query,t))}}function hA(...n){return To._create("startAt",n,!0)}function dA(...n){return To._create("startAfter",n,!1)}class Ao extends Ni{constructor(e,t,r){super(),this.type=e,this._docOrFields=t,this._inclusive=r}static _create(e,t,r){return new Ao(e,t,r)}_apply(e){const t=Eg(e,this.type,this._docOrFields,this._inclusive);return new be(e.firestore,e.converter,function(i,s){return new ct(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,i.startAt,s)}(e._query,t))}}function fA(...n){return Ao._create("endBefore",n,!1)}function mA(...n){return Ao._create("endAt",n,!0)}function Eg(n,e,t,r){if(t[0]=$(t[0]),t[0]instanceof si)return function(s,o,a,c,u){if(!c)throw new p(g.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${a}().`);const l=[];for(const h of jn(s))if(h.field.isKeyField())l.push(cn(o,c.key));else{const d=c.data.field(h.field);if(so(d))throw new p(g.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+h.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(d===null){const f=h.field.canonicalString();throw new p(g.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${f}' (used as the orderBy) does not exist.`)}l.push(d)}return new kt(l,u)}(n._query,n.firestore._databaseId,e,t[0]._document,r);{const i=vn(n.firestore);return function(o,a,c,u,l,h){const d=o.explicitOrderBy;if(l.length>d.length)throw new p(g.INVALID_ARGUMENT,`Too many arguments provided to ${u}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const f=[];for(let y=0;y<l.length;y++){const I=l[y];if(d[y].field.isKeyField()){if(typeof I!="string")throw new p(g.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${u}(), but got a ${typeof I}`);if(!Ec(o)&&I.indexOf("/")!==-1)throw new p(g.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${u}() must be a plain document ID, but '${I}' contains a slash.`);const v=o.path.child(M.fromString(I));if(!E.isDocumentKey(v))throw new p(g.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${u}() must result in a valid document path, but '${v}' is not because it contains an odd number of segments.`);const b=new E(v);f.push(cn(a,b))}else{const v=pg(c,u,I);f.push(v)}}return new kt(f,h)}(n._query,n.firestore._databaseId,i,e,t,r)}}function ah(n,e,t){if(typeof(t=$(t))=="string"){if(t==="")throw new p(g.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Ec(e)&&t.indexOf("/")!==-1)throw new p(g.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(M.fromString(t));if(!E.isDocumentKey(r))throw new p(g.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return cn(n,new E(r))}if(t instanceof X)return cn(n,t._key);throw new p(g.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${po(t)}.`)}function ch(n,e){if(!Array.isArray(n)||n.length===0)throw new p(g.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function wg(n,e){if(e.isInequality()){const r=oo(n),i=e.field;if(r!==null&&!r.isEqual(i))throw new p(g.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${r.toString()}' and '${i.toString()}'`);const s=vc(n);s!==null&&Tg(n,i,s)}const t=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(n.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new p(g.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new p(g.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}function Tg(n,e,t){if(!t.isEqual(e))throw new p(g.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${t.toString()}' instead.`)}class hu{convertValue(e,t="none"){switch(an(e)){case 0:return null;case 1:return e.booleanValue;case 2:return J(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Ct(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw A()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return yn(e,(i,s)=>{r[i]=this.convertValue(s,t)}),r}convertGeoPoint(e){return new _o(J(e.latitude),J(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=yc(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(Jr(e));default:return null}}convertTimestamp(e){const t=Pt(e);return new Y(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=M.fromString(e);S(mm(r));const i=new Dt(r.get(1),r.get(3)),s=new E(r.popFirst(5));return i.isEqual(t)||ne(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ro(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}class gA extends hu{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ye(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new X(this.firestore,null,t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}let at=class extends si{constructor(e,t,r,i,s,o){super(e,t,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Mr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(vo("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}},Mr=class extends at{data(e={}){return super.data(e)}},Ot=class{constructor(e,t,r,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new en(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new Mr(this._firestore,this._userDataWriter,r.key,r,new en(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new p(g.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const c=new Mr(i._firestore,i._userDataWriter,a.doc.key,a.doc,new en(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const c=new Mr(i._firestore,i._userDataWriter,a.doc.key,a.doc,new en(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let u=-1,l=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),l=o.indexOf(a.doc.key)),{type:pA(a.type),doc:c,oldIndex:u,newIndex:l}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}};function pA(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return A()}}function Ag(n,e){return n instanceof at&&e instanceof at?n._firestore===e._firestore&&n._key.isEqual(e._key)&&(n._document===null?e._document===null:n._document.isEqual(e._document))&&n._converter===e._converter:n instanceof Ot&&e instanceof Ot&&n._firestore===e._firestore&&ug(n.query,e.query)&&n.metadata.isEqual(e.metadata)&&n._snapshot.isEqual(e._snapshot)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _A(n){n=F(n,X);const e=F(n.firestore,te);return Zm(fe(e),n._key).then(t=>du(e,n,t))}class wn extends hu{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ye(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new X(this.firestore,null,t)}}function yA(n){n=F(n,X);const e=F(n.firestore,te),t=fe(e),r=new wn(e);return OT(t,n._key).then(i=>new at(e,r,n._key,i,new en(i!==null&&i.hasLocalMutations,!0),n.converter))}function IA(n){n=F(n,X);const e=F(n.firestore,te);return Zm(fe(e),n._key,{source:"server"}).then(t=>du(e,n,t))}function vA(n){n=F(n,be);const e=F(n.firestore,te),t=fe(e),r=new wn(e);return vg(n._query),eg(t,n._query).then(i=>new Ot(e,r,n,i))}function EA(n){n=F(n,be);const e=F(n.firestore,te),t=fe(e),r=new wn(e);return MT(t,n._query).then(i=>new Ot(e,r,n,i))}function wA(n){n=F(n,be);const e=F(n.firestore,te),t=fe(e),r=new wn(e);return eg(t,n._query,{source:"server"}).then(i=>new Ot(e,r,n,i))}function uh(n,e,t){n=F(n,X);const r=F(n.firestore,te),i=Ro(n.converter,e,t);return xi(r,[Io(vn(r),"setDoc",n._key,i,n.converter!==null,t).toMutation(n._key,Q.none())])}function lh(n,e,t,...r){n=F(n,X);const i=F(n.firestore,te),s=vn(i);let o;return o=typeof(e=$(e))=="string"||e instanceof xt?su(s,"updateDoc",n._key,e,t,r):iu(s,"updateDoc",n._key,e),xi(i,[o.toMutation(n._key,Q.exists(!0))])}function TA(n){return xi(F(n.firestore,te),[new lr(n._key,Q.none())])}function AA(n,e){const t=F(n.firestore,te),r=ks(n),i=Ro(n.converter,e);return xi(t,[Io(vn(n.firestore),"addDoc",r._key,i,n.converter!==null,{}).toMutation(r._key,Q.exists(!1))]).then(()=>r)}function Rg(n,...e){var t,r,i;n=$(n);let s={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||Na(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(Na(e[o])){const h=e[o];e[o]=(t=h.next)===null||t===void 0?void 0:t.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let c,u,l;if(n instanceof X)u=F(n.firestore,te),l=cr(n._key.path),c={next:h=>{e[o]&&e[o](du(u,n,h))},error:e[o+1],complete:e[o+2]};else{const h=F(n,be);u=F(h.firestore,te),l=h._query;const d=new wn(u);c={next:f=>{e[o]&&e[o](new Ot(u,d,h,f))},error:e[o+1],complete:e[o+2]},vg(n._query)}return function(d,f,y,I){const v=new mo(I),b=new zc(f,v,y);return d.asyncQueue.enqueueAndForget(async()=>$c(await rr(d),b)),()=>{v.La(),d.asyncQueue.enqueueAndForget(async()=>jc(await rr(d),b))}}(fe(u),l,a,c)}function RA(n,e){return LT(fe(n=F(n,te)),Na(e)?e:{next:e})}function xi(n,e){return function(r,i){const s=new ue;return r.asyncQueue.enqueueAndForget(async()=>hT(await tu(r),i,s)),s.promise}(fe(n),e)}function du(n,e,t){const r=t.docs.get(e._key),i=new wn(n);return new at(n,i,e._key,r,new en(t.hasPendingWrites,t.fromCache),e.converter)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SA={maxAttempts:5};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let bA=class{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=vn(e)}set(e,t,r){this._verifyNotCommitted();const i=vt(e,this._firestore),s=Ro(i.converter,t,r),o=Io(this._dataReader,"WriteBatch.set",i._key,s,i.converter!==null,r);return this._mutations.push(o.toMutation(i._key,Q.none())),this}update(e,t,r,...i){this._verifyNotCommitted();const s=vt(e,this._firestore);let o;return o=typeof(t=$(t))=="string"||t instanceof xt?su(this._dataReader,"WriteBatch.update",s._key,t,r,i):iu(this._dataReader,"WriteBatch.update",s._key,t),this._mutations.push(o.toMutation(s._key,Q.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=vt(e,this._firestore);return this._mutations=this._mutations.concat(new lr(t._key,Q.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new p(g.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}};function vt(n,e){if((n=$(n)).firestore!==e)throw new p(g.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let PA=class extends class{constructor(t,r){this._firestore=t,this._transaction=r,this._dataReader=vn(t)}get(t){const r=vt(t,this._firestore),i=new gA(this._firestore);return this._transaction.lookup([r._key]).then(s=>{if(!s||s.length!==1)return A();const o=s[0];if(o.isFoundDocument())return new si(this._firestore,i,o.key,o,r.converter);if(o.isNoDocument())return new si(this._firestore,i,r._key,null,r.converter);throw A()})}set(t,r,i){const s=vt(t,this._firestore),o=Ro(s.converter,r,i),a=Io(this._dataReader,"Transaction.set",s._key,o,s.converter!==null,i);return this._transaction.set(s._key,a),this}update(t,r,i,...s){const o=vt(t,this._firestore);let a;return a=typeof(r=$(r))=="string"||r instanceof xt?su(this._dataReader,"Transaction.update",o._key,r,i,s):iu(this._dataReader,"Transaction.update",o._key,r),this._transaction.update(o._key,a),this}delete(t){const r=vt(t,this._firestore);return this._transaction.delete(r._key),this}}{constructor(e,t){super(e,t),this._firestore=e}get(e){const t=vt(e,this._firestore),r=new wn(this._firestore);return super.get(e).then(i=>new at(this._firestore,r,t._key,i._document,new en(!1,!1),t.converter))}};function CA(n,e,t){n=F(n,te);const r=Object.assign(Object.assign({},SA),t);return function(s){if(s.maxAttempts<1)throw new p(g.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(s,o,a){const c=new ue;return s.asyncQueue.enqueueAndForget(async()=>{const u=await kT(s);new DT(s.asyncQueue,u,a,o,c).run()}),c.promise}(fe(n),i=>e(new PA(n,i)),r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DA(){return new ki("deleteField")}function VA(){return new ru("serverTimestamp")}function kA(...n){return new nA("arrayUnion",n)}function NA(...n){return new rA("arrayRemove",n)}function xA(n){return new iA("increment",n)}(function(e,t=!0){(function(i){ar=i})(Mt),St(new it("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new te(new qv(r.getProvider("auth-internal")),new zv(r.getProvider("app-check-internal")),function(u,l){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new p(g.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Dt(u.options.projectId,l)}(o,i),o);return s=Object.assign({useFetchStreams:t},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),Le(il,"4.2.0",e),Le(il,"4.2.0","esm2017")})();const OA="@firebase/firestore-compat",MA="0.3.18";/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fu(n,e){if(e===void 0)return{merge:!1};if(e.mergeFields!==void 0&&e.merge!==void 0)throw new p("invalid-argument",`Invalid options passed to function ${n}(): You cannot specify both "merge" and "mergeFields".`);return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hh(){if(typeof Uint8Array>"u")throw new p("unimplemented","Uint8Arrays are not available in this environment.")}function dh(){if(!pE())throw new p("unimplemented","Blobs are unavailable in Firestore in this environment.")}class oi{constructor(e){this._delegate=e}static fromBase64String(e){return dh(),new oi(Ye.fromBase64String(e))}static fromUint8Array(e){return hh(),new oi(Ye.fromUint8Array(e))}toBase64(){return dh(),this._delegate.toBase64()}toUint8Array(){return hh(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oa(n){return LA(n,["next","error","complete"])}function LA(n,e){if(typeof n!="object"||n===null)return!1;const t=n;for(const r of e)if(r in t&&typeof t[r]=="function")return!0;return!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FA{enableIndexedDbPersistence(e,t){return zT(e._delegate,{forceOwnership:t})}enableMultiTabIndexedDbPersistence(e){return KT(e._delegate)}clearIndexedDbPersistence(e){return WT(e._delegate)}}class Sg{constructor(e,t,r){this._delegate=t,this._persistenceProvider=r,this.INTERNAL={delete:()=>this.terminate()},e instanceof Dt||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const t=this._delegate._getSettings();!e.merge&&t.host!==e.host&&Ue("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&(e=Object.assign(Object.assign({},t),e),delete e.merge),this._delegate._setSettings(e)}useEmulator(e,t,r={}){BT(this._delegate,e,t,r)}enableNetwork(){return QT(this._delegate)}disableNetwork(){return YT(this._delegate)}enablePersistence(e){let t=!1,r=!1;return e&&(t=!!e.synchronizeTabs,r=!!e.experimentalForceOwningTab,ng("synchronizeTabs",t,"experimentalForceOwningTab",r)),t?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,r)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return HT(this._delegate)}onSnapshotsInSync(e){return RA(this._delegate,e)}get app(){if(!this._appCompat)throw new p("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new ir(this,ag(this._delegate,e))}catch(t){throw Te(t,"collection()","Firestore.collection()")}}doc(e){try{return new Oe(this,ks(this._delegate,e))}catch(t){throw Te(t,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new we(this,qT(this._delegate,e))}catch(t){throw Te(t,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return CA(this._delegate,t=>e(new bg(this,t)))}batch(){return fe(this._delegate),new Pg(new bA(this._delegate,e=>xi(this._delegate,e)))}loadBundle(e){return XT(this._delegate,e)}namedQuery(e){return JT(this._delegate,e).then(t=>t?new we(this,t):null)}}class So extends hu{constructor(e){super(),this.firestore=e}convertBytes(e){return new oi(new Ye(e))}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return Oe.forKey(t,this.firestore,null)}}function UA(n){Lv(n)}class bg{constructor(e,t){this._firestore=e,this._delegate=t,this._userDataWriter=new So(e)}get(e){const t=tn(e);return this._delegate.get(t).then(r=>new ai(this._firestore,new at(this._firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,t.converter)))}set(e,t,r){const i=tn(e);return r?(fu("Transaction.set",r),this._delegate.set(i,t,r)):this._delegate.set(i,t),this}update(e,t,r,...i){const s=tn(e);return arguments.length===2?this._delegate.update(s,t):this._delegate.update(s,t,r,...i),this}delete(e){const t=tn(e);return this._delegate.delete(t),this}}class Pg{constructor(e){this._delegate=e}set(e,t,r){const i=tn(e);return r?(fu("WriteBatch.set",r),this._delegate.set(i,t,r)):this._delegate.set(i,t),this}update(e,t,r,...i){const s=tn(e);return arguments.length===2?this._delegate.update(s,t):this._delegate.update(s,t,r,...i),this}delete(e){const t=tn(e);return this._delegate.delete(t),this}commit(){return this._delegate.commit()}}class gn{constructor(e,t,r){this._firestore=e,this._userDataWriter=t,this._delegate=r}fromFirestore(e,t){const r=new Mr(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new ci(this._firestore,r),t??{})}toFirestore(e,t){return t?this._delegate.toFirestore(e,t):this._delegate.toFirestore(e)}static getInstance(e,t){const r=gn.INSTANCES;let i=r.get(e);i||(i=new WeakMap,r.set(e,i));let s=i.get(t);return s||(s=new gn(e,new So(e),t),i.set(t,s)),s}}gn.INSTANCES=new WeakMap;class Oe{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new So(e)}static forPath(e,t,r){if(e.length%2!==0)throw new p("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new Oe(t,new X(t._delegate,r,new E(e)))}static forKey(e,t,r){return new Oe(t,new X(t._delegate,r,e))}get id(){return this._delegate.id}get parent(){return new ir(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new ir(this.firestore,ag(this._delegate,e))}catch(t){throw Te(t,"collection()","DocumentReference.collection()")}}isEqual(e){return e=$(e),e instanceof X?cg(this._delegate,e):!1}set(e,t){t=fu("DocumentReference.set",t);try{return t?uh(this._delegate,e,t):uh(this._delegate,e)}catch(r){throw Te(r,"setDoc()","DocumentReference.set()")}}update(e,t,...r){try{return arguments.length===1?lh(this._delegate,e):lh(this._delegate,e,t,...r)}catch(i){throw Te(i,"updateDoc()","DocumentReference.update()")}}delete(){return TA(this._delegate)}onSnapshot(...e){const t=Cg(e),r=Dg(e,i=>new ai(this.firestore,new at(this.firestore._delegate,this._userDataWriter,i._key,i._document,i.metadata,this._delegate.converter)));return Rg(this._delegate,t,r)}get(e){let t;return(e==null?void 0:e.source)==="cache"?t=yA(this._delegate):(e==null?void 0:e.source)==="server"?t=IA(this._delegate):t=_A(this._delegate),t.then(r=>new ai(this.firestore,new at(this.firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,this._delegate.converter)))}withConverter(e){return new Oe(this.firestore,e?this._delegate.withConverter(gn.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function Te(n,e,t){return n.message=n.message.replace(e,t),n}function Cg(n){for(const e of n)if(typeof e=="object"&&!Oa(e))return e;return{}}function Dg(n,e){var t,r;let i;return Oa(n[0])?i=n[0]:Oa(n[1])?i=n[1]:typeof n[0]=="function"?i={next:n[0],error:n[1],complete:n[2]}:i={next:n[1],error:n[2],complete:n[3]},{next:s=>{i.next&&i.next(e(s))},error:(t=i.error)===null||t===void 0?void 0:t.bind(i),complete:(r=i.complete)===null||r===void 0?void 0:r.bind(i)}}class ai{constructor(e,t){this._firestore=e,this._delegate=t}get ref(){return new Oe(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,t){return this._delegate.get(e,t)}isEqual(e){return Ag(this._delegate,e._delegate)}}class ci extends ai{data(e){const t=this._delegate.data(e);return Fv(t!==void 0),t}}class we{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new So(e)}where(e,t,r){try{return new we(this.firestore,gt(this._delegate,aA(e,t,r)))}catch(i){throw Te(i,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,t){try{return new we(this.firestore,gt(this._delegate,cA(e,t)))}catch(r){throw Te(r,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new we(this.firestore,gt(this._delegate,uA(e)))}catch(t){throw Te(t,"limit()","Query.limit()")}}limitToLast(e){try{return new we(this.firestore,gt(this._delegate,lA(e)))}catch(t){throw Te(t,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new we(this.firestore,gt(this._delegate,hA(...e)))}catch(t){throw Te(t,"startAt()","Query.startAt()")}}startAfter(...e){try{return new we(this.firestore,gt(this._delegate,dA(...e)))}catch(t){throw Te(t,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new we(this.firestore,gt(this._delegate,fA(...e)))}catch(t){throw Te(t,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new we(this.firestore,gt(this._delegate,mA(...e)))}catch(t){throw Te(t,"endAt()","Query.endAt()")}}isEqual(e){return ug(this._delegate,e._delegate)}get(e){let t;return(e==null?void 0:e.source)==="cache"?t=EA(this._delegate):(e==null?void 0:e.source)==="server"?t=wA(this._delegate):t=vA(this._delegate),t.then(r=>new Ma(this.firestore,new Ot(this.firestore._delegate,this._userDataWriter,this._delegate,r._snapshot)))}onSnapshot(...e){const t=Cg(e),r=Dg(e,i=>new Ma(this.firestore,new Ot(this.firestore._delegate,this._userDataWriter,this._delegate,i._snapshot)));return Rg(this._delegate,t,r)}withConverter(e){return new we(this.firestore,e?this._delegate.withConverter(gn.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class BA{constructor(e,t){this._firestore=e,this._delegate=t}get type(){return this._delegate.type}get doc(){return new ci(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class Ma{constructor(e,t){this._firestore=e,this._delegate=t}get query(){return new we(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map(e=>new ci(this._firestore,e))}docChanges(e){return this._delegate.docChanges(e).map(t=>new BA(this._firestore,t))}forEach(e,t){this._delegate.forEach(r=>{e.call(t,new ci(this._firestore,r))})}isEqual(e){return Ag(this._delegate,e._delegate)}}class ir extends we{constructor(e,t){super(e,t),this.firestore=e,this._delegate=t}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new Oe(this.firestore,e):null}doc(e){try{return e===void 0?new Oe(this.firestore,ks(this._delegate)):new Oe(this.firestore,ks(this._delegate,e))}catch(t){throw Te(t,"doc()","CollectionReference.doc()")}}add(e){return AA(this._delegate,e).then(t=>new Oe(this.firestore,t))}isEqual(e){return cg(this._delegate,e._delegate)}withConverter(e){return new ir(this.firestore,e?this._delegate.withConverter(gn.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function tn(n){return F(n,X)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mu{constructor(...e){this._delegate=new xt(...e)}static documentId(){return new mu(Z.keyField().canonicalString())}isEqual(e){return e=$(e),e instanceof xt?this._delegate._internalPath.isEqual(e._internalPath):!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt{constructor(e){this._delegate=e}static serverTimestamp(){const e=VA();return e._methodName="FieldValue.serverTimestamp",new Xt(e)}static delete(){const e=DA();return e._methodName="FieldValue.delete",new Xt(e)}static arrayUnion(...e){const t=kA(...e);return t._methodName="FieldValue.arrayUnion",new Xt(t)}static arrayRemove(...e){const t=NA(...e);return t._methodName="FieldValue.arrayRemove",new Xt(t)}static increment(e){const t=xA(e);return t._methodName="FieldValue.increment",new Xt(t)}isEqual(e){return this._delegate.isEqual(e._delegate)}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qA={Firestore:Sg,GeoPoint:_o,Timestamp:Y,Blob:oi,Transaction:bg,WriteBatch:Pg,DocumentReference:Oe,DocumentSnapshot:ai,Query:we,QueryDocumentSnapshot:ci,QuerySnapshot:Ma,CollectionReference:ir,FieldPath:mu,FieldValue:Xt,setLogLevel:UA,CACHE_SIZE_UNLIMITED:GT};function $A(n,e){n.INTERNAL.registerComponent(new it("firestore-compat",t=>{const r=t.getProvider("app-compat").getImmediate(),i=t.getProvider("firestore").getImmediate();return e(r,i)},"PUBLIC").setServiceProps(Object.assign({},qA)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jA(n){$A(n,(e,t)=>new Sg(e,t,new FA)),n.registerVersion(OA,MA)}jA(Vh);function GA(n){let e,t,r,i='<a href="#" class="-m-1.5 p-1.5"><img class="h-16 w-auto" src="https://firebasestorage.googleapis.com/v0/b/beebop-64a63.appspot.com/o/beebop-icon.png?alt=media&amp;token=3209615a-9849-4922-af8a-58065a833604" alt=""/></a>',s,o,a,c="Login",u,l,h='<div class="relative"><div class="mx-auto max-w-2xl pt-72 lg:pt-80"><div class="text-center"><img class="h-auto w-auto" src="https://firebasestorage.googleapis.com/v0/b/beebop-64a63.appspot.com/o/beebopLogo-white.png?alt=media&amp;token=173fc094-a3b2-4a02-8829-bcb62bc0cf57" alt=""/> <div class="mt-10 flex bottom-0 items-center justify-center gap-x-6"><a href="/children" class="rounded-md bg-amber-300 px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-black hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">Get started</a></div></div></div></div>',d,f;return{c(){e=Tn("header"),t=Tn("nav"),r=Tn("div"),r.innerHTML=i,s=gu(),o=Tn("div"),a=Tn("button"),a.textContent=c,u=gu(),l=Tn("div"),l.innerHTML=h,this.h()},l(y){e=An(y,"HEADER",{class:!0});var I=Po(e);t=An(I,"NAV",{class:!0,"aria-label":!0});var v=Po(t);r=An(v,"DIV",{class:!0,"data-svelte-h":!0}),Co(r)!=="svelte-42beff"&&(r.innerHTML=i),s=pu(v),o=An(v,"DIV",{class:!0});var b=Po(o);a=An(b,"BUTTON",{class:!0,"data-svelte-h":!0}),Co(a)!=="svelte-1cy9yv6"&&(a.textContent=c),b.forEach(Rn),v.forEach(Rn),I.forEach(Rn),u=pu(y),l=An(y,"DIV",{class:!0,"data-svelte-h":!0}),Co(l)!=="svelte-1d7ovbk"&&(l.innerHTML=h),this.h()},h(){jt(r,"class","flex lg:flex-1"),jt(a,"class","rounded-md bg-amber-300 px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-black hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"),jt(o,"class","lg:flex lg:flex-1 lg:justify-end"),jt(t,"class","flex items-center justify-between p-6 lg:px-8"),jt(t,"aria-label","Global"),jt(e,"class","absolute inset-x-0 op-0 z-50"),jt(l,"class","home-bg bg-babypic1 bg-cover bg-center h-screen")},m(y,I){Do(y,e,I),pr(e,t),pr(t,r),pr(t,s),pr(t,o),pr(o,a),Do(y,u,I),Do(y,l,I),d||(f=xg(a,"click",Og(n[0])),d=!0)},p:bo,i:bo,o:bo,d(y){y&&(Rn(e),Rn(u),Rn(l)),d=!1,f()}}}function zA(n){async function e(){try{await By(CI,DI)}catch(t){console.log(t)}}return[e]}class aR extends kg{constructor(e){super(),Ng(this,e,zA,GA,Vg,{})}}export{aR as component};
