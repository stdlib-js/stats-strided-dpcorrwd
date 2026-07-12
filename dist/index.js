"use strict";var w=function(r,a){return function(){try{return a||r((a={exports:{}}).exports,a),a.exports}catch(e){throw (a=0, e)}};};var j=w(function(S,E){
var C=require('@stdlib/math-base-special-sqrt/dist'),B=require('@stdlib/math-base-special-clamp/dist');function D(r,a,e,c,v,y,p){var t,u,x,f,s,n,o,d,q,M,R,m,_,i;if(r<=0)return NaN;for(d=c,q=p,m=0,o=0,n=0,t=0,u=0,i=0;i<r;i++)s=a[d]-o,o+=s/(i+1),t+=s*(a[d]-o),x=v[q]-n,n+=x/(i+1),f=v[q]-n,u+=f*x,m+=s*f,d+=e,q+=y;return t===0||u===0?NaN:(M=C(t/r),R=C(u/r),_=m/r/(M*R),B(_,-1,1))}E.exports=D
});var g=w(function(T,b){
var O=require('@stdlib/strided-base-stride2offset/dist'),F=j();function G(r,a,e,c,v){var y=O(r,e),p=O(r,v);return F(r,a,e,y,c,v,p)}b.exports=G
});var z=w(function(U,k){
var H=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),h=g(),I=j();H(h,"ndarray",I);k.exports=h
});var J=require("path").join,K=require('@stdlib/utils-try-require/dist'),L=require('@stdlib/assert-is-error/dist'),P=z(),l,A=K(J(__dirname,"./native.js"));L(A)?l=P:l=A;module.exports=l;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
