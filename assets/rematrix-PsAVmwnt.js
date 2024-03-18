/*! @license Rematrix v0.3.0

	Copyright 2018 Julian Lloyd.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in
	all copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	THE SOFTWARE.
*/function o(r){if(r.constructor!==Array)throw new TypeError("Expected array.");if(r.length===16)return r;if(r.length===6){var t=n();return t[0]=r[0],t[1]=r[1],t[4]=r[2],t[5]=r[3],t[12]=r[4],t[13]=r[5],t}throw new RangeError("Expected array with either 6 or 16 values.")}function n(){for(var r=[],t=0;t<16;t++)t%5==0?r.push(1):r.push(0);return r}function M(r,t){for(var a=o(r),f=o(t),p=[],e=0;e<4;e++)for(var h=[a[e],a[e+4],a[e+8],a[e+12]],u=0;u<4;u++){var v=u*4,i=[f[v],f[v+1],f[v+2],f[v+3]],s=h[0]*i[0]+h[1]*i[1]+h[2]*i[2]+h[3]*i[3];p[e+v]=s}return p}function m(r){if(typeof r=="string"){var t=r.match(/matrix(3d)?\(([^)]+)\)/);if(t){var a=t[2].split(", ").map(parseFloat);return o(a)}}return n()}function y(r){var t=Math.PI/180*r,a=n();return a[5]=a[10]=Math.cos(t),a[6]=a[9]=Math.sin(t),a[9]*=-1,a}function x(r){var t=Math.PI/180*r,a=n();return a[0]=a[10]=Math.cos(t),a[2]=a[8]=Math.sin(t),a[2]*=-1,a}function c(r){var t=Math.PI/180*r,a=n();return a[0]=a[5]=Math.cos(t),a[1]=a[4]=Math.sin(t),a[4]*=-1,a}function d(r,t){var a=n();return a[0]=r,a[5]=typeof t=="number"?t:r,a}function l(r){var t=n();return t[12]=r,t}function g(r){var t=n();return t[13]=r,t}export{x as a,c as b,l as c,M as m,m as p,y as r,d as s,g as t};
