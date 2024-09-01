"use strict";var o=function(r,a){return function(){return a||r((a={exports:{}}).exports,a),a.exports}};var l=o(function(k,m){
var q=require('@stdlib/number-float64-base-to-float32/dist');function R(r,a,t){var v,e,i,n,u;if(r<=0)return NaN;if(r===1||t===0)return a[0];for(t<0?e=(1-r)*t:e=0,v=0,n=0,u=0;u<r;u++)i=a[e],i===i&&(v=q(v+i),n+=1),e+=t;return n===0?NaN:q(v/n)}m.exports=R
});var x=o(function(w,p){
var c=require('@stdlib/number-float64-base-to-float32/dist');function T(r,a,t,v){var e,i,n,u,s;if(r<=0)return NaN;if(r===1||t===0)return a[v];for(i=v,e=0,u=0,s=0;s<r;s++)n=a[i],n===n&&(e=c(e+n),u+=1),i+=t;return u===0?NaN:c(e/u)}p.exports=T
});var N=o(function(z,j){
var _=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),y=l(),E=x();_(y,"ndarray",E);j.exports=y
});var O=require("path").join,b=require('@stdlib/utils-try-require/dist'),d=require('@stdlib/assert-is-error/dist'),g=N(),f,F=b(O(__dirname,"./native.js"));d(F)?f=g:f=F;module.exports=f;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
