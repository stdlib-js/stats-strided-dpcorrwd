"use strict";var w=function(r,a){return function(){return a||r((a={exports:{}}).exports,a),a.exports}};var j=w(function(S,E){
var C=require('@stdlib/math-base-special-sqrt/dist'),B=require('@stdlib/math-base-special-clamp/dist');function D(r,a,i,c,e,y,p){var t,u,x,f,s,n,o,d,q,M,R,m,_,v;if(r<=0)return NaN;for(d=c,q=p,m=0,o=0,n=0,t=0,u=0,v=0;v<r;v++)s=a[d]-o,o+=s/(v+1),t+=s*(a[d]-o),x=e[q]-n,n+=x/(v+1),f=e[q]-n,u+=f*x,m+=s*f,d+=i,q+=y;return t===0||u===0?NaN:(M=C(t/r),R=C(u/r),_=m/r/(M*R),B(_,-1,1))}E.exports=D
});var g=w(function(T,b){
var O=require('@stdlib/strided-base-stride2offset/dist'),F=j();function G(r,a,i,c,e){var y=O(r,i),p=O(r,e);return F(r,a,i,y,c,e,p)}b.exports=G
});var z=w(function(U,k){
var H=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),h=g(),I=j();H(h,"ndarray",I);k.exports=h
});var J=require("path").join,K=require('@stdlib/utils-try-require/dist'),L=require('@stdlib/assert-is-error/dist'),P=z(),l,A=K(J(__dirname,"./native.js"));L(A)?l=P:l=A;module.exports=l;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
