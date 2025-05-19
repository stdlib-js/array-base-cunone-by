"use strict";var d=function(a,r){return function(){return r||a((r={exports:{}}).exports,r),r.exports}};var f=d(function(z,y){
var q=require('@stdlib/array-base-arraylike2object/dist');function P(a,r,i,n,o,c){var e,s,t;for(e=!0,s=n,t=0;t<a.length;t++)e&&o.call(c,a[t],t,a)&&(e=!1),r[s]=e,s+=i;return r}function b(a,r,i,n,o,c){var e,s,t,g,l,u,v;for(e=a.data,s=r.data,t=a.accessors[0],g=r.accessors[1],u=n,l=!0,v=0;v<e.length;v++)l&&o.call(c,t(e,v),v,e)&&(l=!1),g(s,u,l),u+=i;return s}function j(a,r,i,n,o,c){var e,s;return e=q(a),s=q(r),e.accessorProtocol||s.accessorProtocol?(b(e,s,i,n,o,c),r):(P(a,r,i,n,o,c),r)}y.exports=j
});var p=d(function(C,h){
var k=require('@stdlib/array-base-filled/dist'),m=f();function B(a,r,i){var n=k(!1,a.length);return m(a,n,1,0,r,i)}h.exports=B
});var O=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),x=p(),R=f();O(x,"assign",R);module.exports=x;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
