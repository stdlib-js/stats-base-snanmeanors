"use strict";var v=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var o=v(function(w,c){
var m=require('@stdlib/number-float64-base-to-float32/dist');function R(e,r,a,f){var n,t,i,s,u;if(e<=0)return NaN;if(e===1||a===0)return r[f];for(t=f,n=0,s=0,u=0;u<e;u++)i=r[t],i===i&&(n=m(n+i),s+=1),t+=a;return s===0?NaN:m(n/s)}c.exports=R
});var y=v(function(z,p){
var _=require('@stdlib/strided-base-stride2offset/dist'),E=o();function F(e,r,a){return E(e,r,a,_(e,a))}p.exports=F
});var x=v(function(A,l){
var N=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),d=y(),O=o();N(d,"ndarray",O);l.exports=d
});var T=require("path").join,b=require('@stdlib/utils-try-require/dist'),g=require('@stdlib/assert-is-error/dist'),h=x(),q,j=b(T(__dirname,"./native.js"));g(j)?q=h:q=j;module.exports=q;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
